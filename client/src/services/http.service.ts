import { defautOnSyncFail } from '../helpers/default-on-sync-fail';
import { connectionStatusService } from './connection-status.service';
import { storeService } from './store.service';

interface HttpServiceConfig {
  baseURL: string;
}

interface FullRequestInit {
  url: string;
  requestInit: RequestInit;
  onSyncFail: string;
}

// Is regular array but type protectes myself
// from using wrong methods such as pop().
interface RequestQueue {
  shift(): FullRequestInit | undefined;
  push(...items: FullRequestInit[]): number;
  length: number;
}

class HttpService {
  private requestReplayLock: Promise<void> = Promise.resolve();
  private QUEUEKEY = 'REQUEST_QUEUE';

  constructor(private config: HttpServiceConfig) {
    this.getRequestQueue().then(queue => {
      console.log(queue);
      if (queue && queue.length > 0) {
        connectionStatusService.onOnline();
      }
    });
  }

  public async get(url: string, onSyncFail?: () => void): Promise<Response> {
    return this.createFetch('GET', url, { onSyncFail });
  }

  public post(url: string, body: unknown, onSyncFail?: () => void): Promise<Response> {
    return this.createFetch('POST', url, { body, onSyncFail });
  }

  public put(url: string, body: unknown, onSyncFail?: () => void): Promise<Response> {
    return this.createFetch('PUT', url, { body, onSyncFail });
  }

  public patch(url: string, body: unknown, onSyncFail?: () => void): Promise<Response> {
    return this.createFetch('PATCH', url, { body, onSyncFail });
  }

  public delete(url: string, onSyncFail?: () => void): Promise<Response> {
    return this.createFetch('DELETE', url, { onSyncFail });
  }
  public async replayRequests(): Promise<void> {
    let resolver: () => void = () => {};
    this.requestReplayLock = new Promise(resolve => {
      resolver = resolve;
    });
    let queue: RequestQueue = await this.getRequestQueue();
    if (queue.length > 0) {
      while (queue.length > 0) {
        const { url, requestInit, onSyncFail } = queue.shift()!;
        try {
          await fetch(new Request(url, requestInit));
        } catch (e) {
          await defautOnSyncFail();
        }
        await this.setRequestQueue(queue);
      }
    }
    resolver();
  }

  public getBaseURL(): string {
    return this.config.baseURL;
  }
  private async createFetch(
    method: string,
    url: string,
    { body, onSyncFail }: { body?: unknown; onSyncFail?: () => void } = { onSyncFail: () => {} }
  ): Promise<Response> {
    await this.requestReplayLock;

    const fullRequestInit: FullRequestInit = this.buildFullRequestInit(method, url, body, onSyncFail);
    const request: Request = new Request(fullRequestInit.url, fullRequestInit.requestInit);

    const response: Response = method === 'GET' ? await fetch(request) : await this.bgSync(fullRequestInit);

    if (response.ok) {
      return response;
    } else {
      let message: string = await response.text();
      try {
        message = JSON.parse(message).message;
        // eslint-disable-next-line no-empty
      } catch (e) {}
      message = message || response.statusText;
      return Promise.reject({ message, statusCode: response.status });
    }
  }
  private buildFullRequestInit(method: string, url: string, body?: unknown, onSyncFail?: () => void): FullRequestInit {
    const requestInit: RequestInit = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: method,
      credentials: 'include'
    };

    if (body) {
      requestInit.body = JSON.stringify(body);
    }

    const fullRequestInit: FullRequestInit = {
      url: this.config.baseURL + url,
      onSyncFail: onSyncFail ? onSyncFail.toString() : defautOnSyncFail.toString(),
      requestInit
    };
    return fullRequestInit;
  }

  private async bgSync(fullRequestInit: FullRequestInit): Promise<Response> {
    if (navigator.onLine) {
      const { url, requestInit } = fullRequestInit;
      return fetch(new Request(url, requestInit));
    } else {
      console.log('putting request in network queue');
      const rq: RequestQueue = await this.getRequestQueue();
      rq.push(fullRequestInit);
      await this.setRequestQueue(rq);
      return Promise.reject({ message: '_offline' });
    }
  }

  private async getRequestQueue(): Promise<RequestQueue> {
    const fromStorage = <RequestQueue | undefined>await storeService.get(this.QUEUEKEY);
    return fromStorage ?? [];
  }

  private async setRequestQueue(queue: RequestQueue): Promise<void> {
    await storeService.set(this.QUEUEKEY, queue);
  }
}

const ISPROD = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD ? 'https://api.mensa-app.dub-services.de/api/' : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
