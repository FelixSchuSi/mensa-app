import { customElement, html, css, unsafeCSS, LitElement, property } from 'lit-element';

const componentCSS = require('./notification.component.scss');

@customElement('app-notification')
class NotificationComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property()
  error = '';

  @property()
  info = '';

  render() {
    return html`
      ${this.error ? html`<div class="error">${this.error}</div>` : ''}
      ${this.info ? html`<div class="info">${this.info}</div>` : ''}
    `;
  }
}
