import { Entity } from './entity';

export interface Task extends Entity {
  title: string;
  status: 'open' | 'done';
  userId: string;
}
