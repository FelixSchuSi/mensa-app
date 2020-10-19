import { html, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';

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
        ${guard(
          [this.tasks],
          () => html`
            ${repeat(
              this.tasks,
              task => task.id,
              task => html`
                <app-task
                  status="${task.status}"
                  @apptaskstatusclick=${() => this.toggleTask(task)}
                  @apptaskremoveclick=${() => this.removeTask(task)}
                >
                  <span slot="title">${task.title}</span>
                </app-task>
              `
            )}
          `
        )}
      </div>
    `;
  }

  toggleTask(taskToToggle: Task) {
    this.tasks = this.tasks.map(task =>
      task === taskToToggle ? ({ ...task, status: (task.status || 'open') === 'open' ? 'done' : 'open' } as Task) : task
    );
    this.invalidate();
  }

  removeTask(taskToRemove: Task) {
    this.tasks = this.tasks.filter(task => task.id !== taskToRemove.id);
    this.invalidate();
  }
}

customElements.define('app-tasks', TasksComponent);
