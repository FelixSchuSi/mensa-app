import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

@customElement('chip-select-none-chip')
export class ChipSelectNoneChipWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  protected isSelected = true;

  @state()
  protected i18n!: LanguageStrings;

  @query('ion-chip')
  protected chip?: HTMLIonChipElement;

  public evaluate(): void {
    let chipElements = <Array<HTMLIonChipElement>>Array.from(<any>this.parentElement?.children);
    chipElements = chipElements.filter(chip => {
      return (
        chip.nodeName.toLowerCase() !== 'chip-select-none-chip' &&
        chip.nodeName.toLowerCase() !== 'chip-toggle-show-more'
      );
    });
    const selectedElemens = chipElements.filter(chip => chip.classList.contains('selected'));
    this.isSelected = selectedElemens.length === 0;
    this.isSelected ? this.chip?.classList.add('selected') : this.chip?.classList.remove('selected');
  }

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {
    this.evaluate();
  }

  protected render(): TemplateResult {
    return html` <ion-chip @click="${this.onClick}" id="none" class="selected"> ${this.i18n.NONE} </ion-chip> `;
  }

  protected onClick(e: any): void {
    if (!this.isSelected) {
      let chipElements = <Array<HTMLIonChipElement>>Array.from(<any>this.parentElement?.children);
      chipElements = chipElements.filter(chip => {
        return (
          chip.nodeName.toLowerCase() !== 'chip-select-none-chip' &&
          chip.nodeName.toLowerCase() !== 'chip-toggle-show-more'
        );
      });
      chipElements.forEach(chip => {
        chip.classList.remove('selected');
      });
    }
  }
}
