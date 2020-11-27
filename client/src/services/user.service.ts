import { LanguageStrings } from '../models/language-strings';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { Routes } from '../routes';
import { httpService } from './http.service';
import { routerService } from './router.service';

class UserService {
  public async signIn(signInData: SignInData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      await httpService.post('users/sign-in', signInData);
      routerService.navigate(Routes.TASKS);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_IN, statusCode: 503 });
    }
  }

  public async signUp(signUpData: SignUpData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      await httpService.post('users', signUpData);
      routerService.navigate(Routes.TASKS);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_UP, statusCode: 503 });
    }
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
  }

  // TODO:
  // - Create/Join/Leave Group
  // - Add/Remove Friend?
}

export const userService = new UserService();
