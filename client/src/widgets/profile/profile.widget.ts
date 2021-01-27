import { LitElement, customElement, property, TemplateResult, html } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { MensaVisit } from '../../../../server/src/models/mensa-visit';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { share, ShareParameter } from '../../helpers/share-api';
import { Routes } from '../../routes';
import { createShareModal } from '../../helpers/create-share-modal';
@customElement('app-profile')
export class ProfileWidget extends LitElement {
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
      <ion-card class="card-no-margin-when-small">
        <ion-card-header style="padding-top:0px">
          <ion-card-subtitle>E-MAIL </ion-card-subtitle>
          <ion-card-title style="display:flex">Name </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display:flex">Test Test </ion-card-content>
      </ion-card>
    `;
  }
}
