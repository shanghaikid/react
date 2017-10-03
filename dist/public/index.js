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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _utils = __webpack_require__(14);

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
        var _ref;

        _classCallCheck(this, BaseComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // TODO: find a better way to save memory
        var _this = _possibleConstructorReturn(this, (_ref = BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call.apply(_ref, [this].concat(args)));

        _this.handleEvent = _this.handleEvent.bind(_this);
        _this.libClassPrefix = 'e';
        _this.baseClassName = 'component';

        _this.init();
        return _this;
    }

    _createClass(BaseComponent, [{
        key: 'setState',
        value: function setState(obj) {
            // console.log(obj, this.transformState(obj));
            _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this).call(this, obj);
        }
    }, {
        key: 'transformState',
        value: function transformState(stateObj) {
            return (0, _utils.e)(stateObj);
        }
    }, {
        key: 'getLibPrefixedClass',
        value: function getLibPrefixedClass(cls) {
            return this.libClassPrefix + '-' + cls;
        }

        // initialize stub

    }, {
        key: 'init',
        value: function init() {}
    }, {
        key: 'className',
        get: function get() {
            return this.libClassPrefix + '-' + this.baseClassName + ' ' + (this.props.className || '');
        }
    }]);

    return BaseComponent;
}(_react.Component);

exports.default = BaseComponent;

/***/ }),
/* 2 */
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
  module.exports = __webpack_require__(17)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(20)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Splitter = function (_BaseComponent) {
    _inherits(Splitter, _BaseComponent);

    function Splitter() {
        _classCallCheck(this, Splitter);

        return _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).apply(this, arguments));
    }

    _createClass(Splitter, [{
        key: 'init',
        value: function init() {
            // properties
            this.baseClassName = 'splitter';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                isVertical = _props.isVertical,
                cls = this.className + ('' + (isVertical ? ' vertical' : ' horizontal'));


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

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_BaseComponent) {
    _inherits(Button, _BaseComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'button';
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            var onClicked = this.props.onClicked;


            if (onClicked) {
                onClicked(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                type = _props.type,
                title = _props.title;


            return _react2.default.createElement(
                'button',
                { type: type, title: title, className: this.className, onClick: this.handleEvent },
                text
            );
        }
    }]);

    return Button;
}(_BaseComponent3.default);

exports.default = Button;


Button.defaultProps = {
    text: 'Button',
    type: 'button',
    title: ''
};

Button.propTypes = {
    className: _propTypes2.default.string,
    text: _propTypes2.default.string,
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    onClicked: _propTypes2.default.func
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(25);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Header2.default, { text: 'Monitoring' }) }, { id: 'form', label: 'Form Widgets', url: '/#form', component: _react2.default.createElement(_Header2.default, { text: 'Forms Widget' }) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'tooltip', label: 'Tooltip', url: '/#widgets/tooltip', component: _react2.default.createElement(_Header2.default, { text: 'Tooltips' }) }] }];

var pagesDef = function (nav) {
    var res = [];
    for (var i = 0; i < nav.length; i++) {
        var n = nav[i];
        if (n.children) {
            n.children.forEach(function (n) {
                return nav.push(n);
            });
        } else {
            res.push(n);
        }
    }
    return res;
}(Array.from(navDef));

_reactDom2.default.render(_react2.default.createElement(_App2.default, { name: 'OK', nav: navDef, pages: pagesDef }), document.getElementById('root'));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_BaseComponent) {
    _inherits(Header, _BaseComponent);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'init',
        value: function init() {
            this.state = {
                test: Math.random()
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                { gid: this.state.test },
                this.props.text
            );
        }
    }]);

    return Header;
}(_BaseComponent3.default);

exports.default = Header;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.isObj = isObj;
exports.clone = clone;
exports.e = e;
// check if obj is an Object
function isObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

// clone object
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// flatten state object
// grid:{layout:{menu:{expand:true}}}} => gridLayoutMenuExpand:true
function e(stateObject) {
    function _f(stateObject, root, result) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(stateObject)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];

                var valueIsObj = isObj(value),
                    r = '' + root + (root === '' ? key : key.charAt(0).toUpperCase() + key.slice(1));

                if (valueIsObj) {
                    _f(value, r, result);
                } else {
                    result[r] = value;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    var result = {};
    _f(stateObject, '', result);
    return result;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(16);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(21);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(8);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(22);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(23);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_BaseComponent) {
    _inherits(App, _BaseComponent);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            this.state = {
                activeId: 'mon'
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var hash = window.location.hash.split('/'),
                activeId = hash[hash.length - 1].replace('#', '');

            this.setState({
                activeId: activeId
            });
        }
    }, {
        key: 'onTreeNodeClick',
        value: function onTreeNodeClick(node, state) {
            var expand = state.expand;


            if (typeof node.children === 'undefined') {
                this.setState({
                    activeId: node.id
                });
            }
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
                    _react2.default.createElement(_TreeView2.default, { def: this.props.nav, activeId: this.state.activeId, onTreeNodeClick: this.onTreeNodeClick.bind(this) })
                ),
                _react2.default.createElement(
                    _Pane2.default,
                    { className: 'rightPane', display: 'flex', direction: 'column' },
                    _react2.default.createElement(
                        _Pane2.default,
                        { splitter: 'horizontal', size: 75, maxSize: 80 },
                        _react2.default.createElement(_Switch2.default, { def: this.props.pages, activeId: this.state.activeId })
                    ),
                    _react2.default.createElement(_Pane2.default, null)
                )
            );
        }
    }]);

    return App;
}(_BaseComponent3.default);

exports.default = App;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorderContainer = function (_BaseComponent) {
    _inherits(BorderContainer, _BaseComponent);

    function BorderContainer() {
        _classCallCheck(this, BorderContainer);

        return _possibleConstructorReturn(this, (BorderContainer.__proto__ || Object.getPrototypeOf(BorderContainer)).apply(this, arguments));
    }

    _createClass(BorderContainer, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'borderContainer';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                _extends({}, this.props, { className: this.className }),
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
/* 17 */
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
var assign = __webpack_require__(18);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(19);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 18 */
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
/* 19 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Splitter = __webpack_require__(8);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: keyboard event
var Pane = function (_BaseComponent) {
    _inherits(Pane, _BaseComponent);

    function Pane() {
        _classCallCheck(this, Pane);

        return _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).apply(this, arguments));
    }

    _createClass(Pane, [{
        key: 'init',
        value: function init() {
            // properties
            this.baseClassName = 'pane';
            this.mousemoveHandler = this.onMouseMove.bind(this);
            this.mouseupHandler = this.onMouseUp.bind(this);
            this.state = {
                left: 0,
                top: 0
            };
        }
    }, {
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
                cls = this.className + ('' + (splitter === 'vertical' ? ' verticalPane' : '')),
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
                }, this.props, { style: style, onClick: this.handleEvent,
                    className: cls }),
                children,
                splitter !== 'null' ? _react2.default.createElement(_Splitter2.default, {
                    style: splitterStyle,
                    onMouseDown: this.handleEvent,
                    onMouseUp: this.handleEvent,
                    onTouchStart: this.handleEvent,
                    onTouchEnd: this.handleEvent,
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent3 = __webpack_require__(1);

var _BaseComponent4 = _interopRequireDefault(_BaseComponent3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = function (_BaseComponent) {
    _inherits(TreeNode, _BaseComponent);

    function TreeNode() {
        _classCallCheck(this, TreeNode);

        return _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).apply(this, arguments));
    }

    _createClass(TreeNode, [{
        key: 'init',
        value: function init() {
            this.state = {
                expand: false
            };
        }
    }, {
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
                this.props.onTreeNodeClick(this.props, this.state);
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
                activeId = _props.activeId,
                expand = this.state.expand;


            return _react2.default.createElement(
                'li',
                { key: id,
                    className: activeId === id && !children ? this.props.focusClass : expand ? this.props.expandoClass : this.props.expandoClass,
                    onClick: this.handleEvent },
                _react2.default.createElement(
                    'a',
                    { href: url ? url : 'javascript:void(0)' },
                    label
                ),
                children && expand ? _react2.default.createElement(
                    'ul',
                    null,
                    children.map(function (c) {
                        return _react2.default.createElement(TreeNode, _extends({ activeId: activeId, onTreeNodeClick: onTreeNodeClick }, c));
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
        _classCallCheck(this, TreeView);

        return _possibleConstructorReturn(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).apply(this, arguments));
    }

    _createClass(TreeView, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'treeView';
        }
    }, {
        key: 'onTreeNodeClick',
        value: function onTreeNodeClick(treeNode, state) {
            var id = treeNode.id,
                children = treeNode.children,
                onTreeNodeClick = this.props.onTreeNodeClick,
                expand = state.expand;

            // callback

            onTreeNodeClick(treeNode, state);

            // if no selection or no children, focus target
            if (!children || this.props.activeId === -1) {
                this.setState({ activeId: id });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                _extends({}, this.props, { className: this.className }),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.def.map(function (c) {
                        return _react2.default.createElement(TreeNode, _extends({ activeId: _this3.props.activeId, onTreeNodeClick: _this3.onTreeNodeClick.bind(_this3) }, c));
                    })
                )
            );
        }
    }]);

    return TreeView;
}(_BaseComponent4.default);

exports.default = TreeView;


TreeView.propTypes = {
    onTreeNodeClick: _propTypes2.default.func,
    className: _propTypes2.default.string
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _ContentPane = __webpack_require__(24);

var _ContentPane2 = _interopRequireDefault(_ContentPane);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_BaseComponent) {
    _inherits(Switch, _BaseComponent);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'switch';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style = {
                width: '100%',
                height: '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: style, 'data-active-id': this.props.activeId, className: this.className },
                this.props.def.map(function (c) {
                    return _react2.default.createElement(
                        _ContentPane2.default,
                        { className: c.id === _this2.props.activeId ? _this2.props.activeId : 'hidden' },
                        c.component
                    );
                })
            );
        }
    }]);

    return Switch;
}(_BaseComponent3.default);

exports.default = Switch;


Switch.defaultProps = {
    def: []
};

Switch.propTypes = {
    def: _propTypes2.default.array,
    activeId: _propTypes2.default.string
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentPane = function (_BaseComponent) {
    _inherits(ContentPane, _BaseComponent);

    function ContentPane() {
        _classCallCheck(this, ContentPane);

        return _possibleConstructorReturn(this, (ContentPane.__proto__ || Object.getPrototypeOf(ContentPane)).apply(this, arguments));
    }

    _createClass(ContentPane, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'contentPane';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({}, this.props, { className: this.className }),
                this.props.children
            );
        }
    }]);

    return ContentPane;
}(_BaseComponent3.default);

exports.default = ContentPane;


ContentPane.propTypes = {
    className: _propTypes2.default.string
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Dialog = __webpack_require__(26);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dialogs page
var Dialogs = function (_BaseComponent) {
    _inherits(Dialogs, _BaseComponent);

    function Dialogs() {
        _classCallCheck(this, Dialogs);

        return _possibleConstructorReturn(this, (Dialogs.__proto__ || Object.getPrototypeOf(Dialogs)).apply(this, arguments));
    }

    _createClass(Dialogs, [{
        key: 'init',
        value: function init() {
            this.onBtnClicked = this.onBtnClicked.bind(this);
            this.onDialogClose = this.onDialogClose.bind(this);

            this.state = this.transformState({
                dialog: {
                    opened: false
                },
                grid: {
                    button: {
                        hidden: true
                    },
                    layout: {
                        menu: {
                            expand: true
                        }
                    },
                    hidden: false
                }
            });
        }
    }, {
        key: 'onBtnClicked',
        value: function onBtnClicked(e) {
            this.setState((0, _DialogsAction.toggleDialogOpen)('dialog'));
        }
    }, {
        key: 'onDialogClose',
        value: function onDialogClose(e) {
            this.setState((0, _DialogsAction.toggleDialogOpen)('dialog'));
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: '100%',
                height: '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(_Button2.default, { onClicked: this.onBtnClicked, text: 'Open Dialog' }),
                _react2.default.createElement(_Dialog2.default, { opened: this.state.dialogOpened, onClose: this.onDialogClose }),
                _react2.default.createElement(_Dialog2.default, { opened: this.state.dialogOpened, onClose: this.onDialogClose })
            );
        }
    }]);

    return Dialogs;
}(_BaseComponent3.default);

exports.default = Dialogs;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dialog
var Dialog = function (_BaseComponent) {
    _inherits(Dialog, _BaseComponent);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'init',
        value: function init() {
            // class
            this.baseClassName = 'dialog';
            this.headerClass = this.getLibPrefixedClass('dialog-header');
            this.closeBtnClass = this.getLibPrefixedClass('dialog-btn-close');
            this.bodyClass = this.getLibPrefixedClass('dialog-body');
            this.footerClass = this.getLibPrefixedClass('dialog-footer');
            this.denyBtnClass = this.getLibPrefixedClass('dialog-btn-deny');
            this.confirmBtnClass = this.getLibPrefixedClass('dialog-btn-confirm');
            // handlers
            this.onDenyBtnClicked = this.onDenyBtnClicked.bind(this);
            this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
            this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
        }
    }, {
        key: 'onCloseBtnClicked',
        value: function onCloseBtnClicked(e) {
            var onClose = this.props.onClose;


            if (onClose) {
                onClose(e);
            }
        }
    }, {
        key: 'onDenyBtnClicked',
        value: function onDenyBtnClicked(e) {
            var onDeny = this.props.onDeny;


            if (onDeny) {
                onDeny(e);
            }
        }
    }, {
        key: 'onConfirmBtnClicked',
        value: function onConfirmBtnClicked(e) {
            var onConfirm = this.props.onConfirm;


            if (onConfirm) {
                onConfirm(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                mod = _props.mod,
                title = _props.title,
                message = _props.message,
                denyLabel = _props.denyLabel,
                confirmLabel = _props.confirmLabel,
                closeBtnLabel = _props.closeBtnLabel,
                opened = _props.opened,
                cls = this.className + ' ' + mod + (!opened ? 'hidden' : '');


            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    { className: this.headerClass },
                    title,
                    _react2.default.createElement(_Button2.default, { title: closeBtnLabel, text: closeBtnLabel, onClicked: this.onCloseBtnClicked, className: this.closeBtnClass })
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.bodyClass },
                    message
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.footerClass },
                    _react2.default.createElement(_Button2.default, { onClicked: this.onDenyBtnClicked, text: denyLabel, className: this.denyBtnClass }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.onConfirmBtnClicked, text: confirmLabel, className: this.confirmBtnClass })
                )
            );
        }
    }]);

    return Dialog;
}(_BaseComponent3.default);

exports.default = Dialog;


Dialog.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    message: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    denyLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close',
    opened: false
};

Dialog.propTypes = {
    mod: _propTypes2.default.string,
    title: _propTypes2.default.string,
    message: _propTypes2.default.string,
    helpLabel: _propTypes2.default.string,
    denyLabel: _propTypes2.default.string,
    confirmLabel: _propTypes2.default.string,
    closeBtnLabel: _propTypes2.default.string,
    onDeny: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func,
    opened: _propTypes2.default.bool
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleDialogOpen = toggleDialogOpen;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggleDialogOpen(dialogName) {
    return function (state, props) {
        return _defineProperty({}, dialogName + 'Opened', !state[dialogName + 'Opened']);
    };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTZkMWYwOGE3MWNjMTY4YTA3M2UiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIl0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsIkJhc2VDb21wb25lbnQiLCJhcmdzIiwiYmluZCIsImxpYkNsYXNzUHJlZml4IiwiYmFzZUNsYXNzTmFtZSIsImluaXQiLCJvYmoiLCJzdGF0ZU9iaiIsImNscyIsImNsYXNzTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsIkFycmF5IiwiYXJndW1lbnRzIiwiaSIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsIkJ1dHRvbiIsIm9uQ2xpY2tlZCIsInRleHQiLCJzdHJpbmciLCJmdW5jIiwibmF2RGVmIiwiaWQiLCJsYWJlbCIsInVybCIsImNvbXBvbmVudCIsImV4cGFuZCIsInBhZ2VzRGVmIiwicmVzIiwibmF2IiwibiIsImZvckVhY2giLCJmcm9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkhlYWRlciIsInN0YXRlIiwidGVzdCIsIk1hdGgiLCJyYW5kb20iLCJpc09iaiIsImNsb25lIiwiT2JqZWN0IiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZU9iamVjdCIsIl9mIiwicm9vdCIsInJlc3VsdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsInZhbHVlSXNPYmoiLCJyIiwiQXBwIiwiYWN0aXZlSWQiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzcGxpdCIsInNldFN0YXRlIiwibm9kZSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiUHJvcFR5cGVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsImpvaW4iLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsInMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic2hpbSIsImdldFNoaW0iLCJQYW5lIiwibW91c2Vtb3ZlSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2V1cEhhbmRsZXIiLCJvbk1vdXNlVXAiLCJsZWZ0IiwidG9wIiwic3BsaXR0ZXIiLCJzaXplIiwic2l6ZVVuaXQiLCJtYXhTaXplIiwibWluU2l6ZSIsImRvbU5vZGUiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJmbG9vciIsIm9uTW91c2VEb3duIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGllbnRYIiwiY2xpZW50WSIsImRpcmVjdGlvbiIsImRpc3BsYXkiLCJzcGxpdHRlclNpemUiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJzcGxpdHRlclN0eWxlIiwiekluZGV4IiwicmlnaHQiLCJ3aWR0aCIsIm1pbldpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJDb250ZW50UGFuZSIsIkRpYWxvZ3MiLCJvbkJ0bkNsaWNrZWQiLCJvbkRpYWxvZ0Nsb3NlIiwidHJhbnNmb3JtU3RhdGUiLCJkaWFsb2ciLCJvcGVuZWQiLCJncmlkIiwiYnV0dG9uIiwiaGlkZGVuIiwibGF5b3V0IiwibWVudSIsImRpYWxvZ09wZW5lZCIsIkRpYWxvZyIsImhlYWRlckNsYXNzIiwiZ2V0TGliUHJlZml4ZWRDbGFzcyIsImNsb3NlQnRuQ2xhc3MiLCJib2R5Q2xhc3MiLCJmb290ZXJDbGFzcyIsImRlbnlCdG5DbGFzcyIsImNvbmZpcm1CdG5DbGFzcyIsIm9uRGVueUJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJvbkNsb3NlIiwib25EZW55Iiwib25Db25maXJtIiwibW9kIiwiZGVueUxhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xvc2VCdG5MYWJlbCIsImhlbHBMYWJlbCIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2ZDFmMDhhNzFjYzE2OGEwNzNlIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJ1xuICAgIH07XG5cbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvLyBvbmUgaGFuZGxlRXZlbnQgdG8gcnVsZSB0aGVtIGFsbFxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBtYXBbZS50eXBlXSB8fCBjYXBpdGFsaXplKGUudHlwZSk7XG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbyhtZXRob2QsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykgdGhpcy5wcm9wc1ttZXRob2RdKGUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMpIHRoaXNbbWV0aG9kXShlKTtcbiAgICB9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgdG8gc2F2ZSBtZW1vcnlcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saWJDbGFzc1ByZWZpeCA9ICdlJztcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7dGhpcy5iYXNlQ2xhc3NOYW1lfSAke3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWA7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUob2JqKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iaiwgdGhpcy50cmFuc2Zvcm1TdGF0ZShvYmopKTtcbiAgICAgICAgc3VwZXIuc2V0U3RhdGUob2JqKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBzdHViXG4gICAgaW5pdCgpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArIChgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJ1dHRvbmA7XG4gICAgfVxuXG4gICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcbiAgICAgICAgICAgIG9uQ2xpY2tlZChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJ0J1dHRvbicsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGl0bGU6ICcnXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGlja2VkOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvQXBwJztcbmltcG9ydCBEaWFsb2dzIGZyb20gJy4vRGlhbG9ncyc7XG5cbmNvbnN0IG5hdkRlZiA9IFtcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiTW9uaXRvcmluZ1wiIC8+fSxcbiAgICB7aWQ6ICdmb3JtJywgbGFiZWw6ICdGb3JtIFdpZGdldHMnLCB1cmw6ICcvI2Zvcm0nLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkZvcm1zIFdpZGdldFwiIC8+fSxcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xuICAgICAgICB7aWQ6ICdkaWFsb2dzJywgbGFiZWw6ICdEaWFsb2dzJywgdXJsOiAnLyN3aWRnZXRzL2RpYWxvZ3MnLCBjb21wb25lbnQ6IDxEaWFsb2dzIC8+fSxcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcbiAgICAgICAge2lkOiAndG9vbHRpcCcsIGxhYmVsOiAnVG9vbHRpcCcsIHVybDogJy8jd2lkZ2V0cy90b29sdGlwJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJUb29sdGlwc1wiIC8+fVxuICAgIF19XG5dO1xuXG5jb25zdCBwYWdlc0RlZiA9IChuYXYgPT4ge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbiA9IG5hdltpXTtcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5hdi5wdXNoKG4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59KShBcnJheS5mcm9tKG5hdkRlZikpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlc3Q6IE1hdGgucmFuZG9tKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxoMSBnaWQ9e3RoaXMuc3RhdGUudGVzdH0+e3RoaXMucHJvcHMudGV4dH08L2gxPilcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCIvLyBjaGVjayBpZiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWRMYXlvdXRNZW51RXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0KSB7XG4gICAgZnVuY3Rpb24gX2Yoc3RhdGVPYmplY3QsIHJvb3QsIHJlc3VsdCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdGF0ZU9iamVjdCkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZUlzT2JqID0gaXNPYmoodmFsdWUpLFxuICAgICAgICAgICAgICAgIHIgPSBgJHtyb290fSR7cm9vdCA9PT0gJycgPyBrZXkgOiBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlSXNPYmopIHtcbiAgICAgICAgICAgICAgICBfZih2YWx1ZSwgciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3JdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgX2Yoc3RhdGVPYmplY3QsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvcmRlckNvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXInO1xuaW1wb3J0IFBhbmUgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvUGFuZSc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXInO1xuaW1wb3J0IFRyZWVWaWV3IGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJZDogJ21vbidcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpLFxuICAgICAgICAgICAgYWN0aXZlSWQgPSBoYXNoW2hhc2gubGVuZ3RoIC0gMV0ucmVwbGFjZSgnIycsICcnKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUlkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVHJlZU5vZGVDbGljayhub2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJZDogbm9kZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cImxlZnRQYW5lXCIgc3BsaXR0ZXI9XCJ2ZXJ0aWNhbFwiIHNpemU9ezIwMH0gbWluU2l6ZT17MjAwfSBtYXhTaXplPXs1MDB9IHNpemVVbml0PVwicHhcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmVlVmlldyBkZWY9e3RoaXMucHJvcHMubmF2fSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHNwbGl0dGVyPVwiaG9yaXpvbnRhbFwiIHNpemU9ezc1fSBtYXhTaXplPXs4MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGRlZj17dGhpcy5wcm9wcy5wYWdlc30gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgLz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBib3JkZXJDb250YWluZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGVyc2lzdDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQm9yZGVyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyc2lzdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gVE9ETzoga2V5Ym9hcmQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBwYW5lYDtcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtzcGxpdHRlciwgc2l6ZSwgc2l6ZVVuaXQsIG1heFNpemUsIG1pblNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ251bGwnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICB7bWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLFxuICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50WCA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFggPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFgpLFxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIHNwbGl0dGVyLCBkaXJlY3Rpb24sIGRpc3BsYXksIHNwbGl0dGVyU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gdGhpcy5jbGFzc05hbWUgKyAoYCR7c3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcgPyBgIHZlcnRpY2FsUGFuZWAgOiAnJ31gKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXR0ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubGVmdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2V0U3RhdGUudG9wIC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocGFuZSkgPT4geyB0aGlzLmRvbU5vZGUgPSBwYW5lOyB9fVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHtzcGxpdHRlciAhPT0gJ251bGwnID8gPFNwbGl0dGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3BsaXR0ZXJTdHlsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzcGxpdHRlcjogJ251bGwnLFxuICAgIHNpemU6IDI1LFxuICAgIG1pblNpemU6IDE1LFxuICAgIG1heFNpemU6IDUwLFxuICAgIHNpemVVbml0OiAnJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHNwbGl0dGVyU2l6ZTogMTBcbn07XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmVlTm9kZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kOiB0aGlzLnByb3BzLmV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyAmJiBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLnN0YXRlLmV4cGFuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIGxhYmVsLCB1cmwsIGNoaWxkcmVuLCBvblRyZWVOb2RlQ2xpY2ssIGFjdGl2ZUlkfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBleHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGFjdGl2ZUlkID09PSBpZCAmJiAhY2hpbGRyZW4pID8gdGhpcy5wcm9wcy5mb2N1c0NsYXNzIDogKGV4cGFuZCA/IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzIDogdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybCA/IHVybCA6ICdqYXZhc2NyaXB0OnZvaWQoMCknfT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiBleHBhbmQgPyA8dWw+e2NoaWxkcmVuLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17YWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17b25UcmVlTm9kZUNsaWNrfSB7Li4uY30gLz4pfTwvdWw+OiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9jdXNDbGFzczogJ2ZvY3VzZWQnLFxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXG4gICAgZXhwYW5kb0NsYXNzOiAnZm9sZCdcbn07XG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3RyZWVWaWV3JztcbiAgICB9XG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2lkLCBjaGlsZHJlbn0gPSB0cmVlTm9kZSxcbiAgICAgICAgICAgIHtvblRyZWVOb2RlQ2xpY2t9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSk7XG5cbiAgICAgICAgLy8gaWYgbm8gc2VsZWN0aW9uIG9yIG5vIGNoaWxkcmVuLCBmb2N1cyB0YXJnZXRcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmFjdGl2ZUlkID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUlkOiBpZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDx1bD57dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9IHsuLi5jfSAvPil9PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5UcmVlVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IENvbnRlbnRQYW5lIGZyb20gJy4uL0NvbnRlbnRQYW5lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdzd2l0Y2gnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGRhdGEtYWN0aXZlLWlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudFBhbmUgY2xhc3NOYW1lPXtjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkID8gdGhpcy5wcm9wcy5hY3RpdmVJZCA6ICdoaWRkZW4nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjLmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50UGFuZT4pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWY6IFtdXG59O1xuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGRlZjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGFjdGl2ZUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjb250ZW50UGFuZWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db250ZW50UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgdG9nZ2xlRGlhbG9nT3BlbiB9IGZyb20gJy4vRGlhbG9nc0FjdGlvbic7XG5cblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ0bkNsaWNrZWQgPSB0aGlzLm9uQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGlhbG9nQ2xvc2UgPSB0aGlzLm9uRGlhbG9nQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ0bkNsaWNrZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oJ2RpYWxvZycpKTtcbiAgICB9XG5cbiAgICBvbkRpYWxvZ0Nsb3NlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKCdkaWFsb2cnKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkJ0bkNsaWNrZWR9IHRleHQ9XCJPcGVuIERpYWxvZ1wiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBvcGVuZWQ9e3RoaXMuc3RhdGUuZGlhbG9nT3BlbmVkfSBvbkNsb3NlPXt0aGlzLm9uRGlhbG9nQ2xvc2V9IC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBvcGVuZWQ9e3RoaXMuc3RhdGUuZGlhbG9nT3BlbmVkfSBvbkNsb3NlPXt0aGlzLm9uRGlhbG9nQ2xvc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL0Zvcm0vQnV0dG9uJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIERpYWxvZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRpYWxvZ2A7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNsb3NlJyk7XG4gICAgICAgIHRoaXMuYm9keUNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYm9keScpO1xuICAgICAgICB0aGlzLmZvb3RlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuZGVueUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWRlbnknKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uRGVueUJ0bkNsaWNrZWQgPSB0aGlzLm9uRGVueUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DbG9zZUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25DbG9zZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgICBvbkNsb3NlKGUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkRlbnlCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uRGVueX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkRlbnkpIHtcbiAgICAgICAgICAgIG9uRGVueShlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICAgICAgb25Db25maXJtKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bW9kLCB0aXRsZSwgbWVzc2FnZSwgZGVueUxhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWwsIG9wZW5lZH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgbW9kICsgKCFvcGVuZWQgPyAnaGlkZGVuJyA6ICcnKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkRlbnlCdG5DbGlja2VkfSB0ZXh0PXtkZW55TGFiZWx9IGNsYXNzTmFtZT17dGhpcy5kZW55QnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2Q6ICcnLFxuICAgIHRpdGxlOiAnRGlhbG9nIFRpdGxlJyxcbiAgICBtZXNzYWdlOiAnQU5SMTAzMjgyOSBUaGlzIGlzIGEgc2FtcGxlIG1lc3NhZ2UuIERkbGZrd2Vyb2l1IHNkZnIgc2RmamVyaXUgZGZlcmVyZGZzZi4nLFxuICAgIGhlbHBMYWJlbDogJ0hlbHAnLFxuICAgIGRlbnlMYWJlbDogJ0NhbmNlbCcsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgY2xvc2VCdG5MYWJlbDogJ0Nsb3NlJyxcbiAgICBvcGVuZWQ6IGZhbHNlXG59O1xuXG5EaWFsb2cucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZW55TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlQnRuTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25EZW55OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW5lZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGlhbG9nT3BlbihkaWFsb2dOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgJ09wZW5lZCddOiAhc3RhdGVbZGlhbG9nTmFtZSArICdPcGVuZWQnXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==