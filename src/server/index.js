import Koa from 'koa';
import logger from 'koa-logger';
import root from './routes/root'
console.info('Env:', process.env.NODE_ENV);

// create koa server
const app = new Koa(); 
// use logger, routes
app.use(logger())
    .use(root.routes())
    .use(root.allowedMethods())
    .listen(3000);
