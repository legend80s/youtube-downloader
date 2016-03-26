const Router = require('koa-router')
const router = new Router();
const PrisonBreakerController = require('../controllers/PrisonBreaker');

router.get('/baidu', PrisonBreakerController.baidu);

module.exports = router;
