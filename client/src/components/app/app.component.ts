import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { router } from '../../../client-packages/router/router';
import { RouteDefinition } from '../../models/route-definition';

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
  protected appTitle: string = 'Aufgabenverwaltung';

  @property({ type: Array })
  protected linkItems: RouteDefinition[] = [
    { title: 'Konto erstellen', routePath: 'users/sign-up' },
    { title: 'Anmelden', routePath: 'users/sign-in' },
    { title: 'Abmelden', routePath: 'users/sign-out' }
  ];

  protected firstUpdated(): void {
    router.subscribe(() => this.requestUpdate());
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      router.navigate(path);
    }
  }

  protected renderRouterOutlet(): TemplateResult {
    switch (router.getPath()) {
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
      <app-header title="${this.appTitle}" .linkItems=${this.linkItems}> </app-header>
      <div class="main container">
        ${this.renderRouterOutlet()}
      </div>
    `;
  }
}
