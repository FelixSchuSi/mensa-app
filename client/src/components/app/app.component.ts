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

  renderRouterOutlet() {
    return html`<app-tasks></app-tasks>`;
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
