import localForage from 'localforage';

export class StoreService {
  private store: LocalForage;
  constructor() {
    this.store = localForage.createInstance({});
  }

  public async get(key: string): Promise<unknown> {
    return await this.store.getItem(key);
  }

  public async set(key: string, value: any): Promise<any> {
    return await this.store.setItem(key, value);
  }

  public async remove(key: string): Promise<any> {
    return await this.store.removeItem(key);
  }

  public async clear(): Promise<void> {
    return await this.store.clear();
  }
}

export const storeService = new StoreService();
