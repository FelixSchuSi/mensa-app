import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { LinkItem } from '../../models/link-item';
import { ROUTES } from '../../routes';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./header.widget.scss');

@customElement('app-header')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HeaderWidget extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @property({ type: String })
  public appTitle = '';

  @property({ type: Array })
  public linkItems: LinkItem[] = [];

  @property({ type: Boolean })
  protected navbarOpen = false;

  protected render(): TemplateResult {
    return html`
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href=${ROUTES.TASKS}><span class="logo"></span>${this.appTitle}</a>
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

  protected toggle(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
