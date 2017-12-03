import {ModuleBase} from './ModuleBase';

export class ChatModule extends ModuleBase {
  constructor(io, usersModule) {
    super();

    this._io = io;
    this._users = usersModule;

    this._chatLog = [];
  }

  sendMessage(user, message, type) {

  }

  registerClient(client) {
    client.onActions({
      'chat:list': () => {
        return this._chatLog;
      },

      'chat:add': ({message, type}) => {

      }
    });
  }
}