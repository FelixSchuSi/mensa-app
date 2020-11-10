interface HttpServiceConfig {
  baseURL: string;
}

class HttpService {
  constructor(private config: HttpServiceConfig) {}

  public get(url: string): Promise<Response> {
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
    const requestInit: RequestInit = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: method,
      credentials: 'include'
    };
    if (body) {
      requestInit.body = JSON.stringify(body);
    }
    const response: Response = await fetch(this.config.baseURL + url, requestInit);
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
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL: string = ISPROD
  ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/'
  : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
