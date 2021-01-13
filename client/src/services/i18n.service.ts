import { english } from '../i18n/english';
import { german } from '../i18n/german';
import { getBrowserLanguage } from '../i18n/get-browser-language';
import { LanguageStrings } from '../models/language-strings';
import { Languages } from '../models/languages';
import { storeService } from './store.service';

type i18nListener = (i18n: LanguageStrings) => void;

class I18nService {
  private strings!: LanguageStrings;
  private _language!: Languages;
  private listeners: i18nListener[] = [];
  private LANGUAGE_KEY: string = 'LANGUAGE';

  constructor() {
    storeService.get(this.LANGUAGE_KEY).then(language => {
      this.language = <Languages>language ?? getBrowserLanguage();
    });
  }

  public set language(language: Languages) {
    this._language = language;
    const newLangStrings: LanguageStrings = language === Languages.GERMAN ? german : english;
    this.strings = newLangStrings;
    storeService.set(this.LANGUAGE_KEY, language);
    this.notifyListeners(this.strings);
  }

  public get language(): Languages {
    return this._language;
  }

  public getStrings(): LanguageStrings {
    return this.strings;
  }

  public subscribe(listener: i18nListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(i18n: LanguageStrings): void {
    this.listeners.forEach(listener => listener(i18n));
  }
}

export const i18nService = new I18nService();
