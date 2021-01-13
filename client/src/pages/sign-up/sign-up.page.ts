import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  query,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { PageMixin } from '../page.mixin';
import { SignUpData } from '../../models/sign-up-data';
import { userService } from '../../services/user.service';
import { formChanged } from '../../helpers/form-changed';
import { LanguageStrings } from '../../models/language-strings';
import { InputChangeEventDetail } from '@ionic/core';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { Languages } from '../../models/languages';
import { LanguageKeys } from '../../i18n/language-keys';
import { ChipSelectWidget } from '../../widgets/chip-select/chip-select.widget';
import { popFromRootNav } from '../../helpers/nav-util';
import { MealFilterConfig } from '../../../../server/src/models/meal-filter-config';
import { DEFAULT_MEAL_FILTER_CONFIG } from '../../helpers/filter-meals';
import { ALL_DIETS } from '../../helpers/all-diets';
import { AdditivesKeys } from '../../../../server/src/models/additives';
import { AllergenesKeys } from '../../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../../server/src/models/other-meal-info';
import { getAllContents } from '../../helpers/all-contents';
import { ALL_STATUS } from '../../helpers/all-status';
import { Status } from '../../../../server/src/models/status';

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

  @query('#name > input')
  protected nameElement!: HTMLInputElement;

  @query('#email > input')
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

  @internalProperty()
  protected currentStep: number = 1;

  protected signUpData: Partial<SignUpData> = {
    name: '',
    email: '',
    password: '',
    passwordCheck: ''
  };

  private newFilterConfig: MealFilterConfig = DEFAULT_MEAL_FILTER_CONFIG;
  private status: Status = 'GUEST';
  protected allContents: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = getAllContents();

  protected render(): TemplateResult {
    return html`
      <ion-header class="sign-up-header">
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
      <ion-content class="sign-up-content" fullscreen class="ion-padding">
        ${this.currentStep === 1 ? this.stepOne : this.stepTwo}
      </ion-content>
    `;
  }

  protected get stepTwo(): TemplateResult {
    return html`
      <div class="ion-padding">
        <h1>${this.i18n.STEP_2}: ${this.i18n.PERSONAL_DATA}</h1>
        <form novalidate @ionChange=${(event: CustomEvent<InputChangeEventDetail>) => formChanged(event, this.i18n)}>
          <ion-item-group>
            <ion-item>
              <ion-label class="wider-label" position="fixed" for="name">${this.i18n.NAME}</ion-label>
              <ion-input
                placeholder="${this.i18n.NAME}"
                debounce="0"
                type="text"
                autofocus
                required
                id="name"
                name="name"
                value="${this.signUpData.name ?? ''}"
              ></ion-input>
            </ion-item>
            <div class="error ${this.mode}"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label class="wider-label" position="fixed" for="email">${this.i18n.E_MAIL}</ion-label>
              <ion-input
                placeholder="${this.i18n.E_MAIL}"
                type="email"
                required
                id="email"
                name="email"
                value="${this.signUpData.email ?? ''}"
              ></ion-input>
            </ion-item>
            <div class="error ${this.mode}"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label class="wider-label" position="fixed" for="password">${this.i18n.PASSWORD}</ion-label>
              <ion-input
                placeholder="${this.i18n.PASSWORD}"
                clear-on-edit="false"
                type="password"
                required
                minlength="10"
                id="password"
                name="password"
                value="${this.signUpData.password ?? ''}"
              ></ion-input>
            </ion-item>
            <div class="error ${this.mode}"></div>
          </ion-item-group>
          <ion-item-group>
            <ion-item>
              <ion-label class="wider-label" position="fixed" for="password-check">
                ${this.i18n.PASSWORD_CONFIRM}</ion-label
              >
              <ion-input
                placeholder="${this.i18n.PASSWORD_CONFIRM}"
                debounce="1000"
                clear-on-edit="false"
                type="password"
                required
                minlength="10"
                id="password-check"
                name="passwordCheck"
                value="${this.signUpData.passwordCheck ?? ''}"
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
                <ion-chip id="B">${this.i18n.B}</ion-chip>
                <ion-chip id="C">${this.i18n.C}</ion-chip>
                <ion-chip id="D">${this.i18n.D}</ion-chip>
                <ion-chip id="E">${this.i18n.E}</ion-chip>
                <ion-chip id="F">${this.i18n.F}</ion-chip>
                <ion-chip id="H">${this.i18n.H}</ion-chip>
                <ion-chip id="I">${this.i18n.I}</ion-chip>
                <ion-chip id="J">${this.i18n.J}</ion-chip>
                <ion-chip id="K">${this.i18n.K}</ion-chip>
                <ion-chip id="L">${this.i18n.L}</ion-chip>
                <ion-chip id="M">${this.i18n.M}</ion-chip>
                <ion-chip id="N">${this.i18n.N}</ion-chip>
                <ion-chip id="Rin">${this.i18n.Rin}</ion-chip>
                <ion-chip id="Fis">${this.i18n.Fis}</ion-chip>
                <ion-chip id="Gfl">${this.i18n.Gfl}</ion-chip>
                <ion-chip id="Alk">${this.i18n.Alk}</ion-chip>
                <ion-chip id="ADI">${this.i18n.ADI}</ion-chip>
                <ion-chip id="AGE">${this.i18n.AGE}</ion-chip>
                <ion-chip id="AHA">${this.i18n.AHA}</ion-chip>
                <ion-chip id="AKA">${this.i18n.AKA}</ion-chip>
                <ion-chip id="ARO">${this.i18n.ARO}</ion-chip>
                <ion-chip id="AWE">${this.i18n.AWE}</ion-chip>
                <ion-chip id="HMA">${this.i18n.HMA}</ion-chip>
                <ion-chip id="HHA">${this.i18n.HHA}</ion-chip>
                <ion-chip id="HWA">${this.i18n.HWA}</ion-chip>
                <ion-chip id="HCA">${this.i18n.HCA}</ion-chip>
                <ion-chip id="HPE">${this.i18n.HPE}</ion-chip>
                <ion-chip id="HPA">${this.i18n.HPA}</ion-chip>
                <ion-chip id="HPI">${this.i18n.HPI}</ion-chip>
                <ion-chip id="HQU">${this.i18n.HQU}</ion-chip>
                <chip-toggle-show-more></chip-toggle-show-more>
              </chip-select>
            </ion-item>
            <div class="error"></div>
          </ion-item-group>
          <ion-item-group>
            <div class="error"></div>
          </ion-item-group>
          <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_UP}</ion-button>
            <div class="error pw-repeat-error ${this.mode}"></div>
          </ion-item-group>
          <div style="display:flex">
            <ion-button
              style=""
              color="light"
              type="button"
              @click="${() => {
                this.signUpData = {
                  name: this.nameElement.value,
                  email: this.emailElement.value,
                  password: this.passwordElement.value,
                  passwordCheck: this.passwordCheckElement.value
                };
                this.currentStep = 1;
              }}"
              >${this.i18n.PREVIOUS_STEP}</ion-button
            >
            <div style="flex-grow:1"></div>
            <ion-button color="primary" type="button" @click="${this.submit}">${this.i18n.SIGN_UP}</ion-button>
          </div>
        </form>
      </div>
    `;
  }
  protected get stepOne(): TemplateResult {
    return html`
      <div class="ion-padding">
        <h1>${this.i18n.STEP_1}: ${this.i18n.PERSONAL_DATA}</h1>
        <p>
          Bist du beim Essen wählerisch oder hast einen sensiblen Magen? Hinterlege Informationen zu deinen Vorlieben
          damit dir Gerichte angezeigt werden, die für dich interessant sind.
        </p>

        <ion-list>
          <ion-item>
            <div
              style="padding-top: 10px; padding-bottom: 10px; display:flex; align-items:center; width:100%; justify-content:flex-start"
            >
              <div style="width:160px">
                <ion-label>
                  <h2>${this.i18n.STATUS}</h2>
                </ion-label>
              </div>
              <div style="min-width:220px;width:40%">
                <ion-segment mode="ios" @ionChange=${(e: any) => (this.status = e.detail.value)} value=${this.status}>
                  ${ALL_STATUS.map((status, i) => {
                    let euros = '€'.repeat(i + 1);
                    return html`
                      <ion-segment-button value="${status}">
                        <ion-label>${this.i18n[status]}</ion-label>
                        <h4>${euros}</h4>
                      </ion-segment-button>
                    `;
                  })}
                </ion-segment>
              </div>
            </div>
          </ion-item>

          <ion-item>
            <div
              style="padding-top: 10px; padding-bottom: 10px; display:flex; align-items:center; width:100%; justify-content:flex-start"
            >
              <div style="width:160px">
                <ion-label>
                  <h2>${this.i18n.DIET}</h2>
                </ion-label>
              </div>
              <div style="min-width:220px;width:40%">
                <ion-segment
                  mode="ios"
                  @ionChange=${(e: any) => (this.newFilterConfig = { ...this.newFilterConfig, diet: e.detail.value })}
                  value=${this.newFilterConfig.diet}
                >
                  ${ALL_DIETS.map(diet => {
                    let imagePath: string;
                    switch (diet) {
                      case 'STANDARD_DIET':
                        imagePath = 'images/beef.png';
                        break;
                      case 'Vgn':
                        imagePath = 'images/vegan.png';
                        break;
                      case 'Vgt':
                        imagePath = 'images/veggie.png';
                        break;
                    }
                    return html`
                      <ion-segment-button value="${diet}">
                        <ion-label>${this.i18n[diet]}</ion-label>
                        <ion-img style="width:30px" src=${imagePath}></ion-img>
                      </ion-segment-button>
                    `;
                  })}
                </ion-segment>
              </div>
            </div>
          </ion-item>

          <ion-item>
            <div style="display:flex; align-items:center; width:100%">
              <div style="width:160px">
                <ion-label>
                  <h2>${this.i18n.INDIGESTIBILITIES}</h2>
                </ion-label>
              </div>
              <div>
                <chip-select
                  @chip-select-change=${(e: any) => {
                    const contents = e.detail.map((contentChipElem: any) => contentChipElem.id);
                    this.newFilterConfig = { ...this.newFilterConfig, nogos: contents };
                  }}
                >
                  ${this.allContents.map(content => {
                    const isSelected = this.newFilterConfig.nogos.includes(content);
                    return html`
                      <ion-chip id=${content} class="${isSelected ? 'selected' : ''}">${this.i18n[content]}</ion-chip>
                    `;
                  })}
                  <chip-toggle-show-more .cutOffIndex=${4}></chip-toggle-show-more>
                </chip-select>
              </div>
            </div>
          </ion-item>
        </ion-list>
        <ion-button style="float:right;" color="primary" type="button" @click="${() => (this.currentStep = 2)}"
          >${this.i18n.NEXT_STEP}</ion-button
        >
      </div>
    `;
  }

  protected async submitFirstStep(): Promise<void> {}

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
        filterConfig: this.newFilterConfig,
        status: this.status
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
    const formElements = [this.nameElement, this.emailElement, this.passwordElement, this.passwordCheckElement];
    for (const element of formElements) {
      if (element.value === '') {
        const parent = <HTMLIonInputElement>element.parentElement;
        parent.value = ' ';
        parent.value = '';
      }
    }
    return this.form.checkValidity();
  }
}
