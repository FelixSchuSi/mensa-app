import { LanguageStrings } from '../models/language-strings';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { httpService } from './http.service';

export interface UserInfo {
  name: string;
  email: string;
}

type userInfoListener = (userInfo: UserInfo | undefined) => void;

class UserService {
  private listeners: userInfoListener[] = [];
  private _userInfo?: UserInfo;

  public async signIn(signInData: SignInData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users/sign-in', signInData);
      const { name, email } = await res.json();
      this._userInfo = { name, email };
      this.notifyListeners(this._userInfo);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_IN, statusCode: 503 });
    }
  }

  public async signUp(signUpData: SignUpData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users', signUpData);
      const { name, email } = await res.json();
      this._userInfo = { name, email };
      this.notifyListeners(this._userInfo);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_UP, statusCode: 503 });
    }
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
    this._userInfo = undefined;
    this.notifyListeners(this._userInfo);
  }

  public get userInfo(): UserInfo | undefined {
    return this._userInfo;
  }

  public subscribe(listener: userInfoListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(userInfo: UserInfo | undefined): void {
    this.listeners.forEach(listener => listener(userInfo));
  }
}

export const userService = new UserService();
