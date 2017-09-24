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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Hello World!!! ',
          name
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(9);
} else {
  module.exports = __webpack_require__(10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0-rc.3
 react.production.min.js

 Copyright 2013-present, Facebook, Inc.
 All rights reserved.

 This source code is licensed under the BSD-style license found in the
 LICENSE file in the root directory of this source tree. An additional grant
 of patent rights can be found in the PATENTS file in the same directory.
*/


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var f = __webpack_require__(3),
    p = __webpack_require__(4);__webpack_require__(1);var r = __webpack_require__(2);
function t(a) {
  for (var b = arguments.length - 1, d = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, e = 0; e < b; e++) {
    d += "\x26args[]\x3d" + encodeURIComponent(arguments[e + 1]);
  }b = Error(d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var u = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };function v(a, b, d) {
  this.props = a;this.context = b;this.refs = p;this.updater = d || u;
}v.prototype.isReactComponent = {};v.prototype.setState = function (a, b) {
  "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" !== typeof a && null != a ? t("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};v.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function w(a, b, d) {
  this.props = a;this.context = b;this.refs = p;this.updater = d || u;
}function x() {}x.prototype = v.prototype;var y = w.prototype = new x();y.constructor = w;f(y, v.prototype);y.isPureReactComponent = !0;function z(a, b, d) {
  this.props = a;this.context = b;this.refs = p;this.updater = d || u;
}var A = z.prototype = new x();A.constructor = z;f(A, v.prototype);A.unstable_isAsyncReactComponent = !0;A.render = function () {
  return this.props.children;
};
var B = { Component: v, PureComponent: w, AsyncComponent: z },
    C = { current: null },
    D = Object.prototype.hasOwnProperty,
    E = "function" === typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
    F = { key: !0, ref: !0, __self: !0, __source: !0 };function G(a, b, d, e, c, g, k) {
  return { $$typeof: E, type: a, key: b, ref: d, props: k, _owner: g };
}
G.createElement = function (a, b, d) {
  var e,
      c = {},
      g = null,
      k = null,
      m = null,
      q = null;if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), m = void 0 === b.__self ? null : b.__self, q = void 0 === b.__source ? null : b.__source, b) {
    D.call(b, e) && !F.hasOwnProperty(e) && (c[e] = b[e]);
  }var l = arguments.length - 2;if (1 === l) c.children = d;else if (1 < l) {
    for (var h = Array(l), n = 0; n < l; n++) {
      h[n] = arguments[n + 2];
    }c.children = h;
  }if (a && a.defaultProps) for (e in l = a.defaultProps, l) {
    void 0 === c[e] && (c[e] = l[e]);
  }return G(a, g, k, m, q, C.current, c);
};
G.createFactory = function (a) {
  var b = G.createElement.bind(null, a);b.type = a;return b;
};G.cloneAndReplaceKey = function (a, b) {
  return G(a.type, b, a.ref, a._self, a._source, a._owner, a.props);
};
G.cloneElement = function (a, b, d) {
  var e = f({}, a.props),
      c = a.key,
      g = a.ref,
      k = a._self,
      m = a._source,
      q = a._owner;if (null != b) {
    void 0 !== b.ref && (g = b.ref, q = C.current);void 0 !== b.key && (c = "" + b.key);if (a.type && a.type.defaultProps) var l = a.type.defaultProps;for (h in b) {
      D.call(b, h) && !F.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== l ? l[h] : b[h]);
    }
  }var h = arguments.length - 2;if (1 === h) e.children = d;else if (1 < h) {
    l = Array(h);for (var n = 0; n < h; n++) {
      l[n] = arguments[n + 2];
    }e.children = l;
  }return G(a.type, c, g, k, m, q, e);
};
G.isValidElement = function (a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === E;
};var H = "function" === typeof Symbol && Symbol.iterator,
    I = "function" === typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var J = /\/+/g,
    K = [];
function L(a, b, d, e) {
  if (K.length) {
    var c = K.pop();c.result = a;c.keyPrefix = b;c.func = d;c.context = e;c.count = 0;return c;
  }return { result: a, keyPrefix: b, func: d, context: e, count: 0 };
}function M(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > K.length && K.push(a);
}
function N(a, b, d, e) {
  var c = typeof a === "undefined" ? "undefined" : _typeof(a);if ("undefined" === c || "boolean" === c) a = null;if (null === a || "string" === c || "number" === c || "object" === c && a.$$typeof === I) return d(e, a, "" === b ? "." + O(a, 0) : b), 1;var g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    c = a[k];var m = b + O(c, k);g += N(c, m, d, e);
  } else if (m = H && a[H] || a["@@iterator"], "function" === typeof m) for (a = m.call(a), k = 0; !(c = a.next()).done;) {
    c = c.value, m = b + O(c, k++), g += N(c, m, d, e);
  } else "object" === c && (d = "" + a, t("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));return g;
}function O(a, b) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function P(a, b) {
  a.func.call(a.context, b, a.count++);
}function Q(a, b, d) {
  var e = a.result,
      c = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? R(a, e, d, r.thatReturnsArgument) : null != a && (G.isValidElement(a) && (a = G.cloneAndReplaceKey(a, c + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(J, "$\x26/") + "/") + d)), e.push(a));
}
function R(a, b, d, e, c) {
  var g = "";null != d && (g = ("" + d).replace(J, "$\x26/") + "/");b = L(b, g, e, c);null == a || N(a, "", Q, b);M(b);
}var S = { forEach: function forEach(a, b, d) {
    if (null == a) return a;b = L(null, null, b, d);null == a || N(a, "", P, b);M(b);
  }, map: function map(a, b, d) {
    if (null == a) return a;var e = [];R(a, e, null, b, d);return e;
  }, count: function count(a) {
    return null == a ? 0 : N(a, "", r.thatReturnsNull, null);
  }, toArray: function toArray(a) {
    var b = [];R(a, b, null, r.thatReturnsArgument);return b;
  } };
module.exports = { Children: { map: S.map, forEach: S.forEach, count: S.count, toArray: S.toArray, only: function only(a) {
      G.isValidElement(a) ? void 0 : t("143");return a;
    } }, Component: B.Component, PureComponent: B.PureComponent, unstable_AsyncComponent: B.AsyncComponent, createElement: G.createElement, cloneElement: G.cloneElement, isValidElement: G.isValidElement, createFactory: G.createFactory, version: "16.0.0-rc.3", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: C, assign: f } };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.0.0-rc.3
 * react.development.js
 *
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {

    'use strict';

    var objectAssign$1 = __webpack_require__(3);
    var require$$0 = __webpack_require__(5);
    var emptyObject = __webpack_require__(4);
    var invariant = __webpack_require__(1);
    var emptyFunction = __webpack_require__(2);
    var checkPropTypes = __webpack_require__(11);

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule reactProdInvariant
     * 
     */

    {
      var warning = require$$0;
    }

    function warnNoop(publicInstance, callerName) {
      {
        var constructor = publicInstance.constructor;
        warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
      }
    }

    /**
     * This is the abstract API for an update queue.
     */
    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };

    var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

    /**
     * Copyright 2014-2015, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule lowPriorityWarning
     */

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning_1 = lowPriorityWarning;

    /**
     * Base class helpers for the updating state of a component.
     */
    function ReactComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    ReactComponent.prototype.isReactComponent = {};

    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
    ReactComponent.prototype.setState = function (partialState, callback) {
      !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
    ReactComponent.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };

    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */
    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(ReactComponent.prototype, methodName, {
          get: function get() {
            lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    /**
     * Base class helpers for the updating state of a component.
     */
    function ReactPureComponent(props, context, updater) {
      // Duplicated from ReactComponent.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    function ComponentDummy() {}
    ComponentDummy.prototype = ReactComponent.prototype;
    var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = ReactPureComponent;
    // Avoid an extra prototype jump for these methods.
    objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    function ReactAsyncComponent(props, context, updater) {
      // Duplicated from ReactComponent.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue_1;
    }

    var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
    asyncComponentPrototype.constructor = ReactAsyncComponent;
    // Avoid an extra prototype jump for these methods.
    objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
    asyncComponentPrototype.unstable_isAsyncReactComponent = true;
    asyncComponentPrototype.render = function () {
      return this.props.children;
    };

    var ReactBaseClasses = {
      Component: ReactComponent,
      PureComponent: ReactPureComponent,
      AsyncComponent: ReactAsyncComponent
    };

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactCurrentOwner
     * 
     */

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    var ReactCurrentOwner_1 = ReactCurrentOwner;

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    {
      var warning$2 = require$$0;
    }

    // The Symbol used to tag the ReactElement type. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };

    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} key
     * @param {string|object} ref
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @param {*} owner
     * @param {*} props
     * @internal
     */
    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allow us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE$1,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {};

        // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };

    /**
     * Create and return a new ReactElement of the given type.
     * See https://facebook.github.io/react/docs/react-api.html#createelement
     */
    ReactElement.createElement = function (type, config, children) {
      var propName;

      // Reserved names are extracted
      var props = {};

      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        // Remaining properties are added to a new props object
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      }

      // Resolve default props
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      {
        if (key || ref) {
          if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
    };

    /**
     * Return a function that produces ReactElements of a given type.
     * See https://facebook.github.io/react/docs/react-api.html#createfactory
     */
    ReactElement.createFactory = function (type) {
      var factory = ReactElement.createElement.bind(null, type);
      // Expose the type on the factory and the prototype so that it can be
      // easily accessed on elements. E.g. `<Foo />.type === Foo`.
      // This should not be named `constructor` since this may not be the function
      // that created the element, and it may not even be a constructor.
      // Legacy hook TODO: Warn if this is accessed
      factory.type = type;
      return factory;
    };

    ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

      return newElement;
    };

    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://facebook.github.io/react/docs/react-api.html#cloneelement
     */
    ReactElement.cloneElement = function (element, config, children) {
      var propName;

      // Original props are copied
      var props = objectAssign$1({}, element.props);

      // Reserved names are extracted
      var key = element.key;
      var ref = element.ref;
      // Self is preserved since the owner is preserved.
      var self = element._self;
      // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.
      var source = element._source;

      // Owner will be preserved, unless ref is overridden
      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner_1.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        // Remaining properties override existing props
        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    };

    /**
     * Verifies the object is a ReactElement.
     * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a valid component.
     * @final
     */
    ReactElement.isValidElement = function (object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
    };

    var ReactElement_1 = ReactElement;

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactDebugCurrentFrame
     * 
     */

    var ReactDebugCurrentFrame = {};

    {
      // Component that is being worked on
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) {
          return impl();
        }
        return null;
      };
    }

    var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

    {
      var warning$1 = require$$0;

      var _require = ReactDebugCurrentFrame_1,
          getStackAddendum = _require.getStackAddendum;
    }

    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    // The Symbol used to tag the ReactElement type. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';

    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });

      return '$' + escapedString;
    }

    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;

    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];
    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;
      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }

    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      if (children === null || type === 'string' || type === 'number' ||
      // The following is inlined from ReactElement. This means we can optimize
      // some checks. React Fiber also inlines this logic for similar purposes.
      type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
        callback(traverseContext, children,
        // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
              didWarnAboutMaps = true;
            }
          }

          var iterator = iteratorFn.call(children);
          var step;
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
          }
          var childrenString = '' + children;
          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
        }
      }

      return subtreeCount;
    }

    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }

    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */
    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      }
      // Implicit key determined by the index in the set
      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;

      func.call(context, child, bookKeeping.count++);
    }

    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;

      var mappedChild = func.call(context, child, bookKeeping.count++);
      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
      } else if (mappedChild != null) {
        if (ReactElement_1.isValidElement(mappedChild)) {
          mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }
        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';
      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }
      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.map
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }

    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.count
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */
    function countChildren(children, context) {
      return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
    }

    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
     */
    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
      return result;
    }

    var ReactChildren = {
      forEach: forEachChildren,
      map: mapChildren,
      count: countChildren,
      toArray: toArray
    };

    var ReactChildren_1 = ReactChildren;

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactVersion
     */

    var ReactVersion = '16.0.0-rc.3';

    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://facebook.github.io/react/docs/react-api.html#react.children.only
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */
    function onlyChild(children) {
      !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
      return children;
    }

    var onlyChild_1 = onlyChild;

    /**
     * Copyright 2016-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * 
     * @providesModule describeComponentFrame
     */

    var describeComponentFrame$1 = function describeComponentFrame$1(name, source, ownerName) {
      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
    };

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule getComponentName
     * 
     */

    function getComponentName$1(instanceOrFiber) {
      if (typeof instanceOrFiber.getName === 'function') {
        // Stack reconciler
        var instance = instanceOrFiber;
        return instance.getName();
      }
      if (typeof instanceOrFiber.tag === 'number') {
        // Fiber reconciler
        var fiber = instanceOrFiber;
        var type = fiber.type;

        if (typeof type === 'string') {
          return type;
        }
        if (typeof type === 'function') {
          return type.displayName || type.name;
        }
      }
      return null;
    }

    var getComponentName_1 = getComponentName$1;

    {
      var checkPropTypes$1 = checkPropTypes;
      var lowPriorityWarning$1 = lowPriorityWarning_1;
      var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
      var warning$3 = require$$0;
      var describeComponentFrame = describeComponentFrame$1;
      var getComponentName = getComponentName_1;

      var currentlyValidatingElement = null;

      var getDisplayName = function getDisplayName(element) {
        if (element == null) {
          return '#empty';
        } else if (typeof element === 'string' || typeof element === 'number') {
          return '#text';
        } else if (typeof element.type === 'string') {
          return element.type;
        } else {
          return element.type.displayName || element.type.name || 'Unknown';
        }
      };

      var getStackAddendum$1 = function getStackAddendum$1() {
        var stack = '';
        if (currentlyValidatingElement) {
          var name = getDisplayName(currentlyValidatingElement);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
        }
        stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
        return stack;
      };
    }

    var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner_1.current) {
        var name = getComponentName(ReactCurrentOwner_1.current);
        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }
      return '';
    }

    function getSourceInfoErrorAddendum(elementProps) {
      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
        var source = elementProps.__source;
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }
      return '';
    }

    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }
      return info;
    }

    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;

      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }
      ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

      // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.
      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
      }

      currentlyValidatingElement = element;
      {
        warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
      }
      currentlyValidatingElement = null;
    }

    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
    function validateChildKeys(node, parentType) {
      if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement_1.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement_1.isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement_1.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }

    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
    function validatePropTypes(element) {
      var componentClass = element.type;
      if (typeof componentClass !== 'function') {
        return;
      }
      var name = componentClass.displayName || componentClass.name;

      // ReactNative `View.propTypes` have been deprecated in favor of `ViewPropTypes`.
      // In their place a temporary getter has been added with a deprecated warning message.
      // Avoid triggering that warning during validation using the temporary workaround,
      // __propTypesSecretDontUseThesePlease.
      // TODO (bvaughn) Revert this particular change any time after April 1 ReactNative tag.
      var propTypes = _typeof(componentClass.__propTypesSecretDontUseThesePlease) === 'object' ? componentClass.__propTypesSecretDontUseThesePlease : componentClass.propTypes;

      if (propTypes) {
        currentlyValidatingElement = element;
        checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
        currentlyValidatingElement = null;
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
      }
    }

    var ReactElementValidator$1 = {
      createElement: function createElement(type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function';
        // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
          var info = '';
          if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

          warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof(type), info);
        }

        var element = ReactElement_1.createElement.apply(this, arguments);

        // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) {
          return element;
        }

        // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        validatePropTypes(element);

        return element;
      },

      createFactory: function createFactory(type) {
        var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
        // Legacy hook TODO: Warn if this is accessed
        validatedFactory.type = type;

        {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function get() {
              lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }

        return validatedFactory;
      },

      cloneElement: function cloneElement(element, props, children) {
        var newElement = ReactElement_1.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };

    var ReactElementValidator_1 = ReactElementValidator$1;

    {
      var warning$4 = require$$0;
    }

    function isNative(fn) {
      // Based on isNative() from Lodash
      var funcToString = Function.prototype.toString;
      var reIsNative = RegExp('^' + funcToString
      // Take an example native function source for comparison
      .call(Object.prototype.hasOwnProperty)
      // Strip regex characters so we can use it for regex
      .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
      // Remove hasOwnProperty from the template to make it generic
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      try {
        var source = funcToString.call(fn);
        return reIsNative.test(source);
      } catch (err) {
        return false;
      }
    }

    var canUseCollections =
    // Array.from
    typeof Array.from === 'function' &&
    // Map
    typeof Map === 'function' && isNative(Map) &&
    // Map.prototype.keys
    Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
    // Set
    typeof Set === 'function' && isNative(Set) &&
    // Set.prototype.keys
    Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

    var setItem;
    var getItem;
    var removeItem;
    var getItemIDs;
    var addRoot;
    var removeRoot;
    var getRootIDs;

    if (canUseCollections) {
      var itemMap = new Map();
      var rootIDSet = new Set();

      setItem = function setItem(id, item) {
        itemMap.set(id, item);
      };
      getItem = function getItem(id) {
        return itemMap.get(id);
      };
      removeItem = function removeItem(id) {
        itemMap['delete'](id);
      };
      getItemIDs = function getItemIDs() {
        return Array.from(itemMap.keys());
      };

      addRoot = function addRoot(id) {
        rootIDSet.add(id);
      };
      removeRoot = function removeRoot(id) {
        rootIDSet['delete'](id);
      };
      getRootIDs = function getRootIDs() {
        return Array.from(rootIDSet.keys());
      };
    } else {
      var itemByKey = {};
      var rootByKey = {};

      // Use non-numeric keys to prevent V8 performance issues:
      // https://github.com/facebook/react/pull/7232
      var getKeyFromID = function getKeyFromID(id) {
        return '.' + id;
      };
      var getIDFromKey = function getIDFromKey(key) {
        return parseInt(key.substr(1), 10);
      };

      setItem = function setItem(id, item) {
        var key = getKeyFromID(id);
        itemByKey[key] = item;
      };
      getItem = function getItem(id) {
        var key = getKeyFromID(id);
        return itemByKey[key];
      };
      removeItem = function removeItem(id) {
        var key = getKeyFromID(id);
        delete itemByKey[key];
      };
      getItemIDs = function getItemIDs() {
        return Object.keys(itemByKey).map(getIDFromKey);
      };

      addRoot = function addRoot(id) {
        var key = getKeyFromID(id);
        rootByKey[key] = true;
      };
      removeRoot = function removeRoot(id) {
        var key = getKeyFromID(id);
        delete rootByKey[key];
      };
      getRootIDs = function getRootIDs() {
        return Object.keys(rootByKey).map(getIDFromKey);
      };
    }

    var unmountedIDs = [];

    function purgeDeep(id) {
      var item = getItem(id);
      if (item) {
        var childIDs = item.childIDs;

        removeItem(id);
        childIDs.forEach(purgeDeep);
      }
    }

    function getDisplayName$1(element) {
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    }

    function describeID(id) {
      var name = ReactComponentTreeHook.getDisplayName(id);
      var element = ReactComponentTreeHook.getElement(id);
      var ownerID = ReactComponentTreeHook.getOwnerID(id);
      var ownerName = void 0;

      if (ownerID) {
        ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
      }
      warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
      return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
    }

    var ReactComponentTreeHook = {
      onSetChildren: function onSetChildren(id, nextChildIDs) {
        var item = getItem(id);
        !item ? invariant(false, 'Item must have been set') : void 0;
        item.childIDs = nextChildIDs;

        for (var i = 0; i < nextChildIDs.length; i++) {
          var nextChildID = nextChildIDs[i];
          var nextChild = getItem(nextChildID);
          !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
          !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
          !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
          if (nextChild.parentID == null) {
            nextChild.parentID = id;
            // TODO: This shouldn't be necessary but mounting a new root during in
            // componentWillMount currently causes not-yet-mounted components to
            // be purged from our tree data so their parent id is missing.
          }
          !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
        }
      },
      onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
        var item = {
          element: element,
          parentID: parentID,
          text: null,
          childIDs: [],
          isMounted: false,
          updateCount: 0
        };
        setItem(id, item);
      },
      onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          // We may end up here as a result of setState() in componentWillUnmount().
          // In this case, ignore the element.
          return;
        }
        item.element = element;
      },
      onMountComponent: function onMountComponent(id) {
        var item = getItem(id);
        !item ? invariant(false, 'Item must have been set') : void 0;
        item.isMounted = true;
        var isRoot = item.parentID === 0;
        if (isRoot) {
          addRoot(id);
        }
      },
      onUpdateComponent: function onUpdateComponent(id) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          // We may end up here as a result of setState() in componentWillUnmount().
          // In this case, ignore the element.
          return;
        }
        item.updateCount++;
      },
      onUnmountComponent: function onUnmountComponent(id) {
        var item = getItem(id);
        if (item) {
          // We need to check if it exists.
          // `item` might not exist if it is inside an error boundary, and a sibling
          // error boundary child threw while mounting. Then this instance never
          // got a chance to mount, but it still gets an unmounting event during
          // the error boundary cleanup.
          item.isMounted = false;
          var isRoot = item.parentID === 0;
          if (isRoot) {
            removeRoot(id);
          }
        }
        unmountedIDs.push(id);
      },
      purgeUnmountedComponents: function purgeUnmountedComponents() {
        if (ReactComponentTreeHook._preventPurging) {
          // Should only be used for testing.
          return;
        }

        for (var i = 0; i < unmountedIDs.length; i++) {
          var id = unmountedIDs[i];
          purgeDeep(id);
        }
        unmountedIDs.length = 0;
      },
      isMounted: function isMounted(id) {
        var item = getItem(id);
        return item ? item.isMounted : false;
      },
      getCurrentStackAddendum: function getCurrentStackAddendum() {
        var info = '';
        var currentOwner = ReactCurrentOwner_1.current;
        if (currentOwner) {
          !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
          if (typeof currentOwner._debugID === 'number') {
            info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
          }
        }
        return info;
      },
      getStackAddendumByID: function getStackAddendumByID(id) {
        var info = '';
        while (id) {
          info += describeID(id);
          id = ReactComponentTreeHook.getParentID(id);
        }
        return info;
      },
      getChildIDs: function getChildIDs(id) {
        var item = getItem(id);
        return item ? item.childIDs : [];
      },
      getDisplayName: function getDisplayName(id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element) {
          return null;
        }
        return getDisplayName$1(element);
      },
      getElement: function getElement(id) {
        var item = getItem(id);
        return item ? item.element : null;
      },
      getOwnerID: function getOwnerID(id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element || !element._owner) {
          return null;
        }
        return element._owner._debugID;
      },
      getParentID: function getParentID(id) {
        var item = getItem(id);
        return item ? item.parentID : null;
      },
      getSource: function getSource(id) {
        var item = getItem(id);
        var element = item ? item.element : null;
        var source = element != null ? element._source : null;
        return source;
      },
      getText: function getText(id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (typeof element === 'string') {
          return element;
        } else if (typeof element === 'number') {
          return '' + element;
        } else {
          return null;
        }
      },
      getUpdateCount: function getUpdateCount(id) {
        var item = getItem(id);
        return item ? item.updateCount : 0;
      },

      getRootIDs: getRootIDs,
      getRegisteredIDs: getItemIDs
    };

    var ReactComponentTreeHook_1 = ReactComponentTreeHook;

    var createElement = ReactElement_1.createElement;
    var createFactory = ReactElement_1.createFactory;
    var cloneElement = ReactElement_1.cloneElement;

    {
      var ReactElementValidator = ReactElementValidator_1;
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }

    var React = {
      Children: {
        map: ReactChildren_1.map,
        forEach: ReactChildren_1.forEach,
        count: ReactChildren_1.count,
        toArray: ReactChildren_1.toArray,
        only: onlyChild_1
      },

      Component: ReactBaseClasses.Component,
      PureComponent: ReactBaseClasses.PureComponent,
      unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

      createElement: createElement,
      cloneElement: cloneElement,
      isValidElement: ReactElement_1.isValidElement,

      createFactory: createFactory,

      version: ReactVersion,

      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentOwner: ReactCurrentOwner_1,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: objectAssign$1
      }
    };

    {
      objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
        // These should not be included in production.
        ReactComponentTreeHook: ReactComponentTreeHook_1,
        ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
      });
    }

    var ReactEntry = React;

    module.exports = ReactEntry;
  })();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTk2OWIyMmI5YTEzYjMwZjEzNDkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjExLjEwQHByb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuOC4xNUBmYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTVAZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTVAZmJqcy9saWIvZW1wdHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTVAZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4xNi4wLjAtcmMuM0ByZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE2LjAuMC1yYy4zQHJlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE2LjAuMC1yYy4zQHJlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjUuMTBAcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjUuMTBAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsIk5PREVfRU5WIiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJrZXkiLCJlbXB0eU9iamVjdCIsImZyZWV6ZSIsInJlcXVpcmUiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIkFwcCIsInAiLCJyIiwidCIsImVuY29kZVVSSUNvbXBvbmVudCIsInUiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwidiIsInByb3BzIiwiY29udGV4dCIsInJlZnMiLCJ1cGRhdGVyIiwiaXNSZWFjdENvbXBvbmVudCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJ3IiwieSIsImNvbnN0cnVjdG9yIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJ6IiwiQSIsInVuc3RhYmxlX2lzQXN5bmNSZWFjdENvbXBvbmVudCIsInJlbmRlciIsImNoaWxkcmVuIiwiQiIsIkNvbXBvbmVudCIsIlB1cmVDb21wb25lbnQiLCJBc3luY0NvbXBvbmVudCIsIkMiLCJjdXJyZW50IiwiRCIsIkUiLCJTeW1ib2wiLCJGIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJHIiwiZyIsImsiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJjcmVhdGVFbGVtZW50IiwibSIsInEiLCJsIiwiaCIsImRlZmF1bHRQcm9wcyIsImNyZWF0ZUZhY3RvcnkiLCJiaW5kIiwiY2xvbmVBbmRSZXBsYWNlS2V5IiwiX3NlbGYiLCJfc291cmNlIiwiY2xvbmVFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJIIiwiaXRlcmF0b3IiLCJJIiwiZXNjYXBlIiwiSiIsIksiLCJMIiwicG9wIiwicmVzdWx0Iiwia2V5UHJlZml4IiwiZnVuYyIsImNvdW50IiwiTSIsIk4iLCJPIiwiaXNBcnJheSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJ0b1N0cmluZyIsIlAiLCJRIiwiUiIsIlMiLCJ0b0FycmF5IiwiQ2hpbGRyZW4iLCJvbmx5IiwidW5zdGFibGVfQXN5bmNDb21wb25lbnQiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudE93bmVyIiwib2JqZWN0QXNzaWduJDEiLCJyZXF1aXJlJCQwIiwiY2hlY2tQcm9wVHlwZXMiLCJ3YXJuTm9vcCIsInB1YmxpY0luc3RhbmNlIiwiY2FsbGVyTmFtZSIsImRpc3BsYXlOYW1lIiwiUmVhY3ROb29wVXBkYXRlUXVldWUiLCJjYWxsYmFjayIsImNvbXBsZXRlU3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJSZWFjdE5vb3BVcGRhdGVRdWV1ZV8xIiwibG93UHJpb3JpdHlXYXJuaW5nIiwid2FybiIsImxvd1ByaW9yaXR5V2FybmluZ18xIiwiUmVhY3RDb21wb25lbnQiLCJkZXByZWNhdGVkQVBJcyIsInJlcGxhY2VTdGF0ZSIsImRlZmluZURlcHJlY2F0aW9uV2FybmluZyIsIm1ldGhvZE5hbWUiLCJpbmZvIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJmbk5hbWUiLCJSZWFjdFB1cmVDb21wb25lbnQiLCJDb21wb25lbnREdW1teSIsInB1cmVDb21wb25lbnRQcm90b3R5cGUiLCJSZWFjdEFzeW5jQ29tcG9uZW50IiwiYXN5bmNDb21wb25lbnRQcm90b3R5cGUiLCJSZWFjdEJhc2VDbGFzc2VzIiwiUmVhY3RDdXJyZW50T3duZXJfMSIsIndhcm5pbmckMiIsIlJFQUNUX0VMRU1FTlRfVFlQRSQxIiwiUkVTRVJWRURfUFJPUFMiLCJzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biIsInNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duIiwiaGFzVmFsaWRSZWYiLCJjb25maWciLCJnZXR0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpc1JlYWN0V2FybmluZyIsImhhc1ZhbGlkS2V5IiwiZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdLZXkiLCJjb25maWd1cmFibGUiLCJkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ1JlZiIsIlJlYWN0RWxlbWVudCIsInNlbGYiLCJvd25lciIsImVsZW1lbnQiLCJfc3RvcmUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJwcm9wTmFtZSIsImNoaWxkcmVuTGVuZ3RoIiwiY2hpbGRBcnJheSIsImZhY3RvcnkiLCJvbGRFbGVtZW50IiwibmV3S2V5IiwibmV3RWxlbWVudCIsIm9iamVjdCIsIlJlYWN0RWxlbWVudF8xIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsImdldEN1cnJlbnRTdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJpbXBsIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZV8xIiwid2FybmluZyQxIiwiX3JlcXVpcmUiLCJJVEVSQVRPUl9TWU1CT0wiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlNFUEFSQVRPUiIsIlNVQlNFUEFSQVRPUiIsImVzY2FwZVJlZ2V4IiwiZXNjYXBlckxvb2t1cCIsImVzY2FwZWRTdHJpbmciLCJtYXRjaCIsImRpZFdhcm5BYm91dE1hcHMiLCJ1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCIsImVzY2FwZVVzZXJQcm92aWRlZEtleSIsInRleHQiLCJQT09MX1NJWkUiLCJ0cmF2ZXJzZUNvbnRleHRQb29sIiwiZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0IiwibWFwUmVzdWx0IiwibWFwRnVuY3Rpb24iLCJtYXBDb250ZXh0IiwidHJhdmVyc2VDb250ZXh0IiwicmVsZWFzZVRyYXZlcnNlQ29udGV4dCIsInRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsIiwibmFtZVNvRmFyIiwiZ2V0Q29tcG9uZW50S2V5IiwiY2hpbGQiLCJuZXh0TmFtZSIsInN1YnRyZWVDb3VudCIsIm5leHROYW1lUHJlZml4IiwiaXRlcmF0b3JGbiIsImVudHJpZXMiLCJzdGVwIiwiaWkiLCJhZGRlbmR1bSIsImNoaWxkcmVuU3RyaW5nIiwidHJhdmVyc2VBbGxDaGlsZHJlbiIsImNvbXBvbmVudCIsImluZGV4IiwiZm9yRWFjaFNpbmdsZUNoaWxkIiwiYm9va0tlZXBpbmciLCJmb3JFYWNoQ2hpbGRyZW4iLCJmb3JFYWNoRnVuYyIsImZvckVhY2hDb250ZXh0IiwibWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCIsImNoaWxkS2V5IiwibWFwcGVkQ2hpbGQiLCJtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsIiwicHJlZml4IiwiZXNjYXBlZFByZWZpeCIsIm1hcENoaWxkcmVuIiwiY291bnRDaGlsZHJlbiIsIlJlYWN0Q2hpbGRyZW4iLCJSZWFjdENoaWxkcmVuXzEiLCJSZWFjdFZlcnNpb24iLCJvbmx5Q2hpbGQiLCJvbmx5Q2hpbGRfMSIsImRlc2NyaWJlQ29tcG9uZW50RnJhbWUkMSIsIm93bmVyTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImdldENvbXBvbmVudE5hbWUkMSIsImluc3RhbmNlT3JGaWJlciIsImdldE5hbWUiLCJpbnN0YW5jZSIsInRhZyIsImZpYmVyIiwiZ2V0Q29tcG9uZW50TmFtZV8xIiwiY2hlY2tQcm9wVHlwZXMkMSIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxIiwid2FybmluZyQzIiwiZGVzY3JpYmVDb21wb25lbnRGcmFtZSIsImdldENvbXBvbmVudE5hbWUiLCJjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsImdldERpc3BsYXlOYW1lIiwiZ2V0U3RhY2tBZGRlbmR1bSQxIiwic3RhY2siLCJJVEVSQVRPUl9TWU1CT0wkMSIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MJDEiLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsImVsZW1lbnRQcm9wcyIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsInZhbGlkYXRlUHJvcFR5cGVzIiwiY29tcG9uZW50Q2xhc3MiLCJwcm9wVHlwZXMiLCJfX3Byb3BUeXBlc1NlY3JldERvbnRVc2VUaGVzZVBsZWFzZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwiUmVhY3RFbGVtZW50VmFsaWRhdG9yJDEiLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidmFsaWRhdGVkRmFjdG9yeSIsIlJlYWN0RWxlbWVudFZhbGlkYXRvcl8xIiwid2FybmluZyQ0IiwiaXNOYXRpdmUiLCJmbiIsImZ1bmNUb1N0cmluZyIsIkZ1bmN0aW9uIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInRlc3QiLCJjYW5Vc2VDb2xsZWN0aW9ucyIsIk1hcCIsIlNldCIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW1JRHMiLCJhZGRSb290IiwicmVtb3ZlUm9vdCIsImdldFJvb3RJRHMiLCJpdGVtTWFwIiwicm9vdElEU2V0IiwiaWQiLCJpdGVtIiwic2V0IiwiYWRkIiwiaXRlbUJ5S2V5Iiwicm9vdEJ5S2V5IiwiZ2V0S2V5RnJvbUlEIiwiZ2V0SURGcm9tS2V5IiwicGFyc2VJbnQiLCJzdWJzdHIiLCJ1bm1vdW50ZWRJRHMiLCJwdXJnZURlZXAiLCJjaGlsZElEcyIsImdldERpc3BsYXlOYW1lJDEiLCJkZXNjcmliZUlEIiwiUmVhY3RDb21wb25lbnRUcmVlSG9vayIsImdldEVsZW1lbnQiLCJvd25lcklEIiwiZ2V0T3duZXJJRCIsIm9uU2V0Q2hpbGRyZW4iLCJuZXh0Q2hpbGRJRHMiLCJuZXh0Q2hpbGRJRCIsIm5leHRDaGlsZCIsInBhcmVudElEIiwib25CZWZvcmVNb3VudENvbXBvbmVudCIsInVwZGF0ZUNvdW50Iiwib25CZWZvcmVVcGRhdGVDb21wb25lbnQiLCJvbk1vdW50Q29tcG9uZW50IiwiaXNSb290Iiwib25VcGRhdGVDb21wb25lbnQiLCJvblVubW91bnRDb21wb25lbnQiLCJwdXJnZVVubW91bnRlZENvbXBvbmVudHMiLCJfcHJldmVudFB1cmdpbmciLCJnZXRDdXJyZW50U3RhY2tBZGRlbmR1bSIsImN1cnJlbnRPd25lciIsIl9kZWJ1Z0lEIiwiZ2V0U3RhY2tBZGRlbmR1bUJ5SUQiLCJnZXRQYXJlbnRJRCIsImdldENoaWxkSURzIiwiZ2V0U291cmNlIiwiZ2V0VGV4dCIsImdldFVwZGF0ZUNvdW50IiwiZ2V0UmVnaXN0ZXJlZElEcyIsIlJlYWN0Q29tcG9uZW50VHJlZUhvb2tfMSIsIlJlYWN0RWxlbWVudFZhbGlkYXRvciIsIlJlYWN0IiwiUmVhY3RFbnRyeSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsWUFBSUEsaUJBQWlCakUsS0FBakIsSUFBMEIsRUFBRWlFLE1BQU1vRCxPQUFOLElBQWlCK1Usa0JBQW5CLENBQTlCLEVBQXNFO0FBQ3BFO0FBQ0E7QUFDQUEsNkJBQW1CblksTUFBTW9ELE9BQXpCLElBQW9DLElBQXBDOztBQUVBLGNBQUlnUCxRQUFRb0csV0FBV0EsVUFBWCxHQUF3QixFQUFwQzs7QUFFQXhWLGtCQUFRLEtBQVIsRUFBZSxzQkFBZixFQUF1Q3NWLFFBQXZDLEVBQWlEdFksTUFBTW9ELE9BQXZELEVBQWdFZ1AsU0FBUyxJQUFULEdBQWdCQSxLQUFoQixHQUF3QixFQUF4RjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQxVyxPQUFPQyxPQUFQLEdBQWlCME4sY0FBakIsQzs7Ozs7Ozs7QUM1REE7Ozs7Ozs7OztBQVNBOztBQUVBLElBQUk2Tyx1QkFBdUIsOENBQTNCOztBQUVBeGMsT0FBT0MsT0FBUCxHQUFpQnVjLG9CQUFqQixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU5NjliMjJiOWExM2IzMGYxMzQ5IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNUBmYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE1QGZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy40LjEuMUBvYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNUBmYmpzL2xpYi9lbXB0eU9iamVjdC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE1QGZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkISEhIHtuYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMTYuMC4wLXJjLjNAcmVhY3QvaW5kZXguanMiLCIvKlxuIFJlYWN0IHYxNi4wLjAtcmMuM1xuIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG5cbiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiovXG4ndXNlIHN0cmljdCc7dmFyIGY9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscD1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlPYmplY3RcIik7cmVxdWlyZShcImZianMvbGliL2ludmFyaWFudFwiKTt2YXIgcj1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlGdW5jdGlvblwiKTtcbmZ1bmN0aW9uIHQoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxkPVwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IGh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50XFx4M2RcIithLGU9MDtlPGI7ZSsrKWQrPVwiXFx4MjZhcmdzW11cXHgzZFwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbZSsxXSk7Yj1FcnJvcihkK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7Yi5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiO2IuZnJhbWVzVG9Qb3A9MTt0aHJvdyBiO31cbnZhciB1PXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fTtmdW5jdGlvbiB2KGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPXA7dGhpcy51cGRhdGVyPWR8fHV9di5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTt2LnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe1wib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWE/dChcIjg1XCIpOnZvaWQgMDt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O3YucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gdyhhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1wO3RoaXMudXBkYXRlcj1kfHx1fWZ1bmN0aW9uIHgoKXt9eC5wcm90b3R5cGU9di5wcm90b3R5cGU7dmFyIHk9dy5wcm90b3R5cGU9bmV3IHg7eS5jb25zdHJ1Y3Rvcj13O2YoeSx2LnByb3RvdHlwZSk7eS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDtmdW5jdGlvbiB6KGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPXA7dGhpcy51cGRhdGVyPWR8fHV9dmFyIEE9ei5wcm90b3R5cGU9bmV3IHg7QS5jb25zdHJ1Y3Rvcj16O2YoQSx2LnByb3RvdHlwZSk7QS51bnN0YWJsZV9pc0FzeW5jUmVhY3RDb21wb25lbnQ9ITA7QS5yZW5kZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbn07XG52YXIgQj17Q29tcG9uZW50OnYsUHVyZUNvbXBvbmVudDp3LEFzeW5jQ29tcG9uZW50Onp9LEM9e2N1cnJlbnQ6bnVsbH0sRD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEU9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sW1wiZm9yXCJdJiZTeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxGPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07ZnVuY3Rpb24gRyhhLGIsZCxlLGMsZyxrKXtyZXR1cm57JCR0eXBlb2Y6RSx0eXBlOmEsa2V5OmIscmVmOmQscHJvcHM6ayxfb3duZXI6Z319XG5HLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGM9e30sZz1udWxsLGs9bnVsbCxtPW51bGwscT1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihrPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksbT12b2lkIDA9PT1iLl9fc2VsZj9udWxsOmIuX19zZWxmLHE9dm9pZCAwPT09Yi5fX3NvdXJjZT9udWxsOmIuX19zb3VyY2UsYilELmNhbGwoYixlKSYmIUYuaGFzT3duUHJvcGVydHkoZSkmJihjW2VdPWJbZV0pO3ZhciBsPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09bCljLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGwpe2Zvcih2YXIgaD1BcnJheShsKSxuPTA7bjxsO24rKyloW25dPWFyZ3VtZW50c1tuKzJdO2MuY2hpbGRyZW49aH1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBsPWEuZGVmYXVsdFByb3BzLGwpdm9pZCAwPT09Y1tlXSYmKGNbZV09bFtlXSk7cmV0dXJuIEcoYSxnLGssbSxxLEMuY3VycmVudCxjKX07XG5HLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Ry5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07Ry5jbG9uZUFuZFJlcGxhY2VLZXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRyhhLnR5cGUsYixhLnJlZixhLl9zZWxmLGEuX3NvdXJjZSxhLl9vd25lcixhLnByb3BzKX07XG5HLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsZCl7dmFyIGU9Zih7fSxhLnByb3BzKSxjPWEua2V5LGc9YS5yZWYsaz1hLl9zZWxmLG09YS5fc291cmNlLHE9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihnPWIucmVmLHE9Qy5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGM9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBsPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGggaW4gYilELmNhbGwoYixoKSYmIUYuaGFzT3duUHJvcGVydHkoaCkmJihlW2hdPXZvaWQgMD09PWJbaF0mJnZvaWQgMCE9PWw/bFtoXTpiW2hdKX12YXIgaD1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWgpZS5jaGlsZHJlbj1kO2Vsc2UgaWYoMTxoKXtsPUFycmF5KGgpO2Zvcih2YXIgbj0wO248aDtuKyspbFtuXT1hcmd1bWVudHNbbisyXTtlLmNoaWxkcmVuPWx9cmV0dXJuIEcoYS50eXBlLGMsZyxrLG0scSxlKX07XG5HLmlzVmFsaWRFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1FfTt2YXIgSD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IsST1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2xbXCJmb3JcIl0mJlN5bWJvbFtcImZvclwiXShcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzO2Z1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCJcXHgzZFwiOlwiXFx4M2QwXCIsXCI6XCI6XCJcXHgzZDJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIEo9L1xcLysvZyxLPVtdO1xuZnVuY3Rpb24gTChhLGIsZCxlKXtpZihLLmxlbmd0aCl7dmFyIGM9Sy5wb3AoKTtjLnJlc3VsdD1hO2Mua2V5UHJlZml4PWI7Yy5mdW5jPWQ7Yy5jb250ZXh0PWU7Yy5jb3VudD0wO3JldHVybiBjfXJldHVybntyZXN1bHQ6YSxrZXlQcmVmaXg6YixmdW5jOmQsY29udGV4dDplLGNvdW50OjB9fWZ1bmN0aW9uIE0oYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5LLmxlbmd0aCYmSy5wdXNoKGEpfVxuZnVuY3Rpb24gTihhLGIsZCxlKXt2YXIgYz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09Y3x8XCJib29sZWFuXCI9PT1jKWE9bnVsbDtpZihudWxsPT09YXx8XCJzdHJpbmdcIj09PWN8fFwibnVtYmVyXCI9PT1jfHxcIm9iamVjdFwiPT09YyYmYS4kJHR5cGVvZj09PUkpcmV0dXJuIGQoZSxhLFwiXCI9PT1iP1wiLlwiK08oYSwwKTpiKSwxO3ZhciBnPTA7Yj1cIlwiPT09Yj9cIi5cIjpiK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKyspe2M9YVtrXTt2YXIgbT1iK08oYyxrKTtnKz1OKGMsbSxkLGUpfWVsc2UgaWYobT1IJiZhW0hdfHxhW1wiQEBpdGVyYXRvclwiXSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSlmb3IoYT1tLmNhbGwoYSksaz0wOyEoYz1hLm5leHQoKSkuZG9uZTspYz1jLnZhbHVlLG09YitPKGMsaysrKSxnKz1OKGMsbSxkLGUpO2Vsc2VcIm9iamVjdFwiPT09YyYmKGQ9XCJcIithLHQoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1kP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrXG5PYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZCxcIlwiKSk7cmV0dXJuIGd9ZnVuY3Rpb24gTyhhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gUChhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9ZnVuY3Rpb24gUShhLGIsZCl7dmFyIGU9YS5yZXN1bHQsYz1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9SKGEsZSxkLHIudGhhdFJldHVybnNBcmd1bWVudCk6bnVsbCE9YSYmKEcuaXNWYWxpZEVsZW1lbnQoYSkmJihhPUcuY2xvbmVBbmRSZXBsYWNlS2V5KGEsYysoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoSixcIiRcXHgyNi9cIikrXCIvXCIpK2QpKSxlLnB1c2goYSkpfVxuZnVuY3Rpb24gUihhLGIsZCxlLGMpe3ZhciBnPVwiXCI7bnVsbCE9ZCYmKGc9KFwiXCIrZCkucmVwbGFjZShKLFwiJFxceDI2L1wiKStcIi9cIik7Yj1MKGIsZyxlLGMpO251bGw9PWF8fE4oYSxcIlwiLFEsYik7TShiKX12YXIgUz17Zm9yRWFjaDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTtiPUwobnVsbCxudWxsLGIsZCk7bnVsbD09YXx8TihhLFwiXCIsUCxiKTtNKGIpfSxtYXA6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W107UihhLGUsbnVsbCxiLGQpO3JldHVybiBlfSxjb3VudDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT8wOk4oYSxcIlwiLHIudGhhdFJldHVybnNOdWxsLG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPVtdO1IoYSxiLG51bGwsci50aGF0UmV0dXJuc0FyZ3VtZW50KTtyZXR1cm4gYn19O1xubW9kdWxlLmV4cG9ydHM9e0NoaWxkcmVuOnttYXA6Uy5tYXAsZm9yRWFjaDpTLmZvckVhY2gsY291bnQ6Uy5jb3VudCx0b0FycmF5OlMudG9BcnJheSxvbmx5OmZ1bmN0aW9uKGEpe0cuaXNWYWxpZEVsZW1lbnQoYSk/dm9pZCAwOnQoXCIxNDNcIik7cmV0dXJuIGF9fSxDb21wb25lbnQ6Qi5Db21wb25lbnQsUHVyZUNvbXBvbmVudDpCLlB1cmVDb21wb25lbnQsdW5zdGFibGVfQXN5bmNDb21wb25lbnQ6Qi5Bc3luY0NvbXBvbmVudCxjcmVhdGVFbGVtZW50OkcuY3JlYXRlRWxlbWVudCxjbG9uZUVsZW1lbnQ6Ry5jbG9uZUVsZW1lbnQsaXNWYWxpZEVsZW1lbnQ6Ry5pc1ZhbGlkRWxlbWVudCxjcmVhdGVGYWN0b3J5OkcuY3JlYXRlRmFjdG9yeSx2ZXJzaW9uOlwiMTYuMC4wLXJjLjNcIixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50T3duZXI6Qyxhc3NpZ246Zn19O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNi4wLjAtcmMuM0ByZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjAuMC1yYy4zXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbihmdW5jdGlvbigpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduJDEgPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVxdWlyZSQkMCA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSByZWFjdFByb2RJbnZhcmlhbnRcbiAqIFxuICovXG5cbntcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlJCQwO1xufVxuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgd2FybmluZyhmYWxzZSwgJyVzKC4uLik6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiAnICsgJ1RoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkICVzKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gJyArICdUaGlzIGlzIGEgbm8tb3AuXFxuXFxuUGxlYXNlIGNoZWNrIHRoZSBjb2RlIGZvciB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNhbGxlck5hbWUsIGNvbnN0cnVjdG9yICYmIChjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBjb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcycpO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWVfMSA9IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgbG93UHJpb3JpdHlXYXJuaW5nXG4gKi9cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmdfMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUmVhY3RDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWVfMTtcbn1cblxuUmVhY3RDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5SZWFjdENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmdfMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUmVhY3RQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIC8vIER1cGxpY2F0ZWQgZnJvbSBSZWFjdENvbXBvbmVudC5cbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWVfMTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gUmVhY3RDb21wb25lbnQucHJvdG90eXBlO1xudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBSZWFjdFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhY3RQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5vYmplY3RBc3NpZ24kMShwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbmZ1bmN0aW9uIFJlYWN0QXN5bmNDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgLy8gRHVwbGljYXRlZCBmcm9tIFJlYWN0Q29tcG9uZW50LlxuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZV8xO1xufVxuXG52YXIgYXN5bmNDb21wb25lbnRQcm90b3R5cGUgPSBSZWFjdEFzeW5jQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWFjdEFzeW5jQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5vYmplY3RBc3NpZ24kMShhc3luY0NvbXBvbmVudFByb3RvdHlwZSwgUmVhY3RDb21wb25lbnQucHJvdG90eXBlKTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLnVuc3RhYmxlX2lzQXN5bmNSZWFjdENvbXBvbmVudCA9IHRydWU7XG5hc3luY0NvbXBvbmVudFByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xufTtcblxudmFyIFJlYWN0QmFzZUNsYXNzZXMgPSB7XG4gIENvbXBvbmVudDogUmVhY3RDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFJlYWN0UHVyZUNvbXBvbmVudCxcbiAgQXN5bmNDb21wb25lbnQ6IFJlYWN0QXN5bmNDb21wb25lbnRcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdEN1cnJlbnRPd25lclxuICogXG4gKi9cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50T3duZXJfMSA9IFJlYWN0Q3VycmVudE93bmVyO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG57XG4gIHZhciB3YXJuaW5nJDIgPSByZXF1aXJlJCQwO1xufVxuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQgdHlwZS4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSQxID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2xbJ2ZvciddICYmIFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSB8fCAweGVhYzc7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmckMihmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmckMihmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93IHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSQxLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5SZWFjdEVsZW1lbnQuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy4kJHR5cGVvZiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMuJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlRfVFlQRSQxKSB7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lcl8xLmN1cnJlbnQsIHByb3BzKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3RvcnkgPSBmdW5jdGlvbiAodHlwZSkge1xuICB2YXIgZmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gIC8vIEV4cG9zZSB0aGUgdHlwZSBvbiB0aGUgZmFjdG9yeSBhbmQgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGl0IGNhbiBiZVxuICAvLyBlYXNpbHkgYWNjZXNzZWQgb24gZWxlbWVudHMuIEUuZy4gYDxGb28gLz4udHlwZSA9PT0gRm9vYC5cbiAgLy8gVGhpcyBzaG91bGQgbm90IGJlIG5hbWVkIGBjb25zdHJ1Y3RvcmAgc2luY2UgdGhpcyBtYXkgbm90IGJlIHRoZSBmdW5jdGlvblxuICAvLyB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQsIGFuZCBpdCBtYXkgbm90IGV2ZW4gYmUgYSBjb25zdHJ1Y3Rvci5cbiAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIHJldHVybiBmYWN0b3J5O1xufTtcblxuUmVhY3RFbGVtZW50LmNsb25lQW5kUmVwbGFjZUtleSA9IGZ1bmN0aW9uIChvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuUmVhY3RFbGVtZW50LmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IG9iamVjdEFzc2lnbiQxKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXJfMS5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn07XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIHZhbGlkIGNvbXBvbmVudC5cbiAqIEBmaW5hbFxuICovXG5SZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUkMTtcbn07XG5cbnZhciBSZWFjdEVsZW1lbnRfMSA9IFJlYWN0RWxlbWVudDtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RGVidWdDdXJyZW50RnJhbWVcbiAqIFxuICovXG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbntcbiAgLy8gQ29tcG9uZW50IHRoYXQgaXMgYmVpbmcgd29ya2VkIG9uXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgcmV0dXJuIGltcGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lXzEgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG57XG4gIHZhciB3YXJuaW5nJDEgPSByZXF1aXJlJCQwO1xuXG4gIHZhciBfcmVxdWlyZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWVfMSxcbiAgICAgIGdldFN0YWNrQWRkZW5kdW0gPSBfcmVxdWlyZS5nZXRTdGFja0FkZGVuZHVtO1xufVxuXG52YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudCB0eXBlLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2xbJ2ZvciddICYmIFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSB8fCAweGVhYzc7XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsIHx8IHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8XG4gIC8vIFRoZSBmb2xsb3dpbmcgaXMgaW5saW5lZCBmcm9tIFJlYWN0RWxlbWVudC4gVGhpcyBtZWFucyB3ZSBjYW4gb3B0aW1pemVcbiAgLy8gc29tZSBjaGVja3MuIFJlYWN0IEZpYmVyIGFsc28gaW5saW5lcyB0aGlzIGxvZ2ljIGZvciBzaW1pbGFyIHB1cnBvc2VzLlxuICB0eXBlID09PSAnb2JqZWN0JyAmJiBjaGlsZHJlbi4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IElURVJBVE9SX1NZTUJPTCAmJiBjaGlsZHJlbltJVEVSQVRPUl9TWU1CT0xdIHx8IGNoaWxkcmVuW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGRpZFdhcm5BYm91dE1hcHMsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLiVzJywgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBnZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChSZWFjdEVsZW1lbnRfMS5pc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gUmVhY3RFbGVtZW50XzEuY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsLCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBSZWFjdENoaWxkcmVuID0ge1xuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5XG59O1xuXG52YXIgUmVhY3RDaGlsZHJlbl8xID0gUmVhY3RDaGlsZHJlbjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0VmVyc2lvblxuICovXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMC4wLXJjLjMnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIVJlYWN0RWxlbWVudF8xLmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbnZhciBvbmx5Q2hpbGRfMSA9IG9ubHlDaGlsZDtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNi1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGVzY3JpYmVDb21wb25lbnRGcmFtZVxuICovXG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lJDEgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyAoc291cmNlID8gJyAoYXQgJyArIHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJyA6IG93bmVyTmFtZSA/ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJyA6ICcnKTtcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRDb21wb25lbnROYW1lXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lJDEoaW5zdGFuY2VPckZpYmVyKSB7XG4gIGlmICh0eXBlb2YgaW5zdGFuY2VPckZpYmVyLmdldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBTdGFjayByZWNvbmNpbGVyXG4gICAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VPckZpYmVyO1xuICAgIHJldHVybiBpbnN0YW5jZS5nZXROYW1lKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBpbnN0YW5jZU9yRmliZXIudGFnID09PSAnbnVtYmVyJykge1xuICAgIC8vIEZpYmVyIHJlY29uY2lsZXJcbiAgICB2YXIgZmliZXIgPSBpbnN0YW5jZU9yRmliZXI7XG4gICAgdmFyIHR5cGUgPSBmaWJlci50eXBlO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGdldENvbXBvbmVudE5hbWVfMSA9IGdldENvbXBvbmVudE5hbWUkMTtcblxue1xuICB2YXIgY2hlY2tQcm9wVHlwZXMkMSA9IGNoZWNrUHJvcFR5cGVzO1xuICB2YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmdfMTtcbiAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWVfMTtcbiAgdmFyIHdhcm5pbmckMyA9IHJlcXVpcmUkJDA7XG4gIHZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZGVzY3JpYmVDb21wb25lbnRGcmFtZSQxO1xuICB2YXIgZ2V0Q29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVfMTtcblxuICB2YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcjZW1wdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICcjdGV4dCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAnVW5rbm93bic7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRTdGFja0FkZGVuZHVtJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIElURVJBVE9SX1NZTUJPTCQxID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wkMSA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lcl8xLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXJfMS5jdXJyZW50KTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lcl8xLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lcikgKyAnLic7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIHtcbiAgICB3YXJuaW5nJDMoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSQxKCkpO1xuICB9XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChSZWFjdEVsZW1lbnRfMS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFJlYWN0RWxlbWVudF8xLmlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IElURVJBVE9SX1NZTUJPTCQxICYmIG5vZGVbSVRFUkFUT1JfU1lNQk9MJDFdIHx8IG5vZGVbRkFVWF9JVEVSQVRPUl9TWU1CT0wkMV07XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChSZWFjdEVsZW1lbnRfMS5pc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB2YXIgY29tcG9uZW50Q2xhc3MgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBjb21wb25lbnRDbGFzcy5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnRDbGFzcy5uYW1lO1xuXG4gIC8vIFJlYWN0TmF0aXZlIGBWaWV3LnByb3BUeXBlc2AgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYFZpZXdQcm9wVHlwZXNgLlxuICAvLyBJbiB0aGVpciBwbGFjZSBhIHRlbXBvcmFyeSBnZXR0ZXIgaGFzIGJlZW4gYWRkZWQgd2l0aCBhIGRlcHJlY2F0ZWQgd2FybmluZyBtZXNzYWdlLlxuICAvLyBBdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyBkdXJpbmcgdmFsaWRhdGlvbiB1c2luZyB0aGUgdGVtcG9yYXJ5IHdvcmthcm91bmQsXG4gIC8vIF9fcHJvcFR5cGVzU2VjcmV0RG9udFVzZVRoZXNlUGxlYXNlLlxuICAvLyBUT0RPIChidmF1Z2huKSBSZXZlcnQgdGhpcyBwYXJ0aWN1bGFyIGNoYW5nZSBhbnkgdGltZSBhZnRlciBBcHJpbCAxIFJlYWN0TmF0aXZlIHRhZy5cbiAgdmFyIHByb3BUeXBlcyA9IHR5cGVvZiBjb21wb25lbnRDbGFzcy5fX3Byb3BUeXBlc1NlY3JldERvbnRVc2VUaGVzZVBsZWFzZSA9PT0gJ29iamVjdCcgPyBjb21wb25lbnRDbGFzcy5fX3Byb3BUeXBlc1NlY3JldERvbnRVc2VUaGVzZVBsZWFzZSA6IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcblxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgIGNoZWNrUHJvcFR5cGVzJDEocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGdldFN0YWNrQWRkZW5kdW0kMSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybmluZyQzKGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgfVxufVxuXG52YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yJDEgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nO1xuICAgIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4uXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgaW5mbyArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuXG4gICAgICB3YXJuaW5nJDMoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGUgPT0gbnVsbCA/IHR5cGUgOiB0eXBlb2YgdHlwZSwgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBSZWFjdEVsZW1lbnRfMS5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuXG4gIGNyZWF0ZUZhY3Rvcnk6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IkMS5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gICAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICAgIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xuICB9LFxuXG4gIGNsb25lRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50XzEuY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgICB9XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH1cbn07XG5cbnZhciBSZWFjdEVsZW1lbnRWYWxpZGF0b3JfMSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvciQxO1xuXG57XG4gIHZhciB3YXJuaW5nJDQgPSByZXF1aXJlJCQwO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZShmbikge1xuICAvLyBCYXNlZCBvbiBpc05hdGl2ZSgpIGZyb20gTG9kYXNoXG4gIHZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArIGZ1bmNUb1N0cmluZ1xuICAvLyBUYWtlIGFuIGV4YW1wbGUgbmF0aXZlIGZ1bmN0aW9uIHNvdXJjZSBmb3IgY29tcGFyaXNvblxuICAuY2FsbChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KVxuICAvLyBTdHJpcCByZWdleCBjaGFyYWN0ZXJzIHNvIHdlIGNhbiB1c2UgaXQgZm9yIHJlZ2V4XG4gIC5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC8vIFJlbW92ZSBoYXNPd25Qcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0byBtYWtlIGl0IGdlbmVyaWNcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnKTtcbiAgdHJ5IHtcbiAgICB2YXIgc291cmNlID0gZnVuY1RvU3RyaW5nLmNhbGwoZm4pO1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3Qoc291cmNlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbnZhciBjYW5Vc2VDb2xsZWN0aW9ucyA9XG4vLyBBcnJheS5mcm9tXG50eXBlb2YgQXJyYXkuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJlxuLy8gTWFwXG50eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKE1hcCkgJiZcbi8vIE1hcC5wcm90b3R5cGUua2V5c1xuTWFwLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmtleXMgPT09ICdmdW5jdGlvbicgJiYgaXNOYXRpdmUoTWFwLnByb3RvdHlwZS5rZXlzKSAmJlxuLy8gU2V0XG50eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKFNldCkgJiZcbi8vIFNldC5wcm90b3R5cGUua2V5c1xuU2V0LnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiBTZXQucHJvdG90eXBlLmtleXMgPT09ICdmdW5jdGlvbicgJiYgaXNOYXRpdmUoU2V0LnByb3RvdHlwZS5rZXlzKTtcblxudmFyIHNldEl0ZW07XG52YXIgZ2V0SXRlbTtcbnZhciByZW1vdmVJdGVtO1xudmFyIGdldEl0ZW1JRHM7XG52YXIgYWRkUm9vdDtcbnZhciByZW1vdmVSb290O1xudmFyIGdldFJvb3RJRHM7XG5cbmlmIChjYW5Vc2VDb2xsZWN0aW9ucykge1xuICB2YXIgaXRlbU1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHJvb3RJRFNldCA9IG5ldyBTZXQoKTtcblxuICBzZXRJdGVtID0gZnVuY3Rpb24gKGlkLCBpdGVtKSB7XG4gICAgaXRlbU1hcC5zZXQoaWQsIGl0ZW0pO1xuICB9O1xuICBnZXRJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIGl0ZW1NYXAuZ2V0KGlkKTtcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGl0ZW1NYXBbJ2RlbGV0ZSddKGlkKTtcbiAgfTtcbiAgZ2V0SXRlbUlEcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShpdGVtTWFwLmtleXMoKSk7XG4gIH07XG5cbiAgYWRkUm9vdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJvb3RJRFNldC5hZGQoaWQpO1xuICB9O1xuICByZW1vdmVSb290ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcm9vdElEU2V0WydkZWxldGUnXShpZCk7XG4gIH07XG4gIGdldFJvb3RJRHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocm9vdElEU2V0LmtleXMoKSk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgaXRlbUJ5S2V5ID0ge307XG4gIHZhciByb290QnlLZXkgPSB7fTtcblxuICAvLyBVc2Ugbm9uLW51bWVyaWMga2V5cyB0byBwcmV2ZW50IFY4IHBlcmZvcm1hbmNlIGlzc3VlczpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvNzIzMlxuICB2YXIgZ2V0S2V5RnJvbUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuICcuJyArIGlkO1xuICB9O1xuICB2YXIgZ2V0SURGcm9tS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChrZXkuc3Vic3RyKDEpLCAxMCk7XG4gIH07XG5cbiAgc2V0SXRlbSA9IGZ1bmN0aW9uIChpZCwgaXRlbSkge1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgIGl0ZW1CeUtleVtrZXldID0gaXRlbTtcbiAgfTtcbiAgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgIHJldHVybiBpdGVtQnlLZXlba2V5XTtcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgIGRlbGV0ZSBpdGVtQnlLZXlba2V5XTtcbiAgfTtcbiAgZ2V0SXRlbUlEcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbUJ5S2V5KS5tYXAoZ2V0SURGcm9tS2V5KTtcbiAgfTtcblxuICBhZGRSb290ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGtleSA9IGdldEtleUZyb21JRChpZCk7XG4gICAgcm9vdEJ5S2V5W2tleV0gPSB0cnVlO1xuICB9O1xuICByZW1vdmVSb290ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGtleSA9IGdldEtleUZyb21JRChpZCk7XG4gICAgZGVsZXRlIHJvb3RCeUtleVtrZXldO1xuICB9O1xuICBnZXRSb290SURzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhyb290QnlLZXkpLm1hcChnZXRJREZyb21LZXkpO1xuICB9O1xufVxuXG52YXIgdW5tb3VudGVkSURzID0gW107XG5cbmZ1bmN0aW9uIHB1cmdlRGVlcChpZCkge1xuICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICBpZiAoaXRlbSkge1xuICAgIHZhciBjaGlsZElEcyA9IGl0ZW0uY2hpbGRJRHM7XG5cbiAgICByZW1vdmVJdGVtKGlkKTtcbiAgICBjaGlsZElEcy5mb3JFYWNoKHB1cmdlRGVlcCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUkMShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gJyNlbXB0eSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAnI3RleHQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXNjcmliZUlEKGlkKSB7XG4gIHZhciBuYW1lID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXREaXNwbGF5TmFtZShpZCk7XG4gIHZhciBlbGVtZW50ID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRFbGVtZW50KGlkKTtcbiAgdmFyIG93bmVySUQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldE93bmVySUQoaWQpO1xuICB2YXIgb3duZXJOYW1lID0gdm9pZCAwO1xuXG4gIGlmIChvd25lcklEKSB7XG4gICAgb3duZXJOYW1lID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXREaXNwbGF5TmFtZShvd25lcklEKTtcbiAgfVxuICB3YXJuaW5nJDQoZWxlbWVudCwgJ1JlYWN0Q29tcG9uZW50VHJlZUhvb2s6IE1pc3NpbmcgUmVhY3QgZWxlbWVudCBmb3IgZGVidWdJRCAlcyB3aGVuICcgKyAnYnVpbGRpbmcgc3RhY2snLCBpZCk7XG4gIHJldHVybiBkZXNjcmliZUNvbXBvbmVudEZyYW1lJDEobmFtZSB8fCAnJywgZWxlbWVudCAmJiBlbGVtZW50Ll9zb3VyY2UsIG93bmVyTmFtZSB8fCAnJyk7XG59XG5cbnZhciBSZWFjdENvbXBvbmVudFRyZWVIb29rID0ge1xuICBvblNldENoaWxkcmVuOiBmdW5jdGlvbiAoaWQsIG5leHRDaGlsZElEcykge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgIWl0ZW0gPyBpbnZhcmlhbnQoZmFsc2UsICdJdGVtIG11c3QgaGF2ZSBiZWVuIHNldCcpIDogdm9pZCAwO1xuICAgIGl0ZW0uY2hpbGRJRHMgPSBuZXh0Q2hpbGRJRHM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRDaGlsZElEcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5leHRDaGlsZElEID0gbmV4dENoaWxkSURzW2ldO1xuICAgICAgdmFyIG5leHRDaGlsZCA9IGdldEl0ZW0obmV4dENoaWxkSUQpO1xuICAgICAgIW5leHRDaGlsZCA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIGhvb2sgZXZlbnRzIHRvIGZpcmUgZm9yIHRoZSBjaGlsZCBiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiB2b2lkIDA7XG4gICAgICAhKG5leHRDaGlsZC5jaGlsZElEcyAhPSBudWxsIHx8IHR5cGVvZiBuZXh0Q2hpbGQuZWxlbWVudCAhPT0gJ29iamVjdCcgfHwgbmV4dENoaWxkLmVsZW1lbnQgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBvblNldENoaWxkcmVuKCkgdG8gZmlyZSBmb3IgYSBjb250YWluZXIgY2hpbGQgYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogdm9pZCAwO1xuICAgICAgIW5leHRDaGlsZC5pc01vdW50ZWQgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBvbk1vdW50Q29tcG9uZW50KCkgdG8gZmlyZSBmb3IgdGhlIGNoaWxkIGJlZm9yZSBpdHMgcGFyZW50IGluY2x1ZGVzIGl0IGluIG9uU2V0Q2hpbGRyZW4oKS4nKSA6IHZvaWQgMDtcbiAgICAgIGlmIChuZXh0Q2hpbGQucGFyZW50SUQgPT0gbnVsbCkge1xuICAgICAgICBuZXh0Q2hpbGQucGFyZW50SUQgPSBpZDtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IGJ1dCBtb3VudGluZyBhIG5ldyByb290IGR1cmluZyBpblxuICAgICAgICAvLyBjb21wb25lbnRXaWxsTW91bnQgY3VycmVudGx5IGNhdXNlcyBub3QteWV0LW1vdW50ZWQgY29tcG9uZW50cyB0b1xuICAgICAgICAvLyBiZSBwdXJnZWQgZnJvbSBvdXIgdHJlZSBkYXRhIHNvIHRoZWlyIHBhcmVudCBpZCBpcyBtaXNzaW5nLlxuICAgICAgfVxuICAgICAgIShuZXh0Q2hpbGQucGFyZW50SUQgPT09IGlkKSA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uQmVmb3JlTW91bnRDb21wb25lbnQoKSBwYXJlbnQgYW5kIG9uU2V0Q2hpbGRyZW4oKSB0byBiZSBjb25zaXN0ZW50ICglcyBoYXMgcGFyZW50cyAlcyBhbmQgJXMpLicsIG5leHRDaGlsZElELCBuZXh0Q2hpbGQucGFyZW50SUQsIGlkKSA6IHZvaWQgMDtcbiAgICB9XG4gIH0sXG4gIG9uQmVmb3JlTW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIChpZCwgZWxlbWVudCwgcGFyZW50SUQpIHtcbiAgICB2YXIgaXRlbSA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBwYXJlbnRJRDogcGFyZW50SUQsXG4gICAgICB0ZXh0OiBudWxsLFxuICAgICAgY2hpbGRJRHM6IFtdLFxuICAgICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAgIHVwZGF0ZUNvdW50OiAwXG4gICAgfTtcbiAgICBzZXRJdGVtKGlkLCBpdGVtKTtcbiAgfSxcbiAgb25CZWZvcmVVcGRhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChpZCwgZWxlbWVudCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgaWYgKCFpdGVtIHx8ICFpdGVtLmlzTW91bnRlZCkge1xuICAgICAgLy8gV2UgbWF5IGVuZCB1cCBoZXJlIGFzIGEgcmVzdWx0IG9mIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVubW91bnQoKS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgaWdub3JlIHRoZSBlbGVtZW50LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9LFxuICBvbk1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgICFpdGVtID8gaW52YXJpYW50KGZhbHNlLCAnSXRlbSBtdXN0IGhhdmUgYmVlbiBzZXQnKSA6IHZvaWQgMDtcbiAgICBpdGVtLmlzTW91bnRlZCA9IHRydWU7XG4gICAgdmFyIGlzUm9vdCA9IGl0ZW0ucGFyZW50SUQgPT09IDA7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgYWRkUm9vdChpZCk7XG4gICAgfVxuICB9LFxuICBvblVwZGF0ZUNvbXBvbmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uaXNNb3VudGVkKSB7XG4gICAgICAvLyBXZSBtYXkgZW5kIHVwIGhlcmUgYXMgYSByZXN1bHQgb2Ygc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVW5tb3VudCgpLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBpZ25vcmUgdGhlIGVsZW1lbnQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0udXBkYXRlQ291bnQrKztcbiAgfSxcbiAgb25Vbm1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGlmIGl0IGV4aXN0cy5cbiAgICAgIC8vIGBpdGVtYCBtaWdodCBub3QgZXhpc3QgaWYgaXQgaXMgaW5zaWRlIGFuIGVycm9yIGJvdW5kYXJ5LCBhbmQgYSBzaWJsaW5nXG4gICAgICAvLyBlcnJvciBib3VuZGFyeSBjaGlsZCB0aHJldyB3aGlsZSBtb3VudGluZy4gVGhlbiB0aGlzIGluc3RhbmNlIG5ldmVyXG4gICAgICAvLyBnb3QgYSBjaGFuY2UgdG8gbW91bnQsIGJ1dCBpdCBzdGlsbCBnZXRzIGFuIHVubW91bnRpbmcgZXZlbnQgZHVyaW5nXG4gICAgICAvLyB0aGUgZXJyb3IgYm91bmRhcnkgY2xlYW51cC5cbiAgICAgIGl0ZW0uaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICB2YXIgaXNSb290ID0gaXRlbS5wYXJlbnRJRCA9PT0gMDtcbiAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgcmVtb3ZlUm9vdChpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHVubW91bnRlZElEcy5wdXNoKGlkKTtcbiAgfSxcbiAgcHVyZ2VVbm1vdW50ZWRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFJlYWN0Q29tcG9uZW50VHJlZUhvb2suX3ByZXZlbnRQdXJnaW5nKSB7XG4gICAgICAvLyBTaG91bGQgb25seSBiZSB1c2VkIGZvciB0ZXN0aW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5tb3VudGVkSURzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB1bm1vdW50ZWRJRHNbaV07XG4gICAgICBwdXJnZURlZXAoaWQpO1xuICAgIH1cbiAgICB1bm1vdW50ZWRJRHMubGVuZ3RoID0gMDtcbiAgfSxcbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5pc01vdW50ZWQgOiBmYWxzZTtcbiAgfSxcbiAgZ2V0Q3VycmVudFN0YWNrQWRkZW5kdW06IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIHZhciBjdXJyZW50T3duZXIgPSBSZWFjdEN1cnJlbnRPd25lcl8xLmN1cnJlbnQ7XG4gICAgaWYgKGN1cnJlbnRPd25lcikge1xuICAgICAgISh0eXBlb2YgY3VycmVudE93bmVyLnRhZyAhPT0gJ251bWJlcicpID8gaW52YXJpYW50KGZhbHNlLCAnRmliZXIgb3duZXJzIHNob3VsZCBub3Qgc2hvdyB1cCBpbiBTdGFjayBzdGFjayB0cmFjZXMuJykgOiB2b2lkIDA7XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRPd25lci5fZGVidWdJRCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5mbyArPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldFN0YWNrQWRkZW5kdW1CeUlEKGN1cnJlbnRPd25lci5fZGVidWdJRCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZvO1xuICB9LFxuICBnZXRTdGFja0FkZGVuZHVtQnlJRDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICB3aGlsZSAoaWQpIHtcbiAgICAgIGluZm8gKz0gZGVzY3JpYmVJRChpZCk7XG4gICAgICBpZCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0UGFyZW50SUQoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5mbztcbiAgfSxcbiAgZ2V0Q2hpbGRJRHM6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmNoaWxkSURzIDogW107XG4gIH0sXG4gIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldERpc3BsYXlOYW1lJDEoZWxlbWVudCk7XG4gIH0sXG4gIGdldEVsZW1lbnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmVsZW1lbnQgOiBudWxsO1xuICB9LFxuICBnZXRPd25lcklEOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Ll9vd25lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50Ll9vd25lci5fZGVidWdJRDtcbiAgfSxcbiAgZ2V0UGFyZW50SUQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLnBhcmVudElEIDogbnVsbDtcbiAgfSxcbiAgZ2V0U291cmNlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIHZhciBlbGVtZW50ID0gaXRlbSA/IGl0ZW0uZWxlbWVudCA6IG51bGw7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQuX3NvdXJjZSA6IG51bGw7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSxcbiAgZ2V0VGV4dDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEVsZW1lbnQoaWQpO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gJycgKyBlbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGdldFVwZGF0ZUNvdW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS51cGRhdGVDb3VudCA6IDA7XG4gIH0sXG5cblxuICBnZXRSb290SURzOiBnZXRSb290SURzLFxuICBnZXRSZWdpc3RlcmVkSURzOiBnZXRJdGVtSURzXG59O1xuXG52YXIgUmVhY3RDb21wb25lbnRUcmVlSG9va18xID0gUmVhY3RDb21wb25lbnRUcmVlSG9vaztcblxudmFyIGNyZWF0ZUVsZW1lbnQgPSBSZWFjdEVsZW1lbnRfMS5jcmVhdGVFbGVtZW50O1xudmFyIGNyZWF0ZUZhY3RvcnkgPSBSZWFjdEVsZW1lbnRfMS5jcmVhdGVGYWN0b3J5O1xudmFyIGNsb25lRWxlbWVudCA9IFJlYWN0RWxlbWVudF8xLmNsb25lRWxlbWVudDtcblxue1xuICB2YXIgUmVhY3RFbGVtZW50VmFsaWRhdG9yID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yXzE7XG4gIGNyZWF0ZUVsZW1lbnQgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRWxlbWVudDtcbiAgY3JlYXRlRmFjdG9yeSA9IFJlYWN0RWxlbWVudFZhbGlkYXRvci5jcmVhdGVGYWN0b3J5O1xuICBjbG9uZUVsZW1lbnQgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY2xvbmVFbGVtZW50O1xufVxuXG52YXIgUmVhY3QgPSB7XG4gIENoaWxkcmVuOiB7XG4gICAgbWFwOiBSZWFjdENoaWxkcmVuXzEubWFwLFxuICAgIGZvckVhY2g6IFJlYWN0Q2hpbGRyZW5fMS5mb3JFYWNoLFxuICAgIGNvdW50OiBSZWFjdENoaWxkcmVuXzEuY291bnQsXG4gICAgdG9BcnJheTogUmVhY3RDaGlsZHJlbl8xLnRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXzFcbiAgfSxcblxuICBDb21wb25lbnQ6IFJlYWN0QmFzZUNsYXNzZXMuQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBSZWFjdEJhc2VDbGFzc2VzLlB1cmVDb21wb25lbnQsXG4gIHVuc3RhYmxlX0FzeW5jQ29tcG9uZW50OiBSZWFjdEJhc2VDbGFzc2VzLkFzeW5jQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50LFxuICBpc1ZhbGlkRWxlbWVudDogUmVhY3RFbGVtZW50XzEuaXNWYWxpZEVsZW1lbnQsXG5cbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeSxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IHtcbiAgICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJfMSxcbiAgICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICAgIGFzc2lnbjogb2JqZWN0QXNzaWduJDFcbiAgfVxufTtcblxue1xuICBvYmplY3RBc3NpZ24kMShSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCwge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiBSZWFjdENvbXBvbmVudFRyZWVIb29rXzEsXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZV8xXG4gIH0pO1xufVxuXG52YXIgUmVhY3RFbnRyeSA9IFJlYWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RW50cnk7XG5cbn0pKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE2LjAuMC1yYy4zQHJlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ1JlYWN0LlByb3BUeXBlcy4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUpO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS41LjEwQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjUuMTBAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiXSwic291cmNlUm9vdCI6IiJ9