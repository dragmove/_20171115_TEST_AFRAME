/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrXCI/MzkzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2tcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_source_map_support_register__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io__);\n\n\n\n\n\n\n\nvar isDevelopment = process.env.NODE_ENV !== 'production';\n\n/*\r\n * socket\r\n */\nvar app = __WEBPACK_IMPORTED_MODULE_2_express___default()();\nvar server = new __WEBPACK_IMPORTED_MODULE_3_http___default.a.Server(app);\nvar io = __WEBPACK_IMPORTED_MODULE_4_socket_io___default()(server);\n\n/*\r\n * client webpack\r\n */\nif (process.env.USE_WEBPACK === 'true') {\n  var webpackMiddleware = __webpack_require__(7),\n      webpackHotMiddleware = __webpack_require__(8),\n      webpack = __webpack_require__(0),\n      clientConfig = __webpack_require__(9);\n\n  var compiler = webpack(clientConfig(true));\n\n  app.use(webpackMiddleware(compiler, {\n    publicPath: '/build/',\n    stats: {\n      colors: true,\n      chunks: false,\n      assets: false,\n      timings: false,\n      modules: false,\n      hash: false,\n      version: false\n    }\n  }));\n\n  app.use(webpackHotMiddleware(compiler));\n\n  console.log(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.bgRed('Using Webpack Dev MiddleWare. this is for dev only.'));\n}\n\n/*\r\n * configuration\r\n */\napp.set('view engine', 'pug');\n\napp.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static('public'));\n\nvar useExternalStyles = !isDevelopment;\n\napp.get('/', function (req, res) {\n  // res.send('<h1>oh yes</h1>');\n\n  res.render('index', {\n    useExternalStyles: useExternalStyles\n  });\n});\n\n/*\r\n * socket\r\n */\nio.on('connection', function (socket) {\n  console.log('got user connection');\n\n  // send msg to everyone except for a certain socket\n  // socket.broadcast.emit('hi');\n\n  socket.on('disconnect', function () {\n    console.log('user disconnected');\n\n    io.emit('disconnected');\n  });\n\n  socket.on('chat:message', function (msg) {\n    console.log('from client emit chat:message :', msg);\n\n    // send msg to everyone, include sender\n    io.emit('chat:message', msg);\n  });\n});\n\n/*\r\n * start server\r\n */\nvar port = process.env.port || 3000;\n\nfunction startServer() {\n  server.listen(port, function () {\n    console.log('Started http server on ' + port);\n  });\n}\n\nstartServer();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcz9iNTllIl0sIm5hbWVzIjpbImlzRGV2ZWxvcG1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJleHByZXNzIiwic2VydmVyIiwiaHR0cCIsIlNlcnZlciIsImlvIiwic29ja2V0SW8iLCJVU0VfV0VCUEFDSyIsIndlYnBhY2tNaWRkbGV3YXJlIiwicmVxdWlyZSIsIndlYnBhY2tIb3RNaWRkbGV3YXJlIiwid2VicGFjayIsImNsaWVudENvbmZpZyIsImNvbXBpbGVyIiwidXNlIiwicHVibGljUGF0aCIsInN0YXRzIiwiY29sb3JzIiwiY2h1bmtzIiwiYXNzZXRzIiwidGltaW5ncyIsIm1vZHVsZXMiLCJoYXNoIiwidmVyc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImJnUmVkIiwic2V0Iiwic3RhdGljIiwidXNlRXh0ZXJuYWxTdHlsZXMiLCJnZXQiLCJyZXEiLCJyZXMiLCJyZW5kZXIiLCJvbiIsInNvY2tldCIsImVtaXQiLCJtc2ciLCJwb3J0Iiwic3RhcnRTZXJ2ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWlCQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBaEQ7O0FBRUE7OztBQUdBLElBQU1DLE1BQU0sK0NBQUFDLEVBQVo7QUFDQSxJQUFNQyxTQUFTLElBQUksNENBQUFDLENBQUtDLE1BQVQsQ0FBZ0JKLEdBQWhCLENBQWY7QUFDQSxJQUFNSyxLQUFLLGlEQUFBQyxDQUFTSixNQUFULENBQVg7O0FBRUE7OztBQUdBLElBQUlMLFFBQVFDLEdBQVIsQ0FBWVMsV0FBWixLQUE0QixNQUFoQyxFQUF3QztBQUN0QyxNQUFNQyxvQkFBb0IsbUJBQUFDLENBQVEsQ0FBUixDQUExQjtBQUFBLE1BQ0VDLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBRHpCO0FBQUEsTUFFRUUsVUFBVSxtQkFBQUYsQ0FBUSxDQUFSLENBRlo7QUFBQSxNQUdFRyxlQUFlLG1CQUFBSCxDQUFRLENBQVIsQ0FIakI7O0FBS0EsTUFBTUksV0FBV0YsUUFBUUMsYUFBYSxJQUFiLENBQVIsQ0FBakI7O0FBRUFaLE1BQUljLEdBQUosQ0FBUU4sa0JBQWtCSyxRQUFsQixFQUE0QjtBQUNsQ0UsZ0JBQVksU0FEc0I7QUFFbENDLFdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGNBQVEsS0FGSDtBQUdMQyxjQUFRLEtBSEg7QUFJTEMsZUFBUyxLQUpKO0FBS0xDLGVBQVMsS0FMSjtBQU1MQyxZQUFNLEtBTkQ7QUFPTEMsZUFBUztBQVBKO0FBRjJCLEdBQTVCLENBQVI7O0FBYUF2QixNQUFJYyxHQUFKLENBQVFKLHFCQUFxQkcsUUFBckIsQ0FBUjs7QUFFQVcsVUFBUUMsR0FBUixDQUFZLDZDQUFBQyxDQUFNQyxLQUFOLENBQVkscURBQVosQ0FBWjtBQUNEOztBQUVEOzs7QUFHQTNCLElBQUk0QixHQUFKLENBQVEsYUFBUixFQUF1QixLQUF2Qjs7QUFFQTVCLElBQUljLEdBQUosQ0FBUSwrQ0FBQWIsQ0FBUTRCLE1BQVIsQ0FBZSxRQUFmLENBQVI7O0FBRUEsSUFBTUMsb0JBQW9CLENBQUNsQyxhQUEzQjs7QUFFQUksSUFBSStCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQy9COztBQUVBQSxNQUFJQyxNQUFKLENBQVcsT0FBWCxFQUFvQjtBQUNsQko7QUFEa0IsR0FBcEI7QUFHRCxDQU5EOztBQVFBOzs7QUFHQXpCLEdBQUc4QixFQUFILENBQU0sWUFBTixFQUFvQixVQUFDQyxNQUFELEVBQVk7QUFDOUJaLFVBQVFDLEdBQVIsQ0FBWSxxQkFBWjs7QUFFQTtBQUNBOztBQUVBVyxTQUFPRCxFQUFQLENBQVUsWUFBVixFQUF3QixZQUFXO0FBQ2pDWCxZQUFRQyxHQUFSLENBQVksbUJBQVo7O0FBRUFwQixPQUFHZ0MsSUFBSCxDQUFRLGNBQVI7QUFDRCxHQUpEOztBQU1BRCxTQUFPRCxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFTRyxHQUFULEVBQWM7QUFDdENkLFlBQVFDLEdBQVIsQ0FBWSxpQ0FBWixFQUErQ2EsR0FBL0M7O0FBRUE7QUFDQWpDLE9BQUdnQyxJQUFILENBQVEsY0FBUixFQUF3QkMsR0FBeEI7QUFDRCxHQUxEO0FBTUQsQ0FsQkQ7O0FBb0JBOzs7QUFHQSxJQUFNQyxPQUFPMUMsUUFBUUMsR0FBUixDQUFZeUMsSUFBWixJQUFvQixJQUFqQzs7QUFFQSxTQUFTQyxXQUFULEdBQXVCO0FBQ3JCdEMsU0FBT3VDLE1BQVAsQ0FBY0YsSUFBZCxFQUFvQixZQUFNO0FBQ3hCZixZQUFRQyxHQUFSLDZCQUFzQ2MsSUFBdEM7QUFDRCxHQUZEO0FBR0Q7O0FBRURDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcblxyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBzb2NrZXRJbyBmcm9tICdzb2NrZXQuaW8nO1xyXG5cclxuY29uc3QgaXNEZXZlbG9wbWVudCA9IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKTtcclxuXHJcbi8qXHJcbiAqIHNvY2tldFxyXG4gKi9cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgaHR0cC5TZXJ2ZXIoYXBwKTtcclxuY29uc3QgaW8gPSBzb2NrZXRJbyhzZXJ2ZXIpO1xyXG5cclxuLypcclxuICogY2xpZW50IHdlYnBhY2tcclxuICovXHJcbmlmIChwcm9jZXNzLmVudi5VU0VfV0VCUEFDSyA9PT0gJ3RydWUnKSB7XHJcbiAgY29uc3Qgd2VicGFja01pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWRldi1taWRkbGV3YXJlJyksXHJcbiAgICB3ZWJwYWNrSG90TWlkZGxld2FyZSA9IHJlcXVpcmUoJ3dlYnBhY2staG90LW1pZGRsZXdhcmUnKSxcclxuICAgIHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyksXHJcbiAgICBjbGllbnRDb25maWcgPSByZXF1aXJlKCcuLi8uLi93ZWJwYWNrLmNsaWVudC5jb25maWcnKTtcclxuXHJcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKGNsaWVudENvbmZpZyh0cnVlKSk7XHJcblxyXG4gIGFwcC51c2Uod2VicGFja01pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuICAgIHB1YmxpY1BhdGg6ICcvYnVpbGQvJyxcclxuICAgIHN0YXRzOiB7XHJcbiAgICAgIGNvbG9yczogdHJ1ZSxcclxuICAgICAgY2h1bmtzOiBmYWxzZSxcclxuICAgICAgYXNzZXRzOiBmYWxzZSxcclxuICAgICAgdGltaW5nczogZmFsc2UsXHJcbiAgICAgIG1vZHVsZXM6IGZhbHNlLFxyXG4gICAgICBoYXNoOiBmYWxzZSxcclxuICAgICAgdmVyc2lvbjogZmFsc2VcclxuICAgIH1cclxuICB9KSk7XHJcblxyXG4gIGFwcC51c2Uod2VicGFja0hvdE1pZGRsZXdhcmUoY29tcGlsZXIpKTtcclxuXHJcbiAgY29uc29sZS5sb2coY2hhbGsuYmdSZWQoJ1VzaW5nIFdlYnBhY2sgRGV2IE1pZGRsZVdhcmUuIHRoaXMgaXMgZm9yIGRldiBvbmx5LicpKTtcclxufVxyXG5cclxuLypcclxuICogY29uZmlndXJhdGlvblxyXG4gKi9cclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7XHJcblxyXG5jb25zdCB1c2VFeHRlcm5hbFN0eWxlcyA9ICFpc0RldmVsb3BtZW50O1xyXG5cclxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIHJlcy5zZW5kKCc8aDE+b2ggeWVzPC9oMT4nKTtcclxuXHJcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XHJcbiAgICB1c2VFeHRlcm5hbFN0eWxlc1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqIHNvY2tldFxyXG4gKi9cclxuaW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2dvdCB1c2VyIGNvbm5lY3Rpb24nKTtcclxuXHJcbiAgLy8gc2VuZCBtc2cgdG8gZXZlcnlvbmUgZXhjZXB0IGZvciBhIGNlcnRhaW4gc29ja2V0XHJcbiAgLy8gc29ja2V0LmJyb2FkY2FzdC5lbWl0KCdoaScpO1xyXG5cclxuICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1c2VyIGRpc2Nvbm5lY3RlZCcpO1xyXG5cclxuICAgIGlvLmVtaXQoJ2Rpc2Nvbm5lY3RlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBzb2NrZXQub24oJ2NoYXQ6bWVzc2FnZScsIGZ1bmN0aW9uKG1zZykge1xyXG4gICAgY29uc29sZS5sb2coJ2Zyb20gY2xpZW50IGVtaXQgY2hhdDptZXNzYWdlIDonLCBtc2cpO1xyXG5cclxuICAgIC8vIHNlbmQgbXNnIHRvIGV2ZXJ5b25lLCBpbmNsdWRlIHNlbmRlclxyXG4gICAgaW8uZW1pdCgnY2hhdDptZXNzYWdlJywgbXNnKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiBzdGFydCBzZXJ2ZXJcclxuICovXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5wb3J0IHx8IDMwMDA7XHJcblxyXG5mdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcclxuICBzZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBTdGFydGVkIGh0dHAgc2VydmVyIG9uICR7cG9ydH1gKTtcclxuICB9KTtcclxufVxyXG5cclxuc3RhcnRTZXJ2ZXIoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIj9mODBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiPzUzZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCI/OGU0NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIj81MTA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI/NjQ1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCI/ZWU1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ob3QtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2staG90LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(10),\n    webpack = __webpack_require__(0),\n    dirname = path.resolve('./');\n\nvar vendorModules = ['jquery', 'aframe', 'rxjs'];\n\nfunction createConfig(isDebug) {\n  var devTool = isDebug ? 'eval-source-map' : 'source-map';\n\n  var externals = [],\n      plugins = [new webpack.optimize.CommonsChunkPlugin({\n    name: 'vendor',\n    filename: 'vendor.js'\n  })];\n\n  var appEntry = ['./src/client/application.js'];\n\n  if (!isDebug) {\n    plugins.push(new webpack.optimize.UglifyJsPlugin({\n      sourceMap: true\n    }));\n  } else {\n    plugins.push(new webpack.HotModuleReplacementPlugin());\n\n    appEntry.splice(0, 0, 'webpack-hot-middleware/client');\n  }\n\n  return {\n    target: 'web',\n\n    entry: {\n      application: appEntry,\n      vendor: vendorModules\n    },\n\n    output: {\n      filename: '[name].js',\n      path: path.join(dirname, 'public', 'build'),\n      publicPath: '/build/'\n    },\n\n    resolve: {\n      alias: {\n        shared: path.join(dirname, 'src', 'shared')\n      }\n    },\n\n    module: {\n      rules: [{\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel-loader'\n      }, {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'eslint-loader'\n      }]\n    },\n\n    devtool: devTool,\n\n    externals: externals,\n\n    plugins: plugins\n  };\n}\n\nmodule.exports = createConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNsaWVudC5jb25maWcuanM/YmNjNSJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIndlYnBhY2siLCJkaXJuYW1lIiwicmVzb2x2ZSIsInZlbmRvck1vZHVsZXMiLCJjcmVhdGVDb25maWciLCJpc0RlYnVnIiwiZGV2VG9vbCIsImV4dGVybmFscyIsInBsdWdpbnMiLCJvcHRpbWl6ZSIsIkNvbW1vbnNDaHVua1BsdWdpbiIsIm5hbWUiLCJmaWxlbmFtZSIsImFwcEVudHJ5IiwicHVzaCIsIlVnbGlmeUpzUGx1Z2luIiwic291cmNlTWFwIiwiSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4iLCJzcGxpY2UiLCJ0YXJnZXQiLCJlbnRyeSIsImFwcGxpY2F0aW9uIiwidmVuZG9yIiwib3V0cHV0Iiwiam9pbiIsInB1YmxpY1BhdGgiLCJhbGlhcyIsInNoYXJlZCIsIm1vZHVsZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJkZXZ0b29sIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsT0FBTyxtQkFBQUMsQ0FBUSxFQUFSLENBQWI7QUFBQSxJQUNFQyxVQUFVLG1CQUFBRCxDQUFRLENBQVIsQ0FEWjtBQUFBLElBRUVFLFVBQVVILEtBQUtJLE9BQUwsQ0FBYSxJQUFiLENBRlo7O0FBSUEsSUFBTUMsZ0JBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsTUFBckIsQ0FBdEI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDN0IsTUFBTUMsVUFBV0QsT0FBRCxHQUFZLGlCQUFaLEdBQWdDLFlBQWhEOztBQUVBLE1BQU1FLFlBQVksRUFBbEI7QUFBQSxNQUVFQyxVQUFVLENBQUMsSUFBSVIsUUFBUVMsUUFBUixDQUFpQkMsa0JBQXJCLENBQXdDO0FBQ2pEQyxVQUFNLFFBRDJDO0FBRWpEQyxjQUFVO0FBRnVDLEdBQXhDLENBQUQsQ0FGWjs7QUFPQSxNQUFNQyxXQUFXLENBQUMsNkJBQUQsQ0FBakI7O0FBRUEsTUFBSSxDQUFDUixPQUFMLEVBQWM7QUFDWkcsWUFBUU0sSUFBUixDQUFhLElBQUlkLFFBQVFTLFFBQVIsQ0FBaUJNLGNBQXJCLENBQW9DO0FBQy9DQyxpQkFBVztBQURvQyxLQUFwQyxDQUFiO0FBSUQsR0FMRCxNQUtPO0FBQ0xSLFlBQVFNLElBQVIsQ0FBYSxJQUFJZCxRQUFRaUIsMEJBQVosRUFBYjs7QUFFQUosYUFBU0ssTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQiwrQkFBdEI7QUFDRDs7QUFFRCxTQUFPO0FBQ0xDLFlBQVEsS0FESDs7QUFHTEMsV0FBTztBQUNMQyxtQkFBYVIsUUFEUjtBQUVMUyxjQUFRbkI7QUFGSCxLQUhGOztBQVFMb0IsWUFBUTtBQUNOWCxnQkFBVSxXQURKO0FBRU5kLFlBQU1BLEtBQUswQixJQUFMLENBQVV2QixPQUFWLEVBQW1CLFFBQW5CLEVBQTZCLE9BQTdCLENBRkE7QUFHTndCLGtCQUFZO0FBSE4sS0FSSDs7QUFjTHZCLGFBQVM7QUFDUHdCLGFBQU87QUFDTEMsZ0JBQVE3QixLQUFLMEIsSUFBTCxDQUFVdkIsT0FBVixFQUFtQixLQUFuQixFQUEwQixRQUExQjtBQURIO0FBREEsS0FkSjs7QUFvQkwyQixZQUFRO0FBQ05DLGFBQU8sQ0FDTDtBQUNFQyxjQUFNLE9BRFI7QUFFRUMsaUJBQVMsY0FGWDtBQUdFQyxnQkFBUTtBQUhWLE9BREssRUFPTDtBQUNFRixjQUFNLE9BRFI7QUFFRUMsaUJBQVMsY0FGWDtBQUdFQyxnQkFBUTtBQUhWLE9BUEs7QUFERCxLQXBCSDs7QUFvQ0xDLGFBQVMzQixPQXBDSjs7QUFzQ0xDLGVBQVdBLFNBdENOOztBQXdDTEMsYUFBU0E7QUF4Q0osR0FBUDtBQTBDRDs7QUFFRG9CLE9BQU9NLE9BQVAsR0FBaUI5QixZQUFqQiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSxcclxuICB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpLFxyXG4gIGRpcm5hbWUgPSBwYXRoLnJlc29sdmUoJy4vJyk7XHJcblxyXG5jb25zdCB2ZW5kb3JNb2R1bGVzID0gWydqcXVlcnknLCAnYWZyYW1lJywgJ3J4anMnXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmZpZyhpc0RlYnVnKSB7XHJcbiAgY29uc3QgZGV2VG9vbCA9IChpc0RlYnVnKSA/ICdldmFsLXNvdXJjZS1tYXAnIDogJ3NvdXJjZS1tYXAnO1xyXG5cclxuICBjb25zdCBleHRlcm5hbHMgPSBbXSxcclxuXHJcbiAgICBwbHVnaW5zID0gW25ldyB3ZWJwYWNrLm9wdGltaXplLkNvbW1vbnNDaHVua1BsdWdpbih7XHJcbiAgICAgIG5hbWU6ICd2ZW5kb3InLFxyXG4gICAgICBmaWxlbmFtZTogJ3ZlbmRvci5qcydcclxuICAgIH0pXTtcclxuXHJcbiAgY29uc3QgYXBwRW50cnkgPSBbJy4vc3JjL2NsaWVudC9hcHBsaWNhdGlvbi5qcyddO1xyXG5cclxuICBpZiAoIWlzRGVidWcpIHtcclxuICAgIHBsdWdpbnMucHVzaChuZXcgd2VicGFjay5vcHRpbWl6ZS5VZ2xpZnlKc1BsdWdpbih7XHJcbiAgICAgIHNvdXJjZU1hcDogdHJ1ZVxyXG4gICAgfSkpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCkpO1xyXG5cclxuICAgIGFwcEVudHJ5LnNwbGljZSgwLCAwLCAnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0YXJnZXQ6ICd3ZWInLFxyXG5cclxuICAgIGVudHJ5OiB7XHJcbiAgICAgIGFwcGxpY2F0aW9uOiBhcHBFbnRyeSxcclxuICAgICAgdmVuZG9yOiB2ZW5kb3JNb2R1bGVzXHJcbiAgICB9LFxyXG5cclxuICAgIG91dHB1dDoge1xyXG4gICAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXHJcbiAgICAgIHBhdGg6IHBhdGguam9pbihkaXJuYW1lLCAncHVibGljJywgJ2J1aWxkJyksXHJcbiAgICAgIHB1YmxpY1BhdGg6ICcvYnVpbGQvJ1xyXG4gICAgfSxcclxuXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgc2hhcmVkOiBwYXRoLmpvaW4oZGlybmFtZSwgJ3NyYycsICdzaGFyZWQnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1vZHVsZToge1xyXG4gICAgICBydWxlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxyXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXHJcbiAgICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGVzdDogL1xcLmpzJC8sXHJcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcclxuICAgICAgICAgIGxvYWRlcjogJ2VzbGludC1sb2FkZXInLFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXZ0b29sOiBkZXZUb29sLFxyXG5cclxuICAgIGV4dGVybmFsczogZXh0ZXJuYWxzLFxyXG5cclxuICAgIHBsdWdpbnM6IHBsdWdpbnNcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWJwYWNrLmNsaWVudC5jb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);