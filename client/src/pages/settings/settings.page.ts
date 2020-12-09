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
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Moin Meister!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
        ${this.renderNotification()}
        <ion-button @click=${i18nService.toggleLanguage}>${this.i18n.SWITCH_LANGUAGE}</ion-button>
        <ion-button @click=${() => toggleIosMd(this.mode)}>
          Switch to ${this.mode === 'md' ? 'ios' : 'md'} mode
        </ion-button>
      </ion-content>
    `;
  }
}
