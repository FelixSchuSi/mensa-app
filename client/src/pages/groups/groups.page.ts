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
const sharedCSS = require('../../shared.scss');
const componentCSS = require('./groups.page.scss');

@customElement('app-groups')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupsPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

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
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
              <!-- <ion-icon name="person-circle"></ion-icon> -->
              <!-- TODO: Make Google style avatar work -->
              <!-- <ion-avatar style="border-radius: 0px" slot="end">
                <img
                  style="width: 60px; height:60px"
                  src="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar.png"
                />
              </ion-avatar> -->
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.GROUPS}</ion-title>
            <ion-buttons slot="primary">
              <ion-button @click=${(): void => routerService.navigate(Routes.GROUPS_CREATE)}
                ><ion-icon name="add"></ion-icon
              ></ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-list lines="inset">
          <ion-list-header> Gruppen </ion-list-header>
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
}
