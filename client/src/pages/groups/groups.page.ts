import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { modalController } from '@ionic/core';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { LanguageKeys } from '../../i18n/language-keys';

@customElement('app-groups')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupsPage extends PageMixin(LitElement) {
  @property({ type: Array })
  protected groups: Group[] = [];

  protected groupService: GroupService = groupService;
  protected joinCallback = (code: string): void => {
    console.log(code);
  };
  protected async createModal(): Promise<void> {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-group-join-modal',
      swipeToClose: true,
      componentProps: {
        groups: this.groups
      }
    });

    await modal.present();
  }
  protected async firstUpdated(): Promise<void> {
    try {
      groupService.subscribe((groups: Group[]) => {
        this.groups = groups;
      });
      await groupService.loadGroups(true);
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
        // routerService.navigate(Routes.SIGN_IN);
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html` <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.GROUPS}</ion-title>
          <ion-buttons slot="primary">
            <ion-button
              @click=${(): void => {
                if (!this.signInNeeded(this.i18n.SIGN_IN_NEEDED_TO_CREATE_GROUP)) return;
                routerService.navigate(Routes.GROUPS_CREATE);
              }}
            >
              <ion-icon name="add"></ion-icon>
            </ion-button>
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.GROUPS}</ion-title>
          </ion-toolbar>
        </ion-header>

        ${this.groups.length === 0 || !this.userInfo ? this.hintTemplate : ''}

        <ion-list lines="inset">
          ${guard(
            [this.groups],
            () => html`
              ${repeat(
                this.groups,
                group => group.id,
                group => html`
                  <ion-item
                    style="cursor: pointer"
                    @click=${(): void => {
                      routerService.navigate(Routes.GROUPS_DETAILS, { id: group.id });
                    }}
                  >
                    <ion-avatar slot="start">
                      <img src=${group.image?.url || ''} />
                    </ion-avatar>
                    <ion-label>
                      <h2>${group.name}</h2>
                      <p>Mitglieder: ${group.members.length}</p>
                    </ion-label>
                  </ion-item>
                `
              )}
            `
          )}
        </ion-list>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button
            @click=${(): void => {
              if (!this.signInNeeded(this.i18n.SIGN_IN_NEEDED_TO_JOIN_GROUP)) return;
              this.createModal();
            }}
          >
            <ion-icon name="enter-outline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>`;
  }

  protected get hintTemplate(): TemplateResult {
    return html`
      <ion-card class="card-no-margin-when-small">
        <ion-card-header>
          <img
            style="margin-bottom:16px; max-height:300px; display: block;margin-left: auto;margin-right: auto;"
            src="./svg/zsmessen.svg"
          />
          <ion-card-subtitle style="text-transform: capitalize">${this.i18n.WHO_WHEN_WHERE}</ion-card-subtitle>
          <ion-card-title>${this.i18n.PLAN_MENSA_VISITS_WITH_YOUR_FRIENDS}</ion-card-title>
        </ion-card-header>
        ${this.userInfo
          ? html`
              <ion-card-content style="font-size: 16px;">
                ${this.i18n.GROUPS_PAGE_HINT_01}
                <ion-icon color="primary" name="add"></ion-icon>
                ${this.i18n.GROUPS_PAGE_HINT_02}
                <ion-icon color="primary" name="enter-outline"></ion-icon>
                ${this.i18n.GROUPS_PAGE_HINT_03}
              </ion-card-content>
            `
          : ''}
        ${!this.userInfo
          ? html`
              <ion-card-content style="font-size: 16px;">
                ${this.i18n.SIGN_IN_NEEDED_TO_JOIN_AND_CREATE_GROUP}
              </ion-card-content>
              <ion-item
                class="item-inside-card"
                href=${Routes.SIGN_IN}
                .detail="${false}"
                style="--border-color: var();--background: var(--ion-card-background)"
              >
                <ion-label>${this.i18n.SIGN_IN_NOW}</ion-label>
                <ion-button fill="outline" slot="end">${this.i18n.SIGN_IN}</ion-button>
              </ion-item>
              <ion-item
                lines="none"
                href=${Routes.SIGN_UP}
                .detail="${false}"
                style="--background: var(--ion-card-background)"
              >
                <ion-label>${this.i18n.SIGN_UP_NOW}</ion-label>
                <ion-button fill="outline" slot="end">${this.i18n.SIGN_UP}</ion-button>
              </ion-item>
            `
          : ''}
      </ion-card>
    `;
  }

  protected signInNeeded(warningMessage: string): boolean {
    if (!this.userInfo) {
      this.setNotification({ warningMessage });
      return false;
    } else {
      return true;
    }
  }
}
