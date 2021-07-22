import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { intro } from '../../models/intro';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

const sharedCSS = require('../../shared.scss');

@customElement('app-intro')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class IntroPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `
  ];

  @query('#title')
  protected titleElement!: HTMLInputElement;

  @property({ type: Array })
  protected intro: intro[] = [];

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      <ion-content fullscreen class="ion-padding">
        <ion-slides
          scrollbar
          .options=${{
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: false,
              draggable: true
            }
          }}
        >
          <ion-slide>
            <ion-card style="width:100%;">
              <ion-card-header>
                <img style="max-height:300px" src="./svg/plan.svg" />
                <ion-card-title>${this.i18n.PLAN}</ion-card-title>
              </ion-card-header>
              <ion-card-content> ${this.i18n.PLANINFO} </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card style="width:100%">
              <ion-card-header>
                <img style="max-height:300px" src="./svg/zsmessen.svg" />
                <ion-card-title>${this.i18n.EATINGTOGETHER}</ion-card-title>
              </ion-card-header>
              <ion-card-content>${this.i18n.EATINGTOGETHERINFO}</ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card style="width:100%">
              <ion-card-header>
                <img style="max-height:300px" src="./svg/auswahl.svg" />
                <ion-card-title>${this.i18n.CHOICE}</ion-card-title>
              </ion-card-header>
              <ion-card-content> ${this.i18n.CHOICEINFO} </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card style="width:100%">
              <ion-card-header>
                <img style="max-height:300px" src="./svg/hungrig.svg" />
                <ion-card-title>${this.i18n.HUNGRY}</ion-card-title>
              </ion-card-header>
              <ion-button
                fill="clear"
                @click=${() => {
                  routerService.navigate(Routes.MEALS_TODAY);
                }}
              >
                ${this.i18n.CONTINUE}
                <ion-icon slot="end" name="arrow-forward"></ion-icon></ion-button></ion-card
          ></ion-slide>
        </ion-slides>
      </ion-content>
    `;
  }
}
