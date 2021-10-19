import { LanguageStrings } from '../../models/language-strings';
import { Languages } from '../../models/languages';

export function transformDate(dateIsoString: string, i18n: LanguageStrings, smallLayout = false): string {
  const date: Date = new Date(dateIsoString);
  const language = i18n._LANGUAGE === Languages.ENGLISH ? 'en-US' : 'de-DE';
  if (smallLayout) {
    //@ts-ignore
    return new Intl.DateTimeFormat(language, { dateStyle: 'short' }).format(date);
  } else {
    //@ts-ignore
    return new Intl.DateTimeFormat(language, { dateStyle: 'full' }).format(date);
  }
}
