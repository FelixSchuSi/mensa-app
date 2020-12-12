import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { toggleIosMd } from '../../helpers/toggle-ios-md';
import { LanguageStrings } from '../../models/language-strings';
import { Languages } from '../../models/languages';
import { i18nService } from '../../services/i18n.service';
import { PageMixin } from '../page.mixin';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./settings.page.scss');

@customElement('app-settings')
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

  @internalProperty()
  protected i18n!: LanguageStrings;

  @property()
  protected mode: 'ios' | 'md' = 'md';

  constructor() {
    super();
    this.mode = <'ios' | 'md'>localStorage.getItem('mode') ?? this.mode;
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${() => history.back()}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
          <ion-title>${this.i18n.SETTINGS}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.SETTINGS}</ion-title>
          </ion-toolbar>
        </ion-header>
        ${this.renderNotification()}
        <ion-list>
          <ion-item>
            <ion-label>${this.i18n.LANGUAGE}</ion-label>
            <div slot="end">
              <ion-segment mode="ios" value=${this.i18n._LANGUAGE}>
                <ion-segment-button
                  @click=${() => {
                    i18nService.language = Languages.ENGLISH;
                  }}
                  value="${Languages.ENGLISH}"
                >
                  <ion-label>${this.i18n.ENGLISH}</ion-label>
                </ion-segment-button>
                <ion-segment-button
                  @click=${() => {
                    i18nService.language = Languages.GERMAN;
                  }}
                  value="${Languages.GERMAN}"
                >
                  <ion-label>${this.i18n.GERMAN}</ion-label>
                </ion-segment-button>
              </ion-segment>
            </div>
          </ion-item>
          <ion-item>
            <ion-label>${this.i18n.APPEARANCE}</ion-label>
            <div slot="end">
              <ion-segment mode="ios" value=${this.mode}>
                <ion-segment-button @click=${() => toggleIosMd(this.mode)} value="ios">
                  <ion-icon name="logo-apple"></ion-icon>
                </ion-segment-button>
                <ion-segment-button @click=${() => toggleIosMd(this.mode)} value="md">
                  <ion-icon name="logo-android"></ion-icon>
                </ion-segment-button>
              </ion-segment>
            </div>
          </ion-item>
        </ion-list>
      </ion-content>
    `;
  }
}
