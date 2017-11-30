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

server-side get 'users:list' event
=> emit('users:list', this._userList, undefined) to client-side

client-side get 'users:list' event
=> subscribe state$ Observable which merge 'users:list, users:added, users:removed' event
=> display data from state$

.

+ usersStore
this._server.emitAction$('auth:login', {name}) in client-side
=> emit('auth:login', {name}). return ReplaySubject

server-side modules/usersModule get 'auth:login' event
=> this.loginClient$(client, name).  
    this._userList.push(auth);
    this._users[username] = client;
    
    this._io.emit('users:added', auth);
    return Observable.of(auth);

client-side get 'users:added' event
=> subscribe state$ Observable which merge 'users:list, users:added, users:removed' event
=> display data from state$

.

+ chatStore
this._server.emit('chat:list'); in client-side

.

+ chat form
Observable.fromEvent(this._$input, 'keydown')
=> this._sendMessage$(value) or this._login$(value)

    - _login$(value)
        this._usersStore.login$(username); 
        => this._server.emitAction$('auth:login', {name});
    
    - _sendMessage$(value)






