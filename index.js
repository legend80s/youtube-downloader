'use strict';

const path = require('path');
const app = require('koa')();
const staticServer = require('koa-static-server');
const router = require('./routers');
const notFound = require('./lib/404');

app.use(staticServer({
  rootDir: path.join(__dirname, 'public')
}));
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(notFound);

app.listen('3000', () => {
  console.log('server is listening at http://localhost:3000/');
});
