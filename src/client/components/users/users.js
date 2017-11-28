/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

import $ from 'jquery';
import aid from 'aid.js';
import {Observable} from 'rxjs';
import {usersStore} from '../../services';

Observable.prototype.compSubscribe = function(component,...args) {
  // let subscription = this.subscribe(...args);

  let subscription = this.safeSubscribe(...args);

  component._onDetachHandlers.push(() => subscription.unsubscribe());

  return subscription;
};

class ComponentBase {
  attach($mount) {
    this._$mount = $mount;

    this._onDetachHandlers = [];
    this.children = [];

    this._onAttach();
  }

  detach() {
    this._onDetach();

    for (let handler of this._onDetachHandlers) {
      handler();
    }

    for (let child of this.children) {
      child.detach();
    }

    this._onDetachHandlers = [];
    this.children = [];
  }

  _onAttach() {
    //
  }

  _onDetach() {
    //
  }
}

class ElementComponent extends ComponentBase {
  get $element() {
    return this._$element;
  }

  constructor(elementType = 'div') {
    super();

    this._$element = $(`<${elementType}>`).data('component', this);
  }

  attach($mount) {
    super.attach($mount);

    this._$element.appendTo(this._$mount);
  }

  detach() {
    super.detach();

    this._$element.remove();
  }
}

class UsersComponent extends ElementComponent {
  constructor(usersStore) {
    super('ul');

    this.$element.addClass('users');

    this._usersStore = usersStore;
  }

  _onAttach() {
    const $title = this._$mount.find('> h1');

    // get users from usersStore state$
    this._usersStore.state$
      .map((action) => {
        return action.state.users;
      })
      .compSubscribe(this, (users) => {
        // custom prototype method. hijacking for unsubscribe, when call component.detach() in hot module replacement

        $title.text(`${users.length} user${(users.length !== 1) ? 's' : ''}`);

        this.$element.empty();

        for(let user of users) {
          const $name = $(`<span class="name" />`).text(user.name).css('color', user.color);
          const $userElement = $(`<li />`).append($name);

          this.$element.append($userElement);
        }


      });
  }
}

let component;

try {
  component = new UsersComponent(usersStore);
  component.attach($('section.users'));

} catch (error) {
  console.error(error);

  if (component) {
    component.detach();
    component = null;
  }

} finally {
  if (module.hot) {
    module.hot.accept();

    module.hot.dispose(() => {
      if (aid.isDefined(component)) component.detach();
    });
  }
}