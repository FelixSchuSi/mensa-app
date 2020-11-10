import { SignInData } from '../models/sign-in-data';
import { SignUpData } from '../models/sign-up-data';
import { ROUTES } from '../routes';
import { httpService } from './http.service';
import { routerService } from './router.service';

class UserService {
  public async signIn(signInData: SignInData): Promise<void> {
    await httpService.post('users/sign-in', signInData);
    routerService.navigate(ROUTES.TASKS);
  }

  public async signUp(signUpData: SignUpData): Promise<void> {
    await httpService.post('users', signUpData);
    routerService.navigate(ROUTES.TASKS);
  }

  public async logOut(): Promise<void> {
    await httpService.delete('users/sign-out');
  }

  // TODO:
  // - Create/Join/Leave Group
  // - Add/Remove Friend?
}

export const userService = new UserService();
