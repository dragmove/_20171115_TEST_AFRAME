import $ from 'jquery';
import aid from 'aid.js';
import {ElementComponent} from '../Component';
import {usersStore} from '../../services';

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
        console.log('usersComponent action from _usersStore.state$ :', action);

        return action.state.users;
      })
      .compSubscribe(this, (users) => {
        // custom prototype method. hijacking for unsubscribe, when call component.detach() in hot module replacement

        $title.text(`${users.length} user${(users.length !== 1) ? 's' : ''}`);

        this.$element.empty();

        for (let user of users) {
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