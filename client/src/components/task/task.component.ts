class TaskComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['status', 'title'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }

  render() {
    const status = this.getAttribute('status');
    const title = this.getAttribute('title');
    const style = `
      .task {
        display: flex;
        align-items: center;
        padding: 1rem;
        font-size: 1rem;
        border: solid rgba(0, 0, 0, 0.125) 1px;
      }
      .task:first-of-type {
        border-top-right-radius: .25rem;
        border-top-left-radius: .25rem;
      }
  
      .task:not(:first-of-type) {
        border-top: none;
      }
  
      .task:last-of-type {
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
      .title { flex-grow:1; margin-left: 0.75rem;}
      .status::before {
        color: #008000;
        font: normal normal normal 1.25rem/1 'Font Awesome 5 Free';
        content: "\\f00c"
      }
      `;
    this.innerHTML = `
        <style>${style}</style>
        <div class="task">
          <span class="toggle-task">${status === 'done' ? `<span class="status"></span>` : ''}</span>
          <span class="title">${title}</span>
        </div>
      `;
  }
}

customElements.define('app-task', TaskComponent);
