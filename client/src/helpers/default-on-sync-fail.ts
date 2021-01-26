import { groupService } from '../services/group.service';
import { storeService } from '../services/store.service';

export async function defautOnSyncFail(storeKey?: string): Promise<void> {
  if (storeKey) {
    await storeService.remove(storeKey);
  } else {
    const groups = groupService.GROUPKEY;
    // TODO add user key and manually trigger signout?
    await storeService.remove(groups);
  }

  location.reload();
}
