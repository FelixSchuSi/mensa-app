import { ComponentProps } from '@ionic/core';
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { AppComponent } from '../../pages/app.component';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./tab-container.component.scss');

@customElement('app-tab-container')
class TabContainerComponent extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];
  // protected createRenderRoot() {
  //   return this;
  // }

  @property()
  protected component!: string;

  @property()
  protected pageContext!: ComponentProps;

  protected render(): TemplateResult {
    // const app: AppComponent = <AppComponent>document.querySelector('app-root')!;
    // const element: HTMLElement = <HTMLElement>app.renderRoot.querySelector(this.component);
    // if (element === null) {
    //   console.log(this.component);
    //   debugger;
    // } else {
    //   // debugger;
    // }
    return html`<ion-nav
      class="${this.component}-nav"
      root="${this.component}"
      .rootParams="${this.pageContext}"
    ></ion-nav>`;
  }
}
