import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { intro } from '../../models/intro';
import { userService } from '../../services/user.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

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
      <ion-content>
        <ion-slides scrollbar="true">
          <ion-slide>
            <h1>
              <img src="../plan.png" /> <br /><br />
              Was gibt es heute in den Mensen? Hier findest du es heraus! Informationen über die Gerichte aller
              münsteraner Mensen an einem Platz.
            </h1>
          </ion-slide>
          <ion-slide>
            <h1>
              <img src="zsmessen.png" /><br /><br />
              In Gesellschaft ist alles besser! Verabrede dich mit deinen Freunden in einer Mensa.
            </h1>
          </ion-slide>

          <ion-slide>
            <h1>
              <img src="auswahl.png" /><br /><br />
              Bist du beim Essen wählerisch oder hast einen sensiblen Magen? Dann nutze unsere Filterfunktion und lasse
              dir nur Gerichte anzeigen, die für dich interessant und verträglich sind. <br /><br /><br /><br />
            </h1>
          </ion-slide>
          <ion-slide>
            <h1>
              <img src="hungrig.png" /><br /><br />
              Bereits Hunger? Dann lege hier los! <br />
              <ion-button
                fill="clear"
                @click=${() => {
                  routerService.navigate(Routes.MEALS_TODAY);
                }}
              >
                ${this.i18n.CONTINUE}
                <ion-icon slot="end" name="arrow-forward"></ion-icon
              ></ion-button></h1
          ></ion-slide>
        </ion-slides>
      </ion-content>
    `;
  }
}
