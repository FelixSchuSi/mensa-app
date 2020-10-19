import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./task.component.scss');

@customElement('app-task')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TaskComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property() status = 'open';

  render() {
    return html`
      <span class="toggle-task" @click="${() => this.emit('apptaskstatusclick')}"
        >${this.status === 'done' ? html`<span class="status"></span>` : ''}</span
      >
      <slot name="title"></slot>
      <span class="remove-task" @click="${() => this.emit('apptaskremoveclick')}"></span>
    `;
  }

  updated() {
    console.log('status changed to: ' + this.status);
  }

  emit(eventType: string, eventData = {}) {
    let event;
    if (typeof CustomEvent === 'function') {
      event = new CustomEvent(eventType, { detail: eventData, bubbles: true, composed: true });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventType, true, false, eventData);
    }
    this.dispatchEvent(event);
  }
}
