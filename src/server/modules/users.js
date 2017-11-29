/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

import {Observable} from 'rxjs';
import aid from 'aid.js';

import {fail} from 'shared/observable-socket';

import {ModuleBase} from './ModuleBase';

const truthy = aid.truthy;

const AuthContext = Symbol('AuthContext');

export class UsersModule extends ModuleBase {
  constructor(io) {
    super();

    this._io = io;

    this._users = {};
    this._userList = [];

    /*
     this._userList = [
     {name: 'foo', color: this.getColorForUserName('foo')},
     {name: 'bar', color: this.getColorForUserName('bar')},
     {name: 'baz', color: this.getColorForUserName('baz')}
     ];
     */
  }

  registerClient(client) {
    // client is an instance created from new ObservableSocket(socket)

    client.onAction('users:list', () => {
      return this._userList;
    });

    client.onAction('auth:login', ({name}) => {
      //
      return this.loginClient$(client, name);
    });

    /*
    client.onAction('auth:login', ({name}) => {
      return this.loginClient$(client, name);
    });

    client.onAction('auth:logout', () => {
      this.logoutClient(client);
    });
    */

    client.on('disconnect', () => {
      this.logoutClient(client);
    });
  }

  loginClient$(client, username) {
    username = username.trim();

    // TODO: validate

    if(this._users.hasOwnProperty(username)) {
      return fail(`Username ${username} is already taken.`);
    }

    const auth = client[AuthContext] || (client[AuthContext] = {isLoggedIn: false});
    console.log('auth :', auth);

    if(truthy(auth.isLoggedIn)) {
      return fail(`You are already logged in.`);
    }

    auth.name = username;
    auth.color = ''; //TODO
    auth.isLoggedIn = true;

    this._userList.push(auth);

    this._users[username] = client;

    this._io.emit('users:added', auth);

    return Observable.of(auth);
  }

  logoutClient(client) {
    // TODO
  }

  getUserForClient(client) {
    // TODO
  }
}

