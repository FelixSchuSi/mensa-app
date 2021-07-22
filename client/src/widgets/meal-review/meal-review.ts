import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Meal } from '../../../../server/src/models/meal';
import { LanguageStrings } from '../../models/language-strings';

@customElement('app-meal-review')
export class MealReviewWidget extends LitElement {
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
    return html`
      <ion-item
        class="item-no-side-padding"
        style="--inner-padding-top: 5px; --ion-item-background: var(--ion-card-background); --border-color: rgba(0, 0, 0, 0);"
      >
        <ion-avatar slot="start">
          <img src="./svg/avatar.svg" />
        </ion-avatar>
        <ion-label>
          <app-rating-starts .rating=${this.rating}></app-rating-starts>
          <h2>Rach der Restauranttester</h2>
        </ion-label>
      </ion-item>
      <ion-item
        class="item-no-side-padding"
        style="--inner-padding-bottom:16px; color:var(--ion-color-step-600, #666666); --border-color: rgba(0, 0, 0, 0); --min-height: 0px !important; --ion-item-background: var(--ion-card-background)"
      >
        Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen,
        was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird
        zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb
        ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte
        schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen
        noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte
        meist nur träumen.
      </ion-item>
    `;
  }
}
