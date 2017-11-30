import $ from 'jquery';
import {Observable} from 'rxjs';
import aid from 'aid.js';
import {ElementComponent} from '../Component';

const isDefined = aid.isDefined,
  truthy = aid.truthy;

export class ChatFormComponent extends ElementComponent {
  constructor(usersStore, chatStore) {
    super('div');

    this._usersStore = usersStore;

    this._chatStore = chatStore;

    this.$element.addClass('chat-form');
  }

  _onAttach() {
    this._$error = $(`<div class="chat-error" />`).appendTo(this.$element);

    this._$input = $(`<input type="text" class="chat-input" />`).appendTo(this.$element);

    this._usersStore.currentUser$.compSubscribe(this, user => {
      this._$input.attr('placeholder', (user.isLoggedIn) ? 'Write message' : 'Enter a username');
    });

    Observable.fromEvent(this._$input, 'keydown')
      // get value
      .filter(e => e.keyCode === 13) // Enter key
      .do(e => e.preventDefault())
      .map((e) => {
        console.log('e :', e);

        return e.target.value.trim();
      })
      .filter((value) => {
        console.log('value :', value);

        return value.length;
      })

      // login or send message
      .withLatestFrom(this._usersStore.currentUser$)
      .flatMap(([value, user]) => {
        console.log('ChatFormComponent _$input value, user :', value, user);

        return (truthy(user.isLoggedIn)) ? this._sendMessage$(value) : this._login$(value);
      })

      // display message
      .compSubscribe(this, response => {
        console.log('ChatFormComponent _$input response :', response);

        if (isDefined(response) && isDefined(response.error)) {
          this._$error.show().text(response.error.message);

        } else {
          this._$error.hide().text('');
        }
      });
  }

  _sendMessage$(message) {
    return this._chatStore.sendMessage$(message)
      .catchWrap()
      .do(() => this._$input.val(''));
  }

  _login$(username) {
    console.log('ChatFormComponent _login$ username :', username);

    this._$input.attr('disabled', 'disabled');

    return this._usersStore.login$(username)
      .catchWrap()
      .do(() => this._$input.val(''))
      .finally(() => {
        this._$input.attr('disabled', null);

        this._$input.focus();
      });
  }
}