import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { PageMixin } from '../page.mixin';
import { SignInData } from '../../models/sign-in-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';
import { Routes } from '../../routes';
import { routerService } from '../../services/router.service';
import { popFromRootNav } from '../../helpers/nav-util';
import { goBackTo } from '../../helpers/go-back-to';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./sign-in.page.scss');

@customElement('app-sign-in')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class SignInPage extends PageMixin(LitElement) {
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

  @query('#email')
  protected emailElement!: HTMLInputElement;

  @query('#password')
  protected passwordElement!: HTMLInputElement;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <app-back-button
            slot="start"
            @click=${() => {
              goBackTo(Routes.SETTINGS);
            }}
            .mode=${this.mode}
          ></app-back-button>

          <ion-title>${this.i18n.SIGN_IN}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.SIGN_IN}</ion-title>
          </ion-toolbar>
        </ion-header>
        <form @ionChange=${(event: CustomEvent<InputChangeEventDetail>) => formChanged(event, this.i18n)}>
          <ion-item-group>
            <ion-item>
              <ion-label position="fixed" for="email">${this.i18n.E_MAIL}</ion-label>
              <ion-input
                debounce="100"
                inputmode="email"
                type="email"
                autofocus
                required
                id="email"
                name="email"
                placeholder="${this.i18n.E_MAIL}"
              ></ion-input>
            </ion-item>
            <div class="error ${this.mode}"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label position="fixed" for="password">${this.i18n.PASSWORD}</ion-label>
              <ion-input
                clear-on-edit="false"
                debounce="100"
                type="password"
                required
                id="password"
                name="password"
                placeholder="${this.i18n.PASSWORD}"
              ></ion-input>
            </ion-item>
            <div class="error ${this.mode}"></div>
          </ion-item-group>

          <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_IN}</ion-button>
        </form>
      </ion-content>
    `;
  }

  protected async submit(): Promise<void> {
    if (this.form.checkValidity()) {
      const signInData: SignInData = {
        email: this.emailElement.value,
        password: this.passwordElement.value
      };
      try {
        await userService.signIn(signInData, this.i18n);
        routerService.navigate(Routes.MEALS_TODAY);
      } catch ({ message }) {
        this.setNotification({ errorMessage: message });
      }
    }
  }
}
