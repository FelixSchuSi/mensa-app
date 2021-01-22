import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';

import { copyToClipboard } from '../../helpers/copy-to-clipboard';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { ShareParameter } from '../../helpers/share-api';
import GroupDetailsPage from '../../pages/group-details/group-details.page';
import { createMailto } from '../../helpers/create-mailto';
import { buildShareURL } from '../../helpers/share-api';
@customElement('app-share-modal')
export class ShareModalWidget extends LitElement {
  @internalProperty()
  protected i18n!: LanguageStrings;
  @property({ type: Object })
  protected shareParams: ShareParameter = { text: '', title: '', subject: '' };
  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected createRenderRoot(): LitElement {
    return this;
  }
  protected createShareText(): string {
    return `${this.shareParams.text}\n${buildShareURL(this.shareParams.path)}`;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // @property({ type: Function })
  // protected notificationCallback: ((arg0: string) => void) | undefined;

  @property({ type: Object, attribute: false })
  protected setNotification!: (e: any) => void;

  protected update(changedProperties: Map<string | number | symbol, unknown>): void {
    this.shareText = this.createShareText();
    super.update(changedProperties);
  }
  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement;
    modal.dismiss();
  }
  protected shareText = '';
  protected toEmail = '';
  protected render(): TemplateResult {
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
              copyToClipboard(this.shareText);
              if (this.setNotification) this.setNotification({ successMessage: this.i18n.COPIED_TO_CLIPBOARD });
            }}
            >${this.i18n.COPY_TO_CLIPBOARD}</ion-button
          >
          <ion-input
            @change=${(e: any): void => {
              this.toEmail = e.target.value;
            }}
            value=${this.toEmail}
            placeholder="E-Mail"
          ></ion-input>
          <ion-button
            @click=${(): void => {
              const mailTo = createMailto(
                this.toEmail,
                encodeURIComponent(this.shareParams.subject),
                encodeURIComponent(this.shareText)
              );
              const win = window.open(mailTo, '_blank');
              win?.focus();
            }}
            ><ion-icon name="mail-outline"></ion-icon
          ></ion-button>
        </div>
      </ion-content>
    `;
  }
}
