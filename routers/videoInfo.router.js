const Router = require('koa-router')
const router = new Router();
const VideoInfoController = require('../controllers/VideoInfo');

router.get('/video-info', VideoInfoController.getVideoInfo);

module.exports = router;
