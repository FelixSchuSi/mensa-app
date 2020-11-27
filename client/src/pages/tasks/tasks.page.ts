import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { routerService } from '../../services/router.service';
import { PageMixin } from '../page.mixin';
import { Routes } from '../../routes';
import { LanguageStrings } from '../../models/language-strings';
import { Task } from '../../models/task';
import { taskService, TaskService } from '../../services/task.service';

const sharedCSS = require('../../shared.scss');
const componentCSS = require('./tasks.page.scss');

@customElement('app-tasks')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TasksPage extends PageMixin(LitElement) {
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

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected taskService: TaskService = taskService;

  protected async firstUpdated(): Promise<void> {
    try {
      taskService.subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
      await taskService.init();
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
        routerService.navigate(Routes.SIGN_IN);
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  protected render(): TemplateResult {
    return html`
      ${this.renderNotification()}
      <form novalidate @submit="${this.submit}">
        <div>
          <input
            class="form-control form-control-lg"
            type="text"
            autofocus
            required
            id="title"
            name="title"
            placeholder="${this.i18n.NEW_TASK}"
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
                  @apptaskstatusclick=${(): Promise<void> => this.toggleTask(task)}
                  @apptaskremoveclick=${(): Promise<void> => this.removeTask(task)}
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
    try {
      await taskService.toggleTask(taskToToggle);
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  protected async removeTask(taskToRemove: Task): Promise<void> {
    try {
      await taskService.removeTask(taskToRemove);
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
  }

  protected async submit(event: Event): Promise<void> {
    event.preventDefault();
    try {
      await taskService.createTask(this.titleElement.value);
      this.titleElement.value = '';
    } catch ({ message }) {
      this.setNotification({ errorMessage: message });
    }
    this.titleElement.value = '';
  }
}
