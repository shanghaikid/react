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
var sse = function sse(event, data) {
    return 'event:' + event + '\ndata: ' + data + '\n\n';
};
// root
router.get('/seed', async function (ctx, next) {
    var stream = new _stream.PassThrough();

    ctx.type = 'text/event-stream; charset=utf-8';
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Connection', 'keep-alive');

    setInterval(function () {
        stream.write(sse('a', 'i am testing'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGM0ZTNkN2Q5OTY5YmNkMTA2ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJjdHgiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzdGFydFRpbWUiLCJocnRpbWUiLCJ0aXRsZSIsImJvZHkiLCJwYWdlIiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImNoYXJzZXQiLCJjc3NIcmVmIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJzc2UiLCJldmVudCIsImRhdGEiLCJzdHJlYW0iLCJ0eXBlIiwic2V0Iiwic2V0SW50ZXJ2YWwiLCJ3cml0ZSIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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LEVBQXNCLFlBQXRCOztBQUVBQyxnQkFBWSxZQUFNO0FBQ2RILGVBQU9JLEtBQVAsQ0FBYVAsSUFBSSxHQUFKLEVBQVMsY0FBVCxDQUFiO0FBQ0gsS0FGRCxFQUVHLElBRkg7O0FBSUExQixRQUFJaUIsSUFBSixHQUFXWSxNQUFYOztBQUVBdkMsWUFBUW9CLEdBQVIsQ0FBWVYsSUFBSWtDLFFBQUosQ0FBYUosSUFBekI7QUFDSCxDQWREOztrQkFnQmVsQixNOzs7Ozs7QUMzQmYsbUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGM0ZTNkN2Q5OTY5YmNkMTA2ODgiLCJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2tvYS1sb2dnZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9yb3V0ZXMvcm9vdCc7XG5pbXBvcnQgc2VlZCBmcm9tICcuL3JvdXRlcy9zZWVkJztcbmNvbnNvbGUuaW5mbygnRW52OicsIHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxuaW1wb3J0IFdlYlNvY2tldCBmcm9tICd3cyc7XG5cblxuLy8gY3JlYXRlIGtvYSBzZXJ2ZXJcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTsgXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0LlNlcnZlcih7IHBvcnQ6IDgwODEgfSk7XG5cbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2Jykge1xuICAgICAgICAgICAgY3R4LmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9KVxuICAgIC51c2Uocm9vdC5yb3V0ZXMoKSlcbiAgICAudXNlKHNlZWQucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1iZXR0ZXItc3RhdGljMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlZmF1bHQgcGFnZSB0ZW1wYWxhdGVcbmNvbnN0IHBhZ2UgPSAoY3R4KSA9PiBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAke2hlYWRlcl90cGwoY3R4KX1cbiAgICAke2JvZHlfdHBsKGN0eCl9XG4gICAgJHtmb290ZXJfdHBsKGN0eCl9XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2luZGV4LmpzXCI+PC9zY3JpcHQ+XG48L2h0bWw+YDtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcblxuLy8gYm9keSB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGJvZHlfdHBsID0gKHtib2R5PWA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PmB9PXt9KSA9PiB7XG4gICAgcmV0dXJuIGA8Ym9keT4ke2JvZHl9PC9ib2R5PmA7XG59XG5cbi8vIGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGhlYWRlcl90cGwgPSAoe3RpdGxlPVwic2VydmVyVGVtcGxhdGVcIiwgY2hhcnNldD1cIlVURi04XCIsIGNzc0hyZWY9XCJwdWJsaWMvY3NzL3N0eWxlLmNzc1wifT17fSkgPT4gYDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCIke2NoYXJzZXR9XCIvPlxuICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0hyZWZ9XCIgLz5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid3NcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7UGFzc1Rocm91Z2h9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuY29uc3Qgc3NlID0gKGV2ZW50LCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGBldmVudDokeyBldmVudCB9XFxuZGF0YTogJHsgZGF0YSB9XFxuXFxuYFxyXG59XHJcbi8vIHJvb3Rcclxucm91dGVyLmdldCgnL3NlZWQnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcclxuXHJcbiAgICBjdHgudHlwZSA9ICd0ZXh0L2V2ZW50LXN0cmVhbTsgY2hhcnNldD11dGYtOCc7XHJcbiAgICBjdHguc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICBjdHguc2V0KCdDb25uZWN0aW9uJywgJ2tlZXAtYWxpdmUnKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc3RyZWFtLndyaXRlKHNzZSgnYScsICdpIGFtIHRlc3RpbmcnKSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBjdHguYm9keSA9IHN0cmVhbTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjdHgucmVzcG9uc2UudHlwZSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJlYW1cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==