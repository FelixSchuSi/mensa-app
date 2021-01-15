import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { intro } from '../../models/intro';
import { userService } from '../../services/user.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';
import { popFromRootNav } from '../../helpers/nav-util';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./intro.page.scss');

@customElement('app-intro')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class IntroPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
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
        <ion-slides scrollbar pager>
          <ion-slide>
            <ion-card>
              <ion-card-header>
                <img style="max-height:355px" src="/svg/plan.svg" />
                <ion-card-title>Was gibt es heute in den Mensen?</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Hier findest du es heraus! Informationen über die Gerichte aller münsteraner Mensen an einem Platz.
              </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card>
              <ion-card-header>
                <img style="max-height:355px" src="/svg/zsmessen.svg" />
                <ion-card-title>In Gesellschaft ist alles besser!</ion-card-title>
              </ion-card-header>
              <ion-card-content> Verabrede dich mit deinen Freunden in einer Mensa. </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card>
              <ion-card-header>
                <img style="max-height:355px" src="/svg/auswahl.svg" />
                <ion-card-title>Unverträglichkeiten oder Allergien?</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Du bist beim Essen wählerisch oder hast einen sensiblen Magen? Dann nutze unsere Filterfunktion und
                lasse dir nur Gerichte anzeigen, die für dich interessant und verträglich sind.
              </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card>
              <ion-card-header>
                <img style="max-height:355px" src="/svg/hungrig.svg" />
                <ion-card-title>Bereits Hunger? Dann lege hier los!</ion-card-title>
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
