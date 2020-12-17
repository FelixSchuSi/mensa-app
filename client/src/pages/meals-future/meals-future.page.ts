import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { httpService } from '../../services/http.service';

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

  protected async firstUpdated(): Promise<void> {
    try {
      const res = await httpService.get('meals');
      const json = await res.json();
      console.log(json);
    } catch (e) {}
  }

  protected render(): TemplateResult {
    return html` ${this.renderNotification()} Hier könnten Ihre Gerichte stehen! `;
  }
}
