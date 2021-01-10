/* eslint-disable @typescript-eslint/member-ordering */
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { routerService } from '../../services/router.service';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
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
  protected groupID = routerService.getQueryParameter('id');
  protected group: Group | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;
  protected async firstUpdated(): Promise<void> {
    this.group = await groupService.getGroup(this.groupID);
    this.requestUpdate();
    console.log(this.group);
  }
  protected formatDate = (unixMillis: number): string => {
    const date = new Date(unixMillis);
    return date.toLocaleString('de-DE');
  };
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
          <ion-title>${this.i18n.GROUP_DETAILS}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.GROUP_DETAILS} - ${this.group?.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-list-header>Termine</ion-list-header>
        <ion-list>
          <ion-list-header>Details</ion-list-header>
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-label>${this.group?.name}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>${this.i18n.JOINCODE}</ion-label>
            <ion-label
              >${this.group?.joinCode} <ion-button><ion-icon name="share-social-outline"></ion-icon></ion-button
            ></ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Erstellt am</ion-label>
            <ion-label>${this.group && this.formatDate(this.group!.createdAt)}</ion-label>
          </ion-item>
        </ion-list>
        <ion-list>
          <ion-list-header>Mitglieder</ion-list-header>
          ${this.group &&
          guard(
            [this.group?.members],
            () => html`
              ${repeat(
                this.group!.members,
                group => group,
                group => html`
                  <ion-item>
                    <ion-label>${group}</ion-label>
                  </ion-item>
                `
              )}
            `
          )}
        </ion-list>
      </ion-content>
    `;
  }
}
