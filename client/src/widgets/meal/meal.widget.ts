import { LitElement, customElement, property, TemplateResult, html, query } from 'lit-element';
import { Meal } from '../../../../server/src/models/meal';
import { Status } from '../../../../server/src/models/status';
import { getSlidesPerView } from '../../helpers/get-slides-per-view';
import { LanguageStrings } from '../../models/language-strings';
import { transformDate } from './transform-date';
import { transformPrice } from './transform-price';

@customElement('app-meal')
export class MealWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }
  @property({ type: Object })
  public meal!: Meal;

  @property({ type: String })
  public status?: Status;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Boolean })
  protected isFavorite!: boolean;

  @query('macro-carousel')
  protected carousel!: any;

  protected slidesPerView = getSlidesPerView();

  protected pictureNumber = String(Math.ceil(Math.random() * 5));
  protected get favoriteButton(): TemplateResult {
    return html`
      <ion-buttons style="position:absolute; right:0px; top:0px; z-index:999; padding:4px">
        <ion-button @click=${() => (this.isFavorite = !this.isFavorite)}>
          <ion-icon slot="icon-only" color="primary" name=${this.isFavorite ? 'star' : 'star-outline'}></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }

  protected get images(): TemplateResult {
    const onmousedown = (e: any) => {
      e.preventDefault();
      return false;
    };

    return html`
      <macro-carousel
        @touchstart="${() => this.carousel.update()}"
        @mousedown="${() => this.carousel.update()}"
        @dragstart=${(e: any) => {
          if (e.target.nodeName.toUpperCase() == 'ION-IMG') {
            console.log(true);
            return false;
          }
        }}
        .slidesPerView=${this.slidesPerView ?? 2}
      >
        <ion-img
          @mousedown="${onmousedown}"
          class="meal-img"
          src=${`./images/meal0${this.pictureNumber}_pic01.jpg`}
        ></ion-img>
        <ion-img
          @mousedown="${onmousedown}"
          class="meal-img"
          src=${`./images/meal0${this.pictureNumber}_pic02.jpg`}
        ></ion-img>
        <ion-img
          @mousedown="${onmousedown}"
          class="meal-img"
          src=${`./images/meal0${this.pictureNumber}_pic03.jpg`}
        ></ion-img>
        <ion-img
          @mousedown="${onmousedown}"
          class="meal-img"
          src=${`./images/meal0${this.pictureNumber}_pic04.jpg`}
        ></ion-img>
      </macro-carousel>
    `;
  }

  protected render(): TemplateResult {
    const { title, date, mensa, additives, allergens, otherInfo, price } = this.meal;
    return html`
      <ion-card>
        ${this.images}
        <ion-card-header>
          ${this.favoriteButton}
          <ion-card-subtitle> ${this.i18n[mensa]} </ion-card-subtitle>
          <ion-card-title style="display:flex">
            <div style="flex-grow:1">${title}</div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display:flex">
          <div class="big-layout">${transformDate(date, this.i18n)}</div>
          <div class="small-layout">${transformDate(date, this.i18n, true)}</div>
          <div style="flex-grow: 1"></div>
          <div class="big-layout">${transformPrice(price, this.status, this.i18n)}</div>
          <div class="small-layout">${transformPrice(price, this.status, this.i18n, true)}</div>
        </ion-card-content>
      </ion-card>
    `;
  }
}
