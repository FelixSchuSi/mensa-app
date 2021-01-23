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
import { i18nService } from './i18n.service';

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
      const users: User[] = await response.json();
      let groupMembers: { id: string; users: User[] }[] = <any>await storeService.get('group_members');
      groupMembers = groupMembers ?? [];
      groupMembers = groupMembers.map(g => {
        if (g.id === gid) return { id: gid, users };
        return g;
      });
      if (groupMembers.filter(g => g.id === gid).length === 0) groupMembers.push({ id: gid, users });
      await storeService.set('group_members', groupMembers);
      return users;
    } else {
      const groupMembers: { id: string; users: User[] }[] = <any>await storeService.get('group_members');
      const members = groupMembers.find(g => g.id === gid);
      if (!members) return [];
      return members.users;
    }
  }

  public async getGroup(id: string): Promise<Group> {
    if (navigator.onLine) {
      const response = await httpService.get('groups/' + id);
      const fetchedGroup: Group = await response.json();
      const newGroups = this.groups.map(group => {
        if (group.id === fetchedGroup.id) {
          return fetchedGroup;
        } else {
          return group;
        }
      });
      if (!newGroups.includes(fetchedGroup)) newGroups.push(fetchedGroup);
      await this.setGroups(newGroups);
      return fetchedGroup;
    } else {
      if (this.groups === null) throw Error();
      const group = this.groups.find(group => group.id === id);
      if (!group) throw Error();
      return group;
    }
  }

  public async createGroup(name: string, image?: Image): Promise<void> {
    const joinCode = createJoinCode(codeLength);
    const { id, createdAt } = createEntity();
    const owner: string = userService.userInfo?.id!;
    const mensaVisits: MensaVisit[] = [];
    const members: string[] = [owner];
    let group: Group = { joinCode, id, createdAt, name, mensaVisits, image: image!, owner, members };
    try {
      const result = await httpService.post('groups', { group });
      group = await result.json();
      this.setGroups([...this.groups, group]);
    } catch ({ message }) {
      this.setGroups([...this.groups, group]);
      throw { message };
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
    try {
      const result = await httpService.post('mensa-visits/' + groupID, fullMensaVisit);
      const groupWithNewMensaVisit: Group = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== groupWithNewMensaVisit.id) return group;
        return groupWithNewMensaVisit;
      });
      await this.setGroups(updatedGroups);
      return groupWithNewMensaVisit;
    } catch ({ message }) {
      if (message === '_offline') {
        const groupWithoutNewVisit: Group = this.groups.find(g => g.id === groupID)!;
        const newGroup = {
          ...groupWithoutNewVisit,
          mensaVisits: [...groupWithoutNewVisit.mensaVisits, fullMensaVisit]
        };
        const updatedGroups: Group[] = this.groups.map(group => {
          if (group.id !== groupID) return group;
          return newGroup;
        });
        await this.setGroups(updatedGroups);
        return newGroup;
      }
      throw { message };
    }
  }

  public async deleteMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    const oldGroup = this.groups.find(g => g.id === groupID)!;
    const newMensaVisits = oldGroup.mensaVisits.filter(mv => mv.id !== mensaVisitID);
    let newGroup: Group = { ...oldGroup, mensaVisits: newMensaVisits };

    try {
      const result = await httpService.delete('mensa-visits/' + groupID + '/' + mensaVisitID);
      newGroup = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== newGroup.id) return group;
        return newGroup;
      });
      await this.setGroups(updatedGroups);
      return newGroup;
    } catch ({ message }) {
      if (message === '_offline') {
        const updatedGroups: Group[] = this.groups.map(group => {
          if (group.id !== newGroup.id) return group;
          return newGroup;
        });
        await this.setGroups(updatedGroups);
        return newGroup;
      } else {
        throw { message };
      }
    }
  }

  public async participateInMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    const oldGroup = this.groups.find(g => g.id === groupID)!;
    const userID = userService.userInfo!.id;

    const newMensaVisits = oldGroup.mensaVisits.map(mv => {
      if (mv.id !== mensaVisitID) return mv;
      const newParticipants = [...mv.participants, userID];
      return { ...mv, participants: newParticipants };
    });

    let newGroup: Group = { ...oldGroup, mensaVisits: newMensaVisits };

    try {
      const result = await httpService.patch('mensa-visits/' + groupID + '/participate/' + mensaVisitID, {});
      newGroup = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== newGroup.id) return group;
        return newGroup;
      });
      await this.setGroups(updatedGroups);
      return newGroup;
    } catch ({ message }) {
      if (message === '_offline') {
        const updatedGroups: Group[] = this.groups.map(group => {
          if (group.id !== newGroup.id) return group;
          return newGroup;
        });
        await this.setGroups(updatedGroups);
        return newGroup;
      } else {
        throw { message };
      }
    }
  }

  public async leaveMensaVisit(groupID: string, mensaVisitID: string): Promise<Group> {
    const oldGroup = this.groups.find(g => g.id === groupID)!;
    const userID = userService.userInfo!.id;

    const newMensaVisits = oldGroup.mensaVisits.map(mv => {
      if (mv.id !== mensaVisitID) return mv;
      const newParticipants = mv.participants.filter(p => p !== userID);
      return { ...mv, participants: newParticipants };
    });

    let newGroup: Group = { ...oldGroup, mensaVisits: newMensaVisits };

    try {
      const result = await httpService.patch('mensa-visits/' + groupID + '/leave/' + mensaVisitID, {});
      newGroup = await result.json();
      const updatedGroups: Group[] = this.groups.map(group => {
        if (group.id !== newGroup.id) return group;
        return newGroup;
      });
      await this.setGroups(updatedGroups);
      return newGroup;
    } catch ({ message }) {
      if (message === '_offline') {
        const updatedGroups: Group[] = this.groups.map(group => {
          if (group.id !== newGroup.id) return group;
          return newGroup;
        });
        await this.setGroups(updatedGroups);
        return newGroup;
      } else {
        throw { message };
      }
    }
  }

  public async addMembership(groupID?: string, joinCode?: string): Promise<void> {
    const i18n = i18nService.getStrings();
    try {
      await httpService.post('groups/membership', { groupID, joinCode });
      routerService.navigate(Routes.GROUPS);
    } catch ({ message }) {
      if (message === '_offline') {
        throw { message: i18n.INTERNET_NEEDED_TO_JOIN_GROUPS };
      }
      throw { message };
    }
  }

  public async removeMembership(groupID: string, userID?: string): Promise<void> {
    const newGroups: Group[] = this.groups.filter(group => group.id !== groupID);
    try {
      await httpService.delete('groups/' + groupID + '/membership' + (userID ? '/' + userID : ''));
      await this.setGroups(newGroups);
      routerService.navigate(Routes.GROUPS);
    } catch ({ message }) {
      await this.setGroups(newGroups);
      throw { message };
    }
  }

  // Currently no being used
  // public async deleteGroup(groupID: string): Promise<void> {
  //   if (navigator.onLine) {
  //     await httpService.delete('groups/' + groupID);
  //     routerService.navigate(Routes.GROUPS);
  //   } else {
  //     // TODO make this service offline capable
  //     return Promise.reject({});
  //   }
  // }

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
