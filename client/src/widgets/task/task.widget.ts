import { css, customElement, html, LitElement, property, TemplateResult, unsafeCSS } from 'lit-element';
import { LanguageStrings } from '../../models/language-strings';
import { TaskStatus } from '../../models/task-status';

const componentCSS = require('./task.widget.scss');

@customElement('app-task')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TaskWidget extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  @property({ type: Object })
  protected i18n!: LanguageStrings;

  @property()
  public status: TaskStatus = 'open';

  protected render(): TemplateResult {
    return html`
      <h1>${this.i18n.BYE_WORLD}</h1>
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
