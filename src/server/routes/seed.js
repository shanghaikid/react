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

    function close() {
        ctx.res.end();
        clearInterval(update);
    }

    ctx.req.on('close', close);
    ctx.req.on('finish', close);
    ctx.req.on('error', close);

    let update = setInterval(() => {
        let dataObj = {
            time: (new Date()).getTime(),
            value: Math.random()
        };
        stream.write(sse(dataObj));
    }, 1000);

    ctx.body = stream;
});

export default router;
