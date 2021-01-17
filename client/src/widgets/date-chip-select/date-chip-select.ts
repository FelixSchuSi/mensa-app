import { customElement, html, internalProperty, LitElement, PropertyValues, TemplateResult } from 'lit-element';
import { getToday } from '../../helpers/get-today';
import { getTomorrow } from '../../helpers/get-tomorrow';
import { DateFilterType, DEFAULT_DATE_FILTER, MealDateFilterConfig } from '../../models/meal-date-filtter-config';

@customElement('date-chip-select')
export class DateChipSelectWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @internalProperty()
  protected activeChip: DateFilterType = 'all';

  protected get allChips(): HTMLIonChipElement[] {
    return <HTMLIonChipElement[]>Array.from(this.querySelectorAll('ion-chip')!);
  }

  protected updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has('activeChip')) {
      this.allChips.forEach(chip => {
        if (chip.id === this.activeChip) {
          chip.classList.add('selected');
        } else {
          chip.classList.remove('selected');
        }
      });
    }
  }

  protected render(): TemplateResult {
    return html`
      <div class="card-like-padding" style="overflow: auto;  white-space: nowrap; margin-top:4px">
        <ion-chip @click=${this.onClick} id="all">All</ion-chip>
        <ion-chip @click=${this.onClick} id="tomorrow">Tomorrow</ion-chip>
        <ion-chip @click=${this.onClick} id="this-week">This week</ion-chip>
        <ion-chip @click=${this.onClick} id="next-week">Next week</ion-chip>
        <ion-chip @click=${this.onClick} id="custom">
          <ion-icon style="margin:0px" color="primary" name="calendar"></ion-icon>
        </ion-chip>
      </div>
    `;
  }

  protected onClick(e: any): void {
    let clickedChip = <HTMLIonChipElement>e.target;
    if (clickedChip.nodeName.toUpperCase() === 'ION-ICON') {
      clickedChip = <HTMLIonChipElement>clickedChip.parentElement; // The calendar icon was clicked
    }
    this.activeChip = <DateFilterType>clickedChip.id;
    const filterChangeEvent = new CustomEvent('date-filter-change', {
      detail: this.buildDateFilterConfig()
    });
    this.dispatchEvent(filterChangeEvent);
  }

  protected buildDateFilterConfig(): MealDateFilterConfig {
    switch (this.activeChip) {
      case 'tomorrow':
        const tomorrow = getTomorrow();
        console.log(tomorrow);
        return { start: tomorrow.getTime(), end: tomorrow.getTime() };
      case 'this-week':
        let endOfThisWeek = getToday();
        while (endOfThisWeek.getDay() !== 0) {
          endOfThisWeek.setDate(endOfThisWeek.getDate() + 1);
        }
        return { start: getTomorrow().getTime(), end: endOfThisWeek.getTime() };
      case 'next-week':
        let startOfNextWeek = getToday();
        startOfNextWeek.setDate(startOfNextWeek.getDate() + 1);
        while (startOfNextWeek.getDay() !== 1) {
          startOfNextWeek.setDate(startOfNextWeek.getDate() + 1);
        }
        let endOfNextWeek = new Date(startOfNextWeek.getTime());
        while (endOfNextWeek.getDay() !== 0) {
          endOfNextWeek.setDate(endOfNextWeek.getDate() + 1);
        }
        return { start: startOfNextWeek.getTime(), end: endOfNextWeek.getTime() };
      case 'all':
      default:
        return DEFAULT_DATE_FILTER;
    }
  }
}
