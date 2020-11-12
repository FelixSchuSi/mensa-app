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
import { LinkItem } from '../models/link-item';
import { Routes } from '../routes';
import { LanguageStrings } from '../models/language-strings';
import { getBrowserLanguage } from '../i18n/get-browser-language';
import { Language, Languages } from '../models/languages';
import { german } from '../i18n/german';
import { english } from '../i18n/english';

const sharedCSS = require('../shared.scss');
const componentCSS = require('./app.component.scss');

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

  @property()
  protected appTitle = 'Aufgabenverwaltung';

  @property({ type: Array })
  protected linkItems: LinkItem[] = [
    { title: 'Konto erstellen', routePath: Routes.SIGN_UP },
    { title: 'Anmelden', routePath: Routes.SIGN_IN },
    { title: 'Abmelden', routePath: Routes.SIGN_UP }
  ];

  @internalProperty()
  protected i18n!: LanguageStrings;

  @internalProperty()
  protected currentLanguage!: Language;

  protected toggleLanguage(): void {
    if (this.currentLanguage === Languages.GERMAN) {
      this.currentLanguage = Languages.ENGLISH;
      this.i18n = english;
    } else {
      this.currentLanguage = Languages.GERMAN;
      this.i18n = german;
    }
    this.requestUpdate();
  }

  protected constructor() {
    super();
    this.currentLanguage = getBrowserLanguage();
    this.i18n = this.currentLanguage === Languages.GERMAN ? german : english;
  }

  protected firstUpdated(): void {
    routerService.subscribe(() => this.requestUpdate());
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      routerService.navigate(<Routes>path);
    }
  }

  protected renderRouterOutlet(): TemplateResult {
    switch (routerService.getPath()) {
      case Routes.SIGN_IN:
        return html`<app-sign-in></app-sign-in>`;
      case Routes.SIGN_UP:
        return html`<app-sign-up></app-sign-up>`;
      case Routes.SIGN_OUT:
        return html`<app-sign-out></app-sign-out>`;
      case Routes.TASKS:
        return html`<app-tasks .i18n=${this.i18n}></app-tasks>`;
      default:
        return html`<app-tasks .i18n=${this.i18n}></app-tasks>`;
    }
  }

  protected render(): TemplateResult {
    return html`
      <app-header title="${this.appTitle}" .linkItems=${this.linkItems}></app-header>

      <div class="main container">${this.renderRouterOutlet()}</div>
      <button @click=${this.toggleLanguage}>${this.i18n.HELLO_WORLD}</button>
    `;
  }
}
