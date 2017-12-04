import {ModuleBase} from './ModuleBase';
import {fail} from 'shared/observable-socket';

export class ChatModule extends ModuleBase {
  constructor(io, usersModule) {
    super();

    this._io = io;
    this._users = usersModule;

    this._chatLog = [];
  }

  sendMessage(user, message, type) {
    // TODO
  }

  registerClient(client) {
    client.onActions({
      'chat:list': () => {
        return this._chatLog;
      },

      'chat:add': ({message, type}) => {
        console.log('message, type :', message, type);

        type = (type || 'normal');

        const user = this._users.getUserForClient(client);
        if (!user) {
          return fail('You must be logged in');
        }

        this.sendMessage(user, message, type);
      }
    });
  }
}