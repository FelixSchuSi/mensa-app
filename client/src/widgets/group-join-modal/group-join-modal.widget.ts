import { LitElement, TemplateResult, html } from 'lit';

import { customElement, state, property } from 'lit/decorators.js';

import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { groupService } from '../../services/group.service';

@customElement('app-group-join-modal')
export class FilterModalWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @state()
  protected i18n!: LanguageStrings;
  @property({ type: Array })
  protected groups: Group[] = [];
  @property({ type: String })
  protected inputJoinCode = '';

  @property({ type: Object, attribute: false })
  protected setNotification!: (e: any) => void;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected async joinGroup(code: string): Promise<void> {
    if (this.groups.some(e => e.joinCode == code)) {
      this.setNotification({ warningMessage: this.i18n.YOU_ARE_ALREADY_A_MEMBER_OF_THIS_GROUP });
      return;
    }
    try {
      await groupService.addMembership(undefined, code);
      this.setNotification({ successMessage: this.i18n.SUCCESSFULLY_JOINED_GROUP });
      groupService.loadGroups(true);
      this.dismissModal();
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

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
            <ion-label>${this.i18n.JOIN_CODE}</ion-label>
            <ion-input
              @change=${(e: Event): void => {
                const target = e.target as HTMLTextAreaElement;
                this.inputJoinCode = target.value;
              }}
              placeholder=${this.i18n.JOIN_CODE}
              value=${this.inputJoinCode ?? ''}
              type="text"
              required
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
