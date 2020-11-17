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
    this.i18n = getBrowserLanguage() === Languages.GERMAN ? german : english;

    // mode button has to use localstorage since its synchronus and delays rendering.
    const mode = localStorage.getItem('mode');
    if (mode) {
      this.mode = <'ios' | 'md'>mode;
      const htmlElement: HTMLHtmlElement = document.querySelector('html')!;
      htmlElement.setAttribute('mode', this.mode);
    }
  }

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
      '.i18n': this.i18n
    };
  }

  protected toggleLanguage(): void {
    if (this.i18n._LANGUAGE === Languages.GERMAN) {
      this.i18n = english;
    } else {
      this.i18n = german;
    }
  }

  protected async toggleMode(): Promise<void> {
    this.mode = this.mode === 'md' ? 'ios' : 'md';
    localStorage.setItem('mode', this.mode);
    location.reload();
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
    switch (routerService.getPath()) {
      case Routes.SIGN_IN:
        return html`<app-sign-in ...=${spread(this.pageContext)}></app-sign-in>`;
      case Routes.SIGN_UP:
        return html`<app-sign-up ...=${spread(this.pageContext)}></app-sign-up>`;
      case Routes.SIGN_OUT:
        return html`<app-sign-out ...=${spread(this.pageContext)}></app-sign-out>`;
      case Routes.TASKS:
        return html`<app-tasks ...=${spread(this.pageContext)}></app-tasks>`;
      default:
        return html`<app-tasks ...=${spread(this.pageContext)}></app-tasks>`;
    }
  }

  protected renderTitle(): string {
    switch (routerService.getPath()) {
      case Routes.SIGN_IN:
        return this.i18n.SIGN_IN;
      case Routes.SIGN_UP:
        return this.i18n.SIGN_UP;
      case Routes.SIGN_OUT:
        return this.i18n.SIGN_OUT;
      case Routes.TASKS:
        return this.i18n.TASKS;
      default:
        return this.i18n.TASKS;
    }
  }

  protected renderMain(): TemplateResult {
    return html`
      ${this.renderRouterOutlet()}
      <ion-button @click=${this.toggleLanguage}>${this.i18n.SWITCH_LANGUAGE}</ion-button>
      <ion-button @click=${this.toggleMode}>Switch to ${this.mode === 'md' ? 'ios' : 'md'} mode</ion-button>
    `;
  }

  protected render(): TemplateResult {
    return html`
      <div class="full-size">
        <div class="ion-app-container">
          <ion-app>
            <ion-header>
              <ion-toolbar>
                <ion-title>${this.renderTitle()}</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-tabs>
              <ion-tab tab=${Routes.TASKS}>
                <ion-content class="ion-padding"> ${this.renderMain()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_IN}>
                <ion-content class="ion-padding"> ${this.renderMain()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_UP}>
                <ion-content class="ion-padding"> ${this.renderMain()} </ion-content>
              </ion-tab>
              <ion-tab tab=${Routes.SIGN_OUT}>
                <ion-content class="ion-padding"> ${this.renderMain()} </ion-content>
              </ion-tab>
              <ion-tab-bar selected-tab="${this.currentRoute}" slot="bottom">
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
            </ion-tabs>
          </ion-app>
        </div>
      </div>
    `;
  }
}
