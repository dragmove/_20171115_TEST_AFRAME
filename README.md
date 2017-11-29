# _20171115_TEST_AFRAME


## About
* Toy project


## gulp tasks

+ webpack-dev-server
after run 'webpack-dev-server' task, access http://localhost:9000/


## Contact
* @Website : http://www.dragmove.com
* @Blog : http://blog.naver.com/dragmove
* @Blog (Wordpress) : http://dragmove.synology.me/wordpress/
* @LinkedIn : https://www.linkedin.com/in/hyun-seok-kim-99748295/
* @E-mail : dragmove@gmail.com


## License
[MIT license](http://danro.mit-license.org/).


## Process
connect socket in client-side

emit('users:list'); from client-side to server-side

server-side get 'users:list' event => emit('users:list', this._userList, undefined) to client-side

client-side get 'users:list' event => make state$ from 'users:list, users:added, users:removed' merged Observable. => display data from state$