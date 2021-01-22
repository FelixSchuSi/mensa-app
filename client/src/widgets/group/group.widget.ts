import { LitElement, customElement, property, TemplateResult, html } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { share, ShareParameter } from '../../helpers/share-api';
import { Routes } from '../../routes';
import GroupsPage from '../../pages/groups/groups.page';
@customElement('app-group')
export class GroupWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Object, attribute: false })
  protected group!: Group;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected createShareParameter = (): ShareParameter => {
    return {
      title: i18nService.complexi18n(this.i18n.GROUP_INVITE_TITLE, { Group: this.group.name || '' }),
      text: i18nService.complexi18n(this.i18n.GROUP_INVITE_MESSAGE, {
        Group: this.group.name,
        JoinCode: this.group.joinCode
      }),
      path: `${Routes.GROUPS}?joinCode=${this.group.joinCode}`,
      subject: i18nService.complexi18n(this.i18n.GROUP_SHARE_SUBJECT, { Group: this.group?.name || '' })
    };
  };
  protected render(): TemplateResult {
    return html`
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
          ${this.group.image?.url
            ? html`<img src=${this.group.image?.url || ''} />`
            : html`<ion-icon style="width:85%;height:85%;" name="help-outline"></ion-icon>`}
        </ion-avatar>
        <ion-card-header style="padding-top:0px">
          ${this.buttonsTemplate}
          <ion-card-subtitle>
            ${this.group.members.length} ${this.group.members.length > 1 ? this.i18n.MEMBERS : this.i18n.MEMBER}
          </ion-card-subtitle>
          <ion-card-title style="display:flex"> ${this.group.name} </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display:flex">
          <app-horizontal-scroller>
            ${[0, 1, 2].map(e => html`<app-group-date></app-group-date>`)}
            <app-group-date-add></app-group-date-add>
          </app-horizontal-scroller>
        </ion-card-content>
      </ion-card>
    `;
  }

  protected get buttonsTemplate(): TemplateResult {
    return html`
      <ion-buttons style="position:absolute; right:0px; top:0px; z-index:999; padding:4px">
        <ion-button
          @click=${async (e: any): Promise<void> => {
            e.stopPropagation();
            if (!(await share(this.createShareParameter()))) {
              const page = <GroupsPage>this.parentNode?.parentElement;
              page.createShareModal(this.createShareParameter());
            }
          }}
        >
          <ion-icon slot="icon-only" color="primary" name="share-social"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }
}
