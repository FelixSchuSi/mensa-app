import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { ChipSelectWidget } from '../chip-select/chip-select.widget';

const componentCSS = require('./chip-toggle-show-more.scss');
const sharedCSS = require('../../shared.scss');

@customElement('chip-toggle-show-more')
export class ChipToggleShowMore extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  protected createRenderRoot() {
    return this;
  }

  @property({ type: Boolean })
  protected expanded: boolean = true;

  @property({ type: Number, attribute: false })
  protected cutOffIndex: number = 1;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {
    this.toggle();
  }

  protected get showMoreChip(): TemplateResult {
    return html`
      <ion-chip class="readMoreToggle" @click=${this.toggle}>
        ${this.i18n.READ_MORE}
        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon>
      </ion-chip>
    `;
  }

  protected get showLessChip(): TemplateResult {
    return html`
      <ion-chip class="readMoreToggle" @click=${this.toggle}>
        ${this.i18n.SHOW_LESS}
        <ion-icon color="primary" name="arrow-up-outline"></ion-icon>
      </ion-chip>
    `;
  }

  protected toggle(): void {
    this.expanded = !this.expanded;
    const chipSelectElement = <ChipSelectWidget | null>this.parentElement;
    if (chipSelectElement) {
      chipSelectElement.toggle(this.cutOffIndex, this.expanded ? 'collapse' : 'expand');
    }
  }

  protected render(): TemplateResult {
    return html` ${this.expanded ? this.showLessChip : this.showMoreChip} `;
  }
}
