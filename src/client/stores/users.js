import {Observable} from 'rxjs';
import _ from 'lodash';
import aid from 'aid.js';

const isDefined = aid.isDefined,
  truthy = aid.truthy,
  falsy = aid.falsy;

export class UsersStore {
  get isLoggedIn() {
    return isDefined(this._currentUser) && truthy(this._currentUser.isLoggedIn);
  }

  constructor(server) {
    // server is instance created from new ObservableSocket(socket)

    this._server = server;
    this._currentUser = null;

    const defaultStore = {users: []};

    const events$ = Observable.merge(
      this._server.on$('users:list').map(opList),
      this._server.on$('users:added').map(opAdd),
      this._server.on$('users:removed').map(opRemove)
    );

    this.state$ = events$
      .scan(function (last, op) {
        return op(last);

      }, {state: defaultStore})
      .publishReplay(1);

    this.state$.connect();

    // Auth
    this.currentUser$ = Observable.merge(
      this._server.on$('auth:login'),
      this._server.on$('auth:logout').mapTo({}))
      .startWith({})
      .publishReplay(1)
      .refCount();

    this.currentUser$.subscribe((user) => {
      console.log('currentUser$.subscribe user :', user);

      this._currentUser = user;
    });

    // bootstrap
    this._server.on('connect', () => {

      // emit action to server side.
      this._server.emit('users:list');

      if(falsy(this.isLoggedIn)) {
        console.log('current user is not logged in.');

        return;
      }

      // get ReplaySubject
      this.login$(this._currentUser.name).subscribe(
        (user) => {
          console.log(`Logged in again as ${user.name}`);
        },

        (error) => {
          window.alert(`Could not log back in ${error.message || 'unknown error'}`);
        }
      );
    });
  }

  login$(name) {
    // TODO: validate

    return this._server.emitAction$('auth:login', {name});
  }

  logout$(name) {
    return this._server.emitAction$('auth:logout');
  }
}

function opList(users) {
  return (state) => {
    state.users = users;
    state.users.sort((l, r) => l.name.localeCompare(r.name));

    return {
      type: 'list',
      state: state
    };
  };
}

function opAdd(user) {
  return (state) => {
    let insertIndex = _.findIndex(state.users, (u) => {
      return u.name.localeCompare(user.name) > 0;
    });

    if (insertIndex < 0) insertIndex = state.users.length;

    state.users.splice(insertIndex, 0, user);

    return {
      type: 'add',
      user: user,
      state: state
    };
  };
}

function opRemove(user) {
  return (state) => {
    const index = _.findIndex(state.users, {name: user.name});

    if (index >= 0) state.users.splice(index, 1);

    return {
      type: 'remove',
      user: user,
      state: state
    };
  };
}