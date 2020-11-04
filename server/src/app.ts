import express, { Express, Request } from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as jwt from 'jsonwebtoken';
import * as http from 'http';
import tasks from './routes/tasks';
import users from './routes/users';
import startDB from './db';

const port = process.env.PORT || 3443;

function configureApp(app: Express) {
  app.get('/', (req, res) => {
    console.log('health check!');
    res.send('ok')
  })
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use((req, res, next) => {
    if (isOriginAllowed(req.get('Origin'))) {
      res.set('Access-Control-Allow-Origin', req.get('Origin'));
      res.set('Access-Control-Allow-Credentials', 'true');
    }
    if (isPreflight(req)) {
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
      res.status(204).end();
    } else {
      next();
    }
  });
  app.use('/api/users', users);
  app.use((req, res, next) => {
    const token = req.cookies['jwt-token'] || '';
    try {
      res.locals.user = jwt.verify(token, 'mysecret');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Bitte melden Sie sich an!' });
    }
  });
  app.use('/api/tasks', tasks);
  app.use('/api/tasks', tasks);
}

function isPreflight(req: Request) {
  return req.method === 'OPTIONS' && req.get('Origin') && req.get('Access-Control-Request-Method');
}

function isOriginAllowed(origin?: string) {
  return !!origin;
}

async function start() {
  const app = express();

  configureApp(app);
  await startDB(app, process.argv[2]);
  startHttpServer(app);
}

function startHttpServer(app: Express) {
  const httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();
