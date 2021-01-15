import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { Task } from '../../models/task';
import { taskService, TaskService } from '../../services/task.service';
import { userService } from '../../services/user.service';
import { routerService } from '../../services/router.service';
import { Routes } from '../../routes';

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
    userService.subscribe(status => {
      if (status !== undefined) {
        taskService.getTasks();
      }
    });

    try {
      taskService.subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
      if (userService.userInfo) await taskService.getTasks();
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);"> </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense"> </ion-header>
      </ion-content>
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
