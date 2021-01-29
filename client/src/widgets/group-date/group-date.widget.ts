import { group } from 'console';
import { LitElement, customElement, internalProperty, property, TemplateResult, html, query } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { MensaVisit } from '../../../../server/src/models/mensa-visit';
import { User } from '../../../../server/src/models/user';
import { LanguageStrings } from '../../models/language-strings';
import { Languages } from '../../models/languages';
import { groupService } from '../../services/group.service';
import { i18nService } from '../../services/i18n.service';
import { userService } from '../../services/user.service';

@customElement('app-group-date')
export class GroupDateWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @internalProperty()
  protected i18n!: LanguageStrings;

  @property({ type: Object, attribute: false })
  protected mensaVisit!: MensaVisit;

  @property({ type: Object, attribute: false })
  protected group!: Group;

  @property({ type: Array, attribute: false })
  protected members!: User[];
  @internalProperty()
  protected attending!: boolean;
  protected numberOfParticipants: number = 3;

  @internalProperty()
  protected chipColor!: 'success' | 'danger';

  @property({ type: Boolean })
  protected large: boolean = false;

  @internalProperty()
  protected userInfo!: User;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
    this.userInfo = userService.userInfo!;
  }

  protected firstUpdated(): void {
    this.chipColor = this.attending ? 'success' : 'danger';
    this.numberOfParticipants = this.mensaVisit.participants.length;
    this.attending = this.mensaVisit.participants.includes(this.userInfo.id);
  }

  protected updated(_changedProperties: any): void {
    if (_changedProperties.has('attending')) {
      this.chipColor = this.attending ? 'success' : 'danger';
    }
    if (_changedProperties.has('mensaVisit')) {
      this.numberOfParticipants = this.mensaVisit.participants.length;
      this.attending = this.mensaVisit.participants.includes(this.userInfo.id);
    }
  }
  protected render(): TemplateResult {
    return html` ${this.large ? this.largeTemplate : this.smallTemplate} `;
  }

  protected get smallTemplate(): TemplateResult {
    if (!this.mensaVisit) return html``;
    return html`
      <ion-card class="termin-card">
        <div style="display:flex; align-items:flex-end; padding-top: 8px; padding-right: 8px; padding-left:20px">
          <ion-card-subtitle style="margin-bottom:0px">
            ${this.numberOfParticipants}
            ${this.numberOfParticipants > 1 ? this.i18n.PARTICIPANTS : this.i18n.PARTICIPANT}
          </ion-card-subtitle>
          <div style="flex-grow:1; min-width:16px"></div>
          ${this.participateButton}
        </div>
        <ion-card-content style="display: flex; flex-direction:column; padding-top: 0px;">
          <h1 style="color: var(--ion-text-color)">${this.mensaVisit.title}</h1>
          <div>
            <ion-icon style="color: var(--ion-text-color)" name="location-outline"></ion-icon>
            ${this.i18n[this.mensaVisit.mensa]}
          </div>
          <div>
            <ion-icon style="color: var(--ion-text-color)" name="calendar-outline"></ion-icon> ${this.getDateOfDateTime(
              this.mensaVisit.datetime
            )}
          </div>
          <div>
            <ion-icon style="color: var(--ion-text-color)" name="time-outline"></ion-icon> ${this.getTimeOfDateTime(
              this.mensaVisit.datetime
            )}
          </div>
        </ion-card-content>
      </ion-card>
    `;
  }

  protected get largeTemplate(): TemplateResult {
    if (!this.mensaVisit) return html``;
    return html`
      <ion-card class="large-termin-card">
        <ion-card-header style="padding-bottom:0px">
          <ion-card-subtitle style="display:flex; align-items:flex-end; ">
            ${this.numberOfParticipants}
            ${this.numberOfParticipants > 1 ? this.i18n.PARTICIPANTS : this.i18n.PARTICIPANT}
            <div style="flex-grow:1; min-width:16px"></div>
            ${this.participateButton}
          </ion-card-subtitle>

          <ion-card-title>
            <div>${this.mensaVisit.title}</div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display: flex; flex-direction:column; padding-top: 0px; ">
          <app-horizontal-scroller>
            ${this.mensaVisit.participants.map(participant => {
              const fullParticipant = this.getParticipant(participant);
              const name = fullParticipant.name;
              const imgSrc = fullParticipant.image?.url ?? './svg/avatar.svg';
              return html`
                <ion-chip style="flex-shrink:0; margin-left:0px">
                  <ion-avatar>
                    <img src=${imgSrc} />
                  </ion-avatar>
                  <ion-label>${name}</ion-label>
                </ion-chip>
              `;
            })}
          </app-horizontal-scroller>
          <div style="color: var(--ion-text-color)">
            <div><ion-icon name="location-outline"></ion-icon> ${this.i18n[this.mensaVisit.mensa]}</div>
            <div><ion-icon name="calendar-outline"></ion-icon> ${this.getDateOfDateTime(this.mensaVisit.datetime)}</div>
            <div><ion-icon name="time-outline"></ion-icon> ${this.getTimeOfDateTime(this.mensaVisit.datetime)}</div>
          </div>
        </ion-card-content>
        ${this.deleteMensaVisitTemplate}
      </ion-card>
    `;
  }

  protected getParticipant(userID: string): User {
    return this.members.find(member => member.id === userID)!;
  }

  protected get participateButton(): TemplateResult {
    return html`
      <ion-chip
        @click=${this.participateOrLeave}
        outline
        color="${this.chipColor}"
        style="
          border-color: var(--ion-color-${this.chipColor});
          ${this.large ? 'margin-bottom:-8px' : ''}
        "
      >
        <ion-icon src="${this.attending ? 'svg/checkmark-circle.svg' : 'svg/ban.svg'}"></ion-icon>
        <ion-label>${this.attending ? this.i18n.ATTENDING : this.i18n.ABSENT}</ion-label>
      </ion-chip>
    `;
  }

  protected async participateOrLeave(): Promise<void> {
    try {
      if (this.attending) {
        this.attending = !this.attending;
        this.group = await groupService.leaveMensaVisit(this.group.id, this.mensaVisit.id);
      } else {
        this.attending = !this.attending;
        this.group = await groupService.participateInMensaVisit(this.group.id, this.mensaVisit.id);
      }
      // this.mensaVisit = this.group.mensaVisits.find(visit => visit.id === this.mensaVisit.id)!;
    } catch (e) {
      this.attending = !this.attending;
    }
  }

  protected getDateOfDateTime(dateTime: number): string {
    const date = new Date(dateTime);
    const language = this.i18n._LANGUAGE === Languages.ENGLISH ? 'en-US' : 'de-DE';
    // @ts-ignore
    return new Intl.DateTimeFormat(language, { dateStyle: 'short' }).format(date);
  }

  protected getTimeOfDateTime(dateTime: number): string {
    const date = new Date(dateTime);
    const language = this.i18n._LANGUAGE === Languages.ENGLISH ? 'en-US' : 'de-DE';
    // @ts-ignore
    return new Intl.DateTimeFormat(language, { timeStyle: 'short' }).format(date);
  }

  protected get deleteMensaVisitTemplate(): TemplateResult {
    return html`
      <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${() => this.deleteMensaVisit()}
        lines="none"
        .detail=${false}
        button
        style="--background: var(--ion-card-background)"
      >
        <ion-label>${this.i18n.DELETE_MENSA_VISIT}</ion-label>
        <ion-button color="danger" fill="outline" slot="end">${this.i18n.DELETE}</ion-button>
      </ion-item>
    `;
  }

  protected async deleteMensaVisit(): Promise<void> {
    try {
      this.group = await groupService.deleteMensaVisit(this.group.id, this.mensaVisit.id);
    } catch (e) {}
  }
}
