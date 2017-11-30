import $ from 'jquery';
import {ElementComponent} from '../Component';

export class ChatListComponent extends ElementComponent {
  constructor(server, usersStore, chatStore) {
    super('ul');

    this._server = server;

    this._usersStore = usersStore;

    this._chatStore = chatStore;

    this.$element.addClass('chat-messages');
  }

  _onAttach() {
    this._chatStore.message$.compSubscribe(this, message => {
      console.log('ChatListComponent message :', message);

      this.$element.append( $(`<li />`).text(message.message));
    });
  }
}