import { css, unsafeCSS, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./groups.page.scss');
@customElement('app-groups')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupsPage extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];
  protected render(): TemplateResult {
    console.log('render');
    return html`<div>Test</div>`;
  }
}
