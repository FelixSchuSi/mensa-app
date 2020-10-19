import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';

interface Task {
  id: string;
  title: string;
  status: 'open' | 'done';
}

const componentCSS = require('./tasks.component.scss');

@customElement('app-tasks')
class TasksComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property() private tasks: Task[] = [
    { id: '0', title: 'TypeScript lernen', status: 'done' },
    { id: '1', title: 'Web Components lernen', status: 'open' }
  ];

  render() {
    return html`
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
  }

  removeTask(taskToRemove: Task) {
    this.tasks = this.tasks.filter(task => task.id !== taskToRemove.id);
  }
}
