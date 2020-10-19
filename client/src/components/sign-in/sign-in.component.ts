import { css, customElement, html, LitElement, query, unsafeCSS } from 'lit-element';

const componentCSS = require('./sign-in.component.scss');

@customElement('app-sign-in')
class SignInComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @query('form')
  form!: HTMLFormElement;

  @query('#email')
  emailElement!: HTMLInputElement;

  @query('#password')
  passwordElement!: HTMLInputElement;

  render() {
    return html`
      <h1>Anmelden</h1>
      <form>
        <div>
          <label for="email">E-Mail</label>
          <input type="email" autofocus required id="email" name="email" />
          <div class="invalid-feedback">E-Mail ist erforderlich und muss gültig sein</div>
        </div>
        <div>
          <label for="password">Passwort</label>
          <input type="password" required id="password" name="password" />
          <div class="invalid-feedback">Passwort ist erforderlich</div>
        </div>
        <button type="button" @click="${this.submit}">Anmelden</button>
      </form>
    `;
  }

  async submit() {
    if (this.isFormValid()) {
      const authData = {
        email: this.emailElement.value,
        password: this.passwordElement.value
      };
      // ...
    } else {
      this.form.classList.add('was-validated');
    }
  }

  isFormValid() {
    return this.form.checkValidity();
  }
}
