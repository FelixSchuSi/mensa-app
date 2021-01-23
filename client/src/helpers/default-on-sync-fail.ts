import { storeService } from '../services/store.service';

export async function defautOnSyncFail(storeKey?: string): Promise<void> {
  if (storeKey) {
    await storeService.remove(storeKey);
  } else {
    await storeService.clear();
  }

  location.reload();
}
