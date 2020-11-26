import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignUpData } from '../../models/sign-up-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./sign-up.page.scss');

@customElement('app-sign-up')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SignUpPage extends PageMixin(LitElement) {
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

  @query('#name')
  protected nameElement!: HTMLInputElement;

  @query('#email')
  protected emailElement!: HTMLInputElement;

  @query('#password > input')
  protected passwordElement!: HTMLInputElement;

  @query('#password-check > input')
  protected passwordCheckElement!: HTMLInputElement;

  @query('.pw-repeat-error')
  protected passwordRepeatError!: HTMLDivElement;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()}
      <form novalidate @ionChange=${(event: CustomEvent<InputChangeEventDetail>) => formChanged(event, this.i18n)}>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="name">${this.i18n.NAME}</ion-label>
            <ion-input debounce="100" type="text" autofocus required id="name" name="name"></ion-input>
          </ion-item>
          <div class="error"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="email">${this.i18n.E_MAIL}</ion-label>
            <ion-input type="email" required id="email" name="email"></ion-input>
          </ion-item>
          <div class="error"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="password">${this.i18n.PASSWORD}</ion-label>
            <ion-input
              clear-on-edit="false"
              type="password"
              required
              minlength="10"
              id="password"
              name="password"
            ></ion-input>
          </ion-item>
          <div class="error"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="password-check">${this.i18n.PASSWORD_CONFIRM}</ion-label>
            <ion-input
              clear-on-edit="false"
              type="password"
              required
              minlength="10"
              id="password-check"
              name="passwordCheck"
            ></ion-input>
          </ion-item>
          <div class="error pw-repeat-error"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="left" for="status">${this.i18n.USER_STATUS}</ion-label>
            <ion-chip color="primary">
              <ion-label color="dark">Studierender</ion-label>
            </ion-chip>
            <ion-label position="floating" for="status">${this.i18n.USER_STATUS}</ion-label>
            <ion-chip color="primary">
              <ion-label color="dark">Mitarbeiter</ion-label>
            </ion-chip>
            <ion-label position="floating" for="status">${this.i18n.USER_STATUS}</ion-label>
            <ion-chip color="primary">
              <ion-label color="dark">Gast</ion-label>
            </ion-chip>
          </ion-item>
          <div class="error"></div>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label position="floating" for="name">${this.i18n.INDIGESTIBILITY}</ion-label>
            <ion-input debounce="100" type="text" autofocus required id="name" name="name"></ion-input>
          </ion-item>
          <div class="error"></div>
        </ion-item-group>
        <ion-item-group> </ion-item-group>
        <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_UP}</ion-button>
      </form>
    `;
  }

  protected async submit(): Promise<void> {
    if (this.isFormValid()) {
      const signUpData: SignUpData = {
        name: this.nameElement.value,
        email: this.emailElement.value,
        password: this.passwordElement.value,
        passwordCheck: this.passwordCheckElement.value
      };
      try {
        await userService.signUp(signUpData);
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  protected isFormValid(): boolean {
    if (this.passwordElement.value !== this.passwordCheckElement.value) {
      this.passwordCheckElement.setCustomValidity(this.i18n.PASSWORD_NOT_IDENTICAL);
      this.passwordRepeatError.innerHTML = this.passwordCheckElement.validationMessage;
    } else {
      this.passwordCheckElement.setCustomValidity('');
    }
    return this.form.checkValidity();
  }
}
