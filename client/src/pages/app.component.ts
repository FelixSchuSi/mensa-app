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
import { Languages } from '../models/languages';
import { german } from '../i18n/german';
import { english } from '../i18n/english';
import { PageContext } from '../models/page-context';
import { spread } from '@open-wc/lit-helpers';

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

  public constructor() {
    super();
    this.i18n = getBrowserLanguage() === Languages.GERMAN ? german : english;
  }

  @property()
  protected appTitle = 'Aufgabenverwaltung';

  @internalProperty()
  protected i18n!: LanguageStrings;

  @internalProperty()
  protected get pageContext(): object {
    return {
      '.i18n': this.i18n
    };
  }

  @property({ type: Array })
  protected get linkItems(): LinkItem[] {
    return [
      { title: this.i18n.SIGN_UP, routePath: Routes.SIGN_UP },
      { title: this.i18n.SIGN_IN, routePath: Routes.SIGN_IN },
      { title: this.i18n.SIGN_OUT, routePath: Routes.SIGN_OUT }
    ];
  }

  protected toggleLanguage(): void {
    if (this.i18n._LANGUAGE === Languages.GERMAN) {
      this.i18n = english;
    } else {
      this.i18n = german;
    }
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

  protected render(): TemplateResult {
    return html`
      <app-header title="${this.appTitle}" .linkItems=${this.linkItems}></app-header>

      <div class="main container">${this.renderRouterOutlet()}</div>
      <button @click=${this.toggleLanguage}>${this.i18n.SWITCH_LANGUAGE}</button>
    `;
  }
}
