import {Observable} from 'rxjs';

export class ChatStore {
  constructor(server$, usersStore) {
    this._server = server$;
    this._user = usersStore;

    this.message$ = Observable.merge(
      this._server.on$('chat:list').flatMap(list => Observable.from(list)),
      this._server.on$('chat:added')
    ).publishReplay(100);

    this.message$.connect();

    this._server.on$('connect')
      .first() // TODO - why user first() ?
      .subscribe(() => {
        this._server.emit('chat:list');
      });
  }

  sendMessage$(message, type = 'normal') {
    // TODO: validate

    return this._server.emitAction$('chat:add', {message, type});
  }
}