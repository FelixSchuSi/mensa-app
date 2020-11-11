import { html } from 'lit-element';
import { LanguageStrings } from '../models/language-strings';
import { Languages } from '../models/languages';
import { english } from './english';
import { german } from './german';

// TODO: Load lang from userData
const lang = Languages.GERMAN;

export const i18n: LanguageStrings = lang === Languages.GERMAN ? german : english;

const template = html`<button>${i18n.HELLO_WORLD}</button>`;
