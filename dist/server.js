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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 1 */
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

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <script src=\"/public/js/react.production.min.js\"></script>\n    <script src=\"/public/js/react-dom.production.min.js\"></script>\n    <script src=\"/public/js/core.min.js\"></script>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n</head>";
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(4);

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = __webpack_require__(5);

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _root = __webpack_require__(6);

var _root2 = _interopRequireDefault(_root);

var _seed = __webpack_require__(8);

var _seed2 = _interopRequireDefault(_seed);

var _login = __webpack_require__(11);

var _login2 = _interopRequireDefault(_login);

var _ws = __webpack_require__(10);

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
}).use(_login2.default.routes()).use(_root2.default.routes()).use(_seed2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBetterStatic = __webpack_require__(7);

var _koaBetterStatic2 = _interopRequireDefault(_koaBetterStatic);

var _templates = __webpack_require__(1);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-better-static2");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _templates = __webpack_require__(1);

var _templates2 = _interopRequireDefault(_templates);

var _stream = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create router
var router = new _koaRouter2.default();
var sse = function sse(dataObj) {
    return 'data: ' + JSON.stringify(dataObj) + '\n\n';
};

// root
router.get('/seed', async function (ctx, next) {
    var stream = new _stream.PassThrough();

    ctx.type = 'text/event-stream; charset=utf-8';
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Connection', 'keep-alive');

    function close() {
        ctx.res.end();
        clearInterval(update);
    }

    ctx.req.on('close', close);
    ctx.req.on('finish', close);
    ctx.req.on('error', close);

    var update = setInterval(function () {
        var dataObj = {
            time: new Date().getTime(),
            value: Math.random()
        };
        stream.write(sse(dataObj));
    }, 1000);

    ctx.body = stream;
});

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(0);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _templates = __webpack_require__(1);

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create router
var router = new _koaRouter2.default();
// root
router.get('/login', async function (ctx, next) {

    ctx.body = 'login';
});

exports.default = router;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg0ZTA1YmE0N2M2YmFiMGUzODYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJwYWdlIiwiY3R4IiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImJvZHkiLCJ0aXRsZSIsImNoYXJzZXQiLCJjc3NIcmVmIiwic3RhcnRUaW1lIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJwcm9jZXNzIiwiaHJ0aW1lIiwiY29uc29sZSIsImluZm8iLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJjbG9zZSIsInJlcyIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGUiLCJyZXEiLCJzZXRJbnRlcnZhbCIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIsIndyaXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEdBQUQ7QUFBQSx5REFFUEMsV0FBV0QsR0FBWCxDQUZPLGNBR1BFLFNBQVNGLEdBQVQsQ0FITyxjQUlQRyxXQUFXSCxHQUFYLENBSk87QUFBQSxDQUFiOztrQkFRZUQsSTs7QUFFZjs7QUFDTyxJQUFNRyw4QkFBVyxTQUFYQSxRQUFXLEdBQXVDO0FBQUEsbUZBQVAsRUFBTztBQUFBLHlCQUFyQ0UsSUFBcUM7QUFBQSxRQUFyQ0EsSUFBcUM7O0FBQzNELHNCQUFnQkEsSUFBaEI7QUFDSCxDQUZNOztBQUlQO0FBQ08sSUFBTUgsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLG9GQUEyRSxFQUEzRTtBQUFBLDRCQUFFSSxLQUFGO0FBQUEsUUFBRUEsS0FBRiwrQkFBUSxnQkFBUjtBQUFBLDhCQUEwQkMsT0FBMUI7QUFBQSxRQUEwQkEsT0FBMUIsaUNBQWtDLE9BQWxDO0FBQUEsOEJBQTJDQyxPQUEzQztBQUFBLFFBQTJDQSxPQUEzQyxpQ0FB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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ODRlMDViYTQ3YzZiYWIwZTM4NiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvaW5kZXguanNcIj48L3NjcmlwdD5cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+YH09e30pID0+IHtcbiAgICByZXR1cm4gYDxib2R5PiR7Ym9keX08L2JvZHk+YDtcbn1cblxuLy8gaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgaGVhZGVyX3RwbCA9ICh7dGl0bGU9XCJzZXJ2ZXJUZW1wbGF0ZVwiLCBjaGFyc2V0PVwiVVRGLThcIiwgY3NzSHJlZj1cInB1YmxpYy9jc3Mvc3R5bGUuY3NzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL2NvcmUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0hyZWZ9XCIgLz5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL3JvdXRlcy9yb290JztcbmltcG9ydCBzZWVkIGZyb20gJy4vcm91dGVzL3NlZWQnO1xuaW1wb3J0IGxvZ2luIGZyb20gJy4vcm91dGVzL2xvZ2luJztcblxuaW1wb3J0IFdlYlNvY2tldCBmcm9tICd3cyc7XG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKGxvZ2luLnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5yb3V0ZXMoKSlcbiAgICAudXNlKHNlZWQucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7UGFzc1Rocm91Z2h9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuY29uc3Qgc3NlID0gKGRhdGFPYmopID0+IHtcclxuICByZXR1cm4gYGRhdGE6ICR7IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH1cXG5cXG5gXHJcbn1cclxuXHJcbi8vIHJvb3Rcclxucm91dGVyLmdldCgnL3NlZWQnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcclxuXHJcbiAgICBjdHgudHlwZSA9ICd0ZXh0L2V2ZW50LXN0cmVhbTsgY2hhcnNldD11dGYtOCc7XHJcbiAgICBjdHguc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICBjdHguc2V0KCdDb25uZWN0aW9uJywgJ2tlZXAtYWxpdmUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgucmVxLm9uKCdjbG9zZScsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2ZpbmlzaCcsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2Vycm9yJywgY2xvc2UpO1xyXG5cclxuICAgIGxldCB1cGRhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFPYmogPSB7XHJcbiAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdHJlYW0ud3JpdGUoc3NlKGRhdGFPYmopKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGN0eC5ib2R5ID0gc3RyZWFtO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmVhbVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid3NcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcclxuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvbG9naW4nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblxyXG4gICAgY3R4LmJvZHkgPSAnbG9naW4nO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvbG9naW4uanMiXSwic291cmNlUm9vdCI6IiJ9