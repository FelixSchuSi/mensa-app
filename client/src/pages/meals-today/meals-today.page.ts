import {
  css,
  customElement,
  html,
  LitElement,
  property,
  queryAssignedNodes,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
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
    return html`
      ${this.renderNotification()}
      <p>Hier könnten Ihre heutigen Gerichte stehen!</p>
      <chip-select @chip-select-change=${(e: any) => console.log(e.detail, e)}>
        <ion-chip>asdf</ion-chip>
        <ion-chip class="selected">jklö</ion-chip>
        <ion-chip>asdfjklö</ion-chip>
      </chip-select>
      <ion-segment mode="ios" value=${this.mode}>
        <ion-segment-button value="ios"> unten </ion-segment-button>
        <ion-segment-button value="md"> mitte </ion-segment-button>
        <ion-segment-button value="sdf"> oben </ion-segment-button>
      </ion-segment>
    `;
  }
}
