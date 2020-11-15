import { LitElement, property, html, TemplateResult } from 'lit-element';

// eslint-disable-next-line
export const PageMixin = <T extends new (...args: any[]) => LitElement>(base: T) => {
  class Page extends base {
    @property()
    private errorMessage = '';

    @property()
    private infoMessage = '';

    private onDestroyCallbacks: (() => void)[] = [];

    protected createRenderRoot() {
      return this;
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      this.onDestroyCallbacks.forEach((callback: () => void) => callback());
    }

    protected callOnDestroy(callback: () => void): void {
      this.onDestroyCallbacks.push(callback);
    }

    protected renderNotification(): TemplateResult {
      return html` <app-notification error="${this.errorMessage}" info="${this.infoMessage}"></app-notification> `;
    }

    protected setNotification({ errorMessage = '', infoMessage = '' }): void {
      this.errorMessage = errorMessage;
      this.infoMessage = infoMessage;
      if (errorMessage || infoMessage) {
        setTimeout(() => this.setNotification({}), 3000);
      }
    }
  }

  return Page;
};
