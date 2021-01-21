import { LitElement, property, html, TemplateResult, internalProperty } from 'lit-element';
import { User } from '../../../server/src/models/user';
import { LanguageStrings } from '../models/language-strings';
import { i18nService } from '../services/i18n.service';
import { userService } from '../services/user.service';

// eslint-disable-next-line
export const PageMixin = <T extends new (...args: any[]) => LitElement>(base: T) => {
  class Page extends base {
    @property()
    private errorMessage = '';
    @property()
    private infoMessage = '';
    @property()
    private successMessage = '';

    @internalProperty()
    protected i18n!: LanguageStrings;

    @property()
    protected mode: 'ios' | 'md' = 'md';

    @property({ type: Object })
    protected userInfo?: User;

    private onDestroyCallbacks: (() => void)[] = [];

    constructor(...args: any[]) {
      super();
      this.mode = <'ios' | 'md'>localStorage.getItem('mode') ?? this.mode;
      this.i18n = i18nService.getStrings();
      i18nService.subscribe(i18n => (this.i18n = i18n));
      this.userInfo = userService.userInfo;
      userService.subscribe(userInfo => (this.userInfo = userInfo));
    }

    protected createRenderRoot(): Element | ShadowRoot {
      return this;
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      this.onDestroyCallbacks.forEach((callback: () => void) => callback());
    }

    protected callOnDestroy(callback: () => void): void {
      this.onDestroyCallbacks.push(callback);
    }

    public setNotification({ successMessage = '', errorMessage = '', warningMessage = '', duration = 3000 }): void {
      if (errorMessage === '_ignoreMe' || warningMessage === '_ignoreMe' || successMessage === '_ignoreMe') return;
      this.errorMessage = errorMessage;
      this.infoMessage = warningMessage;
      this.successMessage = successMessage;
      if (errorMessage || warningMessage || successMessage) {
        setTimeout(() => this.setNotification({}), duration);
        const toast = <HTMLIonToastElement>document.createElement('ion-toast');
        toast.duration = 3000;
        toast.buttons = [
          {
            role: 'cancel',
            icon: 'close'
          }
        ];
        if (errorMessage) {
          toast.message = errorMessage;
          toast.color = 'danger';
        } else if (warningMessage) {
          toast.message = warningMessage;
          toast.color = 'warning';
        } else if (successMessage) {
          toast.message = successMessage;
          toast.color = 'success';
        }

        document.body.appendChild(toast);
        toast.present();
      }
    }
  }

  return Page;
};
