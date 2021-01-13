import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./meals-today.page.scss');

@customElement('app-meals-today')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MealsTodayPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  createRenderRoot() {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.MEALS_TODAY}</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
              <!-- <ion-icon name="person-circle"></ion-icon> -->
              <!-- TODO: Make Google style avatar work -->
              <!-- <ion-avatar style="border-radius: 0px" slot="end">
                <img
                  style="width: 60px; height:60px"
                  src="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar.png"
                />
              </ion-avatar> -->
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${this.i18n.MEALS_TODAY}</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        <p>Hier könnten Ihre heutigen Gerichte stehen!</p>
        <chip-select @chip-select-change=${(e: any) => console.log(e.detail, e)}>
          <ion-chip>asdf</ion-chip>
          <ion-chip class="selected">jklö</ion-chip>
          <ion-chip>asdfjklö</ion-chip>
        </chip-select>
        <ion-segment mode="ios" value=${this.mode}>
          <ion-segment-button value="ios"> GITHUB </ion-segment-button>
          <ion-segment-button value="md"> jklö </ion-segment-button>
          <ion-segment-button value="sdf"> asdfjklö </ion-segment-button>
        </ion-segment>
      </ion-content>
    `;
  }
}
