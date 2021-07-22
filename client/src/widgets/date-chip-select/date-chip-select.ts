import { modalController } from '@ionic/core';
import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { getToday } from '../../helpers/get-today';
import { getTomorrow } from '../../helpers/get-tomorrow';
import { LanguageStrings } from '../../models/language-strings';
import { DateFilterType, DEFAULT_DATE_FILTER, MealDateFilterConfig } from '../../models/meal-date-filter-config';
import { i18nService } from '../../services/i18n.service';
import { DateFilterModalWidget } from '../date-filter-modal/date-filter-modal';

@customElement('date-chip-select')
export class DateChipSelectWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @state()
  protected activeChip: DateFilterType = 'all';

  @state()
  protected dateFilterConfig!: MealDateFilterConfig;

  @state()
  protected i18n!: LanguageStrings;

  @query('.chip-wrapper')
  protected chipWrapperElement!: HTMLDivElement;

  protected mouseDownPos: number = 0;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

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
      <app-horizontal-scroller class="card-like-padding" @mousedown=${(e: any) => (this.mouseDownPos = e.clientX)}>
        <ion-chip style="flex-shrink:0" @click=${this.onClick} id="all">${this.i18n.ALL}</ion-chip>
        <ion-chip style="flex-shrink:0" @click=${this.onClick} id="tomorrow">${this.i18n.TOMORROW}</ion-chip>
        <ion-chip style="flex-shrink:0" @click=${this.onClick} id="this-week">${this.i18n.THIS_WEEK}</ion-chip>
        <ion-chip style="flex-shrink:0" @click=${this.onClick} id="next-week">${this.i18n.NEXT_WEEK}</ion-chip>
        <ion-chip style="flex-shrink:0" @click=${this.onClick} id="custom">
          <ion-icon style="margin:0px" color="primary" name="calendar"></ion-icon>
        </ion-chip>
      </app-horizontal-scroller>
    `;
  }

  protected async onClick(e: any): Promise<void> {
    let clickedChip = <HTMLIonChipElement>e.target;
    if (clickedChip.nodeName.toUpperCase() === 'ION-ICON') {
      clickedChip = <HTMLIonChipElement>clickedChip.parentElement; // The calendar icon was clicked
    }
    if ((this.mouseDownPos - e.clientX) ** 2 <= 7) {
      this.activeChip = <DateFilterType>clickedChip.id;
      this.applyDateFilter();
    }
    this.mouseDownPos = 0;
  }

  protected async buildDateFilterConfig(): Promise<MealDateFilterConfig> {
    switch (this.activeChip) {
      case 'tomorrow':
        const tomorrow = getTomorrow();
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
      case 'custom':
        const modal: HTMLIonModalElement = await modalController.create({
          component: 'app-date-filter-modal',
          swipeToClose: true,
          componentProps: {
            dateFilterConfig: this.dateFilterConfig
          }
        });
        await modal.present();
        await modal.onWillDismiss();
        const filterModal = <DateFilterModalWidget | null>modal.querySelector('app-date-filter-modal');
        if (!filterModal || filterModal.dateFilterConfig === null) {
          this.activeChip = 'all';
          this.chipWrapperElement.scrollTo(0, 0);
          return DEFAULT_DATE_FILTER;
        } else {
          return filterModal.dateFilterConfig;
        }
      case 'all':
      default:
        return DEFAULT_DATE_FILTER;
    }
  }

  protected async applyDateFilter(): Promise<void> {
    const filterChangeEvent = new CustomEvent('date-filter-change', {
      detail: await this.buildDateFilterConfig()
    });
    this.dispatchEvent(filterChangeEvent);
  }
}
