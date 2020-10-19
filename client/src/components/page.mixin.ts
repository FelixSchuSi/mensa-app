import { LitElement, property, html } from 'lit-element';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PageMixin = <T extends new (...args: any[]) => LitElement>(base: T) => {
  class Page extends base {
    @property()
    private errorMessage = '';

    @property()
    private infoMessage = '';

    private onDestroyCallbacks: (() => void)[] = [];

    disconnectedCallback() {
      super.disconnectedCallback();
      this.onDestroyCallbacks.forEach((callback: () => void) => callback());
    }

    protected callOnDestroy(callback: () => void) {
      this.onDestroyCallbacks.push(callback);
    }

    protected renderNotification() {
      return html` <app-notification error="${this.errorMessage}" info="${this.infoMessage}"></app-notification> `;
    }

    protected setNotification({ errorMessage = '', infoMessage = '' }) {
      this.errorMessage = errorMessage;
      this.infoMessage = infoMessage;
      if (errorMessage || infoMessage) {
        setTimeout(() => this.setNotification({}), 3000);
      }
    }
  }

  return Page;
};
