import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./header.component.scss');

@customElement('app-header')
class HeaderComponent extends LitElement {
  @property()
  title = '';

  @property()
  linkItems: Array<{ title: string; routePath: string }> = [];

  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  render() {
    return html`
      <a href="tasks" class="title"><span class="logo"></span>${this.title}</a>
      <nav>
        <ol>
          ${this.linkItems.map(linkItem => html`<li><a href="${linkItem.routePath}">${linkItem.title}</a></li>`)}
        </ol>
      </nav>
    `;
  }
}
