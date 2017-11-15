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

var _seed = __webpack_require__(9);

var _seed2 = _interopRequireDefault(_seed);

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
}).use(_root2.default.routes()).use(_seed2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
    });
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(5);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _templates = __webpack_require__(7);

var _templates2 = _interopRequireDefault(_templates);

var _stream = __webpack_require__(10);

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

    setInterval(function () {
        var dataObj = {
            time: new Date().getTime(),
            value: Math.random()
        };
        stream.write(sse(dataObj));
    }, 1000);

    ctx.body = stream;

    console.log(ctx.response.type);
});

exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGQ0NmFhMDQ2MzQ5MWE3N2IyZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJjdHgiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzdGFydFRpbWUiLCJocnRpbWUiLCJ0aXRsZSIsImJvZHkiLCJwYWdlIiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImNoYXJzZXQiLCJjc3NIcmVmIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJzZXRJbnRlcnZhbCIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIs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QyxHQUFKLENBQVEsZUFBUixFQUF5QixVQUF6QjtBQUNBaEMsUUFBSWdDLEdBQUosQ0FBUSxZQUFSLEVBQXNCLFlBQXRCOztBQUVBQyxnQkFBWSxZQUFNO0FBQ2QsWUFBSU4sVUFBVTtBQUNWTyxrQkFBTyxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsT0FBYixFQURJO0FBRVZDLG1CQUFPQyxLQUFLQyxNQUFMO0FBRkcsU0FBZDtBQUlBVCxlQUFPVSxLQUFQLENBQWFkLElBQUlDLE9BQUosQ0FBYjtBQUNILEtBTkQsRUFNRyxJQU5IOztBQVFBM0IsUUFBSWlCLElBQUosR0FBV2EsTUFBWDs7QUFFQXhDLFlBQVFvQixHQUFSLENBQVlWLElBQUl5QyxRQUFKLENBQWFWLElBQXpCO0FBQ0gsQ0FsQkQ7O2tCQW9CZW5CLE07Ozs7OztBQy9CZixtQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZDQ2YWEwNDYzNDkxYTc3YjJlZiIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL3JvdXRlcy9yb290JztcbmltcG9ydCBzZWVkIGZyb20gJy4vcm91dGVzL3NlZWQnO1xuY29uc29sZS5pbmZvKCdFbnY6JywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJ3dzJztcblxuXG4vLyBjcmVhdGUga29hIHNlcnZlclxuY29uc3QgYXBwID0gbmV3IEtvYSgpOyBcbmNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXQuU2VydmVyKHsgcG9ydDogODA4MSB9KTtcblxuLy8gdXNlIGxvZ2dlciwgcm91dGVzXG5hcHAudXNlKGxvZ2dlcigpKVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnKSB7XG4gICAgICAgICAgICBjdHguZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH0pXG4gICAgLnVzZShyb290LnJvdXRlcygpKVxuICAgIC51c2Uoc2VlZC5yb3V0ZXMoKSlcbiAgICAudXNlKHJvb3QuYWxsb3dlZE1ldGhvZHMoKSlcbiAgICAubGlzdGVuKDMwMDApO1xuXG4vLyBUT0RPOiBjb21iaW5lIHdzIHdpdGggS29hIGZvciBiZXR0ZXIgYW5kIGVhc3kgZGV2XG53c3Mub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbiBjb25uZWN0aW9uKHdzKSB7XG4gICAgICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uIGluY29taW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkOiAlcycsIG1lc3NhZ2UpO1xuICAgICAgICB3cy5zZW5kKG1lc3NhZ2UpO1xuICAgICAgfSk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2EtYmV0dGVyLXN0YXRpYzInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gYEVgO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJldHRlci1zdGF0aWMyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvaW5kZXguanNcIj48L3NjcmlwdD5cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+YH09e30pID0+IHtcbiAgICByZXR1cm4gYDxib2R5PiR7Ym9keX08L2JvZHk+YDtcbn1cblxuLy8gaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgaGVhZGVyX3RwbCA9ICh7dGl0bGU9XCJzZXJ2ZXJUZW1wbGF0ZVwiLCBjaGFyc2V0PVwiVVRGLThcIiwgY3NzSHJlZj1cInB1YmxpYy9jc3Mvc3R5bGUuY3NzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IHtQYXNzVGhyb3VnaH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbi8vIGNyZWF0ZSByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5jb25zdCBzc2UgPSAoZGF0YU9iaikgPT4ge1xyXG4gIHJldHVybiBgZGF0YTogJHsgSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfVxcblxcbmBcclxufVxyXG4vLyByb290XHJcbnJvdXRlci5nZXQoJy9zZWVkJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xyXG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XHJcblxyXG4gICAgY3R4LnR5cGUgPSAndGV4dC9ldmVudC1zdHJlYW07IGNoYXJzZXQ9dXRmLTgnO1xyXG4gICAgY3R4LnNldCgnQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgY3R4LnNldCgnQ29ubmVjdGlvbicsICdrZWVwLWFsaXZlJyk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhT2JqID0ge1xyXG4gICAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RyZWFtLndyaXRlKHNzZShkYXRhT2JqKSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBjdHguYm9keSA9IHN0cmVhbTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjdHgucmVzcG9uc2UudHlwZSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJlYW1cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==