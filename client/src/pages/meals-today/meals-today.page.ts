import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { httpService } from '../../services/http.service';
import { LanguageKeys } from '../../i18n/language-keys';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./meals-today.page.scss');

@customElement('app-meals-today')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MealsTodayPage extends PageMixin(LitElement) {
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
  protected mealStrings: LanguageKeys[] = [];

  protected async firstUpdated(): Promise<void> {
    try {
      const res = await httpService.get('meals');
      const json = await res.json();
      console.log(json);
      this.mealStrings = json.results!;
    } catch (e) {
      console.log(e);
    }
  }

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()} Hier könnten Ihre heutigen Gerichte stehen!
      ${this.mealStrings.map((str: LanguageKeys) => html`<p>${this.i18n[str]}</p>`)}
    `;
  }
}
