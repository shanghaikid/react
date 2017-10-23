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
                isOpen: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzUyZTlmYzA5MjdmNjZkN2MyNmEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci93aXRoVG9vbHRpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Ryb3Bkb3duL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicHJvdG90eXBlIiwiaGFuZGxlRXZlbnQiLCJtYXAiLCJjbGljayIsImNoYW5nZSIsIm1vdXNlb3ZlciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2VvdXQiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2Vtb3ZlIiwiZm9jdXMiLCJibHVyIiwiY2FwaXRhbGl6ZSIsInR5cGUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZSIsIm1ldGhvZCIsInByb3BzIiwicmVnaXN0cnkiLCJCYXNlQ29tcG9uZW50IiwibmFtZSIsImFyZ3MiLCJiaW5kIiwicHJvY2Vzc1JlZiIsImxpYkNsYXNzUHJlZml4IiwiYmFzZUNsYXNzTmFtZSIsImluaXQiLCJyZWdpc3RlciIsInBvc3RSZWdpc3RlciIsImNvbXBvbmVudCIsImRvbU5vZGUiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRJZCIsInRvTG93ZXJDYXNlIiwidHJhbnNmb3JtU3RhdGUiLCJrZXkiLCJkZWxtaXRlciIsInN0YXRlIiwicmVzdWx0IiwiZm91bmQiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJzcGxpY2UiLCJuYW1lcyIsInNvbWUiLCJpIiwic3RhdGVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJpc09iaiIsImNsb25lIiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJnZXRDbHNOYW1lIiwiaXNFbXB0eSIsIm9iaiIsIk9iamVjdCIsInRvU3RyaW5nIiwiY2FsbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXRlT2JqZWN0IiwiX2YiLCJyb290IiwiZW50cmllcyIsInZhbHVlIiwidmFsdWVJc09iaiIsInIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJzIiwiam9pbiIsInRyaW0iLCJ0ZXN0IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJkcmFnZ2FibGUiLCJwb3B1cGFibGUiLCJQb3B1cE1hbmFnZXIiLCJ2YWxpZGF0YWJsZSIsIndpdGhUb29sdGlwIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJCdXR0b25WaWV3Iiwib25DbGlja2VkIiwidGV4dCIsImRpc2FibGVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJCdXR0b24iLCJIZWFkZXIiLCJkZWZhdWx0VHlwZXMiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsInR5cGVzIiwiZXZlbnRUeXBlIiwic3RhY2siLCJldmVudEhhbmRsZXIiLCJhZGQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJzYXZlZENvbXBvbmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXMiLCJpbmNsdWRlcyIsImNvZGUiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZSIsImhhbmRsZSIsImlzT3BlbiIsImlzUG9wdXAiLCJUZXh0SW5wdXRWaWV3IiwicGxhY2Vob2xkZXIiLCJtb2QiLCJpbnB1dFZhbHVlIiwiYXV0b2NvbXBsZXRlIiwiaW5wdXQiLCJvbkNoYW5nZSIsIlRleHRJbnB1dCIsIm5hdkRlZiIsImlkIiwibGFiZWwiLCJ1cmwiLCJleHBhbmQiLCJwYWdlc0RlZiIsInJlcyIsIm5hdiIsIm4iLCJmb3JFYWNoIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3NpZ24iLCJjaGVja1Byb3BUeXBlcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwibnVtYmVyIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsImxvY2F0aW9uIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsImhhc093blByb3BlcnR5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImtleXMiLCJldmVyeSIsInN0ZXAiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiUHJvcFR5cGVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsInRlc3QzIiwibGV0dGVyIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwidG8iLCJzeW1ib2xzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInNoaW0iLCJnZXRTaGltIiwiQXBwIiwiYWN0aXZlSWQiLCJqc0hlYXBTaXplTGltaXQiLCJ0b3RhbEpTSGVhcFNpemUiLCJ1c2VkSlNIZWFwU2l6ZSIsImhhc2giLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImdldE1lbW9yeVN0YXQiLCJzZXRTdGF0ZSIsInBlcmZvcm1hbmNlIiwibWVtb3J5Iiwib25UcmVlTm9kZUNsaWNrIiwicGFnZXMiLCJCb3JkZXJDb250YWluZXIiLCJwZXJzaXN0IiwiUGFuZSIsIm1vdXNlbW92ZUhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNldXBIYW5kbGVyIiwib25Nb3VzZVVwIiwic3BsaXR0ZXIiLCJzaXplIiwic2l6ZVVuaXQiLCJtYXhTaXplIiwibWluU2l6ZSIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsIm9uTW91c2VEb3duIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsImNsb25lRWxlbWVudCIsImFjdGl2ZSIsIkNvbnRlbnRQYW5lIiwiV2luZG93TWVtb3J5Vmlld2VyIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsImRpYWxvZzEiLCJkaWFsb2cyIiwiYnV0dG9uIiwiZGlhbG9nIiwiZGlhbG9nMSRpc09wZW4iLCJkaWFsb2cyJGlzT3BlbiIsIkRpYWxvZ1ZpZXciLCJoZWFkZXJDbGFzcyIsImdldExpYlByZWZpeGVkQ2xhc3MiLCJjbG9zZUJ0bkNsYXNzIiwiYm9keUNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJjYW5jZWxCdG5DbGFzcyIsImNvbmZpcm1CdG5DbGFzcyIsIm9uQ2FuY2VsQnRuQ2xpY2tlZCIsIm9uQ29uZmlybUJ0bkNsaWNrZWQiLCJvbkNsb3NlQnRuQ2xpY2tlZCIsIm5leHRQcm9wcyIsIm9wZW4iLCJyZXBvc2l0aW9uT25PcGVuIiwibmV4dE9wZW4iLCJuZXh0Q2xvc2UiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImJvZHkiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsb3NlQnRuTGFiZWwiLCJoZWxwTGFiZWwiLCJzdHlsZU9iaiIsIkNvbXBvbmVudCIsImNsYXNzUHJvcGVydHkiLCJEcmFnZ2FibGVDb21wb25lbnQiLCJtb3VzZWRvd25IYW5kbGVyIiwicmVwb3NpdGlvbiIsInJlY3QiLCJDb21wb25lbnRCZWluZ01vdmVkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJsZWZ0VG9Nb3VzZSIsInRvcFRvTW91c2UiLCJtYXgiLCJtaW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBvc2l0aW9uIiwiYXNzZXJ0IiwiUG9wdXBDb21wb25lbnQiLCJpbml0U3RhdGUiLCJWYWxpZGF0YWJsZUNvbXBvbmVudCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfaGFzQmVlbkJsdXJyZWQiLCJtZXNzYWdlRGVmIiwibmV4dERpc2FibGVkIiwibmV4dEVuYWJsZWQiLCJ2YWx1ZUNoYW5nZWQiLCJ0IiwicmVnRXhwIiwidmFsaWRhdG9yIiwicmVxdWlyZWQiLCJvblZhbGlkYXRlZCIsImlzVmFsdWVFbXB0eSIsIm5vdFZhbGlkIiwiaXNWYWxpZCIsImdldE1lc3NhZ2UiLCJvayIsIm5ld1Byb3BzIiwidG9vbHRpcCIsImludmFsaWRNZXNzYWdlIiwibWlzc2luZyIsIm1pc3NpbmdNZXNzYWdlIiwiaW1jb21wbGV0ZSIsInByb21wdE1lc3NhZ2UiLCJDb21wb25lbnRXaXRoVG9vbHRpcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNob3dUb29sdGlwIiwiY29udGFpbmVyRGlzcGxheSIsInNob3dUb29sdGlwVGltZW91dCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2hvd1Rvb2x0aXBPbkxvYWQiLCJoaWRlVG9vbHRpcCIsInRvb2x0aXBUZXh0IiwiaGlkZUFmdGVyU2hvd24iLCJjbGVhclRvb2x0aXAiLCJhY3RpdmVFbGVtZW50IiwiaGlkZVRvb2x0aXBUaW1lb3V0IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwibmFtZUZpZWxkIiwicHdkRmllbGQiLCJoaWRkZW4iLCJGb3JtcyIsImRyb3Bkb3duSXRlbSIsImdldFN0YXRlIiwicmVzZXQiLCJ2IiwiaW5mbyIsImxvZyIsImdldFN0YXRlcyIsImkxIiwiaTIiLCJ0b2dnbGVGaWVsZERpc2FibGUiLCJyZXNldEFsbCIsIm9uRHJvcGRvd25DaGFuZ2UiLCJwbGFjZWhvbGRlckNsYXNzIiwib25JbnB1dENoYW5nZSIsImluaXRGaWx0ZXIiLCJzZWxlY3RlZElkIiwiaXRlbXMiLCJ0ZXh0SW5wdXQiLCJfY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyIiwiX2NsaWNrT3JGb2N1c0FueXdoZXJlIiwiaXRlbSIsImRhdGFzZXQiLCJzZWxlY3RlZCIsImdldEZpbHRlciIsImNoYXJzIiwicmVnR3JwIiwic2VsZWN0ZWRJdGVtIiwiaW5wdXRQcm9wcyIsIm5ld0lucHV0UHJvcHMiLCJEcm9wZG93bkxpc3RWaWV3Iiwibm9JdGVtTWVzc2FnZSIsIm5ld0l0ZW1zIiwiaGFzSXRlbSIsIkRyb3Bkb3duTGlzdCIsIkRyb3Bkb3duSXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFhaFgsU0FBYixHQUF5QjtBQUNyQm5HLFdBQU8sb0JBQVU4SyxHQURJO0FBRXJCdkIsV0FBTyxvQkFBVW5ELE1BRkk7QUFHckJrRCxRQUFJLG9CQUFVbEQsTUFITztBQUlyQm1XLGNBQVUsb0JBQVVqVztBQUpDLENBQXpCOztrQkFPZW9CLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzUyZTlmYzA5MjdmNjZkN2MyNmEiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2luZGV4LmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJ1xuICAgIH07XG5cbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvLyBvbmUgaGFuZGxlRXZlbnQgdG8gcnVsZSB0aGVtIGFsbFxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBtYXBbZS50eXBlXSB8fCBjYXBpdGFsaXplKGUudHlwZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcykgdGhpc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgIH07XG59KCkpO1xuXG4vLyB1c2UgZm9yIGNvbXBvbmVudElkXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSB0byBzYXZlIG1lbW9yeVxuICAgICAgICB0aGlzLmhhbmRsZUV2ZW50ID0gdGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2Nlc3NSZWYgPSB0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saWJDbGFzc1ByZWZpeCA9ICdlJztcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnBvc3RSZWdpc3RlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge31cbiAgICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7fVxuICAgIC8vIGZvcmNlVXBkYXRlKCkge31cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke3RoaXMuYmFzZUNsYXNzTmFtZX0ke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gYCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnJ31gO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZWYoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAvLyBlbnN1cmUgd2UgaGF2ZSByZWdpc3RlclxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdIHx8IDA7XG4gICAgICAgIC8vIGFkZCBvbmVcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSArIDE7XG4gICAgICAgIC8vIGFzc2lnbiBuYW1lXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSArIHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIHNldFN0YXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGlzT2JqKGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBhcmdzWzBdID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShhcmdzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSBieSBuYW1lXG4gICAgLy8gaWYga2V5IGlzIHByb3ZpZGVkLCByZXR1cm4gc3BlY2lmaWVkIHZhbHVlXG4gICAgLy8gaWYga2V5IGlzIGlnbm9yZWQsIHJldHVybiB3aG9sZSBzdGF0ZSBvYmplY3RcbiAgICBnZXRTdGF0ZShuYW1lLCBrZXksIGRlbG1pdGVyID0gJyQnKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbbmFtZSArIGRlbG1pdGVyICsga2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZCA/IHJlc3VsdCA6IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gZ2V0IG11bGl0cGxlIGNoaWxkcmVuIHN0YXRlXG4gICAgZ2V0U3RhdGVzKG5hbWVzID0gW10sIGRlbG1pdGVyPSAnJCcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBuYW1lcy5zb21lKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8vIGlzT2JqOiBjaGVjayBpZiB0aGUgZ2l2ZW4gb2JqIGlzIGFuIE9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbn1cblxuLy8gY2xvbmU6IHNpbXBsZSBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0XG4vLyBub3Qgc3VwcG9ydCBmdW5jdGlvbiBhbmQgY2lyY3VsYXIgcmVmZXJlbmNlXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8vIGZsYXR0ZW4gc3RhdGUgb2JqZWN0XG4vLyBncmlkOntsYXlvdXQ6e21lbnU6e2V4cGFuZDp0cnVlfX19fSA9PiBncmlkLWxheW91dC1tZW51LWV4cGFuZDp0cnVlXG5leHBvcnQgZnVuY3Rpb24gZShzdGF0ZU9iamVjdCwgZGVsbWl0ZXIgPSAnJCcpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqKSB7XG4gICAgICAgICAgICAgICAgX2YodmFsdWUsIHIsIHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cbi8vIGlzRW1wdHk6IGNoZWNrIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlLCB0cmltPXRydWUpIHtcbiAgICByZXR1cm4gKHRyaW0gPyAvXlxccyokLyA6IC9eJC8pLnRlc3QodmFsdWUpOyAvLyBCb29sZWFuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjExLjEwQHByb2Nlc3MvYnJvd3Nlci5qcyIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xuaW1wb3J0IHBvcHVwYWJsZSBmcm9tICcuL3BvcHVwYWJsZSc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB2YWxpZGF0YWJsZSBmcm9tICcuL3ZhbGlkYXRhYmxlJztcbmltcG9ydCB3aXRoVG9vbHRpcCBmcm9tICcuL3dpdGhUb29sdGlwJztcblxuXG5leHBvcnQge2RyYWdnYWJsZSwgcG9wdXBhYmxlLCBQb3B1cE1hbmFnZXIsIHZhbGlkYXRhYmxlLCB3aXRoVG9vbHRpcH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJ1dHRvbmA7XG4gICAgfVxuXG4gICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcbiAgICAgICAgICAgIG9uQ2xpY2tlZChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlIHx8IHRleHR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9Pnt0ZXh0fTwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQnV0dG9uVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJ0J1dHRvbicsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuQnV0dG9uVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgQnV0dG9uID0gd2l0aFRvb2x0aXAoQnV0dG9uVmlldyk7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBoZWFkZXJgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pO1xuICAgIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJ1xufTtcblxuSGVhZGVyLmRlZmF1bHRUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi93YXJuaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBzcGxpdHRlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW4sIGlzVmVydGljYWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke2lzVmVydGljYWwgPyBgIHZlcnRpY2FsYCA6ICcgaG9yaXpvbnRhbCd9YCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXR0ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGlzVmVydGljYWw6IHRydWVcbn07XG5cblNwbGl0dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IHpJbmRleHMgPSB7XG4gICAgRGlhbG9nOiAzMDAwLFxuICAgIE92ZXJsYXk6IDIwMDAsXG4gICAgRHJvcGRvd246IDEwMDBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiY29uc3QgUG9wdXBNYW5hZ2VyID0ge1xuICAgIHR5cGVzOiBbJ0RpYWxvZyddLFxuICAgIGV2ZW50VHlwZTogJ2tleWRvd24nLFxuICAgIHN0YWNrOiBbXSxcbiAgICBldmVudEhhbmRsZXI6IG51bGwsXG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwICYmICF0aGlzLmV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5zdGFjay5maWx0ZXIoc2F2ZWRDb21wb25lbnQgPT4gc2F2ZWRDb21wb25lbnQgIT09IGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50SGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5pbmNsdWRlcyhjb21wb25lbnQpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmRvbU5vZGUgJiYgY29tcG9uZW50LmRvbU5vZGUub2Zmc2V0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGRlY291cGxlXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dFZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgdGV4dElucHV0YDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIHR5cGUsIGRpc2FibGVkLCBuYW1lLCBtb2QsIGlucHV0VmFsdWUsIGF1dG9jb21wbGV0ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dCA9PiB0aGlzLmRvbU5vZGUgPSBpbnB1dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9e2F1dG9jb21wbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGV4dElucHV0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgYXV0b2NvbXBsZXRlOiAnb24nXG59O1xuXG5UZXh0SW5wdXRWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBtb2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLm5hbWUsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgVGV4dElucHV0ID0gdmFsaWRhdGFibGUod2l0aFRvb2x0aXAoVGV4dElucHV0VmlldykpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9BcHAnO1xuaW1wb3J0IERpYWxvZ3MgZnJvbSAnLi9EaWFsb2dzJztcbmltcG9ydCBGb3JtcyBmcm9tICcuL0Zvcm1zJztcblxuY29uc3QgbmF2RGVmID0gW1xuICAgIHtpZDogJ21vbicsIGxhYmVsOiAnTW9uaXRvcmluZycsIHVybDogJy8jbW9uJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJNb25pdG9yaW5nXCIgLz59LFxuICAgIHtpZDogJ2Zvcm0nLCBsYWJlbDogJ0Zvcm0gRWxlbWVudHMnLCB1cmw6ICcvI2Zvcm0nLCBjb21wb25lbnQ6IDxGb3JtcyAvPn0sXG4gICAge2lkOiAnd2lkZ2V0cycsIGxhYmVsOiAnV2lkZ2V0cycsIGV4cGFuZDogdHJ1ZSwgY2hpbGRyZW46IFtcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXG4gICAgICAgIHtpZDogJ3dpemFyZCcsIGxhYmVsOiAnV2l6YXJkJywgdXJsOiAnLyN3aWRnZXRzL3dpemFyZCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiV2lhcmRcIiAvPn0sXG4gICAgICAgIHtpZDogJ2JhcnMnLCBsYWJlbDogJ0JhcnMnLCB1cmw6ICcvI3dpZGdldHMvYmFycycsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiQmFyc1wiIC8+fSxcbiAgICAgICAge2lkOiAnYWxlcnRzJywgbGFiZWw6ICdBbGVydHMnLCB1cmw6ICcvI3dpZGdldHMvYWxlcnRzJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJBbGVydHNcIiAvPn1cbiAgICBdfSxcbiAgICB7aWQ6ICdzcGVpY2FsJywgbGFiZWw6ICdTcGVjaWFsJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xuICAgICAgICB7aWQ6ICdpbmZpbml0ZScsIGxhYmVsOiAnSW5maW5pdGUgU2Nyb2xsJywgdXJsOiAnLyN3aWRnZXRzL2luZmluaXRlU2Nyb2xsJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJJbmZpbml0ZSBTY3JvbGxcIiAvPn1cbiAgICBdfVxuXTtcblxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XG4gICAgICAgIGlmIChuLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuYXYucHVzaChuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMucHVzaChuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufSkoQXJyYXkuZnJvbShuYXZEZWYpKTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgbmFtZT1cIk9LXCIgbmF2PXtuYXZEZWZ9IHBhZ2VzPXtwYWdlc0RlZn0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy40LjEuMUBvYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgfVxuXG4gICAgZ2V0TWVtb3J5U3RhdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gd2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQ6IG5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJsZWZ0UGFuZVwiIHNwbGl0dGVyPVwidmVydGljYWxcIiBzaXplPXsyMDB9IG1pblNpemU9ezIwMH0gbWF4U2l6ZT17NTAwfSBzaXplVW5pdD1cInB4XCIgPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcgZGVmPXt0aGlzLnByb3BzLm5hdn0gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJyaWdodFBhbmVcIiBkaXNwbGF5PVwiZmxleFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZSBzcGxpdHRlcj1cImhvcml6b250YWxcIiBzaXplPXs3NX0gbWF4U2l6ZT17ODB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd01lbW9yeVZpZXdlciBqc0hlYXBTaXplTGltaXQ9e3RoaXMuc3RhdGUuanNIZWFwU2l6ZUxpbWl0fSB0b3RhbEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudG90YWxKU0hlYXBTaXplfSB1c2VkSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS51c2VkSlNIZWFwU2l6ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQXBwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJvcmRlckNvbnRhaW5lcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQm9yZGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnXG59O1xuXG5Cb3JkZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJzaXN0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiBrZXlib2FyZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xuICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge3NwbGl0dGVyLCBzaXplLCBzaXplVW5pdCwgbWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHR9ID0gdGhpcy5kb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnbnVsbCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bihlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXG4gICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRYID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WCA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WCksXG4gICAgICAgICAgICAgIHRvcCA9IGNsaWVudFkgPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRZIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRZKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUoZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJyA/IGAgdmVydGljYWxQYW5lYCA6ICcnfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcGxpdHRlclN0eWxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNwbGl0dGVyOiAnbnVsbCcsXG4gICAgc2l6ZTogMjUsXG4gICAgbWluU2l6ZTogMTUsXG4gICAgbWF4U2l6ZTogNTAsXG4gICAgc2l6ZVVuaXQ6ICclJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxufTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyU2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmQ6IHRoaXMucHJvcHMuZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpZCwgbGFiZWwsIHVybCwgY2hpbGRyZW4sIG9uVHJlZU5vZGVDbGljaywgYWN0aXZlSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsID8gdXJsIDogJ2phdmFzY3JpcHQ6dm9pZCgwKSd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb2N1c0NsYXNzOiAnZm9jdXNlZCcsXG4gICAgZXhwYW5kb0V4cGFuZENsYXNzOiAnZXhwYW5kJyxcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xufTtcblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb2N1c0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvY3VzQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZVZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xuICAgIH1cbiAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKTtcblxuICAgICAgICAvLyBpZiBubyBzZWxlY3Rpb24gb3Igbm8gY2hpbGRyZW4sIGZvY3VzIHRhcmdldFxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IHRoaXMucHJvcHMuYWN0aXZlSWQgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0gey4uLmN9IC8+KX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudFBhbmUgZnJvbSAnLi4vQ29udGVudFBhbmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gZGF0YS1hY3RpdmUtaWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjLmNvbXBvbmVudCwge2FjdGl2ZTogYy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRQYW5lPilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZjogW11cbn07XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNvbnRlbnRQYW5lYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuLy8gRGlhbG9nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNZW1vcnlWaWV3ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgd2luZG93TWVtb3J5Vmlld2VyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkphdmFzY3JpcHQgSGVhcCBTaXplIExpbWl0Ojwvc3Bhbj4gPHNwYW4+e2pzSGVhcFNpemVMaW1pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ub3RhbCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt0b3RhbEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VXNlZCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt1c2VkSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQgPSB0aGlzLm9uQnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nID0gdGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2cxOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2tlZChlLCBidXR0b24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGJ1dHRvbi5wcm9wcy5kaWFsb2cpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBjbG9zZURpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBvcGVuRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkU2hvd092ZXJsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVuIHx8IHRoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMSRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMVwiIHRpdGxlPVwiZGlhbG9nMVwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMlwiIHRpdGxlPVwiZGlhbG9nMlwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IHJlcG9zaXRpb25Pbk9wZW49e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgZHJhZ2dhYmxlLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBjbGFzcyBEaWFsb2dWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkaWFsb2dgO1xuICAgICAgICB0aGlzLmhlYWRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xuICAgICAgICB0aGlzLmJvZHlDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJvZHknKTtcbiAgICAgICAgdGhpcy5mb290ZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jb25maXJtJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuLCBjbG9zZSwgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZSxcbiAgICAgICAgICAgIG5leHRDbG9zZSA9IG5leHRQcm9wcy5pc09wZW4gPT09IGZhbHNlICYmIGlzT3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICBvcGVuKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Q2xvc2UpIHtcbiAgICAgICAgICAgIGNsb3NlKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZShlLCB0aGlzKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbEJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25DYW5jZWx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkKGUpO1xuXG4gICAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICAgICAgb25DYW5jZWwoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbmZpcm1CdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ29uZmlybX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgICAgIG9uQ29uZmlybShlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21vZCwgdGl0bGUsIGJvZHksIGNhbmNlbExhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5oZWFkZXJDbGFzc30gPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWR9IHRleHQ9e2NhbmNlbExhYmVsfSBjbGFzc05hbWU9e3RoaXMuY2FuY2VsQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kOiAnJyxcbiAgICB0aXRsZTogJ0RpYWxvZyBUaXRsZScsXG4gICAgYm9keTogJ0FOUjEwMzI4MjkgVGhpcyBpcyBhIHNhbXBsZSBtZXNzYWdlLiBEZGxma3dlcm9pdSBzZGZyIHNkZmplcml1IGRmZXJlcmRmc2YuJyxcbiAgICBoZWxwTGFiZWw6ICdIZWxwJyxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgY2xvc2VCdG5MYWJlbDogJ0Nsb3NlJyxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG9wZW46ICgpID0+IHt9LFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBzdHlsZU9iajoge30sXG59O1xuXG5EaWFsb2dWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBtb2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWxwTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlQnRuTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5jb25zdCBEaWFsb2cgPSBwb3B1cGFibGUoZHJhZ2dhYmxlKERpYWxvZ1ZpZXcsICdoZWFkZXJDbGFzcycpKTtcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2VudGVyUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIGRyYWdnYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2dhYmxlKENvbXBvbmVudCwgY2xhc3NQcm9wZXJ0eSkge1xuICAgIGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuICYmIHJlcG9zaXRpb25Pbk9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtsZWZ0LCB0b3B9ID0gZ2V0Q2VudGVyUG9zaXRpb24od2luZG93LCB0aGlzLmRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50QmVpbmdNb3ZlZCA9IHRoaXMuZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZWN0ID0gQ29tcG9uZW50QmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICAgIHtsYXN0TW91c2VYLCBsYXN0TW91c2VZfSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgICB0b3BUb01vdXNlID0gY2xpZW50WSAtIGxhc3RNb3VzZVksXG4gICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUubGVmdCArIGxlZnRUb01vdXNlKSxcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3Qud2lkdGgsIGxlZnQpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQsIHRvcClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBjbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc1Byb3BlcnR5ICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpc1tjbGFzc1Byb3BlcnR5XSkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IHRydWUsXG4gICAgICAgIHN0eWxlT2JqOiB7fVxuICAgIH0sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpO1xuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc3R5bGVPYmo6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9KTtcblxuICAgIHJldHVybiBEcmFnZ2FibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCBQb3B1cE1hbmFnZXIgZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuXG4vLyBwb3B1cGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwYWJsZShDb21wb25lbnQpIHtcbiAgICBsZXQgekluZGV4ID0gekluZGV4c1tDb21wb25lbnQudHlwZV0gfHwgMDtcblxuICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBDb21wb25lbnQucHJvcFR5cGVzLnN0eWxlT2JqICE9PSAndW5kZWZpbmVkJywgJ1RoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgYW4gc3R5bGVPYmogYXMgcHJvcCcpO1xuXG4gICAgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuaGFuZGxlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9IHN0eWxlT2JqPXtzdHlsZU9ian0gLz4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFBvcHVwQ29tcG9uZW50O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9wb3B1cGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHREaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBkaXNhYmxlZCA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dEVuYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IGZhbHNlICYmIGRpc2FibGVkID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobmV4dERpc2FibGVkKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQmVlbkJsdXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShuZXh0UHJvcHMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25CbHVyKGUpIHtcbiAgICAgICAgICAgIC8vIHNldCBibHVyIGZsYWdcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRm9jdXMoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGluaXRTdGF0ZSkpO1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVmFsaWQodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZWdFeHAsIHZhbGlkYXRvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIXJlZ0V4cCAmJiAhdmFsaWRhdG9yKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4cCAmJiByZWdFeHAudGVzdCh2YWx1ZSkgfHwgdmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWlyZWQsIG9uVmFsaWRhdGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGlzVmFsdWVFbXB0eSA9IGlzRW1wdHkoaW5wdXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgbm90VmFsaWQgPSAhdGhpcy5pc1ZhbGlkKGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG1vZCA9IChpc1ZhbHVlRW1wdHkgJiYgcmVxdWlyZWQpID8gJ21pc3NpbmcnIDogbm90VmFsaWQgPyAnZXJyb3InIDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZShtb2QpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kLCBtZXNzYWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBvblZhbGlkYXRlZCAmJiBvblZhbGlkYXRlZCh7bW9kLCBtZXNzYWdlLCBvazogbW9kID09PSAnJ30sIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIHdpdGhUb29sdGlwXG4vLyBjdXJyZW50bHkgSSB1c2VkIGNzcyBwZXNldWRvLWVsZW1lbnQgYXMgdG9vbHRpcFxuLy8gYnV0IEkgZmVlbCB3ZSBtYXkgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuLy8gYmVjYXVzZSBpdCBoYXMgc29tZSBsaW1pdGF0aW9uOlxuLy8gZm9yIGV4YW1wbGUsIHBlc2VkdW8tZWxlbWVudCBvbmx5IHN1cHBvcnQgcHVyZSB0ZXh0XG4vLyBzbyBubyBIVE1MIGlzIGNhbiBiZSBzaG93blxuLy8gVE9ETzogYmV0dGVyIHNvbHV0aW9uLCBtYXliZSBhbm90aGVyIGhlbHBlciB0byBzdXBwb3J0IEhUTUxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhUb29sdGlwKENvbXBvbmVudCkge1xuICAgIGNsYXNzIENvbXBvbmVudFdpdGhUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRpc3BsYXk6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGxvY2FsIHZhcmlhYmxlXG4gICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCguLi5hcmdzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcbiAgICAgICAgICAgIC8vIGNvcHkgY2hpbGRyZW4gZGlzcGxheSB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyRGlzcGxheTogd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21Ob2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyl9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBPbkxvYWQgJiYgdGhpcy5wcm9wcy50b29sdGlwICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VG9vbHRpcDogdHJ1ZSwgdG9vbHRpcDogdGhpcy5wcm9wcy50b29sdGlwIH0sIHRoaXMuaGlkZVRvb2x0aXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHt0b29sdGlwLCB0b29sdGlwVGV4dH0gPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB0eXBlb2YgdG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcgPyB0b29sdGlwIDogdG9vbHRpcFRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvd1Rvb2x0aXAodG9vbHRpcCwgaGlkZUFmdGVyU2hvd249dHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1Rvb2x0aXBUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNob3dUb29sdGlwVGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiB0cnVlLCB0b29sdGlwfSwgaGlkZUFmdGVyU2hvd24gPyB0aGlzLmhpZGVUb29sdGlwLmJpbmQodGhpcykgOiAoKSA9Pnt9KTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuc2hvd1Rvb2x0aXBUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZGVUb29sdGlwKGNsZWFyVG9vbHRpcD1mYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAodGhpcy5wcm9wcy50b29sdGlwIHx8IHRoaXMucHJvcHMudG9vbHRpcFRleHQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VMZWF2ZShlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qge3Rvb2x0aXAsIHNob3dUb29sdGlwfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwJ106IHRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgIFsnZGF0YS10b29sdGlwLXNob3cnXTogc2hvd1Rvb2x0aXAgPyAneWVzJyA6ICdubydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmNvbnRhaW5lckRpc3BsYXlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIG91dHRlciBpcyBhIGJsb2NrIGNvbnRhaW5lclxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gdXNlIDo6YWZ0ZXIgb3IgOjpiZWZvcmUgYXMgdG9vbHRpcCBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9IFxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcFRleHQ6ICcnLFxuICAgICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiAyMCxcbiAgICAgICAgaGlkZVRvb2x0aXBUaW1lb3V0OiAxMDAwXG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdG9vbHRpcFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGluaXRpYWwgdG9vbHRpcFxuICAgICAgICBzaG93VG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dUb29sdGlwT25Mb2FkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvd1Rvb2x0aXBUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBoaWRlVG9vbHRpcFRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIENvbXBvbmVudFdpdGhUb29sdGlwO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJyRpc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwd2RGaWVsZDoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgbmFtZTogJ3B3ZEZpZWxkJ1xuICAgIH0sXG4gICAgaGlkZGVuOiB0cnVlXG59O1xuXG4vLyBGb3JtIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1zIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoaW5pdFN0YXRlKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkl0ZW0gPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAxJywgdmFsdWU6ICdpMSd9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMicsIHZhbHVlOiAnaTInfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDMnLCB2YWx1ZTogJ2kzJ31cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICB0b2dnbGVGaWVsZERpc2FibGUobmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXToge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5nZXRTdGF0ZShuYW1lLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSksICgpPT4ge1xuICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucHdkRmllbGQucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9yKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMl0gPSB0aGlzLmdldFN0YXRlcyhbJ25hbWVGaWVsZCcsICdwd2RGaWVsZCddKTtcblxuICAgICAgICBpMS52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcjtcbiAgICAgICAgaTIudmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3I7XG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9XCJEaXNhYmxlZCB0b29sdGlwXCIgdGV4dD1cIkRpc2FibGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkxfSByZWY9e25hbWUgPT4gdGhpcy5uYW1lRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgdG9vbHRpcFRleHQ9e1wibm9ybWFsIHRvb2x0aXBcIn0gey4uLmkyfSByZWY9e25hbWUgPT4gdGhpcy5wd2RGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcFRleHQ9e1wiRGlzYWJsZWQgdG9vbHRpcFwifSBpbnB1dFZhbHVlPVwiSSBhbSBkaXNhYmxlZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Zb3VyIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlLCBvbmUgbG93ZXJjYXNlLCBhbmQgb25lIG51bWJlci48L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkRyb3Bkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW1zPXt0aGlzLmRyb3Bkb3duSXRlbX0gb25DaGFuZ2U9e3RoaXMub25Ecm9wZG93bkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkNvbW1pbmcgU29vbi4uLlwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9UZXh0SW5wdXQnO1xuXG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZElkKVswXTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duYDtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgdGhpcy5pbml0RmlsdGVyID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSWQ6ICctMScsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dElucHV0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIgPSBlID0+IHRoaXMuX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpKSk7XG4gICAgICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IE9iamVjdC5hc3NpZ24oaXRlbSwge2lkOiAnaXRlbScgKyBpfSkpfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpIHtcbiAgICAgICAgLy8gaWYgdGhlIGNsaWNrIHdhcyB3aXRoaW4gc2VsZiwgaWdub3JlOyBvdGhlcndpc2UsIGNsb3NlIHNlbGZcbiAgICAgICAgaWYgKCF0aGlzLmRvbU5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHt0YXJnZXQ6IHRoaXMuZG9tTm9kZX0pKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7IGlucHV0VmFsdWUgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoaW5wdXRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGNoYXJzID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyksXG4gICAgICAgICAgICAgICAgcmVnR3JwID0gY2hhcnMubWFwKGMgPT4gYFskeyhjICsgJycpLnRvVXBwZXJDYXNlKCl9JHsoYyArICcnKS50b0xvd2VyQ2FzZSgpfV1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlZ0dycC5qb2luKCcnKSkpLnRlc3QoaXRlbS5sYWJlbClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2l0ZW1zLCBzZWxlY3RlZElkfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09IHNlbGVjdGVkSWQpWzBdLFxuICAgICAgICAgICAgW2lucHV0UHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyd0ZXh0SW5wdXQnXSksXG4gICAgICAgICAgICBuZXdJbnB1dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywge1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEl0ZW0ubGFiZWwgOiBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gcmVmPXt0aGlzLnByb2Nlc3NSZWZ9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gc2VsZWN0ZWQ9eyEhc2VsZWN0ZWRJdGVtfSB2YWx1ZT17c2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLnZhbHVlIDogJyd9IGNsYXNzTmFtZT17dGhpcy5wbGFjZWhvbGRlckNsYXNzICsgJyBub25lIGN1cnJlbnQnfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCB7Li4ubmV3SW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0IGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9IGNsb3NlPXt0aGlzLmNsb3NlfSBpdGVtcz17aXRlbXN9IHNlbGVjdGVkSWQ9e3NlbGVjdGVkSWR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBTZWxlY3QuLi4nLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fVxufTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTGlzdFZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiAnRHJvcGRvd24nO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bldyYXBwZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2l0ZW1zLCBjbGFzc05hbWUsIHN0eWxlT2JqLCBzZWxlY3RlZElkLCBmaWx0ZXIsIG5vSXRlbU1lc3NhZ2V9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSksXG4gICAgICAgICAgICBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcihmaWx0ZXIpLFxuICAgICAgICAgICAgaGFzSXRlbSA9IG5ld0l0ZW1zLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAge2hhc0l0ZW0gPyBuZXdJdGVtcy5tYXAoaXRlbSA9PiA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLmxhYmVsfSB2YWx1ZT17aXRlbS52YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkSWQgPT09IGl0ZW0uaWR9IC8+ICkgOiA8RHJvcGRvd25JdGVtPntub0l0ZW1NZXNzYWdlfTwvRHJvcGRvd25JdGVtPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25MaXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVPYmo6IHt9LFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWUsXG4gICAgbm9JdGVtTWVzc2FnZTogJ05vIEl0ZW0gRm91bmQnXG59XG5cbkRyb3Bkb3duTGlzdFZpZXcucHJvcFR5cGVzID0ge1xuICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbm9JdGVtTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25MaXN0ID0gcG9wdXBhYmxlKERyb3Bkb3duTGlzdFZpZXcpO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duSXRlbWA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgdmFsdWUsIGxhYmVsLCBpZCwgc2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWlkPXtpZH0gZGF0YS1zZWxlY3RlZD17c2VsZWN0ZWR9IGRhdGEtbGFiZWw9e2xhYmVsfSBkYXRhLXZhbHVlPXt2YWx1ZX0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e2NoaWxkcmVuIHx8IGxhYmVsfTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHJpbmc6ICdQbGVhc2UgU2VsZWN0Li4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlXG59O1xuXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9