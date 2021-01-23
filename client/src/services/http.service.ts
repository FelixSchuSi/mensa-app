import { defautOnSyncFail } from '../helpers/default-on-sync-fail';
import { storeService } from './store.service';

interface HttpServiceConfig {
  baseURL: string;
}
// Is regular array but type protectes myself
// from using wrong methods such as pop().
interface NetworkQueue {
  shift(): { request: Request; onSyncFail: () => void } | undefined;
  push(...items: { request: Request; onSyncFail: () => void }[]): number;
  length: number;
}

class HttpService {
  private queue: NetworkQueue = [];
  private requestReplayLock: Promise<void> = Promise.resolve();

  constructor(private config: HttpServiceConfig) {}

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
    this.requestReplayLock = new Promise(() => {});
    if (this.queue.length > 0) {
      while (this.queue.length > 0) {
        const { request, onSyncFail } = this.queue.shift()!;
        try {
          await fetch(request);
        } catch (e) {
          console.log('error during sync: ' + e);
          await onSyncFail();
        }
      }
    }
    this.requestReplayLock = Promise.resolve();
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

    const request: Request = this.buildRequest(method, url, body);

    const response: Response = request.method === 'GET' ? await fetch(request) : await this.bgSync(request, onSyncFail);
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
  private buildRequest(method: string, url: string, body?: unknown): Request {
    const requestInit: RequestInit = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: method,
      credentials: 'include'
    };

    if (body) {
      requestInit.body = JSON.stringify(body);
    }
    return new Request(this.config.baseURL + url, requestInit);
  }

  private async bgSync(request: Request, onSyncFail?: () => void): Promise<Response> {
    if (navigator.onLine) {
      return fetch(request);
    } else {
      console.log('putting request in network queue');
      const syncFail = onSyncFail === undefined ? defautOnSyncFail : onSyncFail;
      this.queue.push({ request, onSyncFail: syncFail });
      return Promise.reject({ message: '_offline' });
    }
  }
}

const ISPROD = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD ? 'https://api.mensa-app.dub-services.de/api/' : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
