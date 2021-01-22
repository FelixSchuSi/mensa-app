import { LitElement, customElement, property, TemplateResult, html } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

@customElement('app-group-date-add')
export class GroupDateAddWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Boolean })
  protected large: boolean = false;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <ion-card style="align-self:stretch; ${this.large ? 'display:flex' : ''}" class="termin-card termin-add-card">
        <ion-card-content style="height:100%; display: flex; flex-direction:column; align-items: center; ">
          <div style="flex-grow:1; "></div>
          <div class="circle-add-btn" @click=${() => console.log('TODO: create functionality to create mensa visits')}>
            <ion-buttons>
              <ion-button>
                <ion-icon slot="icon-only" color="primary" name="add-outline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </div>
          <div style="margin-top: 8px">${this.i18n.CREATE_MENSA_VISIT}</div>
          <div style="flex-grow:1; "></div>
        </ion-card-content>
      </ion-card>
    `;
  }
}
