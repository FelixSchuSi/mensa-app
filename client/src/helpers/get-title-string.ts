import { LanguageStrings } from '../models/language-strings';
import { Routes } from '../routes';
import { routerService } from '../services/router.service';

export function getTitleString(i18n: LanguageStrings): string {
  switch (routerService.getPath()) {
    case Routes.SIGN_IN:
      return i18n.SIGN_IN;
    case Routes.SIGN_UP:
      return i18n.SIGN_UP;
    case Routes.SIGN_OUT:
      return i18n.SIGN_OUT;
    case Routes.TASKS:
      return i18n.TASKS;
    default:
      return i18n.TASKS;
  }
}