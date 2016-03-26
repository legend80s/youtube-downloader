const promisify = require('bluebird').promisify;
const exec = promisify(require('child_process').exec);
const readFile = promisify(require('fs').readFile);

module.exports = function *pageNotFound(next){
  yield next;

  if (404 != this.status) return;

  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  this.status = 404;
  const url = this.req.url.slice(1);
  const method = this.req.method;
  console.log('url', url);
  console.log('method', method);

  // if (method === 'GET' && this.accepts('html', 'json', 'js', 'css', '')) {
  if (method === 'GET' && isImage(url)) {
    const command = `proxychains4 curl -o public/${url} --create-dirs https://www.google.com/${url}`;
    // const command = 'proxychains4 curl https://www.google.com/images/nav_logo229.png';
    yield exec(command);
    this.body = yield readFile(url);
  }

  // if (this.req.method === 'GET' && this.req.url) {}

  // switch (this.accepts('html', 'json')) {
  //   case 'html':
  //     this.type = 'html';
  //     this.body = '<p>Page Not Found</p>';
  //     break;
  //   case 'json':
  //     this.body = {
  //       message: 'Page Not Found'
  //     };
  //     break;
  //   default:
  //     this.type = 'text';
  //     this.body = 'Page Not Found';
  // }
}

function isImage(path) {
  return isImage.db.some(extension => {
    if (path.endsWith(`.${extension}`)) {
      return true;
    }
  });
}

isImage.db = [
  'png', 'gif', 'webp', 'jpg',
];


