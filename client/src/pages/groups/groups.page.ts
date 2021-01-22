import { customElement, html, internalProperty, LitElement, property, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { modalController } from '@ionic/core';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { until } from 'lit-html/directives/until';
import { sleep } from '../../helpers/sleep';
import { userService } from '../../services/user.service';
import { ShareParameter } from '../../helpers/share-api';

@customElement('app-groups')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupsPage extends PageMixin(LitElement) {
  @property({ type: Array })
  protected groups: Group[] = [];

  @internalProperty()
  protected loaded!: Promise<void>;

  protected groupService: GroupService = groupService;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected joinCallback = (code: string): void => {
    console.log(code);
  };

  protected loadGroups(): void {
    this.loaded = new Promise<void>(async (resolve, reject) => {
      try {
        groupService.subscribe((groups: Group[]) => {
          this.groups = groups;
        });
        await sleep(500); // So the skeleton is seen
        await groupService.loadGroups(true);
        resolve();
      } catch ({ message, statusCode }) {
        if (statusCode === 401) {
          // routerService.navigate(Routes.SIGN_IN);
        } else {
          this.setNotification({ errorMessage: message });
        }
        resolve();
      }
    });
  }

  protected async createJoinModal(): Promise<void> {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-group-join-modal',
      swipeToClose: true,
      componentProps: {
        groups: this.groups
      }
    });

    await modal.present();
  }

  protected async createCreateModal(): Promise<void> {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-group-create-modal',
      swipeToClose: true,
      cssClass: 'create-group-modal'
    });

    await modal.present();
  }

  protected firstUpdated(): void {
    this.loadGroups();
    routerService.subscribe(route => {
      if (route === Routes.GROUPS) {
        this.loadGroups();
      }
    });
    userService.subscribe(userInfo => {
      if (!userInfo) {
        this.groups = [];
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async createShareModal(params: ShareParameter): Promise<void> {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'app-share-modal',
      swipeToClose: true,
      componentProps: {
        shareParams: params,
        notificationCallback: (msg: string): void => {
          this.setNotification({ successMessage: msg });
        }
      }
    });
    await modal.present();
  }
  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.GROUPS}</ion-title>
          <ion-buttons slot="primary">
            <ion-button
              @click=${(): void => {
                if (!this.signInNeeded(this.i18n.SIGN_IN_NEEDED_TO_CREATE_GROUP)) return;
                // routerService.navigate(Routes.GROUPS_CREATE);
                this.createCreateModal();
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
      <ion-content class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.GROUPS}</ion-title>
          </ion-toolbar>
        </ion-header>

        ${until(this.getContentTemplate(), this.skeleton)}

        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button
            @click=${(): void => {
              if (!this.signInNeeded(this.i18n.SIGN_IN_NEEDED_TO_JOIN_GROUP)) return;
              this.createJoinModal();
            }}
          >
            <ion-icon name="enter-outline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    `;
  }

  protected async getContentTemplate(): Promise<TemplateResult> {
    await this.loaded;
    return html` ${this.groups.length === 0 || !this.userInfo ? this.hintTemplate : ''} ${this.groupListTemplate} `;
  }

  protected get groupListTemplate(): TemplateResult {
    return html`
      ${this.groups.map(group => {
        return html`
          <app-group
            @click=${() => routerService.navigate(Routes.GROUPS_DETAILS, { id: group.id })}
            .group=${group}
            style="cursor: pointer"
          >
          </app-group>
        `;
      })}
    `;
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

  protected get skeleton(): TemplateResult {
    return html`
      <ion-card>
        <ion-skeleton-text animated style="width: 100%; height:100px; margin-top:0px;"></ion-skeleton-text>
        <ion-card-header>
          <ion-card-subtitle>
            <ion-skeleton-text animated style="width: 20%; height:16px"></ion-skeleton-text>
          </ion-card-subtitle>
          <ion-card-title>
            <ion-skeleton-text animated style="width: 60%; height:33px"></ion-skeleton-text>
          </ion-card-title>
        </ion-card-header>

        <ion-card-content style="display:flex">
          <div class="horizontal-scroll-outer-container">
            <div class=" horizontal-scroll-inner-container">
              ${[0, 1, 2].map(
                e =>
                  html`
                    <ion-skeleton-text
                      animated
                      style="flex-shrink:0;display:inline-flex;border-radius: 8px;margin-right:8px;width: 260px; height:164px"
                    ></ion-skeleton-text>
                  `
              )}
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    `;
  }
}
export default GroupsPage;
