import { Entity } from './entity';

export interface GenericDAO<T extends Entity> {
  create(partEntity: Omit<T, keyof Entity>): Promise<T>;

  findAll(entityFilter?: Partial<T>): Promise<T[]>;

  findOne(entityFilter: Partial<T>): Promise<T | null>;

  update(entity: Partial<T>): Promise<boolean>;

  delete(id: string): Promise<boolean>;
}
