import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  query,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { routerService } from '../services/router.service';
import { Routes } from '../routes';
import { LanguageStrings } from '../models/language-strings';
import { i18nService } from '../services/i18n.service';
import { clearRootNav, pushToNav } from '../helpers/root-nav-util';
import { Tab } from '../models/tab';
import { getActiveNav, isRootRoute } from '../helpers/get-active-nav';

const componentCSS = require('./app.component.scss');
const sharedCSS = require('../shared.scss');

@customElement('app-root')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppComponent extends LitElement {
  // createRenderRoot() {
  //   return this;
  // }
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.currentRoute = routerService.getPath();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then(console.log).catch(console.error);
      });
    }
  }

  @property()
  protected appTitle = 'mensa-app';

  @internalProperty()
  protected currentRoute!: Routes;

  @internalProperty()
  protected i18n!: LanguageStrings;

  @query('ion-tabs')
  protected tabsComponent!: HTMLIonTabsElement;

  protected async firstUpdated(): Promise<void> {
    routerService.subscribe(() => this.handleRouteChange());
    await this.handleRouteChange();
    const path = localStorage.getItem('path');
    if (path) {
      debugger;
      routerService.navigate(<Routes>path);
      localStorage.removeItem('path');
    }
  }

  protected async handleRouteChange(): Promise<void> {
    this.currentRoute = routerService.getPath();
    const activeNav: HTMLIonNavElement = getActiveNav(this.tabs, this);
    if (!isRootRoute(this.currentRoute)) {
      await clearRootNav();
    }
    if (this.currentRoute.startsWith(Routes.TASKS)) {
      this.tabsComponent.select(Routes.TASKS);
    } else if (this.currentRoute.startsWith(Routes.MEALS_TODAY)) {
      this.tabsComponent.select(Routes.MEALS_TODAY);
    } else if (this.currentRoute.startsWith(Routes.MEALS_FUTURE)) {
      this.tabsComponent.select(Routes.MEALS_FUTURE);
    } else if (this.currentRoute.startsWith(Routes.GROUPS)) {
      this.tabsComponent.select(Routes.GROUPS);
      if (this.currentRoute === Routes.GROUPS_CREATE) {
        const nav = <HTMLIonNavElement>this.querySelector(`ion-nav.${Routes.GROUPS}`)!;
        nav.push('app-create-group');
      }
    }
    // RootRoutes start here
    // RootRoutes are not assignable to one tab,
    // therefore RootRoutes are displayed fullscreen without tabs.
    else if (this.currentRoute.startsWith(Routes.SETTINGS)) {
      pushToNav('app-settings', activeNav);
    } else if (this.currentRoute.startsWith(Routes.SIGN_IN)) {
      pushToNav('app-sign-in', activeNav);
    } else if (this.currentRoute.startsWith(Routes.SIGN_UP)) {
      pushToNav('app-sign-up', activeNav);
    }
  }

  protected renderRouterOutlet(route: Routes, component: string): TemplateResult {
    return html` <ion-nav class="${route}" root="${component}"></ion-nav> `;
  }

  public get tabs(): Tab[] {
    return [
      { rootComponent: 'app-tasks', baseRoute: Routes.TASKS, titleString: this.i18n.TASKS, icon: 'list' },
      {
        rootComponent: 'app-meals-today',
        baseRoute: Routes.MEALS_TODAY,
        titleString: this.i18n.MEALS_TODAY,
        icon: 'home'
      },
      {
        rootComponent: 'app-meals-future',
        baseRoute: Routes.MEALS_FUTURE,
        titleString: this.i18n.MEALS_FUTURE,
        icon: 'calendar'
      },
      { rootComponent: 'app-groups', baseRoute: Routes.GROUPS, titleString: this.i18n.GROUPS, icon: 'people' }
    ];
  }

  protected render(): TemplateResult {
    return html`
      <ion-app>
        <ion-tabs>
          <ion-tab tab=${Routes.TASKS}>
            <ion-nav class="${Routes.TASKS}" root="app-tasks"></ion-nav>
          </ion-tab>
          <ion-tab tab=${Routes.MEALS_TODAY}>
            <ion-nav class="${Routes.MEALS_TODAY}" root="app-meals-today"></ion-nav>
          </ion-tab>
          <ion-tab tab=${Routes.MEALS_FUTURE}>
            <ion-nav class="${Routes.MEALS_FUTURE}" root="app-meals-future"></ion-nav>
          </ion-tab>
          <ion-tab tab=${Routes.GROUPS}>
            <ion-nav class="${Routes.GROUPS}" root="app-groups"></ion-nav>
          </ion-tab>
          <div id="bottom-content" slot="bottom">
            <app-connection-status-bar></app-connection-status-bar>
            <ion-tab-bar>
              ${this.tabs.map(
                tab => html`
                  <ion-tab-button @click=${() => routerService.navigate(tab.baseRoute)} tab=${tab.baseRoute}>
                    <ion-label>${tab.titleString}</ion-label>
                    <ion-icon name="${tab.icon}"></ion-icon>
                  </ion-tab-button>
                `
              )}
            </ion-tab-bar>
          </div>
        </ion-tabs>
      </ion-app>
      <ion-progress-bar style="display:none"></ion-progress-bar>
    `;
  }
}
