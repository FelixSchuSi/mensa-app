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
import { modalController } from '@ionic/core';
import { MealFilterConfig } from '../../../../server/src/models/meal-filter-config';
import { mealService } from '../../services/meal.service';
import { DEFAULT_MEAL_FILTER_CONFIG, filterMeals } from '../../helpers/filter-meals';
import { userService } from '../../services/user.service';
import { User } from '../../../../server/src/models/user';
import { getSlidesPerView } from '../../helpers/get-slides-per-view';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./meals-future.page.scss');

@customElement('app-meals-future')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MealsFuturePage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @query('ion-infinite-scroll')
  protected infiniteScrollElem!: HTMLIonInfiniteScrollElement;
  @internalProperty()
  protected scrollIndex: number = 0;

  @property({ attribute: false })
  protected displayMeals: Meal[] = [];
  protected mealBeforeTextSearch: Meal[] = [];
  protected allMeals: Meal[] = [];
  @internalProperty()
  protected userInfo?: User = userService.userInfo;
  protected mealFilterConfig: MealFilterConfig = this.userInfo?.filterConfig ?? DEFAULT_MEAL_FILTER_CONFIG;

  protected searchInput = '';

  protected applyTextSearch() {
    if (this.searchInput === '') return this.mealBeforeTextSearch;
    return this.mealBeforeTextSearch.filter(meal => meal.title.toLowerCase().includes(this.searchInput.toLowerCase()));
  }

  protected async firstUpdated(): Promise<void> {
    window.addEventListener('resize', this.carouselResizeHandler);
    try {
      userService.subscribe(user => {
        this.mealFilterConfig = user?.filterConfig ?? DEFAULT_MEAL_FILTER_CONFIG;
        this.userInfo = user;
        this.mealBeforeTextSearch = filterMeals(this.allMeals, this.mealFilterConfig);
        this.displayMeals = this.applyTextSearch();
      });
      mealService.subscribe((meals: Meal[]) => {
        this.allMeals = meals;
        this.mealBeforeTextSearch = filterMeals(this.allMeals, this.mealFilterConfig);
        this.displayMeals = this.applyTextSearch();
        if (this.displayMeals && this.displayMeals.length >= 5) {
          this.scrollIndex = 5;
        } else {
          this.scrollIndex = 1;
        }
      });
      await mealService.getMeals();
    } catch ({ message, statusCode }) {
      this.setNotification({ errorMessage: message });
      console.log({ message, statusCode });
    }
  }

  protected get searchBar(): TemplateResult {
    return html`
      <ion-searchbar
        @ionClear=${(e: any) => {
          this.searchInput = '';
          this.displayMeals = this.applyTextSearch();
        }}
        @input=${(e: any) => {
          this.searchInput = e.target.value;
          this.displayMeals = this.applyTextSearch();
        }}
        .placeholder=${this.i18n.SEARCH_MEALS}
      ></ion-searchbar>
    `;
  }

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.MEALS_FUTURE}</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click=${this.createModal}>
              <ion-icon slot="icon-only" src="svg/custom_filter.svg"></ion-icon>
            </ion-button>
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
              <!-- <ion-icon name="person-circle"></ion-icon> -->
              <!-- TODO: Make Google style avatar work -->
              <!-- <ion-avatar style="border-radius: 0px" slot="end">
                <img
                  style="width: 60px; height:60px"
                  src="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar.png"
                />
              </ion-avatar> -->
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.MEALS_FUTURE}</ion-title>
          </ion-toolbar>
          <ion-toolbar> ${this.searchBar} </ion-toolbar>
        </ion-header>
        ${this.mode === 'md' ? this.searchBar : html``}
        ${this.displayMeals
          .slice(0, this.scrollIndex)
          .map(
            meal =>
              html`<app-meal
                @click=${() =>
                  routerService.navigate(Routes.MEAL_FUTURE_DETAILS, { mensa: meal.mensa, title: meal.title })}
                .meal=${meal}
                .i18n=${this.i18n}
                .status=${this.userInfo?.status}
              ></app-meal>`
          )}
        <ion-infinite-scroll threshold="0px" @ionInfinite=${this.displayMore}>
          <ion-infinite-scroll-content loading-spinner="bubbles"> </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    `;
  }

  protected async displayMore() {
    const mealsLeft = this.displayMeals.length - 1 - this.scrollIndex;
    const indexChange = mealsLeft <= 5 ? mealsLeft : 5;
    this.infiniteScrollElem.complete();
    this.scrollIndex += indexChange;
  }

  protected async createModal() {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-filter-modal',
      swipeToClose: true,
      componentProps: {
        applyFilterConfig: this.applyFilterConfig,
        oldFilterConfig: this.mealFilterConfig
      }
    });

    await modal.present();
  }

  protected applyFilterConfig = (newFilterConfig: MealFilterConfig) => {
    this.mealFilterConfig = newFilterConfig;
    this.mealBeforeTextSearch = filterMeals(this.allMeals, this.mealFilterConfig);
    this.displayMeals = this.applyTextSearch();
  };

  protected carouselResizeHandler() {
    const allCarousels = <NodeListOf<any>>document.querySelectorAll('macro-carousel');
    const slidesPerView = getSlidesPerView();
    for (const carousel of allCarousels) {
      if (!carousel.classList.contains('no-resize')) {
        carousel.slidesPerView = slidesPerView;
      }
    }
  }
}
