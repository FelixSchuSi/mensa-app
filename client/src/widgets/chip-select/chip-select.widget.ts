import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';

const componentCSS = require('./chip-select.widget.scss');
const sharedCSS = require('../../shared.scss');

@customElement('chip-select')
class ChipSelectWidget extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: String })
  protected mode: 'checkbox' | 'radio' = 'checkbox';

  protected chips!: HTMLIonChipElement[];

  protected render(): TemplateResult {
    return html` <slot @slotchange=${this.handleSlotchange} class="slot-elem"> </slot> `;
  }

  protected handleSlotchange(e: any) {
    this.chips = <HTMLIonChipElement[]>Array.from(this.querySelectorAll('ion-chip')!);
    this.chips.forEach((chip: HTMLIonChipElement) => {
      chip.addEventListener('click', event => {
        //@ts-ignore
        let targetChip: HTMLElement = event.originalTarget ?? event.path[2];
        //@ts-ignore
        targetChip = targetChip instanceof HTMLElement ? targetChip : event.path[0]; // sometimes the shadowroot is selected for some reason
        targetChip.classList.toggle('selected');
        let selectedChips = this.chips.filter(chip => chip.classList.contains('selected'));
        // TODO: Implement radio mode
        // if (this.mode === 'radio') {
        //   selectedChips.forEach(chip => {
        //     // unselect the previously selected element
        //     if (chip.classList.contains('selected') && chip !== targetChip) {
        //       if(targetChip)chip.classList.remove('selected');
        //     }
        //   });
        // }
        selectedChips = this.chips.filter(chip => chip.classList.contains('selected'));
        const chipSelectEvent = new CustomEvent('chip-select-change', {
          detail: selectedChips
        });
        this.dispatchEvent(chipSelectEvent);
      });
    });
  }
}
