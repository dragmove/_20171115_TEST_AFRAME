import $ from 'jquery';
import aid from 'aid.js';

import {usersStore} from '../../services';

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

    this._users = usersStore;
  }

  _onAttach() {
    // TODO
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