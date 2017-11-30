import $ from 'jquery';
import aid from 'aid.js';
import {server, usersStore, chatStore} from '../../services';
import {ComponentBase} from '../Component';
import {ChatListComponent} from './list';
import {ChatFormComponent} from './form';

const isDefined = aid.isDefined;

class ChatComponent extends ComponentBase {
  constructor(server, usersStore, chatStore) {
    super();

    this._server = server;

    this._usersStore = usersStore;

    this._chatStore = chatStore;
  }

  _onAttach() {
    const $title = $('> h1', this._$mount);
    $title.text('');

    const list = new ChatListComponent(this._server, this._usersStore, this._chatStore);
    list.attach(this._$mount);

    const form = new ChatFormComponent(this._usersStore, this._chatStore);
    form.attach(this._$mount);

    this.children.push(list, form);
  }
}

let component;
try {
  component = new ChatComponent(server, usersStore, chatStore);
  component.attach($('section.chat'));

} catch (error) {
  console.error(error);

  if (isDefined(component)) component.detach();

} finally {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      if (isDefined(component)) component.detach();
    });
  }
}


