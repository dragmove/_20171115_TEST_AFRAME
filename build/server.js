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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_source_map_support_register__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);\n\n\n\n\n\n\nvar isDevelopment = process.env.NODE_ENV !== 'production';\n\n/*\r\n * socket\r\n */\nvar app = __WEBPACK_IMPORTED_MODULE_2_express___default()();\nvar server = new __WEBPACK_IMPORTED_MODULE_3_http___default.a.Server(app);\n\n/*\r\n * client webpack\r\n */\nif (process.env.USE_WEBPACK === 'true') {\n  var webpackMiddleware = __webpack_require__(6),\n      webpackHotMiddleware = __webpack_require__(7),\n      webpack = __webpack_require__(0),\n      clientConfig = __webpack_require__(8);\n\n  var compiler = webpack(clientConfig(true));\n\n  app.use(webpackMiddleware(compiler, {\n    publicPath: '/build/',\n    stats: {\n      colors: true,\n      chunks: false,\n      assets: false,\n      timings: false,\n      modules: false,\n      hash: false,\n      version: false\n    }\n  }));\n\n  app.use(webpackHotMiddleware(compiler));\n\n  console.log(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.bgRed('Using Webpack Dev MiddleWare. this is for dev only.'));\n}\n\n/*\r\n * configuration\r\n */\napp.set('view engine', 'pug');\n\napp.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static('public'));\n\nvar useExternalStyles = !isDevelopment;\n\napp.get('/', function (req, res) {\n  // res.send('<h1>oh yes</h1>');\n\n  res.render('index', {\n    useExternalStyles: useExternalStyles\n  });\n});\n\n/*\r\n * start server\r\n */\nvar port = process.env.port || 3000;\n\nfunction startServer() {\n  server.listen(port, function () {\n    console.log('Started http server on ' + port);\n  });\n}\n\nstartServer();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcz9iNTllIl0sIm5hbWVzIjpbImlzRGV2ZWxvcG1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJleHByZXNzIiwic2VydmVyIiwiaHR0cCIsIlNlcnZlciIsIlVTRV9XRUJQQUNLIiwid2VicGFja01pZGRsZXdhcmUiLCJyZXF1aXJlIiwid2VicGFja0hvdE1pZGRsZXdhcmUiLCJ3ZWJwYWNrIiwiY2xpZW50Q29uZmlnIiwiY29tcGlsZXIiLCJ1c2UiLCJwdWJsaWNQYXRoIiwic3RhdHMiLCJjb2xvcnMiLCJjaHVua3MiLCJhc3NldHMiLCJ0aW1pbmdzIiwibW9kdWxlcyIsImhhc2giLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiYmdSZWQiLCJzZXQiLCJzdGF0aWMiLCJ1c2VFeHRlcm5hbFN0eWxlcyIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInBvcnQiLCJzdGFydFNlcnZlciIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFpQkMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQWhEOztBQUVBOzs7QUFHQSxJQUFNQyxNQUFNLCtDQUFBQyxFQUFaO0FBQ0EsSUFBTUMsU0FBUyxJQUFJLDRDQUFBQyxDQUFLQyxNQUFULENBQWdCSixHQUFoQixDQUFmOztBQUVBOzs7QUFHQSxJQUFJSCxRQUFRQyxHQUFSLENBQVlPLFdBQVosS0FBNEIsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsb0JBQW9CLG1CQUFBQyxDQUFRLENBQVIsQ0FBMUI7QUFBQSxNQUNFQyx1QkFBdUIsbUJBQUFELENBQVEsQ0FBUixDQUR6QjtBQUFBLE1BRUVFLFVBQVUsbUJBQUFGLENBQVEsQ0FBUixDQUZaO0FBQUEsTUFHRUcsZUFBZSxtQkFBQUgsQ0FBUSxDQUFSLENBSGpCOztBQUtBLE1BQU1JLFdBQVdGLFFBQVFDLGFBQWEsSUFBYixDQUFSLENBQWpCOztBQUVBVixNQUFJWSxHQUFKLENBQVFOLGtCQUFrQkssUUFBbEIsRUFBNEI7QUFDbENFLGdCQUFZLFNBRHNCO0FBRWxDQyxXQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxjQUFRLEtBRkg7QUFHTEMsY0FBUSxLQUhIO0FBSUxDLGVBQVMsS0FKSjtBQUtMQyxlQUFTLEtBTEo7QUFNTEMsWUFBTSxLQU5EO0FBT0xDLGVBQVM7QUFQSjtBQUYyQixHQUE1QixDQUFSOztBQWFBckIsTUFBSVksR0FBSixDQUFRSixxQkFBcUJHLFFBQXJCLENBQVI7O0FBRUFXLFVBQVFDLEdBQVIsQ0FBWSw2Q0FBQUMsQ0FBTUMsS0FBTixDQUFZLHFEQUFaLENBQVo7QUFDRDs7QUFFRDs7O0FBR0F6QixJQUFJMEIsR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7O0FBRUExQixJQUFJWSxHQUFKLENBQVEsK0NBQUFYLENBQVEwQixNQUFSLENBQWUsUUFBZixDQUFSOztBQUVBLElBQU1DLG9CQUFvQixDQUFDaEMsYUFBM0I7O0FBRUFJLElBQUk2QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMvQjs7QUFFQUEsTUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0I7QUFDbEJKO0FBRGtCLEdBQXBCO0FBR0QsQ0FORDs7QUFRQTs7O0FBR0EsSUFBTUssT0FBT3BDLFFBQVFDLEdBQVIsQ0FBWW1DLElBQVosSUFBb0IsSUFBakM7O0FBRUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQmhDLFNBQU9pQyxNQUFQLENBQWNGLElBQWQsRUFBb0IsWUFBTTtBQUN4QlgsWUFBUUMsR0FBUiw2QkFBc0NVLElBQXRDO0FBQ0QsR0FGRDtBQUdEOztBQUVEQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xyXG5cclxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xyXG5cclxuY29uc3QgaXNEZXZlbG9wbWVudCA9IChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKTtcclxuXHJcbi8qXHJcbiAqIHNvY2tldFxyXG4gKi9cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgaHR0cC5TZXJ2ZXIoYXBwKTtcclxuXHJcbi8qXHJcbiAqIGNsaWVudCB3ZWJwYWNrXHJcbiAqL1xyXG5pZiAocHJvY2Vzcy5lbnYuVVNFX1dFQlBBQ0sgPT09ICd0cnVlJykge1xyXG4gIGNvbnN0IHdlYnBhY2tNaWRkbGV3YXJlID0gcmVxdWlyZSgnd2VicGFjay1kZXYtbWlkZGxld2FyZScpLFxyXG4gICAgd2VicGFja0hvdE1pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlJyksXHJcbiAgICB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpLFxyXG4gICAgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vLi4vd2VicGFjay5jbGllbnQuY29uZmlnJyk7XHJcblxyXG4gIGNvbnN0IGNvbXBpbGVyID0gd2VicGFjayhjbGllbnRDb25maWcodHJ1ZSkpO1xyXG5cclxuICBhcHAudXNlKHdlYnBhY2tNaWRkbGV3YXJlKGNvbXBpbGVyLCB7XHJcbiAgICBwdWJsaWNQYXRoOiAnL2J1aWxkLycsXHJcbiAgICBzdGF0czoge1xyXG4gICAgICBjb2xvcnM6IHRydWUsXHJcbiAgICAgIGNodW5rczogZmFsc2UsXHJcbiAgICAgIGFzc2V0czogZmFsc2UsXHJcbiAgICAgIHRpbWluZ3M6IGZhbHNlLFxyXG4gICAgICBtb2R1bGVzOiBmYWxzZSxcclxuICAgICAgaGFzaDogZmFsc2UsXHJcbiAgICAgIHZlcnNpb246IGZhbHNlXHJcbiAgICB9XHJcbiAgfSkpO1xyXG5cclxuICBhcHAudXNlKHdlYnBhY2tIb3RNaWRkbGV3YXJlKGNvbXBpbGVyKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGNoYWxrLmJnUmVkKCdVc2luZyBXZWJwYWNrIERldiBNaWRkbGVXYXJlLiB0aGlzIGlzIGZvciBkZXYgb25seS4nKSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIGNvbmZpZ3VyYXRpb25cclxuICovXHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3B1ZycpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xyXG5cclxuY29uc3QgdXNlRXh0ZXJuYWxTdHlsZXMgPSAhaXNEZXZlbG9wbWVudDtcclxuXHJcbmFwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAvLyByZXMuc2VuZCgnPGgxPm9oIHllczwvaDE+Jyk7XHJcblxyXG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xyXG4gICAgdXNlRXh0ZXJuYWxTdHlsZXNcclxuICB9KTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiBzdGFydCBzZXJ2ZXJcclxuICovXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5wb3J0IHx8IDMwMDA7XHJcblxyXG5mdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcclxuICBzZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBTdGFydGVkIGh0dHAgc2VydmVyIG9uICR7cG9ydH1gKTtcclxuICB9KTtcclxufVxyXG5cclxuc3RhcnRTZXJ2ZXIoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

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

eval("module.exports = require(\"webpack-dev-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI/NjQ1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCI/ZWU1OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ob3QtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2staG90LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(9),\n    webpack = __webpack_require__(0),\n    dirname = path.resolve('./');\n\nvar vendorModules = ['jquery', 'aframe'];\n\nfunction createConfig(isDebug) {\n  var devTool = isDebug ? 'eval-source-map' : 'source-map';\n\n  var externals = [],\n      plugins = [new webpack.optimize.CommonsChunkPlugin({\n    name: 'vendor',\n    filename: 'vendor.js'\n  })];\n\n  var appEntry = ['./src/client/application.js'];\n\n  if (!isDebug) {\n    plugins.push(new webpack.optimize.UglifyJsPlugin({\n      sourceMap: true\n    }));\n  } else {\n    plugins.push(new webpack.HotModuleReplacementPlugin());\n\n    appEntry.splice(0, 0, 'webpack-hot-middleware/client');\n  }\n\n  return {\n    target: 'web',\n\n    entry: {\n      application: appEntry,\n      vendor: vendorModules\n    },\n\n    output: {\n      filename: '[name].js',\n      path: path.join(dirname, 'public', 'build'),\n      publicPath: '/build/'\n    },\n\n    resolve: {\n      alias: {\n        shared: path.join(dirname, 'src', 'shared')\n      }\n    },\n\n    module: {\n      rules: [{\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel-loader'\n      }, {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'eslint-loader'\n      }]\n    },\n\n    devtool: devTool,\n\n    externals: externals,\n\n    plugins: plugins\n  };\n}\n\nmodule.exports = createConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNsaWVudC5jb25maWcuanM/YmNjNSJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIndlYnBhY2siLCJkaXJuYW1lIiwicmVzb2x2ZSIsInZlbmRvck1vZHVsZXMiLCJjcmVhdGVDb25maWciLCJpc0RlYnVnIiwiZGV2VG9vbCIsImV4dGVybmFscyIsInBsdWdpbnMiLCJvcHRpbWl6ZSIsIkNvbW1vbnNDaHVua1BsdWdpbiIsIm5hbWUiLCJmaWxlbmFtZSIsImFwcEVudHJ5IiwicHVzaCIsIlVnbGlmeUpzUGx1Z2luIiwic291cmNlTWFwIiwiSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4iLCJzcGxpY2UiLCJ0YXJnZXQiLCJlbnRyeSIsImFwcGxpY2F0aW9uIiwidmVuZG9yIiwib3V0cHV0Iiwiam9pbiIsInB1YmxpY1BhdGgiLCJhbGlhcyIsInNoYXJlZCIsIm1vZHVsZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJkZXZ0b29sIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsT0FBTyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7QUFBQSxJQUNFQyxVQUFVLG1CQUFBRCxDQUFRLENBQVIsQ0FEWjtBQUFBLElBRUVFLFVBQVVILEtBQUtJLE9BQUwsQ0FBYSxJQUFiLENBRlo7O0FBSUEsSUFBTUMsZ0JBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBdEI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDN0IsTUFBTUMsVUFBV0QsT0FBRCxHQUFZLGlCQUFaLEdBQWdDLFlBQWhEOztBQUVBLE1BQU1FLFlBQVksRUFBbEI7QUFBQSxNQUVFQyxVQUFVLENBQUMsSUFBSVIsUUFBUVMsUUFBUixDQUFpQkMsa0JBQXJCLENBQXdDO0FBQ2pEQyxVQUFNLFFBRDJDO0FBRWpEQyxjQUFVO0FBRnVDLEdBQXhDLENBQUQsQ0FGWjs7QUFPQSxNQUFNQyxXQUFXLENBQUMsNkJBQUQsQ0FBakI7O0FBRUEsTUFBSSxDQUFDUixPQUFMLEVBQWM7QUFDWkcsWUFBUU0sSUFBUixDQUFhLElBQUlkLFFBQVFTLFFBQVIsQ0FBaUJNLGNBQXJCLENBQW9DO0FBQy9DQyxpQkFBVztBQURvQyxLQUFwQyxDQUFiO0FBSUQsR0FMRCxNQUtPO0FBQ0xSLFlBQVFNLElBQVIsQ0FBYSxJQUFJZCxRQUFRaUIsMEJBQVosRUFBYjs7QUFFQUosYUFBU0ssTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQiwrQkFBdEI7QUFDRDs7QUFFRCxTQUFPO0FBQ0xDLFlBQVEsS0FESDs7QUFHTEMsV0FBTztBQUNMQyxtQkFBYVIsUUFEUjtBQUVMUyxjQUFRbkI7QUFGSCxLQUhGOztBQVFMb0IsWUFBUTtBQUNOWCxnQkFBVSxXQURKO0FBRU5kLFlBQU1BLEtBQUswQixJQUFMLENBQVV2QixPQUFWLEVBQW1CLFFBQW5CLEVBQTZCLE9BQTdCLENBRkE7QUFHTndCLGtCQUFZO0FBSE4sS0FSSDs7QUFjTHZCLGFBQVM7QUFDUHdCLGFBQU87QUFDTEMsZ0JBQVE3QixLQUFLMEIsSUFBTCxDQUFVdkIsT0FBVixFQUFtQixLQUFuQixFQUEwQixRQUExQjtBQURIO0FBREEsS0FkSjs7QUFvQkwyQixZQUFRO0FBQ05DLGFBQU8sQ0FDTDtBQUNFQyxjQUFNLE9BRFI7QUFFRUMsaUJBQVMsY0FGWDtBQUdFQyxnQkFBUTtBQUhWLE9BREssRUFPTDtBQUNFRixjQUFNLE9BRFI7QUFFRUMsaUJBQVMsY0FGWDtBQUdFQyxnQkFBUTtBQUhWLE9BUEs7QUFERCxLQXBCSDs7QUFvQ0xDLGFBQVMzQixPQXBDSjs7QUFzQ0xDLGVBQVdBLFNBdENOOztBQXdDTEMsYUFBU0E7QUF4Q0osR0FBUDtBQTBDRDs7QUFFRG9CLE9BQU9NLE9BQVAsR0FBaUI5QixZQUFqQiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSxcclxuICB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpLFxyXG4gIGRpcm5hbWUgPSBwYXRoLnJlc29sdmUoJy4vJyk7XHJcblxyXG5jb25zdCB2ZW5kb3JNb2R1bGVzID0gWydqcXVlcnknLCAnYWZyYW1lJ107XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb25maWcoaXNEZWJ1Zykge1xyXG4gIGNvbnN0IGRldlRvb2wgPSAoaXNEZWJ1ZykgPyAnZXZhbC1zb3VyY2UtbWFwJyA6ICdzb3VyY2UtbWFwJztcclxuXHJcbiAgY29uc3QgZXh0ZXJuYWxzID0gW10sXHJcblxyXG4gICAgcGx1Z2lucyA9IFtuZXcgd2VicGFjay5vcHRpbWl6ZS5Db21tb25zQ2h1bmtQbHVnaW4oe1xyXG4gICAgICBuYW1lOiAndmVuZG9yJyxcclxuICAgICAgZmlsZW5hbWU6ICd2ZW5kb3IuanMnXHJcbiAgICB9KV07XHJcblxyXG4gIGNvbnN0IGFwcEVudHJ5ID0gWycuL3NyYy9jbGllbnQvYXBwbGljYXRpb24uanMnXTtcclxuXHJcbiAgaWYgKCFpc0RlYnVnKSB7XHJcbiAgICBwbHVnaW5zLnB1c2gobmV3IHdlYnBhY2sub3B0aW1pemUuVWdsaWZ5SnNQbHVnaW4oe1xyXG4gICAgICBzb3VyY2VNYXA6IHRydWVcclxuICAgIH0pKTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHBsdWdpbnMucHVzaChuZXcgd2VicGFjay5Ib3RNb2R1bGVSZXBsYWNlbWVudFBsdWdpbigpKTtcclxuXHJcbiAgICBhcHBFbnRyeS5zcGxpY2UoMCwgMCwgJ3dlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdGFyZ2V0OiAnd2ViJyxcclxuXHJcbiAgICBlbnRyeToge1xyXG4gICAgICBhcHBsaWNhdGlvbjogYXBwRW50cnksXHJcbiAgICAgIHZlbmRvcjogdmVuZG9yTW9kdWxlc1xyXG4gICAgfSxcclxuXHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgZmlsZW5hbWU6ICdbbmFtZV0uanMnLFxyXG4gICAgICBwYXRoOiBwYXRoLmpvaW4oZGlybmFtZSwgJ3B1YmxpYycsICdidWlsZCcpLFxyXG4gICAgICBwdWJsaWNQYXRoOiAnL2J1aWxkLydcclxuICAgIH0sXHJcblxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIHNoYXJlZDogcGF0aC5qb2luKGRpcm5hbWUsICdzcmMnLCAnc2hhcmVkJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtb2R1bGU6IHtcclxuICAgICAgcnVsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXN0OiAvXFwuanMkLyxcclxuICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxyXG4gICAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxyXG4gICAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXHJcbiAgICAgICAgICBsb2FkZXI6ICdlc2xpbnQtbG9hZGVyJyxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAgZGV2dG9vbDogZGV2VG9vbCxcclxuXHJcbiAgICBleHRlcm5hbHM6IGV4dGVybmFscyxcclxuXHJcbiAgICBwbHVnaW5zOiBwbHVnaW5zXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2VicGFjay5jbGllbnQuY29uZmlnLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);