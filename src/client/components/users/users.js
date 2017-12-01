import $ from 'jquery';
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

        return {
          type: action.type,
          users: action.state.users || [],
          user: (action.user) ? action.user : null
        };
      })
      .compSubscribe(this, ({type, users, user}) => {
        // custom prototype method. hijacking for unsubscribe, when call component.detach() in hot module replacement

        console.log('type, users, user :', type, users, user);

        switch (type) {
          case 'list' :
            //
            break;

          case 'add' :
            console.log(`${user.name} user is logged in. 'ㅅ')`);
            break;

          case 'remove' :
            console.log(`${user.name} user is logged out. 'ㅅ')`);
            break;
        }

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
    module.hot.dispose(() => component && component.detach());
  }
}