import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { User } from '../../../../server/src/models/user';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { share, ShareParameter } from '../../helpers/share-api';
import { i18nService } from '../../services/i18n.service';
import { copyToClipboard } from '../../helpers/copy-to-clipboard';
import { createShareModal } from '../../helpers/create-share-modal';
import { MensaVisit } from '../../../../server/src/models/mensa-visit';
import { goBackTo } from '../../helpers/go-back-to';
import { modalController } from '@ionic/core';

@customElement('app-group-details')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupDetailsPage extends PageMixin(LitElement) {
  protected groupService: GroupService = groupService;
  protected groupID = routerService.getQueryParameter('id');
  @state()
  protected group?: Group;
  @state()
  protected members: User[] | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @query('.join-code')
  protected joinCodeElem!: HTMLDivElement;

  protected async firstUpdated(): Promise<void> {
    this.groupService.subscribe(async groups => {
      const thisGroupUpdated: Group | undefined = groups.find(group => group.id === this.groupID);
      if (thisGroupUpdated) {
        this.group = thisGroupUpdated;
        this.members = await this.groupService.getGroupMembers(this.groupID);
      }
    });
    this.group = await this.groupService.getGroup(this.groupID);
    this.members = await this.groupService.getGroupMembers(this.groupID);
  }

  protected formatDate = (unixMillis: number): string => {
    const date = new Date(unixMillis);
    return date.toLocaleString('de-DE');
  };
  protected createShareParameter = (): ShareParameter => {
    return {
      title: i18nService.complexi18n(this.i18n.GROUP_INVITE_TITLE, { Group: this.group?.name || '' }),
      subtitle: this.i18n.SHARE_GROUP_INVITE,
      text: i18nService.complexi18n(this.i18n.GROUP_INVITE_MESSAGE, {
        Group: this.group?.name || '',
        JoinCode: this.group?.joinCode || ''
      }),
      subject: i18nService.complexi18n(this.i18n.GROUP_SHARE_SUBJECT, { Group: this.group?.name || '' }),
      path: `${Routes.GROUPS}?joinCode=${this.group?.joinCode}`
    };
  };

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <app-back-button
            @click=${() => {
              goBackTo(Routes.GROUPS);
            }}
            .mode=${this.mode}
          ></app-back-button>
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
              ${this.members?.map(member => {
                const imgSrc = member.image?.url ?? './svg/avatar.svg';
                return html`
                  <ion-chip style="flex-shrink:0; margin-left:0px">
                    <ion-avatar>
                      <img src=${imgSrc} />
                    </ion-avatar>
                    <ion-label>${member.name}</ion-label>
                  </ion-chip>
                `;
              })}
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
        <ion-button @click=${() => this.createEditModal()}>
          <ion-icon slot="icon-only" color="primary" name="create-outline"></ion-icon>
        </ion-button>
        <ion-button
          @click=${async (e: any): Promise<void> => {
            const params = this.createShareParameter();
            if (!(await share(params))) {
              createShareModal(params, this.setNotification);
            }
            e.stopPropagation();
          }}
        >
          <ion-icon slot="icon-only" color="primary" name="share-social"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }

  protected async createEditModal(): Promise<void> {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-group-create-modal',
      swipeToClose: true,
      cssClass: 'create-group-modal',
      componentProps: {
        mode: 'edit',
        group: this.group,
        groupName: this.group?.name ?? '',
        imagesrc: this.group?.image?.url ?? null
      }
    });

    await modal.present();
  }

  protected get mensaVisitsTemplate(): TemplateResult {
    const visits = this.group?.mensaVisits || [];
    return html`
      <div class="card-like-padding" style="display:block">
        <h1>${this.i18n.MENSA_VISITS}</h1>
        ${visits.map(
          mensaVisit => html`
            <app-group-date
              .group=${this.group}
              .members=${this.members}
              .mensaVisit=${mensaVisit}
              large
            ></app-group-date>
          `
        )}
        <app-group-date-add
          .groupID=${this.group?.id}
          .setNotification=${this.setNotification}
          large
        ></app-group-date-add>
      </div>
    `;
  }

  protected async createVisit(): Promise<void> {
    const mensaVisit: Partial<MensaVisit> = { title: 'moin', mensa: 'aasee', datetime: 1611253613166 };
    if (!this.group?.id) return;
    this.group = await groupService.createMensaVisit(this.group.id, mensaVisit);
  }

  protected get inviteCodeTemplate(): TemplateResult {
    return html`
      <div style="width:100%; border-bottom: solid 1px; border-color: var(--ion-color-step-250)"></div>
      <ion-item
        @click=${(): void => {
          copyToClipboard(this.group?.joinCode || '');
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
          routerService.navigate(Routes.GROUPS);
        }
      }
    ];
    document.body.appendChild(alert);
    alert.present();
  }
}
