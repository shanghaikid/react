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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// all components share one event handler
_react.Component.prototype.handleEvent = function () {
    // all known React.Component events
    var map = {
        click: 'onClick',
        change: 'onChange',
        mouseover: 'onMouseOver',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        mouseout: 'onMouseOut',
        mousedown: 'onMouseDown',
        mouseup: 'onMouseUp',
        mousemove: 'onMouseMove',
        focus: 'onFocus',
        blur: 'onBlur'
    };

    // fallback helper
    function capitalize(type) {
        return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
    }

    // one handleEvent to rule them all
    return function handleEvent(e) {
        var method = map[e.type] || capitalize(e.type);
        // console.info(method, this.constructor.name);
        if (method in this.props) this.props[method](e);
        if (method in this) this[method](e);
    };
}();

var BaseComponent = function (_Component) {
    _inherits(BaseComponent, _Component);

    function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        return _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).apply(this, arguments));
    }

    return BaseComponent;
}(_react.Component);

exports.default = BaseComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(17)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(4);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Splitter = function (_BaseComponent) {
    _inherits(Splitter, _BaseComponent);

    function Splitter() {
        var _ref;

        _classCallCheck(this, Splitter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // properties
        var _this = _possibleConstructorReturn(this, (_ref = Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call.apply(_ref, [this].concat(args)));

        _this.baseClass = 'splitter';
        return _this;
    }

    _createClass(Splitter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                isVertical = _props.isVertical,
                cls = this.baseClass + ('' + (isVertical ? ' vertical' : ' horizontal'));


            return _react2.default.createElement('div', _extends({}, this.props, {
                className: cls }));
        }
    }]);

    return Splitter;
}(_BaseComponent3.default);

exports.default = Splitter;


Splitter.defaultProps = {
    isVertical: true
};

Splitter.propTypes = {
    isVertical: _propTypes2.default.bool
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, { name: 'OK' }), document.getElementById('root'));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(13);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(18);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(8);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(19);

var _TreeView2 = _interopRequireDefault(_TreeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nav = [{ id: 'mon', label: 'Monitoring', url: '#1', value: 1 }, { id: 'form', label: 'Form Widgets', url: '#2', value: 2 }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '#3', value: 3 }, { id: 'wizard', label: 'Wizard', url: '#4', value: 4 }, { id: 'tooltip', label: 'Tooltip', url: '#5', value: 5 }] }];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'onTreeNodeClick',
        value: function onTreeNodeClick(node) {
            console.log('expand node', node);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _BorderContainer2.default,
                null,
                _react2.default.createElement(
                    _Pane2.default,
                    { className: 'leftPane', splitter: 'vertical', size: 200, minSize: 200, maxSize: 500, sizeUnit: 'px' },
                    _react2.default.createElement(_TreeView2.default, { data: nav, onTreeNodeClick: this.onTreeNodeClick.bind(this) })
                ),
                _react2.default.createElement(
                    _Pane2.default,
                    { className: 'rightPane', display: 'flex', direction: 'column' },
                    _react2.default.createElement(_Pane2.default, { splitter: 'horizontal', size: 75, maxSize: 80 }),
                    _react2.default.createElement(_Pane2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorderContainer = function (_BaseComponent) {
    _inherits(BorderContainer, _BaseComponent);

    function BorderContainer() {
        var _ref;

        _classCallCheck(this, BorderContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // properties
        var _this = _possibleConstructorReturn(this, (_ref = BorderContainer.__proto__ || Object.getPrototypeOf(BorderContainer)).call.apply(_ref, [this].concat(args)));

        _this.baseClass = 'borderContainer';
        return _this;
    }

    _createClass(BorderContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log(this.props.children)
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                _extends({}, this.props, { className: this.baseClass + (' ' + className) }),
                children
            );
        }
    }]);

    return BorderContainer;
}(_BaseComponent3.default);

exports.default = BorderContainer;


BorderContainer.defaultProps = {
    persist: false,
    className: ''
};

BorderContainer.propTypes = {
    className: _propTypes2.default.string,
    persist: _propTypes2.default.bool
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(7);
var assign = __webpack_require__(15);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(16);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(6);
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
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Splitter = __webpack_require__(8);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: keyboard event
var Pane = function (_BaseComponent) {
    _inherits(Pane, _BaseComponent);

    function Pane() {
        var _ref;

        _classCallCheck(this, Pane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // properties
        var _this = _possibleConstructorReturn(this, (_ref = Pane.__proto__ || Object.getPrototypeOf(Pane)).call.apply(_ref, [this].concat(args)));

        _this.baseClass = 'pane';
        _this.mousemoveHandler = _this.onMouseMove.bind(_this);
        _this.mouseupHandler = _this.onMouseUp.bind(_this);
        _this.state = {
            left: 0,
            top: 0
        };
        return _this;
    }

    _createClass(Pane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                splitter = _props.splitter,
                size = _props.size,
                sizeUnit = _props.sizeUnit,
                maxSize = _props.maxSize,
                minSize = _props.minSize,
                _domNode$parentElemen = this.domNode.parentElement,
                offsetWidth = _domNode$parentElemen.offsetWidth,
                offsetHeight = _domNode$parentElemen.offsetHeight;


            if (splitter === 'null') return;

            if (splitter === 'vertical') {
                this.maxSize = sizeUnit === '%' ? Math.floor(offsetWidth * maxSize / 100) : maxSize;
                this.minSize = sizeUnit === '%' ? Math.floor(offsetWidth * minSize / 100) : minSize;

                this.setState({
                    left: sizeUnit === '%' ? Math.floor(offsetWidth * size / 100) : size
                });
            }

            if (splitter === 'horizontal') {
                this.maxSize = sizeUnit === '%' ? Math.floor(offsetHeight * maxSize / 100) : maxSize;
                this.minSize = sizeUnit === '%' ? Math.floor(offsetHeight * minSize / 100) : minSize;

                this.setState({
                    top: sizeUnit === '%' ? Math.floor(offsetHeight * size / 100) : size
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.onMouseDown();
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp(e) {
            document.removeEventListener('mousemove', this.mousemoveHandler);
        }
    }, {
        key: 'onTouchEnd',
        value: function onTouchEnd(e) {
            this.onMouseUp(e);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(e) {
            document.addEventListener('mousemove', this.mousemoveHandler);
            document.addEventListener('mouseup', this.mouseupHandler);
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(e) {
            this.onMouseDown(e);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(e) {
            var clientX = e.clientX,
                clientY = e.clientY,
                maxSize = this.maxSize,
                minSize = this.minSize,
                left = clientX > maxSize ? maxSize : clientX < minSize ? minSize : clientX,
                top = clientY > maxSize ? maxSize : clientY < minSize ? minSize : clientY;


            this.setState({ left: left, top: top });
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(e) {
            this.onMouseMove(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                className = _props2.className,
                children = _props2.children,
                splitter = _props2.splitter,
                direction = _props2.direction,
                display = _props2.display,
                splitterSize = _props2.splitterSize,
                cls = this.baseClass + ('' + (splitter === 'vertical' ? ' verticalPane' : '')) + (' ' + className),
                style = {
                display: display,
                flexDirection: direction
            },
                splitterStyle = {
                zIndex: 1
            },
                isVertical = splitter === 'vertical';


            if (splitter === 'vertical') {
                Object.assign(splitterStyle, {
                    left: this.state.left - splitterSize,
                    top: 0,
                    right: 'auto'
                });
                Object.assign(style, {
                    width: this.state.left,
                    minWidth: this.state.left
                });
            }

            if (splitter === 'horizontal') {
                Object.assign(splitterStyle, {
                    top: this.setState.top - splitterSize,
                    left: 0
                });
                Object.assign(style, {
                    height: this.state.top,
                    minHeight: this.state.top
                });
            }

            return _react2.default.createElement(
                'div',
                _extends({ ref: function ref(pane) {
                        _this2.domNode = pane;
                    }
                }, this.props, { style: style, onClick: this.handleEvent.bind(this),
                    className: cls }),
                children,
                splitter !== 'null' ? _react2.default.createElement(_Splitter2.default, {
                    style: splitterStyle,
                    onMouseDown: this.handleEvent.bind(this),
                    onMouseUp: this.handleEvent.bind(this),
                    onTouchStart: this.handleEvent.bind(this),
                    onTouchEnd: this.handleEvent.bind(this),
                    isVertical: isVertical }) : ''
            );
        }
    }]);

    return Pane;
}(_BaseComponent3.default);

exports.default = Pane;


Pane.defaultProps = {
    className: '',
    splitter: 'null',
    size: 25,
    minSize: 15,
    maxSize: 50,
    sizeUnit: '%',
    display: 'block',
    direction: 'column',
    splitterSize: 10
};

Pane.propTypes = {
    className: _propTypes2.default.string,
    splitter: _propTypes2.default.string,
    size: _propTypes2.default.number,
    minSize: _propTypes2.default.number,
    maxSize: _propTypes2.default.number,
    display: _propTypes2.default.string,
    direction: _propTypes2.default.string,
    splitterSize: _propTypes2.default.number
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent3 = __webpack_require__(2);

var _BaseComponent4 = _interopRequireDefault(_BaseComponent3);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = function (_BaseComponent) {
    _inherits(TreeNode, _BaseComponent);

    function TreeNode() {
        var _ref;

        _classCallCheck(this, TreeNode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            expand: false
        };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                expand: this.props.expand
            });
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            e.stopPropagation();
            if (typeof this.props.children !== 'undefined' && e.target.nodeName === 'A') {
                this.setState({
                    expand: !this.state.expand
                });
            }

            if (typeof this.props.onTreeNodeClick !== 'undefined') {
                this.props.onTreeNodeClick(this.props);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                label = _props.label,
                url = _props.url,
                children = _props.children,
                onTreeNodeClick = _props.onTreeNodeClick,
                focusId = _props.focusId,
                expand = this.state.expand;

            return _react2.default.createElement(
                'li',
                { key: id,
                    className: focusId === id && !children ? this.props.focusClass : expand ? this.props.expandoClass : this.props.expandoClass,
                    onClick: this.handleEvent.bind(this) },
                _react2.default.createElement(
                    'a',
                    { href: url ? url : '#' },
                    label
                ),
                children && expand ? _react2.default.createElement(
                    'ul',
                    null,
                    children.map(function (c) {
                        return _react2.default.createElement(TreeNode, _extends({ focusId: focusId, onTreeNodeClick: onTreeNodeClick }, c));
                    })
                ) : ''
            );
        }
    }]);

    return TreeNode;
}(_BaseComponent4.default);

TreeNode.defaultProps = {
    focusClass: 'focused',
    expandoExpandClass: 'expand',
    expandoClass: 'fold'
};

TreeNode.propTypes = _defineProperty({
    id: _propTypes2.default.string,
    label: _propTypes2.default.string,
    onTreeNodeClick: _propTypes2.default.func,
    url: _propTypes2.default.string,
    children: _propTypes2.default.array,
    expand: _propTypes2.default.bool,
    focusId: _propTypes2.default.string,
    focusClass: _propTypes2.default.string,
    expandoClass: _propTypes2.default.string
}, 'expandoClass', _propTypes2.default.string);

var TreeView = function (_BaseComponent2) {
    _inherits(TreeView, _BaseComponent2);

    function TreeView() {
        var _ref2;

        _classCallCheck(this, TreeView);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (_ref2 = TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call.apply(_ref2, [this].concat(args)));

        _this2.state = {
            focusId: -1
        };
        return _this2;
    }

    _createClass(TreeView, [{
        key: 'onTreeNodeClick',
        value: function onTreeNodeClick(treeNode) {
            var id = treeNode.id,
                children = treeNode.children,
                onTreeNodeClick = this.props.onTreeNodeClick,
                focusId = children && children[0] ? children[0].id : id;


            onTreeNodeClick(treeNode);

            this.setState({ focusId: focusId });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                this.props,
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.data.map(function (c) {
                        return _react2.default.createElement(TreeNode, _extends({ focusId: _this3.state.focusId, onTreeNodeClick: _this3.onTreeNodeClick.bind(_this3) }, c));
                    })
                )
            );
        }
    }]);

    return TreeView;
}(_BaseComponent4.default);

exports.default = TreeView;


TreeView.defaultProps = {
    className: 'treeView'
};

TreeView.propTypes = {
    onTreeNodeClick: _propTypes2.default.func,
    className: _propTypes2.default.string
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdmMzkzNDA1MjIwMGU3MTU3OTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1ldGhvZCIsInByb3BzIiwiQmFzZUNvbXBvbmVudCIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJyZXF1aXJlIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiYmFzZUNsYXNzIiwibG9nIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiY2xzIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXYiLCJpZCIsImxhYmVsIiwidXJsIiwidmFsdWUiLCJleHBhbmQiLCJBcHAiLCJub2RlIiwib25UcmVlTm9kZUNsaWNrIiwiYmluZCIsIkNvbXBvbmVudCIsIkJvcmRlckNvbnRhaW5lciIsInBlcnNpc3QiLCJzdHJpbmciLCJhc3NpZ24iLCJjaGVja1Byb3BUeXBlcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwiZnVuYyIsIm51bWJlciIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsInN0YWNrIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleSIsImhhc093blByb3BlcnR5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiUHJvcFR5cGVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInN0YXRlIiwibGVmdCIsInRvcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJkb21Ob2RlIiwicGFyZW50RWxlbWVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiTWF0aCIsImZsb29yIiwic2V0U3RhdGUiLCJvbk1vdXNlRG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0Iiwid2lkdGgiLCJtaW5XaWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsInBhbmUiLCJUcmVlTm9kZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5vZGVOYW1lIiwiZm9jdXNJZCIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJUcmVlVmlldyIsInRyZWVOb2RlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7Ozs7QUNBQTtBQUNBLElBQUlBLFVBQVVDLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixVQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7QUFDRCxTQUFTQyxtQkFBVCxH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UyxDQUFULENBQWIsR0FBNEJBLFNBQVMsQ0FBVCxFQUFZVSxFQUF4QyxHQUE2Q0EsRUFIckM7OztBQUt0Qk8sNEJBQWdCNkssUUFBaEI7O0FBRUEsaUJBQUszQixRQUFMLENBQWMsRUFBRXNCLGdCQUFGLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFTLHFCQUFLMU8sS0FBZDtBQUNJO0FBQUE7QUFBQTtBQUFLLHlCQUFLQSxLQUFMLENBQVdnUCxJQUFYLENBQWdCbFEsR0FBaEIsQ0FBb0I7QUFBQSwrQkFBSyw4QkFBQyxRQUFELGFBQVUsU0FBUyxPQUFLd04sS0FBTCxDQUFXb0MsT0FBOUIsRUFBdUMsaUJBQWlCLE9BQUt4SyxlQUFMLENBQXFCQyxJQUFyQixRQUF4RCxJQUE2RnhDLENBQTdGLEVBQUw7QUFBQSxxQkFBcEI7QUFBTDtBQURKLGFBREo7QUFLSDs7Ozs7O2tCQXhCZ0JtTixROzs7QUEyQnJCQSxTQUFTMUwsWUFBVCxHQUF3QjtBQUNwQkosZUFBVztBQURTLENBQXhCOztBQUlBOEwsU0FBU3pMLFNBQVQsR0FBcUI7QUFDakJhLHFCQUFpQixvQkFBVWlCLElBRFY7QUFFakJuQyxlQUFXLG9CQUFVdUI7QUFGSixDQUFyQixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTdmMzkzNDA1MjIwMGU3MTU3OTMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbi8vIGFsbCBjb21wb25lbnRzIHNoYXJlIG9uZSBldmVudCBoYW5kbGVyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGwga25vd24gUmVhY3QuQ29tcG9uZW50IGV2ZW50c1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXG4gICAgICAgIGNoYW5nZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgbW91c2VvdmVyOiAnb25Nb3VzZU92ZXInLFxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gICAgICAgIG1vdXNlb3V0OiAnb25Nb3VzZU91dCcsXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgICAgICAgbW91c2V1cDogJ29uTW91c2VVcCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgICAgICAgYmx1cjogJ29uQmx1cidcbiAgICB9O1xuXG4gICAgLy8gZmFsbGJhY2sgaGVscGVyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAnb24nICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLy8gb25lIGhhbmRsZUV2ZW50IHRvIHJ1bGUgdGhlbSBhbGxcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbWFwW2UudHlwZV0gfHwgY2FwaXRhbGl6ZShlLnR5cGUpO1xuICAgICAgICAvLyBjb25zb2xlLmluZm8obWV0aG9kLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMucHJvcHMpIHRoaXMucHJvcHNbbWV0aG9kXShlKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSk7XG4gICAgfTtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzcyA9ICdzcGxpdHRlcic7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmJhc2VDbGFzcyArIChgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIG5hbWU9XCJPS1wiIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5cbmxldCBuYXYgPSBbXG4gICAge2lkOiAnbW9uJywgbGFiZWw6ICdNb25pdG9yaW5nJywgdXJsOiAnIzEnLCB2YWx1ZTogMX0sXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBXaWRnZXRzJywgdXJsOiAnIzInLCB2YWx1ZTogMn0sXG4gICAge2lkOiAnd2lkZ2V0cycsIGxhYmVsOiAnV2lkZ2V0cycsIGV4cGFuZDogdHJ1ZSwgY2hpbGRyZW46IFtcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJyMzJywgdmFsdWU6IDN9LFxuICAgICAgICB7aWQ6ICd3aXphcmQnLCBsYWJlbDogJ1dpemFyZCcsIHVybDogJyM0JywgdmFsdWU6IDR9LFxuICAgICAgICB7aWQ6ICd0b29sdGlwJywgbGFiZWw6ICdUb29sdGlwJywgdXJsOiAnIzUnLCB2YWx1ZTogNX1cbiAgICBdfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIG9uVHJlZU5vZGVDbGljayhub2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleHBhbmQgbm9kZScsIG5vZGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwibGVmdFBhbmVcIiBzcGxpdHRlcj1cInZlcnRpY2FsXCIgc2l6ZT17MjAwfSBtaW5TaXplPXsyMDB9IG1heFNpemU9ezUwMH0gc2l6ZVVuaXQ9XCJweFwiID5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRhdGE9e25hdn0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHNwbGl0dGVyPVwiaG9yaXpvbnRhbFwiIHNpemU9ezc1fSBtYXhTaXplPXs4MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgLz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3MgPSAnYm9yZGVyQ29udGFpbmVyJztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmJhc2VDbGFzcyArIGAgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb3JkZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJydcbn07XG5cbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcnNpc3Q6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIFRPRE86IGtleWJvYXJkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzcyA9ICdwYW5lJztcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtzcGxpdHRlciwgc2l6ZSwgc2l6ZVVuaXQsIG1heFNpemUsIG1pblNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ251bGwnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICB7bWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLFxuICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50WCA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFggPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFgpLFxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIHNwbGl0dGVyLCBkaXJlY3Rpb24sIGRpc3BsYXksIHNwbGl0dGVyU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gdGhpcy5iYXNlQ2xhc3MgKyAoYCR7c3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcgPyBgIHZlcnRpY2FsUGFuZWAgOiAnJ31gKSArIChgICR7Y2xhc3NOYW1lfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7c3BsaXR0ZXIgIT09ICdudWxsJyA/IDxTcGxpdHRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzcGxpdHRlcjogJ251bGwnLFxuICAgIHNpemU6IDI1LFxuICAgIG1pblNpemU6IDE1LFxuICAgIG1heFNpemU6IDUwLFxuICAgIHNpemVVbml0OiAnJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHNwbGl0dGVyU2l6ZTogMTBcbn07XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmVlTm9kZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kOiB0aGlzLnByb3BzLmV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyAmJiBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLnN0YXRlLmV4cGFuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIGxhYmVsLCB1cmwsIGNoaWxkcmVuLCBvblRyZWVOb2RlQ2xpY2ssIGZvY3VzSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGZvY3VzSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyB1cmwgOiAnIyd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGZvY3VzSWQ9e2ZvY3VzSWR9IG9uVHJlZU5vZGVDbGljaz17b25UcmVlTm9kZUNsaWNrfSB7Li4uY30gLz4pfTwvdWw+OiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9jdXNDbGFzczogJ2ZvY3VzZWQnLFxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXG4gICAgZXhwYW5kb0NsYXNzOiAnZm9sZCdcbn07XG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvY3VzSWQ6IC0xXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZm9jdXNJZCA9IChjaGlsZHJlbiAmJiBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXS5pZCA6IGlkO1xuXG4gICAgICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzSWQgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRhdGEubWFwKGMgPT4gPFRyZWVOb2RlIGZvY3VzSWQ9e3RoaXMuc3RhdGUuZm9jdXNJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICd0cmVlVmlldydcbn07XG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==