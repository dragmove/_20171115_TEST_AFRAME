import $ from 'jquery';
import {server, chatStore} from '../../services';

export class AFrameListComponent {
  constructor(server, chatStore) {
    this._server = server;

    this._chatStore = chatStore;

    this._$element = $('a-scene');
    console.log('this._$element :', this._$element);
  }

  init() {
    this._chatStore.message$.compSubscribe(this, message => {
      // TODO
      console.log('message from AFrameListComponent :', message);

      switch (message) {
        case 'box' :

          break;

        case 'cylinder' :

          break;

        case 'sphere' :

          break;
      }
    });
  }
}

let component;

try {
  component = new AFrameListComponent(server, chatStore);
  component.init();

} catch (error) {
  console.error(error);

} finally {
  //
}