import { customElement, html, LitElement, TemplateResult } from 'lit-element';
import { userService } from '../../services/user.service';
import { PageMixin } from '../page.mixin';

@customElement('app-sign-out')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignOutPage extends PageMixin(LitElement) {
  protected render(): TemplateResult {
    return html`${this.renderNotification()}`;
  }

  protected async firstUpdated(): Promise<void> {
    try {
      await userService.logOut();
      this.setNotification({ infoMessage: 'Sie wurden erfolgreich abgemeldet!' });
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
