import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';
import { truncateToDay } from '../../helpers/truncate-to-day';
import { LanguageStrings } from '../../models/language-strings';
import { DEFAULT_DATE_FILTER, MealDateFilterConfig } from '../../models/meal-date-filter-config';
import { i18nService } from '../../services/i18n.service';

@customElement('app-date-filter-modal')
export class DateFilterModalWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @internalProperty()
  protected i18n!: LanguageStrings;

  public dateFilterConfig!: MealDateFilterConfig;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {}

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    modal.dismiss();
  }

  protected render(): TemplateResult {
    return html`
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>${this.i18n.FILTER_MEALS}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="${this.dismissModal}">${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label>Start Date</ion-label>
            <ion-datetime
              id="startdate"
              @ionChange=${this.onChange}
              value="${this.toISOStringOrNull(this.dateFilterConfig.start)}"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Ends</ion-label>
            <ion-datetime
              id="enddate"
              @ionChange=${this.onChange}
              value="${this.toISOStringOrNull(this.dateFilterConfig.end)}"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          asdf
          <ion-button
            style="float:right"
            @click=${() => {
              this.dismissModal();
            }}
            >${this.i18n.APPLY_FILTER}</ion-button
          >
        </div>
      </ion-content>
    `;
  }

  protected onChange(e: any) {
    const element = <HTMLIonDatetimeElement>e.target;
    const value: string = element.value!;
    const newDate: Date = truncateToDay(new Date(value));
    if (element.id === 'startdate') {
      this.dateFilterConfig = { ...this.dateFilterConfig, start: newDate.getTime() };
    } else {
      this.dateFilterConfig = { ...this.dateFilterConfig, end: newDate.getTime() };
    }
  }

  protected toISOStringOrNull(date: number | null): string {
    if (date === null) return '';
    return new Date(date).toISOString();
  }
}
