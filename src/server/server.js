import 'source-map-support/register';

import chalk from 'chalk';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

import {ObservableSocket} from 'shared/observable-socket';

import {UsersModule} from './modules/users';

const isDevelopment = (process.env.NODE_ENV !== 'production');

/*
 * socket
 */
const app = express();
const server = new http.Server(app);
const io = socketIo(server);

/*
 * client webpack
 */
if (process.env.USE_WEBPACK === 'true') {
  const webpackMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpack = require('webpack'),
    clientConfig = require('../../webpack.client.config');

  const compiler = webpack(clientConfig(true));

  app.use(webpackMiddleware(compiler, {
    publicPath: '/build/',
    stats: {
      colors: true,
      chunks: false,
      assets: false,
      timings: false,
      modules: false,
      hash: false,
      version: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  console.log(chalk.bgRed('Using Webpack Dev MiddleWare. this is for dev only.'));
}

/*
 * configuration
 */
app.set('view engine', 'pug');

app.use(express.static('public'));

const useExternalStyles = !isDevelopment;

app.get('/', function (req, res) {
  res.render('index', {
    useExternalStyles
  });
});

/*
 * modules
 */
const users = new UsersModule(io);

const modules = [users];

/*
 * socket
 */
io.on('connection', (socket) => {
  console.log(`Got connection from ${socket.request.connection.remoteAddress}`);

  // control event 'connect, disconnect, reconnecting, reconnect_failed'
  const client = new ObservableSocket(socket);

  for(let module of modules) {
    module.registerClient(client);
  }

  /*
  // send msg to everyone except for a certain socket
  // socket.broadcast.emit('hi');

  socket.on('chat:message', function(msg) {
    console.log('from client emit chat:message :', msg);

    // send msg to everyone, include sender
    io.emit('chat:message', msg);
  });

   socket.on('disconnect', function() {
   console.log('user disconnected');

   io.emit('disconnected');
   });
  */
});

/*
 * start server
 */
const port = process.env.port || 3000;

function startServer() {
  server.listen(port, () => {
    console.log(`Started http server on ${port}`);
  });
}

startServer();

