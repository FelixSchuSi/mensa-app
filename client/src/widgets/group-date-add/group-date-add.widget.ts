import { LitElement, customElement, internalProperty, property, TemplateResult, html, query } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

@customElement('app-group-date-add')
export class GroupDateAddWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <ion-card style="align-self:stretch" class="termin-card termin-add-card">
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
