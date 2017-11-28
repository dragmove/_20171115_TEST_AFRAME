import {ModuleBase} from './ModuleBase';

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

  logoutClient(client) {
    // TODO
  }

  getUserForClient(client) {

  }
}

