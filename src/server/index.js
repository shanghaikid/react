import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import root from './routes/root';
import seed from './routes/seed';
import login from './routes/login';

import WebSocket from 'ws';
console.info('Env:', process.env.NODE_ENV);

// create koa server
const app = new Koa(); 
const wss = new WebSocket.Server({ port: 8081 });

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));

// use logger, routes
app.use(logger())
    .use(async function (ctx, next) {
        if (process.env.NODE_ENV === 'dev') {
            ctx.env = process.env.NODE_ENV;
        }
        await next();
    })
    .use(async function (ctx, next) {
        if (ctx.session.ok !== 1 && ctx.path !=='/login') {
            ctx.redirect('/login');
        }
        if (ctx.session.ok === 1 && ctx.path ==='/login') {
            ctx.redirect('/');
        }
        await next();
    })
    .use(login.routes())
    .use(root.routes())
    .use(seed.routes())
    .use(root.allowedMethods())
    .listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
      });
});

