import { internalProperty } from 'lit-element';
import { LanguageStrings } from './language-strings';
import { Language } from './languages';

// Information that is needed on each page.
export interface PageContext {
  i18n: LanguageStrings;
  // TODO: Store Userinfo...
  // TODO: Implement PageContextChanged Event
}
