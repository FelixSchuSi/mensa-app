import { ComponentProps } from '@ionic/core';
import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';

const componentCSS = require('./tab-container.component.scss');

@customElement('app-tab-container')
class TabContainerComponent extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @property()
  protected component!: string;

  @property()
  protected pageContext!: ComponentProps;

  protected render(): TemplateResult {
    return html`
      <ion-nav class="${this.component}-nav" root="${this.component}" .rootParams="${this.pageContext}"></ion-nav>
    `;
  }
}
