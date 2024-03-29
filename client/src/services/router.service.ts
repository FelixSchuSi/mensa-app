import { Routes } from '../routes';
export type QueryParameter = Record<string, string>;
export type RouteListener = (relUrl: string) => void;
export type Unsubscribe = () => void;
export class RouterService {
  private listeners: RouteListener[] = [];
  private rootPath = '/';

  constructor() {
    window.onpopstate = (): void => this.notifyListeners();
    document.addEventListener('click', (event: MouseEvent) => {
      if (!this.shouldIgnoreEvent(event)) {
        const anchor = this.getAnchor(event); // a-Element ermitteln
        if (anchor && !this.shouldIgnoreAnchor(anchor)) {
          // nur interne Links
          event.preventDefault();
          this.navigate(<Routes>(anchor.pathname + anchor.search + anchor.hash));
        }
      }
    });
    if (document.getElementsByTagName('base').length > 0) {
      this.rootPath = document.getElementsByTagName('base')[0].getAttribute('href')!;
    }
  }

  public subscribe(listener: RouteListener): Unsubscribe {
    this.listeners.push(listener);
    return (): void => {
      // unsubscribe function
      this.listeners = this.listeners.filter(other => other !== listener);
    };
  }

  public navigate(relUrl: Routes, query?: QueryParameter): void {
    const queryString =
      Object.keys(query || {})
        .map(e => e + '=' + query![e])
        .join('&') ?? '';
    // window.history.pushState({ prevUrl: window.location.href }, null, "/new/path/in/your/app")
    // console.log(this.withRootPath());
    history.pushState(
      { prevUrl: this.getPath() },
      '',
      this.withRootPath(relUrl) + (queryString ? '?' + encodeURI(queryString) : '')
    );
    this.notifyListeners();
  }

  // e. g. 'user/sign-in' (without leading slash)
  public getPath(): Routes {
    return <Routes>this.withoutRootPath(location.pathname);
  }

  public getAllQueryParameters(): QueryParameter {
    const params = new URLSearchParams(location.search);
    const paramObj: QueryParameter = {};
    for (const value of params.keys()) {
      paramObj[value] = params.get(value)!;
    }
    return paramObj;
  }

  public getQueryParameter(key: string): string {
    const queryString = location.search.substr(1); // Remove ? from search
    return this.parseQueryParameter(queryString)[key];
  }

  private parseQueryParameter(searchStr: string): QueryParameter {
    const tmap: QueryParameter = {};

    searchStr.split('&').forEach((e): void => {
      const pair = e.split('=');
      tmap[pair[0]] = pair[1];
    });
    return tmap;
  }
  private notifyListeners(): void {
    const path = this.getPath();
    this.listeners.forEach(listener => listener(path));
  }

  private shouldIgnoreEvent(event: MouseEvent): boolean {
    return (
      event.defaultPrevented || event.button !== 0 || event.shiftKey || event.ctrlKey || event.altKey || event.metaKey
    );
  }

  private getAnchor(event: MouseEvent): HTMLAnchorElement {
    for (const target of event.composedPath ? event.composedPath() : []) {
      if (this.isAnchor(target as HTMLElement)) {
        return target as HTMLAnchorElement;
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let elem: any = event.target;
    while (elem && !this.isAnchor(elem)) {
      elem = elem.parentNode;
    }
    return elem && this.isAnchor(elem) ? elem : null;
  }

  private isAnchor(elem: HTMLElement): boolean {
    return !!elem.nodeName && elem.nodeName.toLowerCase() === 'a';
  }

  private shouldIgnoreAnchor(anchor: HTMLAnchorElement): boolean {
    if (anchor.target && anchor.target.toLowerCase() !== '_self') {
      return true; // it has a non-default target
    }

    if (anchor.hasAttribute('download')) {
      return true;
    }

    if (this.withRootPath(anchor.pathname) === window.location.pathname && anchor.hash !== '') {
      return true; // target URL is a fragment on the current page
    }

    const origin = anchor.origin || this.getAnchorOrigin(anchor);
    if (origin !== window.location.origin) {
      return true; // target is external to the app
    }
    return false;
  }

  private getAnchorOrigin(anchor: HTMLAnchorElement): string {
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === 'http:' && port === '80';
    const defaultHttps = protocol === 'https:' && port === '443';
    const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
    return `${protocol}//${host}`;
  }

  private withRootPath(relURL: string): string {
    if (relURL.startsWith(this.rootPath)) {
      return relURL;
    } else {
      return this.rootPath + (relURL.startsWith('/') ? relURL.substring(1) : relURL);
    }
  }

  private withoutRootPath(relURL: string): string {
    if (relURL.startsWith(this.rootPath)) {
      return relURL.substring(this.rootPath.length);
    } else {
      return relURL;
    }
  }
}

export const routerService = new RouterService();
