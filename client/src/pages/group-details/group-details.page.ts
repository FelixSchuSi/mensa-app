import { customElement, html, internalProperty, LitElement, property, query, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { User } from '../../../../server/src/models/user';
import { routerService } from '../../services/router.service';

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
              @click=${(): void => {
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        ${// ### helpful stuff ###
        // this.i18n.JOINCODE
        // this.group && this.formatDate(this.group!.createdAt)
        // this.members
        // @click=${(): void => {
        //   this.groupService.removeMembership(this.groupID);
        // }}
        ''}
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
          ${this.leaveGroupButtonTemplate}
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
        <h1>Termine</h1>
        ${[0, 1].map(() => html` <app-group-date large></app-group-date> `)}
        <app-group-date-add large></app-group-date-add>
      </div>
    `;
  }

  protected get leaveGroupButtonTemplate(): TemplateResult {
    return html`
      <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${() => this.groupService.removeMembership(this.groupID)}
        lines="none"
        .detail=${false}
        button
        style="--background: var(--ion-card-background)"
      >
        <ion-label>Gruppe verlassen</ion-label>
        <ion-button color="danger" fill="outline" slot="end">Gruppe verlassen</ion-button>
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
}