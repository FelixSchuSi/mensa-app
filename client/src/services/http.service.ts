import { sleep } from '../helpers/sleep';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';

interface HttpServiceConfig {
  baseURL: string;
}

type connectionStatusListener = (syncState: ConnectionStatus) => void;

// Is regular array but type protectes myself
// from using wrong methods such as pop().
interface NetworkQueue {
  shift(): Request | undefined;
  push(...items: Request[]): number;
  length: number;
}

class HttpService {
  private cache!: Cache;
  private queue: NetworkQueue = [];
  private requestReplayLock: Promise<void> = Promise.resolve();
  private connectionStatusListeners: connectionStatusListener[] = [];

  constructor(private config: HttpServiceConfig) {
    window.addEventListener('offline', () => {
      console.log('📵 offline');
      this.connectionStatusListeners.forEach(listener => listener(ConnectionStatus.OFFLINE));
    });
    window.addEventListener('online', async () => {
      console.log('starting sync');
      this.connectionStatusListeners.forEach(listener => listener(ConnectionStatus.SYNCING));
      await Promise.all([this.replayRequests(), sleep(1500)]); // show syncing for at least 1,5 secs
      this.connectionStatusListeners.forEach(listener => listener(ConnectionStatus.ONLINE));
      console.log('finished sync -> online');
      await sleep(1500); // show online for 1,5 secs
      this.connectionStatusListeners.forEach(listener => listener(ConnectionStatus.BASESTATE));
    });
  }

  public async get(url: string): Promise<Response> {
    return this.createFetch('GET', url);
  }

  public post(url: string, body: unknown): Promise<Response> {
    return this.createFetch('POST', url, body);
  }

  public put(url: string, body: unknown): Promise<Response> {
    return this.createFetch('PUT', url, body);
  }

  public patch(url: string, body: unknown): Promise<Response> {
    return this.createFetch('PATCH', url, body);
  }

  public delete(url: string): Promise<Response> {
    return this.createFetch('DELETE', url);
  }

  private async createFetch(method: string, url: string, body?: unknown): Promise<Response> {
    await this.requestReplayLock;

    const request: Request = this.buildRequest(method, url, body);

    const response: Response = request.method === 'GET' ? await fetch(request) : await this.bgSync(request);
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

  // private async networkFirst(request: Request): Promise<Response> {
  //   const NO_INTERNET = { message: 'Es konnte keine Verbindung hergestellt werden', statusCode: 503 };
  //   if (navigator.onLine) {
  //     const response = await fetch(request);
  //     if (response.ok) await this.cache.put(request, response.clone());
  //     return response;
  //   } else {
  //     console.log('returning from network cache');
  //     const cacheResult = await this.cache.match(request);
  //     if (cacheResult === undefined) return Promise.reject(NO_INTERNET);
  //     return cacheResult;
  //   }
  // }

  private async bgSync(request: Request): Promise<Response> {
    if (navigator.onLine) {
      return await fetch(request);
    } else {
      console.log('putting request in network queue');
      this.queue.push(request);
      return Promise.reject({ message: '_ignoreMe' });
    }
  }

  private async replayRequests(): Promise<void> {
    this.requestReplayLock = new Promise(() => {});
    if (this.queue.length > 0) {
      while (this.queue.length > 0) {
        const request: Request = this.queue.shift()!;
        // TODO: Error handling
        await fetch(request);
      }
    }
    this.requestReplayLock = Promise.resolve();
  }

  public subscribeConnectionStatus(listener: connectionStatusListener): void {
    this.connectionStatusListeners.push(listener);
  }
}

const ISPROD = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD
  ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/'
  : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
