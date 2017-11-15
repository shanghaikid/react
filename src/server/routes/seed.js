import Router from 'koa-router';
import page from '../templates/templates';

import {PassThrough} from 'stream';

// create router
const router = new Router();
const sse = (dataObj) => {
  return `data: ${ JSON.stringify(dataObj) }\n\n`
}
// root
router.get('/seed', async function (ctx, next) {
    const stream = new PassThrough();

    ctx.type = 'text/event-stream; charset=utf-8';
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Connection', 'keep-alive');

    setInterval(() => {
        let dataObj = {
            time: (new Date()).getTime(),
            value: Math.random()
        };
        stream.write(sse(dataObj));
    }, 1000);

    ctx.body = stream;

    console.log(ctx.response.type)
});

export default router;
