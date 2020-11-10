interface HttpServiceConfig {
  baseURL: string;
}

class HttpService {
  constructor(private config: HttpServiceConfig) { }

  public get(url: string): Promise<Response> {
    return this.createFetch('GET', url);
  }

  public post(url: string, body: any): Promise<Response> {
    return this.createFetch('POST', url, body);
  }

  public put(url: string, body: any): Promise<Response> {
    return this.createFetch('PUT', url, body);
  }

  public patch(url: string, body: any): Promise<Response> {
    return this.createFetch('PATCH', url, body);
  }

  public delete(url: string): Promise<Response> {
    return this.createFetch('DELETE', url);
  }

  private async createFetch(method: string, url: string, body?: any): Promise<Response> {
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
      } catch (e) { }
      message = message || response.statusText;
      return Promise.reject({ message, statusCode: response.status });
    }
  }
}

// @ts-ignore
const baseURL: string = ISPROD ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/' : `http://${location.hostname}:3443/api/`;
export const httpService: HttpService = new HttpService({ baseURL });
