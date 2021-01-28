import { customElement, html, internalProperty, LitElement, property, query, TemplateResult } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Image } from '../../models/image';
import { mediaService, MediaService } from '../../services/media.service';
import { i18nService } from '../../services/i18n.service';
import { Group } from '../../../../server/src/models/group';
import { selectPhoto } from '../../helpers/upload-helper';
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
  @property({ type: Object, attribute: false })
  protected group!: Group;
  protected uploadedImage: Image | undefined;
  @query('.group-name-input')
  protected groupNameInput!: HTMLIonInputElement;

  @property()
  protected mode: 'create' | 'edit' = 'create';

  @internalProperty()
  protected imageSetOnce: boolean = false;

  @internalProperty()
  protected imagesrc: string | null = null;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement!;
    modal.dismiss();
  }

  protected render(): TemplateResult {
    return html`${this.cardTemplate}`;
  }

  protected get cardTemplate(): TemplateResult {
    return html`
        <ion-card style="margin:0px">
          <div class="bg-image-wrapper" style="background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12); height: 100px">
          ${this.imagesrc ? html`<img class="bg-image" src=${this.imagesrc || ''} />` : ''}
          </div>
         ${this.avatarTemplate}
          <ion-card-header style="padding-top:0px">
            <ion-card-subtitle >
              ${this.mode === 'edit' ? this.i18n.EDIT_GROUP : this.i18n.NEW_GROUP}
            </ion-card-subtitle>
            <ion-card-title style="display:flex"> 
              <ion-input 
                style="border-bottom: 1px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5); "
                @change=${(e: Event): void => {
                  const target = e.target as HTMLTextAreaElement;
                  this.groupName = target.value;
                }}
                placeholder=${this.i18n.GROUP_NAME}
                class="group-name-input"
                type="text"
                value=${this.groupName ?? ''}
                required
                autofocus
                
              >
              </ion-input>
              <div style="background-color: var(--ion-color-primary)" class="circle-add-btn"
              @click=${async () => {
                try {
                  if (this.mode === 'create') {
                    await this.groupService.createGroup(this.groupName!, {
                      id: this.uploadedImage?.metadata.id || '',
                      url: this.uploadedImage?.embed_url || ''
                    });
                  } else {
                    const newGroup: Group = {
                      ...this.group,
                      name: this.groupName!,
                      image: this.uploadedImage
                        ? { id: this.uploadedImage?.metadata.id, url: this.uploadedImage?.embed_url }
                        : this.group.image
                    };
                    await this.groupService.editGroup(newGroup);
                  }
                } catch ({ message }) {
                  console.log(message);
                }
                this.dismissModal();
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

  protected get avatarTemplate(): TemplateResult {
    return html`
      <ion-avatar
        id="add-group-pic"
        class="group-list-avatar circle-add-btn"
        @click=${async (): Promise<void> => {
          try {
            const blob = await selectPhoto();
            if (!blob) return;
            const image = await mediaService.upload(blob);
            this.imagesrc = image.embed_url;
            this.imageSetOnce = true;
            this.uploadedImage = image;
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <ion-buttons
          class="avatar-content"
          style="
            ${this.imageSetOnce ? 'opacity:0;' : ''} 
            ${this.imagesrc ? ' filter: drop-shadow(0 0 8px black);' : ''} 
            z-index:99;
          "
          id="upload-button"
        >
          <ion-button style="width:100%; height:100%; ">
            <ion-icon style="width:50%; height:50%; " slot="icon-only" color="primary" name="camera"></ion-icon>
          </ion-button>
        </ion-buttons>
        <img src="${this.imagesrc || ''}" style="${this.imagesrc ? '' : 'display:none;'} z-index:80; " />
      </ion-avatar>
    `;
  }
}
