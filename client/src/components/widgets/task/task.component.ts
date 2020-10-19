import { html, render } from 'lit-html';

const componentCSS = require('./task.component.scss');

class TaskComponent extends HTMLElement {
  private renderTriggered = false;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['status'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.invalidate();
  }

  render() {
    const status = this.getAttribute('status') || 'open';
    render(this.taskTemplate(status), this.shadowRoot!);
  }

  invalidate() {
    if (!this.renderTriggered) {
      this.renderTriggered = true;
      Promise.resolve().then(() => {
        this.renderTriggered = false;
        this.render();
      });
    }
  }

  taskTemplate(status: string) {
    return html`
      <style>
        ${componentCSS}
      </style>
      <span class="toggle-task" @click="${() => this.emit('apptaskstatusclick')}"
        >${status === 'done' ? html`<span class="status"></span>` : ''}</span
      >
      <slot name="title"></slot>
      <span class="remove-task" @click="${() => this.emit('apptaskremoveclick')}"></span>
    `;
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

customElements.define('app-task', TaskComponent);
