import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { routerService } from '../../services/router.service';
import { LinkItem } from '../../models/route-definition';

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
    { title: 'Konto erstellen', routePath: 'users/sign-up' },
    { title: 'Anmelden', routePath: 'users/sign-in' },
    { title: 'Abmelden', routePath: 'users/sign-out' }
  ];

  protected firstUpdated(): void {
    routerService.subscribe(() => this.requestUpdate());
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      routerService.navigate(path);
    }
  }

  protected renderRouterOutlet(): TemplateResult {
    switch (routerService.getPath()) {
      case 'users/sign-in':
        return html`<app-sign-in></app-sign-in>`;
      case 'users/sign-up':
        return html`<app-sign-up></app-sign-up>`;
      case 'users/sign-out':
        return html`<app-sign-out></app-sign-out>`;
      case 'tasks':
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
