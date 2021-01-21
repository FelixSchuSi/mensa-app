import { customElement, html, internalProperty, LitElement, property, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Image } from '../../../../server/src/models/image';
import { mediaService, MediaService } from '../../services/media.service';
import { i18nService } from '../../services/i18n.service';

@customElement('app-group-date-add-modal')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupDateAddModalWidget extends LitElement {
  protected createRenderRoot() {
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
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Termin erstellen</ion-title>
          <ion-buttons slot="end">
            <ion-button>${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content> asdfasdfasdf </ion-content>
    `;
  }
}
