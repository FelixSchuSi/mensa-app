import { LitElement, customElement, TemplateResult, html, internalProperty } from 'lit-element';
import { DEFAULT_MEAL_FILTER_CONFIG } from '../../helpers/filter-meals';
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

  protected allMensen = DEFAULT_MEAL_FILTER_CONFIG.mensen;
  public applyFilterConfig!: (newFilterConfig: MealFilterConfig) => void;
  public oldFilterConfig!: MealFilterConfig;
  public newFilterConfig!: MealFilterConfig;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {
    this.newFilterConfig = this.oldFilterConfig;
  }

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    modal.dismiss();
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

            <div>
              <chip-select
                @chip-select-change=${(e: any) => {
                  const mensen = e.detail.map((mensaChipElem: any) => mensaChipElem.id);
                  this.newFilterConfig = { ...this.newFilterConfig, mensen };
                }}
              >
                ${this.allMensen.map(mensa => {
                  if (!this.newFilterConfig) this.newFilterConfig = this.oldFilterConfig;
                  const isSelected = this.newFilterConfig.mensen.includes(mensa);
                  return html`
                    <ion-chip id=${mensa} class="${isSelected ? 'selected' : ''}">${this.i18n[mensa]}</ion-chip>
                  `;
                })}
              </chip-select>
            </div>
          </ion-item>
        </ion-list>
        <ion-button
          @click=${() => {
            this.applyFilterConfig(this.newFilterConfig);
            this.dismissModal();
          }}
          >${this.i18n.APPLY_FILTER}</ion-button
        >
      </ion-content>
    `;
  }
}
