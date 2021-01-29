/* eslint-disable @typescript-eslint/member-ordering */
import { LitElement, customElement, TemplateResult, html, internalProperty } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { actionSheetController } from '@ionic/core';
import { selectPhoto, takePhoto } from '../../helpers/upload-helper';
import { mediaService } from '../../services/media.service';
import { Image } from '../../models/image';
@customElement('app-image-select')
export class ImageSelect extends LitElement {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected handleImageUpload: (img: Image) => void = () => {};

  @internalProperty()
  protected i18n!: LanguageStrings;

  @internalProperty()
  protected actionSheetElement: HTMLIonActionSheetElement | undefined;
  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }
  public present = async (targetElement?: Element): Promise<void> => {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = this.i18n.SELECT_SOURCE;
    actionSheet.buttons = [
      {
        text: this.i18n.CAMERA,
        handler: async (): Promise<void> => {
          try {
            const blob = await takePhoto();
            if (blob) {
              this.uploadImage(blob)
                .then(img => {
                  this.handleImageUpload(img);
                })
                .catch(e => {
                  console.error(e);
                });
            }
          } catch (e) {
            console.error(e);
          }
        }
      },
      {
        text: this.i18n.STORAGE,
        handler: async (): Promise<void> => {
          try {
            const blob = await selectPhoto();
            if (blob) {
              this.uploadImage(blob)
                .then(img => {
                  this.handleImageUpload(img);
                })
                .catch(e => {
                  console.error(e);
                });
            }
          } catch (e) {
            console.error(e);
          }
        }
      },
      {
        text: this.i18n.CANCEL,
        role: 'cancel'
      }
    ];
    targetElement = targetElement ?? document.querySelector('ion-app')!;
    targetElement.appendChild(actionSheet);
    return actionSheet.present();
  };

  public dismiss = async (): Promise<boolean | undefined> => {
    return this.actionSheetElement?.dismiss();
  };

  protected uploadImage = async (file: Blob): Promise<Image> => {
    try {
      const res = await mediaService.upload(file);
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  protected createRenderRoot(): LitElement {
    return this;
  }

  protected render(): TemplateResult {
    return html`${this.actionSheetElement}`;
  }
}
