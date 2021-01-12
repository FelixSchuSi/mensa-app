import { LitElement, customElement, TemplateResult, html, internalProperty, property } from 'lit-element';

import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { groupService, GroupService } from '../../services/group.service';

@customElement('app-group-join-modal')
export class FilterModalWidget extends LitElement {
  @internalProperty()
  protected i18n!: LanguageStrings;
  @property({ type: Array })
  protected groups: Group[] = [];
  protected groupService: GroupService = groupService;
  protected inputJoinCode = '';
  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }
  protected showAlert = async (msg: string, header?: string, subheader?: string): Promise<void> => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = header ?? 'Failure';
    alert.subHeader = subheader;
    alert.message = msg;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  };
  protected joinGroup = (code: string): void => {
    if (this.groups.some(e => e.joinCode == code)) {
      this.showAlert('You are already a member of this group!');
      return;
    }
    this.groupService
      .joinByCode(code)
      .then(() => {
        this.showAlert('Successful joined groups', 'Success');
        this.groupService.loadGroups(true);
        this.dismissModal();
      })
      .catch(err => {
        this.showAlert(err.message);
      });
  };

  protected createRenderRoot(): LitElement {
    return this;
  }

  // protected firstUpdated(): void {}

  protected dismissModal(): void {
    const modal = <HTMLIonModalElement>this.parentElement?.parentElement;
    modal.dismiss();
  }

  protected render(): TemplateResult {
    return html`
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>${this.i18n.JOINGROUP}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="${this.dismissModal}">${this.i18n.CLOSE}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="ion-padding" style="display:flex;flex-direction:column">
          <ion-item>
            <ion-label>${this.i18n.JOINCODE}</ion-label>
            <ion-input
              @change=${(e: Event): void => {
                const target = e.target as HTMLTextAreaElement;
                this.inputJoinCode = target.value;
              }}
              placeholder=${this.i18n.JOINCODE}
              type="text"
              required
              pattern=".{8}"
            >
            </ion-input>
          </ion-item>
          <ion-button
            style="float:right"
            @click=${(): void => {
              this.joinGroup(this.inputJoinCode);
            }}
            >${this.i18n.JOIN}</ion-button
          >
        </div>
      </ion-content>
    `;
  }
}
