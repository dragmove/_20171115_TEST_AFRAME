import './styles/application.scss';

import 'shared/operators';

// import io from 'socket.io-client';
// import $ from 'jquery';
// import aframe from 'aframe';

// const socket = io({authoConnect: false});

import * as services from './services'; // has socket, server, usersStore

require('./components/users/users');
require('./components/chat/chat');
require('./components/aframe/aframe');

services.socket.connect();

/*
 * test
 */
/*
services.usersStore.state$.subscribe(state => {
  console.log('state :', state);
});
*/

/*
 init();

 function init() {
 socket.emit('chat:message', `oh ${Math.random()}`);

 socket.on('chat:message', (msg) => {
 console.log('from server emit chat:message :', msg);
 });

 socket.on('disconnected', () => {
 console.log('disconnect client');
 });
 }
 */