import Router from 'koa-router';
import path from 'path';
import serve from 'koa-better-static2';
import css from 'css/style.scss';
import template from '../templates/root.html';

// create router
const router = new Router();
// static assets
router.get('/public/*', serve('.'));

// root
router.get('/', async function (ctx, next) {
    ctx.body = template;
});

// test path
router.get('/test', async function (ctx, next) {
    ctx.body = 'get /test2';
});

export default router;
