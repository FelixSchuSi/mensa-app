import { Routes } from '../routes';
import { Group } from '../../../server/src/models/group';
import { httpService } from './http.service';
import { routerService } from './router.service';
import { storeService } from './store.service';

class GroupService {
  protected _groups: Group[] = [];
  protected TASKKEY = 'groups';

  public async init(): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('groups' + location.search);
      const groups = <Group[]>(await response.json()).results;
      await this.setGroups(groups);
    } else {
      let groups = <Group[] | null>await storeService.get(this.TASKKEY);
      if (groups === null) groups = [];
      await this.setGroups(groups);
    }
  }

  public async createGroup(name: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.post('groups', { name: name });
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }

  public async addMembership(groupID: string, userID: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.patch('groups/' + groupID, { members: { operations: 'add', user: userID } });
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }
  public async removeMembership(groupID: string, userID: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.patch('groups/' + groupID, { members: { operations: 'remove', user: userID } });
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }

  protected async setGroups(nGroups: Group[]): Promise<void> {
    this._groups = nGroups;
    await storeService.set(this.TASKKEY, this.groups);
  }

  protected get groups(): Group[] {
    return this._groups;
  }
}
export const groupService = new GroupService();
