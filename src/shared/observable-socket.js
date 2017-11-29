/*eslint no-unused-vars: "off"*/

import {Observable, ReplaySubject} from 'rxjs';
import aid from 'aid.js';

const not = aid.not,
  isDefined = aid.isDefined,
  isFunction = aid.isFunction;

export function fail(message) {
  return Observable.throw({clientMessage: message});
}

export class ObservableSocket {
  constructor(socket) {
    // use client side, server side
    this._socket = socket;

    this._state = {
      // isConnected: true/false
      // isReconnecting: true/false
      // attempt: Number
    };

    this._actionCallbacks = {};
    this._requests = {};
    this._nextRequestId = 0;

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

        if (not(isDefined)(value)) {
          console.log('onAction !value. emit action to client side.');

          this._socket.emit(action, null, requestId);

          return;
        }

        if (not(isFunction)(value.subscribe)) {
          console.log('onAction value.subscribe is not function. emit action to client side.');

          this._socket.emit(action, value, requestId);

          return;
        }

        let hasValue = false;

        value.subscribe({
          next: (item) => {
            // TODO
            console.log('next item :', item);
          },

          error: (error) => {
            // TODO
            console.error('error item :', error.stack || error);
          },

          complete: () => {
            console.log('complete');
            // TODO
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

  // call from client side.
  emitAction$(action, arg) {
    console.log('emitAction$(action, arg) :', action, arg);

    const id = this._nextRequestId++;

    this._registerCallbacks(action);

    const subject = this._requests[id] = new ReplaySubject(1);

    this._socket.emit(action, arg, id);

    return subject;
  }

  _registerCallbacks(action) {
    if (this._actionCallbacks.hasOwnProperty(action)) return;

    this._socket.on(action, (arg, id) => {
      console.log('_registerCallbacks action, arg, id :', action, arg, id);

      const request = this._popRequest(id);
      if (not(isDefined)(request)) return;

      console.log('request :', request);

      request.next(arg);
      request.complete();
    });

    this._socket.on(`${action}:fail`, (arg, id) => {
      console.log('_registerCallbacks action:fail, arg, id :', `${action}:fail`, arg, id);

      const request = this._popRequest(id);
      if (not(isDefined)(request)) return;

      request.error(arg);
    });

    this._actionCallbacks[action] = true;
  }

  _popRequest(id) {
    if (not(this._requests.hasOwnProperty)(id)) {
      console.error(`Event with id ${id} was returned twice, or the server did not send back an id`);
      return;
    }

    const request = this._requests[id];

    delete this._requests[id];

    return request;
  }
}