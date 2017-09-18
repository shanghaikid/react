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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(2);

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = __webpack_require__(3);

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _root = __webpack_require__(4);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('Env:', process.env.NODE_ENV);

// create koa server
var app = new _koa2.default();
// use logger, routes
app.use((0, _koaLogger2.default)()).use(_root2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(5);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBetterStatic = __webpack_require__(6);

var _koaBetterStatic2 = _interopRequireDefault(_koaBetterStatic);

__webpack_require__(8);

var _templates = __webpack_require__(7);

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create router
var router = new _koaRouter2.default();
// static assets
router.get('/*', (0, _koaBetterStatic2.default)('.'));

// root
router.get('/', async function (ctx, next) {
    ctx.startTime = process.hrtime();
    ctx.title = 'root title';
    ctx.body = (0, _templates2.default)(ctx);
});

// test path
router.get('/test', async function (ctx, next) {
    ctx.body = 'get /test2';
});

exports.default = router;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-better-static2");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// default page tempalate
var page = function page(ctx) {
    return "<!doctype html>\n<html lang=\"en\">\n    " + header_tpl(ctx) + "\n    " + body_tpl(ctx) + "\n\n    <script>\n        App.render(\n            document.getElementById('root'),\n            '<h1>hello2</h1>'\n                    );\n    </script>\n\n    " + footer_tpl(ctx) + "\n</html>";
};

exports.default = page;

// body template

var body_tpl = exports.body_tpl = function body_tpl() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$body = _ref.body,
        body = _ref$body === undefined ? "<div class=\"loading\"></div><div id=\"root\"></div>" : _ref$body;

    return "<body>" + body + "</body>";
};

// header template
var header_tpl = exports.header_tpl = function header_tpl() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$title = _ref2.title,
        title = _ref2$title === undefined ? "serverTemplate" : _ref2$title,
        _ref2$charset = _ref2.charset,
        charset = _ref2$charset === undefined ? "UTF-8" : _ref2$charset,
        _ref2$cssHref = _ref2.cssHref,
        cssHref = _ref2$cssHref === undefined ? "public/css/style.css" : _ref2$cssHref,
        _ref2$scriptSrc = _ref2.scriptSrc,
        scriptSrc = _ref2$scriptSrc === undefined ? "public/index.js" : _ref2$scriptSrc;

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n    <script src=\"" + scriptSrc + "\"></script>\n</head>";
};

// footer template
var footer_tpl = exports.footer_tpl = function footer_tpl(_ref3) {
    var startTime = _ref3.startTime;

    if (typeof startTime === 'undefined') {
        return '';
    }
    var NS_PER_SEC = 1e9;
    var diff = process.hrtime(startTime);

    return "<footer>\n            <small>Page generate time: " + (diff[0] * NS_PER_SEC + diff[1]) + " nanoseconds</small>\n            </footer>";
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAwMmY1Mzk4ZTYwOGM0YTUxMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiY29uc29sZSIsImluZm8iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJ1c2UiLCJyb3V0ZXMiLCJhbGxvd2VkTWV0aG9kcyIsImxpc3RlbiIsInJvdXRlciIsImdldCIsImN0eCIsIm5leHQiLCJzdGFydFRpbWUiLCJocnRpbWUiLCJ0aXRsZSIsImJvZHkiLCJwYWdlIiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImNoYXJzZXQiLCJjc3NIcmVmIiwic2NyaXB0U3JjIiwiTlNfUEVSX1NFQyIsImRpZmYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQUEsUUFBUUMsSUFBUixDQUFhLE1BQWIsRUFBcUJDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBakM7O0FBRUE7QUFDQSxJQUFNQyxNQUFNLG1CQUFaO0FBQ0E7QUFDQUEsSUFBSUMsR0FBSixDQUFRLDBCQUFSLEVBQ0tBLEdBREwsQ0FDUyxlQUFLQyxNQUFMLEVBRFQsRUFFS0QsR0FGTCxDQUVTLGVBQUtFLGNBQUwsRUFGVCxFQUdLQyxNQUhMLENBR1ksSUFIWixFOzs7Ozs7QUNSQSxnQzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsU0FBUyx5QkFBZjtBQUNBO0FBQ0FBLE9BQU9DLEdBQVAsQ0FBVyxJQUFYLEVBQWlCLCtCQUFNLEdBQU4sQ0FBakI7O0FBRUE7QUFDQUQsT0FBT0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0IsZ0JBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDdkNELFFBQUlFLFNBQUosR0FBZ0JaLFFBQVFhLE1BQVIsRUFBaEI7QUFDQUgsUUFBSUksS0FBSixHQUFZLFlBQVo7QUFDQUosUUFBSUssSUFBSixHQUFXLHlCQUFLTCxHQUFMLENBQVg7QUFDSCxDQUpEOztBQU1BO0FBQ0FGLE9BQU9DLEdBQVAsQ0FBVyxPQUFYLEVBQW9CLGdCQUFnQkMsR0FBaEIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQzNDRCxRQUFJSyxJQUFKLEdBQVcsWUFBWDtBQUNILENBRkQ7O2tCQUllUCxNOzs7Ozs7QUN0QmYsdUM7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQU1RLE9BQU8sU0FBUEEsSUFBTyxDQUFDTixHQUFEO0FBQUEseURBRVBPLFdBQVdQLEdBQVgsQ0FGTyxjQUdQUSxTQUFTUixHQUFULENBSE8seUtBWVBTLFdBQVdULEdBQVgsQ0FaTztBQUFBLENBQWI7O2tCQWVlTSxJOztBQUVmOztBQUNPLElBQU1FLDhCQUFXLFNBQVhBLFFBQVcsR0FBa0U7QUFBQSxtRkFBUCxFQUFPO0FBQUEseUJBQWhFSCxJQUFnRTtBQUFBLFFBQWhFQSxJQUFnRTs7QUFDdEYsc0JBQWdCQSxJQUFoQjtBQUNILENBRk07O0FBSVA7QUFDTyxJQUFNRSxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsb0ZBQXdHLEVBQXhHO0FBQUEsNEJBQUVILEtBQUY7QUFBQSxRQUFFQSxLQUFGLCtCQUFRLGdCQUFSO0FBQUEsOEJBQTBCTSxPQUExQjtBQUFBLFFBQTBCQSxPQUExQixpQ0FBa0MsT0FBbEM7QUFBQSw4QkFBMkNDLE9BQTNDO0FBQUEsUUFBMkNBLE9BQTNDLGlDQUFtRCxzQkFBbkQ7QUFBQSxnQ0FBMkVDLFNBQTNFO0FBQUEsUUFBMkVBLFNBQTNFLG1DQUFxRixpQkFBckY7O0FBQUEsNENBQ0xGLE9BREsseUJBRWJOLEtBRmEsd0VBR3lCTyxPQUh6QixpQ0FJUEMsU0FKTztBQUFBLENBQW5COztBQU9QO0FBQ08sSUFBTUgsa0NBQWEsU0FBYkEsVUFBYSxRQUFpQjtBQUFBLFFBQWZQLFNBQWUsU0FBZkEsU0FBZTs7QUFDdkMsUUFBSSxPQUFPQSxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLGVBQU8sRUFBUDtBQUNIO0FBQ0QsUUFBTVcsYUFBYSxHQUFuQjtBQUNBLFFBQU1DLE9BQU94QixRQUFRYSxNQUFSLENBQWVELFNBQWYsQ0FBYjs7QUFFQSxrRUFDcUNZLEtBQUssQ0FBTCxJQUFVRCxVQUFWLEdBQXVCQyxLQUFLLENBQUwsQ0FENUQ7QUFHSCxDQVZNLEM7Ozs7OztBQ2hDUCx5QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMDAyZjUzOThlNjA4YzRhNTExYyIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL3JvdXRlcy9yb290J1xuY29uc29sZS5pbmZvKCdFbnY6JywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG4vLyBjcmVhdGUga29hIHNlcnZlclxuY29uc3QgYXBwID0gbmV3IEtvYSgpOyBcbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCAnY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gJ3Jvb3QgdGl0bGUnO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJldHRlci1zdGF0aWMyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cblxuICAgIDxzY3JpcHQ+XG4gICAgICAgIEFwcC5yZW5kZXIoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxuICAgICAgICAgICAgJzxoMT5oZWxsbzI8L2gxPidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICA8L3NjcmlwdD5cblxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBjbGFzcz1cImxvYWRpbmdcIj48L2Rpdj48ZGl2IGlkPVwicm9vdFwiPjwvZGl2PmB9PXt9KSA9PiB7XG4gICAgcmV0dXJuIGA8Ym9keT4ke2JvZHl9PC9ib2R5PmA7XG59XG5cbi8vIGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGhlYWRlcl90cGwgPSAoe3RpdGxlPVwic2VydmVyVGVtcGxhdGVcIiwgY2hhcnNldD1cIlVURi04XCIsIGNzc0hyZWY9XCJwdWJsaWMvY3NzL3N0eWxlLmNzc1wiLCBzY3JpcHRTcmM9XCJwdWJsaWMvaW5kZXguanNcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NIcmVmfVwiIC8+XG4gICAgPHNjcmlwdCBzcmM9XCIke3NjcmlwdFNyY31cIj48L3NjcmlwdD5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wdWJsaWMvY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==