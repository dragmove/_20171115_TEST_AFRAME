/*eslint no-unused-vars: "off"*/

import {Observable} from 'rxjs';
import aid from 'aid.js';

const not = aid.not,
  isDefined = aid.isDefined;

export class ObservableSocket {
  constructor(socket) {
    // use client side, server side
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
        };
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

  // on (server side)
  onAction(action, callback) {
    this._socket.on(action, (arg, requestId) => {
      console.log('onAction action, arg, requestId :', action, arg, requestId);

      try {
        const value = callback(arg);
        console.log('onAction value :', value);

        if (!value) {
          console.log('onAction !value. emit action to client side.');

          this._socket.emit(action, null, requestId);

          return;
        }

        if (typeof(value.subscribe) !== 'function') {
          console.log('onAction value.subscribe is not function. emit action to client side.');

          this._socket.emit(action, value, requestId);

          return;
        }

        let hasValue = false;

        value.subscribe({
          next: (item) => {
            // TODO
          },

          error: (error) => {
            // TODO
          },

          complete: () => {
            console.log('complete from');
          }
        });

      } catch (error) {
        if (not(isDefined)(requestId)) {
          this._emitError(action, requestId, error);
        }

        console.error(error.stack || error);
      }
    });
  }

  _emitError(action, requestId, error) {
    console.log('_emitError action, requestId, error :', action, requestId, error);


  }
}