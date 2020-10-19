import { html, render } from 'lit-html';

const componentCSS = require('./task.component.scss');

const taskTemplate = (status: string) => html`
  <style>
    ${componentCSS}
  </style>
  <span class="toggle-task">${status === 'done' ? html`<span class="status"></span>` : ''}</span>
  <slot name="title"></slot>
`;

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
    render(taskTemplate(status), this.shadowRoot!);
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
}

customElements.define('app-task', TaskComponent);
