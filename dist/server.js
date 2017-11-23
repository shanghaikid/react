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

var _koaSession = __webpack_require__(18);

var _koaSession2 = _interopRequireDefault(_koaSession);

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

app.keys = ['some secret hurr'];
var CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use((0, _koaSession2.default)(CONFIG, app));

// use logger, routes
app.use((0, _koaLogger2.default)()).use(async function (ctx, next) {
    if (process.env.NODE_ENV === 'dev') {
        ctx.env = process.env.NODE_ENV;
    }
    await next();
}).use(async function (ctx, next) {
    if (ctx.session.ok !== 1) {
        ctx.redirect('/login');
    }
    if (ctx.session.ok === 1 && ctx.path === '/login') {
        ctx.redirect('/');
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
    ctx.session.ok = 1;
});

exports.default = router;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buffer = __webpack_require__(12);

var createBuffer = _buffer.Buffer.from && _buffer.Buffer.alloc && _buffer.Buffer.allocUnsafe && _buffer.Buffer.allocUnsafeSlow ? _buffer.Buffer.from

// support for Node < 5.10
: function (val) {
  return new _buffer.Buffer(val);
};

exports.default = createBuffer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model, calc) {
  var fn = function fn(buf, previous) {
    return calc(buf, previous) >>> 0;
  };
  fn.signed = calc;
  fn.unsigned = fn;
  fn.model = model;

  return fn;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(19);
} else {
  module.exports = __webpack_require__(21);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(20);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crc = __webpack_require__(28).crc32;

module.exports = {

  /**
   * Decode the base64 cookie value to an object.
   *
   * @param {String} string
   * @return {Object}
   * @api private
   */

  decode: function decode(string) {
    var body = new Buffer(string, 'base64').toString('utf8');
    var json = JSON.parse(body);
    return json;
  },


  /**
   * Encode an object into a base64-encoded JSON string.
   *
   * @param {Object} body
   * @return {String}
   * @api private
   */

  encode: function encode(body) {
    body = JSON.stringify(body);
    return new Buffer(body).toString('base64');
  },
  hash: function hash(sess) {
    return crc(JSON.stringify(sess));
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var debug = __webpack_require__(15)('koa-session');
var ContextSession = __webpack_require__(26);
var util = __webpack_require__(17);
var assert = __webpack_require__(40);
var uid = __webpack_require__(41);
var is = __webpack_require__(44);

var CONTEXT_SESSION = Symbol('context#contextSession');
var _CONTEXT_SESSION = Symbol('context#_contextSession');

/**
 * Initialize session middleware with `opts`:
 *
 * - `key` session cookie name ["koa:sess"]
 * - all other options are passed as cookie options
 *
 * @param {Object} [opts]
 * @param {Application} app, koa application instance
 * @api public
 */

module.exports = function (opts, app) {
  // session(app[, opts])
  if (opts && typeof opts.use === 'function') {
    var _ref = [opts, app];
    app = _ref[0];
    opts = _ref[1];
  }
  // app required
  if (!app || typeof app.use !== 'function') {
    throw new TypeError('app instance required: `session(opts, app)`');
  }

  opts = formatOpts(opts);
  extendContext(app.context, opts);

  return async function session(ctx, next) {
    var sess = ctx[CONTEXT_SESSION];
    if (sess.store) await sess.initFromExternal();
    try {
      await next();
    } catch (err) {
      throw err;
    } finally {
      await sess.commit();
    }
  };
};

/**
 * format and check session options
 * @param  {Object} opts session options
 * @return {Object} new session options
 *
 * @api private
 */

function formatOpts(opts) {
  opts = opts || {};
  // key
  opts.key = opts.key || 'koa:sess';

  // back-compat maxage
  if (!('maxAge' in opts)) opts.maxAge = opts.maxage;

  // defaults
  if (opts.overwrite == null) opts.overwrite = true;
  if (opts.httpOnly == null) opts.httpOnly = true;
  if (opts.signed == null) opts.signed = true;

  debug('session options %j', opts);

  // setup encoding/decoding
  if (typeof opts.encode !== 'function') {
    opts.encode = util.encode;
  }
  if (typeof opts.decode !== 'function') {
    opts.decode = util.decode;
  }

  var store = opts.store;
  if (store) {
    assert(is.function(store.get), 'store.get must be function');
    assert(is.function(store.set), 'store.set must be function');
    assert(is.function(store.destroy), 'store.destroy must be function');
  }

  var ContextStore = opts.ContextStore;
  if (ContextStore) {
    assert(is.class(ContextStore), 'ContextStore must be a class');
    assert(is.function(ContextStore.prototype.get), 'ContextStore.prototype.get must be function');
    assert(is.function(ContextStore.prototype.set), 'ContextStore.prototype.set must be function');
    assert(is.function(ContextStore.prototype.destroy), 'ContextStore.prototype.destroy must be function');
  }

  if (!opts.genid) {
    if (opts.prefix) opts.genid = function () {
      return opts.prefix + uid.sync(24);
    };else opts.genid = function () {
      return uid.sync(24);
    };
  }

  return opts;
}

/**
 * extend context prototype, add session properties
 *
 * @param  {Object} context koa's context prototype
 * @param  {Object} opts session options
 *
 * @api private
 */

function extendContext(context, opts) {
  var _Object$definePropert;

  Object.defineProperties(context, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, CONTEXT_SESSION, {
    get: function get() {
      if (this[_CONTEXT_SESSION]) return this[_CONTEXT_SESSION];
      this[_CONTEXT_SESSION] = new ContextSession(this, opts);
      return this[_CONTEXT_SESSION];
    }
  }), _defineProperty(_Object$definePropert, 'session', {
    get: function get() {
      return this[CONTEXT_SESSION].get();
    },
    set: function set(val) {
      this[CONTEXT_SESSION].set(val);
    },

    configurable: true
  }), _defineProperty(_Object$definePropert, 'sessionOptions', {
    get: function get() {
      return this[CONTEXT_SESSION].opts;
    }
  }), _Object$definePropert));
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(16);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var tty = __webpack_require__(22);
var util = __webpack_require__(23);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(16);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(24);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(25);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = __webpack_require__(15)('koa-session:context');
var Session = __webpack_require__(27);
var util = __webpack_require__(17);

var ONE_DAY = 24 * 60 * 60 * 1000;

var ContextSession = function () {
  /**
   * context session constructor
   * @api public
   */

  function ContextSession(ctx, opts) {
    _classCallCheck(this, ContextSession);

    this.ctx = ctx;
    this.opts = opts || {};
    this.store = this.opts.ContextStore ? new this.opts.ContextStore(ctx) : this.opts.store;
  }

  /**
   * internal logic of `ctx.session`
   * @return {Session} session object
   *
   * @api public
   */

  _createClass(ContextSession, [{
    key: 'get',
    value: function get() {
      var session = this.session;
      // already retrieved
      if (session) return session;
      // unset
      if (session === false) return null;

      // cookie session store
      if (!this.store) this.initFromCookie();
      return this.session;
    }

    /**
     * internal logic of `ctx.session=`
     * @param {Object} val session object
     *
     * @api public
     */

  }, {
    key: 'set',
    value: function set(val) {
      if (val === null) {
        this.session = false;
        return;
      }
      if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
        // use the original `externalKey` if exists to avoid waste storage
        this.create(val, this.externalKey);
        return;
      }
      throw new Error('this.session can only be set as null or an object.');
    }

    /**
     * init session from external store
     * will be called in the front of session middleware
     *
     * @api public
     */

  }, {
    key: 'initFromExternal',
    value: async function initFromExternal() {
      debug('init from external');
      var ctx = this.ctx;
      var opts = this.opts;

      var externalKey = ctx.cookies.get(opts.key, opts);
      debug('get external key from cookie %s', externalKey);

      if (!externalKey) {
        // create a new `externalKey`
        this.create();
        return;
      }

      var json = await this.store.get(externalKey, opts.maxAge, { rolling: opts.rolling });
      if (!this.valid(json)) {
        // create a new `externalKey`
        this.create();
        return;
      }

      // create with original `externalKey`
      this.create(json, externalKey);
      this.prevHash = util.hash(this.session.toJSON());
    }

    /**
     * init session from cookie
     * @api private
     */

  }, {
    key: 'initFromCookie',
    value: function initFromCookie() {
      debug('init from cookie');
      var ctx = this.ctx;
      var opts = this.opts;

      var cookie = ctx.cookies.get(opts.key, opts);
      if (!cookie) {
        this.create();
        return;
      }

      var json = void 0;
      debug('parse %s', cookie);
      try {
        json = opts.decode(cookie);
      } catch (err) {
        // backwards compatibility:
        // create a new session if parsing fails.
        // new Buffer(string, 'base64') does not seem to crash
        // when `string` is not base64-encoded.
        // but `JSON.parse(string)` will crash.
        debug('decode %j error: %s', cookie, err);
        if (!(err instanceof SyntaxError)) {
          // clean this cookie to ensure next request won't throw again
          ctx.cookies.set(opts.key, '', opts);
          // ctx.onerror will unset all headers, and set those specified in err
          err.headers = {
            'set-cookie': ctx.response.get('set-cookie')
          };
          throw err;
        }
        this.create();
        return;
      }

      debug('parsed %j', json);

      if (!this.valid(json)) {
        this.create();
        return;
      }

      // support access `ctx.session` before session middleware
      this.create(json);
      this.prevHash = util.hash(this.session.toJSON());
    }

    /**
     * verify session(expired or )
     * @param  {Object} json session object
     * @return {Boolean} valid
     * @api private
     */

  }, {
    key: 'valid',
    value: function valid(json) {
      if (!json) return false;

      if (json._expire && json._expire < Date.now()) {
        debug('expired session');
        return false;
      }

      var valid = this.opts.valid;
      if (typeof valid === 'function' && !valid(this.ctx, json)) {
        // valid session value fail, ignore this session
        debug('invalid session');
        return false;
      }
      return true;
    }

    /**
     * create a new session and attach to ctx.sess
     *
     * @param {Object} [val] session data
     * @param {String} [externalKey] session external key
     * @api private
     */

  }, {
    key: 'create',
    value: function create(val, externalKey) {
      debug('create session with val: %j externalKey: %s', val, externalKey);
      if (this.store) this.externalKey = externalKey || this.opts.genid();
      this.session = new Session(this.ctx, val);
    }

    /**
     * Commit the session changes or removal.
     *
     * @api public
     */

  }, {
    key: 'commit',
    value: async function commit() {
      var session = this.session;
      var prevHash = this.prevHash;
      var opts = this.opts;
      var ctx = this.ctx;

      // not accessed
      if (undefined === session) return;

      // removed
      if (session === false) {
        await this.remove();
        return;
      }

      // force save session when `session._requireSave` set
      var changed = true;
      if (!session._requireSave) {
        var json = session.toJSON();
        // do nothing if new and not populated
        if (!prevHash && !Object.keys(json).length) return;
        changed = prevHash !== util.hash(json);
        // do nothing if not changed and not in rolling mode
        if (!this.opts.rolling && !changed) return;
      }

      if (typeof opts.beforeSave === 'function') {
        debug('before save');
        opts.beforeSave(ctx, session);
      }
      await this.save(changed);
    }

    /**
     * remove session
     * @api private
     */

  }, {
    key: 'remove',
    value: async function remove() {
      var opts = this.opts;
      var ctx = this.ctx;
      var key = opts.key;
      var externalKey = this.externalKey;

      if (externalKey) await this.store.destroy(externalKey);
      ctx.cookies.set(key, '', opts);
    }

    /**
     * save session
     * @api private
     */

  }, {
    key: 'save',
    value: async function save(changed) {
      var opts = this.opts;
      var key = opts.key;
      var externalKey = this.externalKey;
      var json = this.session.toJSON();
      // set expire for check
      var maxAge = opts.maxAge ? opts.maxAge : ONE_DAY;
      if (maxAge === 'session') {
        // do not set _expire in json if maxAge is set to 'session'
        // also delete maxAge from options
        opts.maxAge = undefined;
      } else {
        // set expire for check
        json._expire = maxAge + Date.now();
        json._maxAge = maxAge;
      }

      // save to external store
      if (externalKey) {
        debug('save %j to external key %s', json, externalKey);
        await this.store.set(externalKey, json, maxAge, {
          changed: changed,
          rolling: opts.rolling
        });
        this.ctx.cookies.set(key, externalKey, opts);
        return;
      }

      // save to cookie
      debug('save %j to cookie', json);
      json = opts.encode(json);
      debug('save %s', json);

      this.ctx.cookies.set(key, json, opts);
    }
  }]);

  return ContextSession;
}();

module.exports = ContextSession;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Session model.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Session = function () {
  /**
   * Session constructor
   * @param {Context} ctx
   * @param {Object} obj
   * @api private
   */

  function Session(ctx, obj) {
    _classCallCheck(this, Session);

    this._ctx = ctx;
    if (!obj) {
      this.isNew = true;
    } else {
      for (var k in obj) {
        // restore maxAge from store
        if (k === '_maxAge') this._ctx.sessionOptions.maxAge = obj._maxAge;else this[k] = obj[k];
      }
    }
  }

  /**
   * JSON representation of the session.
   *
   * @return {Object}
   * @api public
   */

  _createClass(Session, [{
    key: 'toJSON',
    value: function toJSON() {
      var _this = this;

      var obj = {};

      Object.keys(this).forEach(function (key) {
        if (key === 'isNew') return;
        if (key[0] === '_') return;
        obj[key] = _this[key];
      });

      return obj;
    }

    /**
     *
     * alias to `toJSON`
     * @api public
     */

  }, {
    key: 'inspect',
    value: function inspect() {
      return this.toJSON();
    }

    /**
     * Return how many values there are in the session object.
     * Used to see if it's "populated".
     *
     * @return {Number}
     * @api public
     */

  }, {
    key: 'save',


    /**
     * save this session no matter whether it is populated
     *
     * @api public
     */

    value: function save() {
      this._requireSave = true;
    }
  }, {
    key: 'length',
    get: function get() {
      return Object.keys(this.toJSON()).length;
    }

    /**
     * populated flag, which is just a boolean alias of .length.
     *
     * @return {Boolean}
     * @api public
     */

  }, {
    key: 'populated',
    get: function get() {
      return !!this.length;
    }

    /**
     * get session maxAge
     *
     * @return {Number}
     * @api public
     */

  }, {
    key: 'maxAge',
    get: function get() {
      return this._ctx.sessionOptions.maxAge;
    }

    /**
     * set session maxAge
     *
     * @param {Number}
     * @api public
     */

    ,
    set: function set(val) {
      this._ctx.sessionOptions.maxAge = val;
      // maxAge changed, must save to cookie and store
      this._requireSave = true;
    }
  }]);

  return Session;
}();

module.exports = Session;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  crc1: __webpack_require__(29),
  crc8: __webpack_require__(30),
  crc81wire: __webpack_require__(31),
  crc16: __webpack_require__(32),
  crc16ccitt: __webpack_require__(33),
  crc16modbus: __webpack_require__(34),
  crc16xmodem: __webpack_require__(35),
  crc16kermit: __webpack_require__(36),
  crc24: __webpack_require__(37),
  crc32: __webpack_require__(38),
  crcjam: __webpack_require__(39)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = (0, _define_crc2.default)('crc1', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = ~~previous;
  var accum = 0;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    accum += byte;
  }

  crc += accum % 256;
  return crc % 256;
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=crc-8 --generate=c`
var TABLE = [0x00, 0x07, 0x0e, 0x09, 0x1c, 0x1b, 0x12, 0x15, 0x38, 0x3f, 0x36, 0x31, 0x24, 0x23, 0x2a, 0x2d, 0x70, 0x77, 0x7e, 0x79, 0x6c, 0x6b, 0x62, 0x65, 0x48, 0x4f, 0x46, 0x41, 0x54, 0x53, 0x5a, 0x5d, 0xe0, 0xe7, 0xee, 0xe9, 0xfc, 0xfb, 0xf2, 0xf5, 0xd8, 0xdf, 0xd6, 0xd1, 0xc4, 0xc3, 0xca, 0xcd, 0x90, 0x97, 0x9e, 0x99, 0x8c, 0x8b, 0x82, 0x85, 0xa8, 0xaf, 0xa6, 0xa1, 0xb4, 0xb3, 0xba, 0xbd, 0xc7, 0xc0, 0xc9, 0xce, 0xdb, 0xdc, 0xd5, 0xd2, 0xff, 0xf8, 0xf1, 0xf6, 0xe3, 0xe4, 0xed, 0xea, 0xb7, 0xb0, 0xb9, 0xbe, 0xab, 0xac, 0xa5, 0xa2, 0x8f, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9d, 0x9a, 0x27, 0x20, 0x29, 0x2e, 0x3b, 0x3c, 0x35, 0x32, 0x1f, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0d, 0x0a, 0x57, 0x50, 0x59, 0x5e, 0x4b, 0x4c, 0x45, 0x42, 0x6f, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7d, 0x7a, 0x89, 0x8e, 0x87, 0x80, 0x95, 0x92, 0x9b, 0x9c, 0xb1, 0xb6, 0xbf, 0xb8, 0xad, 0xaa, 0xa3, 0xa4, 0xf9, 0xfe, 0xf7, 0xf0, 0xe5, 0xe2, 0xeb, 0xec, 0xc1, 0xc6, 0xcf, 0xc8, 0xdd, 0xda, 0xd3, 0xd4, 0x69, 0x6e, 0x67, 0x60, 0x75, 0x72, 0x7b, 0x7c, 0x51, 0x56, 0x5f, 0x58, 0x4d, 0x4a, 0x43, 0x44, 0x19, 0x1e, 0x17, 0x10, 0x05, 0x02, 0x0b, 0x0c, 0x21, 0x26, 0x2f, 0x28, 0x3d, 0x3a, 0x33, 0x34, 0x4e, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5c, 0x5b, 0x76, 0x71, 0x78, 0x7f, 0x6a, 0x6d, 0x64, 0x63, 0x3e, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2c, 0x2b, 0x06, 0x01, 0x08, 0x0f, 0x1a, 0x1d, 0x14, 0x13, 0xae, 0xa9, 0xa0, 0xa7, 0xb2, 0xb5, 0xbc, 0xbb, 0x96, 0x91, 0x98, 0x9f, 0x8a, 0x8d, 0x84, 0x83, 0xde, 0xd9, 0xd0, 0xd7, 0xc2, 0xc5, 0xcc, 0xcb, 0xe6, 0xe1, 0xe8, 0xef, 0xfa, 0xfd, 0xf4, 0xf3];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('crc-8', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = ~~previous;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
  }

  return crc;
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=dallas-1-wire --generate=c`
var TABLE = [0x00, 0x5e, 0xbc, 0xe2, 0x61, 0x3f, 0xdd, 0x83, 0xc2, 0x9c, 0x7e, 0x20, 0xa3, 0xfd, 0x1f, 0x41, 0x9d, 0xc3, 0x21, 0x7f, 0xfc, 0xa2, 0x40, 0x1e, 0x5f, 0x01, 0xe3, 0xbd, 0x3e, 0x60, 0x82, 0xdc, 0x23, 0x7d, 0x9f, 0xc1, 0x42, 0x1c, 0xfe, 0xa0, 0xe1, 0xbf, 0x5d, 0x03, 0x80, 0xde, 0x3c, 0x62, 0xbe, 0xe0, 0x02, 0x5c, 0xdf, 0x81, 0x63, 0x3d, 0x7c, 0x22, 0xc0, 0x9e, 0x1d, 0x43, 0xa1, 0xff, 0x46, 0x18, 0xfa, 0xa4, 0x27, 0x79, 0x9b, 0xc5, 0x84, 0xda, 0x38, 0x66, 0xe5, 0xbb, 0x59, 0x07, 0xdb, 0x85, 0x67, 0x39, 0xba, 0xe4, 0x06, 0x58, 0x19, 0x47, 0xa5, 0xfb, 0x78, 0x26, 0xc4, 0x9a, 0x65, 0x3b, 0xd9, 0x87, 0x04, 0x5a, 0xb8, 0xe6, 0xa7, 0xf9, 0x1b, 0x45, 0xc6, 0x98, 0x7a, 0x24, 0xf8, 0xa6, 0x44, 0x1a, 0x99, 0xc7, 0x25, 0x7b, 0x3a, 0x64, 0x86, 0xd8, 0x5b, 0x05, 0xe7, 0xb9, 0x8c, 0xd2, 0x30, 0x6e, 0xed, 0xb3, 0x51, 0x0f, 0x4e, 0x10, 0xf2, 0xac, 0x2f, 0x71, 0x93, 0xcd, 0x11, 0x4f, 0xad, 0xf3, 0x70, 0x2e, 0xcc, 0x92, 0xd3, 0x8d, 0x6f, 0x31, 0xb2, 0xec, 0x0e, 0x50, 0xaf, 0xf1, 0x13, 0x4d, 0xce, 0x90, 0x72, 0x2c, 0x6d, 0x33, 0xd1, 0x8f, 0x0c, 0x52, 0xb0, 0xee, 0x32, 0x6c, 0x8e, 0xd0, 0x53, 0x0d, 0xef, 0xb1, 0xf0, 0xae, 0x4c, 0x12, 0x91, 0xcf, 0x2d, 0x73, 0xca, 0x94, 0x76, 0x28, 0xab, 0xf5, 0x17, 0x49, 0x08, 0x56, 0xb4, 0xea, 0x69, 0x37, 0xd5, 0x8b, 0x57, 0x09, 0xeb, 0xb5, 0x36, 0x68, 0x8a, 0xd4, 0x95, 0xcb, 0x29, 0x77, 0xf4, 0xaa, 0x48, 0x16, 0xe9, 0xb7, 0x55, 0x0b, 0x88, 0xd6, 0x34, 0x6a, 0x2b, 0x75, 0x97, 0xc9, 0x4a, 0x14, 0xf6, 0xa8, 0x74, 0x2a, 0xc8, 0x96, 0x15, 0x4b, 0xa9, 0xf7, 0xb6, 0xe8, 0x0a, 0x54, 0xd7, 0x89, 0x6b, 0x35];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('dallas-1-wire', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = ~~previous;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
  }

  return crc;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16 --generate=c`
var TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('crc-16', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = ~~previous;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
  }

  return crc;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=ccitt --generate=c`
var TABLE = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('ccitt', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = (TABLE[(crc >> 8 ^ byte) & 0xff] ^ crc << 8) & 0xffff;
  }

  return crc;
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16-modbus --generate=c`
var TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('crc-16-modbus', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
  }

  return crc;
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = (0, _define_crc2.default)('xmodem', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = typeof previous !== 'undefined' ? ~~previous : 0x0;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    var code = crc >>> 8 & 0xFF;

    code ^= byte & 0xFF;
    code ^= code >>> 4;
    crc = crc << 8 & 0xFFFF;
    crc ^= code;
    code = code << 5 & 0xFFFF;
    crc ^= code;
    code = code << 7 & 0xFFFF;
    crc ^= code;
  }

  return crc;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=kermit --generate=c`
var TABLE = [0x0000, 0x1189, 0x2312, 0x329b, 0x4624, 0x57ad, 0x6536, 0x74bf, 0x8c48, 0x9dc1, 0xaf5a, 0xbed3, 0xca6c, 0xdbe5, 0xe97e, 0xf8f7, 0x1081, 0x0108, 0x3393, 0x221a, 0x56a5, 0x472c, 0x75b7, 0x643e, 0x9cc9, 0x8d40, 0xbfdb, 0xae52, 0xdaed, 0xcb64, 0xf9ff, 0xe876, 0x2102, 0x308b, 0x0210, 0x1399, 0x6726, 0x76af, 0x4434, 0x55bd, 0xad4a, 0xbcc3, 0x8e58, 0x9fd1, 0xeb6e, 0xfae7, 0xc87c, 0xd9f5, 0x3183, 0x200a, 0x1291, 0x0318, 0x77a7, 0x662e, 0x54b5, 0x453c, 0xbdcb, 0xac42, 0x9ed9, 0x8f50, 0xfbef, 0xea66, 0xd8fd, 0xc974, 0x4204, 0x538d, 0x6116, 0x709f, 0x0420, 0x15a9, 0x2732, 0x36bb, 0xce4c, 0xdfc5, 0xed5e, 0xfcd7, 0x8868, 0x99e1, 0xab7a, 0xbaf3, 0x5285, 0x430c, 0x7197, 0x601e, 0x14a1, 0x0528, 0x37b3, 0x263a, 0xdecd, 0xcf44, 0xfddf, 0xec56, 0x98e9, 0x8960, 0xbbfb, 0xaa72, 0x6306, 0x728f, 0x4014, 0x519d, 0x2522, 0x34ab, 0x0630, 0x17b9, 0xef4e, 0xfec7, 0xcc5c, 0xddd5, 0xa96a, 0xb8e3, 0x8a78, 0x9bf1, 0x7387, 0x620e, 0x5095, 0x411c, 0x35a3, 0x242a, 0x16b1, 0x0738, 0xffcf, 0xee46, 0xdcdd, 0xcd54, 0xb9eb, 0xa862, 0x9af9, 0x8b70, 0x8408, 0x9581, 0xa71a, 0xb693, 0xc22c, 0xd3a5, 0xe13e, 0xf0b7, 0x0840, 0x19c9, 0x2b52, 0x3adb, 0x4e64, 0x5fed, 0x6d76, 0x7cff, 0x9489, 0x8500, 0xb79b, 0xa612, 0xd2ad, 0xc324, 0xf1bf, 0xe036, 0x18c1, 0x0948, 0x3bd3, 0x2a5a, 0x5ee5, 0x4f6c, 0x7df7, 0x6c7e, 0xa50a, 0xb483, 0x8618, 0x9791, 0xe32e, 0xf2a7, 0xc03c, 0xd1b5, 0x2942, 0x38cb, 0x0a50, 0x1bd9, 0x6f66, 0x7eef, 0x4c74, 0x5dfd, 0xb58b, 0xa402, 0x9699, 0x8710, 0xf3af, 0xe226, 0xd0bd, 0xc134, 0x39c3, 0x284a, 0x1ad1, 0x0b58, 0x7fe7, 0x6e6e, 0x5cf5, 0x4d7c, 0xc60c, 0xd785, 0xe51e, 0xf497, 0x8028, 0x91a1, 0xa33a, 0xb2b3, 0x4a44, 0x5bcd, 0x6956, 0x78df, 0x0c60, 0x1de9, 0x2f72, 0x3efb, 0xd68d, 0xc704, 0xf59f, 0xe416, 0x90a9, 0x8120, 0xb3bb, 0xa232, 0x5ac5, 0x4b4c, 0x79d7, 0x685e, 0x1ce1, 0x0d68, 0x3ff3, 0x2e7a, 0xe70e, 0xf687, 0xc41c, 0xd595, 0xa12a, 0xb0a3, 0x8238, 0x93b1, 0x6b46, 0x7acf, 0x4854, 0x59dd, 0x2d62, 0x3ceb, 0x0e70, 0x1ff9, 0xf78f, 0xe606, 0xd49d, 0xc514, 0xb1ab, 0xa022, 0x92b9, 0x8330, 0x7bc7, 0x6a4e, 0x58d5, 0x495c, 0x3de3, 0x2c6a, 0x1ef1, 0x0f78];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('kermit', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = typeof previous !== 'undefined' ? ~~previous : 0x0000;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
  }

  return crc;
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-drive --model=crc-24 --generate=c`
var TABLE = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('crc-24', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = typeof previous !== 'undefined' ? ~~previous : 0xb704ce;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = (TABLE[(crc >> 16 ^ byte) & 0xff] ^ crc << 8) & 0xffffff;
  }

  return crc;
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=crc-32 --generate=c`
var TABLE = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('crc-32', function (buf, previous) {
  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = previous === 0 ? 0 : ~~previous ^ -1;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = TABLE[(crc ^ byte) & 0xff] ^ crc >>> 8;
  }

  return crc ^ -1;
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buffer = __webpack_require__(12);

var _create_buffer = __webpack_require__(13);

var _create_buffer2 = _interopRequireDefault(_create_buffer);

var _define_crc = __webpack_require__(14);

var _define_crc2 = _interopRequireDefault(_define_crc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Generated by `./pycrc.py --algorithm=table-driven --model=jam --generate=c`
var TABLE = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

module.exports = (0, _define_crc2.default)('jam', function (buf) {
  var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  if (!_buffer.Buffer.isBuffer(buf)) buf = (0, _create_buffer2.default)(buf);

  var crc = previous === 0 ? 0 : ~~previous;

  for (var index = 0; index < buf.length; index++) {
    var byte = buf[index];
    crc = TABLE[(crc ^ byte) & 0xff] ^ crc >>> 8;
  }

  return crc;
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * uid-safe
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var randomBytes = __webpack_require__(42);

/**
 * Module variables.
 * @private
 */

var EQUAL_END_REGEXP = /=+$/;
var PLUS_GLOBAL_REGEXP = /\+/g;
var SLASH_GLOBAL_REGEXP = /\//g;

/**
 * Module exports.
 * @public
 */

module.exports = uid;
module.exports.sync = uidSync;

/**
 * Create a unique ID.
 *
 * @param {number} length
 * @param {function} [callback]
 * @return {Promise}
 * @public
 */

function uid(length, callback) {
  // validate callback is a function, if provided
  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('argument callback must be a function');
  }

  // require the callback without promises
  if (!callback && !global.Promise) {
    throw new TypeError('argument callback is required');
  }

  if (callback) {
    // classic callback style
    return generateUid(length, callback);
  }

  return new Promise(function executor(resolve, reject) {
    generateUid(length, function onUid(err, str) {
      if (err) return reject(err);
      resolve(str);
    });
  });
}

/**
 * Create a unique ID sync.
 *
 * @param {number} length
 * @return {string}
 * @public
 */

function uidSync(length) {
  return toString(randomBytes.sync(length));
}

/**
 * Generate a unique ID string.
 *
 * @param {number} length
 * @param {function} callback
 * @private
 */

function generateUid(length, callback) {
  randomBytes(length, function (err, buf) {
    if (err) return callback(err);
    callback(null, toString(buf));
  });
}

/**
 * Change a Buffer into a string.
 *
 * @param {Buffer} buf
 * @return {string}
 * @private
 */

function toString(buf) {
  return buf.toString('base64').replace(EQUAL_END_REGEXP, '').replace(PLUS_GLOBAL_REGEXP, '-').replace(SLASH_GLOBAL_REGEXP, '_');
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * random-bytes
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var crypto = __webpack_require__(43);

/**
 * Module variables.
 * @private
 */

var generateAttempts = crypto.randomBytes === crypto.pseudoRandomBytes ? 1 : 3;

/**
 * Module exports.
 * @public
 */

module.exports = randomBytes;
module.exports.sync = randomBytesSync;

/**
 * Generates strong pseudo-random bytes.
 *
 * @param {number} size
 * @param {function} [callback]
 * @return {Promise}
 * @public
 */

function randomBytes(size, callback) {
  // validate callback is a function, if provided
  if (callback !== undefined && typeof callback !== 'function') {
    throw new TypeError('argument callback must be a function');
  }

  // require the callback without promises
  if (!callback && !global.Promise) {
    throw new TypeError('argument callback is required');
  }

  if (callback) {
    // classic callback style
    return generateRandomBytes(size, generateAttempts, callback);
  }

  return new Promise(function executor(resolve, reject) {
    generateRandomBytes(size, generateAttempts, function onRandomBytes(err, str) {
      if (err) return reject(err);
      resolve(str);
    });
  });
}

/**
 * Generates strong pseudo-random bytes sync.
 *
 * @param {number} size
 * @return {Buffer}
 * @public
 */

function randomBytesSync(size) {
  var err = null;

  for (var i = 0; i < generateAttempts; i++) {
    try {
      return crypto.randomBytes(size);
    } catch (e) {
      err = e;
    }
  }

  throw err;
}

/**
 * Generates strong pseudo-random bytes.
 *
 * @param {number} size
 * @param {number} attempts
 * @param {function} callback
 * @private
 */

function generateRandomBytes(size, attempts, callback) {
  crypto.randomBytes(size, function onRandomBytes(err, buf) {
    if (!err) return callback(null, buf);
    if (! --attempts) return callback(err);
    setTimeout(generateRandomBytes.bind(null, size, attempts, callback), 10);
  });
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(45);
var isStearm = __webpack_require__(46);
var isClass = __webpack_require__(47);

/**
 * Expose all methods in core-util-is
 */

Object.keys(utils).map(function (name) {
  exports[transform(name)] = utils[name];
});

/**
 * Stream detected by isstream
 */

exports.stream = isStearm;
exports.readableStream = isStearm.isReadable;
exports.writableStream = isStearm.isWritable;
exports.duplexStream = isStearm.isDuplex;

/**
 * Class detected by is-class
 */
exports.class = isClass;

/**
 * Extend method
 */

exports.finite = function (obj) {
  return Number.isFinite(obj);
};

exports.NaN = function (obj) {
  return Number.isNaN(obj);
};

exports.generator = function (obj) {
  return obj && 'function' === typeof obj.next && 'function' === typeof obj.throw;
};

exports.generatorFunction = function (obj) {
  return obj && obj.constructor && 'GeneratorFunction' === obj.constructor.name;
};

exports.asyncFunction = function (obj) {
  return obj && obj.constructor && 'AsyncFunction' === obj.constructor.name;
};

exports.promise = function (obj) {
  return obj && 'function' === typeof obj.then;
};

var MAX_INT_31 = Math.pow(2, 31);

exports.int = function (obj) {
  return utils.isNumber(obj) && obj % 1 === 0;
};

exports.int32 = function (obj) {
  return exports.int(obj) && obj < MAX_INT_31 && obj >= -MAX_INT_31;
};

exports.long = function (obj) {
  return exports.int(obj) && (obj >= MAX_INT_31 || obj < -MAX_INT_31);
};

exports.Long = function (obj) {
  return exports.object(obj) && exports.number(obj.high) && exports.number(obj.low);
};

exports.double = function (obj) {
  return utils.isNumber(obj) && !isNaN(obj) && obj % 1 !== 0;
};

/**
 * override core-util-is
 */

exports.date = function isDate(obj) {
  return obj instanceof Date;
};

exports.regExp = function isRegExp(obj) {
  return obj instanceof RegExp;
};
exports.regexp = exports.regExp;

exports.error = function isError(obj) {
  return obj instanceof Error;
};

exports.array = function isArray(obj) {
  return Array.isArray(obj);
};

/**
 * transform isNull type to null
 * @param {[type]} m [description]
 * @return {[type]} [description]
 */

function transform(m) {
  var name = m.slice(2);
  name = name[0].toLowerCase() + name.slice(1);
  return name;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return objectToString(e) === '[object Error]' || e instanceof Error;
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stream = __webpack_require__(9);

function isStream(obj) {
  return obj instanceof stream.Stream;
}

function isReadable(obj) {
  return isStream(obj) && typeof obj._read == 'function' && _typeof(obj._readableState) == 'object';
}

function isWritable(obj) {
  return isStream(obj) && typeof obj._write == 'function' && _typeof(obj._writableState) == 'object';
}

function isDuplex(obj) {
  return isReadable(obj) && isWritable(obj);
}

module.exports = isStream;
module.exports.isReadable = isReadable;
module.exports.isWritable = isWritable;
module.exports.isDuplex = isDuplex;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (root) {
  var toString = Function.prototype.toString;

  function fnBody(fn) {
    return toString.call(fn).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
  }

  function isClass(fn) {
    return typeof fn === 'function' && (/^class\s/.test(toString.call(fn)) || /^.*classCallCheck\(/.test(fnBody(fn))) // babel.js
    ;
  }

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isClass;
    }
    exports.isClass = isClass;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return isClass;
    });
  } else {
    root.isClass = isClass;
  }
})(undefined);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTgzNGMyZmQ0M2M2NzIzMTI1ODIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmVhdGVfYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2RlZmluZV9jcmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9saWIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbGliL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmM4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzhfMXdpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfY2NpdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfbW9kYnVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X3htb2RlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxNl9rZXJtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjamFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aWQtc2FmZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmFuZG9tLWJ5dGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy10eXBlLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzc3RyZWFtL2lzc3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1jbGFzcy9pcy1jbGFzcy5qcyJdLCJuYW1lcyI6WyJwYWdlIiwiY3R4IiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImJvZHkiLCJ0aXRsZSIsImNoYXJzZXQiLCJjc3NIcmVmIiwic3RhcnRUaW1lIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJwcm9jZXNzIiwiaHJ0aW1lIiwiY29uc29sZSIsImluZm8iLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJrZXlzIiwiQ09ORklHIiwia2V5IiwibWF4QWdlIiwib3ZlcndyaXRlIiwiaHR0cE9ubHkiLCJzaWduZWQiLCJyb2xsaW5nIiwidXNlIiwibmV4dCIsInNlc3Npb24iLCJvayIsInJlZGlyZWN0IiwicGF0aCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIiwib24iLCJjb25uZWN0aW9uIiwid3MiLCJpbmNvbWluZyIsIm1lc3NhZ2UiLCJsb2ciLCJzZW5kIiwicm91dGVyIiwiZ2V0Iiwic3NlIiwiZGF0YU9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHJlYW0iLCJ0eXBlIiwic2V0IiwiY2xvc2UiLCJyZXMiLCJlbmQiLCJjbGVhckludGVydmFsIiwidXBkYXRlIiwicmVxIiwic2V0SW50ZXJ2YWwiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ2YWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ3cml0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIl9idWZmZXIiLCJyZXF1aXJlIiwiY3JlYXRlQnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFsbG9jIiwiYWxsb2NVbnNhZmUiLCJhbGxvY1Vuc2FmZVNsb3ciLCJ2YWwiLCJkZWZhdWx0IiwibW9kZWwiLCJjYWxjIiwiZm4iLCJidWYiLCJwcmV2aW91cyIsInVuc2lnbmVkIiwibW9kdWxlIiwiY3JlYXRlRGVidWciLCJkZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaHVtYW5pemUiLCJuYW1lcyIsInNraXBzIiwiZm9ybWF0dGVycyIsInByZXZUaW1lIiwic2VsZWN0Q29sb3IiLCJuYW1lc3BhY2UiLCJoYXNoIiwiaSIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJhYnMiLCJsZW5ndGgiLCJzZWxmIiwiY3VyciIsIm1zIiwicHJldiIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsInVuc2hpZnQiLCJpbmRleCIsInJlcGxhY2UiLCJtYXRjaCIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJzcGxpY2UiLCJmb3JtYXRBcmdzIiwibG9nRm4iLCJiaW5kIiwiYXBwbHkiLCJ1c2VDb2xvcnMiLCJjb2xvciIsImluaXQiLCJuYW1lc3BhY2VzIiwic2F2ZSIsInNwbGl0IiwibGVuIiwicHVzaCIsIlJlZ0V4cCIsInN1YnN0ciIsIm5hbWUiLCJ0ZXN0IiwiRXJyb3IiLCJzdGFjayIsImNyYyIsImNyYzMyIiwiZGVjb2RlIiwic3RyaW5nIiwidG9TdHJpbmciLCJqc29uIiwicGFyc2UiLCJlbmNvZGUiLCJzZXNzIiwiQ29udGV4dFNlc3Npb24iLCJ1dGlsIiwiYXNzZXJ0IiwidWlkIiwiaXMiLCJDT05URVhUX1NFU1NJT04iLCJTeW1ib2wiLCJfQ09OVEVYVF9TRVNTSU9OIiwib3B0cyIsIlR5cGVFcnJvciIsImZvcm1hdE9wdHMiLCJleHRlbmRDb250ZXh0IiwiY29udGV4dCIsInN0b3JlIiwiaW5pdEZyb21FeHRlcm5hbCIsImVyciIsImNvbW1pdCIsIm1heGFnZSIsImZ1bmN0aW9uIiwiZGVzdHJveSIsIkNvbnRleHRTdG9yZSIsImNsYXNzIiwicHJvdG90eXBlIiwiZ2VuaWQiLCJwcmVmaXgiLCJzeW5jIiwiZGVmaW5lUHJvcGVydGllcyIsImNvbmZpZ3VyYWJsZSIsImxvYWQiLCJzdG9yYWdlIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCIkMSIsImoiLCJ2IiwiYyIsImxhc3RDIiwiRnVuY3Rpb24iLCJyZW1vdmVJdGVtIiwiZSIsInIiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsInMiLCJtIiwiaCIsImQiLCJ5Iiwib3B0aW9ucyIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsInN0ciIsIlN0cmluZyIsImV4ZWMiLCJuIiwicGFyc2VGbG9hdCIsInVuZGVmaW5lZCIsInJvdW5kIiwicGx1cmFsIiwiZmxvb3IiLCJjZWlsIiwidHR5IiwiaW5zcGVjdE9wdHMiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJvYmoiLCJwcm9wIiwic3Vic3RyaW5nIiwiXyIsImsiLCJ0b1VwcGVyQ2FzZSIsIk51bWJlciIsImZkIiwiREVCVUdfRkQiLCJkZXByZWNhdGUiLCJzdGRvdXQiLCJzdGRlcnIiLCJjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtIiwiQm9vbGVhbiIsImlzYXR0eSIsIm8iLCJpbnNwZWN0IiwibWFwIiwidHJpbSIsImpvaW4iLCJPIiwidG9VVENTdHJpbmciLCJ0dHlfd3JhcCIsImJpbmRpbmciLCJndWVzc0hhbmRsZVR5cGUiLCJXcml0ZVN0cmVhbSIsIl90eXBlIiwiX2hhbmRsZSIsInVucmVmIiwiZnMiLCJTeW5jV3JpdGVTdHJlYW0iLCJhdXRvQ2xvc2UiLCJuZXQiLCJTb2NrZXQiLCJyZWFkYWJsZSIsIndyaXRhYmxlIiwicmVhZCIsIl9pc1N0ZGlvIiwiU2Vzc2lvbiIsIk9ORV9EQVkiLCJpbml0RnJvbUNvb2tpZSIsImNyZWF0ZSIsImV4dGVybmFsS2V5IiwiY29va2llcyIsInZhbGlkIiwicHJldkhhc2giLCJ0b0pTT04iLCJjb29raWUiLCJTeW50YXhFcnJvciIsImhlYWRlcnMiLCJyZXNwb25zZSIsIl9leHBpcmUiLCJub3ciLCJyZW1vdmUiLCJjaGFuZ2VkIiwiX3JlcXVpcmVTYXZlIiwiYmVmb3JlU2F2ZSIsIl9tYXhBZ2UiLCJfY3R4IiwiaXNOZXciLCJzZXNzaW9uT3B0aW9ucyIsImZvckVhY2giLCJjcmMxIiwiY3JjOCIsImNyYzgxd2lyZSIsImNyYzE2IiwiY3JjMTZjY2l0dCIsImNyYzE2bW9kYnVzIiwiY3JjMTZ4bW9kZW0iLCJjcmMxNmtlcm1pdCIsImNyYzI0IiwiY3JjamFtIiwiX2NyZWF0ZV9idWZmZXIiLCJfY3JlYXRlX2J1ZmZlcjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2RlZmluZV9jcmMiLCJfZGVmaW5lX2NyYzIiLCJfX2VzTW9kdWxlIiwiaXNCdWZmZXIiLCJhY2N1bSIsImJ5dGUiLCJUQUJMRSIsIkludDMyQXJyYXkiLCJjb2RlIiwicmFuZG9tQnl0ZXMiLCJFUVVBTF9FTkRfUkVHRVhQIiwiUExVU19HTE9CQUxfUkVHRVhQIiwiU0xBU0hfR0xPQkFMX1JFR0VYUCIsInVpZFN5bmMiLCJjYWxsYmFjayIsImdsb2JhbCIsIlByb21pc2UiLCJnZW5lcmF0ZVVpZCIsImV4ZWN1dG9yIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uVWlkIiwiY3J5cHRvIiwiZ2VuZXJhdGVBdHRlbXB0cyIsInBzZXVkb1JhbmRvbUJ5dGVzIiwicmFuZG9tQnl0ZXNTeW5jIiwic2l6ZSIsImdlbmVyYXRlUmFuZG9tQnl0ZXMiLCJvblJhbmRvbUJ5dGVzIiwiYXR0ZW1wdHMiLCJzZXRUaW1lb3V0IiwidXRpbHMiLCJpc1N0ZWFybSIsImlzQ2xhc3MiLCJ0cmFuc2Zvcm0iLCJyZWFkYWJsZVN0cmVhbSIsImlzUmVhZGFibGUiLCJ3cml0YWJsZVN0cmVhbSIsImlzV3JpdGFibGUiLCJkdXBsZXhTdHJlYW0iLCJpc0R1cGxleCIsImZpbml0ZSIsImlzRmluaXRlIiwiTmFOIiwiZ2VuZXJhdG9yIiwidGhyb3ciLCJnZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwiYXN5bmNGdW5jdGlvbiIsInByb21pc2UiLCJ0aGVuIiwiTUFYX0lOVF8zMSIsInBvdyIsImludCIsImlzTnVtYmVyIiwiaW50MzIiLCJMb25nIiwib2JqZWN0IiwibnVtYmVyIiwiaGlnaCIsImxvdyIsImRvdWJsZSIsImRhdGUiLCJpc0RhdGUiLCJyZWdFeHAiLCJpc1JlZ0V4cCIsInJlZ2V4cCIsImVycm9yIiwiaXNFcnJvciIsImFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiYXJnIiwib2JqZWN0VG9TdHJpbmciLCJpc0Jvb2xlYW4iLCJpc051bGwiLCJpc051bGxPclVuZGVmaW5lZCIsImlzU3RyaW5nIiwiaXNTeW1ib2wiLCJpc1VuZGVmaW5lZCIsInJlIiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwiaXNQcmltaXRpdmUiLCJpc1N0cmVhbSIsIlN0cmVhbSIsIl9yZWFkIiwiX3JlYWRhYmxlU3RhdGUiLCJfd3JpdGUiLCJfd3JpdGFibGVTdGF0ZSIsInJvb3QiLCJmbkJvZHkiLCJkZWZpbmUiLCJhbWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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TUFLTyxJQUFJLE9BQU8yRCxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxPQUFPQyxHQUEzQyxFQUFnRDtBQUNyREQsV0FBTyxFQUFQLEVBQVcsWUFBVztBQUNwQixhQUFPM0QsT0FBUDtBQUNELEtBRkQ7QUFHRCxHQUpNLE1BSUE7QUFDTHlELFNBQUt6RCxPQUFMLEdBQWVBLE9BQWY7QUFDRDtBQUVGLENBM0JELGEiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTgzNGMyZmQ0M2M2NzIzMTI1ODIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlZmF1bHQgcGFnZSB0ZW1wYWxhdGVcbmNvbnN0IHBhZ2UgPSAoY3R4KSA9PiBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAke2hlYWRlcl90cGwoY3R4KX1cbiAgICAke2JvZHlfdHBsKGN0eCl9XG4gICAgJHtmb290ZXJfdHBsKGN0eCl9XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2luZGV4LmpzXCI+PC9zY3JpcHQ+XG48L2h0bWw+YDtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcblxuLy8gYm9keSB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGJvZHlfdHBsID0gKHtib2R5PWA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PmB9PXt9KSA9PiB7XG4gICAgcmV0dXJuIGA8Ym9keT4ke2JvZHl9PC9ib2R5PmA7XG59XG5cbi8vIGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGhlYWRlcl90cGwgPSAoe3RpdGxlPVwic2VydmVyVGVtcGxhdGVcIiwgY2hhcnNldD1cIlVURi04XCIsIGNzc0hyZWY9XCJwdWJsaWMvY3NzL3N0eWxlLmNzc1wifT17fSkgPT4gYDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCIke2NoYXJzZXR9XCIvPlxuICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9jb3JlLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NIcmVmfVwiIC8+XG48L2hlYWQ+YDtcblxuLy8gZm9vdGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgZm9vdGVyX3RwbCA9ICh7c3RhcnRUaW1lfSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RhcnRUaW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IE5TX1BFUl9TRUMgPSAxZTk7XG4gICAgY29uc3QgZGlmZiA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0VGltZSk7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8c21hbGw+UGFnZSBnZW5lcmF0ZSB0aW1lOiAke2RpZmZbMF0gKiBOU19QRVJfU0VDICsgZGlmZlsxXX0gbmFub3NlY29uZHM8L3NtYWxsPlxuICAgICAgICAgICAgPC9mb290ZXI+YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2tvYS1sb2dnZXInO1xuaW1wb3J0IHNlc3Npb24gZnJvbSAna29hLXNlc3Npb24nO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9yb3V0ZXMvcm9vdCc7XG5pbXBvcnQgc2VlZCBmcm9tICcuL3JvdXRlcy9zZWVkJztcbmltcG9ydCBsb2dpbiBmcm9tICcuL3JvdXRlcy9sb2dpbic7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuY29uc29sZS5pbmZvKCdFbnY6JywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG4vLyBjcmVhdGUga29hIHNlcnZlclxuY29uc3QgYXBwID0gbmV3IEtvYSgpOyBcbmNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXQuU2VydmVyKHsgcG9ydDogODA4MSB9KTtcblxuYXBwLmtleXMgPSBbJ3NvbWUgc2VjcmV0IGh1cnInXTtcbmNvbnN0IENPTkZJRyA9IHtcbiAga2V5OiAna29hOnNlc3MnLCAvKiogKHN0cmluZykgY29va2llIGtleSAoZGVmYXVsdCBpcyBrb2E6c2VzcykgKi9cbiAgLyoqIChudW1iZXIgfHwgJ3Nlc3Npb24nKSBtYXhBZ2UgaW4gbXMgKGRlZmF1bHQgaXMgMSBkYXlzKSAqL1xuICAvKiogJ3Nlc3Npb24nIHdpbGwgcmVzdWx0IGluIGEgY29va2llIHRoYXQgZXhwaXJlcyB3aGVuIHNlc3Npb24vYnJvd3NlciBpcyBjbG9zZWQgKi9cbiAgLyoqIFdhcm5pbmc6IElmIGEgc2Vzc2lvbiBjb29raWUgaXMgc3RvbGVuLCB0aGlzIGNvb2tpZSB3aWxsIG5ldmVyIGV4cGlyZSAqL1xuICBtYXhBZ2U6IDg2NDAwMDAwLFxuICBvdmVyd3JpdGU6IHRydWUsIC8qKiAoYm9vbGVhbikgY2FuIG92ZXJ3cml0ZSBvciBub3QgKGRlZmF1bHQgdHJ1ZSkgKi9cbiAgaHR0cE9ubHk6IHRydWUsIC8qKiAoYm9vbGVhbikgaHR0cE9ubHkgb3Igbm90IChkZWZhdWx0IHRydWUpICovXG4gIHNpZ25lZDogdHJ1ZSwgLyoqIChib29sZWFuKSBzaWduZWQgb3Igbm90IChkZWZhdWx0IHRydWUpICovXG4gIHJvbGxpbmc6IGZhbHNlLCAvKiogKGJvb2xlYW4pIEZvcmNlIGEgc2Vzc2lvbiBpZGVudGlmaWVyIGNvb2tpZSB0byBiZSBzZXQgb24gZXZlcnkgcmVzcG9uc2UuIFRoZSBleHBpcmF0aW9uIGlzIHJlc2V0IHRvIHRoZSBvcmlnaW5hbCBtYXhBZ2UsIHJlc2V0dGluZyB0aGUgZXhwaXJhdGlvbiBjb3VudGRvd24uIGRlZmF1bHQgaXMgZmFsc2UgKiovXG59O1xuXG5hcHAudXNlKHNlc3Npb24oQ09ORklHLCBhcHApKTtcblxuLy8gdXNlIGxvZ2dlciwgcm91dGVzXG5hcHAudXNlKGxvZ2dlcigpKVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnKSB7XG4gICAgICAgICAgICBjdHguZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV4dCgpO1xuICAgIH0pXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChjdHguc2Vzc2lvbi5vayAhPT0gMSkge1xuICAgICAgICAgICAgY3R4LnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LnNlc3Npb24ub2sgPT09IDEgJiYgY3R4LnBhdGggPT09Jy9sb2dpbicpIHtcbiAgICAgICAgICAgIGN0eC5yZWRpcmVjdCgnLycpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9KVxuICAgIC51c2UobG9naW4ucm91dGVzKCkpXG4gICAgLnVzZShyb290LnJvdXRlcygpKVxuICAgIC51c2Uoc2VlZC5yb3V0ZXMoKSlcbiAgICAudXNlKHJvb3QuYWxsb3dlZE1ldGhvZHMoKSlcbiAgICAubGlzdGVuKDMwMDApO1xuXG4vLyBUT0RPOiBjb21iaW5lIHdzIHdpdGggS29hIGZvciBiZXR0ZXIgYW5kIGVhc3kgZGV2XG53c3Mub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbiBjb25uZWN0aW9uKHdzKSB7XG4gICAgICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uIGluY29taW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkOiAlcycsIG1lc3NhZ2UpO1xuICAgICAgICB3cy5zZW5kKG1lc3NhZ2UpO1xuICAgICAgfSk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2EtYmV0dGVyLXN0YXRpYzInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gYEVgO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1iZXR0ZXItc3RhdGljMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IHtQYXNzVGhyb3VnaH0gZnJvbSAnc3RyZWFtJztcclxuXHJcbi8vIGNyZWF0ZSByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5jb25zdCBzc2UgPSAoZGF0YU9iaikgPT4ge1xyXG4gIHJldHVybiBgZGF0YTogJHsgSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfVxcblxcbmBcclxufVxyXG5cclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvc2VlZCcsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xyXG5cclxuICAgIGN0eC50eXBlID0gJ3RleHQvZXZlbnQtc3RyZWFtOyBjaGFyc2V0PXV0Zi04JztcclxuICAgIGN0eC5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgIGN0eC5zZXQoJ0Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5yZXEub24oJ2Nsb3NlJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZmluaXNoJywgY2xvc2UpO1xyXG4gICAgY3R4LnJlcS5vbignZXJyb3InLCBjbG9zZSk7XHJcblxyXG4gICAgbGV0IHVwZGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YU9iaiA9IHtcclxuICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgdmFsdWU6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0cmVhbS53cml0ZShzc2UoZGF0YU9iaikpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgY3R4LmJvZHkgPSBzdHJlYW07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9zZWVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyZWFtXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbi8vIGNyZWF0ZSByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG4vLyByb290XHJcbnJvdXRlci5nZXQoJy9sb2dpbicsIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuXHJcbiAgICBjdHguYm9keSA9ICdsb2dpbic7XHJcbiAgICBjdHguc2Vzc2lvbi5vayA9IDE7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy9sb2dpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJ1ZmZlclwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBjcmVhdGVCdWZmZXIgPSBfYnVmZmVyLkJ1ZmZlci5mcm9tICYmIF9idWZmZXIuQnVmZmVyLmFsbG9jICYmIF9idWZmZXIuQnVmZmVyLmFsbG9jVW5zYWZlICYmIF9idWZmZXIuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA/IF9idWZmZXIuQnVmZmVyLmZyb21cblxuLy8gc3VwcG9ydCBmb3IgTm9kZSA8IDUuMTBcbjogZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gbmV3IF9idWZmZXIuQnVmZmVyKHZhbCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCdWZmZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JlYXRlX2J1ZmZlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobW9kZWwsIGNhbGMpIHtcbiAgdmFyIGZuID0gZnVuY3Rpb24gZm4oYnVmLCBwcmV2aW91cykge1xuICAgIHJldHVybiBjYWxjKGJ1ZiwgcHJldmlvdXMpID4+PiAwO1xuICB9O1xuICBmbi5zaWduZWQgPSBjYWxjO1xuICBmbi51bnNpZ25lZCA9IGZuO1xuICBmbi5tb2RlbCA9IG1vZGVsO1xuXG4gIHJldHVybiBmbjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvZGVmaW5lX2NyYy5qcyIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmMgPSByZXF1aXJlKCdjcmMnKS5jcmMzMjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIERlY29kZSB0aGUgYmFzZTY0IGNvb2tpZSB2YWx1ZSB0byBhbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZGVjb2RlKHN0cmluZykge1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgQnVmZmVyKHN0cmluZywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgcmV0dXJuIGpzb247XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuY29kZSBhbiBvYmplY3QgaW50byBhIGJhc2U2NC1lbmNvZGVkIEpTT04gc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYm9keVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBlbmNvZGUoYm9keSkge1xuICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihib2R5KS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH0sXG5cbiAgaGFzaChzZXNzKSB7XG4gICAgcmV0dXJuIGNyYyhKU09OLnN0cmluZ2lmeShzZXNzKSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL2xpYi91dGlsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2tvYS1zZXNzaW9uJyk7XG5jb25zdCBDb250ZXh0U2Vzc2lvbiA9IHJlcXVpcmUoJy4vbGliL2NvbnRleHQnKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL2xpYi91dGlsJyk7XG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbmNvbnN0IHVpZCA9IHJlcXVpcmUoJ3VpZC1zYWZlJyk7XG5jb25zdCBpcyA9IHJlcXVpcmUoJ2lzLXR5cGUtb2YnKTtcblxuY29uc3QgQ09OVEVYVF9TRVNTSU9OID0gU3ltYm9sKCdjb250ZXh0I2NvbnRleHRTZXNzaW9uJyk7XG5jb25zdCBfQ09OVEVYVF9TRVNTSU9OID0gU3ltYm9sKCdjb250ZXh0I19jb250ZXh0U2Vzc2lvbicpO1xuXG4vKipcbiAqIEluaXRpYWxpemUgc2Vzc2lvbiBtaWRkbGV3YXJlIHdpdGggYG9wdHNgOlxuICpcbiAqIC0gYGtleWAgc2Vzc2lvbiBjb29raWUgbmFtZSBbXCJrb2E6c2Vzc1wiXVxuICogLSBhbGwgb3RoZXIgb3B0aW9ucyBhcmUgcGFzc2VkIGFzIGNvb2tpZSBvcHRpb25zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICogQHBhcmFtIHtBcHBsaWNhdGlvbn0gYXBwLCBrb2EgYXBwbGljYXRpb24gaW5zdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRzLCBhcHApIHtcbiAgLy8gc2Vzc2lvbihhcHBbLCBvcHRzXSlcbiAgaWYgKG9wdHMgJiYgdHlwZW9mIG9wdHMudXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgWyBhcHAsIG9wdHMgXSA9IFsgb3B0cywgYXBwIF07XG4gIH1cbiAgLy8gYXBwIHJlcXVpcmVkXG4gIGlmICghYXBwIHx8IHR5cGVvZiBhcHAudXNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXBwIGluc3RhbmNlIHJlcXVpcmVkOiBgc2Vzc2lvbihvcHRzLCBhcHApYCcpO1xuICB9XG5cbiAgb3B0cyA9IGZvcm1hdE9wdHMob3B0cyk7XG4gIGV4dGVuZENvbnRleHQoYXBwLmNvbnRleHQsIG9wdHMpO1xuXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBzZXNzaW9uKGN0eCwgbmV4dCkge1xuICAgIGNvbnN0IHNlc3MgPSBjdHhbQ09OVEVYVF9TRVNTSU9OXTtcbiAgICBpZiAoc2Vzcy5zdG9yZSkgYXdhaXQgc2Vzcy5pbml0RnJvbUV4dGVybmFsKCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgc2Vzcy5jb21taXQoKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIGZvcm1hdCBhbmQgY2hlY2sgc2Vzc2lvbiBvcHRpb25zXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdHMgc2Vzc2lvbiBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5ldyBzZXNzaW9uIG9wdGlvbnNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRPcHRzKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIC8vIGtleVxuICBvcHRzLmtleSA9IG9wdHMua2V5IHx8ICdrb2E6c2Vzcyc7XG5cbiAgLy8gYmFjay1jb21wYXQgbWF4YWdlXG4gIGlmICghKCdtYXhBZ2UnIGluIG9wdHMpKSBvcHRzLm1heEFnZSA9IG9wdHMubWF4YWdlO1xuXG4gIC8vIGRlZmF1bHRzXG4gIGlmIChvcHRzLm92ZXJ3cml0ZSA9PSBudWxsKSBvcHRzLm92ZXJ3cml0ZSA9IHRydWU7XG4gIGlmIChvcHRzLmh0dHBPbmx5ID09IG51bGwpIG9wdHMuaHR0cE9ubHkgPSB0cnVlO1xuICBpZiAob3B0cy5zaWduZWQgPT0gbnVsbCkgb3B0cy5zaWduZWQgPSB0cnVlO1xuXG4gIGRlYnVnKCdzZXNzaW9uIG9wdGlvbnMgJWonLCBvcHRzKTtcblxuICAvLyBzZXR1cCBlbmNvZGluZy9kZWNvZGluZ1xuICBpZiAodHlwZW9mIG9wdHMuZW5jb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0cy5lbmNvZGUgPSB1dGlsLmVuY29kZTtcbiAgfVxuICBpZiAodHlwZW9mIG9wdHMuZGVjb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0cy5kZWNvZGUgPSB1dGlsLmRlY29kZTtcbiAgfVxuXG4gIGNvbnN0IHN0b3JlID0gb3B0cy5zdG9yZTtcbiAgaWYgKHN0b3JlKSB7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKHN0b3JlLmdldCksICdzdG9yZS5nZXQgbXVzdCBiZSBmdW5jdGlvbicpO1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihzdG9yZS5zZXQpLCAnc3RvcmUuc2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oc3RvcmUuZGVzdHJveSksICdzdG9yZS5kZXN0cm95IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGNvbnN0IENvbnRleHRTdG9yZSA9IG9wdHMuQ29udGV4dFN0b3JlO1xuICBpZiAoQ29udGV4dFN0b3JlKSB7XG4gICAgYXNzZXJ0KGlzLmNsYXNzKENvbnRleHRTdG9yZSksICdDb250ZXh0U3RvcmUgbXVzdCBiZSBhIGNsYXNzJyk7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKENvbnRleHRTdG9yZS5wcm90b3R5cGUuZ2V0KSwgJ0NvbnRleHRTdG9yZS5wcm90b3R5cGUuZ2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oQ29udGV4dFN0b3JlLnByb3RvdHlwZS5zZXQpLCAnQ29udGV4dFN0b3JlLnByb3RvdHlwZS5zZXQgbXVzdCBiZSBmdW5jdGlvbicpO1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihDb250ZXh0U3RvcmUucHJvdG90eXBlLmRlc3Ryb3kpLCAnQ29udGV4dFN0b3JlLnByb3RvdHlwZS5kZXN0cm95IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICghb3B0cy5nZW5pZCkge1xuICAgIGlmIChvcHRzLnByZWZpeCkgb3B0cy5nZW5pZCA9ICgpID0+IG9wdHMucHJlZml4ICsgdWlkLnN5bmMoMjQpO1xuICAgIGVsc2Ugb3B0cy5nZW5pZCA9ICgpID0+IHVpZC5zeW5jKDI0KTtcbiAgfVxuXG4gIHJldHVybiBvcHRzO1xufVxuXG4vKipcbiAqIGV4dGVuZCBjb250ZXh0IHByb3RvdHlwZSwgYWRkIHNlc3Npb24gcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gY29udGV4dCBrb2EncyBjb250ZXh0IHByb3RvdHlwZVxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzIHNlc3Npb24gb3B0aW9uc1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGV4dGVuZENvbnRleHQoY29udGV4dCwgb3B0cykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb250ZXh0LCB7XG4gICAgW0NPTlRFWFRfU0VTU0lPTl06IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXNbX0NPTlRFWFRfU0VTU0lPTl0pIHJldHVybiB0aGlzW19DT05URVhUX1NFU1NJT05dO1xuICAgICAgICB0aGlzW19DT05URVhUX1NFU1NJT05dID0gbmV3IENvbnRleHRTZXNzaW9uKHRoaXMsIG9wdHMpO1xuICAgICAgICByZXR1cm4gdGhpc1tfQ09OVEVYVF9TRVNTSU9OXTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0NPTlRFWFRfU0VTU0lPTl0uZ2V0KCk7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICB0aGlzW0NPTlRFWFRfU0VTU0lPTl0uc2V0KHZhbCk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgc2Vzc2lvbk9wdGlvbnM6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbQ09OVEVYVF9TRVNTSU9OXS5vcHRzO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9pbmRleC5qcyIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gIC8vIGNhbWVsLWNhc2VcbiAgdmFyIHByb3AgPSBrZXlcbiAgICAuc3Vic3RyaW5nKDYpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXyhbYS16XSkvZywgZnVuY3Rpb24gKF8sIGspIHsgcmV0dXJuIGsudG9VcHBlckNhc2UoKSB9KTtcblxuICAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcbiAgdmFyIHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG4gIGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IHRydWU7XG4gIGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSBmYWxzZTtcbiAgZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHZhbCA9IG51bGw7XG4gIGVsc2UgdmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgb2JqW3Byb3BdID0gdmFsO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIFRoZSBmaWxlIGRlc2NyaXB0b3IgdG8gd3JpdGUgdGhlIGBkZWJ1ZygpYCBjYWxscyB0by5cbiAqIFNldCB0aGUgYERFQlVHX0ZEYCBlbnYgdmFyaWFibGUgdG8gb3ZlcnJpZGUgd2l0aCBhbm90aGVyIHZhbHVlLiBpLmUuOlxuICpcbiAqICAgJCBERUJVR19GRD0zIG5vZGUgc2NyaXB0LmpzIDM+ZGVidWcubG9nXG4gKi9cblxudmFyIGZkID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuREVCVUdfRkQsIDEwKSB8fCAyO1xuXG5pZiAoMSAhPT0gZmQgJiYgMiAhPT0gZmQpIHtcbiAgdXRpbC5kZXByZWNhdGUoZnVuY3Rpb24oKXt9LCAnZXhjZXB0IGZvciBzdGRlcnIoMikgYW5kIHN0ZG91dCgxKSwgYW55IG90aGVyIHVzYWdlIG9mIERFQlVHX0ZEIGlzIGRlcHJlY2F0ZWQuIE92ZXJyaWRlIGRlYnVnLmxvZyBpZiB5b3Ugd2FudCB0byB1c2UgYSBkaWZmZXJlbnQgbG9nIGZ1bmN0aW9uIChodHRwczovL2dpdC5pby9kZWJ1Z19mZCknKSgpXG59XG5cbnZhciBzdHJlYW0gPSAxID09PSBmZCA/IHByb2Nlc3Muc3Rkb3V0IDpcbiAgICAgICAgICAgICAyID09PSBmZCA/IHByb2Nlc3Muc3RkZXJyIDpcbiAgICAgICAgICAgICBjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtKGZkKTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICByZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0c1xuICAgID8gQm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycylcbiAgICA6IHR0eS5pc2F0dHkoZmQpO1xufVxuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKVxuICAgIC5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50cmltKClcbiAgICB9KS5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlO1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgcHJlZml4ID0gJyAgXFx1MDAxYlszJyArIGMgKyAnOzFtJyArIG5hbWUgKyAnICcgKyAnXFx1MDAxYlswbSc7XG5cbiAgICBhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXS5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIHByZWZpeCk7XG4gICAgYXJncy5wdXNoKCdcXHUwMDFiWzMnICsgYyArICdtKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxYlswbScpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3NbMF0gPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKClcbiAgICAgICsgJyAnICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZva2VzIGB1dGlsLmZvcm1hdCgpYCB3aXRoIHRoZSBzcGVjaWZpZWQgYXJndW1lbnRzIGFuZCB3cml0ZXMgdG8gYHN0cmVhbWAuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gc3RyZWFtLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgLy8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG4gICAgLy8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cbiAgICBkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuICB9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIENvcGllZCBmcm9tIGBub2RlL3NyYy9ub2RlLmpzYC5cbiAqXG4gKiBYWFg6IEl0J3MgbGFtZSB0aGF0IG5vZGUgZG9lc24ndCBleHBvc2UgdGhpcyBBUEkgb3V0LW9mLXRoZS1ib3guIEl0IGFsc29cbiAqIHJlbGllcyBvbiB0aGUgdW5kb2N1bWVudGVkIGB0dHlfd3JhcC5ndWVzc0hhbmRsZVR5cGUoKWAgd2hpY2ggaXMgYWxzbyBsYW1lLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVdyaXRhYmxlU3RkaW9TdHJlYW0gKGZkKSB7XG4gIHZhciBzdHJlYW07XG4gIHZhciB0dHlfd3JhcCA9IHByb2Nlc3MuYmluZGluZygndHR5X3dyYXAnKTtcblxuICAvLyBOb3RlIHN0cmVhbS5fdHlwZSBpcyB1c2VkIGZvciB0ZXN0LW1vZHVsZS1sb2FkLWxpc3QuanNcblxuICBzd2l0Y2ggKHR0eV93cmFwLmd1ZXNzSGFuZGxlVHlwZShmZCkpIHtcbiAgICBjYXNlICdUVFknOlxuICAgICAgc3RyZWFtID0gbmV3IHR0eS5Xcml0ZVN0cmVhbShmZCk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAndHR5JztcblxuICAgICAgLy8gSGFjayB0byBoYXZlIHN0cmVhbSBub3Qga2VlcCB0aGUgZXZlbnQgbG9vcCBhbGl2ZS5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MjZcbiAgICAgIGlmIChzdHJlYW0uX2hhbmRsZSAmJiBzdHJlYW0uX2hhbmRsZS51bnJlZikge1xuICAgICAgICBzdHJlYW0uX2hhbmRsZS51bnJlZigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdGSUxFJzpcbiAgICAgIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICBzdHJlYW0gPSBuZXcgZnMuU3luY1dyaXRlU3RyZWFtKGZkLCB7IGF1dG9DbG9zZTogZmFsc2UgfSk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAnZnMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQSVBFJzpcbiAgICBjYXNlICdUQ1AnOlxuICAgICAgdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuICAgICAgc3RyZWFtID0gbmV3IG5ldC5Tb2NrZXQoe1xuICAgICAgICBmZDogZmQsXG4gICAgICAgIHJlYWRhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGSVhNRSBTaG91bGQgcHJvYmFibHkgaGF2ZSBhbiBvcHRpb24gaW4gbmV0LlNvY2tldCB0byBjcmVhdGUgYVxuICAgICAgLy8gc3RyZWFtIGZyb20gYW4gZXhpc3RpbmcgZmQgd2hpY2ggaXMgd3JpdGFibGUgb25seS4gQnV0IGZvciBub3dcbiAgICAgIC8vIHdlJ2xsIGp1c3QgYWRkIHRoaXMgaGFjayBhbmQgc2V0IHRoZSBgcmVhZGFibGVgIG1lbWJlciB0byBmYWxzZS5cbiAgICAgIC8vIFRlc3Q6IC4vbm9kZSB0ZXN0L2ZpeHR1cmVzL2VjaG8uanMgPCAvZXRjL3Bhc3N3ZFxuICAgICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVhZCA9IG51bGw7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAncGlwZSc7XG5cbiAgICAgIC8vIEZJWE1FIEhhY2sgdG8gaGF2ZSBzdHJlYW0gbm90IGtlZXAgdGhlIGV2ZW50IGxvb3AgYWxpdmUuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzI2XG4gICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiYgc3RyZWFtLl9oYW5kbGUudW5yZWYpIHtcbiAgICAgICAgc3RyZWFtLl9oYW5kbGUudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFByb2JhYmx5IGFuIGVycm9yIG9uIGluIHV2X2d1ZXNzX2hhbmRsZSgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcGxlbWVudCBtZS4gVW5rbm93biBzdHJlYW0gZmlsZSB0eXBlIScpO1xuICB9XG5cbiAgLy8gRm9yIHN1cHBvcnRpbmcgbGVnYWN5IEFQSSB3ZSBwdXQgdGhlIEZEIGhlcmUuXG4gIHN0cmVhbS5mZCA9IGZkO1xuXG4gIHN0cmVhbS5faXNTdGRpbyA9IHRydWU7XG5cbiAgcmV0dXJuIHN0cmVhbTtcbn1cblxuLyoqXG4gKiBJbml0IGxvZ2ljIGZvciBgZGVidWdgIGluc3RhbmNlcy5cbiAqXG4gKiBDcmVhdGUgYSBuZXcgYGluc3BlY3RPcHRzYCBvYmplY3QgaW4gY2FzZSBgdXNlQ29sb3JzYCBpcyBzZXRcbiAqIGRpZmZlcmVudGx5IGZvciBhIHBhcnRpY3VsYXIgYGRlYnVnYCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBpbml0IChkZWJ1Zykge1xuICBkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgcHJvY2Vzcy5lbnYuREVCVUdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvbm9kZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInR0eVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5ldFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgna29hLXNlc3Npb246Y29udGV4dCcpO1xuY29uc3QgU2Vzc2lvbiA9IHJlcXVpcmUoJy4vc2Vzc2lvbicpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBPTkVfREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuY2xhc3MgQ29udGV4dFNlc3Npb24ge1xuICAvKipcbiAgICogY29udGV4dCBzZXNzaW9uIGNvbnN0cnVjdG9yXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGN0eCwgb3B0cykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMub3B0cyA9IG9wdHMgfHwge307XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMub3B0cy5Db250ZXh0U3RvcmUgPyBuZXcgdGhpcy5vcHRzLkNvbnRleHRTdG9yZShjdHgpIDogdGhpcy5vcHRzLnN0b3JlO1xuICB9XG5cbiAgLyoqXG4gICAqIGludGVybmFsIGxvZ2ljIG9mIGBjdHguc2Vzc2lvbmBcbiAgICogQHJldHVybiB7U2Vzc2lvbn0gc2Vzc2lvbiBvYmplY3RcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0KCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnNlc3Npb247XG4gICAgLy8gYWxyZWFkeSByZXRyaWV2ZWRcbiAgICBpZiAoc2Vzc2lvbikgcmV0dXJuIHNlc3Npb247XG4gICAgLy8gdW5zZXRcbiAgICBpZiAoc2Vzc2lvbiA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXG4gICAgLy8gY29va2llIHNlc3Npb24gc3RvcmVcbiAgICBpZiAoIXRoaXMuc3RvcmUpIHRoaXMuaW5pdEZyb21Db29raWUoKTtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIGludGVybmFsIGxvZ2ljIG9mIGBjdHguc2Vzc2lvbj1gXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgc2Vzc2lvbiBvYmplY3RcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0KHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIHVzZSB0aGUgb3JpZ2luYWwgYGV4dGVybmFsS2V5YCBpZiBleGlzdHMgdG8gYXZvaWQgd2FzdGUgc3RvcmFnZVxuICAgICAgdGhpcy5jcmVhdGUodmFsLCB0aGlzLmV4dGVybmFsS2V5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0aGlzLnNlc3Npb24gY2FuIG9ubHkgYmUgc2V0IGFzIG51bGwgb3IgYW4gb2JqZWN0LicpO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXQgc2Vzc2lvbiBmcm9tIGV4dGVybmFsIHN0b3JlXG4gICAqIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBmcm9udCBvZiBzZXNzaW9uIG1pZGRsZXdhcmVcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXN5bmMgaW5pdEZyb21FeHRlcm5hbCgpIHtcbiAgICBkZWJ1ZygnaW5pdCBmcm9tIGV4dGVybmFsJyk7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcblxuICAgIGNvbnN0IGV4dGVybmFsS2V5ID0gY3R4LmNvb2tpZXMuZ2V0KG9wdHMua2V5LCBvcHRzKTtcbiAgICBkZWJ1ZygnZ2V0IGV4dGVybmFsIGtleSBmcm9tIGNvb2tpZSAlcycsIGV4dGVybmFsS2V5KTtcblxuICAgIGlmICghZXh0ZXJuYWxLZXkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIG5ldyBgZXh0ZXJuYWxLZXlgXG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCB0aGlzLnN0b3JlLmdldChleHRlcm5hbEtleSwgb3B0cy5tYXhBZ2UsIHsgcm9sbGluZzogb3B0cy5yb2xsaW5nIH0pO1xuICAgIGlmICghdGhpcy52YWxpZChqc29uKSkge1xuICAgICAgLy8gY3JlYXRlIGEgbmV3IGBleHRlcm5hbEtleWBcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHdpdGggb3JpZ2luYWwgYGV4dGVybmFsS2V5YFxuICAgIHRoaXMuY3JlYXRlKGpzb24sIGV4dGVybmFsS2V5KTtcbiAgICB0aGlzLnByZXZIYXNoID0gdXRpbC5oYXNoKHRoaXMuc2Vzc2lvbi50b0pTT04oKSk7XG4gIH1cblxuICAvKipcbiAgICogaW5pdCBzZXNzaW9uIGZyb20gY29va2llXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBpbml0RnJvbUNvb2tpZSgpIHtcbiAgICBkZWJ1ZygnaW5pdCBmcm9tIGNvb2tpZScpO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG5cbiAgICBjb25zdCBjb29raWUgPSBjdHguY29va2llcy5nZXQob3B0cy5rZXksIG9wdHMpO1xuICAgIGlmICghY29va2llKSB7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBqc29uO1xuICAgIGRlYnVnKCdwYXJzZSAlcycsIGNvb2tpZSk7XG4gICAgdHJ5IHtcbiAgICAgIGpzb24gPSBvcHRzLmRlY29kZShjb29raWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHk6XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgc2Vzc2lvbiBpZiBwYXJzaW5nIGZhaWxzLlxuICAgICAgLy8gbmV3IEJ1ZmZlcihzdHJpbmcsICdiYXNlNjQnKSBkb2VzIG5vdCBzZWVtIHRvIGNyYXNoXG4gICAgICAvLyB3aGVuIGBzdHJpbmdgIGlzIG5vdCBiYXNlNjQtZW5jb2RlZC5cbiAgICAgIC8vIGJ1dCBgSlNPTi5wYXJzZShzdHJpbmcpYCB3aWxsIGNyYXNoLlxuICAgICAgZGVidWcoJ2RlY29kZSAlaiBlcnJvcjogJXMnLCBjb29raWUsIGVycik7XG4gICAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHtcbiAgICAgICAgLy8gY2xlYW4gdGhpcyBjb29raWUgdG8gZW5zdXJlIG5leHQgcmVxdWVzdCB3b24ndCB0aHJvdyBhZ2FpblxuICAgICAgICBjdHguY29va2llcy5zZXQob3B0cy5rZXksICcnLCBvcHRzKTtcbiAgICAgICAgLy8gY3R4Lm9uZXJyb3Igd2lsbCB1bnNldCBhbGwgaGVhZGVycywgYW5kIHNldCB0aG9zZSBzcGVjaWZpZWQgaW4gZXJyXG4gICAgICAgIGVyci5oZWFkZXJzID0ge1xuICAgICAgICAgICdzZXQtY29va2llJzogY3R4LnJlc3BvbnNlLmdldCgnc2V0LWNvb2tpZScpLFxuICAgICAgICB9O1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlYnVnKCdwYXJzZWQgJWonLCBqc29uKTtcblxuICAgIGlmICghdGhpcy52YWxpZChqc29uKSkge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IGFjY2VzcyBgY3R4LnNlc3Npb25gIGJlZm9yZSBzZXNzaW9uIG1pZGRsZXdhcmVcbiAgICB0aGlzLmNyZWF0ZShqc29uKTtcbiAgICB0aGlzLnByZXZIYXNoID0gdXRpbC5oYXNoKHRoaXMuc2Vzc2lvbi50b0pTT04oKSk7XG4gIH1cblxuICAvKipcbiAgICogdmVyaWZ5IHNlc3Npb24oZXhwaXJlZCBvciApXG4gICAqIEBwYXJhbSAge09iamVjdH0ganNvbiBzZXNzaW9uIG9iamVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB2YWxpZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgdmFsaWQoanNvbikge1xuICAgIGlmICghanNvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGpzb24uX2V4cGlyZSAmJiBqc29uLl9leHBpcmUgPCBEYXRlLm5vdygpKSB7XG4gICAgICBkZWJ1ZygnZXhwaXJlZCBzZXNzaW9uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLm9wdHMudmFsaWQ7XG4gICAgaWYgKHR5cGVvZiB2YWxpZCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdmFsaWQodGhpcy5jdHgsIGpzb24pKSB7XG4gICAgICAvLyB2YWxpZCBzZXNzaW9uIHZhbHVlIGZhaWwsIGlnbm9yZSB0aGlzIHNlc3Npb25cbiAgICAgIGRlYnVnKCdpbnZhbGlkIHNlc3Npb24nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgbmV3IHNlc3Npb24gYW5kIGF0dGFjaCB0byBjdHguc2Vzc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3ZhbF0gc2Vzc2lvbiBkYXRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZXh0ZXJuYWxLZXldIHNlc3Npb24gZXh0ZXJuYWwga2V5XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBjcmVhdGUodmFsLCBleHRlcm5hbEtleSkge1xuICAgIGRlYnVnKCdjcmVhdGUgc2Vzc2lvbiB3aXRoIHZhbDogJWogZXh0ZXJuYWxLZXk6ICVzJywgdmFsLCBleHRlcm5hbEtleSk7XG4gICAgaWYgKHRoaXMuc3RvcmUpIHRoaXMuZXh0ZXJuYWxLZXkgPSBleHRlcm5hbEtleSB8fCB0aGlzLm9wdHMuZ2VuaWQoKTtcbiAgICB0aGlzLnNlc3Npb24gPSBuZXcgU2Vzc2lvbih0aGlzLmN0eCwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21taXQgdGhlIHNlc3Npb24gY2hhbmdlcyBvciByZW1vdmFsLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3luYyBjb21taXQoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuc2Vzc2lvbjtcbiAgICBjb25zdCBwcmV2SGFzaCA9IHRoaXMucHJldkhhc2g7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgIC8vIG5vdCBhY2Nlc3NlZFxuICAgIGlmICh1bmRlZmluZWQgPT09IHNlc3Npb24pIHJldHVybjtcblxuICAgIC8vIHJlbW92ZWRcbiAgICBpZiAoc2Vzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZm9yY2Ugc2F2ZSBzZXNzaW9uIHdoZW4gYHNlc3Npb24uX3JlcXVpcmVTYXZlYCBzZXRcbiAgICBsZXQgY2hhbmdlZCA9IHRydWU7XG4gICAgaWYgKCFzZXNzaW9uLl9yZXF1aXJlU2F2ZSkge1xuICAgICAgY29uc3QganNvbiA9IHNlc3Npb24udG9KU09OKCk7XG4gICAgICAvLyBkbyBub3RoaW5nIGlmIG5ldyBhbmQgbm90IHBvcHVsYXRlZFxuICAgICAgaWYgKCFwcmV2SGFzaCAmJiAhT2JqZWN0LmtleXMoanNvbikubGVuZ3RoKSByZXR1cm47XG4gICAgICBjaGFuZ2VkID0gcHJldkhhc2ggIT09IHV0aWwuaGFzaChqc29uKTtcbiAgICAgIC8vIGRvIG5vdGhpbmcgaWYgbm90IGNoYW5nZWQgYW5kIG5vdCBpbiByb2xsaW5nIG1vZGVcbiAgICAgIGlmICghdGhpcy5vcHRzLnJvbGxpbmcgJiYgIWNoYW5nZWQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuYmVmb3JlU2F2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVidWcoJ2JlZm9yZSBzYXZlJyk7XG4gICAgICBvcHRzLmJlZm9yZVNhdmUoY3R4LCBzZXNzaW9uKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zYXZlKGNoYW5nZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBzZXNzaW9uXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBhc3luYyByZW1vdmUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjb25zdCBrZXkgPSBvcHRzLmtleTtcbiAgICBjb25zdCBleHRlcm5hbEtleSA9IHRoaXMuZXh0ZXJuYWxLZXk7XG5cbiAgICBpZiAoZXh0ZXJuYWxLZXkpIGF3YWl0IHRoaXMuc3RvcmUuZGVzdHJveShleHRlcm5hbEtleSk7XG4gICAgY3R4LmNvb2tpZXMuc2V0KGtleSwgJycsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNhdmUgc2Vzc2lvblxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgYXN5bmMgc2F2ZShjaGFuZ2VkKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBrZXkgPSBvcHRzLmtleTtcbiAgICBjb25zdCBleHRlcm5hbEtleSA9IHRoaXMuZXh0ZXJuYWxLZXk7XG4gICAgbGV0IGpzb24gPSB0aGlzLnNlc3Npb24udG9KU09OKCk7XG4gICAgLy8gc2V0IGV4cGlyZSBmb3IgY2hlY2tcbiAgICBjb25zdCBtYXhBZ2UgPSBvcHRzLm1heEFnZSA/IG9wdHMubWF4QWdlIDogT05FX0RBWTtcbiAgICBpZiAobWF4QWdlID09PSAnc2Vzc2lvbicpIHtcbiAgICAgIC8vIGRvIG5vdCBzZXQgX2V4cGlyZSBpbiBqc29uIGlmIG1heEFnZSBpcyBzZXQgdG8gJ3Nlc3Npb24nXG4gICAgICAvLyBhbHNvIGRlbGV0ZSBtYXhBZ2UgZnJvbSBvcHRpb25zXG4gICAgICBvcHRzLm1heEFnZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IGV4cGlyZSBmb3IgY2hlY2tcbiAgICAgIGpzb24uX2V4cGlyZSA9IG1heEFnZSArIERhdGUubm93KCk7XG4gICAgICBqc29uLl9tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuXG4gICAgLy8gc2F2ZSB0byBleHRlcm5hbCBzdG9yZVxuICAgIGlmIChleHRlcm5hbEtleSkge1xuICAgICAgZGVidWcoJ3NhdmUgJWogdG8gZXh0ZXJuYWwga2V5ICVzJywganNvbiwgZXh0ZXJuYWxLZXkpO1xuICAgICAgYXdhaXQgdGhpcy5zdG9yZS5zZXQoZXh0ZXJuYWxLZXksIGpzb24sIG1heEFnZSwge1xuICAgICAgICBjaGFuZ2VkLFxuICAgICAgICByb2xsaW5nOiBvcHRzLnJvbGxpbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3R4LmNvb2tpZXMuc2V0KGtleSwgZXh0ZXJuYWxLZXksIG9wdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNhdmUgdG8gY29va2llXG4gICAgZGVidWcoJ3NhdmUgJWogdG8gY29va2llJywganNvbik7XG4gICAganNvbiA9IG9wdHMuZW5jb2RlKGpzb24pO1xuICAgIGRlYnVnKCdzYXZlICVzJywganNvbik7XG5cbiAgICB0aGlzLmN0eC5jb29raWVzLnNldChrZXksIGpzb24sIG9wdHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dFNlc3Npb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbGliL2NvbnRleHQuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2Vzc2lvbiBtb2RlbC5cbiAqL1xuXG5jbGFzcyBTZXNzaW9uIHtcbiAgLyoqXG4gICAqIFNlc3Npb24gY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtDb250ZXh0fSBjdHhcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgY29uc3RydWN0b3IoY3R4LCBvYmopIHtcbiAgICB0aGlzLl9jdHggPSBjdHg7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIC8vIHJlc3RvcmUgbWF4QWdlIGZyb20gc3RvcmVcbiAgICAgICAgaWYgKGsgPT09ICdfbWF4QWdlJykgdGhpcy5fY3R4LnNlc3Npb25PcHRpb25zLm1heEFnZSA9IG9iai5fbWF4QWdlO1xuICAgICAgICBlbHNlIHRoaXNba10gPSBvYmpba107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIHNlc3Npb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2lzTmV3JykgcmV0dXJuO1xuICAgICAgaWYgKGtleVswXSA9PT0gJ18nKSByZXR1cm47XG4gICAgICBvYmpba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogYWxpYXMgdG8gYHRvSlNPTmBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgaW5zcGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTT04oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gaG93IG1hbnkgdmFsdWVzIHRoZXJlIGFyZSBpbiB0aGUgc2Vzc2lvbiBvYmplY3QuXG4gICAqIFVzZWQgdG8gc2VlIGlmIGl0J3MgXCJwb3B1bGF0ZWRcIi5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvSlNPTigpKS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogcG9wdWxhdGVkIGZsYWcsIHdoaWNoIGlzIGp1c3QgYSBib29sZWFuIGFsaWFzIG9mIC5sZW5ndGguXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBwb3B1bGF0ZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHNlc3Npb24gbWF4QWdlXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IG1heEFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3R4LnNlc3Npb25PcHRpb25zLm1heEFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgc2Vzc2lvbiBtYXhBZ2VcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBtYXhBZ2UodmFsKSB7XG4gICAgdGhpcy5fY3R4LnNlc3Npb25PcHRpb25zLm1heEFnZSA9IHZhbDtcbiAgICAvLyBtYXhBZ2UgY2hhbmdlZCwgbXVzdCBzYXZlIHRvIGNvb2tpZSBhbmQgc3RvcmVcbiAgICB0aGlzLl9yZXF1aXJlU2F2ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogc2F2ZSB0aGlzIHNlc3Npb24gbm8gbWF0dGVyIHdoZXRoZXIgaXQgaXMgcG9wdWxhdGVkXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNhdmUoKSB7XG4gICAgdGhpcy5fcmVxdWlyZVNhdmUgPSB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vzc2lvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9saWIvc2Vzc2lvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyYzE6IHJlcXVpcmUoJy4vY3JjMScpLFxuICBjcmM4OiByZXF1aXJlKCcuL2NyYzgnKSxcbiAgY3JjODF3aXJlOiByZXF1aXJlKCcuL2NyYzhfMXdpcmUnKSxcbiAgY3JjMTY6IHJlcXVpcmUoJy4vY3JjMTYnKSxcbiAgY3JjMTZjY2l0dDogcmVxdWlyZSgnLi9jcmMxNl9jY2l0dCcpLFxuICBjcmMxNm1vZGJ1czogcmVxdWlyZSgnLi9jcmMxNl9tb2RidXMnKSxcbiAgY3JjMTZ4bW9kZW06IHJlcXVpcmUoJy4vY3JjMTZfeG1vZGVtJyksXG4gIGNyYzE2a2VybWl0OiByZXF1aXJlKCcuL2NyYzE2X2tlcm1pdCcpLFxuICBjcmMyNDogcmVxdWlyZSgnLi9jcmMyNCcpLFxuICBjcmMzMjogcmVxdWlyZSgnLi9jcmMzMicpLFxuICBjcmNqYW06IHJlcXVpcmUoJy4vY3JjamFtJylcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjMScsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB+fnByZXZpb3VzO1xuICB2YXIgYWNjdW0gPSAwO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGFjY3VtICs9IGJ5dGU7XG4gIH1cblxuICBjcmMgKz0gYWNjdW0gJSAyNTY7XG4gIHJldHVybiBjcmMgJSAyNTY7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9Y3JjLTggLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAsIDB4MDcsIDB4MGUsIDB4MDksIDB4MWMsIDB4MWIsIDB4MTIsIDB4MTUsIDB4MzgsIDB4M2YsIDB4MzYsIDB4MzEsIDB4MjQsIDB4MjMsIDB4MmEsIDB4MmQsIDB4NzAsIDB4NzcsIDB4N2UsIDB4NzksIDB4NmMsIDB4NmIsIDB4NjIsIDB4NjUsIDB4NDgsIDB4NGYsIDB4NDYsIDB4NDEsIDB4NTQsIDB4NTMsIDB4NWEsIDB4NWQsIDB4ZTAsIDB4ZTcsIDB4ZWUsIDB4ZTksIDB4ZmMsIDB4ZmIsIDB4ZjIsIDB4ZjUsIDB4ZDgsIDB4ZGYsIDB4ZDYsIDB4ZDEsIDB4YzQsIDB4YzMsIDB4Y2EsIDB4Y2QsIDB4OTAsIDB4OTcsIDB4OWUsIDB4OTksIDB4OGMsIDB4OGIsIDB4ODIsIDB4ODUsIDB4YTgsIDB4YWYsIDB4YTYsIDB4YTEsIDB4YjQsIDB4YjMsIDB4YmEsIDB4YmQsIDB4YzcsIDB4YzAsIDB4YzksIDB4Y2UsIDB4ZGIsIDB4ZGMsIDB4ZDUsIDB4ZDIsIDB4ZmYsIDB4ZjgsIDB4ZjEsIDB4ZjYsIDB4ZTMsIDB4ZTQsIDB4ZWQsIDB4ZWEsIDB4YjcsIDB4YjAsIDB4YjksIDB4YmUsIDB4YWIsIDB4YWMsIDB4YTUsIDB4YTIsIDB4OGYsIDB4ODgsIDB4ODEsIDB4ODYsIDB4OTMsIDB4OTQsIDB4OWQsIDB4OWEsIDB4MjcsIDB4MjAsIDB4MjksIDB4MmUsIDB4M2IsIDB4M2MsIDB4MzUsIDB4MzIsIDB4MWYsIDB4MTgsIDB4MTEsIDB4MTYsIDB4MDMsIDB4MDQsIDB4MGQsIDB4MGEsIDB4NTcsIDB4NTAsIDB4NTksIDB4NWUsIDB4NGIsIDB4NGMsIDB4NDUsIDB4NDIsIDB4NmYsIDB4NjgsIDB4NjEsIDB4NjYsIDB4NzMsIDB4NzQsIDB4N2QsIDB4N2EsIDB4ODksIDB4OGUsIDB4ODcsIDB4ODAsIDB4OTUsIDB4OTIsIDB4OWIsIDB4OWMsIDB4YjEsIDB4YjYsIDB4YmYsIDB4YjgsIDB4YWQsIDB4YWEsIDB4YTMsIDB4YTQsIDB4ZjksIDB4ZmUsIDB4ZjcsIDB4ZjAsIDB4ZTUsIDB4ZTIsIDB4ZWIsIDB4ZWMsIDB4YzEsIDB4YzYsIDB4Y2YsIDB4YzgsIDB4ZGQsIDB4ZGEsIDB4ZDMsIDB4ZDQsIDB4NjksIDB4NmUsIDB4NjcsIDB4NjAsIDB4NzUsIDB4NzIsIDB4N2IsIDB4N2MsIDB4NTEsIDB4NTYsIDB4NWYsIDB4NTgsIDB4NGQsIDB4NGEsIDB4NDMsIDB4NDQsIDB4MTksIDB4MWUsIDB4MTcsIDB4MTAsIDB4MDUsIDB4MDIsIDB4MGIsIDB4MGMsIDB4MjEsIDB4MjYsIDB4MmYsIDB4MjgsIDB4M2QsIDB4M2EsIDB4MzMsIDB4MzQsIDB4NGUsIDB4NDksIDB4NDAsIDB4NDcsIDB4NTIsIDB4NTUsIDB4NWMsIDB4NWIsIDB4NzYsIDB4NzEsIDB4NzgsIDB4N2YsIDB4NmEsIDB4NmQsIDB4NjQsIDB4NjMsIDB4M2UsIDB4MzksIDB4MzAsIDB4MzcsIDB4MjIsIDB4MjUsIDB4MmMsIDB4MmIsIDB4MDYsIDB4MDEsIDB4MDgsIDB4MGYsIDB4MWEsIDB4MWQsIDB4MTQsIDB4MTMsIDB4YWUsIDB4YTksIDB4YTAsIDB4YTcsIDB4YjIsIDB4YjUsIDB4YmMsIDB4YmIsIDB4OTYsIDB4OTEsIDB4OTgsIDB4OWYsIDB4OGEsIDB4OGQsIDB4ODQsIDB4ODMsIDB4ZGUsIDB4ZDksIDB4ZDAsIDB4ZDcsIDB4YzIsIDB4YzUsIDB4Y2MsIDB4Y2IsIDB4ZTYsIDB4ZTEsIDB4ZTgsIDB4ZWYsIDB4ZmEsIDB4ZmQsIDB4ZjQsIDB4ZjNdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdjcmMtOCcsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB+fnByZXZpb3VzO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdICYgMHhmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmM4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9ZGFsbGFzLTEtd2lyZSAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMCwgMHg1ZSwgMHhiYywgMHhlMiwgMHg2MSwgMHgzZiwgMHhkZCwgMHg4MywgMHhjMiwgMHg5YywgMHg3ZSwgMHgyMCwgMHhhMywgMHhmZCwgMHgxZiwgMHg0MSwgMHg5ZCwgMHhjMywgMHgyMSwgMHg3ZiwgMHhmYywgMHhhMiwgMHg0MCwgMHgxZSwgMHg1ZiwgMHgwMSwgMHhlMywgMHhiZCwgMHgzZSwgMHg2MCwgMHg4MiwgMHhkYywgMHgyMywgMHg3ZCwgMHg5ZiwgMHhjMSwgMHg0MiwgMHgxYywgMHhmZSwgMHhhMCwgMHhlMSwgMHhiZiwgMHg1ZCwgMHgwMywgMHg4MCwgMHhkZSwgMHgzYywgMHg2MiwgMHhiZSwgMHhlMCwgMHgwMiwgMHg1YywgMHhkZiwgMHg4MSwgMHg2MywgMHgzZCwgMHg3YywgMHgyMiwgMHhjMCwgMHg5ZSwgMHgxZCwgMHg0MywgMHhhMSwgMHhmZiwgMHg0NiwgMHgxOCwgMHhmYSwgMHhhNCwgMHgyNywgMHg3OSwgMHg5YiwgMHhjNSwgMHg4NCwgMHhkYSwgMHgzOCwgMHg2NiwgMHhlNSwgMHhiYiwgMHg1OSwgMHgwNywgMHhkYiwgMHg4NSwgMHg2NywgMHgzOSwgMHhiYSwgMHhlNCwgMHgwNiwgMHg1OCwgMHgxOSwgMHg0NywgMHhhNSwgMHhmYiwgMHg3OCwgMHgyNiwgMHhjNCwgMHg5YSwgMHg2NSwgMHgzYiwgMHhkOSwgMHg4NywgMHgwNCwgMHg1YSwgMHhiOCwgMHhlNiwgMHhhNywgMHhmOSwgMHgxYiwgMHg0NSwgMHhjNiwgMHg5OCwgMHg3YSwgMHgyNCwgMHhmOCwgMHhhNiwgMHg0NCwgMHgxYSwgMHg5OSwgMHhjNywgMHgyNSwgMHg3YiwgMHgzYSwgMHg2NCwgMHg4NiwgMHhkOCwgMHg1YiwgMHgwNSwgMHhlNywgMHhiOSwgMHg4YywgMHhkMiwgMHgzMCwgMHg2ZSwgMHhlZCwgMHhiMywgMHg1MSwgMHgwZiwgMHg0ZSwgMHgxMCwgMHhmMiwgMHhhYywgMHgyZiwgMHg3MSwgMHg5MywgMHhjZCwgMHgxMSwgMHg0ZiwgMHhhZCwgMHhmMywgMHg3MCwgMHgyZSwgMHhjYywgMHg5MiwgMHhkMywgMHg4ZCwgMHg2ZiwgMHgzMSwgMHhiMiwgMHhlYywgMHgwZSwgMHg1MCwgMHhhZiwgMHhmMSwgMHgxMywgMHg0ZCwgMHhjZSwgMHg5MCwgMHg3MiwgMHgyYywgMHg2ZCwgMHgzMywgMHhkMSwgMHg4ZiwgMHgwYywgMHg1MiwgMHhiMCwgMHhlZSwgMHgzMiwgMHg2YywgMHg4ZSwgMHhkMCwgMHg1MywgMHgwZCwgMHhlZiwgMHhiMSwgMHhmMCwgMHhhZSwgMHg0YywgMHgxMiwgMHg5MSwgMHhjZiwgMHgyZCwgMHg3MywgMHhjYSwgMHg5NCwgMHg3NiwgMHgyOCwgMHhhYiwgMHhmNSwgMHgxNywgMHg0OSwgMHgwOCwgMHg1NiwgMHhiNCwgMHhlYSwgMHg2OSwgMHgzNywgMHhkNSwgMHg4YiwgMHg1NywgMHgwOSwgMHhlYiwgMHhiNSwgMHgzNiwgMHg2OCwgMHg4YSwgMHhkNCwgMHg5NSwgMHhjYiwgMHgyOSwgMHg3NywgMHhmNCwgMHhhYSwgMHg0OCwgMHgxNiwgMHhlOSwgMHhiNywgMHg1NSwgMHgwYiwgMHg4OCwgMHhkNiwgMHgzNCwgMHg2YSwgMHgyYiwgMHg3NSwgMHg5NywgMHhjOSwgMHg0YSwgMHgxNCwgMHhmNiwgMHhhOCwgMHg3NCwgMHgyYSwgMHhjOCwgMHg5NiwgMHgxNSwgMHg0YiwgMHhhOSwgMHhmNywgMHhiNiwgMHhlOCwgMHgwYSwgMHg1NCwgMHhkNywgMHg4OSwgMHg2YiwgMHgzNV07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2RhbGxhcy0xLXdpcmUnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gfn5wcmV2aW91cztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSAmIDB4ZmY7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjOF8xd2lyZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy0xNiAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwLCAweGMwYzEsIDB4YzE4MSwgMHgwMTQwLCAweGMzMDEsIDB4MDNjMCwgMHgwMjgwLCAweGMyNDEsIDB4YzYwMSwgMHgwNmMwLCAweDA3ODAsIDB4Yzc0MSwgMHgwNTAwLCAweGM1YzEsIDB4YzQ4MSwgMHgwNDQwLCAweGNjMDEsIDB4MGNjMCwgMHgwZDgwLCAweGNkNDEsIDB4MGYwMCwgMHhjZmMxLCAweGNlODEsIDB4MGU0MCwgMHgwYTAwLCAweGNhYzEsIDB4Y2I4MSwgMHgwYjQwLCAweGM5MDEsIDB4MDljMCwgMHgwODgwLCAweGM4NDEsIDB4ZDgwMSwgMHgxOGMwLCAweDE5ODAsIDB4ZDk0MSwgMHgxYjAwLCAweGRiYzEsIDB4ZGE4MSwgMHgxYTQwLCAweDFlMDAsIDB4ZGVjMSwgMHhkZjgxLCAweDFmNDAsIDB4ZGQwMSwgMHgxZGMwLCAweDFjODAsIDB4ZGM0MSwgMHgxNDAwLCAweGQ0YzEsIDB4ZDU4MSwgMHgxNTQwLCAweGQ3MDEsIDB4MTdjMCwgMHgxNjgwLCAweGQ2NDEsIDB4ZDIwMSwgMHgxMmMwLCAweDEzODAsIDB4ZDM0MSwgMHgxMTAwLCAweGQxYzEsIDB4ZDA4MSwgMHgxMDQwLCAweGYwMDEsIDB4MzBjMCwgMHgzMTgwLCAweGYxNDEsIDB4MzMwMCwgMHhmM2MxLCAweGYyODEsIDB4MzI0MCwgMHgzNjAwLCAweGY2YzEsIDB4Zjc4MSwgMHgzNzQwLCAweGY1MDEsIDB4MzVjMCwgMHgzNDgwLCAweGY0NDEsIDB4M2MwMCwgMHhmY2MxLCAweGZkODEsIDB4M2Q0MCwgMHhmZjAxLCAweDNmYzAsIDB4M2U4MCwgMHhmZTQxLCAweGZhMDEsIDB4M2FjMCwgMHgzYjgwLCAweGZiNDEsIDB4MzkwMCwgMHhmOWMxLCAweGY4ODEsIDB4Mzg0MCwgMHgyODAwLCAweGU4YzEsIDB4ZTk4MSwgMHgyOTQwLCAweGViMDEsIDB4MmJjMCwgMHgyYTgwLCAweGVhNDEsIDB4ZWUwMSwgMHgyZWMwLCAweDJmODAsIDB4ZWY0MSwgMHgyZDAwLCAweGVkYzEsIDB4ZWM4MSwgMHgyYzQwLCAweGU0MDEsIDB4MjRjMCwgMHgyNTgwLCAweGU1NDEsIDB4MjcwMCwgMHhlN2MxLCAweGU2ODEsIDB4MjY0MCwgMHgyMjAwLCAweGUyYzEsIDB4ZTM4MSwgMHgyMzQwLCAweGUxMDEsIDB4MjFjMCwgMHgyMDgwLCAweGUwNDEsIDB4YTAwMSwgMHg2MGMwLCAweDYxODAsIDB4YTE0MSwgMHg2MzAwLCAweGEzYzEsIDB4YTI4MSwgMHg2MjQwLCAweDY2MDAsIDB4YTZjMSwgMHhhNzgxLCAweDY3NDAsIDB4YTUwMSwgMHg2NWMwLCAweDY0ODAsIDB4YTQ0MSwgMHg2YzAwLCAweGFjYzEsIDB4YWQ4MSwgMHg2ZDQwLCAweGFmMDEsIDB4NmZjMCwgMHg2ZTgwLCAweGFlNDEsIDB4YWEwMSwgMHg2YWMwLCAweDZiODAsIDB4YWI0MSwgMHg2OTAwLCAweGE5YzEsIDB4YTg4MSwgMHg2ODQwLCAweDc4MDAsIDB4YjhjMSwgMHhiOTgxLCAweDc5NDAsIDB4YmIwMSwgMHg3YmMwLCAweDdhODAsIDB4YmE0MSwgMHhiZTAxLCAweDdlYzAsIDB4N2Y4MCwgMHhiZjQxLCAweDdkMDAsIDB4YmRjMSwgMHhiYzgxLCAweDdjNDAsIDB4YjQwMSwgMHg3NGMwLCAweDc1ODAsIDB4YjU0MSwgMHg3NzAwLCAweGI3YzEsIDB4YjY4MSwgMHg3NjQwLCAweDcyMDAsIDB4YjJjMSwgMHhiMzgxLCAweDczNDAsIDB4YjEwMSwgMHg3MWMwLCAweDcwODAsIDB4YjA0MSwgMHg1MDAwLCAweDkwYzEsIDB4OTE4MSwgMHg1MTQwLCAweDkzMDEsIDB4NTNjMCwgMHg1MjgwLCAweDkyNDEsIDB4OTYwMSwgMHg1NmMwLCAweDU3ODAsIDB4OTc0MSwgMHg1NTAwLCAweDk1YzEsIDB4OTQ4MSwgMHg1NDQwLCAweDljMDEsIDB4NWNjMCwgMHg1ZDgwLCAweDlkNDEsIDB4NWYwMCwgMHg5ZmMxLCAweDllODEsIDB4NWU0MCwgMHg1YTAwLCAweDlhYzEsIDB4OWI4MSwgMHg1YjQwLCAweDk5MDEsIDB4NTljMCwgMHg1ODgwLCAweDk4NDEsIDB4ODgwMSwgMHg0OGMwLCAweDQ5ODAsIDB4ODk0MSwgMHg0YjAwLCAweDhiYzEsIDB4OGE4MSwgMHg0YTQwLCAweDRlMDAsIDB4OGVjMSwgMHg4ZjgxLCAweDRmNDAsIDB4OGQwMSwgMHg0ZGMwLCAweDRjODAsIDB4OGM0MSwgMHg0NDAwLCAweDg0YzEsIDB4ODU4MSwgMHg0NTQwLCAweDg3MDEsIDB4NDdjMCwgMHg0NjgwLCAweDg2NDEsIDB4ODIwMSwgMHg0MmMwLCAweDQzODAsIDB4ODM0MSwgMHg0MTAwLCAweDgxYzEsIDB4ODA4MSwgMHg0MDQwXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTE2JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IH5+cHJldmlvdXM7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gKFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gY3JjID4+IDgpICYgMHhmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9Y2NpdHQgLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAwMCwgMHgxMDIxLCAweDIwNDIsIDB4MzA2MywgMHg0MDg0LCAweDUwYTUsIDB4NjBjNiwgMHg3MGU3LCAweDgxMDgsIDB4OTEyOSwgMHhhMTRhLCAweGIxNmIsIDB4YzE4YywgMHhkMWFkLCAweGUxY2UsIDB4ZjFlZiwgMHgxMjMxLCAweDAyMTAsIDB4MzI3MywgMHgyMjUyLCAweDUyYjUsIDB4NDI5NCwgMHg3MmY3LCAweDYyZDYsIDB4OTMzOSwgMHg4MzE4LCAweGIzN2IsIDB4YTM1YSwgMHhkM2JkLCAweGMzOWMsIDB4ZjNmZiwgMHhlM2RlLCAweDI0NjIsIDB4MzQ0MywgMHgwNDIwLCAweDE0MDEsIDB4NjRlNiwgMHg3NGM3LCAweDQ0YTQsIDB4NTQ4NSwgMHhhNTZhLCAweGI1NGIsIDB4ODUyOCwgMHg5NTA5LCAweGU1ZWUsIDB4ZjVjZiwgMHhjNWFjLCAweGQ1OGQsIDB4MzY1MywgMHgyNjcyLCAweDE2MTEsIDB4MDYzMCwgMHg3NmQ3LCAweDY2ZjYsIDB4NTY5NSwgMHg0NmI0LCAweGI3NWIsIDB4YTc3YSwgMHg5NzE5LCAweDg3MzgsIDB4ZjdkZiwgMHhlN2ZlLCAweGQ3OWQsIDB4YzdiYywgMHg0OGM0LCAweDU4ZTUsIDB4Njg4NiwgMHg3OGE3LCAweDA4NDAsIDB4MTg2MSwgMHgyODAyLCAweDM4MjMsIDB4YzljYywgMHhkOWVkLCAweGU5OGUsIDB4ZjlhZiwgMHg4OTQ4LCAweDk5NjksIDB4YTkwYSwgMHhiOTJiLCAweDVhZjUsIDB4NGFkNCwgMHg3YWI3LCAweDZhOTYsIDB4MWE3MSwgMHgwYTUwLCAweDNhMzMsIDB4MmExMiwgMHhkYmZkLCAweGNiZGMsIDB4ZmJiZiwgMHhlYjllLCAweDliNzksIDB4OGI1OCwgMHhiYjNiLCAweGFiMWEsIDB4NmNhNiwgMHg3Yzg3LCAweDRjZTQsIDB4NWNjNSwgMHgyYzIyLCAweDNjMDMsIDB4MGM2MCwgMHgxYzQxLCAweGVkYWUsIDB4ZmQ4ZiwgMHhjZGVjLCAweGRkY2QsIDB4YWQyYSwgMHhiZDBiLCAweDhkNjgsIDB4OWQ0OSwgMHg3ZTk3LCAweDZlYjYsIDB4NWVkNSwgMHg0ZWY0LCAweDNlMTMsIDB4MmUzMiwgMHgxZTUxLCAweDBlNzAsIDB4ZmY5ZiwgMHhlZmJlLCAweGRmZGQsIDB4Y2ZmYywgMHhiZjFiLCAweGFmM2EsIDB4OWY1OSwgMHg4Zjc4LCAweDkxODgsIDB4ODFhOSwgMHhiMWNhLCAweGExZWIsIDB4ZDEwYywgMHhjMTJkLCAweGYxNGUsIDB4ZTE2ZiwgMHgxMDgwLCAweDAwYTEsIDB4MzBjMiwgMHgyMGUzLCAweDUwMDQsIDB4NDAyNSwgMHg3MDQ2LCAweDYwNjcsIDB4ODNiOSwgMHg5Mzk4LCAweGEzZmIsIDB4YjNkYSwgMHhjMzNkLCAweGQzMWMsIDB4ZTM3ZiwgMHhmMzVlLCAweDAyYjEsIDB4MTI5MCwgMHgyMmYzLCAweDMyZDIsIDB4NDIzNSwgMHg1MjE0LCAweDYyNzcsIDB4NzI1NiwgMHhiNWVhLCAweGE1Y2IsIDB4OTVhOCwgMHg4NTg5LCAweGY1NmUsIDB4ZTU0ZiwgMHhkNTJjLCAweGM1MGQsIDB4MzRlMiwgMHgyNGMzLCAweDE0YTAsIDB4MDQ4MSwgMHg3NDY2LCAweDY0NDcsIDB4NTQyNCwgMHg0NDA1LCAweGE3ZGIsIDB4YjdmYSwgMHg4Nzk5LCAweDk3YjgsIDB4ZTc1ZiwgMHhmNzdlLCAweGM3MWQsIDB4ZDczYywgMHgyNmQzLCAweDM2ZjIsIDB4MDY5MSwgMHgxNmIwLCAweDY2NTcsIDB4NzY3NiwgMHg0NjE1LCAweDU2MzQsIDB4ZDk0YywgMHhjOTZkLCAweGY5MGUsIDB4ZTkyZiwgMHg5OWM4LCAweDg5ZTksIDB4Yjk4YSwgMHhhOWFiLCAweDU4NDQsIDB4NDg2NSwgMHg3ODA2LCAweDY4MjcsIDB4MThjMCwgMHgwOGUxLCAweDM4ODIsIDB4MjhhMywgMHhjYjdkLCAweGRiNWMsIDB4ZWIzZiwgMHhmYjFlLCAweDhiZjksIDB4OWJkOCwgMHhhYmJiLCAweGJiOWEsIDB4NGE3NSwgMHg1YTU0LCAweDZhMzcsIDB4N2ExNiwgMHgwYWYxLCAweDFhZDAsIDB4MmFiMywgMHgzYTkyLCAweGZkMmUsIDB4ZWQwZiwgMHhkZDZjLCAweGNkNGQsIDB4YmRhYSwgMHhhZDhiLCAweDlkZTgsIDB4OGRjOSwgMHg3YzI2LCAweDZjMDcsIDB4NWM2NCwgMHg0YzQ1LCAweDNjYTIsIDB4MmM4MywgMHgxY2UwLCAweDBjYzEsIDB4ZWYxZiwgMHhmZjNlLCAweGNmNWQsIDB4ZGY3YywgMHhhZjliLCAweGJmYmEsIDB4OGZkOSwgMHg5ZmY4LCAweDZlMTcsIDB4N2UzNiwgMHg0ZTU1LCAweDVlNzQsIDB4MmU5MywgMHgzZWIyLCAweDBlZDEsIDB4MWVmMF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NjaXR0JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHR5cGVvZiBwcmV2aW91cyAhPT0gJ3VuZGVmaW5lZCcgPyB+fnByZXZpb3VzIDogMHhmZmZmO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjID4+IDggXiBieXRlKSAmIDB4ZmZdIF4gY3JjIDw8IDgpICYgMHhmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X2NjaXR0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9Y3JjLTE2LW1vZGJ1cyAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwLCAweGMwYzEsIDB4YzE4MSwgMHgwMTQwLCAweGMzMDEsIDB4MDNjMCwgMHgwMjgwLCAweGMyNDEsIDB4YzYwMSwgMHgwNmMwLCAweDA3ODAsIDB4Yzc0MSwgMHgwNTAwLCAweGM1YzEsIDB4YzQ4MSwgMHgwNDQwLCAweGNjMDEsIDB4MGNjMCwgMHgwZDgwLCAweGNkNDEsIDB4MGYwMCwgMHhjZmMxLCAweGNlODEsIDB4MGU0MCwgMHgwYTAwLCAweGNhYzEsIDB4Y2I4MSwgMHgwYjQwLCAweGM5MDEsIDB4MDljMCwgMHgwODgwLCAweGM4NDEsIDB4ZDgwMSwgMHgxOGMwLCAweDE5ODAsIDB4ZDk0MSwgMHgxYjAwLCAweGRiYzEsIDB4ZGE4MSwgMHgxYTQwLCAweDFlMDAsIDB4ZGVjMSwgMHhkZjgxLCAweDFmNDAsIDB4ZGQwMSwgMHgxZGMwLCAweDFjODAsIDB4ZGM0MSwgMHgxNDAwLCAweGQ0YzEsIDB4ZDU4MSwgMHgxNTQwLCAweGQ3MDEsIDB4MTdjMCwgMHgxNjgwLCAweGQ2NDEsIDB4ZDIwMSwgMHgxMmMwLCAweDEzODAsIDB4ZDM0MSwgMHgxMTAwLCAweGQxYzEsIDB4ZDA4MSwgMHgxMDQwLCAweGYwMDEsIDB4MzBjMCwgMHgzMTgwLCAweGYxNDEsIDB4MzMwMCwgMHhmM2MxLCAweGYyODEsIDB4MzI0MCwgMHgzNjAwLCAweGY2YzEsIDB4Zjc4MSwgMHgzNzQwLCAweGY1MDEsIDB4MzVjMCwgMHgzNDgwLCAweGY0NDEsIDB4M2MwMCwgMHhmY2MxLCAweGZkODEsIDB4M2Q0MCwgMHhmZjAxLCAweDNmYzAsIDB4M2U4MCwgMHhmZTQxLCAweGZhMDEsIDB4M2FjMCwgMHgzYjgwLCAweGZiNDEsIDB4MzkwMCwgMHhmOWMxLCAweGY4ODEsIDB4Mzg0MCwgMHgyODAwLCAweGU4YzEsIDB4ZTk4MSwgMHgyOTQwLCAweGViMDEsIDB4MmJjMCwgMHgyYTgwLCAweGVhNDEsIDB4ZWUwMSwgMHgyZWMwLCAweDJmODAsIDB4ZWY0MSwgMHgyZDAwLCAweGVkYzEsIDB4ZWM4MSwgMHgyYzQwLCAweGU0MDEsIDB4MjRjMCwgMHgyNTgwLCAweGU1NDEsIDB4MjcwMCwgMHhlN2MxLCAweGU2ODEsIDB4MjY0MCwgMHgyMjAwLCAweGUyYzEsIDB4ZTM4MSwgMHgyMzQwLCAweGUxMDEsIDB4MjFjMCwgMHgyMDgwLCAweGUwNDEsIDB4YTAwMSwgMHg2MGMwLCAweDYxODAsIDB4YTE0MSwgMHg2MzAwLCAweGEzYzEsIDB4YTI4MSwgMHg2MjQwLCAweDY2MDAsIDB4YTZjMSwgMHhhNzgxLCAweDY3NDAsIDB4YTUwMSwgMHg2NWMwLCAweDY0ODAsIDB4YTQ0MSwgMHg2YzAwLCAweGFjYzEsIDB4YWQ4MSwgMHg2ZDQwLCAweGFmMDEsIDB4NmZjMCwgMHg2ZTgwLCAweGFlNDEsIDB4YWEwMSwgMHg2YWMwLCAweDZiODAsIDB4YWI0MSwgMHg2OTAwLCAweGE5YzEsIDB4YTg4MSwgMHg2ODQwLCAweDc4MDAsIDB4YjhjMSwgMHhiOTgxLCAweDc5NDAsIDB4YmIwMSwgMHg3YmMwLCAweDdhODAsIDB4YmE0MSwgMHhiZTAxLCAweDdlYzAsIDB4N2Y4MCwgMHhiZjQxLCAweDdkMDAsIDB4YmRjMSwgMHhiYzgxLCAweDdjNDAsIDB4YjQwMSwgMHg3NGMwLCAweDc1ODAsIDB4YjU0MSwgMHg3NzAwLCAweGI3YzEsIDB4YjY4MSwgMHg3NjQwLCAweDcyMDAsIDB4YjJjMSwgMHhiMzgxLCAweDczNDAsIDB4YjEwMSwgMHg3MWMwLCAweDcwODAsIDB4YjA0MSwgMHg1MDAwLCAweDkwYzEsIDB4OTE4MSwgMHg1MTQwLCAweDkzMDEsIDB4NTNjMCwgMHg1MjgwLCAweDkyNDEsIDB4OTYwMSwgMHg1NmMwLCAweDU3ODAsIDB4OTc0MSwgMHg1NTAwLCAweDk1YzEsIDB4OTQ4MSwgMHg1NDQwLCAweDljMDEsIDB4NWNjMCwgMHg1ZDgwLCAweDlkNDEsIDB4NWYwMCwgMHg5ZmMxLCAweDllODEsIDB4NWU0MCwgMHg1YTAwLCAweDlhYzEsIDB4OWI4MSwgMHg1YjQwLCAweDk5MDEsIDB4NTljMCwgMHg1ODgwLCAweDk4NDEsIDB4ODgwMSwgMHg0OGMwLCAweDQ5ODAsIDB4ODk0MSwgMHg0YjAwLCAweDhiYzEsIDB4OGE4MSwgMHg0YTQwLCAweDRlMDAsIDB4OGVjMSwgMHg4ZjgxLCAweDRmNDAsIDB4OGQwMSwgMHg0ZGMwLCAweDRjODAsIDB4OGM0MSwgMHg0NDAwLCAweDg0YzEsIDB4ODU4MSwgMHg0NTQwLCAweDg3MDEsIDB4NDdjMCwgMHg0NjgwLCAweDg2NDEsIDB4ODIwMSwgMHg0MmMwLCAweDQzODAsIDB4ODM0MSwgMHg0MTAwLCAweDgxYzEsIDB4ODA4MSwgMHg0MDQwXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTE2LW1vZGJ1cycsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4ZmZmZjtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSAoVEFCTEVbKGNyYyBeIGJ5dGUpICYgMHhmZl0gXiBjcmMgPj4gOCkgJiAweGZmZmY7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfbW9kYnVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ3htb2RlbScsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4MDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICB2YXIgY29kZSA9IGNyYyA+Pj4gOCAmIDB4RkY7XG5cbiAgICBjb2RlIF49IGJ5dGUgJiAweEZGO1xuICAgIGNvZGUgXj0gY29kZSA+Pj4gNDtcbiAgICBjcmMgPSBjcmMgPDwgOCAmIDB4RkZGRjtcbiAgICBjcmMgXj0gY29kZTtcbiAgICBjb2RlID0gY29kZSA8PCA1ICYgMHhGRkZGO1xuICAgIGNyYyBePSBjb2RlO1xuICAgIGNvZGUgPSBjb2RlIDw8IDcgJiAweEZGRkY7XG4gICAgY3JjIF49IGNvZGU7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfeG1vZGVtLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9a2VybWl0IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAsIDB4MTE4OSwgMHgyMzEyLCAweDMyOWIsIDB4NDYyNCwgMHg1N2FkLCAweDY1MzYsIDB4NzRiZiwgMHg4YzQ4LCAweDlkYzEsIDB4YWY1YSwgMHhiZWQzLCAweGNhNmMsIDB4ZGJlNSwgMHhlOTdlLCAweGY4ZjcsIDB4MTA4MSwgMHgwMTA4LCAweDMzOTMsIDB4MjIxYSwgMHg1NmE1LCAweDQ3MmMsIDB4NzViNywgMHg2NDNlLCAweDljYzksIDB4OGQ0MCwgMHhiZmRiLCAweGFlNTIsIDB4ZGFlZCwgMHhjYjY0LCAweGY5ZmYsIDB4ZTg3NiwgMHgyMTAyLCAweDMwOGIsIDB4MDIxMCwgMHgxMzk5LCAweDY3MjYsIDB4NzZhZiwgMHg0NDM0LCAweDU1YmQsIDB4YWQ0YSwgMHhiY2MzLCAweDhlNTgsIDB4OWZkMSwgMHhlYjZlLCAweGZhZTcsIDB4Yzg3YywgMHhkOWY1LCAweDMxODMsIDB4MjAwYSwgMHgxMjkxLCAweDAzMTgsIDB4NzdhNywgMHg2NjJlLCAweDU0YjUsIDB4NDUzYywgMHhiZGNiLCAweGFjNDIsIDB4OWVkOSwgMHg4ZjUwLCAweGZiZWYsIDB4ZWE2NiwgMHhkOGZkLCAweGM5NzQsIDB4NDIwNCwgMHg1MzhkLCAweDYxMTYsIDB4NzA5ZiwgMHgwNDIwLCAweDE1YTksIDB4MjczMiwgMHgzNmJiLCAweGNlNGMsIDB4ZGZjNSwgMHhlZDVlLCAweGZjZDcsIDB4ODg2OCwgMHg5OWUxLCAweGFiN2EsIDB4YmFmMywgMHg1Mjg1LCAweDQzMGMsIDB4NzE5NywgMHg2MDFlLCAweDE0YTEsIDB4MDUyOCwgMHgzN2IzLCAweDI2M2EsIDB4ZGVjZCwgMHhjZjQ0LCAweGZkZGYsIDB4ZWM1NiwgMHg5OGU5LCAweDg5NjAsIDB4YmJmYiwgMHhhYTcyLCAweDYzMDYsIDB4NzI4ZiwgMHg0MDE0LCAweDUxOWQsIDB4MjUyMiwgMHgzNGFiLCAweDA2MzAsIDB4MTdiOSwgMHhlZjRlLCAweGZlYzcsIDB4Y2M1YywgMHhkZGQ1LCAweGE5NmEsIDB4YjhlMywgMHg4YTc4LCAweDliZjEsIDB4NzM4NywgMHg2MjBlLCAweDUwOTUsIDB4NDExYywgMHgzNWEzLCAweDI0MmEsIDB4MTZiMSwgMHgwNzM4LCAweGZmY2YsIDB4ZWU0NiwgMHhkY2RkLCAweGNkNTQsIDB4YjllYiwgMHhhODYyLCAweDlhZjksIDB4OGI3MCwgMHg4NDA4LCAweDk1ODEsIDB4YTcxYSwgMHhiNjkzLCAweGMyMmMsIDB4ZDNhNSwgMHhlMTNlLCAweGYwYjcsIDB4MDg0MCwgMHgxOWM5LCAweDJiNTIsIDB4M2FkYiwgMHg0ZTY0LCAweDVmZWQsIDB4NmQ3NiwgMHg3Y2ZmLCAweDk0ODksIDB4ODUwMCwgMHhiNzliLCAweGE2MTIsIDB4ZDJhZCwgMHhjMzI0LCAweGYxYmYsIDB4ZTAzNiwgMHgxOGMxLCAweDA5NDgsIDB4M2JkMywgMHgyYTVhLCAweDVlZTUsIDB4NGY2YywgMHg3ZGY3LCAweDZjN2UsIDB4YTUwYSwgMHhiNDgzLCAweDg2MTgsIDB4OTc5MSwgMHhlMzJlLCAweGYyYTcsIDB4YzAzYywgMHhkMWI1LCAweDI5NDIsIDB4MzhjYiwgMHgwYTUwLCAweDFiZDksIDB4NmY2NiwgMHg3ZWVmLCAweDRjNzQsIDB4NWRmZCwgMHhiNThiLCAweGE0MDIsIDB4OTY5OSwgMHg4NzEwLCAweGYzYWYsIDB4ZTIyNiwgMHhkMGJkLCAweGMxMzQsIDB4MzljMywgMHgyODRhLCAweDFhZDEsIDB4MGI1OCwgMHg3ZmU3LCAweDZlNmUsIDB4NWNmNSwgMHg0ZDdjLCAweGM2MGMsIDB4ZDc4NSwgMHhlNTFlLCAweGY0OTcsIDB4ODAyOCwgMHg5MWExLCAweGEzM2EsIDB4YjJiMywgMHg0YTQ0LCAweDViY2QsIDB4Njk1NiwgMHg3OGRmLCAweDBjNjAsIDB4MWRlOSwgMHgyZjcyLCAweDNlZmIsIDB4ZDY4ZCwgMHhjNzA0LCAweGY1OWYsIDB4ZTQxNiwgMHg5MGE5LCAweDgxMjAsIDB4YjNiYiwgMHhhMjMyLCAweDVhYzUsIDB4NGI0YywgMHg3OWQ3LCAweDY4NWUsIDB4MWNlMSwgMHgwZDY4LCAweDNmZjMsIDB4MmU3YSwgMHhlNzBlLCAweGY2ODcsIDB4YzQxYywgMHhkNTk1LCAweGExMmEsIDB4YjBhMywgMHg4MjM4LCAweDkzYjEsIDB4NmI0NiwgMHg3YWNmLCAweDQ4NTQsIDB4NTlkZCwgMHgyZDYyLCAweDNjZWIsIDB4MGU3MCwgMHgxZmY5LCAweGY3OGYsIDB4ZTYwNiwgMHhkNDlkLCAweGM1MTQsIDB4YjFhYiwgMHhhMDIyLCAweDkyYjksIDB4ODMzMCwgMHg3YmM3LCAweDZhNGUsIDB4NThkNSwgMHg0OTVjLCAweDNkZTMsIDB4MmM2YSwgMHgxZWYxLCAweDBmNzhdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdrZXJtaXQnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gdHlwZW9mIHByZXZpb3VzICE9PSAndW5kZWZpbmVkJyA/IH5+cHJldmlvdXMgOiAweDAwMDA7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gKFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gY3JjID4+IDgpICYgMHhmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X2tlcm1pdC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlIC0tbW9kZWw9Y3JjLTI0IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAwMCwgMHg4NjRjZmIsIDB4OGFkNTBkLCAweDBjOTlmNiwgMHg5M2U2ZTEsIDB4MTVhYTFhLCAweDE5MzNlYywgMHg5ZjdmMTcsIDB4YTE4MTM5LCAweDI3Y2RjMiwgMHgyYjU0MzQsIDB4YWQxOGNmLCAweDMyNjdkOCwgMHhiNDJiMjMsIDB4YjhiMmQ1LCAweDNlZmUyZSwgMHhjNTRlODksIDB4NDMwMjcyLCAweDRmOWI4NCwgMHhjOWQ3N2YsIDB4NTZhODY4LCAweGQwZTQ5MywgMHhkYzdkNjUsIDB4NWEzMTllLCAweDY0Y2ZiMCwgMHhlMjgzNGIsIDB4ZWUxYWJkLCAweDY4NTY0NiwgMHhmNzI5NTEsIDB4NzE2NWFhLCAweDdkZmM1YywgMHhmYmIwYTcsIDB4MGNkMWU5LCAweDhhOWQxMiwgMHg4NjA0ZTQsIDB4MDA0ODFmLCAweDlmMzcwOCwgMHgxOTdiZjMsIDB4MTVlMjA1LCAweDkzYWVmZSwgMHhhZDUwZDAsIDB4MmIxYzJiLCAweDI3ODVkZCwgMHhhMWM5MjYsIDB4M2ViNjMxLCAweGI4ZmFjYSwgMHhiNDYzM2MsIDB4MzIyZmM3LCAweGM5OWY2MCwgMHg0ZmQzOWIsIDB4NDM0YTZkLCAweGM1MDY5NiwgMHg1YTc5ODEsIDB4ZGMzNTdhLCAweGQwYWM4YywgMHg1NmUwNzcsIDB4NjgxZTU5LCAweGVlNTJhMiwgMHhlMmNiNTQsIDB4NjQ4N2FmLCAweGZiZjhiOCwgMHg3ZGI0NDMsIDB4NzEyZGI1LCAweGY3NjE0ZSwgMHgxOWEzZDIsIDB4OWZlZjI5LCAweDkzNzZkZiwgMHgxNTNhMjQsIDB4OGE0NTMzLCAweDBjMDljOCwgMHgwMDkwM2UsIDB4ODZkY2M1LCAweGI4MjJlYiwgMHgzZTZlMTAsIDB4MzJmN2U2LCAweGI0YmIxZCwgMHgyYmM0MGEsIDB4YWQ4OGYxLCAweGExMTEwNywgMHgyNzVkZmMsIDB4ZGNlZDViLCAweDVhYTFhMCwgMHg1NjM4NTYsIDB4ZDA3NGFkLCAweDRmMGJiYSwgMHhjOTQ3NDEsIDB4YzVkZWI3LCAweDQzOTI0YywgMHg3ZDZjNjIsIDB4ZmIyMDk5LCAweGY3Yjk2ZiwgMHg3MWY1OTQsIDB4ZWU4YTgzLCAweDY4YzY3OCwgMHg2NDVmOGUsIDB4ZTIxMzc1LCAweDE1NzIzYiwgMHg5MzNlYzAsIDB4OWZhNzM2LCAweDE5ZWJjZCwgMHg4Njk0ZGEsIDB4MDBkODIxLCAweDBjNDFkNywgMHg4YTBkMmMsIDB4YjRmMzAyLCAweDMyYmZmOSwgMHgzZTI2MGYsIDB4Yjg2YWY0LCAweDI3MTVlMywgMHhhMTU5MTgsIDB4YWRjMGVlLCAweDJiOGMxNSwgMHhkMDNjYjIsIDB4NTY3MDQ5LCAweDVhZTliZiwgMHhkY2E1NDQsIDB4NDNkYTUzLCAweGM1OTZhOCwgMHhjOTBmNWUsIDB4NGY0M2E1LCAweDcxYmQ4YiwgMHhmN2YxNzAsIDB4ZmI2ODg2LCAweDdkMjQ3ZCwgMHhlMjViNmEsIDB4NjQxNzkxLCAweDY4OGU2NywgMHhlZWMyOWMsIDB4MzM0N2E0LCAweGI1MGI1ZiwgMHhiOTkyYTksIDB4M2ZkZTUyLCAweGEwYTE0NSwgMHgyNmVkYmUsIDB4MmE3NDQ4LCAweGFjMzhiMywgMHg5MmM2OWQsIDB4MTQ4YTY2LCAweDE4MTM5MCwgMHg5ZTVmNmIsIDB4MDEyMDdjLCAweDg3NmM4NywgMHg4YmY1NzEsIDB4MGRiOThhLCAweGY2MDkyZCwgMHg3MDQ1ZDYsIDB4N2NkYzIwLCAweGZhOTBkYiwgMHg2NWVmY2MsIDB4ZTNhMzM3LCAweGVmM2FjMSwgMHg2OTc2M2EsIDB4NTc4ODE0LCAweGQxYzRlZiwgMHhkZDVkMTksIDB4NWIxMWUyLCAweGM0NmVmNSwgMHg0MjIyMGUsIDB4NGViYmY4LCAweGM4ZjcwMywgMHgzZjk2NGQsIDB4YjlkYWI2LCAweGI1NDM0MCwgMHgzMzBmYmIsIDB4YWM3MGFjLCAweDJhM2M1NywgMHgyNmE1YTEsIDB4YTBlOTVhLCAweDllMTc3NCwgMHgxODViOGYsIDB4MTRjMjc5LCAweDkyOGU4MiwgMHgwZGYxOTUsIDB4OGJiZDZlLCAweDg3MjQ5OCwgMHgwMTY4NjMsIDB4ZmFkOGM0LCAweDdjOTQzZiwgMHg3MDBkYzksIDB4ZjY0MTMyLCAweDY5M2UyNSwgMHhlZjcyZGUsIDB4ZTNlYjI4LCAweDY1YTdkMywgMHg1YjU5ZmQsIDB4ZGQxNTA2LCAweGQxOGNmMCwgMHg1N2MwMGIsIDB4YzhiZjFjLCAweDRlZjNlNywgMHg0MjZhMTEsIDB4YzQyNmVhLCAweDJhZTQ3NiwgMHhhY2E4OGQsIDB4YTAzMTdiLCAweDI2N2Q4MCwgMHhiOTAyOTcsIDB4M2Y0ZTZjLCAweDMzZDc5YSwgMHhiNTliNjEsIDB4OGI2NTRmLCAweDBkMjliNCwgMHgwMWIwNDIsIDB4ODdmY2I5LCAweDE4ODNhZSwgMHg5ZWNmNTUsIDB4OTI1NmEzLCAweDE0MWE1OCwgMHhlZmFhZmYsIDB4NjllNjA0LCAweDY1N2ZmMiwgMHhlMzMzMDksIDB4N2M0YzFlLCAweGZhMDBlNSwgMHhmNjk5MTMsIDB4NzBkNWU4LCAweDRlMmJjNiwgMHhjODY3M2QsIDB4YzRmZWNiLCAweDQyYjIzMCwgMHhkZGNkMjcsIDB4NWI4MWRjLCAweDU3MTgyYSwgMHhkMTU0ZDEsIDB4MjYzNTlmLCAweGEwNzk2NCwgMHhhY2UwOTIsIDB4MmFhYzY5LCAweGI1ZDM3ZSwgMHgzMzlmODUsIDB4M2YwNjczLCAweGI5NGE4OCwgMHg4N2I0YTYsIDB4MDFmODVkLCAweDBkNjFhYiwgMHg4YjJkNTAsIDB4MTQ1MjQ3LCAweDkyMWViYywgMHg5ZTg3NGEsIDB4MThjYmIxLCAweGUzN2IxNiwgMHg2NTM3ZWQsIDB4NjlhZTFiLCAweGVmZTJlMCwgMHg3MDlkZjcsIDB4ZjZkMTBjLCAweGZhNDhmYSwgMHg3YzA0MDEsIDB4NDJmYTJmLCAweGM0YjZkNCwgMHhjODJmMjIsIDB4NGU2M2Q5LCAweGQxMWNjZSwgMHg1NzUwMzUsIDB4NWJjOWMzLCAweGRkODUzOF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NyYy0yNCcsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4YjcwNGNlO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjID4+IDE2IF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA8PCA4KSAmIDB4ZmZmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzI0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9Y3JjLTMyIC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAwMDAwLCAweDc3MDczMDk2LCAweGVlMGU2MTJjLCAweDk5MDk1MWJhLCAweDA3NmRjNDE5LCAweDcwNmFmNDhmLCAweGU5NjNhNTM1LCAweDllNjQ5NWEzLCAweDBlZGI4ODMyLCAweDc5ZGNiOGE0LCAweGUwZDVlOTFlLCAweDk3ZDJkOTg4LCAweDA5YjY0YzJiLCAweDdlYjE3Y2JkLCAweGU3YjgyZDA3LCAweDkwYmYxZDkxLCAweDFkYjcxMDY0LCAweDZhYjAyMGYyLCAweGYzYjk3MTQ4LCAweDg0YmU0MWRlLCAweDFhZGFkNDdkLCAweDZkZGRlNGViLCAweGY0ZDRiNTUxLCAweDgzZDM4NWM3LCAweDEzNmM5ODU2LCAweDY0NmJhOGMwLCAweGZkNjJmOTdhLCAweDhhNjVjOWVjLCAweDE0MDE1YzRmLCAweDYzMDY2Y2Q5LCAweGZhMGYzZDYzLCAweDhkMDgwZGY1LCAweDNiNmUyMGM4LCAweDRjNjkxMDVlLCAweGQ1NjA0MWU0LCAweGEyNjc3MTcyLCAweDNjMDNlNGQxLCAweDRiMDRkNDQ3LCAweGQyMGQ4NWZkLCAweGE1MGFiNTZiLCAweDM1YjVhOGZhLCAweDQyYjI5ODZjLCAweGRiYmJjOWQ2LCAweGFjYmNmOTQwLCAweDMyZDg2Y2UzLCAweDQ1ZGY1Yzc1LCAweGRjZDYwZGNmLCAweGFiZDEzZDU5LCAweDI2ZDkzMGFjLCAweDUxZGUwMDNhLCAweGM4ZDc1MTgwLCAweGJmZDA2MTE2LCAweDIxYjRmNGI1LCAweDU2YjNjNDIzLCAweGNmYmE5NTk5LCAweGI4YmRhNTBmLCAweDI4MDJiODllLCAweDVmMDU4ODA4LCAweGM2MGNkOWIyLCAweGIxMGJlOTI0LCAweDJmNmY3Yzg3LCAweDU4Njg0YzExLCAweGMxNjExZGFiLCAweGI2NjYyZDNkLCAweDc2ZGM0MTkwLCAweDAxZGI3MTA2LCAweDk4ZDIyMGJjLCAweGVmZDUxMDJhLCAweDcxYjE4NTg5LCAweDA2YjZiNTFmLCAweDlmYmZlNGE1LCAweGU4YjhkNDMzLCAweDc4MDdjOWEyLCAweDBmMDBmOTM0LCAweDk2MDlhODhlLCAweGUxMGU5ODE4LCAweDdmNmEwZGJiLCAweDA4NmQzZDJkLCAweDkxNjQ2Yzk3LCAweGU2NjM1YzAxLCAweDZiNmI1MWY0LCAweDFjNmM2MTYyLCAweDg1NjUzMGQ4LCAweGYyNjIwMDRlLCAweDZjMDY5NWVkLCAweDFiMDFhNTdiLCAweDgyMDhmNGMxLCAweGY1MGZjNDU3LCAweDY1YjBkOWM2LCAweDEyYjdlOTUwLCAweDhiYmViOGVhLCAweGZjYjk4ODdjLCAweDYyZGQxZGRmLCAweDE1ZGEyZDQ5LCAweDhjZDM3Y2YzLCAweGZiZDQ0YzY1LCAweDRkYjI2MTU4LCAweDNhYjU1MWNlLCAweGEzYmMwMDc0LCAweGQ0YmIzMGUyLCAweDRhZGZhNTQxLCAweDNkZDg5NWQ3LCAweGE0ZDFjNDZkLCAweGQzZDZmNGZiLCAweDQzNjllOTZhLCAweDM0NmVkOWZjLCAweGFkNjc4ODQ2LCAweGRhNjBiOGQwLCAweDQ0MDQyZDczLCAweDMzMDMxZGU1LCAweGFhMGE0YzVmLCAweGRkMGQ3Y2M5LCAweDUwMDU3MTNjLCAweDI3MDI0MWFhLCAweGJlMGIxMDEwLCAweGM5MGMyMDg2LCAweDU3NjhiNTI1LCAweDIwNmY4NWIzLCAweGI5NjZkNDA5LCAweGNlNjFlNDlmLCAweDVlZGVmOTBlLCAweDI5ZDljOTk4LCAweGIwZDA5ODIyLCAweGM3ZDdhOGI0LCAweDU5YjMzZDE3LCAweDJlYjQwZDgxLCAweGI3YmQ1YzNiLCAweGMwYmE2Y2FkLCAweGVkYjg4MzIwLCAweDlhYmZiM2I2LCAweDAzYjZlMjBjLCAweDc0YjFkMjlhLCAweGVhZDU0NzM5LCAweDlkZDI3N2FmLCAweDA0ZGIyNjE1LCAweDczZGMxNjgzLCAweGUzNjMwYjEyLCAweDk0NjQzYjg0LCAweDBkNmQ2YTNlLCAweDdhNmE1YWE4LCAweGU0MGVjZjBiLCAweDkzMDlmZjlkLCAweDBhMDBhZTI3LCAweDdkMDc5ZWIxLCAweGYwMGY5MzQ0LCAweDg3MDhhM2QyLCAweDFlMDFmMjY4LCAweDY5MDZjMmZlLCAweGY3NjI1NzVkLCAweDgwNjU2N2NiLCAweDE5NmMzNjcxLCAweDZlNmIwNmU3LCAweGZlZDQxYjc2LCAweDg5ZDMyYmUwLCAweDEwZGE3YTVhLCAweDY3ZGQ0YWNjLCAweGY5YjlkZjZmLCAweDhlYmVlZmY5LCAweDE3YjdiZTQzLCAweDYwYjA4ZWQ1LCAweGQ2ZDZhM2U4LCAweGExZDE5MzdlLCAweDM4ZDhjMmM0LCAweDRmZGZmMjUyLCAweGQxYmI2N2YxLCAweGE2YmM1NzY3LCAweDNmYjUwNmRkLCAweDQ4YjIzNjRiLCAweGQ4MGQyYmRhLCAweGFmMGExYjRjLCAweDM2MDM0YWY2LCAweDQxMDQ3YTYwLCAweGRmNjBlZmMzLCAweGE4NjdkZjU1LCAweDMxNmU4ZWVmLCAweDQ2NjliZTc5LCAweGNiNjFiMzhjLCAweGJjNjY4MzFhLCAweDI1NmZkMmEwLCAweDUyNjhlMjM2LCAweGNjMGM3Nzk1LCAweGJiMGI0NzAzLCAweDIyMDIxNmI5LCAweDU1MDUyNjJmLCAweGM1YmEzYmJlLCAweGIyYmQwYjI4LCAweDJiYjQ1YTkyLCAweDVjYjM2YTA0LCAweGMyZDdmZmE3LCAweGI1ZDBjZjMxLCAweDJjZDk5ZThiLCAweDViZGVhZTFkLCAweDliNjRjMmIwLCAweGVjNjNmMjI2LCAweDc1NmFhMzljLCAweDAyNmQ5MzBhLCAweDljMDkwNmE5LCAweGViMGUzNjNmLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLCAweDk1YmY0YTgyLCAweGUyYjg3YTE0LCAweDdiYjEyYmFlLCAweDBjYjYxYjM4LCAweDkyZDI4ZTliLCAweGU1ZDViZTBkLCAweDdjZGNlZmI3LCAweDBiZGJkZjIxLCAweDg2ZDNkMmQ0LCAweGYxZDRlMjQyLCAweDY4ZGRiM2Y4LCAweDFmZGE4MzZlLCAweDgxYmUxNmNkLCAweGY2YjkyNjViLCAweDZmYjA3N2UxLCAweDE4Yjc0Nzc3LCAweDg4MDg1YWU2LCAweGZmMGY2YTcwLCAweDY2MDYzYmNhLCAweDExMDEwYjVjLCAweDhmNjU5ZWZmLCAweGY4NjJhZTY5LCAweDYxNmJmZmQzLCAweDE2NmNjZjQ1LCAweGEwMGFlMjc4LCAweGQ3MGRkMmVlLCAweDRlMDQ4MzU0LCAweDM5MDNiM2MyLCAweGE3NjcyNjYxLCAweGQwNjAxNmY3LCAweDQ5Njk0NzRkLCAweDNlNmU3N2RiLCAweGFlZDE2YTRhLCAweGQ5ZDY1YWRjLCAweDQwZGYwYjY2LCAweDM3ZDgzYmYwLCAweGE5YmNhZTUzLCAweGRlYmI5ZWM1LCAweDQ3YjJjZjdmLCAweDMwYjVmZmU5LCAweGJkYmRmMjFjLCAweGNhYmFjMjhhLCAweDUzYjM5MzMwLCAweDI0YjRhM2E2LCAweGJhZDAzNjA1LCAweGNkZDcwNjkzLCAweDU0ZGU1NzI5LCAweDIzZDk2N2JmLCAweGIzNjY3YTJlLCAweGM0NjE0YWI4LCAweDVkNjgxYjAyLCAweDJhNmYyYjk0LCAweGI0MGJiZTM3LCAweGMzMGM4ZWExLCAweDVhMDVkZjFiLCAweDJkMDJlZjhkXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTMyJywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHByZXZpb3VzID09PSAwID8gMCA6IH5+cHJldmlvdXMgXiAtMTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+Pj4gODtcbiAgfVxuXG4gIHJldHVybiBjcmMgXiAtMTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzMyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9amFtIC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAwMDAwLCAweDc3MDczMDk2LCAweGVlMGU2MTJjLCAweDk5MDk1MWJhLCAweDA3NmRjNDE5LCAweDcwNmFmNDhmLCAweGU5NjNhNTM1LCAweDllNjQ5NWEzLCAweDBlZGI4ODMyLCAweDc5ZGNiOGE0LCAweGUwZDVlOTFlLCAweDk3ZDJkOTg4LCAweDA5YjY0YzJiLCAweDdlYjE3Y2JkLCAweGU3YjgyZDA3LCAweDkwYmYxZDkxLCAweDFkYjcxMDY0LCAweDZhYjAyMGYyLCAweGYzYjk3MTQ4LCAweDg0YmU0MWRlLCAweDFhZGFkNDdkLCAweDZkZGRlNGViLCAweGY0ZDRiNTUxLCAweDgzZDM4NWM3LCAweDEzNmM5ODU2LCAweDY0NmJhOGMwLCAweGZkNjJmOTdhLCAweDhhNjVjOWVjLCAweDE0MDE1YzRmLCAweDYzMDY2Y2Q5LCAweGZhMGYzZDYzLCAweDhkMDgwZGY1LCAweDNiNmUyMGM4LCAweDRjNjkxMDVlLCAweGQ1NjA0MWU0LCAweGEyNjc3MTcyLCAweDNjMDNlNGQxLCAweDRiMDRkNDQ3LCAweGQyMGQ4NWZkLCAweGE1MGFiNTZiLCAweDM1YjVhOGZhLCAweDQyYjI5ODZjLCAweGRiYmJjOWQ2LCAweGFjYmNmOTQwLCAweDMyZDg2Y2UzLCAweDQ1ZGY1Yzc1LCAweGRjZDYwZGNmLCAweGFiZDEzZDU5LCAweDI2ZDkzMGFjLCAweDUxZGUwMDNhLCAweGM4ZDc1MTgwLCAweGJmZDA2MTE2LCAweDIxYjRmNGI1LCAweDU2YjNjNDIzLCAweGNmYmE5NTk5LCAweGI4YmRhNTBmLCAweDI4MDJiODllLCAweDVmMDU4ODA4LCAweGM2MGNkOWIyLCAweGIxMGJlOTI0LCAweDJmNmY3Yzg3LCAweDU4Njg0YzExLCAweGMxNjExZGFiLCAweGI2NjYyZDNkLCAweDc2ZGM0MTkwLCAweDAxZGI3MTA2LCAweDk4ZDIyMGJjLCAweGVmZDUxMDJhLCAweDcxYjE4NTg5LCAweDA2YjZiNTFmLCAweDlmYmZlNGE1LCAweGU4YjhkNDMzLCAweDc4MDdjOWEyLCAweDBmMDBmOTM0LCAweDk2MDlhODhlLCAweGUxMGU5ODE4LCAweDdmNmEwZGJiLCAweDA4NmQzZDJkLCAweDkxNjQ2Yzk3LCAweGU2NjM1YzAxLCAweDZiNmI1MWY0LCAweDFjNmM2MTYyLCAweDg1NjUzMGQ4LCAweGYyNjIwMDRlLCAweDZjMDY5NWVkLCAweDFiMDFhNTdiLCAweDgyMDhmNGMxLCAweGY1MGZjNDU3LCAweDY1YjBkOWM2LCAweDEyYjdlOTUwLCAweDhiYmViOGVhLCAweGZjYjk4ODdjLCAweDYyZGQxZGRmLCAweDE1ZGEyZDQ5LCAweDhjZDM3Y2YzLCAweGZiZDQ0YzY1LCAweDRkYjI2MTU4LCAweDNhYjU1MWNlLCAweGEzYmMwMDc0LCAweGQ0YmIzMGUyLCAweDRhZGZhNTQxLCAweDNkZDg5NWQ3LCAweGE0ZDFjNDZkLCAweGQzZDZmNGZiLCAweDQzNjllOTZhLCAweDM0NmVkOWZjLCAweGFkNjc4ODQ2LCAweGRhNjBiOGQwLCAweDQ0MDQyZDczLCAweDMzMDMxZGU1LCAweGFhMGE0YzVmLCAweGRkMGQ3Y2M5LCAweDUwMDU3MTNjLCAweDI3MDI0MWFhLCAweGJlMGIxMDEwLCAweGM5MGMyMDg2LCAweDU3NjhiNTI1LCAweDIwNmY4NWIzLCAweGI5NjZkNDA5LCAweGNlNjFlNDlmLCAweDVlZGVmOTBlLCAweDI5ZDljOTk4LCAweGIwZDA5ODIyLCAweGM3ZDdhOGI0LCAweDU5YjMzZDE3LCAweDJlYjQwZDgxLCAweGI3YmQ1YzNiLCAweGMwYmE2Y2FkLCAweGVkYjg4MzIwLCAweDlhYmZiM2I2LCAweDAzYjZlMjBjLCAweDc0YjFkMjlhLCAweGVhZDU0NzM5LCAweDlkZDI3N2FmLCAweDA0ZGIyNjE1LCAweDczZGMxNjgzLCAweGUzNjMwYjEyLCAweDk0NjQzYjg0LCAweDBkNmQ2YTNlLCAweDdhNmE1YWE4LCAweGU0MGVjZjBiLCAweDkzMDlmZjlkLCAweDBhMDBhZTI3LCAweDdkMDc5ZWIxLCAweGYwMGY5MzQ0LCAweDg3MDhhM2QyLCAweDFlMDFmMjY4LCAweDY5MDZjMmZlLCAweGY3NjI1NzVkLCAweDgwNjU2N2NiLCAweDE5NmMzNjcxLCAweDZlNmIwNmU3LCAweGZlZDQxYjc2LCAweDg5ZDMyYmUwLCAweDEwZGE3YTVhLCAweDY3ZGQ0YWNjLCAweGY5YjlkZjZmLCAweDhlYmVlZmY5LCAweDE3YjdiZTQzLCAweDYwYjA4ZWQ1LCAweGQ2ZDZhM2U4LCAweGExZDE5MzdlLCAweDM4ZDhjMmM0LCAweDRmZGZmMjUyLCAweGQxYmI2N2YxLCAweGE2YmM1NzY3LCAweDNmYjUwNmRkLCAweDQ4YjIzNjRiLCAweGQ4MGQyYmRhLCAweGFmMGExYjRjLCAweDM2MDM0YWY2LCAweDQxMDQ3YTYwLCAweGRmNjBlZmMzLCAweGE4NjdkZjU1LCAweDMxNmU4ZWVmLCAweDQ2NjliZTc5LCAweGNiNjFiMzhjLCAweGJjNjY4MzFhLCAweDI1NmZkMmEwLCAweDUyNjhlMjM2LCAweGNjMGM3Nzk1LCAweGJiMGI0NzAzLCAweDIyMDIxNmI5LCAweDU1MDUyNjJmLCAweGM1YmEzYmJlLCAweGIyYmQwYjI4LCAweDJiYjQ1YTkyLCAweDVjYjM2YTA0LCAweGMyZDdmZmE3LCAweGI1ZDBjZjMxLCAweDJjZDk5ZThiLCAweDViZGVhZTFkLCAweDliNjRjMmIwLCAweGVjNjNmMjI2LCAweDc1NmFhMzljLCAweDAyNmQ5MzBhLCAweDljMDkwNmE5LCAweGViMGUzNjNmLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLCAweDk1YmY0YTgyLCAweGUyYjg3YTE0LCAweDdiYjEyYmFlLCAweDBjYjYxYjM4LCAweDkyZDI4ZTliLCAweGU1ZDViZTBkLCAweDdjZGNlZmI3LCAweDBiZGJkZjIxLCAweDg2ZDNkMmQ0LCAweGYxZDRlMjQyLCAweDY4ZGRiM2Y4LCAweDFmZGE4MzZlLCAweDgxYmUxNmNkLCAweGY2YjkyNjViLCAweDZmYjA3N2UxLCAweDE4Yjc0Nzc3LCAweDg4MDg1YWU2LCAweGZmMGY2YTcwLCAweDY2MDYzYmNhLCAweDExMDEwYjVjLCAweDhmNjU5ZWZmLCAweGY4NjJhZTY5LCAweDYxNmJmZmQzLCAweDE2NmNjZjQ1LCAweGEwMGFlMjc4LCAweGQ3MGRkMmVlLCAweDRlMDQ4MzU0LCAweDM5MDNiM2MyLCAweGE3NjcyNjYxLCAweGQwNjAxNmY3LCAweDQ5Njk0NzRkLCAweDNlNmU3N2RiLCAweGFlZDE2YTRhLCAweGQ5ZDY1YWRjLCAweDQwZGYwYjY2LCAweDM3ZDgzYmYwLCAweGE5YmNhZTUzLCAweGRlYmI5ZWM1LCAweDQ3YjJjZjdmLCAweDMwYjVmZmU5LCAweGJkYmRmMjFjLCAweGNhYmFjMjhhLCAweDUzYjM5MzMwLCAweDI0YjRhM2E2LCAweGJhZDAzNjA1LCAweGNkZDcwNjkzLCAweDU0ZGU1NzI5LCAweDIzZDk2N2JmLCAweGIzNjY3YTJlLCAweGM0NjE0YWI4LCAweDVkNjgxYjAyLCAweDJhNmYyYjk0LCAweGI0MGJiZTM3LCAweGMzMGM4ZWExLCAweDVhMDVkZjFiLCAweDJkMDJlZjhkXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnamFtJywgZnVuY3Rpb24gKGJ1Zikge1xuICB2YXIgcHJldmlvdXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IC0xO1xuXG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSBwcmV2aW91cyA9PT0gMCA/IDAgOiB+fnByZXZpb3VzO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gY3JjID4+PiA4O1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyY2phbS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIHVpZC1zYWZlXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE1LTIwMTcgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciByYW5kb21CeXRlcyA9IHJlcXVpcmUoJ3JhbmRvbS1ieXRlcycpXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEVRVUFMX0VORF9SRUdFWFAgPSAvPSskL1xudmFyIFBMVVNfR0xPQkFMX1JFR0VYUCA9IC9cXCsvZ1xudmFyIFNMQVNIX0dMT0JBTF9SRUdFWFAgPSAvXFwvL2dcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVpZFxubW9kdWxlLmV4cG9ydHMuc3luYyA9IHVpZFN5bmNcblxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgSUQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB1aWQgKGxlbmd0aCwgY2FsbGJhY2spIHtcbiAgLy8gdmFsaWRhdGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiwgaWYgcHJvdmlkZWRcbiAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIC8vIHJlcXVpcmUgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcHJvbWlzZXNcbiAgaWYgKCFjYWxsYmFjayAmJiAhZ2xvYmFsLlByb21pc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBjYWxsYmFjayBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICAvLyBjbGFzc2ljIGNhbGxiYWNrIHN0eWxlXG4gICAgcmV0dXJuIGdlbmVyYXRlVWlkKGxlbmd0aCwgY2FsbGJhY2spXG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IgKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGdlbmVyYXRlVWlkKGxlbmd0aCwgZnVuY3Rpb24gb25VaWQgKGVyciwgc3RyKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIHJlc29sdmUoc3RyKVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pcXVlIElEIHN5bmMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHVpZFN5bmMgKGxlbmd0aCkge1xuICByZXR1cm4gdG9TdHJpbmcocmFuZG9tQnl0ZXMuc3luYyhsZW5ndGgpKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVVpZCAobGVuZ3RoLCBjYWxsYmFjaykge1xuICByYW5kb21CeXRlcyhsZW5ndGgsIGZ1bmN0aW9uIChlcnIsIGJ1Zikge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgY2FsbGJhY2sobnVsbCwgdG9TdHJpbmcoYnVmKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDaGFuZ2UgYSBCdWZmZXIgaW50byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRvU3RyaW5nIChidWYpIHtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZygnYmFzZTY0JylcbiAgICAucmVwbGFjZShFUVVBTF9FTkRfUkVHRVhQLCAnJylcbiAgICAucmVwbGFjZShQTFVTX0dMT0JBTF9SRUdFWFAsICctJylcbiAgICAucmVwbGFjZShTTEFTSF9HTE9CQUxfUkVHRVhQLCAnXycpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdWlkLXNhZmUvaW5kZXguanMiLCIvKiFcbiAqIHJhbmRvbS1ieXRlc1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBnZW5lcmF0ZUF0dGVtcHRzID0gY3J5cHRvLnJhbmRvbUJ5dGVzID09PSBjcnlwdG8ucHNldWRvUmFuZG9tQnl0ZXMgPyAxIDogM1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZXNcbm1vZHVsZS5leHBvcnRzLnN5bmMgPSByYW5kb21CeXRlc1N5bmNcblxuLyoqXG4gKiBHZW5lcmF0ZXMgc3Ryb25nIHBzZXVkby1yYW5kb20gYnl0ZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZXMoc2l6ZSwgY2FsbGJhY2spIHtcbiAgLy8gdmFsaWRhdGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiwgaWYgcHJvdmlkZWRcbiAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIC8vIHJlcXVpcmUgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcHJvbWlzZXNcbiAgaWYgKCFjYWxsYmFjayAmJiAhZ2xvYmFsLlByb21pc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBjYWxsYmFjayBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICAvLyBjbGFzc2ljIGNhbGxiYWNrIHN0eWxlXG4gICAgcmV0dXJuIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSwgZ2VuZXJhdGVBdHRlbXB0cywgY2FsbGJhY2spXG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZ2VuZXJhdGVSYW5kb21CeXRlcyhzaXplLCBnZW5lcmF0ZUF0dGVtcHRzLCBmdW5jdGlvbiBvblJhbmRvbUJ5dGVzKGVyciwgc3RyKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIHJlc29sdmUoc3RyKVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHN0cm9uZyBwc2V1ZG8tcmFuZG9tIGJ5dGVzIHN5bmMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEByZXR1cm4ge0J1ZmZlcn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByYW5kb21CeXRlc1N5bmMoc2l6ZSkge1xuICB2YXIgZXJyID0gbnVsbFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZ2VuZXJhdGVBdHRlbXB0czsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgZXJyXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHN0cm9uZyBwc2V1ZG8tcmFuZG9tIGJ5dGVzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge251bWJlcn0gYXR0ZW1wdHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSwgYXR0ZW1wdHMsIGNhbGxiYWNrKSB7XG4gIGNyeXB0by5yYW5kb21CeXRlcyhzaXplLCBmdW5jdGlvbiBvblJhbmRvbUJ5dGVzKGVyciwgYnVmKSB7XG4gICAgaWYgKCFlcnIpIHJldHVybiBjYWxsYmFjayhudWxsLCBidWYpXG4gICAgaWYgKCEtLWF0dGVtcHRzKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIHNldFRpbWVvdXQoZ2VuZXJhdGVSYW5kb21CeXRlcy5iaW5kKG51bGwsIHNpemUsIGF0dGVtcHRzLCBjYWxsYmFjayksIDEwKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3JhbmRvbS1ieXRlcy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNyeXB0b1wiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpO1xudmFyIGlzU3RlYXJtID0gcmVxdWlyZSgnaXNzdHJlYW0nKTtcbnZhciBpc0NsYXNzID0gcmVxdWlyZSgnaXMtY2xhc3MnKTtcblxuLyoqXG4gKiBFeHBvc2UgYWxsIG1ldGhvZHMgaW4gY29yZS11dGlsLWlzXG4gKi9cblxuT2JqZWN0LmtleXModXRpbHMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICBleHBvcnRzW3RyYW5zZm9ybShuYW1lKV0gPSB1dGlsc1tuYW1lXTtcbn0pO1xuXG4vKipcbiAqIFN0cmVhbSBkZXRlY3RlZCBieSBpc3N0cmVhbVxuICovXG5cbmV4cG9ydHMuc3RyZWFtID0gaXNTdGVhcm07XG5leHBvcnRzLnJlYWRhYmxlU3RyZWFtID0gaXNTdGVhcm0uaXNSZWFkYWJsZTtcbmV4cG9ydHMud3JpdGFibGVTdHJlYW0gPSBpc1N0ZWFybS5pc1dyaXRhYmxlO1xuZXhwb3J0cy5kdXBsZXhTdHJlYW0gPSBpc1N0ZWFybS5pc0R1cGxleDtcblxuLyoqXG4gKiBDbGFzcyBkZXRlY3RlZCBieSBpcy1jbGFzc1xuICovXG4gZXhwb3J0cy5jbGFzcyA9IGlzQ2xhc3M7XG5cbi8qKlxuICogRXh0ZW5kIG1ldGhvZFxuICovXG5cbmV4cG9ydHMuZmluaXRlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG9iaik7XG59O1xuXG5leHBvcnRzLk5hTiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE51bWJlci5pc05hTihvYmopO1xufTtcblxuZXhwb3J0cy5nZW5lcmF0b3IgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmpcbiAgICAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLm5leHRcbiAgICAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLnRocm93O1xufTtcblxuZXhwb3J0cy5nZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9ialxuICAgICYmIG9iai5jb25zdHJ1Y3RvclxuICAgICYmICdHZW5lcmF0b3JGdW5jdGlvbicgPT09IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xufTtcblxuZXhwb3J0cy5hc3luY0Z1bmN0aW9uID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqXG4gICAgJiYgb2JqLmNvbnN0cnVjdG9yXG4gICAgJiYgJ0FzeW5jRnVuY3Rpb24nID09PSBvYmouY29uc3RydWN0b3IubmFtZTtcbn07XG5cbmV4cG9ydHMucHJvbWlzZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9ialxuICAgICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvYmoudGhlbjtcbn07XG5cbnZhciBNQVhfSU5UXzMxID0gTWF0aC5wb3coMiwgMzEpO1xuXG5leHBvcnRzLmludCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHV0aWxzLmlzTnVtYmVyKG9iailcbiAgICAmJiBvYmogJSAxID09PSAwO1xufTtcblxuZXhwb3J0cy5pbnQzMiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIGV4cG9ydHMuaW50KG9iailcbiAgICAmJiBvYmogPCBNQVhfSU5UXzMxXG4gICAgJiYgb2JqID49IC1NQVhfSU5UXzMxO1xufTtcblxuZXhwb3J0cy5sb25nID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gZXhwb3J0cy5pbnQob2JqKVxuICAgICYmIChvYmogPj0gTUFYX0lOVF8zMSB8fCBvYmogPCAtTUFYX0lOVF8zMSk7XG59O1xuXG5leHBvcnRzLkxvbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBleHBvcnRzLm9iamVjdChvYmopXG4gICAgJiYgZXhwb3J0cy5udW1iZXIob2JqLmhpZ2gpXG4gICAgJiYgZXhwb3J0cy5udW1iZXIob2JqLmxvdyk7XG59O1xuXG5leHBvcnRzLmRvdWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHV0aWxzLmlzTnVtYmVyKG9iailcbiAgICAmJiAhaXNOYU4ob2JqKVxuICAgICYmIG9iaiAlIDEgIT09IDA7XG59O1xuXG4vKipcbiAqIG92ZXJyaWRlIGNvcmUtdXRpbC1pc1xuICovXG5cbmV4cG9ydHMuZGF0ZSA9IGZ1bmN0aW9uIGlzRGF0ZShvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERhdGU7XG59O1xuXG5leHBvcnRzLnJlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgUmVnRXhwO1xufTtcbmV4cG9ydHMucmVnZXhwID0gZXhwb3J0cy5yZWdFeHA7XG5cbmV4cG9ydHMuZXJyb3IgPSBmdW5jdGlvbiBpc0Vycm9yKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3I7XG59O1xuXG5leHBvcnRzLmFycmF5ID0gZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbn07XG5cbi8qKlxuICogdHJhbnNmb3JtIGlzTnVsbCB0eXBlIHRvIG51bGxcbiAqIEBwYXJhbSB7W3R5cGVdfSBtIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShtKSB7XG4gIHZhciBuYW1lID0gbS5zbGljZSgyKTtcbiAgbmFtZSA9IG5hbWVbMF0udG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIHJldHVybiBuYW1lO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2lzLXR5cGUtb2YvaW5kZXguanMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cblxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xuICB9XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwidmFyIHN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cblxuZnVuY3Rpb24gaXNTdHJlYW0gKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2Ygc3RyZWFtLlN0cmVhbVxufVxuXG5cbmZ1bmN0aW9uIGlzUmVhZGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl9yZWFkID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5fcmVhZGFibGVTdGF0ZSA9PSAnb2JqZWN0J1xufVxuXG5cbmZ1bmN0aW9uIGlzV3JpdGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl93cml0ZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3dyaXRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc0R1cGxleCAob2JqKSB7XG4gIHJldHVybiBpc1JlYWRhYmxlKG9iaikgJiYgaXNXcml0YWJsZShvYmopXG59XG5cblxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICA9IGlzU3RyZWFtXG5tb2R1bGUuZXhwb3J0cy5pc1JlYWRhYmxlID0gaXNSZWFkYWJsZVxubW9kdWxlLmV4cG9ydHMuaXNXcml0YWJsZSA9IGlzV3JpdGFibGVcbm1vZHVsZS5leHBvcnRzLmlzRHVwbGV4ICAgPSBpc0R1cGxleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2lzc3RyZWFtL2lzc3RyZWFtLmpzIiwiKGZ1bmN0aW9uKHJvb3QpIHtcbiAgdmFyIHRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIGZ1bmN0aW9uIGZuQm9keShmbikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKGZuKS5yZXBsYWNlKC9eW157XSp7XFxzKi8sJycpLnJlcGxhY2UoL1xccyp9W159XSokLywnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NsYXNzKGZuKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICgvXmNsYXNzXFxzLy50ZXN0KHRvU3RyaW5nLmNhbGwoZm4pKSB8fFxuICAgICAgICAgICAgICAoL14uKmNsYXNzQ2FsbENoZWNrXFwoLy50ZXN0KGZuQm9keShmbikpKSkgLy8gYmFiZWwuanNcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0NsYXNzO1xuICAgIH1cbiAgICBleHBvcnRzLmlzQ2xhc3MgPSBpc0NsYXNzO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNDbGFzcztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290LmlzQ2xhc3MgPSBpc0NsYXNzO1xuICB9XG5cbn0pKHRoaXMpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaXMtY2xhc3MvaXMtY2xhc3MuanMiXSwic291cmNlUm9vdCI6IiJ9