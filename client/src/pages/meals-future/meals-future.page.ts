import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { httpService } from '../../services/http.service';
import { Meal } from '../../../../server/src/models/meal';

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
      console.log(json);
    } catch (e) {}
  }

  protected render(): TemplateResult {
    return html` ${this.renderNotification()} Hier könnten Ihre Gerichte stehen!
    ${this.meals.map(meal => {
      const { title, date, mensa, additives, allergens, otherInfo, price } = meal;
      const entries = Object.entries({ date, mensa, additives, allergens, otherInfo, price });
      return html` <h2>${title}</h2>
        ${entries.map(([key, value]) => html`<span><b>${key}</b>${value}</span><br />`)} <br />`;
    })}`;
  }
}
