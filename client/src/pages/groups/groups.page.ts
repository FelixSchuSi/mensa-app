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
            <ion-button @click=${(): void => routerService.navigate(Routes.GROUPS_CREATE)}>
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
          ${this.userInfo
            ? html`<img
                style="margin-bottom:16px; max-height:300px; display: block;margin-left: auto;margin-right: auto;"
                src="./svg/zsmessen.svg"
              />`
            : ''}
          <ion-card-title>Plane Mensabesuche mit deinen Freunden!</ion-card-title>
        </ion-card-header>
        <ion-card-content style="font-size: 16px;">
          Klicke auf das
          <ion-icon color="primary" name="add"></ion-icon> Symbol um eine Gruppe zu erstellen oder klicke auf das
          <ion-icon color="primary" name="enter-outline"></ion-icon> Symbol um einer Gruppe beizutreten.
          <!-- ${!this.userInfo
            ? html`
                <br />
                <ion-note style="font-size: 16px;" color="warning">
                  Du muss dich anmelden um Gruppen erstellen und beitreten zu können!
                </ion-note>
              `
            : ''} -->
        </ion-card-content>
        ${!this.userInfo
          ? html`
              <!-- <ion-item-divider mode="ios">
                <ion-label color="warning">
                  Du muss dich anmelden um Gruppen erstellen und beitreten zu können!
                </ion-label>
              </ion-item-divider> -->
              <ion-card style="--background: rgba(var(--ion-color-warning-rgb), .5); margin-top:0px; margin-bottom:0px">
                <ion-card-content style="font-size: 16px;">
                  Du muss dich anmelden um Gruppen erstellen und beitreten zu können!</ion-card-content
                >
              </ion-card>
              <ion-item href=${Routes.SIGN_IN} .detail="${false}" style="--background: var(--ion-card-background)">
                <ion-label>Jetzt anmelden</ion-label>
                <ion-button fill="outline" slot="end">Anmelden</ion-button>
              </ion-item>
              <ion-item href=${Routes.SIGN_UP} .detail="${false}" style="--background: var(--ion-card-background)">
                <ion-label>Jetzt registrieren</ion-label>
                <ion-button fill="outline" slot="end">Registrieren</ion-button>
              </ion-item>
            `
          : ''}
      </ion-card>
    `;
  }
}
