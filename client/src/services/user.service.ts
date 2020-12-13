import { LanguageStrings } from '../models/language-strings';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';
import { connectionStatusService } from './connection-status.service';
import { httpService } from './http.service';
import { taskService } from './task.service';

export interface UserInfo {
  name: string;
  email: string;
}

type userInfoListener = (userInfo: UserInfo | undefined) => void;

class UserService {
  private listeners: userInfoListener[] = [];
  private _userInfo?: UserInfo;

  constructor() {
    this.getUserInfo();
    connectionStatusService.subscribe(status => {
      if (status === ConnectionStatus.BASESTATE) {
        this.getUserInfo();
      }
    });
  }

  public async getUserInfo(): Promise<void> {
    try {
      const user = await httpService.get('users/');
      const userInfo = <UserInfo>await user.json();
      this.userInfo = userInfo;
    } catch ({ statusCode }) {
      if (statusCode === 401) this.userInfo = undefined;
    }
  }

  public async signIn(signInData: SignInData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users/sign-in', signInData);
      const { name, email } = await res.json();
      this.userInfo = { name, email };
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_IN, statusCode: 503 });
    }
  }

  public async signUp(signUpData: SignUpData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users', signUpData);
      const { name, email } = await res.json();
      this.userInfo = { name, email };
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_UP, statusCode: 503 });
    }
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
    this.userInfo = undefined;
  }

  public get userInfo(): UserInfo | undefined {
    return this._userInfo;
  }

  public set userInfo(userInfo: UserInfo | undefined) {
    this._userInfo = userInfo;
    if (this._userInfo === undefined) {
      debugger;
      taskService.clear();
    }
    this.notifyListeners(this._userInfo);
  }

  public subscribe(listener: userInfoListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(userInfo: UserInfo | undefined): void {
    this.listeners.forEach(listener => listener(userInfo));
  }
}

export const userService = new UserService();
