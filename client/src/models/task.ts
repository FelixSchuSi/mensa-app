import { TaskStatus } from './task-status';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
