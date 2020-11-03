import express, { Express, Request } from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
// import * as https from 'https';
import * as http from 'http';
import * as path from 'path';
import tasks from './routes/tasks';
import users from './routes/users';
import startDB from './db';

const port = process.env.PORT || 3443;
// const certDir = path.join(__dirname, 'certs');

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
      console.log('##################### Cookies #####################');
      console.log(req.cookies);
      console.log('##################### Error #####################');
      console.log(error);
      console.log('##################### Request #####################');
      console.log(req);
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
  startHttpsServer(app);
}

function startHttpsServer(app: Express) {
  // const options = {
  //   key: fs.readFileSync(path.join(certDir, 'server.key.pem')),
  //   cert: fs.readFileSync(path.join(certDir, 'server.cert.pem')),
  //   ca: fs.readFileSync(path.join(certDir, 'intermediate-ca.cert.pem'))
  // };
  // const httpsServer = https.createServer(options, app);
  const httpsServer = http.createServer(app);
  httpsServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();
