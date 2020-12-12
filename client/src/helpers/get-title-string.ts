import { LanguageStrings } from '../models/language-strings';
import { Routes } from '../routes';
import { routerService } from '../services/router.service';

export function getTitleString(i18n: LanguageStrings): string {
  switch (routerService.getPath()) {
    case Routes.SIGN_IN:
      return i18n.SIGN_IN;
    case Routes.SIGN_UP:
      return i18n.SIGN_UP;
    case Routes.TASKS:
      return i18n.TASKS;
    case Routes.MEALS_FUTURE:
      return i18n.MEALS_FUTURE;
    case Routes.MEALS_TODAY:
      return i18n.MEALS_TODAY;
    case Routes.GROUPS:
      return i18n.GROUPS;
    default:
      return i18n.TASKS;
  }
}
