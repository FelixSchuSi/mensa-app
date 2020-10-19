import { html, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

interface Task {
  id: string;
  title: string;
  status: 'open' | 'done';
}

const componentCSS = require('./tasks.component.scss');

class TasksComponent extends HTMLElement {
  private renderTriggered = false;

  private tasks: Task[] = [
    { id: '0', title: 'TypeScript lernen', status: 'done' },
    { id: '1', title: 'Web Components lernen', status: 'open' }
  ];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.invalidate();
  }

  render() {
    render(this.tasksTemplate(), this.shadowRoot!);
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

  tasksTemplate() {
    return html`
      <style>
        ${componentCSS}
      </style>
      <h1>Aufgaben</h1>
      <div class="tasks">
        ${repeat(
          this.tasks,
          task => task.id,
          task => html`
            <app-task status="${task.status}">
              <span slot="title">${task.title}</span>
            </app-task>
          `
        )}
      </div>
    `;
  }
}

customElements.define('app-tasks', TasksComponent);
