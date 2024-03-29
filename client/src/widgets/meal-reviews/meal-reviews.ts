import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Meal } from '../../../../server/src/models/meal';
import { LanguageStrings } from '../../models/language-strings';

@customElement('app-meal-reviews')
export class MealReviewsWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object })
  public meal!: Meal;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Number })
  protected rating!: number;

  @property({ type: String })
  protected mode!: 'ios' | 'md';

  protected render(): TemplateResult {
    return html`
      <ion-card class="card-no-margin-when-small">
        <ion-card-content>
          <ion-list>
            <ion-item
              class="item-no-side-padding"
              style="--highlight-color-focused: rgba(0, 0, 0, 0);
              ${this.mode === 'ios'
                ? '--padding-bottom'
                : 'padding-bottom'}:16px; --ion-item-background: var(--ion-card-background); --border-color: var(--ion-text-color);"
            >
              <div style="display:flex; flex-direction:column; width:100%">
                <div style="display:flex; flex-direction:row; align-items:center">
                  <app-rating-starts-pick></app-rating-starts-pick>
                  <div style="flex-grow:1"></div>
                  <ion-avatar slot="end" style="width: 50px; height: 50px;">
                    <img src="./svg/avatar.svg" />
                  </ion-avatar>
                </div>
                <ion-textarea
                  style="width:100%; --border-radius: 5px"
                  placeholder="${this.i18n.WRITE_A_REVIEW}..."
                ></ion-textarea>
              </div>
            </ion-item>
            <app-meal-review .rating=${this.rating + 0.5}></app-meal-review>
            <app-meal-review .rating=${this.rating - 0.5}></app-meal-review>
            <app-meal-review .rating=${this.rating}></app-meal-review>
            <app-meal-review .rating=${this.rating + 0.5}></app-meal-review>
            <app-meal-review .rating=${this.rating - 0.5}></app-meal-review>
          </ion-list>
        </ion-card-content>
      </ion-card>
    `;
  }
}
