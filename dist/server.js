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
<<<<<<< HEAD
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
=======
>>>>>>> 99aa768873d205062045b5b25195a3b54796482d
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQxZDZlNzcxZDEwYTdjZTNlZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJjdHgiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzdGFydFRpbWUiLCJocnRpbWUiLCJ0aXRsZSIsImJvZHkiLCJwYWdlIiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImNoYXJzZXQiLCJjc3NIcmVmIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJjbG9zZSIsInJlcyIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGUiLCJyZXEiLCJzZXRJbnRlcnZh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QUVBOUIsUUFBSStCLElBQUosR0FBVyxrQ0FBWDtBQUNBL0IsUUFBSWdDLEdBQUosQ0FBUSxlQUFSLEVBQXlCLFVBQXpCO0FBQ0FoQyxRQUFJZ0MsR0FBSixDQUFRLFlBQVIsRUFBc0IsWUFBdEI7O0FBRUEsYUFBU0MsS0FBVCxHQUFpQjtBQUNiakMsWUFBSWtDLEdBQUosQ0FBUUMsR0FBUjtBQUNBQyxzQkFBY0MsTUFBZDtBQUNIOztBQUVEckMsUUFBSXNDLEdBQUosQ0FBUWpDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CNEIsS0FBcEI7QUFDQWpDLFFBQUlzQyxHQUFKLENBQVFqQyxFQUFSLENBQVcsUUFBWCxFQUFxQjRCLEtBQXJCO0FBQ0FqQyxRQUFJc0MsR0FBSixDQUFRakMsRUFBUixDQUFXLE9BQVgsRUFBb0I0QixLQUFwQjs7QUFFQSxRQUFJSSxTQUFTRSxZQUFZLFlBQU07QUFDM0IsWUFBSVosVUFBVTtBQUNWYSxrQkFBTyxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsT0FBYixFQURJO0FBRVZDLG1CQUFPQyxLQUFLQyxNQUFMO0FBRkcsU0FBZDtBQUlBZixlQUFPZ0IsS0FBUCxDQUFhcEIsSUFBSUMsT0FBSixDQUFiO0FBQ0gsS0FOWSxFQU1WLElBTlUsQ0FBYjs7QUFRQTNCLFFBQUlpQixJQUFKLEdBQVdhLE1BQVg7QUFDSCxDQXpCRDs7a0JBMkJlbEIsTTs7Ozs7O0FDdkNmLG1DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0MWQ2ZTc3MWQxMGE3Y2UzZWVjIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnO1xuaW1wb3J0IHNlZWQgZnJvbSAnLi9yb3V0ZXMvc2VlZCc7XG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuXG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShzZWVkLnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5hbGxvd2VkTWV0aG9kcygpKVxuICAgIC5saXN0ZW4oMzAwMCk7XG5cbi8vIFRPRE86IGNvbWJpbmUgd3Mgd2l0aCBLb2EgZm9yIGJldHRlciBhbmQgZWFzeSBkZXZcbndzcy5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIGNvbm5lY3Rpb24od3MpIHtcbiAgICAgIHdzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24gaW5jb21pbmcobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQ6ICVzJywgbWVzc2FnZSk7XG4gICAgICAgIHdzLnNlbmQobWVzc2FnZSk7XG4gICAgICB9KTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWxvZ2dlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IHNlcnZlIGZyb20gJ2tvYS1iZXR0ZXItc3RhdGljMic7XG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcblxuLy8gY3JlYXRlIHJvdXRlclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuLy8gc3RhdGljIGFzc2V0c1xucm91dGVyLmdldCgnLyonLCBzZXJ2ZSgnLicpKTtcblxuLy8gcm9vdFxucm91dGVyLmdldCgnLycsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguc3RhcnRUaW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcbiAgICBjdHgudGl0bGUgPSBgRWA7XG4gICAgY3R4LmJvZHkgPSBwYWdlKGN0eCk7XG59KTtcblxuLy8gdGVzdCBwYXRoXG5yb3V0ZXIuZ2V0KCcvdGVzdCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguYm9keSA9ICdnZXQgL3Rlc3QyJztcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvY29yZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IHtQYXNzVGhyb3VnaH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbi8vIGNyZWF0ZSByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5jb25zdCBzc2UgPSAoZGF0YU9iaikgPT4ge1xyXG4gIHJldHVybiBgZGF0YTogJHsgSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfVxcblxcbmBcclxufVxyXG5cclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvc2VlZCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xyXG5cclxuICAgIGN0eC50eXBlID0gJ3RleHQvZXZlbnQtc3RyZWFtOyBjaGFyc2V0PXV0Zi04JztcclxuICAgIGN0eC5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgIGN0eC5zZXQoJ0Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5yZXEub24oJ2Nsb3NlJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZmluaXNoJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZXJyb3InLCBjbG9zZSk7XHJcblxyXG4gICAgbGV0IHVwZGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YU9iaiA9IHtcclxuICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgdmFsdWU6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0cmVhbS53cml0ZShzc2UoZGF0YU9iaikpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgY3R4LmJvZHkgPSBzdHJlYW07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9zZWVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyZWFtXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdjMmY5ZjBhN2M2MzczMDhmMTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiJdLCJuYW1lcyI6WyJwYWdlIiwiY3R4IiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImJvZHkiLCJ0aXRsZSIsImNoYXJzZXQiLCJjc3NIcmVmIiwic3RhcnRUaW1lIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJwcm9jZXNzIiwiaHJ0aW1lIiwiY29uc29sZSIsImluZm8iLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJzZXRJbnRlcnZhbCIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIs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RUFBeUIsVUFBekI7QUFDQXpDLFFBQUl5QyxHQUFKLENBQVEsWUFBUixFQUFzQixZQUF0Qjs7QUFFQUMsZ0JBQVksWUFBTTtBQUNkLFlBQUlOLFVBQVU7QUFDVk8sa0JBQU8sSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsRUFESTtBQUVWQyxtQkFBT0MsS0FBS0MsTUFBTDtBQUZHLFNBQWQ7QUFJQVQsZUFBT1UsS0FBUCxDQUFhZCxJQUFJQyxPQUFKLENBQWI7QUFDSCxLQU5ELEVBTUcsSUFOSDs7QUFRQXBDLFFBQUlJLElBQUosR0FBV21DLE1BQVg7O0FBRUExQixZQUFRa0IsR0FBUixDQUFZL0IsSUFBSWtELFFBQUosQ0FBYVYsSUFBekI7QUFDSCxDQWxCRDs7a0JBb0JlUCxNOzs7Ozs7QUMvQmYsbUM7Ozs7OztBQ0FBLCtCIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3YzJmOWYwYTdjNjM3MzA4ZjE1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cblxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NIcmVmfVwiIC8+XG48L2hlYWQ+YDtcblxuLy8gZm9vdGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgZm9vdGVyX3RwbCA9ICh7c3RhcnRUaW1lfSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RhcnRUaW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IE5TX1BFUl9TRUMgPSAxZTk7XG4gICAgY29uc3QgZGlmZiA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0VGltZSk7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8c21hbGw+UGFnZSBnZW5lcmF0ZSB0aW1lOiAke2RpZmZbMF0gKiBOU19QRVJfU0VDICsgZGlmZlsxXX0gbmFub3NlY29uZHM8L3NtYWxsPlxuICAgICAgICAgICAgPC9mb290ZXI+YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2tvYS1sb2dnZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9yb3V0ZXMvcm9vdCc7XG5pbXBvcnQgc2VlZCBmcm9tICcuL3JvdXRlcy9zZWVkJztcbmNvbnNvbGUuaW5mbygnRW52OicsIHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxuaW1wb3J0IFdlYlNvY2tldCBmcm9tICd3cyc7XG5cblxuLy8gY3JlYXRlIGtvYSBzZXJ2ZXJcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTsgXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0LlNlcnZlcih7IHBvcnQ6IDgwODEgfSk7XG5cbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2Jykge1xuICAgICAgICAgICAgY3R4LmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9KVxuICAgIC51c2Uocm9vdC5yb3V0ZXMoKSlcbiAgICAudXNlKHNlZWQucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7UGFzc1Rocm91Z2h9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuY29uc3Qgc3NlID0gKGRhdGFPYmopID0+IHtcclxuICByZXR1cm4gYGRhdGE6ICR7IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH1cXG5cXG5gXHJcbn1cclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvc2VlZCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xyXG5cclxuICAgIGN0eC50eXBlID0gJ3RleHQvZXZlbnQtc3RyZWFtOyBjaGFyc2V0PXV0Zi04JztcclxuICAgIGN0eC5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgIGN0eC5zZXQoJ0Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpO1xyXG5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YU9iaiA9IHtcclxuICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgdmFsdWU6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0cmVhbS53cml0ZShzc2UoZGF0YU9iaikpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgY3R4LmJvZHkgPSBzdHJlYW07XHJcblxyXG4gICAgY29uc29sZS5sb2coY3R4LnJlc3BvbnNlLnR5cGUpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9zZWVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyZWFtXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 99aa768873d205062045b5b25195a3b54796482d
