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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU4ZDA3ZWFhNzkxOTU2OGFlNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJ1c2UiLCJjdHgiLCJuZXh0Iiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iLCJvbiIsImNvbm5lY3Rpb24iLCJ3cyIsImluY29taW5nIiwibWVzc2FnZSIsImxvZyIsInNlbmQiLCJyb3V0ZXIiLCJnZXQiLCJzdGFydFRpbWUiLCJocnRpbWUiLCJ0aXRsZSIsImJvZHkiLCJwYWdlIiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImNoYXJzZXQiLCJjc3NIcmVmIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJzc2UiLCJkYXRhT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhbSIsInR5cGUiLCJzZXQiLCJjbG9zZSIsInJlcyIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGUiLCJyZXEiLCJzZXRJbnRlcnZhbCIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIsIndyaXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUZBQSxRQUFRQyxJQUFSLENBQWEsTUFBYixFQUFxQkMsUUFBUUMsR0FBUixDQUFZQyxRQUFqQzs7QUFLQTtBQUNBLElBQU1DLE1BQU0sbUJBQVo7QUFDQSxJQUFNQyxNQUFNLElBQUksYUFBVUMsTUFBZCxDQUFxQixFQUFFQyxNQUFNLElBQVIsRUFBckIsQ0FBWjs7QUFFQTtBQUNBSCxJQUFJSSxHQUFKLENBQVEsMEJBQVIsRUFDS0EsR0FETCxDQUNTLGdCQUFnQkMsR0FBaEIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQzVCLFFBQUlULFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixLQUE3QixFQUFvQztBQUNoQ00sWUFBSVAsR0FBSixHQUFVRCxRQUFRQyxHQUFSLENBQVlDLFFBQXRCO0FBQ0g7QUFDRCxVQUFNTyxNQUFOO0FBQ0gsQ0FOTCxFQU9LRixHQVBMLENBT1MsZUFBS0csTUFBTCxFQVBULEVBUUtILEdBUkwsQ0FRUyxlQUFLRyxNQUFMLEVBUlQsRUFTS0gsR0FUTCxDQVNTLGVBQUtJLGNBQUwsRUFUVCxFQVVLQyxNQVZMLENBVVksSUFWWjs7QUFZQTtBQUNBUixJQUFJUyxFQUFKLENBQU8sWUFBUCxFQUFxQixTQUFTQyxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUN2Q0EsT0FBR0YsRUFBSCxDQUFNLFNBQU4sRUFBaUIsU0FBU0csUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDMUNuQixnQkFBUW9CLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRCxPQUE1QjtBQUNBRixXQUFHSSxJQUFILENBQVFGLE9BQVI7QUFDRCxLQUhEO0FBSUwsQ0FMRCxFOzs7Ozs7QUMzQkEsZ0M7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1HLFNBQVMseUJBQWY7QUFDQTtBQUNBQSxPQUFPQyxHQUFQLENBQVcsSUFBWCxFQUFpQiwrQkFBTSxHQUFOLENBQWpCOztBQUVBO0FBQ0FELE9BQU9DLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLGdCQUFnQmIsR0FBaEIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQ3ZDRCxRQUFJYyxTQUFKLEdBQWdCdEIsUUFBUXVCLE1BQVIsRUFBaEI7QUFDQWYsUUFBSWdCLEtBQUo7QUFDQWhCLFFBQUlpQixJQUFKLEdBQVcseUJBQUtqQixHQUFMLENBQVg7QUFDSCxDQUpEOztBQU1BO0FBQ0FZLE9BQU9DLEdBQVAsQ0FBVyxPQUFYLEVBQW9CLGdCQUFnQmIsR0FBaEIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQzNDRCxRQUFJaUIsSUFBSixHQUFXLFlBQVg7QUFDSCxDQUZEOztrQkFJZUwsTTs7Ozs7O0FDckJmLHVDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxJQUFNTSxPQUFPLFNBQVBBLElBQU8sQ0FBQ2xCLEdBQUQ7QUFBQSx5REFFUG1CLFdBQVduQixHQUFYLENBRk8sY0FHUG9CLFNBQVNwQixHQUFULENBSE8sY0FJUHFCLFdBQVdyQixHQUFYLENBSk87QUFBQSxDQUFiOztrQkFRZWtCLEk7O0FBRWY7O0FBQ08sSUFBTUUsOEJBQVcsU0FBWEEsUUFBVyxHQUF1QztBQUFBLG1GQUFQLEVBQU87QUFBQSx5QkFBckNILElBQXFDO0FBQUEsUUFBckNBLElBQXFDOztBQUMzRCxzQkFBZ0JBLElBQWhCO0FBQ0gsQ0FGTTs7QUFJUDtBQUNPLElBQU1FLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxvRkFBMkUsRUFBM0U7QUFBQSw0QkFBRUgsS0FBRjtBQUFBLFFBQUVBLEtBQUYsK0JBQVEsZ0JBQVI7QUFBQSw4QkFBMEJNLE9BQTFCO0FBQUEsUUFBMEJBLE9BQTFCLGlDQUFrQyxPQUFsQztBQUFBLDhCQUEyQ0MsT0FBM0M7QUFBQSxRQUEyQ0EsT0FBM0MsaUNBQW1ELHNCQUFuRDs7QUFBQSw0Q0FDTEQsT0FESyx5QkFFYk4sS0FGYSxrTkFNeUJPLE9BTnpCO0FBQUEsQ0FBbkI7O0FBU1A7QUFDTyxJQUFNRixrQ0FBYSxTQUFiQSxVQUFhLFFBQWlCO0FBQUEsUUFBZlAsU0FBZSxTQUFmQSxTQUFlOztBQUN2QyxRQUFJLE9BQU9BLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDbEMsZUFBTyxFQUFQO0FBQ0g7QUFDRCxRQUFNVSxhQUFhLEdBQW5CO0FBQ0EsUUFBTUMsT0FBT2pDLFFBQVF1QixNQUFSLENBQWVELFNBQWYsQ0FBYjs7QUFFQSxvRkFFeUNXLEtBQUssQ0FBTCxJQUFVRCxVQUFWLEdBQXVCQyxLQUFLLENBQUwsQ0FGaEU7QUFJSCxDQVhNLEM7Ozs7OztBQzNCUCwrQjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBO0FBQ0EsSUFBTWIsU0FBUyx5QkFBZjtBQUNBLElBQU1jLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxPQUFELEVBQWE7QUFDdkIsc0JBQWlCQyxLQUFLQyxTQUFMLENBQWVGLE9BQWYsQ0FBakI7QUFDRCxDQUZEOztBQUlBO0FBQ0FmLE9BQU9DLEdBQVAsQ0FBVyxPQUFYLEVBQW9CLGdCQUFnQmIsR0FBaEIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQzNDLFFBQU02QixTQUFTLHlCQUFmOztBQUVBOUIsUUFBSStCLElBQUosR0FBVyxrQ0FBWDtBQUNBL0IsUUFBSWdDLEdBQUosQ0FBUSxlQUFSLEVBQXlCLFVBQXpCO0FBQ0FoQyxRQUFJZ0MsR0FBSixDQUFRLFlBQVIsRUFBc0IsWUFBdEI7O0FBRUEsYUFBU0MsS0FBVCxHQUFpQjtBQUNiakMsWUFBSWtDLEdBQUosQ0FBUUMsR0FBUjtBQUNBQyxzQkFBY0MsTUFBZDtBQUNIOztBQUVEckMsUUFBSXNDLEdBQUosQ0FBUWpDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CNEIsS0FBcEI7QUFDQWpDLFFBQUlzQyxHQUFKLENBQVFqQyxFQUFSLENBQVcsUUFBWCxFQUFxQjRCLEtBQXJCO0FBQ0FqQyxRQUFJc0MsR0FBSixDQUFRakMsRUFBUixDQUFXLE9BQVgsRUFBb0I0QixLQUFwQjs7QUFFQSxRQUFJSSxTQUFTRSxZQUFZLFlBQU07QUFDM0IsWUFBSVosVUFBVTtBQUNWYSxrQkFBTyxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsT0FBYixFQURJO0FBRVZDLG1CQUFPQyxLQUFLQyxNQUFMO0FBRkcsU0FBZDtBQUlBZixlQUFPZ0IsS0FBUCxDQUFhcEIsSUFBSUMsT0FBSixDQUFiO0FBQ0gsS0FOWSxFQU1WLElBTlUsQ0FBYjs7QUFRQTNCLFFBQUlpQixJQUFKLEdBQVdhLE1BQVg7QUFDSCxDQXpCRDs7a0JBMkJlbEIsTTs7Ozs7O0FDdkNmLG1DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM1OGQwN2VhYTc5MTk1NjhhZTVhIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnO1xuaW1wb3J0IHNlZWQgZnJvbSAnLi9yb3V0ZXMvc2VlZCc7XG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuXG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShzZWVkLnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5hbGxvd2VkTWV0aG9kcygpKVxuICAgIC5saXN0ZW4oMzAwMCk7XG5cbi8vIFRPRE86IGNvbWJpbmUgd3Mgd2l0aCBLb2EgZm9yIGJldHRlciBhbmQgZWFzeSBkZXZcbndzcy5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIGNvbm5lY3Rpb24od3MpIHtcbiAgICAgIHdzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24gaW5jb21pbmcobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQ6ICVzJywgbWVzc2FnZSk7XG4gICAgICAgIHdzLnNlbmQobWVzc2FnZSk7XG4gICAgICB9KTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWxvZ2dlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IHNlcnZlIGZyb20gJ2tvYS1iZXR0ZXItc3RhdGljMic7XG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcblxuLy8gY3JlYXRlIHJvdXRlclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuLy8gc3RhdGljIGFzc2V0c1xucm91dGVyLmdldCgnLyonLCBzZXJ2ZSgnLicpKTtcblxuLy8gcm9vdFxucm91dGVyLmdldCgnLycsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguc3RhcnRUaW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcbiAgICBjdHgudGl0bGUgPSBgRWA7XG4gICAgY3R4LmJvZHkgPSBwYWdlKGN0eCk7XG59KTtcblxuLy8gdGVzdCBwYXRoXG5yb3V0ZXIuZ2V0KCcvdGVzdCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICBjdHguYm9keSA9ICdnZXQgL3Rlc3QyJztcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cblxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NIcmVmfVwiIC8+XG48L2hlYWQ+YDtcblxuLy8gZm9vdGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgZm9vdGVyX3RwbCA9ICh7c3RhcnRUaW1lfSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RhcnRUaW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IE5TX1BFUl9TRUMgPSAxZTk7XG4gICAgY29uc3QgZGlmZiA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0VGltZSk7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8c21hbGw+UGFnZSBnZW5lcmF0ZSB0aW1lOiAke2RpZmZbMF0gKiBOU19QRVJfU0VDICsgZGlmZlsxXX0gbmFub3NlY29uZHM8L3NtYWxsPlxuICAgICAgICAgICAgPC9mb290ZXI+YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcclxuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XHJcblxyXG5pbXBvcnQge1Bhc3NUaHJvdWdofSBmcm9tICdzdHJlYW0nO1xyXG5cclxuLy8gY3JlYXRlIHJvdXRlclxyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcbmNvbnN0IHNzZSA9IChkYXRhT2JqKSA9PiB7XHJcbiAgcmV0dXJuIGBkYXRhOiAkeyBKU09OLnN0cmluZ2lmeShkYXRhT2JqKSB9XFxuXFxuYFxyXG59XHJcblxyXG4vLyByb290XHJcbnJvdXRlci5nZXQoJy9zZWVkJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xyXG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XHJcblxyXG4gICAgY3R4LnR5cGUgPSAndGV4dC9ldmVudC1zdHJlYW07IGNoYXJzZXQ9dXRmLTgnO1xyXG4gICAgY3R4LnNldCgnQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgY3R4LnNldCgnQ29ubmVjdGlvbicsICdrZWVwLWFsaXZlJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnJlcS5vbignY2xvc2UnLCBjbG9zZSk7XHJcbiAgICBjdHgucmVxLm9uKCdmaW5pc2gnLCBjbG9zZSk7XHJcbiAgICBjdHgucmVxLm9uKCdlcnJvcicsIGNsb3NlKTtcclxuXHJcbiAgICBsZXQgdXBkYXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhT2JqID0ge1xyXG4gICAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RyZWFtLndyaXRlKHNzZShkYXRhT2JqKSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBjdHguYm9keSA9IHN0cmVhbTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJlYW1cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==