import { createEntity } from '../helpers/create-entity';
import { Task } from '../models/task';
import { httpService } from './http.service';
import { storeService } from './store.service';

export type TasksListener = (tasks: Task[]) => void;

export class TaskService {
  protected TASKKEY: string = 'tasks';
  protected _tasks: Task[] = [];
  private listeners: TasksListener[] = [];

  public async init(): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('tasks' + location.search);
      let tasks = <Task[]>(await response.json()).results;
      await this.setTasks(tasks);
    } else {
      let tasks = <Task[] | null>await storeService.get(this.TASKKEY);
      if (tasks === null) tasks = [];
      await this.setTasks(tasks);
    }
  }

  protected get tasks(): Task[] {
    return this._tasks;
  }

  protected async setTasks(newTasks: Task[]) {
    this._tasks = newTasks;
    await storeService.set(this.TASKKEY, this.tasks);
    this.notifyListeners();
  }

  private async onSyncFail(): Promise<void> {
    await storeService.remove(this.TASKKEY);
  }
  public subscribe(listener: TasksListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.tasks));
  }

  public async toggleTask(taskToToggle: Task): Promise<void> {
    const updatedTask: Task = {
      ...taskToToggle,
      status: taskToToggle.status === 'open' ? 'done' : 'open'
    };
    const newTasks: Task[] = this.tasks.map((task: Task) =>
      task === taskToToggle ? { ...task, status: (task.status || 'open') === 'open' ? 'done' : 'open' } : task
    );
    await this.setTasks(newTasks);
    try {
      await httpService.patch('tasks/' + updatedTask.id, updatedTask, this.onSyncFail);
    } catch ({ message }) {
      throw { message };
    }
  }

  public async removeTask(taskToRemove: Task): Promise<void> {
    await this.setTasks(this.tasks.filter(task => task.id !== taskToRemove.id));
    try {
      await httpService.delete('tasks/' + taskToRemove.id, this.onSyncFail);
    } catch ({ message }) {
      throw { message };
    }
  }

  public async createTask(title: string): Promise<void> {
    let task: Task = { ...createEntity(), title, status: 'open' };

    try {
      const response = await httpService.post('tasks', task, this.onSyncFail);
      task = await response.json();
      await this.setTasks([...this.tasks, task]);
    } catch ({ message }) {
      await this.setTasks([...this.tasks, task]);
      throw { message };
    }
  }
}

export const taskService = new TaskService();
