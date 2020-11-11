import { Languages } from '../models/languages';

export function getBrowserLanguage(): Languages {
  const language: string = window.navigator.language; // BCP 47 language tag
  // All BCP 47 Tags of german languages
  const gerLangCodes = ['wen-DE', 'de-DE', 'gsw', 'de', 'de-CH', 'de-AT', 'de-LU', 'de-LI'];

  if (gerLangCodes.indexOf(language) > 0) {
    return Languages.GERMAN;
  } else {
    return Languages.ENGLISH;
  }
}
