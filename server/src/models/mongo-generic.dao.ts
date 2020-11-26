import { Db, DeleteWriteOpResultObject } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { Entity } from './entity';
import { GenericDAO } from './generic.dao';

export class MongoGenericDAO<T extends Entity> implements GenericDAO<T> {
  constructor(private db: Db, private collection: string) {}

  public async create(partEntity: Partial<T>) {
    const entity = {
      ...partEntity,
      id: partEntity.id ?? uuidv4(),
      createdAt: partEntity.createdAt ?? new Date().getTime()
    };
    await this.db.collection(this.collection).insertOne(entity);
    return entity as T;
  }

  public async findAll(entityFilter?: Partial<T>) {
    return this.db.collection(this.collection).find(entityFilter).sort({ createdAt: -1 }).toArray();
  }

  public async findOne(entityFilter: Partial<T>) {
    return this.db.collection(this.collection).findOne(entityFilter);
  }

  public async update(entity: Partial<T> & Pick<Entity, 'id'>) {
    const result = await this.db.collection(this.collection).updateOne({ id: entity.id }, { $set: entity });
    return !!result.modifiedCount;
  }

  public async deleteOne(id: string) {
    const result = await this.db.collection(this.collection).deleteOne({ id });
    return !!result.deletedCount;
  }

  public async deleteAll(entityFilter: Partial<T>) {
    const result: DeleteWriteOpResultObject = await this.db.collection(this.collection).deleteMany(entityFilter);
    return !!result.deletedCount;
  }
}
