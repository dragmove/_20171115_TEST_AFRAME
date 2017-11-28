// import io from 'socket.io-client';
// import $ from 'jquery';
// import aframe from 'aframe';

// const socket = io({authoConnect: false});

import * as services from './services'; // has socket, server, usersStore

require('./components/users/users');

services.socket.connect();

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