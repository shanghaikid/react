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
}).use(_root2.default.routes()).use(_seed2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQ4OTU2YzQzM2RmMjAyNWJkYjIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiJdLCJuYW1lcyI6WyJwYWdlIiwiY3R4IiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImJvZHkiLCJ0aXRsZSIsImNoYXJzZXQiLCJjc3NIcmVmIiwic3RhcnRUaW1lIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJwcm9jZXNzIiwiaHJ0aW1lIiwiY29uc29sZSIsImluZm8iLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJjbG9zZSIsInJlcyIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGUiLCJyZXEiLCJzZXRJbnRlcnZh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LEdBQVcsa0NBQVg7QUFDQXhDLFFBQUl5QyxHQUFKLENBQVEsZUFBUixFQUF5QixVQUF6QjtBQUNBekMsUUFBSXlDLEdBQUosQ0FBUSxZQUFSLEVBQXNCLFlBQXRCOztBQUVBLGFBQVNDLEtBQVQsR0FBaUI7QUFDYjFDLFlBQUkyQyxHQUFKLENBQVFDLEdBQVI7QUFDQUMsc0JBQWNDLE1BQWQ7QUFDSDs7QUFFRDlDLFFBQUkrQyxHQUFKLENBQVFyQixFQUFSLENBQVcsT0FBWCxFQUFvQmdCLEtBQXBCO0FBQ0ExQyxRQUFJK0MsR0FBSixDQUFRckIsRUFBUixDQUFXLFFBQVgsRUFBcUJnQixLQUFyQjtBQUNBMUMsUUFBSStDLEdBQUosQ0FBUXJCLEVBQVIsQ0FBVyxPQUFYLEVBQW9CZ0IsS0FBcEI7O0FBRUEsUUFBSUksU0FBU0UsWUFBWSxZQUFNO0FBQzNCLFlBQUlaLFVBQVU7QUFDVmEsa0JBQU8sSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsRUFESTtBQUVWQyxtQkFBT0MsS0FBS0MsTUFBTDtBQUZHLFNBQWQ7QUFJQWYsZUFBT2dCLEtBQVAsQ0FBYXBCLElBQUlDLE9BQUosQ0FBYjtBQUNILEtBTlksRUFNVixJQU5VLENBQWI7O0FBUUFwQyxRQUFJSSxJQUFKLEdBQVdtQyxNQUFYO0FBQ0gsQ0F6QkQ7O2tCQTJCZU4sTTs7Ozs7O0FDdkNmLG1DOzs7Ozs7QUNBQSwrQiIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNDg5NTZjNDMzZGYyMDI1YmRiMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvaW5kZXguanNcIj48L3NjcmlwdD5cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+YH09e30pID0+IHtcbiAgICByZXR1cm4gYDxib2R5PiR7Ym9keX08L2JvZHk+YDtcbn1cblxuLy8gaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgaGVhZGVyX3RwbCA9ICh7dGl0bGU9XCJzZXJ2ZXJUZW1wbGF0ZVwiLCBjaGFyc2V0PVwiVVRGLThcIiwgY3NzSHJlZj1cInB1YmxpYy9jc3Mvc3R5bGUuY3NzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL2NvcmUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0hyZWZ9XCIgLz5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL3JvdXRlcy9yb290JztcbmltcG9ydCBzZWVkIGZyb20gJy4vcm91dGVzL3NlZWQnO1xuY29uc29sZS5pbmZvKCdFbnY6JywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJ3dzJztcblxuXG4vLyBjcmVhdGUga29hIHNlcnZlclxuY29uc3QgYXBwID0gbmV3IEtvYSgpOyBcbmNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXQuU2VydmVyKHsgcG9ydDogODA4MSB9KTtcblxuLy8gdXNlIGxvZ2dlciwgcm91dGVzXG5hcHAudXNlKGxvZ2dlcigpKVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnKSB7XG4gICAgICAgICAgICBjdHguZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH0pXG4gICAgLnVzZShyb290LnJvdXRlcygpKVxuICAgIC51c2Uoc2VlZC5yb3V0ZXMoKSlcbiAgICAudXNlKHJvb3QuYWxsb3dlZE1ldGhvZHMoKSlcbiAgICAubGlzdGVuKDMwMDApO1xuXG4vLyBUT0RPOiBjb21iaW5lIHdzIHdpdGggS29hIGZvciBiZXR0ZXIgYW5kIGVhc3kgZGV2XG53c3Mub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbiBjb25uZWN0aW9uKHdzKSB7XG4gICAgICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uIGluY29taW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkOiAlcycsIG1lc3NhZ2UpO1xuICAgICAgICB3cy5zZW5kKG1lc3NhZ2UpO1xuICAgICAgfSk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2EtYmV0dGVyLXN0YXRpYzInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gYEVgO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1iZXR0ZXItc3RhdGljMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IHtQYXNzVGhyb3VnaH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbi8vIGNyZWF0ZSByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5jb25zdCBzc2UgPSAoZGF0YU9iaikgPT4ge1xyXG4gIHJldHVybiBgZGF0YTogJHsgSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfVxcblxcbmBcclxufVxyXG5cclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvc2VlZCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xyXG5cclxuICAgIGN0eC50eXBlID0gJ3RleHQvZXZlbnQtc3RyZWFtOyBjaGFyc2V0PXV0Zi04JztcclxuICAgIGN0eC5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgIGN0eC5zZXQoJ0Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5yZXEub24oJ2Nsb3NlJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZmluaXNoJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZXJyb3InLCBjbG9zZSk7XHJcblxyXG4gICAgbGV0IHVwZGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YU9iaiA9IHtcclxuICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgdmFsdWU6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0cmVhbS53cml0ZShzc2UoZGF0YU9iaikpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgY3R4LmJvZHkgPSBzdHJlYW07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9zZWVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyZWFtXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9