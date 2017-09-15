import Router from 'koa-router';
import path from 'path';
import serve from 'koa-better-static2';
import css from 'css/style.scss';
import page from '../templates/templates';

// create router
const router = new Router();
// static assets
router.get('/*', serve('.'));

// root
router.get('/', async function (ctx, next) {
    ctx.startTime = process.hrtime();
    ctx.title = 'root title';
    ctx.body = page(ctx);
});

// test path
router.get('/test', async function (ctx, next) {
    ctx.body = 'get /test2';
});

export default router;
