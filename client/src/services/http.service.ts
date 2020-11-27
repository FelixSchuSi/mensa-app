interface HttpServiceConfig {
  baseURL: string;
}
// Is regular array but type protectes myself
// from using wrong methods such as pop().
interface NetworkQueue {
  shift(): Request | undefined;
  push(...items: Request[]): number;
  length: number;
}

class HttpService {
  private queue: NetworkQueue = [];
  private requestReplayLock: Promise<void> = Promise.resolve();

  constructor(private config: HttpServiceConfig) {}

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

  private async bgSync(request: Request): Promise<Response> {
    if (navigator.onLine) {
      return await fetch(request);
    } else {
      console.log('putting request in network queue');
      this.queue.push(request);
      return Promise.reject({ message: '_ignoreMe' });
    }
  }

  public async replayRequests(): Promise<void> {
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
}

const ISPROD = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD
  ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/'
  : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
