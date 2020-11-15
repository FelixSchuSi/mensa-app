import { Storage } from '@ionic/storage';

class StoreService {
  private store: any;
  constructor() {
    this.store = new Storage({}, {});
  }

  public async get(key: string): Promise<any> {
    return await this.store.get(key);
  }

  public async set(key: string, value: any): Promise<any> {
    return await this.store.set(key, value);
  }

  public async remove(key: string): Promise<any> {
    return await this.store.remove(key);
  }

  public async clear(): Promise<void> {
    return await this.store.clear();
  }
}

export const storeService = new StoreService();
