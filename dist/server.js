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

var _ws = __webpack_require__(8);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('Env:', process.env.NODE_ENV);

// create koa server
var app = new _koa2.default();
var wss = new _ws2.default.Server({ port: 8081 });

// use logger, routes
app.use((0, _koaLogger2.default)()).use(async function (ctx, next) {
    if (process.env.NODE_ENV === 'dev') {
        ctx.env = process.env.NODE_ENV;
    }
    await next();
}).use(_root2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

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
    ctx.title = 'E';
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

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <script src=\"/public/js/react.production.min.js\"></script>\n    <script src=\"/public/js/react-dom.production.min.js\"></script>\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n</head>";
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2I3MmY4OGVkNTY4MGUyZTJhNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndzXCIiXSwibmFtZXMiOlsiY29uc29sZSIsImluZm8iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJ3c3MiLCJTZXJ2ZXIiLCJwb3J0IiwidXNlIiwiY3R4IiwibmV4dCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIiwib24iLCJjb25uZWN0aW9uIiwid3MiLCJpbmNvbWluZyIsIm1lc3NhZ2UiLCJsb2ciLCJzZW5kIiwicm91dGVyIiwiZ2V0Iiwic3RhcnRUaW1lIiwiaHJ0aW1lIiwidGl0bGUiLCJib2R5IiwicGFnZSIsImhlYWRlcl90cGwiLCJib2R5X3RwbCIsImZvb3Rlcl90cGwiLCJjaGFyc2V0IiwiY3NzSHJlZiIsIk5TX1BFUl9TRUMiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7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QyxpQ0FBbUQsc0JBQW5EOztBQUFBLDRDQUNMRCxPQURLLHlCQUViTixLQUZhLGtOQU15Qk8sT0FOekI7QUFBQSxDQUFuQjs7QUFTUDtBQUNPLElBQU1GLGtDQUFhLFNBQWJBLFVBQWEsUUFBaUI7QUFBQSxRQUFmUCxTQUFlLFNBQWZBLFNBQWU7O0FBQ3ZDLFFBQUksT0FBT0EsU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyxlQUFPLEVBQVA7QUFDSDtBQUNELFFBQU1VLGFBQWEsR0FBbkI7QUFDQSxRQUFNQyxPQUFPakMsUUFBUXVCLE1BQVIsQ0FBZUQsU0FBZixDQUFiOztBQUVBLG9GQUV5Q1csS0FBSyxDQUFMLElBQVVELFVBQVYsR0FBdUJDLEtBQUssQ0FBTCxDQUZoRTtBQUlILENBWE0sQzs7Ozs7O0FDM0JQLCtCIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNiNzJmODhlZDU2ODBlMmUyYTQ2IiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnXG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuXG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgIH0pO1xuXG4gICAgd3Muc2VuZCgnc29tZXRoaW5nJyk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2EtYmV0dGVyLXN0YXRpYzInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gYEVgO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJldHRlci1zdGF0aWMyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvaW5kZXguanNcIj48L3NjcmlwdD5cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+YH09e30pID0+IHtcbiAgICByZXR1cm4gYDxib2R5PiR7Ym9keX08L2JvZHk+YDtcbn1cblxuLy8gaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgaGVhZGVyX3RwbCA9ICh7dGl0bGU9XCJzZXJ2ZXJUZW1wbGF0ZVwiLCBjaGFyc2V0PVwiVVRGLThcIiwgY3NzSHJlZj1cInB1YmxpYy9jc3Mvc3R5bGUuY3NzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=