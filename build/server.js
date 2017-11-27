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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_map_support_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_source_map_support_register__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);\n\n\n\n\n\n\nvar isDevelopment = process.env.NODE_ENV !== 'production';\n\n/*\r\n * socket\r\n */\nvar app = __WEBPACK_IMPORTED_MODULE_2_express___default()();\nvar server = new __WEBPACK_IMPORTED_MODULE_3_http___default.a.Server(app);\n\n/*\r\n * client webpack\r\n */\nif (process.env.USE_WEBPACK === 'true') {\n  var webpackMiddleware = __webpack_require__(6),\n      webpackHotMiddleware = __webpack_require__(7),\n      webpack = __webpack_require__(0),\n      clientConfig = __webpack_require__(8);\n\n  var compiler = webpack(clientConfig(true));\n\n  app.use(webpackMiddleware(compiler, {\n    publicPath: '/build/',\n    stats: {\n      colors: true,\n      chunks: false,\n      assets: false,\n      timings: false,\n      modules: false,\n      hash: false,\n      version: false\n    }\n  }));\n\n  app.use(webpackHotMiddleware(compiler));\n\n  console.log(__WEBPACK_IMPORTED_MODULE_1_chalk___default.a.bgRed('Using Webpack Dev MiddleWare. this is for dev only.'));\n}\n\n/*\r\n * configuration\r\n */\napp.set('view engine', 'pug');\n\napp.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static('public'));\n\nvar useExternalStyles = !isDevelopment;\n\napp.get('/', function (req, res) {\n  // res.send('<h1>oh yes</h1>');\n\n  res.render('index', {\n    useExternalStyles: useExternalStyles\n  });\n});\n\n/*\r\n * start server\r\n */\nvar port = process.env.port || 3000;\n\nfunction startServer() {\n  server.listen(port, function () {\n    console.log('oh yes baby');\n  });\n}\n\nstartServer();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci5qcz9iNTllIl0sIm5hbWVzIjpbImlzRGV2ZWxvcG1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJleHByZXNzIiwic2VydmVyIiwiaHR0cCIsIlNlcnZlciIsIlVTRV9XRUJQQUNLIiwid2VicGFja01pZGRsZXdhcmUiLCJyZXF1aXJlIiwid2VicGFja0hvdE1pZGRsZXdhcmUiLCJ3ZWJwYWNrIiwiY2xpZW50Q29uZmlnIiwiY29tcGlsZXIiLCJ1c2UiLCJwdWJsaWNQYXRoIiwic3RhdHMiLCJjb2xvcnMiLCJjaHVua3MiLCJhc3NldHMiLCJ0aW1pbmdzIiwibW9kdWxlcyIsImhhc2giLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiYmdSZWQiLCJzZXQiLCJzdGF0aWMiLCJ1c2VFeHRlcm5hbFN0eWxlcyIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInBvcnQiLCJzdGFydFNlcnZlciIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFpQkMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQWhEOztBQUVBOzs7QUFHQSxJQUFNQyxNQUFNLCtDQUFBQyxFQUFaO0FBQ0EsSUFBTUMsU0FBUyxJQUFJLDRDQUFBQyxDQUFLQyxNQUFULENBQWdCSixHQUFoQixDQUFmOztBQUVBOzs7QUFHQSxJQUFJSCxRQUFRQyxHQUFSLENBQVlPLFdBQVosS0FBNEIsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsb0JBQW9CLG1CQUFBQyxDQUFRLENBQVIsQ0FBMUI7QUFBQSxNQUNFQyx1QkFBdUIsbUJBQUFELENBQVEsQ0FBUixDQUR6QjtBQUFBLE1BRUVFLFVBQVUsbUJBQUFGLENBQVEsQ0FBUixDQUZaO0FBQUEsTUFHRUcsZUFBZSxtQkFBQUgsQ0FBUSxDQUFSLENBSGpCOztBQUtBLE1BQU1JLFdBQVdGLFFBQVFDLGFBQWEsSUFBYixDQUFSLENBQWpCOztBQUVBVixNQUFJWSxHQUFKLENBQVFOLGtCQUFrQkssUUFBbEIsRUFBNEI7QUFDbENFLGdCQUFZLFNBRHNCO0FBRWxDQyxXQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxjQUFRLEtBRkg7QUFHTEMsY0FBUSxLQUhIO0FBSUxDLGVBQVMsS0FKSjtBQUtMQyxlQUFTLEtBTEo7QUFNTEMsWUFBTSxLQU5EO0FBT0xDLGVBQVM7QUFQSjtBQUYyQixHQUE1QixDQUFSOztBQWFBckIsTUFBSVksR0FBSixDQUFRSixxQkFBcUJHLFFBQXJCLENBQVI7O0FBRUFXLFVBQVFDLEdBQVIsQ0FBWSw2Q0FBQUMsQ0FBTUMsS0FBTixDQUFZLHFEQUFaLENBQVo7QUFDRDs7QUFFRDs7O0FBR0F6QixJQUFJMEIsR0FBSixDQUFRLGFBQVIsRUFBdUIsS0FBdkI7O0FBRUExQixJQUFJWSxHQUFKLENBQVEsK0NBQUFYLENBQVEwQixNQUFSLENBQWUsUUFBZixDQUFSOztBQUVBLElBQU1DLG9CQUFvQixDQUFDaEMsYUFBM0I7O0FBRUFJLElBQUk2QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMvQjs7QUFFQUEsTUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0I7QUFDbEJKO0FBRGtCLEdBQXBCO0FBR0QsQ0FORDs7QUFRQTs7O0FBR0EsSUFBTUssT0FBT3BDLFFBQVFDLEdBQVIsQ0FBWW1DLElBQVosSUFBb0IsSUFBakM7O0FBRUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQmhDLFNBQU9pQyxNQUFQLENBQWNGLElBQWQsRUFBb0IsWUFBTTtBQUN4QlgsWUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDRCxHQUZEO0FBR0Q7O0FBRURXIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcblxyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcblxyXG5jb25zdCBpc0RldmVsb3BtZW50ID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpO1xyXG5cclxuLypcclxuICogc29ja2V0XHJcbiAqL1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IHNlcnZlciA9IG5ldyBodHRwLlNlcnZlcihhcHApO1xyXG5cclxuLypcclxuICogY2xpZW50IHdlYnBhY2tcclxuICovXHJcbmlmIChwcm9jZXNzLmVudi5VU0VfV0VCUEFDSyA9PT0gJ3RydWUnKSB7XHJcbiAgY29uc3Qgd2VicGFja01pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWRldi1taWRkbGV3YXJlJyksXHJcbiAgICB3ZWJwYWNrSG90TWlkZGxld2FyZSA9IHJlcXVpcmUoJ3dlYnBhY2staG90LW1pZGRsZXdhcmUnKSxcclxuICAgIHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyksXHJcbiAgICBjbGllbnRDb25maWcgPSByZXF1aXJlKCcuLi8uLi93ZWJwYWNrLmNsaWVudC5jb25maWcnKTtcclxuXHJcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKGNsaWVudENvbmZpZyh0cnVlKSk7XHJcblxyXG4gIGFwcC51c2Uod2VicGFja01pZGRsZXdhcmUoY29tcGlsZXIsIHtcclxuICAgIHB1YmxpY1BhdGg6ICcvYnVpbGQvJyxcclxuICAgIHN0YXRzOiB7XHJcbiAgICAgIGNvbG9yczogdHJ1ZSxcclxuICAgICAgY2h1bmtzOiBmYWxzZSxcclxuICAgICAgYXNzZXRzOiBmYWxzZSxcclxuICAgICAgdGltaW5nczogZmFsc2UsXHJcbiAgICAgIG1vZHVsZXM6IGZhbHNlLFxyXG4gICAgICBoYXNoOiBmYWxzZSxcclxuICAgICAgdmVyc2lvbjogZmFsc2VcclxuICAgIH1cclxuICB9KSk7XHJcblxyXG4gIGFwcC51c2Uod2VicGFja0hvdE1pZGRsZXdhcmUoY29tcGlsZXIpKTtcclxuXHJcbiAgY29uc29sZS5sb2coY2hhbGsuYmdSZWQoJ1VzaW5nIFdlYnBhY2sgRGV2IE1pZGRsZVdhcmUuIHRoaXMgaXMgZm9yIGRldiBvbmx5LicpKTtcclxufVxyXG5cclxuLypcclxuICogY29uZmlndXJhdGlvblxyXG4gKi9cclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7XHJcblxyXG5jb25zdCB1c2VFeHRlcm5hbFN0eWxlcyA9ICFpc0RldmVsb3BtZW50O1xyXG5cclxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIHJlcy5zZW5kKCc8aDE+b2ggeWVzPC9oMT4nKTtcclxuXHJcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XHJcbiAgICB1c2VFeHRlcm5hbFN0eWxlc1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqIHN0YXJ0IHNlcnZlclxyXG4gKi9cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LnBvcnQgfHwgMzAwMDtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xyXG4gIHNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ29oIHllcyBiYWJ5Jyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnN0YXJ0U2VydmVyKCk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3NlcnZlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

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

eval("var path = __webpack_require__(9),\n    webpack = __webpack_require__(0),\n    dirname = path.resolve('./');\n\nvar vendorModules = ['jquery'];\n\nfunction createConfig(isDebug) {\n  var devTool = isDebug ? 'eval-source-map' : 'source-map';\n\n  var externals = [],\n      plugins = [new webpack.optimize.CommonsChunkPlugin({\n    name: 'vendor',\n    filename: 'vendor.js'\n  })];\n\n  var appEntry = ['./src/client/application.js'];\n\n  if (!isDebug) {\n    plugins.push(new webpack.optimize.UglifyJsPlugin({\n      sourceMap: true\n    }));\n  } else {\n    plugins.push(new webpack.HotModuleReplacementPlugin());\n\n    appEntry.splice(0, 0, 'webpack-hot-middleware/client');\n  }\n\n  return {\n    target: 'web',\n\n    entry: {\n      application: appEntry,\n      vendor: vendorModules\n    },\n\n    output: {\n      filename: '[name].js',\n      path: path.join(dirname, 'public', 'build'),\n      publicPath: '/build/'\n    },\n\n    resolve: {\n      alias: {\n        shared: path.join(dirname, 'src', 'shared')\n      }\n    },\n\n    module: {\n      rules: [{\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel-loader'\n      }, {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'eslint-loader'\n      }]\n    },\n\n    devtool: devTool,\n\n    externals: externals,\n\n    plugins: plugins\n  };\n}\n\nmodule.exports = createConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNsaWVudC5jb25maWcuanM/YmNjNSJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIndlYnBhY2siLCJkaXJuYW1lIiwicmVzb2x2ZSIsInZlbmRvck1vZHVsZXMiLCJjcmVhdGVDb25maWciLCJpc0RlYnVnIiwiZGV2VG9vbCIsImV4dGVybmFscyIsInBsdWdpbnMiLCJvcHRpbWl6ZSIsIkNvbW1vbnNDaHVua1BsdWdpbiIsIm5hbWUiLCJmaWxlbmFtZSIsImFwcEVudHJ5IiwicHVzaCIsIlVnbGlmeUpzUGx1Z2luIiwic291cmNlTWFwIiwiSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4iLCJzcGxpY2UiLCJ0YXJnZXQiLCJlbnRyeSIsImFwcGxpY2F0aW9uIiwidmVuZG9yIiwib3V0cHV0Iiwiam9pbiIsInB1YmxpY1BhdGgiLCJhbGlhcyIsInNoYXJlZCIsIm1vZHVsZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJkZXZ0b29sIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsT0FBTyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7QUFBQSxJQUNFQyxVQUFVLG1CQUFBRCxDQUFRLENBQVIsQ0FEWjtBQUFBLElBRUVFLFVBQVVILEtBQUtJLE9BQUwsQ0FBYSxJQUFiLENBRlo7O0FBSUEsSUFBTUMsZ0JBQWdCLENBQUMsUUFBRCxDQUF0Qjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUM3QixNQUFNQyxVQUFXRCxPQUFELEdBQVksaUJBQVosR0FBZ0MsWUFBaEQ7O0FBRUEsTUFBTUUsWUFBWSxFQUFsQjtBQUFBLE1BRUVDLFVBQVUsQ0FBQyxJQUFJUixRQUFRUyxRQUFSLENBQWlCQyxrQkFBckIsQ0FBd0M7QUFDakRDLFVBQU0sUUFEMkM7QUFFakRDLGNBQVU7QUFGdUMsR0FBeEMsQ0FBRCxDQUZaOztBQU9BLE1BQU1DLFdBQVcsQ0FBQyw2QkFBRCxDQUFqQjs7QUFFQSxNQUFJLENBQUNSLE9BQUwsRUFBYztBQUNaRyxZQUFRTSxJQUFSLENBQWEsSUFBSWQsUUFBUVMsUUFBUixDQUFpQk0sY0FBckIsQ0FBb0M7QUFDL0NDLGlCQUFXO0FBRG9DLEtBQXBDLENBQWI7QUFJRCxHQUxELE1BS087QUFDTFIsWUFBUU0sSUFBUixDQUFhLElBQUlkLFFBQVFpQiwwQkFBWixFQUFiOztBQUVBSixhQUFTSyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLCtCQUF0QjtBQUNEOztBQUVELFNBQU87QUFDTEMsWUFBUSxLQURIOztBQUdMQyxXQUFPO0FBQ0xDLG1CQUFhUixRQURSO0FBRUxTLGNBQVFuQjtBQUZILEtBSEY7O0FBUUxvQixZQUFRO0FBQ05YLGdCQUFVLFdBREo7QUFFTmQsWUFBTUEsS0FBSzBCLElBQUwsQ0FBVXZCLE9BQVYsRUFBbUIsUUFBbkIsRUFBNkIsT0FBN0IsQ0FGQTtBQUdOd0Isa0JBQVk7QUFITixLQVJIOztBQWNMdkIsYUFBUztBQUNQd0IsYUFBTztBQUNMQyxnQkFBUTdCLEtBQUswQixJQUFMLENBQVV2QixPQUFWLEVBQW1CLEtBQW5CLEVBQTBCLFFBQTFCO0FBREg7QUFEQSxLQWRKOztBQW9CTDJCLFlBQVE7QUFDTkMsYUFBTyxDQUNMO0FBQ0VDLGNBQU0sT0FEUjtBQUVFQyxpQkFBUyxjQUZYO0FBR0VDLGdCQUFRO0FBSFYsT0FESyxFQU9MO0FBQ0VGLGNBQU0sT0FEUjtBQUVFQyxpQkFBUyxjQUZYO0FBR0VDLGdCQUFRO0FBSFYsT0FQSztBQURELEtBcEJIOztBQW9DTEMsYUFBUzNCLE9BcENKOztBQXNDTEMsZUFBV0EsU0F0Q047O0FBd0NMQyxhQUFTQTtBQXhDSixHQUFQO0FBMENEOztBQUVEb0IsT0FBT00sT0FBUCxHQUFpQjlCLFlBQWpCIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpLFxyXG4gIHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyksXHJcbiAgZGlybmFtZSA9IHBhdGgucmVzb2x2ZSgnLi8nKTtcclxuXHJcbmNvbnN0IHZlbmRvck1vZHVsZXMgPSBbJ2pxdWVyeSddO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29uZmlnKGlzRGVidWcpIHtcclxuICBjb25zdCBkZXZUb29sID0gKGlzRGVidWcpID8gJ2V2YWwtc291cmNlLW1hcCcgOiAnc291cmNlLW1hcCc7XHJcblxyXG4gIGNvbnN0IGV4dGVybmFscyA9IFtdLFxyXG5cclxuICAgIHBsdWdpbnMgPSBbbmV3IHdlYnBhY2sub3B0aW1pemUuQ29tbW9uc0NodW5rUGx1Z2luKHtcclxuICAgICAgbmFtZTogJ3ZlbmRvcicsXHJcbiAgICAgIGZpbGVuYW1lOiAndmVuZG9yLmpzJ1xyXG4gICAgfSldO1xyXG5cclxuICBjb25zdCBhcHBFbnRyeSA9IFsnLi9zcmMvY2xpZW50L2FwcGxpY2F0aW9uLmpzJ107XHJcblxyXG4gIGlmICghaXNEZWJ1Zykge1xyXG4gICAgcGx1Z2lucy5wdXNoKG5ldyB3ZWJwYWNrLm9wdGltaXplLlVnbGlmeUpzUGx1Z2luKHtcclxuICAgICAgc291cmNlTWFwOiB0cnVlXHJcbiAgICB9KSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBwbHVnaW5zLnB1c2gobmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSk7XHJcblxyXG4gICAgYXBwRW50cnkuc3BsaWNlKDAsIDAsICd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlL2NsaWVudCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRhcmdldDogJ3dlYicsXHJcblxyXG4gICAgZW50cnk6IHtcclxuICAgICAgYXBwbGljYXRpb246IGFwcEVudHJ5LFxyXG4gICAgICB2ZW5kb3I6IHZlbmRvck1vZHVsZXNcclxuICAgIH0sXHJcblxyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIGZpbGVuYW1lOiAnW25hbWVdLmpzJyxcclxuICAgICAgcGF0aDogcGF0aC5qb2luKGRpcm5hbWUsICdwdWJsaWMnLCAnYnVpbGQnKSxcclxuICAgICAgcHVibGljUGF0aDogJy9idWlsZC8nXHJcbiAgICB9LFxyXG5cclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICBzaGFyZWQ6IHBhdGguam9pbihkaXJuYW1lLCAnc3JjJywgJ3NoYXJlZCcpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW9kdWxlOiB7XHJcbiAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGVzdDogL1xcLmpzJC8sXHJcbiAgICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcclxuICAgICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXN0OiAvXFwuanMkLyxcclxuICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxyXG4gICAgICAgICAgbG9hZGVyOiAnZXNsaW50LWxvYWRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIGRldnRvb2w6IGRldlRvb2wsXHJcblxyXG4gICAgZXh0ZXJuYWxzOiBleHRlcm5hbHMsXHJcblxyXG4gICAgcGx1Z2luczogcGx1Z2luc1xyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYnBhY2suY2xpZW50LmNvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);