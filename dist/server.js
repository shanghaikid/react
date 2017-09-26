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
app.use((0, _koaLogger2.default)()).use(async function (ctx, next) {
    if (process.env.NODE_ENV === 'dev') {
        ctx.env = process.env.NODE_ENV;
    }
    await next();
}).use(_root2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

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
    ctx.title = 'let\'s feel electricity';
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
    return "<!doctype html>\n<html lang=\"en\">\n    " + header_tpl(ctx) + "\n    " + body_tpl(ctx) + "\n    " + footer_tpl(ctx) + "\n    <script src=\"/public/index.js\"></script>\n</html>";
};

exports.default = page;

// body template

var body_tpl = exports.body_tpl = function body_tpl() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$body = _ref.body,
        body = _ref$body === undefined ? "<div id=\"root\"></div>" : _ref$body;

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
        cssHref = _ref2$cssHref === undefined ? "public/css/style.css" : _ref2$cssHref;

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <script src=\"/public/js/react.min.js\"></script>\n    <script src=\"/public/js/react-dom.min.js\"></script>\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n</head>";
};

// footer template
var footer_tpl = exports.footer_tpl = function footer_tpl(_ref3) {
    var startTime = _ref3.startTime;

    if (typeof startTime === 'undefined') {
        return '';
    }
    var NS_PER_SEC = 1e9;
    var diff = process.hrtime(startTime);

    return "\n            <footer>\n                <small>Page generate time: " + (diff[0] * NS_PER_SEC + diff[1]) + " nanoseconds</small>\n            </footer>";
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDAzZDBiOGJmMTVhOWNhODA5NWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYXBwIiwidXNlIiwiY3R4IiwibmV4dCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIiwicm91dGVyIiwiZ2V0Iiwic3RhcnRUaW1lIiwiaHJ0aW1lIiwidGl0bGUiLCJib2R5IiwicGFnZSIsImhlYWRlcl90cGwiLCJib2R5X3RwbCIsImZvb3Rlcl90cGwiLCJjaGFyc2V0IiwiY3NzSHJlZiIsIk5TX1BFUl9TRUMiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0FBLFFBQVFDLElBQVIsQ0FBYSxNQUFiLEVBQXFCQyxRQUFRQyxHQUFSLENBQVlDLFFBQWpDOztBQUVBO0FBQ0EsSUFBTUMsTUFBTSxtQkFBWjtBQUNBO0FBQ0FBLElBQUlDLEdBQUosQ0FBUSwwQkFBUixFQUNLQSxHQURMLENBQ1MsZ0JBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDNUIsUUFBSU4sUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLEtBQTdCLEVBQW9DO0FBQ2hDRyxZQUFJSixHQUFKLEdBQVVELFFBQVFDLEdBQVIsQ0FBWUMsUUFBdEI7QUFDSDtBQUNELFVBQU1JLE1BQU47QUFDSCxDQU5MLEVBT0tGLEdBUEwsQ0FPUyxlQUFLRyxNQUFMLEVBUFQsRUFRS0gsR0FSTCxDQVFTLGVBQUtJLGNBQUwsRUFSVCxFQVNLQyxNQVRMLENBU1ksSUFUWixFOzs7Ozs7QUNSQSxnQzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsU0FBUyx5QkFBZjtBQUNBO0FBQ0FBLE9BQU9DLEdBQVAsQ0FBVyxJQUFYLEVBQWlCLCtCQUFNLEdBQU4sQ0FBakI7O0FBRUE7QUFDQUQsT0FBT0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0IsZ0JBQWdCTixHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDdkNELFFBQUlPLFNBQUosR0FBZ0JaLFFBQVFhLE1BQVIsRUFBaEI7QUFDQVIsUUFBSVMsS0FBSjtBQUNBVCxRQUFJVSxJQUFKLEdBQVcseUJBQUtWLEdBQUwsQ0FBWDtBQUNILENBSkQ7O0FBTUE7QUFDQUssT0FBT0MsR0FBUCxDQUFXLE9BQVgsRUFBb0IsZ0JBQWdCTixHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDM0NELFFBQUlVLElBQUosR0FBVyxZQUFYO0FBQ0gsQ0FGRDs7a0JBSWVMLE07Ozs7OztBQ3JCZix1Qzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBTU0sT0FBTyxTQUFQQSxJQUFPLENBQUNYLEdBQUQ7QUFBQSx5REFFUFksV0FBV1osR0FBWCxDQUZPLGNBR1BhLFNBQVNiLEdBQVQsQ0FITyxjQUlQYyxXQUFXZCxHQUFYLENBSk87QUFBQSxDQUFiOztrQkFRZVcsSTs7QUFFZjs7QUFDTyxJQUFNRSw4QkFBVyxTQUFYQSxRQUFXLEdBQXVDO0FBQUEsbUZBQVAsRUFBTztBQUFBLHlCQUFyQ0gsSUFBcUM7QUFBQSxRQUFyQ0EsSUFBcUM7O0FBQzNELHNCQUFnQkEsSUFBaEI7QUFDSCxDQUZNOztBQUlQO0FBQ08sSUFBTUUsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLG9GQUEyRSxFQUEzRTtBQUFBLDRCQUFFSCxLQUFGO0FBQUEsUUFBRUEsS0FBRiwrQkFBUSxnQkFBUjtBQUFBLDhCQUEwQk0sT0FBMUI7QUFBQSxRQUEwQkEsT0FBMUIsaUNBQWtDLE9BQWxDO0FBQUEsOEJBQTJDQyxPQUEzQztBQUFBLFFBQTJDQSxPQUEzQyxpQ0FBbUQsc0JBQW5EOztBQUFBLDRDQUNMRCxPQURLLHlCQUViTixLQUZhLDRMQU15Qk8sT0FOekI7QUFBQSxDQUFuQjs7QUFTUDtBQUNPLElBQU1GLGtDQUFhLFNBQWJBLFVBQWEsUUFBaUI7QUFBQSxRQUFmUCxTQUFlLFNBQWZBLFNBQWU7O0FBQ3ZDLFFBQUksT0FBT0EsU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyxlQUFPLEVBQVA7QUFDSDtBQUNELFFBQU1VLGFBQWEsR0FBbkI7QUFDQSxRQUFNQyxPQUFPdkIsUUFBUWEsTUFBUixDQUFlRCxTQUFmLENBQWI7O0FBRUEsb0ZBRXlDVyxLQUFLLENBQUwsSUFBVUQsVUFBVixHQUF1QkMsS0FBSyxDQUFMLENBRmhFO0FBSUgsQ0FYTSxDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwM2QwYjhiZjE1YTljYTgwOTVjIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnXG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuLy8gdXNlIGxvZ2dlciwgcm91dGVzXG5hcHAudXNlKGxvZ2dlcigpKVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnKSB7XG4gICAgICAgICAgICBjdHguZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH0pXG4gICAgLnVzZShyb290LnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5hbGxvd2VkTWV0aG9kcygpKVxuICAgIC5saXN0ZW4oMzAwMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWxvZ2dlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IHNlcnZlIGZyb20gJ2tvYS1iZXR0ZXItc3RhdGljMic7XG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcblxuLy8gY3JlYXRlIHJvdXRlclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuLy8gc3RhdGljIGFzc2V0c1xucm91dGVyLmdldCgnLyonLCBzZXJ2ZSgnLicpKTtcblxuLy8gcm9vdFxucm91dGVyLmdldCgnLycsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguc3RhcnRUaW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcbiAgICBjdHgudGl0bGUgPSBgbGV0J3MgZmVlbCBlbGVjdHJpY2l0eWA7XG4gICAgY3R4LmJvZHkgPSBwYWdlKGN0eCk7XG59KTtcblxuLy8gdGVzdCBwYXRoXG5yb3V0ZXIuZ2V0KCcvdGVzdCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguYm9keSA9ICdnZXQgL3Rlc3QyJztcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0hyZWZ9XCIgLz5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=