'use strict';
const promisify = require('bluebird').promisify;
const exec = promisify(require('child_process').exec);
const fs = require('fs');
const readFile = promisify(fs.readFile);
const filePath = './temp/youtube.index.html';

exports.baidu = function *() {
  const command = `proxychains4 curl https://www.youtube.com/ -o ${filePath} ./temp/youtube.index.html --create-dirs`;
  // const command = 'proxychains4 curl https://www.google.com/images/nav_logo229.png';
  // const output = yield exec(command);
  // yield exec(command);

  // console.log('output', output);

  const IP = yield getServerIP();
  try {
    this.body = yield readFile(filePath, 'utf-8');
  } catch (err) {
    console.log(err);
    this.body = err;
  }
  


  // console.log('yield fileExists(filePath)',);
  // this.body = 'yield fileExists(filePath)';

  // this.body = replaceImgSrc(yield readFile(filePath), IP);
  // this.body = yield getServerIP();
}

function replaceImgSrc(html, IP) {
  return html.replace(/\<img src="\/\//g, '<img src="//IP:3000?origin=//');
}

function * getServerIP() {
  const IP = yield exec('ipconfig getifaddr en0');
  // console.log('IP =', IP);
  return IP.trim();
}

