import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';
import { copyToClipboard } from '../../helpers/copy-to-clipboard';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { ShareParameter } from '../../helpers/share-api';
import { createMailto } from '../../helpers/create-mailto';
import { buildShareURL } from '../../helpers/share-api';

@customElement('app-share-modal')
export class ShareModalWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @internalProperty()
  protected i18n!: LanguageStrings;

  @property({ type: Object })
  protected shareParams: ShareParameter = { text: '', title: '', subject: '', subtitle: '' };

  @property({ type: Object, attribute: false })
  protected setNotification!: (e: any) => void;

  @internalProperty()
  protected shareText = '';
  protected toEmail = '';

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected firstUpdated(): void {
    this.shareText = this.createShareText();
  }

  protected createShareText(): string {
    return `${this.shareParams.text}\n${buildShareURL(this.shareParams.path)}`;
  }

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement;
    modal.dismiss();
  }

  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button @click="${this.dismissModal}">${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div>
          <ion-card-header>
            <ion-card-subtitle> ${this.shareParams.subtitle} </ion-card-subtitle>
            <ion-card-title> ${this.shareParams.title} </ion-card-title>
          </ion-card-header>
          <ion-card style="margin-top:8px; margin-bottom:8px"
            ><ion-card-content>${this.shareText}</ion-card-content></ion-card
          >
          <ion-item
            class="item-inside-card"
            button
            .detail="${false}"
            @click=${(): void => {
              copyToClipboard(this.shareText);
              this.setNotification({ successMessage: this.i18n.COPIED_TO_CLIPBOARD });
            }}
          >
            <ion-label>${this.i18n.COPY_TEXT}</ion-label>
            <ion-button color="primary" fill="outline" slot="end">
              <div class="join-code">${this.i18n.COPY}</div>
              <ion-icon style="margin-left:4px" name="copy-outline"></ion-icon>
            </ion-button>
          </ion-item>
          <ion-item
            class="item-inside-card"
            button
            .detail="${false}"
            @click=${(): void => {
              const mailTo = createMailto(
                this.toEmail,
                encodeURIComponent(this.shareParams.subject),
                encodeURIComponent(this.shareText)
              );
              const win = window.open(mailTo, '_blank');
              win?.focus();
            }}
          >
            <ion-label>${this.i18n.SHARE_VIA_EMAIL}</ion-label>
            <ion-button color="primary" fill="outline" slot="end">
              <div class="join-code">${this.i18n.SEND}</div>
              <ion-icon style="margin-left:4px" name="mail-outline"></ion-icon>
            </ion-button>
          </ion-item>
        </div>
      </ion-content>
    `;
  }
}
