import { LitElement, customElement, property, TemplateResult, html } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

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

  protected render(): TemplateResult {
    return html`
      <ion-card class="card-no-margin-when-small">
        <div class="bg-image-wrapper">
          <img class="bg-image" src=${this.group.image?.url || '/images/default_group_background.png'} />
        </div>
        <ion-avatar class="group-list-avatar" style="background-color:white">
          ${this.group.image?.url
            ? html`<img src=${this.group.image?.url || ''} />`
            : html`<ion-icon
                style="width:100%;height:100%;transform: scale(1.23);"
                color="primary"
                name="people-circle-outline"
              ></ion-icon>`}
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
          @click=${(e: any) => {
            e.stopPropagation();
            console.log('TODO: Implement Share API to Invite someone to a group');
          }}
        >
          <ion-icon slot="icon-only" color="primary" name="share-social"></ion-icon>
        </ion-button>
      </ion-buttons>
    `;
  }
}
