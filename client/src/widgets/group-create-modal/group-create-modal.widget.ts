import { customElement, html, internalProperty, LitElement, property, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Image } from '../../../../server/src/models/image';
import { mediaService, MediaService } from '../../services/media.service';
import { i18nService } from '../../services/i18n.service';
import { share } from '../../helpers/share-api';

@customElement('app-group-create-modal')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupCreateModalWidget extends LitElement {
  protected createRenderRoot() {
    return this;
  }
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

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <input
        style="display:none"
        type="file"
        name="file"
        id="image-file-input"
        @change=${(e: any): void => {
          const file = e.target.files[0];
          mediaService.upload(file).then((res): void => {
            this.imagesrc = res.embed_url;
            const button = <HTMLElement>this.querySelector('#upload-button');
            button.style.display = 'none';
            this.uploadedImage = { url: res.embed_url, id: res.metadata.id };
          });
        }}
      />
      ${this.cardTemplate}
    `;
  }

  protected get cardTemplate(): TemplateResult {
    return html`
        <ion-card style="margin:0px">
          <div class="bg-image-wrapper" style="background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12); height: 100px">
          ${this.imagesrc ? html`<img class="bg-image" src=${this.imagesrc || ''} />` : ''}
          </div>
          <ion-avatar id="add-group-pic" class="group-list-avatar circle-add-btn" 
          @click=${(): void => {
            const input = <HTMLElement>this.querySelector('#image-file-input');
            input.click();
          }}
          >
          <img id="group-image" src="${this.imagesrc || ''}" style="${this.imagesrc ? '' : 'display:none'}" />
              <ion-buttons id="upload-button" style="width:100%; height:100%">
                <ion-button style="width:100%; height:100%">
                  <ion-icon style="width:50%; height:50%" slot="icon-only" color="primary" name="camera"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-avatar>
          <ion-card-header style="padding-top:0px">
            <ion-card-subtitle >
              ${this.i18n.NEW_GROUP}
            </ion-card-subtitle>
            <ion-card-title style="display:flex"> 
              <ion-input autofocus
              style="border-bottom: 1px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);"
                @change=${(e: Event): void => {
                  const target = e.target as HTMLTextAreaElement;
                  this.groupName = target.value;
                }}
                placeholder=${this.i18n.GROUP_NAME}
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
