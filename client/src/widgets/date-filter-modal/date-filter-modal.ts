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

  @internalProperty()
  protected dateTab: 'day' | 'period' = 'day';

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {}

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    //@ts-ignore
    this.dateFilterConfig = null;
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
        <ion-toolbar>
          <ion-segment value=${this.dateTab}>
            <ion-segment-button @click=${() => (this.dateTab = 'day')} value="day">
              <ion-label>${this.i18n.ONE_DAY}</ion-label>
            </ion-segment-button>
            <ion-segment-button @click=${() => (this.dateTab = 'period')} value="period">
              <ion-label>${this.i18n.PERIOD}</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list> ${this.dateTab === 'day' ? this.dayTemplate : this.periodTemplate} </ion-list>
        <div class="ion-padding">
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

  protected get dayTemplate(): TemplateResult {
    return html`
      <ion-item>
        <ion-label>${this.i18n.DAY}</ion-label>
        <ion-datetime
          id="day"
          @ionChange=${this.onChange}
          value="${this.toISOStringOrNull(this.dateFilterConfig.start)}"
          placeholder=${this.i18n.SELECT_DAY}
        ></ion-datetime>
      </ion-item>
    `;
  }

  protected get periodTemplate(): TemplateResult {
    return html`
      <ion-item>
        <ion-label>${this.i18n.FROM}</ion-label>
        <ion-datetime
          id="startdate"
          @ionChange=${this.onChange}
          value="${this.toISOStringOrNull(this.dateFilterConfig.start)}"
          placeholder=${this.i18n.SELECT_START_DATE}
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>${this.i18n.UNTIL}</ion-label>
        <ion-datetime
          id="enddate"
          @ionChange=${this.onChange}
          value="${this.toISOStringOrNull(this.dateFilterConfig.end)}"
          placeholder=${this.i18n.SELECT_END_DATE}
        ></ion-datetime>
      </ion-item>
    `;
  }
  protected onChange(e: any) {
    const element = <HTMLIonDatetimeElement>e.target;
    const value: string = element.value!;
    const newDate: Date = truncateToDay(new Date(value));
    if (element.id === 'startdate') {
      this.dateFilterConfig = { ...this.dateFilterConfig, start: newDate.getTime() };
    } else if (element.id === 'enddate') {
      this.dateFilterConfig = { ...this.dateFilterConfig, end: newDate.getTime() };
    } else if (element.id === 'id') {
      this.dateFilterConfig = { start: newDate.getTime(), end: newDate.getTime() };
    }
  }

  protected toISOStringOrNull(date: number | null): string {
    if (date === null) return '';
    return new Date(date).toISOString();
  }
}
