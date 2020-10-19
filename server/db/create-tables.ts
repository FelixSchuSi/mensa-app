import { Client } from 'pg';

const client = new Client({
  user: 'taskman',
  host: 'localhost',
  database: 'taskman',
  password: 'wifhm',
  port: 5432
});

async function createScheme() {
  await client.connect();
  await client.query('DROP TABLE IF EXISTS users, tasks');
  await client.query(`CREATE TABLE users(
    id VARCHAR(40) PRIMARY KEY,
    "createdAt" bigint NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255))`);
  await client.query(`CREATE TABLE tasks(
    id VARCHAR(40) PRIMARY KEY,
    "createdAt" bigint NOT NULL,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(10) NOT NULL,
    "userId" VARCHAR(40))`);
}

createScheme().then(() => {
  client.end();
  console.log('finished');
});
