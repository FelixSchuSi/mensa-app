import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { router } from '@fhms-wi/router';

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
  title = 'Aufgabenverwaltung';

  @property()
  linkItems = [
    { title: 'Konto erstellen', routePath: 'users/sign-up' },
    { title: 'Anmelden', routePath: 'users/sign-in' },
    { title: 'Abmelden', routePath: 'users/sign-out' }
  ];

  firstUpdated() {
    router.subscribe(() => this.requestUpdate());
  }

  renderRouterOutlet() {
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

  render() {
    return html`
      <app-header title="${this.title}" .linkItems=${this.linkItems}> </app-header>
      <div class="main container">
        ${this.renderRouterOutlet()}
      </div>
    `;
  }
}
