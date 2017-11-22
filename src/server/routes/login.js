import Router from 'koa-router';
import page from '../templates/templates';

// create router
const router = new Router();
// root
router.get('/login', async function (ctx, next) {

    ctx.body = 'login';
    ctx.session.ok = 1;
});

export default router;
