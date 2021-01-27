import { LanguageStrings } from '../models/language-strings';
import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';
import { connectionStatusService } from './connection-status.service';
import { httpService } from './http.service';
import { User } from '../../../server/src/models/user';
import { storeService } from './store.service';

type userInfoListener = (userInfo: User | undefined) => void;

class UserService {
  private listeners: userInfoListener[] = [];
  private _userInfo?: User;
  public USERKEY = 'USER';

  constructor() {
    this.getUserInfo();
    connectionStatusService.subscribe(status => {
      if (status === ConnectionStatus.BASESTATE) {
        this.getUserInfo();
      }
    });
  }

  public async getUserInfo(): Promise<void> {
    if (navigator.onLine) {
      try {
        const user = await httpService.get('users/');
        const userInfo = <User>await user.json();
        await this.setUserInfo(userInfo);
      } catch ({ statusCode }) {
        if (statusCode === 401) await this.setUserInfo(undefined);
      }
    } else {
      const userInfoFromStore = <User>await storeService.get(this.USERKEY);
      await this.setUserInfo(userInfoFromStore);
    }
  }

  public async signIn(signInData: SignInData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users/sign-in', signInData);
      const userData: User = await res.json();
      await this.setUserInfo(userData);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_IN, statusCode: 503 });
    }
  }

  public async signUp(signUpData: SignUpData, i18n: LanguageStrings): Promise<void> {
    if (navigator.onLine) {
      const res: Response = await httpService.post('users', signUpData);
      const userData: User = await res.json();
      await this.setUserInfo(userData);
    } else {
      return Promise.reject({ message: i18n.INTERNET_NEEDED_FOR_SIGN_UP, statusCode: 503 });
    }
  }

  public async editUser(newUserData: Partial<User>): Promise<void> {
    if (!this.userInfo?.email) return;
    let newUserInfo: User = { ...this.userInfo, ...newUserData };
    try {
      const res: Response = await httpService.patch('users', newUserInfo);
      newUserInfo = await res.json();
    } catch ({ message }) {
      throw { message };
    }
    await this.setUserInfo(newUserInfo);
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
    await this.setUserInfo(undefined);
  }

  public get userInfo(): User | undefined {
    return this._userInfo;
  }

  public async setUserInfo(userInfo: User | undefined): Promise<void> {
    this._userInfo = userInfo;
    await storeService.set(this.USERKEY, this._userInfo);
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
