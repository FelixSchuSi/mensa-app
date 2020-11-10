import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { TaskStatus } from '../../../models/task-status';

const componentCSS = require('./task.component.scss');

@customElement('app-task')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TaskComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property()
  public status: TaskStatus = 'open';

  protected render(): TemplateResult {
    return html`
      <span class="toggle-task" @click="${(): boolean => this.dispatchEvent(new CustomEvent('apptaskstatusclick'))}"
        >${this.status === 'done' ? html`<span class="status"></span>` : ''}</span
      >
      <slot name="title"></slot>
      <span
        class="remove-task"
        @click="${(): boolean => this.dispatchEvent(new CustomEvent('apptaskremoveclick'))}"
      ></span>
    `;
  }
}
