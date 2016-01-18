'use strict';

const path = require('path');
const app = require('koa')();
const staticServer = require('koa-static-server');
const router = require('./routers');

app.use(staticServer({
  rootDir: path.join(__dirname, 'public')
}));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen('3000', () => {
  console.log('server is listening at http://localhost:3000/');
});
