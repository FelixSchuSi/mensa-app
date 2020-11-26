import { Entity } from './entity';

export interface GenericDAO<T extends Entity> {
  create(partEntity: Partial<T>): Promise<T>;

  findAll(entityFilter?: Partial<T>): Promise<T[]>;

  findOne(entityFilter: Partial<T>): Promise<T | null>;

  update(entity: Partial<T>): Promise<boolean>;

  deleteAll(entity: Partial<T>): Promise<boolean>;

  deleteOne(id: string): Promise<boolean>;
}
