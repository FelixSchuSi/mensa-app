import { css, customElement, html, LitElement, property, query, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { httpClient } from '../../http-client';
import { router } from '@fhms-wi/router';
import { PageMixin } from '../page.mixin';

interface Task {
  id: string;
  title: string;
  status: 'open' | 'done';
}

const componentCSS = require('./tasks.component.scss');

@customElement('app-tasks')
class TasksComponent extends PageMixin(LitElement) {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @query('#title') titleElement!: HTMLInputElement;

  @property() private tasks: Task[] = [];

  async firstUpdated() {
    try {
      const response = await httpClient.get('tasks');
      this.tasks = (await response.json()).results;
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
        router.navigate('users/sign-in');
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  render() {
    return html`
      ${this.renderNotification()}
      <h1>Aufgaben</h1>
      <form novalidate @submit="${this.submit}">
        <div>
          <input type="text" autofocus required id="title" name="title" placeholder="Neue Aufgabe" />
        </div>
      </form>
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

  async toggleTask(taskToToggle: Task) {
    const updatedTask: Task = {
      ...taskToToggle,
      status: taskToToggle.status === 'open' ? 'done' : 'open'
    };

    try {
      await httpClient.patch('tasks/' + updatedTask.id, updatedTask);
      this.tasks = this.tasks.map(task =>
        task === taskToToggle
          ? ({ ...task, status: (task.status || 'open') === 'open' ? 'done' : 'open' } as Task)
          : task
      );
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  async removeTask(taskToRemove: Task) {
    try {
      await httpClient.delete('tasks/' + taskToRemove.id);
      this.tasks = this.tasks.filter(task => task.id !== taskToRemove.id);
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  async submit(event: Event) {
    event.preventDefault();
    const partialTask: Partial<Task> = { title: this.titleElement.value };
    try {
      const response = await httpClient.post('tasks', partialTask);
      const task: Task = await response.json();
      this.tasks = [...this.tasks, task];
      this.titleElement.value = '';
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }
}
