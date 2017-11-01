import Koa from 'koa';
import logger from 'koa-logger';
import root from './routes/root'
console.info('Env:', process.env.NODE_ENV);

import WebSocket from 'ws';


// create koa server
const app = new Koa(); 
const wss = new WebSocket.Server({ port: 8081 });

// use logger, routes
app.use(logger())
    .use(async function (ctx, next) {
        if (process.env.NODE_ENV === 'dev') {
            ctx.env = process.env.NODE_ENV;
        }
        await next();
    })
    .use(root.routes())
    .use(root.allowedMethods())
    .listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);
      });

    ws.send('something');
});

