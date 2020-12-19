import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignUpData } from '../../models/sign-up-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';
import { popFromRootNav } from '../../helpers/root-nav-util';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { Languages } from '../../models/languages';
import { LanguageKeys } from '../../i18n/language-keys';
import { ChipSelectWidget } from '../../widgets/chip-select/chip-select.widget';

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

  @query('.status')
  protected statusElement!: HTMLIonSegmentElement;

  @query('.diet')
  protected dietElement!: HTMLIonSegmentElement;

  @query('.indigestibilities')
  protected indigestibilitiesElement!: ChipSelectWidget;

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
              <div slot="end">
                <ion-segment value="STUDENT" class="status">
                  <ion-segment-button value="STUDENT">
                    <ion-label>${this.i18n.STUDENT}</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="EMPLOYEE">
                    <ion-label>${this.i18n.EMPLOYEE}</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="GUEST">
                    <ion-label>${this.i18n.GUEST}</ion-label>
                  </ion-segment-button>
                </ion-segment>
              </div>
            </ion-item>
            <div class="error"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label>${this.i18n.PREFERENCE}</ion-label>
              <div slot="end">
                <ion-segment value="NO_MEAT" class="diet">
                  <ion-segment-button value="NO_MEAT">
                    <ion-label>${this.i18n.NO_MEAT}</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="VEGETARIAN">
                    <ion-label>${this.i18n.VEGETARIAN}</ion-label>
                  </ion-segment-button>
                  <ion-segment-button value="VEGAN">
                    <ion-label>${this.i18n.VEGAN}</ion-label>
                  </ion-segment-button>
                </ion-segment>
              </div>
            </ion-item>
            <div class="error"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label>${this.i18n.INDIGESTIBILITIES}</ion-label>
              <chip-select class="indigestibilities">
                <ion-chip id="G">${this.i18n.G}</ion-chip>
                <ion-chip id="Sch">${this.i18n.Sch}</ion-chip>
                <ion-chip id="A">${this.i18n.A}</ion-chip>
              </chip-select>
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
        passwordCheck: this.passwordCheckElement.value,
        status: <'STUDENT' | 'EMPLOYEE' | 'GUEST'>this.statusElement.value,
        diet: <'NO_MEAT' | 'VEGETARIAN' | 'VEGAN'>this.dietElement.value,
        indigestibilities: this.indigestibilitiesElement.value
      };
      debugger;
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
