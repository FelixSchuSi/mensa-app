import { ConnectionStatus } from '../widgets/connection-status-bar/connection-status-enum';

type connectionStatusListener = (syncState: ConnectionStatus) => void;
class ConnectionStatusService {}
