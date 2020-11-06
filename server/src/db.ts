import { MongoClient } from 'mongodb';
import { Client } from 'pg';
import { Express } from 'express';
import { MongoGenericDAO } from './models/mongo-generic.dao';
import { PsqlGenericDAO } from './models/psql-generic.dao';
import { InMemoryGenericDAO } from './models/in-memory-generic.dao';
import { Task } from './models/task';
import { User } from './models/user';

const isProd: boolean = !!process.env.ISPROD;

export default async function startDB(app: Express, dbms = 'in-memory-db') {
  switch (dbms) {
    case 'mongodb':
      startMongoDB(app);
      break;
    case 'psql':
      startPsql(app);
      break;
    case 'in-memory-db':
      startInMemoryDB(app);
  }
}

function startInMemoryDB(app: Express) {
  app.locals.taskDAO = new InMemoryGenericDAO<Task>();
  app.locals.userDAO = new InMemoryGenericDAO<User>();
}

async function startMongoDB(app: Express) {
  const db = isProd ? (await connectToProdMongoDB())!.db('mensa-app-db') : (await connectToDevMongoDB())!.db('taskman');

  app.locals.taskDAO = new MongoGenericDAO<Task>(db, 'tasks');
  app.locals.userDAO = new MongoGenericDAO<User>(db, 'users');
}

async function connectToProdMongoDB() {
  const url = String(process.env.DBURL);

  try {
    return await MongoClient.connect(url, { useNewUrlParser: true });
  } catch (err) {
    console.log('Could not connect to MongoDB: ', err.stack);
    process.exit(1);
  }
}

async function connectToDevMongoDB() {
  const url = 'mongodb://localhost:27017';
  const options = {
    useNewUrlParser: true,
    auth: { user: 'taskman', password: 'wifhm' },
    authSource: 'taskman'
  };

  try {
    return await MongoClient.connect(url, options);
  } catch (err) {
    console.log('Could not connect to MongoDB: ', err.stack);
    process.exit(1);
  }
}

async function startPsql(app: Express) {
  const client = await connectToPsql();
  app.locals.taskDAO = new PsqlGenericDAO<Task>(client!, 'tasks');
  app.locals.userDAO = new PsqlGenericDAO<User>(client!, 'users');
}

async function connectToPsql() {
  const client = new Client({
    user: 'taskman',
    host: 'localhost',
    database: 'taskman',
    password: 'wifhm',
    port: 5432
  });

  try {
    await client.connect();
    return client;
  } catch (err) {
    console.log('Could not connect to PostgreSQL: ', err.stack);
    process.exit(1);
  }
}
