import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { ChipSelectNoneChipWidget } from '../chip-select-none-chip/chip-select-none-chip';

const componentCSS = require('./chip-select.widget.scss');
const sharedCSS = require('../../shared.scss');

@customElement('chip-select')
export class ChipSelectWidget extends LitElement {
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

  @property({ type: String })
  protected mode: 'checkbox' | 'radio' = 'checkbox';

  @query('chip-select-none-chip')
  protected noneChip?: ChipSelectNoneChipWidget;

  protected get chips(): HTMLIonChipElement[] {
    return <HTMLIonChipElement[]>Array.from(this.querySelectorAll('ion-chip')!);
  }

  protected render(): TemplateResult {
    return html` <slot @slotchange=${this.handleSlotchange} class="slot-elem"> </slot> `;
  }

  public toggle(cutOffIndex: number, action: 'expand' | 'collapse'): void {
    this.chips.forEach((chip, i) => {
      if (i > cutOffIndex && !chip.classList.contains('readMoreToggle')) {
        if (action === 'collapse') {
          chip.classList.remove('ghost');
        } else if (action === 'expand') {
          chip.classList.add('ghost');
        }
      }
    });
  }

  public get value(): HTMLIonChipElement[] {
    const selectedChips = <any[]>this.chips.filter(chip => chip.classList.contains('selected'));
    return selectedChips;
  }

  protected handleSlotchange(e: any) {
    this.chips.forEach((chip: HTMLIonChipElement) => {
      chip.addEventListener('click', event => {
        //@ts-ignore
        let targetChip: HTMLElement = event.target ?? (event.path || event.composedPath())[2];
        //@ts-ignore
        targetChip = targetChip instanceof HTMLElement ? targetChip : event.path[0]; // sometimes the shadowroot is selected for some reason
        targetChip.classList.toggle('selected');
        const chipSelectEvent = new CustomEvent('chip-select-change', {
          detail: this.value
        });
        this.dispatchEvent(chipSelectEvent);
        const noneChip = <ChipSelectNoneChipWidget | null>this.querySelector('chip-select-none-chip');
        if (noneChip) {
          noneChip.evaluate();
        }
      });
    });
  }
}
