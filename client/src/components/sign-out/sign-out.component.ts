import { customElement, html, LitElement } from 'lit-element';
import { httpClient } from '../../http-client';
import { PageMixin } from '../page.mixin';

@customElement('app-sign-out')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignOutComponent extends PageMixin(LitElement) {
  render() {
    return html` ${this.renderNotification()} `;
  }

  async firstUpdated() {
    try {
      await httpClient.delete('users/sign-out');
      this.setNotification({ infoMessage: 'Sie wurden erfolgreich abgemeldet!' });
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
