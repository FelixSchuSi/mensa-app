import { css, customElement, html, LitElement, query, TemplateResult, unsafeCSS } from 'lit-element';
import { routerService } from '../../services/router.service';
import { httpService } from '../../services/http.service';
import { PageMixin } from '../page.mixin';

const sharedCSS = require('../shared.scss');
const componentCSS = require('./sign-in.component.scss');

@customElement('app-sign-in')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignInComponent extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @query('form')
  protected form!: HTMLFormElement;

  @query('#email')
  protected emailElement!: HTMLInputElement;

  @query('#password')
  protected passwordElement!: HTMLInputElement;

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()}
      <h1>Anmelden</h1>
      <form>
        <div class="form-group">
          <label class="control-label" for="email">E-Mail</label>
          <input class="form-control" type="email" autofocus required id="email" name="email" />
          <div class="invalid-feedback">E-Mail ist erforderlich und muss gültig sein</div>
        </div>
        <div class="form-group">
          <label class="control-label" for="password">Passwort</label>
          <input class="form-control" type="password" required id="password" name="password" />
          <div class="invalid-feedback">Passwort ist erforderlich</div>
        </div>
        <button class="btn btn-primary" type="button" @click="${this.submit}">Anmelden</button>
      </form>
    `;
  }

  protected async submit(): Promise<void> {
    if (this.isFormValid()) {
      // TODO: Create separate frontend userservice and create interfaces for login and signup data.
      const authData = {
        email: this.emailElement.value,
        password: this.passwordElement.value
      };
      try {
        await httpService.post('users/sign-in', authData);
        routerService.navigate('tasks');
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    } else {
      this.form.classList.add('was-validated');
    }
  }

  protected isFormValid(): boolean {
    return this.form.checkValidity();
  }
}
