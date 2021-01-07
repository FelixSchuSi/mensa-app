import { LitElement, customElement, TemplateResult, html, internalProperty } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { MealFilterConfig } from '../../models/meal-filter-config';
import { i18nService } from '../../services/i18n.service';

@customElement('app-filter-modal')
export class FilterModalWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @internalProperty()
  protected i18n!: LanguageStrings;

  public applyFilterConfig!: (newFilterConfig: MealFilterConfig) => void;
  public oldFilterConfig!: MealFilterConfig;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    modal.dismiss();
  }

  protected applyFilter(): void {
    const event = new CustomEvent('apply-meal-filter');
  }

  protected render(): TemplateResult {
    return html`
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>${this.i18n.FILTER_MEALS}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="${this.dismissModal}">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <ion-list>
          <ion-item>
            <ion-label>
              <h2>Mensa</h2>
            </ion-label>
            <div slot="end">Hier mensen aussuchen</div>
          </ion-item>
        </ion-list>
        <ion-button
          @click=${() => {
            const newConfig: MealFilterConfig = {
              mensen: ['davinci', 'denkpause', 'ring', 'steinfurt'],
              nogos: []
            };
            this.applyFilterConfig(newConfig);
          }}
          >${this.i18n.APPLY_FILTER}</ion-button
        >
      </ion-content>
    `;
  }
}
