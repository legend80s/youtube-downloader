const Router = require('koa-router');
const router = new Router();
const videoInfoRouter = require('./videoInfo.router');

router.use('/api', videoInfoRouter.routes());

module.exports = router;
