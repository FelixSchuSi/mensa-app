import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { routerService } from '../services/router.service';
import { Routes } from '../routes';
import { LanguageStrings } from '../models/language-strings';
import { getBrowserLanguage } from '../i18n/get-browser-language';
import { Languages } from '../models/languages';
import { german } from '../i18n/german';
import { english } from '../i18n/english';
import { spread } from '@open-wc/lit-helpers';
import { storeService } from '../services/store.service';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';
import { getTitleString } from '../helpers/get-title-string';
import { toggleIosMd } from '../helpers/toggle-ios-md';
import { connectionStatusService } from '../services/connection.status.service';

const componentCSS = require('./app.component.scss');
const sharedCSS = require('../shared.scss');

@customElement('app-root')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AppComponent extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  public constructor() {
    super();
    // mode button has to use localstorage since its synchronus and delays rendering.
    const mode = localStorage.getItem('mode');
    const htmlElement: HTMLHtmlElement = document.querySelector('html')!;
    if (mode) {
      this.mode = <'ios' | 'md'>mode;
      htmlElement.setAttribute('mode', this.mode);
    }
    this.i18n = getBrowserLanguage() === Languages.GERMAN ? german : english;

    connectionStatusService.subscribe((status: ConnectionStatus) => {
      this.connectionStatus = status;
    });

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then(console.log).catch(console.error);
      });
    }
  }

  @property()
  protected connectionStatus: ConnectionStatus = ConnectionStatus.BASESTATE;

  @property()
  protected appTitle = 'mensa-app';

  @internalProperty()
  protected currentRoute!: Routes;

  @internalProperty()
  protected mode!: 'ios' | 'md';

  @internalProperty()
  protected i18n!: LanguageStrings;

  @internalProperty()
  protected get pageContext(): object {
    return {
      '.i18n': this.i18n,
      '.connectionStatus': this.connectionStatus
    };
  }

  protected toggleLanguage(): void {
    if (this.i18n._LANGUAGE === Languages.GERMAN) {
      this.i18n = english;
    } else {
      this.i18n = german;
    }
  }

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

  protected renderRouterOutlet(): TemplateResult {
    let pageContent: TemplateResult = html``;
    switch (routerService.getPath()) {
      case Routes.SIGN_IN:
        pageContent = html`<app-sign-in ...=${spread(this.pageContext)}></app-sign-in>`;
        break;
      case Routes.SIGN_UP:
        pageContent = html`<app-sign-up ...=${spread(this.pageContext)}></app-sign-up>`;
        break;
      case Routes.SIGN_OUT:
        pageContent = html`<app-sign-out ...=${spread(this.pageContext)}></app-sign-out>`;
        break;
      case Routes.TASKS:
        pageContent = html`<app-tasks ...=${spread(this.pageContext)}></app-tasks>`;
        break;
      default:
        pageContent = html`<app-tasks ...=${spread(this.pageContext)}></app-tasks>`;
        break;
    }

    // TODO: move buttons to settings and return value in switch statement.
    return html`
      <ion-button @click=${this.toggleLanguage}>${this.i18n.SWITCH_LANGUAGE}</ion-button>
      <ion-button @click=${() => toggleIosMd(this.mode)}>
        Switch to ${this.mode === 'md' ? 'ios' : 'md'} mode
      </ion-button>
      ${pageContent}
    `;
  }

  protected render(): TemplateResult {
    return html`
      <div class="full-size">
        <div class="ion-app-container">
          <ion-app>
            <ion-header>
              <ion-toolbar>
                <ion-title>${getTitleString(this.i18n)}</ion-title>
                <ion-buttons slot="primary">
                  <ion-button>
                    <ion-icon slot="icon-only" ios="settings-outline" md="settings-outline"></ion-icon>
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ion-tabs>
              <ion-tab tab=${Routes.TASKS}>
                <ion-content class="ion-padding"> ${this.renderRouterOutlet()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_IN}>
                <ion-content class="ion-padding"> ${this.renderRouterOutlet()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_UP}>
                <ion-content class="ion-padding"> ${this.renderRouterOutlet()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_OUT}>
                <ion-content class="ion-padding"> ${this.renderRouterOutlet()} </ion-content>
              </ion-tab>
              <div id="bottom-content" slot="bottom">
                <app-connection-status-bar ...=${spread(this.pageContext)}></app-connection-status-bar>
                <ion-tab-bar selected-tab="${this.currentRoute}">
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
        </div>
      </div>
      <ion-progress-bar style="display:none"></ion-progress-bar>
    `;
  }
}
