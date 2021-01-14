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

const sharedCSS = require('../../shared.scss');

@customElement('app-meal-detail')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MealDetailPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `
  ];

  @query('ion-infinite-scroll')
  protected infiniteScrollElem!: HTMLIonInfiniteScrollElement;

  @property()
  public imagesrc!: string;

  @property({ type: Object })
  public meal!: Meal;

  protected render(): TemplateResult {
    return html``;
  }
}
