import { LitElement, customElement, property, TemplateResult, html, query } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

@customElement('app-group')
export class GroupWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  @property({ type: Object, attribute: false })
  protected group!: Group;

  protected scrollPos: any;
  protected isDragging: boolean = false;

  @query('.horizontal-scroll-inner-container')
  protected innerScrollContainer!: HTMLDivElement;

  constructor() {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
  }

  protected render(): TemplateResult {
    return html`
      <ion-card class="card-no-margin-when-small">
        <div class="bg-image-wrapper">
          <img class="bg-image" src=${this.group.image?.url || ''} />
        </div>
        <ion-avatar class="group-list-avatar">
          <img src=${this.group.image?.url || ''} />
        </ion-avatar>
        <ion-card-header style="padding-top:0px">
          ${this.buttonsTemplate}
          <ion-card-subtitle>
            ${this.group.members.length} ${this.group.members.length > 1 ? this.i18n.MEMBERS : this.i18n.MEMBER}
          </ion-card-subtitle>
          <ion-card-title style="display:flex"> ${this.group.name} </ion-card-title>
        </ion-card-header>
        <ion-card-content style="display:flex">
          <div @click=${(e: any) => e.stopPropagation()} class="horizontal-scroll-outer-container">
            <div @mousedown=${this.onMouseDown} class="horizontal-scroll-inner-container">
              ${[0, 1, 2].map(e => html`<app-group-date></app-group-date>`)}
              <app-group-date-add></app-group-date-add>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
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
