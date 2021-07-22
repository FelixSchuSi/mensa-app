import { LitElement, TemplateResult, html } from 'lit';
import { Group } from '../../../../server/src/models/group';
import { MensaVisit } from '../../../../server/src/models/mensa-visit';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { Image } from '../../models/image';
import { share, ShareParameter } from '../../helpers/share-api';
import { Routes } from '../../routes';
import { createShareModal } from '../../helpers/create-share-modal';
import { userService } from '../../services/user.service';
import { User } from '../../../../server/src/models/user';
import { mediaService } from '../../services/media.service';
import { customElement, property, state } from 'lit/decorators.js';
import { ImageSelect } from '../image-select/image-select.widget';
@customElement('app-profile')
export class ProfileWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Object })
  protected userInfo?: User;

  @property({ type: Object, attribute: false })
  protected setNotification!: (e: any) => void;
  protected uploadedImage: Image | undefined;

  @state()
  protected imagesrc: string | null = null;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
    this.userInfo = userService.userInfo;
    userService.subscribe(userInfo => (this.userInfo = userInfo));
  }

  protected render(): TemplateResult {
    return html`
      <app-image-select
        .handleImageUpload=${async (img: Image): Promise<void> => {
          const image = { id: img.metadata.id, url: img.embed_url };
          const newUser = <User>{ ...this.userInfo, image };
          await userService.editUser(newUser);
        }}
      ></app-image-select>
      <ion-card style="Margin-left:0; Margin-right:0">
        <ion-card-content style="${this.userInfo ? '' : 'display:none'}; padding-bottom: 0px">
          <div style="display:flex;">
            <ion-avatar
              class="single-list-avatar"
              slot="start"
              style="
               background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);
          border-radius: var(--border-radius);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;"
              @click=${(): void => {
                const selector = <ImageSelect>document.querySelector('app-image-select');
                selector.present(document.querySelector('app-settings')!);
              }}
            >
              ${this.userInfo?.image?.url
                ? html`<img style="background-color:var(--ion-color-step-250)" src=${this.userInfo.image?.url || ''} />`
                : html`<img src="svg/avatar.svg" style="width:100%;height:100%;" name="help-outline"></ion-icon>`}
            </ion-avatar>
            <div style="padding-left: 16px">
              <ion-card-title style="display:flex">${this.userInfo?.name}</ion-card-title>
              <ion-card-subtitle style="text-transform: lowercase">${this.userInfo?.email}</ion-card-subtitle>
              <ion-card-subtitle style="text-transform: none"
                >${this.userInfo?.status ? this.i18n[this.userInfo?.status] : ''}</ion-card-subtitle
              >
            </div>
          </div>
        </ion-card-content>
        ${this.userInfo
          ? html`
              <ion-item
                class="item-inside-card"
                .detail="${false}"
                style="--background: var(--ion-card-background);--border-color: rgba(0,0,0,0);"
              >
                <ion-label>${this.i18n.SIGN_OUT}</ion-label>
                <ion-button @click=${this.logOut} fill="outline" slot="end">${this.i18n.SIGN_OUT}</ion-button>
              </ion-item>
            `
          : html`
              <ion-item
                class="item-inside-card"
                href=${Routes.SIGN_IN}
                .detail="${false}"
                style="--background: var(--ion-card-background)"
              >
                <ion-label>${this.i18n.SIGN_IN_NOW}</ion-label>
                <ion-button fill="outline" slot="end">${this.i18n.SIGN_IN}</ion-button>
              </ion-item>
              <ion-item
                lines="none"
                href=${Routes.SIGN_UP}
                .detail="${false}"
                style="--background: var(--ion-card-background)"
              >
                <ion-label>${this.i18n.SIGN_UP_NOW}</ion-label>
                <ion-button fill="outline" slot="end">${this.i18n.SIGN_UP}</ion-button>
              </ion-item>
            `}
      </ion-card>
    `;
  }
  protected async logOut(): Promise<void> {
    try {
      await userService.logOut();
      this.setNotification({ successMessage: this.i18n.SIGN_OUT_MESSAGE + '!' });
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
