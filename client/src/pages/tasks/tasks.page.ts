import { css, customElement, html, LitElement, property, query, TemplateResult, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageMixin } from '../page.mixin';
import { LanguageStrings } from '../../models/language-strings';
import { Task } from '../../models/task';
import { taskService, TaskService } from '../../services/task.service';
import { userService } from '../../services/user.service';
import { getTitleString } from '../../helpers/get-title-string';
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
      await taskService.getTasks();
    } catch ({ message, statusCode }) {
      if (statusCode === 401) {
        // routerService.navigate(Routes.SIGN_IN);
      } else {
        this.setNotification({ errorMessage: message });
      }
    }
  }

  protected render(): TemplateResult {
    return html`
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${getTitleString(this.i18n)}</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click=${() => routerService.navigate(Routes.SETTINGS)}>
              <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
              <!-- <ion-icon name="person-circle"></ion-icon> -->
              <!-- TODO: Make Google style avatar work -->
              <!-- <ion-avatar style="border-radius: 0px" slot="end">
                <img
                  style="width: 60px; height:60px"
                  src="https://www.scherenzauber.de/wp-content/uploads/Google-Avatar.png"
                />
              </ion-avatar> -->
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" fullscreen>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">${getTitleString(this.i18n)}</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        ${this.renderNotification()}
        <form novalidate @submit="${this.submit}">
          <div class="inputField">
            <ion-input
              debounce="100"
              type="text"
              autofocus
              id="title"
              name="title"
              placeholder="${this.i18n.NEW_TASK}"
            ></ion-input>
          </div>
        </form>
        ${this.userInfo === undefined ? html`Sign in to create Tasks.` : html``}
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
