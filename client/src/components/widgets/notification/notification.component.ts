import { customElement, html, css, unsafeCSS, LitElement, property } from 'lit-element';

const sharedCSS = require('../../shared.scss');

@customElement('app-notification')
class NotificationComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(sharedCSS)}
  `;

  @property()
  error = '';

  @property()
  info = '';

  render() {
    return html`
      ${this.error ? html`<div class="alert alert-danger">${this.error}</div>` : ''}
      ${this.info ? html`<div class="alert alert-info">${this.info}</div>` : ''}
    `;
  }
}
