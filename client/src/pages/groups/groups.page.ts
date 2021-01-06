import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { getTitleString } from '../../helpers/get-title-string';
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

  protected async firstUpdated(): Promise<void> {
    try {
      groupService.subscribe((groups: Group[]) => {
        console.log(groups);
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
          <ion-title>${getTitleString(this.i18n)}</ion-title>
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
            <ion-title size="large">${getTitleString(this.i18n)}</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        ${this.renderNotification()}

        <ion-list>
          <ion-list-header> Gruppen </ion-list-header>
          ${guard(
            [this.groups],
            () => html`
              ${repeat(
                this.groups,
                group => group.id,
                group => html`
                  <ion-item>
                    <ion-avatar slot="start">
                      <img src="" />
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
              routerService.navigate(Routes.GROUPS_CREATE);
            }}
          >
            <ion-icon name="enter-outline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>`;
  }
}
