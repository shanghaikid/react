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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 2 */
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
        if (method in this.props) {
            this.props[method](e, this);
            return;
        }
        if (method in this) this[method](e, this);
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

    function BaseComponent() {
        var _ref;

        _classCallCheck(this, BaseComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // TODO: find a better way to save memory
        var _this = _possibleConstructorReturn(this, (_ref = BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call.apply(_ref, [this].concat(args)));

        _this.handleEvent = _this.handleEvent.bind(_this);
        _this.processRef = _this.processRef.bind(_this);
        _this.libClassPrefix = 'e';
        _this.baseClassName = 'component';

        _this.init.apply(_this, args);
        _this.register.apply(_this, args);
        _this.postRegister.apply(_this, args);
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
        key: 'processRef',
        value: function processRef(component) {
            this.domNode = ReactDOM.findDOMNode(component);
        }
    }, {
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
        value: function setState() {
            var _get2;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if ((0, _utils.isObj)(args[0])) {
                args[0] = this.transformState(args[0]);
            }

            (_get2 = _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this)).call.apply(_get2, [this].concat(args));
        }

        // get state by name
        // if key is provided, return specified value
        // if key is ignored, return whole state object

    }, {
        key: 'getState',
        value: function getState(name, key) {
            var delmiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '$';

            if (typeof key !== 'undefined') {
                return this.state[name + delmiter + key];
            }

            var result = {},
                found = false;

            for (var _key3 in this.state) {
                if (_key3.startsWith('' + name + delmiter)) {
                    result[_key3.split('' + delmiter).splice(-1)] = this.state[_key3];
                    found = true;
                }
            }

            return found ? result : this.state[name];
        }

        // get mulitple children state

    }, {
        key: 'getStates',
        value: function getStates() {
            var _this2 = this;

            var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var delmiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$';

            var result = [];

            var _loop = function _loop(key) {
                names.some(function (name, i) {
                    if (key.startsWith('' + name + delmiter)) {
                        result[i] = result[i] || {};
                        result[i][key.split('' + delmiter).splice(-1)] = _this2.state[key];
                        return true;
                    }
                });
            };

            for (var key in this.state) {
                _loop(key);
            }

            return result;
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
exports.isEmpty = isEmpty;
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
// grid:{layout:{menu:{expand:true}}}} => grid-layout-menu-expand:true
function e(stateObject) {
    var delmiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$';

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
                    r = '' + (root ? root + delmiter + key : key);
                // r = `${root}${root === '' ? key : key.charAt(0).toUpperCase() + key.slice(1)}`;

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

// isEmpty: check if the string is empty
function isEmpty(value) {
    var trim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    return (trim ? /^\s*$/ : /^$/).test(value); // Boolean
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = exports.validatable = exports.PopupManager = exports.popupable = exports.draggable = undefined;

var _draggable = __webpack_require__(31);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(32);

var _popupable2 = _interopRequireDefault(_popupable);

var _PopupManager = __webpack_require__(15);

var _PopupManager2 = _interopRequireDefault(_PopupManager);

var _validatable = __webpack_require__(33);

var _validatable2 = _interopRequireDefault(_validatable);

var _withTooltip = __webpack_require__(34);

var _withTooltip2 = _interopRequireDefault(_withTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.draggable = _draggable2.default;
exports.popupable = _popupable2.default;
exports.PopupManager = _PopupManager2.default;
exports.validatable = _validatable2.default;
exports.withTooltip = _withTooltip2.default;

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonView = exports.ButtonView = function (_BaseComponent) {
    _inherits(ButtonView, _BaseComponent);

    function ButtonView() {
        _classCallCheck(this, ButtonView);

        return _possibleConstructorReturn(this, (ButtonView.__proto__ || Object.getPrototypeOf(ButtonView)).apply(this, arguments));
    }

    _createClass(ButtonView, [{
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
                title = _props.title,
                disabled = _props.disabled;


            return _react2.default.createElement(
                'button',
                { disabled: disabled, type: type, title: title || text, className: this.className, onClick: this.handleEvent },
                text
            );
        }
    }]);

    return ButtonView;
}(_BaseComponent3.default);

ButtonView.defaultProps = {
    text: 'Button',
    type: 'button',
    title: '',
    disabled: false
};

ButtonView.propTypes = {
    className: _propTypes2.default.string,
    text: _propTypes2.default.string,
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    onClicked: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
};

var Button = (0, _Helper.withTooltip)(ButtonView);
exports.default = Button;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

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

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(2);

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
            // class
            this.baseClassName = 'header';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                { className: this.className },
                this.props.text
            );
        }
    }]);

    return Header;
}(_BaseComponent3.default);

exports.default = Header;


Header.defaultProps = {
    text: ''
};

Header.defaultTypes = {
    text: _propTypes2.default.string
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

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

var _propTypes = __webpack_require__(1);

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PopupManager = {
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
            if (component && component.domNode && component.domNode.offsetHeight !== 0) {
                this.remove(component);
                // TODO: find a way to decouple
                component.props.close({}, component);
            }
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

exports.default = PopupManager;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(29);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Forms = __webpack_require__(37);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Header2.default, { text: 'Monitoring' }) }, { id: 'form', label: 'Form Elements', url: '/#form', component: _react2.default.createElement(_Forms2.default, null) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'bars', label: 'Bars', url: '/#widgets/bars', component: _react2.default.createElement(_Header2.default, { text: 'Bars' }) }, { id: 'alerts', label: 'Alerts', url: '/#widgets/alerts', component: _react2.default.createElement(_Header2.default, { text: 'Alerts' }) }] }, { id: 'speical', label: 'Special', expand: true, children: [{ id: 'infinite', label: 'Infinite Scroll', url: '/#widgets/infiniteScroll', component: _react2.default.createElement(_Header2.default, { text: 'Infinite Scroll' }) }] }];

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

var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(12);
var assign = __webpack_require__(19);

var ReactPropTypesSecret = __webpack_require__(8);
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
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(12);
  var ReactPropTypesSecret = __webpack_require__(8);
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



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(23);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(24);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(13);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(25);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(26);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _WindowMemoryViewer = __webpack_require__(28);

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

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(1);

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

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Splitter = __webpack_require__(13);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _propTypes = __webpack_require__(1);

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

var _BaseComponent3 = __webpack_require__(2);

var _BaseComponent4 = _interopRequireDefault(_BaseComponent3);

var _propTypes = __webpack_require__(1);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _ContentPane = __webpack_require__(27);

var _ContentPane2 = _interopRequireDefault(_ContentPane);

var _propTypes = __webpack_require__(1);

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
                        _react2.default.cloneElement(c.component, { active: c.id === _this2.props.activeId })
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
/* 27 */
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

var _propTypes = __webpack_require__(1);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Dialog = __webpack_require__(30);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(35);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(36);

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
            return this.state.dialog1$isOpen || this.state.dialog2$isOpen;
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
                _react2.default.createElement(_Dialog2.default, { isOpen: this.state.dialog1$isOpen, componentId: 'dialog1', title: 'dialog1', open: this.openDialog, close: this.closeDialog }),
                _react2.default.createElement(_Dialog2.default, { isOpen: this.state.dialog2$isOpen, componentId: 'dialog2', title: 'dialog2', open: this.openDialog, close: this.closeDialog, repositionOnOpen: false })
            );
        }
    }]);

    return Dialogs;
}(_BaseComponent3.default);

exports.default = Dialogs;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _Button = __webpack_require__(9);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = draggable;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// draggable
function draggable(Component, classProperty) {
    var DraggableComponent = function (_Component) {
        _inherits(DraggableComponent, _Component);

        function DraggableComponent() {
            _classCallCheck(this, DraggableComponent);

            return _possibleConstructorReturn(this, (DraggableComponent.__proto__ || Object.getPrototypeOf(DraggableComponent)).apply(this, arguments));
        }

        _createClass(DraggableComponent, [{
            key: 'init',
            value: function init() {
                var _get2;

                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }

                (_get2 = _get(DraggableComponent.prototype.__proto__ || Object.getPrototypeOf(DraggableComponent.prototype), 'init', this)).call.apply(_get2, [this].concat(props));
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
                if (classProperty && !e.target.classList.contains(this[classProperty])) return;
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = popupable;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(14);

var _PopupManager = __webpack_require__(15);

var _PopupManager2 = _interopRequireDefault(_PopupManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            value: function init() {
                var _get2;

                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }

                (_get2 = _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'init', this)).call.apply(_get2, [this].concat(props));
                // state
                this.state = {
                    zIndex: zIndex++
                };
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this) && _get(PopupComponent.prototype.__proto__ || Object.getPrototypeOf(PopupComponent.prototype), 'componentDidUpdate', this).call(this);
                _PopupManager2.default.handle(this);
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
                return React.createElement(Component, _extends({}, this.props, { ref: this.processRef.bind(this), styleObj: styleObj }));
            }
        }]);

        return PopupComponent;
    }(Component);

    return PopupComponent;
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

exports.default = validatable;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
    message: '',
    mod: ''
};

// validatable
function validatable(Component) {
    var ValidatableComponent = function (_Component) {
        _inherits(ValidatableComponent, _Component);

        function ValidatableComponent() {
            _classCallCheck(this, ValidatableComponent);

            return _possibleConstructorReturn(this, (ValidatableComponent.__proto__ || Object.getPrototypeOf(ValidatableComponent)).apply(this, arguments));
        }

        _createClass(ValidatableComponent, [{
            key: 'init',
            value: function init() {
                var _get2;

                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }

                (_get2 = _get(ValidatableComponent.prototype.__proto__ || Object.getPrototypeOf(ValidatableComponent.prototype), 'init', this)).call.apply(_get2, [this].concat(props));
                // handler
                this.onBlur = this.onBlur.bind(this);
                this.onFocus = this.onFocus.bind(this);
                // state
                this.state = Object.assign({}, this.state, initState);
                // local variable should not be used as trigger tag
                this._hasBeenBlurred = false;
            }
        }, {
            key: 'getMessage',
            value: function getMessage(mod) {
                return this.messageDef[mod];
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                _get(ValidatableComponent.prototype.__proto__ || Object.getPrototypeOf(ValidatableComponent.prototype), 'componentWillReceiveProps', this) && _get(ValidatableComponent.prototype.__proto__ || Object.getPrototypeOf(ValidatableComponent.prototype), 'componentWillReceiveProps', this).call(this, nextProps);

                var _props = this.props,
                    disabled = _props.disabled,
                    inputValue = _props.inputValue,
                    nextDisabled = nextProps.disabled === true && disabled === false,
                    nextEnabled = nextProps.disabled === false && disabled === true,
                    valueChanged = nextProps.inputValue !== inputValue;


                if (nextDisabled) {
                    this.setState({
                        mod: '',
                        message: ''
                    });
                }

                if (nextEnabled) {
                    this.validate();
                }

                if (valueChanged) {
                    if (this._hasBeenBlurred) {
                        this.validate(nextProps.inputValue);
                    }
                }
            }
        }, {
            key: 'onBlur',
            value: function onBlur(e) {
                // set blur flag
                this._hasBeenBlurred = true;
                this.validate();
            }
        }, {
            key: 'onFocus',
            value: function onFocus(e, t) {
                this.setState({
                    mod: '',
                    message: ''
                });
                if (this.props.onFocus) {
                    this.props.onFocus(e);
                }
            }
        }, {
            key: 'reset',
            value: function reset() {
                this.setState(Object.assign({}, initState));
                this._hasBeenBlurred = false;
            }
        }, {
            key: 'isValid',
            value: function isValid(value) {
                var _props2 = this.props,
                    regExp = _props2.regExp,
                    validator = _props2.validator;


                if (!regExp && !validator) return true;

                return regExp && regExp.test(value) || validator(value);
            }
        }, {
            key: 'validate',
            value: function validate() {
                var _this2 = this;

                var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.inputValue;
                var _props3 = this.props,
                    required = _props3.required,
                    onValidated = _props3.onValidated,
                    isValueEmpty = (0, _utils.isEmpty)(inputValue),
                    notValid = !this.isValid(inputValue),
                    mod = isValueEmpty && required ? 'missing' : notValid ? 'error' : '',
                    message = this.getMessage(mod);


                this.setState({ mod: mod, message: message }, function () {
                    onValidated && onValidated({ mod: mod, message: message, ok: mod === '' }, _this2);
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var newProps = {
                    mod: this.state.mod,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    message: this.state.message
                };

                if (this.state.mod !== '') {
                    newProps.tooltip = this.state.message;
                }

                return React.createElement(Component, _extends({}, this.props, newProps, {
                    ref: this.processRef.bind(this)
                }));
            }
        }, {
            key: 'messageDef',
            get: function get() {
                return {
                    error: this.props.invalidMessage,
                    missing: this.props.missingMessage,
                    imcomplete: this.props.promptMessage,
                    '': ''
                };
            }
        }]);

        return ValidatableComponent;
    }(Component);

    ValidatableComponent.defaultProps = Object.assign({}, Component.defaultProps, {
        required: false,
        promptMessage: '',
        invalidMessage: 'This field is not valid',
        missingMessage: 'This field is required.'
    });

    ValidatableComponent.propTypes = Object.assign({}, Component.propTypes, {
        required: _propTypes2.default.bool,
        promptMessage: _propTypes2.default.string,
        invalidMessage: _propTypes2.default.string,
        missingMessage: _propTypes2.default.string,
        regExp: _propTypes2.default.regExp,
        validator: _propTypes2.default.func,
        onValidated: _propTypes2.default.func
    });

    return ValidatableComponent;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = withTooltip;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// withTooltip
// currently I used css peseudo-element as tooltip
// but I feel we may need a better solution
// because it has some limitation:
// for example, peseduo-element only support pure text
// so no HTML is can be shown
// TODO: better solution, maybe another helper to support HTML
function withTooltip(Component) {
    var ComponentWithTooltip = function (_Component) {
        _inherits(ComponentWithTooltip, _Component);

        function ComponentWithTooltip() {
            _classCallCheck(this, ComponentWithTooltip);

            return _possibleConstructorReturn(this, (ComponentWithTooltip.__proto__ || Object.getPrototypeOf(ComponentWithTooltip)).apply(this, arguments));
        }

        _createClass(ComponentWithTooltip, [{
            key: 'init',
            value: function init() {
                var _get2;

                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }

                (_get2 = _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'init', this)).call.apply(_get2, [this].concat(props));
                // handler
                this.onMouseEnter = this.onMouseEnter.bind(this);
                this.onMouseLeave = this.onMouseLeave.bind(this);
                // state
                this.state = Object.assign({}, this.state, {
                    showTooltip: false,
                    tooltip: '',
                    containerDisplay: ''
                });
                // local variable
                this.showTooltipTimeout = null;
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _get3;

                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidMount', this) && (_get3 = _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidMount', this)).call.apply(_get3, [this].concat(args));
                // copy children display value
                this.setState({ containerDisplay: window.getComputedStyle(this.domNode, null).getPropertyValue('display') });

                if (this.props.showTooltipOnLoad && this.props.tooltip !== '') {
                    this.setState({ showTooltip: true, tooltip: this.props.tooltip }, this.hideTooltip.bind(this));
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentWillReceiveProps', this) && _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentWillReceiveProps', this).call(this, nextProps);

                var tooltip = nextProps.tooltip,
                    tooltipText = nextProps.tooltipText;

                this.setState({
                    tooltip: typeof tooltip !== 'undefined' ? tooltip : tooltipText
                });
            }
        }, {
            key: 'showTooltip',
            value: function showTooltip(tooltip) {
                var _this2 = this;

                var hideAfterShown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                if (this.showTooltipTimeout) {
                    window.clearTimeout(this.showTooltipTimeout);
                    this.showTooltipTimeout = null;
                }
                this.showTooltipTimeout = window.setTimeout(function () {
                    _this2.setState({ showTooltip: true, tooltip: tooltip }, hideAfterShown ? _this2.hideTooltip.bind(_this2) : function () {});
                }, this.props.showTooltipTimeout);
            }
        }, {
            key: 'hideTooltip',
            value: function hideTooltip() {
                var clearTooltip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                this.setState({ showTooltip: false });
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(e) {
                this.showTooltip(this.props.tooltip || this.props.tooltipText, false);
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave(e) {
                this.setState({ showTooltip: false });
            }
        }, {
            key: 'render',
            value: function render() {
                var _newProps;

                var _state = this.state,
                    tooltip = _state.tooltip,
                    showTooltip = _state.showTooltip,
                    newProps = (_newProps = {}, _defineProperty(_newProps, 'data-tooltip', tooltip), _defineProperty(_newProps, 'data-tooltip-show', showTooltip ? 'yes' : 'no'), _newProps),
                    style = {
                    display: this.state.containerDisplay
                };

                // make sure the outter is a block container
                // so that we can use ::after or ::before as tooltip element

                return React.createElement(
                    'div',
                    _extends({}, newProps, {
                        style: style,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onFocus: this.onFocus
                    }),
                    React.createElement(Component, _extends({}, this.props, {
                        ref: this.processRef
                    }))
                );
            }
        }, {
            key: 'focused',
            get: function get() {
                return this.domNode.contains(document.activeElement);
            }
        }]);

        return ComponentWithTooltip;
    }(Component);

    ComponentWithTooltip.defaultProps = Object.assign({
        tooltipText: '',
        showTooltip: false,
        showTooltipOnLoad: false,
        showTooltipTimeout: 20,
        hideTooltipTimeout: 1000
    }, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltip: _propTypes2.default.string,
        tooltipText: _propTypes2.default.string, // initial tooltip
        showTooltip: _propTypes2.default.bool,
        showTooltipOnLoad: _propTypes2.default.bool,
        showTooltipTimeout: _propTypes2.default.number,
        hideTooltipTimeout: _propTypes2.default.number
    });

    return ComponentWithTooltip;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(14);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleDialogOpen = toggleDialogOpen;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggleDialogOpen(dialogName, openState) {
    var hasStateSet = typeof openState !== 'undefined',
        openStateName = '$isOpen';

    return function (state, props) {
        return _defineProperty({}, dialogName + openStateName, hasStateSet ? openState : !state[dialogName + openStateName]);
    };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(38);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _Dropdown = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
    nameField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Name',
        name: 'nameField',
        required: true
    },
    pwdField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Password',
        type: 'password',
        name: 'pwdField'
    },
    hidden: true
};

// Form page

var Forms = function (_BaseComponent) {
    _inherits(Forms, _BaseComponent);

    function Forms() {
        _classCallCheck(this, Forms);

        return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).apply(this, arguments));
    }

    _createClass(Forms, [{
        key: 'init',
        value: function init() {
            this.state = this.transformState(initState);
        }
    }, {
        key: 'toggleFieldDisable',
        value: function toggleFieldDisable(name) {
            this.setState(_defineProperty({}, name, {
                disabled: !this.getState(name, 'disabled')
            }));
        }
    }, {
        key: 'resetAll',
        value: function resetAll() {
            var _this2 = this;

            this.setState(this.transformState(initState), function () {
                _this2.nameField.reset();
                _this2.pwdField.reset();
            });
        }
    }, {
        key: 'validator',
        value: function validator(v) {
            return v.includes('s');
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.setState(_defineProperty({}, e.target.name, {
                inputValue: e.target.value
            }));
        }
    }, {
        key: 'onValidated',
        value: function onValidated(_ref) {
            var message = _ref.message,
                mod = _ref.mod,
                ok = _ref.ok;

            console.info(message, mod, ok);
            // TODO: update tooltip or some message box
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = {
                width: '100%',
                height: '100%'
            },
                _getStates = this.getStates(['nameField', 'pwdField']),
                _getStates2 = _slicedToArray(_getStates, 2),
                i1 = _getStates2[0],
                i2 = _getStates2[1];


            i1.validator = this.validator;
            i2.validator = this.validator;
            i1.onValidated = this.onValidated.bind(this);

            return _react2.default.createElement(
                'div',
                { style: style, className: 'forms' },
                _react2.default.createElement(
                    'form',
                    { onChange: this.handleEvent },
                    _react2.default.createElement(_Header2.default, { text: 'Buttons' }),
                    _react2.default.createElement(_Button2.default, { showTooltipOnLoad: false, onClicked: this.toggleFieldDisable.bind(this, 'nameField'), text: 'Toggle Disable Name Field' }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.toggleFieldDisable.bind(this, 'pwdField'), text: 'Toggle Disable Password Field' }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.resetAll.bind(this), text: 'Reset All' }),
                    _react2.default.createElement(_Button2.default, { disabled: true, tooltip: 'Disabled tooltip', text: 'Disabled' }),
                    _react2.default.createElement(_Header2.default, { text: 'ValidationTextBox' }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, _extends({}, i1, { ref: function ref(name) {
                                return _this3.nameField = name;
                            } }))
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, _extends({ tooltipText: "normal tooltip" }, i2, { ref: function ref(name) {
                                return _this3.pwdField = name;
                            } }))
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, { disabled: true, tooltipText: "Disabled tooltip", inputValue: 'I am disabled' })
                    ),
                    _react2.default.createElement(
                        'small',
                        null,
                        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.'
                    ),
                    _react2.default.createElement(_Header2.default, { text: 'Dropdown' }),
                    _react2.default.createElement(
                        _Dropdown.Dropdown,
                        null,
                        _react2.default.createElement(
                            _Dropdown.DropdownItem,
                            null,
                            'Dropdown item1'
                        ),
                        _react2.default.createElement(
                            _Dropdown.DropdownItem,
                            null,
                            _react2.default.createElement(_Button2.default, { text: 'Dropdown item2' })
                        )
                    ),
                    _react2.default.createElement(_Header2.default, { text: 'Combo Box' })
                )
            );
        }
    }]);

    return Forms;
}(_BaseComponent3.default);

exports.default = Forms;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextInputView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInputView = exports.TextInputView = function (_BaseComponent) {
    _inherits(TextInputView, _BaseComponent);

    function TextInputView() {
        _classCallCheck(this, TextInputView);

        return _possibleConstructorReturn(this, (TextInputView.__proto__ || Object.getPrototypeOf(TextInputView)).apply(this, arguments));
    }

    _createClass(TextInputView, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'textInput';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                placeholder = _props.placeholder,
                type = _props.type,
                disabled = _props.disabled,
                name = _props.name,
                mod = _props.mod,
                inputValue = _props.inputValue,
                cls = (0, _utils.getClsName)(this.className, mod);


            return _react2.default.createElement('input', { ref: function ref(input) {
                    return _this2.domNode = input;
                },
                className: cls,
                placeholder: placeholder,
                disabled: disabled,
                name: name,
                type: type,
                value: inputValue,
                onChange: this.handleEvent,
                onFocus: this.handleEvent,
                onBlur: this.handleEvent
            });
        }
    }]);

    return TextInputView;
}(_BaseComponent3.default);

TextInputView.defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false,
    inputValue: ''
};

TextInputView.propTypes = {
    mod: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    type: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.name,
    onChange: _propTypes2.default.func
};

var TextInput = (0, _Helper.validatable)((0, _Helper.withTooltip)(TextInputView));
exports.default = TextInput;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownItem = exports.DropdownWrapper = exports.DropdownWrapperView = exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent4 = __webpack_require__(2);

var _BaseComponent5 = _interopRequireDefault(_BaseComponent4);

var _TextInput = __webpack_require__(38);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Helper = __webpack_require__(5);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = exports.Dropdown = function (_BaseComponent) {
    _inherits(Dropdown, _BaseComponent);

    function Dropdown() {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    _createClass(Dropdown, [{
        key: 'init',
        value: function init() {
            // class
            this.baseClassName = 'dropdown';
            this.placeholderClass = this.getLibPrefixedClass('placeholder');
            // handlers
            this.close = this.close.bind(this);
            // state
            this.state = {
                isOpen: false
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            document.addEventListener('click', this._clickOrFocusAnywhereHandler = function (e) {
                return _this2._clickOrFocusAnywhere(e);
            });
        }
    }, {
        key: '_clickOrFocusAnywhere',
        value: function _clickOrFocusAnywhere(e) {
            // if the click was within self, ignore; otherwise, close self
            if (!this.domNode.contains(e.target)) {
                this.close();
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            this.setState({
                isOpen: !this.state.isOpen
            });
            console.log(e.target);
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                isOpen: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                placeholder = _props.placeholder;


            return _react2.default.createElement(
                'div',
                { className: this.className, ref: this.processRef, onClick: this.handleEvent },
                _react2.default.createElement(
                    DropdownItem,
                    { className: this.placeholderClass + ' none' },
                    _react2.default.createElement(_TextInput2.default, { placeholder: placeholder })
                ),
                _react2.default.createElement(
                    DropdownWrapper,
                    { isOpen: this.state.isOpen, close: this.close },
                    children
                )
            );
        }
    }]);

    return Dropdown;
}(_BaseComponent5.default);

var DropdownWrapperView = exports.DropdownWrapperView = function (_BaseComponent2) {
    _inherits(DropdownWrapperView, _BaseComponent2);

    function DropdownWrapperView() {
        _classCallCheck(this, DropdownWrapperView);

        return _possibleConstructorReturn(this, (DropdownWrapperView.__proto__ || Object.getPrototypeOf(DropdownWrapperView)).apply(this, arguments));
    }

    _createClass(DropdownWrapperView, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'dropdownWrapper';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                className = _props2.className,
                styleObj = _props2.styleObj,
                cls = (0, _utils.getClsName)(this.className, !this.props.isOpen ? 'hidden' : '');


            return _react2.default.createElement(
                'div',
                { className: cls, style: styleObj },
                children
            );
        }
    }], [{
        key: 'type',
        get: function get() {
            return 'Dropdown';
        }
    }]);

    return DropdownWrapperView;
}(_BaseComponent5.default);

DropdownWrapperView.defaultProps = {
    styleObj: {},
    close: function close() {}
};

DropdownWrapperView.propTypes = {
    styleObj: _propTypes2.default.object,
    close: _propTypes2.default.func.isRequired
};

var DropdownWrapper = exports.DropdownWrapper = (0, _Helper.popupable)(DropdownWrapperView);

var DropdownItem = exports.DropdownItem = function (_BaseComponent3) {
    _inherits(DropdownItem, _BaseComponent3);

    function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        return _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
    }

    _createClass(DropdownItem, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'dropdownItem';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                children = _props3.children,
                className = _props3.className;


            return _react2.default.createElement(
                'div',
                { className: this.className },
                children
            );
        }
    }]);

    return DropdownItem;
}(_BaseComponent5.default);

Dropdown.defaultProps = {
    placeholder: 'Please Select...'
};

Dropdown.propTypes = {
    placeholder: _propTypes2.default.string
};

exports.default = Dropdown;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjRlZjU1YTUyNWM3YjdhZmE0NWIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci93aXRoVG9vbHRpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsIm5hbWUiLCJhcmdzIiwiYmluZCIsInByb2Nlc3NSZWYiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnQiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50SWQiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybVN0YXRlIiwia2V5IiwiZGVsbWl0ZXIiLCJzdGF0ZSIsInJlc3VsdCIsImZvdW5kIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic3BsaWNlIiwibmFtZXMiLCJzb21lIiwiaSIsInN0YXRlT2JqIiwiY2xzIiwiY2xhc3NOYW1lIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJ0b1N0cmluZyIsImNhbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZU9iamVjdCIsIl9mIiwicm9vdCIsImVudHJpZXMiLCJ2YWx1ZSIsInZhbHVlSXNPYmoiLCJyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwicyIsImpvaW4iLCJ0cmltIiwidGVzdCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiUG9wdXBNYW5hZ2VyIiwidmFsaWRhdGFibGUiLCJ3aXRoVG9vbHRpcCIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiQnV0dG9uVmlldyIsIm9uQ2xpY2tlZCIsInRleHQiLCJkaXNhYmxlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiQnV0dG9uIiwiSGVhZGVyIiwiZGVmYXVsdFR5cGVzIiwid2FybmluZyIsInByaW50V2FybmluZyIsIl9sZW4iLCJfa2V5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ4IiwiaW5kZXhPZiIsIl9sZW4yIiwiX2tleTIiLCJTcGxpdHRlciIsImNoaWxkcmVuIiwiaXNWZXJ0aWNhbCIsInpJbmRleHMiLCJEaWFsb2ciLCJPdmVybGF5IiwiRHJvcGRvd24iLCJ0eXBlcyIsImV2ZW50VHlwZSIsInN0YWNrIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwib2Zmc2V0SGVpZ2h0IiwiY2xvc2UiLCJoYW5kbGUiLCJpc09wZW4iLCJpc1BvcHVwIiwibmF2RGVmIiwiaWQiLCJsYWJlbCIsInVybCIsImV4cGFuZCIsInBhZ2VzRGVmIiwicmVzIiwibmF2IiwibiIsImZvckVhY2giLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJub2RlIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwia2V5cyIsImV2ZXJ5Iiwic3RlcCIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIkRhdGUiLCJQcm9wVHlwZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwidGVzdDMiLCJsZXR0ZXIiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ0byIsInN5bWJvbHMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic2hpbSIsImdldFNoaW0iLCJBcHAiLCJhY3RpdmVJZCIsImpzSGVhcFNpemVMaW1pdCIsInRvdGFsSlNIZWFwU2l6ZSIsInVzZWRKU0hlYXBTaXplIiwiaGFzaCIsIndpbmRvdyIsInNldEludGVydmFsIiwiZ2V0TWVtb3J5U3RhdCIsInNldFN0YXRlIiwicGVyZm9ybWFuY2UiLCJtZW1vcnkiLCJvblRyZWVOb2RlQ2xpY2siLCJwYWdlcyIsIkJvcmRlckNvbnRhaW5lciIsInBlcnNpc3QiLCJQYW5lIiwibW91c2Vtb3ZlSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2V1cEhhbmRsZXIiLCJvbk1vdXNlVXAiLCJzcGxpdHRlciIsInNpemUiLCJzaXplVW5pdCIsIm1heFNpemUiLCJtaW5TaXplIiwicGFyZW50RWxlbWVudCIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIiwib25Nb3VzZURvd24iLCJjbGllbnRYIiwiY2xpZW50WSIsImRpcmVjdGlvbiIsImRpc3BsYXkiLCJzcGxpdHRlclNpemUiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJzcGxpdHRlclN0eWxlIiwiekluZGV4IiwicmlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhbmUiLCJUcmVlTm9kZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5vZGVOYW1lIiwiZm9jdXNDbGFzcyIsImV4cGFuZG9DbGFzcyIsImV4cGFuZG9FeHBhbmRDbGFzcyIsImZvY3VzSWQiLCJUcmVlVmlldyIsInRyZWVOb2RlIiwiZGVmIiwiU3dpdGNoIiwiY2xvbmVFbGVtZW50IiwiYWN0aXZlIiwiQ29udGVudFBhbmUiLCJXaW5kb3dNZW1vcnlWaWV3ZXIiLCJEaWFsb2dzIiwib25CdXR0b25DbGlja2VkIiwiY2xvc2VEaWFsb2ciLCJvcGVuRGlhbG9nIiwiZGlhbG9nMSIsImRpYWxvZzIiLCJidXR0b24iLCJkaWFsb2ciLCJkaWFsb2cxJGlzT3BlbiIsImRpYWxvZzIkaXNPcGVuIiwiRGlhbG9nVmlldyIsImhlYWRlckNsYXNzIiwiZ2V0TGliUHJlZml4ZWRDbGFzcyIsImNsb3NlQnRuQ2xhc3MiLCJib2R5Q2xhc3MiLCJmb290ZXJDbGFzcyIsImNhbmNlbEJ0bkNsYXNzIiwiY29uZmlybUJ0bkNsYXNzIiwib25DYW5jZWxCdG5DbGlja2VkIiwib25Db25maXJtQnRuQ2xpY2tlZCIsIm9uQ2xvc2VCdG5DbGlja2VkIiwibmV4dFByb3BzIiwib3BlbiIsInJlcG9zaXRpb25Pbk9wZW4iLCJuZXh0T3BlbiIsIm5leHRDbG9zZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwibW9kIiwiYm9keSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xvc2VCdG5MYWJlbCIsImhlbHBMYWJlbCIsInN0eWxlT2JqIiwiQ29tcG9uZW50IiwiY2xhc3NQcm9wZXJ0eSIsIkRyYWdnYWJsZUNvbXBvbmVudCIsIm1vdXNlZG93bkhhbmRsZXIiLCJyZXBvc2l0aW9uIiwicmVjdCIsIkNvbXBvbmVudEJlaW5nTW92ZWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0TW91c2VYIiwibGFzdE1vdXNlWSIsImxlZnRUb01vdXNlIiwidG9wVG9Nb3VzZSIsIm1heCIsIm1pbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicG9zaXRpb24iLCJhc3NlcnQiLCJQb3B1cENvbXBvbmVudCIsImluaXRTdGF0ZSIsIlZhbGlkYXRhYmxlQ29tcG9uZW50Iiwib25CbHVyIiwib25Gb2N1cyIsIl9oYXNCZWVuQmx1cnJlZCIsIm1lc3NhZ2VEZWYiLCJpbnB1dFZhbHVlIiwibmV4dERpc2FibGVkIiwibmV4dEVuYWJsZWQiLCJ2YWx1ZUNoYW5nZWQiLCJ0IiwicmVnRXhwIiwidmFsaWRhdG9yIiwicmVxdWlyZWQiLCJvblZhbGlkYXRlZCIsImlzVmFsdWVFbXB0eSIsIm5vdFZhbGlkIiwiaXNWYWxpZCIsImdldE1lc3NhZ2UiLCJvayIsIm5ld1Byb3BzIiwidG9vbHRpcCIsImludmFsaWRNZXNzYWdlIiwibWlzc2luZyIsIm1pc3NpbmdNZXNzYWdlIiwiaW1jb21wbGV0ZSIsInByb21wdE1lc3NhZ2UiLCJDb21wb25lbnRXaXRoVG9vbHRpcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNob3dUb29sdGlwIiwiY29udGFpbmVyRGlzcGxheSIsInNob3dUb29sdGlwVGltZW91dCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2hvd1Rvb2x0aXBPbkxvYWQiLCJoaWRlVG9vbHRpcCIsInRvb2x0aXBUZXh0IiwiaGlkZUFmdGVyU2hvd24iLCJjbGVhclRvb2x0aXAiLCJhY3RpdmVFbGVtZW50IiwiaGlkZVRvb2x0aXBUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwibmFtZUZpZWxkIiwicGxhY2Vob2xkZXIiLCJwd2RGaWVsZCIsImhpZGRlbiIsIkZvcm1zIiwiZ2V0U3RhdGUiLCJyZXNldCIsInYiLCJpbmZvIiwiZ2V0U3RhdGVzIiwiaTEiLCJpMiIsInRvZ2dsZUZpZWxkRGlzYWJsZSIsInJlc2V0QWxsIiwiVGV4dElucHV0VmlldyIsImlucHV0Iiwib25DaGFuZ2UiLCJUZXh0SW5wdXQiLCJwbGFjZWhvbGRlckNsYXNzIiwiX2NsaWNrT3JGb2N1c0FueXdoZXJlSGFuZGxlciIsIl9jbGlja09yRm9jdXNBbnl3aGVyZSIsImxvZyIsIkRyb3Bkb3duV3JhcHBlclZpZXciLCJEcm9wZG93bldyYXBwZXIiLCJEcm9wZG93bkl0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx1Qjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BLElBQUlBLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztB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QSxrQkFBSyxXQUFXN0osR0FBaEIsRUFBcUIsT0FBT29YLFFBQTVCO0FBQXVDN087QUFBdkMsYUFESjtBQUdIOzs7NEJBZmlCO0FBQ2QsbUJBQU8sVUFBUDtBQUNIOzs7Ozs7QUFnQkx3VSxvQkFBb0IzVixZQUFwQixHQUFtQztBQUMvQmdRLGNBQVUsRUFEcUI7QUFFL0J6TixXQUFPLGlCQUFNLENBQUU7QUFGZ0IsQ0FBbkM7O0FBS0FvVCxvQkFBb0IxVixTQUFwQixHQUFnQztBQUM1QitQLGNBQVUsb0JBQVUvYSxNQURRO0FBRTVCc04sV0FBTyxvQkFBVXBDLElBQVYsQ0FBZTZGO0FBRk0sQ0FBaEM7O0FBS08sSUFBTTRQLDRDQUFrQix1QkFBVUQsbUJBQVYsQ0FBeEI7O0lBRU1FLFksV0FBQUEsWTs7Ozs7Ozs7Ozs7K0JBQ0Y7QUFDSCxpQkFBS3plLGFBQUw7QUFDSDs7O2lDQUVRO0FBQUEsMEJBQ3lCLEtBQUtSLEtBRDlCO0FBQUEsZ0JBQ0V1SyxRQURGLFdBQ0VBLFFBREY7QUFBQSxnQkFDWXRJLFNBRFosV0FDWUEsU0FEWjs7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsU0FBckI7QUFBaUNzSTtBQUFqQyxhQURKO0FBR0g7Ozs7OztBQUdMSyxTQUFTeEIsWUFBVCxHQUF3QjtBQUNwQnNVLGlCQUFhO0FBRE8sQ0FBeEI7O0FBSUE5UyxTQUFTdkIsU0FBVCxHQUFxQjtBQUNqQnFVLGlCQUFhLG9CQUFVcFU7QUFETixDQUFyQjs7a0JBSWVzQixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY0ZWY1NWE1MjVjN2I3YWZhNDViIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpc09iaiwgZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBhbGwgY29tcG9uZW50cyBzaGFyZSBvbmUgZXZlbnQgaGFuZGxlclxuQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWxsIGtub3duIFJlYWN0LkNvbXBvbmVudCBldmVudHNcbiAgICB2YXIgbWFwID0ge1xuICAgICAgICBjbGljazogJ29uQ2xpY2snLFxuICAgICAgICBjaGFuZ2U6ICdvbkNoYW5nZScsXG4gICAgICAgIG1vdXNlb3ZlcjogJ29uTW91c2VPdmVyJyxcbiAgICAgICAgbW91c2VlbnRlcjogJ29uTW91c2VFbnRlcicsXG4gICAgICAgIG1vdXNlbGVhdmU6ICdvbk1vdXNlTGVhdmUnLFxuICAgICAgICBtb3VzZW91dDogJ29uTW91c2VPdXQnLFxuICAgICAgICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gICAgICAgIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxuICAgICAgICBtb3VzZW1vdmU6ICdvbk1vdXNlTW92ZScsXG4gICAgICAgIGZvY3VzOiAnb25Gb2N1cycsXG4gICAgICAgIGJsdXI6ICdvbkJsdXInXG4gICAgfTtcblxuICAgIC8vIGZhbGxiYWNrIGhlbHBlclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vIG9uZSBoYW5kbGVFdmVudCB0byBydWxlIHRoZW0gYWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgfTtcbn0oKSk7XG5cbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcbmxldCByZWdpc3RyeSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlZiA9IHRoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpYkNsYXNzUHJlZml4ID0gJ2UnO1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucG9zdFJlZ2lzdGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7fVxuICAgIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG4gICAgLy8gZm9yY2VVcGRhdGUoKSB7fVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7dGhpcy5iYXNlQ2xhc3NOYW1lfSAke3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWA7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1JlZihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBoYXZlIHJlZ2lzdGVyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcbiAgICAgICAgLy8gYWRkIG9uZVxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdICsgMTtcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpICsgcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoLi4uYXJncykge1xuICAgICAgICBpZiAoaXNPYmooYXJnc1swXSkpIHtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGFyZ3NbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc2V0U3RhdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXRlIGJ5IG5hbWVcbiAgICAvLyBpZiBrZXkgaXMgcHJvdmlkZWQsIHJldHVybiBzcGVjaWZpZWQgdmFsdWVcbiAgICAvLyBpZiBrZXkgaXMgaWdub3JlZCwgcmV0dXJuIHdob2xlIHN0YXRlIG9iamVjdFxuICAgIGdldFN0YXRlKG5hbWUsIGtleSwgZGVsbWl0ZXIgPSAnJCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtuYW1lICsgZGVsbWl0ZXIgKyBrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9LFxuICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kID8gcmVzdWx0IDogdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBnZXQgbXVsaXRwbGUgY2hpbGRyZW4gc3RhdGVcbiAgICBnZXRTdGF0ZXMobmFtZXMgPSBbXSwgZGVsbWl0ZXI9ICckJykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnNvbWUoKG5hbWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX0ke2RlbG1pdGVyfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtpXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldW2tleS5zcGxpdChgJHtkZWxtaXRlcn1gKS5zcGxpY2UoLTEpXSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVN0YXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIHJldHVybiBlKHN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBnZXRMaWJQcmVmaXhlZENsYXNzKGNscykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHtjbHN9YDtcbiAgICB9XG5cbiAgICAvLyBzdHVic1xuICAgIGluaXQoKSB7fVxuICAgIHBvc3RSZWdpc3RlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLy8gaXNPYmo6IGNoZWNrIGlmIHRoZSBnaXZlbiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZTogc2ltcGxlIGNsb25lIHRoZSBnaXZlbiBvYmplY3Rcbi8vIG5vdCBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBjaXJjdWxhciByZWZlcmVuY2VcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWQtbGF5b3V0LW1lbnUtZXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0LCBkZWxtaXRlciA9ICckJykge1xuICAgIGZ1bmN0aW9uIF9mKHN0YXRlT2JqZWN0LCByb290LCByZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVJc09iaiA9IGlzT2JqKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByID0gYCR7cm9vdCA/IHJvb3QgKyBkZWxtaXRlciArIGtleSA6IGtleX1gO1xuICAgICAgICAgICAgICAgIC8vIHIgPSBgJHtyb290fSR7cm9vdCA9PT0gJycgPyBrZXkgOiBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlSXNPYmopIHtcbiAgICAgICAgICAgICAgICBfZih2YWx1ZSwgciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3JdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgX2Yoc3RhdGVPYmplY3QsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGdldENlbnRlclBvc2l0aW9uOiBnZXQgY2hpbGQgcG9zaXRpb24gd2hlbiBpdCBpcyBhdCBjZW50ZXIgb2YgdGhlIHBhcmVudFxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlclBvc2l0aW9uKHtpbm5lcldpZHRoID0gMTAwMCwgaW5uZXJIZWlnaHQ9ODAwfSwge3dpZHRoID0gNDAwLCBoZWlnaHQgPSA0MDB9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLFxuICAgICAgICB0b3A6IChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXG4gICAgfVxufVxuXG4vLyBnZXRDbHNOYW1lOiBjb25jYXRlIGFydW1lbnRzIHdpdGggc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbHNOYW1lKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFyZ3VtZW50cykuZmlsdGVyKHMgPT4gcyAhPT0nJyAmJiB0eXBlb2YgcyAhPT0gJ3VuZGVmaW5lZCcpLmpvaW4oJyAnKTtcbn1cblxuLy8gaXNFbXB0eTogY2hlY2sgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUsIHRyaW09dHJ1ZSkge1xuICAgIHJldHVybiAodHJpbSA/IC9eXFxzKiQvIDogL14kLykudGVzdCh2YWx1ZSk7IC8vIEJvb2xlYW5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSc7XG5pbXBvcnQgcG9wdXBhYmxlIGZyb20gJy4vcG9wdXBhYmxlJztcbmltcG9ydCBQb3B1cE1hbmFnZXIgZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHZhbGlkYXRhYmxlIGZyb20gJy4vdmFsaWRhdGFibGUnO1xuaW1wb3J0IHdpdGhUb29sdGlwIGZyb20gJy4vd2l0aFRvb2x0aXAnO1xuXG5cbmV4cG9ydCB7ZHJhZ2dhYmxlLCBwb3B1cGFibGUsIFBvcHVwTWFuYWdlciwgdmFsaWRhdGFibGUsIHdpdGhUb29sdGlwfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvaW5kZXguanN4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvblZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcbiAgICB9XG5cbiAgIG9uQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dGV4dCwgdHlwZSwgdGl0bGUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSB0eXBlPXt0eXBlfSB0aXRsZT17dGl0bGUgfHwgdGV4dH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+e3RleHR9PC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CdXR0b25WaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnQnV0dG9uJyxcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5CdXR0b25WaWV3LnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5jb25zdCBCdXR0b24gPSB3aXRoVG9vbHRpcChCdXR0b25WaWV3KTtcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGhlYWRlcmA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8aDEgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e3RoaXMucHJvcHMudGV4dH08L2gxPik7XG4gICAgfVxufVxuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICcnXG59O1xuXG5IZWFkZXIuZGVmYXVsdFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBzcGxpdHRlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW4sIGlzVmVydGljYWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke2lzVmVydGljYWwgPyBgIHZlcnRpY2FsYCA6ICcgaG9yaXpvbnRhbCd9YCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXR0ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGlzVmVydGljYWw6IHRydWVcbn07XG5cblNwbGl0dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IHpJbmRleHMgPSB7XG4gICAgRGlhbG9nOiAzMDAwLFxuICAgIE92ZXJsYXk6IDIwMDAsXG4gICAgRHJvcGRvd246IDEwMDBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiY29uc3QgUG9wdXBNYW5hZ2VyID0ge1xuICAgIHR5cGVzOiBbJ0RpYWxvZyddLFxuICAgIGV2ZW50VHlwZTogJ2tleWRvd24nLFxuICAgIHN0YWNrOiBbXSxcbiAgICBldmVudEhhbmRsZXI6IG51bGwsXG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwICYmICF0aGlzLmV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5zdGFjay5maWx0ZXIoc2F2ZWRDb21wb25lbnQgPT4gc2F2ZWRDb21wb25lbnQgIT09IGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50SGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5pbmNsdWRlcyhjb21wb25lbnQpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmRvbU5vZGUgJiYgY29tcG9uZW50LmRvbU5vZGUub2Zmc2V0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGRlY291cGxlXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xuaW1wb3J0IEZvcm1zIGZyb20gJy4vRm9ybXMnO1xuXG5jb25zdCBuYXZEZWYgPSBbXG4gICAge2lkOiAnbW9uJywgbGFiZWw6ICdNb25pdG9yaW5nJywgdXJsOiAnLyNtb24nLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIk1vbml0b3JpbmdcIiAvPn0sXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBFbGVtZW50cycsIHVybDogJy8jZm9ybScsIGNvbXBvbmVudDogPEZvcm1zIC8+fSxcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xuICAgICAgICB7aWQ6ICdkaWFsb2dzJywgbGFiZWw6ICdEaWFsb2dzJywgdXJsOiAnLyN3aWRnZXRzL2RpYWxvZ3MnLCBjb21wb25lbnQ6IDxEaWFsb2dzIC8+fSxcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcbiAgICAgICAge2lkOiAnYmFycycsIGxhYmVsOiAnQmFycycsIHVybDogJy8jd2lkZ2V0cy9iYXJzJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJCYXJzXCIgLz59LFxuICAgICAgICB7aWQ6ICdhbGVydHMnLCBsYWJlbDogJ0FsZXJ0cycsIHVybDogJy8jd2lkZ2V0cy9hbGVydHMnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkFsZXJ0c1wiIC8+fVxuICAgIF19LFxuICAgIHtpZDogJ3NwZWljYWwnLCBsYWJlbDogJ1NwZWNpYWwnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXG4gICAgICAgIHtpZDogJ2luZmluaXRlJywgbGFiZWw6ICdJbmZpbml0ZSBTY3JvbGwnLCB1cmw6ICcvI3dpZGdldHMvaW5maW5pdGVTY3JvbGwnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkluZmluaXRlIFNjcm9sbFwiIC8+fVxuICAgIF19XG5dO1xuXG5jb25zdCBwYWdlc0RlZiA9IChuYXYgPT4ge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbiA9IG5hdltpXTtcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5hdi5wdXNoKG4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59KShBcnJheS5mcm9tKG5hdkRlZikpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJZDogJ21vbicsXG4gICAgICAgICAgICBqc0hlYXBTaXplTGltaXQ6IDAsXG4gICAgICAgICAgICB0b3RhbEpTSGVhcFNpemU6IDAsXG4gICAgICAgICAgICB1c2VkSlNIZWFwU2l6ZTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyksXG4gICAgICAgICAgICBhY3RpdmVJZCA9IGhhc2hbaGFzaC5sZW5ndGggLSAxXS5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgIH1cblxuICAgIGdldE1lbW9yeVN0YXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UcmVlTm9kZUNsaWNrKG5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5jaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUlkOiBub2RlLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwibGVmdFBhbmVcIiBzcGxpdHRlcj1cInZlcnRpY2FsXCIgc2l6ZT17MjAwfSBtaW5TaXplPXsyMDB9IG1heFNpemU9ezUwMH0gc2l6ZVVuaXQ9XCJweFwiID5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRlZj17dGhpcy5wcm9wcy5uYXZ9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwicmlnaHRQYW5lXCIgZGlzcGxheT1cImZsZXhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgc3BsaXR0ZXI9XCJob3Jpem9udGFsXCIgc2l6ZT17NzV9IG1heFNpemU9ezgwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGVmPXt0aGlzLnByb3BzLnBhZ2VzfSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dNZW1vcnlWaWV3ZXIganNIZWFwU2l6ZUxpbWl0PXt0aGlzLnN0YXRlLmpzSGVhcFNpemVMaW1pdH0gdG90YWxKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnRvdGFsSlNIZWFwU2l6ZX0gdXNlZEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudXNlZEpTSGVhcFNpemV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBib3JkZXJDb250YWluZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGVyc2lzdDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQm9yZGVyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyc2lzdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBTcGxpdHRlciBmcm9tICcuLi9TcGxpdHRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzoga2V5Ym9hcmQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBwYW5lYDtcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtzcGxpdHRlciwgc2l6ZSwgc2l6ZVVuaXQsIG1heFNpemUsIG1pblNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ251bGwnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICB7bWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLFxuICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50WCA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFggPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFgpLFxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIHNwbGl0dGVyLCBkaXJlY3Rpb24sIGRpc3BsYXksIHNwbGl0dGVyU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgYCR7c3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcgPyBgIHZlcnRpY2FsUGFuZWAgOiAnJ31gKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXR0ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubGVmdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2V0U3RhdGUudG9wIC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocGFuZSkgPT4geyB0aGlzLmRvbU5vZGUgPSBwYW5lOyB9fVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHtzcGxpdHRlciAhPT0gJ251bGwnID8gPFNwbGl0dGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3BsaXR0ZXJTdHlsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzcGxpdHRlcjogJ251bGwnLFxuICAgIHNpemU6IDI1LFxuICAgIG1pblNpemU6IDE1LFxuICAgIG1heFNpemU6IDUwLFxuICAgIHNpemVVbml0OiAnJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHNwbGl0dGVyU2l6ZTogMTBcbn07XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmVlTm9kZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kOiB0aGlzLnByb3BzLmV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyAmJiBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLnN0YXRlLmV4cGFuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIGxhYmVsLCB1cmwsIGNoaWxkcmVuLCBvblRyZWVOb2RlQ2xpY2ssIGFjdGl2ZUlkfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBleHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGFjdGl2ZUlkID09PSBpZCAmJiAhY2hpbGRyZW4pID8gdGhpcy5wcm9wcy5mb2N1c0NsYXNzIDogKGV4cGFuZCA/IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzIDogdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybCA/IHVybCA6ICdqYXZhc2NyaXB0OnZvaWQoMCknfT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiBleHBhbmQgPyA8dWw+e2NoaWxkcmVuLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17YWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17b25UcmVlTm9kZUNsaWNrfSB7Li4uY30gLz4pfTwvdWw+OiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9jdXNDbGFzczogJ2ZvY3VzZWQnLFxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXG4gICAgZXhwYW5kb0NsYXNzOiAnZm9sZCdcbn07XG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3RyZWVWaWV3JztcbiAgICB9XG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2lkLCBjaGlsZHJlbn0gPSB0cmVlTm9kZSxcbiAgICAgICAgICAgIHtvblRyZWVOb2RlQ2xpY2t9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSk7XG5cbiAgICAgICAgLy8gaWYgbm8gc2VsZWN0aW9uIG9yIG5vIGNoaWxkcmVuLCBmb2N1cyB0YXJnZXRcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmFjdGl2ZUlkID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUlkOiBpZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDx1bD57dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9IHsuLi5jfSAvPil9PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5UcmVlVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IENvbnRlbnRQYW5lIGZyb20gJy4uL0NvbnRlbnRQYW5lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdzd2l0Y2gnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGRhdGEtYWN0aXZlLWlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudFBhbmUgY2xhc3NOYW1lPXtjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkID8gdGhpcy5wcm9wcy5hY3RpdmVJZCA6ICdoaWRkZW4nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoYy5jb21wb25lbnQsIHthY3RpdmU6IGMuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWR9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50UGFuZT4pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWY6IFtdXG59O1xuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGRlZjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGFjdGl2ZUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjb250ZW50UGFuZWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db250ZW50UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbi8vIERpYWxvZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93TWVtb3J5Vmlld2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHdpbmRvd01lbW9yeVZpZXdlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5KYXZhc2NyaXB0IEhlYXAgU2l6ZSBMaW1pdDo8L3NwYW4+IDxzcGFuPntqc0hlYXBTaXplTGltaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VG90YWwgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dG90YWxKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlVzZWQgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dXNlZEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9XaW5kb3dNZW1vcnlWaWV3ZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcblxuaW1wb3J0IHsgdG9nZ2xlRGlhbG9nT3BlbiB9IGZyb20gJy4vRGlhbG9nc0FjdGlvbic7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgY2xvc2VEaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHNob3VsZFNob3dPdmVybGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaWFsb2cxJGlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVuO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cxXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cxXCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzJcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzJcIiAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gRGlhbG9nXG5leHBvcnQgY2xhc3MgRGlhbG9nVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEaWFsb2cnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZGlhbG9nYDtcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2xvc2UnKTtcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1ib2R5Jyk7XG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZCA9IHRoaXMub25DYW5jZWxCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQnRuQ2xpY2tlZCA9IHRoaXMub25Db25maXJtQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UsIHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSh7fSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZChlKTtcblxuICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db25maXJtQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttb2QsIHRpdGxlLCBib2R5LCBjYW5jZWxMYWJlbCwgY29uZmlybUxhYmVsLCBjbG9zZUJ0bkxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9ID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmJvZHlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmZvb3RlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkfSB0ZXh0PXtjb25maXJtTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jb25maXJtQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpYWxvZ1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZDogJycsXG4gICAgdGl0bGU6ICdEaWFsb2cgVGl0bGUnLFxuICAgIGJvZHk6ICdBTlIxMDMyODI5IFRoaXMgaXMgYSBzYW1wbGUgbWVzc2FnZS4gRGRsZmt3ZXJvaXUgc2RmciBzZGZqZXJpdSBkZmVyZXJkZnNmLicsXG4gICAgaGVscExhYmVsOiAnSGVscCcsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvcGVuOiAoKSA9PiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgc3R5bGVPYmo6IHt9LFxufTtcblxuRGlhbG9nVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVscExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZUJ0bkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgRGlhbG9nID0gcG9wdXBhYmxlKGRyYWdnYWJsZShEaWFsb2dWaWV3LCAnaGVhZGVyQ2xhc3MnKSk7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBkcmFnZ2FibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShDb21wb25lbnQsIGNsYXNzUHJvcGVydHkpIHtcbiAgICBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd25IYW5kbGVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbiAmJiByZXBvc2l0aW9uT25PcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXBvc2l0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9tTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB7bGVmdCwgdG9wfSA9IGdldENlbnRlclBvc2l0aW9uKHdpbmRvdywgdGhpcy5kb21Ob2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudEJlaW5nTW92ZWQgPSB0aGlzLmRvbU5vZGUsXG4gICAgICAgICAgICAgICAgcmVjdCA9IENvbXBvbmVudEJlaW5nTW92ZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAgICB7bGFzdE1vdXNlWCwgbGFzdE1vdXNlWX0gPSB0aGlzLFxuICAgICAgICAgICAgICAgIGxlZnRUb01vdXNlID0gY2xpZW50WCAtIGxhc3RNb3VzZVgsXG4gICAgICAgICAgICAgICAgdG9wVG9Nb3VzZSA9IGNsaWVudFkgLSBsYXN0TW91c2VZLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLmxlZnQgKyBsZWZ0VG9Nb3VzZSksXG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS50b3AgKyB0b3BUb01vdXNlKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoLCBsZWZ0KSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0LCB0b3ApXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NQcm9wZXJ0eSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXNbY2xhc3NQcm9wZXJ0eV0pKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiB0cnVlLFxuICAgICAgICBzdHlsZU9iajoge31cbiAgICB9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gRHJhZ2dhYmxlQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcblxuLy8gcG9wdXBhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cGFibGUoQ29tcG9uZW50KSB7XG4gICAgbGV0IHpJbmRleCA9IHpJbmRleHNbQ29tcG9uZW50LnR5cGVdIHx8IDA7XG5cbiAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgQ29tcG9uZW50LnByb3BUeXBlcy5zdHlsZU9iaiAhPT0gJ3VuZGVmaW5lZCcsICdUaGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGFuIHN0eWxlT2JqIGFzIHByb3AnKTtcblxuICAgIGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlICYmIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmhhbmRsZSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3Qge2lzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIHpJbmRleDogdGhpcy5zdGF0ZS56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfSBzdHlsZU9iaj17c3R5bGVPYmp9IC8+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQb3B1cENvbXBvbmVudDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgbWVzc2FnZTogJycsXG4gICAgbW9kOiAnJ1xufTtcblxuLy8gdmFsaWRhdGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRhYmxlKENvbXBvbmVudCkge1xuICAgIGNsYXNzIFZhbGlkYXRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgZ2V0IG1lc3NhZ2VEZWYoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLnByb3BzLmludmFsaWRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IHRoaXMucHJvcHMubWlzc2luZ01lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaW1jb21wbGV0ZTogdGhpcy5wcm9wcy5wcm9tcHRNZXNzYWdlLFxuICAgICAgICAgICAgICAgICcnOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgaW5pdFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGxvY2FsIHZhcmlhYmxlIHNob3VsZCBub3QgYmUgdXNlZCBhcyB0cmlnZ2VyIHRhZ1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldE1lc3NhZ2UobW9kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlRGVmW21vZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGlucHV0VmFsdWV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWUgJiYgZGlzYWJsZWQgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRFbmFibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSBmYWxzZSAmJiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5leHREaXNhYmxlZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0JlZW5CbHVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUobmV4dFByb3BzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1cihlKSB7XG4gICAgICAgICAgICAvLyBzZXQgYmx1ciBmbGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkZvY3VzKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpc1ZhbGlkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVnRXhwLCB2YWxpZGF0b3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCFyZWdFeHAgJiYgIXZhbGlkYXRvcikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiByZWdFeHAgJiYgcmVnRXhwLnRlc3QodmFsdWUpIHx8IHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVpcmVkLCBvblZhbGlkYXRlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRW1wdHkgPSBpc0VtcHR5KGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG5vdFZhbGlkID0gIXRoaXMuaXNWYWxpZChpbnB1dFZhbHVlKSxcbiAgICAgICAgICAgICAgICBtb2QgPSAoaXNWYWx1ZUVtcHR5ICYmIHJlcXVpcmVkKSA/ICdtaXNzaW5nJyA6IG5vdFZhbGlkID8gJ2Vycm9yJyA6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UobW9kKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZCwgbWVzc2FnZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25WYWxpZGF0ZWQgJiYgb25WYWxpZGF0ZWQoe21vZCwgbWVzc2FnZSwgb2s6IG1vZCA9PT0gJyd9LCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgbW9kOiB0aGlzLnN0YXRlLm1vZCxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgICAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50b29sdGlwID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVmFsaWRhdGFibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcywge1xuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHByb21wdE1lc3NhZ2U6ICcnLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgbm90IHZhbGlkJyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLidcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIHdpdGhUb29sdGlwXG4vLyBjdXJyZW50bHkgSSB1c2VkIGNzcyBwZXNldWRvLWVsZW1lbnQgYXMgdG9vbHRpcFxuLy8gYnV0IEkgZmVlbCB3ZSBtYXkgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuLy8gYmVjYXVzZSBpdCBoYXMgc29tZSBsaW1pdGF0aW9uOlxuLy8gZm9yIGV4YW1wbGUsIHBlc2VkdW8tZWxlbWVudCBvbmx5IHN1cHBvcnQgcHVyZSB0ZXh0XG4vLyBzbyBubyBIVE1MIGlzIGNhbiBiZSBzaG93blxuLy8gVE9ETzogYmV0dGVyIHNvbHV0aW9uLCBtYXliZSBhbm90aGVyIGhlbHBlciB0byBzdXBwb3J0IEhUTUxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhUb29sdGlwKENvbXBvbmVudCkge1xuICAgIGNsYXNzIENvbXBvbmVudFdpdGhUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpc3BsYXk6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGxvY2FsIHZhcmlhYmxlXG4gICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcbiAgICAgICAgICAgIC8vIGNvcHkgY2hpbGRyZW4gZGlzcGxheSB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyRGlzcGxheTogd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21Ob2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyl9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBPbkxvYWQgJiYgdGhpcy5wcm9wcy50b29sdGlwICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VG9vbHRpcDogdHJ1ZSwgdG9vbHRpcDogdGhpcy5wcm9wcy50b29sdGlwIH0sIHRoaXMuaGlkZVRvb2x0aXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHt0b29sdGlwLCB0b29sdGlwVGV4dH0gPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB0eXBlb2YgdG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcgPyB0b29sdGlwIDogdG9vbHRpcFRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvd1Rvb2x0aXAodG9vbHRpcCwgaGlkZUFmdGVyU2hvd249dHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1Rvb2x0aXBUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNob3dUb29sdGlwVGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiB0cnVlLCB0b29sdGlwfSwgaGlkZUFmdGVyU2hvd24gPyB0aGlzLmhpZGVUb29sdGlwLmJpbmQodGhpcykgOiAoKSA9Pnt9KTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZGVUb29sdGlwKGNsZWFyVG9vbHRpcD1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAodGhpcy5wcm9wcy50b29sdGlwIHx8IHRoaXMucHJvcHMudG9vbHRpcFRleHQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VMZWF2ZShlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3Rvb2x0aXAsIHNob3dUb29sdGlwfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwJ106IHRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwLXNob3cnXTogc2hvd1Rvb2x0aXAgPyAneWVzJyA6ICdubydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmNvbnRhaW5lckRpc3BsYXlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIG91dHRlciBpcyBhIGJsb2NrIGNvbnRhaW5lclxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gdXNlIDo6YWZ0ZXIgb3IgOjpiZWZvcmUgYXMgdG9vbHRpcCBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcFRleHQ6ICcnLFxuICAgICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiAyMCxcbiAgICAgICAgaGlkZVRvb2x0aXBUaW1lb3V0OiAxMDAwXG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdG9vbHRpcFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGluaXRpYWwgdG9vbHRpcFxuICAgICAgICBzaG93VG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBoaWRlVG9vbHRpcFRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIENvbXBvbmVudFdpdGhUb29sdGlwO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJyRpc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwd2RGaWVsZDoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgbmFtZTogJ3B3ZEZpZWxkJ1xuICAgIH0sXG4gICAgaGlkZGVuOiB0cnVlXG59O1xuXG4vLyBGb3JtIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1zIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoaW5pdFN0YXRlKTtcbiAgICB9XG5cbiAgICB0b2dnbGVGaWVsZERpc2FibGUobmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXToge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5nZXRTdGF0ZShuYW1lLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSksICgpPT4ge1xuICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucHdkRmllbGQucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9yKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9LFxuICAgICAgICBbaTEsIGkyXSA9IHRoaXMuZ2V0U3RhdGVzKFsnbmFtZUZpZWxkJywgJ3B3ZEZpZWxkJ10pO1xuXG4gICAgICAgIGkxLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yO1xuICAgICAgICBpMi52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcjtcbiAgICAgICAgaTEub25WYWxpZGF0ZWQgPSB0aGlzLm9uVmFsaWRhdGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9XCJmb3Jtc1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiQnV0dG9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hvd1Rvb2x0aXBPbkxvYWQ9e2ZhbHNlfSBvbkNsaWNrZWQ9e3RoaXMudG9nZ2xlRmllbGREaXNhYmxlLmJpbmQodGhpcywgJ25hbWVGaWVsZCcpfSB0ZXh0PVwiVG9nZ2xlIERpc2FibGUgTmFtZSBGaWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICdwd2RGaWVsZCcpfSB0ZXh0PVwiVG9nZ2xlIERpc2FibGUgUGFzc3dvcmQgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5yZXNldEFsbC5iaW5kKHRoaXMpfSB0ZXh0PVwiUmVzZXQgQWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcD1cIkRpc2FibGVkIHRvb2x0aXBcIiB0ZXh0PVwiRGlzYWJsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJWYWxpZGF0aW9uVGV4dEJveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCB7Li4uaTF9IHJlZj17bmFtZSA9PiB0aGlzLm5hbWVGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCB0b29sdGlwVGV4dD17XCJub3JtYWwgdG9vbHRpcFwifSB7Li4uaTJ9IHJlZj17bmFtZSA9PiB0aGlzLnB3ZEZpZWxkID0gbmFtZX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IGRpc2FibGVkPXt0cnVlfSB0b29sdGlwVGV4dD17XCJEaXNhYmxlZCB0b29sdGlwXCJ9IGlucHV0VmFsdWU9XCJJIGFtIGRpc2FibGVkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UsIG9uZSBsb3dlcmNhc2UsIGFuZCBvbmUgbnVtYmVyLjwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRHJvcGRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkRyb3Bkb3duIGl0ZW0xPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxCdXR0b24gdGV4dD1cIkRyb3Bkb3duIGl0ZW0yXCIgLz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiQ29tYm8gQm94XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRleHRJbnB1dGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCB0eXBlLCBkaXNhYmxlZCwgbmFtZSwgbW9kLCBpbnB1dFZhbHVlfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UZXh0SW5wdXRWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpbnB1dFZhbHVlOiAnJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5uYW1lLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgVGV4dElucHV0ID0gdmFsaWRhdGFibGUod2l0aFRvb2x0aXAoVGV4dElucHV0VmlldykpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uL1RleHRJbnB1dCc7XG5cbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAsIHBvcHVwYWJsZSB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25gO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRoaXMuX2NsaWNrT3JGb2N1c0FueXdoZXJlSGFuZGxlciA9IGUgPT4gdGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmUoZSkpKTtcbiAgICB9XG5cbiAgICBfY2xpY2tPckZvY3VzQW55d2hlcmUoZSkge1xuICAgICAgICAvLyBpZiB0aGUgY2xpY2sgd2FzIHdpdGhpbiBzZWxmLCBpZ25vcmU7IG90aGVyd2lzZSwgY2xvc2Ugc2VsZlxuICAgICAgICBpZiAoIXRoaXMuZG9tTm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHJlZj17dGhpcy5wcm9jZXNzUmVmfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNsYXNzTmFtZT17dGhpcy5wbGFjZWhvbGRlckNsYXNzICsgJyBub25lJ30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bldyYXBwZXIgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gY2xvc2U9e3RoaXMuY2xvc2V9ID57Y2hpbGRyZW59PC9Ecm9wZG93bldyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bldyYXBwZXJWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZU9ian0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlT2JqfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ecm9wZG93bldyYXBwZXJWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZU9iajoge30sXG4gICAgY2xvc2U6ICgpID0+IHt9XG59XG5cbkRyb3Bkb3duV3JhcHBlclZpZXcucHJvcFR5cGVzID0ge1xuICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bldyYXBwZXIgPSBwb3B1cGFibGUoRHJvcGRvd25XcmFwcGVyVmlldyk7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25JdGVtYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdC4uLidcbn07XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9