/* eslint-disable @typescript-eslint/member-ordering */
import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
  unsafeCSS
} from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Image } from '../../../../server/src/models/image';
import { mediaService, MediaService } from '../../services/media.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
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

  @internalProperty()
  protected imagesrc: string | null = null;

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
        <!-- <div class="horizontal-center" style="margin-top:1em;flex-direction:column">
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
              @click=${(): void => {
          const input = <HTMLElement>this.querySelector('#image-file-input');
          input.click();
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
        </div> -->
        <input
          style="display:none"
          type="file"
          name="file"
          id="image-file-input"
          @change=${(e: any): void => {
            const file = e.target.files[0];
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
        ${this.cardTemplate}
      </ion-content>
    `;
  }

  protected get cardTemplate(): TemplateResult {
    return html`
      <ion-card class="card-no-margin-when-small">
        <div class="bg-image-wrapper" style="background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12); height: 100px">
        </div>
        <ion-avatar id="add-group-pic" class="group-list-avatar circle-add-btn" 
        @click=${(): void => {
          const input = <HTMLElement>this.querySelector('#image-file-input');
          input.click();
        }}
        >
        <img id="group-image" src="" style="display:none;" />
            <ion-buttons id="upload-button" style="width:100%; height:100%">
              <ion-button style="width:100%; height:100%">
                <ion-icon style="width:50%; height:50%" slot="icon-only" color="primary" name="camera"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-avatar>
        <ion-card-header style="padding-top:0px">
          <ion-card-subtitle >
            New group
          </ion-card-subtitle>
          <ion-card-title style="display:flex"> 
            <ion-input autofocus
            style="border-bottom: 1px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);"
              @change=${(e: Event): void => {
                const target = e.target as HTMLTextAreaElement;
                this.groupName = target.value;
              }}
              placeholder="Name der Gruppe"
              type="text"
              required
            >
            </ion-input>
            <!-- <ion-button>Erstellen</ion-button> -->
            <div style="background-color: var(--ion-color-primary)" class="circle-add-btn"
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
              >
            <ion-buttons>
              <ion-button>
                <ion-icon slot="icon-only" style="color:white" name="send"></ion-icon>
              </ion-button>
            </ion-buttons>
          </div>
          </ion-item>
        </ion-card-title>
        </ion-card-header>
            </ion-card>
    `;
  }
}
