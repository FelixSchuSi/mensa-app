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

  toggleTask() {
    const oldStatus = this.getAttribute('status') || 'open';
    const newStatus = oldStatus === 'open' ? 'done' : 'open';
    this.setAttribute('status', newStatus);
  }

  taskTemplate(status: string) {
    return html`
      <style>
        ${componentCSS}
      </style>
      <span class="toggle-task" @click="${() => this.toggleTask()}"
        >${status === 'done' ? html`<span class="status"></span>` : ''}</span
      >
      <slot name="title"></slot>
    `;
  }
}

customElements.define('app-task', TaskComponent);
