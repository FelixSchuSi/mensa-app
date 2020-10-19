import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { router } from '@fhms-wi/router';

const componentCSS = require('./app.component.scss');

@customElement('app-root')
class AppComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property()
  title = 'Aufgabenverwaltung';

  @property()
  linkItems = [
    { title: 'Konto erstellen', routePath: 'users/sign-up' },
    { title: 'Anmelden', routePath: 'users/sign-in' }
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
      case 'tasks':
        return html`<app-tasks></app-tasks>`;
      default:
        return html`<app-tasks></app-tasks>`;
    }
  }

  render() {
    return html`
      <app-header title="${this.title}" .linkItems=${this.linkItems}> </app-header>
      <div class="main">
        ${this.renderRouterOutlet()}
      </div>
    `;
  }
}
