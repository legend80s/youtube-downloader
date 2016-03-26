const Router = require('koa-router');
const router = new Router();
const videoInfoRouter = require('./videoInfo.router');
const prisonBreakerRouter = require('./prisonBreaker.router');

router.use('/api', videoInfoRouter.routes());
router.use('', prisonBreakerRouter.routes());

module.exports = router;
