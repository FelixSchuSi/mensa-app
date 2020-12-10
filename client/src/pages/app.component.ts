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
import { storeService } from '../services/store.service';
import { getTitleString } from '../helpers/get-title-string';
import { i18nService } from '../services/i18n.service';

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
    routerService.subscribe(() => {
      this.currentRoute = routerService.getPath();
      this.requestUpdate();
    });
    const path = await storeService.get('path');
    if (path) {
      await storeService.remove('path');
      routerService.navigate(<Routes>path);
    }
  }

  protected renderRouterOutlet(route: Routes, component: string): TemplateResult {
    // TODO: move buttons to settings and return value in switch statement.
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-title>${getTitleString(this.i18n)}</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click=${() => this.pushRootNav('app-settings')}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
              <!-- TODO: Make Google style avatar work -->
              <!-- <ion-avatar style="border-radius: 0px" slot="end">
                <img
                  style="width: 60px; height:60px"
                  src="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar.png"
                />
              </ion-avatar> -->
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${getTitleString(this.i18n)}</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        <div style="width:100%; height:100%">
          <app-tab-container id="content" component="${component}"></app-tab-container>
        </div>
      </ion-content>
    `;
  }

  protected async pushRootNav(component: string): Promise<void> {
    const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
    const res = await rootNav.push(component);
  }

  protected render(): TemplateResult {
    return html`
      <div></div>
      <!-- <div class="full-size">
        <div class="ion-app-container"> -->
      <ion-app>
        <ion-tabs>
          <ion-tab tab=${Routes.TASKS}> ${this.renderRouterOutlet(Routes.TASKS, 'app-tasks')} </ion-tab>
          <ion-tab tab=${Routes.SIGN_IN}> ${this.renderRouterOutlet(Routes.SIGN_IN, 'app-sign-in')} </ion-tab>
          <ion-tab tab=${Routes.SIGN_UP}> ${this.renderRouterOutlet(Routes.SIGN_UP, 'app-sign-up')} </ion-tab>
          <ion-tab tab=${Routes.SIGN_OUT}> ${this.renderRouterOutlet(Routes.SIGN_OUT, 'app-sign-out')} </ion-tab>
          <div id="bottom-content" slot="bottom">
            <app-connection-status-bar></app-connection-status-bar>
            <ion-tab-bar>
              <ion-tab-button @click=${() => routerService.navigate(Routes.TASKS)} tab=${Routes.TASKS}>
                <ion-label>${this.i18n.TASKS}</ion-label>
                <ion-icon name="list"></ion-icon>
              </ion-tab-button>
              <ion-tab-button @click=${() => routerService.navigate(Routes.SIGN_IN)} tab=${Routes.SIGN_IN}>
                <ion-label>${this.i18n.SIGN_IN}</ion-label>
                <ion-icon name="log-in"></ion-icon>
              </ion-tab-button>
              <ion-tab-button @click=${() => routerService.navigate(Routes.SIGN_UP)} tab=${Routes.SIGN_UP}>
                <ion-label>${this.i18n.SIGN_UP}</ion-label>
                <ion-icon name="create"></ion-icon>
              </ion-tab-button>
              <ion-tab-button @click=${() => routerService.navigate(Routes.SIGN_OUT)} tab=${Routes.SIGN_OUT}>
                <ion-label>${this.i18n.SIGN_OUT}</ion-label>
                <ion-icon name="log-out"></ion-icon>
              </ion-tab-button>
            </ion-tab-bar>
          </div>
        </ion-tabs>
      </ion-app>
      <!-- </div>
      </div> -->
      <ion-progress-bar style="display:none"></ion-progress-bar>
    `;
  }
}
