import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignInData } from '../../models/sign-in-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';

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

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()}
      <h1>${this.i18n.SIGN_IN}</h1>
      <form @ionChange=${(event: CustomEvent<InputChangeEventDetail>) => formChanged(event, this.i18n)}>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="email">${this.i18n.E_MAIL}</ion-label>
            <ion-input
              debounce="100"
              inputmode="email"
              type="email"
              autofocus
              required
              id="email"
              name="email"
            ></ion-input>
          </ion-item>
          <div class="error" color="danger"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="password">${this.i18n.PASSWORD}</ion-label>
            <ion-input
              clear-on-edit="false"
              debounce="100"
              type="password"
              required
              id="password"
              name="password"
            ></ion-input>
          </ion-item>
          <div class="error" color="danger"></div>
        </ion-item-group>

        <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_IN}</ion-button>
      </form>
    `;
  }

  protected async submit(): Promise<void> {
    if (this.form.checkValidity()) {
      const signInData: SignInData = {
        email: this.emailElement.value,
        password: this.passwordElement.value
      };
      try {
        await userService.signIn(signInData);
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    }
  }
}
