import { Db } from 'mongodb';
import { connectToDevMongoDB, connectToProdMongoDB } from '../../server/src/db';
import { MongoGenericDAO } from '../../server/src/models/mongo-generic.dao';
import { DbFlatMeal } from './models/dbFlatMeal';

const useProdDB: boolean = String(process.argv[3]) === 'prodDB';

export async function connectToDb(collection = 'meals'): Promise<MongoGenericDAO<DbFlatMeal>> {
  const db: Db = useProdDB ? await connectToProdMongoDB() : await connectToDevMongoDB();
  return new MongoGenericDAO<DbFlatMeal>(db, collection);
}
