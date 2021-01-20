import { unsafeCSS } from 'lit-element';
import { css } from 'lit-element';
import { LitElement, customElement, property, TemplateResult, html, query } from 'lit-element';

const componentCSS = require('./horizontal-scroller.widget.scss');
const sharedCSS = require('../../shared.scss');

@customElement('app-horizontal-scroller')
export class GroupWidget extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  protected scrollPos: any;

  @query('.horizontal-scroll-inner-container')
  protected innerScrollContainer!: HTMLDivElement;

  protected onMouseDown = (e: any) => {
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
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  protected render(): TemplateResult {
    return html`
      <div @click=${(e: any) => e.stopPropagation()} class="horizontal-scroll-outer-container">
        <div @mousedown=${this.onMouseDown} class="horizontal-scroll-inner-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
