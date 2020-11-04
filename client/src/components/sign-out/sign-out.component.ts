import { customElement, html, LitElement, TemplateResult } from 'lit-element';
import { httpClient } from '../../http-client';
import { PageMixin } from '../page.mixin';

@customElement('app-sign-out')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignOutComponent extends PageMixin(LitElement) {
  protected render(): TemplateResult {
    return html`${this.renderNotification()}`;
  }

  protected async firstUpdated(): Promise<void> {
    try {
      await httpClient.delete('users/sign-out');
      this.setNotification({ infoMessage: 'Sie wurden erfolgreich abgemeldet!' });
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
