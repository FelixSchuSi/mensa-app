import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';
import { AdditivesKeys } from '../../../../server/src/models/additives';
import { AllergenesKeys } from '../../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../../server/src/models/other-meal-info';
import { getAllContents } from '../../helpers/all-contents';
import { ALL_DIETS } from '../../helpers/all-diets';
import { ALL_MENSEN } from '../../helpers/all-mensen';
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

  protected allContents: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = getAllContents();

  public applyFilterConfig!: (newFilterConfig: MealFilterConfig) => void;
  public oldFilterConfig!: MealFilterConfig;
  private _newFilterConfig!: MealFilterConfig;
  private get newFilterConfig(): MealFilterConfig {
    return this._newFilterConfig ?? this.oldFilterConfig;
  }
  private set newFilterConfig(newConfig: MealFilterConfig) {
    this._newFilterConfig = newConfig;
  }

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {
    this.newFilterConfig = this.oldFilterConfig;
    this.allContents;
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
            <ion-button @click="${this.dismissModal}">${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div style="padding-right: 16px;">
          <ion-list>
            <ion-item>
              <div
                style="padding-top: 10px; padding-bottom: 10px; display:flex; align-items:center; width:100%; justify-content:flex-start"
              >
                <div style="width:20%">
                  <ion-label>
                    <h2>${this.i18n.DIET}</h2>
                  </ion-label>
                </div>
                <div style="width:40%">
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
                <div style="width:20%">
                  <ion-label>
                    <h2>${this.i18n.LOCATION}</h2>
                  </ion-label>
                </div>
                <div style="width:80%">
                  <chip-select
                    @chip-select-change=${(e: any) => {
                      const mensen = e.detail.map((mensaChipElem: any) => mensaChipElem.id);
                      this.newFilterConfig = { ...this.newFilterConfig, mensen };
                    }}
                  >
                    ${ALL_MENSEN.map(mensa => {
                      const isSelected = this.newFilterConfig.mensen.includes(mensa);
                      const shortMensa:
                        | 'aasee_short'
                        | 'davinci_short'
                        | 'denkpause_short'
                        | 'ring_short'
                        | 'steinfurt_short' = <any>(mensa + '_short');
                      return html`
                        <ion-chip id=${mensa} class="${isSelected ? 'selected' : ''}"
                          >${this.i18n[shortMensa]}</ion-chip
                        >
                      `;
                    })}
                  </chip-select>
                </div>
              </div>
            </ion-item>

            <ion-item>
              <div style="display:flex; align-items:center; width:100%">
                <div style="width:20%">
                  <ion-label>
                    <h2>${this.i18n.CONTENTS}</h2>
                  </ion-label>
                </div>
                <div style="width:80%">
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
          <ion-button
            style="float:right"
            @click=${() => {
              this.applyFilterConfig(this.newFilterConfig);
              this.dismissModal();
            }}
            >${this.i18n.APPLY_FILTER}</ion-button
          >
        </div>
      </ion-content>
    `;
  }
}
