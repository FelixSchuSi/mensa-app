import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';

import { copyToClipboard } from '../../helpers/copy-to-clipboard';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { ShareParameter } from '../../helpers/share-api';
import GroupDetailsPage from '../../pages/group-details/group-details.page';

@customElement('app-share-modal')
export class ShareModalWidget extends LitElement {
  @internalProperty()
  protected i18n!: LanguageStrings;
  @property({ type: Object })
  protected shareParams: ShareParameter = { text: '', title: '' };
  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected createRenderRoot(): LitElement {
    return this;
  }
  protected createShareText(): string {
    return `${this.shareParams.text}\n${window.location.hostname}/${this.shareParams.path}`;
  }
  @property({ type: Function })
  protected notificationCallback: (arg0: string) => void = null;
  protected update(changedProperties: Map<string | number | symbol, unknown>): void {
    this.shareText = this.createShareText();
    console.log(this.shareText);
    super.update(changedProperties);
  }
  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement;
    modal.dismiss();
  }
  protected shareText = '';

  protected render(): TemplateResult {
    console.log('Render');
    return html`
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>${this.shareParams.title}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="${this.dismissModal}">${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="ion-padding" style="display:flex;flex-direction:column">
          <ion-textarea
            @change=${(e: any) => {
              this.shareText = e.target.value;
            }}
            value=${this.shareText}
          ></ion-textarea>
          <ion-button
            @click=${(): void => {
              copyToClipboard(this.shareText).then(() => {
                if (this.notificationCallback) this.notificationCallback(this.i18n.COPIED_TO_CLIPBOARD);
              });
            }}
            >${this.i18n.COPY_TO_CLIPBOARD}</ion-button
          >
          <ion-button @click=${(): void => {}}><ion-icon name="mail-outline"></ion-icon></ion-button>
        </div>
      </ion-content>
    `;
  }
}
