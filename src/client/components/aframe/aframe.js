import $ from 'jquery';
import _ from 'lodash';
import {ComponentBase} from '../Component';
import {server, chatStore} from '../../services';

const randomColor = require('randomcolor');

export class AFrameListComponent extends ComponentBase {
  constructor(server, chatStore) {
    super();

    this._server = server;

    this._chatStore = chatStore;

    this._$element = $('a-scene');
    console.log('this._$element :', this._$element);
  }

  _onAttach() {
    const scene = this._$element.get(0);

    this._chatStore.message$.compSubscribe(this, msg => {
      // TODO
      console.log('message from AFrameListComponent :', msg.message);

      const position = [_.random(-2, 2), _.random(5, 10), _.random(-6, -4)].join(' '),
        rotation = [_.random(-45, 45), _.random(-45, 45), _.random(-45, 45)].join(' '),
        color = randomColor();

      let node = null;

      switch (msg.message) {
        case 'box' :
          node = $(`<a-box dynamic-body position="${position}" rotation="${rotation}" width="0.5" height="0.5" depth="0.5" color="${color}">`).get(0);
          scene.appendChild(node);
          break;

        case 'sphere' :
          node = $(`<a-sphere dynamic-body position="${position}" rotation="${rotation}" radius="1" color="${color}">`).get(0);
          scene.appendChild(node);
          break;
      }
    });
  }

  _onDetach() {
    //
  }
}

let component;

try {
  component = new AFrameListComponent(server, chatStore);
  component.attach(null);

} catch (error) {
  console.error(error);
  if (component) component.detach();

} finally {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => component && component.detach());
  }
}