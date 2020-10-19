const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
      padding: 1rem;
      font-size: 1rem;
      border: solid rgba(0, 0, 0, 0.125) 1px;
    }
    :host(:first-of-type) {
      border-top-right-radius: .25rem;
      border-top-left-radius: .25rem;
    }

    :host(:not(:first-of-type)) {
      border-top: none;
    }

    :host(:last-of-type) {
      border-bottom-right-radius: .25rem;
      border-bottom-left-radius: .25rem;
    }

    .toggle-task {
      display: inline-flex;
      flex-shrink: 0;
      width: 1.75rem;
      height: 1.75rem;
      border: 1px solid #888;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
    
    slot[name='title']::slotted(*) { flex-grow:1; margin-left: 0.75rem }
    
    .status::before {
      color: #008000;
      font: normal normal normal 1.25rem/1 'Font Awesome 5 Free';
      content: "\\f00c"
    }
  </style>
  <span class="toggle-task"><span class="status"></span></span>
  <slot name="title"></slot>
  `;

class TaskComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(taskTemplate.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['status'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }

  render() {
    const statusElem: any = this.shadowRoot!.querySelector('.status')!;
    statusElem.style.display = this.getAttribute('status') === 'open' ? 'none' : 'inherit';
  }
}

customElements.define('app-task', TaskComponent);
