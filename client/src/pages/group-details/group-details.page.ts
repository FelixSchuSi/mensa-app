import { customElement, html, internalProperty, LitElement, property, query, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { User } from '../../../../server/src/models/user';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

@customElement('app-group-details')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CreateGroupPage extends PageMixin(LitElement) {
  protected groupService: GroupService = groupService;
  protected groupID = routerService.getQueryParameter('id');
  @internalProperty()
  protected group?: Group;
  @internalProperty()
  protected members: User[] | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @query('.join-code')
  protected joinCodeElem!: HTMLDivElement;

  protected async firstUpdated(): Promise<void> {
    this.groupService.getGroup(this.groupID).then(res => {
      this.group = res;
    });
    this.groupService.getGroupMembers(this.groupID).then(res => {
      this.members = res;
    });
  }

  protected formatDate = (unixMillis: number): string => {
    const date = new Date(unixMillis);
    return date.toLocaleString('de-DE');
  };

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${() => {
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
          <ion-buttons slot="primary">
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-card class="card-no-margin-when-small">
          <div class="bg-image-wrapper">
            ${this.group?.image?.url ? html`<img class="bg-image" src=${this.group.image?.url || ''} />` : ''}
          </div>
          <ion-avatar
            class="group-list-avatar"
            style="
          background-color: var(--ion-color-step-250); 
          border-radius: var(--border-radius);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;"
          >
            ${this.group?.image?.url
              ? html`<img src=${this.group?.image?.url || ''} />`
              : html`<ion-icon style="width:85%;height:85%;" name="help-outline"></ion-icon>`}
          </ion-avatar>
          <ion-card-header style="padding-top:0px">
            ${this.buttonsTemplate}
            <ion-card-subtitle>
              ${this.group?.members.length}
              ${this.group?.members && this.group?.members.length > 1 ? this.i18n.MEMBERS : this.i18n.MEMBER}
            </ion-card-subtitle>
            <ion-card-title style="display:flex"> ${this.group?.name} </ion-card-title>
          </ion-card-header>
          <ion-card-content style="display:flex">
            <app-horizontal-scroller>
              ${this.members?.map(
                member =>
                  html`
                    <ion-chip style="flex-shrink:0; margin-left:0px">
                      <ion-avatar>
                        <img src="./svg/avatar.svg" />
                      </ion-avatar>
                      <ion-label>${member.name}</ion-label>
                    </ion-chip>
                  `
              )}
            </app-horizontal-scroller>
          </ion-card-content>
          ${this.inviteCodeTemplate} ${this.leaveGroupButtonTemplate}
        </ion-card>
        ${this.mensaVisitsTemplate}
      </ion-content>
    `;
  }

  protected get buttonsTemplate(): TemplateResult {
    return html`
      <ion-buttons style="position:absolute; right:0px; top:0px; z-index:999; padding:4px">
        <ion-button
          @click=${(e: any) => {
            e.stopPropagation();
            console.log('TODO: Implement Share API to Invite someone to a group');
          }}
        >
          <ion-icon slot="icon-only" color="primary" name="share-social"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }

  protected get mensaVisitsTemplate(): TemplateResult {
    return html`
      <div class="card-like-padding" style="display:block">
        <h1>${this.i18n.MENSA_VISITS}</h1>
        ${[0, 1].map(() => html` <app-group-date large></app-group-date> `)}
        <app-group-date-add large></app-group-date-add>
      </div>
    `;
  }

  protected get inviteCodeTemplate(): TemplateResult {
    return html`
      <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${() => {
          const textArea = document.createElement('textarea');
          textArea.value = this.group?.joinCode || '';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          this.setNotification({ successMessage: this.i18n.COPIED_TO_CLIPBOARD });
        }}
        lines="none"
        .detail=${false}
        button
        style="--background: var(--ion-card-background)"
      >
        <ion-label>${this.i18n.JOIN_CODE}</ion-label>
        <ion-button color="primary" fill="outline" slot="end">
          <div class="join-code">${this.group?.joinCode}</div>
          <ion-icon style="margin-left:4px" name="copy-outline"></ion-icon>
        </ion-button>
        <!-- <div slot="end">
          <ion-icon name="copy-outline"></ion-icon>
          ${this.group?.joinCode}
        </div> -->
      </ion-item>
    `;
  }

  protected get leaveGroupButtonTemplate(): TemplateResult {
    return html`
      <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${() => this.showLeaveAlert()}
        lines="none"
        .detail=${false}
        button
        style="--background: var(--ion-card-background)"
      >
        <ion-label>${this.i18n.LEAVE_GROUP}</ion-label>
        <ion-button color="danger" fill="outline" slot="end">${this.i18n.LEAVE}</ion-button>
      </ion-item>
      <!-- <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${() => this.groupService.removeMembership(this.groupID)}
        lines="none"
        detail
        .detail=${false}
        button
        style="--background: var(--ion-card-background);"
      >
        <ion-label>Gruppe verlassen</ion-label>
        <ion-icon color="danger" name="exit-outline"></ion-icon>
      </ion-item> -->
    `;
  }

  protected showLeaveAlert(): void {
    const alert = document.createElement('ion-alert');
    alert.header = this.i18n.LEAVE_GROUP + '?';
    alert.message = this.i18n.LEAVE_GROUP_CONFIRM_QUESTION;
    alert.buttons = [
      this.i18n.CANCEL,
      {
        text: this.i18n.LEAVE,
        handler: () => {
          this.groupService.removeMembership(this.groupID);
        }
      }
    ];
    document.body.appendChild(alert);
    alert.present();
  }
}
