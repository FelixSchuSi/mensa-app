import { customElement, html, internalProperty, LitElement, property, query, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { groupService, GroupService } from '../../services/group.service';
import { Group } from '../../../../server/src/models/group';
import { User } from '../../../../server/src/models/user';
import { routerService } from '../../services/router.service';

@customElement('app-group-details')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CreateGroupPage extends PageMixin(LitElement) {
  protected groupService: GroupService = groupService;
  protected groupID = routerService.getQueryParameter('id');
  @internalProperty()
  protected group?: Group;
  @internalProperty()
  protected members: User[] | undefined;
  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected scrollPos: any;
  protected isDragging: boolean = false;

  @query('.horizontal-scroll-inner-container')
  protected innerScrollContainer!: HTMLDivElement;

  protected async firstUpdated(): Promise<void> {
    this.groupService.getGroup(this.groupID).then(res => {
      this.group = res;
    });
    this.groupService.getGroupMembers(this.groupID).then(res => {
      this.members = res;
    });
  }

  protected formatDate = (unixMillis: number): string => {
    const date = new Date(unixMillis);
    return date.toLocaleString('de-DE');
  };

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              @click=${(): void => {
                history.back();
              }}
              .text="${this.mode === 'ios' ? this.i18n.BACK : null}"
            ></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        ${// ### helpful stuff ###
        // this.i18n.JOINCODE
        // this.group && this.formatDate(this.group!.createdAt)
        // this.members
        // @click=${(): void => {
        //   this.groupService.removeMembership(this.groupID);
        // }}
        ''}
        <ion-card class="card-no-margin-when-small">
          <div class="bg-image-wrapper">
            <img class="bg-image" src=${this.group?.image?.url || '/images/default_group_background.png'} />
          </div>
          <ion-avatar class="group-list-avatar" style="background-color:white">
            ${this.group?.image?.url
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
              ${this.group?.members.length}
              ${this.group?.members && this.group?.members.length > 1 ? this.i18n.MEMBERS : this.i18n.MEMBER}
            </ion-card-subtitle>
            <ion-card-title style="display:flex"> ${this.group?.name} </ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-content>
    `;
  }

  protected onMouseDown = (e: any) => {
    this.isDragging = true;
    this.scrollPos = {
      // The current scroll
      left: this.innerScrollContainer.scrollLeft,
      // Get the current mouse position
      x: e.clientX
    };
    this.innerScrollContainer.style.userSelect = 'none';
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  protected onMouseMove = (e: any) => {
    // How far the mouse has been moved
    const dx = e.clientX - this.scrollPos.x;
    // Scroll the element
    this.innerScrollContainer.scrollLeft = this.scrollPos.left - dx;
  };

  protected onMouseUp = (e: any) => {
    this.innerScrollContainer.style.removeProperty('user-select');
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

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
