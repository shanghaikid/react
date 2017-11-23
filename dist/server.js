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
    if (ctx.session.ok !== 1 && ctx.path !== '/login') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQxZWVmNWU4YmNiZDJlMDVhMWQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb290LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NlZWQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmVhdGVfYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2RlZmluZV9jcmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9saWIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbGliL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmM4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzhfMXdpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfY2NpdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMTZfbW9kYnVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X3htb2RlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxNl9rZXJtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjamFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aWQtc2FmZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmFuZG9tLWJ5dGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy10eXBlLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzc3RyZWFtL2lzc3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1jbGFzcy9pcy1jbGFzcy5qcyJdLCJuYW1lcyI6WyJwYWdlIiwiY3R4IiwiaGVhZGVyX3RwbCIsImJvZHlfdHBsIiwiZm9vdGVyX3RwbCIsImJvZHkiLCJ0aXRsZSIsImNoYXJzZXQiLCJjc3NIcmVmIiwic3RhcnRUaW1lIiwiTlNfUEVSX1NFQyIsImRpZmYiLCJwcm9jZXNzIiwiaHJ0aW1lIiwiY29uc29sZSIsImluZm8iLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsIndzcyIsIlNlcnZlciIsInBvcnQiLCJrZXlzIiwiQ09ORklHIiwia2V5IiwibWF4QWdlIiwib3ZlcndyaXRlIiwiaHR0cE9ubHkiLCJzaWduZWQiLCJyb2xsaW5nIiwidXNlIiwibmV4dCIsInNlc3Npb24iLCJvayIsInBhdGgiLCJyZWRpcmVjdCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIiwib24iLCJjb25uZWN0aW9uIiwid3MiLCJpbmNvbWluZyIsIm1lc3NhZ2UiLCJsb2ciLCJzZW5kIiwicm91dGVyIiwiZ2V0Iiwic3NlIiwiZGF0YU9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHJlYW0iLCJ0eXBlIiwic2V0IiwiY2xvc2UiLCJyZXMiLCJlbmQiLCJjbGVhckludGVydmFsIiwidXBkYXRlIiwicmVxIiwic2V0SW50ZXJ2YWwiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ2YWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ3cml0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIl9idWZmZXIiLCJyZXF1aXJlIiwiY3JlYXRlQnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFsbG9jIiwiYWxsb2NVbnNhZmUiLCJhbGxvY1Vuc2FmZVNsb3ciLCJ2YWwiLCJkZWZhdWx0IiwibW9kZWwiLCJjYWxjIiwiZm4iLCJidWYiLCJwcmV2aW91cyIsInVuc2lnbmVkIiwibW9kdWxlIiwiY3JlYXRlRGVidWciLCJkZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaHVtYW5pemUiLCJuYW1lcyIsInNraXBzIiwiZm9ybWF0dGVycyIsInByZXZUaW1lIiwic2VsZWN0Q29sb3IiLCJuYW1lc3BhY2UiLCJoYXNoIiwiaSIsImNoYXJDb2RlQXQiLCJjb2xvcnMiLCJhYnMiLCJsZW5ndGgiLCJzZWxmIiwiY3VyciIsIm1zIiwicHJldiIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsInVuc2hpZnQiLCJpbmRleCIsInJlcGxhY2UiLCJtYXRjaCIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJzcGxpY2UiLCJmb3JtYXRBcmdzIiwibG9nRm4iLCJiaW5kIiwiYXBwbHkiLCJ1c2VDb2xvcnMiLCJjb2xvciIsImluaXQiLCJuYW1lc3BhY2VzIiwic2F2ZSIsInNwbGl0IiwibGVuIiwicHVzaCIsIlJlZ0V4cCIsInN1YnN0ciIsIm5hbWUiLCJ0ZXN0IiwiRXJyb3IiLCJzdGFjayIsImNyYyIsImNyYzMyIiwiZGVjb2RlIiwic3RyaW5nIiwidG9TdHJpbmciLCJqc29uIiwicGFyc2UiLCJlbmNvZGUiLCJzZXNzIiwiQ29udGV4dFNlc3Npb24iLCJ1dGlsIiwiYXNzZXJ0IiwidWlkIiwiaXMiLCJDT05URVhUX1NFU1NJT04iLCJTeW1ib2wiLCJfQ09OVEVYVF9TRVNTSU9OIiwib3B0cyIsIlR5cGVFcnJvciIsImZvcm1hdE9wdHMiLCJleHRlbmRDb250ZXh0IiwiY29udGV4dCIsInN0b3JlIiwiaW5pdEZyb21FeHRlcm5hbCIsImVyciIsImNvbW1pdCIsIm1heGFnZSIsImZ1bmN0aW9uIiwiZGVzdHJveSIsIkNvbnRleHRTdG9yZSIsImNsYXNzIiwicHJvdG90eXBlIiwiZ2VuaWQiLCJwcmVmaXgiLCJzeW5jIiwiZGVmaW5lUHJvcGVydGllcyIsImNvbmZpZ3VyYWJsZSIsImxvYWQiLCJzdG9yYWdlIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCIkMSIsImoiLCJ2IiwiYyIsImxhc3RDIiwiRnVuY3Rpb24iLCJyZW1vdmVJdGVtIiwiZSIsInIiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsInMiLCJtIiwiaCIsImQiLCJ5Iiwib3B0aW9ucyIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsInN0ciIsIlN0cmluZyIsImV4ZWMiLCJuIiwicGFyc2VGbG9hdCIsInVuZGVmaW5lZCIsInJvdW5kIiwicGx1cmFsIiwiZmxvb3IiLCJjZWlsIiwidHR5IiwiaW5zcGVjdE9wdHMiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJvYmoiLCJwcm9wIiwic3Vic3RyaW5nIiwiXyIsImsiLCJ0b1VwcGVyQ2FzZSIsIk51bWJlciIsImZkIiwiREVCVUdfRkQiLCJkZXByZWNhdGUiLCJzdGRvdXQiLCJzdGRlcnIiLCJjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtIiwiQm9vbGVhbiIsImlzYXR0eSIsIm8iLCJpbnNwZWN0IiwibWFwIiwidHJpbSIsImpvaW4iLCJPIiwidG9VVENTdHJpbmciLCJ0dHlfd3JhcCIsImJpbmRpbmciLCJndWVzc0hhbmRsZVR5cGUiLCJXcml0ZVN0cmVhbSIsIl90eXBlIiwiX2hhbmRsZSIsInVucmVmIiwiZnMiLCJTeW5jV3JpdGVTdHJlYW0iLCJhdXRvQ2xvc2UiLCJuZXQiLCJTb2NrZXQiLCJyZWFkYWJsZSIsIndyaXRhYmxlIiwicmVhZCIsIl9pc1N0ZGlvIiwiU2Vzc2lvbiIsIk9ORV9EQVkiLCJpbml0RnJvbUNvb2tpZSIsImNyZWF0ZSIsImV4dGVybmFsS2V5IiwiY29va2llcyIsInZhbGlkIiwicHJldkhhc2giLCJ0b0pTT04iLCJjb29raWUiLCJTeW50YXhFcnJvciIsImhlYWRlcnMiLCJyZXNwb25zZSIsIl9leHBpcmUiLCJub3ciLCJyZW1vdmUiLCJjaGFuZ2VkIiwiX3JlcXVpcmVTYXZlIiwiYmVmb3JlU2F2ZSIsIl9tYXhBZ2UiLCJfY3R4IiwiaXNOZXciLCJzZXNzaW9uT3B0aW9ucyIsImZvckVhY2giLCJjcmMxIiwiY3JjOCIsImNyYzgxd2lyZSIsImNyYzE2IiwiY3JjMTZjY2l0dCIsImNyYzE2bW9kYnVzIiwiY3JjMTZ4bW9kZW0iLCJjcmMxNmtlcm1pdCIsImNyYzI0IiwiY3JjamFtIiwiX2NyZWF0ZV9idWZmZXIiLCJfY3JlYXRlX2J1ZmZlcjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2RlZmluZV9jcmMiLCJfZGVmaW5lX2NyYzIiLCJfX2VzTW9kdWxlIiwiaXNCdWZmZXIiLCJhY2N1bSIsImJ5dGUiLCJUQUJMRSIsIkludDMyQXJyYXkiLCJjb2RlIiwicmFuZG9tQnl0ZXMiLCJFUVVBTF9FTkRfUkVHRVhQIiwiUExVU19HTE9CQUxfUkVHRVhQIiwiU0xBU0hfR0xPQkFMX1JFR0VYUCIsInVpZFN5bmMiLCJjYWxsYmFjayIsImdsb2JhbCIsIlByb21pc2UiLCJnZW5lcmF0ZVVpZCIsImV4ZWN1dG9yIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uVWlkIiwiY3J5cHRvIiwiZ2VuZXJhdGVBdHRlbXB0cyIsInBzZXVkb1JhbmRvbUJ5dGVzIiwicmFuZG9tQnl0ZXNTeW5jIiwic2l6ZSIsImdlbmVyYXRlUmFuZG9tQnl0ZXMiLCJvblJhbmRvbUJ5dGVzIiwiYXR0ZW1wdHMiLCJzZXRUaW1lb3V0IiwidXRpbHMiLCJpc1N0ZWFybSIsImlzQ2xhc3MiLCJ0cmFuc2Zvcm0iLCJyZWFkYWJsZVN0cmVhbSIsImlzUmVhZGFibGUiLCJ3cml0YWJsZVN0cmVhbSIsImlzV3JpdGFibGUiLCJkdXBsZXhTdHJlYW0iLCJpc0R1cGxleCIsImZpbml0ZSIsImlzRmluaXRlIiwiTmFOIiwiZ2VuZXJhdG9yIiwidGhyb3ciLCJnZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwiYXN5bmNGdW5jdGlvbiIsInByb21pc2UiLCJ0aGVuIiwiTUFYX0lOVF8zMSIsInBvdyIsImludCIsImlzTnVtYmVyIiwiaW50MzIiLCJMb25nIiwib2JqZWN0IiwibnVtYmVyIiwiaGlnaCIsImxvdyIsImRvdWJsZSIsImRhdGUiLCJpc0RhdGUiLCJyZWdFeHAiLCJpc1JlZ0V4cCIsInJlZ2V4cCIsImVycm9yIiwiaXNFcnJvciIsImFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiYXJnIiwib2JqZWN0VG9TdHJpbmciLCJpc0Jvb2xlYW4iLCJpc051bGwiLCJpc051bGxPclVuZGVmaW5lZCIsImlzU3RyaW5nIiwiaXNTeW1ib2wiLCJpc1VuZGVmaW5lZCIsInJlIiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwiaXNQcmltaXRpdmUiLCJpc1N0cmVhbSIsIlN0cmVhbSIsIl9yZWFkIiwiX3JlYWRhYmxlU3RhdGUiLCJfd3JpdGUiLCJfd3JpdGFibGVTdGF0ZSIsInJvb3QiLCJmbkJvZHkiLCJkZWZpbmUiLCJhbWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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LFFBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxFQUFpRixNQUFqRixFQUF5RixNQUF6RixFQUFpRyxNQUFqRyxFQUF5RyxNQUF6RyxFQUFpSCxNQUFqSCxFQUF5SCxNQUF6SCxFQUFpSSxNQUFqSSxFQUF5SSxNQUF6SSxFQUFpSixNQUFqSixFQUF5SixNQUF6SixFQUFpSyxNQUFqSyxFQUF5SyxNQUF6SyxFQUFpTCxNQUFqTCxFQUF5TCxNQUF6TCxFQUFpTSxNQUFqTSxFQUF5TSxNQUF6TSxFQUFpTixNQUFqTixFQUF5TixNQUF6TixFQUFpTyxNQUFqTyxFQUF5TyxNQUF6TyxFQUFpUCxNQUFqUCxFQUF5UCxNQUF6UCxFQUFpUSxNQUFqUSxFQUF5USxNQUF6USxFQUFpUixNQUFqUixFQUF5UixNQUF6UixFQUFpUyxNQUFqUyxFQUF5UyxNQUF6UyxFQUFpVCxNQUFqVCxFQUF5VCxNQUF6VCxFQUFpVSxNQUFqVSxFQUF5VSxNQUF6VSxFQUFpVixNQUFqVixFQUF5VixNQUF6VixFQUFpVyxNQUFqVyxFQUF5VyxNQUF6VyxFQUFpWCxNQUFqWCxFQUF5WCxNQUF6WCxFQUFpWSxNQUFqWSxFQUF5WSxNQUF6WSxFQUFpWixNQUFqWixFQUF5WixNQUF6WixFQUFpYSxNQUFqYSxFQUF5YSxNQUF6YSxFQUFpYixNQUFqYixFQUF5YixNQUF6YixFQUFpYyxNQUFqYyxFQUF5YyxNQUF6YyxFQUFpZCxNQUFqZCxFQUF5ZCxNQUF6ZCxFQUFpZSxNQUFqZSxFQUF5ZSxNQUF6ZSxFQUFpZixNQUFqZixFQUF5ZixNQUF6ZixFQUFpZ0IsTUFBamdCLEVBQXlnQixNQUF6Z0IsRUFBaWhCLE1BQWpoQixFQUF5aEIsTUFBemhCLEVBQWlpQixNQUFqaUIsRUFBeWlCLE1BQXppQixFQUFpakIsTUFBampCLEVBQXlqQixNQUF6akIsRUFBaWtCLE1BQWprQixFQUF5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MlEsT0FBUixHQUFrQkEsT0FBbEI7QUFDRCxHQUxELE1BS08sSUFBSSxPQUFPMkQsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsT0FBT0MsR0FBM0MsRUFBZ0Q7QUFDckRELFdBQU8sRUFBUCxFQUFXLFlBQVc7QUFDcEIsYUFBTzNELE9BQVA7QUFDRCxLQUZEO0FBR0QsR0FKTSxNQUlBO0FBQ0x5RCxTQUFLekQsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7QUFFRixDQTNCRCxhIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE0MWVlZjVlOGJjYmQyZTA1YTFkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZhdWx0IHBhZ2UgdGVtcGFsYXRlXG5jb25zdCBwYWdlID0gKGN0eCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgJHtoZWFkZXJfdHBsKGN0eCl9XG4gICAgJHtib2R5X3RwbChjdHgpfVxuICAgICR7Zm9vdGVyX3RwbChjdHgpfVxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9pbmRleC5qc1wiPjwvc2NyaXB0PlxuPC9odG1sPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG5cbi8vIGJvZHkgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBib2R5X3RwbCA9ICh7Ym9keT1gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIn09e30pID0+IGA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiJHtjaGFyc2V0fVwiLz5cbiAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiL3B1YmxpYy9qcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvY29yZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2tvYS1zZXNzaW9uJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnO1xuaW1wb3J0IHNlZWQgZnJvbSAnLi9yb3V0ZXMvc2VlZCc7XG5pbXBvcnQgbG9naW4gZnJvbSAnLi9yb3V0ZXMvbG9naW4nO1xuXG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJ3dzJztcbmNvbnNvbGUuaW5mbygnRW52OicsIHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxuLy8gY3JlYXRlIGtvYSBzZXJ2ZXJcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTsgXG5jb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0LlNlcnZlcih7IHBvcnQ6IDgwODEgfSk7XG5cbmFwcC5rZXlzID0gWydzb21lIHNlY3JldCBodXJyJ107XG5jb25zdCBDT05GSUcgPSB7XG4gIGtleTogJ2tvYTpzZXNzJywgLyoqIChzdHJpbmcpIGNvb2tpZSBrZXkgKGRlZmF1bHQgaXMga29hOnNlc3MpICovXG4gIC8qKiAobnVtYmVyIHx8ICdzZXNzaW9uJykgbWF4QWdlIGluIG1zIChkZWZhdWx0IGlzIDEgZGF5cykgKi9cbiAgLyoqICdzZXNzaW9uJyB3aWxsIHJlc3VsdCBpbiBhIGNvb2tpZSB0aGF0IGV4cGlyZXMgd2hlbiBzZXNzaW9uL2Jyb3dzZXIgaXMgY2xvc2VkICovXG4gIC8qKiBXYXJuaW5nOiBJZiBhIHNlc3Npb24gY29va2llIGlzIHN0b2xlbiwgdGhpcyBjb29raWUgd2lsbCBuZXZlciBleHBpcmUgKi9cbiAgbWF4QWdlOiA4NjQwMDAwMCxcbiAgb3ZlcndyaXRlOiB0cnVlLCAvKiogKGJvb2xlYW4pIGNhbiBvdmVyd3JpdGUgb3Igbm90IChkZWZhdWx0IHRydWUpICovXG4gIGh0dHBPbmx5OiB0cnVlLCAvKiogKGJvb2xlYW4pIGh0dHBPbmx5IG9yIG5vdCAoZGVmYXVsdCB0cnVlKSAqL1xuICBzaWduZWQ6IHRydWUsIC8qKiAoYm9vbGVhbikgc2lnbmVkIG9yIG5vdCAoZGVmYXVsdCB0cnVlKSAqL1xuICByb2xsaW5nOiBmYWxzZSwgLyoqIChib29sZWFuKSBGb3JjZSBhIHNlc3Npb24gaWRlbnRpZmllciBjb29raWUgdG8gYmUgc2V0IG9uIGV2ZXJ5IHJlc3BvbnNlLiBUaGUgZXhwaXJhdGlvbiBpcyByZXNldCB0byB0aGUgb3JpZ2luYWwgbWF4QWdlLCByZXNldHRpbmcgdGhlIGV4cGlyYXRpb24gY291bnRkb3duLiBkZWZhdWx0IGlzIGZhbHNlICoqL1xufTtcblxuYXBwLnVzZShzZXNzaW9uKENPTkZJRywgYXBwKSk7XG5cbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2Jykge1xuICAgICAgICAgICAgY3R4LmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9KVxuICAgIC51c2UoYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgICAgICBpZiAoY3R4LnNlc3Npb24ub2sgIT09IDEgJiYgY3R4LnBhdGggIT09Jy9sb2dpbicpIHtcbiAgICAgICAgICAgIGN0eC5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5zZXNzaW9uLm9rID09PSAxICYmIGN0eC5wYXRoID09PScvbG9naW4nKSB7XG4gICAgICAgICAgICBjdHgucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKGxvZ2luLnJvdXRlcygpKVxuICAgIC51c2Uocm9vdC5yb3V0ZXMoKSlcbiAgICAudXNlKHNlZWQucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYmV0dGVyLXN0YXRpYzJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtYmV0dGVyLXN0YXRpYzJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7UGFzc1Rocm91Z2h9IGZyb20gJ3N0cmVhbSc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuY29uc3Qgc3NlID0gKGRhdGFPYmopID0+IHtcclxuICByZXR1cm4gYGRhdGE6ICR7IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH1cXG5cXG5gXHJcbn1cclxuXHJcbi8vIHJvb3Rcclxucm91dGVyLmdldCgnL3NlZWQnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcclxuXHJcbiAgICBjdHgudHlwZSA9ICd0ZXh0L2V2ZW50LXN0cmVhbTsgY2hhcnNldD11dGYtOCc7XHJcbiAgICBjdHguc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICBjdHguc2V0KCdDb25uZWN0aW9uJywgJ2tlZXAtYWxpdmUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgucmVxLm9uKCdjbG9zZScsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2ZpbmlzaCcsIGNsb3NlKTtcclxuICAgIGN0eC5yZXEub24oJ2Vycm9yJywgY2xvc2UpO1xyXG5cclxuICAgIGxldCB1cGRhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFPYmogPSB7XHJcbiAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdHJlYW0ud3JpdGUoc3NlKGRhdGFPYmopKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGN0eC5ib2R5ID0gc3RyZWFtO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvc2VlZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmVhbVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid3NcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcclxuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XHJcblxyXG4vLyBjcmVhdGUgcm91dGVyXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuLy8gcm9vdFxyXG5yb3V0ZXIuZ2V0KCcvbG9naW4nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblxyXG4gICAgY3R4LmJvZHkgPSAnbG9naW4nO1xyXG4gICAgY3R4LnNlc3Npb24ub2sgPSAxO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvbG9naW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJidWZmZXJcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgY3JlYXRlQnVmZmVyID0gX2J1ZmZlci5CdWZmZXIuZnJvbSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvYyAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPyBfYnVmZmVyLkJ1ZmZlci5mcm9tXG5cbi8vIHN1cHBvcnQgZm9yIE5vZGUgPCA1LjEwXG46IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBfYnVmZmVyLkJ1ZmZlcih2YWwpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnVmZmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyZWF0ZV9idWZmZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1vZGVsLCBjYWxjKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKGJ1ZiwgcHJldmlvdXMpIHtcbiAgICByZXR1cm4gY2FsYyhidWYsIHByZXZpb3VzKSA+Pj4gMDtcbiAgfTtcbiAgZm4uc2lnbmVkID0gY2FsYztcbiAgZm4udW5zaWduZWQgPSBmbjtcbiAgZm4ubW9kZWwgPSBtb2RlbDtcblxuICByZXR1cm4gZm47XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2RlZmluZV9jcmMuanMiLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JjID0gcmVxdWlyZSgnY3JjJykuY3JjMzI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBEZWNvZGUgdGhlIGJhc2U2NCBjb29raWUgdmFsdWUgdG8gYW4gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGRlY29kZShzdHJpbmcpIHtcbiAgICBjb25zdCBib2R5ID0gbmV3IEJ1ZmZlcihzdHJpbmcsICdiYXNlNjQnKS50b1N0cmluZygndXRmOCcpO1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgIHJldHVybiBqc29uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbmNvZGUgYW4gb2JqZWN0IGludG8gYSBiYXNlNjQtZW5jb2RlZCBKU09OIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGJvZHlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZW5jb2RlKGJvZHkpIHtcbiAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYm9keSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9LFxuXG4gIGhhc2goc2Vzcykge1xuICAgIHJldHVybiBjcmMoSlNPTi5zdHJpbmdpZnkoc2VzcykpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9saWIvdXRpbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdrb2Etc2Vzc2lvbicpO1xuY29uc3QgQ29udGV4dFNlc3Npb24gPSByZXF1aXJlKCcuL2xpYi9jb250ZXh0Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi9saWIvdXRpbCcpO1xuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCB1aWQgPSByZXF1aXJlKCd1aWQtc2FmZScpO1xuY29uc3QgaXMgPSByZXF1aXJlKCdpcy10eXBlLW9mJyk7XG5cbmNvbnN0IENPTlRFWFRfU0VTU0lPTiA9IFN5bWJvbCgnY29udGV4dCNjb250ZXh0U2Vzc2lvbicpO1xuY29uc3QgX0NPTlRFWFRfU0VTU0lPTiA9IFN5bWJvbCgnY29udGV4dCNfY29udGV4dFNlc3Npb24nKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlc3Npb24gbWlkZGxld2FyZSB3aXRoIGBvcHRzYDpcbiAqXG4gKiAtIGBrZXlgIHNlc3Npb24gY29va2llIG5hbWUgW1wia29hOnNlc3NcIl1cbiAqIC0gYWxsIG90aGVyIG9wdGlvbnMgYXJlIHBhc3NlZCBhcyBjb29raWUgb3B0aW9uc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAqIEBwYXJhbSB7QXBwbGljYXRpb259IGFwcCwga29hIGFwcGxpY2F0aW9uIGluc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cywgYXBwKSB7XG4gIC8vIHNlc3Npb24oYXBwWywgb3B0c10pXG4gIGlmIChvcHRzICYmIHR5cGVvZiBvcHRzLnVzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFsgYXBwLCBvcHRzIF0gPSBbIG9wdHMsIGFwcCBdO1xuICB9XG4gIC8vIGFwcCByZXF1aXJlZFxuICBpZiAoIWFwcCB8fCB0eXBlb2YgYXBwLnVzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FwcCBpbnN0YW5jZSByZXF1aXJlZDogYHNlc3Npb24ob3B0cywgYXBwKWAnKTtcbiAgfVxuXG4gIG9wdHMgPSBmb3JtYXRPcHRzKG9wdHMpO1xuICBleHRlbmRDb250ZXh0KGFwcC5jb250ZXh0LCBvcHRzKTtcblxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbihjdHgsIG5leHQpIHtcbiAgICBjb25zdCBzZXNzID0gY3R4W0NPTlRFWFRfU0VTU0lPTl07XG4gICAgaWYgKHNlc3Muc3RvcmUpIGF3YWl0IHNlc3MuaW5pdEZyb21FeHRlcm5hbCgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IHNlc3MuY29tbWl0KCk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBmb3JtYXQgYW5kIGNoZWNrIHNlc3Npb24gb3B0aW9uc1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzIHNlc3Npb24gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBuZXcgc2Vzc2lvbiBvcHRpb25zXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0T3B0cyhvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAvLyBrZXlcbiAgb3B0cy5rZXkgPSBvcHRzLmtleSB8fCAna29hOnNlc3MnO1xuXG4gIC8vIGJhY2stY29tcGF0IG1heGFnZVxuICBpZiAoISgnbWF4QWdlJyBpbiBvcHRzKSkgb3B0cy5tYXhBZ2UgPSBvcHRzLm1heGFnZTtcblxuICAvLyBkZWZhdWx0c1xuICBpZiAob3B0cy5vdmVyd3JpdGUgPT0gbnVsbCkgb3B0cy5vdmVyd3JpdGUgPSB0cnVlO1xuICBpZiAob3B0cy5odHRwT25seSA9PSBudWxsKSBvcHRzLmh0dHBPbmx5ID0gdHJ1ZTtcbiAgaWYgKG9wdHMuc2lnbmVkID09IG51bGwpIG9wdHMuc2lnbmVkID0gdHJ1ZTtcblxuICBkZWJ1Zygnc2Vzc2lvbiBvcHRpb25zICVqJywgb3B0cyk7XG5cbiAgLy8gc2V0dXAgZW5jb2RpbmcvZGVjb2RpbmdcbiAgaWYgKHR5cGVvZiBvcHRzLmVuY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMuZW5jb2RlID0gdXRpbC5lbmNvZGU7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRzLmRlY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdHMuZGVjb2RlID0gdXRpbC5kZWNvZGU7XG4gIH1cblxuICBjb25zdCBzdG9yZSA9IG9wdHMuc3RvcmU7XG4gIGlmIChzdG9yZSkge1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihzdG9yZS5nZXQpLCAnc3RvcmUuZ2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oc3RvcmUuc2V0KSwgJ3N0b3JlLnNldCBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKHN0b3JlLmRlc3Ryb3kpLCAnc3RvcmUuZGVzdHJveSBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBjb25zdCBDb250ZXh0U3RvcmUgPSBvcHRzLkNvbnRleHRTdG9yZTtcbiAgaWYgKENvbnRleHRTdG9yZSkge1xuICAgIGFzc2VydChpcy5jbGFzcyhDb250ZXh0U3RvcmUpLCAnQ29udGV4dFN0b3JlIG11c3QgYmUgYSBjbGFzcycpO1xuICAgIGFzc2VydChpcy5mdW5jdGlvbihDb250ZXh0U3RvcmUucHJvdG90eXBlLmdldCksICdDb250ZXh0U3RvcmUucHJvdG90eXBlLmdldCBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gICAgYXNzZXJ0KGlzLmZ1bmN0aW9uKENvbnRleHRTdG9yZS5wcm90b3R5cGUuc2V0KSwgJ0NvbnRleHRTdG9yZS5wcm90b3R5cGUuc2V0IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICBhc3NlcnQoaXMuZnVuY3Rpb24oQ29udGV4dFN0b3JlLnByb3RvdHlwZS5kZXN0cm95KSwgJ0NvbnRleHRTdG9yZS5wcm90b3R5cGUuZGVzdHJveSBtdXN0IGJlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAoIW9wdHMuZ2VuaWQpIHtcbiAgICBpZiAob3B0cy5wcmVmaXgpIG9wdHMuZ2VuaWQgPSAoKSA9PiBvcHRzLnByZWZpeCArIHVpZC5zeW5jKDI0KTtcbiAgICBlbHNlIG9wdHMuZ2VuaWQgPSAoKSA9PiB1aWQuc3luYygyNCk7XG4gIH1cblxuICByZXR1cm4gb3B0cztcbn1cblxuLyoqXG4gKiBleHRlbmQgY29udGV4dCBwcm90b3R5cGUsIGFkZCBzZXNzaW9uIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHQga29hJ3MgY29udGV4dCBwcm90b3R5cGVcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0cyBzZXNzaW9uIG9wdGlvbnNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBleHRlbmRDb250ZXh0KGNvbnRleHQsIG9wdHMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29udGV4dCwge1xuICAgIFtDT05URVhUX1NFU1NJT05dOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzW19DT05URVhUX1NFU1NJT05dKSByZXR1cm4gdGhpc1tfQ09OVEVYVF9TRVNTSU9OXTtcbiAgICAgICAgdGhpc1tfQ09OVEVYVF9TRVNTSU9OXSA9IG5ldyBDb250ZXh0U2Vzc2lvbih0aGlzLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbX0NPTlRFWFRfU0VTU0lPTl07XG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vzc2lvbjoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpc1tDT05URVhUX1NFU1NJT05dLmdldCgpO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgdGhpc1tDT05URVhUX1NFU1NJT05dLnNldCh2YWwpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHNlc3Npb25PcHRpb25zOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0NPTlRFWFRfU0VTU0lPTl0ub3B0cztcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vaW5kZXguanMiLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0dHkgPSByZXF1aXJlKCd0dHknKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbNiwgMiwgMywgNCwgNSwgMV07XG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIGRlZmF1bHQgYGluc3BlY3RPcHRzYCBvYmplY3QgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqICAgJCBERUJVR19DT0xPUlM9bm8gREVCVUdfREVQVEg9MTAgREVCVUdfU0hPV19ISURERU49ZW5hYmxlZCBub2RlIHNjcmlwdC5qc1xuICovXG5cbmV4cG9ydHMuaW5zcGVjdE9wdHMgPSBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAvLyBjYW1lbC1jYXNlXG4gIHZhciBwcm9wID0ga2V5XG4gICAgLnN1YnN0cmluZyg2KVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL18oW2Etel0pL2csIGZ1bmN0aW9uIChfLCBrKSB7IHJldHVybiBrLnRvVXBwZXJDYXNlKCkgfSk7XG5cbiAgLy8gY29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG4gIHZhciB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuICBpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB2YWwgPSB0cnVlO1xuICBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gZmFsc2U7XG4gIGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB2YWwgPSBudWxsO1xuICBlbHNlIHZhbCA9IE51bWJlcih2YWwpO1xuXG4gIG9ialtwcm9wXSA9IHZhbDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBUaGUgZmlsZSBkZXNjcmlwdG9yIHRvIHdyaXRlIHRoZSBgZGVidWcoKWAgY2FsbHMgdG8uXG4gKiBTZXQgdGhlIGBERUJVR19GRGAgZW52IHZhcmlhYmxlIHRvIG92ZXJyaWRlIHdpdGggYW5vdGhlciB2YWx1ZS4gaS5lLjpcbiAqXG4gKiAgICQgREVCVUdfRkQ9MyBub2RlIHNjcmlwdC5qcyAzPmRlYnVnLmxvZ1xuICovXG5cbnZhciBmZCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LkRFQlVHX0ZELCAxMCkgfHwgMjtcblxuaWYgKDEgIT09IGZkICYmIDIgIT09IGZkKSB7XG4gIHV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uKCl7fSwgJ2V4Y2VwdCBmb3Igc3RkZXJyKDIpIGFuZCBzdGRvdXQoMSksIGFueSBvdGhlciB1c2FnZSBvZiBERUJVR19GRCBpcyBkZXByZWNhdGVkLiBPdmVycmlkZSBkZWJ1Zy5sb2cgaWYgeW91IHdhbnQgdG8gdXNlIGEgZGlmZmVyZW50IGxvZyBmdW5jdGlvbiAoaHR0cHM6Ly9naXQuaW8vZGVidWdfZmQpJykoKVxufVxuXG52YXIgc3RyZWFtID0gMSA9PT0gZmQgPyBwcm9jZXNzLnN0ZG91dCA6XG4gICAgICAgICAgICAgMiA9PT0gZmQgPyBwcm9jZXNzLnN0ZGVyciA6XG4gICAgICAgICAgICAgY3JlYXRlV3JpdGFibGVTdGRpb1N0cmVhbShmZCk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHNcbiAgICA/IEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpXG4gICAgOiB0dHkuaXNhdHR5KGZkKTtcbn1cblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcbiAgICAuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpXG4gICAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIHByZWZpeCA9ICcgIFxcdTAwMWJbMycgKyBjICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaCgnXFx1MDAxYlszJyArIGMgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpXG4gICAgICArICcgJyArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuICB9XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIGBzdHJlYW1gLlxuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgcmV0dXJuIHN0cmVhbS53cml0ZSh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgIC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuICAgIC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG4gICAgZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcbiAgfVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cblxuLyoqXG4gKiBDb3BpZWQgZnJvbSBgbm9kZS9zcmMvbm9kZS5qc2AuXG4gKlxuICogWFhYOiBJdCdzIGxhbWUgdGhhdCBub2RlIGRvZXNuJ3QgZXhwb3NlIHRoaXMgQVBJIG91dC1vZi10aGUtYm94LiBJdCBhbHNvXG4gKiByZWxpZXMgb24gdGhlIHVuZG9jdW1lbnRlZCBgdHR5X3dyYXAuZ3Vlc3NIYW5kbGVUeXBlKClgIHdoaWNoIGlzIGFsc28gbGFtZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVXcml0YWJsZVN0ZGlvU3RyZWFtIChmZCkge1xuICB2YXIgc3RyZWFtO1xuICB2YXIgdHR5X3dyYXAgPSBwcm9jZXNzLmJpbmRpbmcoJ3R0eV93cmFwJyk7XG5cbiAgLy8gTm90ZSBzdHJlYW0uX3R5cGUgaXMgdXNlZCBmb3IgdGVzdC1tb2R1bGUtbG9hZC1saXN0LmpzXG5cbiAgc3dpdGNoICh0dHlfd3JhcC5ndWVzc0hhbmRsZVR5cGUoZmQpKSB7XG4gICAgY2FzZSAnVFRZJzpcbiAgICAgIHN0cmVhbSA9IG5ldyB0dHkuV3JpdGVTdHJlYW0oZmQpO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ3R0eSc7XG5cbiAgICAgIC8vIEhhY2sgdG8gaGF2ZSBzdHJlYW0gbm90IGtlZXAgdGhlIGV2ZW50IGxvb3AgYWxpdmUuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzI2XG4gICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiYgc3RyZWFtLl9oYW5kbGUudW5yZWYpIHtcbiAgICAgICAgc3RyZWFtLl9oYW5kbGUudW5yZWYoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnRklMRSc6XG4gICAgICB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgICAgc3RyZWFtID0gbmV3IGZzLlN5bmNXcml0ZVN0cmVhbShmZCwgeyBhdXRvQ2xvc2U6IGZhbHNlIH0pO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ2ZzJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUElQRSc6XG4gICAgY2FzZSAnVENQJzpcbiAgICAgIHZhciBuZXQgPSByZXF1aXJlKCduZXQnKTtcbiAgICAgIHN0cmVhbSA9IG5ldyBuZXQuU29ja2V0KHtcbiAgICAgICAgZmQ6IGZkLFxuICAgICAgICByZWFkYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgLy8gRklYTUUgU2hvdWxkIHByb2JhYmx5IGhhdmUgYW4gb3B0aW9uIGluIG5ldC5Tb2NrZXQgdG8gY3JlYXRlIGFcbiAgICAgIC8vIHN0cmVhbSBmcm9tIGFuIGV4aXN0aW5nIGZkIHdoaWNoIGlzIHdyaXRhYmxlIG9ubHkuIEJ1dCBmb3Igbm93XG4gICAgICAvLyB3ZSdsbCBqdXN0IGFkZCB0aGlzIGhhY2sgYW5kIHNldCB0aGUgYHJlYWRhYmxlYCBtZW1iZXIgdG8gZmFsc2UuXG4gICAgICAvLyBUZXN0OiAuL25vZGUgdGVzdC9maXh0dXJlcy9lY2hvLmpzIDwgL2V0Yy9wYXNzd2RcbiAgICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlYWQgPSBudWxsO1xuICAgICAgc3RyZWFtLl90eXBlID0gJ3BpcGUnO1xuXG4gICAgICAvLyBGSVhNRSBIYWNrIHRvIGhhdmUgc3RyZWFtIG5vdCBrZWVwIHRoZSBldmVudCBsb29wIGFsaXZlLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcyNlxuICAgICAgaWYgKHN0cmVhbS5faGFuZGxlICYmIHN0cmVhbS5faGFuZGxlLnVucmVmKSB7XG4gICAgICAgIHN0cmVhbS5faGFuZGxlLnVucmVmKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBQcm9iYWJseSBhbiBlcnJvciBvbiBpbiB1dl9ndWVzc19oYW5kbGUoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbXBsZW1lbnQgbWUuIFVua25vd24gc3RyZWFtIGZpbGUgdHlwZSEnKTtcbiAgfVxuXG4gIC8vIEZvciBzdXBwb3J0aW5nIGxlZ2FjeSBBUEkgd2UgcHV0IHRoZSBGRCBoZXJlLlxuICBzdHJlYW0uZmQgPSBmZDtcblxuICBzdHJlYW0uX2lzU3RkaW8gPSB0cnVlO1xuXG4gIHJldHVybiBzdHJlYW07XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYHByb2Nlc3MuZW52LkRFQlVHYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9rb2Etc2Vzc2lvbi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL25vZGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0dHlcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXRcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2tvYS1zZXNzaW9uOmNvbnRleHQnKTtcbmNvbnN0IFNlc3Npb24gPSByZXF1aXJlKCcuL3Nlc3Npb24nKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgT05FX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbmNsYXNzIENvbnRleHRTZXNzaW9uIHtcbiAgLyoqXG4gICAqIGNvbnRleHQgc2Vzc2lvbiBjb25zdHJ1Y3RvclxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBjb25zdHJ1Y3RvcihjdHgsIG9wdHMpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLm9wdHMuQ29udGV4dFN0b3JlID8gbmV3IHRoaXMub3B0cy5Db250ZXh0U3RvcmUoY3R4KSA6IHRoaXMub3B0cy5zdG9yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnRlcm5hbCBsb2dpYyBvZiBgY3R4LnNlc3Npb25gXG4gICAqIEByZXR1cm4ge1Nlc3Npb259IHNlc3Npb24gb2JqZWN0XG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gdGhpcy5zZXNzaW9uO1xuICAgIC8vIGFscmVhZHkgcmV0cmlldmVkXG4gICAgaWYgKHNlc3Npb24pIHJldHVybiBzZXNzaW9uO1xuICAgIC8vIHVuc2V0XG4gICAgaWYgKHNlc3Npb24gPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIGNvb2tpZSBzZXNzaW9uIHN0b3JlXG4gICAgaWYgKCF0aGlzLnN0b3JlKSB0aGlzLmluaXRGcm9tQ29va2llKCk7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnRlcm5hbCBsb2dpYyBvZiBgY3R4LnNlc3Npb249YFxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsIHNlc3Npb24gb2JqZWN0XG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCh2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNlc3Npb24gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyB1c2UgdGhlIG9yaWdpbmFsIGBleHRlcm5hbEtleWAgaWYgZXhpc3RzIHRvIGF2b2lkIHdhc3RlIHN0b3JhZ2VcbiAgICAgIHRoaXMuY3JlYXRlKHZhbCwgdGhpcy5leHRlcm5hbEtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigndGhpcy5zZXNzaW9uIGNhbiBvbmx5IGJlIHNldCBhcyBudWxsIG9yIGFuIG9iamVjdC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0IHNlc3Npb24gZnJvbSBleHRlcm5hbCBzdG9yZVxuICAgKiB3aWxsIGJlIGNhbGxlZCBpbiB0aGUgZnJvbnQgb2Ygc2Vzc2lvbiBtaWRkbGV3YXJlXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzeW5jIGluaXRGcm9tRXh0ZXJuYWwoKSB7XG4gICAgZGVidWcoJ2luaXQgZnJvbSBleHRlcm5hbCcpO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG5cbiAgICBjb25zdCBleHRlcm5hbEtleSA9IGN0eC5jb29raWVzLmdldChvcHRzLmtleSwgb3B0cyk7XG4gICAgZGVidWcoJ2dldCBleHRlcm5hbCBrZXkgZnJvbSBjb29raWUgJXMnLCBleHRlcm5hbEtleSk7XG5cbiAgICBpZiAoIWV4dGVybmFsS2V5KSB7XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgYGV4dGVybmFsS2V5YFxuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgdGhpcy5zdG9yZS5nZXQoZXh0ZXJuYWxLZXksIG9wdHMubWF4QWdlLCB7IHJvbGxpbmc6IG9wdHMucm9sbGluZyB9KTtcbiAgICBpZiAoIXRoaXMudmFsaWQoanNvbikpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIG5ldyBgZXh0ZXJuYWxLZXlgXG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB3aXRoIG9yaWdpbmFsIGBleHRlcm5hbEtleWBcbiAgICB0aGlzLmNyZWF0ZShqc29uLCBleHRlcm5hbEtleSk7XG4gICAgdGhpcy5wcmV2SGFzaCA9IHV0aWwuaGFzaCh0aGlzLnNlc3Npb24udG9KU09OKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXQgc2Vzc2lvbiBmcm9tIGNvb2tpZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgaW5pdEZyb21Db29raWUoKSB7XG4gICAgZGVidWcoJ2luaXQgZnJvbSBjb29raWUnKTtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRzO1xuXG4gICAgY29uc3QgY29va2llID0gY3R4LmNvb2tpZXMuZ2V0KG9wdHMua2V5LCBvcHRzKTtcbiAgICBpZiAoIWNvb2tpZSkge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQganNvbjtcbiAgICBkZWJ1ZygncGFyc2UgJXMnLCBjb29raWUpO1xuICAgIHRyeSB7XG4gICAgICBqc29uID0gb3B0cy5kZWNvZGUoY29va2llKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OlxuICAgICAgLy8gY3JlYXRlIGEgbmV3IHNlc3Npb24gaWYgcGFyc2luZyBmYWlscy5cbiAgICAgIC8vIG5ldyBCdWZmZXIoc3RyaW5nLCAnYmFzZTY0JykgZG9lcyBub3Qgc2VlbSB0byBjcmFzaFxuICAgICAgLy8gd2hlbiBgc3RyaW5nYCBpcyBub3QgYmFzZTY0LWVuY29kZWQuXG4gICAgICAvLyBidXQgYEpTT04ucGFyc2Uoc3RyaW5nKWAgd2lsbCBjcmFzaC5cbiAgICAgIGRlYnVnKCdkZWNvZGUgJWogZXJyb3I6ICVzJywgY29va2llLCBlcnIpO1xuICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgIC8vIGNsZWFuIHRoaXMgY29va2llIHRvIGVuc3VyZSBuZXh0IHJlcXVlc3Qgd29uJ3QgdGhyb3cgYWdhaW5cbiAgICAgICAgY3R4LmNvb2tpZXMuc2V0KG9wdHMua2V5LCAnJywgb3B0cyk7XG4gICAgICAgIC8vIGN0eC5vbmVycm9yIHdpbGwgdW5zZXQgYWxsIGhlYWRlcnMsIGFuZCBzZXQgdGhvc2Ugc3BlY2lmaWVkIGluIGVyclxuICAgICAgICBlcnIuaGVhZGVycyA9IHtcbiAgICAgICAgICAnc2V0LWNvb2tpZSc6IGN0eC5yZXNwb25zZS5nZXQoJ3NldC1jb29raWUnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWJ1ZygncGFyc2VkICVqJywganNvbik7XG5cbiAgICBpZiAoIXRoaXMudmFsaWQoanNvbikpIHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydCBhY2Nlc3MgYGN0eC5zZXNzaW9uYCBiZWZvcmUgc2Vzc2lvbiBtaWRkbGV3YXJlXG4gICAgdGhpcy5jcmVhdGUoanNvbik7XG4gICAgdGhpcy5wcmV2SGFzaCA9IHV0aWwuaGFzaCh0aGlzLnNlc3Npb24udG9KU09OKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHZlcmlmeSBzZXNzaW9uKGV4cGlyZWQgb3IgKVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGpzb24gc2Vzc2lvbiBvYmplY3RcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdmFsaWRcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIHZhbGlkKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChqc29uLl9leHBpcmUgJiYganNvbi5fZXhwaXJlIDwgRGF0ZS5ub3coKSkge1xuICAgICAgZGVidWcoJ2V4cGlyZWQgc2Vzc2lvbicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5vcHRzLnZhbGlkO1xuICAgIGlmICh0eXBlb2YgdmFsaWQgPT09ICdmdW5jdGlvbicgJiYgIXZhbGlkKHRoaXMuY3R4LCBqc29uKSkge1xuICAgICAgLy8gdmFsaWQgc2Vzc2lvbiB2YWx1ZSBmYWlsLCBpZ25vcmUgdGhpcyBzZXNzaW9uXG4gICAgICBkZWJ1ZygnaW52YWxpZCBzZXNzaW9uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIG5ldyBzZXNzaW9uIGFuZCBhdHRhY2ggdG8gY3R4LnNlc3NcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFt2YWxdIHNlc3Npb24gZGF0YVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2V4dGVybmFsS2V5XSBzZXNzaW9uIGV4dGVybmFsIGtleVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgY3JlYXRlKHZhbCwgZXh0ZXJuYWxLZXkpIHtcbiAgICBkZWJ1ZygnY3JlYXRlIHNlc3Npb24gd2l0aCB2YWw6ICVqIGV4dGVybmFsS2V5OiAlcycsIHZhbCwgZXh0ZXJuYWxLZXkpO1xuICAgIGlmICh0aGlzLnN0b3JlKSB0aGlzLmV4dGVybmFsS2V5ID0gZXh0ZXJuYWxLZXkgfHwgdGhpcy5vcHRzLmdlbmlkKCk7XG4gICAgdGhpcy5zZXNzaW9uID0gbmV3IFNlc3Npb24odGhpcy5jdHgsIHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tbWl0IHRoZSBzZXNzaW9uIGNoYW5nZXMgb3IgcmVtb3ZhbC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYXN5bmMgY29tbWl0KCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnNlc3Npb247XG4gICAgY29uc3QgcHJldkhhc2ggPSB0aGlzLnByZXZIYXNoO1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAvLyBub3QgYWNjZXNzZWRcbiAgICBpZiAodW5kZWZpbmVkID09PSBzZXNzaW9uKSByZXR1cm47XG5cbiAgICAvLyByZW1vdmVkXG4gICAgaWYgKHNlc3Npb24gPT09IGZhbHNlKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHNhdmUgc2Vzc2lvbiB3aGVuIGBzZXNzaW9uLl9yZXF1aXJlU2F2ZWAgc2V0XG4gICAgbGV0IGNoYW5nZWQgPSB0cnVlO1xuICAgIGlmICghc2Vzc2lvbi5fcmVxdWlyZVNhdmUpIHtcbiAgICAgIGNvbnN0IGpzb24gPSBzZXNzaW9uLnRvSlNPTigpO1xuICAgICAgLy8gZG8gbm90aGluZyBpZiBuZXcgYW5kIG5vdCBwb3B1bGF0ZWRcbiAgICAgIGlmICghcHJldkhhc2ggJiYgIU9iamVjdC5rZXlzKGpzb24pLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgY2hhbmdlZCA9IHByZXZIYXNoICE9PSB1dGlsLmhhc2goanNvbik7XG4gICAgICAvLyBkbyBub3RoaW5nIGlmIG5vdCBjaGFuZ2VkIGFuZCBub3QgaW4gcm9sbGluZyBtb2RlXG4gICAgICBpZiAoIXRoaXMub3B0cy5yb2xsaW5nICYmICFjaGFuZ2VkKSByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmJlZm9yZVNhdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRlYnVnKCdiZWZvcmUgc2F2ZScpO1xuICAgICAgb3B0cy5iZWZvcmVTYXZlKGN0eCwgc2Vzc2lvbik7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2F2ZShjaGFuZ2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgc2Vzc2lvblxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgYXN5bmMgcmVtb3ZlKCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY29uc3Qga2V5ID0gb3B0cy5rZXk7XG4gICAgY29uc3QgZXh0ZXJuYWxLZXkgPSB0aGlzLmV4dGVybmFsS2V5O1xuXG4gICAgaWYgKGV4dGVybmFsS2V5KSBhd2FpdCB0aGlzLnN0b3JlLmRlc3Ryb3koZXh0ZXJuYWxLZXkpO1xuICAgIGN0eC5jb29raWVzLnNldChrZXksICcnLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzYXZlIHNlc3Npb25cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGFzeW5jIHNhdmUoY2hhbmdlZCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgY29uc3Qga2V5ID0gb3B0cy5rZXk7XG4gICAgY29uc3QgZXh0ZXJuYWxLZXkgPSB0aGlzLmV4dGVybmFsS2V5O1xuICAgIGxldCBqc29uID0gdGhpcy5zZXNzaW9uLnRvSlNPTigpO1xuICAgIC8vIHNldCBleHBpcmUgZm9yIGNoZWNrXG4gICAgY29uc3QgbWF4QWdlID0gb3B0cy5tYXhBZ2UgPyBvcHRzLm1heEFnZSA6IE9ORV9EQVk7XG4gICAgaWYgKG1heEFnZSA9PT0gJ3Nlc3Npb24nKSB7XG4gICAgICAvLyBkbyBub3Qgc2V0IF9leHBpcmUgaW4ganNvbiBpZiBtYXhBZ2UgaXMgc2V0IHRvICdzZXNzaW9uJ1xuICAgICAgLy8gYWxzbyBkZWxldGUgbWF4QWdlIGZyb20gb3B0aW9uc1xuICAgICAgb3B0cy5tYXhBZ2UgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBleHBpcmUgZm9yIGNoZWNrXG4gICAgICBqc29uLl9leHBpcmUgPSBtYXhBZ2UgKyBEYXRlLm5vdygpO1xuICAgICAganNvbi5fbWF4QWdlID0gbWF4QWdlO1xuICAgIH1cblxuICAgIC8vIHNhdmUgdG8gZXh0ZXJuYWwgc3RvcmVcbiAgICBpZiAoZXh0ZXJuYWxLZXkpIHtcbiAgICAgIGRlYnVnKCdzYXZlICVqIHRvIGV4dGVybmFsIGtleSAlcycsIGpzb24sIGV4dGVybmFsS2V5KTtcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmUuc2V0KGV4dGVybmFsS2V5LCBqc29uLCBtYXhBZ2UsIHtcbiAgICAgICAgY2hhbmdlZCxcbiAgICAgICAgcm9sbGluZzogb3B0cy5yb2xsaW5nLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmN0eC5jb29raWVzLnNldChrZXksIGV4dGVybmFsS2V5LCBvcHRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzYXZlIHRvIGNvb2tpZVxuICAgIGRlYnVnKCdzYXZlICVqIHRvIGNvb2tpZScsIGpzb24pO1xuICAgIGpzb24gPSBvcHRzLmVuY29kZShqc29uKTtcbiAgICBkZWJ1Zygnc2F2ZSAlcycsIGpzb24pO1xuXG4gICAgdGhpcy5jdHguY29va2llcy5zZXQoa2V5LCBqc29uLCBvcHRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRTZXNzaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2tvYS1zZXNzaW9uL2xpYi9jb250ZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNlc3Npb24gbW9kZWwuXG4gKi9cblxuY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTZXNzaW9uIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7Q29udGV4dH0gY3R4XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGN0eCwgb2JqKSB7XG4gICAgdGhpcy5fY3R4ID0gY3R4O1xuICAgIGlmICghb2JqKSB7XG4gICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICAvLyByZXN0b3JlIG1heEFnZSBmcm9tIHN0b3JlXG4gICAgICAgIGlmIChrID09PSAnX21heEFnZScpIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2UgPSBvYmouX21heEFnZTtcbiAgICAgICAgZWxzZSB0aGlzW2tdID0gb2JqW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZXNzaW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdpc05ldycpIHJldHVybjtcbiAgICAgIGlmIChrZXlbMF0gPT09ICdfJykgcmV0dXJuO1xuICAgICAgb2JqW2tleV0gPSB0aGlzW2tleV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIGFsaWFzIHRvIGB0b0pTT05gXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGluc3BlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGhvdyBtYW55IHZhbHVlcyB0aGVyZSBhcmUgaW4gdGhlIHNlc3Npb24gb2JqZWN0LlxuICAgKiBVc2VkIHRvIHNlZSBpZiBpdCdzIFwicG9wdWxhdGVkXCIuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50b0pTT04oKSkubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIHBvcHVsYXRlZCBmbGFnLCB3aGljaCBpcyBqdXN0IGEgYm9vbGVhbiBhbGlhcyBvZiAubGVuZ3RoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgcG9wdWxhdGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBzZXNzaW9uIG1heEFnZVxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBtYXhBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2U7XG4gIH1cblxuICAvKipcbiAgICogc2V0IHNlc3Npb24gbWF4QWdlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgbWF4QWdlKHZhbCkge1xuICAgIHRoaXMuX2N0eC5zZXNzaW9uT3B0aW9ucy5tYXhBZ2UgPSB2YWw7XG4gICAgLy8gbWF4QWdlIGNoYW5nZWQsIG11c3Qgc2F2ZSB0byBjb29raWUgYW5kIHN0b3JlXG4gICAgdGhpcy5fcmVxdWlyZVNhdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNhdmUgdGhpcyBzZXNzaW9uIG5vIG1hdHRlciB3aGV0aGVyIGl0IGlzIHBvcHVsYXRlZFxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzYXZlKCkge1xuICAgIHRoaXMuX3JlcXVpcmVTYXZlID0gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlc3Npb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMva29hLXNlc3Npb24vbGliL3Nlc3Npb24uanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmMxOiByZXF1aXJlKCcuL2NyYzEnKSxcbiAgY3JjODogcmVxdWlyZSgnLi9jcmM4JyksXG4gIGNyYzgxd2lyZTogcmVxdWlyZSgnLi9jcmM4XzF3aXJlJyksXG4gIGNyYzE2OiByZXF1aXJlKCcuL2NyYzE2JyksXG4gIGNyYzE2Y2NpdHQ6IHJlcXVpcmUoJy4vY3JjMTZfY2NpdHQnKSxcbiAgY3JjMTZtb2RidXM6IHJlcXVpcmUoJy4vY3JjMTZfbW9kYnVzJyksXG4gIGNyYzE2eG1vZGVtOiByZXF1aXJlKCcuL2NyYzE2X3htb2RlbScpLFxuICBjcmMxNmtlcm1pdDogcmVxdWlyZSgnLi9jcmMxNl9rZXJtaXQnKSxcbiAgY3JjMjQ6IHJlcXVpcmUoJy4vY3JjMjQnKSxcbiAgY3JjMzI6IHJlcXVpcmUoJy4vY3JjMzInKSxcbiAgY3JjamFtOiByZXF1aXJlKCcuL2NyY2phbScpXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIgPSByZXF1aXJlKCcuL2NyZWF0ZV9idWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZV9idWZmZXIpO1xuXG52YXIgX2RlZmluZV9jcmMgPSByZXF1aXJlKCcuL2RlZmluZV9jcmMnKTtcblxudmFyIF9kZWZpbmVfY3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZV9jcmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NyYzEnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gfn5wcmV2aW91cztcbiAgdmFyIGFjY3VtID0gMDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBhY2N1bSArPSBieXRlO1xuICB9XG5cbiAgY3JjICs9IGFjY3VtICUgMjU2O1xuICByZXR1cm4gY3JjICUgMjU2O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjMS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy04IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwLCAweDA3LCAweDBlLCAweDA5LCAweDFjLCAweDFiLCAweDEyLCAweDE1LCAweDM4LCAweDNmLCAweDM2LCAweDMxLCAweDI0LCAweDIzLCAweDJhLCAweDJkLCAweDcwLCAweDc3LCAweDdlLCAweDc5LCAweDZjLCAweDZiLCAweDYyLCAweDY1LCAweDQ4LCAweDRmLCAweDQ2LCAweDQxLCAweDU0LCAweDUzLCAweDVhLCAweDVkLCAweGUwLCAweGU3LCAweGVlLCAweGU5LCAweGZjLCAweGZiLCAweGYyLCAweGY1LCAweGQ4LCAweGRmLCAweGQ2LCAweGQxLCAweGM0LCAweGMzLCAweGNhLCAweGNkLCAweDkwLCAweDk3LCAweDllLCAweDk5LCAweDhjLCAweDhiLCAweDgyLCAweDg1LCAweGE4LCAweGFmLCAweGE2LCAweGExLCAweGI0LCAweGIzLCAweGJhLCAweGJkLCAweGM3LCAweGMwLCAweGM5LCAweGNlLCAweGRiLCAweGRjLCAweGQ1LCAweGQyLCAweGZmLCAweGY4LCAweGYxLCAweGY2LCAweGUzLCAweGU0LCAweGVkLCAweGVhLCAweGI3LCAweGIwLCAweGI5LCAweGJlLCAweGFiLCAweGFjLCAweGE1LCAweGEyLCAweDhmLCAweDg4LCAweDgxLCAweDg2LCAweDkzLCAweDk0LCAweDlkLCAweDlhLCAweDI3LCAweDIwLCAweDI5LCAweDJlLCAweDNiLCAweDNjLCAweDM1LCAweDMyLCAweDFmLCAweDE4LCAweDExLCAweDE2LCAweDAzLCAweDA0LCAweDBkLCAweDBhLCAweDU3LCAweDUwLCAweDU5LCAweDVlLCAweDRiLCAweDRjLCAweDQ1LCAweDQyLCAweDZmLCAweDY4LCAweDYxLCAweDY2LCAweDczLCAweDc0LCAweDdkLCAweDdhLCAweDg5LCAweDhlLCAweDg3LCAweDgwLCAweDk1LCAweDkyLCAweDliLCAweDljLCAweGIxLCAweGI2LCAweGJmLCAweGI4LCAweGFkLCAweGFhLCAweGEzLCAweGE0LCAweGY5LCAweGZlLCAweGY3LCAweGYwLCAweGU1LCAweGUyLCAweGViLCAweGVjLCAweGMxLCAweGM2LCAweGNmLCAweGM4LCAweGRkLCAweGRhLCAweGQzLCAweGQ0LCAweDY5LCAweDZlLCAweDY3LCAweDYwLCAweDc1LCAweDcyLCAweDdiLCAweDdjLCAweDUxLCAweDU2LCAweDVmLCAweDU4LCAweDRkLCAweDRhLCAweDQzLCAweDQ0LCAweDE5LCAweDFlLCAweDE3LCAweDEwLCAweDA1LCAweDAyLCAweDBiLCAweDBjLCAweDIxLCAweDI2LCAweDJmLCAweDI4LCAweDNkLCAweDNhLCAweDMzLCAweDM0LCAweDRlLCAweDQ5LCAweDQwLCAweDQ3LCAweDUyLCAweDU1LCAweDVjLCAweDViLCAweDc2LCAweDcxLCAweDc4LCAweDdmLCAweDZhLCAweDZkLCAweDY0LCAweDYzLCAweDNlLCAweDM5LCAweDMwLCAweDM3LCAweDIyLCAweDI1LCAweDJjLCAweDJiLCAweDA2LCAweDAxLCAweDA4LCAweDBmLCAweDFhLCAweDFkLCAweDE0LCAweDEzLCAweGFlLCAweGE5LCAweGEwLCAweGE3LCAweGIyLCAweGI1LCAweGJjLCAweGJiLCAweDk2LCAweDkxLCAweDk4LCAweDlmLCAweDhhLCAweDhkLCAweDg0LCAweDgzLCAweGRlLCAweGQ5LCAweGQwLCAweGQ3LCAweGMyLCAweGM1LCAweGNjLCAweGNiLCAweGU2LCAweGUxLCAweGU4LCAweGVmLCAweGZhLCAweGZkLCAweGY0LCAweGYzXTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgnY3JjLTgnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gfn5wcmV2aW91cztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSAmIDB4ZmY7XG4gIH1cblxuICByZXR1cm4gY3JjO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NyYy9saWIvY3JjOC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWRhbGxhcy0xLXdpcmUgLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAsIDB4NWUsIDB4YmMsIDB4ZTIsIDB4NjEsIDB4M2YsIDB4ZGQsIDB4ODMsIDB4YzIsIDB4OWMsIDB4N2UsIDB4MjAsIDB4YTMsIDB4ZmQsIDB4MWYsIDB4NDEsIDB4OWQsIDB4YzMsIDB4MjEsIDB4N2YsIDB4ZmMsIDB4YTIsIDB4NDAsIDB4MWUsIDB4NWYsIDB4MDEsIDB4ZTMsIDB4YmQsIDB4M2UsIDB4NjAsIDB4ODIsIDB4ZGMsIDB4MjMsIDB4N2QsIDB4OWYsIDB4YzEsIDB4NDIsIDB4MWMsIDB4ZmUsIDB4YTAsIDB4ZTEsIDB4YmYsIDB4NWQsIDB4MDMsIDB4ODAsIDB4ZGUsIDB4M2MsIDB4NjIsIDB4YmUsIDB4ZTAsIDB4MDIsIDB4NWMsIDB4ZGYsIDB4ODEsIDB4NjMsIDB4M2QsIDB4N2MsIDB4MjIsIDB4YzAsIDB4OWUsIDB4MWQsIDB4NDMsIDB4YTEsIDB4ZmYsIDB4NDYsIDB4MTgsIDB4ZmEsIDB4YTQsIDB4MjcsIDB4NzksIDB4OWIsIDB4YzUsIDB4ODQsIDB4ZGEsIDB4MzgsIDB4NjYsIDB4ZTUsIDB4YmIsIDB4NTksIDB4MDcsIDB4ZGIsIDB4ODUsIDB4NjcsIDB4MzksIDB4YmEsIDB4ZTQsIDB4MDYsIDB4NTgsIDB4MTksIDB4NDcsIDB4YTUsIDB4ZmIsIDB4NzgsIDB4MjYsIDB4YzQsIDB4OWEsIDB4NjUsIDB4M2IsIDB4ZDksIDB4ODcsIDB4MDQsIDB4NWEsIDB4YjgsIDB4ZTYsIDB4YTcsIDB4ZjksIDB4MWIsIDB4NDUsIDB4YzYsIDB4OTgsIDB4N2EsIDB4MjQsIDB4ZjgsIDB4YTYsIDB4NDQsIDB4MWEsIDB4OTksIDB4YzcsIDB4MjUsIDB4N2IsIDB4M2EsIDB4NjQsIDB4ODYsIDB4ZDgsIDB4NWIsIDB4MDUsIDB4ZTcsIDB4YjksIDB4OGMsIDB4ZDIsIDB4MzAsIDB4NmUsIDB4ZWQsIDB4YjMsIDB4NTEsIDB4MGYsIDB4NGUsIDB4MTAsIDB4ZjIsIDB4YWMsIDB4MmYsIDB4NzEsIDB4OTMsIDB4Y2QsIDB4MTEsIDB4NGYsIDB4YWQsIDB4ZjMsIDB4NzAsIDB4MmUsIDB4Y2MsIDB4OTIsIDB4ZDMsIDB4OGQsIDB4NmYsIDB4MzEsIDB4YjIsIDB4ZWMsIDB4MGUsIDB4NTAsIDB4YWYsIDB4ZjEsIDB4MTMsIDB4NGQsIDB4Y2UsIDB4OTAsIDB4NzIsIDB4MmMsIDB4NmQsIDB4MzMsIDB4ZDEsIDB4OGYsIDB4MGMsIDB4NTIsIDB4YjAsIDB4ZWUsIDB4MzIsIDB4NmMsIDB4OGUsIDB4ZDAsIDB4NTMsIDB4MGQsIDB4ZWYsIDB4YjEsIDB4ZjAsIDB4YWUsIDB4NGMsIDB4MTIsIDB4OTEsIDB4Y2YsIDB4MmQsIDB4NzMsIDB4Y2EsIDB4OTQsIDB4NzYsIDB4MjgsIDB4YWIsIDB4ZjUsIDB4MTcsIDB4NDksIDB4MDgsIDB4NTYsIDB4YjQsIDB4ZWEsIDB4NjksIDB4MzcsIDB4ZDUsIDB4OGIsIDB4NTcsIDB4MDksIDB4ZWIsIDB4YjUsIDB4MzYsIDB4NjgsIDB4OGEsIDB4ZDQsIDB4OTUsIDB4Y2IsIDB4MjksIDB4NzcsIDB4ZjQsIDB4YWEsIDB4NDgsIDB4MTYsIDB4ZTksIDB4YjcsIDB4NTUsIDB4MGIsIDB4ODgsIDB4ZDYsIDB4MzQsIDB4NmEsIDB4MmIsIDB4NzUsIDB4OTcsIDB4YzksIDB4NGEsIDB4MTQsIDB4ZjYsIDB4YTgsIDB4NzQsIDB4MmEsIDB4YzgsIDB4OTYsIDB4MTUsIDB4NGIsIDB4YTksIDB4ZjcsIDB4YjYsIDB4ZTgsIDB4MGEsIDB4NTQsIDB4ZDcsIDB4ODksIDB4NmIsIDB4MzVdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdkYWxsYXMtMS13aXJlJywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IH5+cHJldmlvdXM7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gVEFCTEVbKGNyYyBeIGJ5dGUpICYgMHhmZl0gJiAweGZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzhfMXdpcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEdlbmVyYXRlZCBieSBgLi9weWNyYy5weSAtLWFsZ29yaXRobT10YWJsZS1kcml2ZW4gLS1tb2RlbD1jcmMtMTYgLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAwMCwgMHhjMGMxLCAweGMxODEsIDB4MDE0MCwgMHhjMzAxLCAweDAzYzAsIDB4MDI4MCwgMHhjMjQxLCAweGM2MDEsIDB4MDZjMCwgMHgwNzgwLCAweGM3NDEsIDB4MDUwMCwgMHhjNWMxLCAweGM0ODEsIDB4MDQ0MCwgMHhjYzAxLCAweDBjYzAsIDB4MGQ4MCwgMHhjZDQxLCAweDBmMDAsIDB4Y2ZjMSwgMHhjZTgxLCAweDBlNDAsIDB4MGEwMCwgMHhjYWMxLCAweGNiODEsIDB4MGI0MCwgMHhjOTAxLCAweDA5YzAsIDB4MDg4MCwgMHhjODQxLCAweGQ4MDEsIDB4MThjMCwgMHgxOTgwLCAweGQ5NDEsIDB4MWIwMCwgMHhkYmMxLCAweGRhODEsIDB4MWE0MCwgMHgxZTAwLCAweGRlYzEsIDB4ZGY4MSwgMHgxZjQwLCAweGRkMDEsIDB4MWRjMCwgMHgxYzgwLCAweGRjNDEsIDB4MTQwMCwgMHhkNGMxLCAweGQ1ODEsIDB4MTU0MCwgMHhkNzAxLCAweDE3YzAsIDB4MTY4MCwgMHhkNjQxLCAweGQyMDEsIDB4MTJjMCwgMHgxMzgwLCAweGQzNDEsIDB4MTEwMCwgMHhkMWMxLCAweGQwODEsIDB4MTA0MCwgMHhmMDAxLCAweDMwYzAsIDB4MzE4MCwgMHhmMTQxLCAweDMzMDAsIDB4ZjNjMSwgMHhmMjgxLCAweDMyNDAsIDB4MzYwMCwgMHhmNmMxLCAweGY3ODEsIDB4Mzc0MCwgMHhmNTAxLCAweDM1YzAsIDB4MzQ4MCwgMHhmNDQxLCAweDNjMDAsIDB4ZmNjMSwgMHhmZDgxLCAweDNkNDAsIDB4ZmYwMSwgMHgzZmMwLCAweDNlODAsIDB4ZmU0MSwgMHhmYTAxLCAweDNhYzAsIDB4M2I4MCwgMHhmYjQxLCAweDM5MDAsIDB4ZjljMSwgMHhmODgxLCAweDM4NDAsIDB4MjgwMCwgMHhlOGMxLCAweGU5ODEsIDB4Mjk0MCwgMHhlYjAxLCAweDJiYzAsIDB4MmE4MCwgMHhlYTQxLCAweGVlMDEsIDB4MmVjMCwgMHgyZjgwLCAweGVmNDEsIDB4MmQwMCwgMHhlZGMxLCAweGVjODEsIDB4MmM0MCwgMHhlNDAxLCAweDI0YzAsIDB4MjU4MCwgMHhlNTQxLCAweDI3MDAsIDB4ZTdjMSwgMHhlNjgxLCAweDI2NDAsIDB4MjIwMCwgMHhlMmMxLCAweGUzODEsIDB4MjM0MCwgMHhlMTAxLCAweDIxYzAsIDB4MjA4MCwgMHhlMDQxLCAweGEwMDEsIDB4NjBjMCwgMHg2MTgwLCAweGExNDEsIDB4NjMwMCwgMHhhM2MxLCAweGEyODEsIDB4NjI0MCwgMHg2NjAwLCAweGE2YzEsIDB4YTc4MSwgMHg2NzQwLCAweGE1MDEsIDB4NjVjMCwgMHg2NDgwLCAweGE0NDEsIDB4NmMwMCwgMHhhY2MxLCAweGFkODEsIDB4NmQ0MCwgMHhhZjAxLCAweDZmYzAsIDB4NmU4MCwgMHhhZTQxLCAweGFhMDEsIDB4NmFjMCwgMHg2YjgwLCAweGFiNDEsIDB4NjkwMCwgMHhhOWMxLCAweGE4ODEsIDB4Njg0MCwgMHg3ODAwLCAweGI4YzEsIDB4Yjk4MSwgMHg3OTQwLCAweGJiMDEsIDB4N2JjMCwgMHg3YTgwLCAweGJhNDEsIDB4YmUwMSwgMHg3ZWMwLCAweDdmODAsIDB4YmY0MSwgMHg3ZDAwLCAweGJkYzEsIDB4YmM4MSwgMHg3YzQwLCAweGI0MDEsIDB4NzRjMCwgMHg3NTgwLCAweGI1NDEsIDB4NzcwMCwgMHhiN2MxLCAweGI2ODEsIDB4NzY0MCwgMHg3MjAwLCAweGIyYzEsIDB4YjM4MSwgMHg3MzQwLCAweGIxMDEsIDB4NzFjMCwgMHg3MDgwLCAweGIwNDEsIDB4NTAwMCwgMHg5MGMxLCAweDkxODEsIDB4NTE0MCwgMHg5MzAxLCAweDUzYzAsIDB4NTI4MCwgMHg5MjQxLCAweDk2MDEsIDB4NTZjMCwgMHg1NzgwLCAweDk3NDEsIDB4NTUwMCwgMHg5NWMxLCAweDk0ODEsIDB4NTQ0MCwgMHg5YzAxLCAweDVjYzAsIDB4NWQ4MCwgMHg5ZDQxLCAweDVmMDAsIDB4OWZjMSwgMHg5ZTgxLCAweDVlNDAsIDB4NWEwMCwgMHg5YWMxLCAweDliODEsIDB4NWI0MCwgMHg5OTAxLCAweDU5YzAsIDB4NTg4MCwgMHg5ODQxLCAweDg4MDEsIDB4NDhjMCwgMHg0OTgwLCAweDg5NDEsIDB4NGIwMCwgMHg4YmMxLCAweDhhODEsIDB4NGE0MCwgMHg0ZTAwLCAweDhlYzEsIDB4OGY4MSwgMHg0ZjQwLCAweDhkMDEsIDB4NGRjMCwgMHg0YzgwLCAweDhjNDEsIDB4NDQwMCwgMHg4NGMxLCAweDg1ODEsIDB4NDU0MCwgMHg4NzAxLCAweDQ3YzAsIDB4NDY4MCwgMHg4NjQxLCAweDgyMDEsIDB4NDJjMCwgMHg0MzgwLCAweDgzNDEsIDB4NDEwMCwgMHg4MWMxLCAweDgwODEsIDB4NDA0MF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NyYy0xNicsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB+fnByZXZpb3VzO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+PiA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxNi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNjaXR0IC0tZ2VuZXJhdGU9Y2BcbnZhciBUQUJMRSA9IFsweDAwMDAsIDB4MTAyMSwgMHgyMDQyLCAweDMwNjMsIDB4NDA4NCwgMHg1MGE1LCAweDYwYzYsIDB4NzBlNywgMHg4MTA4LCAweDkxMjksIDB4YTE0YSwgMHhiMTZiLCAweGMxOGMsIDB4ZDFhZCwgMHhlMWNlLCAweGYxZWYsIDB4MTIzMSwgMHgwMjEwLCAweDMyNzMsIDB4MjI1MiwgMHg1MmI1LCAweDQyOTQsIDB4NzJmNywgMHg2MmQ2LCAweDkzMzksIDB4ODMxOCwgMHhiMzdiLCAweGEzNWEsIDB4ZDNiZCwgMHhjMzljLCAweGYzZmYsIDB4ZTNkZSwgMHgyNDYyLCAweDM0NDMsIDB4MDQyMCwgMHgxNDAxLCAweDY0ZTYsIDB4NzRjNywgMHg0NGE0LCAweDU0ODUsIDB4YTU2YSwgMHhiNTRiLCAweDg1MjgsIDB4OTUwOSwgMHhlNWVlLCAweGY1Y2YsIDB4YzVhYywgMHhkNThkLCAweDM2NTMsIDB4MjY3MiwgMHgxNjExLCAweDA2MzAsIDB4NzZkNywgMHg2NmY2LCAweDU2OTUsIDB4NDZiNCwgMHhiNzViLCAweGE3N2EsIDB4OTcxOSwgMHg4NzM4LCAweGY3ZGYsIDB4ZTdmZSwgMHhkNzlkLCAweGM3YmMsIDB4NDhjNCwgMHg1OGU1LCAweDY4ODYsIDB4NzhhNywgMHgwODQwLCAweDE4NjEsIDB4MjgwMiwgMHgzODIzLCAweGM5Y2MsIDB4ZDllZCwgMHhlOThlLCAweGY5YWYsIDB4ODk0OCwgMHg5OTY5LCAweGE5MGEsIDB4YjkyYiwgMHg1YWY1LCAweDRhZDQsIDB4N2FiNywgMHg2YTk2LCAweDFhNzEsIDB4MGE1MCwgMHgzYTMzLCAweDJhMTIsIDB4ZGJmZCwgMHhjYmRjLCAweGZiYmYsIDB4ZWI5ZSwgMHg5Yjc5LCAweDhiNTgsIDB4YmIzYiwgMHhhYjFhLCAweDZjYTYsIDB4N2M4NywgMHg0Y2U0LCAweDVjYzUsIDB4MmMyMiwgMHgzYzAzLCAweDBjNjAsIDB4MWM0MSwgMHhlZGFlLCAweGZkOGYsIDB4Y2RlYywgMHhkZGNkLCAweGFkMmEsIDB4YmQwYiwgMHg4ZDY4LCAweDlkNDksIDB4N2U5NywgMHg2ZWI2LCAweDVlZDUsIDB4NGVmNCwgMHgzZTEzLCAweDJlMzIsIDB4MWU1MSwgMHgwZTcwLCAweGZmOWYsIDB4ZWZiZSwgMHhkZmRkLCAweGNmZmMsIDB4YmYxYiwgMHhhZjNhLCAweDlmNTksIDB4OGY3OCwgMHg5MTg4LCAweDgxYTksIDB4YjFjYSwgMHhhMWViLCAweGQxMGMsIDB4YzEyZCwgMHhmMTRlLCAweGUxNmYsIDB4MTA4MCwgMHgwMGExLCAweDMwYzIsIDB4MjBlMywgMHg1MDA0LCAweDQwMjUsIDB4NzA0NiwgMHg2MDY3LCAweDgzYjksIDB4OTM5OCwgMHhhM2ZiLCAweGIzZGEsIDB4YzMzZCwgMHhkMzFjLCAweGUzN2YsIDB4ZjM1ZSwgMHgwMmIxLCAweDEyOTAsIDB4MjJmMywgMHgzMmQyLCAweDQyMzUsIDB4NTIxNCwgMHg2Mjc3LCAweDcyNTYsIDB4YjVlYSwgMHhhNWNiLCAweDk1YTgsIDB4ODU4OSwgMHhmNTZlLCAweGU1NGYsIDB4ZDUyYywgMHhjNTBkLCAweDM0ZTIsIDB4MjRjMywgMHgxNGEwLCAweDA0ODEsIDB4NzQ2NiwgMHg2NDQ3LCAweDU0MjQsIDB4NDQwNSwgMHhhN2RiLCAweGI3ZmEsIDB4ODc5OSwgMHg5N2I4LCAweGU3NWYsIDB4Zjc3ZSwgMHhjNzFkLCAweGQ3M2MsIDB4MjZkMywgMHgzNmYyLCAweDA2OTEsIDB4MTZiMCwgMHg2NjU3LCAweDc2NzYsIDB4NDYxNSwgMHg1NjM0LCAweGQ5NGMsIDB4Yzk2ZCwgMHhmOTBlLCAweGU5MmYsIDB4OTljOCwgMHg4OWU5LCAweGI5OGEsIDB4YTlhYiwgMHg1ODQ0LCAweDQ4NjUsIDB4NzgwNiwgMHg2ODI3LCAweDE4YzAsIDB4MDhlMSwgMHgzODgyLCAweDI4YTMsIDB4Y2I3ZCwgMHhkYjVjLCAweGViM2YsIDB4ZmIxZSwgMHg4YmY5LCAweDliZDgsIDB4YWJiYiwgMHhiYjlhLCAweDRhNzUsIDB4NWE1NCwgMHg2YTM3LCAweDdhMTYsIDB4MGFmMSwgMHgxYWQwLCAweDJhYjMsIDB4M2E5MiwgMHhmZDJlLCAweGVkMGYsIDB4ZGQ2YywgMHhjZDRkLCAweGJkYWEsIDB4YWQ4YiwgMHg5ZGU4LCAweDhkYzksIDB4N2MyNiwgMHg2YzA3LCAweDVjNjQsIDB4NGM0NSwgMHgzY2EyLCAweDJjODMsIDB4MWNlMCwgMHgwY2MxLCAweGVmMWYsIDB4ZmYzZSwgMHhjZjVkLCAweGRmN2MsIDB4YWY5YiwgMHhiZmJhLCAweDhmZDksIDB4OWZmOCwgMHg2ZTE3LCAweDdlMzYsIDB4NGU1NSwgMHg1ZTc0LCAweDJlOTMsIDB4M2ViMiwgMHgwZWQxLCAweDFlZjBdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdjY2l0dCcsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSB0eXBlb2YgcHJldmlvdXMgIT09ICd1bmRlZmluZWQnID8gfn5wcmV2aW91cyA6IDB4ZmZmZjtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSAoVEFCTEVbKGNyYyA+PiA4IF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA8PCA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxNl9jY2l0dC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy0xNi1tb2RidXMgLS1nZW5lcmF0ZT1jYFxudmFyIFRBQkxFID0gWzB4MDAwMCwgMHhjMGMxLCAweGMxODEsIDB4MDE0MCwgMHhjMzAxLCAweDAzYzAsIDB4MDI4MCwgMHhjMjQxLCAweGM2MDEsIDB4MDZjMCwgMHgwNzgwLCAweGM3NDEsIDB4MDUwMCwgMHhjNWMxLCAweGM0ODEsIDB4MDQ0MCwgMHhjYzAxLCAweDBjYzAsIDB4MGQ4MCwgMHhjZDQxLCAweDBmMDAsIDB4Y2ZjMSwgMHhjZTgxLCAweDBlNDAsIDB4MGEwMCwgMHhjYWMxLCAweGNiODEsIDB4MGI0MCwgMHhjOTAxLCAweDA5YzAsIDB4MDg4MCwgMHhjODQxLCAweGQ4MDEsIDB4MThjMCwgMHgxOTgwLCAweGQ5NDEsIDB4MWIwMCwgMHhkYmMxLCAweGRhODEsIDB4MWE0MCwgMHgxZTAwLCAweGRlYzEsIDB4ZGY4MSwgMHgxZjQwLCAweGRkMDEsIDB4MWRjMCwgMHgxYzgwLCAweGRjNDEsIDB4MTQwMCwgMHhkNGMxLCAweGQ1ODEsIDB4MTU0MCwgMHhkNzAxLCAweDE3YzAsIDB4MTY4MCwgMHhkNjQxLCAweGQyMDEsIDB4MTJjMCwgMHgxMzgwLCAweGQzNDEsIDB4MTEwMCwgMHhkMWMxLCAweGQwODEsIDB4MTA0MCwgMHhmMDAxLCAweDMwYzAsIDB4MzE4MCwgMHhmMTQxLCAweDMzMDAsIDB4ZjNjMSwgMHhmMjgxLCAweDMyNDAsIDB4MzYwMCwgMHhmNmMxLCAweGY3ODEsIDB4Mzc0MCwgMHhmNTAxLCAweDM1YzAsIDB4MzQ4MCwgMHhmNDQxLCAweDNjMDAsIDB4ZmNjMSwgMHhmZDgxLCAweDNkNDAsIDB4ZmYwMSwgMHgzZmMwLCAweDNlODAsIDB4ZmU0MSwgMHhmYTAxLCAweDNhYzAsIDB4M2I4MCwgMHhmYjQxLCAweDM5MDAsIDB4ZjljMSwgMHhmODgxLCAweDM4NDAsIDB4MjgwMCwgMHhlOGMxLCAweGU5ODEsIDB4Mjk0MCwgMHhlYjAxLCAweDJiYzAsIDB4MmE4MCwgMHhlYTQxLCAweGVlMDEsIDB4MmVjMCwgMHgyZjgwLCAweGVmNDEsIDB4MmQwMCwgMHhlZGMxLCAweGVjODEsIDB4MmM0MCwgMHhlNDAxLCAweDI0YzAsIDB4MjU4MCwgMHhlNTQxLCAweDI3MDAsIDB4ZTdjMSwgMHhlNjgxLCAweDI2NDAsIDB4MjIwMCwgMHhlMmMxLCAweGUzODEsIDB4MjM0MCwgMHhlMTAxLCAweDIxYzAsIDB4MjA4MCwgMHhlMDQxLCAweGEwMDEsIDB4NjBjMCwgMHg2MTgwLCAweGExNDEsIDB4NjMwMCwgMHhhM2MxLCAweGEyODEsIDB4NjI0MCwgMHg2NjAwLCAweGE2YzEsIDB4YTc4MSwgMHg2NzQwLCAweGE1MDEsIDB4NjVjMCwgMHg2NDgwLCAweGE0NDEsIDB4NmMwMCwgMHhhY2MxLCAweGFkODEsIDB4NmQ0MCwgMHhhZjAxLCAweDZmYzAsIDB4NmU4MCwgMHhhZTQxLCAweGFhMDEsIDB4NmFjMCwgMHg2YjgwLCAweGFiNDEsIDB4NjkwMCwgMHhhOWMxLCAweGE4ODEsIDB4Njg0MCwgMHg3ODAwLCAweGI4YzEsIDB4Yjk4MSwgMHg3OTQwLCAweGJiMDEsIDB4N2JjMCwgMHg3YTgwLCAweGJhNDEsIDB4YmUwMSwgMHg3ZWMwLCAweDdmODAsIDB4YmY0MSwgMHg3ZDAwLCAweGJkYzEsIDB4YmM4MSwgMHg3YzQwLCAweGI0MDEsIDB4NzRjMCwgMHg3NTgwLCAweGI1NDEsIDB4NzcwMCwgMHhiN2MxLCAweGI2ODEsIDB4NzY0MCwgMHg3MjAwLCAweGIyYzEsIDB4YjM4MSwgMHg3MzQwLCAweGIxMDEsIDB4NzFjMCwgMHg3MDgwLCAweGIwNDEsIDB4NTAwMCwgMHg5MGMxLCAweDkxODEsIDB4NTE0MCwgMHg5MzAxLCAweDUzYzAsIDB4NTI4MCwgMHg5MjQxLCAweDk2MDEsIDB4NTZjMCwgMHg1NzgwLCAweDk3NDEsIDB4NTUwMCwgMHg5NWMxLCAweDk0ODEsIDB4NTQ0MCwgMHg5YzAxLCAweDVjYzAsIDB4NWQ4MCwgMHg5ZDQxLCAweDVmMDAsIDB4OWZjMSwgMHg5ZTgxLCAweDVlNDAsIDB4NWEwMCwgMHg5YWMxLCAweDliODEsIDB4NWI0MCwgMHg5OTAxLCAweDU5YzAsIDB4NTg4MCwgMHg5ODQxLCAweDg4MDEsIDB4NDhjMCwgMHg0OTgwLCAweDg5NDEsIDB4NGIwMCwgMHg4YmMxLCAweDhhODEsIDB4NGE0MCwgMHg0ZTAwLCAweDhlYzEsIDB4OGY4MSwgMHg0ZjQwLCAweDhkMDEsIDB4NGRjMCwgMHg0YzgwLCAweDhjNDEsIDB4NDQwMCwgMHg4NGMxLCAweDg1ODEsIDB4NDU0MCwgMHg4NzAxLCAweDQ3YzAsIDB4NDY4MCwgMHg4NjQxLCAweDgyMDEsIDB4NDJjMCwgMHg0MzgwLCAweDgzNDEsIDB4NDEwMCwgMHg4MWMxLCAweDgwODEsIDB4NDA0MF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NyYy0xNi1tb2RidXMnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gdHlwZW9mIHByZXZpb3VzICE9PSAndW5kZWZpbmVkJyA/IH5+cHJldmlvdXMgOiAweGZmZmY7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gKFRBQkxFWyhjcmMgXiBieXRlKSAmIDB4ZmZdIF4gY3JjID4+IDgpICYgMHhmZmZmO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X21vZGJ1cy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCd4bW9kZW0nLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gdHlwZW9mIHByZXZpb3VzICE9PSAndW5kZWZpbmVkJyA/IH5+cHJldmlvdXMgOiAweDA7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgdmFyIGNvZGUgPSBjcmMgPj4+IDggJiAweEZGO1xuXG4gICAgY29kZSBePSBieXRlICYgMHhGRjtcbiAgICBjb2RlIF49IGNvZGUgPj4+IDQ7XG4gICAgY3JjID0gY3JjIDw8IDggJiAweEZGRkY7XG4gICAgY3JjIF49IGNvZGU7XG4gICAgY29kZSA9IGNvZGUgPDwgNSAmIDB4RkZGRjtcbiAgICBjcmMgXj0gY29kZTtcbiAgICBjb2RlID0gY29kZSA8PCA3ICYgMHhGRkZGO1xuICAgIGNyYyBePSBjb2RlO1xuICB9XG5cbiAgcmV0dXJuIGNyYztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jcmMvbGliL2NyYzE2X3htb2RlbS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWtlcm1pdCAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwLCAweDExODksIDB4MjMxMiwgMHgzMjliLCAweDQ2MjQsIDB4NTdhZCwgMHg2NTM2LCAweDc0YmYsIDB4OGM0OCwgMHg5ZGMxLCAweGFmNWEsIDB4YmVkMywgMHhjYTZjLCAweGRiZTUsIDB4ZTk3ZSwgMHhmOGY3LCAweDEwODEsIDB4MDEwOCwgMHgzMzkzLCAweDIyMWEsIDB4NTZhNSwgMHg0NzJjLCAweDc1YjcsIDB4NjQzZSwgMHg5Y2M5LCAweDhkNDAsIDB4YmZkYiwgMHhhZTUyLCAweGRhZWQsIDB4Y2I2NCwgMHhmOWZmLCAweGU4NzYsIDB4MjEwMiwgMHgzMDhiLCAweDAyMTAsIDB4MTM5OSwgMHg2NzI2LCAweDc2YWYsIDB4NDQzNCwgMHg1NWJkLCAweGFkNGEsIDB4YmNjMywgMHg4ZTU4LCAweDlmZDEsIDB4ZWI2ZSwgMHhmYWU3LCAweGM4N2MsIDB4ZDlmNSwgMHgzMTgzLCAweDIwMGEsIDB4MTI5MSwgMHgwMzE4LCAweDc3YTcsIDB4NjYyZSwgMHg1NGI1LCAweDQ1M2MsIDB4YmRjYiwgMHhhYzQyLCAweDllZDksIDB4OGY1MCwgMHhmYmVmLCAweGVhNjYsIDB4ZDhmZCwgMHhjOTc0LCAweDQyMDQsIDB4NTM4ZCwgMHg2MTE2LCAweDcwOWYsIDB4MDQyMCwgMHgxNWE5LCAweDI3MzIsIDB4MzZiYiwgMHhjZTRjLCAweGRmYzUsIDB4ZWQ1ZSwgMHhmY2Q3LCAweDg4NjgsIDB4OTllMSwgMHhhYjdhLCAweGJhZjMsIDB4NTI4NSwgMHg0MzBjLCAweDcxOTcsIDB4NjAxZSwgMHgxNGExLCAweDA1MjgsIDB4MzdiMywgMHgyNjNhLCAweGRlY2QsIDB4Y2Y0NCwgMHhmZGRmLCAweGVjNTYsIDB4OThlOSwgMHg4OTYwLCAweGJiZmIsIDB4YWE3MiwgMHg2MzA2LCAweDcyOGYsIDB4NDAxNCwgMHg1MTlkLCAweDI1MjIsIDB4MzRhYiwgMHgwNjMwLCAweDE3YjksIDB4ZWY0ZSwgMHhmZWM3LCAweGNjNWMsIDB4ZGRkNSwgMHhhOTZhLCAweGI4ZTMsIDB4OGE3OCwgMHg5YmYxLCAweDczODcsIDB4NjIwZSwgMHg1MDk1LCAweDQxMWMsIDB4MzVhMywgMHgyNDJhLCAweDE2YjEsIDB4MDczOCwgMHhmZmNmLCAweGVlNDYsIDB4ZGNkZCwgMHhjZDU0LCAweGI5ZWIsIDB4YTg2MiwgMHg5YWY5LCAweDhiNzAsIDB4ODQwOCwgMHg5NTgxLCAweGE3MWEsIDB4YjY5MywgMHhjMjJjLCAweGQzYTUsIDB4ZTEzZSwgMHhmMGI3LCAweDA4NDAsIDB4MTljOSwgMHgyYjUyLCAweDNhZGIsIDB4NGU2NCwgMHg1ZmVkLCAweDZkNzYsIDB4N2NmZiwgMHg5NDg5LCAweDg1MDAsIDB4Yjc5YiwgMHhhNjEyLCAweGQyYWQsIDB4YzMyNCwgMHhmMWJmLCAweGUwMzYsIDB4MThjMSwgMHgwOTQ4LCAweDNiZDMsIDB4MmE1YSwgMHg1ZWU1LCAweDRmNmMsIDB4N2RmNywgMHg2YzdlLCAweGE1MGEsIDB4YjQ4MywgMHg4NjE4LCAweDk3OTEsIDB4ZTMyZSwgMHhmMmE3LCAweGMwM2MsIDB4ZDFiNSwgMHgyOTQyLCAweDM4Y2IsIDB4MGE1MCwgMHgxYmQ5LCAweDZmNjYsIDB4N2VlZiwgMHg0Yzc0LCAweDVkZmQsIDB4YjU4YiwgMHhhNDAyLCAweDk2OTksIDB4ODcxMCwgMHhmM2FmLCAweGUyMjYsIDB4ZDBiZCwgMHhjMTM0LCAweDM5YzMsIDB4Mjg0YSwgMHgxYWQxLCAweDBiNTgsIDB4N2ZlNywgMHg2ZTZlLCAweDVjZjUsIDB4NGQ3YywgMHhjNjBjLCAweGQ3ODUsIDB4ZTUxZSwgMHhmNDk3LCAweDgwMjgsIDB4OTFhMSwgMHhhMzNhLCAweGIyYjMsIDB4NGE0NCwgMHg1YmNkLCAweDY5NTYsIDB4NzhkZiwgMHgwYzYwLCAweDFkZTksIDB4MmY3MiwgMHgzZWZiLCAweGQ2OGQsIDB4YzcwNCwgMHhmNTlmLCAweGU0MTYsIDB4OTBhOSwgMHg4MTIwLCAweGIzYmIsIDB4YTIzMiwgMHg1YWM1LCAweDRiNGMsIDB4NzlkNywgMHg2ODVlLCAweDFjZTEsIDB4MGQ2OCwgMHgzZmYzLCAweDJlN2EsIDB4ZTcwZSwgMHhmNjg3LCAweGM0MWMsIDB4ZDU5NSwgMHhhMTJhLCAweGIwYTMsIDB4ODIzOCwgMHg5M2IxLCAweDZiNDYsIDB4N2FjZiwgMHg0ODU0LCAweDU5ZGQsIDB4MmQ2MiwgMHgzY2ViLCAweDBlNzAsIDB4MWZmOSwgMHhmNzhmLCAweGU2MDYsIDB4ZDQ5ZCwgMHhjNTE0LCAweGIxYWIsIDB4YTAyMiwgMHg5MmI5LCAweDgzMzAsIDB4N2JjNywgMHg2YTRlLCAweDU4ZDUsIDB4NDk1YywgMHgzZGUzLCAweDJjNmEsIDB4MWVmMSwgMHgwZjc4XTtcblxuaWYgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgVEFCTEUgPSBuZXcgSW50MzJBcnJheShUQUJMRSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKDAsIF9kZWZpbmVfY3JjMi5kZWZhdWx0KSgna2VybWl0JywgZnVuY3Rpb24gKGJ1ZiwgcHJldmlvdXMpIHtcbiAgaWYgKCFfYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSAoMCwgX2NyZWF0ZV9idWZmZXIyLmRlZmF1bHQpKGJ1Zik7XG5cbiAgdmFyIGNyYyA9IHR5cGVvZiBwcmV2aW91cyAhPT0gJ3VuZGVmaW5lZCcgPyB+fnByZXZpb3VzIDogMHgwMDAwO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGJ5dGUgPSBidWZbaW5kZXhdO1xuICAgIGNyYyA9IChUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+PiA4KSAmIDB4ZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMxNl9rZXJtaXQuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlciA9IHJlcXVpcmUoJy4vY3JlYXRlX2J1ZmZlcicpO1xuXG52YXIgX2NyZWF0ZV9idWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlX2J1ZmZlcik7XG5cbnZhciBfZGVmaW5lX2NyYyA9IHJlcXVpcmUoJy4vZGVmaW5lX2NyYycpO1xuXG52YXIgX2RlZmluZV9jcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lX2NyYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEdlbmVyYXRlZCBieSBgLi9weWNyYy5weSAtLWFsZ29yaXRobT10YWJsZS1kcml2ZSAtLW1vZGVsPWNyYy0yNCAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwMDAsIDB4ODY0Y2ZiLCAweDhhZDUwZCwgMHgwYzk5ZjYsIDB4OTNlNmUxLCAweDE1YWExYSwgMHgxOTMzZWMsIDB4OWY3ZjE3LCAweGExODEzOSwgMHgyN2NkYzIsIDB4MmI1NDM0LCAweGFkMThjZiwgMHgzMjY3ZDgsIDB4YjQyYjIzLCAweGI4YjJkNSwgMHgzZWZlMmUsIDB4YzU0ZTg5LCAweDQzMDI3MiwgMHg0ZjliODQsIDB4YzlkNzdmLCAweDU2YTg2OCwgMHhkMGU0OTMsIDB4ZGM3ZDY1LCAweDVhMzE5ZSwgMHg2NGNmYjAsIDB4ZTI4MzRiLCAweGVlMWFiZCwgMHg2ODU2NDYsIDB4ZjcyOTUxLCAweDcxNjVhYSwgMHg3ZGZjNWMsIDB4ZmJiMGE3LCAweDBjZDFlOSwgMHg4YTlkMTIsIDB4ODYwNGU0LCAweDAwNDgxZiwgMHg5ZjM3MDgsIDB4MTk3YmYzLCAweDE1ZTIwNSwgMHg5M2FlZmUsIDB4YWQ1MGQwLCAweDJiMWMyYiwgMHgyNzg1ZGQsIDB4YTFjOTI2LCAweDNlYjYzMSwgMHhiOGZhY2EsIDB4YjQ2MzNjLCAweDMyMmZjNywgMHhjOTlmNjAsIDB4NGZkMzliLCAweDQzNGE2ZCwgMHhjNTA2OTYsIDB4NWE3OTgxLCAweGRjMzU3YSwgMHhkMGFjOGMsIDB4NTZlMDc3LCAweDY4MWU1OSwgMHhlZTUyYTIsIDB4ZTJjYjU0LCAweDY0ODdhZiwgMHhmYmY4YjgsIDB4N2RiNDQzLCAweDcxMmRiNSwgMHhmNzYxNGUsIDB4MTlhM2QyLCAweDlmZWYyOSwgMHg5Mzc2ZGYsIDB4MTUzYTI0LCAweDhhNDUzMywgMHgwYzA5YzgsIDB4MDA5MDNlLCAweDg2ZGNjNSwgMHhiODIyZWIsIDB4M2U2ZTEwLCAweDMyZjdlNiwgMHhiNGJiMWQsIDB4MmJjNDBhLCAweGFkODhmMSwgMHhhMTExMDcsIDB4Mjc1ZGZjLCAweGRjZWQ1YiwgMHg1YWExYTAsIDB4NTYzODU2LCAweGQwNzRhZCwgMHg0ZjBiYmEsIDB4Yzk0NzQxLCAweGM1ZGViNywgMHg0MzkyNGMsIDB4N2Q2YzYyLCAweGZiMjA5OSwgMHhmN2I5NmYsIDB4NzFmNTk0LCAweGVlOGE4MywgMHg2OGM2NzgsIDB4NjQ1ZjhlLCAweGUyMTM3NSwgMHgxNTcyM2IsIDB4OTMzZWMwLCAweDlmYTczNiwgMHgxOWViY2QsIDB4ODY5NGRhLCAweDAwZDgyMSwgMHgwYzQxZDcsIDB4OGEwZDJjLCAweGI0ZjMwMiwgMHgzMmJmZjksIDB4M2UyNjBmLCAweGI4NmFmNCwgMHgyNzE1ZTMsIDB4YTE1OTE4LCAweGFkYzBlZSwgMHgyYjhjMTUsIDB4ZDAzY2IyLCAweDU2NzA0OSwgMHg1YWU5YmYsIDB4ZGNhNTQ0LCAweDQzZGE1MywgMHhjNTk2YTgsIDB4YzkwZjVlLCAweDRmNDNhNSwgMHg3MWJkOGIsIDB4ZjdmMTcwLCAweGZiNjg4NiwgMHg3ZDI0N2QsIDB4ZTI1YjZhLCAweDY0MTc5MSwgMHg2ODhlNjcsIDB4ZWVjMjljLCAweDMzNDdhNCwgMHhiNTBiNWYsIDB4Yjk5MmE5LCAweDNmZGU1MiwgMHhhMGExNDUsIDB4MjZlZGJlLCAweDJhNzQ0OCwgMHhhYzM4YjMsIDB4OTJjNjlkLCAweDE0OGE2NiwgMHgxODEzOTAsIDB4OWU1ZjZiLCAweDAxMjA3YywgMHg4NzZjODcsIDB4OGJmNTcxLCAweDBkYjk4YSwgMHhmNjA5MmQsIDB4NzA0NWQ2LCAweDdjZGMyMCwgMHhmYTkwZGIsIDB4NjVlZmNjLCAweGUzYTMzNywgMHhlZjNhYzEsIDB4Njk3NjNhLCAweDU3ODgxNCwgMHhkMWM0ZWYsIDB4ZGQ1ZDE5LCAweDViMTFlMiwgMHhjNDZlZjUsIDB4NDIyMjBlLCAweDRlYmJmOCwgMHhjOGY3MDMsIDB4M2Y5NjRkLCAweGI5ZGFiNiwgMHhiNTQzNDAsIDB4MzMwZmJiLCAweGFjNzBhYywgMHgyYTNjNTcsIDB4MjZhNWExLCAweGEwZTk1YSwgMHg5ZTE3NzQsIDB4MTg1YjhmLCAweDE0YzI3OSwgMHg5MjhlODIsIDB4MGRmMTk1LCAweDhiYmQ2ZSwgMHg4NzI0OTgsIDB4MDE2ODYzLCAweGZhZDhjNCwgMHg3Yzk0M2YsIDB4NzAwZGM5LCAweGY2NDEzMiwgMHg2OTNlMjUsIDB4ZWY3MmRlLCAweGUzZWIyOCwgMHg2NWE3ZDMsIDB4NWI1OWZkLCAweGRkMTUwNiwgMHhkMThjZjAsIDB4NTdjMDBiLCAweGM4YmYxYywgMHg0ZWYzZTcsIDB4NDI2YTExLCAweGM0MjZlYSwgMHgyYWU0NzYsIDB4YWNhODhkLCAweGEwMzE3YiwgMHgyNjdkODAsIDB4YjkwMjk3LCAweDNmNGU2YywgMHgzM2Q3OWEsIDB4YjU5YjYxLCAweDhiNjU0ZiwgMHgwZDI5YjQsIDB4MDFiMDQyLCAweDg3ZmNiOSwgMHgxODgzYWUsIDB4OWVjZjU1LCAweDkyNTZhMywgMHgxNDFhNTgsIDB4ZWZhYWZmLCAweDY5ZTYwNCwgMHg2NTdmZjIsIDB4ZTMzMzA5LCAweDdjNGMxZSwgMHhmYTAwZTUsIDB4ZjY5OTEzLCAweDcwZDVlOCwgMHg0ZTJiYzYsIDB4Yzg2NzNkLCAweGM0ZmVjYiwgMHg0MmIyMzAsIDB4ZGRjZDI3LCAweDViODFkYywgMHg1NzE4MmEsIDB4ZDE1NGQxLCAweDI2MzU5ZiwgMHhhMDc5NjQsIDB4YWNlMDkyLCAweDJhYWM2OSwgMHhiNWQzN2UsIDB4MzM5Zjg1LCAweDNmMDY3MywgMHhiOTRhODgsIDB4ODdiNGE2LCAweDAxZjg1ZCwgMHgwZDYxYWIsIDB4OGIyZDUwLCAweDE0NTI0NywgMHg5MjFlYmMsIDB4OWU4NzRhLCAweDE4Y2JiMSwgMHhlMzdiMTYsIDB4NjUzN2VkLCAweDY5YWUxYiwgMHhlZmUyZTAsIDB4NzA5ZGY3LCAweGY2ZDEwYywgMHhmYTQ4ZmEsIDB4N2MwNDAxLCAweDQyZmEyZiwgMHhjNGI2ZDQsIDB4YzgyZjIyLCAweDRlNjNkOSwgMHhkMTFjY2UsIDB4NTc1MDM1LCAweDViYzljMywgMHhkZDg1MzhdO1xuXG5pZiAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSBUQUJMRSA9IG5ldyBJbnQzMkFycmF5KFRBQkxFKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoMCwgX2RlZmluZV9jcmMyLmRlZmF1bHQpKCdjcmMtMjQnLCBmdW5jdGlvbiAoYnVmLCBwcmV2aW91cykge1xuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gdHlwZW9mIHByZXZpb3VzICE9PSAndW5kZWZpbmVkJyA/IH5+cHJldmlvdXMgOiAweGI3MDRjZTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSAoVEFCTEVbKGNyYyA+PiAxNiBeIGJ5dGUpICYgMHhmZl0gXiBjcmMgPDwgOCkgJiAweGZmZmZmZjtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMyNC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWNyYy0zMiAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwMDAwMCwgMHg3NzA3MzA5NiwgMHhlZTBlNjEyYywgMHg5OTA5NTFiYSwgMHgwNzZkYzQxOSwgMHg3MDZhZjQ4ZiwgMHhlOTYzYTUzNSwgMHg5ZTY0OTVhMywgMHgwZWRiODgzMiwgMHg3OWRjYjhhNCwgMHhlMGQ1ZTkxZSwgMHg5N2QyZDk4OCwgMHgwOWI2NGMyYiwgMHg3ZWIxN2NiZCwgMHhlN2I4MmQwNywgMHg5MGJmMWQ5MSwgMHgxZGI3MTA2NCwgMHg2YWIwMjBmMiwgMHhmM2I5NzE0OCwgMHg4NGJlNDFkZSwgMHgxYWRhZDQ3ZCwgMHg2ZGRkZTRlYiwgMHhmNGQ0YjU1MSwgMHg4M2QzODVjNywgMHgxMzZjOTg1NiwgMHg2NDZiYThjMCwgMHhmZDYyZjk3YSwgMHg4YTY1YzllYywgMHgxNDAxNWM0ZiwgMHg2MzA2NmNkOSwgMHhmYTBmM2Q2MywgMHg4ZDA4MGRmNSwgMHgzYjZlMjBjOCwgMHg0YzY5MTA1ZSwgMHhkNTYwNDFlNCwgMHhhMjY3NzE3MiwgMHgzYzAzZTRkMSwgMHg0YjA0ZDQ0NywgMHhkMjBkODVmZCwgMHhhNTBhYjU2YiwgMHgzNWI1YThmYSwgMHg0MmIyOTg2YywgMHhkYmJiYzlkNiwgMHhhY2JjZjk0MCwgMHgzMmQ4NmNlMywgMHg0NWRmNWM3NSwgMHhkY2Q2MGRjZiwgMHhhYmQxM2Q1OSwgMHgyNmQ5MzBhYywgMHg1MWRlMDAzYSwgMHhjOGQ3NTE4MCwgMHhiZmQwNjExNiwgMHgyMWI0ZjRiNSwgMHg1NmIzYzQyMywgMHhjZmJhOTU5OSwgMHhiOGJkYTUwZiwgMHgyODAyYjg5ZSwgMHg1ZjA1ODgwOCwgMHhjNjBjZDliMiwgMHhiMTBiZTkyNCwgMHgyZjZmN2M4NywgMHg1ODY4NGMxMSwgMHhjMTYxMWRhYiwgMHhiNjY2MmQzZCwgMHg3NmRjNDE5MCwgMHgwMWRiNzEwNiwgMHg5OGQyMjBiYywgMHhlZmQ1MTAyYSwgMHg3MWIxODU4OSwgMHgwNmI2YjUxZiwgMHg5ZmJmZTRhNSwgMHhlOGI4ZDQzMywgMHg3ODA3YzlhMiwgMHgwZjAwZjkzNCwgMHg5NjA5YTg4ZSwgMHhlMTBlOTgxOCwgMHg3ZjZhMGRiYiwgMHgwODZkM2QyZCwgMHg5MTY0NmM5NywgMHhlNjYzNWMwMSwgMHg2YjZiNTFmNCwgMHgxYzZjNjE2MiwgMHg4NTY1MzBkOCwgMHhmMjYyMDA0ZSwgMHg2YzA2OTVlZCwgMHgxYjAxYTU3YiwgMHg4MjA4ZjRjMSwgMHhmNTBmYzQ1NywgMHg2NWIwZDljNiwgMHgxMmI3ZTk1MCwgMHg4YmJlYjhlYSwgMHhmY2I5ODg3YywgMHg2MmRkMWRkZiwgMHgxNWRhMmQ0OSwgMHg4Y2QzN2NmMywgMHhmYmQ0NGM2NSwgMHg0ZGIyNjE1OCwgMHgzYWI1NTFjZSwgMHhhM2JjMDA3NCwgMHhkNGJiMzBlMiwgMHg0YWRmYTU0MSwgMHgzZGQ4OTVkNywgMHhhNGQxYzQ2ZCwgMHhkM2Q2ZjRmYiwgMHg0MzY5ZTk2YSwgMHgzNDZlZDlmYywgMHhhZDY3ODg0NiwgMHhkYTYwYjhkMCwgMHg0NDA0MmQ3MywgMHgzMzAzMWRlNSwgMHhhYTBhNGM1ZiwgMHhkZDBkN2NjOSwgMHg1MDA1NzEzYywgMHgyNzAyNDFhYSwgMHhiZTBiMTAxMCwgMHhjOTBjMjA4NiwgMHg1NzY4YjUyNSwgMHgyMDZmODViMywgMHhiOTY2ZDQwOSwgMHhjZTYxZTQ5ZiwgMHg1ZWRlZjkwZSwgMHgyOWQ5Yzk5OCwgMHhiMGQwOTgyMiwgMHhjN2Q3YThiNCwgMHg1OWIzM2QxNywgMHgyZWI0MGQ4MSwgMHhiN2JkNWMzYiwgMHhjMGJhNmNhZCwgMHhlZGI4ODMyMCwgMHg5YWJmYjNiNiwgMHgwM2I2ZTIwYywgMHg3NGIxZDI5YSwgMHhlYWQ1NDczOSwgMHg5ZGQyNzdhZiwgMHgwNGRiMjYxNSwgMHg3M2RjMTY4MywgMHhlMzYzMGIxMiwgMHg5NDY0M2I4NCwgMHgwZDZkNmEzZSwgMHg3YTZhNWFhOCwgMHhlNDBlY2YwYiwgMHg5MzA5ZmY5ZCwgMHgwYTAwYWUyNywgMHg3ZDA3OWViMSwgMHhmMDBmOTM0NCwgMHg4NzA4YTNkMiwgMHgxZTAxZjI2OCwgMHg2OTA2YzJmZSwgMHhmNzYyNTc1ZCwgMHg4MDY1NjdjYiwgMHgxOTZjMzY3MSwgMHg2ZTZiMDZlNywgMHhmZWQ0MWI3NiwgMHg4OWQzMmJlMCwgMHgxMGRhN2E1YSwgMHg2N2RkNGFjYywgMHhmOWI5ZGY2ZiwgMHg4ZWJlZWZmOSwgMHgxN2I3YmU0MywgMHg2MGIwOGVkNSwgMHhkNmQ2YTNlOCwgMHhhMWQxOTM3ZSwgMHgzOGQ4YzJjNCwgMHg0ZmRmZjI1MiwgMHhkMWJiNjdmMSwgMHhhNmJjNTc2NywgMHgzZmI1MDZkZCwgMHg0OGIyMzY0YiwgMHhkODBkMmJkYSwgMHhhZjBhMWI0YywgMHgzNjAzNGFmNiwgMHg0MTA0N2E2MCwgMHhkZjYwZWZjMywgMHhhODY3ZGY1NSwgMHgzMTZlOGVlZiwgMHg0NjY5YmU3OSwgMHhjYjYxYjM4YywgMHhiYzY2ODMxYSwgMHgyNTZmZDJhMCwgMHg1MjY4ZTIzNiwgMHhjYzBjNzc5NSwgMHhiYjBiNDcwMywgMHgyMjAyMTZiOSwgMHg1NTA1MjYyZiwgMHhjNWJhM2JiZSwgMHhiMmJkMGIyOCwgMHgyYmI0NWE5MiwgMHg1Y2IzNmEwNCwgMHhjMmQ3ZmZhNywgMHhiNWQwY2YzMSwgMHgyY2Q5OWU4YiwgMHg1YmRlYWUxZCwgMHg5YjY0YzJiMCwgMHhlYzYzZjIyNiwgMHg3NTZhYTM5YywgMHgwMjZkOTMwYSwgMHg5YzA5MDZhOSwgMHhlYjBlMzYzZiwgMHg3MjA3Njc4NSwgMHgwNTAwNTcxMywgMHg5NWJmNGE4MiwgMHhlMmI4N2ExNCwgMHg3YmIxMmJhZSwgMHgwY2I2MWIzOCwgMHg5MmQyOGU5YiwgMHhlNWQ1YmUwZCwgMHg3Y2RjZWZiNywgMHgwYmRiZGYyMSwgMHg4NmQzZDJkNCwgMHhmMWQ0ZTI0MiwgMHg2OGRkYjNmOCwgMHgxZmRhODM2ZSwgMHg4MWJlMTZjZCwgMHhmNmI5MjY1YiwgMHg2ZmIwNzdlMSwgMHgxOGI3NDc3NywgMHg4ODA4NWFlNiwgMHhmZjBmNmE3MCwgMHg2NjA2M2JjYSwgMHgxMTAxMGI1YywgMHg4ZjY1OWVmZiwgMHhmODYyYWU2OSwgMHg2MTZiZmZkMywgMHgxNjZjY2Y0NSwgMHhhMDBhZTI3OCwgMHhkNzBkZDJlZSwgMHg0ZTA0ODM1NCwgMHgzOTAzYjNjMiwgMHhhNzY3MjY2MSwgMHhkMDYwMTZmNywgMHg0OTY5NDc0ZCwgMHgzZTZlNzdkYiwgMHhhZWQxNmE0YSwgMHhkOWQ2NWFkYywgMHg0MGRmMGI2NiwgMHgzN2Q4M2JmMCwgMHhhOWJjYWU1MywgMHhkZWJiOWVjNSwgMHg0N2IyY2Y3ZiwgMHgzMGI1ZmZlOSwgMHhiZGJkZjIxYywgMHhjYWJhYzI4YSwgMHg1M2IzOTMzMCwgMHgyNGI0YTNhNiwgMHhiYWQwMzYwNSwgMHhjZGQ3MDY5MywgMHg1NGRlNTcyOSwgMHgyM2Q5NjdiZiwgMHhiMzY2N2EyZSwgMHhjNDYxNGFiOCwgMHg1ZDY4MWIwMiwgMHgyYTZmMmI5NCwgMHhiNDBiYmUzNywgMHhjMzBjOGVhMSwgMHg1YTA1ZGYxYiwgMHgyZDAyZWY4ZF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2NyYy0zMicsIGZ1bmN0aW9uIChidWYsIHByZXZpb3VzKSB7XG4gIGlmICghX2J1ZmZlci5CdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gKDAsIF9jcmVhdGVfYnVmZmVyMi5kZWZhdWx0KShidWYpO1xuXG4gIHZhciBjcmMgPSBwcmV2aW91cyA9PT0gMCA/IDAgOiB+fnByZXZpb3VzIF4gLTE7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJ1Zi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgYnl0ZSA9IGJ1ZltpbmRleF07XG4gICAgY3JjID0gVEFCTEVbKGNyYyBeIGJ5dGUpICYgMHhmZl0gXiBjcmMgPj4+IDg7XG4gIH1cblxuICByZXR1cm4gY3JjIF4gLTE7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmMzMi5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9idWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcblxudmFyIF9jcmVhdGVfYnVmZmVyID0gcmVxdWlyZSgnLi9jcmVhdGVfYnVmZmVyJyk7XG5cbnZhciBfY3JlYXRlX2J1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVfYnVmZmVyKTtcblxudmFyIF9kZWZpbmVfY3JjID0gcmVxdWlyZSgnLi9kZWZpbmVfY3JjJyk7XG5cbnZhciBfZGVmaW5lX2NyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVfY3JjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gR2VuZXJhdGVkIGJ5IGAuL3B5Y3JjLnB5IC0tYWxnb3JpdGhtPXRhYmxlLWRyaXZlbiAtLW1vZGVsPWphbSAtLWdlbmVyYXRlPWNgXG52YXIgVEFCTEUgPSBbMHgwMDAwMDAwMCwgMHg3NzA3MzA5NiwgMHhlZTBlNjEyYywgMHg5OTA5NTFiYSwgMHgwNzZkYzQxOSwgMHg3MDZhZjQ4ZiwgMHhlOTYzYTUzNSwgMHg5ZTY0OTVhMywgMHgwZWRiODgzMiwgMHg3OWRjYjhhNCwgMHhlMGQ1ZTkxZSwgMHg5N2QyZDk4OCwgMHgwOWI2NGMyYiwgMHg3ZWIxN2NiZCwgMHhlN2I4MmQwNywgMHg5MGJmMWQ5MSwgMHgxZGI3MTA2NCwgMHg2YWIwMjBmMiwgMHhmM2I5NzE0OCwgMHg4NGJlNDFkZSwgMHgxYWRhZDQ3ZCwgMHg2ZGRkZTRlYiwgMHhmNGQ0YjU1MSwgMHg4M2QzODVjNywgMHgxMzZjOTg1NiwgMHg2NDZiYThjMCwgMHhmZDYyZjk3YSwgMHg4YTY1YzllYywgMHgxNDAxNWM0ZiwgMHg2MzA2NmNkOSwgMHhmYTBmM2Q2MywgMHg4ZDA4MGRmNSwgMHgzYjZlMjBjOCwgMHg0YzY5MTA1ZSwgMHhkNTYwNDFlNCwgMHhhMjY3NzE3MiwgMHgzYzAzZTRkMSwgMHg0YjA0ZDQ0NywgMHhkMjBkODVmZCwgMHhhNTBhYjU2YiwgMHgzNWI1YThmYSwgMHg0MmIyOTg2YywgMHhkYmJiYzlkNiwgMHhhY2JjZjk0MCwgMHgzMmQ4NmNlMywgMHg0NWRmNWM3NSwgMHhkY2Q2MGRjZiwgMHhhYmQxM2Q1OSwgMHgyNmQ5MzBhYywgMHg1MWRlMDAzYSwgMHhjOGQ3NTE4MCwgMHhiZmQwNjExNiwgMHgyMWI0ZjRiNSwgMHg1NmIzYzQyMywgMHhjZmJhOTU5OSwgMHhiOGJkYTUwZiwgMHgyODAyYjg5ZSwgMHg1ZjA1ODgwOCwgMHhjNjBjZDliMiwgMHhiMTBiZTkyNCwgMHgyZjZmN2M4NywgMHg1ODY4NGMxMSwgMHhjMTYxMWRhYiwgMHhiNjY2MmQzZCwgMHg3NmRjNDE5MCwgMHgwMWRiNzEwNiwgMHg5OGQyMjBiYywgMHhlZmQ1MTAyYSwgMHg3MWIxODU4OSwgMHgwNmI2YjUxZiwgMHg5ZmJmZTRhNSwgMHhlOGI4ZDQzMywgMHg3ODA3YzlhMiwgMHgwZjAwZjkzNCwgMHg5NjA5YTg4ZSwgMHhlMTBlOTgxOCwgMHg3ZjZhMGRiYiwgMHgwODZkM2QyZCwgMHg5MTY0NmM5NywgMHhlNjYzNWMwMSwgMHg2YjZiNTFmNCwgMHgxYzZjNjE2MiwgMHg4NTY1MzBkOCwgMHhmMjYyMDA0ZSwgMHg2YzA2OTVlZCwgMHgxYjAxYTU3YiwgMHg4MjA4ZjRjMSwgMHhmNTBmYzQ1NywgMHg2NWIwZDljNiwgMHgxMmI3ZTk1MCwgMHg4YmJlYjhlYSwgMHhmY2I5ODg3YywgMHg2MmRkMWRkZiwgMHgxNWRhMmQ0OSwgMHg4Y2QzN2NmMywgMHhmYmQ0NGM2NSwgMHg0ZGIyNjE1OCwgMHgzYWI1NTFjZSwgMHhhM2JjMDA3NCwgMHhkNGJiMzBlMiwgMHg0YWRmYTU0MSwgMHgzZGQ4OTVkNywgMHhhNGQxYzQ2ZCwgMHhkM2Q2ZjRmYiwgMHg0MzY5ZTk2YSwgMHgzNDZlZDlmYywgMHhhZDY3ODg0NiwgMHhkYTYwYjhkMCwgMHg0NDA0MmQ3MywgMHgzMzAzMWRlNSwgMHhhYTBhNGM1ZiwgMHhkZDBkN2NjOSwgMHg1MDA1NzEzYywgMHgyNzAyNDFhYSwgMHhiZTBiMTAxMCwgMHhjOTBjMjA4NiwgMHg1NzY4YjUyNSwgMHgyMDZmODViMywgMHhiOTY2ZDQwOSwgMHhjZTYxZTQ5ZiwgMHg1ZWRlZjkwZSwgMHgyOWQ5Yzk5OCwgMHhiMGQwOTgyMiwgMHhjN2Q3YThiNCwgMHg1OWIzM2QxNywgMHgyZWI0MGQ4MSwgMHhiN2JkNWMzYiwgMHhjMGJhNmNhZCwgMHhlZGI4ODMyMCwgMHg5YWJmYjNiNiwgMHgwM2I2ZTIwYywgMHg3NGIxZDI5YSwgMHhlYWQ1NDczOSwgMHg5ZGQyNzdhZiwgMHgwNGRiMjYxNSwgMHg3M2RjMTY4MywgMHhlMzYzMGIxMiwgMHg5NDY0M2I4NCwgMHgwZDZkNmEzZSwgMHg3YTZhNWFhOCwgMHhlNDBlY2YwYiwgMHg5MzA5ZmY5ZCwgMHgwYTAwYWUyNywgMHg3ZDA3OWViMSwgMHhmMDBmOTM0NCwgMHg4NzA4YTNkMiwgMHgxZTAxZjI2OCwgMHg2OTA2YzJmZSwgMHhmNzYyNTc1ZCwgMHg4MDY1NjdjYiwgMHgxOTZjMzY3MSwgMHg2ZTZiMDZlNywgMHhmZWQ0MWI3NiwgMHg4OWQzMmJlMCwgMHgxMGRhN2E1YSwgMHg2N2RkNGFjYywgMHhmOWI5ZGY2ZiwgMHg4ZWJlZWZmOSwgMHgxN2I3YmU0MywgMHg2MGIwOGVkNSwgMHhkNmQ2YTNlOCwgMHhhMWQxOTM3ZSwgMHgzOGQ4YzJjNCwgMHg0ZmRmZjI1MiwgMHhkMWJiNjdmMSwgMHhhNmJjNTc2NywgMHgzZmI1MDZkZCwgMHg0OGIyMzY0YiwgMHhkODBkMmJkYSwgMHhhZjBhMWI0YywgMHgzNjAzNGFmNiwgMHg0MTA0N2E2MCwgMHhkZjYwZWZjMywgMHhhODY3ZGY1NSwgMHgzMTZlOGVlZiwgMHg0NjY5YmU3OSwgMHhjYjYxYjM4YywgMHhiYzY2ODMxYSwgMHgyNTZmZDJhMCwgMHg1MjY4ZTIzNiwgMHhjYzBjNzc5NSwgMHhiYjBiNDcwMywgMHgyMjAyMTZiOSwgMHg1NTA1MjYyZiwgMHhjNWJhM2JiZSwgMHhiMmJkMGIyOCwgMHgyYmI0NWE5MiwgMHg1Y2IzNmEwNCwgMHhjMmQ3ZmZhNywgMHhiNWQwY2YzMSwgMHgyY2Q5OWU4YiwgMHg1YmRlYWUxZCwgMHg5YjY0YzJiMCwgMHhlYzYzZjIyNiwgMHg3NTZhYTM5YywgMHgwMjZkOTMwYSwgMHg5YzA5MDZhOSwgMHhlYjBlMzYzZiwgMHg3MjA3Njc4NSwgMHgwNTAwNTcxMywgMHg5NWJmNGE4MiwgMHhlMmI4N2ExNCwgMHg3YmIxMmJhZSwgMHgwY2I2MWIzOCwgMHg5MmQyOGU5YiwgMHhlNWQ1YmUwZCwgMHg3Y2RjZWZiNywgMHgwYmRiZGYyMSwgMHg4NmQzZDJkNCwgMHhmMWQ0ZTI0MiwgMHg2OGRkYjNmOCwgMHgxZmRhODM2ZSwgMHg4MWJlMTZjZCwgMHhmNmI5MjY1YiwgMHg2ZmIwNzdlMSwgMHgxOGI3NDc3NywgMHg4ODA4NWFlNiwgMHhmZjBmNmE3MCwgMHg2NjA2M2JjYSwgMHgxMTAxMGI1YywgMHg4ZjY1OWVmZiwgMHhmODYyYWU2OSwgMHg2MTZiZmZkMywgMHgxNjZjY2Y0NSwgMHhhMDBhZTI3OCwgMHhkNzBkZDJlZSwgMHg0ZTA0ODM1NCwgMHgzOTAzYjNjMiwgMHhhNzY3MjY2MSwgMHhkMDYwMTZmNywgMHg0OTY5NDc0ZCwgMHgzZTZlNzdkYiwgMHhhZWQxNmE0YSwgMHhkOWQ2NWFkYywgMHg0MGRmMGI2NiwgMHgzN2Q4M2JmMCwgMHhhOWJjYWU1MywgMHhkZWJiOWVjNSwgMHg0N2IyY2Y3ZiwgMHgzMGI1ZmZlOSwgMHhiZGJkZjIxYywgMHhjYWJhYzI4YSwgMHg1M2IzOTMzMCwgMHgyNGI0YTNhNiwgMHhiYWQwMzYwNSwgMHhjZGQ3MDY5MywgMHg1NGRlNTcyOSwgMHgyM2Q5NjdiZiwgMHhiMzY2N2EyZSwgMHhjNDYxNGFiOCwgMHg1ZDY4MWIwMiwgMHgyYTZmMmI5NCwgMHhiNDBiYmUzNywgMHhjMzBjOGVhMSwgMHg1YTA1ZGYxYiwgMHgyZDAyZWY4ZF07XG5cbmlmICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIFRBQkxFID0gbmV3IEludDMyQXJyYXkoVEFCTEUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgwLCBfZGVmaW5lX2NyYzIuZGVmYXVsdCkoJ2phbScsIGZ1bmN0aW9uIChidWYpIHtcbiAgdmFyIHByZXZpb3VzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAtMTtcblxuICBpZiAoIV9idWZmZXIuQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9ICgwLCBfY3JlYXRlX2J1ZmZlcjIuZGVmYXVsdCkoYnVmKTtcblxuICB2YXIgY3JjID0gcHJldmlvdXMgPT09IDAgPyAwIDogfn5wcmV2aW91cztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBieXRlID0gYnVmW2luZGV4XTtcbiAgICBjcmMgPSBUQUJMRVsoY3JjIF4gYnl0ZSkgJiAweGZmXSBeIGNyYyA+Pj4gODtcbiAgfVxuXG4gIHJldHVybiBjcmM7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY3JjL2xpYi9jcmNqYW0uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiB1aWQtc2FmZVxuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNS0yMDE3IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgcmFuZG9tQnl0ZXMgPSByZXF1aXJlKCdyYW5kb20tYnl0ZXMnKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBFUVVBTF9FTkRfUkVHRVhQID0gLz0rJC9cbnZhciBQTFVTX0dMT0JBTF9SRUdFWFAgPSAvXFwrL2dcbnZhciBTTEFTSF9HTE9CQUxfUkVHRVhQID0gL1xcLy9nXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB1aWRcbm1vZHVsZS5leHBvcnRzLnN5bmMgPSB1aWRTeW5jXG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pcXVlIElELlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdWlkIChsZW5ndGgsIGNhbGxiYWNrKSB7XG4gIC8vIHZhbGlkYXRlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24sIGlmIHByb3ZpZGVkXG4gIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cblxuICAvLyByZXF1aXJlIHRoZSBjYWxsYmFjayB3aXRob3V0IHByb21pc2VzXG4gIGlmICghY2FsbGJhY2sgJiYgIWdsb2JhbC5Qcm9taXNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgY2FsbGJhY2sgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgLy8gY2xhc3NpYyBjYWxsYmFjayBzdHlsZVxuICAgIHJldHVybiBnZW5lcmF0ZVVpZChsZW5ndGgsIGNhbGxiYWNrKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBnZW5lcmF0ZVVpZChsZW5ndGgsIGZ1bmN0aW9uIG9uVWlkIChlcnIsIHN0cikge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHN0cilcbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBJRCBzeW5jLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB1aWRTeW5jIChsZW5ndGgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nKHJhbmRvbUJ5dGVzLnN5bmMobGVuZ3RoKSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2VuZXJhdGVVaWQgKGxlbmd0aCwgY2FsbGJhY2spIHtcbiAgcmFuZG9tQnl0ZXMobGVuZ3RoLCBmdW5jdGlvbiAoZXJyLCBidWYpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGNhbGxiYWNrKG51bGwsIHRvU3RyaW5nKGJ1ZikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2hhbmdlIGEgQnVmZmVyIGludG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZlxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1N0cmluZyAoYnVmKSB7XG4gIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgLnJlcGxhY2UoRVFVQUxfRU5EX1JFR0VYUCwgJycpXG4gICAgLnJlcGxhY2UoUExVU19HTE9CQUxfUkVHRVhQLCAnLScpXG4gICAgLnJlcGxhY2UoU0xBU0hfR0xPQkFMX1JFR0VYUCwgJ18nKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VpZC1zYWZlL2luZGV4LmpzIiwiLyohXG4gKiByYW5kb20tYnl0ZXNcbiAqIENvcHlyaWdodChjKSAyMDE2IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZ2VuZXJhdGVBdHRlbXB0cyA9IGNyeXB0by5yYW5kb21CeXRlcyA9PT0gY3J5cHRvLnBzZXVkb1JhbmRvbUJ5dGVzID8gMSA6IDNcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGVzXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gcmFuZG9tQnl0ZXNTeW5jXG5cbi8qKlxuICogR2VuZXJhdGVzIHN0cm9uZyBwc2V1ZG8tcmFuZG9tIGJ5dGVzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGVzKHNpemUsIGNhbGxiYWNrKSB7XG4gIC8vIHZhbGlkYXRlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24sIGlmIHByb3ZpZGVkXG4gIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cblxuICAvLyByZXF1aXJlIHRoZSBjYWxsYmFjayB3aXRob3V0IHByb21pc2VzXG4gIGlmICghY2FsbGJhY2sgJiYgIWdsb2JhbC5Qcm9taXNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgY2FsbGJhY2sgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgLy8gY2xhc3NpYyBjYWxsYmFjayBzdHlsZVxuICAgIHJldHVybiBnZW5lcmF0ZVJhbmRvbUJ5dGVzKHNpemUsIGdlbmVyYXRlQXR0ZW1wdHMsIGNhbGxiYWNrKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSwgZ2VuZXJhdGVBdHRlbXB0cywgZnVuY3Rpb24gb25SYW5kb21CeXRlcyhlcnIsIHN0cikge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHN0cilcbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBzdHJvbmcgcHNldWRvLXJhbmRvbSBieXRlcyBzeW5jLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcmV0dXJuIHtCdWZmZXJ9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZXNTeW5jKHNpemUpIHtcbiAgdmFyIGVyciA9IG51bGxcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGdlbmVyYXRlQXR0ZW1wdHM7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyID0gZVxuICAgIH1cbiAgfVxuXG4gIHRocm93IGVyclxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBzdHJvbmcgcHNldWRvLXJhbmRvbSBieXRlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICogQHBhcmFtIHtudW1iZXJ9IGF0dGVtcHRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUJ5dGVzKHNpemUsIGF0dGVtcHRzLCBjYWxsYmFjaykge1xuICBjcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZSwgZnVuY3Rpb24gb25SYW5kb21CeXRlcyhlcnIsIGJ1Zikge1xuICAgIGlmICghZXJyKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgYnVmKVxuICAgIGlmICghLS1hdHRlbXB0cykgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBzZXRUaW1lb3V0KGdlbmVyYXRlUmFuZG9tQnl0ZXMuYmluZChudWxsLCBzaXplLCBhdHRlbXB0cywgY2FsbGJhY2spLCAxMClcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yYW5kb20tYnl0ZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnZhciBpc1N0ZWFybSA9IHJlcXVpcmUoJ2lzc3RyZWFtJyk7XG52YXIgaXNDbGFzcyA9IHJlcXVpcmUoJ2lzLWNsYXNzJyk7XG5cbi8qKlxuICogRXhwb3NlIGFsbCBtZXRob2RzIGluIGNvcmUtdXRpbC1pc1xuICovXG5cbk9iamVjdC5rZXlzKHV0aWxzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgZXhwb3J0c1t0cmFuc2Zvcm0obmFtZSldID0gdXRpbHNbbmFtZV07XG59KTtcblxuLyoqXG4gKiBTdHJlYW0gZGV0ZWN0ZWQgYnkgaXNzdHJlYW1cbiAqL1xuXG5leHBvcnRzLnN0cmVhbSA9IGlzU3RlYXJtO1xuZXhwb3J0cy5yZWFkYWJsZVN0cmVhbSA9IGlzU3RlYXJtLmlzUmVhZGFibGU7XG5leHBvcnRzLndyaXRhYmxlU3RyZWFtID0gaXNTdGVhcm0uaXNXcml0YWJsZTtcbmV4cG9ydHMuZHVwbGV4U3RyZWFtID0gaXNTdGVhcm0uaXNEdXBsZXg7XG5cbi8qKlxuICogQ2xhc3MgZGV0ZWN0ZWQgYnkgaXMtY2xhc3NcbiAqL1xuIGV4cG9ydHMuY2xhc3MgPSBpc0NsYXNzO1xuXG4vKipcbiAqIEV4dGVuZCBtZXRob2RcbiAqL1xuXG5leHBvcnRzLmZpbml0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShvYmopO1xufTtcblxuZXhwb3J0cy5OYU4gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4ob2JqKTtcbn07XG5cbmV4cG9ydHMuZ2VuZXJhdG9yID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqXG4gICAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9iai5uZXh0XG4gICAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9iai50aHJvdztcbn07XG5cbmV4cG9ydHMuZ2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmpcbiAgICAmJiBvYmouY29uc3RydWN0b3JcbiAgICAmJiAnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBvYmouY29uc3RydWN0b3IubmFtZTtcbn07XG5cbmV4cG9ydHMuYXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9ialxuICAgICYmIG9iai5jb25zdHJ1Y3RvclxuICAgICYmICdBc3luY0Z1bmN0aW9uJyA9PT0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG59O1xuXG5leHBvcnRzLnByb21pc2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmpcbiAgICAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLnRoZW47XG59O1xuXG52YXIgTUFYX0lOVF8zMSA9IE1hdGgucG93KDIsIDMxKTtcblxuZXhwb3J0cy5pbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB1dGlscy5pc051bWJlcihvYmopXG4gICAgJiYgb2JqICUgMSA9PT0gMDtcbn07XG5cbmV4cG9ydHMuaW50MzIgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBleHBvcnRzLmludChvYmopXG4gICAgJiYgb2JqIDwgTUFYX0lOVF8zMVxuICAgICYmIG9iaiA+PSAtTUFYX0lOVF8zMTtcbn07XG5cbmV4cG9ydHMubG9uZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIGV4cG9ydHMuaW50KG9iailcbiAgICAmJiAob2JqID49IE1BWF9JTlRfMzEgfHwgb2JqIDwgLU1BWF9JTlRfMzEpO1xufTtcblxuZXhwb3J0cy5Mb25nID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gZXhwb3J0cy5vYmplY3Qob2JqKVxuICAgICYmIGV4cG9ydHMubnVtYmVyKG9iai5oaWdoKVxuICAgICYmIGV4cG9ydHMubnVtYmVyKG9iai5sb3cpO1xufTtcblxuZXhwb3J0cy5kb3VibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB1dGlscy5pc051bWJlcihvYmopXG4gICAgJiYgIWlzTmFOKG9iailcbiAgICAmJiBvYmogJSAxICE9PSAwO1xufTtcblxuLyoqXG4gKiBvdmVycmlkZSBjb3JlLXV0aWwtaXNcbiAqL1xuXG5leHBvcnRzLmRhdGUgPSBmdW5jdGlvbiBpc0RhdGUob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xufTtcblxuZXhwb3J0cy5yZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFJlZ0V4cDtcbn07XG5leHBvcnRzLnJlZ2V4cCA9IGV4cG9ydHMucmVnRXhwO1xuXG5leHBvcnRzLmVycm9yID0gZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yO1xufTtcblxuZXhwb3J0cy5hcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG59O1xuXG4vKipcbiAqIHRyYW5zZm9ybSBpc051bGwgdHlwZSB0byBudWxsXG4gKiBAcGFyYW0ge1t0eXBlXX0gbSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0obSkge1xuICB2YXIgbmFtZSA9IG0uc2xpY2UoMik7XG4gIG5hbWUgPSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICByZXR1cm4gbmFtZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pcy10eXBlLW9mL2luZGV4LmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtdXRpbC1pcy9saWIvdXRpbC5qcyIsInZhciBzdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKVxuXG5cbmZ1bmN0aW9uIGlzU3RyZWFtIChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHN0cmVhbS5TdHJlYW1cbn1cblxuXG5mdW5jdGlvbiBpc1JlYWRhYmxlIChvYmopIHtcbiAgcmV0dXJuIGlzU3RyZWFtKG9iaikgJiYgdHlwZW9mIG9iai5fcmVhZCA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3JlYWRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc1dyaXRhYmxlIChvYmopIHtcbiAgcmV0dXJuIGlzU3RyZWFtKG9iaikgJiYgdHlwZW9mIG9iai5fd3JpdGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLl93cml0YWJsZVN0YXRlID09ICdvYmplY3QnXG59XG5cblxuZnVuY3Rpb24gaXNEdXBsZXggKG9iaikge1xuICByZXR1cm4gaXNSZWFkYWJsZShvYmopICYmIGlzV3JpdGFibGUob2JqKVxufVxuXG5cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgPSBpc1N0cmVhbVxubW9kdWxlLmV4cG9ydHMuaXNSZWFkYWJsZSA9IGlzUmVhZGFibGVcbm1vZHVsZS5leHBvcnRzLmlzV3JpdGFibGUgPSBpc1dyaXRhYmxlXG5tb2R1bGUuZXhwb3J0cy5pc0R1cGxleCAgID0gaXNEdXBsZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pc3N0cmVhbS9pc3N0cmVhbS5qcyIsIihmdW5jdGlvbihyb290KSB7XG4gIHZhciB0b1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuICBmdW5jdGlvbiBmbkJvZHkoZm4pIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChmbikucmVwbGFjZSgvXltee10qe1xccyovLCcnKS5yZXBsYWNlKC9cXHMqfVtefV0qJC8sJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHJldHVybiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAoL15jbGFzc1xccy8udGVzdCh0b1N0cmluZy5jYWxsKGZuKSkgfHxcbiAgICAgICAgICAgICAgKC9eLipjbGFzc0NhbGxDaGVja1xcKC8udGVzdChmbkJvZHkoZm4pKSkpIC8vIGJhYmVsLmpzXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNDbGFzcztcbiAgICB9XG4gICAgZXhwb3J0cy5pc0NsYXNzID0gaXNDbGFzcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQ2xhc3M7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5pc0NsYXNzID0gaXNDbGFzcztcbiAgfVxuXG59KSh0aGlzKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2lzLWNsYXNzL2lzLWNsYXNzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==