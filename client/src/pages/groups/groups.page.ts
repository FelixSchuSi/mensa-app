import { customElement, html, LitElement, TemplateResult } from 'lit-element';
import { PageMixin } from '../page.mixin';

@customElement('app-groups')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GroupsPage extends PageMixin(LitElement) {
  protected render(): TemplateResult {
    return html`<h1>Test</h1>`;
  }
}
