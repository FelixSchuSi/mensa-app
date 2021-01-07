import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignUpData } from '../../models/sign-up-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { popFromRootNav } from '../../helpers/nav-util';

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

  createRenderRoot() {
    return this;
  }

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
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${async () => {
                await popFromRootNav();
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
          <ion-title>${this.i18n.SIGN_UP}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.SIGN_UP}</ion-title>
          </ion-toolbar>
        </ion-header>
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
              <ion-label>Status</ion-label>
              <ion-select placeholder="${this.i18n.CHOOSE_STATUS}">
                <ion-select-option value="f">${this.i18n.STUDENT}</ion-select-option>
                <ion-select-option value="m">${this.i18n.EMPLOYEE}</ion-select-option>
                <ion-select-option value="h">${this.i18n.GUEST}</ion-select-option>
              </ion-select>
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
          <ion-item-group>
            <ion-item>
              <ion-label position="floating" for="name">${this.i18n.PREFERENCE}</ion-label>
              <ion-input debounce="100" type="text" autofocus required id="name" name="name"></ion-input>
            </ion-item>
            <div class="error"></div>
          </ion-item-group>
          <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_UP}</ion-button>
        </form>
      </ion-content>
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
        await userService.signUp(signUpData, this.i18n);
        routerService.navigate(Routes.TASKS);
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
