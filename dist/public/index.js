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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

var _utils = __webpack_require__(8);

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


Object.defineProperty(exports, "__esModule", {
    value: true
});
var zIndexs = exports.zIndexs = {
    Dialog: 3000,
    Overlay: 2000,
    Dropdown: 1000
};

/***/ }),
/* 8 */
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

// clone: clone the given object
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

var _utils = __webpack_require__(8);

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

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(26);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

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

var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(9);
var assign = __webpack_require__(19);

var ReactPropTypesSecret = __webpack_require__(6);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(9);
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
/* 21 */
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

var _utils = __webpack_require__(8);

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

var _Dialog = __webpack_require__(27);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(29);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(11);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(30);

var _Constants = __webpack_require__(7);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PopupComponent2 = __webpack_require__(28);

var _PopupComponent3 = _interopRequireDefault(_PopupComponent2);

var _Button = __webpack_require__(11);

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(8);

var _Constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zIndex = _Constants.zIndexs.Dialog;

// Dialog

var Dialog = function (_PopupComponent) {
    _inherits(Dialog, _PopupComponent);

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
            this.cancelBtnClass = this.getLibPrefixedClass('dialog-btn-cancel');
            this.confirmBtnClass = this.getLibPrefixedClass('dialog-btn-confirm');
            // handlers
            this.onCancelBtnClicked = this.onCancelBtnClicked.bind(this);
            this.onConfirmBtnClicked = this.onConfirmBtnClicked.bind(this);
            this.onCloseBtnClicked = this.onCloseBtnClicked.bind(this);
            this.mousemoveHandler = this.onMouseMove.bind(this);
            this.mouseupHandler = this.onMouseUp.bind(this);
            // state
            this.state = {
                left: 0,
                top: 0,
                zIndex: zIndex++
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.reposition();
        }
    }, {
        key: 'reposition',
        value: function reposition() {
            var _getCenterPosition = (0, _utils.getCenterPosition)(window, this.domNode),
                left = _getCenterPosition.left,
                top = _getCenterPosition.top;

            this.setState({ left: left, top: top });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _props = this.props,
                open = _props.open,
                close = _props.close,
                repositionOnOpen = _props.repositionOnOpen,
                isOpen = _props.isOpen,
                nextOpen = props.isOpen === true && isOpen === false,
                nextClose = props.isOpen === false && isOpen === true;


            if (nextOpen) {
                open({}, this);
                this.setState({
                    zIndex: zIndex++
                });

                if (repositionOnOpen) {
                    this.reposition();
                }
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
        key: 'onMouseDown',
        value: function onMouseDown(e) {
            // only click on the header , we start draging the dialog
            if (e.currentTarget !== e.target) return;
            this.lastMouseX = e.clientX;
            this.lastMouseY = e.clientY;
            document.addEventListener('mousemove', this.mousemoveHandler);
            document.addEventListener('mouseup', this.mouseupHandler);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(e) {
            var dialogBeingMoved = this.domNode,
                rect = dialogBeingMoved.getBoundingClientRect(),
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
        key: 'onMouseUp',
        value: function onMouseUp(e) {
            document.removeEventListener('mousemove', this.mousemoveHandler);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                mod = _props2.mod,
                title = _props2.title,
                body = _props2.body,
                cancelLabel = _props2.cancelLabel,
                confirmLabel = _props2.confirmLabel,
                closeBtnLabel = _props2.closeBtnLabel,
                cls = (0, _utils.getClsName)(this.className, mod, !this.props.isOpen ? 'hidden' : ''),
                style = {
                position: 'fixed',
                left: this.state.left,
                top: this.state.top,
                zIndex: this.state.zIndex
            };


            return _react2.default.createElement(
                'div',
                { style: style, className: cls, ref: function ref(dialog) {
                        return _this2.domNode = dialog;
                    } },
                _react2.default.createElement(
                    'div',
                    { className: this.headerClass, onMouseDown: this.handleEvent, onMouseUp: this.handleEvent },
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
    }]);

    return Dialog;
}(_PopupComponent3.default);

exports.default = Dialog;


Dialog.defaultProps = {
    mod: '',
    title: 'Dialog Title',
    body: 'ANR1032829 This is a sample message. Ddlfkweroiu sdfr sdfjeriu dfererdfsf.',
    helpLabel: 'Help',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    closeBtnLabel: 'Close',
    isOpen: false,
    repositionOnOpen: true,
    close: function close() {}
};

Dialog.propTypes = {
    mod: _propTypes2.default.string,
    title: _propTypes2.default.string,
    body: _propTypes2.default.string,
    helpLabel: _propTypes2.default.string,
    cancelLabel: _propTypes2.default.string,
    confirmLabel: _propTypes2.default.string,
    closeBtnLabel: _propTypes2.default.string,
    onClose: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func,
    open: _propTypes2.default.func,
    close: _propTypes2.default.func.isRequired,
    isOpen: _propTypes2.default.bool,
    zIndex: _propTypes2.default.number,
    repositionOnOpen: _propTypes2.default.bool
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

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

var PopupComponent = function (_BaseComponent) {
    _inherits(PopupComponent, _BaseComponent);

    function PopupComponent() {
        _classCallCheck(this, PopupComponent);

        return _possibleConstructorReturn(this, (PopupComponent.__proto__ || Object.getPrototypeOf(PopupComponent)).apply(this, arguments));
    }

    _createClass(PopupComponent, [{
        key: 'componentDidUpdate',

        // componentWillMount() {}
        // componentDidMount() {}
        // componentWillReceiveProps() {}
        // shouldComponentUpdate() {}
        // componentWillUpdate() {}
        value: function componentDidUpdate() {
            _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this) && _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this).call(this);
            popupManager.handle(this);
        }

        // componentWillUnmount() {}
        // forceUpdate() {}

    }]);

    return PopupComponent;
}(_BaseComponent3.default);

exports.default = PopupComponent;

/***/ }),
/* 29 */
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

var _Constants = __webpack_require__(7);

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
/* 30 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjliMDQyNGRjNDhkNWZjM2U0Y2UiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJwcm90b3R5cGUiLCJoYW5kbGVFdmVudCIsIm1hcCIsImNsaWNrIiwiY2hhbmdlIiwibW91c2VvdmVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJtb3VzZW91dCIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZW1vdmUiLCJmb2N1cyIsImJsdXIiLCJjYXBpdGFsaXplIiwidHlwZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwibWV0aG9kIiwiY29uc29sZSIsImluZm8iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsImJpbmQiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnRJZCIsInRvTG93ZXJDYXNlIiwib2JqIiwic3RhdGVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsImlzT2JqIiwiY2xvbmUiLCJnZXRDZW50ZXJQb3NpdGlvbiIsImdldENsc05hbWUiLCJPYmplY3QiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXRlT2JqZWN0IiwiX2YiLCJyb290IiwicmVzdWx0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwidmFsdWVJc09iaiIsInIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJmcm9tIiwiZmlsdGVyIiwicyIsImpvaW4iLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwiQnV0dG9uIiwib25DbGlja2VkIiwidGV4dCIsInN0cmluZyIsImZ1bmMiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiY29tcG9uZW50IiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIZWFkZXIiLCJzdGF0ZSIsInRlc3QiLCJNYXRoIiwicmFuZG9tIiwiQXBwIiwiYWN0aXZlSWQiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzcGxpdCIsInNldFN0YXRlIiwibm9kZSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJkb21Ob2RlIiwicGFyZW50RWxlbWVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZmxvb3IiLCJvbk1vdXNlRG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsIkNvbnRlbnRQYW5lIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsInRyYW5zZm9ybVN0YXRlIiwiZGlhbG9nMSIsImlzT3BlbiIsImRpYWxvZzIiLCJncmlkIiwiYnV0dG9uIiwiaGlkZGVuIiwibGF5b3V0IiwibWVudSIsImRpYWxvZyIsImRpYWxvZzFJc09wZW4iLCJkaWFsb2cySXNPcGVuIiwiaGVhZGVyQ2xhc3MiLCJnZXRMaWJQcmVmaXhlZENsYXNzIiwiY2xvc2VCdG5DbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2FuY2VsQnRuQ2xhc3MiLCJjb25maXJtQnRuQ2xhc3MiLCJvbkNhbmNlbEJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJyZXBvc2l0aW9uIiwib3BlbiIsImNsb3NlIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJjdXJyZW50VGFyZ2V0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJyZWN0IiwiZGlhbG9nQmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnRUb01vdXNlIiwidG9wVG9Nb3VzZSIsIm1heCIsIm1pbiIsIm1vZCIsImJvZHkiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsb3NlQnRuTGFiZWwiLCJwb3NpdGlvbiIsImhlbHBMYWJlbCIsIm9uQ2xvc2UiLCJwb3B1cE1hbmFnZXIiLCJ0eXBlcyIsImV2ZW50VHlwZSIsImV2ZW50SGFuZGxlciIsImFkZCIsInJlbW92ZSIsInNhdmVkQ29tcG9uZW50IiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwiaGFuZGxlIiwiaXNQb3B1cCIsIlBvcHVwQ29tcG9uZW50IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSxpQkFBVUEsU0FBVixDQUFvQkMsV0FBcEIsR0FBbUMsWUFBWTtBQUMzQztBQUNBLFFB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UUFBUTBDLFlBQVIsR0FBdUI7QUFDbkIrUCxhQUFTO0FBRFUsQ0FBdkI7O0FBSUF6UyxRQUFRMkMsU0FBUixHQUFvQjtBQUNoQjhQLGFBQVMsb0JBQVU3TSxNQURIO0FBRWhCaUosWUFBUSxvQkFBVWpNO0FBRkYsQ0FBcEIsQzs7Ozs7Ozs7Ozs7O1FDL0JnQjhQLGdCLEdBQUFBLGdCOzs7O0FBQVQsU0FBU0EsZ0JBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDQyxTQUF0QyxFQUFpRDtBQUNwRCxRQUFJQyxjQUFjLE9BQU9ELFNBQVAsS0FBcUIsV0FBdkM7QUFBQSxRQUNJRSxnQkFBZ0IsUUFEcEI7O0FBR0EsV0FBTyxVQUFTN08sS0FBVCxFQUFnQjVLLEtBQWhCLEVBQXVCO0FBQzFCLG1DQUFTc1osYUFBYUcsYUFBdEIsRUFBc0NELGNBQWNELFNBQWQsR0FBMEIsQ0FBQzNPLE1BQU0wTyxhQUFhRyxhQUFuQixDQUFqRTtBQUNILEtBRkQ7QUFHSCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5YjA0MjRkYzQ4ZDVmYzNlNGNlIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJ1xuICAgIH07XG5cbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvLyBvbmUgaGFuZGxlRXZlbnQgdG8gcnVsZSB0aGVtIGFsbFxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBtYXBbZS50eXBlXSB8fCBjYXBpdGFsaXplKGUudHlwZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXRob2QsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykgdGhpcy5wcm9wc1ttZXRob2RdKGUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMpIHRoaXNbbWV0aG9kXShlKTtcbiAgICB9O1xufSgpKTtcblxuLy8gdXNlIGZvciBjb21wb25lbnRJZFxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgdG8gc2F2ZSBtZW1vcnlcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saWJDbGFzc1ByZWZpeCA9ICdlJztcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucG9zdFJlZ2lzdGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge31cbiAgICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7fVxuICAgIC8vIGZvcmNlVXBkYXRlKCkge31cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke3RoaXMuYmFzZUNsYXNzTmFtZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgLy8gZW5zdXJlIHdlIGhhdmUgcmVnaXN0ZXJcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSB8fCAwO1xuICAgICAgICAvLyBhZGQgb25lXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gKyAxO1xuICAgICAgICAvLyBhc3NpZ24gbmFtZVxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyByZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZShvYmopIHtcbiAgICAgICAgc3VwZXIuc2V0U3RhdGUob2JqKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJleHBvcnQgY29uc3QgekluZGV4cyA9IHtcbiAgICBEaWFsb2c6IDMwMDAsXG4gICAgT3ZlcmxheTogMjAwMCxcbiAgICBEcm9wZG93bjogMTAwMFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCIvLyBpc09iajogY2hlY2sgaWYgdGhlIGdpdmVuIG9iaiBpcyBhbiBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBpc09iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbi8vIGNsb25lOiBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8vIGZsYXR0ZW4gc3RhdGUgb2JqZWN0XG4vLyBncmlkOntsYXlvdXQ6e21lbnU6e2V4cGFuZDp0cnVlfX19fSA9PiBncmlkTGF5b3V0TWVudUV4cGFuZDp0cnVlXG5leHBvcnQgZnVuY3Rpb24gZShzdGF0ZU9iamVjdCkge1xuICAgIGZ1bmN0aW9uIF9mKHN0YXRlT2JqZWN0LCByb290LCByZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVJc09iaiA9IGlzT2JqKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqKSB7XG4gICAgICAgICAgICAgICAgX2YodmFsdWUsIHIsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBzcGxpdHRlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW4sIGlzVmVydGljYWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke2lzVmVydGljYWwgPyBgIHZlcnRpY2FsYCA6ICcgaG9yaXpvbnRhbCd9YCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXR0ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGlzVmVydGljYWw6IHRydWVcbn07XG5cblNwbGl0dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcbiAgICB9XG5cbiAgIG9uQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dGV4dCwgdHlwZSwgdGl0bGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSB0aXRsZT17dGl0bGUgfHwgdGV4dH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+e3RleHR9PC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICdCdXR0b24nLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIHRpdGxlOiAnJ1xufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xuXG5jb25zdCBuYXZEZWYgPSBbXG4gICAge2lkOiAnbW9uJywgbGFiZWw6ICdNb25pdG9yaW5nJywgdXJsOiAnLyNtb24nLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIk1vbml0b3JpbmdcIiAvPn0sXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBXaWRnZXRzJywgdXJsOiAnLyNmb3JtJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJGb3JtcyBXaWRnZXRcIiAvPn0sXG4gICAge2lkOiAnd2lkZ2V0cycsIGxhYmVsOiAnV2lkZ2V0cycsIGV4cGFuZDogdHJ1ZSwgY2hpbGRyZW46IFtcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXG4gICAgICAgIHtpZDogJ3dpemFyZCcsIGxhYmVsOiAnV2l6YXJkJywgdXJsOiAnLyN3aWRnZXRzL3dpemFyZCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiV2lhcmRcIiAvPn0sXG4gICAgICAgIHtpZDogJ3Rvb2x0aXAnLCBsYWJlbDogJ1Rvb2x0aXAnLCB1cmw6ICcvI3dpZGdldHMvdG9vbHRpcCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiVG9vbHRpcHNcIiAvPn0sXG4gICAgICAgIHtpZDogJ2JhcnMnLCBsYWJlbDogJ0JhcnMnLCB1cmw6ICcvI3dpZGdldHMvYmFycycsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiQmFyc1wiIC8+fSxcbiAgICAgICAge2lkOiAnYWxlcnRzJywgbGFiZWw6ICdBbGVydHMnLCB1cmw6ICcvI3dpZGdldHMvYWxlcnRzJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJBbGVydHNcIiAvPn1cbiAgICBdfVxuXTtcblxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XG4gICAgICAgIGlmIChuLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuYXYucHVzaChuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMucHVzaChuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufSkoQXJyYXkuZnJvbShuYXZEZWYpKTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgbmFtZT1cIk9LXCIgbmF2PXtuYXZEZWZ9IHBhZ2VzPXtwYWdlc0RlZn0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXN0OiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8aDEgZ2lkPXt0aGlzLnN0YXRlLnRlc3R9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSWQ6ICdtb24nXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQ6IG5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJsZWZ0UGFuZVwiIHNwbGl0dGVyPVwidmVydGljYWxcIiBzaXplPXsyMDB9IG1pblNpemU9ezIwMH0gbWF4U2l6ZT17NTAwfSBzaXplVW5pdD1cInB4XCIgPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcgZGVmPXt0aGlzLnByb3BzLm5hdn0gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJyaWdodFBhbmVcIiBkaXNwbGF5PVwiZmxleFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZSBzcGxpdHRlcj1cImhvcml6b250YWxcIiBzaXplPXs3NX0gbWF4U2l6ZT17ODB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIC8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPC9Cb3JkZXJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BcHAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JkZXJDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYm9yZGVyQ29udGFpbmVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb3JkZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJydcbn07XG5cbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcnNpc3Q6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiBrZXlib2FyZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xuICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge3NwbGl0dGVyLCBzaXplLCBzaXplVW5pdCwgbWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHR9ID0gdGhpcy5kb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnbnVsbCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bihlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXG4gICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRYID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WCA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WCksXG4gICAgICAgICAgICAgIHRvcCA9IGNsaWVudFkgPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRZIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRZKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUoZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJyA/IGAgdmVydGljYWxQYW5lYCA6ICcnfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcGxpdHRlclN0eWxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNwbGl0dGVyOiAnbnVsbCcsXG4gICAgc2l6ZTogMjUsXG4gICAgbWluU2l6ZTogMTUsXG4gICAgbWF4U2l6ZTogNTAsXG4gICAgc2l6ZVVuaXQ6ICclJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxufTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyU2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmQ6IHRoaXMucHJvcHMuZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpZCwgbGFiZWwsIHVybCwgY2hpbGRyZW4sIG9uVHJlZU5vZGVDbGljaywgYWN0aXZlSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsID8gdXJsIDogJ2phdmFzY3JpcHQ6dm9pZCgwKSd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb2N1c0NsYXNzOiAnZm9jdXNlZCcsXG4gICAgZXhwYW5kb0V4cGFuZENsYXNzOiAnZXhwYW5kJyxcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xufTtcblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb2N1c0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvY3VzQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZVZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xuICAgIH1cbiAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKTtcblxuICAgICAgICAvLyBpZiBubyBzZWxlY3Rpb24gb3Igbm8gY2hpbGRyZW4sIGZvY3VzIHRhcmdldFxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IHRoaXMucHJvcHMuYWN0aXZlSWQgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0gey4uLmN9IC8+KX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudFBhbmUgZnJvbSAnLi4vQ29udGVudFBhbmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gZGF0YS1hY3RpdmUtaWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2MuY29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRQYW5lPilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZjogW11cbn07XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNvbnRlbnRQYW5lYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvRGlhbG9nJztcbmltcG9ydCBPdmVybGF5IGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvZ2dsZURpYWxvZ09wZW4gfSBmcm9tICcuL0RpYWxvZ3NBY3Rpb24nO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CdXR0b25DbGlja2VkKGUsIGJ1dHRvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oYnV0dG9uLnByb3BzLmRpYWxvZykpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIGNsb3NlRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIG9wZW5EaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIHRydWUpKTtcbiAgICB9XG5cbiAgICBzaG91bGRTaG93T3ZlcmxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlhbG9nMUlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzJJc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMUlzT3Blbn0gY29tcG9uZW50SWQ9XCJkaWFsb2cxXCIgdGl0bGU9XCJkaWFsb2cxXCIgb3Blbj17dGhpcy5vcGVuRGlhbG9nfSBjbG9zZT17dGhpcy5jbG9zZURpYWxvZ30gLz5cbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cySXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHVwQ29tcG9uZW50IGZyb20gJy4uLy4uL1BvcHVwQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENlbnRlclBvc2l0aW9uICwgZ2V0Q2xzTmFtZX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XG5cbmxldCB6SW5kZXggPSB6SW5kZXhzLkRpYWxvZztcblxuLy8gRGlhbG9nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQb3B1cENvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRpYWxvZ2A7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNsb3NlJyk7XG4gICAgICAgIHRoaXMuYm9keUNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYm9keScpO1xuICAgICAgICB0aGlzLmZvb3RlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2FuY2VsJyk7XG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNvbmZpcm0nKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZCA9IHRoaXMub25DbG9zZUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICAgIGxldCB7bGVmdCwgdG9wfSA9IGdldENlbnRlclBvc2l0aW9uKHdpbmRvdywgdGhpcy5kb21Ob2RlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCB7IG9wZW4sIGNsb3NlLCByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5leHRPcGVuID0gcHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBwcm9wcy5pc09wZW4gPT09IGZhbHNlICYmIGlzT3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICBvcGVuKHt9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVwb3NpdGlvbk9uT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRDbG9zZSkge1xuICAgICAgICAgICAgY2xvc2Uoe30sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKGUsIHRoaXMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNhbmNlbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQoZSk7XG5cbiAgICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICBvbkNhbmNlbChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICAgICAgb25Db25maXJtKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICAvLyBvbmx5IGNsaWNrIG9uIHRoZSBoZWFkZXIgLCB3ZSBzdGFydCBkcmFnaW5nIHRoZSBkaWFsb2dcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gZS50YXJnZXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGxldCBkaWFsb2dCZWluZ01vdmVkID0gdGhpcy5kb21Ob2RlLFxuICAgICAgICAgICAgICByZWN0ID0gZGlhbG9nQmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAge2xhc3RNb3VzZVgsIGxhc3RNb3VzZVl9ID0gdGhpcyxcbiAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgdG9wVG9Nb3VzZSA9IGNsaWVudFkgLSBsYXN0TW91c2VZLFxuICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS5sZWZ0ICsgbGVmdFRvTW91c2UpLFxuICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGVmdDogTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoLCBsZWZ0KSxcbiAgICAgICAgICAgIHRvcDogTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQsIHRvcClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gY2xpZW50WDtcbiAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gY2xpZW50WTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21vZCwgdGl0bGUsIGJvZHksIGNhbmNlbExhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSksXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogdGhpcy5zdGF0ZS56SW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbHN9IHJlZj17ZGlhbG9nID0+IHRoaXMuZG9tTm9kZSA9IGRpYWxvZ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9IG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWR9IHRleHQ9e2NhbmNlbExhYmVsfSBjbGFzc05hbWU9e3RoaXMuY2FuY2VsQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2Q6ICcnLFxuICAgIHRpdGxlOiAnRGlhbG9nIFRpdGxlJyxcbiAgICBib2R5OiAnQU5SMTAzMjgyOSBUaGlzIGlzIGEgc2FtcGxlIG1lc3NhZ2UuIERkbGZrd2Vyb2l1IHNkZnIgc2RmamVyaXUgZGZlcmVyZGZzZi4nLFxuICAgIGhlbHBMYWJlbDogJ0hlbHAnLFxuICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBjbG9zZUJ0bkxhYmVsOiAnQ2xvc2UnLFxuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgcmVwb3NpdGlvbk9uT3BlbjogdHJ1ZSxcbiAgICBjbG9zZTogKCkgPT4ge31cbn07XG5cbkRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVscExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZUJ0bkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlcG9zaXRpb25Pbk9wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcblxubGV0IHBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSAmJiBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgICAgcG9wdXBNYW5hZ2VyLmhhbmRsZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG4gICAgLy8gZm9yY2VVcGRhdGUoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qb3B1cENvbXBvbmVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJ0lzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9