import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { ConnectionStatus } from './connection-status-enum';

const componentCSS = require('./connection-status-bar.widget.scss');
const sharedCSS = require('../../shared.scss');

@customElement('app-connection-status-bar')
class ConnectionStatusBar extends LitElement {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @property({ type: String })
  protected connectionStatus!: ConnectionStatus;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    switch (this.connectionStatus) {
      case ConnectionStatus.BASESTATE:
        return html``;
      case ConnectionStatus.FAILURE:
        return this.stautusBarTemplate(this.i18n.NETWORK_FAILURE);
      case ConnectionStatus.OFFLINE:
        return this.stautusBarTemplate(this.i18n.NETWORK_OFFLINE);
      case ConnectionStatus.ONLINE:
        return this.stautusBarTemplate(this.i18n.NETWORK_ONLINE);
      case ConnectionStatus.SYNCING:
        return this.stautusBarTemplate(this.i18n.NETWORK_SYNCING);
    }
  }

  protected stautusBarTemplate(i18nString: string): TemplateResult {
    return html` <div class="${this.connectionStatus}" id="connectionStatusElem">
      <ion-progress-bar
        type="${this.connectionStatus === 'syncing' ? 'indeterminate' : 'determinate'}"
        value="1"
      ></ion-progress-bar>
      <ion-label>${i18nString}</ion-label>
    </div>`;
  }
}
