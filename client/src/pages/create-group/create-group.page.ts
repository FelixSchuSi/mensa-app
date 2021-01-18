/* eslint-disable @typescript-eslint/member-ordering */
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Image } from '../../../../server/src/models/image';
import { mediaService, MediaService } from '../../services/media.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { Plugins, CameraResultType } from '@capacitor/core';
const sharedCSS = require('../../shared.scss');
const componentCSS = require('./create-group.page.scss');

@customElement('app-create-group')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CreateGroupPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];
  protected mediaService: MediaService = mediaService;
  protected groupService: GroupService = groupService;
  @property({ type: String, attribute: false })
  protected groupName: string | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;
  protected joinCode = '';
  protected uploadedImage: Image | undefined;

  protected firstUpdated(): void {
    if (!this.userInfo) {
      routerService.navigate(Routes.GROUPS);
      this.setNotification({ warningMessage: this.i18n.SIGN_IN_NEEDED_TO_CREATE_GROUP });
    }
  }
  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${async (): Promise<void> => {
                // TODO Mehtode erstellen, die auf dem aktuellen nav .pop() ausführt
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
          <ion-title>${this.i18n.CREATE_GROUP}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.CREATE_GROUP}</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="horizontal-center" style="margin-top:1em;flex-direction:column">
          <div
            style="height:200px;width:200px;background-color:lightgrey;display:flex;justify-content:flex-end;flex-direction:column"
          >
            <img id="group-image" src="" style="display:none;" />
            <input
              style="display:none"
              type="file"
              name="file"
              id="image-file-input"
              @change=${(e: any): void => {
                const file = e.target.files[0];
                debugger;
                mediaService.upload(file).then((res): void => {
                  const imageElement = <HTMLImageElement>this.querySelector('#group-image');
                  imageElement!.src = res.embed_url;
                  imageElement.style.display = 'block';
                  const button = <HTMLElement>this.querySelector('#upload-button');
                  button.style.display = 'none';
                  this.uploadedImage = { url: res.embed_url, id: res.metadata.id };
                });
              }}
            />
            <ion-button
              id="upload-button"
              @click=${async () => {
                const input = <HTMLElement>this.querySelector('#image-file-input');
                input.click();
                //   const { Camera } = Plugins;
                //   try {
                //     const photo = await Camera.getPhoto({
                //       quality: 90,
                //       allowEditing: true,
                //       resultType: CameraResultType.Uri
                //     });
                //     const image = <any>document.querySelector('#image');
                //     debugger;
                //     if (image) {
                //       image.src = photo.webPath;
                //     }
                //     debugger;
                //   } catch (e) {
                //     console.warn('User cancelled', e);
                //   }
              }}
              ><ion-icon style="color:black;height:100%;font-size:50px" name="cloud-upload-outline"></ion-icon
            ></ion-button>
          </div>
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input
              style="width:250px"
              @change=${(e: Event): void => {
                const target = e.target as HTMLTextAreaElement;
                this.groupName = target.value;
              }}
              placeholder="Name der Gruppe"
              type="text"
              required
            >
            </ion-input>
          </ion-item>
          <ion-button
            color="primary"
            @click=${(): void => {
              this.groupService
                .createGroup(this.groupName!, this.uploadedImage)
                .then(json => {
                  console.log(json);
                  this.joinCode = json.joinCode;
                  groupService.addMembership(json.id);
                  this.requestUpdate();
                })
                .catch(err => {
                  console.error(err);
                });
            }}
            >Erstellen</ion-button
          >
          <span>${this.joinCode}</span>
        </div>
      </ion-content>
    `;
  }
}
