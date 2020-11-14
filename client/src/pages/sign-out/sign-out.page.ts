import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { userService } from '../../services/user.service';
import { PageMixin } from '../page.mixin';

@customElement('app-sign-out')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignOutPage extends PageMixin(LitElement) {
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`${this.renderNotification()}`;
  }

  protected async firstUpdated(): Promise<void> {
    try {
      await userService.logOut();
      this.setNotification({ infoMessage: this.i18n.SIGN_OUT_MESSAGE + '!' });
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
