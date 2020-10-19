import { css, customElement, html, LitElement, query, unsafeCSS } from 'lit-element';
import { httpClient } from '../../http-client';
import { router } from '@fhms-wi/router';
import { PageMixin } from '../page.mixin';

const componentCSS = require('./sign-up.component.scss');

@customElement('app-sign-up')
class SignUpComponent extends PageMixin(LitElement) {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @query('form')
  form!: HTMLFormElement;

  @query('#name')
  nameElement!: HTMLInputElement;

  @query('#email')
  emailElement!: HTMLInputElement;

  @query('#password')
  passwordElement!: HTMLInputElement;

  @query('#password-check')
  passwordCheckElement!: HTMLInputElement;

  render() {
    return html`
      ${this.renderNotification()}
      <h1>Konto erstellen</h1>
      <form novalidate>
        <div>
          <label for="name">Name</label>
          <input type="text" autofocus required id="name" name="name" />
          <div class="invalid-feedback">Name ist erforderlich</div>
        </div>
        <div>
          <label for="email">E-Mail</label>
          <input type="email" required id="email" name="email" />
          <div class="invalid-feedback">E-Mail ist erforderlich und muss gültig sein</div>
        </div>
        <div>
          <label for="password">Passwort</label>
          <input type="password" required minlength="10" id="password" name="password" />
          <div class="invalid-feedback">Passwort ist erforderlich und muss mind. 10 Zeichen lang sein</div>
        </div>
        <div>
          <label for="password-check">Passwort nochmals eingeben</label>
          <input type="password" required minlength="10" id="password-check" name="passwordCheck" />
          <div class="invalid-feedback">
            Erneute Passworteingabe ist erforderlich und muss mit der ersten Passworteingabe übereinstimmen
          </div>
        </div>
        <button type="button" @click="${this.submit}">Konto erstellen</button>
      </form>
    `;
  }

  async submit() {
    if (this.isFormValid()) {
      const accountData = {
        name: this.nameElement.value,
        email: this.emailElement.value,
        password: this.passwordElement.value,
        passwordCheck: this.passwordCheckElement.value
      };
      try {
        const response = await httpClient.post('users', accountData);
        router.navigate('tasks');
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    } else {
      this.form.classList.add('was-validated');
    }
  }

  isFormValid() {
    if (this.passwordElement.value !== this.passwordCheckElement.value) {
      this.passwordCheckElement.setCustomValidity('Passwörter müssen gleich sein');
    } else {
      this.passwordCheckElement.setCustomValidity('');
    }
    return this.form.checkValidity();
  }
}
