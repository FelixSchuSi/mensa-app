import express, { Express, Request } from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as jwt from 'jsonwebtoken';
import * as http from 'http';
import tasks from './routes/tasks';
import users from './routes/users';
import groups from './routes/groups';
import meals from './routes/meals';
import proxy from 'express-http-proxy';
import startDB from './db';

const port = process.env.PORT || 3443;

function configureApp(app: Express) {
  app.get('/', (req, res) => {
    console.log('health check!');
    res.send('ok');
  });
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
  app.use(
    '/api/media',
    proxy('https://fhms.dub-services.de', {
      https: true,
      parseReqBody: false,
      userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        const url = process.env.URL || 'http://localhost:3443';
        const data = proxyResData.toString('utf8').replace(/https:\/\/[a-zA-Z0-9.-]*/g, `https://${url}/api/media`);
        // Dirty workaround:
        // At this point, I'm not able to get the content-type header in userResDecorator
        // if function above is executed on binary content (e.g. images) the content will be destroyed
        // so JSON.parse is used to determine if content is json or binary
        try {
          JSON.parse(data);
          return data;
        } catch (e) {
          return proxyResData;
        }
      },
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers!['Authorization'] = 'Bearer ' + srcReq.cookies['jwt-token'];
        return proxyReqOpts;
      }
    })
  );
  app.use('/api/meals', meals);
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
  app.use('/api/groups', groups);
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
    console.log(`Proxy rewriting image embed URLs ${process.env.URL}`);
    console.log(`Server running at http://localhost:${port}`);
  });
}

start();
