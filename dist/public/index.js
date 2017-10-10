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
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

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

var _Splitter = __webpack_require__(11);

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
var warning = __webpack_require__(10);
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
  var warning = __webpack_require__(10);
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

var _Splitter = __webpack_require__(11);

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

var _Overlay = __webpack_require__(32);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(33);

var _Constants = __webpack_require__(8);

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

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(29);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

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

var Dialog = (0, _Helper.popupable)((0, _Helper.draggable)(DialogView, 'headerClass'));
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

var _popupable = __webpack_require__(31);

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
    var classProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-1';

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
                if (!e.target.classList.contains(this[classProperty])) return;
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = popupable;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(8);

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

/***/ }),
/* 32 */
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

var _Constants = __webpack_require__(8);

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
/* 33 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNiZjA1MDcwOGJlODk3NjAyM2EiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9XaW5kb3dNZW1vcnlWaWV3ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJwcm90b3R5cGUiLCJoYW5kbGVFdmVudCIsIm1hcCIsImNsaWNrIiwiY2hhbmdlIiwibW91c2VvdmVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJtb3VzZW91dCIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZW1vdmUiLCJmb2N1cyIsImJsdXIiLCJjYXBpdGFsaXplIiwidHlwZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwibWV0aG9kIiwiY29uc29sZSIsImluZm8iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsImJpbmQiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnRJZCIsInRvTG93ZXJDYXNlIiwib2JqIiwic3RhdGVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsIk9iamVjdCIsInRvU3RyaW5nIiwiY2FsbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXRlT2JqZWN0IiwiX2YiLCJyb290IiwicmVzdWx0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwidmFsdWVJc09iaiIsInIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJzIiwiam9pbiIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiaSIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJtYWtlRW1wdHlGdW5jdGlvbiIsImFyZyIsImVtcHR5RnVuY3Rpb24iLCJ0aGF0UmV0dXJucyIsInRoYXRSZXR1cm5zRmFsc2UiLCJ0aGF0UmV0dXJuc1RydWUiLCJ0aGF0UmV0dXJuc051bGwiLCJ0aGF0UmV0dXJuc1RoaXMiLCJ0aGF0UmV0dXJuc0FyZ3VtZW50IiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJhIiwiYiIsImMiLCJkIiwiZiIsImVycm9yIiwiYXJnSW5kZXgiLCJyZXBsYWNlIiwiZnJhbWVzVG9Qb3AiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsInpJbmRleHMiLCJEaWFsb2ciLCJPdmVybGF5IiwiRHJvcGRvd24iLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwiQnV0dG9uIiwib25DbGlja2VkIiwidGV4dCIsInN0cmluZyIsImZ1bmMiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiY29tcG9uZW50IiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIZWFkZXIiLCJzdGF0ZSIsInRlc3QiLCJNYXRoIiwicmFuZG9tIiwiQXBwIiwiYWN0aXZlSWQiLCJqc0hlYXBTaXplTGltaXQiLCJ0b3RhbEpTSGVhcFNpemUiLCJ1c2VkSlNIZWFwU2l6ZSIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0Iiwic2V0SW50ZXJ2YWwiLCJnZXRNZW1vcnlTdGF0Iiwic2V0U3RhdGUiLCJwZXJmb3JtYW5jZSIsIm1lbW9yeSIsIm5vZGUiLCJvblRyZWVOb2RlQ2xpY2siLCJwYWdlcyIsIkJvcmRlckNvbnRhaW5lciIsInBlcnNpc3QiLCJhc3NpZ24iLCJjaGVja1Byb3BUeXBlcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwibnVtYmVyIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwic3RhY2siLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwia2V5cyIsImV2ZXJ5Iiwic3RlcCIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIkRhdGUiLCJQcm9wVHlwZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwidGVzdDMiLCJsZXR0ZXIiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ0byIsInN5bWJvbHMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic2hpbSIsImdldFNoaW0iLCJQYW5lIiwibW91c2Vtb3ZlSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2V1cEhhbmRsZXIiLCJvbk1vdXNlVXAiLCJzcGxpdHRlciIsInNpemUiLCJzaXplVW5pdCIsIm1heFNpemUiLCJtaW5TaXplIiwiZG9tTm9kZSIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImZsb29yIiwib25Nb3VzZURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlyZWN0aW9uIiwiZGlzcGxheSIsInNwbGl0dGVyU2l6ZSIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInNwbGl0dGVyU3R5bGUiLCJ6SW5kZXgiLCJyaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJDb250ZW50UGFuZSIsIldpbmRvd01lbW9yeVZpZXdlciIsIkRpYWxvZ3MiLCJvbkJ1dHRvbkNsaWNrZWQiLCJjbG9zZURpYWxvZyIsIm9wZW5EaWFsb2ciLCJ0cmFuc2Zvcm1TdGF0ZSIsImRpYWxvZzEiLCJpc09wZW4iLCJkaWFsb2cyIiwiZ3JpZCIsImJ1dHRvbiIsImhpZGRlbiIsImxheW91dCIsIm1lbnUiLCJkaWFsb2ciLCJkaWFsb2cxSXNPcGVuIiwiZGlhbG9nMklzT3BlbiIsIkRpYWxvZ1ZpZXciLCJoZWFkZXJDbGFzcyIsImdldExpYlByZWZpeGVkQ2xhc3MiLCJjbG9zZUJ0bkNsYXNzIiwiYm9keUNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJjYW5jZWxCdG5DbGFzcyIsImNvbmZpcm1CdG5DbGFzcyIsIm9uQ2FuY2VsQnRuQ2xpY2tlZCIsIm9uQ29uZmlybUJ0bkNsaWNrZWQiLCJvbkNsb3NlQnRuQ2xpY2tlZCIsIm5leHRQcm9wcyIsIm9wZW4iLCJjbG9zZSIsInJlcG9zaXRpb25Pbk9wZW4iLCJuZXh0T3BlbiIsIm5leHRDbG9zZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwibW9kIiwiYm9keSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xvc2VCdG5MYWJlbCIsImhlbHBMYWJlbCIsInN0eWxlT2JqIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiQ29tcG9uZW50IiwiY2xhc3NQcm9wZXJ0eSIsIkRyYWdnYWJsZUNvbXBvbmVudCIsIm1vdXNlZG93bkhhbmRsZXIiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwicmVwb3NpdGlvbiIsInJlY3QiLCJDb21wb25lbnRCZWluZ01vdmVkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJsZWZ0VG9Nb3VzZSIsInRvcFRvTW91c2UiLCJtYXgiLCJtaW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBvc2l0aW9uIiwicHJvY2Vzc1JlZiIsInBvcHVwTWFuYWdlciIsInR5cGVzIiwiZXZlbnRUeXBlIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJoYXMiLCJpbmNsdWRlcyIsImNvZGUiLCJoYW5kbGUiLCJpc1BvcHVwIiwiYXNzZXJ0IiwiUG9wdXBDb21wb25lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwidG9nZ2xlRGlhbG9nT3BlbiIsImRpYWxvZ05hbWUiLCJvcGVuU3RhdGUiLCJoYXNTdGF0ZVNldCIsIm9wZW5TdGF0ZU5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLGlCQUFVQSxTQUFWLENBQW9CQyxXQUFwQixHQUFtQyxZQUFZO0FBQzNDO0FBQ0EsUUFBSUMsTUFBTTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsZ0JBQVEsVUFGRjtBQUdOQyxtQkFBVyxhQUhMO0FBSU5DLG9CQUFZLGNBSk47QUFLTkMsb0JBQVksY0FMTjtBQU1OQyxrQkFBVSxZQU5KO0FBT05DLG1CQUFXLGFBUEw7QUFRTkMsaUJBQVMsV0FSSDtBQVNOQyxtQkFBVyxhQVRMO0FBVU5DLGVBQU8sU0FWRDtBQVdOQyxjQUFNO0FBWEEsS0FBVjs7QUFjQTtBQUNBLGFBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLGVBQU8sT0FBT0EsS0FBS0MsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFQLEdBQXNDRixLQUFLRyxLQUFMLENBQVcsQ0FBWCxDQUE3QztBQUNIOztBQUVEO0FBQ0EsV0FBTyxTQUFTakIsV0FBVCxDQUFxQmtCLENBQXJCLEVBQXdCO0FBQzNCLFlBQUlDLFNBQVNsQixJQUFJaUIsRUFBRUosSUFBTixLQUFlRCxXQUFXSyxFQUFFSixJQUFiLENBQTVCO0FBQ0FNLGdCQUFRQyxJQUFSLENBQWFGLE1BQWIsRUFBcUIsS0FBS0csV0FBTCxDQUFpQkMsSUFBdEM7QUFDQSxZQUFJSixVQUFVLEtBQUtLLEtBQW5CLEVBQTBCLEtBQUtBLEtBQUwsQ0FBV0wsTUFBWCxFQUFtQkQsQ0FBbkI7QUFDMUIsWUFBSUMsVUFBVSxJQUFkLEVBQW9CLEtBQUtBLE1BQUwsRUFBYUQsQ0FBYjtBQUN2QixLQUxEO0FBTUgsQ0E1QmtDLEVBQW5DOztBQThCQTtBQUNBLElBQUlPLFdBQVcsRUFBZjs7SUFFcUJDLGE7Ozs7OzRCQUNDO0FBQ2QsbUJBQU8sS0FBS0gsSUFBWjtBQUNIOzs7QUFDRCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUVmO0FBRmUsa0lBQ1RBLEtBRFM7O0FBR2YsY0FBS3hCLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQjJCLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQixHQUF0QjtBQUNBLGNBQUtDLGFBQUwsR0FBcUIsV0FBckI7O0FBRUEsY0FBS0MsSUFBTCxDQUFVTixLQUFWO0FBQ0EsY0FBS08sUUFBTCxDQUFjUCxLQUFkO0FBQ0EsY0FBS1EsWUFBTCxDQUFrQlIsS0FBbEI7QUFUZTtBQVVsQjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O21DQU1XO0FBQ1AsZ0JBQUlELE9BQU8sS0FBS0QsV0FBTCxDQUFpQkMsSUFBNUI7QUFDQTtBQUNBRSxxQkFBU0YsSUFBVCxJQUFpQkUsU0FBU0YsSUFBVCxLQUFrQixDQUFuQztBQUNBO0FBQ0FFLHFCQUFTRixJQUFULElBQWlCRSxTQUFTRixJQUFULElBQWlCLENBQWxDO0FBQ0E7QUFDQSxpQkFBS1UsV0FBTCxHQUFtQlYsS0FBS1IsTUFBTCxDQUFZLENBQVosRUFBZW1CLFdBQWYsS0FBK0JYLEtBQUtOLEtBQUwsQ0FBVyxDQUFYLENBQS9CLEdBQStDUSxTQUFTRixJQUFULENBQWxFO0FBQ0g7OztpQ0FFUVksRyxFQUFLO0FBQ1YsbUlBQWVBLEdBQWY7QUFDSDs7O3VDQUVjQyxRLEVBQVU7QUFDckIsbUJBQU8sY0FBRUEsUUFBRixDQUFQO0FBQ0g7Ozs0Q0FFbUJDLEcsRUFBSztBQUNyQixtQkFBVSxLQUFLVCxjQUFmLFNBQWlDUyxHQUFqQztBQUNIOztBQUVEOzs7OytCQUNPLENBQUU7Ozt1Q0FDTSxDQUFFOzs7NEJBNUJEO0FBQ1osbUJBQVUsS0FBS1QsY0FBZixTQUFpQyxLQUFLQyxhQUF0QyxVQUF1RCxLQUFLTCxLQUFMLENBQVdjLFNBQVgsSUFBd0IsRUFBL0U7QUFDSDs7Ozs7O2tCQTNCZ0JaLGE7Ozs7Ozs7Ozs7O0FDckNyQjs7Ozs7OztBQU9BLElBQUlhLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxNQUFJQyxxQkFBc0IsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUN4QkEsT0FBT0MsR0FEaUIsSUFFeEJELE9BQU9DLEdBQVAsQ0FBVyxlQUFYLENBRnVCLElBR3ZCLE1BSEY7O0FBS0EsTUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxNQUFULEVBQWlCO0FBQ3BDLFdBQU8sUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixJQUNMQSxXQUFXLElBRE4sSUFFTEEsT0FBT0MsUUFBUCxLQUFvQkwsa0JBRnRCO0FBR0QsR0FKRDs7QUFNQTtBQUNBO0FBQ0EsTUFBSU0sc0JBQXNCLElBQTFCO0FBQ0FDLFNBQU9DLE9BQVAsR0FBaUIsbUJBQUFDLENBQVEsRUFBUixFQUFxQ04sY0FBckMsRUFBcURHLG1CQUFyRCxDQUFqQjtBQUNELENBaEJELE1BZ0JPO0FBQ0w7QUFDQTtBQUNBQyxTQUFPQyxPQUFQLEdBQWlCLG1CQUFBQyxDQUFRLEVBQVIsR0FBakI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O1FDMUJlQyxLLEdBQUFBLEs7UUFNQUMsSyxHQUFBQSxLO1FBTUFuQyxDLEdBQUFBLEM7UUFvQkFvQyxpQixHQUFBQSxpQjtRQVFBQyxVLEdBQUFBLFU7QUF6Q2hCO0FBQ08sU0FBU0gsS0FBVCxDQUFlakIsR0FBZixFQUFvQjtBQUN2QixXQUFPcUIsT0FBT3pELFNBQVAsQ0FBaUIwRCxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0J2QixHQUEvQixNQUF3QyxpQkFBL0M7QUFDSDs7QUFFRDtBQUNBO0FBQ08sU0FBU2tCLEtBQVQsQ0FBZWxCLEdBQWYsRUFBb0I7QUFDdkIsV0FBT3dCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsU0FBTCxDQUFlMUIsR0FBZixDQUFYLENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ08sU0FBU2pCLENBQVQsQ0FBVzRDLFdBQVgsRUFBd0I7QUFDM0IsYUFBU0MsRUFBVCxDQUFZRCxXQUFaLEVBQXlCRSxJQUF6QixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkMsaUNBQTJCVCxPQUFPVSxPQUFQLENBQWVKLFdBQWYsQ0FBM0IsOEhBQXdEO0FBQUE7QUFBQSxvQkFBNUNLLEdBQTRDO0FBQUEsb0JBQXZDQyxLQUF1Qzs7QUFDcEQsb0JBQUlDLGFBQWFqQixNQUFNZ0IsS0FBTixDQUFqQjtBQUFBLG9CQUNJRSxTQUFPTixJQUFQLElBQWNBLFNBQVMsRUFBVCxHQUFjRyxHQUFkLEdBQW9CQSxJQUFJcEQsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4Qm1ELElBQUlsRCxLQUFKLENBQVUsQ0FBVixDQUFoRSxDQURKOztBQUdBLG9CQUFJb0QsVUFBSixFQUFnQjtBQUNaTix1QkFBR0ssS0FBSCxFQUFVRSxDQUFWLEVBQWFMLE1BQWI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hBLDJCQUFPSyxDQUFQLElBQVlGLEtBQVo7QUFDSDtBQUNKO0FBVmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXdEM7O0FBRUQsUUFBSUgsU0FBUyxFQUFiO0FBQ0FGLE9BQUdELFdBQUgsRUFBZ0IsRUFBaEIsRUFBb0JHLE1BQXBCO0FBQ0EsV0FBT0EsTUFBUDtBQUNIOztBQUVEO0FBQ08sU0FBU1gsaUJBQVQsY0FBOEY7QUFBQSwrQkFBbEVpQixVQUFrRTtBQUFBLFFBQWxFQSxVQUFrRSxtQ0FBckQsSUFBcUQ7QUFBQSxnQ0FBL0NDLFdBQStDO0FBQUEsUUFBL0NBLFdBQStDLG9DQUFuQyxHQUFtQztBQUFBLDRCQUE1QkMsS0FBNEI7QUFBQSxRQUE1QkEsS0FBNEIsK0JBQXBCLEdBQW9CO0FBQUEsNkJBQWZDLE1BQWU7QUFBQSxRQUFmQSxNQUFlLGdDQUFOLEdBQU07O0FBQ2pHLFdBQU87QUFDSEMsY0FBTSxDQUFDSixhQUFhRSxLQUFkLElBQXVCLENBRDFCO0FBRUhHLGFBQUssQ0FBQ0osY0FBY0UsTUFBZixJQUF5QjtBQUYzQixLQUFQO0FBSUg7O0FBRUQ7QUFDTyxTQUFTbkIsVUFBVCxHQUFzQjtBQUN6QixXQUFPc0IsTUFBTUMsSUFBTixDQUFXQyxTQUFYLEVBQXNCQyxNQUF0QixDQUE2QjtBQUFBLGVBQUtDLE1BQUssRUFBTCxJQUFXLE9BQU9BLENBQVAsS0FBYSxXQUE3QjtBQUFBLEtBQTdCLEVBQXVFQyxJQUF2RSxDQUE0RSxHQUE1RSxDQUFQO0FBQ0gsQzs7Ozs7Ozs7O0FDM0NEO0FBQ0EsSUFBSTNDLFVBQVVVLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSWlDLGdCQUFKO0FBQ0EsSUFBSUMsa0JBQUo7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsVUFBTSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIO0FBQ0QsU0FBU0MsbUJBQVQsR0FBZ0M7QUFDNUIsVUFBTSxJQUFJRCxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIO0FBQ0EsYUFBWTtBQUNULFFBQUk7QUFDQSxZQUFJLE9BQU9FLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDbENMLCtCQUFtQkssVUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSEwsK0JBQW1CRSxnQkFBbkI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPbkUsQ0FBUCxFQUFVO0FBQ1JpRSwyQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0QsUUFBSTtBQUNBLFlBQUksT0FBT0ksWUFBUCxLQUF3QixVQUE1QixFQUF3QztBQUNwQ0wsaUNBQXFCSyxZQUFyQjtBQUNILFNBRkQsTUFFTztBQUNITCxpQ0FBcUJHLG1CQUFyQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU9yRSxDQUFQLEVBQVU7QUFDUmtFLDZCQUFxQkcsbUJBQXJCO0FBQ0g7QUFDSixDQW5CQSxHQUFEO0FBb0JBLFNBQVNHLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3JCLFFBQUlSLHFCQUFxQkssVUFBekIsRUFBcUM7QUFDakM7QUFDQSxlQUFPQSxXQUFXRyxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDUixxQkFBcUJFLGdCQUFyQixJQUF5QyxDQUFDRixnQkFBM0MsS0FBZ0VLLFVBQXBFLEVBQWdGO0FBQzVFTCwyQkFBbUJLLFVBQW5CO0FBQ0EsZUFBT0EsV0FBV0csR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0g7QUFDRCxRQUFJO0FBQ0E7QUFDQSxlQUFPUixpQkFBaUJRLEdBQWpCLEVBQXNCLENBQXRCLENBQVA7QUFDSCxLQUhELENBR0UsT0FBTXpFLENBQU4sRUFBUTtBQUNOLFlBQUk7QUFDQTtBQUNBLG1CQUFPaUUsaUJBQWlCekIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJpQyxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQU16RSxDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPaUUsaUJBQWlCekIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJpQyxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0g7QUFDSjtBQUdKO0FBQ0QsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsUUFBSVQsdUJBQXVCSyxZQUEzQixFQUF5QztBQUNyQztBQUNBLGVBQU9BLGFBQWFJLE1BQWIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNULHVCQUF1QkcsbUJBQXZCLElBQThDLENBQUNILGtCQUFoRCxLQUF1RUssWUFBM0UsRUFBeUY7QUFDckZMLDZCQUFxQkssWUFBckI7QUFDQSxlQUFPQSxhQUFhSSxNQUFiLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9ULG1CQUFtQlMsTUFBbkIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPM0UsQ0FBUCxFQUFTO0FBQ1AsWUFBSTtBQUNBO0FBQ0EsbUJBQU9rRSxtQkFBbUIxQixJQUFuQixDQUF3QixJQUF4QixFQUE4Qm1DLE1BQTlCLENBQVA7QUFDSCxTQUhELENBR0UsT0FBTzNFLENBQVAsRUFBUztBQUNQO0FBQ0E7QUFDQSxtQkFBT2tFLG1CQUFtQjFCLElBQW5CLENBQXdCLElBQXhCLEVBQThCbUMsTUFBOUIsQ0FBUDtBQUNIO0FBQ0o7QUFJSjtBQUNELElBQUlDLFFBQVEsRUFBWjtBQUNBLElBQUlDLFdBQVcsS0FBZjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFhLENBQUMsQ0FBbEI7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixRQUFJLENBQUNILFFBQUQsSUFBYSxDQUFDQyxZQUFsQixFQUFnQztBQUM1QjtBQUNIO0FBQ0RELGVBQVcsS0FBWDtBQUNBLFFBQUlDLGFBQWFHLE1BQWpCLEVBQXlCO0FBQ3JCTCxnQkFBUUUsYUFBYUksTUFBYixDQUFvQk4sS0FBcEIsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIRyxxQkFBYSxDQUFDLENBQWQ7QUFDSDtBQUNELFFBQUlILE1BQU1LLE1BQVYsRUFBa0I7QUFDZEU7QUFDSDtBQUNKOztBQUVELFNBQVNBLFVBQVQsR0FBc0I7QUFDbEIsUUFBSU4sUUFBSixFQUFjO0FBQ1Y7QUFDSDtBQUNELFFBQUlPLFVBQVVaLFdBQVdRLGVBQVgsQ0FBZDtBQUNBSCxlQUFXLElBQVg7O0FBRUEsUUFBSVEsTUFBTVQsTUFBTUssTUFBaEI7QUFDQSxXQUFNSSxHQUFOLEVBQVc7QUFDUFAsdUJBQWVGLEtBQWY7QUFDQUEsZ0JBQVEsRUFBUjtBQUNBLGVBQU8sRUFBRUcsVUFBRixHQUFlTSxHQUF0QixFQUEyQjtBQUN2QixnQkFBSVAsWUFBSixFQUFrQjtBQUNkQSw2QkFBYUMsVUFBYixFQUF5Qk8sR0FBekI7QUFDSDtBQUNKO0FBQ0RQLHFCQUFhLENBQUMsQ0FBZDtBQUNBTSxjQUFNVCxNQUFNSyxNQUFaO0FBQ0g7QUFDREgsbUJBQWUsSUFBZjtBQUNBRCxlQUFXLEtBQVg7QUFDQUgsb0JBQWdCVSxPQUFoQjtBQUNIOztBQUVEL0QsUUFBUWtFLFFBQVIsR0FBbUIsVUFBVWQsR0FBVixFQUFlO0FBQzlCLFFBQUllLE9BQU8sSUFBSTdCLEtBQUosQ0FBVUUsVUFBVW9CLE1BQVYsR0FBbUIsQ0FBN0IsQ0FBWDtBQUNBLFFBQUlwQixVQUFVb0IsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QixhQUFLLElBQUlRLElBQUksQ0FBYixFQUFnQkEsSUFBSTVCLFVBQVVvQixNQUE5QixFQUFzQ1EsR0FBdEMsRUFBMkM7QUFDdkNELGlCQUFLQyxJQUFJLENBQVQsSUFBYzVCLFVBQVU0QixDQUFWLENBQWQ7QUFDSDtBQUNKO0FBQ0RiLFVBQU1jLElBQU4sQ0FBVyxJQUFJQyxJQUFKLENBQVNsQixHQUFULEVBQWNlLElBQWQsQ0FBWDtBQUNBLFFBQUlaLE1BQU1LLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ0osUUFBM0IsRUFBcUM7QUFDakNMLG1CQUFXVyxVQUFYO0FBQ0g7QUFDSixDQVhEOztBQWFBO0FBQ0EsU0FBU1EsSUFBVCxDQUFjbEIsR0FBZCxFQUFtQm1CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQUtuQixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLbUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUFDREQsS0FBSzlHLFNBQUwsQ0FBZXlHLEdBQWYsR0FBcUIsWUFBWTtBQUM3QixTQUFLYixHQUFMLENBQVNvQixLQUFULENBQWUsSUFBZixFQUFxQixLQUFLRCxLQUExQjtBQUNILENBRkQ7QUFHQXZFLFFBQVF5RSxLQUFSLEdBQWdCLFNBQWhCO0FBQ0F6RSxRQUFRMEUsT0FBUixHQUFrQixJQUFsQjtBQUNBMUUsUUFBUUMsR0FBUixHQUFjLEVBQWQ7QUFDQUQsUUFBUTJFLElBQVIsR0FBZSxFQUFmO0FBQ0EzRSxRQUFRNEUsT0FBUixHQUFrQixFQUFsQixDLENBQXNCO0FBQ3RCNUUsUUFBUTZFLFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQjlFLFFBQVErRSxFQUFSLEdBQWFELElBQWI7QUFDQTlFLFFBQVFnRixXQUFSLEdBQXNCRixJQUF0QjtBQUNBOUUsUUFBUWlGLElBQVIsR0FBZUgsSUFBZjtBQUNBOUUsUUFBUWtGLEdBQVIsR0FBY0osSUFBZDtBQUNBOUUsUUFBUW1GLGNBQVIsR0FBeUJMLElBQXpCO0FBQ0E5RSxRQUFRb0Ysa0JBQVIsR0FBNkJOLElBQTdCO0FBQ0E5RSxRQUFRcUYsSUFBUixHQUFlUCxJQUFmO0FBQ0E5RSxRQUFRc0YsZUFBUixHQUEwQlIsSUFBMUI7QUFDQTlFLFFBQVF1RixtQkFBUixHQUE4QlQsSUFBOUI7O0FBRUE5RSxRQUFRd0YsU0FBUixHQUFvQixVQUFVeEcsSUFBVixFQUFnQjtBQUFFLFdBQU8sRUFBUDtBQUFXLENBQWpEOztBQUVBZ0IsUUFBUXlGLE9BQVIsR0FBa0IsVUFBVXpHLElBQVYsRUFBZ0I7QUFDOUIsVUFBTSxJQUFJK0QsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSCxDQUZEOztBQUlBL0MsUUFBUTBGLEdBQVIsR0FBYyxZQUFZO0FBQUUsV0FBTyxHQUFQO0FBQVksQ0FBeEM7QUFDQTFGLFFBQVEyRixLQUFSLEdBQWdCLFVBQVVDLEdBQVYsRUFBZTtBQUMzQixVQUFNLElBQUk3QyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNILENBRkQ7QUFHQS9DLFFBQVE2RixLQUFSLEdBQWdCLFlBQVc7QUFBRSxXQUFPLENBQVA7QUFBVyxDQUF4QyxDOzs7Ozs7O0FDdkxBOztBQUVBOzs7Ozs7Ozs7QUFTQSxTQUFTQyxpQkFBVCxDQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUIsU0FBTyxZQUFZO0FBQ2pCLFdBQU9BLEdBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7Ozs7O0FBS0EsSUFBSUMsZ0JBQWdCLFNBQVNBLGFBQVQsR0FBeUIsQ0FBRSxDQUEvQzs7QUFFQUEsY0FBY0MsV0FBZCxHQUE0QkgsaUJBQTVCO0FBQ0FFLGNBQWNFLGdCQUFkLEdBQWlDSixrQkFBa0IsS0FBbEIsQ0FBakM7QUFDQUUsY0FBY0csZUFBZCxHQUFnQ0wsa0JBQWtCLElBQWxCLENBQWhDO0FBQ0FFLGNBQWNJLGVBQWQsR0FBZ0NOLGtCQUFrQixJQUFsQixDQUFoQztBQUNBRSxjQUFjSyxlQUFkLEdBQWdDLFlBQVk7QUFDMUMsU0FBTyxJQUFQO0FBQ0QsQ0FGRDtBQUdBTCxjQUFjTSxtQkFBZCxHQUFvQyxVQUFVUCxHQUFWLEVBQWU7QUFDakQsU0FBT0EsR0FBUDtBQUNELENBRkQ7O0FBSUFyRixPQUFPQyxPQUFQLEdBQWlCcUYsYUFBakIsQzs7Ozs7OztBQ25DQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQSxJQUFJTyxpQkFBaUIsU0FBU0EsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0MsQ0FBRSxDQUF2RDs7QUFFQSxJQUFJeEcsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDcUcsbUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQy9DLFFBQUlBLFdBQVdDLFNBQWYsRUFBMEI7QUFDeEIsWUFBTSxJQUFJMUQsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFRCxTQUFTMkQsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEJILE1BQTlCLEVBQXNDSSxDQUF0QyxFQUF5Q0MsQ0FBekMsRUFBNENDLENBQTVDLEVBQStDQyxDQUEvQyxFQUFrRHBJLENBQWxELEVBQXFEcUksQ0FBckQsRUFBd0Q7QUFDdERULGlCQUFlQyxNQUFmOztBQUVBLE1BQUksQ0FBQ0csU0FBTCxFQUFnQjtBQUNkLFFBQUlNLEtBQUo7QUFDQSxRQUFJVCxXQUFXQyxTQUFmLEVBQTBCO0FBQ3hCUSxjQUFRLElBQUlsRSxLQUFKLENBQVUsdUVBQXVFLDZEQUFqRixDQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSW9CLE9BQU8sQ0FBQ3lDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYXBJLENBQWIsRUFBZ0JxSSxDQUFoQixDQUFYO0FBQ0EsVUFBSUUsV0FBVyxDQUFmO0FBQ0FELGNBQVEsSUFBSWxFLEtBQUosQ0FBVXlELE9BQU9XLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLFlBQVk7QUFDbEQsZUFBT2hELEtBQUsrQyxVQUFMLENBQVA7QUFDRCxPQUZpQixDQUFWLENBQVI7QUFHQUQsWUFBTWpJLElBQU4sR0FBYSxxQkFBYjtBQUNEOztBQUVEaUksVUFBTUcsV0FBTixHQUFvQixDQUFwQixDQWJjLENBYVM7QUFDdkIsVUFBTUgsS0FBTjtBQUNEO0FBQ0Y7O0FBRUR2RyxPQUFPQyxPQUFQLEdBQWlCK0YsU0FBakIsQzs7Ozs7Ozs7QUNwREE7Ozs7Ozs7QUFPQTs7QUFFQSxJQUFJVyx1QkFBdUIsOENBQTNCOztBQUVBM0csT0FBT0MsT0FBUCxHQUFpQjBHLG9CQUFqQixDOzs7Ozs7Ozs7Ozs7QUNYTyxJQUFNQyw0QkFBVTtBQUNuQkMsWUFBUSxJQURXO0FBRW5CQyxhQUFTLElBRlU7QUFHbkJDLGNBQVU7QUFIUyxDQUFoQixDOzs7Ozs7QUNBUCwwQjs7Ozs7OztBQ0FBOzs7Ozs7OztBQVFBOztBQUVBLElBQUl6QixnQkFBZ0IsbUJBQUFwRixDQUFRLENBQVIsQ0FBcEI7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFJOEcsVUFBVTFCLGFBQWQ7O0FBRUEsSUFBSWhHLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxNQUFJeUgsZUFBZSxTQUFTQSxZQUFULENBQXNCbkIsTUFBdEIsRUFBOEI7QUFDL0MsU0FBSyxJQUFJb0IsT0FBT3BGLFVBQVVvQixNQUFyQixFQUE2Qk8sT0FBTzdCLE1BQU1zRixPQUFPLENBQVAsR0FBV0EsT0FBTyxDQUFsQixHQUFzQixDQUE1QixDQUFwQyxFQUFvRUMsT0FBTyxDQUFoRixFQUFtRkEsT0FBT0QsSUFBMUYsRUFBZ0dDLE1BQWhHLEVBQXdHO0FBQ3RHMUQsV0FBSzBELE9BQU8sQ0FBWixJQUFpQnJGLFVBQVVxRixJQUFWLENBQWpCO0FBQ0Q7O0FBRUQsUUFBSVgsV0FBVyxDQUFmO0FBQ0EsUUFBSVksVUFBVSxjQUFjdEIsT0FBT1csT0FBUCxDQUFlLEtBQWYsRUFBc0IsWUFBWTtBQUM1RCxhQUFPaEQsS0FBSytDLFVBQUwsQ0FBUDtBQUNELEtBRjJCLENBQTVCO0FBR0EsUUFBSSxPQUFPckksT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQ0EsY0FBUW9JLEtBQVIsQ0FBY2EsT0FBZDtBQUNEO0FBQ0QsUUFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFlBQU0sSUFBSS9FLEtBQUosQ0FBVStFLE9BQVYsQ0FBTjtBQUNELEtBTEQsQ0FLRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEdBbEJEOztBQW9CQUwsWUFBVSxTQUFTQSxPQUFULENBQWlCZixTQUFqQixFQUE0QkgsTUFBNUIsRUFBb0M7QUFDNUMsUUFBSUEsV0FBV0MsU0FBZixFQUEwQjtBQUN4QixZQUFNLElBQUkxRCxLQUFKLENBQVUsOERBQThELGtCQUF4RSxDQUFOO0FBQ0Q7O0FBRUQsUUFBSXlELE9BQU93QixPQUFQLENBQWUsNkJBQWYsTUFBa0QsQ0FBdEQsRUFBeUQ7QUFDdkQsYUFEdUQsQ0FDL0M7QUFDVDs7QUFFRCxRQUFJLENBQUNyQixTQUFMLEVBQWdCO0FBQ2QsV0FBSyxJQUFJc0IsUUFBUXpGLFVBQVVvQixNQUF0QixFQUE4Qk8sT0FBTzdCLE1BQU0yRixRQUFRLENBQVIsR0FBWUEsUUFBUSxDQUFwQixHQUF3QixDQUE5QixDQUFyQyxFQUF1RUMsUUFBUSxDQUFwRixFQUF1RkEsUUFBUUQsS0FBL0YsRUFBc0dDLE9BQXRHLEVBQStHO0FBQzdHL0QsYUFBSytELFFBQVEsQ0FBYixJQUFrQjFGLFVBQVUwRixLQUFWLENBQWxCO0FBQ0Q7O0FBRURQLG1CQUFhbkQsS0FBYixDQUFtQmlDLFNBQW5CLEVBQThCLENBQUNELE1BQUQsRUFBUzNDLE1BQVQsQ0FBZ0JNLElBQWhCLENBQTlCO0FBQ0Q7QUFDRixHQWhCRDtBQWlCRDs7QUFFRHpELE9BQU9DLE9BQVAsR0FBaUIrRyxPQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJTLFE7Ozs7Ozs7Ozs7OytCQUNWO0FBQ0g7QUFDQSxpQkFBSzdJLGFBQUw7QUFDSDs7O2lDQUVRO0FBQUEseUJBQ21DLEtBQUtMLEtBRHhDO0FBQUEsZ0JBQ0FjLFNBREEsVUFDQUEsU0FEQTtBQUFBLGdCQUNXcUksUUFEWCxVQUNXQSxRQURYO0FBQUEsZ0JBQ3FCQyxVQURyQixVQUNxQkEsVUFEckI7QUFBQSxnQkFFRHZJLEdBRkMsR0FFSyx1QkFBVyxLQUFLQyxTQUFoQixRQUE4QnNJLDJCQUEyQixhQUF6RCxFQUZMOzs7QUFJTCxtQkFDSSxrREFDUSxLQUFLcEosS0FEYjtBQUVJLDJCQUFXYSxHQUZmLElBREo7QUFNSDs7Ozs7O2tCQWhCZ0JxSSxROzs7QUFtQnJCQSxTQUFTRyxZQUFULEdBQXdCO0FBQ3BCRCxnQkFBWTtBQURRLENBQXhCOztBQUlBRixTQUFTSSxTQUFULEdBQXFCO0FBQ2pCRixnQkFBWSxvQkFBVUc7QUFETCxDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLE07Ozs7Ozs7Ozs7OytCQUNWO0FBQ0gsaUJBQUtuSixhQUFMO0FBQ0g7OztnQ0FFTVgsQyxFQUFHO0FBQUEsZ0JBQ0MrSixTQURELEdBQ2MsS0FBS3pKLEtBRG5CLENBQ0N5SixTQUREOzs7QUFHTixnQkFBSUEsU0FBSixFQUFlO0FBQ1hBLDBCQUFVL0osQ0FBVixFQUFhLElBQWI7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQSx5QkFDdUIsS0FBS00sS0FENUI7QUFBQSxnQkFDRTBKLElBREYsVUFDRUEsSUFERjtBQUFBLGdCQUNRcEssSUFEUixVQUNRQSxJQURSO0FBQUEsZ0JBQ2NrRyxLQURkLFVBQ2NBLEtBRGQ7OztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBUSxNQUFNbEcsSUFBZCxFQUFvQixPQUFPa0csU0FBU2tFLElBQXBDLEVBQTBDLFdBQVcsS0FBSzVJLFNBQTFELEVBQXFFLFNBQVMsS0FBS3RDLFdBQW5GO0FBQWlHa0w7QUFBakcsYUFESjtBQUdIOzs7Ozs7a0JBbkJnQkYsTTs7O0FBc0JyQkEsT0FBT0gsWUFBUCxHQUFzQjtBQUNsQkssVUFBTSxRQURZO0FBRWxCcEssVUFBTSxRQUZZO0FBR2xCa0csV0FBTztBQUhXLENBQXRCOztBQU1BZ0UsT0FBT0YsU0FBUCxHQUFtQjtBQUNmeEksZUFBVyxvQkFBVTZJLE1BRE47QUFFZkQsVUFBTSxvQkFBVUMsTUFGRDtBQUdmckssVUFBTSxvQkFBVXFLLE1BSEQ7QUFJZm5FLFdBQU8sb0JBQVVtRSxNQUpGO0FBS2ZGLGVBQVcsb0JBQVVHO0FBTE4sQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLENBQ1gsRUFBQ0MsSUFBSSxLQUFMLEVBQVlDLE9BQU8sWUFBbkIsRUFBaUNDLEtBQUssT0FBdEMsRUFBK0NDLFdBQVcsa0RBQVEsTUFBSyxZQUFiLEdBQTFELEVBRFcsRUFFWCxFQUFDSCxJQUFJLE1BQUwsRUFBYUMsT0FBTyxjQUFwQixFQUFvQ0MsS0FBSyxRQUF6QyxFQUFtREMsV0FBVyxrREFBUSxNQUFLLGNBQWIsR0FBOUQsRUFGVyxFQUdYLEVBQUNILElBQUksU0FBTCxFQUFnQkMsT0FBTyxTQUF2QixFQUFrQ0csUUFBUSxJQUExQyxFQUFnRGYsVUFBVSxDQUN0RCxFQUFDVyxJQUFJLFNBQUwsRUFBZ0JDLE9BQU8sU0FBdkIsRUFBa0NDLEtBQUssbUJBQXZDLEVBQTREQyxXQUFXLHNEQUF2RSxFQURzRCxFQUV0RCxFQUFDSCxJQUFJLFFBQUwsRUFBZUMsT0FBTyxRQUF0QixFQUFnQ0MsS0FBSyxrQkFBckMsRUFBeURDLFdBQVcsa0RBQVEsTUFBSyxPQUFiLEdBQXBFLEVBRnNELEVBR3RELEVBQUNILElBQUksU0FBTCxFQUFnQkMsT0FBTyxTQUF2QixFQUFrQ0MsS0FBSyxtQkFBdkMsRUFBNERDLFdBQVcsa0RBQVEsTUFBSyxVQUFiLEdBQXZFLEVBSHNELEVBSXRELEVBQUNILElBQUksTUFBTCxFQUFhQyxPQUFPLE1BQXBCLEVBQTRCQyxLQUFLLGdCQUFqQyxFQUFtREMsV0FBVyxrREFBUSxNQUFLLE1BQWIsR0FBOUQsRUFKc0QsRUFLdEQsRUFBQ0gsSUFBSSxRQUFMLEVBQWVDLE9BQU8sUUFBdEIsRUFBZ0NDLEtBQUssa0JBQXJDLEVBQXlEQyxXQUFXLGtEQUFRLE1BQUssUUFBYixHQUFwRSxFQUxzRCxDQUExRCxFQUhXLENBQWY7O0FBWUEsSUFBTUUsV0FBWSxlQUFPO0FBQ3JCLFFBQUlDLE1BQU0sRUFBVjtBQUNBLFNBQUssSUFBSWpGLElBQUksQ0FBYixFQUFnQkEsSUFBSWtGLElBQUkxRixNQUF4QixFQUFnQ1EsR0FBaEMsRUFBcUM7QUFDakMsWUFBSW1GLElBQUlELElBQUlsRixDQUFKLENBQVI7QUFDQSxZQUFJbUYsRUFBRW5CLFFBQU4sRUFBZ0I7QUFDWm1CLGNBQUVuQixRQUFGLENBQVdvQixPQUFYLENBQW1CO0FBQUEsdUJBQUtGLElBQUlqRixJQUFKLENBQVNrRixDQUFULENBQUw7QUFBQSxhQUFuQjtBQUNILFNBRkQsTUFFTztBQUNIRixnQkFBSWhGLElBQUosQ0FBU2tGLENBQVQ7QUFDSDtBQUNKO0FBQ0QsV0FBT0YsR0FBUDtBQUNILENBWGdCLENBV2QvRyxNQUFNQyxJQUFOLENBQVd1RyxNQUFYLENBWGMsQ0FBakI7O0FBYUEsbUJBQVNXLE1BQVQsQ0FBZ0IsK0NBQUssTUFBSyxJQUFWLEVBQWUsS0FBS1gsTUFBcEIsRUFBNEIsT0FBT00sUUFBbkMsR0FBaEIsRUFBaUVNLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkMsTTs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSCxpQkFBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFNQyxLQUFLQyxNQUFMO0FBREcsYUFBYjtBQUdIOzs7aUNBQ1E7QUFDTCxtQkFBUTtBQUFBO0FBQUEsa0JBQUksS0FBSyxLQUFLSCxLQUFMLENBQVdDLElBQXBCO0FBQTJCLHFCQUFLN0ssS0FBTCxDQUFXMEo7QUFBdEMsYUFBUjtBQUNIOzs7Ozs7a0JBUmdCaUIsTTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkssRzs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSCxpQkFBS0osS0FBTCxHQUFhO0FBQ1RLLDBCQUFVLEtBREQ7QUFFVEMsaUNBQWlCLENBRlI7QUFHVEMsaUNBQWlCLENBSFI7QUFJVEMsZ0NBQWdCO0FBSlAsYUFBYjtBQU1IOzs7NENBRW1CO0FBQUE7O0FBQ2hCLGdCQUFJQyxPQUFPQyxPQUFPQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBWDtBQUFBLGdCQUNJUCxXQUFXSSxLQUFLQSxLQUFLMUcsTUFBTCxHQUFjLENBQW5CLEVBQXNCdUQsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBbUMsRUFBbkMsQ0FEZjs7QUFHQW9ELG1CQUFPRyxXQUFQLENBQW1CLFlBQU07QUFDckIsdUJBQUtDLGFBQUw7QUFDSCxhQUZELEVBRUcsSUFGSDs7QUFJQSxpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZWO0FBRFUsYUFBZDs7QUFJQSxpQkFBS1MsYUFBTDtBQUNIOzs7d0NBRWU7QUFDWixnQkFBSUosT0FBT00sV0FBUCxDQUFtQkMsTUFBdkIsRUFBK0I7QUFBQSw0Q0FDZ0NQLE9BQU9NLFdBQVAsQ0FBbUJDLE1BRG5EO0FBQUEsb0JBQ3BCWCxlQURvQix5QkFDcEJBLGVBRG9CO0FBQUEsb0JBQ0hDLGVBREcseUJBQ0hBLGVBREc7QUFBQSxvQkFDY0MsY0FEZCx5QkFDY0EsY0FEZDs7QUFFM0IscUJBQUtPLFFBQUwsQ0FBYztBQUNWVCxvREFEVSxFQUNPQyxnQ0FEUCxFQUN3QkM7QUFEeEIsaUJBQWQ7QUFHSDtBQUNKOzs7d0NBRWVVLEksRUFBTWxCLEssRUFBTztBQUFBLGdCQUNwQlYsTUFEb0IsR0FDVlUsS0FEVSxDQUNwQlYsTUFEb0I7OztBQUd6QixnQkFBSSxPQUFPNEIsS0FBSzNDLFFBQVosS0FBeUIsV0FBN0IsRUFBMEM7QUFDdEMscUJBQUt3QyxRQUFMLENBQWM7QUFDVlYsOEJBQVVhLEtBQUtoQztBQURMLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFdBQVUsVUFBaEIsRUFBMkIsVUFBUyxVQUFwQyxFQUErQyxNQUFNLEdBQXJELEVBQTBELFNBQVMsR0FBbkUsRUFBd0UsU0FBUyxHQUFqRixFQUFzRixVQUFTLElBQS9GO0FBQ0ksd0VBQVUsS0FBSyxLQUFLOUosS0FBTCxDQUFXcUssR0FBMUIsRUFBK0IsVUFBVSxLQUFLTyxLQUFMLENBQVdLLFFBQXBELEVBQThELGlCQUFpQixLQUFLYyxlQUFMLENBQXFCNUwsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBL0U7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBTSxXQUFVLFdBQWhCLEVBQTRCLFNBQVEsTUFBcEMsRUFBMkMsV0FBVSxRQUFyRDtBQUNJO0FBQUE7QUFBQSwwQkFBTSxVQUFTLFlBQWYsRUFBNEIsTUFBTSxFQUFsQyxFQUFzQyxTQUFTLEVBQS9DO0FBQ0ksMEVBQVEsS0FBSyxLQUFLSCxLQUFMLENBQVdnTSxLQUF4QixFQUErQixVQUFVLEtBQUtwQixLQUFMLENBQVdLLFFBQXBEO0FBREoscUJBREo7QUFJSTtBQUFBO0FBQUE7QUFDSSxzRkFBb0IsaUJBQWlCLEtBQUtMLEtBQUwsQ0FBV00sZUFBaEQsRUFBaUUsaUJBQWlCLEtBQUtOLEtBQUwsQ0FBV08sZUFBN0YsRUFBOEcsZ0JBQWdCLEtBQUtQLEtBQUwsQ0FBV1EsY0FBekk7QUFESjtBQUpKO0FBSkosYUFESjtBQWVIOzs7Ozs7a0JBNURnQkosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJpQixlOzs7Ozs7Ozs7OzsrQkFDVjtBQUNILGlCQUFLNUwsYUFBTDtBQUNIOzs7aUNBRVE7QUFBQSx5QkFDdUIsS0FBS0wsS0FENUI7QUFBQSxnQkFDQWMsU0FEQSxVQUNBQSxTQURBO0FBQUEsZ0JBQ1dxSSxRQURYLFVBQ1dBLFFBRFg7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLDZCQUFTLEtBQUtuSixLQUFkLElBQXFCLFdBQVcsS0FBS2MsU0FBckM7QUFDS3FJO0FBREwsYUFESjtBQUtIOzs7Ozs7a0JBWmdCOEMsZTs7O0FBZXJCQSxnQkFBZ0I1QyxZQUFoQixHQUErQjtBQUMzQjZDLGFBQVMsS0FEa0I7QUFFM0JwTCxlQUFXO0FBRmdCLENBQS9COztBQUtBbUwsZ0JBQWdCM0MsU0FBaEIsR0FBNEI7QUFDeEJ4SSxlQUFXLG9CQUFVNkksTUFERztBQUV4QnVDLGFBQVMsb0JBQVUzQztBQUZLLENBQTVCLEM7Ozs7Ozs7QUN4QkE7Ozs7Ozs7QUFPQTs7OztBQUVBLElBQUl4QyxnQkFBZ0IsbUJBQUFwRixDQUFRLENBQVIsQ0FBcEI7QUFDQSxJQUFJOEYsWUFBWSxtQkFBQTlGLENBQVEsQ0FBUixDQUFoQjtBQUNBLElBQUk4RyxVQUFVLG1CQUFBOUcsQ0FBUSxFQUFSLENBQWQ7QUFDQSxJQUFJd0ssU0FBUyxtQkFBQXhLLENBQVEsRUFBUixDQUFiOztBQUVBLElBQUl5Ryx1QkFBdUIsbUJBQUF6RyxDQUFRLENBQVIsQ0FBM0I7QUFDQSxJQUFJeUssaUJBQWlCLG1CQUFBekssQ0FBUSxFQUFSLENBQXJCOztBQUVBRixPQUFPQyxPQUFQLEdBQWlCLFVBQVNMLGNBQVQsRUFBeUJHLG1CQUF6QixFQUE4QztBQUM3RDtBQUNBLE1BQUk2SyxrQkFBa0IsT0FBT2xMLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU9tTCxRQUE3RDtBQUNBLE1BQUlDLHVCQUF1QixZQUEzQixDQUg2RCxDQUdwQjs7QUFFekM7Ozs7Ozs7Ozs7Ozs7O0FBY0EsV0FBU0MsYUFBVCxDQUF1QkMsYUFBdkIsRUFBc0M7QUFDcEMsUUFBSUMsYUFBYUQsa0JBQWtCSixtQkFBbUJJLGNBQWNKLGVBQWQsQ0FBbkIsSUFBcURJLGNBQWNGLG9CQUFkLENBQXZFLENBQWpCO0FBQ0EsUUFBSSxPQUFPRyxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLGFBQU9BLFVBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSxNQUFJQyxZQUFZLGVBQWhCOztBQUVBO0FBQ0E7QUFDQSxNQUFJQyxpQkFBaUI7QUFDbkJ0SCxXQUFPdUgsMkJBQTJCLE9BQTNCLENBRFk7QUFFbkJ0RCxVQUFNc0QsMkJBQTJCLFNBQTNCLENBRmE7QUFHbkJqRCxVQUFNaUQsMkJBQTJCLFVBQTNCLENBSGE7QUFJbkJDLFlBQVFELDJCQUEyQixRQUEzQixDQUpXO0FBS25CdkwsWUFBUXVMLDJCQUEyQixRQUEzQixDQUxXO0FBTW5CbEQsWUFBUWtELDJCQUEyQixRQUEzQixDQU5XO0FBT25CRSxZQUFRRiwyQkFBMkIsUUFBM0IsQ0FQVzs7QUFTbkJHLFNBQUtDLHNCQVRjO0FBVW5CQyxhQUFTQyx3QkFWVTtBQVduQkMsYUFBU0MsMEJBWFU7QUFZbkJDLGdCQUFZQyx5QkFaTztBQWFuQnpCLFVBQU0wQixtQkFiYTtBQWNuQkMsY0FBVUMseUJBZFM7QUFlbkJDLFdBQU9DLHFCQWZZO0FBZ0JuQkMsZUFBV0Msc0JBaEJRO0FBaUJuQkMsV0FBT0Msc0JBakJZO0FBa0JuQkMsV0FBT0M7QUFsQlksR0FBckI7O0FBcUJBOzs7O0FBSUE7QUFDQSxXQUFTQyxFQUFULENBQVlyRixDQUFaLEVBQWVzRixDQUFmLEVBQWtCO0FBQ2hCO0FBQ0EsUUFBSXRGLE1BQU1zRixDQUFWLEVBQWE7QUFDWDtBQUNBO0FBQ0EsYUFBT3RGLE1BQU0sQ0FBTixJQUFXLElBQUlBLENBQUosS0FBVSxJQUFJc0YsQ0FBaEM7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNBLGFBQU90RixNQUFNQSxDQUFOLElBQVdzRixNQUFNQSxDQUF4QjtBQUNEO0FBQ0Y7QUFDRDs7QUFFQTs7Ozs7OztBQU9BLFdBQVNDLGFBQVQsQ0FBdUJ4RixPQUF2QixFQUFnQztBQUM5QixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLeUYsS0FBTCxHQUFhLEVBQWI7QUFDRDtBQUNEO0FBQ0FELGdCQUFjOVAsU0FBZCxHQUEwQnVGLE1BQU12RixTQUFoQzs7QUFFQSxXQUFTZ1EsMEJBQVQsQ0FBb0NDLFFBQXBDLEVBQThDO0FBQzVDLFFBQUl6TixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsVUFBSXdOLDBCQUEwQixFQUE5QjtBQUNBLFVBQUlDLDZCQUE2QixDQUFqQztBQUNEO0FBQ0QsYUFBU0MsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I1TyxLQUEvQixFQUFzQzZPLFFBQXRDLEVBQWdEQyxhQUFoRCxFQUErRHZELFFBQS9ELEVBQXlFd0QsWUFBekUsRUFBdUZDLE1BQXZGLEVBQStGO0FBQzdGRixzQkFBZ0JBLGlCQUFpQm5DLFNBQWpDO0FBQ0FvQyxxQkFBZUEsZ0JBQWdCRixRQUEvQjs7QUFFQSxVQUFJRyxXQUFXNUcsb0JBQWYsRUFBcUM7QUFDbkMsWUFBSTVHLG1CQUFKLEVBQXlCO0FBQ3ZCO0FBQ0FpRyxvQkFDRSxLQURGLEVBRUUseUZBQ0EsaURBREEsR0FFQSxnREFKRjtBQU1ELFNBUkQsTUFRTyxJQUFJMUcsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLElBQXlDLE9BQU9yQixPQUFQLEtBQW1CLFdBQWhFLEVBQTZFO0FBQ2xGO0FBQ0EsY0FBSXFQLFdBQVdILGdCQUFnQixHQUFoQixHQUFzQkQsUUFBckM7QUFDQSxjQUNFLENBQUNKLHdCQUF3QlEsUUFBeEIsQ0FBRDtBQUNBO0FBQ0FQLHVDQUE2QixDQUgvQixFQUlFO0FBQ0FqRyxvQkFDRSxLQURGLEVBRUUsMkRBQ0EseURBREEsR0FFQSx5REFGQSxHQUdBLGdFQUhBLEdBSUEsK0RBSkEsR0FJa0UsY0FOcEUsRUFPRXNHLFlBUEYsRUFRRUQsYUFSRjtBQVVBTCxvQ0FBd0JRLFFBQXhCLElBQW9DLElBQXBDO0FBQ0FQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsVUFBSTFPLE1BQU02TyxRQUFOLEtBQW1CLElBQXZCLEVBQTZCO0FBQzNCLFlBQUlELFVBQUosRUFBZ0I7QUFDZCxjQUFJNU8sTUFBTTZPLFFBQU4sTUFBb0IsSUFBeEIsRUFBOEI7QUFDNUIsbUJBQU8sSUFBSVIsYUFBSixDQUFrQixTQUFTOUMsUUFBVCxHQUFvQixJQUFwQixHQUEyQndELFlBQTNCLEdBQTBDLDBCQUExQyxJQUF3RSxTQUFTRCxhQUFULEdBQXlCLDZCQUFqRyxDQUFsQixDQUFQO0FBQ0Q7QUFDRCxpQkFBTyxJQUFJVCxhQUFKLENBQWtCLFNBQVM5QyxRQUFULEdBQW9CLElBQXBCLEdBQTJCd0QsWUFBM0IsR0FBMEMsNkJBQTFDLElBQTJFLE1BQU1ELGFBQU4sR0FBc0Isa0NBQWpHLENBQWxCLENBQVA7QUFDRDtBQUNELGVBQU8sSUFBUDtBQUNELE9BUkQsTUFRTztBQUNMLGVBQU9OLFNBQVN4TyxLQUFULEVBQWdCNk8sUUFBaEIsRUFBMEJDLGFBQTFCLEVBQXlDdkQsUUFBekMsRUFBbUR3RCxZQUFuRCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJRyxtQkFBbUJQLFVBQVV4TyxJQUFWLENBQWUsSUFBZixFQUFxQixLQUFyQixDQUF2QjtBQUNBK08scUJBQWlCTixVQUFqQixHQUE4QkQsVUFBVXhPLElBQVYsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLENBQTlCOztBQUVBLFdBQU8rTyxnQkFBUDtBQUNEOztBQUVELFdBQVNyQywwQkFBVCxDQUFvQ3NDLFlBQXBDLEVBQWtEO0FBQ2hELGFBQVNYLFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEVDLE1BQTFFLEVBQWtGO0FBQ2hGLFVBQUlJLFlBQVlwUCxNQUFNNk8sUUFBTixDQUFoQjtBQUNBLFVBQUlRLFdBQVdDLFlBQVlGLFNBQVosQ0FBZjtBQUNBLFVBQUlDLGFBQWFGLFlBQWpCLEVBQStCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFlBQUlJLGNBQWNDLGVBQWVKLFNBQWYsQ0FBbEI7O0FBRUEsZUFBTyxJQUFJZixhQUFKLENBQWtCLGFBQWE5QyxRQUFiLEdBQXdCLElBQXhCLEdBQStCd0QsWUFBL0IsR0FBOEMsWUFBOUMsSUFBOEQsTUFBTVEsV0FBTixHQUFvQixpQkFBcEIsR0FBd0NULGFBQXhDLEdBQXdELGNBQXRILEtBQXlJLE1BQU1LLFlBQU4sR0FBcUIsSUFBOUosQ0FBbEIsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPWiwyQkFBMkJDLFFBQTNCLENBQVA7QUFDRDs7QUFFRCxXQUFTdkIsb0JBQVQsR0FBZ0M7QUFDOUIsV0FBT3NCLDJCQUEyQnhILGNBQWNJLGVBQXpDLENBQVA7QUFDRDs7QUFFRCxXQUFTZ0csd0JBQVQsQ0FBa0NzQyxXQUFsQyxFQUErQztBQUM3QyxhQUFTakIsUUFBVCxDQUFrQnhPLEtBQWxCLEVBQXlCNk8sUUFBekIsRUFBbUNDLGFBQW5DLEVBQWtEdkQsUUFBbEQsRUFBNER3RCxZQUE1RCxFQUEwRTtBQUN4RSxVQUFJLE9BQU9VLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckMsZUFBTyxJQUFJcEIsYUFBSixDQUFrQixlQUFlVSxZQUFmLEdBQThCLGtCQUE5QixHQUFtREQsYUFBbkQsR0FBbUUsaURBQXJGLENBQVA7QUFDRDtBQUNELFVBQUlNLFlBQVlwUCxNQUFNNk8sUUFBTixDQUFoQjtBQUNBLFVBQUksQ0FBQ3hMLE1BQU1xTSxPQUFOLENBQWNOLFNBQWQsQ0FBTCxFQUErQjtBQUM3QixZQUFJQyxXQUFXQyxZQUFZRixTQUFaLENBQWY7QUFDQSxlQUFPLElBQUlmLGFBQUosQ0FBa0IsYUFBYTlDLFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J3RCxZQUEvQixHQUE4QyxZQUE5QyxJQUE4RCxNQUFNTSxRQUFOLEdBQWlCLGlCQUFqQixHQUFxQ1AsYUFBckMsR0FBcUQsdUJBQW5ILENBQWxCLENBQVA7QUFDRDtBQUNELFdBQUssSUFBSTNKLElBQUksQ0FBYixFQUFnQkEsSUFBSWlLLFVBQVV6SyxNQUE5QixFQUFzQ1EsR0FBdEMsRUFBMkM7QUFDekMsWUFBSTZDLFFBQVF5SCxZQUFZTCxTQUFaLEVBQXVCakssQ0FBdkIsRUFBMEIySixhQUExQixFQUF5Q3ZELFFBQXpDLEVBQW1Ed0QsZUFBZSxHQUFmLEdBQXFCNUosQ0FBckIsR0FBeUIsR0FBNUUsRUFBaUZpRCxvQkFBakYsQ0FBWjtBQUNBLFlBQUlKLGlCQUFpQmxFLEtBQXJCLEVBQTRCO0FBQzFCLGlCQUFPa0UsS0FBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU91RywyQkFBMkJDLFFBQTNCLENBQVA7QUFDRDs7QUFFRCxXQUFTbkIsd0JBQVQsR0FBb0M7QUFDbEMsYUFBU21CLFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEU7QUFDeEUsVUFBSUssWUFBWXBQLE1BQU02TyxRQUFOLENBQWhCO0FBQ0EsVUFBSSxDQUFDeE4sZUFBZStOLFNBQWYsQ0FBTCxFQUFnQztBQUM5QixZQUFJQyxXQUFXQyxZQUFZRixTQUFaLENBQWY7QUFDQSxlQUFPLElBQUlmLGFBQUosQ0FBa0IsYUFBYTlDLFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J3RCxZQUEvQixHQUE4QyxZQUE5QyxJQUE4RCxNQUFNTSxRQUFOLEdBQWlCLGlCQUFqQixHQUFxQ1AsYUFBckMsR0FBcUQsb0NBQW5ILENBQWxCLENBQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBT1AsMkJBQTJCQyxRQUEzQixDQUFQO0FBQ0Q7O0FBRUQsV0FBU2pCLHlCQUFULENBQW1Db0MsYUFBbkMsRUFBa0Q7QUFDaEQsYUFBU25CLFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEU7QUFDeEUsVUFBSSxFQUFFL08sTUFBTTZPLFFBQU4sYUFBMkJjLGFBQTdCLENBQUosRUFBaUQ7QUFDL0MsWUFBSUMsb0JBQW9CRCxjQUFjNVAsSUFBZCxJQUFzQjRNLFNBQTlDO0FBQ0EsWUFBSWtELGtCQUFrQkMsYUFBYTlQLE1BQU02TyxRQUFOLENBQWIsQ0FBdEI7QUFDQSxlQUFPLElBQUlSLGFBQUosQ0FBa0IsYUFBYTlDLFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J3RCxZQUEvQixHQUE4QyxZQUE5QyxJQUE4RCxNQUFNYyxlQUFOLEdBQXdCLGlCQUF4QixHQUE0Q2YsYUFBNUMsR0FBNEQsY0FBMUgsS0FBNkksa0JBQWtCYyxpQkFBbEIsR0FBc0MsSUFBbkwsQ0FBbEIsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPckIsMkJBQTJCQyxRQUEzQixDQUFQO0FBQ0Q7O0FBRUQsV0FBU1oscUJBQVQsQ0FBK0JtQyxjQUEvQixFQUErQztBQUM3QyxRQUFJLENBQUMxTSxNQUFNcU0sT0FBTixDQUFjSyxjQUFkLENBQUwsRUFBb0M7QUFDbENoUCxjQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsR0FBd0N3SCxRQUFRLEtBQVIsRUFBZSxvRUFBZixDQUF4QyxHQUErSCxLQUFLLENBQXBJO0FBQ0EsYUFBTzFCLGNBQWNJLGVBQXJCO0FBQ0Q7O0FBRUQsYUFBU3FILFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEU7QUFDeEUsVUFBSUssWUFBWXBQLE1BQU02TyxRQUFOLENBQWhCO0FBQ0EsV0FBSyxJQUFJMUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEssZUFBZXBMLE1BQW5DLEVBQTJDUSxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJZ0osR0FBR2lCLFNBQUgsRUFBY1csZUFBZTVLLENBQWYsQ0FBZCxDQUFKLEVBQXNDO0FBQ3BDLGlCQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFVBQUk2SyxlQUFlN04sS0FBS0UsU0FBTCxDQUFlME4sY0FBZixDQUFuQjtBQUNBLGFBQU8sSUFBSTFCLGFBQUosQ0FBa0IsYUFBYTlDLFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J3RCxZQUEvQixHQUE4QyxjQUE5QyxHQUErREssU0FBL0QsR0FBMkUsSUFBM0UsSUFBbUYsa0JBQWtCTixhQUFsQixHQUFrQyxxQkFBbEMsR0FBMERrQixZQUExRCxHQUF5RSxHQUE1SixDQUFsQixDQUFQO0FBQ0Q7QUFDRCxXQUFPekIsMkJBQTJCQyxRQUEzQixDQUFQO0FBQ0Q7O0FBRUQsV0FBU2QseUJBQVQsQ0FBbUMrQixXQUFuQyxFQUFnRDtBQUM5QyxhQUFTakIsUUFBVCxDQUFrQnhPLEtBQWxCLEVBQXlCNk8sUUFBekIsRUFBbUNDLGFBQW5DLEVBQWtEdkQsUUFBbEQsRUFBNER3RCxZQUE1RCxFQUEwRTtBQUN4RSxVQUFJLE9BQU9VLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckMsZUFBTyxJQUFJcEIsYUFBSixDQUFrQixlQUFlVSxZQUFmLEdBQThCLGtCQUE5QixHQUFtREQsYUFBbkQsR0FBbUUsa0RBQXJGLENBQVA7QUFDRDtBQUNELFVBQUlNLFlBQVlwUCxNQUFNNk8sUUFBTixDQUFoQjtBQUNBLFVBQUlRLFdBQVdDLFlBQVlGLFNBQVosQ0FBZjtBQUNBLFVBQUlDLGFBQWEsUUFBakIsRUFBMkI7QUFDekIsZUFBTyxJQUFJaEIsYUFBSixDQUFrQixhQUFhOUMsUUFBYixHQUF3QixJQUF4QixHQUErQndELFlBQS9CLEdBQThDLFlBQTlDLElBQThELE1BQU1NLFFBQU4sR0FBaUIsaUJBQWpCLEdBQXFDUCxhQUFyQyxHQUFxRCx3QkFBbkgsQ0FBbEIsQ0FBUDtBQUNEO0FBQ0QsV0FBSyxJQUFJbk0sR0FBVCxJQUFnQnlNLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUlBLFVBQVVhLGNBQVYsQ0FBeUJ0TixHQUF6QixDQUFKLEVBQW1DO0FBQ2pDLGNBQUlxRixRQUFReUgsWUFBWUwsU0FBWixFQUF1QnpNLEdBQXZCLEVBQTRCbU0sYUFBNUIsRUFBMkN2RCxRQUEzQyxFQUFxRHdELGVBQWUsR0FBZixHQUFxQnBNLEdBQTFFLEVBQStFeUYsb0JBQS9FLENBQVo7QUFDQSxjQUFJSixpQkFBaUJsRSxLQUFyQixFQUE0QjtBQUMxQixtQkFBT2tFLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU91RywyQkFBMkJDLFFBQTNCLENBQVA7QUFDRDs7QUFFRCxXQUFTVixzQkFBVCxDQUFnQ29DLG1CQUFoQyxFQUFxRDtBQUNuRCxRQUFJLENBQUM3TSxNQUFNcU0sT0FBTixDQUFjUSxtQkFBZCxDQUFMLEVBQXlDO0FBQ3ZDblAsY0FBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLEdBQXdDd0gsUUFBUSxLQUFSLEVBQWUsd0VBQWYsQ0FBeEMsR0FBbUksS0FBSyxDQUF4STtBQUNBLGFBQU8xQixjQUFjSSxlQUFyQjtBQUNEOztBQUVELFNBQUssSUFBSWhDLElBQUksQ0FBYixFQUFnQkEsSUFBSStLLG9CQUFvQnZMLE1BQXhDLEVBQWdEUSxHQUFoRCxFQUFxRDtBQUNuRCxVQUFJZ0wsVUFBVUQsb0JBQW9CL0ssQ0FBcEIsQ0FBZDtBQUNBLFVBQUksT0FBT2dMLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMxSCxnQkFDRSxLQURGLEVBRUUsdUZBQ0EsMEJBSEYsRUFJRTJILHlCQUF5QkQsT0FBekIsQ0FKRixFQUtFaEwsQ0FMRjtBQU9BLGVBQU80QixjQUFjSSxlQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBU3FILFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEU7QUFDeEUsV0FBSyxJQUFJNUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJK0ssb0JBQW9CdkwsTUFBeEMsRUFBZ0RRLEdBQWhELEVBQXFEO0FBQ25ELFlBQUlnTCxVQUFVRCxvQkFBb0IvSyxDQUFwQixDQUFkO0FBQ0EsWUFBSWdMLFFBQVFuUSxLQUFSLEVBQWU2TyxRQUFmLEVBQXlCQyxhQUF6QixFQUF3Q3ZELFFBQXhDLEVBQWtEd0QsWUFBbEQsRUFBZ0UzRyxvQkFBaEUsS0FBeUYsSUFBN0YsRUFBbUc7QUFDakcsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFJaUcsYUFBSixDQUFrQixhQUFhOUMsUUFBYixHQUF3QixJQUF4QixHQUErQndELFlBQS9CLEdBQThDLGdCQUE5QyxJQUFrRSxNQUFNRCxhQUFOLEdBQXNCLElBQXhGLENBQWxCLENBQVA7QUFDRDtBQUNELFdBQU9QLDJCQUEyQkMsUUFBM0IsQ0FBUDtBQUNEOztBQUVELFdBQVNoQixpQkFBVCxHQUE2QjtBQUMzQixhQUFTZ0IsUUFBVCxDQUFrQnhPLEtBQWxCLEVBQXlCNk8sUUFBekIsRUFBbUNDLGFBQW5DLEVBQWtEdkQsUUFBbEQsRUFBNER3RCxZQUE1RCxFQUEwRTtBQUN4RSxVQUFJLENBQUNzQixPQUFPclEsTUFBTTZPLFFBQU4sQ0FBUCxDQUFMLEVBQThCO0FBQzVCLGVBQU8sSUFBSVIsYUFBSixDQUFrQixhQUFhOUMsUUFBYixHQUF3QixJQUF4QixHQUErQndELFlBQS9CLEdBQThDLGdCQUE5QyxJQUFrRSxNQUFNRCxhQUFOLEdBQXNCLDBCQUF4RixDQUFsQixDQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU9QLDJCQUEyQkMsUUFBM0IsQ0FBUDtBQUNEOztBQUVELFdBQVNSLHNCQUFULENBQWdDc0MsVUFBaEMsRUFBNEM7QUFDMUMsYUFBUzlCLFFBQVQsQ0FBa0J4TyxLQUFsQixFQUF5QjZPLFFBQXpCLEVBQW1DQyxhQUFuQyxFQUFrRHZELFFBQWxELEVBQTREd0QsWUFBNUQsRUFBMEU7QUFDeEUsVUFBSUssWUFBWXBQLE1BQU02TyxRQUFOLENBQWhCO0FBQ0EsVUFBSVEsV0FBV0MsWUFBWUYsU0FBWixDQUFmO0FBQ0EsVUFBSUMsYUFBYSxRQUFqQixFQUEyQjtBQUN6QixlQUFPLElBQUloQixhQUFKLENBQWtCLGFBQWE5QyxRQUFiLEdBQXdCLElBQXhCLEdBQStCd0QsWUFBL0IsR0FBOEMsYUFBOUMsR0FBOERNLFFBQTlELEdBQXlFLElBQXpFLElBQWlGLGtCQUFrQlAsYUFBbEIsR0FBa0MsdUJBQW5ILENBQWxCLENBQVA7QUFDRDtBQUNELFdBQUssSUFBSW5NLEdBQVQsSUFBZ0IyTixVQUFoQixFQUE0QjtBQUMxQixZQUFJSCxVQUFVRyxXQUFXM04sR0FBWCxDQUFkO0FBQ0EsWUFBSSxDQUFDd04sT0FBTCxFQUFjO0FBQ1o7QUFDRDtBQUNELFlBQUluSSxRQUFRbUksUUFBUWYsU0FBUixFQUFtQnpNLEdBQW5CLEVBQXdCbU0sYUFBeEIsRUFBdUN2RCxRQUF2QyxFQUFpRHdELGVBQWUsR0FBZixHQUFxQnBNLEdBQXRFLEVBQTJFeUYsb0JBQTNFLENBQVo7QUFDQSxZQUFJSixLQUFKLEVBQVc7QUFDVCxpQkFBT0EsS0FBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU91RywyQkFBMkJDLFFBQTNCLENBQVA7QUFDRDs7QUFFRCxXQUFTTiw0QkFBVCxDQUFzQ29DLFVBQXRDLEVBQWtEO0FBQ2hELGFBQVM5QixRQUFULENBQWtCeE8sS0FBbEIsRUFBeUI2TyxRQUF6QixFQUFtQ0MsYUFBbkMsRUFBa0R2RCxRQUFsRCxFQUE0RHdELFlBQTVELEVBQTBFO0FBQ3hFLFVBQUlLLFlBQVlwUCxNQUFNNk8sUUFBTixDQUFoQjtBQUNBLFVBQUlRLFdBQVdDLFlBQVlGLFNBQVosQ0FBZjtBQUNBLFVBQUlDLGFBQWEsUUFBakIsRUFBMkI7QUFDekIsZUFBTyxJQUFJaEIsYUFBSixDQUFrQixhQUFhOUMsUUFBYixHQUF3QixJQUF4QixHQUErQndELFlBQS9CLEdBQThDLGFBQTlDLEdBQThETSxRQUE5RCxHQUF5RSxJQUF6RSxJQUFpRixrQkFBa0JQLGFBQWxCLEdBQWtDLHVCQUFuSCxDQUFsQixDQUFQO0FBQ0Q7QUFDRDtBQUNBO0FBQ0EsVUFBSXlCLFVBQVVwRSxPQUFPLEVBQVAsRUFBV25NLE1BQU02TyxRQUFOLENBQVgsRUFBNEJ5QixVQUE1QixDQUFkO0FBQ0EsV0FBSyxJQUFJM04sR0FBVCxJQUFnQjROLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQUlKLFVBQVVHLFdBQVczTixHQUFYLENBQWQ7QUFDQSxZQUFJLENBQUN3TixPQUFMLEVBQWM7QUFDWixpQkFBTyxJQUFJOUIsYUFBSixDQUNMLGFBQWE5QyxRQUFiLEdBQXdCLElBQXhCLEdBQStCd0QsWUFBL0IsR0FBOEMsU0FBOUMsR0FBMERwTSxHQUExRCxHQUFnRSxpQkFBaEUsR0FBb0ZtTSxhQUFwRixHQUFvRyxJQUFwRyxHQUNBLGdCQURBLEdBQ21CM00sS0FBS0UsU0FBTCxDQUFlckMsTUFBTTZPLFFBQU4sQ0FBZixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QyxDQURuQixHQUVBLGdCQUZBLEdBRW9CMU0sS0FBS0UsU0FBTCxDQUFlTCxPQUFPd08sSUFBUCxDQUFZRixVQUFaLENBQWYsRUFBd0MsSUFBeEMsRUFBOEMsSUFBOUMsQ0FIZixDQUFQO0FBS0Q7QUFDRCxZQUFJdEksUUFBUW1JLFFBQVFmLFNBQVIsRUFBbUJ6TSxHQUFuQixFQUF3Qm1NLGFBQXhCLEVBQXVDdkQsUUFBdkMsRUFBaUR3RCxlQUFlLEdBQWYsR0FBcUJwTSxHQUF0RSxFQUEyRXlGLG9CQUEzRSxDQUFaO0FBQ0EsWUFBSUosS0FBSixFQUFXO0FBQ1QsaUJBQU9BLEtBQVA7QUFDRDtBQUNGO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBT3VHLDJCQUEyQkMsUUFBM0IsQ0FBUDtBQUNEOztBQUVELFdBQVM2QixNQUFULENBQWdCakIsU0FBaEIsRUFBMkI7QUFDekIsbUJBQWVBLFNBQWYseUNBQWVBLFNBQWY7QUFDRSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDQSxXQUFLLFdBQUw7QUFDRSxlQUFPLElBQVA7QUFDRixXQUFLLFNBQUw7QUFDRSxlQUFPLENBQUNBLFNBQVI7QUFDRixXQUFLLFFBQUw7QUFDRSxZQUFJL0wsTUFBTXFNLE9BQU4sQ0FBY04sU0FBZCxDQUFKLEVBQThCO0FBQzVCLGlCQUFPQSxVQUFVcUIsS0FBVixDQUFnQkosTUFBaEIsQ0FBUDtBQUNEO0FBQ0QsWUFBSWpCLGNBQWMsSUFBZCxJQUFzQi9OLGVBQWUrTixTQUFmLENBQTFCLEVBQXFEO0FBQ25ELGlCQUFPLElBQVA7QUFDRDs7QUFFRCxZQUFJMUMsYUFBYUYsY0FBYzRDLFNBQWQsQ0FBakI7QUFDQSxZQUFJMUMsVUFBSixFQUFnQjtBQUNkLGNBQUlKLFdBQVdJLFdBQVd4SyxJQUFYLENBQWdCa04sU0FBaEIsQ0FBZjtBQUNBLGNBQUlzQixJQUFKO0FBQ0EsY0FBSWhFLGVBQWUwQyxVQUFVMU0sT0FBN0IsRUFBc0M7QUFDcEMsbUJBQU8sQ0FBQyxDQUFDZ08sT0FBT3BFLFNBQVNxRSxJQUFULEVBQVIsRUFBeUJDLElBQWpDLEVBQXVDO0FBQ3JDLGtCQUFJLENBQUNQLE9BQU9LLEtBQUs5TixLQUFaLENBQUwsRUFBeUI7QUFDdkIsdUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixXQU5ELE1BTU87QUFDTDtBQUNBLG1CQUFPLENBQUMsQ0FBQzhOLE9BQU9wRSxTQUFTcUUsSUFBVCxFQUFSLEVBQXlCQyxJQUFqQyxFQUF1QztBQUNyQyxrQkFBSUMsUUFBUUgsS0FBSzlOLEtBQWpCO0FBQ0Esa0JBQUlpTyxLQUFKLEVBQVc7QUFDVCxvQkFBSSxDQUFDUixPQUFPUSxNQUFNLENBQU4sQ0FBUCxDQUFMLEVBQXVCO0FBQ3JCLHlCQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLFNBcEJELE1Bb0JPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNGO0FBQ0UsZUFBTyxLQUFQO0FBMUNKO0FBNENEOztBQUVELFdBQVNDLFFBQVQsQ0FBa0J6QixRQUFsQixFQUE0QkQsU0FBNUIsRUFBdUM7QUFDckM7QUFDQSxRQUFJQyxhQUFhLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsUUFBSUQsVUFBVSxlQUFWLE1BQStCLFFBQW5DLEVBQTZDO0FBQzNDLGFBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsUUFBSSxPQUFPak8sTUFBUCxLQUFrQixVQUFsQixJQUFnQ2lPLHFCQUFxQmpPLE1BQXpELEVBQWlFO0FBQy9ELGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0EsV0FBU21PLFdBQVQsQ0FBcUJGLFNBQXJCLEVBQWdDO0FBQzlCLFFBQUlDLGtCQUFrQkQsU0FBbEIseUNBQWtCQSxTQUFsQixDQUFKO0FBQ0EsUUFBSS9MLE1BQU1xTSxPQUFOLENBQWNOLFNBQWQsQ0FBSixFQUE4QjtBQUM1QixhQUFPLE9BQVA7QUFDRDtBQUNELFFBQUlBLHFCQUFxQjJCLE1BQXpCLEVBQWlDO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGFBQU8sUUFBUDtBQUNEO0FBQ0QsUUFBSUQsU0FBU3pCLFFBQVQsRUFBbUJELFNBQW5CLENBQUosRUFBbUM7QUFDakMsYUFBTyxRQUFQO0FBQ0Q7QUFDRCxXQUFPQyxRQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFdBQVNHLGNBQVQsQ0FBd0JKLFNBQXhCLEVBQW1DO0FBQ2pDLFFBQUksT0FBT0EsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsY0FBYyxJQUF0RCxFQUE0RDtBQUMxRCxhQUFPLEtBQUtBLFNBQVo7QUFDRDtBQUNELFFBQUlDLFdBQVdDLFlBQVlGLFNBQVosQ0FBZjtBQUNBLFFBQUlDLGFBQWEsUUFBakIsRUFBMkI7QUFDekIsVUFBSUQscUJBQXFCNEIsSUFBekIsRUFBK0I7QUFDN0IsZUFBTyxNQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUk1QixxQkFBcUIyQixNQUF6QixFQUFpQztBQUN0QyxlQUFPLFFBQVA7QUFDRDtBQUNGO0FBQ0QsV0FBTzFCLFFBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsV0FBU2Usd0JBQVQsQ0FBa0N4TixLQUFsQyxFQUF5QztBQUN2QyxRQUFJdEQsT0FBT2tRLGVBQWU1TSxLQUFmLENBQVg7QUFDQSxZQUFRdEQsSUFBUjtBQUNFLFdBQUssT0FBTDtBQUNBLFdBQUssUUFBTDtBQUNFLGVBQU8sUUFBUUEsSUFBZjtBQUNGLFdBQUssU0FBTDtBQUNBLFdBQUssTUFBTDtBQUNBLFdBQUssUUFBTDtBQUNFLGVBQU8sT0FBT0EsSUFBZDtBQUNGO0FBQ0UsZUFBT0EsSUFBUDtBQVRKO0FBV0Q7O0FBRUQ7QUFDQSxXQUFTd1EsWUFBVCxDQUFzQlYsU0FBdEIsRUFBaUM7QUFDL0IsUUFBSSxDQUFDQSxVQUFVdFAsV0FBWCxJQUEwQixDQUFDc1AsVUFBVXRQLFdBQVYsQ0FBc0JDLElBQXJELEVBQTJEO0FBQ3pELGFBQU80TSxTQUFQO0FBQ0Q7QUFDRCxXQUFPeUMsVUFBVXRQLFdBQVYsQ0FBc0JDLElBQTdCO0FBQ0Q7O0FBRUQ2TSxpQkFBZVIsY0FBZixHQUFnQ0EsY0FBaEM7QUFDQVEsaUJBQWVxRSxTQUFmLEdBQTJCckUsY0FBM0I7O0FBRUEsU0FBT0EsY0FBUDtBQUNELENBNWdCRCxDOzs7Ozs7OztBQ2pCQTs7Ozs7O0FBTUE7QUFDQTs7QUFDQSxJQUFJc0Usd0JBQXdCbFAsT0FBT2tQLHFCQUFuQztBQUNBLElBQUlqQixpQkFBaUJqTyxPQUFPekQsU0FBUCxDQUFpQjBSLGNBQXRDO0FBQ0EsSUFBSWtCLG1CQUFtQm5QLE9BQU96RCxTQUFQLENBQWlCNlMsb0JBQXhDOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ3RCLEtBQUlBLFFBQVEsSUFBUixJQUFnQkEsUUFBUTlKLFNBQTVCLEVBQXVDO0FBQ3RDLFFBQU0sSUFBSStKLFNBQUosQ0FBYyx1REFBZCxDQUFOO0FBQ0E7O0FBRUQsUUFBT3ZQLE9BQU9zUCxHQUFQLENBQVA7QUFDQTs7QUFFRCxTQUFTRSxlQUFULEdBQTJCO0FBQzFCLEtBQUk7QUFDSCxNQUFJLENBQUN4UCxPQUFPbUssTUFBWixFQUFvQjtBQUNuQixVQUFPLEtBQVA7QUFDQTs7QUFFRDs7QUFFQTtBQUNBLE1BQUlzRixRQUFRLElBQUlDLE1BQUosQ0FBVyxLQUFYLENBQVosQ0FSRyxDQVE2QjtBQUNoQ0QsUUFBTSxDQUFOLElBQVcsSUFBWDtBQUNBLE1BQUl6UCxPQUFPMlAsbUJBQVAsQ0FBMkJGLEtBQTNCLEVBQWtDLENBQWxDLE1BQXlDLEdBQTdDLEVBQWtEO0FBQ2pELFVBQU8sS0FBUDtBQUNBOztBQUVEO0FBQ0EsTUFBSUcsUUFBUSxFQUFaO0FBQ0EsT0FBSyxJQUFJek0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUM1QnlNLFNBQU0sTUFBTUYsT0FBT0csWUFBUCxDQUFvQjFNLENBQXBCLENBQVosSUFBc0NBLENBQXRDO0FBQ0E7QUFDRCxNQUFJMk0sU0FBUzlQLE9BQU8yUCxtQkFBUCxDQUEyQkMsS0FBM0IsRUFBa0NuVCxHQUFsQyxDQUFzQyxVQUFVNkwsQ0FBVixFQUFhO0FBQy9ELFVBQU9zSCxNQUFNdEgsQ0FBTixDQUFQO0FBQ0EsR0FGWSxDQUFiO0FBR0EsTUFBSXdILE9BQU9wTyxJQUFQLENBQVksRUFBWixNQUFvQixZQUF4QixFQUFzQztBQUNyQyxVQUFPLEtBQVA7QUFDQTs7QUFFRDtBQUNBLE1BQUlxTyxRQUFRLEVBQVo7QUFDQSx5QkFBdUJ2RyxLQUF2QixDQUE2QixFQUE3QixFQUFpQ2pCLE9BQWpDLENBQXlDLFVBQVV5SCxNQUFWLEVBQWtCO0FBQzFERCxTQUFNQyxNQUFOLElBQWdCQSxNQUFoQjtBQUNBLEdBRkQ7QUFHQSxNQUFJaFEsT0FBT3dPLElBQVAsQ0FBWXhPLE9BQU9tSyxNQUFQLENBQWMsRUFBZCxFQUFrQjRGLEtBQWxCLENBQVosRUFBc0NyTyxJQUF0QyxDQUEyQyxFQUEzQyxNQUNGLHNCQURGLEVBQzBCO0FBQ3pCLFVBQU8sS0FBUDtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBckNELENBcUNFLE9BQU91TyxHQUFQLEVBQVk7QUFDYjtBQUNBLFNBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUR4USxPQUFPQyxPQUFQLEdBQWlCOFAsb0JBQW9CeFAsT0FBT21LLE1BQTNCLEdBQW9DLFVBQVUrRixNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUM5RSxLQUFJN08sSUFBSjtBQUNBLEtBQUk4TyxLQUFLZixTQUFTYSxNQUFULENBQVQ7QUFDQSxLQUFJRyxPQUFKOztBQUVBLE1BQUssSUFBSTVPLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsVUFBVW9CLE1BQTlCLEVBQXNDbEIsR0FBdEMsRUFBMkM7QUFDMUNILFNBQU90QixPQUFPdUIsVUFBVUUsQ0FBVixDQUFQLENBQVA7O0FBRUEsT0FBSyxJQUFJZCxHQUFULElBQWdCVyxJQUFoQixFQUFzQjtBQUNyQixPQUFJMk0sZUFBZS9OLElBQWYsQ0FBb0JvQixJQUFwQixFQUEwQlgsR0FBMUIsQ0FBSixFQUFvQztBQUNuQ3lQLE9BQUd6UCxHQUFILElBQVVXLEtBQUtYLEdBQUwsQ0FBVjtBQUNBO0FBQ0Q7O0FBRUQsTUFBSXVPLHFCQUFKLEVBQTJCO0FBQzFCbUIsYUFBVW5CLHNCQUFzQjVOLElBQXRCLENBQVY7QUFDQSxRQUFLLElBQUk2QixJQUFJLENBQWIsRUFBZ0JBLElBQUlrTixRQUFRMU4sTUFBNUIsRUFBb0NRLEdBQXBDLEVBQXlDO0FBQ3hDLFFBQUlnTSxpQkFBaUJqUCxJQUFqQixDQUFzQm9CLElBQXRCLEVBQTRCK08sUUFBUWxOLENBQVIsQ0FBNUIsQ0FBSixFQUE2QztBQUM1Q2lOLFFBQUdDLFFBQVFsTixDQUFSLENBQUgsSUFBaUI3QixLQUFLK08sUUFBUWxOLENBQVIsQ0FBTCxDQUFqQjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFFBQU9pTixFQUFQO0FBQ0EsQ0F6QkQsQzs7Ozs7OztBQ2hFQTs7Ozs7OztBQU9BOzs7O0FBRUEsSUFBSXJSLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxNQUFJd0csWUFBWSxtQkFBQTlGLENBQVEsQ0FBUixDQUFoQjtBQUNBLE1BQUk4RyxVQUFVLG1CQUFBOUcsQ0FBUSxFQUFSLENBQWQ7QUFDQSxNQUFJeUcsdUJBQXVCLG1CQUFBekcsQ0FBUSxDQUFSLENBQTNCO0FBQ0EsTUFBSTJRLHFCQUFxQixFQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztBQVdBLFNBQVNsRyxjQUFULENBQXdCbUcsU0FBeEIsRUFBbUNDLE1BQW5DLEVBQTJDakgsUUFBM0MsRUFBcUR1RCxhQUFyRCxFQUFvRTJELFFBQXBFLEVBQThFO0FBQzVFLE1BQUkxUixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsU0FBSyxJQUFJeVIsWUFBVCxJQUF5QkgsU0FBekIsRUFBb0M7QUFDbEMsVUFBSUEsVUFBVXRDLGNBQVYsQ0FBeUJ5QyxZQUF6QixDQUFKLEVBQTRDO0FBQzFDLFlBQUkxSyxLQUFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNGO0FBQ0E7QUFDQVAsb0JBQVUsT0FBTzhLLFVBQVVHLFlBQVYsQ0FBUCxLQUFtQyxVQUE3QyxFQUF5RCxzRUFBc0UsOENBQS9ILEVBQStLNUQsaUJBQWlCLGFBQWhNLEVBQStNdkQsUUFBL00sRUFBeU5tSCxZQUF6TixVQUE4T0gsVUFBVUcsWUFBVixDQUE5TztBQUNBMUssa0JBQVF1SyxVQUFVRyxZQUFWLEVBQXdCRixNQUF4QixFQUFnQ0UsWUFBaEMsRUFBOEM1RCxhQUE5QyxFQUE2RHZELFFBQTdELEVBQXVFLElBQXZFLEVBQTZFbkQsb0JBQTdFLENBQVI7QUFDRCxTQUxELENBS0UsT0FBT3VLLEVBQVAsRUFBVztBQUNYM0ssa0JBQVEySyxFQUFSO0FBQ0Q7QUFDRGxLLGdCQUFRLENBQUNULEtBQUQsSUFBVUEsaUJBQWlCbEUsS0FBbkMsRUFBMEMsb0VBQW9FLCtEQUFwRSxHQUFzSSxpRUFBdEksR0FBME0sZ0VBQTFNLEdBQTZRLGlDQUF2VCxFQUEwVmdMLGlCQUFpQixhQUEzVyxFQUEwWHZELFFBQTFYLEVBQW9ZbUgsWUFBcFksU0FBeVoxSyxLQUF6Wix5Q0FBeVpBLEtBQXpaO0FBQ0EsWUFBSUEsaUJBQWlCbEUsS0FBakIsSUFBMEIsRUFBRWtFLE1BQU1hLE9BQU4sSUFBaUJ5SixrQkFBbkIsQ0FBOUIsRUFBc0U7QUFDcEU7QUFDQTtBQUNBQSw2QkFBbUJ0SyxNQUFNYSxPQUF6QixJQUFvQyxJQUFwQzs7QUFFQSxjQUFJeUYsUUFBUW1FLFdBQVdBLFVBQVgsR0FBd0IsRUFBcEM7O0FBRUFoSyxrQkFBUSxLQUFSLEVBQWUsc0JBQWYsRUFBdUM4QyxRQUF2QyxFQUFpRHZELE1BQU1hLE9BQXZELEVBQWdFeUYsU0FBUyxJQUFULEdBQWdCQSxLQUFoQixHQUF3QixFQUF4RjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ3TSxPQUFPQyxPQUFQLEdBQWlCMEssY0FBakIsQzs7Ozs7Ozs7QUMxREE7Ozs7Ozs7QUFPQTs7QUFFQSxJQUFJckYsZ0JBQWdCLG1CQUFBcEYsQ0FBUSxDQUFSLENBQXBCO0FBQ0EsSUFBSThGLFlBQVksbUJBQUE5RixDQUFRLENBQVIsQ0FBaEI7QUFDQSxJQUFJeUcsdUJBQXVCLG1CQUFBekcsQ0FBUSxDQUFSLENBQTNCOztBQUVBRixPQUFPQyxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsV0FBU2tSLElBQVQsQ0FBYzVTLEtBQWQsRUFBcUI2TyxRQUFyQixFQUErQkMsYUFBL0IsRUFBOEN2RCxRQUE5QyxFQUF3RHdELFlBQXhELEVBQXNFQyxNQUF0RSxFQUE4RTtBQUM1RSxRQUFJQSxXQUFXNUcsb0JBQWYsRUFBcUM7QUFDbkM7QUFDQTtBQUNEO0FBQ0RYLGNBQ0UsS0FERixFQUVFLHlGQUNBLCtDQURBLEdBRUEsZ0RBSkY7QUFNRDtBQUNEbUwsT0FBS2hFLFVBQUwsR0FBa0JnRSxJQUFsQjtBQUNBLFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsV0FBT0QsSUFBUDtBQUNEO0FBQ0Q7QUFDQTtBQUNBLE1BQUloRyxpQkFBaUI7QUFDbkJ0SCxXQUFPc04sSUFEWTtBQUVuQnJKLFVBQU1xSixJQUZhO0FBR25CaEosVUFBTWdKLElBSGE7QUFJbkI5RixZQUFROEYsSUFKVztBQUtuQnRSLFlBQVFzUixJQUxXO0FBTW5CakosWUFBUWlKLElBTlc7QUFPbkI3RixZQUFRNkYsSUFQVzs7QUFTbkI1RixTQUFLNEYsSUFUYztBQVVuQjFGLGFBQVMyRixPQVZVO0FBV25CekYsYUFBU3dGLElBWFU7QUFZbkJ0RixnQkFBWXVGLE9BWk87QUFhbkIvRyxVQUFNOEcsSUFiYTtBQWNuQm5GLGNBQVVvRixPQWRTO0FBZW5CbEYsV0FBT2tGLE9BZlk7QUFnQm5CaEYsZUFBV2dGLE9BaEJRO0FBaUJuQjlFLFdBQU84RSxPQWpCWTtBQWtCbkI1RSxXQUFPNEU7QUFsQlksR0FBckI7O0FBcUJBakcsaUJBQWVSLGNBQWYsR0FBZ0NyRixhQUFoQztBQUNBNkYsaUJBQWVxRSxTQUFmLEdBQTJCckUsY0FBM0I7O0FBRUEsU0FBT0EsY0FBUDtBQUNELENBNUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBO0lBQ3FCa0csSTs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSDtBQUNBLGlCQUFLelMsYUFBTDtBQUNBLGlCQUFLMFMsZ0JBQUwsR0FBd0IsS0FBS0MsV0FBTCxDQUFpQjdTLElBQWpCLENBQXNCLElBQXRCLENBQXhCO0FBQ0EsaUJBQUs4UyxjQUFMLEdBQXNCLEtBQUtDLFNBQUwsQ0FBZS9TLElBQWYsQ0FBb0IsSUFBcEIsQ0FBdEI7QUFDQSxpQkFBS3lLLEtBQUwsR0FBYTtBQUNUekgsc0JBQU0sQ0FERztBQUVUQyxxQkFBSztBQUZJLGFBQWI7QUFJSDs7OzRDQUVtQjtBQUFBLHlCQUNtQyxLQUFLcEQsS0FEeEM7QUFBQSxnQkFDWG1ULFFBRFcsVUFDWEEsUUFEVztBQUFBLGdCQUNEQyxJQURDLFVBQ0RBLElBREM7QUFBQSxnQkFDS0MsUUFETCxVQUNLQSxRQURMO0FBQUEsZ0JBQ2VDLE9BRGYsVUFDZUEsT0FEZjtBQUFBLGdCQUN3QkMsT0FEeEIsVUFDd0JBLE9BRHhCO0FBQUEsd0NBRWtCLEtBQUtDLE9BQUwsQ0FBYUMsYUFGL0I7QUFBQSxnQkFFWEMsV0FGVyx5QkFFWEEsV0FGVztBQUFBLGdCQUVFQyxZQUZGLHlCQUVFQSxZQUZGOzs7QUFJaEIsZ0JBQUlSLGFBQWEsTUFBakIsRUFBeUI7O0FBRXpCLGdCQUFJQSxhQUFhLFVBQWpCLEVBQTZCO0FBQ3pCLHFCQUFLRyxPQUFMLEdBQWVELGFBQWEsR0FBYixHQUFvQnZJLEtBQUs4SSxLQUFMLENBQVdGLGNBQWNKLE9BQWQsR0FBd0IsR0FBbkMsQ0FBcEIsR0FBK0RBLE9BQTlFO0FBQ0EscUJBQUtDLE9BQUwsR0FBZUYsYUFBYSxHQUFiLEdBQW9CdkksS0FBSzhJLEtBQUwsQ0FBV0YsY0FBY0gsT0FBZCxHQUF3QixHQUFuQyxDQUFwQixHQUErREEsT0FBOUU7O0FBRUEscUJBQUs1SCxRQUFMLENBQWM7QUFDVnhJLDBCQUFNa1EsYUFBYSxHQUFiLEdBQW9CdkksS0FBSzhJLEtBQUwsQ0FBV0YsY0FBY04sSUFBZCxHQUFxQixHQUFoQyxDQUFwQixHQUE0REE7QUFEeEQsaUJBQWQ7QUFHSDs7QUFFRCxnQkFBSUQsYUFBYSxZQUFqQixFQUErQjtBQUMzQixxQkFBS0csT0FBTCxHQUFlRCxhQUFhLEdBQWIsR0FBb0J2SSxLQUFLOEksS0FBTCxDQUFXRCxlQUFlTCxPQUFmLEdBQXlCLEdBQXBDLENBQXBCLEdBQWdFQSxPQUEvRTtBQUNBLHFCQUFLQyxPQUFMLEdBQWVGLGFBQWEsR0FBYixHQUFvQnZJLEtBQUs4SSxLQUFMLENBQVdELGVBQWVKLE9BQWYsR0FBeUIsR0FBcEMsQ0FBcEIsR0FBZ0VBLE9BQS9FOztBQUVBLHFCQUFLNUgsUUFBTCxDQUFjO0FBQ1Z2SSx5QkFBS2lRLGFBQWEsR0FBYixHQUFvQnZJLEtBQUs4SSxLQUFMLENBQVdELGVBQWVQLElBQWYsR0FBc0IsR0FBakMsQ0FBcEIsR0FBNkRBO0FBRHhELGlCQUFkO0FBR0g7QUFDSjs7OytDQUVzQjtBQUNuQixpQkFBS1MsV0FBTDtBQUNIOzs7a0NBRVNuVSxDLEVBQUc7QUFDVCtLLHFCQUFTcUosbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS2YsZ0JBQS9DO0FBQ0g7OzttQ0FFVXJULEMsRUFBRztBQUNWLGlCQUFLd1QsU0FBTCxDQUFleFQsQ0FBZjtBQUNIOzs7b0NBRVdBLEMsRUFBRztBQUNYK0sscUJBQVNzSixnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLaEIsZ0JBQTVDO0FBQ0F0SSxxQkFBU3NKLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtkLGNBQTFDO0FBQ0g7OztxQ0FFWXZULEMsRUFBRztBQUNaLGlCQUFLbVUsV0FBTCxDQUFpQm5VLENBQWpCO0FBQ0g7OztvQ0FFV0EsQyxFQUFHO0FBQUEsZ0JBQ0pzVSxPQURJLEdBQ2dCdFUsQ0FEaEIsQ0FDSnNVLE9BREk7QUFBQSxnQkFDS0MsT0FETCxHQUNnQnZVLENBRGhCLENBQ0t1VSxPQURMO0FBQUEsZ0JBRUpYLE9BRkksR0FFZ0IsSUFGaEIsQ0FFSkEsT0FGSTtBQUFBLGdCQUVLQyxPQUZMLEdBRWdCLElBRmhCLENBRUtBLE9BRkw7QUFBQSxnQkFHTHBRLElBSEssR0FHRTZRLFVBQVVWLE9BQVYsR0FBb0JBLE9BQXBCLEdBQStCVSxVQUFVVCxPQUFWLEdBQW9CQSxPQUFwQixHQUE4QlMsT0FIL0Q7QUFBQSxnQkFJTDVRLEdBSkssR0FJQzZRLFVBQVVYLE9BQVYsR0FBb0JBLE9BQXBCLEdBQStCVyxVQUFVVixPQUFWLEdBQW9CQSxPQUFwQixHQUE4QlUsT0FKOUQ7OztBQU1YLGlCQUFLdEksUUFBTCxDQUFjLEVBQUN4SSxVQUFELEVBQU9DLFFBQVAsRUFBZDtBQUNIOzs7b0NBRVcxRCxDLEVBQUc7QUFDWCxpQkFBS3NULFdBQUwsQ0FBaUJ0VCxDQUFqQjtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSwwQkFDcUUsS0FBS00sS0FEMUU7QUFBQSxnQkFDRWMsU0FERixXQUNFQSxTQURGO0FBQUEsZ0JBQ2FxSSxRQURiLFdBQ2FBLFFBRGI7QUFBQSxnQkFDdUJnSyxRQUR2QixXQUN1QkEsUUFEdkI7QUFBQSxnQkFDaUNlLFNBRGpDLFdBQ2lDQSxTQURqQztBQUFBLGdCQUM0Q0MsT0FENUMsV0FDNENBLE9BRDVDO0FBQUEsZ0JBQ3FEQyxZQURyRCxXQUNxREEsWUFEckQ7QUFBQSxnQkFFRHZULEdBRkMsR0FFSyx1QkFBVyxLQUFLQyxTQUFoQixRQUE4QnFTLGFBQWEsVUFBYixxQkFBNEMsRUFBMUUsRUFGTDtBQUFBLGdCQUdEa0IsS0FIQyxHQUdPO0FBQ0pGLHlCQUFTQSxPQURMO0FBRUpHLCtCQUFlSjtBQUZYLGFBSFA7QUFBQSxnQkFPREssYUFQQyxHQU9lO0FBQ1pDLHdCQUFRO0FBREksYUFQZjtBQUFBLGdCQVVEcEwsVUFWQyxHQVVZK0osYUFBYSxVQVZ6Qjs7O0FBWUQsZ0JBQUlBLGFBQWEsVUFBakIsRUFBNkI7QUFDekJuUix1QkFBT21LLE1BQVAsQ0FBY29JLGFBQWQsRUFBNkI7QUFDekJwUiwwQkFBTSxLQUFLeUgsS0FBTCxDQUFXekgsSUFBWCxHQUFrQmlSLFlBREM7QUFFekJoUix5QkFBSyxDQUZvQjtBQUd6QnFSLDJCQUFPO0FBSGtCLGlCQUE3QjtBQUtBelMsdUJBQU9tSyxNQUFQLENBQWNrSSxLQUFkLEVBQXFCO0FBQ2pCcFIsMkJBQU8sS0FBSzJILEtBQUwsQ0FBV3pILElBREQ7QUFFakJ1Uiw4QkFBVSxLQUFLOUosS0FBTCxDQUFXekg7QUFGSixpQkFBckI7QUFJSDs7QUFFRCxnQkFBSWdRLGFBQWEsWUFBakIsRUFBK0I7QUFDM0JuUix1QkFBT21LLE1BQVAsQ0FBY29JLGFBQWQsRUFBNkI7QUFDekJuUix5QkFBSyxLQUFLdUksUUFBTCxDQUFjdkksR0FBZCxHQUFvQmdSLFlBREE7QUFFekJqUiwwQkFBTTtBQUZtQixpQkFBN0I7QUFJQW5CLHVCQUFPbUssTUFBUCxDQUFja0ksS0FBZCxFQUFxQjtBQUNqQm5SLDRCQUFRLEtBQUswSCxLQUFMLENBQVd4SCxHQURGO0FBRWpCdVIsK0JBQVcsS0FBSy9KLEtBQUwsQ0FBV3hIO0FBRkwsaUJBQXJCO0FBSUg7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLDJCQUFLLEtBQUssYUFBQ3dSLElBQUQsRUFBVTtBQUFFLCtCQUFLcEIsT0FBTCxHQUFlb0IsSUFBZjtBQUFzQjtBQUE1QyxtQkFDUSxLQUFLNVUsS0FEYixJQUNvQixPQUFPcVUsS0FEM0IsRUFDa0MsU0FBUyxLQUFLN1YsV0FEaEQ7QUFFSSwrQkFBV3FDLEdBRmY7QUFHU3NJLHdCQUhUO0FBSVNnSyw2QkFBYSxNQUFiLEdBQXNCO0FBQ0MsMkJBQU9vQixhQURSO0FBRUMsaUNBQWEsS0FBSy9WLFdBRm5CO0FBR0MsK0JBQVcsS0FBS0EsV0FIakI7QUFJQyxrQ0FBYyxLQUFLQSxXQUpwQjtBQUtDLGdDQUFZLEtBQUtBLFdBTGxCO0FBTUMsZ0NBQVk0SyxVQU5iLEdBQXRCLEdBTW9EO0FBVjdELGFBREo7QUFjSDs7Ozs7O2tCQXhIZ0IwSixJOzs7QUEySHJCQSxLQUFLekosWUFBTCxHQUFvQjtBQUNoQnZJLGVBQVcsRUFESztBQUVoQnFTLGNBQVUsTUFGTTtBQUdoQkMsVUFBTSxFQUhVO0FBSWhCRyxhQUFTLEVBSk87QUFLaEJELGFBQVMsRUFMTztBQU1oQkQsY0FBVSxHQU5NO0FBT2hCYyxhQUFTLE9BUE87QUFRaEJELGVBQVcsUUFSSztBQVNoQkUsa0JBQWM7QUFURSxDQUFwQjs7QUFZQXRCLEtBQUt4SixTQUFMLEdBQWlCO0FBQ2J4SSxlQUFXLG9CQUFVNkksTUFEUjtBQUVid0osY0FBVSxvQkFBVXhKLE1BRlA7QUFHYnlKLFVBQU0sb0JBQVV0RyxNQUhIO0FBSWJ5RyxhQUFTLG9CQUFVekcsTUFKTjtBQUtid0csYUFBUyxvQkFBVXhHLE1BTE47QUFNYnFILGFBQVMsb0JBQVV4SyxNQU5OO0FBT2J1SyxlQUFXLG9CQUFVdkssTUFQUjtBQVFieUssa0JBQWMsb0JBQVV0SDtBQVJYLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTStILFE7Ozs7Ozs7Ozs7OytCQUNLO0FBQ0gsaUJBQUtqSyxLQUFMLEdBQWE7QUFDVFYsd0JBQVE7QUFEQyxhQUFiO0FBR0g7Ozs0Q0FFbUI7QUFDaEIsaUJBQUt5QixRQUFMLENBQWM7QUFDVnpCLHdCQUFRLEtBQUtsSyxLQUFMLENBQVdrSztBQURULGFBQWQ7QUFHSDs7O2dDQUVPeEssQyxFQUFHO0FBQ1BBLGNBQUVvVixlQUFGO0FBQ0EsZ0JBQUksT0FBTyxLQUFLOVUsS0FBTCxDQUFXbUosUUFBbEIsS0FBK0IsV0FBL0IsSUFBOEN6SixFQUFFd1MsTUFBRixDQUFTNkMsUUFBVCxLQUFzQixHQUF4RSxFQUE2RTtBQUN6RSxxQkFBS3BKLFFBQUwsQ0FBYztBQUNWekIsNEJBQVEsQ0FBQyxLQUFLVSxLQUFMLENBQVdWO0FBRFYsaUJBQWQ7QUFHSDs7QUFFRCxnQkFBSSxPQUFPLEtBQUtsSyxLQUFMLENBQVcrTCxlQUFsQixLQUFzQyxXQUExQyxFQUF1RDtBQUNuRCxxQkFBSy9MLEtBQUwsQ0FBVytMLGVBQVgsQ0FBMkIsS0FBSy9MLEtBQWhDLEVBQXVDLEtBQUs0SyxLQUE1QztBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBLHlCQUN1RCxLQUFLNUssS0FENUQ7QUFBQSxnQkFDQThKLEVBREEsVUFDQUEsRUFEQTtBQUFBLGdCQUNJQyxLQURKLFVBQ0lBLEtBREo7QUFBQSxnQkFDV0MsR0FEWCxVQUNXQSxHQURYO0FBQUEsZ0JBQ2dCYixRQURoQixVQUNnQkEsUUFEaEI7QUFBQSxnQkFDMEI0QyxlQUQxQixVQUMwQkEsZUFEMUI7QUFBQSxnQkFDMkNkLFFBRDNDLFVBQzJDQSxRQUQzQztBQUFBLGdCQUVEZixNQUZDLEdBRVEsS0FBS1UsS0FBTCxDQUFXVixNQUZuQjs7O0FBSUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFJLEtBQUtKLEVBQVQ7QUFDSSwrQkFBWW1CLGFBQWFuQixFQUFiLElBQW1CLENBQUNYLFFBQXJCLEdBQWlDLEtBQUtuSixLQUFMLENBQVdnVixVQUE1QyxHQUEwRDlLLFNBQVMsS0FBS2xLLEtBQUwsQ0FBV2lWLFlBQXBCLEdBQW1DLEtBQUtqVixLQUFMLENBQVdpVixZQUR2SDtBQUVJLDZCQUFTLEtBQUt6VyxXQUZsQjtBQUdJO0FBQUE7QUFBQSxzQkFBRyxNQUFNd0wsTUFBTUEsR0FBTixHQUFZLG9CQUFyQjtBQUE0Q0Q7QUFBNUMsaUJBSEo7QUFJS1osNEJBQVllLE1BQVosR0FBcUI7QUFBQTtBQUFBO0FBQUtmLDZCQUFTMUssR0FBVCxDQUFhO0FBQUEsK0JBQUssOEJBQUMsUUFBRCxhQUFVLFVBQVV3TSxRQUFwQixFQUE4QixpQkFBaUJjLGVBQS9DLElBQW9FbEUsQ0FBcEUsRUFBTDtBQUFBLHFCQUFiO0FBQUwsaUJBQXJCLEdBQThIO0FBSm5JLGFBREo7QUFRSDs7Ozs7O0FBR0xnTixTQUFTeEwsWUFBVCxHQUF3QjtBQUNwQjJMLGdCQUFZLFNBRFE7QUFFcEJFLHdCQUFvQixRQUZBO0FBR3BCRCxrQkFBYztBQUhNLENBQXhCOztBQU1BSixTQUFTdkwsU0FBVDtBQUNJUSxRQUFJLG9CQUFVSCxNQURsQjtBQUVJSSxXQUFPLG9CQUFVSixNQUZyQjtBQUdJb0MscUJBQWlCLG9CQUFVbkMsSUFIL0I7QUFJSUksU0FBSyxvQkFBVUwsTUFKbkI7QUFLSVIsY0FBVSxvQkFBVTdELEtBTHhCO0FBTUk0RSxZQUFRLG9CQUFVWCxJQU50QjtBQU9JNEwsYUFBUyxvQkFBVXhMLE1BUHZCO0FBUUlxTCxnQkFBWSxvQkFBVXJMLE1BUjFCO0FBU0lzTCxrQkFBYyxvQkFBVXRMO0FBVDVCLG1CQVVrQixvQkFBVUEsTUFWNUI7O0lBYXFCeUwsUTs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSCxpQkFBSy9VLGFBQUwsR0FBcUIsVUFBckI7QUFDSDs7O3dDQUNlZ1YsUSxFQUFVekssSyxFQUFPO0FBQUEsZ0JBQ3hCZCxFQUR3QixHQUNSdUwsUUFEUSxDQUN4QnZMLEVBRHdCO0FBQUEsZ0JBQ3BCWCxRQURvQixHQUNSa00sUUFEUSxDQUNwQmxNLFFBRG9CO0FBQUEsZ0JBRXhCNEMsZUFGd0IsR0FFTCxLQUFLL0wsS0FGQSxDQUV4QitMLGVBRndCO0FBQUEsZ0JBR3hCN0IsTUFId0IsR0FHZFUsS0FIYyxDQUd4QlYsTUFId0I7O0FBSzdCOztBQUNBNkIsNEJBQWdCc0osUUFBaEIsRUFBMEJ6SyxLQUExQjs7QUFFQTtBQUNBLGdCQUFJLENBQUN6QixRQUFELElBQWEsS0FBS25KLEtBQUwsQ0FBV2lMLFFBQVgsS0FBd0IsQ0FBQyxDQUExQyxFQUE2QztBQUN6QyxxQkFBS1UsUUFBTCxDQUFjLEVBQUVWLFVBQVVuQixFQUFaLEVBQWQ7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUEsNkJBQVMsS0FBSzlKLEtBQWQsSUFBcUIsV0FBVyxLQUFLYyxTQUFyQztBQUNJO0FBQUE7QUFBQTtBQUFLLHlCQUFLZCxLQUFMLENBQVdzVixHQUFYLENBQWU3VyxHQUFmLENBQW1CO0FBQUEsK0JBQUssOEJBQUMsUUFBRCxhQUFVLFVBQVUsT0FBS3VCLEtBQUwsQ0FBV2lMLFFBQS9CLEVBQXlDLGlCQUFpQixPQUFLYyxlQUFMLENBQXFCNUwsSUFBckIsUUFBMUQsSUFBK0YwSCxDQUEvRixFQUFMO0FBQUEscUJBQW5CO0FBQUw7QUFESixhQURKO0FBS0g7Ozs7OztrQkF4QmdCdU4sUTs7O0FBNEJyQkEsU0FBUzlMLFNBQVQsR0FBcUI7QUFDakJ5QyxxQkFBaUIsb0JBQVVuQyxJQURWO0FBRWpCOUksZUFBVyxvQkFBVTZJO0FBRkosQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI0TCxNOzs7Ozs7Ozs7OzsrQkFDVjtBQUNILGlCQUFLbFYsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBTWdVLFFBQVE7QUFDVnBSLHVCQUFPLE1BREc7QUFFVkMsd0JBQVE7QUFGRSxhQUFkOztBQUtBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxPQUFPbVIsS0FBWixFQUFtQixrQkFBZ0IsS0FBS3JVLEtBQUwsQ0FBV2lMLFFBQTlDLEVBQXdELFdBQVcsS0FBS25LLFNBQXhFO0FBQ0sscUJBQUtkLEtBQUwsQ0FBV3NWLEdBQVgsQ0FBZTdXLEdBQWYsQ0FBbUI7QUFBQSwyQkFDaEI7QUFBQTtBQUFBLDBCQUFhLFdBQVdvSixFQUFFaUMsRUFBRixLQUFTLE9BQUs5SixLQUFMLENBQVdpTCxRQUFwQixHQUErQixPQUFLakwsS0FBTCxDQUFXaUwsUUFBMUMsR0FBcUQsUUFBN0U7QUFDS3BELDBCQUFFb0M7QUFEUCxxQkFEZ0I7QUFBQSxpQkFBbkI7QUFETCxhQURKO0FBU0g7Ozs7OztrQkFwQmdCc0wsTTs7O0FBdUJyQkEsT0FBT2xNLFlBQVAsR0FBc0I7QUFDbEJpTSxTQUFLO0FBRGEsQ0FBdEI7O0FBSUFDLE9BQU9qTSxTQUFQLEdBQW1CO0FBQ2ZnTSxTQUFLLG9CQUFVaFEsS0FEQTtBQUVmMkYsY0FBVSxvQkFBVXRCO0FBRkwsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI2TCxXOzs7Ozs7Ozs7OzsrQkFDVjtBQUNILGlCQUFLblYsYUFBTDtBQUNIOzs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUEsNkJBQVMsS0FBS0wsS0FBZCxJQUFxQixXQUFXLEtBQUtjLFNBQXJDO0FBQ0sscUJBQUtkLEtBQUwsQ0FBV21KO0FBRGhCLGFBREo7QUFLSDs7Ozs7O2tCQVZnQnFNLFc7OztBQWFyQkEsWUFBWWxNLFNBQVosR0FBd0I7QUFDcEJ4SSxlQUFXLG9CQUFVNkk7QUFERCxDQUF4QixDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUI4TCxrQjs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSDtBQUNBLGlCQUFLcFYsYUFBTDtBQUNIOzs7aUNBRVE7QUFBQSx5QkFDc0QsS0FBS0wsS0FEM0Q7QUFBQSxnQkFDRWtMLGVBREYsVUFDRUEsZUFERjtBQUFBLGdCQUNtQkMsZUFEbkIsVUFDbUJBLGVBRG5CO0FBQUEsZ0JBQ29DQyxjQURwQyxVQUNvQ0EsY0FEcEM7OztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUt0SyxTQUFyQjtBQUNJO0FBQUE7QUFBQSxzQkFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxpQkFESjtBQUFBO0FBQytEO0FBQUE7QUFBQTtBQUFPb0s7QUFBUCxpQkFEL0Q7QUFFSTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUUrRDtBQUFBO0FBQUE7QUFBT0M7QUFBUCxpQkFGL0Q7QUFHSTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUc4RDtBQUFBO0FBQUE7QUFBT0M7QUFBUDtBQUg5RCxhQURKO0FBT0g7Ozs7OztrQkFoQmdCcUssa0I7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtJQUNxQkMsTzs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSCxpQkFBS0MsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCeFYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxpQkFBS3lWLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnpWLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsaUJBQUswVixVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0IxVixJQUFoQixDQUFxQixJQUFyQixDQUFsQjs7QUFFQSxpQkFBS3lLLEtBQUwsR0FBYSxLQUFLa0wsY0FBTCxDQUFvQjtBQUM3QkMseUJBQVM7QUFDTEMsNEJBQVE7QUFESCxpQkFEb0I7QUFJN0JDLHlCQUFTO0FBQ0xELDRCQUFRO0FBREgsaUJBSm9CO0FBTzdCRSxzQkFBTTtBQUNGQyw0QkFBUTtBQUNKQyxnQ0FBUTtBQURKLHFCQUROO0FBSUZDLDRCQUFRO0FBQ0pDLDhCQUFNO0FBQ0ZwTSxvQ0FBUTtBQUROO0FBREYscUJBSk47QUFTRmtNLDRCQUFRO0FBVE47QUFQdUIsYUFBcEIsQ0FBYjtBQW1CSDs7O3dDQUVlMVcsQyxFQUFHeVcsTSxFQUFRO0FBQ3ZCLGlCQUFLeEssUUFBTCxDQUFjLHFDQUFpQndLLE9BQU9uVyxLQUFQLENBQWF1VyxNQUE5QixDQUFkO0FBQ0g7O0FBRUQ7Ozs7b0NBQ1k3VyxDLEVBQUc2VyxNLEVBQVE7QUFDbkIsaUJBQUs1SyxRQUFMLENBQWMscUNBQWlCNEssT0FBT3ZXLEtBQVAsQ0FBYVMsV0FBOUIsRUFBMkMsS0FBM0MsQ0FBZDtBQUNIOztBQUVEOzs7O21DQUNXZixDLEVBQUc2VyxNLEVBQVE7QUFDbEIsaUJBQUs1SyxRQUFMLENBQWMscUNBQWlCNEssT0FBT3ZXLEtBQVAsQ0FBYVMsV0FBOUIsRUFBMkMsSUFBM0MsQ0FBZDtBQUNIOzs7NENBRW1CO0FBQ2hCLG1CQUFPLEtBQUttSyxLQUFMLENBQVc0TCxhQUFYLElBQTRCLEtBQUs1TCxLQUFMLENBQVc2TCxhQUE5QztBQUNIOzs7aUNBRVE7QUFDTCxnQkFBTXBDLFFBQU87QUFDVHBSLHVCQUFPLE1BREU7QUFFVEMsd0JBQVE7QUFGQyxhQUFiOztBQUtBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxPQUFPbVIsS0FBWjtBQUNJLGtFQUFRLFFBQU8sU0FBZixFQUF5QixXQUFXLEtBQUtzQixlQUF6QyxFQUEwRCxNQUFLLGdCQUEvRCxHQURKO0FBRUksa0VBQVEsUUFBTyxTQUFmLEVBQXlCLFdBQVcsS0FBS0EsZUFBekMsRUFBMEQsTUFBSyxnQkFBL0QsR0FGSjtBQUdJLGtFQUFRLFFBQVEsS0FBSy9LLEtBQUwsQ0FBVzRMLGFBQTNCLEVBQTBDLGFBQVksU0FBdEQsRUFBZ0UsT0FBTSxTQUF0RSxFQUFnRixNQUFNLEtBQUtYLFVBQTNGLEVBQXVHLE9BQU8sS0FBS0QsV0FBbkgsR0FISjtBQUlJLGtFQUFRLFFBQVEsS0FBS2hMLEtBQUwsQ0FBVzZMLGFBQTNCLEVBQTBDLGFBQVksU0FBdEQsRUFBZ0UsT0FBTSxTQUF0RSxFQUFnRixNQUFNLEtBQUtaLFVBQTNGLEVBQXVHLE9BQU8sS0FBS0QsV0FBbkgsRUFBZ0ksa0JBQWtCLEtBQWxKO0FBSkosYUFESjtBQVFIOzs7Ozs7a0JBM0RnQkYsTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtJQUNhZ0IsVSxXQUFBQSxVOzs7Ozs7Ozs7OzsrQkFJRjtBQUNIO0FBQ0EsaUJBQUtyVyxhQUFMO0FBQ0EsaUJBQUtzVyxXQUFMLEdBQW1CLEtBQUtDLG1CQUFMLENBQXlCLGVBQXpCLENBQW5CO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUIsS0FBS0QsbUJBQUwsQ0FBeUIsa0JBQXpCLENBQXJCO0FBQ0EsaUJBQUtFLFNBQUwsR0FBaUIsS0FBS0YsbUJBQUwsQ0FBeUIsYUFBekIsQ0FBakI7QUFDQSxpQkFBS0csV0FBTCxHQUFtQixLQUFLSCxtQkFBTCxDQUF5QixlQUF6QixDQUFuQjtBQUNBLGlCQUFLSSxjQUFMLEdBQXNCLEtBQUtKLG1CQUFMLENBQXlCLG1CQUF6QixDQUF0QjtBQUNBLGlCQUFLSyxlQUFMLEdBQXVCLEtBQUtMLG1CQUFMLENBQXlCLG9CQUF6QixDQUF2QjtBQUNBO0FBQ0EsaUJBQUtNLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCL1csSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDQSxpQkFBS2dYLG1CQUFMLEdBQTJCLEtBQUtBLG1CQUFMLENBQXlCaFgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDQSxpQkFBS2lYLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCalgsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFFSDs7O2tEQUV5QmtYLFMsRUFBVztBQUFBLHlCQUNnQixLQUFLclgsS0FEckI7QUFBQSxnQkFDekJzWCxJQUR5QixVQUN6QkEsSUFEeUI7QUFBQSxnQkFDbkJDLEtBRG1CLFVBQ25CQSxLQURtQjtBQUFBLGdCQUNaQyxnQkFEWSxVQUNaQSxnQkFEWTtBQUFBLGdCQUNNeEIsTUFETixVQUNNQSxNQUROO0FBQUEsZ0JBRTdCeUIsUUFGNkIsR0FFbEJKLFVBQVVyQixNQUFWLEtBQXFCLElBQXJCLElBQTZCQSxXQUFXLEtBRnRCO0FBQUEsZ0JBRzdCMEIsU0FINkIsR0FHakJMLFVBQVVyQixNQUFWLEtBQXFCLEtBQXJCLElBQThCQSxXQUFXLElBSHhCOzs7QUFLakMsZ0JBQUl5QixRQUFKLEVBQWU7QUFDWEgscUJBQUssRUFBTCxFQUFTLElBQVQ7QUFDSDs7QUFFRCxnQkFBSUksU0FBSixFQUFlO0FBQ1hILHNCQUFNLEVBQU4sRUFBVSxJQUFWO0FBQ0g7QUFDSjs7OzBDQUVpQjdYLEMsRUFBRztBQUNqQixpQkFBS00sS0FBTCxDQUFXdVgsS0FBWCxDQUFpQjdYLENBQWpCLEVBQW9CLElBQXBCO0FBQ0FBLGNBQUVvVixlQUFGO0FBQ0g7OzsyQ0FFa0JwVixDLEVBQUc7QUFBQSxnQkFDWGlZLFFBRFcsR0FDQyxLQUFLM1gsS0FETixDQUNYMlgsUUFEVzs7O0FBR2xCLGlCQUFLUCxpQkFBTCxDQUF1QjFYLENBQXZCOztBQUVBLGdCQUFJaVksUUFBSixFQUFjO0FBQ1ZBLHlCQUFTalksQ0FBVCxFQUFZLElBQVo7QUFDSDtBQUNKOzs7NENBRW1CQSxDLEVBQUc7QUFBQSxnQkFDWmtZLFNBRFksR0FDQyxLQUFLNVgsS0FETixDQUNaNFgsU0FEWTs7O0FBR25CLGdCQUFJQSxTQUFKLEVBQWU7QUFDWEEsMEJBQVVsWSxDQUFWLEVBQWEsSUFBYjtBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBLDBCQUNnRSxLQUFLTSxLQURyRTtBQUFBLGdCQUNFNlgsR0FERixXQUNFQSxHQURGO0FBQUEsZ0JBQ09yUyxLQURQLFdBQ09BLEtBRFA7QUFBQSxnQkFDY3NTLElBRGQsV0FDY0EsSUFEZDtBQUFBLGdCQUNvQkMsV0FEcEIsV0FDb0JBLFdBRHBCO0FBQUEsZ0JBQ2lDQyxZQURqQyxXQUNpQ0EsWUFEakM7QUFBQSxnQkFDK0NDLGFBRC9DLFdBQytDQSxhQUQvQztBQUFBLGdCQUVHcFgsR0FGSCxHQUVTLHVCQUFXLEtBQUtDLFNBQWhCLEVBQTJCK1csR0FBM0IsRUFBaUMsQ0FBQyxLQUFLN1gsS0FBTCxDQUFXZ1csTUFBWixHQUFxQixRQUFyQixHQUFnQyxFQUFqRSxDQUZUOzs7QUFJTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBV25WLEdBQWhCO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVcsS0FBSzhWLFdBQXJCO0FBQ0tuUix5QkFETDtBQUVJLHNFQUFRLE9BQU95UyxhQUFmLEVBQThCLE1BQU1BLGFBQXBDLEVBQW1ELFdBQVcsS0FBS2IsaUJBQW5FLEVBQXNGLFdBQVcsS0FBS1AsYUFBdEc7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQSxzQkFBSyxXQUFXLEtBQUtDLFNBQXJCO0FBQ0tnQjtBQURMLGlCQUxKO0FBUUk7QUFBQTtBQUFBLHNCQUFLLFdBQVcsS0FBS2YsV0FBckI7QUFDSSxzRUFBUSxXQUFXLEtBQUtHLGtCQUF4QixFQUE0QyxNQUFNYSxXQUFsRCxFQUErRCxXQUFXLEtBQUtmLGNBQS9FLEdBREo7QUFFSSxzRUFBUSxXQUFXLEtBQUtHLG1CQUF4QixFQUE2QyxNQUFNYSxZQUFuRCxFQUFpRSxXQUFXLEtBQUtmLGVBQWpGO0FBRko7QUFSSixhQURKO0FBZUg7Ozs0QkEzRWlCO0FBQ2QsbUJBQU8sUUFBUDtBQUNIOzs7Ozs7QUE0RUxQLFdBQVdyTixZQUFYLEdBQTBCO0FBQ3RCd08sU0FBSyxFQURpQjtBQUV0QnJTLFdBQU8sY0FGZTtBQUd0QnNTLFVBQU0sNEVBSGdCO0FBSXRCSSxlQUFXLE1BSlc7QUFLdEJILGlCQUFhLFFBTFM7QUFNdEJDLGtCQUFjLFNBTlE7QUFPdEJDLG1CQUFlLE9BUE87QUFRdEJqQyxZQUFRLEtBUmM7QUFTdEJzQixVQUFNLGdCQUFNLENBQUUsQ0FUUTtBQVV0QkMsV0FBTyxpQkFBTSxDQUFFLENBVk87QUFXdEJZLGNBQVU7QUFYWSxDQUExQjs7QUFjQXpCLFdBQVdwTixTQUFYLEdBQXVCO0FBQ25CdU8sU0FBSyxvQkFBVWxPLE1BREk7QUFFbkJuRSxXQUFPLG9CQUFVbUUsTUFGRTtBQUduQm1PLFVBQU0sb0JBQVVuTyxNQUhHO0FBSW5CdU8sZUFBVyxvQkFBVXZPLE1BSkY7QUFLbkJvTyxpQkFBYSxvQkFBVXBPLE1BTEo7QUFNbkJxTyxrQkFBYyxvQkFBVXJPLE1BTkw7QUFPbkJzTyxtQkFBZSxvQkFBVXRPLE1BUE47QUFRbkJnTyxjQUFVLG9CQUFVL04sSUFSRDtBQVNuQmdPLGVBQVcsb0JBQVVoTyxJQVRGO0FBVW5CME4sVUFBTSxvQkFBVTFOLElBQVYsQ0FBZWdGLFVBVkY7QUFXbkIySSxXQUFPLG9CQUFVM04sSUFBVixDQUFlZ0YsVUFYSDtBQVluQm9ILFlBQVEsb0JBQVV6TTtBQVpDLENBQXZCOztBQWVBLElBQU1qQixTQUFTLHVCQUFVLHVCQUFVb08sVUFBVixFQUFzQixhQUF0QixDQUFWLENBQWY7a0JBQ2VwTyxNOzs7Ozs7Ozs7Ozs7OztBQ3ZIZjs7OztBQUNBOzs7Ozs7UUFFUThQLFM7UUFBV0MsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNDS0QsUzs7QUFKeEI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkUsU0FBbkIsRUFBb0Q7QUFBQSxRQUF0QkMsYUFBc0IsdUVBQU4sSUFBTTs7QUFBQSxRQUN6REMsa0JBRHlEO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQ0FFdER4WSxLQUZzRCxFQUUvQztBQUNSLDZJQUFXQSxLQUFYO0FBQ0E7QUFDQSxxQkFBS2lULGNBQUwsR0FBc0IsS0FBS0MsU0FBTCxDQUFlL1MsSUFBZixDQUFvQixJQUFwQixDQUF0QjtBQUNBLHFCQUFLNFMsZ0JBQUwsR0FBd0IsS0FBS0MsV0FBTCxDQUFpQjdTLElBQWpCLENBQXNCLElBQXRCLENBQXhCO0FBQ0EscUJBQUtzWSxnQkFBTCxHQUF3QixLQUFLNUUsV0FBTCxDQUFpQjFULElBQWpCLENBQXNCLElBQXRCLENBQXhCO0FBQ0E7QUFDQSxxQkFBS3lLLEtBQUwsR0FBYTtBQUNUekgsMEJBQU0sQ0FERztBQUVUQyx5QkFBSztBQUZJLGlCQUFiO0FBSUg7QUFiMEQ7QUFBQTtBQUFBLHVDQWVoRDZHLFNBZmdELEVBZXJDO0FBQ2xCLHFCQUFLdUosT0FBTCxHQUFla0YsU0FBU0MsV0FBVCxDQUFxQjFPLFNBQXJCLENBQWY7QUFDSDtBQWpCMEQ7QUFBQTtBQUFBLHNEQW1CakNvTixTQW5CaUMsRUFtQnRCO0FBQ2pDLDRTQUFtRUEsU0FBbkU7O0FBRGlDLDZCQUdHLEtBQUtyWCxLQUhSO0FBQUEsb0JBR3pCd1gsZ0JBSHlCLFVBR3pCQSxnQkFIeUI7QUFBQSxvQkFHUHhCLE1BSE8sVUFHUEEsTUFITztBQUFBLG9CQUk3QnlCLFFBSjZCLEdBSWxCSixVQUFVckIsTUFBVixLQUFxQixJQUFyQixJQUE2QkEsV0FBVyxLQUp0Qjs7O0FBTWpDLG9CQUFJeUIsWUFBWUQsZ0JBQWhCLEVBQW1DO0FBQy9CLHlCQUFLb0IsVUFBTDtBQUNIO0FBQ0o7QUE1QjBEO0FBQUE7QUFBQSxnREE4QnZDO0FBQ2hCO0FBQ0EscUJBQUtBLFVBQUw7QUFDSDtBQWpDMEQ7QUFBQTtBQUFBLHlDQW1DOUM7QUFDVCxvQkFBSSxLQUFLcEYsT0FBVCxFQUFrQjtBQUFBLDZDQUNJLDhCQUFrQmxJLE1BQWxCLEVBQTBCLEtBQUtrSSxPQUEvQixDQURKO0FBQUEsd0JBQ1RyUSxJQURTLHNCQUNUQSxJQURTO0FBQUEsd0JBQ0hDLEdBREcsc0JBQ0hBLEdBREc7O0FBRWQseUJBQUt1SSxRQUFMLENBQWMsRUFBQ3hJLFVBQUQsRUFBT0MsUUFBUCxFQUFkO0FBQ0g7QUFDSjtBQXhDMEQ7QUFBQTtBQUFBLHNDQTBDakQxRCxDQTFDaUQsRUEwQzlDO0FBQ1QrSyx5QkFBU3FKLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUtmLGdCQUEvQztBQUNIO0FBNUMwRDtBQUFBO0FBQUEsd0NBOEMvQ3JULENBOUMrQyxFQThDNUM7QUFDUCwwQ0FBc0IsS0FBSzhULE9BQTNCO0FBQUEsb0JBQ0FxRixJQURBLEdBQ09DLG9CQUFvQkMscUJBQXBCLEVBRFA7QUFBQSxvQkFFQy9FLE9BRkQsR0FFcUJ0VSxDQUZyQixDQUVDc1UsT0FGRDtBQUFBLG9CQUVVQyxPQUZWLEdBRXFCdlUsQ0FGckIsQ0FFVXVVLE9BRlY7QUFBQSxvQkFHQytFLFVBSEQsR0FHMkIsSUFIM0IsQ0FHQ0EsVUFIRDtBQUFBLG9CQUdhQyxVQUhiLEdBRzJCLElBSDNCLENBR2FBLFVBSGI7QUFBQSxvQkFJQUMsV0FKQSxHQUljbEYsVUFBVWdGLFVBSnhCO0FBQUEsb0JBS0FHLFVBTEEsR0FLYWxGLFVBQVVnRixVQUx2QjtBQUFBLG9CQU1BOVYsSUFOQSxHQU1PMkgsS0FBS3NPLEdBQUwsQ0FBUyxDQUFULEVBQVksS0FBS3hPLEtBQUwsQ0FBV3pILElBQVgsR0FBa0IrVixXQUE5QixDQU5QO0FBQUEsb0JBT0E5VixHQVBBLEdBT00wSCxLQUFLc08sR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLeE8sS0FBTCxDQUFXeEgsR0FBWCxHQUFpQitWLFVBQTdCLENBUE47OztBQVNKLHFCQUFLeE4sUUFBTCxDQUFjO0FBQ1Z4SSwwQkFBTTJILEtBQUt1TyxHQUFMLENBQVMvTixPQUFPdkksVUFBUCxHQUFvQjhWLEtBQUs1VixLQUFsQyxFQUF5Q0UsSUFBekMsQ0FESTtBQUVWQyx5QkFBSzBILEtBQUt1TyxHQUFMLENBQVMvTixPQUFPdEksV0FBUCxHQUFxQjZWLEtBQUszVixNQUFuQyxFQUEyQ0UsR0FBM0M7QUFGSyxpQkFBZDs7QUFLQSxxQkFBSzRWLFVBQUwsR0FBa0JoRixPQUFsQjtBQUNBLHFCQUFLaUYsVUFBTCxHQUFrQmhGLE9BQWxCO0FBQ0g7QUEvRDBEO0FBQUE7QUFBQSx3Q0FpRS9DdlUsQ0FqRStDLEVBaUU1QztBQUNYLG9CQUFJLENBQUNBLEVBQUV3UyxNQUFGLENBQVNvSCxTQUFULENBQW1CQyxRQUFuQixDQUE0QixLQUFLaEIsYUFBTCxDQUE1QixDQUFMLEVBQXVEO0FBQ3ZELHFCQUFLUyxVQUFMLEdBQWtCdFosRUFBRXNVLE9BQXBCO0FBQ0EscUJBQUtpRixVQUFMLEdBQWtCdlosRUFBRXVVLE9BQXBCO0FBQ0F4Six5QkFBU3NKLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUtoQixnQkFBNUM7QUFDQXRJLHlCQUFTc0osZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS2QsY0FBMUM7QUFDSDtBQXZFMEQ7QUFBQTtBQUFBLHFDQXlFbEQ7QUFDTCxvQkFBTW9CLFFBQVFyUyxPQUFPbUssTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS25NLEtBQUwsQ0FBV21ZLFFBQTdCLEVBQXVDO0FBQ2pEcUIsOEJBQVUsT0FEdUM7QUFFakRyVywwQkFBTSxLQUFLeUgsS0FBTCxDQUFXekgsSUFGZ0M7QUFHakRDLHlCQUFLLEtBQUt3SCxLQUFMLENBQVd4SDtBQUhpQyxpQkFBdkMsQ0FBZDs7QUFNQSx1QkFDSTtBQUFBO0FBQUEsc0JBQUssT0FBT2lSLEtBQVosRUFBbUIsYUFBYSxLQUFLN1YsV0FBckMsRUFBa0QsV0FBVyxLQUFLQSxXQUFsRTtBQUNJLHdDQUFDLFNBQUQsZUFDUSxLQUFLd0IsS0FEYjtBQUVJLDZCQUFLLEtBQUt5WixVQUFMLENBQWdCdFosSUFBaEIsQ0FBcUIsSUFBckI7QUFGVDtBQURKLGlCQURKO0FBT0g7QUF2RjBEOztBQUFBO0FBQUEsTUFDOUJtWSxTQUQ4Qjs7QUEwRi9ERSx1QkFBbUJuUCxZQUFuQixHQUFrQ3JILE9BQU9tSyxNQUFQLENBQWM7QUFDNUNxTCwwQkFBa0IsSUFEMEI7QUFFNUNXLGtCQUFVO0FBRmtDLEtBQWQsRUFHL0JHLFVBQVVqUCxZQUhxQixDQUFsQzs7QUFLQW1QLHVCQUFtQmxQLFNBQW5CLEdBQStCdEgsT0FBT21LLE1BQVAsQ0FBYztBQUN6Q3FMLDBCQUFrQixvQkFBVWpPLElBRGE7QUFFekM0TyxrQkFBVSxvQkFBVTdXO0FBRnFCLEtBQWQsQ0FBL0I7O0FBS0EsV0FBT2tYLGtCQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNsRHVCSCxTOztBQXZEeEI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlxQixlQUFlO0FBQ2ZDLFdBQU8sQ0FBQyxRQUFELENBRFE7QUFFZkMsZUFBVyxTQUZJO0FBR2Z0TCxXQUFPLEVBSFE7QUFJZnVMLGtCQUFjLElBSkM7QUFLZkMsT0FMZSxlQUtYN1AsU0FMVyxFQUtBO0FBQ1gsYUFBS3FFLEtBQUwsQ0FBV2xKLElBQVgsQ0FBZ0I2RSxTQUFoQjs7QUFFQSxZQUFJLEtBQUtxRSxLQUFMLENBQVczSixNQUFYLEdBQW9CLENBQXBCLElBQXlCLENBQUMsS0FBS2tWLFlBQW5DLEVBQWlEO0FBQzdDLGlCQUFLQSxZQUFMLEdBQW9CcFAsU0FBU3NKLGdCQUFULENBQTBCLEtBQUs2RixTQUEvQixFQUEwQyxJQUExQyxDQUFwQjtBQUNIO0FBQ0osS0FYYztBQVlmRyxVQVplLGtCQVlSOVAsU0FaUSxFQVlHO0FBQ2QsYUFBS3FFLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVc5SyxNQUFYLENBQWtCO0FBQUEsbUJBQWtCd1csbUJBQW1CL1AsU0FBckM7QUFBQSxTQUFsQixDQUFiOztBQUVBLFlBQUksS0FBS3FFLEtBQUwsQ0FBVzNKLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekI4RixxQkFBU3FKLG1CQUFULENBQTZCLEtBQUs4RixTQUFsQyxFQUE2QyxJQUE3QztBQUNBLG1CQUFPLEtBQUtDLFlBQVo7QUFDSDtBQUNKLEtBbkJjO0FBb0JmSSxPQXBCZSxlQW9CWGhRLFNBcEJXLEVBb0JBO0FBQ1gsZUFBTyxLQUFLcUUsS0FBTCxDQUFXNEwsUUFBWCxDQUFvQmpRLFNBQXBCLENBQVA7QUFDSCxLQXRCYztBQXVCZnpMLGVBdkJlLHVCQXVCSGtCLENBdkJHLEVBdUJBO0FBQ1gsWUFBSUEsRUFBRXlhLElBQUYsS0FBVyxRQUFmLEVBQXlCO0FBQ3JCLGdCQUFJbFEsWUFBWSxLQUFLcUUsS0FBTCxDQUFXLEtBQUtBLEtBQUwsQ0FBVzNKLE1BQVgsR0FBb0IsQ0FBL0IsQ0FBaEI7QUFDQSxpQkFBS29WLE1BQUwsQ0FBWTlQLFNBQVo7QUFDQTtBQUNBQSxzQkFBVWpLLEtBQVYsQ0FBZ0J1WCxLQUFoQixDQUFzQixFQUF0QixFQUEwQnROLFNBQTFCO0FBQ0g7QUFDSixLQTlCYztBQStCZm1RLFVBL0JlLGtCQStCUm5RLFNBL0JRLEVBK0JHO0FBQ2QsWUFBSWxLLE9BQU9rSyxVQUFVbkssV0FBVixDQUFzQkMsSUFBakM7QUFBQSxZQUNJaVcsU0FBUy9MLFVBQVVqSyxLQUFWLENBQWdCZ1csTUFEN0I7O0FBR0EsWUFBSSxDQUFDLEtBQUtpRSxHQUFMLENBQVNoUSxTQUFULENBQUQsSUFBd0IrTCxXQUFXLElBQXZDLEVBQTZDO0FBQ3pDLGlCQUFLOEQsR0FBTCxDQUFTN1AsU0FBVDtBQUNBO0FBQ0g7O0FBRUQsWUFBSSxLQUFLZ1EsR0FBTCxDQUFTaFEsU0FBVCxLQUF1QitMLFdBQVcsS0FBdEMsRUFBNkM7QUFDekMsaUJBQUsrRCxNQUFMLENBQVk5UCxTQUFaO0FBQ0E7QUFDSDtBQUNKLEtBNUNjOztBQTZDZjtBQUNBb1EsV0E5Q2UsbUJBOENQcFEsU0E5Q08sRUE4Q0k7QUFDZixlQUFPLEtBQUswUCxLQUFMLENBQVdPLFFBQVgsQ0FBb0JqUSxVQUFVbkssV0FBVixDQUFzQkMsSUFBMUMsQ0FBUDtBQUNIO0FBaERjLENBQW5COztBQW1EQTtBQUNlLFNBQVNzWSxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUN6QyxRQUFJOUQsU0FBUyxtQkFBUThELFVBQVVoWixJQUFsQixLQUEyQixDQUF4Qzs7QUFFQU0sWUFBUTBhLE1BQVIsQ0FBZSxPQUFPaEMsVUFBVWhQLFNBQVYsQ0FBb0I2TyxRQUEzQixLQUF3QyxXQUF2RCxFQUFvRSwrQ0FBcEU7O0FBSHlDLFFBS25Db0MsY0FMbUM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQU1oQ3ZhLEtBTmdDLEVBTXpCO0FBQ1IscUlBQVdBLEtBQVg7QUFDQTtBQUNBLHFCQUFLNEssS0FBTCxHQUFhO0FBQ1Q0Siw0QkFBUUE7QUFEQyxpQkFBYjtBQUdIO0FBWm9DO0FBQUE7QUFBQSxpREFjaEI7QUFDakI7QUFDQWtGLDZCQUFhVSxNQUFiLENBQW9CLElBQXBCO0FBQ0g7QUFqQm9DO0FBQUE7QUFBQSxzREFtQlgvQyxTQW5CVyxFQW1CQTtBQUNqQyw0UkFBbUVBLFNBQW5FOztBQUVNLG9CQUFDckIsTUFBRCxHQUFXLEtBQUtoVyxLQUFoQixDQUFDZ1csTUFBRDtBQUFBLG9CQUNGeUIsUUFERSxHQUNTSixVQUFVckIsTUFBVixLQUFxQixJQUFyQixJQUE2QkEsV0FBVyxLQURqRDs7O0FBR04sb0JBQUl5QixRQUFKLEVBQWU7QUFDWCx5QkFBSzlMLFFBQUwsQ0FBYztBQUNWNkksZ0NBQVFBO0FBREUscUJBQWQ7QUFHSDtBQUNKO0FBOUJvQztBQUFBO0FBQUEscUNBZ0M1QjtBQUNMLG9CQUFNMkQsV0FBV25XLE9BQU9tSyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLbk0sS0FBTCxDQUFXbVksUUFBN0IsRUFBdUM7QUFDcEQzRCw0QkFBUSxLQUFLNUosS0FBTCxDQUFXNEo7QUFEaUMsaUJBQXZDLENBQWpCO0FBR0EsdUJBQVEsb0JBQUMsU0FBRCxlQUFlLEtBQUt4VSxLQUFwQixJQUEyQixVQUFVbVksUUFBckMsSUFBUjtBQUNIO0FBckNvQzs7QUFBQTtBQUFBLE1BS1pHLFNBTFk7O0FBd0N6QyxXQUFPaUMsY0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hHRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQmhTLE87Ozs7Ozs7Ozs7OytCQUNWO0FBQ0gsaUJBQUtsSSxhQUFMO0FBQ0g7OztpQ0FDUTtBQUNDLGdCQUFDMlYsTUFBRCxHQUFXLEtBQUtoVyxLQUFoQixDQUFDZ1csTUFBRDtBQUFBLGdCQUNGblYsR0FERSxHQUNJLEtBQUtDLFNBQUwsR0FBaUIsR0FBakIsSUFBd0IsQ0FBQ2tWLE1BQUQsR0FBVSxRQUFWLEdBQXFCLEVBQTdDLENBREo7QUFBQSxnQkFFRjNCLEtBRkUsR0FFTTtBQUNKcFIsdUJBQU8sTUFESDtBQUVKQyx3QkFBUSxNQUZKO0FBR0pzVywwQkFBVSxPQUhOO0FBSUpnQixpQ0FBaUIsTUFKYjtBQUtKQyx5QkFBUyxLQUFLemEsS0FBTCxDQUFXeWEsT0FMaEI7QUFNSnRYLHNCQUFNLENBTkY7QUFPSkMscUJBQUssQ0FQRDtBQVFKb1Isd0JBQVEsbUJBQVFqTTtBQVJaLGFBRk47OztBQWFOLG1CQUFRLHVDQUFLLFdBQVcxSCxHQUFoQixFQUFxQixPQUFPd1QsS0FBNUIsR0FBUjtBQUNIOzs7Ozs7a0JBbkJnQjlMLE87OztBQXNCckJBLFFBQVFjLFlBQVIsR0FBdUI7QUFDbkJvUixhQUFTO0FBRFUsQ0FBdkI7O0FBSUFsUyxRQUFRZSxTQUFSLEdBQW9CO0FBQ2hCbVIsYUFBUyxvQkFBVTNOLE1BREg7QUFFaEJrSixZQUFRLG9CQUFVek07QUFGRixDQUFwQixDOzs7Ozs7Ozs7Ozs7UUMvQmdCbVIsZ0IsR0FBQUEsZ0I7Ozs7QUFBVCxTQUFTQSxnQkFBVCxDQUEwQkMsVUFBMUIsRUFBc0NDLFNBQXRDLEVBQWlEO0FBQ3BELFFBQUlDLGNBQWMsT0FBT0QsU0FBUCxLQUFxQixXQUF2QztBQUFBLFFBQ0lFLGdCQUFnQixRQURwQjs7QUFHQSxXQUFPLFVBQVNsUSxLQUFULEVBQWdCNUssS0FBaEIsRUFBdUI7QUFDMUIsbUNBQVMyYSxhQUFhRyxhQUF0QixFQUFzQ0QsY0FBY0QsU0FBZCxHQUEwQixDQUFDaFEsTUFBTStQLGFBQWFHLGFBQW5CLENBQWpFO0FBQ0gsS0FGRDtBQUdILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzNiZjA1MDcwOGJlODk3NjAyM2EiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpc09iaiwgZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBhbGwgY29tcG9uZW50cyBzaGFyZSBvbmUgZXZlbnQgaGFuZGxlclxuQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWxsIGtub3duIFJlYWN0LkNvbXBvbmVudCBldmVudHNcbiAgICB2YXIgbWFwID0ge1xuICAgICAgICBjbGljazogJ29uQ2xpY2snLFxuICAgICAgICBjaGFuZ2U6ICdvbkNoYW5nZScsXG4gICAgICAgIG1vdXNlb3ZlcjogJ29uTW91c2VPdmVyJyxcbiAgICAgICAgbW91c2VlbnRlcjogJ29uTW91c2VFbnRlcicsXG4gICAgICAgIG1vdXNlbGVhdmU6ICdvbk1vdXNlTGVhdmUnLFxuICAgICAgICBtb3VzZW91dDogJ29uTW91c2VPdXQnLFxuICAgICAgICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gICAgICAgIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxuICAgICAgICBtb3VzZW1vdmU6ICdvbk1vdXNlTW92ZScsXG4gICAgICAgIGZvY3VzOiAnb25Gb2N1cycsXG4gICAgICAgIGJsdXI6ICdvbkJsdXInXG4gICAgfTtcblxuICAgIC8vIGZhbGxiYWNrIGhlbHBlclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vIG9uZSBoYW5kbGVFdmVudCB0byBydWxlIHRoZW0gYWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKG1ldGhvZCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzLnByb3BzKSB0aGlzLnByb3BzW21ldGhvZF0oZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcykgdGhpc1ttZXRob2RdKGUpO1xuICAgIH07XG59KCkpO1xuXG4vLyB1c2UgZm9yIGNvbXBvbmVudElkXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGliQ2xhc3NQcmVmaXggPSAnZSc7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnBvc3RSZWdpc3Rlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YDtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBoYXZlIHJlZ2lzdGVyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcbiAgICAgICAgLy8gYWRkIG9uZVxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdICsgMTtcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpICsgcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUob2JqKSB7XG4gICAgICAgIHN1cGVyLnNldFN0YXRlKG9iaik7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtU3RhdGUoc3RhdGVPYmopIHtcbiAgICAgICAgcmV0dXJuIGUoc3RhdGVPYmopO1xuICAgIH1cblxuICAgIGdldExpYlByZWZpeGVkQ2xhc3MoY2xzKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke2Nsc31gO1xuICAgIH1cblxuICAgIC8vIHN0dWJzXG4gICAgaW5pdCgpIHt9XG4gICAgcG9zdFJlZ2lzdGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi8vIGlzT2JqOiBjaGVjayBpZiB0aGUgZ2l2ZW4gb2JqIGlzIGFuIE9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuLy8gY2xvbmU6IHNpbXBsZSBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0XG4vLyBub3Qgc3VwcG9ydCBmdW5jdGlvbiBhbmQgY2lyY3VsYXIgcmVmZXJlbmNlXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8vIGZsYXR0ZW4gc3RhdGUgb2JqZWN0XG4vLyBncmlkOntsYXlvdXQ6e21lbnU6e2V4cGFuZDp0cnVlfX19fSA9PiBncmlkTGF5b3V0TWVudUV4cGFuZDp0cnVlXG5leHBvcnQgZnVuY3Rpb24gZShzdGF0ZU9iamVjdCkge1xuICAgIGZ1bmN0aW9uIF9mKHN0YXRlT2JqZWN0LCByb290LCByZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVJc09iaiA9IGlzT2JqKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqKSB7XG4gICAgICAgICAgICAgICAgX2YodmFsdWUsIHIsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImV4cG9ydCBjb25zdCB6SW5kZXhzID0ge1xuICAgIERpYWxvZzogMzAwMCxcbiAgICBPdmVybGF5OiAyMDAwLFxuICAgIERyb3Bkb3duOiAxMDAwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdHRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHNwbGl0dGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgaXNWZXJ0aWNhbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgYCR7aXNWZXJ0aWNhbCA/IGAgdmVydGljYWxgIDogJyBob3Jpem9udGFsJ31gKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGxpdHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNWZXJ0aWNhbDogdHJ1ZVxufTtcblxuU3BsaXR0ZXIucHJvcFR5cGVzID0ge1xuICAgIGlzVmVydGljYWw6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBidXR0b25gO1xuICAgIH1cblxuICAgb25DbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNsaWNrZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25DbGlja2VkKSB7XG4gICAgICAgICAgICBvbkNsaWNrZWQoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHt0ZXh0LCB0eXBlLCB0aXRsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e3R5cGV9IHRpdGxlPXt0aXRsZSB8fCB0ZXh0fSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJ0J1dHRvbicsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGl0bGU6ICcnXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGlja2VkOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvQXBwJztcbmltcG9ydCBEaWFsb2dzIGZyb20gJy4vRGlhbG9ncyc7XG5cbmNvbnN0IG5hdkRlZiA9IFtcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiTW9uaXRvcmluZ1wiIC8+fSxcbiAgICB7aWQ6ICdmb3JtJywgbGFiZWw6ICdGb3JtIFdpZGdldHMnLCB1cmw6ICcvI2Zvcm0nLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkZvcm1zIFdpZGdldFwiIC8+fSxcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xuICAgICAgICB7aWQ6ICdkaWFsb2dzJywgbGFiZWw6ICdEaWFsb2dzJywgdXJsOiAnLyN3aWRnZXRzL2RpYWxvZ3MnLCBjb21wb25lbnQ6IDxEaWFsb2dzIC8+fSxcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcbiAgICAgICAge2lkOiAndG9vbHRpcCcsIGxhYmVsOiAnVG9vbHRpcCcsIHVybDogJy8jd2lkZ2V0cy90b29sdGlwJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJUb29sdGlwc1wiIC8+fSxcbiAgICAgICAge2lkOiAnYmFycycsIGxhYmVsOiAnQmFycycsIHVybDogJy8jd2lkZ2V0cy9iYXJzJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJCYXJzXCIgLz59LFxuICAgICAgICB7aWQ6ICdhbGVydHMnLCBsYWJlbDogJ0FsZXJ0cycsIHVybDogJy8jd2lkZ2V0cy9hbGVydHMnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkFsZXJ0c1wiIC8+fVxuICAgIF19XG5dO1xuXG5jb25zdCBwYWdlc0RlZiA9IChuYXYgPT4ge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbiA9IG5hdltpXTtcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5hdi5wdXNoKG4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59KShBcnJheS5mcm9tKG5hdkRlZikpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGVzdDogTWF0aC5yYW5kb20oKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGdpZD17dGhpcy5zdGF0ZS50ZXN0fT57dGhpcy5wcm9wcy50ZXh0fTwvaDE+KVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJZDogJ21vbicsXG4gICAgICAgICAgICBqc0hlYXBTaXplTGltaXQ6IDAsXG4gICAgICAgICAgICB0b3RhbEpTSGVhcFNpemU6IDAsXG4gICAgICAgICAgICB1c2VkSlNIZWFwU2l6ZTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyksXG4gICAgICAgICAgICBhY3RpdmVJZCA9IGhhc2hbaGFzaC5sZW5ndGggLSAxXS5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgIH1cblxuICAgIGdldE1lbW9yeVN0YXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UcmVlTm9kZUNsaWNrKG5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5jaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUlkOiBub2RlLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwibGVmdFBhbmVcIiBzcGxpdHRlcj1cInZlcnRpY2FsXCIgc2l6ZT17MjAwfSBtaW5TaXplPXsyMDB9IG1heFNpemU9ezUwMH0gc2l6ZVVuaXQ9XCJweFwiID5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRlZj17dGhpcy5wcm9wcy5uYXZ9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwicmlnaHRQYW5lXCIgZGlzcGxheT1cImZsZXhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgc3BsaXR0ZXI9XCJob3Jpem9udGFsXCIgc2l6ZT17NzV9IG1heFNpemU9ezgwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGVmPXt0aGlzLnByb3BzLnBhZ2VzfSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dNZW1vcnlWaWV3ZXIganNIZWFwU2l6ZUxpbWl0PXt0aGlzLnN0YXRlLmpzSGVhcFNpemVMaW1pdH0gdG90YWxKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnRvdGFsSlNIZWFwU2l6ZX0gdXNlZEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudXNlZEpTSGVhcFNpemV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBib3JkZXJDb250YWluZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGVyc2lzdDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQm9yZGVyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyc2lzdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8vIFRPRE86IGtleWJvYXJkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgcGFuZWA7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7c3BsaXR0ZXIsIHNpemUsIHNpemVVbml0LCBtYXhTaXplLCBtaW5TaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7b2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodH0gPSB0aGlzLmRvbU5vZGUucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdudWxsJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvcDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VVcChlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAge21heFNpemUsIG1pblNpemV9ID0gdGhpcyxcbiAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFggPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRYIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRYKSxcbiAgICAgICAgICAgICAgdG9wID0gY2xpZW50WSA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFkgPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZShlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBzcGxpdHRlciwgZGlyZWN0aW9uLCBkaXNwbGF5LCBzcGxpdHRlclNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke3NwbGl0dGVyID09PSAndmVydGljYWwnID8gYCB2ZXJ0aWNhbFBhbmVgIDogJyd9YCksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwbGl0dGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IHNwbGl0dGVyID09PSAndmVydGljYWwnO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0IC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmxlZnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnNldFN0YXRlLnRvcCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHBhbmUpID0+IHsgdGhpcy5kb21Ob2RlID0gcGFuZTsgfX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7c3BsaXR0ZXIgIT09ICdudWxsJyA/IDxTcGxpdHRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9IC8+IDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3BsaXR0ZXI6ICdudWxsJyxcbiAgICBzaXplOiAyNSxcbiAgICBtaW5TaXplOiAxNSxcbiAgICBtYXhTaXplOiA1MCxcbiAgICBzaXplVW5pdDogJyUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBzcGxpdHRlclNpemU6IDEwXG59O1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXJTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZDogdGhpcy5wcm9wcy5leHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kOiAhdGhpcy5zdGF0ZS5leHBhbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lkLCBsYWJlbCwgdXJsLCBjaGlsZHJlbiwgb25UcmVlTm9kZUNsaWNrLCBhY3RpdmVJZH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZXhwYW5kID0gdGhpcy5zdGF0ZS5leHBhbmQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhhY3RpdmVJZCA9PT0gaWQgJiYgIWNoaWxkcmVuKSA/IHRoaXMucHJvcHMuZm9jdXNDbGFzcyA6IChleHBhbmQgPyB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyA6IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyB1cmwgOiAnamF2YXNjcmlwdDp2b2lkKDApJ30+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgZXhwYW5kID8gPHVsPntjaGlsZHJlbi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e2FjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e29uVHJlZU5vZGVDbGlja30gey4uLmN9IC8+KX08L3VsPjogJyd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVHJlZU5vZGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGZvY3VzQ2xhc3M6ICdmb2N1c2VkJyxcbiAgICBleHBhbmRvRXhwYW5kQ2xhc3M6ICdleHBhbmQnLFxuICAgIGV4cGFuZG9DbGFzczogJ2ZvbGQnXG59O1xuXG5UcmVlTm9kZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9jdXNDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICd0cmVlVmlldyc7XG4gICAgfVxuICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtpZCwgY2hpbGRyZW59ID0gdHJlZU5vZGUsXG4gICAgICAgICAgICB7b25UcmVlTm9kZUNsaWNrfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpO1xuXG4gICAgICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBvciBubyBjaGlsZHJlbiwgZm9jdXMgdGFyZ2V0XG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJZDogaWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMuZGVmLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVHJlZVZpZXcucHJvcFR5cGVzID0ge1xuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBDb250ZW50UGFuZSBmcm9tICcuLi9Db250ZW50UGFuZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnc3dpdGNoJztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBkYXRhLWFjdGl2ZS1pZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVmLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRQYW5lIGNsYXNzTmFtZT17Yy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZCA/IHRoaXMucHJvcHMuYWN0aXZlSWQgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Yy5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFBhbmU+KVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmOiBbXVxufTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBkZWY6IFByb3BUeXBlcy5hcnJheSxcbiAgICBhY3RpdmVJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY29udGVudFBhbmVgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ29udGVudFBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd01lbW9yeVZpZXdlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB3aW5kb3dNZW1vcnlWaWV3ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SmF2YXNjcmlwdCBIZWFwIFNpemUgTGltaXQ6PC9zcGFuPiA8c3Bhbj57anNIZWFwU2l6ZUxpbWl0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlRvdGFsIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3RvdGFsSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Vc2VkIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3VzZWRKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvRGlhbG9nJztcbmltcG9ydCBPdmVybGF5IGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvZ2dsZURpYWxvZ09wZW4gfSBmcm9tICcuL0RpYWxvZ3NBY3Rpb24nO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CdXR0b25DbGlja2VkKGUsIGJ1dHRvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oYnV0dG9uLnByb3BzLmRpYWxvZykpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIGNsb3NlRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIG9wZW5EaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIHRydWUpKTtcbiAgICB9XG5cbiAgICBzaG91bGRTaG93T3ZlcmxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlhbG9nMUlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzJJc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMUlzT3Blbn0gY29tcG9uZW50SWQ9XCJkaWFsb2cxXCIgdGl0bGU9XCJkaWFsb2cxXCIgb3Blbj17dGhpcy5vcGVuRGlhbG9nfSBjbG9zZT17dGhpcy5jbG9zZURpYWxvZ30gLz5cbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cySXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gRGlhbG9nXG5leHBvcnQgY2xhc3MgRGlhbG9nVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEaWFsb2cnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZGlhbG9nYDtcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2xvc2UnKTtcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1ib2R5Jyk7XG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZCA9IHRoaXMub25DYW5jZWxCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQnRuQ2xpY2tlZCA9IHRoaXMub25Db25maXJtQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBjb25zdCB7IG9wZW4sIGNsb3NlLCByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlLFxuICAgICAgICAgICAgbmV4dENsb3NlID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gZmFsc2UgJiYgaXNPcGVuID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgIG9wZW4oe30sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRDbG9zZSkge1xuICAgICAgICAgICAgY2xvc2Uoe30sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKGUsIHRoaXMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNhbmNlbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQoZSk7XG5cbiAgICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICBvbkNhbmNlbChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICAgICAgb25Db25maXJtKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bW9kLCB0aXRsZSwgYm9keSwgY2FuY2VsTGFiZWwsIGNvbmZpcm1MYWJlbCwgY2xvc2VCdG5MYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIG1vZCwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmhlYWRlckNsYXNzfSA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT17Y2xvc2VCdG5MYWJlbH0gdGV4dD17Y2xvc2VCdG5MYWJlbH0gb25DbGlja2VkPXt0aGlzLm9uQ2xvc2VCdG5DbGlja2VkfSBjbGFzc05hbWU9e3RoaXMuY2xvc2VCdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5ib2R5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5mb290ZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZH0gdGV4dD17Y2FuY2VsTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jYW5jZWxCdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25Db25maXJtQnRuQ2xpY2tlZH0gdGV4dD17Y29uZmlybUxhYmVsfSBjbGFzc05hbWU9e3RoaXMuY29uZmlybUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EaWFsb2dWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2Q6ICcnLFxuICAgIHRpdGxlOiAnRGlhbG9nIFRpdGxlJyxcbiAgICBib2R5OiAnQU5SMTAzMjgyOSBUaGlzIGlzIGEgc2FtcGxlIG1lc3NhZ2UuIERkbGZrd2Vyb2l1IHNkZnIgc2RmamVyaXUgZGZlcmVyZGZzZi4nLFxuICAgIGhlbHBMYWJlbDogJ0hlbHAnLFxuICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBjbG9zZUJ0bkxhYmVsOiAnQ2xvc2UnLFxuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgb3BlbjogKCkgPT4ge30sXG4gICAgY2xvc2U6ICgpID0+IHt9LFxuICAgIHN0eWxlT2JqOiB7fSxcbn07XG5cbkRpYWxvZ1ZpZXcucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2VCdG5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmNvbnN0IERpYWxvZyA9IHBvcHVwYWJsZShkcmFnZ2FibGUoRGlhbG9nVmlldywgJ2hlYWRlckNsYXNzJykpO1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xuaW1wb3J0IHBvcHVwYWJsZSBmcm9tICcuL3BvcHVwYWJsZSdcblxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDZW50ZXJQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnZ2FibGUoQ29tcG9uZW50LCBjbGFzc1Byb3BlcnR5ID0gJy0xJykge1xuICAgIGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQocHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NSZWYoY29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7IHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4gJiYgcmVwb3NpdGlvbk9uT3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQge2xlZnQsIHRvcH0gPSBnZXRDZW50ZXJQb3NpdGlvbih3aW5kb3csIHRoaXMuZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnRCZWluZ01vdmVkID0gdGhpcy5kb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlY3QgPSBDb21wb25lbnRCZWluZ01vdmVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgICAge2xhc3RNb3VzZVgsIGxhc3RNb3VzZVl9ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBsZWZ0VG9Nb3VzZSA9IGNsaWVudFggLSBsYXN0TW91c2VYLFxuICAgICAgICAgICAgICAgIHRvcFRvTW91c2UgPSBjbGllbnRZIC0gbGFzdE1vdXNlWSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS5sZWZ0ICsgbGVmdFRvTW91c2UpLFxuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUudG9wICsgdG9wVG9Nb3VzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCwgbGVmdCksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCwgdG9wKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBjbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpc1tjbGFzc1Byb3BlcnR5XSkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IHRydWUsXG4gICAgICAgIHN0eWxlT2JqOiB7fVxuICAgIH0sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpO1xuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc3R5bGVPYmo6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9KTtcblxuICAgIHJldHVybiBEcmFnZ2FibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcblxubGV0IHBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBkZWNvdXBsZVxuICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbi8vIHBvcHVwYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdXBhYmxlKENvbXBvbmVudCkge1xuICAgIGxldCB6SW5kZXggPSB6SW5kZXhzW0NvbXBvbmVudC50eXBlXSB8fCAwO1xuXG4gICAgY29uc29sZS5hc3NlcnQodHlwZW9mIENvbXBvbmVudC5wcm9wVHlwZXMuc3R5bGVPYmogIT09ICd1bmRlZmluZWQnLCAnVGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBhbiBzdHlsZU9iaiBhcyBwcm9wJyk7XG5cbiAgICBjbGFzcyBQb3B1cENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQocHJvcHMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSAmJiBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgICAgICAgIHBvcHVwTWFuYWdlci5oYW5kbGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMuc3RhdGUuekluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gc3R5bGVPYmo9e3N0eWxlT2JqfSAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUG9wdXBDb21wb25lbnQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgb3ZlcmxheWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gdGhpcy5jbGFzc05hbWUgKyAnICcgKyAoIWlzT3BlbiA/ICdoaWRkZW4nIDogJycpLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnByb3BzLm9wYWNpdHksXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXhzLk92ZXJsYXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZX0+PC9kaXY+KVxuICAgIH1cbn1cblxuT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb3BhY2l0eTogLjVcbn07XG5cbk92ZXJsYXkucHJvcFR5cGVzID0ge1xuICAgIG9wYWNpdHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheS9pbmRleC5qc3giLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGlhbG9nT3BlbihkaWFsb2dOYW1lLCBvcGVuU3RhdGUpIHtcbiAgICBsZXQgaGFzU3RhdGVTZXQgPSB0eXBlb2Ygb3BlblN0YXRlICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgb3BlblN0YXRlTmFtZSA9ICdJc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==