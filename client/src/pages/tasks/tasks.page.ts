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
      <ion-header style="background-color: var(--ion-background-color);">
        <ion-toolbar>
          <ion-title>${this.i18n.TASKS}</ion-title>
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
            <ion-title size="large">${this.i18n.TASKS}</ion-title>
          </ion-toolbar>
        </ion-header>
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
        <ion-slides scrollbar="true">
          <ion-slide>
            <h1>
              <img src="../plan.png" /> <br /><br />
              Was gibt es heute in den Mensen? Hier findest du es heraus! Informationen über die Gerichte aller
              münsteraner Mensen an einem Platz.
            </h1>
          </ion-slide>
          <ion-slide>
            <h1>
              <img src="zsmessen.png" /><br /><br />
              In Gesellschaft ist alles besser! Verabrede dich mit deinen Freunden in einer Mensa.
            </h1>
          </ion-slide>

          <ion-slide>
            <h1>
              <img src="auswahl.png" /><br /><br />
              Bist du beim Essen wählerisch oder hast einen sensiblen Magen? Dann nutze unsere Filterfunktion und lasse
              dir nur Gerichte anzeigen, die für dich interessant und verträglich sind. <br /><br /><br /><br />
            </h1>
          </ion-slide>
          <ion-slide>
            <h1>
              <img src="hungrig.png" /><br /><br />
              Bereits Hunger? Dann lege hier los! <br />
              <ion-button
                fill="clear"
                @click=${() => {
                  routerService.navigate(Routes.MEALS_TODAY);
                }}
              >
                ${this.i18n.CONTINUE}
                <ion-icon slot="end" name="arrow-forward"></ion-icon
              ></ion-button></h1
          ></ion-slide>
        </ion-slides>
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
