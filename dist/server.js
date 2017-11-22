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

var _login = __webpack_require__(10);

var _login2 = _interopRequireDefault(_login);

var _ws = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("ws");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDU1MzA4NWE0MTkyOTQyZDdlNjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JlYXRlX2J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvZGVmaW5lX2NyYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjIuNi45QGRlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjIuNi45QGRlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjUuNS4xQGtvYS1zZXNzaW9uL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uNS41LjFAa29hLXNlc3Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4yLjYuOUBkZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjIuMC4wQG1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMi42LjlAZGVidWcvc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV0XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy41LjUuMUBrb2Etc2Vzc2lvbi9saWIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjUuNS4xQGtvYS1zZXNzaW9uL2xpYi9zZXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjOF8xd2lyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMTYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyYzE2X2NjaXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9jcmMxNl9tb2RidXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyYzE2X3htb2RlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMTZfa2VybWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9jcmMyNC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyY2phbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjIuMS41QHVpZC1zYWZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMS4wLjBAcmFuZG9tLWJ5dGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMS4yLjBAaXMtdHlwZS1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjEuMC4yQGNvcmUtdXRpbC1pcy9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuMS4yQGlzc3RyZWFtL2lzc3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4wLjRAaXMtY2xhc3MvaXMtY2xhc3MuanMiXSwibmFtZXMiOlsicGFnZSIsImN0eCIsImhlYWRlcl90cGwiLCJib2R5X3RwbCIsImZvb3Rlcl90cGwiLCJib2R5IiwidGl0bGUiLCJjaGFyc2V0IiwiY3NzSHJlZiIsInN0YXJ0VGltZSIsIk5TX1BFUl9TRUMiLCJkaWZmIiwicHJvY2VzcyIsImhydGltZSIsImNvbnNvbGUiLCJpbmZvIiwiZW52IiwiTk9ERV9FTlYiLCJhcHAiLCJ3c3MiLCJTZXJ2ZXIiLCJwb3J0Iiwia2V5cyIsIkNPTkZJRyIsImtleSIsIm1heEFnZSIsIm92ZXJ3cml0ZSIsImh0dHBPbmx5Iiwic2lnbmVkIiwicm9sbGluZyIsInVzZSIsIm5leHQiLCJzZXNzaW9uIiwib2siLCJyZWRpcmVjdCIsInBhdGgiLCJyb3V0ZXMiLCJhbGxvd2VkTWV0aG9kcyIsImxpc3RlbiIsIm9uIiwiY29ubmVjdGlvbiIsIndzIiwiaW5jb21pbmciLCJtZXNzYWdlIiwibG9nIiwic2VuZCIsInJvdXRlciIsImdldCIsInNzZSIsImRhdGFPYmoiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyZWFtIiwidHlwZSIsInNldCIsImNsb3NlIiwicmVzIiwiZW5kIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZSIsInJlcSIsInNldEludGVydmFsIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidmFsdWUiLCJNYXRoIiwicmFuZG9tIiwid3JpdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJfYnVmZmVyIiwicmVxdWlyZSIsImNyZWF0ZUJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJhbGxvYyIsImFsbG9jVW5zYWZlIiwiYWxsb2NVbnNhZmVTbG93IiwidmFsIiwiZGVmYXVsdCIsIm1vZGVsIiwiY2FsYyIsImZuIiwiYnVmIiwicHJldmlvdXMiLCJ1bnNpZ25lZCIsIm1vZHVsZSIsImNyZWF0ZURlYnVnIiwiZGVidWciLCJjb2VyY2UiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZW5hYmxlZCIsImh1bWFuaXplIiwibmFtZXMiLCJza2lwcyIsImZvcm1hdHRlcnMiLCJwcmV2VGltZSIsInNlbGVjdENvbG9yIiwibmFtZXNwYWNlIiwiaGFzaCIsImkiLCJjaGFyQ29kZUF0IiwiY29sb3JzIiwiYWJzIiwibGVuZ3RoIiwic2VsZiIsImN1cnIiLCJtcyIsInByZXYiLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJyZXBsYWNlIiwibWF0Y2giLCJmb3JtYXQiLCJmb3JtYXR0ZXIiLCJjYWxsIiwic3BsaWNlIiwiZm9ybWF0QXJncyIsImxvZ0ZuIiwiYmluZCIsImFwcGx5IiwidXNlQ29sb3JzIiwiY29sb3IiLCJpbml0IiwibmFtZXNwYWNlcyIsInNhdmUiLCJzcGxpdCIsImxlbiIsInB1c2giLCJSZWdFeHAiLCJzdWJzdHIiLCJuYW1lIiwidGVzdCIsIkVycm9yIiwic3RhY2siLCJjcmMiLCJjcmMzMiIsImRlY29kZSIsInN0cmluZyIsInRvU3RyaW5nIiwianNvbiIsInBhcnNlIiwiZW5jb2RlIiwic2VzcyIsIkNvbnRleHRTZXNzaW9uIiwidXRpbCIsImFzc2VydCIsInVpZCIsImlzIiwiQ09OVEVYVF9TRVNTSU9OIiwiU3ltYm9sIiwiX0NPTlRFWFRfU0VTU0lPTiIsIm9wdHMiLCJUeXBlRXJyb3IiLCJmb3JtYXRPcHRzIiwiZXh0ZW5kQ29udGV4dCIsImNvbnRleHQiLCJzdG9yZSIsImluaXRGcm9tRXh0ZXJuYWwiLCJlcnIiLCJjb21taXQiLCJtYXhhZ2UiLCJmdW5jdGlvbiIsImRlc3Ryb3kiLCJDb250ZXh0U3RvcmUiLCJjbGFzcyIsInByb3RvdHlwZSIsImdlbmlkIiwicHJlZml4Iiwic3luYyIsImRlZmluZVByb3BlcnRpZXMiLCJjb25maWd1cmFibGUiLCJsb2FkIiwic3RvcmFnZSIsImNocm9tZSIsImxvY2FsIiwibG9jYWxzdG9yYWdlIiwid2luZG93IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIldlYmtpdEFwcGVhcmFuY2UiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwiJDEiLCJqIiwidiIsImMiLCJsYXN0QyIsIkZ1bmN0aW9uIiwicmVtb3ZlSXRlbSIsImUiLCJyIiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJzIiwibSIsImgiLCJkIiwieSIsIm9wdGlvbnMiLCJpc05hTiIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJzdHIiLCJTdHJpbmciLCJleGVjIiwibiIsInBhcnNlRmxvYXQiLCJ1bmRlZmluZWQiLCJyb3VuZCIsInBsdXJhbCIsImZsb29yIiwiY2VpbCIsInR0eSIsImluc3BlY3RPcHRzIiwiZmlsdGVyIiwicmVkdWNlIiwib2JqIiwicHJvcCIsInN1YnN0cmluZyIsIl8iLCJrIiwidG9VcHBlckNhc2UiLCJOdW1iZXIiLCJmZCIsIkRFQlVHX0ZEIiwiZGVwcmVjYXRlIiwic3Rkb3V0Iiwic3RkZXJyIiwiY3JlYXRlV3JpdGFibGVTdGRpb1N0cmVhbSIsIkJvb2xlYW4iLCJpc2F0dHkiLCJvIiwiaW5zcGVjdCIsIm1hcCIsInRyaW0iLCJqb2luIiwiTyIsInRvVVRDU3RyaW5nIiwidHR5X3dyYXAiLCJiaW5kaW5nIiwiZ3Vlc3NIYW5kbGVUeXBlIiwiV3JpdGVTdHJlYW0iLCJfdHlwZSIsIl9oYW5kbGUiLCJ1bnJlZiIsImZzIiwiU3luY1dyaXRlU3RyZWFtIiwiYXV0b0Nsb3NlIiwibmV0IiwiU29ja2V0IiwicmVhZGFibGUiLCJ3cml0YWJsZSIsInJlYWQiLCJfaXNTdGRpbyIsIlNlc3Npb24iLCJPTkVfREFZIiwiaW5pdEZyb21Db29raWUiLCJjcmVhdGUiLCJleHRlcm5hbEtleSIsImNvb2tpZXMiLCJ2YWxpZCIsInByZXZIYXNoIiwidG9KU09OIiwiY29va2llIiwiU3ludGF4RXJyb3IiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJfZXhwaXJlIiwibm93IiwicmVtb3ZlIiwiY2hhbmdlZCIsIl9yZXF1aXJlU2F2ZSIsImJlZm9yZVNhdmUiLCJfbWF4QWdlIiwiX2N0eCIsImlzTmV3Iiwic2Vzc2lvbk9wdGlvbnMiLCJmb3JFYWNoIiwiY3JjMSIsImNyYzgiLCJjcmM4MXdpcmUiLCJjcmMxNiIsImNyYzE2Y2NpdHQiLCJjcmMxNm1vZGJ1cyIsImNyYzE2eG1vZGVtIiwiY3JjMTZrZXJtaXQiLCJjcmMyNCIsImNyY2phbSIsIl9jcmVhdGVfYnVmZmVyIiwiX2NyZWF0ZV9idWZmZXIyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9kZWZpbmVfY3JjIiwiX2RlZmluZV9jcmMyIiwiX19lc01vZHVsZSIsImlzQnVmZmVyIiwiYWNjdW0iLCJieXRlIiwiVEFCTEUiLCJJbnQzMkFycmF5IiwiY29kZSIsInJhbmRvbUJ5dGVzIiwiRVFVQUxfRU5EX1JFR0VYUCIsIlBMVVNfR0xPQkFMX1JFR0VYUCIsIlNMQVNIX0dMT0JBTF9SRUdFWFAiLCJ1aWRTeW5jIiwiY2FsbGJhY2siLCJnbG9iYWwiLCJQcm9taXNlIiwiZ2VuZXJhdGVVaWQiLCJleGVjdXRvciIsInJlc29sdmUiLCJyZWplY3QiLCJvblVpZCIsImNyeXB0byIsImdlbmVyYXRlQXR0ZW1wdHMiLCJwc2V1ZG9SYW5kb21CeXRlcyIsInJhbmRvbUJ5dGVzU3luYyIsInNpemUiLCJnZW5lcmF0ZVJhbmRvbUJ5dGVzIiwib25SYW5kb21CeXRlcyIsImF0dGVtcHRzIiwic2V0VGltZW91dCIsInV0aWxzIiwiaXNTdGVhcm0iLCJpc0NsYXNzIiwidHJhbnNmb3JtIiwicmVhZGFibGVTdHJlYW0iLCJpc1JlYWRhYmxlIiwid3JpdGFibGVTdHJlYW0iLCJpc1dyaXRhYmxlIiwiZHVwbGV4U3RyZWFtIiwiaXNEdXBsZXgiLCJmaW5pdGUiLCJpc0Zpbml0ZSIsIk5hTiIsImdlbmVyYXRvciIsInRocm93IiwiZ2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsImFzeW5jRnVuY3Rpb24iLCJwcm9taXNlIiwidGhlbiIsIk1BWF9JTlRfMzEiLCJwb3ciLCJpbnQiLCJpc051bWJlciIsImludDMyIiwiTG9uZyIsIm9iamVjdCIsIm51bWJlciIsImhpZ2giLCJsb3ciLCJkb3VibGUiLCJkYXRlIiwiaXNEYXRlIiwicmVnRXhwIiwiaXNSZWdFeHAiLCJyZWdleHAiLCJlcnJvciIsImlzRXJyb3IiLCJhcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImFyZyIsIm9iamVjdFRvU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNOdWxsIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNVbmRlZmluZWQiLCJyZSIsImlzT2JqZWN0IiwiaXNGdW5jdGlvbiIsImlzUHJpbWl0aXZlIiwiaXNTdHJlYW0iLCJTdHJlYW0iLCJfcmVhZCIsIl9yZWFkYWJsZVN0YXRlIiwiX3dyaXRlIiwiX3dyaXRhYmxlU3RhdGUiLCJyb290IiwiZm5Cb2R5IiwiZGVmaW5lIiwi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QUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxFQUFpRixNQUFqRixFQUF5RixNQUF6RixFQUFpRyxNQUFqRyxFQUF5RyxNQUF6RyxFQUFpSCxNQUFqSCxFQUF5SCxNQUF6SCxFQUFpSSxNQUFqSSxFQUF5SSxNQUF6SSxFQUFpSixNQUFqSixFQUF5SixNQUF6SixFQUFpSyxNQUFqSyxFQUF5SyxNQUF6SyxFQUFpTCxNQUFqTCxFQUF5TCxNQUF6TCxFQUFpTSxNQUFqTSxFQUF5TSxNQUF6TSxFQUFpTixNQUFqTixFQUF5TixNQUF6TixFQUFpTyxNQUFqTyxFQUF5TyxNQUF6TyxFQUFpUCxNQUFqUCxFQUF5UCxNQUF6UCxFQUFpUSxNQUFqUSxFQUF5USxNQUF6USxFQUFpUixNQUFqUixFQUF5UixNQUF6UixFQUFpUyxNQUFqUyxFQUF5UyxNQUF6UyxFQUFpVCxNQUFqVCxFQUF5VCxNQUF6VCxFQUFpVSxNQUFqVSxFQUF5VSxNQUF6VSxFQUFpVixNQUFqVixFQUF5VixNQUF6VixFQUFpVyxNQUFqVyxFQUF5VyxNQUF6VyxFQUFpWCxNQUFqWCxFQUF5WCxNQUF6WCxFQUFpWSxNQUFqWSxFQUF5WSxNQUF6WSxFQUFpWixNQUFqWixFQUF5WixNQUF6WixFQUFpYSxNQUFqYSxFQUF5YSxNQUF6YSxFQUFpYixNQUFqYixFQUF5YixNQUF6YixFQUFpYyxNQUFqYyxFQUF5YyxNQUF6YyxFQUFpZCxNQUFqZCxFQUF5ZCxNQUF6ZCxFQUFpZSxNQUFqZSxFQUF5ZSxNQUF6ZSxFQUFpZixNQUFqZixFQUF5ZixNQUF6ZixFQUFpZ0IsTUFBamdCLEVBQXlnQixNQUF6Z0IsRUFBaWhCLE1BQWpoQixFQUF5aEIsTUFBemhCLEVBQWlpQixNQUFqaUIsRUFBeWlCLE1BQXppQixFQUFpakIsTUFBampCLEVBQXlqQixNQUF6akIsRUFBaWtCLE1BQWprQixFQUF5a0IsTUFBemtCLEVBQWlsQixNQUFqbEIsRUFBeWxCLE1BQXpsQixFQUFpbUIsTUFBam1C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akIsT0FBNUMsRUFBcUQ7QUFDbkRBLGdCQUFVaUIsT0FBT2pCLE9BQVAsR0FBaUIyUSxPQUEzQjtBQUNEO0FBQ0QzUSxZQUFRMlEsT0FBUixHQUFrQkEsT0FBbEI7QUFDRCxHQUxELE1BS08sSUFBSSxPQUFPMkQsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsT0FBT0MsR0FBM0MsRUFBZ0Q7QUFDckRELFdBQU8sRUFBUCxFQUFXLFlBQVc7QUFDcEIsYUFBTzNELE9BQVA7QUFDRCxLQUZEO0FBR0QsR0FKTSxNQUlBO0FBQ0x5RCxTQUFLekQsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7QUFFRixDQTNCRCxhIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1NTMwODVhNDE5Mjk0MmQ3ZTY5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvY29yZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2tvYS1zZXNzaW9uJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnO1xuaW1wb3J0IHNlZWQgZnJvbSAnLi9yb3V0ZXMvc2VlZCc7XG5pbXBvcnQgbG9naW4gZnJvbSAnLi9yb3V0ZXMvbG9naW4nO1xuXG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJ3dzJztcbmNvbnNvbGUuaW5mbygnRW52OicsIHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxuLy8gY3JlYXRlIGtvYSBzZXJ2ZXJcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTsgXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0LlNlcnZlcih7IHBvcnQ6IDgwODEgfSk7XG5cbmFwcC5rZXlzID0gWydzb21lIHNlY3JldCBodXJyJ107XG5jb25zdCBDT05GSUcgPSB7XG4gIGtleTogJ2tvYTpzZXNzJywgLyoqIChzdHJpbmcpIGNvb2tpZSBrZXkgKGRlZmF1bHQgaXMga29hOnNlc3MpICovXG4gIC8qKiAobnVtYmVyIHx8ICdzZXNzaW9uJykgbWF4QWdlIGluIG1zIChkZWZhdWx0IGlzIDEgZGF5cykgKi9cbiAgLyoqICdzZXNzaW9uJyB3aWxsIHJlc3VsdCBpbiBhIGNvb2tpZSB0aGF0IGV4cGlyZXMgd2hlbiBzZXNzaW9uL2Jyb3dzZXIgaXMgY2xvc2VkICovXG4gIC8qKiBXYXJuaW5nOiBJZiBhIHNlc3Npb24gY29va2llIGlzIHN0b2xlbiwgdGhpcyBjb29raWUgd2lsbCBuZXZlciBleHBpcmUgKi9cbiAgbWF4QWdlOiA4NjQwMDAwMCxcbiAgb3ZlcndyaXRlOiB0cnVlLCAvKiogKGJvb2xlYW4pIGNhbiBvdmVyd3JpdGUgb3Igbm90IChkZWZhdWx0IHRydWUpICovXG4gIGh0dHBPbmx5OiB0cnVlLCAvKiogKGJvb2xlYW4pIGh0dHBPbmx5IG9yIG5vdCAoZGVmYXVsdCB0cnVlKSAqL1xuICBzaWduZWQ6IHRydWUsIC8qKiAoYm9vbGVhbikgc2lnbmVkIG9yIG5vdCAoZGVmYXVsdCB0cnVlKSAqL1xuICByb2xsaW5nOiBmYWxzZSwgLyoqIChib29sZWFuKSBGb3JjZSBhIHNlc3Npb24gaWRlbnRpZmllciBjb29raWUgdG8gYmUgc2V0IG9uIGV2ZXJ5IHJlc3BvbnNlLiBUaGUgZXhwaXJhdGlvbiBpcyByZXNldCB0byB0aGUgb3JpZ2luYWwgbWF4QWdlLCByZXNldHRpbmcgdGhlIGV4cGlyYXRpb24gY291bnRkb3duLiBkZWZhdWx0IGlzIGZhbHNlICoqL1xufTtcblxuYXBwLnVzZShzZXNzaW9uKENPTkZJRywgYXBwKSk7XG5cbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2Jykge1xuICAgICAgICAgICAgY3R4LmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9KVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAoY3R4LnNlc3Npb24ub2sgIT09IDEpIHtcbiAgICAgICAgICAgIGN0eC5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5zZXNzaW9uLm9rID09PSAxICYmIGN0eC5wYXRoID09PScvbG9naW4nKSB7XG4gICAgICAgICAgICBjdHgucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKGxvZ2luLnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5yb3V0ZXMoKSlcbiAgICAudXNlKHNlZWQucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7UGFzc1Rocm91Z2h9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuY29uc3Qgc3NlID0gKGRhdGFPYmopID0+IHtcclxuICByZXR1cm4gYGRhdGE6ICR7IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH1cXG5cXG5gXHJcbn1cclxuXHJcbi8vIHJvb3Rcclxucm91dGVyLmdldCgnL3NlZWQnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcclxuXHJcbiAgICBjdHgudHlwZSA9ICd0ZXh0L2V2ZW50LXN0cmVhbTsgY2hhcnNldD11dGYtOCc7XHJcbiAgICBjdHguc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICBjdHguc2V0KCdDb25uZWN0aW9uJywgJ2tlZXAtYWxpdmUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgucmVxLm9uKCdjbG9zZScsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2ZpbmlzaCcsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2Vycm9yJywgY2xvc2UpO1xyXG5cclxuICAgIGxldCB1cGRhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFPYmogPSB7XHJcbiAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdHJlYW0ud3JpdGUoc3NlKGRhdGFPYmopKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGN0eC5ib2R5ID0gc3RyZWFtO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmVhbVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xyXG5cclxuLy8gY3JlYXRlIHJvdXRlclxyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcbi8vIHJvb3Rcclxucm91dGVyLmdldCgnL2xvZ2luJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xyXG5cclxuICAgIGN0eC5ib2R5ID0gJ2xvZ2luJztcclxuICAgIGN0eC5zZXNzaW9uLm9rID0gMTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL2xvZ2luLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3c1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJidWZmZXJcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgY3JlYXRlQnVmZmVyID0gX2J1ZmZlci5CdWZmZXIuZnJvbSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvYyAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPyBfYnVmZmVyLkJ1ZmZlci5mcm9tXG5cbi8vIHN1cHBvcnQgZm9yIE5vZGUgPCA1LjEwXG46IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBfYnVmZmVyLkJ1ZmZlcih2YWwpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnVmZmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9jcmVhdGVfYnVmZmVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtb2RlbCwgY2FsYykge1xuICB2YXIgZm4gPSBmdW5jdGlvbiBmbihidWYsIHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGNhbGMoYnVmLCBwcmV2aW91cykgPj4+IDA7XG4gIH07XG4gIGZuLnNpZ25lZCA9IGNhbGM7XG4gIGZuLnVuc2lnbmVkID0gZm47XG4gIGZuLm1vZGVsID0gbW9kZWw7XG5cbiAgcmV0dXJuIGZuO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvZGVmaW5lX2NyYy5qcyIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMi42LjlAZGVidWcvc3JjL2luZGV4LmpzIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMi42LjlAZGVidWcvc3JjL2RlYnVnLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmMgPSByZXF1aXJlKCdjcmMnKS5jcmMzMjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIERlY29kZSB0aGUgYmFzZTY0IGNvb2tpZSB2YWx1ZSB0byBhbiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZGVjb2RlKHN0cmluZykge1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgQnVmZmVyKHN0cmluZywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgcmV0dXJuIGpzb247XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuY29kZSBhbiBvYmplY3QgaW50byBhIGJhc2U2NC1lbmNvZGVkIEpTT04gc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYm9keVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBlbmNvZGUoYm9keSkge1xuICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihib2R5KS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH0sXG5cbiAgaGFzaChzZXNzKSB7XG4gICAgcmV0dXJuIGNyYyhKU09OLnN0cmluZ2lmeShzZXNzKSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy41LjUuMUBrb2Etc2Vzc2lvbi9saWIvdXRpbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdrb2Etc2Vzc2lvbicpO1xuY29uc3QgQ29udGV4dFNlc3Npb24gPSByZXF1aXJlKCcuL2xpYi9jb250ZXh0Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi9saWIvdXRpbCcpO1xuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCB1aWQgPSByZXF1aXJlKCd1aWQtc2FmZScpO1xuY29uc3QgaXMgPSByZXF1aXJlKCdpcy10eXBlLW9mJyk7XG5cbmNvbnN0IENPTlRFWFRfU0VTU0lPTiA9IFN5bWJvbCgnY29udGV4dCNjb250ZXh0U2Vzc2lvbicpO1xuY29uc3QgX0NPTlRFWFRfU0VTU0lPTiA9IFN5bWJvbCgnY29udGV4dCNfY29udGV4dFNlc3Npb24nKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlc3Npb24gbWlkZGxld2FyZSB3aXRoIGBvcHRzYDpcbiAqXG4gKiAtIGBrZXlgIHNlc3Npb24gY29va2llIG5hbWUgW1wia29hOnNlc3NcIl1cbiAqIC0gYWxsIG90aGVyIG9wdGlvbnMgYXJlIHBhc3NlZCBhcyBjb29raWUgb3B0aW9uc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAqIEBwYXJhbSB7QXBwbGljYXRpb259IGFwcCwga29hIGFwcGxpY2F0aW9uIGluc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cywgYXBwKSB7XG4gIC8vIHNlc3Npb24oYXBwWywgb3B0c10pXG4gIGlmIChvcHRzICYmIHR5cGVvZiBvcHRzLnVzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFsgYXBwLCBvcHRzIF0gPSBbIG9wdHMsIGFwcCBdO1xuICB9XG4gIC8vIGFwcCByZXF1aXJlZFxuICBpZiAoIWFwcCB8fCB0eXBlb2YgYXBwLnVzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FwcCBpbnN0YW5jZSByZXF1aXJlZDogYHNlc3Npb24ob3B0cywgYXBwKWAnKTtcbiAgfVxuXG4gIG9wdHMgPSBmb3JtYXRPcHRzKG9wdHMpO1xuICBleHRlbmRDb250ZXh0KGFwcC5jb250ZXh0LCBvcHRzKTtcblxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbihjdHgsIG5leHQpIHtcbiAgICBjb25zdCBzZXNzID0gY3R4W0NPTlRFWFRfU0VTU0lPTl07XG4gICAgaWYgKHNlc3Muc3RvcmUpIGF3YWl0IHNlc3MuaW5pdEZyb21FeHRlcm5hbCgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IHNlc3MuY29tbWl0KCk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBmb3JtYXQgYW5kIGNoZWNrIHNlc3Npb24gb3B0aW9uc1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzIHNlc3Npb24gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBuZXcgc2Vzc2lvbiBvcHRpb25zXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0T3B0cyhvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAvLyBrZXlcbiAgb3B0cy5rZXkgPSBvcHRzLmtleSB8fCAna29hOnNlc3MnO1xuXG4gIC8vIGJhY2stY29tcGF0IG1heGFnZVxuICBpZiAoISgnbWF4QWdlJyBpbiBvcHRzKSkgb3B0cy5tYXhBZ2UgPSBvcHRzLm1heGFnZTtcblxuICAvLyBkZWZhdWx0c1xuICBpZiAob3B0cy5vdmVyd3JpdGUgPT0gbnVsbCkgb3B0cy5vdmVyd3JpdGUgPSB0cnVlO1xuICBpZiAob3B0cy5odHRwT25seSA9PSBudWxsKSBvcHRzLmh0dHBPbmx5ID0gdHJ1ZTtcbiAgaWYgKG9wdHMuc2lnbmVkID09IG51bGwpIG9wdHMuc2lnbmVkID0gdHJ1ZTtcblxuICBkZWJ1Zygnc2Vzc2lvbiBvcHRpb25zICVqJywgb3B0cyk7XG5cbiAgLy8gc2V0dXAgZW5jb2RpbmcvZGVjb2RpbmdcbiAgaWYgKHR5cGVvZiBvcHRzLmVuY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMuZW5jb2RlID0gdXRpbC5lbmNvZGU7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRzLmRlY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMuZGVjb2RlID0gdXRpbC5kZWNvZGU7XG4gIH1cblxuICBjb25zdCBzdG9yZSA9IG9wdHMuc3RvcmU7XG4gIGlmIChzdG9yZSkge1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihzdG9yZS5nZXQpLCAnc3RvcmUuZ2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oc3RvcmUuc2V0KSwgJ3N0b3JlLnNldCBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKHN0b3JlLmRlc3Ryb3kpLCAnc3RvcmUuZGVzdHJveSBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBjb25zdCBDb250ZXh0U3RvcmUgPSBvcHRzLkNvbnRleHRTdG9yZTtcbiAgaWYgKENvbnRleHRTdG9yZSkge1xuICAgIGFzc2VydChpcy5jbGFzcyhDb250ZXh0U3RvcmUpLCAnQ29udGV4dFN0b3JlIG11c3QgYmUgYSBjbGFzcycpO1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihDb250ZXh0U3RvcmUucHJvdG90eXBlLmdldCksICdDb250ZXh0U3RvcmUucHJvdG90eXBlLmdldCBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKENvbnRleHRTdG9yZS5wcm90b3R5cGUuc2V0KSwgJ0NvbnRleHRTdG9yZS5wcm90b3R5cGUuc2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oQ29udGV4dFN0b3JlLnByb3RvdHlwZS5kZXN0cm95KSwgJ0NvbnRleHRTdG9yZS5wcm90b3R5cGUuZGVzdHJveSBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAoIW9wdHMuZ2VuaWQpIHtcbiAgICBpZiAob3B0cy5wcmVmaXgpIG9wdHMuZ2VuaWQgPSAoKSA9PiBvcHRzLnByZWZpeCArIHVpZC5zeW5jKDI0KTtcbiAgICBlbHNlIG9wdHMuZ2VuaWQgPSAoKSA9PiB1aWQuc3luYygyNCk7XG4gIH1cblxuICByZXR1cm4gb3B0cztcbn1cblxuLyoqXG4gKiBleHRlbmQgY29udGV4dCBwcm90b3R5cGUsIGFkZCBzZXNzaW9uIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHQga29hJ3MgY29udGV4dCBwcm90b3R5cGVcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0cyBzZXNzaW9uIG9wdGlvbnNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBleHRlbmRDb250ZXh0KGNvbnRleHQsIG9wdHMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29udGV4dCwge1xuICAgIFtDT05URVhUX1NFU1NJT05dOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzW19DT05URVhUX1NFU1NJT05dKSByZXR1cm4gdGhpc1tfQ09OVEVYVF9TRVNTSU9OXTtcbiAgICAgICAgdGhpc1tfQ09OVEVYVF9TRVNTSU9OXSA9IG5ldyBDb250ZXh0U2Vzc2lvbih0aGlzLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbX0NPTlRFWFRfU0VTU0lPTl07XG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vzc2lvbjoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpc1tDT05URVhUX1NFU1NJT05dLmdldCgpO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgdGhpc1tDT05URVhUX1NFU1NJT05dLnNldCh2YWwpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHNlc3Npb25PcHRpb25zOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0NPTlRFWFRfU0VTU0lPTl0ub3B0cztcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjUuNS4xQGtvYS1zZXNzaW9uL2luZGV4LmpzIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnbGlnaHRzZWFncmVlbicsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnb2xkZW5yb2QnLFxuICAnZG9kZ2VyYmx1ZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2NyaW1zb24nXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4yLjYuOUBkZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMi4wLjBAbXMvaW5kZXguanMiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gIC8vIGNhbWVsLWNhc2VcbiAgdmFyIHByb3AgPSBrZXlcbiAgICAuc3Vic3RyaW5nKDYpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvXyhbYS16XSkvZywgZnVuY3Rpb24gKF8sIGspIHsgcmV0dXJuIGsudG9VcHBlckNhc2UoKSB9KTtcblxuICAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcbiAgdmFyIHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG4gIGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IHRydWU7XG4gIGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSBmYWxzZTtcbiAgZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHZhbCA9IG51bGw7XG4gIGVsc2UgdmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgb2JqW3Byb3BdID0gdmFsO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIFRoZSBmaWxlIGRlc2NyaXB0b3IgdG8gd3JpdGUgdGhlIGBkZWJ1ZygpYCBjYWxscyB0by5cbiAqIFNldCB0aGUgYERFQlVHX0ZEYCBlbnYgdmFyaWFibGUgdG8gb3ZlcnJpZGUgd2l0aCBhbm90aGVyIHZhbHVlLiBpLmUuOlxuICpcbiAqICAgJCBERUJVR19GRD0zIG5vZGUgc2NyaXB0LmpzIDM+ZGVidWcubG9nXG4gKi9cblxudmFyIGZkID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuREVCVUdfRkQsIDEwKSB8fCAyO1xuXG5pZiAoMSAhPT0gZmQgJiYgMiAhPT0gZmQpIHtcbiAgdXRpbC5kZXByZWNhdGUoZnVuY3Rpb24oKXt9LCAnZXhjZXB0IGZvciBzdGRlcnIoMikgYW5kIHN0ZG91dCgxKSwgYW55IG90aGVyIHVzYWdlIG9mIERFQlVHX0ZEIGlzIGRlcHJlY2F0ZWQuIE92ZXJyaWRlIGRlYnVnLmxvZyBpZiB5b3Ugd2FudCB0byB1c2UgYSBkaWZmZXJlbnQgbG9nIGZ1bmN0aW9uIChodHRwczovL2dpdC5pby9kZWJ1Z19mZCknKSgpXG59XG5cbnZhciBzdHJlYW0gPSAxID09PSBmZCA/IHByb2Nlc3Muc3Rkb3V0IDpcbiAgICAgICAgICAgICAyID09PSBmZCA/IHByb2Nlc3Muc3RkZXJyIDpcbiAgICAgICAgICAgICBjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtKGZkKTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICByZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0c1xuICAgID8gQm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycylcbiAgICA6IHR0eS5pc2F0dHkoZmQpO1xufVxuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKVxuICAgIC5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50cmltKClcbiAgICB9KS5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cyk7XG59O1xuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlO1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgcHJlZml4ID0gJyAgXFx1MDAxYlszJyArIGMgKyAnOzFtJyArIG5hbWUgKyAnICcgKyAnXFx1MDAxYlswbSc7XG5cbiAgICBhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXS5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIHByZWZpeCk7XG4gICAgYXJncy5wdXNoKCdcXHUwMDFiWzMnICsgYyArICdtKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxYlswbScpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3NbMF0gPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKClcbiAgICAgICsgJyAnICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZva2VzIGB1dGlsLmZvcm1hdCgpYCB3aXRoIHRoZSBzcGVjaWZpZWQgYXJndW1lbnRzIGFuZCB3cml0ZXMgdG8gYHN0cmVhbWAuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gc3RyZWFtLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgLy8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG4gICAgLy8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cbiAgICBkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuICB9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIENvcGllZCBmcm9tIGBub2RlL3NyYy9ub2RlLmpzYC5cbiAqXG4gKiBYWFg6IEl0J3MgbGFtZSB0aGF0IG5vZGUgZG9lc24ndCBleHBvc2UgdGhpcyBBUEkgb3V0LW9mLXRoZS1ib3guIEl0IGFsc29cbiAqIHJlbGllcyBvbiB0aGUgdW5kb2N1bWVudGVkIGB0dHlfd3JhcC5ndWVzc0hhbmRsZVR5cGUoKWAgd2hpY2ggaXMgYWxzbyBsYW1lLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVdyaXRhYmxlU3RkaW9TdHJlYW0gKGZkKSB7XG4gIHZhciBzdHJlYW07XG4gIHZhciB0dHlfd3JhcCA9IHByb2Nlc3MuYmluZGluZygndHR5X3dyYXAnKTtcblxuICAvLyBOb3RlIHN0cmVhbS5fdHlwZSBpcyB1c2VkIGZvciB0ZXN0LW1vZHVsZS1sb2FkLWxpc3QuanNcblxuICBzd2l0Y2ggKHR0eV93cmFwLmd1ZXNzSGFuZGxlVHlwZShmZCkpIHtcbiAgICBjYXNlICdUVFknOlxuICAgICAgc3RyZWFtID0gbmV3IHR0eS5Xcml0ZVN0cmVhbShmZCk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAndHR5JztcblxuICAgICAgLy8gSGFjayB0byBoYXZlIHN0cmVhbSBub3Qga2VlcCB0aGUgZXZlbnQgbG9vcCBhbGl2ZS5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MjZcbiAgICAgIGlmIChzdHJlYW0uX2hhbmRsZSAmJiBzdHJlYW0uX2hhbmRsZS51bnJlZikge1xuICAgICAgICBzdHJlYW0uX2hhbmRsZS51bnJlZigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdGSUxFJzpcbiAgICAgIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICBzdHJlYW0gPSBuZXcgZnMuU3luY1dyaXRlU3RyZWFtKGZkLCB7IGF1dG9DbG9zZTogZmFsc2UgfSk7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAnZnMnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQSVBFJzpcbiAgICBjYXNlICdUQ1AnOlxuICAgICAgdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuICAgICAgc3RyZWFtID0gbmV3IG5ldC5Tb2NrZXQoe1xuICAgICAgICBmZDogZmQsXG4gICAgICAgIHJlYWRhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGSVhNRSBTaG91bGQgcHJvYmFibHkgaGF2ZSBhbiBvcHRpb24gaW4gbmV0LlNvY2tldCB0byBjcmVhdGUgYVxuICAgICAgLy8gc3RyZWFtIGZyb20gYW4gZXhpc3RpbmcgZmQgd2hpY2ggaXMgd3JpdGFibGUgb25seS4gQnV0IGZvciBub3dcbiAgICAgIC8vIHdlJ2xsIGp1c3QgYWRkIHRoaXMgaGFjayBhbmQgc2V0IHRoZSBgcmVhZGFibGVgIG1lbWJlciB0byBmYWxzZS5cbiAgICAgIC8vIFRlc3Q6IC4vbm9kZSB0ZXN0L2ZpeHR1cmVzL2VjaG8uanMgPCAvZXRjL3Bhc3N3ZFxuICAgICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVhZCA9IG51bGw7XG4gICAgICBzdHJlYW0uX3R5cGUgPSAncGlwZSc7XG5cbiAgICAgIC8vIEZJWE1FIEhhY2sgdG8gaGF2ZSBzdHJlYW0gbm90IGtlZXAgdGhlIGV2ZW50IGxvb3AgYWxpdmUuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzI2XG4gICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiYgc3RyZWFtLl9oYW5kbGUudW5yZWYpIHtcbiAgICAgICAgc3RyZWFtLl9oYW5kbGUudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFByb2JhYmx5IGFuIGVycm9yIG9uIGluIHV2X2d1ZXNzX2hhbmRsZSgpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcGxlbWVudCBtZS4gVW5rbm93biBzdHJlYW0gZmlsZSB0eXBlIScpO1xuICB9XG5cbiAgLy8gRm9yIHN1cHBvcnRpbmcgbGVnYWN5IEFQSSB3ZSBwdXQgdGhlIEZEIGhlcmUuXG4gIHN0cmVhbS5mZCA9IGZkO1xuXG4gIHN0cmVhbS5faXNTdGRpbyA9IHRydWU7XG5cbiAgcmV0dXJuIHN0cmVhbTtcbn1cblxuLyoqXG4gKiBJbml0IGxvZ2ljIGZvciBgZGVidWdgIGluc3RhbmNlcy5cbiAqXG4gKiBDcmVhdGUgYSBuZXcgYGluc3BlY3RPcHRzYCBvYmplY3QgaW4gY2FzZSBgdXNlQ29sb3JzYCBpcyBzZXRcbiAqIGRpZmZlcmVudGx5IGZvciBhIHBhcnRpY3VsYXIgYGRlYnVnYCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBpbml0IChkZWJ1Zykge1xuICBkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgcHJvY2Vzcy5lbnYuREVCVUdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4yLjYuOUBkZWJ1Zy9zcmMvbm9kZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInR0eVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5ldFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgna29hLXNlc3Npb246Y29udGV4dCcpO1xuY29uc3QgU2Vzc2lvbiA9IHJlcXVpcmUoJy4vc2Vzc2lvbicpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBPTkVfREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuY2xhc3MgQ29udGV4dFNlc3Npb24ge1xuICAvKipcbiAgICogY29udGV4dCBzZXNzaW9uIGNvbnN0cnVjdG9yXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGN0eCwgb3B0cykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMub3B0cyA9IG9wdHMgfHwge307XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMub3B0cy5Db250ZXh0U3RvcmUgPyBuZXcgdGhpcy5vcHRzLkNvbnRleHRTdG9yZShjdHgpIDogdGhpcy5vcHRzLnN0b3JlO1xuICB9XG5cbiAgLyoqXG4gICAqIGludGVybmFsIGxvZ2ljIG9mIGBjdHguc2Vzc2lvbmBcbiAgICogQHJldHVybiB7U2Vzc2lvbn0gc2Vzc2lvbiBvYmplY3RcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0KCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnNlc3Npb247XG4gICAgLy8gYWxyZWFkeSByZXRyaWV2ZWRcbiAgICBpZiAoc2Vzc2lvbikgcmV0dXJuIHNlc3Npb247XG4gICAgLy8gdW5zZXRcbiAgICBpZiAoc2Vzc2lvbiA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXG4gICAgLy8gY29va2llIHNlc3Npb24gc3RvcmVcbiAgICBpZiAoIXRoaXMuc3RvcmUpIHRoaXMuaW5pdEZyb21Db29raWUoKTtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIGludGVybmFsIGxvZ2ljIG9mIGBjdHguc2Vzc2lvbj1gXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgc2Vzc2lvbiBvYmplY3RcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0KHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIHVzZSB0aGUgb3JpZ2luYWwgYGV4dGVybmFsS2V5YCBpZiBleGlzdHMgdG8gYXZvaWQgd2FzdGUgc3RvcmFnZVxuICAgICAgdGhpcy5jcmVhdGUodmFsLCB0aGlzLmV4dGVybmFsS2V5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0aGlzLnNlc3Npb24gY2FuIG9ubHkgYmUgc2V0IGFzIG51bGwgb3IgYW4gb2JqZWN0LicpO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXQgc2Vzc2lvbiBmcm9tIGV4dGVybmFsIHN0b3JlXG4gICAqIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBmcm9udCBvZiBzZXNzaW9uIG1pZGRsZXdhcmVcbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXN5bmMgaW5pdEZyb21FeHRlcm5hbCgpIHtcbiAgICBkZWJ1ZygnaW5pdCBmcm9tIGV4dGVybmFsJyk7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcblxuICAgIGNvbnN0IGV4dGVybmFsS2V5ID0gY3R4LmNvb2tpZXMuZ2V0KG9wdHMua2V5LCBvcHRzKTtcbiAgICBkZWJ1ZygnZ2V0IGV4dGVybmFsIGtleSBmcm9tIGNvb2tpZSAlcycsIGV4dGVybmFsS2V5KTtcblxuICAgIGlmICghZXh0ZXJuYWxLZXkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIG5ldyBgZXh0ZXJuYWxLZXlgXG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCB0aGlzLnN0b3JlLmdldChleHRlcm5hbEtleSwgb3B0cy5tYXhBZ2UsIHsgcm9sbGluZzogb3B0cy5yb2xsaW5nIH0pO1xuICAgIGlmICghdGhpcy52YWxpZChqc29uKSkge1xuICAgICAgLy8gY3JlYXRlIGEgbmV3IGBleHRlcm5hbEtleWBcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHdpdGggb3JpZ2luYWwgYGV4dGVybmFsS2V5YFxuICAgIHRoaXMuY3JlYXRlKGpzb24sIGV4dGVybmFsS2V5KTtcbiAgICB0aGlzLnByZXZIYXNoID0gdXRpbC5oYXNoKHRoaXMuc2Vzc2lvbi50b0pTT04oKSk7XG4gIH1cblxuICAvKipcbiAgICogaW5pdCBzZXNzaW9uIGZyb20gY29va2llXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBpbml0RnJvbUNvb2tpZSgpIHtcbiAgICBkZWJ1ZygnaW5pdCBmcm9tIGNvb2tpZScpO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG5cbiAgICBjb25zdCBjb29raWUgPSBjdHguY29va2llcy5nZXQob3B0cy5rZXksIG9wdHMpO1xuICAgIGlmICghY29va2llKSB7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBqc29uO1xuICAgIGRlYnVnKCdwYXJzZSAlcycsIGNvb2tpZSk7XG4gICAgdHJ5IHtcbiAgICAgIGpzb24gPSBvcHRzLmRlY29kZShjb29raWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHk6XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgc2Vzc2lvbiBpZiBwYXJzaW5nIGZhaWxzLlxuICAgICAgLy8gbmV3IEJ1ZmZlcihzdHJpbmcsICdiYXNlNjQnKSBkb2VzIG5vdCBzZWVtIHRvIGNyYXNoXG4gICAgICAvLyB3aGVuIGBzdHJpbmdgIGlzIG5vdCBiYXNlNjQtZW5jb2RlZC5cbiAgICAgIC8vIGJ1dCBgSlNPTi5wYXJzZShzdHJpbmcpYCB3aWxsIGNyYXNoLlxuICAgICAgZGVidWcoJ2RlY29kZSAlaiBlcnJvcjogJXMnLCBjb29raWUsIGVycik7XG4gICAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHtcbiAgICAgICAgLy8gY2xlYW4gdGhpcyBjb29raWUgdG8gZW5zdXJlIG5leHQgcmVxdWVzdCB3b24ndCB0aHJvdyBhZ2FpblxuICAgICAgICBjdHguY29va2llcy5zZXQob3B0cy5rZXksICcnLCBvcHRzKTtcbiAgICAgICAgLy8gY3R4Lm9uZXJyb3Igd2lsbCB1bnNldCBhbGwgaGVhZGVycywgYW5kIHNldCB0aG9zZSBzcGVjaWZpZWQgaW4gZXJyXG4gICAgICAgIGVyci5oZWFkZXJzID0ge1xuICAgICAgICAgICdzZXQtY29va2llJzogY3R4LnJlc3BvbnNlLmdldCgnc2V0LWNvb2tpZScpLFxuICAgICAgICB9O1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlYnVnKCdwYXJzZWQgJWonLCBqc29uKTtcblxuICAgIGlmICghdGhpcy52YWxpZChqc29uKSkge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IGFjY2VzcyBgY3R4LnNlc3Npb25gIGJlZm9yZSBzZXNzaW9uIG1pZGRsZXdhcmVcbiAgICB0aGlzLmNyZWF0ZShqc29uKTtcbiAgICB0aGlzLnByZXZIYXNoID0gdXRpbC5oYXNoKHRoaXMuc2Vzc2lvbi50b0pTT04oKSk7XG4gIH1cblxuICAvKipcbiAgICogdmVyaWZ5IHNlc3Npb24oZXhwaXJlZCBvciApXG4gICAqIEBwYXJhbSAge09iamVjdH0ganNvbiBzZXNzaW9uIG9iamVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB2YWxpZFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgdmFsaWQoanNvbikge1xuICAgIGlmICghanNvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGpzb24uX2V4cGlyZSAmJiBqc29uLl9leHBpcmUgPCBEYXRlLm5vdygpKSB7XG4gICAgICBkZWJ1ZygnZXhwaXJlZCBzZXNzaW9uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLm9wdHMudmFsaWQ7XG4gICAgaWYgKHR5cGVvZiB2YWxpZCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdmFsaWQodGhpcy5jdHgsIGpzb24pKSB7XG4gICAgICAvLyB2YWxpZCBzZXNzaW9uIHZhbHVlIGZhaWwsIGlnbm9yZSB0aGlzIHNlc3Npb25cbiAgICAgIGRlYnVnKCdpbnZhbGlkIHNlc3Npb24nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgbmV3IHNlc3Npb24gYW5kIGF0dGFjaCB0byBjdHguc2Vzc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3ZhbF0gc2Vzc2lvbiBkYXRhXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZXh0ZXJuYWxLZXldIHNlc3Npb24gZXh0ZXJuYWwga2V5XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBjcmVhdGUodmFsLCBleHRlcm5hbEtleSkge1xuICAgIGRlYnVnKCdjcmVhdGUgc2Vzc2lvbiB3aXRoIHZhbDogJWogZXh0ZXJuYWxLZXk6ICVzJywgdmFsLCBleHRlcm5hbEtleSk7XG4gICAgaWYgKHRoaXMuc3RvcmUpIHRoaXMuZXh0ZXJuYWxLZXkgPSBleHRlcm5hbEtleSB8fCB0aGlzLm9wdHMuZ2VuaWQoKTtcbiAgICB0aGlzLnNlc3Npb24gPSBuZXcgU2Vzc2lvbih0aGlzLmN0eCwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21taXQgdGhlIHNlc3Npb24gY2hhbmdlcyBvciByZW1vdmFsLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhc3luYyBjb21taXQoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuc2Vzc2lvbjtcbiAgICBjb25zdCBwcmV2SGFzaCA9IHRoaXMucHJldkhhc2g7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgIC8vIG5vdCBhY2Nlc3NlZFxuICAgIGlmICh1bmRlZmluZWQgPT09IHNlc3Npb24pIHJldHVybjtcblxuICAgIC8vIHJlbW92ZWRcbiAgICBpZiAoc2Vzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZm9yY2Ugc2F2ZSBzZXNzaW9uIHdoZW4gYHNlc3Npb24uX3JlcXVpcmVTYXZlYCBzZXRcbiAgICBsZXQgY2hhbmdlZCA9IHRydWU7XG4gICAgaWYgKCFzZXNzaW9uLl9yZXF1aXJlU2F2ZSkge1xuICAgICAgY29uc3QganNvbiA9IHNlc3Npb24udG9KU09OKCk7XG4gICAgICAvLyBkbyBub3RoaW5nIGlmIG5ldyBhbmQgbm90IHBvcHVsYXRlZFxuICAgICAgaWYgKCFwcmV2SGFzaCAmJiAhT2JqZWN0LmtleXMoanNvbikubGVuZ3RoKSByZXR1cm47XG4gICAgICBjaGFuZ2VkID0gcHJldkhhc2ggIT09IHV0aWwuaGFzaChqc29uKTtcbiAgICAgIC8vIGRvIG5vdGhpbmcgaWYgbm90IGNoYW5nZWQgYW5kIG5vdCBpbiByb2xsaW5nIG1vZGVcbiAgICAgIGlmICghdGhpcy5vcHRzLnJvbGxpbmcgJiYgIWNoYW5nZWQpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuYmVmb3JlU2F2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVidWcoJ2JlZm9yZSBzYXZlJyk7XG4gICAgICBvcHRzLmJlZm9yZVNhdmUoY3R4LCBzZXNzaW9uKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zYXZlKGNoYW5nZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBzZXNzaW9uXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBhc3luYyByZW1vdmUoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjb25zdCBrZXkgPSBvcHRzLmtleTtcbiAgICBjb25zdCBleHRlcm5hbEtleSA9IHRoaXMuZXh0ZXJuYWxLZXk7XG5cbiAgICBpZiAoZXh0ZXJuYWxLZXkpIGF3YWl0IHRoaXMuc3RvcmUuZGVzdHJveShleHRlcm5hbEtleSk7XG4gICAgY3R4LmNvb2tpZXMuc2V0KGtleSwgJycsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNhdmUgc2Vzc2lvblxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgYXN5bmMgc2F2ZShjaGFuZ2VkKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cztcbiAgICBjb25zdCBrZXkgPSBvcHRzLmtleTtcbiAgICBjb25zdCBleHRlcm5hbEtleSA9IHRoaXMuZXh0ZXJuYWxLZXk7XG4gICAgbGV0IGpzb24gPSB0aGlzLnNlc3Npb24udG9KU09OKCk7XG4gICAgLy8gc2V0IGV4cGlyZSBmb3IgY2hlY2tcbiAgICBjb25zdCBtYXhBZ2UgPSBvcHRzLm1heEFnZSA/IG9wdHMubWF4QWdlIDogT05FX0RBWTtcbiAgICBpZiAobWF4QWdlID09PSAnc2Vzc2lvbicpIHtcbiAgICAgIC8vIGRvIG5vdCBzZXQgX2V4cGlyZSBpbiBqc29uIGlmIG1heEFnZSBpcyBzZXQgdG8gJ3Nlc3Npb24nXG4gICAgICAvLyBhbHNvIGRlbGV0ZSBtYXhBZ2UgZnJvbSBvcHRpb25zXG4gICAgICBvcHRzLm1heEFnZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IGV4cGlyZSBmb3IgY2hlY2tcbiAgICAgIGpzb24uX2V4cGlyZSA9IG1heEFnZSArIERhdGUubm93KCk7XG4gICAgICBqc29uLl9tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuXG4gICAgLy8gc2F2ZSB0byBleHRlcm5hbCBzdG9yZVxuICAgIGlmIChleHRlcm5hbEtleSkge1xuICAgICAgZGVidWcoJ3NhdmUgJWogdG8gZXh0ZXJuYWwga2V5ICVzJywganNvbiwgZXh0ZXJuYWxLZXkpO1xuICAgICAgYXdhaXQgdGhpcy5zdG9yZS5zZXQoZXh0ZXJuYWxLZXksIGpzb24sIG1heEFnZSwge1xuICAgICAgICBjaGFuZ2VkLFxuICAgICAgICByb2xsaW5nOiBvcHRzLnJvbGxpbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3R4LmNvb2tpZXMuc2V0KGtleSwgZXh0ZXJuYWxLZXksIG9wdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNhdmUgdG8gY29va2llXG4gICAgZGVidWcoJ3NhdmUgJWogdG8gY29va2llJywganNvbik7XG4gICAganNvbiA9IG9wdHMuZW5jb2RlKGpzb24pO1xuICAgIGRlYnVnKCdzYXZlICVzJywganNvbik7XG5cbiAgICB0aGlzLmN0eC5jb29raWVzLnNldChrZXksIGpzb24sIG9wdHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dFNlc3Npb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjUuNS4xQGtvYS1zZXNzaW9uL2xpYi9jb250ZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNlc3Npb24gbW9kZWwuXG4gKi9cblxuY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7Q29udGV4dH0gY3R4XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGN0eCwgb2JqKSB7XG4gICAgdGhpcy5fY3R4ID0gY3R4O1xuICAgIGlmICghb2JqKSB7XG4gICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICAvLyByZXN0b3JlIG1heEFnZSBmcm9tIHN0b3JlXG4gICAgICAgIGlmIChrID09PSAnX21heEFnZScpIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2UgPSBvYmouX21heEFnZTtcbiAgICAgICAgZWxzZSB0aGlzW2tdID0gb2JqW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZXNzaW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdpc05ldycpIHJldHVybjtcbiAgICAgIGlmIChrZXlbMF0gPT09ICdfJykgcmV0dXJuO1xuICAgICAgb2JqW2tleV0gPSB0aGlzW2tleV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIGFsaWFzIHRvIGB0b0pTT05gXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGluc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGhvdyBtYW55IHZhbHVlcyB0aGVyZSBhcmUgaW4gdGhlIHNlc3Npb24gb2JqZWN0LlxuICAgKiBVc2VkIHRvIHNlZSBpZiBpdCdzIFwicG9wdWxhdGVkXCIuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50b0pTT04oKSkubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIHBvcHVsYXRlZCBmbGFnLCB3aGljaCBpcyBqdXN0IGEgYm9vbGVhbiBhbGlhcyBvZiAubGVuZ3RoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgcG9wdWxhdGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBzZXNzaW9uIG1heEFnZVxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBtYXhBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2U7XG4gIH1cblxuICAvKipcbiAgICogc2V0IHNlc3Npb24gbWF4QWdlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgbWF4QWdlKHZhbCkge1xuICAgIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2UgPSB2YWw7XG4gICAgLy8gbWF4QWdlIGNoYW5nZWQsIG11c3Qgc2F2ZSB0byBjb29raWUgYW5kIHN0b3JlXG4gICAgdGhpcy5fcmVxdWlyZVNhdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNhdmUgdGhpcyBzZXNzaW9uIG5vIG1hdHRlciB3aGV0aGVyIGl0IGlzIHBvcHVsYXRlZFxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzYXZlKCkge1xuICAgIHRoaXMuX3JlcXVpcmVTYXZlID0gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlc3Npb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjUuNS4xQGtvYS1zZXNzaW9uL2xpYi9zZXNzaW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JjMTogcmVxdWlyZSgnLi9jcmMxJyksXG4gIGNyYzg6IHJlcXVpcmUoJy4vY3JjOCcpLFxuICBjcmM4MXdpcmU6IHJlcXVpcmUoJy4vY3JjOF8xd2lyZScpLFxuICBjcmMxNjogcmVxdWlyZSgnLi9jcmMxNicpLFxuICBjcmMxNmNjaXR0OiByZXF1aXJlKCcuL2NyYzE2X2NjaXR0JyksXG4gIGNyYzE2bW9kYnVzOiByZXF1aXJlKCcuL2NyYzE2X21vZGJ1cycpLFxuICBjcmMxNnhtb2RlbTogcmVxdWlyZSgnLi9jcmMxNl94bW9kZW0nKSxcbiAgY3JjMTZrZXJtaXQ6IHJlcXVpcmUoJy4vY3JjMTZfa2VybWl0JyksXG4gIGNyYzI0OiByZXF1aXJlKCcuL2NyYzI0JyksXG4gIGNyYzMyOiByZXF1aXJlKCcuL2NyYzMyJyksXG4gIGNyY2phbTogcmVxdWlyZSgnLi9jcmNqYW0nKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjMScsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB+fnByZXZpb3VzO1xuICB2YXIgYWNjdW0gPSAwO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGFjY3VtICs9IGJ5dGU7XG4gIH1cblxuICBjcmMgKz0gYWNjdW0gJSAyNTY7XG4gIHJldHVybiBjcmMgJSAyNTY7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy04IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwLCAweDA3LCAweDBlLCAweDA5LCAweDFjLCAweDFiLCAweDEyLCAweDE1LCAweDM4LCAweDNmLCAweDM2LCAweDMxLCAweDI0LCAweDIzLCAweDJhLCAweDJkLCAweDcwLCAweDc3LCAweDdlLCAweDc5LCAweDZjLCAweDZiLCAweDYyLCAweDY1LCAweDQ4LCAweDRmLCAweDQ2LCAweDQxLCAweDU0LCAweDUzLCAweDVhLCAweDVkLCAweGUwLCAweGU3LCAweGVlLCAweGU5LCAweGZjLCAweGZiLCAweGYyLCAweGY1LCAweGQ4LCAweGRmLCAweGQ2LCAweGQxLCAweGM0LCAweGMzLCAweGNhLCAweGNkLCAweDkwLCAweDk3LCAweDllLCAweDk5LCAweDhjLCAweDhiLCAweDgyLCAweDg1LCAweGE4LCAweGFmLCAweGE2LCAweGExLCAweGI0LCAweGIzLCAweGJhLCAweGJkLCAweGM3LCAweGMwLCAweGM5LCAweGNlLCAweGRiLCAweGRjLCAweGQ1LCAweGQyLCAweGZmLCAweGY4LCAweGYxLCAweGY2LCAweGUzLCAweGU0LCAweGVkLCAweGVhLCAweGI3LCAweGIwLCAweGI5LCAweGJlLCAweGFiLCAweGFjLCAweGE1LCAweGEyLCAweDhmLCAweDg4LCAweDgxLCAweDg2LCAweDkzLCAweDk0LCAweDlkLCAweDlhLCAweDI3LCAweDIwLCAweDI5LCAweDJlLCAweDNiLCAweDNjLCAweDM1LCAweDMyLCAweDFmLCAweDE4LCAweDExLCAweDE2LCAweDAzLCAweDA0LCAweDBkLCAweDBhLCAweDU3LCAweDUwLCAweDU5LCAweDVlLCAweDRiLCAweDRjLCAweDQ1LCAweDQyLCAweDZmLCAweDY4LCAweDYxLCAweDY2LCAweDczLCAweDc0LCAweDdkLCAweDdhLCAweDg5LCAweDhlLCAweDg3LCAweDgwLCAweDk1LCAweDkyLCAweDliLCAweDljLCAweGIxLCAweGI2LCAweGJmLCAweGI4LCAweGFkLCAweGFhLCAweGEzLCAweGE0LCAweGY5LCAweGZlLCAweGY3LCAweGYwLCAweGU1LCAweGUyLCAweGViLCAweGVjLCAweGMxLCAweGM2LCAweGNmLCAweGM4LCAweGRkLCAweGRhLCAweGQzLCAweGQ0LCAweDY5LCAweDZlLCAweDY3LCAweDYwLCAweDc1LCAweDcyLCAweDdiLCAweDdjLCAweDUxLCAweDU2LCAweDVmLCAweDU4LCAweDRkLCAweDRhLCAweDQzLCAweDQ0LCAweDE5LCAweDFlLCAweDE3LCAweDEwLCAweDA1LCAweDAyLCAweDBiLCAweDBjLCAweDIxLCAweDI2LCAweDJmLCAweDI4LCAweDNkLCAweDNhLCAweDMzLCAweDM0LCAweDRlLCAweDQ5LCAweDQwLCAweDQ3LCAweDUyLCAweDU1LCAweDVjLCAweDViLCAweDc2LCAweDcxLCAweDc4LCAweDdmLCAweDZhLCAweDZkLCAweDY0LCAweDYzLCAweDNlLCAweDM5LCAweDMwLCAweDM3LCAweDIyLCAweDI1LCAweDJjLCAweDJiLCAweDA2LCAweDAxLCAweDA4LCAweDBmLCAweDFhLCAweDFkLCAweDE0LCAweDEzLCAweGFlLCAweGE5LCAweGEwLCAweGE3LCAweGIyLCAweGI1LCAweGJjLCAweGJiLCAweDk2LCAweDkxLCAweDk4LCAweDlmLCAweDhhLCAweDhkLCAweDg0LCAweDgzLCAweGRlLCAweGQ5LCAweGQwLCAweGQ3LCAweGMyLCAweGM1LCAweGNjLCAweGNiLCAweGU2LCAweGUxLCAweGU4LCAweGVmLCAweGZhLCAweGZkLCAweGY0LCAweGYzXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTgnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gfn5wcmV2aW91cztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSAmIDB4ZmY7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyYzguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEdlbmVyYXRlZCBieSBgLi9weWNyYy5weSAtLWFsZ29yaXRobT10YWJsZS1kcml2ZW4gLS1tb2RlbD1kYWxsYXMtMS13aXJlIC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwLCAweDVlLCAweGJjLCAweGUyLCAweDYxLCAweDNmLCAweGRkLCAweDgzLCAweGMyLCAweDljLCAweDdlLCAweDIwLCAweGEzLCAweGZkLCAweDFmLCAweDQxLCAweDlkLCAweGMzLCAweDIxLCAweDdmLCAweGZjLCAweGEyLCAweDQwLCAweDFlLCAweDVmLCAweDAxLCAweGUzLCAweGJkLCAweDNlLCAweDYwLCAweDgyLCAweGRjLCAweDIzLCAweDdkLCAweDlmLCAweGMxLCAweDQyLCAweDFjLCAweGZlLCAweGEwLCAweGUxLCAweGJmLCAweDVkLCAweDAzLCAweDgwLCAweGRlLCAweDNjLCAweDYyLCAweGJlLCAweGUwLCAweDAyLCAweDVjLCAweGRmLCAweDgxLCAweDYzLCAweDNkLCAweDdjLCAweDIyLCAweGMwLCAweDllLCAweDFkLCAweDQzLCAweGExLCAweGZmLCAweDQ2LCAweDE4LCAweGZhLCAweGE0LCAweDI3LCAweDc5LCAweDliLCAweGM1LCAweDg0LCAweGRhLCAweDM4LCAweDY2LCAweGU1LCAweGJiLCAweDU5LCAweDA3LCAweGRiLCAweDg1LCAweDY3LCAweDM5LCAweGJhLCAweGU0LCAweDA2LCAweDU4LCAweDE5LCAweDQ3LCAweGE1LCAweGZiLCAweDc4LCAweDI2LCAweGM0LCAweDlhLCAweDY1LCAweDNiLCAweGQ5LCAweDg3LCAweDA0LCAweDVhLCAweGI4LCAweGU2LCAweGE3LCAweGY5LCAweDFiLCAweDQ1LCAweGM2LCAweDk4LCAweDdhLCAweDI0LCAweGY4LCAweGE2LCAweDQ0LCAweDFhLCAweDk5LCAweGM3LCAweDI1LCAweDdiLCAweDNhLCAweDY0LCAweDg2LCAweGQ4LCAweDViLCAweDA1LCAweGU3LCAweGI5LCAweDhjLCAweGQyLCAweDMwLCAweDZlLCAweGVkLCAweGIzLCAweDUxLCAweDBmLCAweDRlLCAweDEwLCAweGYyLCAweGFjLCAweDJmLCAweDcxLCAweDkzLCAweGNkLCAweDExLCAweDRmLCAweGFkLCAweGYzLCAweDcwLCAweDJlLCAweGNjLCAweDkyLCAweGQzLCAweDhkLCAweDZmLCAweDMxLCAweGIyLCAweGVjLCAweDBlLCAweDUwLCAweGFmLCAweGYxLCAweDEzLCAweDRkLCAweGNlLCAweDkwLCAweDcyLCAweDJjLCAweDZkLCAweDMzLCAweGQxLCAweDhmLCAweDBjLCAweDUyLCAweGIwLCAweGVlLCAweDMyLCAweDZjLCAweDhlLCAweGQwLCAweDUzLCAweDBkLCAweGVmLCAweGIxLCAweGYwLCAweGFlLCAweDRjLCAweDEyLCAweDkxLCAweGNmLCAweDJkLCAweDczLCAweGNhLCAweDk0LCAweDc2LCAweDI4LCAweGFiLCAweGY1LCAweDE3LCAweDQ5LCAweDA4LCAweDU2LCAweGI0LCAweGVhLCAweDY5LCAweDM3LCAweGQ1LCAweDhiLCAweDU3LCAweDA5LCAweGViLCAweGI1LCAweDM2LCAweDY4LCAweDhhLCAweGQ0LCAweDk1LCAweGNiLCAweDI5LCAweDc3LCAweGY0LCAweGFhLCAweDQ4LCAweDE2LCAweGU5LCAweGI3LCAweDU1LCAweDBiLCAweDg4LCAweGQ2LCAweDM0LCAweDZhLCAweDJiLCAweDc1LCAweDk3LCAweGM5LCAweDRhLCAweDE0LCAweGY2LCAweGE4LCAweDc0LCAweDJhLCAweGM4LCAweDk2LCAweDE1LCAweDRiLCAweGE5LCAweGY3LCAweGI2LCAweGU4LCAweDBhLCAweDU0LCAweGQ3LCAweDg5LCAweDZiLCAweDM1XTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnZGFsbGFzLTEtd2lyZScsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB+fnByZXZpb3VzO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdICYgMHhmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjOF8xd2lyZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy0xNiAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwLCAweGMwYzEsIDB4YzE4MSwgMHgwMTQwLCAweGMzMDEsIDB4MDNjMCwgMHgwMjgwLCAweGMyNDEsIDB4YzYwMSwgMHgwNmMwLCAweDA3ODAsIDB4Yzc0MSwgMHgwNTAwLCAweGM1YzEsIDB4YzQ4MSwgMHgwNDQwLCAweGNjMDEsIDB4MGNjMCwgMHgwZDgwLCAweGNkNDEsIDB4MGYwMCwgMHhjZmMxLCAweGNlODEsIDB4MGU0MCwgMHgwYTAwLCAweGNhYzEsIDB4Y2I4MSwgMHgwYjQwLCAweGM5MDEsIDB4MDljMCwgMHgwODgwLCAweGM4NDEsIDB4ZDgwMSwgMHgxOGMwLCAweDE5ODAsIDB4ZDk0MSwgMHgxYjAwLCAweGRiYzEsIDB4ZGE4MSwgMHgxYTQwLCAweDFlMDAsIDB4ZGVjMSwgMHhkZjgxLCAweDFmNDAsIDB4ZGQwMSwgMHgxZGMwLCAweDFjODAsIDB4ZGM0MSwgMHgxNDAwLCAweGQ0YzEsIDB4ZDU4MSwgMHgxNTQwLCAweGQ3MDEsIDB4MTdjMCwgMHgxNjgwLCAweGQ2NDEsIDB4ZDIwMSwgMHgxMmMwLCAweDEzODAsIDB4ZDM0MSwgMHgxMTAwLCAweGQxYzEsIDB4ZDA4MSwgMHgxMDQwLCAweGYwMDEsIDB4MzBjMCwgMHgzMTgwLCAweGYxNDEsIDB4MzMwMCwgMHhmM2MxLCAweGYyODEsIDB4MzI0MCwgMHgzNjAwLCAweGY2YzEsIDB4Zjc4MSwgMHgzNzQwLCAweGY1MDEsIDB4MzVjMCwgMHgzNDgwLCAweGY0NDEsIDB4M2MwMCwgMHhmY2MxLCAweGZkODEsIDB4M2Q0MCwgMHhmZjAxLCAweDNmYzAsIDB4M2U4MCwgMHhmZTQxLCAweGZhMDEsIDB4M2FjMCwgMHgzYjgwLCAweGZiNDEsIDB4MzkwMCwgMHhmOWMxLCAweGY4ODEsIDB4Mzg0MCwgMHgyODAwLCAweGU4YzEsIDB4ZTk4MSwgMHgyOTQwLCAweGViMDEsIDB4MmJjMCwgMHgyYTgwLCAweGVhNDEsIDB4ZWUwMSwgMHgyZWMwLCAweDJmODAsIDB4ZWY0MSwgMHgyZDAwLCAweGVkYzEsIDB4ZWM4MSwgMHgyYzQwLCAweGU0MDEsIDB4MjRjMCwgMHgyNTgwLCAweGU1NDEsIDB4MjcwMCwgMHhlN2MxLCAweGU2ODEsIDB4MjY0MCwgMHgyMjAwLCAweGUyYzEsIDB4ZTM4MSwgMHgyMzQwLCAweGUxMDEsIDB4MjFjMCwgMHgyMDgwLCAweGUwNDEsIDB4YTAwMSwgMHg2MGMwLCAweDYxODAsIDB4YTE0MSwgMHg2MzAwLCAweGEzYzEsIDB4YTI4MSwgMHg2MjQwLCAweDY2MDAsIDB4YTZjMSwgMHhhNzgxLCAweDY3NDAsIDB4YTUwMSwgMHg2NWMwLCAweDY0ODAsIDB4YTQ0MSwgMHg2YzAwLCAweGFjYzEsIDB4YWQ4MSwgMHg2ZDQwLCAweGFmMDEsIDB4NmZjMCwgMHg2ZTgwLCAweGFlNDEsIDB4YWEwMSwgMHg2YWMwLCAweDZiODAsIDB4YWI0MSwgMHg2OTAwLCAweGE5YzEsIDB4YTg4MSwgMHg2ODQwLCAweDc4MDAsIDB4YjhjMSwgMHhiOTgxLCAweDc5NDAsIDB4YmIwMSwgMHg3YmMwLCAweDdhODAsIDB4YmE0MSwgMHhiZTAxLCAweDdlYzAsIDB4N2Y4MCwgMHhiZjQxLCAweDdkMDAsIDB4YmRjMSwgMHhiYzgxLCAweDdjNDAsIDB4YjQwMSwgMHg3NGMwLCAweDc1ODAsIDB4YjU0MSwgMHg3NzAwLCAweGI3YzEsIDB4YjY4MSwgMHg3NjQwLCAweDcyMDAsIDB4YjJjMSwgMHhiMzgxLCAweDczNDAsIDB4YjEwMSwgMHg3MWMwLCAweDcwODAsIDB4YjA0MSwgMHg1MDAwLCAweDkwYzEsIDB4OTE4MSwgMHg1MTQwLCAweDkzMDEsIDB4NTNjMCwgMHg1MjgwLCAweDkyNDEsIDB4OTYwMSwgMHg1NmMwLCAweDU3ODAsIDB4OTc0MSwgMHg1NTAwLCAweDk1YzEsIDB4OTQ4MSwgMHg1NDQwLCAweDljMDEsIDB4NWNjMCwgMHg1ZDgwLCAweDlkNDEsIDB4NWYwMCwgMHg5ZmMxLCAweDllODEsIDB4NWU0MCwgMHg1YTAwLCAweDlhYzEsIDB4OWI4MSwgMHg1YjQwLCAweDk5MDEsIDB4NTljMCwgMHg1ODgwLCAweDk4NDEsIDB4ODgwMSwgMHg0OGMwLCAweDQ5ODAsIDB4ODk0MSwgMHg0YjAwLCAweDhiYzEsIDB4OGE4MSwgMHg0YTQwLCAweDRlMDAsIDB4OGVjMSwgMHg4ZjgxLCAweDRmNDAsIDB4OGQwMSwgMHg0ZGMwLCAweDRjODAsIDB4OGM0MSwgMHg0NDAwLCAweDg0YzEsIDB4ODU4MSwgMHg0NTQwLCAweDg3MDEsIDB4NDdjMCwgMHg0NjgwLCAweDg2NDEsIDB4ODIwMSwgMHg0MmMwLCAweDQzODAsIDB4ODM0MSwgMHg0MTAwLCAweDgxYzEsIDB4ODA4MSwgMHg0MDQwXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTE2JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IH5+cHJldmlvdXM7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gKFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gY3JjID4+IDgpICYgMHhmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9jcmMxNi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNjaXR0IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAsIDB4MTAyMSwgMHgyMDQyLCAweDMwNjMsIDB4NDA4NCwgMHg1MGE1LCAweDYwYzYsIDB4NzBlNywgMHg4MTA4LCAweDkxMjksIDB4YTE0YSwgMHhiMTZiLCAweGMxOGMsIDB4ZDFhZCwgMHhlMWNlLCAweGYxZWYsIDB4MTIzMSwgMHgwMjEwLCAweDMyNzMsIDB4MjI1MiwgMHg1MmI1LCAweDQyOTQsIDB4NzJmNywgMHg2MmQ2LCAweDkzMzksIDB4ODMxOCwgMHhiMzdiLCAweGEzNWEsIDB4ZDNiZCwgMHhjMzljLCAweGYzZmYsIDB4ZTNkZSwgMHgyNDYyLCAweDM0NDMsIDB4MDQyMCwgMHgxNDAxLCAweDY0ZTYsIDB4NzRjNywgMHg0NGE0LCAweDU0ODUsIDB4YTU2YSwgMHhiNTRiLCAweDg1MjgsIDB4OTUwOSwgMHhlNWVlLCAweGY1Y2YsIDB4YzVhYywgMHhkNThkLCAweDM2NTMsIDB4MjY3MiwgMHgxNjExLCAweDA2MzAsIDB4NzZkNywgMHg2NmY2LCAweDU2OTUsIDB4NDZiNCwgMHhiNzViLCAweGE3N2EsIDB4OTcxOSwgMHg4NzM4LCAweGY3ZGYsIDB4ZTdmZSwgMHhkNzlkLCAweGM3YmMsIDB4NDhjNCwgMHg1OGU1LCAweDY4ODYsIDB4NzhhNywgMHgwODQwLCAweDE4NjEsIDB4MjgwMiwgMHgzODIzLCAweGM5Y2MsIDB4ZDllZCwgMHhlOThlLCAweGY5YWYsIDB4ODk0OCwgMHg5OTY5LCAweGE5MGEsIDB4YjkyYiwgMHg1YWY1LCAweDRhZDQsIDB4N2FiNywgMHg2YTk2LCAweDFhNzEsIDB4MGE1MCwgMHgzYTMzLCAweDJhMTIsIDB4ZGJmZCwgMHhjYmRjLCAweGZiYmYsIDB4ZWI5ZSwgMHg5Yjc5LCAweDhiNTgsIDB4YmIzYiwgMHhhYjFhLCAweDZjYTYsIDB4N2M4NywgMHg0Y2U0LCAweDVjYzUsIDB4MmMyMiwgMHgzYzAzLCAweDBjNjAsIDB4MWM0MSwgMHhlZGFlLCAweGZkOGYsIDB4Y2RlYywgMHhkZGNkLCAweGFkMmEsIDB4YmQwYiwgMHg4ZDY4LCAweDlkNDksIDB4N2U5NywgMHg2ZWI2LCAweDVlZDUsIDB4NGVmNCwgMHgzZTEzLCAweDJlMzIsIDB4MWU1MSwgMHgwZTcwLCAweGZmOWYsIDB4ZWZiZSwgMHhkZmRkLCAweGNmZmMsIDB4YmYxYiwgMHhhZjNhLCAweDlmNTksIDB4OGY3OCwgMHg5MTg4LCAweDgxYTksIDB4YjFjYSwgMHhhMWViLCAweGQxMGMsIDB4YzEyZCwgMHhmMTRlLCAweGUxNmYsIDB4MTA4MCwgMHgwMGExLCAweDMwYzIsIDB4MjBlMywgMHg1MDA0LCAweDQwMjUsIDB4NzA0NiwgMHg2MDY3LCAweDgzYjksIDB4OTM5OCwgMHhhM2ZiLCAweGIzZGEsIDB4YzMzZCwgMHhkMzFjLCAweGUzN2YsIDB4ZjM1ZSwgMHgwMmIxLCAweDEyOTAsIDB4MjJmMywgMHgzMmQyLCAweDQyMzUsIDB4NTIxNCwgMHg2Mjc3LCAweDcyNTYsIDB4YjVlYSwgMHhhNWNiLCAweDk1YTgsIDB4ODU4OSwgMHhmNTZlLCAweGU1NGYsIDB4ZDUyYywgMHhjNTBkLCAweDM0ZTIsIDB4MjRjMywgMHgxNGEwLCAweDA0ODEsIDB4NzQ2NiwgMHg2NDQ3LCAweDU0MjQsIDB4NDQwNSwgMHhhN2RiLCAweGI3ZmEsIDB4ODc5OSwgMHg5N2I4LCAweGU3NWYsIDB4Zjc3ZSwgMHhjNzFkLCAweGQ3M2MsIDB4MjZkMywgMHgzNmYyLCAweDA2OTEsIDB4MTZiMCwgMHg2NjU3LCAweDc2NzYsIDB4NDYxNSwgMHg1NjM0LCAweGQ5NGMsIDB4Yzk2ZCwgMHhmOTBlLCAweGU5MmYsIDB4OTljOCwgMHg4OWU5LCAweGI5OGEsIDB4YTlhYiwgMHg1ODQ0LCAweDQ4NjUsIDB4NzgwNiwgMHg2ODI3LCAweDE4YzAsIDB4MDhlMSwgMHgzODgyLCAweDI4YTMsIDB4Y2I3ZCwgMHhkYjVjLCAweGViM2YsIDB4ZmIxZSwgMHg4YmY5LCAweDliZDgsIDB4YWJiYiwgMHhiYjlhLCAweDRhNzUsIDB4NWE1NCwgMHg2YTM3LCAweDdhMTYsIDB4MGFmMSwgMHgxYWQwLCAweDJhYjMsIDB4M2E5MiwgMHhmZDJlLCAweGVkMGYsIDB4ZGQ2YywgMHhjZDRkLCAweGJkYWEsIDB4YWQ4YiwgMHg5ZGU4LCAweDhkYzksIDB4N2MyNiwgMHg2YzA3LCAweDVjNjQsIDB4NGM0NSwgMHgzY2EyLCAweDJjODMsIDB4MWNlMCwgMHgwY2MxLCAweGVmMWYsIDB4ZmYzZSwgMHhjZjVkLCAweGRmN2MsIDB4YWY5YiwgMHhiZmJhLCAweDhmZDksIDB4OWZmOCwgMHg2ZTE3LCAweDdlMzYsIDB4NGU1NSwgMHg1ZTc0LCAweDJlOTMsIDB4M2ViMiwgMHgwZWQxLCAweDFlZjBdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdjY2l0dCcsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4ZmZmZjtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSAoVEFCTEVbKGNyYyA+PiA4IF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA8PCA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMTZfY2NpdHQuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEdlbmVyYXRlZCBieSBgLi9weWNyYy5weSAtLWFsZ29yaXRobT10YWJsZS1kcml2ZW4gLS1tb2RlbD1jcmMtMTYtbW9kYnVzIC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAsIDB4YzBjMSwgMHhjMTgxLCAweDAxNDAsIDB4YzMwMSwgMHgwM2MwLCAweDAyODAsIDB4YzI0MSwgMHhjNjAxLCAweDA2YzAsIDB4MDc4MCwgMHhjNzQxLCAweDA1MDAsIDB4YzVjMSwgMHhjNDgxLCAweDA0NDAsIDB4Y2MwMSwgMHgwY2MwLCAweDBkODAsIDB4Y2Q0MSwgMHgwZjAwLCAweGNmYzEsIDB4Y2U4MSwgMHgwZTQwLCAweDBhMDAsIDB4Y2FjMSwgMHhjYjgxLCAweDBiNDAsIDB4YzkwMSwgMHgwOWMwLCAweDA4ODAsIDB4Yzg0MSwgMHhkODAxLCAweDE4YzAsIDB4MTk4MCwgMHhkOTQxLCAweDFiMDAsIDB4ZGJjMSwgMHhkYTgxLCAweDFhNDAsIDB4MWUwMCwgMHhkZWMxLCAweGRmODEsIDB4MWY0MCwgMHhkZDAxLCAweDFkYzAsIDB4MWM4MCwgMHhkYzQxLCAweDE0MDAsIDB4ZDRjMSwgMHhkNTgxLCAweDE1NDAsIDB4ZDcwMSwgMHgxN2MwLCAweDE2ODAsIDB4ZDY0MSwgMHhkMjAxLCAweDEyYzAsIDB4MTM4MCwgMHhkMzQxLCAweDExMDAsIDB4ZDFjMSwgMHhkMDgxLCAweDEwNDAsIDB4ZjAwMSwgMHgzMGMwLCAweDMxODAsIDB4ZjE0MSwgMHgzMzAwLCAweGYzYzEsIDB4ZjI4MSwgMHgzMjQwLCAweDM2MDAsIDB4ZjZjMSwgMHhmNzgxLCAweDM3NDAsIDB4ZjUwMSwgMHgzNWMwLCAweDM0ODAsIDB4ZjQ0MSwgMHgzYzAwLCAweGZjYzEsIDB4ZmQ4MSwgMHgzZDQwLCAweGZmMDEsIDB4M2ZjMCwgMHgzZTgwLCAweGZlNDEsIDB4ZmEwMSwgMHgzYWMwLCAweDNiODAsIDB4ZmI0MSwgMHgzOTAwLCAweGY5YzEsIDB4Zjg4MSwgMHgzODQwLCAweDI4MDAsIDB4ZThjMSwgMHhlOTgxLCAweDI5NDAsIDB4ZWIwMSwgMHgyYmMwLCAweDJhODAsIDB4ZWE0MSwgMHhlZTAxLCAweDJlYzAsIDB4MmY4MCwgMHhlZjQxLCAweDJkMDAsIDB4ZWRjMSwgMHhlYzgxLCAweDJjNDAsIDB4ZTQwMSwgMHgyNGMwLCAweDI1ODAsIDB4ZTU0MSwgMHgyNzAwLCAweGU3YzEsIDB4ZTY4MSwgMHgyNjQwLCAweDIyMDAsIDB4ZTJjMSwgMHhlMzgxLCAweDIzNDAsIDB4ZTEwMSwgMHgyMWMwLCAweDIwODAsIDB4ZTA0MSwgMHhhMDAxLCAweDYwYzAsIDB4NjE4MCwgMHhhMTQxLCAweDYzMDAsIDB4YTNjMSwgMHhhMjgxLCAweDYyNDAsIDB4NjYwMCwgMHhhNmMxLCAweGE3ODEsIDB4Njc0MCwgMHhhNTAxLCAweDY1YzAsIDB4NjQ4MCwgMHhhNDQxLCAweDZjMDAsIDB4YWNjMSwgMHhhZDgxLCAweDZkNDAsIDB4YWYwMSwgMHg2ZmMwLCAweDZlODAsIDB4YWU0MSwgMHhhYTAxLCAweDZhYzAsIDB4NmI4MCwgMHhhYjQxLCAweDY5MDAsIDB4YTljMSwgMHhhODgxLCAweDY4NDAsIDB4NzgwMCwgMHhiOGMxLCAweGI5ODEsIDB4Nzk0MCwgMHhiYjAxLCAweDdiYzAsIDB4N2E4MCwgMHhiYTQxLCAweGJlMDEsIDB4N2VjMCwgMHg3ZjgwLCAweGJmNDEsIDB4N2QwMCwgMHhiZGMxLCAweGJjODEsIDB4N2M0MCwgMHhiNDAxLCAweDc0YzAsIDB4NzU4MCwgMHhiNTQxLCAweDc3MDAsIDB4YjdjMSwgMHhiNjgxLCAweDc2NDAsIDB4NzIwMCwgMHhiMmMxLCAweGIzODEsIDB4NzM0MCwgMHhiMTAxLCAweDcxYzAsIDB4NzA4MCwgMHhiMDQxLCAweDUwMDAsIDB4OTBjMSwgMHg5MTgxLCAweDUxNDAsIDB4OTMwMSwgMHg1M2MwLCAweDUyODAsIDB4OTI0MSwgMHg5NjAxLCAweDU2YzAsIDB4NTc4MCwgMHg5NzQxLCAweDU1MDAsIDB4OTVjMSwgMHg5NDgxLCAweDU0NDAsIDB4OWMwMSwgMHg1Y2MwLCAweDVkODAsIDB4OWQ0MSwgMHg1ZjAwLCAweDlmYzEsIDB4OWU4MSwgMHg1ZTQwLCAweDVhMDAsIDB4OWFjMSwgMHg5YjgxLCAweDViNDAsIDB4OTkwMSwgMHg1OWMwLCAweDU4ODAsIDB4OTg0MSwgMHg4ODAxLCAweDQ4YzAsIDB4NDk4MCwgMHg4OTQxLCAweDRiMDAsIDB4OGJjMSwgMHg4YTgxLCAweDRhNDAsIDB4NGUwMCwgMHg4ZWMxLCAweDhmODEsIDB4NGY0MCwgMHg4ZDAxLCAweDRkYzAsIDB4NGM4MCwgMHg4YzQxLCAweDQ0MDAsIDB4ODRjMSwgMHg4NTgxLCAweDQ1NDAsIDB4ODcwMSwgMHg0N2MwLCAweDQ2ODAsIDB4ODY0MSwgMHg4MjAxLCAweDQyYzAsIDB4NDM4MCwgMHg4MzQxLCAweDQxMDAsIDB4ODFjMSwgMHg4MDgxLCAweDQwNDBdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdjcmMtMTYtbW9kYnVzJywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHR5cGVvZiBwcmV2aW91cyAhPT0gJ3VuZGVmaW5lZCcgPyB+fnByZXZpb3VzIDogMHhmZmZmO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+PiA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMTZfbW9kYnVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ3htb2RlbScsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4MDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICB2YXIgY29kZSA9IGNyYyA+Pj4gOCAmIDB4RkY7XG5cbiAgICBjb2RlIF49IGJ5dGUgJiAweEZGO1xuICAgIGNvZGUgXj0gY29kZSA+Pj4gNDtcbiAgICBjcmMgPSBjcmMgPDwgOCAmIDB4RkZGRjtcbiAgICBjcmMgXj0gY29kZTtcbiAgICBjb2RlID0gY29kZSA8PCA1ICYgMHhGRkZGO1xuICAgIGNyYyBePSBjb2RlO1xuICAgIGNvZGUgPSBjb2RlIDw8IDcgJiAweEZGRkY7XG4gICAgY3JjIF49IGNvZGU7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyYzE2X3htb2RlbS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWtlcm1pdCAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwLCAweDExODksIDB4MjMxMiwgMHgzMjliLCAweDQ2MjQsIDB4NTdhZCwgMHg2NTM2LCAweDc0YmYsIDB4OGM0OCwgMHg5ZGMxLCAweGFmNWEsIDB4YmVkMywgMHhjYTZjLCAweGRiZTUsIDB4ZTk3ZSwgMHhmOGY3LCAweDEwODEsIDB4MDEwOCwgMHgzMzkzLCAweDIyMWEsIDB4NTZhNSwgMHg0NzJjLCAweDc1YjcsIDB4NjQzZSwgMHg5Y2M5LCAweDhkNDAsIDB4YmZkYiwgMHhhZTUyLCAweGRhZWQsIDB4Y2I2NCwgMHhmOWZmLCAweGU4NzYsIDB4MjEwMiwgMHgzMDhiLCAweDAyMTAsIDB4MTM5OSwgMHg2NzI2LCAweDc2YWYsIDB4NDQzNCwgMHg1NWJkLCAweGFkNGEsIDB4YmNjMywgMHg4ZTU4LCAweDlmZDEsIDB4ZWI2ZSwgMHhmYWU3LCAweGM4N2MsIDB4ZDlmNSwgMHgzMTgzLCAweDIwMGEsIDB4MTI5MSwgMHgwMzE4LCAweDc3YTcsIDB4NjYyZSwgMHg1NGI1LCAweDQ1M2MsIDB4YmRjYiwgMHhhYzQyLCAweDllZDksIDB4OGY1MCwgMHhmYmVmLCAweGVhNjYsIDB4ZDhmZCwgMHhjOTc0LCAweDQyMDQsIDB4NTM4ZCwgMHg2MTE2LCAweDcwOWYsIDB4MDQyMCwgMHgxNWE5LCAweDI3MzIsIDB4MzZiYiwgMHhjZTRjLCAweGRmYzUsIDB4ZWQ1ZSwgMHhmY2Q3LCAweDg4NjgsIDB4OTllMSwgMHhhYjdhLCAweGJhZjMsIDB4NTI4NSwgMHg0MzBjLCAweDcxOTcsIDB4NjAxZSwgMHgxNGExLCAweDA1MjgsIDB4MzdiMywgMHgyNjNhLCAweGRlY2QsIDB4Y2Y0NCwgMHhmZGRmLCAweGVjNTYsIDB4OThlOSwgMHg4OTYwLCAweGJiZmIsIDB4YWE3MiwgMHg2MzA2LCAweDcyOGYsIDB4NDAxNCwgMHg1MTlkLCAweDI1MjIsIDB4MzRhYiwgMHgwNjMwLCAweDE3YjksIDB4ZWY0ZSwgMHhmZWM3LCAweGNjNWMsIDB4ZGRkNSwgMHhhOTZhLCAweGI4ZTMsIDB4OGE3OCwgMHg5YmYxLCAweDczODcsIDB4NjIwZSwgMHg1MDk1LCAweDQxMWMsIDB4MzVhMywgMHgyNDJhLCAweDE2YjEsIDB4MDczOCwgMHhmZmNmLCAweGVlNDYsIDB4ZGNkZCwgMHhjZDU0LCAweGI5ZWIsIDB4YTg2MiwgMHg5YWY5LCAweDhiNzAsIDB4ODQwOCwgMHg5NTgxLCAweGE3MWEsIDB4YjY5MywgMHhjMjJjLCAweGQzYTUsIDB4ZTEzZSwgMHhmMGI3LCAweDA4NDAsIDB4MTljOSwgMHgyYjUyLCAweDNhZGIsIDB4NGU2NCwgMHg1ZmVkLCAweDZkNzYsIDB4N2NmZiwgMHg5NDg5LCAweDg1MDAsIDB4Yjc5YiwgMHhhNjEyLCAweGQyYWQsIDB4YzMyNCwgMHhmMWJmLCAweGUwMzYsIDB4MThjMSwgMHgwOTQ4LCAweDNiZDMsIDB4MmE1YSwgMHg1ZWU1LCAweDRmNmMsIDB4N2RmNywgMHg2YzdlLCAweGE1MGEsIDB4YjQ4MywgMHg4NjE4LCAweDk3OTEsIDB4ZTMyZSwgMHhmMmE3LCAweGMwM2MsIDB4ZDFiNSwgMHgyOTQyLCAweDM4Y2IsIDB4MGE1MCwgMHgxYmQ5LCAweDZmNjYsIDB4N2VlZiwgMHg0Yzc0LCAweDVkZmQsIDB4YjU4YiwgMHhhNDAyLCAweDk2OTksIDB4ODcxMCwgMHhmM2FmLCAweGUyMjYsIDB4ZDBiZCwgMHhjMTM0LCAweDM5YzMsIDB4Mjg0YSwgMHgxYWQxLCAweDBiNTgsIDB4N2ZlNywgMHg2ZTZlLCAweDVjZjUsIDB4NGQ3YywgMHhjNjBjLCAweGQ3ODUsIDB4ZTUxZSwgMHhmNDk3LCAweDgwMjgsIDB4OTFhMSwgMHhhMzNhLCAweGIyYjMsIDB4NGE0NCwgMHg1YmNkLCAweDY5NTYsIDB4NzhkZiwgMHgwYzYwLCAweDFkZTksIDB4MmY3MiwgMHgzZWZiLCAweGQ2OGQsIDB4YzcwNCwgMHhmNTlmLCAweGU0MTYsIDB4OTBhOSwgMHg4MTIwLCAweGIzYmIsIDB4YTIzMiwgMHg1YWM1LCAweDRiNGMsIDB4NzlkNywgMHg2ODVlLCAweDFjZTEsIDB4MGQ2OCwgMHgzZmYzLCAweDJlN2EsIDB4ZTcwZSwgMHhmNjg3LCAweGM0MWMsIDB4ZDU5NSwgMHhhMTJhLCAweGIwYTMsIDB4ODIzOCwgMHg5M2IxLCAweDZiNDYsIDB4N2FjZiwgMHg0ODU0LCAweDU5ZGQsIDB4MmQ2MiwgMHgzY2ViLCAweDBlNzAsIDB4MWZmOSwgMHhmNzhmLCAweGU2MDYsIDB4ZDQ5ZCwgMHhjNTE0LCAweGIxYWIsIDB4YTAyMiwgMHg5MmI5LCAweDgzMzAsIDB4N2JjNywgMHg2YTRlLCAweDU4ZDUsIDB4NDk1YywgMHgzZGUzLCAweDJjNmEsIDB4MWVmMSwgMHgwZjc4XTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgna2VybWl0JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHR5cGVvZiBwcmV2aW91cyAhPT0gJ3VuZGVmaW5lZCcgPyB+fnByZXZpb3VzIDogMHgwMDAwO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+PiA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjMTZfa2VybWl0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmUgLS1tb2RlbD1jcmMtMjQgLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAwMDAwLCAweDg2NGNmYiwgMHg4YWQ1MGQsIDB4MGM5OWY2LCAweDkzZTZlMSwgMHgxNWFhMWEsIDB4MTkzM2VjLCAweDlmN2YxNywgMHhhMTgxMzksIDB4MjdjZGMyLCAweDJiNTQzNCwgMHhhZDE4Y2YsIDB4MzI2N2Q4LCAweGI0MmIyMywgMHhiOGIyZDUsIDB4M2VmZTJlLCAweGM1NGU4OSwgMHg0MzAyNzIsIDB4NGY5Yjg0LCAweGM5ZDc3ZiwgMHg1NmE4NjgsIDB4ZDBlNDkzLCAweGRjN2Q2NSwgMHg1YTMxOWUsIDB4NjRjZmIwLCAweGUyODM0YiwgMHhlZTFhYmQsIDB4Njg1NjQ2LCAweGY3Mjk1MSwgMHg3MTY1YWEsIDB4N2RmYzVjLCAweGZiYjBhNywgMHgwY2QxZTksIDB4OGE5ZDEyLCAweDg2MDRlNCwgMHgwMDQ4MWYsIDB4OWYzNzA4LCAweDE5N2JmMywgMHgxNWUyMDUsIDB4OTNhZWZlLCAweGFkNTBkMCwgMHgyYjFjMmIsIDB4Mjc4NWRkLCAweGExYzkyNiwgMHgzZWI2MzEsIDB4YjhmYWNhLCAweGI0NjMzYywgMHgzMjJmYzcsIDB4Yzk5ZjYwLCAweDRmZDM5YiwgMHg0MzRhNmQsIDB4YzUwNjk2LCAweDVhNzk4MSwgMHhkYzM1N2EsIDB4ZDBhYzhjLCAweDU2ZTA3NywgMHg2ODFlNTksIDB4ZWU1MmEyLCAweGUyY2I1NCwgMHg2NDg3YWYsIDB4ZmJmOGI4LCAweDdkYjQ0MywgMHg3MTJkYjUsIDB4Zjc2MTRlLCAweDE5YTNkMiwgMHg5ZmVmMjksIDB4OTM3NmRmLCAweDE1M2EyNCwgMHg4YTQ1MzMsIDB4MGMwOWM4LCAweDAwOTAzZSwgMHg4NmRjYzUsIDB4YjgyMmViLCAweDNlNmUxMCwgMHgzMmY3ZTYsIDB4YjRiYjFkLCAweDJiYzQwYSwgMHhhZDg4ZjEsIDB4YTExMTA3LCAweDI3NWRmYywgMHhkY2VkNWIsIDB4NWFhMWEwLCAweDU2Mzg1NiwgMHhkMDc0YWQsIDB4NGYwYmJhLCAweGM5NDc0MSwgMHhjNWRlYjcsIDB4NDM5MjRjLCAweDdkNmM2MiwgMHhmYjIwOTksIDB4ZjdiOTZmLCAweDcxZjU5NCwgMHhlZThhODMsIDB4NjhjNjc4LCAweDY0NWY4ZSwgMHhlMjEzNzUsIDB4MTU3MjNiLCAweDkzM2VjMCwgMHg5ZmE3MzYsIDB4MTllYmNkLCAweDg2OTRkYSwgMHgwMGQ4MjEsIDB4MGM0MWQ3LCAweDhhMGQyYywgMHhiNGYzMDIsIDB4MzJiZmY5LCAweDNlMjYwZiwgMHhiODZhZjQsIDB4MjcxNWUzLCAweGExNTkxOCwgMHhhZGMwZWUsIDB4MmI4YzE1LCAweGQwM2NiMiwgMHg1NjcwNDksIDB4NWFlOWJmLCAweGRjYTU0NCwgMHg0M2RhNTMsIDB4YzU5NmE4LCAweGM5MGY1ZSwgMHg0ZjQzYTUsIDB4NzFiZDhiLCAweGY3ZjE3MCwgMHhmYjY4ODYsIDB4N2QyNDdkLCAweGUyNWI2YSwgMHg2NDE3OTEsIDB4Njg4ZTY3LCAweGVlYzI5YywgMHgzMzQ3YTQsIDB4YjUwYjVmLCAweGI5OTJhOSwgMHgzZmRlNTIsIDB4YTBhMTQ1LCAweDI2ZWRiZSwgMHgyYTc0NDgsIDB4YWMzOGIzLCAweDkyYzY5ZCwgMHgxNDhhNjYsIDB4MTgxMzkwLCAweDllNWY2YiwgMHgwMTIwN2MsIDB4ODc2Yzg3LCAweDhiZjU3MSwgMHgwZGI5OGEsIDB4ZjYwOTJkLCAweDcwNDVkNiwgMHg3Y2RjMjAsIDB4ZmE5MGRiLCAweDY1ZWZjYywgMHhlM2EzMzcsIDB4ZWYzYWMxLCAweDY5NzYzYSwgMHg1Nzg4MTQsIDB4ZDFjNGVmLCAweGRkNWQxOSwgMHg1YjExZTIsIDB4YzQ2ZWY1LCAweDQyMjIwZSwgMHg0ZWJiZjgsIDB4YzhmNzAzLCAweDNmOTY0ZCwgMHhiOWRhYjYsIDB4YjU0MzQwLCAweDMzMGZiYiwgMHhhYzcwYWMsIDB4MmEzYzU3LCAweDI2YTVhMSwgMHhhMGU5NWEsIDB4OWUxNzc0LCAweDE4NWI4ZiwgMHgxNGMyNzksIDB4OTI4ZTgyLCAweDBkZjE5NSwgMHg4YmJkNmUsIDB4ODcyNDk4LCAweDAxNjg2MywgMHhmYWQ4YzQsIDB4N2M5NDNmLCAweDcwMGRjOSwgMHhmNjQxMzIsIDB4NjkzZTI1LCAweGVmNzJkZSwgMHhlM2ViMjgsIDB4NjVhN2QzLCAweDViNTlmZCwgMHhkZDE1MDYsIDB4ZDE4Y2YwLCAweDU3YzAwYiwgMHhjOGJmMWMsIDB4NGVmM2U3LCAweDQyNmExMSwgMHhjNDI2ZWEsIDB4MmFlNDc2LCAweGFjYTg4ZCwgMHhhMDMxN2IsIDB4MjY3ZDgwLCAweGI5MDI5NywgMHgzZjRlNmMsIDB4MzNkNzlhLCAweGI1OWI2MSwgMHg4YjY1NGYsIDB4MGQyOWI0LCAweDAxYjA0MiwgMHg4N2ZjYjksIDB4MTg4M2FlLCAweDllY2Y1NSwgMHg5MjU2YTMsIDB4MTQxYTU4LCAweGVmYWFmZiwgMHg2OWU2MDQsIDB4NjU3ZmYyLCAweGUzMzMwOSwgMHg3YzRjMWUsIDB4ZmEwMGU1LCAweGY2OTkxMywgMHg3MGQ1ZTgsIDB4NGUyYmM2LCAweGM4NjczZCwgMHhjNGZlY2IsIDB4NDJiMjMwLCAweGRkY2QyNywgMHg1YjgxZGMsIDB4NTcxODJhLCAweGQxNTRkMSwgMHgyNjM1OWYsIDB4YTA3OTY0LCAweGFjZTA5MiwgMHgyYWFjNjksIDB4YjVkMzdlLCAweDMzOWY4NSwgMHgzZjA2NzMsIDB4Yjk0YTg4LCAweDg3YjRhNiwgMHgwMWY4NWQsIDB4MGQ2MWFiLCAweDhiMmQ1MCwgMHgxNDUyNDcsIDB4OTIxZWJjLCAweDllODc0YSwgMHgxOGNiYjEsIDB4ZTM3YjE2LCAweDY1MzdlZCwgMHg2OWFlMWIsIDB4ZWZlMmUwLCAweDcwOWRmNywgMHhmNmQxMGMsIDB4ZmE0OGZhLCAweDdjMDQwMSwgMHg0MmZhMmYsIDB4YzRiNmQ0LCAweGM4MmYyMiwgMHg0ZTYzZDksIDB4ZDExY2NlLCAweDU3NTAzNSwgMHg1YmM5YzMsIDB4ZGQ4NTM4XTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTI0JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHR5cGVvZiBwcmV2aW91cyAhPT0gJ3VuZGVmaW5lZCcgPyB+fnByZXZpb3VzIDogMHhiNzA0Y2U7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gKFRBQkxFWyhjcmMgPj4gMTYgXiBieXRlKSAmIDB4ZmZdIF4gY3JjIDw8IDgpICYgMHhmZmZmZmY7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4zLjUuMEBjcmMvbGliL2NyYzI0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBHZW5lcmF0ZWQgYnkgYC4vcHljcmMucHkgLS1hbGdvcml0aG09dGFibGUtZHJpdmVuIC0tbW9kZWw9Y3JjLTMyIC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAwMDAwLCAweDc3MDczMDk2LCAweGVlMGU2MTJjLCAweDk5MDk1MWJhLCAweDA3NmRjNDE5LCAweDcwNmFmNDhmLCAweGU5NjNhNTM1LCAweDllNjQ5NWEzLCAweDBlZGI4ODMyLCAweDc5ZGNiOGE0LCAweGUwZDVlOTFlLCAweDk3ZDJkOTg4LCAweDA5YjY0YzJiLCAweDdlYjE3Y2JkLCAweGU3YjgyZDA3LCAweDkwYmYxZDkxLCAweDFkYjcxMDY0LCAweDZhYjAyMGYyLCAweGYzYjk3MTQ4LCAweDg0YmU0MWRlLCAweDFhZGFkNDdkLCAweDZkZGRlNGViLCAweGY0ZDRiNTUxLCAweDgzZDM4NWM3LCAweDEzNmM5ODU2LCAweDY0NmJhOGMwLCAweGZkNjJmOTdhLCAweDhhNjVjOWVjLCAweDE0MDE1YzRmLCAweDYzMDY2Y2Q5LCAweGZhMGYzZDYzLCAweDhkMDgwZGY1LCAweDNiNmUyMGM4LCAweDRjNjkxMDVlLCAweGQ1NjA0MWU0LCAweGEyNjc3MTcyLCAweDNjMDNlNGQxLCAweDRiMDRkNDQ3LCAweGQyMGQ4NWZkLCAweGE1MGFiNTZiLCAweDM1YjVhOGZhLCAweDQyYjI5ODZjLCAweGRiYmJjOWQ2LCAweGFjYmNmOTQwLCAweDMyZDg2Y2UzLCAweDQ1ZGY1Yzc1LCAweGRjZDYwZGNmLCAweGFiZDEzZDU5LCAweDI2ZDkzMGFjLCAweDUxZGUwMDNhLCAweGM4ZDc1MTgwLCAweGJmZDA2MTE2LCAweDIxYjRmNGI1LCAweDU2YjNjNDIzLCAweGNmYmE5NTk5LCAweGI4YmRhNTBmLCAweDI4MDJiODllLCAweDVmMDU4ODA4LCAweGM2MGNkOWIyLCAweGIxMGJlOTI0LCAweDJmNmY3Yzg3LCAweDU4Njg0YzExLCAweGMxNjExZGFiLCAweGI2NjYyZDNkLCAweDc2ZGM0MTkwLCAweDAxZGI3MTA2LCAweDk4ZDIyMGJjLCAweGVmZDUxMDJhLCAweDcxYjE4NTg5LCAweDA2YjZiNTFmLCAweDlmYmZlNGE1LCAweGU4YjhkNDMzLCAweDc4MDdjOWEyLCAweDBmMDBmOTM0LCAweDk2MDlhODhlLCAweGUxMGU5ODE4LCAweDdmNmEwZGJiLCAweDA4NmQzZDJkLCAweDkxNjQ2Yzk3LCAweGU2NjM1YzAxLCAweDZiNmI1MWY0LCAweDFjNmM2MTYyLCAweDg1NjUzMGQ4LCAweGYyNjIwMDRlLCAweDZjMDY5NWVkLCAweDFiMDFhNTdiLCAweDgyMDhmNGMxLCAweGY1MGZjNDU3LCAweDY1YjBkOWM2LCAweDEyYjdlOTUwLCAweDhiYmViOGVhLCAweGZjYjk4ODdjLCAweDYyZGQxZGRmLCAweDE1ZGEyZDQ5LCAweDhjZDM3Y2YzLCAweGZiZDQ0YzY1LCAweDRkYjI2MTU4LCAweDNhYjU1MWNlLCAweGEzYmMwMDc0LCAweGQ0YmIzMGUyLCAweDRhZGZhNTQxLCAweDNkZDg5NWQ3LCAweGE0ZDFjNDZkLCAweGQzZDZmNGZiLCAweDQzNjllOTZhLCAweDM0NmVkOWZjLCAweGFkNjc4ODQ2LCAweGRhNjBiOGQwLCAweDQ0MDQyZDczLCAweDMzMDMxZGU1LCAweGFhMGE0YzVmLCAweGRkMGQ3Y2M5LCAweDUwMDU3MTNjLCAweDI3MDI0MWFhLCAweGJlMGIxMDEwLCAweGM5MGMyMDg2LCAweDU3NjhiNTI1LCAweDIwNmY4NWIzLCAweGI5NjZkNDA5LCAweGNlNjFlNDlmLCAweDVlZGVmOTBlLCAweDI5ZDljOTk4LCAweGIwZDA5ODIyLCAweGM3ZDdhOGI0LCAweDU5YjMzZDE3LCAweDJlYjQwZDgxLCAweGI3YmQ1YzNiLCAweGMwYmE2Y2FkLCAweGVkYjg4MzIwLCAweDlhYmZiM2I2LCAweDAzYjZlMjBjLCAweDc0YjFkMjlhLCAweGVhZDU0NzM5LCAweDlkZDI3N2FmLCAweDA0ZGIyNjE1LCAweDczZGMxNjgzLCAweGUzNjMwYjEyLCAweDk0NjQzYjg0LCAweDBkNmQ2YTNlLCAweDdhNmE1YWE4LCAweGU0MGVjZjBiLCAweDkzMDlmZjlkLCAweDBhMDBhZTI3LCAweDdkMDc5ZWIxLCAweGYwMGY5MzQ0LCAweDg3MDhhM2QyLCAweDFlMDFmMjY4LCAweDY5MDZjMmZlLCAweGY3NjI1NzVkLCAweDgwNjU2N2NiLCAweDE5NmMzNjcxLCAweDZlNmIwNmU3LCAweGZlZDQxYjc2LCAweDg5ZDMyYmUwLCAweDEwZGE3YTVhLCAweDY3ZGQ0YWNjLCAweGY5YjlkZjZmLCAweDhlYmVlZmY5LCAweDE3YjdiZTQzLCAweDYwYjA4ZWQ1LCAweGQ2ZDZhM2U4LCAweGExZDE5MzdlLCAweDM4ZDhjMmM0LCAweDRmZGZmMjUyLCAweGQxYmI2N2YxLCAweGE2YmM1NzY3LCAweDNmYjUwNmRkLCAweDQ4YjIzNjRiLCAweGQ4MGQyYmRhLCAweGFmMGExYjRjLCAweDM2MDM0YWY2LCAweDQxMDQ3YTYwLCAweGRmNjBlZmMzLCAweGE4NjdkZjU1LCAweDMxNmU4ZWVmLCAweDQ2NjliZTc5LCAweGNiNjFiMzhjLCAweGJjNjY4MzFhLCAweDI1NmZkMmEwLCAweDUyNjhlMjM2LCAweGNjMGM3Nzk1LCAweGJiMGI0NzAzLCAweDIyMDIxNmI5LCAweDU1MDUyNjJmLCAweGM1YmEzYmJlLCAweGIyYmQwYjI4LCAweDJiYjQ1YTkyLCAweDVjYjM2YTA0LCAweGMyZDdmZmE3LCAweGI1ZDBjZjMxLCAweDJjZDk5ZThiLCAweDViZGVhZTFkLCAweDliNjRjMmIwLCAweGVjNjNmMjI2LCAweDc1NmFhMzljLCAweDAyNmQ5MzBhLCAweDljMDkwNmE5LCAweGViMGUzNjNmLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLCAweDk1YmY0YTgyLCAweGUyYjg3YTE0LCAweDdiYjEyYmFlLCAweDBjYjYxYjM4LCAweDkyZDI4ZTliLCAweGU1ZDViZTBkLCAweDdjZGNlZmI3LCAweDBiZGJkZjIxLCAweDg2ZDNkMmQ0LCAweGYxZDRlMjQyLCAweDY4ZGRiM2Y4LCAweDFmZGE4MzZlLCAweDgxYmUxNmNkLCAweGY2YjkyNjViLCAweDZmYjA3N2UxLCAweDE4Yjc0Nzc3LCAweDg4MDg1YWU2LCAweGZmMGY2YTcwLCAweDY2MDYzYmNhLCAweDExMDEwYjVjLCAweDhmNjU5ZWZmLCAweGY4NjJhZTY5LCAweDYxNmJmZmQzLCAweDE2NmNjZjQ1LCAweGEwMGFlMjc4LCAweGQ3MGRkMmVlLCAweDRlMDQ4MzU0LCAweDM5MDNiM2MyLCAweGE3NjcyNjYxLCAweGQwNjAxNmY3LCAweDQ5Njk0NzRkLCAweDNlNmU3N2RiLCAweGFlZDE2YTRhLCAweGQ5ZDY1YWRjLCAweDQwZGYwYjY2LCAweDM3ZDgzYmYwLCAweGE5YmNhZTUzLCAweGRlYmI5ZWM1LCAweDQ3YjJjZjdmLCAweDMwYjVmZmU5LCAweGJkYmRmMjFjLCAweGNhYmFjMjhhLCAweDUzYjM5MzMwLCAweDI0YjRhM2E2LCAweGJhZDAzNjA1LCAweGNkZDcwNjkzLCAweDU0ZGU1NzI5LCAweDIzZDk2N2JmLCAweGIzNjY3YTJlLCAweGM0NjE0YWI4LCAweDVkNjgxYjAyLCAweDJhNmYyYjk0LCAweGI0MGJiZTM3LCAweGMzMGM4ZWExLCAweDVhMDVkZjFiLCAweDJkMDJlZjhkXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTMyJywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHByZXZpb3VzID09PSAwID8gMCA6IH5+cHJldmlvdXMgXiAtMTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+Pj4gODtcbiAgfVxuXG4gIHJldHVybiBjcmMgXiAtMTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMy41LjBAY3JjL2xpYi9jcmMzMi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWphbSAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwMDAwMCwgMHg3NzA3MzA5NiwgMHhlZTBlNjEyYywgMHg5OTA5NTFiYSwgMHgwNzZkYzQxOSwgMHg3MDZhZjQ4ZiwgMHhlOTYzYTUzNSwgMHg5ZTY0OTVhMywgMHgwZWRiODgzMiwgMHg3OWRjYjhhNCwgMHhlMGQ1ZTkxZSwgMHg5N2QyZDk4OCwgMHgwOWI2NGMyYiwgMHg3ZWIxN2NiZCwgMHhlN2I4MmQwNywgMHg5MGJmMWQ5MSwgMHgxZGI3MTA2NCwgMHg2YWIwMjBmMiwgMHhmM2I5NzE0OCwgMHg4NGJlNDFkZSwgMHgxYWRhZDQ3ZCwgMHg2ZGRkZTRlYiwgMHhmNGQ0YjU1MSwgMHg4M2QzODVjNywgMHgxMzZjOTg1NiwgMHg2NDZiYThjMCwgMHhmZDYyZjk3YSwgMHg4YTY1YzllYywgMHgxNDAxNWM0ZiwgMHg2MzA2NmNkOSwgMHhmYTBmM2Q2MywgMHg4ZDA4MGRmNSwgMHgzYjZlMjBjOCwgMHg0YzY5MTA1ZSwgMHhkNTYwNDFlNCwgMHhhMjY3NzE3MiwgMHgzYzAzZTRkMSwgMHg0YjA0ZDQ0NywgMHhkMjBkODVmZCwgMHhhNTBhYjU2YiwgMHgzNWI1YThmYSwgMHg0MmIyOTg2YywgMHhkYmJiYzlkNiwgMHhhY2JjZjk0MCwgMHgzMmQ4NmNlMywgMHg0NWRmNWM3NSwgMHhkY2Q2MGRjZiwgMHhhYmQxM2Q1OSwgMHgyNmQ5MzBhYywgMHg1MWRlMDAzYSwgMHhjOGQ3NTE4MCwgMHhiZmQwNjExNiwgMHgyMWI0ZjRiNSwgMHg1NmIzYzQyMywgMHhjZmJhOTU5OSwgMHhiOGJkYTUwZiwgMHgyODAyYjg5ZSwgMHg1ZjA1ODgwOCwgMHhjNjBjZDliMiwgMHhiMTBiZTkyNCwgMHgyZjZmN2M4NywgMHg1ODY4NGMxMSwgMHhjMTYxMWRhYiwgMHhiNjY2MmQzZCwgMHg3NmRjNDE5MCwgMHgwMWRiNzEwNiwgMHg5OGQyMjBiYywgMHhlZmQ1MTAyYSwgMHg3MWIxODU4OSwgMHgwNmI2YjUxZiwgMHg5ZmJmZTRhNSwgMHhlOGI4ZDQzMywgMHg3ODA3YzlhMiwgMHgwZjAwZjkzNCwgMHg5NjA5YTg4ZSwgMHhlMTBlOTgxOCwgMHg3ZjZhMGRiYiwgMHgwODZkM2QyZCwgMHg5MTY0NmM5NywgMHhlNjYzNWMwMSwgMHg2YjZiNTFmNCwgMHgxYzZjNjE2MiwgMHg4NTY1MzBkOCwgMHhmMjYyMDA0ZSwgMHg2YzA2OTVlZCwgMHgxYjAxYTU3YiwgMHg4MjA4ZjRjMSwgMHhmNTBmYzQ1NywgMHg2NWIwZDljNiwgMHgxMmI3ZTk1MCwgMHg4YmJlYjhlYSwgMHhmY2I5ODg3YywgMHg2MmRkMWRkZiwgMHgxNWRhMmQ0OSwgMHg4Y2QzN2NmMywgMHhmYmQ0NGM2NSwgMHg0ZGIyNjE1OCwgMHgzYWI1NTFjZSwgMHhhM2JjMDA3NCwgMHhkNGJiMzBlMiwgMHg0YWRmYTU0MSwgMHgzZGQ4OTVkNywgMHhhNGQxYzQ2ZCwgMHhkM2Q2ZjRmYiwgMHg0MzY5ZTk2YSwgMHgzNDZlZDlmYywgMHhhZDY3ODg0NiwgMHhkYTYwYjhkMCwgMHg0NDA0MmQ3MywgMHgzMzAzMWRlNSwgMHhhYTBhNGM1ZiwgMHhkZDBkN2NjOSwgMHg1MDA1NzEzYywgMHgyNzAyNDFhYSwgMHhiZTBiMTAxMCwgMHhjOTBjMjA4NiwgMHg1NzY4YjUyNSwgMHgyMDZmODViMywgMHhiOTY2ZDQwOSwgMHhjZTYxZTQ5ZiwgMHg1ZWRlZjkwZSwgMHgyOWQ5Yzk5OCwgMHhiMGQwOTgyMiwgMHhjN2Q3YThiNCwgMHg1OWIzM2QxNywgMHgyZWI0MGQ4MSwgMHhiN2JkNWMzYiwgMHhjMGJhNmNhZCwgMHhlZGI4ODMyMCwgMHg5YWJmYjNiNiwgMHgwM2I2ZTIwYywgMHg3NGIxZDI5YSwgMHhlYWQ1NDczOSwgMHg5ZGQyNzdhZiwgMHgwNGRiMjYxNSwgMHg3M2RjMTY4MywgMHhlMzYzMGIxMiwgMHg5NDY0M2I4NCwgMHgwZDZkNmEzZSwgMHg3YTZhNWFhOCwgMHhlNDBlY2YwYiwgMHg5MzA5ZmY5ZCwgMHgwYTAwYWUyNywgMHg3ZDA3OWViMSwgMHhmMDBmOTM0NCwgMHg4NzA4YTNkMiwgMHgxZTAxZjI2OCwgMHg2OTA2YzJmZSwgMHhmNzYyNTc1ZCwgMHg4MDY1NjdjYiwgMHgxOTZjMzY3MSwgMHg2ZTZiMDZlNywgMHhmZWQ0MWI3NiwgMHg4OWQzMmJlMCwgMHgxMGRhN2E1YSwgMHg2N2RkNGFjYywgMHhmOWI5ZGY2ZiwgMHg4ZWJlZWZmOSwgMHgxN2I3YmU0MywgMHg2MGIwOGVkNSwgMHhkNmQ2YTNlOCwgMHhhMWQxOTM3ZSwgMHgzOGQ4YzJjNCwgMHg0ZmRmZjI1MiwgMHhkMWJiNjdmMSwgMHhhNmJjNTc2NywgMHgzZmI1MDZkZCwgMHg0OGIyMzY0YiwgMHhkODBkMmJkYSwgMHhhZjBhMWI0YywgMHgzNjAzNGFmNiwgMHg0MTA0N2E2MCwgMHhkZjYwZWZjMywgMHhhODY3ZGY1NSwgMHgzMTZlOGVlZiwgMHg0NjY5YmU3OSwgMHhjYjYxYjM4YywgMHhiYzY2ODMxYSwgMHgyNTZmZDJhMCwgMHg1MjY4ZTIzNiwgMHhjYzBjNzc5NSwgMHhiYjBiNDcwMywgMHgyMjAyMTZiOSwgMHg1NTA1MjYyZiwgMHhjNWJhM2JiZSwgMHhiMmJkMGIyOCwgMHgyYmI0NWE5MiwgMHg1Y2IzNmEwNCwgMHhjMmQ3ZmZhNywgMHhiNWQwY2YzMSwgMHgyY2Q5OWU4YiwgMHg1YmRlYWUxZCwgMHg5YjY0YzJiMCwgMHhlYzYzZjIyNiwgMHg3NTZhYTM5YywgMHgwMjZkOTMwYSwgMHg5YzA5MDZhOSwgMHhlYjBlMzYzZiwgMHg3MjA3Njc4NSwgMHgwNTAwNTcxMywgMHg5NWJmNGE4MiwgMHhlMmI4N2ExNCwgMHg3YmIxMmJhZSwgMHgwY2I2MWIzOCwgMHg5MmQyOGU5YiwgMHhlNWQ1YmUwZCwgMHg3Y2RjZWZiNywgMHgwYmRiZGYyMSwgMHg4NmQzZDJkNCwgMHhmMWQ0ZTI0MiwgMHg2OGRkYjNmOCwgMHgxZmRhODM2ZSwgMHg4MWJlMTZjZCwgMHhmNmI5MjY1YiwgMHg2ZmIwNzdlMSwgMHgxOGI3NDc3NywgMHg4ODA4NWFlNiwgMHhmZjBmNmE3MCwgMHg2NjA2M2JjYSwgMHgxMTAxMGI1YywgMHg4ZjY1OWVmZiwgMHhmODYyYWU2OSwgMHg2MTZiZmZkMywgMHgxNjZjY2Y0NSwgMHhhMDBhZTI3OCwgMHhkNzBkZDJlZSwgMHg0ZTA0ODM1NCwgMHgzOTAzYjNjMiwgMHhhNzY3MjY2MSwgMHhkMDYwMTZmNywgMHg0OTY5NDc0ZCwgMHgzZTZlNzdkYiwgMHhhZWQxNmE0YSwgMHhkOWQ2NWFkYywgMHg0MGRmMGI2NiwgMHgzN2Q4M2JmMCwgMHhhOWJjYWU1MywgMHhkZWJiOWVjNSwgMHg0N2IyY2Y3ZiwgMHgzMGI1ZmZlOSwgMHhiZGJkZjIxYywgMHhjYWJhYzI4YSwgMHg1M2IzOTMzMCwgMHgyNGI0YTNhNiwgMHhiYWQwMzYwNSwgMHhjZGQ3MDY5MywgMHg1NGRlNTcyOSwgMHgyM2Q5NjdiZiwgMHhiMzY2N2EyZSwgMHhjNDYxNGFiOCwgMHg1ZDY4MWIwMiwgMHgyYTZmMmI5NCwgMHhiNDBiYmUzNywgMHhjMzBjOGVhMSwgMHg1YTA1ZGYxYiwgMHgyZDAyZWY4ZF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2phbScsIGZ1bmN0aW9uIChidWYpIHtcbiAgdmFyIHByZXZpb3VzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAtMTtcblxuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gcHJldmlvdXMgPT09IDAgPyAwIDogfn5wcmV2aW91cztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+Pj4gODtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjMuNS4wQGNyYy9saWIvY3JjamFtLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNzZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogdWlkLXNhZmVcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTUtMjAxNyBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHJhbmRvbUJ5dGVzID0gcmVxdWlyZSgncmFuZG9tLWJ5dGVzJylcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgRVFVQUxfRU5EX1JFR0VYUCA9IC89KyQvXG52YXIgUExVU19HTE9CQUxfUkVHRVhQID0gL1xcKy9nXG52YXIgU0xBU0hfR0xPQkFMX1JFR0VYUCA9IC9cXC8vZ1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdWlkXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gdWlkU3luY1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBJRC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHVpZCAobGVuZ3RoLCBjYWxsYmFjaykge1xuICAvLyB2YWxpZGF0ZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uLCBpZiBwcm92aWRlZFxuICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICB9XG5cbiAgLy8gcmVxdWlyZSB0aGUgY2FsbGJhY2sgd2l0aG91dCBwcm9taXNlc1xuICBpZiAoIWNhbGxiYWNrICYmICFnbG9iYWwuUHJvbWlzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGNhbGxiYWNrIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIC8vIGNsYXNzaWMgY2FsbGJhY2sgc3R5bGVcbiAgICByZXR1cm4gZ2VuZXJhdGVVaWQobGVuZ3RoLCBjYWxsYmFjaylcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvciAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZ2VuZXJhdGVVaWQobGVuZ3RoLCBmdW5jdGlvbiBvblVpZCAoZXJyLCBzdHIpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgcmVzb2x2ZShzdHIpXG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgSUQgc3luYy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdWlkU3luYyAobGVuZ3RoKSB7XG4gIHJldHVybiB0b1N0cmluZyhyYW5kb21CeXRlcy5zeW5jKGxlbmd0aCkpXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVWlkIChsZW5ndGgsIGNhbGxiYWNrKSB7XG4gIHJhbmRvbUJ5dGVzKGxlbmd0aCwgZnVuY3Rpb24gKGVyciwgYnVmKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBjYWxsYmFjayhudWxsLCB0b1N0cmluZyhidWYpKVxuICB9KVxufVxuXG4vKipcbiAqIENoYW5nZSBhIEJ1ZmZlciBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9TdHJpbmcgKGJ1Zikge1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIC5yZXBsYWNlKEVRVUFMX0VORF9SRUdFWFAsICcnKVxuICAgIC5yZXBsYWNlKFBMVVNfR0xPQkFMX1JFR0VYUCwgJy0nKVxuICAgIC5yZXBsYWNlKFNMQVNIX0dMT0JBTF9SRUdFWFAsICdfJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMi4xLjVAdWlkLXNhZmUvaW5kZXguanMiLCIvKiFcbiAqIHJhbmRvbS1ieXRlc1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBnZW5lcmF0ZUF0dGVtcHRzID0gY3J5cHRvLnJhbmRvbUJ5dGVzID09PSBjcnlwdG8ucHNldWRvUmFuZG9tQnl0ZXMgPyAxIDogM1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZXNcbm1vZHVsZS5leHBvcnRzLnN5bmMgPSByYW5kb21CeXRlc1N5bmNcblxuLyoqXG4gKiBHZW5lcmF0ZXMgc3Ryb25nIHBzZXVkby1yYW5kb20gYnl0ZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZXMoc2l6ZSwgY2FsbGJhY2spIHtcbiAgLy8gdmFsaWRhdGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiwgaWYgcHJvdmlkZWRcbiAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIC8vIHJlcXVpcmUgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcHJvbWlzZXNcbiAgaWYgKCFjYWxsYmFjayAmJiAhZ2xvYmFsLlByb21pc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBjYWxsYmFjayBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICAvLyBjbGFzc2ljIGNhbGxiYWNrIHN0eWxlXG4gICAgcmV0dXJuIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSwgZ2VuZXJhdGVBdHRlbXB0cywgY2FsbGJhY2spXG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZ2VuZXJhdGVSYW5kb21CeXRlcyhzaXplLCBnZW5lcmF0ZUF0dGVtcHRzLCBmdW5jdGlvbiBvblJhbmRvbUJ5dGVzKGVyciwgc3RyKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIHJlc29sdmUoc3RyKVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHN0cm9uZyBwc2V1ZG8tcmFuZG9tIGJ5dGVzIHN5bmMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEByZXR1cm4ge0J1ZmZlcn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByYW5kb21CeXRlc1N5bmMoc2l6ZSkge1xuICB2YXIgZXJyID0gbnVsbFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZ2VuZXJhdGVBdHRlbXB0czsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgZXJyXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHN0cm9uZyBwc2V1ZG8tcmFuZG9tIGJ5dGVzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge251bWJlcn0gYXR0ZW1wdHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSwgYXR0ZW1wdHMsIGNhbGxiYWNrKSB7XG4gIGNyeXB0by5yYW5kb21CeXRlcyhzaXplLCBmdW5jdGlvbiBvblJhbmRvbUJ5dGVzKGVyciwgYnVmKSB7XG4gICAgaWYgKCFlcnIpIHJldHVybiBjYWxsYmFjayhudWxsLCBidWYpXG4gICAgaWYgKCEtLWF0dGVtcHRzKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIHNldFRpbWVvdXQoZ2VuZXJhdGVSYW5kb21CeXRlcy5iaW5kKG51bGwsIHNpemUsIGF0dGVtcHRzLCBjYWxsYmFjayksIDEwKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xLjAuMEByYW5kb20tYnl0ZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnZhciBpc1N0ZWFybSA9IHJlcXVpcmUoJ2lzc3RyZWFtJyk7XG52YXIgaXNDbGFzcyA9IHJlcXVpcmUoJ2lzLWNsYXNzJyk7XG5cbi8qKlxuICogRXhwb3NlIGFsbCBtZXRob2RzIGluIGNvcmUtdXRpbC1pc1xuICovXG5cbk9iamVjdC5rZXlzKHV0aWxzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgZXhwb3J0c1t0cmFuc2Zvcm0obmFtZSldID0gdXRpbHNbbmFtZV07XG59KTtcblxuLyoqXG4gKiBTdHJlYW0gZGV0ZWN0ZWQgYnkgaXNzdHJlYW1cbiAqL1xuXG5leHBvcnRzLnN0cmVhbSA9IGlzU3RlYXJtO1xuZXhwb3J0cy5yZWFkYWJsZVN0cmVhbSA9IGlzU3RlYXJtLmlzUmVhZGFibGU7XG5leHBvcnRzLndyaXRhYmxlU3RyZWFtID0gaXNTdGVhcm0uaXNXcml0YWJsZTtcbmV4cG9ydHMuZHVwbGV4U3RyZWFtID0gaXNTdGVhcm0uaXNEdXBsZXg7XG5cbi8qKlxuICogQ2xhc3MgZGV0ZWN0ZWQgYnkgaXMtY2xhc3NcbiAqL1xuIGV4cG9ydHMuY2xhc3MgPSBpc0NsYXNzO1xuXG4vKipcbiAqIEV4dGVuZCBtZXRob2RcbiAqL1xuXG5leHBvcnRzLmZpbml0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShvYmopO1xufTtcblxuZXhwb3J0cy5OYU4gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4ob2JqKTtcbn07XG5cbmV4cG9ydHMuZ2VuZXJhdG9yID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqXG4gICAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9iai5uZXh0XG4gICAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9iai50aHJvdztcbn07XG5cbmV4cG9ydHMuZ2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmpcbiAgICAmJiBvYmouY29uc3RydWN0b3JcbiAgICAmJiAnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBvYmouY29uc3RydWN0b3IubmFtZTtcbn07XG5cbmV4cG9ydHMuYXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9ialxuICAgICYmIG9iai5jb25zdHJ1Y3RvclxuICAgICYmICdBc3luY0Z1bmN0aW9uJyA9PT0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG59O1xuXG5leHBvcnRzLnByb21pc2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmpcbiAgICAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLnRoZW47XG59O1xuXG52YXIgTUFYX0lOVF8zMSA9IE1hdGgucG93KDIsIDMxKTtcblxuZXhwb3J0cy5pbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB1dGlscy5pc051bWJlcihvYmopXG4gICAgJiYgb2JqICUgMSA9PT0gMDtcbn07XG5cbmV4cG9ydHMuaW50MzIgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBleHBvcnRzLmludChvYmopXG4gICAgJiYgb2JqIDwgTUFYX0lOVF8zMVxuICAgICYmIG9iaiA+PSAtTUFYX0lOVF8zMTtcbn07XG5cbmV4cG9ydHMubG9uZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIGV4cG9ydHMuaW50KG9iailcbiAgICAmJiAob2JqID49IE1BWF9JTlRfMzEgfHwgb2JqIDwgLU1BWF9JTlRfMzEpO1xufTtcblxuZXhwb3J0cy5Mb25nID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gZXhwb3J0cy5vYmplY3Qob2JqKVxuICAgICYmIGV4cG9ydHMubnVtYmVyKG9iai5oaWdoKVxuICAgICYmIGV4cG9ydHMubnVtYmVyKG9iai5sb3cpO1xufTtcblxuZXhwb3J0cy5kb3VibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB1dGlscy5pc051bWJlcihvYmopXG4gICAgJiYgIWlzTmFOKG9iailcbiAgICAmJiBvYmogJSAxICE9PSAwO1xufTtcblxuLyoqXG4gKiBvdmVycmlkZSBjb3JlLXV0aWwtaXNcbiAqL1xuXG5leHBvcnRzLmRhdGUgPSBmdW5jdGlvbiBpc0RhdGUob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xufTtcblxuZXhwb3J0cy5yZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFJlZ0V4cDtcbn07XG5leHBvcnRzLnJlZ2V4cCA9IGV4cG9ydHMucmVnRXhwO1xuXG5leHBvcnRzLmVycm9yID0gZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yO1xufTtcblxuZXhwb3J0cy5hcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG59O1xuXG4vKipcbiAqIHRyYW5zZm9ybSBpc051bGwgdHlwZSB0byBudWxsXG4gKiBAcGFyYW0ge1t0eXBlXX0gbSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0obSkge1xuICB2YXIgbmFtZSA9IG0uc2xpY2UoMik7XG4gIG5hbWUgPSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICByZXR1cm4gbmFtZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMS4yLjBAaXMtdHlwZS1vZi9pbmRleC5qcyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuXG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBCdWZmZXIuaXNCdWZmZXI7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMS4wLjJAY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwidmFyIHN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cblxuZnVuY3Rpb24gaXNTdHJlYW0gKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2Ygc3RyZWFtLlN0cmVhbVxufVxuXG5cbmZ1bmN0aW9uIGlzUmVhZGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl9yZWFkID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5fcmVhZGFibGVTdGF0ZSA9PSAnb2JqZWN0J1xufVxuXG5cbmZ1bmN0aW9uIGlzV3JpdGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl93cml0ZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3dyaXRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc0R1cGxleCAob2JqKSB7XG4gIHJldHVybiBpc1JlYWRhYmxlKG9iaikgJiYgaXNXcml0YWJsZShvYmopXG59XG5cblxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICA9IGlzU3RyZWFtXG5tb2R1bGUuZXhwb3J0cy5pc1JlYWRhYmxlID0gaXNSZWFkYWJsZVxubW9kdWxlLmV4cG9ydHMuaXNXcml0YWJsZSA9IGlzV3JpdGFibGVcbm1vZHVsZS5leHBvcnRzLmlzRHVwbGV4ICAgPSBpc0R1cGxleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjEuMkBpc3N0cmVhbS9pc3N0cmVhbS5qcyIsIihmdW5jdGlvbihyb290KSB7XG4gIHZhciB0b1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuICBmdW5jdGlvbiBmbkJvZHkoZm4pIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChmbikucmVwbGFjZSgvXltee10qe1xccyovLCcnKS5yZXBsYWNlKC9cXHMqfVtefV0qJC8sJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHJldHVybiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAoL15jbGFzc1xccy8udGVzdCh0b1N0cmluZy5jYWxsKGZuKSkgfHxcbiAgICAgICAgICAgICAgKC9eLipjbGFzc0NhbGxDaGVja1xcKC8udGVzdChmbkJvZHkoZm4pKSkpIC8vIGJhYmVsLmpzXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNDbGFzcztcbiAgICB9XG4gICAgZXhwb3J0cy5pc0NsYXNzID0gaXNDbGFzcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQ2xhc3M7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5pc0NsYXNzID0gaXNDbGFzcztcbiAgfVxuXG59KSh0aGlzKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjAuNEBpcy1jbGFzcy9pcy1jbGFzcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=