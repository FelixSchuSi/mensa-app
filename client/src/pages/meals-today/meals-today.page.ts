import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';

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

  protected render(): TemplateResult {
    return html` ${this.renderNotification()} Hier könnten Ihre heutigen Gerichte stehen! `;
  }
}
