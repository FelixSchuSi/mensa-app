import { Entity } from '../../../server/src/models/entity';
import { TaskStatus } from './task-status';

// We cannot reuse task interface from backend since
// userId exists on backend task interface
export interface Task extends Entity {
  title: string;
  status: TaskStatus;
}
