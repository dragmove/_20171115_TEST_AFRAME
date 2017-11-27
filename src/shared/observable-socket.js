import {Observable} from 'rxjs';

export class ObservableSocket {
  constructor(socket) {
    this._socket = socket;

    this._state = {
      // isConnected: true/false
      // isReconnecting: true/false
      // attempt: Number
    };

    this.status$ = Observable.merge(
      this.on$('connect').map(() => {
        return {
          isConnected: true
        };
      }),

      this.on$('disconnect').map((reason) => {
        return {
          isConnected: false
        };
      }),

      this.on$('reconnecting').map((attempt) => {
        return {
          isConnected: false,
          isReconnecting: true,
          attempt
        };
      }),

      this.on$('reconnect_failed').map(() => {
        return {
          isConnected: false,
          isReconnecting: false
        }
      }))
      .publishReplay(1)
      .refCount();

    this.status$.subscribe((state) => {
      console.log('stats$ state :', state);

      return this._state = state;
    });
  }

  on$(event) {
    return Observable.fromEvent(this._socket, event);
  }

  on(event, callback) {
    this._socket.on(event, callback);
  }

  off(event, callback) {
    this._socket.off(event, callback);
  }

  emit(event, arg) {
    this._socket.emit(event, arg);
  }
}