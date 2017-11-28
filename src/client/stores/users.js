import {Observable} from 'rxjs';
import _ from 'lodash';

export class UsersStore {
  constructor(server) {
    // server is instance created from new ObservableSocket(socket)

    this._server = server;

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

    // bootstrap
    this._server.on('connect', () => {

    });
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