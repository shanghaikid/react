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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(22)();
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
            return this.libClassPrefix + '-' + this.baseClassName + (this.props.className ? ' ' + this.props.className : '');
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

var _draggable = __webpack_require__(32);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(33);

var _popupable2 = _interopRequireDefault(_popupable);

var _PopupManager = __webpack_require__(15);

var _PopupManager2 = _interopRequireDefault(_PopupManager);

var _validatable = __webpack_require__(34);

var _validatable2 = _interopRequireDefault(_validatable);

var _withTooltip = __webpack_require__(35);

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
                autocomplete = _props.autocomplete,
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
                autocomplete: autocomplete,
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
    inputValue: '',
    autocomplete: 'on'
};

TextInputView.propTypes = {
    mod: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    type: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.name,
    onChange: _propTypes2.default.func,
    autocomplete: _propTypes2.default.string
};

var TextInput = (0, _Helper.validatable)((0, _Helper.withTooltip)(TextInputView));
exports.default = TextInput;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(30);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Forms = __webpack_require__(38);

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

var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(12);
var assign = __webpack_require__(20);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(21);

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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(24);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(25);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(13);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(26);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(27);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _WindowMemoryViewer = __webpack_require__(29);

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
/* 26 */
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
/* 27 */
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

var _ContentPane = __webpack_require__(28);

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
/* 28 */
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
/* 30 */
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

var _Dialog = __webpack_require__(31);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(36);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(37);

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
/* 31 */
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
/* 32 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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

var _TextInput = __webpack_require__(16);

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
            this.dropdownItem = [{ label: 'Item 1', value: 'i1' }, { label: 'Item 2', value: 'i2' }, { label: 'Item 3', value: 'i3' }];
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
        key: 'onDropdownChange',
        value: function onDropdownChange(e) {
            console.log(e);
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
                    _react2.default.createElement(_Dropdown.Dropdown, { items: this.dropdownItem, onChange: this.onDropdownChange.bind(this) }),
                    _react2.default.createElement(_Header2.default, { text: 'Comming Soon...' })
                )
            );
        }
    }]);

    return Forms;
}(_BaseComponent3.default);

exports.default = Forms;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownItem = exports.DropdownList = exports.DropdownListView = exports.Dropdown = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent4 = __webpack_require__(2);

var _BaseComponent5 = _interopRequireDefault(_BaseComponent4);

var _TextInput = __webpack_require__(16);

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
            this.onInputChange = this.onInputChange.bind(this);
            // state
            this.initFilter = function () {
                return true;
            };
            this.state = this.transformState({
                isOpen: false,
                selectedId: '-1',
                items: [],
                textInput: {
                    inputValue: '',
                    name: 'textInput'
                },
                filter: this.initFilter
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            document.addEventListener('click', this._clickOrFocusAnywhereHandler = function (e) {
                return _this2._clickOrFocusAnywhere(e);
            });
            var items = this.props.items;


            this.setState({ items: items.map(function (item, i) {
                    return Object.assign(item, { id: 'item' + i });
                }) });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            _get(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this) && _get(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
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
                isOpen: !this.state.isOpen,
                filter: this.initFilter
            });

            var _e$target$dataset = e.target.dataset,
                id = _e$target$dataset.id,
                selected = _e$target$dataset.selected,
                label = _e$target$dataset.label;


            console.log(id, selected);

            if (selected === 'false') {
                this.setState({
                    selectedId: id,
                    textInput: {
                        inputValue: label
                    }
                }, this.onChange.bind(this));
            }
        }
    }, {
        key: 'onChange',
        value: function onChange() {
            this.props.onChange(Object.assign({}, this.state, { target: this.domNode }));
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(e) {
            var inputValue = e.target.value;

            this.setState({
                textInput: { inputValue: inputValue },
                filter: this.getFilter(inputValue)
            });
        }
    }, {
        key: 'getFilter',
        value: function getFilter(inputValue) {
            return function (item) {
                var chars = inputValue.split(''),
                    regGrp = chars.map(function (c) {
                    return '[' + (c + '').toUpperCase() + (c + '').toLowerCase() + ']';
                });

                return new RegExp(regGrp.join('')).test(item.label);
            };
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                textInput: {
                    inputValue: this.selectedItem ? this.selectedItem.label : ''
                },
                isOpen: false,
                filter: this.initFilter
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var placeholder = this.props.placeholder,
                _state = this.state,
                items = _state.items,
                selectedId = _state.selectedId,
                selectedItem = items.filter(function (item) {
                return item.id == selectedId;
            })[0],
                _getStates = this.getStates(['textInput']),
                _getStates2 = _slicedToArray(_getStates, 1),
                inputProps = _getStates2[0],
                newInputProps = Object.assign({}, inputProps, {
                autocomplete: "off",
                onChange: this.onInputChange,
                placeholder: selectedItem ? selectedItem.label : placeholder
            });


            return _react2.default.createElement(
                'div',
                { className: this.className, ref: this.processRef, onClick: this.handleEvent },
                _react2.default.createElement(
                    DropdownItem,
                    { selected: !!selectedItem, value: selectedItem ? selectedItem.value : '', className: this.placeholderClass + ' none current' },
                    _react2.default.createElement(_TextInput2.default, newInputProps)
                ),
                _react2.default.createElement(DropdownList, { isOpen: this.state.isOpen, filter: this.state.filter, close: this.close, items: items, selectedId: selectedId })
            );
        }
    }, {
        key: 'selectedItem',
        get: function get() {
            var _this3 = this;

            return this.state.items.filter(function (item) {
                return item.id === _this3.state.selectedId;
            })[0];
        }
    }]);

    return Dropdown;
}(_BaseComponent5.default);

Dropdown.defaultProps = {
    placeholder: 'Please Select...',
    onChange: function onChange() {}
};

Dropdown.propTypes = {
    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};

var DropdownListView = exports.DropdownListView = function (_BaseComponent2) {
    _inherits(DropdownListView, _BaseComponent2);

    function DropdownListView() {
        _classCallCheck(this, DropdownListView);

        return _possibleConstructorReturn(this, (DropdownListView.__proto__ || Object.getPrototypeOf(DropdownListView)).apply(this, arguments));
    }

    _createClass(DropdownListView, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'dropdownWrapper';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                className = _props.className,
                styleObj = _props.styleObj,
                selectedId = _props.selectedId,
                filter = _props.filter,
                noItemMessage = _props.noItemMessage,
                cls = (0, _utils.getClsName)(this.className, !this.props.isOpen ? 'hidden' : ''),
                newItems = items.filter(filter),
                hasItem = newItems.length > 0;


            return _react2.default.createElement(
                'div',
                { className: cls, style: styleObj },
                hasItem ? newItems.map(function (item) {
                    return _react2.default.createElement(DropdownItem, { key: item.id, id: item.id, label: item.label, value: item.value, selected: selectedId === item.id });
                }) : _react2.default.createElement(
                    DropdownItem,
                    null,
                    noItemMessage
                )
            );
        }
    }], [{
        key: 'type',
        get: function get() {
            return 'Dropdown';
        }
    }]);

    return DropdownListView;
}(_BaseComponent5.default);

DropdownListView.defaultProps = {
    styleObj: {},
    close: function close() {},
    filter: function filter() {
        return true;
    },
    noItemMessage: 'No Item Found'
};

DropdownListView.propTypes = {
    styleObj: _propTypes2.default.object,
    close: _propTypes2.default.func.isRequired,
    filter: _propTypes2.default.func,
    noItemMessage: _propTypes2.default.string
};

var DropdownList = exports.DropdownList = (0, _Helper.popupable)(DropdownListView);

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
            var _props2 = this.props,
                children = _props2.children,
                className = _props2.className,
                value = _props2.value,
                label = _props2.label,
                id = _props2.id,
                selected = _props2.selected;


            return _react2.default.createElement(
                'div',
                { 'data-id': id, 'data-selected': selected, 'data-label': label, 'data-value': value, className: this.className },
                children || label
            );
        }
    }]);

    return DropdownItem;
}(_BaseComponent5.default);

DropdownItem.defaultProps = {
    string: 'Please Select...',
    value: '',
    selected: false
};

DropdownItem.propTypes = {
    value: _propTypes2.default.any,
    label: _propTypes2.default.string,
    id: _propTypes2.default.string,
    selected: _propTypes2.default.bool
};

exports.default = Dropdown;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODFlYWI0MDg4ZjM3NDAzOTEyMTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsIm5hbWUiLCJhcmdzIiwiYmluZCIsInByb2Nlc3NSZWYiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnQiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50SWQiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybVN0YXRlIiwia2V5IiwiZGVsbWl0ZXIiLCJzdGF0ZSIsInJlc3VsdCIsImZvdW5kIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic3BsaWNlIiwibmFtZXMiLCJzb21lIiwiaSIsInN0YXRlT2JqIiwiY2xzIiwiY2xhc3NOYW1lIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJ0b1N0cmluZyIsImNhbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZU9iamVjdCIsIl9mIiwicm9vdCIsImVudHJpZXMiLCJ2YWx1ZSIsInZhbHVlSXNPYmoiLCJyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwicyIsImpvaW4iLCJ0cmltIiwidGVzdCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiUG9wdXBNYW5hZ2VyIiwidmFsaWRhdGFibGUiLCJ3aXRoVG9vbHRpcCIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiQnV0dG9uVmlldyIsIm9uQ2xpY2tlZCIsInRleHQiLCJkaXNhYmxlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiQnV0dG9uIiwiSGVhZGVyIiwiZGVmYXVsdFR5cGVzIiwid2FybmluZyIsInByaW50V2FybmluZyIsIl9sZW4iLCJfa2V5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ4IiwiaW5kZXhPZiIsIl9sZW4yIiwiX2tleTIiLCJTcGxpdHRlciIsImNoaWxkcmVuIiwiaXNWZXJ0aWNhbCIsInpJbmRleHMiLCJEaWFsb2ciLCJPdmVybGF5IiwiRHJvcGRvd24iLCJ0eXBlcyIsImV2ZW50VHlwZSIsInN0YWNrIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwib2Zmc2V0SGVpZ2h0IiwiY2xvc2UiLCJoYW5kbGUiLCJpc09wZW4iLCJpc1BvcHVwIiwiVGV4dElucHV0VmlldyIsInBsYWNlaG9sZGVyIiwibW9kIiwiaW5wdXRWYWx1ZSIsImF1dG9jb21wbGV0ZSIsImlucHV0Iiwib25DaGFuZ2UiLCJUZXh0SW5wdXQiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIkFwcCIsImFjdGl2ZUlkIiwianNIZWFwU2l6ZUxpbWl0IiwidG90YWxKU0hlYXBTaXplIiwidXNlZEpTSGVhcFNpemUiLCJoYXNoIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJnZXRNZW1vcnlTdGF0Iiwic2V0U3RhdGUiLCJwZXJmb3JtYW5jZSIsIm1lbW9yeSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJvbk1vdXNlRG93biIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlyZWN0aW9uIiwiZGlzcGxheSIsInNwbGl0dGVyU2l6ZSIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInNwbGl0dGVyU3R5bGUiLCJ6SW5kZXgiLCJyaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJjbG9uZUVsZW1lbnQiLCJhY3RpdmUiLCJDb250ZW50UGFuZSIsIldpbmRvd01lbW9yeVZpZXdlciIsIkRpYWxvZ3MiLCJvbkJ1dHRvbkNsaWNrZWQiLCJjbG9zZURpYWxvZyIsIm9wZW5EaWFsb2ciLCJkaWFsb2cxIiwiZGlhbG9nMiIsImJ1dHRvbiIsImRpYWxvZyIsImRpYWxvZzEkaXNPcGVuIiwiZGlhbG9nMiRpc09wZW4iLCJEaWFsb2dWaWV3IiwiaGVhZGVyQ2xhc3MiLCJnZXRMaWJQcmVmaXhlZENsYXNzIiwiY2xvc2VCdG5DbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2FuY2VsQnRuQ2xhc3MiLCJjb25maXJtQnRuQ2xhc3MiLCJvbkNhbmNlbEJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJuZXh0UHJvcHMiLCJvcGVuIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJib2R5IiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbG9zZUJ0bkxhYmVsIiwiaGVscExhYmVsIiwic3R5bGVPYmoiLCJDb21wb25lbnQiLCJjbGFzc1Byb3BlcnR5IiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwibW91c2Vkb3duSGFuZGxlciIsInJlcG9zaXRpb24iLCJyZWN0IiwiQ29tcG9uZW50QmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwibGVmdFRvTW91c2UiLCJ0b3BUb01vdXNlIiwibWF4IiwibWluIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwb3NpdGlvbiIsImFzc2VydCIsIlBvcHVwQ29tcG9uZW50IiwiaW5pdFN0YXRlIiwiVmFsaWRhdGFibGVDb21wb25lbnQiLCJvbkJsdXIiLCJvbkZvY3VzIiwiX2hhc0JlZW5CbHVycmVkIiwibWVzc2FnZURlZiIsIm5leHREaXNhYmxlZCIsIm5leHRFbmFibGVkIiwidmFsdWVDaGFuZ2VkIiwidCIsInJlZ0V4cCIsInZhbGlkYXRvciIsInJlcXVpcmVkIiwib25WYWxpZGF0ZWQiLCJpc1ZhbHVlRW1wdHkiLCJub3RWYWxpZCIsImlzVmFsaWQiLCJnZXRNZXNzYWdlIiwib2siLCJuZXdQcm9wcyIsInRvb2x0aXAiLCJpbnZhbGlkTWVzc2FnZSIsIm1pc3NpbmciLCJtaXNzaW5nTWVzc2FnZSIsImltY29tcGxldGUiLCJwcm9tcHRNZXNzYWdlIiwiQ29tcG9uZW50V2l0aFRvb2x0aXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzaG93VG9vbHRpcCIsImNvbnRhaW5lckRpc3BsYXkiLCJzaG93VG9vbHRpcFRpbWVvdXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNob3dUb29sdGlwT25Mb2FkIiwiaGlkZVRvb2x0aXAiLCJ0b29sdGlwVGV4dCIsImhpZGVBZnRlclNob3duIiwiY2xlYXJUb29sdGlwIiwiYWN0aXZlRWxlbWVudCIsImhpZGVUb29sdGlwVGltZW91dCIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJ0b2dnbGVEaWFsb2dPcGVuIiwiZGlhbG9nTmFtZSIsIm9wZW5TdGF0ZSIsImhhc1N0YXRlU2V0Iiwib3BlblN0YXRlTmFtZSIsIm5hbWVGaWVsZCIsInB3ZEZpZWxkIiwiaGlkZGVuIiwiRm9ybXMiLCJkcm9wZG93bkl0ZW0iLCJnZXRTdGF0ZSIsInJlc2V0IiwidiIsImluZm8iLCJsb2ciLCJnZXRTdGF0ZXMiLCJpMSIsImkyIiwidG9nZ2xlRmllbGREaXNhYmxlIiwicmVzZXRBbGwiLCJvbkRyb3Bkb3duQ2hhbmdlIiwicGxhY2Vob2xkZXJDbGFzcyIsIm9uSW5wdXRDaGFuZ2UiLCJpbml0RmlsdGVyIiwic2VsZWN0ZWRJZCIsIml0ZW1zIiwidGV4dElucHV0IiwiX2NsaWNrT3JGb2N1c0FueXdoZXJlSGFuZGxlciIsIl9jbGlja09yRm9jdXNBbnl3aGVyZSIsIml0ZW0iLCJkYXRhc2V0Iiwic2VsZWN0ZWQiLCJnZXRGaWx0ZXIiLCJjaGFycyIsInJlZ0dycCIsInNlbGVjdGVkSXRlbSIsImlucHV0UHJvcHMiLCJuZXdJbnB1dFByb3BzIiwiRHJvcGRvd25MaXN0VmlldyIsIm5vSXRlbU1lc3NhZ2UiLCJuZXdJdGVtcyIsImhhc0l0ZW0iLCJEcm9wZG93bkxpc3QiLCJEcm9wZG93bkl0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFPLG9CQUFVbkQsTUFGSTtBQUdyQmtELFFBQUksb0JBQVVsRCxNQUhPO0FBSXJCbVcsY0FBVSxvQkFBVWpXO0FBSkMsQ0FBekI7O2tCQU9lb0IsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MWVhYjQwODhmMzc0MDM5MTIxNSIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJ1xuICAgIH07XG5cbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvLyBvbmUgaGFuZGxlRXZlbnQgdG8gcnVsZSB0aGVtIGFsbFxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBtYXBbZS50eXBlXSB8fCBjYXBpdGFsaXplKGUudHlwZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcykgdGhpc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgIH07XG59KCkpO1xuXG4vLyB1c2UgZm9yIGNvbXBvbmVudElkXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSB0byBzYXZlIG1lbW9yeVxuICAgICAgICB0aGlzLmhhbmRsZUV2ZW50ID0gdGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2Nlc3NSZWYgPSB0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saWJDbGFzc1ByZWZpeCA9ICdlJztcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnBvc3RSZWdpc3RlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge31cbiAgICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7fVxuICAgIC8vIGZvcmNlVXBkYXRlKCkge31cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke3RoaXMuYmFzZUNsYXNzTmFtZX0ke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gYCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnJ31gO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZWYoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAvLyBlbnN1cmUgd2UgaGF2ZSByZWdpc3RlclxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdIHx8IDA7XG4gICAgICAgIC8vIGFkZCBvbmVcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSArIDE7XG4gICAgICAgIC8vIGFzc2lnbiBuYW1lXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSArIHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIHNldFN0YXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGlzT2JqKGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBhcmdzWzBdID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShhcmdzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSBieSBuYW1lXG4gICAgLy8gaWYga2V5IGlzIHByb3ZpZGVkLCByZXR1cm4gc3BlY2lmaWVkIHZhbHVlXG4gICAgLy8gaWYga2V5IGlzIGlnbm9yZWQsIHJldHVybiB3aG9sZSBzdGF0ZSBvYmplY3RcbiAgICBnZXRTdGF0ZShuYW1lLCBrZXksIGRlbG1pdGVyID0gJyQnKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbbmFtZSArIGRlbG1pdGVyICsga2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZCA/IHJlc3VsdCA6IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gZ2V0IG11bGl0cGxlIGNoaWxkcmVuIHN0YXRlXG4gICAgZ2V0U3RhdGVzKG5hbWVzID0gW10sIGRlbG1pdGVyPSAnJCcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBuYW1lcy5zb21lKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8vIGlzT2JqOiBjaGVjayBpZiB0aGUgZ2l2ZW4gb2JqIGlzIGFuIE9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuLy8gY2xvbmU6IHNpbXBsZSBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0XG4vLyBub3Qgc3VwcG9ydCBmdW5jdGlvbiBhbmQgY2lyY3VsYXIgcmVmZXJlbmNlXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8vIGZsYXR0ZW4gc3RhdGUgb2JqZWN0XG4vLyBncmlkOntsYXlvdXQ6e21lbnU6e2V4cGFuZDp0cnVlfX19fSA9PiBncmlkLWxheW91dC1tZW51LWV4cGFuZDp0cnVlXG5leHBvcnQgZnVuY3Rpb24gZShzdGF0ZU9iamVjdCwgZGVsbWl0ZXIgPSAnJCcpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqKSB7XG4gICAgICAgICAgICAgICAgX2YodmFsdWUsIHIsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cbi8vIGlzRW1wdHk6IGNoZWNrIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlLCB0cmltPXRydWUpIHtcbiAgICByZXR1cm4gKHRyaW0gPyAvXlxccyokLyA6IC9eJC8pLnRlc3QodmFsdWUpOyAvLyBCb29sZWFuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xuaW1wb3J0IHBvcHVwYWJsZSBmcm9tICcuL3BvcHVwYWJsZSc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB2YWxpZGF0YWJsZSBmcm9tICcuL3ZhbGlkYXRhYmxlJztcbmltcG9ydCB3aXRoVG9vbHRpcCBmcm9tICcuL3dpdGhUb29sdGlwJztcblxuXG5leHBvcnQge2RyYWdnYWJsZSwgcG9wdXBhYmxlLCBQb3B1cE1hbmFnZXIsIHZhbGlkYXRhYmxlLCB3aXRoVG9vbHRpcH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJ1dHRvbmA7XG4gICAgfVxuXG4gICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcbiAgICAgICAgICAgIG9uQ2xpY2tlZChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlIHx8IHRleHR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9Pnt0ZXh0fTwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQnV0dG9uVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJ0J1dHRvbicsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuQnV0dG9uVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgQnV0dG9uID0gd2l0aFRvb2x0aXAoQnV0dG9uVmlldyk7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBoZWFkZXJgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pO1xuICAgIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJ1xufTtcblxuSGVhZGVyLmRlZmF1bHRUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCB6SW5kZXhzID0ge1xuICAgIERpYWxvZzogMzAwMCxcbiAgICBPdmVybGF5OiAyMDAwLFxuICAgIERyb3Bkb3duOiAxMDAwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsImNvbnN0IFBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kb21Ob2RlICYmIGNvbXBvbmVudC5kb21Ob2RlLm9mZnNldEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBkZWNvdXBsZVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5jbG9zZSh7fSwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgaXNPcGVuID0gY29tcG9uZW50LnByb3BzLmlzT3BlbjtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gYSBwb3B1cCBtdXN0IGltcGxlbWVudCBjbG9zZSBhbmQgb3BlblxuICAgIGlzUG9wdXAoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVzLmluY2x1ZGVzKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cE1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRleHRJbnB1dGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCB0eXBlLCBkaXNhYmxlZCwgbmFtZSwgbW9kLCBpbnB1dFZhbHVlLCBhdXRvY29tcGxldGV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIG1vZClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGF1dG9jb21wbGV0ZTogJ29uJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5uYW1lLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhdXRvY29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IFRleHRJbnB1dCA9IHZhbGlkYXRhYmxlKHdpdGhUb29sdGlwKFRleHRJbnB1dFZpZXcpKTtcbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvQXBwJztcbmltcG9ydCBEaWFsb2dzIGZyb20gJy4vRGlhbG9ncyc7XG5pbXBvcnQgRm9ybXMgZnJvbSAnLi9Gb3Jtcyc7XG5cbmNvbnN0IG5hdkRlZiA9IFtcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiTW9uaXRvcmluZ1wiIC8+fSxcbiAgICB7aWQ6ICdmb3JtJywgbGFiZWw6ICdGb3JtIEVsZW1lbnRzJywgdXJsOiAnLyNmb3JtJywgY29tcG9uZW50OiA8Rm9ybXMgLz59LFxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXG4gICAgICAgIHtpZDogJ2RpYWxvZ3MnLCBsYWJlbDogJ0RpYWxvZ3MnLCB1cmw6ICcvI3dpZGdldHMvZGlhbG9ncycsIGNvbXBvbmVudDogPERpYWxvZ3MgLz59LFxuICAgICAgICB7aWQ6ICd3aXphcmQnLCBsYWJlbDogJ1dpemFyZCcsIHVybDogJy8jd2lkZ2V0cy93aXphcmQnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIldpYXJkXCIgLz59LFxuICAgICAgICB7aWQ6ICdiYXJzJywgbGFiZWw6ICdCYXJzJywgdXJsOiAnLyN3aWRnZXRzL2JhcnMnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkJhcnNcIiAvPn0sXG4gICAgICAgIHtpZDogJ2FsZXJ0cycsIGxhYmVsOiAnQWxlcnRzJywgdXJsOiAnLyN3aWRnZXRzL2FsZXJ0cycsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiQWxlcnRzXCIgLz59XG4gICAgXX0sXG4gICAge2lkOiAnc3BlaWNhbCcsIGxhYmVsOiAnU3BlY2lhbCcsIGV4cGFuZDogdHJ1ZSwgY2hpbGRyZW46IFtcbiAgICAgICAge2lkOiAnaW5maW5pdGUnLCBsYWJlbDogJ0luZmluaXRlIFNjcm9sbCcsIHVybDogJy8jd2lkZ2V0cy9pbmZpbml0ZVNjcm9sbCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiSW5maW5pdGUgU2Nyb2xsXCIgLz59XG4gICAgXX1cbl07XG5cbmNvbnN0IHBhZ2VzRGVmID0gKG5hdiA9PiB7XG4gICAgbGV0IHJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuID0gbmF2W2ldO1xuICAgICAgICBpZiAobi5jaGlsZHJlbikge1xuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnB1c2gobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIG5hbWU9XCJPS1wiIG5hdj17bmF2RGVmfSBwYWdlcz17cGFnZXNEZWZ9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgfVxuXG4gICAgZ2V0TWVtb3J5U3RhdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gd2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQ6IG5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJsZWZ0UGFuZVwiIHNwbGl0dGVyPVwidmVydGljYWxcIiBzaXplPXsyMDB9IG1pblNpemU9ezIwMH0gbWF4U2l6ZT17NTAwfSBzaXplVW5pdD1cInB4XCIgPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcgZGVmPXt0aGlzLnByb3BzLm5hdn0gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJyaWdodFBhbmVcIiBkaXNwbGF5PVwiZmxleFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZSBzcGxpdHRlcj1cImhvcml6b250YWxcIiBzaXplPXs3NX0gbWF4U2l6ZT17ODB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd01lbW9yeVZpZXdlciBqc0hlYXBTaXplTGltaXQ9e3RoaXMuc3RhdGUuanNIZWFwU2l6ZUxpbWl0fSB0b3RhbEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudG90YWxKU0hlYXBTaXplfSB1c2VkSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS51c2VkSlNIZWFwU2l6ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQXBwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJvcmRlckNvbnRhaW5lcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQm9yZGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnXG59O1xuXG5Cb3JkZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJzaXN0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiBrZXlib2FyZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xuICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge3NwbGl0dGVyLCBzaXplLCBzaXplVW5pdCwgbWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHR9ID0gdGhpcy5kb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnbnVsbCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bihlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXG4gICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRYID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WCA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WCksXG4gICAgICAgICAgICAgIHRvcCA9IGNsaWVudFkgPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRZIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRZKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUoZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJyA/IGAgdmVydGljYWxQYW5lYCA6ICcnfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcGxpdHRlclN0eWxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNwbGl0dGVyOiAnbnVsbCcsXG4gICAgc2l6ZTogMjUsXG4gICAgbWluU2l6ZTogMTUsXG4gICAgbWF4U2l6ZTogNTAsXG4gICAgc2l6ZVVuaXQ6ICclJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxufTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyU2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmQ6IHRoaXMucHJvcHMuZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpZCwgbGFiZWwsIHVybCwgY2hpbGRyZW4sIG9uVHJlZU5vZGVDbGljaywgYWN0aXZlSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsID8gdXJsIDogJ2phdmFzY3JpcHQ6dm9pZCgwKSd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb2N1c0NsYXNzOiAnZm9jdXNlZCcsXG4gICAgZXhwYW5kb0V4cGFuZENsYXNzOiAnZXhwYW5kJyxcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xufTtcblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb2N1c0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvY3VzQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZVZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xuICAgIH1cbiAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKTtcblxuICAgICAgICAvLyBpZiBubyBzZWxlY3Rpb24gb3Igbm8gY2hpbGRyZW4sIGZvY3VzIHRhcmdldFxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IHRoaXMucHJvcHMuYWN0aXZlSWQgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0gey4uLmN9IC8+KX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudFBhbmUgZnJvbSAnLi4vQ29udGVudFBhbmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gZGF0YS1hY3RpdmUtaWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjLmNvbXBvbmVudCwge2FjdGl2ZTogYy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRQYW5lPilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZjogW11cbn07XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNvbnRlbnRQYW5lYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuLy8gRGlhbG9nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNZW1vcnlWaWV3ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgd2luZG93TWVtb3J5Vmlld2VyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkphdmFzY3JpcHQgSGVhcCBTaXplIExpbWl0Ojwvc3Bhbj4gPHNwYW4+e2pzSGVhcFNpemVMaW1pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ub3RhbCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt0b3RhbEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VXNlZCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt1c2VkSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQgPSB0aGlzLm9uQnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nID0gdGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2cxOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2tlZChlLCBidXR0b24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGJ1dHRvbi5wcm9wcy5kaWFsb2cpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBjbG9zZURpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBvcGVuRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkU2hvd092ZXJsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVuIHx8IHRoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMSRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMVwiIHRpdGxlPVwiZGlhbG9nMVwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMlwiIHRpdGxlPVwiZGlhbG9nMlwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IHJlcG9zaXRpb25Pbk9wZW49e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgZHJhZ2dhYmxlLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBjbGFzcyBEaWFsb2dWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkaWFsb2dgO1xuICAgICAgICB0aGlzLmhlYWRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xuICAgICAgICB0aGlzLmJvZHlDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJvZHknKTtcbiAgICAgICAgdGhpcy5mb290ZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jb25maXJtJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuLCBjbG9zZSwgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZSxcbiAgICAgICAgICAgIG5leHRDbG9zZSA9IG5leHRQcm9wcy5pc09wZW4gPT09IGZhbHNlICYmIGlzT3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICBvcGVuKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Q2xvc2UpIHtcbiAgICAgICAgICAgIGNsb3NlKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZShlLCB0aGlzKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbEJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25DYW5jZWx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkKGUpO1xuXG4gICAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICAgICAgb25DYW5jZWwoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbmZpcm1CdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ29uZmlybX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgICAgIG9uQ29uZmlybShlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21vZCwgdGl0bGUsIGJvZHksIGNhbmNlbExhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5oZWFkZXJDbGFzc30gPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWR9IHRleHQ9e2NhbmNlbExhYmVsfSBjbGFzc05hbWU9e3RoaXMuY2FuY2VsQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kOiAnJyxcbiAgICB0aXRsZTogJ0RpYWxvZyBUaXRsZScsXG4gICAgYm9keTogJ0FOUjEwMzI4MjkgVGhpcyBpcyBhIHNhbXBsZSBtZXNzYWdlLiBEZGxma3dlcm9pdSBzZGZyIHNkZmplcml1IGRmZXJlcmRmc2YuJyxcbiAgICBoZWxwTGFiZWw6ICdIZWxwJyxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgY2xvc2VCdG5MYWJlbDogJ0Nsb3NlJyxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG9wZW46ICgpID0+IHt9LFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBzdHlsZU9iajoge30sXG59O1xuXG5EaWFsb2dWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBtb2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWxwTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlQnRuTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5jb25zdCBEaWFsb2cgPSBwb3B1cGFibGUoZHJhZ2dhYmxlKERpYWxvZ1ZpZXcsICdoZWFkZXJDbGFzcycpKTtcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2VudGVyUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIGRyYWdnYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2dhYmxlKENvbXBvbmVudCwgY2xhc3NQcm9wZXJ0eSkge1xuICAgIGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuICYmIHJlcG9zaXRpb25Pbk9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtsZWZ0LCB0b3B9ID0gZ2V0Q2VudGVyUG9zaXRpb24od2luZG93LCB0aGlzLmRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50QmVpbmdNb3ZlZCA9IHRoaXMuZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZWN0ID0gQ29tcG9uZW50QmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICAgIHtsYXN0TW91c2VYLCBsYXN0TW91c2VZfSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgICB0b3BUb01vdXNlID0gY2xpZW50WSAtIGxhc3RNb3VzZVksXG4gICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUubGVmdCArIGxlZnRUb01vdXNlKSxcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3Qud2lkdGgsIGxlZnQpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQsIHRvcClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBjbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc1Byb3BlcnR5ICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpc1tjbGFzc1Byb3BlcnR5XSkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IHRydWUsXG4gICAgICAgIHN0eWxlT2JqOiB7fVxuICAgIH0sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpO1xuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc3R5bGVPYmo6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9KTtcblxuICAgIHJldHVybiBEcmFnZ2FibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCBQb3B1cE1hbmFnZXIgZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuXG4vLyBwb3B1cGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwYWJsZShDb21wb25lbnQpIHtcbiAgICBsZXQgekluZGV4ID0gekluZGV4c1tDb21wb25lbnQudHlwZV0gfHwgMDtcblxuICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBDb21wb25lbnQucHJvcFR5cGVzLnN0eWxlT2JqICE9PSAndW5kZWZpbmVkJywgJ1RoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgYW4gc3R5bGVPYmogYXMgcHJvcCcpO1xuXG4gICAgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuaGFuZGxlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9IHN0eWxlT2JqPXtzdHlsZU9ian0gLz4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFBvcHVwQ29tcG9uZW50O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9wb3B1cGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHREaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBkaXNhYmxlZCA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dEVuYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IGZhbHNlICYmIGRpc2FibGVkID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobmV4dERpc2FibGVkKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQmVlbkJsdXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShuZXh0UHJvcHMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25CbHVyKGUpIHtcbiAgICAgICAgICAgIC8vIHNldCBibHVyIGZsYWdcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRm9jdXMoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGluaXRTdGF0ZSkpO1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVmFsaWQodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZWdFeHAsIHZhbGlkYXRvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIXJlZ0V4cCAmJiAhdmFsaWRhdG9yKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4cCAmJiByZWdFeHAudGVzdCh2YWx1ZSkgfHwgdmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWlyZWQsIG9uVmFsaWRhdGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGlzVmFsdWVFbXB0eSA9IGlzRW1wdHkoaW5wdXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgbm90VmFsaWQgPSAhdGhpcy5pc1ZhbGlkKGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG1vZCA9IChpc1ZhbHVlRW1wdHkgJiYgcmVxdWlyZWQpID8gJ21pc3NpbmcnIDogbm90VmFsaWQgPyAnZXJyb3InIDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZShtb2QpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kLCBtZXNzYWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBvblZhbGlkYXRlZCAmJiBvblZhbGlkYXRlZCh7bW9kLCBtZXNzYWdlLCBvazogbW9kID09PSAnJ30sIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIHdpdGhUb29sdGlwXG4vLyBjdXJyZW50bHkgSSB1c2VkIGNzcyBwZXNldWRvLWVsZW1lbnQgYXMgdG9vbHRpcFxuLy8gYnV0IEkgZmVlbCB3ZSBtYXkgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuLy8gYmVjYXVzZSBpdCBoYXMgc29tZSBsaW1pdGF0aW9uOlxuLy8gZm9yIGV4YW1wbGUsIHBlc2VkdW8tZWxlbWVudCBvbmx5IHN1cHBvcnQgcHVyZSB0ZXh0XG4vLyBzbyBubyBIVE1MIGlzIGNhbiBiZSBzaG93blxuLy8gVE9ETzogYmV0dGVyIHNvbHV0aW9uLCBtYXliZSBhbm90aGVyIGhlbHBlciB0byBzdXBwb3J0IEhUTUxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhUb29sdGlwKENvbXBvbmVudCkge1xuICAgIGNsYXNzIENvbXBvbmVudFdpdGhUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpc3BsYXk6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGxvY2FsIHZhcmlhYmxlXG4gICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcbiAgICAgICAgICAgIC8vIGNvcHkgY2hpbGRyZW4gZGlzcGxheSB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyRGlzcGxheTogd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21Ob2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyl9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBPbkxvYWQgJiYgdGhpcy5wcm9wcy50b29sdGlwICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VG9vbHRpcDogdHJ1ZSwgdG9vbHRpcDogdGhpcy5wcm9wcy50b29sdGlwIH0sIHRoaXMuaGlkZVRvb2x0aXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHt0b29sdGlwLCB0b29sdGlwVGV4dH0gPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB0eXBlb2YgdG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcgPyB0b29sdGlwIDogdG9vbHRpcFRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvd1Rvb2x0aXAodG9vbHRpcCwgaGlkZUFmdGVyU2hvd249dHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1Rvb2x0aXBUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNob3dUb29sdGlwVGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiB0cnVlLCB0b29sdGlwfSwgaGlkZUFmdGVyU2hvd24gPyB0aGlzLmhpZGVUb29sdGlwLmJpbmQodGhpcykgOiAoKSA9Pnt9KTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZGVUb29sdGlwKGNsZWFyVG9vbHRpcD1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAodGhpcy5wcm9wcy50b29sdGlwIHx8IHRoaXMucHJvcHMudG9vbHRpcFRleHQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VMZWF2ZShlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3Rvb2x0aXAsIHNob3dUb29sdGlwfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwJ106IHRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwLXNob3cnXTogc2hvd1Rvb2x0aXAgPyAneWVzJyA6ICdubydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmNvbnRhaW5lckRpc3BsYXlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIG91dHRlciBpcyBhIGJsb2NrIGNvbnRhaW5lclxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gdXNlIDo6YWZ0ZXIgb3IgOjpiZWZvcmUgYXMgdG9vbHRpcCBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcFRleHQ6ICcnLFxuICAgICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiAyMCxcbiAgICAgICAgaGlkZVRvb2x0aXBUaW1lb3V0OiAxMDAwXG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdG9vbHRpcFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGluaXRpYWwgdG9vbHRpcFxuICAgICAgICBzaG93VG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBoaWRlVG9vbHRpcFRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIENvbXBvbmVudFdpdGhUb29sdGlwO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJyRpc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwd2RGaWVsZDoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgbmFtZTogJ3B3ZEZpZWxkJ1xuICAgIH0sXG4gICAgaGlkZGVuOiB0cnVlXG59O1xuXG4vLyBGb3JtIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1zIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoaW5pdFN0YXRlKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkl0ZW0gPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAxJywgdmFsdWU6ICdpMSd9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMicsIHZhbHVlOiAnaTInfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDMnLCB2YWx1ZTogJ2kzJ31cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICB0b2dnbGVGaWVsZERpc2FibGUobmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXToge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5nZXRTdGF0ZShuYW1lLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSksICgpPT4ge1xuICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucHdkRmllbGQucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9yKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMl0gPSB0aGlzLmdldFN0YXRlcyhbJ25hbWVGaWVsZCcsICdwd2RGaWVsZCddKTtcblxuICAgICAgICBpMS52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcjtcbiAgICAgICAgaTIudmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3I7XG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9XCJEaXNhYmxlZCB0b29sdGlwXCIgdGV4dD1cIkRpc2FibGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkxfSByZWY9e25hbWUgPT4gdGhpcy5uYW1lRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgdG9vbHRpcFRleHQ9e1wibm9ybWFsIHRvb2x0aXBcIn0gey4uLmkyfSByZWY9e25hbWUgPT4gdGhpcy5wd2RGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcFRleHQ9e1wiRGlzYWJsZWQgdG9vbHRpcFwifSBpbnB1dFZhbHVlPVwiSSBhbSBkaXNhYmxlZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Zb3VyIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlLCBvbmUgbG93ZXJjYXNlLCBhbmQgb25lIG51bWJlci48L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkRyb3Bkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW1zPXt0aGlzLmRyb3Bkb3duSXRlbX0gb25DaGFuZ2U9e3RoaXMub25Ecm9wZG93bkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkNvbW1pbmcgU29vbi4uLlwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9UZXh0SW5wdXQnO1xuXG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZElkKVswXTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duYDtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgdGhpcy5pbml0RmlsdGVyID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSWQ6ICctMScsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dElucHV0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIgPSBlID0+IHRoaXMuX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpKSk7XG4gICAgICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IE9iamVjdC5hc3NpZ24oaXRlbSwge2lkOiAnaXRlbScgKyBpfSkpfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpIHtcbiAgICAgICAgLy8gaWYgdGhlIGNsaWNrIHdhcyB3aXRoaW4gc2VsZiwgaWdub3JlOyBvdGhlcndpc2UsIGNsb3NlIHNlbGZcbiAgICAgICAgaWYgKCF0aGlzLmRvbU5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCBzZWxlY3RlZClcblxuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ6IGlkLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBsYWJlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7dGFyZ2V0OiB0aGlzLmRvbU5vZGV9KSk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHRJbnB1dDogeyBpbnB1dFZhbHVlIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuZ2V0RmlsdGVyKGlucHV0VmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFycyA9IGlucHV0VmFsdWUuc3BsaXQoJycpLFxuICAgICAgICAgICAgICAgIHJlZ0dycCA9IGNoYXJzLm1hcChjID0+IGBbJHsoYyArICcnKS50b1VwcGVyQ2FzZSgpfSR7KGMgKyAnJykudG9Mb3dlckNhc2UoKX1dYCk7XG5cbiAgICAgICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChyZWdHcnAuam9pbignJykpKS50ZXN0KGl0ZW0ubGFiZWwpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLnNlbGVjdGVkSXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtpdGVtcywgc2VsZWN0ZWRJZH0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PSBzZWxlY3RlZElkKVswXSxcbiAgICAgICAgICAgIFtpbnB1dFByb3BzXSA9IHRoaXMuZ2V0U3RhdGVzKFsndGV4dElucHV0J10pLFxuICAgICAgICAgICAgbmV3SW5wdXRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLmxhYmVsIDogcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHJlZj17dGhpcy5wcm9jZXNzUmVmfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNlbGVjdGVkPXshIXNlbGVjdGVkSXRlbX0gdmFsdWU9e3NlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS52YWx1ZSA6ICcnfSBjbGFzc05hbWU9e3RoaXMucGxhY2Vob2xkZXJDbGFzcyArICcgbm9uZSBjdXJyZW50J30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgey4uLm5ld0lucHV0UHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufSBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyfSBjbG9zZT17dGhpcy5jbG9zZX0gaXRlbXM9e2l0ZW1zfSBzZWxlY3RlZElkPXtzZWxlY3RlZElkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgU2VsZWN0Li4uJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbn07XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkxpc3RWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgY2xhc3NOYW1lLCBzdHlsZU9iaiwgc2VsZWN0ZWRJZCwgZmlsdGVyLCBub0l0ZW1NZXNzYWdlfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpLFxuICAgICAgICAgICAgbmV3SXRlbXMgPSBpdGVtcy5maWx0ZXIoZmlsdGVyKSxcbiAgICAgICAgICAgIGhhc0l0ZW0gPSBuZXdJdGVtcy5sZW5ndGggPiAwO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgIHtoYXNJdGVtID8gbmV3SXRlbXMubWFwKGl0ZW0gPT4gPERyb3Bkb3duSXRlbSBrZXk9e2l0ZW0uaWR9IGlkPXtpdGVtLmlkfSBsYWJlbD17aXRlbS5sYWJlbH0gdmFsdWU9e2l0ZW0udmFsdWV9IHNlbGVjdGVkPXtzZWxlY3RlZElkID09PSBpdGVtLmlkfSAvPiApIDogPERyb3Bkb3duSXRlbT57bm9JdGVtTWVzc2FnZX08L0Ryb3Bkb3duSXRlbT59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duTGlzdFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlT2JqOiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgZmlsdGVyOiAoKSA9PiB0cnVlLFxuICAgIG5vSXRlbU1lc3NhZ2U6ICdObyBJdGVtIEZvdW5kJ1xufVxuXG5Ecm9wZG93bkxpc3RWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBzdHlsZU9iajogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vSXRlbU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTGlzdCA9IHBvcHVwYWJsZShEcm9wZG93bkxpc3RWaWV3KTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bkl0ZW1gO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUsIHZhbHVlLCBsYWJlbCwgaWQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aWR9IGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkfSBkYXRhLWxhYmVsPXtsYWJlbH0gZGF0YS12YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PntjaGlsZHJlbiB8fCBsYWJlbH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==