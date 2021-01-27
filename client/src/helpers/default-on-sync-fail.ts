import { groupService } from '../services/group.service';
import { storeService } from '../services/store.service';
import { userService } from '../services/user.service';

export async function defautOnSyncFail(storeKey?: string): Promise<void> {
  if (storeKey) {
    await storeService.remove(storeKey);
  } else {
    const groupsKey = groupService.GROUPKEY;
    const userKey = userService.USERKEY;
    await storeService.remove(groupsKey);
    await storeService.remove(userKey);
  }

  location.reload();
}
