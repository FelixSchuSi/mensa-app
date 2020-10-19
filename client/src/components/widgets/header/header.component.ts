import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./header.component.scss');

@customElement('app-header')
class HeaderComponent extends LitElement {
  @property()
  title = '';

  @property()
  linkItems: Array<{ title: string; routePath: string }> = [];

  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @property()
  navbarOpen = false;

  render() {
    return html`
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/"><span class="logo"></span>${this.title}</a>
        <button
          @click="${this.toggle}"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class=${classMap({
            'collapse': true,
            'navbar-collapse': true,
            'justify-content-end': true,
            'show': this.navbarOpen
          })}
          id="navbarNav"
        >
          <ul class="navbar-nav">
            ${this.linkItems.map(
              linkItem => html`
                <li class="nav-item"><a class="nav-link" href="${linkItem.routePath}">${linkItem.title}</a></li>
              `
            )}
          </ul>
        </div>
      </nav>
    `;
  }

  toggle() {
    this.navbarOpen = !this.navbarOpen;
  }
}
