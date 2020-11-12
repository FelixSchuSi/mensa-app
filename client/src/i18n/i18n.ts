import { LanguageStrings } from '../models/language-strings';
import { Languages } from '../models/languages';
import { english } from './english';
import { german } from './german';
import { getBrowserLanguage } from './get-browser-language';

// // TODO: Load lang from userData
// const lang = Languages.GERMAN;

// export const i18n: LanguageStrings = lang === Languages.GERMAN ? german : english;

// const template = html`<button>${i18n.HELLO_WORLD}</button>`;
export let i18n: LanguageStrings = getBrowserLanguage() === Languages.GERMAN ? german : english;
