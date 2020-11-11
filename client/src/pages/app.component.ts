import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { routerService } from '../services/router.service';
import { LinkItem } from '../models/link-item';
import { Routes } from '../routes';

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
        return html`<app-tasks></app-tasks>`;
      default:
        return html`<app-tasks></app-tasks>`;
    }
  }

  protected render(): TemplateResult {
    return html`
      <app-header title="${this.appTitle}" .linkItems=${this.linkItems}></app-header>
      <div class="main container">${this.renderRouterOutlet()}</div>
    `;
  }
}
