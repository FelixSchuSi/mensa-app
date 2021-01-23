import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

/*
 * For some reason the default ion-back-button breaks when used on ios
 * When ios is detected we display a custom back button instead
 */
@customElement('app-back-button')
export class AppBackButtonWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property()
  protected mode!: 'ios' | 'md';

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <ion-buttons slot="start">
        <ion-button>
          ${this.mode === 'ios'
            ? html`
                <ion-icon name="chevron-back-outline"></ion-icon>
                ${this.i18n.BACK}
              `
            : html` <ion-icon slot="icon-only" name="arrow-back-outline"></ion-icon> `}
        </ion-button>
      </ion-buttons>
    `;
  }
}
