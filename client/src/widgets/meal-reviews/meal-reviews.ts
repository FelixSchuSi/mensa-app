import { LitElement, customElement, property, TemplateResult, html, query } from 'lit-element';
import { Meal } from '../../../../server/src/models/meal';
import { LanguageStrings } from '../../models/language-strings';

@customElement('app-meal-reviews')
export class MealReviewWidgets extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object })
  public meal!: Meal;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Number })
  protected rating!: number;

  protected render(): TemplateResult {
    const { title, date, mensa, additives, allergens, otherInfo, price } = this.meal;
    return html`
      <ion-card>
        <ion-card-header>
          <ion-card-title style="display:flex">
            <div style="flex-grow:1">${this.i18n.REVIEWS}</div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display:flex"> blablabla </ion-card-content>
      </ion-card>
    `;
  }
}
