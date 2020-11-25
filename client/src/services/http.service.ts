interface HttpServiceConfig {
  baseURL: string;
}

class HttpService {
  private cache!: Cache;
  constructor(private config: HttpServiceConfig) {}

  private async initCache(): Promise<void> {
    this.cache = await caches.open('offline-cache');
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
    if (!this.cache) await this.initCache();

    const request: Request = this.buildRequest(method, url, body);

    const response: Response = await this.networkFirst(request);

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

  private async networkFirst(request: Request): Promise<Response> {
    const NO_INTERNET = { message: 'Es konnte keine Verbindung hergestellt werden', statusCode: 503 };
    if (navigator.onLine) {
      const response = await fetch(request);
      if (request.method === 'GET' && response.ok) await this.cache.put(request, response.clone());
      return response;
    } else {
      try {
        console.log('returning from network cache');
        const cacheResult = await this.cache.match(request);
        if (cacheResult === undefined) return Promise.reject(NO_INTERNET);
        return cacheResult;
      } catch (e) {
        console.log(e);
        return Promise.reject(NO_INTERNET);
      }
    }
  }
}

// const ISPROD = true;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD
  ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/'
  : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
