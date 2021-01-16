import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  query,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { PageMixin } from '../page.mixin';
import { Meal } from '../../../../server/src/models/meal';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { mealService } from '../../services/meal.service';
import { transformDate } from '../../widgets/meal/transform-date';
import { transformPrice } from '../../widgets/meal/transform-price';

const sharedCSS = require('../../shared.scss');

@customElement('app-meal-detail')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MealDetailPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `
  ];

  @property({ type: Object })
  public meal?: Meal;

  @internalProperty()
  protected isBookmark: boolean = false;

  @query('macro-carousel')
  protected carousel!: any;

  protected rating: number = Math.ceil(Math.random() * 10) / 2;
  protected pictureNumber = String(Math.ceil(Math.random() * 5));

  protected async firstUpdated(): Promise<void> {
    try {
      this.meal = await mealService.getMeal(location.search);
      console.log(this.meal);
    } catch ({ message, statusCode }) {
      this.setNotification({ errorMessage: message });
    }
  }

  protected render(): TemplateResult {
    if (!this.meal) return html``;
    const { title, date, mensa, additives, allergens, otherInfo, price } = this.meal;
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${async () => {
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
          <ion-buttons slot="primary">
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-card class="meal-detail-card card-no-margin-when-small">
          ${this.images}
          <ion-card-header style="padding-top: 0 !important">
            ${this.bookmarkButton}
            <ion-card-subtitle> <ion-icon name="location-outline"></ion-icon> ${this.i18n[mensa]} </ion-card-subtitle>
            <ion-card-subtitle>
              <div class="big-layout">
                <ion-icon name="calendar-outline"></ion-icon> ${transformDate(date, this.i18n)}
              </div>
              <div class="small-layout">
                <ion-icon name="calendar-outline"></ion-icon> ${transformDate(date, this.i18n, true)}
              </div>
            </ion-card-subtitle>

            <ion-card-title style="display:flex;">
              <div style="flex-grow:1">${title}</div>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            ${this.contents}

            <div style="display:flex; flex-direction:column; align-items: flex-end">
              <app-rating-starts .rating=${this.rating}></app-rating-starts>
              <div>${transformPrice(price, this.userInfo?.status, this.i18n)}</div>
            </div>
          </ion-card-content>
        </ion-card>
        <app-meal-reviews
          .mode=${this.mode}
          .i18n=${this.i18n}
          .meal=${this.meal}
          .rating=${this.rating}
        ></app-meal-reviews>
      </ion-content>
    `;
  }

  protected get contents(): TemplateResult[] {
    const template: TemplateResult[] = [];
    const allContentsWithImage = ['Rin', 'Sch', 'Vgt', 'Vgn', 'Fis', 'Gfl', 'Alk'];

    if (this.meal?.additives && this.meal.allergens && this.meal.otherInfo) {
      const { additives, allergens, otherInfo } = this.meal;
      let contents = [...additives, ...allergens, ...otherInfo];
      const contentsWithImage = contents.filter(content => allContentsWithImage.includes(<string>content));
      contents = contents.filter(content => !allContentsWithImage.includes(<string>content));
      [...contentsWithImage, ...contents].forEach(content => {
        template.push(html`
          <ion-chip class="meal-detail-chip">
            ${allContentsWithImage.includes(<string>content)
              ? html` <ion-avatar><img src=${`images/${content}.png`} /></ion-avatar>`
              : html``}

            <ion-label>${this.i18n[content]}</ion-label>
          </ion-chip>
        `);
      });
    }

    return template;
  }

  protected get images(): TemplateResult {
    const onmousedown = (e: any) => {
      e.preventDefault();
      return false;
    };

    const slidesPerView = 1;

    return html`
      <macro-carousel
        class="no-resize"
        @touchstart="${() => this.carousel.update()}"
        @mousedown="${() => this.carousel.update()}"
        @dragstart=${(e: any) => {
          if (e.target.nodeName.toUpperCase() == 'ION-IMG') {
            return false;
          }
        }}
        .slidesPerView=${slidesPerView}
        .navigation=${true}
        .pagination=${true}
      >
        <ion-img @mousedown="${onmousedown}" src=${`./images/meal0${this.pictureNumber}_pic01.jpg`}></ion-img>
        <ion-img @mousedown="${onmousedown}" src=${`./images/meal0${this.pictureNumber}_pic02.jpg`}></ion-img>
        <ion-img @mousedown="${onmousedown}" src=${`./images/meal0${this.pictureNumber}_pic03.jpg`}></ion-img>
        <ion-img @mousedown="${onmousedown}" src=${`./images/meal0${this.pictureNumber}_pic04.jpg`}></ion-img>
      </macro-carousel>
    `;
  }
  protected get bookmarkButton(): TemplateResult {
    return html`
      <ion-buttons style="position:absolute; right:0px; top:0px; z-index:999; padding:4px">
        <ion-button
          @click=${() => {
            this.isBookmark = !this.isBookmark;
            this.setNotification({
              infoMessage: this.isBookmark ? this.i18n.BOOKMARKED_MEAL_MSG : this.i18n.UNBOOKMARKED_MEAL_MSG,
              duration: 8000
            });
          }}
        >
          <ion-icon
            slot="icon-only"
            color="primary"
            name=${this.isBookmark ? 'bookmark' : 'bookmark-outline'}
          ></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }
}
