import { modalController } from '@ionic/core';
import { customElement, html, internalProperty, LitElement, PropertyValues, TemplateResult } from 'lit-element';
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

  @internalProperty()
  protected activeChip: DateFilterType = 'all';

  @internalProperty()
  protected dateFilterConfig!: MealDateFilterConfig;

  @internalProperty()
  protected i18n!: LanguageStrings;

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
      <div class="card-like-padding" style="overflow: auto;  white-space: nowrap; margin-top:4px">
        <ion-chip @click=${this.onClick} id="all">${this.i18n.ALL}</ion-chip>
        <ion-chip @click=${this.onClick} id="tomorrow">${this.i18n.TOMORROW}</ion-chip>
        <ion-chip @click=${this.onClick} id="this-week">${this.i18n.THIS_WEEK}</ion-chip>
        <ion-chip @click=${this.onClick} id="next-week">${this.i18n.NEXT_WEEK}</ion-chip>
        <ion-chip @click=${this.onClick} id="custom">
          <ion-icon style="margin:0px" color="primary" name="calendar"></ion-icon>
        </ion-chip>
      </div>
    `;
  }

  protected async onClick(e: any): Promise<void> {
    let clickedChip = <HTMLIonChipElement>e.target;
    if (clickedChip.nodeName.toUpperCase() === 'ION-ICON') {
      clickedChip = <HTMLIonChipElement>clickedChip.parentElement; // The calendar icon was clicked
    }
    this.activeChip = <DateFilterType>clickedChip.id;
    this.applyDateFilter();
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
        return filterModal?.dateFilterConfig ?? DEFAULT_DATE_FILTER;
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
