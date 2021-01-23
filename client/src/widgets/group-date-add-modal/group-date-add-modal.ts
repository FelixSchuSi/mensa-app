import { customElement, html, LitElement, property, query, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { groupService } from '../../services/group.service';
import { i18nService } from '../../services/i18n.service';
import { ALL_MENSEN } from '../../helpers/all-mensen';
import { Mensa } from '../../../../server/src/models/meal-filter-config';
import { truncateToDay } from '../../helpers/truncate-to-day';
import { MensaVisit } from '../../../../server/src/models/mensa-visit';
import { LanguageKeys } from '../../i18n/language-keys';

@customElement('app-group-date-add-modal')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupDateAddModalWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }
  protected activeChip: Mensa = 'aasee';

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;
  protected mouseDownPos: number = 0;

  @query('date-picker')
  protected datePickerElem!: HTMLIonDatetimeElement;
  protected dateValue?: string;

  @query('time-picker')
  protected timePickerElem!: HTMLIonDatetimeElement;
  protected timeValue?: string;

  @query('.title-input')
  protected titleInput!: HTMLIonInputElement;

  @property()
  protected groupID!: string;

  @property({ type: Object, attribute: false })
  protected setNotification!: (e: any) => void;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    modal.dismiss();
  }

  protected render(): TemplateResult {
    return html`
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>${this.i18n.CREATE_MENSA_VISIT}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click=${this.dismissModal}>${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label>${this.i18n.TITLE}</ion-label>
            <ion-input
              class="title-input"
              slot="end"
              placeholder=${this.i18n.GIVE_THIS_MENSA_VITIST_A_TITLE}
            ></ion-input>
          </ion-item>
          <ion-item style="display:flex; justify-content:space-between">
            <ion-label><ion-icon name="location-outline"></ion-icon> ${this.i18n.MENSA}</ion-label>
            ${this.mensaChipSelectorTemplate}
          </ion-item>
          <ion-item>
            <ion-label><ion-icon name="calendar-outline"></ion-icon> ${this.i18n.DATE}</ion-label>
            <ion-datetime
              @ionChange=${(e: any) => (this.dateValue = e.detail.value)}
              class="date-picker"
              display-format="DD MMM YYYY"
              min="${new Date().toISOString()}"
              max="${new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString()}"
              placeholder=${this.i18n.CLICK_TO_CHOOSE_DATE}
            ></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label><ion-icon name="time-outline"></ion-icon> ${this.i18n.TIME}</ion-label>
            <ion-datetime
              @ionChange=${(e: any) => (this.timeValue = e.detail.value)}
              class="time-picker"
              minute-values="0,15,30,45"
              display-format="HH:mm"
              placeholder=${this.i18n.CLICK_TO_CHOOSE_TIME}
            ></ion-datetime>
          </ion-item>
        </ion-list>
        <ion-button style="float: right;" @click=${this.createMensaVisit}>${this.i18n.CREATE_MENSA_VISIT}</ion-button>
      </ion-content>
    `;
  }

  protected get mensaChipSelectorTemplate(): TemplateResult {
    return html`
      <div style="min-width: 300px; width:66%" @mousedown=${(e: any) => (this.mouseDownPos = e.clientX)}>
        <app-horizontal-scroller>
          ${ALL_MENSEN.map(
            mensa => html`
              <ion-chip
                @click=${this.onClick}
                class=${this.activeChip === mensa ? 'selected' : ''}
                id=${mensa}
                style="flex-shrink:0"
              >
                ${this.i18n[<LanguageKeys>(mensa + '_short')]}
              </ion-chip>
            `
          )}
        </app-horizontal-scroller>
      </div>
    `;
  }

  protected async onClick(e: any): Promise<void> {
    let clickedChip = <HTMLIonChipElement>e.target;
    if ((this.mouseDownPos - e.clientX) ** 2 <= 7) {
      this.activeChip = <Mensa>clickedChip.id;
      const scroller = clickedChip.parentElement;
      const oldActiveElem = scroller?.querySelector('.selected')!;
      oldActiveElem.classList.remove('selected');
      clickedChip.classList.add('selected');
    }
    this.mouseDownPos = 0;
  }

  protected buildDateTime(): number {
    const date = truncateToDay(new Date(this.dateValue!));
    const time = new Date(this.timeValue!);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date.getTime();
  }

  protected async createMensaVisit(): Promise<void> {
    if (!this.validateInputs()) return;
    const datetime = this.buildDateTime();
    const title = this.titleInput.value + '';
    const mensa = this.activeChip;
    const mensaVisit: Partial<MensaVisit> = { title, mensa, datetime };
    try {
      const newGroup = await groupService.createMensaVisit(this.groupID, mensaVisit);
      this.dismissModal();
    } catch (e) {
      this.setNotification({ errorMessage: this.i18n.MENSA_VISIT_CREATE_ERROR });
    }
  }

  protected validateInputs(): boolean {
    const missingField: string[] = [];
    let valid = true;
    if (this.titleInput.value === '') {
      missingField.push(this.i18n.TITLE);
      valid = false;
    }
    if (!this.dateValue) {
      missingField.push(this.i18n.DATE);
      valid = false;
    }
    if (!this.timeValue) {
      missingField.push(this.i18n.TIME);
      valid = false;
    }
    if (valid === false) {
      const errorMessage = this.i18n.MENSA_VISIT_MISSING_FIELDS_MSG + ' ' + missingField.join(', ');
      this.setNotification({ errorMessage });
    }
    return valid;
  }
}
