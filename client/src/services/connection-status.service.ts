import { sleep } from '../helpers/sleep';
import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';
import { httpService } from './http.service';

type connectionStatusListener = (syncState: ConnectionStatus) => void;

class ConnectionStatusService {
  private listeners: connectionStatusListener[] = [];
  private statusLock: Promise<void> = Promise.resolve();

  private set status(status: ConnectionStatus) {
    this.notifyListeners(status);
  }

  constructor() {
    this.status = ConnectionStatus.BASESTATE;
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  protected onOffline = async (): Promise<void> => {
    await this.statusLock;
    console.log('📵 offline');
    let resolver: () => void = () => {};
    this.statusLock = new Promise(resolve => {
      resolver = resolve;
    });
    this.status = ConnectionStatus.OFFLINE;
    resolver();
  };

  public onOnline = async (): Promise<void> => {
    await this.statusLock;
    console.log('starting sync');
    let resolver: () => void = () => {};
    this.statusLock = new Promise(resolve => {
      resolver = resolve;
    });
    this.status = ConnectionStatus.SYNCING;

    await Promise.all([httpService.replayRequests(), sleep(1500)]); // show syncing for at least 1,5 secs
    this.status = ConnectionStatus.ONLINE;
    console.log('finished sync -> online');
    await sleep(1500); // show online for 1,5 secs
    this.status = ConnectionStatus.BASESTATE;
    resolver();
  };

  public subscribe(listener: connectionStatusListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(status: ConnectionStatus): void {
    this.listeners.forEach(listener => listener(status));
  }
}

export const connectionStatusService = new ConnectionStatusService();
