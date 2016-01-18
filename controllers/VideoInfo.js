'use strict';

const promisify = require('bluebird').promisify;
const exec = promisify(require('child_process').exec);
const parseVideoInfo = require('../lib/parseVideoInfo');

// 1yO5xIVy2dM
// N9y61eSRPM8
exports.getVideoInfo = function *() {
  const videoId = this.query.id;
  const command = `proxychains4 curl https://www.youtube.com/get_video_info\?video_id\=${videoId}`;
  const videoInfo = yield exec(command);

  this.body = parseVideoInfo(videoInfo);
}
