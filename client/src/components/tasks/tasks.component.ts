import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { httpClient } from '../../http-client';
import { router } from '@fhms-wi/router';
import { PageMixin } from '../page.mixin';
import { Task } from '../../models/task';


const sharedCSS = require('../shared.scss');
const componentCSS = require('./tasks.component.scss');

@customElement('app-tasks')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TasksComponent extends PageMixin(LitElement) {
  static styles = [
    css`
      ${unsafeCSS(sharedCSS)}
    `,
    css`
      ${unsafeCSS(componentCSS)}
    `
  ];

  @query('#title')
  protected titleElement!: HTMLInputElement;

  @property({ type: Array })
  protected tasks: Task[] = [];

  protected async firstUpdated(): Promise<void> {
    try {
      const response = await httpClient.get('tasks' + location.search);
      this.tasks = (await response.json()).results;
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
        router.navigate('users/sign-in');
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()}
      <h1>Aufgaben</h1>
      <form novalidate @submit="${this.submit}">
        <div>
          <input
            class="form-control form-control-lg"
            type="text"
            autofocus
            required
            id="title"
            name="title"
            placeholder="Neue Aufgabe"
          />
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

  protected async toggleTask(taskToToggle: Task): Promise<void> {
    const updatedTask: Task = {
      ...taskToToggle,
      status: taskToToggle.status === 'open' ? 'done' : 'open'
    };

    try {
      await httpClient.patch('tasks/' + updatedTask.id, updatedTask);
      this.tasks = this.tasks.map((task: Task) =>
        task === taskToToggle
          ? ({ ...task, status: (task.status || 'open') === 'open' ? 'done' : 'open' })
          : task
      );
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  protected async removeTask(taskToRemove: Task): Promise<void> {
    try {
      await httpClient.delete('tasks/' + taskToRemove.id);
      this.tasks = this.tasks.filter(task => task.id !== taskToRemove.id);
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  protected async submit(event: Event): Promise<void> {
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
