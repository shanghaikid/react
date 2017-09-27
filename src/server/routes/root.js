import Router from 'koa-router';
import serve from 'koa-better-static2';
import page from '../templates/templates';

// create router
const router = new Router();
// static assets
router.get('/*', serve('.'));

// root
router.get('/', async function (ctx, next) {
    ctx.startTime = process.hrtime();
    ctx.title = `Feeling E`;
    ctx.body = page(ctx);
});

// test path
router.get('/test', async function (ctx, next) {
    ctx.body = 'get /test2';
});

export default router;
