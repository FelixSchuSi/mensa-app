import { Routes } from '../routes';
import { Group } from '../../../server/src/models/group';
import { httpService } from './http.service';
import { routerService } from './router.service';
import { storeService } from './store.service';

export type GroupsListener = (groups: Group[]) => void;
export class GroupService {
  protected _groups: Group[] = [];
  protected TASKKEY = 'groups';
  private listeners: GroupsListener[] = [];

  public subscribe(listener: GroupsListener): void {
    this.listeners.push(listener);
  }

  public async loadGroups(scopeMe: boolean): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('groups' + (scopeMe ? '?scope=me' : ''));
      const groups = <Group[]>await response.json();
      await this.setGroups(groups);
    } else {
      let groups = <Group[] | null>await storeService.get(this.TASKKEY);
      if (groups === null) groups = [];
      await this.setGroups(groups);
    }
  }
  public async joinByCode(code: string): Promise<void> {
    if (navigator.onLine) {
      const body = await (await httpService.get('groups?joincode=' + code)).json();
      if (body.results.length < 1) {
        throw new Error('Unkown group');
      }
      const groupID = body.results[0].id;
      await this.addMembership(groupID);
    } else {
      return Promise.reject({});
    }
  }
  public async createGroup(name: string): Promise<Group> {
    if (navigator.onLine) {
      const result = await httpService.post('groups', { group: { name: name } });
      return result.json();
      // routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }

  public async addMembership(groupID: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.post('groups/' + groupID + '/membership', {});
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }
  public async removeMembership(groupID: string, userID?: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.delete('groups/' + groupID + '/membership' + (userID ? '/' + userID : ''));
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }
  public async deleteGroup(groupID: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.delete('groups/' + groupID);
      routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }
  protected async setGroups(nGroups: Group[]): Promise<void> {
    this._groups = nGroups;
    await storeService.set(this.TASKKEY, this._groups);
    this.notifyListeners();
  }

  protected get groups(): Group[] {
    return this._groups;
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.groups));
  }
}
export const groupService = new GroupService();
