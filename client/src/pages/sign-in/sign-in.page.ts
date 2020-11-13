import { css, customElement, html, LitElement, query, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignInData } from '../../models/sign-in-data';
import { userService } from '../../services/user.service';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./sign-in.page.scss');

@customElement('app-sign-in')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignInPage extends PageMixin(LitElement) {
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
        <ion-item-group>
          <ion-item>
            <ion-label position="stacked" for="email">E-Mail</ion-label>
            <ion-input
              inputmode="email"
              pattern="email"
              type="email"
              autofocus
              required
              id="email"
              name="email"
            ></ion-input>
            <div class="invalid-feedback">E-Mail ist erforderlich und muss gültig sein</div>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" for="password">Passwort</ion-label>
            <ion-input type="password" required id="password" name="password"></ion-input>
            <!-- <div class="invalid-feedback">Passwort ist erforderlich</div> -->
          </ion-item>
        </ion-item-group>
        <ion-button color="primary" type="button" @click="${this.submit}">Anmelden</ion-button>
      </form>
    `;
  }

  protected async submit(): Promise<void> {
    const isValid = this.isFormValid();
    console.log(isValid);
    console.log(this.form);
    if (isValid) {
      const signInData: SignInData = {
        email: this.emailElement.value,
        password: this.passwordElement.value
      };
      try {
        await userService.signIn(signInData);
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    } else {
      // this.form.classList.add('was-validated');
      // this.passwordElement.setCustomValidity('Passwort ist erforderlich');
      //@ts-ignore
      const pwInput: HTMLInputElement = await this.passwordElement.getInputElement();
      pwInput.setCustomValidity('Passwort ist erforderlich');

      // getInputElement();
    }
  }

  protected isFormValid(): boolean {
    return this.form.checkValidity();
  }
}
