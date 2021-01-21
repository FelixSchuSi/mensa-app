import { Entity } from './entity';

export interface MensaVisit extends Entity {
  title: string;
  mensa: 'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt';
  datetime: number;
  participants: string[];
}
