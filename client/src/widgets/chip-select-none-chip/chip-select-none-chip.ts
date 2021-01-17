import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { ChipSelectWidget } from '../chip-select/chip-select.widget';

@customElement('chip-select-none-chip')
export class ChipSelectNoneChipWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  protected isSelected = true;

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

  protected firstUpdated(): void {
    this.evaluate();
  }
  protected render(): TemplateResult {
    return html` <ion-chip @click="${this.onClick}" id="none" class="selected"> Keine </ion-chip> `;
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
