import { LitElement, customElement, internalProperty, property, TemplateResult, html, query } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

@customElement('app-group-date')
export class GroupDateWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Object, attribute: false })
  protected group!: Group;

  @property({ type: Boolean })
  protected attending: boolean = false;

  @property({ type: Number })
  protected numberOfParticipants: number = 3;

  @internalProperty()
  protected chipColor!: 'success' | 'danger';

  @internalProperty()
  protected chipText!: LanguageStrings;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
    this.chipColor = this.attending ? 'success' : 'danger';
  }

  protected updated(_changedProperties: any): void {
    if (_changedProperties.has('attending')) {
      this.chipColor = this.attending ? 'success' : 'danger';
    }
  }
  protected render(): TemplateResult {
    return html`
      <ion-card style="display:inline-flex; flex-direction:column" class="termin-card">
        <div style="display:flex; align-items:flex-end; padding-top: 8px; padding-right: 8px; padding-left:20px">
          <ion-card-subtitle style="margin-bottom:0px">
            ${this.numberOfParticipants}
            ${this.numberOfParticipants > 1 ? this.i18n.PARTICIPANTS : this.i18n.PARTICIPANT}
          </ion-card-subtitle>
          <div style="flex-grow:1; min-width:16px"></div>
          ${this.participateButton}
        </div>
        <ion-card-content style="display: flex; flex-direction:column; padding-top: 0px;">
          <h1 style="color: var(--ion-text-color)">Zusammen Mensen</h1>
          <div><ion-icon style="color: var(--ion-text-color)" name="location-outline"></ion-icon> Mensa am Ring</div>
          <div><ion-icon style="color: var(--ion-text-color)" name="calendar-outline"></ion-icon> 01.02.21</div>
          <div><ion-icon style="color: var(--ion-text-color)" name="time-outline"></ion-icon> 13:30</div>
        </ion-card-content>
      </ion-card>
    `;
  }

  protected get participateButton(): TemplateResult {
    return html`
      <ion-chip
        @click=${() => (this.attending = !this.attending)}
        outline
        color="${this.chipColor}"
        style="border-color: var(--ion-color-${this.chipColor});"
      >
        <ion-icon
          name="${this.attending ? 'checkmark-circle' : ''}"
          src="${this.attending ? '' : 'svg/ban.svg'}"
        ></ion-icon>
        <ion-label>${this.attending ? this.i18n.ATTENDING : this.i18n.ABSENT}</ion-label>
      </ion-chip>
    `;
  }

  //   @mouseover=${this.onMouseOver}
  //   @mouseleave=${this.onMouseLeave}
  //   protected onMouseOver(e: any): void {
  //     this.isHovering = true;
  //     if (this.attending) {
  //       this.chipColor = 'danger';
  //       this.chipText = this.i18n.ABSENT;
  //     } else {
  //       this.chipColor = 'success';
  //       this.chipText = this.i18n.ATTENDING;
  //     }
  //   }

  //   protected onMouseLeave(e: any): void {
  //     this.isHovering = false;
  //     if (!this.attending) {
  //       this.chipColor = 'danger';
  //       this.chipText = this.i18n.ABSENT;
  //     } else {
  //       this.chipColor = 'success';
  //       this.chipText = this.i18n.ATTENDING;
  //     }
  //   }
}
