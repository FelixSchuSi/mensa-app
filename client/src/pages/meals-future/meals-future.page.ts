import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { httpService } from '../../services/http.service';
import { Meal } from '../../../../server/src/models/meal';
import { AdditivesKeys } from '../../../../server/src/models/additives';
import { AllergenesKeys } from '../../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../../server/src/models/other-meal-info';
import { LanguageKeys } from '../../i18n/language-keys';
import { Price } from '../../../../server/src/models/price';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

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

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ attribute: false })
  protected meals: Meal[] = [];

  protected async firstUpdated(): Promise<void> {
    try {
      const res = await httpService.get('meals');
      const json = await res.json();
      this.meals = json.results;
    } catch (e) {}
  }

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.MEALS_FUTURE}</ion-title>
          <ion-buttons slot="primary">
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
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        ${this.renderNotification()}
        ${this.meals.map(meal => {
          const { title, date, mensa, additives, allergens, otherInfo, price } = meal;
          const entries = Object.entries({ date, mensa, additives, allergens, otherInfo, price });
          return html` <h2>${title}</h2>
            ${entries.map(([key, value]) => html`<span><b>${key}:</b> ${this.renderValue(value)}</span><br />`)}
            <br />`;
        })}
      </ion-content>
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

  protected renderPrice(price: Price): string {
    const { student, employee, guest } = price;
    return `${student} € - ${employee} € - ${guest} €`;
  }
}
