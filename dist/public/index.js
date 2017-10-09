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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _utils = __webpack_require__(3);

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
        console.info(method, this.constructor.name);
        if (method in this.props) this.props[method](e);
        if (method in this) this[method](e);
    };
}();

// use for componentId
var registry = {};

var BaseComponent = function (_Component) {
    _inherits(BaseComponent, _Component);

    _createClass(BaseComponent, null, [{
        key: 'type',
        get: function get() {
            return this.name;
        }
    }]);

    function BaseComponent(props) {
        _classCallCheck(this, BaseComponent);

        // TODO: find a better way to save memory
        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

        _this.handleEvent = _this.handleEvent.bind(_this);
        _this.libClassPrefix = 'e';
        _this.baseClassName = 'component';

        _this.init(props);
        _this.register(props);
        _this.postRegister(props);
        return _this;
    }

    // componentWillMount() {}
    // componentDidMount() {}
    // componentWillReceiveProps() {}
    // shouldComponentUpdate() {}
    // componentWillUpdate() {}
    // componentDidUpdate() {}
    // componentWillUnmount() {}
    // forceUpdate() {}

    _createClass(BaseComponent, [{
        key: 'register',
        value: function register() {
            var name = this.constructor.name;
            // ensure we have register
            registry[name] = registry[name] || 0;
            // add one
            registry[name] = registry[name] + 1;
            // assign name
            this.componentId = name.charAt(0).toLowerCase() + name.slice(1) + registry[name];
        }
    }, {
        key: 'setState',
        value: function setState(obj) {
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

        // stubs

    }, {
        key: 'init',
        value: function init() {}
    }, {
        key: 'postRegister',
        value: function postRegister() {}
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
  module.exports = __webpack_require__(18)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(21)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.isObj = isObj;
exports.clone = clone;
exports.e = e;
exports.getCenterPosition = getCenterPosition;
exports.getClsName = getClsName;
// isObj: check if the given obj is an Object
function isObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

// clone: simple clone the given object
// not support function and circular reference
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

// getCenterPosition: get child position when it is at center of the parent
function getCenterPosition(_ref, _ref2) {
    var _ref$innerWidth = _ref.innerWidth,
        innerWidth = _ref$innerWidth === undefined ? 1000 : _ref$innerWidth,
        _ref$innerHeight = _ref.innerHeight,
        innerHeight = _ref$innerHeight === undefined ? 800 : _ref$innerHeight;
    var _ref2$width = _ref2.width,
        width = _ref2$width === undefined ? 400 : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === undefined ? 400 : _ref2$height;

    return {
        left: (innerWidth - width) / 2,
        top: (innerHeight - height) / 2
    };
}

// getClsName: concate aruments with space
function getClsName() {
    return Array.from(arguments).filter(function (s) {
        return s !== '' && typeof s !== 'undefined';
    }).join(' ');
}

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(5);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
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

var _utils = __webpack_require__(3);

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
                cls = (0, _utils.getClsName)(this.className, '' + (isVertical ? ' vertical' : ' horizontal'));


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
/* 11 */
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
                onClicked(e, this);
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
                { type: type, title: title || text, className: this.className, onClick: this.handleEvent },
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var zIndexs = exports.zIndexs = {
    Dialog: 3000,
    Overlay: 2000,
    Dropdown: 1000
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(27);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Header2.default, { text: 'Monitoring' }) }, { id: 'form', label: 'Form Widgets', url: '/#form', component: _react2.default.createElement(_Header2.default, { text: 'Forms Widget' }) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'tooltip', label: 'Tooltip', url: '/#widgets/tooltip', component: _react2.default.createElement(_Header2.default, { text: 'Tooltips' }) }, { id: 'bars', label: 'Bars', url: '/#widgets/bars', component: _react2.default.createElement(_Header2.default, { text: 'Bars' }) }, { id: 'alerts', label: 'Alerts', url: '/#widgets/alerts', component: _react2.default.createElement(_Header2.default, { text: 'Alerts' }) }] }];

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(17);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(22);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(10);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(23);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(24);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _WindowMemoryViewer = __webpack_require__(26);

var _WindowMemoryViewer2 = _interopRequireDefault(_WindowMemoryViewer);

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
                activeId: 'mon',
                jsHeapSizeLimit: 0,
                totalJSHeapSize: 0,
                usedJSHeapSize: 0
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var hash = window.location.hash.split('/'),
                activeId = hash[hash.length - 1].replace('#', '');

            window.setInterval(function () {
                _this2.getMemoryStat();
            }, 2000);

            this.setState({
                activeId: activeId
            });

            this.getMemoryStat();
        }
    }, {
        key: 'getMemoryStat',
        value: function getMemoryStat() {
            if (window.performance.memory) {
                var _window$performance$m = window.performance.memory,
                    jsHeapSizeLimit = _window$performance$m.jsHeapSizeLimit,
                    totalJSHeapSize = _window$performance$m.totalJSHeapSize,
                    usedJSHeapSize = _window$performance$m.usedJSHeapSize;

                this.setState({
                    jsHeapSizeLimit: jsHeapSizeLimit, totalJSHeapSize: totalJSHeapSize, usedJSHeapSize: usedJSHeapSize
                });
            }
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
                    _react2.default.createElement(
                        _Pane2.default,
                        null,
                        _react2.default.createElement(_WindowMemoryViewer2.default, { jsHeapSizeLimit: this.state.jsHeapSizeLimit, totalJSHeapSize: this.state.totalJSHeapSize, usedJSHeapSize: this.state.usedJSHeapSize })
                    )
                )
            );
        }
    }]);

    return App;
}(_BaseComponent3.default);

exports.default = App;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(9);
var assign = __webpack_require__(19);

var ReactPropTypesSecret = __webpack_require__(7);
var checkPropTypes = __webpack_require__(20);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 19 */
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
/* 20 */
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
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(9);
  var ReactPropTypesSecret = __webpack_require__(7);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(7);

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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Splitter = __webpack_require__(10);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

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
                cls = (0, _utils.getClsName)(this.className, '' + (splitter === 'vertical' ? ' verticalPane' : '')),
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
/* 23 */
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
/* 24 */
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

var _ContentPane = __webpack_require__(25);

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
/* 25 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dialog
var WindowMemoryViewer = function (_BaseComponent) {
    _inherits(WindowMemoryViewer, _BaseComponent);

    function WindowMemoryViewer() {
        _classCallCheck(this, WindowMemoryViewer);

        return _possibleConstructorReturn(this, (WindowMemoryViewer.__proto__ || Object.getPrototypeOf(WindowMemoryViewer)).apply(this, arguments));
    }

    _createClass(WindowMemoryViewer, [{
        key: 'init',
        value: function init() {
            // class
            this.baseClassName = 'windowMemoryViewer';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                jsHeapSizeLimit = _props.jsHeapSizeLimit,
                totalJSHeapSize = _props.totalJSHeapSize,
                usedJSHeapSize = _props.usedJSHeapSize;


            return _react2.default.createElement(
                'div',
                { className: this.className },
                _react2.default.createElement(
                    'span',
                    { className: 'label' },
                    'Javascript Heap Size Limit:'
                ),
                ' ',
                _react2.default.createElement(
                    'span',
                    null,
                    jsHeapSizeLimit
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'label' },
                    'Total Javascript Heap Size:'
                ),
                ' ',
                _react2.default.createElement(
                    'span',
                    null,
                    totalJSHeapSize
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'label' },
                    'Used Javascript Heap Size:'
                ),
                ' ',
                _react2.default.createElement(
                    'span',
                    null,
                    usedJSHeapSize
                )
            );
        }
    }]);

    return WindowMemoryViewer;
}(_BaseComponent3.default);

exports.default = WindowMemoryViewer;

/***/ }),
/* 27 */
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

var _Dialog = __webpack_require__(28);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(31);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(11);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(32);

var _Constants = __webpack_require__(12);

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
            this.onButtonClicked = this.onButtonClicked.bind(this);
            this.closeDialog = this.closeDialog.bind(this);
            this.openDialog = this.openDialog.bind(this);

            this.state = this.transformState({
                dialog1: {
                    isOpen: false
                },
                dialog2: {
                    isOpen: false
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
        key: 'onButtonClicked',
        value: function onButtonClicked(e, button) {
            this.setState((0, _DialogsAction.toggleDialogOpen)(button.props.dialog));
        }

        // this is required to sync internal state

    }, {
        key: 'closeDialog',
        value: function closeDialog(e, dialog) {
            this.setState((0, _DialogsAction.toggleDialogOpen)(dialog.props.componentId, false));
        }

        // this is required to sync internal state

    }, {
        key: 'openDialog',
        value: function openDialog(e, dialog) {
            this.setState((0, _DialogsAction.toggleDialogOpen)(dialog.props.componentId, true));
        }
    }, {
        key: 'shouldShowOverlay',
        value: function shouldShowOverlay() {
            return this.state.dialog1IsOpen || this.state.dialog2IsOpen;
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
                _react2.default.createElement(_Button2.default, { dialog: 'dialog1', onClicked: this.onButtonClicked, text: 'toggle Dialog1' }),
                _react2.default.createElement(_Button2.default, { dialog: 'dialog2', onClicked: this.onButtonClicked, text: 'toggle Dialog2' }),
                _react2.default.createElement(_Dialog2.default, { isOpen: this.state.dialog1IsOpen, componentId: 'dialog1', title: 'dialog1', open: this.openDialog, close: this.closeDialog }),
                _react2.default.createElement(_Dialog2.default, { isOpen: this.state.dialog2IsOpen, componentId: 'dialog2', title: 'dialog2', open: this.openDialog, close: this.closeDialog, repositionOnOpen: false })
            );
        }
    }]);

    return Dialogs;
}(_BaseComponent3.default);

exports.default = Dialogs;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(29);

var _Button = __webpack_require__(11);

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dialog
var DialogView = exports.DialogView = function (_BaseComponent) {
    _inherits(DialogView, _BaseComponent);

    function DialogView() {
        _classCallCheck(this, DialogView);

        return _possibleConstructorReturn(this, (DialogView.__proto__ || Object.getPrototypeOf(DialogView)).apply(this, arguments));
    }

    _createClass(DialogView, [{
        key: 'init',
        value: function init() {
            // class
            this.baseClassName = 'dialog';
            this.headerClass = this.getLibPrefixedClass('dialog-header');
            this.closeBtnClass = this.getLibPrefixedClass('dialog-btn-close');
            this.bodyClass = this.getLibPrefixedClass('dialog-body');
            this.footerClass = this.getLibPrefixedClass('dialog-footer');
            this.cancelBtnClass = this.getLibPrefixedClass('dialog-btn-cancel');
            this.confirmBtnClass = this.getLibPrefixedClass('dialog-btn-confirm');
            // handlers
            this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
            this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
            this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _props = this.props,
                open = _props.open,
                close = _props.close,
                repositionOnOpen = _props.repositionOnOpen,
                isOpen = _props.isOpen,
                nextOpen = nextProps.isOpen === true && isOpen === false,
                nextClose = nextProps.isOpen === false && isOpen === true;


            if (nextOpen) {
                open({}, this);
            }

            if (nextClose) {
                close({}, this);
            }
        }
    }, {
        key: 'onCloseBtnClicked',
        value: function onCloseBtnClicked(e) {
            this.props.close(e, this);
            e.stopPropagation();
        }
    }, {
        key: 'onCancelBtnClicked',
        value: function onCancelBtnClicked(e) {
            var onCancel = this.props.onCancel;


            this.onCloseBtnClicked(e);

            if (onCancel) {
                onCancel(e, this);
            }
        }
    }, {
        key: 'onConfirmBtnClicked',
        value: function onConfirmBtnClicked(e) {
            var onConfirm = this.props.onConfirm;


            if (onConfirm) {
                onConfirm(e, this);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                mod = _props2.mod,
                title = _props2.title,
                body = _props2.body,
                cancelLabel = _props2.cancelLabel,
                confirmLabel = _props2.confirmLabel,
                closeBtnLabel = _props2.closeBtnLabel,
                cls = (0, _utils.getClsName)(this.className, mod, !this.props.isOpen ? 'hidden' : '');


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
                    body
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.footerClass },
                    _react2.default.createElement(_Button2.default, { onClicked: this.onCancelBtnClicked, text: cancelLabel, className: this.cancelBtnClass }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.onConfirmBtnClicked, text: confirmLabel, className: this.confirmBtnClass })
                )
            );
        }
    }], [{
        key: 'type',
        get: function get() {
            return 'Dialog';
        }
    }]);

    return DialogView;
}(_BaseComponent3.default);

DialogView.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    body: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close',
    isOpen: false,
    open: function open() {},
    close: function close() {},
    styleObj: {}
};

DialogView.propTypes = {
    mod: _propTypes2.default.string,
    title: _propTypes2.default.string,
    body: _propTypes2.default.string,
    helpLabel: _propTypes2.default.string,
    cancelLabel: _propTypes2.default.string,
    confirmLabel: _propTypes2.default.string,
    closeBtnLabel: _propTypes2.default.string,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func,
    open: _propTypes2.default.func.isRequired,
    close: _propTypes2.default.func.isRequired,
    isOpen: _propTypes2.default.bool
};

var Dialog = (0, _Helper.popupable)((0, _Helper.draggable)(DialogView));
exports.default = Dialog;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupable = exports.draggable = undefined;

var _draggable = __webpack_require__(30);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(33);

var _popupable2 = _interopRequireDefault(_popupable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.draggable = _draggable2.default;
exports.popupable = _popupable2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = draggable;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// draggable
function draggable(Component) {
    var DraggableComponent = function (_Component) {
        _inherits(DraggableComponent, _Component);

        function DraggableComponent() {
            _classCallCheck(this, DraggableComponent);

            return _possibleConstructorReturn(this, (DraggableComponent.__proto__ || Object.getPrototypeOf(DraggableComponent)).apply(this, arguments));
        }

        _createClass(DraggableComponent, [{
            key: 'init',
            value: function init(props) {
                _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'init', this).call(this, props);
                // handler
                this.mouseupHandler = this.onMouseUp.bind(this);
                this.mousemoveHandler = this.onMouseMove.bind(this);
                this.mousedownHandler = this.onMouseDown.bind(this);
                // state
                this.state = {
                    left: 0,
                    top: 0
                };
            }
        }, {
            key: 'processRef',
            value: function processRef(component) {
                this.domNode = ReactDOM.findDOMNode(component);
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'componentWillReceiveProps', this) && _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'componentWillReceiveProps', this).call(this, nextProps);

                var _props = this.props,
                    repositionOnOpen = _props.repositionOnOpen,
                    isOpen = _props.isOpen,
                    nextOpen = nextProps.isOpen === true && isOpen === false;


                if (nextOpen && repositionOnOpen) {
                    this.reposition();
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'componentDidMount', this) && _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'componentDidMount', this).call(this);
                this.reposition();
            }
        }, {
            key: 'reposition',
            value: function reposition() {
                if (this.domNode) {
                    var _getCenterPosition = (0, _utils.getCenterPosition)(window, this.domNode),
                        left = _getCenterPosition.left,
                        top = _getCenterPosition.top;

                    this.setState({ left: left, top: top });
                }
            }
        }, {
            key: 'onMouseUp',
            value: function onMouseUp(e) {
                document.removeEventListener('mousemove', this.mousemoveHandler);
            }
        }, {
            key: 'onMouseMove',
            value: function onMouseMove(e) {
                var ComponentBeingMoved = this.domNode,
                    rect = ComponentBeingMoved.getBoundingClientRect(),
                    clientX = e.clientX,
                    clientY = e.clientY,
                    lastMouseX = this.lastMouseX,
                    lastMouseY = this.lastMouseY,
                    leftToMouse = clientX - lastMouseX,
                    topToMouse = clientY - lastMouseY,
                    left = Math.max(0, this.state.left + leftToMouse),
                    top = Math.max(0, this.state.top + topToMouse);


                this.setState({
                    left: Math.min(window.innerWidth - rect.width, left),
                    top: Math.min(window.innerHeight - rect.height, top)
                });

                this.lastMouseX = clientX;
                this.lastMouseY = clientY;
            }
        }, {
            key: 'onMouseDown',
            value: function onMouseDown(e) {
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
                document.addEventListener('mousemove', this.mousemoveHandler);
                document.addEventListener('mouseup', this.mouseupHandler);
            }
        }, {
            key: 'render',
            value: function render() {
                var style = Object.assign({}, this.props.styleObj, {
                    position: 'fixed',
                    left: this.state.left,
                    top: this.state.top
                });

                return React.createElement(
                    'div',
                    { style: style, onMouseDown: this.handleEvent, onMouseUp: this.handleEvent },
                    React.createElement(Component, _extends({}, this.props, {
                        ref: this.processRef.bind(this)
                    }))
                );
            }
        }]);

        return DraggableComponent;
    }(Component);

    DraggableComponent.defaultProps = Object.assign({
        repositionOnOpen: true,
        styleObj: {}
    }, Component.defaultProps);

    DraggableComponent.propTypes = Object.assign({
        repositionOnOpen: _propTypes2.default.bool,
        styleObj: _propTypes2.default.object
    });

    return DraggableComponent;
}

/***/ }),
/* 31 */
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

var _Constants = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_BaseComponent) {
    _inherits(Overlay, _BaseComponent);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'overlay';
        }
    }, {
        key: 'render',
        value: function render() {
            var isOpen = this.props.isOpen,
                cls = this.className + ' ' + (!isOpen ? 'hidden' : ''),
                style = {
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundColor: '#000',
                opacity: this.props.opacity,
                left: 0,
                top: 0,
                zIndex: _Constants.zIndexs.Overlay
            };


            return _react2.default.createElement('div', { className: cls, style: style });
        }
    }]);

    return Overlay;
}(_BaseComponent3.default);

exports.default = Overlay;


Overlay.defaultProps = {
    opacity: .5
};

Overlay.propTypes = {
    opacity: _propTypes2.default.number,
    isOpen: _propTypes2.default.bool
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleDialogOpen = toggleDialogOpen;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggleDialogOpen(dialogName, openState) {
    var hasStateSet = typeof openState !== 'undefined',
        openStateName = 'IsOpen';

    return function (state, props) {
        return _defineProperty({}, dialogName + openStateName, hasStateSet ? openState : !state[dialogName + openStateName]);
    };
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = popupable;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var popupManager = {
    types: ['Dialog'],
    eventType: 'keydown',
    stack: [],
    eventHandler: null,
    add: function add(component) {
        this.stack.push(component);

        if (this.stack.length > 0 && !this.eventHandler) {
            this.eventHandler = document.addEventListener(this.eventType, this);
        }
    },
    remove: function remove(component) {
        this.stack = this.stack.filter(function (savedComponent) {
            return savedComponent !== component;
        });

        if (this.stack.length === 0) {
            document.removeEventListener(this.eventType, this);
            delete this.eventHandler;
        }
    },
    has: function has(component) {
        return this.stack.includes(component);
    },
    handleEvent: function handleEvent(e) {
        if (e.code === 'Escape') {
            var component = this.stack[this.stack.length - 1];
            this.remove(component);
            // TODO: find a way to decouple
            component.props.close({}, component);
        }
    },
    handle: function handle(component) {
        var name = component.constructor.name,
            isOpen = component.props.isOpen;

        if (!this.has(component) && isOpen === true) {
            this.add(component);
            return;
        }

        if (this.has(component) && isOpen === false) {
            this.remove(component);
            return;
        }
    },

    // a popup must implement close and open
    isPopup: function isPopup(component) {
        return this.types.includes(component.constructor.name);
    }
};

// popupable
function popupable(Component) {
    var zIndex = _Constants.zIndexs[Component.type] || 0;

    console.assert(typeof Component.propTypes.styleObj !== 'undefined', 'The component should have an styleObj as prop');

    var PopupComponent = function (_Component) {
        _inherits(PopupComponent, _Component);

        function PopupComponent() {
            _classCallCheck(this, PopupComponent);

            return _possibleConstructorReturn(this, (PopupComponent.__proto__ || Object.getPrototypeOf(PopupComponent)).apply(this, arguments));
        }

        _createClass(PopupComponent, [{
            key: 'init',
            value: function init(props) {
                _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'init', this).call(this, props);
                // state
                this.state = {
                    zIndex: zIndex++
                };
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this) && _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this).call(this);
                popupManager.handle(this);
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentWillReceiveProps', this) && _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentWillReceiveProps', this).call(this, nextProps);

                var isOpen = this.props.isOpen,
                    nextOpen = nextProps.isOpen === true && isOpen === false;


                if (nextOpen) {
                    this.setState({
                        zIndex: zIndex++
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var styleObj = Object.assign({}, this.props.styleObj, {
                    zIndex: this.state.zIndex
                });
                return React.createElement(Component, _extends({}, this.props, { styleObj: styleObj }));
            }
        }]);

        return PopupComponent;
    }(Component);

    return PopupComponent;
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRkOGM5Njg0YzU2ODNmZjZmOTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy40LjEuMUBvYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9wb3B1cGFibGUuanN4Il0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJjb25zb2xlIiwiaW5mbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInByb3BzIiwicmVnaXN0cnkiLCJCYXNlQ29tcG9uZW50IiwiYmluZCIsImxpYkNsYXNzUHJlZml4IiwiYmFzZUNsYXNzTmFtZSIsImluaXQiLCJyZWdpc3RlciIsInBvc3RSZWdpc3RlciIsImNvbXBvbmVudElkIiwidG9Mb3dlckNhc2UiLCJvYmoiLCJzdGF0ZU9iaiIsImNscyIsImNsYXNzTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJpc09iaiIsImNsb25lIiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJnZXRDbHNOYW1lIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdGVPYmplY3QiLCJfZiIsInJvb3QiLCJyZXN1bHQiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJ2YWx1ZUlzT2JqIiwiciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsIkFycmF5IiwiZnJvbSIsImFyZ3VtZW50cyIsImZpbHRlciIsInMiLCJqb2luIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0Iiwid2FybmluZyIsInByaW50V2FybmluZyIsIl9sZW4iLCJfa2V5IiwibWVzc2FnZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsIkJ1dHRvbiIsIm9uQ2xpY2tlZCIsInRleHQiLCJzdHJpbmciLCJmdW5jIiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsIm5hdkRlZiIsImlkIiwibGFiZWwiLCJ1cmwiLCJjb21wb25lbnQiLCJleHBhbmQiLCJwYWdlc0RlZiIsInJlcyIsIm5hdiIsIm4iLCJmb3JFYWNoIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkhlYWRlciIsInN0YXRlIiwidGVzdCIsIk1hdGgiLCJyYW5kb20iLCJBcHAiLCJhY3RpdmVJZCIsImpzSGVhcFNpemVMaW1pdCIsInRvdGFsSlNIZWFwU2l6ZSIsInVzZWRKU0hlYXBTaXplIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJzZXRJbnRlcnZhbCIsImdldE1lbW9yeVN0YXQiLCJzZXRTdGF0ZSIsInBlcmZvcm1hbmNlIiwibWVtb3J5Iiwibm9kZSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJkb21Ob2RlIiwicGFyZW50RWxlbWVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZmxvb3IiLCJvbk1vdXNlRG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsIkNvbnRlbnRQYW5lIiwiV2luZG93TWVtb3J5Vmlld2VyIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsInRyYW5zZm9ybVN0YXRlIiwiZGlhbG9nMSIsImlzT3BlbiIsImRpYWxvZzIiLCJncmlkIiwiYnV0dG9uIiwiaGlkZGVuIiwibGF5b3V0IiwibWVudSIsImRpYWxvZyIsImRpYWxvZzFJc09wZW4iLCJkaWFsb2cySXNPcGVuIiwiRGlhbG9nVmlldyIsImhlYWRlckNsYXNzIiwiZ2V0TGliUHJlZml4ZWRDbGFzcyIsImNsb3NlQnRuQ2xhc3MiLCJib2R5Q2xhc3MiLCJmb290ZXJDbGFzcyIsImNhbmNlbEJ0bkNsYXNzIiwiY29uZmlybUJ0bkNsYXNzIiwib25DYW5jZWxCdG5DbGlja2VkIiwib25Db25maXJtQnRuQ2xpY2tlZCIsIm9uQ2xvc2VCdG5DbGlja2VkIiwibmV4dFByb3BzIiwib3BlbiIsImNsb3NlIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJtb2QiLCJib2R5IiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbG9zZUJ0bkxhYmVsIiwiaGVscExhYmVsIiwic3R5bGVPYmoiLCJkcmFnZ2FibGUiLCJwb3B1cGFibGUiLCJDb21wb25lbnQiLCJEcmFnZ2FibGVDb21wb25lbnQiLCJtb3VzZWRvd25IYW5kbGVyIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlcG9zaXRpb24iLCJyZWN0IiwiQ29tcG9uZW50QmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwibGVmdFRvTW91c2UiLCJ0b3BUb01vdXNlIiwibWF4IiwibWluIiwicG9zaXRpb24iLCJwcm9jZXNzUmVmIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwicG9wdXBNYW5hZ2VyIiwidHlwZXMiLCJldmVudFR5cGUiLCJldmVudEhhbmRsZXIiLCJhZGQiLCJyZW1vdmUiLCJzYXZlZENvbXBvbmVudCIsImhhcyIsImluY2x1ZGVzIiwiY29kZSIsImhhbmRsZSIsImlzUG9wdXAiLCJhc3NlcnQiLCJQb3B1cENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsaUJBQVVBLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQW1DLFlBQVk7QUFDM0M7QUFDQSxRQUFJQyxNQUFNO0FBQ05DLGVBQU8sU0FERDtBQUVOQyxnQkFBUSxVQUZGO0FBR05DLG1CQUFXLGFBSEw7QUFJTkMsb0JBQVksY0FKTjtBQUtOQyxvQkFBWSxjQUxOO0FBTU5DLGtCQUFVLFlBTko7QUFPTkMsbUJBQVcsYUFQTDtBQVFOQyxpQkFBUyxXQVJIO0FBU05DLG1CQUFXLGFBVEw7QUFVTkMsZUFBTyxTQVZEO0FBV05DLGNBQU07QUFYQSxLQUFWOztBQWNBO0FBQ0EsYUFBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsZUFBTyxPQUFPQSxLQUFLQyxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQVAsR0FBc0NGLEtBQUtHLEtBQUwsQ0FBVyxDQUFYLENBQTdDO0FBQ0g7O0FBRUQ7QUFDQSxXQUFPLFNBQVNqQixXQUFULENBQXFCa0IsQ0FBckIsRUFBd0I7QUFDM0IsWUFB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QUNGeUIsUUFERSxHQUNTSixVQUFVckIsTUFBVixLQUFxQixJQUFyQixJQUE2QkEsV0FBVyxLQURqRDs7O0FBR04sb0JBQUl5QixRQUFKLEVBQWU7QUFDWCx5QkFBSzlMLFFBQUwsQ0FBYztBQUNWNkksZ0NBQVFBO0FBREUscUJBQWQ7QUFHSDtBQUNKO0FBOUJvQztBQUFBO0FBQUEscUNBZ0M1QjtBQUNMLG9CQUFNMkQsV0FBV25XLE9BQU9tSyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLbk0sS0FBTCxDQUFXbVksUUFBN0IsRUFBdUM7QUFDcEQzRCw0QkFBUSxLQUFLNUosS0FBTCxDQUFXNEo7QUFEaUMsaUJBQXZDLENBQWpCO0FBR0EsdUJBQVEsb0JBQUMsU0FBRCxlQUFlLEtBQUt4VSxLQUFwQixJQUEyQixVQUFVbVksUUFBckMsSUFBUjtBQUNIO0FBckNvQzs7QUFBQTtBQUFBLE1BS1pHLFNBTFk7O0FBd0N6QyxXQUFPcUMsY0FBUDtBQUNILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTRkOGM5Njg0YzU2ODNmZjZmOTkiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2lzT2JqLCBlfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG4vLyBhbGwgY29tcG9uZW50cyBzaGFyZSBvbmUgZXZlbnQgaGFuZGxlclxyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXHJcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgIG1vdXNlb3ZlcjogJ29uTW91c2VPdmVyJyxcclxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcclxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcclxuICAgICAgICBtb3VzZW91dDogJ29uTW91c2VPdXQnLFxyXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcclxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcclxuICAgICAgICBtb3VzZW1vdmU6ICdvbk1vdXNlTW92ZScsXHJcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcclxuICAgICAgICBibHVyOiAnb25CbHVyJ1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xyXG4gICAgICAgIHJldHVybiAnb24nICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25lIGhhbmRsZUV2ZW50IHRvIHJ1bGUgdGhlbSBhbGxcclxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcclxuICAgICAgICBjb25zb2xlLmluZm8obWV0aG9kLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykgdGhpcy5wcm9wc1ttZXRob2RdKGUpO1xyXG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcykgdGhpc1ttZXRob2RdKGUpO1xyXG4gICAgfTtcclxufSgpKTtcclxuXHJcbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcclxubGV0IHJlZ2lzdHJ5ID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgdG8gc2F2ZSBtZW1vcnlcclxuICAgICAgICB0aGlzLmhhbmRsZUV2ZW50ID0gdGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGliQ2xhc3NQcmVmaXggPSAnZSc7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5wb3N0UmVnaXN0ZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XHJcbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XHJcbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge31cclxuICAgIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHt9XHJcbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cclxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XHJcbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XHJcbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XHJcblxyXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgICAvLyBlbnN1cmUgd2UgaGF2ZSByZWdpc3RlclxyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcclxuICAgICAgICAvLyBhZGQgb25lXHJcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSArIDE7XHJcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcclxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyByZWdpc3RyeVtuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShvYmopIHtcclxuICAgICAgICBzdXBlci5zZXRTdGF0ZShvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybVN0YXRlKHN0YXRlT2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGUoc3RhdGVPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpYlByZWZpeGVkQ2xhc3MoY2xzKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3R1YnNcclxuICAgIGluaXQoKSB7fVxyXG4gICAgcG9zdFJlZ2lzdGVyKCkge31cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9pbmRleC5qcyIsIi8vIGlzT2JqOiBjaGVjayBpZiB0aGUgZ2l2ZW4gb2JqIGlzIGFuIE9iamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XHJcbn1cclxuXHJcbi8vIGNsb25lOiBzaW1wbGUgY2xvbmUgdGhlIGdpdmVuIG9iamVjdFxyXG4vLyBub3Qgc3VwcG9ydCBmdW5jdGlvbiBhbmQgY2lyY3VsYXIgcmVmZXJlbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG59XHJcblxyXG4vLyBmbGF0dGVuIHN0YXRlIG9iamVjdFxyXG4vLyBncmlkOntsYXlvdXQ6e21lbnU6e2V4cGFuZDp0cnVlfX19fSA9PiBncmlkTGF5b3V0TWVudUV4cGFuZDp0cnVlXHJcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0KSB7XHJcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlzT2JqID0gaXNPYmoodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3R9JHtyb290ID09PSAnJyA/IGtleSA6IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlSXNPYmopIHtcclxuICAgICAgICAgICAgICAgIF9mKHZhbHVlLCByLCByZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3JdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgX2Yoc3RhdGVPYmplY3QsICcnLCByZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXHJcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBnZXRDbHNOYW1lOiBjb25jYXRlIGFydW1lbnRzIHdpdGggc3BhY2VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2ludmFyaWFudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBzcGxpdHRlcmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgaXNWZXJ0aWNhbH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcGxpdHRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXHJcbn07XHJcblxyXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBpc1ZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBidXR0b25gO1xyXG4gICAgfVxyXG5cclxuICAgb25DbGljayhlKSB7XHJcbiAgICAgICAgY29uc3Qge29uQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAob25DbGlja2VkKSB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tlZChlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt0ZXh0LCB0eXBlLCB0aXRsZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IHRpdGxlPXt0aXRsZSB8fCB0ZXh0fSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGV4dDogJ0J1dHRvbicsXHJcbiAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgIHRpdGxlOiAnJ1xyXG59O1xyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNsaWNrZWQ6IFByb3BUeXBlcy5mdW5jXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IHpJbmRleHMgPSB7XHJcbiAgICBEaWFsb2c6IDMwMDAsXHJcbiAgICBPdmVybGF5OiAyMDAwLFxyXG4gICAgRHJvcGRvd246IDEwMDBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvQXBwJztcclxuaW1wb3J0IERpYWxvZ3MgZnJvbSAnLi9EaWFsb2dzJztcclxuXHJcbmNvbnN0IG5hdkRlZiA9IFtcclxuICAgIHtpZDogJ21vbicsIGxhYmVsOiAnTW9uaXRvcmluZycsIHVybDogJy8jbW9uJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJNb25pdG9yaW5nXCIgLz59LFxyXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBXaWRnZXRzJywgdXJsOiAnLyNmb3JtJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJGb3JtcyBXaWRnZXRcIiAvPn0sXHJcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtpZDogJ2RpYWxvZ3MnLCBsYWJlbDogJ0RpYWxvZ3MnLCB1cmw6ICcvI3dpZGdldHMvZGlhbG9ncycsIGNvbXBvbmVudDogPERpYWxvZ3MgLz59LFxyXG4gICAgICAgIHtpZDogJ3dpemFyZCcsIGxhYmVsOiAnV2l6YXJkJywgdXJsOiAnLyN3aWRnZXRzL3dpemFyZCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiV2lhcmRcIiAvPn0sXHJcbiAgICAgICAge2lkOiAndG9vbHRpcCcsIGxhYmVsOiAnVG9vbHRpcCcsIHVybDogJy8jd2lkZ2V0cy90b29sdGlwJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJUb29sdGlwc1wiIC8+fSxcclxuICAgICAgICB7aWQ6ICdiYXJzJywgbGFiZWw6ICdCYXJzJywgdXJsOiAnLyN3aWRnZXRzL2JhcnMnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkJhcnNcIiAvPn0sXHJcbiAgICAgICAge2lkOiAnYWxlcnRzJywgbGFiZWw6ICdBbGVydHMnLCB1cmw6ICcvI3dpZGdldHMvYWxlcnRzJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJBbGVydHNcIiAvPn1cclxuICAgIF19XHJcbl07XHJcblxyXG5jb25zdCBwYWdlc0RlZiA9IChuYXYgPT4ge1xyXG4gICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbiA9IG5hdltpXTtcclxuICAgICAgICBpZiAobi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuYXYucHVzaChuKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnB1c2gobik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSkoQXJyYXkuZnJvbShuYXZEZWYpKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIG5hbWU9XCJPS1wiIG5hdj17bmF2RGVmfSBwYWdlcz17cGFnZXNEZWZ9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRlc3Q6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGgxIGdpZD17dGhpcy5zdGF0ZS50ZXN0fT57dGhpcy5wcm9wcy50ZXh0fTwvaDE+KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcclxuaW1wb3J0IFBhbmUgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvUGFuZSc7XHJcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XHJcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoJztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVJZDogJ21vbicsXHJcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcclxuICAgICAgICAgICAgdG90YWxKU0hlYXBTaXplOiAwLFxyXG4gICAgICAgICAgICB1c2VkSlNIZWFwU2l6ZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpLFxyXG4gICAgICAgICAgICBhY3RpdmVJZCA9IGhhc2hbaGFzaC5sZW5ndGggLSAxXS5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlSWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVtb3J5U3RhdCgpIHtcclxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeSkge1xyXG4gICAgICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAganNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcclxuICAgICAgICBsZXQge2V4cGFuZH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlkOiBub2RlLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cImxlZnRQYW5lXCIgc3BsaXR0ZXI9XCJ2ZXJ0aWNhbFwiIHNpemU9ezIwMH0gbWluU2l6ZT17MjAwfSBtYXhTaXplPXs1MDB9IHNpemVVbml0PVwicHhcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRlZj17dGhpcy5wcm9wcy5uYXZ9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZT5cclxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgc3BsaXR0ZXI9XCJob3Jpem9udGFsXCIgc2l6ZT17NzV9IG1heFNpemU9ezgwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd01lbW9yeVZpZXdlciBqc0hlYXBTaXplTGltaXQ9e3RoaXMuc3RhdGUuanNIZWFwU2l6ZUxpbWl0fSB0b3RhbEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudG90YWxKU0hlYXBTaXplfSB1c2VkSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS51c2VkSlNIZWFwU2l6ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmU+XHJcbiAgICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BcHAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYm9yZGVyQ29udGFpbmVyYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwZXJzaXN0OiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogJydcclxufTtcclxuXHJcbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwZXJzaXN0OiBQcm9wVHlwZXMuYm9vbFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5cclxuLy8gVE9ETzoga2V5Ym9hcmQgZXZlbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xyXG4gICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCB7c3BsaXR0ZXIsIHNpemUsIHNpemVVbml0LCBtYXhTaXplLCBtaW5TaXplfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdudWxsJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGUpIHtcclxuICAgICAgICB0aGlzLm9uTW91c2VVcChlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bihlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICB0aGlzLm9uTW91c2VEb3duKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VNb3ZlKGUpIHtcclxuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxyXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFggPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRYIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRYKSxcclxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke3NwbGl0dGVyID09PSAndmVydGljYWwnID8gYCB2ZXJ0aWNhbFBhbmVgIDogJyd9YCksXHJcbiAgICAgICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0IC0gc3BsaXR0ZXJTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmxlZnRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnNldFN0YXRlLnRvcCAtIHNwbGl0dGVyU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUudG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocGFuZSkgPT4geyB0aGlzLmRvbU5vZGUgPSBwYW5lOyB9fVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVFdmVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBzcGxpdHRlcjogJ251bGwnLFxyXG4gICAgc2l6ZTogMjUsXHJcbiAgICBtaW5TaXplOiAxNSxcclxuICAgIG1heFNpemU6IDUwLFxyXG4gICAgc2l6ZVVuaXQ6ICclJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxyXG59O1xyXG5cclxuUGFuZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGV4cGFuZDogdGhpcy5wcm9wcy5leHBhbmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2lkLCBsYWJlbCwgdXJsLCBjaGlsZHJlbiwgb25UcmVlTm9kZUNsaWNrLCBhY3RpdmVJZH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBleHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybCA/IHVybCA6ICdqYXZhc2NyaXB0OnZvaWQoMCknfT57bGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvY3VzQ2xhc3M6ICdmb2N1c2VkJyxcclxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXHJcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xyXG59O1xyXG5cclxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGZvY3VzSWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xyXG4gICAgfVxyXG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSkge1xyXG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxyXG4gICAgICAgICAgICB7b25UcmVlTm9kZUNsaWNrfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIHtleHBhbmR9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgIC8vIGNhbGxiYWNrXHJcbiAgICAgICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBvciBubyBjaGlsZHJlbiwgZm9jdXMgdGFyZ2V0XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmFjdGl2ZUlkID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMuZGVmLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5UcmVlVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBDb250ZW50UGFuZSBmcm9tICcuLi9Db250ZW50UGFuZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBkYXRhLWFjdGl2ZS1pZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Yy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50UGFuZT4pXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGVmOiBbXVxyXG59O1xyXG5cclxuU3dpdGNoLnByb3BUeXBlcyA9IHtcclxuICAgIGRlZjogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY29udGVudFBhbmVgO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuXHJcbi8vIERpYWxvZ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNZW1vcnlWaWV3ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gY2xhc3NcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgd2luZG93TWVtb3J5Vmlld2VyYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5KYXZhc2NyaXB0IEhlYXAgU2l6ZSBMaW1pdDo8L3NwYW4+IDxzcGFuPntqc0hlYXBTaXplTGltaXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ub3RhbCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt0b3RhbEpTSGVhcFNpemV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Vc2VkIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3VzZWRKU0hlYXBTaXplfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cnO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcclxuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG4vLyBEaWFsb2dzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2tlZCA9IHRoaXMub25CdXR0b25DbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBkaWFsb2cxOiB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b25DbGlja2VkKGUsIGJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXHJcbiAgICBjbG9zZURpYWxvZyhlLCBkaWFsb2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCB0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkU2hvd092ZXJsYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlhbG9nMUlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzJJc09wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cxXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cxXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cxSXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMklzT3Blbn0gY29tcG9uZW50SWQ9XCJkaWFsb2cyXCIgdGl0bGU9XCJkaWFsb2cyXCIgb3Blbj17dGhpcy5vcGVuRGlhbG9nfSBjbG9zZT17dGhpcy5jbG9zZURpYWxvZ30gcmVwb3NpdGlvbk9uT3Blbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcblxyXG4vLyBEaWFsb2dcclxuZXhwb3J0IGNsYXNzIERpYWxvZ1ZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vIGNsYXNzXHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRpYWxvZ2A7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xyXG4gICAgICAgIHRoaXMuYm9keUNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYm9keScpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcclxuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNvbmZpcm0nKTtcclxuICAgICAgICAvLyBoYW5kbGVyc1xyXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBvcGVuLCBjbG9zZSwgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChuZXh0T3BlbikgIHtcclxuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlKHt9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZUJ0bkNsaWNrZWQoZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbEJ0bkNsaWNrZWQoZSkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNhbmNlbH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkKGUpO1xyXG5cclxuICAgICAgICBpZiAob25DYW5jZWwpIHtcclxuICAgICAgICAgICAgb25DYW5jZWwoZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybUJ0bkNsaWNrZWQoZSkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKG9uQ29uZmlybSkge1xyXG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7bW9kLCB0aXRsZSwgYm9keSwgY2FuY2VsTGFiZWwsIGNvbmZpcm1MYWJlbCwgY2xvc2VCdG5MYWJlbH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5oZWFkZXJDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5ib2R5Q2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5mb290ZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5EaWFsb2dWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG1vZDogJycsXHJcbiAgICB0aXRsZTogJ0RpYWxvZyBUaXRsZScsXHJcbiAgICBib2R5OiAnQU5SMTAzMjgyOSBUaGlzIGlzIGEgc2FtcGxlIG1lc3NhZ2UuIERkbGZrd2Vyb2l1IHNkZnIgc2RmamVyaXUgZGZlcmVyZGZzZi4nLFxyXG4gICAgaGVscExhYmVsOiAnSGVscCcsXHJcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXHJcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcclxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXHJcbiAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgb3BlbjogKCkgPT4ge30sXHJcbiAgICBjbG9zZTogKCkgPT4ge30sXHJcbiAgICBzdHlsZU9iajoge30sXHJcbn07XHJcblxyXG5EaWFsb2dWaWV3LnByb3BUeXBlcyA9IHtcclxuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xvc2VCdG5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5jb25zdCBEaWFsb2cgPSBwb3B1cGFibGUoZHJhZ2dhYmxlKERpYWxvZ1ZpZXcpKTtcclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xyXG5pbXBvcnQgcG9wdXBhYmxlIGZyb20gJy4vcG9wdXBhYmxlJ1xyXG5cclxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuLy8gZHJhZ2dhYmxlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShDb21wb25lbnQpIHtcclxuICAgIGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgaW5pdChwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlci5pbml0KHByb3BzKTtcclxuICAgICAgICAgICAgLy8gaGFuZGxlclxyXG4gICAgICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9jZXNzUmVmKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4gJiYgcmVwb3NpdGlvbk9uT3BlbikgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb21Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQge2xlZnQsIHRvcH0gPSBnZXRDZW50ZXJQb3NpdGlvbih3aW5kb3csIHRoaXMuZG9tTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZVVwKGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcclxuICAgICAgICAgICAgbGV0IENvbXBvbmVudEJlaW5nTW92ZWQgPSB0aGlzLmRvbU5vZGUsXHJcbiAgICAgICAgICAgICAgICByZWN0ID0gQ29tcG9uZW50QmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgIHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXHJcbiAgICAgICAgICAgICAgICB7bGFzdE1vdXNlWCwgbGFzdE1vdXNlWX0gPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcclxuICAgICAgICAgICAgICAgIHRvcFRvTW91c2UgPSBjbGllbnRZIC0gbGFzdE1vdXNlWSxcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLmxlZnQgKyBsZWZ0VG9Nb3VzZSksXHJcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3Qud2lkdGgsIGxlZnQpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCwgdG9wKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGNsaWVudFg7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGNsaWVudFk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbk1vdXNlRG93bihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IHRydWUsXHJcbiAgICAgICAgc3R5bGVPYmo6IHt9XHJcbiAgICB9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcclxuXHJcbiAgICBEcmFnZ2FibGVDb21wb25lbnQucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgc3R5bGVPYmo6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBEcmFnZ2FibGVDb21wb25lbnQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgKCFpc09wZW4gPyAnaGlkZGVuJyA6ICcnKSxcclxuICAgICAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4cy5PdmVybGF5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PjwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxuT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcGFjaXR5OiAuNVxyXG59O1xyXG5cclxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nTmFtZSwgb3BlblN0YXRlKSB7XHJcbiAgICBsZXQgaGFzU3RhdGVTZXQgPSB0eXBlb2Ygb3BlblN0YXRlICE9PSAndW5kZWZpbmVkJyxcclxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJ0lzT3Blbic7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5sZXQgcG9wdXBNYW5hZ2VyID0ge1xyXG4gICAgdHlwZXM6IFsnRGlhbG9nJ10sXHJcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcclxuICAgIHN0YWNrOiBbXSxcclxuICAgIGV2ZW50SGFuZGxlcjogbnVsbCxcclxuICAgIGFkZChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0YWNrLmZpbHRlcihzYXZlZENvbXBvbmVudCA9PiBzYXZlZENvbXBvbmVudCAhPT0gY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudFR5cGUsIHRoaXMpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhcyhjb21wb25lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5pbmNsdWRlcyhjb21wb25lbnQpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUV2ZW50KGUpIHtcclxuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGRlY291cGxlXHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5jbG9zZSh7fSwgY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlKGNvbXBvbmVudCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IGNvbXBvbmVudC5wcm9wcy5pc09wZW47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGQoY29tcG9uZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGEgcG9wdXAgbXVzdCBpbXBsZW1lbnQgY2xvc2UgYW5kIG9wZW5cclxuICAgIGlzUG9wdXAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gcG9wdXBhYmxlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwYWJsZShDb21wb25lbnQpIHtcclxuICAgIGxldCB6SW5kZXggPSB6SW5kZXhzW0NvbXBvbmVudC50eXBlXSB8fCAwO1xyXG5cclxuICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBDb21wb25lbnQucHJvcFR5cGVzLnN0eWxlT2JqICE9PSAndW5kZWZpbmVkJywgJ1RoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgYW4gc3R5bGVPYmogYXMgcHJvcCcpO1xyXG5cclxuICAgIGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICAgICBpbml0KHByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXQocHJvcHMpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHBvcHVwTWFuYWdlci5oYW5kbGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRPcGVuKSAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMuc3RhdGUuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHN0eWxlT2JqPXtzdHlsZU9ian0gLz4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUG9wdXBDb21wb25lbnQ7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=