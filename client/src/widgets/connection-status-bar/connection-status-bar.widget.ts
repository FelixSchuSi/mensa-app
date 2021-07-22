import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LanguageStrings } from '../../models/language-strings';
import { connectionStatusService } from '../../services/connection-status.service';
import { i18nService } from '../../services/i18n.service';
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

  @property()
  protected connectionStatus: ConnectionStatus = ConnectionStatus.BASESTATE;

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  constructor(...args: any[]) {
    super();
    this.i18n = i18nService.getStrings();
    i18nService.subscribe(i18n => (this.i18n = i18n));
    connectionStatusService.subscribe((status: ConnectionStatus) => {
      this.connectionStatus = status;
    });
  }

  protected render(): TemplateResult {
    switch (this.connectionStatus) {
      case ConnectionStatus.OFFLINE:
        return this.stautusBarTemplate(this.i18n.NETWORK_OFFLINE);
      case ConnectionStatus.ONLINE:
        return this.stautusBarTemplate(this.i18n.NETWORK_ONLINE);
      case ConnectionStatus.SYNCING:
        return this.stautusBarTemplate(this.i18n.NETWORK_SYNCING);
      case ConnectionStatus.BASESTATE:
        return html``;
      default:
        return html``;
    }
  }

  protected stautusBarTemplate(i18nString: string): TemplateResult {
    return html`
      <div class="${this.connectionStatus}" id="connectionStatusElem">
        <ion-progress-bar
          type="${this.connectionStatus === 'syncing' ? 'indeterminate' : 'determinate'}"
          value="1"
        ></ion-progress-bar>
        <ion-label>${i18nString}</ion-label>
      </div>
    `;
  }
}
