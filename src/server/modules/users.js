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
      {name: 'foo', color: ''},
      {name: 'bar', color: ''},
      {name: 'baz', color: ''}
    ];
    */
  }

  registerClient(client) {
    // console.log('registerClient :', client);

    // client is an instance created from new ObservableSocket(socket)

    // test code
    /*
    let index = 0;
    setInterval(() => {
      const username = `New user ${index}`;
      const user = {
        name: username,
        color: ''
      };

      client.emit('users:added', user);

      index++;
    }, 5000);
    */

    client.onActions({
      'users:list': () => {
        return this._userList;
      },

      'auth:login': ({name}) => {
        return this.loginClient$(client, name);
      },

      'auth:logout': () => {
        this.logoutClient(client);
      }
    });

    client.on('disconnect', () => {
      this.logoutClient(client);
    });
  }

  loginClient$(client, username) {
    username = username.trim();

    // TODO: validate

    if (this._users.hasOwnProperty(username)) {
      return fail(`Username ${username} is already taken.`);
    }

    const auth = client[AuthContext] || (client[AuthContext] = {isLoggedIn: false});
    console.log('auth :', auth);

    if (truthy(auth.isLoggedIn)) {
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
    const auth = this.getUserForClient(client);
    if(!auth) return;

    const authIndex = this._userList.indexOf(auth);
    if(authIndex >= 0) this._userList.splice(authIndex, 1);

    delete this._users[auth.name];
    delete client[AuthContext];

    console.log(`User ${auth.name} logged out`);

    this._io.emit('users:removed', auth);
  }

  getUserForClient(client) {
    const auth = client[AuthContext];

    if(!auth) return null;

    return (auth.isLoggedIn) ? auth : null;
  }
}

