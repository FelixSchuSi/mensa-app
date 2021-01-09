/* eslint-disable @typescript-eslint/member-ordering */
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
const sharedCSS = require('../../shared.scss');
const componentCSS = require('./group-details.page.scss');

@customElement('app-group-details')
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
  @property({ type: Object, attribute: false })
  protected group: Group | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${async (): Promise<void> => {
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
      </ion-content>
    `;
  }
}
