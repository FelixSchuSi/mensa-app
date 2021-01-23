import { Routes } from '../routes';
import { Group } from '../../../server/src/models/group';
import { User } from '../../../server/src/models/user';
import { Image } from '../../../server/src/models/image';
import { httpService } from './http.service';
import { routerService } from './router.service';
import { storeService } from './store.service';
import { MensaVisit } from '../../../server/src/models/mensa-visit';
import { createJoinCode, codeLength } from '../../../server/src/helpers/create-join-code';
import { createEntity } from '../helpers/create-entity';
import { userService } from './user.service';

export type GroupsListener = (groups: Group[]) => void;
export class GroupService {
  protected _groups: Group[] = [];
  protected GROUPKEY = 'groups';
  private listeners: GroupsListener[] = [];

  public async loadGroups(scopeMe: boolean): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('groups' + (scopeMe ? '?scope=me' : ''));
      const groups = <Group[]>await response.json();
      await this.setGroups(groups);
    } else {
      let groups = <Group[] | null>await storeService.get(this.GROUPKEY);
      if (groups === null) groups = [];
      await this.setGroups(groups);
    }
  }

  public async getGroupMembers(gid: string): Promise<User[]> {
    if (navigator.onLine) {
      const response = await httpService.get('groups/' + gid + '/members');
      return response.json();
    } else {
      // TODO make offline capable
      throw Error();
    }
  }

  public async getGroup(id: string): Promise<Group> {
    if (navigator.onLine) {
      const response = await httpService.get('groups/' + id);
      return response.json();
    } else {
      if (this.groups === null) throw Error();
      const group = this.groups.find(group => group.id === id);
      if (!group) throw Error();
      return group;
    }
  }

  public async createGroup(name: string, image?: Image): Promise<Group> {
    if (navigator.onLine) {
      const joinCode = createJoinCode(codeLength);
      const { id, createdAt } = createEntity();
      const group: Partial<Group> = { joinCode, id, createdAt, name, image: image! };
      const result = await httpService.post('groups', { group });
      return result.json();
      // routerService.navigate(Routes.GROUPS);
    } else {
      return Promise.reject({});
    }
  }

  public async createMensaVisit(groupID: string, mensaVisit: Partial<MensaVisit>): Promise<Group> {
    const { title, mensa, datetime } = mensaVisit;
    const { id, createdAt } = createEntity();
    const userID = userService.userInfo!.id;
    const fullMensaVisit: MensaVisit = {
      id,
      createdAt,
      title: title!,
      mensa: mensa!,
      datetime: datetime!,
      participants: [userID]
    };
    if (navigator.onLine) {
      const result = await httpService.post('mensa-visits/' + groupID, fullMensaVisit);
      const groupWithNewMensaVisit: Group = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== groupWithNewMensaVisit.id) return group;
        return groupWithNewMensaVisit;
      });
      await this.setGroups(updatedGroups);
      return groupWithNewMensaVisit;
    } else {
      // There may be groups without id that were created in frontend
      // -> Either dont allow visits on these groups or create complete obj in frontend
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  public async deleteMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    if (navigator.onLine) {
      const result = await httpService.delete('mensa-visits/' + groupID + '/' + mensaVisitID);
      const groupWithoutMensaVisit: Group = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== groupWithoutMensaVisit.id) return group;
        return groupWithoutMensaVisit;
      });
      await this.setGroups(updatedGroups);
      return groupWithoutMensaVisit;
    } else {
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  public async participateInMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    if (navigator.onLine) {
      const result = await httpService.patch('mensa-visits/' + groupID + '/participate/' + mensaVisitID, {});
      const groupWithNewMensaVisit: Group = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== groupWithNewMensaVisit.id) return group;
        return groupWithNewMensaVisit;
      });
      await this.setGroups(updatedGroups);
      return groupWithNewMensaVisit;
    } else {
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  public async leaveMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    if (navigator.onLine) {
      const result = await httpService.patch('mensa-visits/' + groupID + '/leave/' + mensaVisitID, {});
      const groupWithNewMensaVisit: Group = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== groupWithNewMensaVisit.id) return group;
        return groupWithNewMensaVisit;
      });
      await this.setGroups(updatedGroups);
      return groupWithNewMensaVisit;
    } else {
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  public async addMembership(groupID?: string, joinCode?: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.post('groups/membership', { groupID, joinCode });
      routerService.navigate(Routes.GROUPS);
    } else {
      // join group if group is in offline storage
      return Promise.reject({});
    }
  }

  public async removeMembership(groupID: string, userID?: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.delete('groups/' + groupID + '/membership' + (userID ? '/' + userID : ''));
      routerService.navigate(Routes.GROUPS);
    } else {
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  public async deleteGroup(groupID: string): Promise<void> {
    if (navigator.onLine) {
      await httpService.delete('groups/' + groupID);
      routerService.navigate(Routes.GROUPS);
    } else {
      // TODO make this service offline capable
      return Promise.reject({});
    }
  }

  protected async setGroups(nGroups: Group[]): Promise<void> {
    this._groups = nGroups;
    await storeService.set(this.GROUPKEY, this._groups);
    this.notifyListeners();
  }

  protected get groups(): Group[] {
    return this._groups;
  }

  public subscribe(listener: GroupsListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.groups));
  }
}
export const groupService = new GroupService();
