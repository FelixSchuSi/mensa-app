import { LanguageStrings } from '../models/language-strings';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';
import { connectionStatusService } from './connection-status.service';
import { httpService } from './http.service';
import { taskService } from './task.service';
import { User } from '../../../server/src/models/user';
import { TouchSequence } from 'selenium-webdriver';

type userInfoListener = (userInfo: User | undefined) => void;

class UserService {
  private listeners: userInfoListener[] = [];
  private _userInfo?: User;

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
      const userInfo = <User>await user.json();
      this.userInfo = userInfo;
    } catch ({ statusCode }) {
      if (statusCode === 401) this.userInfo = undefined;
    }
  }

  public async signIn(signInData: SignInData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users/sign-in', signInData);
      this.userInfo = await res.json();
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_IN, statusCode: 503 });
    }
  }

  public async signUp(signUpData: SignUpData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users', signUpData);
      this.userInfo = await res.json();
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_UP, statusCode: 503 });
    }
  }

  public async editUser(newUserData: Partial<User>): Promise<void> {
    if (!this.userInfo?.email) return;
    if (navigator.onLine) {
      newUserData.email = newUserData.email ?? this.userInfo.email;
      console.log(newUserData);
      const res: Response = await httpService.patch('users', newUserData);
      this.userInfo = await res.json();
    }
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
    this.userInfo = undefined;
  }

  public get userInfo(): User | undefined {
    return this._userInfo;
  }

  public set userInfo(userInfo: User | undefined) {
    this._userInfo = userInfo;
    if (this._userInfo === undefined) {
      taskService.clear();
    }
    this.notifyListeners(this._userInfo);
  }

  public subscribe(listener: userInfoListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(userInfo: User | undefined): void {
    this.listeners.forEach(listener => listener(userInfo));
  }
}

export const userService = new UserService();
