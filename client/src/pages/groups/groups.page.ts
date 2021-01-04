import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
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
    return html` ${this.renderNotification()}
      <ion-content>
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
          <ion-fab-button>
            <ion-icon name="enter-outline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>`;
  }
}
