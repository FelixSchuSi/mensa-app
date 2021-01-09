/* eslint-disable @typescript-eslint/member-ordering */
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
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

  protected groupService: GroupService = groupService;
  @property({ type: String, attribute: false })
  protected groupName: string | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;
  protected joinCode = '';

  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${async () => {
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
          <div style="height:200px;width:200px;background-color:lightgrey;display:flex;justify-content:center">
            <ion-button slot="icon-only"
              ><ion-icon style="color:black;height:100%;font-size:50px" name="cloud-upload-outline"></ion-icon
            ></ion-button>
          </div>
          <ion-input
            style="width:250px"
            @change=${(e: Event): void => {
              const target = e.target as HTMLTextAreaElement;
              this.groupName = target.value;
            }}
            placeholder="test"
            type="text"
            required
          >
          </ion-input>
          <ion-button
            color="primary"
            @click=${(): void => {
              this.groupService
                .createGroup(this.groupName!)
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
