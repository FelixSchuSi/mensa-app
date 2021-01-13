import { LitElement, customElement, property, TemplateResult, html, query } from 'lit-element';
import { AdditivesKeys } from '../../../../server/src/models/additives';
import { AllergenesKeys } from '../../../../server/src/models/allergenes';
import { Meal } from '../../../../server/src/models/meal';
import { OtherMealInfoKeys } from '../../../../server/src/models/other-meal-info';
import { Price } from '../../../../server/src/models/price';
import { Status } from '../../../../server/src/models/status';
import { LanguageKeys } from '../../i18n/language-keys';
import { LanguageStrings } from '../../models/language-strings';
import { Languages } from '../../models/languages';

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
    return html`
      <macro-carousel
        @touchstart="${() => this.carousel.update()}"
        @mousedown="${() => this.carousel.update()}"
        .slidesPerView=${1}
      >
        <ion-img class="meal-img" src=${`./images/meal0${this.pictureNumber}_pic01.jpg`}></ion-img>
        <ion-img class="meal-img" src=${`./images/meal0${this.pictureNumber}_pic02.jpg`}></ion-img>
        <ion-img class="meal-img" src=${`./images/meal0${this.pictureNumber}_pic03.jpg`}></ion-img>
        <ion-img class="meal-img" src=${`./images/meal0${this.pictureNumber}_pic04.jpg`}></ion-img>
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
          <div>${this.transformDate(date)}</div>
          <div style="flex-grow: 1"></div>
          <div>${this.renderPrice(price)}</div>
        </ion-card-content>
      </ion-card>
    `;
  }

  protected renderValue(item: string | AdditivesKeys[] | AllergenesKeys[] | OtherMealInfoKeys[] | Price): string {
    if (typeof item === 'string') {
      return item;
    } else if (Array.isArray(item)) {
      return this.renderFoodStr(<string[]>item);
    } else if (typeof item === 'object') {
      return this.renderPrice(item);
    }
    return '';
  }

  protected renderFoodStr(strs: string[]): string {
    if (strs.length === 0) return '';

    const res = strs.map(i => {
      const key = <LanguageKeys>String(i);
      return this.i18n[key];
    });

    return res.reduce((acc, curr) => acc + ', ' + curr);
  }

  protected transformDate(dateIsoString: string): string {
    const date: Date = new Date(dateIsoString);
    const language = this.i18n._LANGUAGE === Languages.ENGLISH ? 'en-US' : 'de-DE';
    //@ts-ignore
    return new Intl.DateTimeFormat(language, { dateStyle: 'full' }).format(date);
  }

  protected renderPrice(price: Price): string {
    let { student, employee, guest } = this.transformPrice(price);
    switch (this.status) {
      case 'EMPLOYEE':
        return `${employee} €`;
      case 'GUEST':
        return `${guest} €`;
      case 'STUDENT':
        return `${student} €`;
      default:
        return `${student} € - ${employee} € - ${guest} €`;
    }
  }

  protected transformPrice(price: Price): { student: string; employee: string; guest: string } {
    let values = Object.values(price);

    const transformedValues = values.map(value => {
      // Enforce two decimal places
      let [vks, nks] = String(value).split('.');
      if (nks.length < 2) nks = nks + '0';

      let output: string;
      // swap comma and dot when lang is  german
      if (this.i18n._LANGUAGE === Languages.GERMAN) {
        output = vks + ',' + nks;
      } else {
        output = vks + '.' + nks;
      }
      return output;
    });

    const [student, employee, guest] = transformedValues;
    return { student, employee, guest };
  }
}
