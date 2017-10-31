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
        blur: 'onBlur',
        keydown: 'onKeyDown'
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
                args[0] = this.transformState(args[0], '$', this.state);
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
        value: function transformState(stateObj, compareObj) {
            return (0, _utils.e)(stateObj, '$', compareObj);
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
    var compareObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
                if (valueIsObj && compareObj !== null && typeof compareObj[r] !== 'undefined') {
                    result[r] = value;
                } else {
                    valueIsObj ? _f(value, r, result) : result[r] = value;
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
                { disabled: disabled, type: type, title: title, className: this.className, onClick: this.handleEvent },
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
    Dropdown: 1000,
    Tooltip: 10000
};

var States = exports.States = {
    NORMAL: 'normal',
    WARNING: 'warning',
    ERROR: 'error'
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

var _Tooltips = __webpack_require__(41);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Header2.default, { text: 'Monitoring' }) }, { id: 'form', label: 'Form Elements', url: '/#form', component: _react2.default.createElement(_Forms2.default, null) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'tooltips', label: 'Tooltips', url: '/#widgets/tooltips', component: _react2.default.createElement(_Tooltips2.default, null) }] }, { id: 'speical', label: 'Special', expand: true, children: [{ id: 'infinite', label: 'Infinite Scroll', url: '/#widgets/infiniteScroll', component: _react2.default.createElement(_Header2.default, { text: 'Infinite Scroll' }) }] }];

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
                return React.createElement(Component, _extends({}, this.props, { zIndex: this.state.zIndex, ref: this.processRef.bind(this) }));
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

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _Tooltip = __webpack_require__(42);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Constants = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// withTooltip
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
                this.onTooltipMouseEnter = this.onTooltipMouseEnter.bind(this);
                this.tooltipOnMouseLeave = this.tooltipOnMouseLeave.bind(this);
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _get3;

                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidMount', this) && (_get3 = _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidMount', this)).call.apply(_get3, [this].concat(args));

                // get tooltip container
                var tooltipContainer = document.body.querySelector('tooltip');
                // if not exist, create once
                if (!tooltipContainer) {
                    tooltipContainer = document.createElement('tooltip');
                    tooltipContainer.className = 'tooltip';

                    document.body.appendChild(tooltipContainer);
                }
                // assign it to component local prop
                this.tooltipContainer = tooltipContainer;

                // bind events
                this.bindEvents();
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                this.domNode.addEventListener('mouseenter', this);
                this.domNode.addEventListener('mouseleave', this);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var _get4;

                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentWillUnmount', this) && (_get4 = _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentWillUnmount', this)).call.apply(_get4, [this].concat(args));
                document.body.removeChild(this.tooltipContainer);
                this.domNode.removeEventListener('mouseenter', this);
                this.domNode.removeEventListener('mouseleave', this);
            }
        }, {
            key: 'getTooltipPos',
            value: function getTooltipPos() {
                var _domNode$getBoundingC = this.domNode.getBoundingClientRect(),
                    x = _domNode$getBoundingC.x,
                    y = _domNode$getBoundingC.y,
                    width = _domNode$getBoundingC.width,
                    height = _domNode$getBoundingC.height,
                    _props = this.props,
                    tooltipPosition = _props.tooltipPosition,
                    tooltipPositions = _props.tooltipPositions,
                    tooltipWidth = _props.width,
                    tooltipHeight = _props.height;

                var left = -9999,
                    top = -9999;

                switch (tooltipPositions[tooltipPosition]) {
                    case 'after':
                        left = x + width;
                        top = y;
                        break;

                    case 'before':
                        left = x - tooltipWidth;
                        top = y;
                        break;

                    case 'above':
                        left = x;
                        top = y - tooltipHeight;
                        break;

                    case 'below':
                        left = x;
                        top = y + height;
                        break;

                    case 'below-centered':
                        left = x + (width - tooltipWidth) / 2;
                        top = y + height;
                        break;

                    case 'above-centered':
                        left = x + (width - tooltipWidth) / 2;
                        top = y - tooltipHeight;
                        break;
                }

                return { left: left, top: top };
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(e) {
                var pos = this.getTooltipPos(),
                    newProps = {
                    state: _Constants.States[this.props.state],
                    onMouseEnter: this.onTooltipMouseEnter,
                    onMouseLeave: this.tooltipOnMouseLeave
                };

                _reactDom2.default.render(React.createElement(_Tooltip2.default, _extends({}, this.props, newProps, pos)), this.tooltipContainer);
            }
        }, {
            key: 'onTooltipMouseEnter',
            value: function onTooltipMouseEnter(e) {
                this._tooltipShowing = this.props.tooltipCanBeEntered;
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave(e) {
                var _this2 = this;

                if (!this._tooltipShowing) {
                    this._leaveTimeout = setTimeout(function () {
                        _reactDom2.default.render(React.createElement(_Tooltip2.default, _extends({}, _this2.props, { tooltip: '' })), _this2.tooltipContainer);
                        _this2._tooltipShowing = false;
                    }, this.props.tooltipCanBeEntered ? 500 : 1);
                }
            }
        }, {
            key: 'tooltipOnMouseLeave',
            value: function tooltipOnMouseLeave(e) {
                _reactDom2.default.render(React.createElement(_Tooltip2.default, _extends({}, this.props, { tooltip: '' })), this.tooltipContainer);
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(Component, _extends({}, this.props, {
                    ref: this.processRef
                }));
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
        tooltipPositions: {
            'after': 'after',
            'before': 'before',
            'above': 'above',
            'below': 'below',
            'below-centered': 'below-centered',
            'above-centered': 'above-centered'
        },
        tooltipCanBeEntered: false,
        tooltipPosition: 'after',
        state: 'NORMAL'
    }, _Tooltip2.default.defaultProps, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltipPosition: _propTypes2.default.string,
        tooltipPositions: _propTypes2.default.object,
        tooltipCanBeEntered: _propTypes2.default.bool,
        state: _propTypes2.default.string
    }, _Tooltip2.default.propTypes);

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

var _Checkbox = __webpack_require__(40);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _Dropdown = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validator = function validator(v) {
    return v.includes('s');
};
var initState = {
    nameField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Name',
        name: 'nameField',
        validator: validator,
        required: true
    },
    pwdField: {
        disabled: false,
        inputValue: '',
        placeholder: 'Password',
        type: 'password',
        validator: validator,
        name: 'pwdField'
    },
    dropdown: {
        disabled: false
    },
    disableCheckbox: {
        name: 'disableCheckbox',
        checked: false
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
        key: 'onChange',
        value: function onChange(e) {
            this.setState(_defineProperty({}, e.target.name, {
                inputValue: e.target.value,
                checked: e.target.checked
            }));

            if (e.target.name === 'disableCheckbox') {
                var disabled = !this.getState('dropdown', 'disabled');
                this.setState({
                    dropdown: {
                        tooltip: disabled ? 'disabled tooltip' : '',
                        disabled: disabled
                    }
                });
            }
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
                _getStates = this.getStates(['nameField', 'pwdField', 'disableCheckbox', 'dropdown']),
                _getStates2 = _slicedToArray(_getStates, 4),
                i1 = _getStates2[0],
                i2 = _getStates2[1],
                i3 = _getStates2[2],
                dropdownProps = _getStates2[3];


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
                    _react2.default.createElement(_Button2.default, { disabled: true, tooltipText: 'Disabled tooltip', text: 'Disabled' }),
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
                        _react2.default.createElement(_TextInput2.default, _extends({}, i2, { ref: function ref(name) {
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
                    _react2.default.createElement(_Dropdown.Dropdown, _extends({ items: this.dropdownItem, onChange: this.onDropdownChange.bind(this) }, dropdownProps)),
                    _react2.default.createElement(_Header2.default, { text: 'Checkbox' }),
                    _react2.default.createElement(_Checkbox2.default, _extends({ label: 'Disable drop down' }, i3))
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
                cursor: '-1',
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
        key: 'next',
        value: function next() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

            if (id === -1) return this.first.id;
            var indexOfItem = this.state.items.findIndex(function (e) {
                return e.id === id;
            });
            if (indexOfItem === this.length - 1) return this.first.id;
            return this.state.items[indexOfItem + 1].id;
        }
    }, {
        key: 'prev',
        value: function prev() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

            if (id === -1) return this.last.id;
            var indexOfItem = this.state.items.findIndex(function (e) {
                return e.id === id;
            });
            if (indexOfItem === 0) return this.last.id;
            return this.state.items[indexOfItem - 1].id;
        }
    }, {
        key: 'getItem',
        value: function getItem() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

            if (id === -1) return null;
            return this.state.items.filter(function (item) {
                return item.id === id;
            })[0];
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            var cursorId = this.state.cursor !== -1 ? this.state.cursor : this.state.selectedId;
            if (e.key === 'ArrowDown') {
                this.setState({
                    cursor: this.next(cursorId),
                    isOpen: true
                });
            }

            if (e.key === 'ArrowUp') {
                this.setState({
                    cursor: this.prev(cursorId),
                    isOpen: true
                });
            }

            if (e.key === 'Enter') {
                var item = this.getItem(cursorId);

                this.setState({
                    selectedId: cursorId,
                    cursor: !this.state.isOpen ? this.state.selectedId : -1,
                    isOpen: !this.state.isOpen,
                    filter: this.initFilter,
                    textInput: {
                        inputValue: item ? item.label : ''
                    }
                });
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            if (this.props.disabled) return;

            this.setState({
                isOpen: !this.state.isOpen,
                filter: this.initFilter,
                cursor: -1
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
                cursor: -1,
                filter: this.initFilter
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                placeholder = _props.placeholder,
                disabled = _props.disabled,
                _state = this.state,
                items = _state.items,
                selectedId = _state.selectedId,
                cursor = _state.cursor,
                selectedItem = this.selectedItem,
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
                { className: this.className, ref: this.processRef, onClick: this.handleEvent, onKeyDown: this.handleEvent },
                _react2.default.createElement(
                    DropdownItem,
                    { selected: !!selectedItem, value: selectedItem ? selectedItem.value : '', className: this.placeholderClass + ' none current' },
                    _react2.default.createElement(_TextInput2.default, _extends({}, this.props, newInputProps))
                ),
                _react2.default.createElement(DropdownList, { isOpen: this.state.isOpen, filter: this.state.filter, close: this.close, items: items, selectedId: cursor !== -1 ? cursor : selectedId })
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
    }, {
        key: 'first',
        get: function get() {
            return this.state.items[0] || {};
        }
    }, {
        key: 'last',
        get: function get() {
            return this.state.items[this.state.items.length - 1] || {};
        }
    }, {
        key: 'selectedIndex',
        get: function get() {
            var _this4 = this;

            return this.selectedItem ? this.state.items.findIndex(function (e) {
                return e.id === _this4.selectedItem.id;
            }) : 0;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.state.items.length;
        }
    }]);

    return Dropdown;
}(_BaseComponent5.default);

Dropdown.defaultProps = {
    placeholder: 'Please Select...',
    onChange: function onChange() {},
    disabled: false
};

Dropdown.propTypes = {
    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
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
            var _props2 = this.props,
                items = _props2.items,
                className = _props2.className,
                zIndex = _props2.zIndex,
                selectedId = _props2.selectedId,
                filter = _props2.filter,
                noItemMessage = _props2.noItemMessage,
                cls = (0, _utils.getClsName)(this.className, !this.props.isOpen ? 'hidden' : ''),
                newItems = items.filter(filter),
                hasItem = newItems.length > 0,
                style = { zIndex: zIndex };


            return _react2.default.createElement(
                'div',
                { className: cls, style: style },
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
    zIndex: 0,
    close: function close() {},
    filter: function filter() {
        return true;
    },
    noItemMessage: 'No Item Found'
};

DropdownListView.propTypes = {
    zIndex: _propTypes2.default.number,
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
            var _props3 = this.props,
                children = _props3.children,
                className = _props3.className,
                value = _props3.value,
                label = _props3.label,
                id = _props3.id,
                selected = _props3.selected;


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

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckboxView = undefined;

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

var CheckboxView = exports.CheckboxView = function (_BaseComponent) {
    _inherits(CheckboxView, _BaseComponent);

    function CheckboxView() {
        _classCallCheck(this, CheckboxView);

        return _possibleConstructorReturn(this, (CheckboxView.__proto__ || Object.getPrototypeOf(CheckboxView)).apply(this, arguments));
    }

    _createClass(CheckboxView, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'checkbox';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                disabled = _props.disabled,
                name = _props.name,
                checked = _props.checked,
                label = _props.label,
                cls = (0, _utils.getClsName)(this.className);


            return _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { ref: function ref(input) {
                        return _this2.domNode = input;
                    },
                    className: cls,
                    disabled: disabled,
                    name: name,
                    type: 'checkbox',
                    checked: checked,
                    onChange: this.handleEvent,
                    onFocus: this.handleEvent,
                    onBlur: this.handleEvent
                }),
                label
            );
        }
    }]);

    return CheckboxView;
}(_BaseComponent3.default);

CheckboxView.defaultProps = {
    disabled: false,
    label: ''
};

CheckboxView.propTypes = {
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    label: _propTypes2.default.string
};

var Checkbox = (0, _Helper.withTooltip)(CheckboxView);
exports.default = Checkbox;

/***/ }),
/* 41 */
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

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(16);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var longTooltip = 'So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.\nA few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she\u2019d enjoy it too.\nLittle did I know what I was in store for\u2026, So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.\nA few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she\u2019d enjoy it too.\nLittle did I know what I was in store for\u2026';
var tooltip = 'This is normal tooltip';
var oneLineWithInlineMarkup = '<span class="colorful">I am colorful tooltip</span>';
// Tooltips page

var Tooltips = function (_BaseComponent) {
    _inherits(Tooltips, _BaseComponent);

    function Tooltips() {
        _classCallCheck(this, Tooltips);

        return _possibleConstructorReturn(this, (Tooltips.__proto__ || Object.getPrototypeOf(Tooltips)).apply(this, arguments));
    }

    _createClass(Tooltips, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: '100%',
                height: '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: style, className: 'tooltips' },
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: after', tooltip: tooltip, tooltipPosition: 'after' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: before', tooltip: tooltip, tooltipPosition: 'before' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: above', tooltip: tooltip, tooltipPosition: 'above' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: below', tooltip: tooltip, tooltipPosition: 'below' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: below-centered', tooltip: tooltip, tooltipPosition: 'below-centered' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: above-centered', tooltip: tooltip, tooltipPosition: 'above-centered' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip can be enterred', tooltipCanBeEntered: true, tooltip: tooltip }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip state is always WARNING', tooltip: tooltip, tooltipState: 'WARNING' }),
                _react2.default.createElement(_Button2.default, { text: 'Help Tips' }),
                _react2.default.createElement(_Button2.default, { text: 'Really Long tooltip', tooltip: longTooltip, tooltipCanBeEntered: true }),
                _react2.default.createElement(_Button2.default, { text: 'One-liner with inline markup', tooltip: oneLineWithInlineMarkup })
            );
        }
    }]);

    return Tooltips;
}(_BaseComponent3.default);

exports.default = Tooltips;

/***/ }),
/* 42 */
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

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolTip = function (_BaseComponent) {
    _inherits(ToolTip, _BaseComponent);

    function ToolTip() {
        _classCallCheck(this, ToolTip);

        return _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).apply(this, arguments));
    }

    _createClass(ToolTip, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'tooltip';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                isOpen = _props.isOpen,
                tooltip = _props.tooltip,
                state = _props.state,
                left = _props.left,
                top = _props.top,
                width = _props.width,
                height = _props.height,
                maxHeight = _props.maxHeight,
                opacity = _props.opacity,
                zIndex = _props.zIndex,
                cls = (0, _utils.getClsName)(this.className, state),
                style = {
                position: 'absolute',
                left: left,
                top: top,
                zIndex: zIndex,
                width: width + 'px',
                minHeight: height + 'px',
                maxHeight: maxHeight + 'px',
                opacity: opacity
            };


            return _react2.default.createElement('div', { onMouseEnter: this.handleEvent, onMouseOver: this.handleEvent, onMouseLeave: this.handleEvent, className: cls, style: tooltip ? style : {}, dangerouslySetInnerHTML: { __html: tooltip } });
        }
    }]);

    return ToolTip;
}(_BaseComponent3.default);

exports.default = ToolTip;


ToolTip.defaultProps = {
    opacity: 1,
    tooltip: '',
    left: -99999,
    top: -99999,
    width: 200,
    height: 14,
    maxHeight: 100,
    state: 'normal',
    zIndexs: _Constants.zIndexs.Tooltip
};

ToolTip.propTypes = {
    opacity: _propTypes2.default.number,
    tooltip: _propTypes2.default.string,
    left: _propTypes2.default.number,
    top: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    maxHeight: _propTypes2.default.number,
    state: _propTypes2.default.string
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFjZWZlYmI3NzVlY2RlNmY4NGMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Ub29sdGlwcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sdGlwL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicHJvdG90eXBlIiwiaGFuZGxlRXZlbnQiLCJtYXAiLCJjbGljayIsImNoYW5nZSIsIm1vdXNlb3ZlciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2VvdXQiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2Vtb3ZlIiwiZm9jdXMiLCJibHVyIiwia2V5ZG93biIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsIm5hbWUiLCJhcmdzIiwiYmluZCIsInByb2Nlc3NSZWYiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnQiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50SWQiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybVN0YXRlIiwic3RhdGUiLCJrZXkiLCJkZWxtaXRlciIsInJlc3VsdCIsImZvdW5kIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic3BsaWNlIiwibmFtZXMiLCJzb21lIiwiaSIsInN0YXRlT2JqIiwiY29tcGFyZU9iaiIsImNscyIsImNsYXNzTmFtZSIsImlzT2JqIiwiY2xvbmUiLCJnZXRDZW50ZXJQb3NpdGlvbiIsImdldENsc05hbWUiLCJpc0VtcHR5Iiwib2JqIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdGVPYmplY3QiLCJfZiIsInJvb3QiLCJlbnRyaWVzIiwidmFsdWUiLCJ2YWx1ZUlzT2JqIiwiciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsIkFycmF5IiwiZnJvbSIsImFyZ3VtZW50cyIsImZpbHRlciIsInMiLCJqb2luIiwidHJpbSIsInRlc3QiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJsZW5ndGgiLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImRyYWdnYWJsZSIsInBvcHVwYWJsZSIsIlBvcHVwTWFuYWdlciIsInZhbGlkYXRhYmxlIiwid2l0aFRvb2x0aXAiLCJtYWtlRW1wdHlGdW5jdGlvbiIsImFyZyIsImVtcHR5RnVuY3Rpb24iLCJ0aGF0UmV0dXJucyIsInRoYXRSZXR1cm5zRmFsc2UiLCJ0aGF0UmV0dXJuc1RydWUiLCJ0aGF0UmV0dXJuc051bGwiLCJ0aGF0UmV0dXJuc1RoaXMiLCJ0aGF0UmV0dXJuc0FyZ3VtZW50IiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJhIiwiYiIsImMiLCJkIiwiZiIsImVycm9yIiwiYXJnSW5kZXgiLCJyZXBsYWNlIiwiZnJhbWVzVG9Qb3AiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsIkJ1dHRvblZpZXciLCJvbkNsaWNrZWQiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIkJ1dHRvbiIsIkhlYWRlciIsImRlZmF1bHRUeXBlcyIsIndhcm5pbmciLCJwcmludFdhcm5pbmciLCJfbGVuIiwiX2tleSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJ6SW5kZXhzIiwiRGlhbG9nIiwiT3ZlcmxheSIsIkRyb3Bkb3duIiwiVG9vbHRpcCIsIlN0YXRlcyIsIk5PUk1BTCIsIldBUk5JTkciLCJFUlJPUiIsInR5cGVzIiwiZXZlbnRUeXBlIiwic3RhY2siLCJldmVudEhhbmRsZXIiLCJhZGQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJzYXZlZENvbXBvbmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXMiLCJpbmNsdWRlcyIsImNvZGUiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZSIsImhhbmRsZSIsImlzT3BlbiIsImlzUG9wdXAiLCJUZXh0SW5wdXRWaWV3IiwicGxhY2Vob2xkZXIiLCJtb2QiLCJpbnB1dFZhbHVlIiwiYXV0b2NvbXBsZXRlIiwiaW5wdXQiLCJvbkNoYW5nZSIsIlRleHRJbnB1dCIsIm5hdkRlZiIsImlkIiwibGFiZWwiLCJ1cmwiLCJleHBhbmQiLCJwYWdlc0RlZiIsInJlcyIsIm5hdiIsIm4iLCJmb3JFYWNoIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3NpZ24iLCJjaGVja1Byb3BUeXBlcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwibnVtYmVyIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsImxvY2F0aW9uIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsImhhc093blByb3BlcnR5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImtleXMiLCJldmVyeSIsInN0ZXAiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiUHJvcFR5cGVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsInRlc3QzIiwibGV0dGVyIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwidG8iLCJzeW1ib2xzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInNoaW0iLCJnZXRTaGltIiwiQXBwIiwiYWN0aXZlSWQiLCJqc0hlYXBTaXplTGltaXQiLCJ0b3RhbEpTSGVhcFNpemUiLCJ1c2VkSlNIZWFwU2l6ZSIsImhhc2giLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImdldE1lbW9yeVN0YXQiLCJzZXRTdGF0ZSIsInBlcmZvcm1hbmNlIiwibWVtb3J5Iiwib25UcmVlTm9kZUNsaWNrIiwicGFnZXMiLCJCb3JkZXJDb250YWluZXIiLCJwZXJzaXN0IiwiUGFuZSIsIm1vdXNlbW92ZUhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNldXBIYW5kbGVyIiwib25Nb3VzZVVwIiwic3BsaXR0ZXIiLCJzaXplIiwic2l6ZVVuaXQiLCJtYXhTaXplIiwibWluU2l6ZSIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsIm9uTW91c2VEb3duIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsImNsb25lRWxlbWVudCIsImFjdGl2ZSIsIkNvbnRlbnRQYW5lIiwiV2luZG93TWVtb3J5Vmlld2VyIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsImRpYWxvZzEiLCJkaWFsb2cyIiwiYnV0dG9uIiwiZGlhbG9nIiwiZGlhbG9nMSRpc09wZW4iLCJkaWFsb2cyJGlzT3BlbiIsIkRpYWxvZ1ZpZXciLCJoZWFkZXJDbGFzcyIsImdldExpYlByZWZpeGVkQ2xhc3MiLCJjbG9zZUJ0bkNsYXNzIiwiYm9keUNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJjYW5jZWxCdG5DbGFzcyIsImNvbmZpcm1CdG5DbGFzcyIsIm9uQ2FuY2VsQnRuQ2xpY2tlZCIsIm9uQ29uZmlybUJ0bkNsaWNrZWQiLCJvbkNsb3NlQnRuQ2xpY2tlZCIsIm5leHRQcm9wcyIsIm9wZW4iLCJyZXBvc2l0aW9uT25PcGVuIiwibmV4dE9wZW4iLCJuZXh0Q2xvc2UiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImJvZHkiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsb3NlQnRuTGFiZWwiLCJoZWxwTGFiZWwiLCJzdHlsZU9iaiIsIkNvbXBvbmVudCIsImNsYXNzUHJvcGVydHkiLCJEcmFnZ2FibGVDb21wb25lbnQiLCJtb3VzZWRvd25IYW5kbGVyIiwicmVwb3NpdGlvbiIsInJlY3QiLCJDb21wb25lbnRCZWluZ01vdmVkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJsZWZ0VG9Nb3VzZSIsInRvcFRvTW91c2UiLCJtYXgiLCJtaW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBvc2l0aW9uIiwiUG9wdXBDb21wb25lbnQiLCJpbml0U3RhdGUiLCJWYWxpZGF0YWJsZUNvbXBvbmVudCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfaGFzQmVlbkJsdXJyZWQiLCJtZXNzYWdlRGVmIiwibmV4dERpc2FibGVkIiwibmV4dEVuYWJsZWQiLCJ2YWx1ZUNoYW5nZWQiLCJ0IiwicmVnRXhwIiwidmFsaWRhdG9yIiwicmVxdWlyZWQiLCJvblZhbGlkYXRlZCIsImlzVmFsdWVFbXB0eSIsIm5vdFZhbGlkIiwiaXNWYWxpZCIsImdldE1lc3NhZ2UiLCJvayIsIm5ld1Byb3BzIiwidG9vbHRpcCIsImludmFsaWRNZXNzYWdlIiwibWlzc2luZyIsIm1pc3NpbmdNZXNzYWdlIiwiaW1jb21wbGV0ZSIsInByb21wdE1lc3NhZ2UiLCJDb21wb25lbnRXaXRoVG9vbHRpcCIsIm9uVG9vbHRpcE1vdXNlRW50ZXIiLCJ0b29sdGlwT25Nb3VzZUxlYXZlIiwidG9vbHRpcENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJiaW5kRXZlbnRzIiwicmVtb3ZlQ2hpbGQiLCJ0b29sdGlwUG9zaXRpb24iLCJ0b29sdGlwUG9zaXRpb25zIiwidG9vbHRpcFdpZHRoIiwidG9vbHRpcEhlaWdodCIsInBvcyIsImdldFRvb2x0aXBQb3MiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJfdG9vbHRpcFNob3dpbmciLCJ0b29sdGlwQ2FuQmVFbnRlcmVkIiwiX2xlYXZlVGltZW91dCIsImFjdGl2ZUVsZW1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwidG9nZ2xlRGlhbG9nT3BlbiIsImRpYWxvZ05hbWUiLCJvcGVuU3RhdGUiLCJoYXNTdGF0ZVNldCIsIm9wZW5TdGF0ZU5hbWUiLCJ2IiwibmFtZUZpZWxkIiwicHdkRmllbGQiLCJkcm9wZG93biIsImRpc2FibGVDaGVja2JveCIsImNoZWNrZWQiLCJoaWRkZW4iLCJGb3JtcyIsImRyb3Bkb3duSXRlbSIsImdldFN0YXRlIiwicmVzZXQiLCJpbmZvIiwibG9nIiwiZ2V0U3RhdGVzIiwiaTEiLCJpMiIsImkzIiwiZHJvcGRvd25Qcm9wcyIsInRvZ2dsZUZpZWxkRGlzYWJsZSIsInJlc2V0QWxsIiwib25Ecm9wZG93bkNoYW5nZSIsInBsYWNlaG9sZGVyQ2xhc3MiLCJvbklucHV0Q2hhbmdlIiwiaW5pdEZpbHRlciIsInNlbGVjdGVkSWQiLCJpdGVtcyIsImN1cnNvciIsInRleHRJbnB1dCIsIl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIiLCJfY2xpY2tPckZvY3VzQW55d2hlcmUiLCJpdGVtIiwiZmlyc3QiLCJpbmRleE9mSXRlbSIsImZpbmRJbmRleCIsImxhc3QiLCJjdXJzb3JJZCIsInByZXYiLCJnZXRJdGVtIiwiZGF0YXNldCIsInNlbGVjdGVkIiwiZ2V0RmlsdGVyIiwiY2hhcnMiLCJyZWdHcnAiLCJzZWxlY3RlZEl0ZW0iLCJpbnB1dFByb3BzIiwibmV3SW5wdXRQcm9wcyIsIkRyb3Bkb3duTGlzdFZpZXciLCJub0l0ZW1NZXNzYWdlIiwibmV3SXRlbXMiLCJoYXNJdGVtIiwiRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JdGVtIiwiQ2hlY2tib3hWaWV3IiwiQ2hlY2tib3giLCJsb25nVG9vbHRpcCIsIm9uZUxpbmVXaXRoSW5saW5lTWFya3VwIiwiVG9vbHRpcHMiLCJUb29sVGlwIiwibWF4SGVpZ2h0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7QUFPQSxJQUFJQSxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsTUFBSUMscUJBQXNCLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFDeEJBLE9BQU9DLEdBRGlCLElBRXhCRCxPQUFPQyxHQUFQLENBQVcsZUFBWCxDQUZ1QixJQUd2QixNQUhGOztB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QVVoVSxNQVBMO0FBUWhCaE4sV0FBTyxvQkFBVW1JO0FBUkQsQ0FBcEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYWNlZmViYjc3NWVjZGU2Zjg0YyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJyxcbiAgICAgICAga2V5ZG93bjogJ29uS2V5RG93bidcbiAgICB9O1xuXG4gICAgLy8gZmFsbGJhY2sgaGVscGVyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAnb24nICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLy8gb25lIGhhbmRsZUV2ZW50IHRvIHJ1bGUgdGhlbSBhbGxcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbWFwW2UudHlwZV0gfHwgY2FwaXRhbGl6ZShlLnR5cGUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHNbbWV0aG9kXShlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMpIHRoaXNbbWV0aG9kXShlLCB0aGlzKTtcbiAgICB9O1xufSgpKTtcblxuLy8gdXNlIGZvciBjb21wb25lbnRJZFxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgdG8gc2F2ZSBtZW1vcnlcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzUmVmID0gdGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGliQ2xhc3NQcmVmaXggPSAnZSc7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5wb3N0UmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9JHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJyd9YDtcbiAgICB9XG5cbiAgICBwcm9jZXNzUmVmKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgLy8gZW5zdXJlIHdlIGhhdmUgcmVnaXN0ZXJcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSB8fCAwO1xuICAgICAgICAvLyBhZGQgb25lXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gKyAxO1xuICAgICAgICAvLyBhc3NpZ24gbmFtZVxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyByZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmIChpc09iaihhcmdzWzBdKSkge1xuICAgICAgICAgICAgYXJnc1swXSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoYXJnc1swXSwgJyQnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSBieSBuYW1lXG4gICAgLy8gaWYga2V5IGlzIHByb3ZpZGVkLCByZXR1cm4gc3BlY2lmaWVkIHZhbHVlXG4gICAgLy8gaWYga2V5IGlzIGlnbm9yZWQsIHJldHVybiB3aG9sZSBzdGF0ZSBvYmplY3RcbiAgICBnZXRTdGF0ZShuYW1lLCBrZXksIGRlbG1pdGVyID0gJyQnKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbbmFtZSArIGRlbG1pdGVyICsga2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZCA/IHJlc3VsdCA6IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gZ2V0IG11bGl0cGxlIGNoaWxkcmVuIHN0YXRlXG4gICAgZ2V0U3RhdGVzKG5hbWVzID0gW10sIGRlbG1pdGVyPSAnJCcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBuYW1lcy5zb21lKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaiwgY29tcGFyZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaiwgJyQnLCBjb21wYXJlT2JqKTtcbiAgICB9XG5cbiAgICBnZXRMaWJQcmVmaXhlZENsYXNzKGNscykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHtjbHN9YDtcbiAgICB9XG5cbiAgICAvLyBzdHVic1xuICAgIGluaXQoKSB7fVxuICAgIHBvc3RSZWdpc3RlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLy8gaXNPYmo6IGNoZWNrIGlmIHRoZSBnaXZlbiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZTogc2ltcGxlIGNsb25lIHRoZSBnaXZlbiBvYmplY3Rcbi8vIG5vdCBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBjaXJjdWxhciByZWZlcmVuY2VcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWQtbGF5b3V0LW1lbnUtZXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0LCBkZWxtaXRlciA9ICckJywgY29tcGFyZU9iaiA9IG51bGwpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG4gICAgICAgICAgICBpZiAodmFsdWVJc09iaiAmJiBjb21wYXJlT2JqICE9PSBudWxsICYmIHR5cGVvZiBjb21wYXJlT2JqW3JdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZUlzT2JqID8gX2YodmFsdWUsIHIsIHJlc3VsdCkgOiByZXN1bHRbcl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBfZihzdGF0ZU9iamVjdCwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyUG9zaXRpb24oe2lubmVyV2lkdGggPSAxMDAwLCBpbm5lckhlaWdodD04MDB9LCB7d2lkdGggPSA0MDAsIGhlaWdodCA9IDQwMH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICB9XG59XG5cbi8vIGdldENsc05hbWU6IGNvbmNhdGUgYXJ1bWVudHMgd2l0aCBzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5maWx0ZXIocyA9PiBzICE9PScnICYmIHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJykuam9pbignICcpO1xufVxuXG4vLyBpc0VtcHR5OiBjaGVjayBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSwgdHJpbT10cnVlKSB7XG4gICAgcmV0dXJuICh0cmltID8gL15cXHMqJC8gOiAvXiQvKS50ZXN0KHZhbHVlKTsgLy8gQm9vbGVhblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJztcbmltcG9ydCBwb3B1cGFibGUgZnJvbSAnLi9wb3B1cGFibGUnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgdmFsaWRhdGFibGUgZnJvbSAnLi92YWxpZGF0YWJsZSc7XG5pbXBvcnQgd2l0aFRvb2x0aXAgZnJvbSAnLi93aXRoVG9vbHRpcCc7XG5cblxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZSwgUG9wdXBNYW5hZ2VyLCB2YWxpZGF0YWJsZSwgd2l0aFRvb2x0aXB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJ1dHRvbmA7XHJcbiAgICB9XHJcblxyXG4gICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CdXR0b25WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRleHQ6ICdCdXR0b24nLFxyXG4gICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbkJ1dHRvblZpZXcucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHdpdGhUb29sdGlwKEJ1dHRvblZpZXcpO1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBoZWFkZXJgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pO1xuICAgIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJ1xufTtcblxuSGVhZGVyLmRlZmF1bHRUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCB6SW5kZXhzID0ge1xuICAgIERpYWxvZzogMzAwMCxcbiAgICBPdmVybGF5OiAyMDAwLFxuICAgIERyb3Bkb3duOiAxMDAwLFxuICAgIFRvb2x0aXA6IDEwMDAwXG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZXMgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBXQVJOSU5HOuOAgCd3YXJuaW5nJyxcbiAgICBFUlJPUjogJ2Vycm9yJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCJjb25zdCBQb3B1cE1hbmFnZXIgPSB7XG4gICAgdHlwZXM6IFsnRGlhbG9nJ10sXG4gICAgZXZlbnRUeXBlOiAna2V5ZG93bicsXG4gICAgc3RhY2s6IFtdLFxuICAgIGV2ZW50SGFuZGxlcjogbnVsbCxcbiAgICBhZGQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IDAgJiYgIXRoaXMuZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudFR5cGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0YWNrLmZpbHRlcihzYXZlZENvbXBvbmVudCA9PiBzYXZlZENvbXBvbmVudCAhPT0gY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudFR5cGUsIHRoaXMpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYXMoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmluY2x1ZGVzKGNvbXBvbmVudCk7XG4gICAgfSxcbiAgICBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZG9tTm9kZSAmJiBjb21wb25lbnQuZG9tTm9kZS5vZmZzZXRIZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gZGVjb3VwbGVcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuY2xvc2Uoe30sIGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZShjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIGlzT3BlbiA9IGNvbXBvbmVudC5wcm9wcy5pc09wZW47XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhcyhjb21wb25lbnQpICYmIGlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhcyhjb21wb25lbnQpICYmIGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIGEgcG9wdXAgbXVzdCBpbXBsZW1lbnQgY2xvc2UgYW5kIG9wZW5cbiAgICBpc1BvcHVwKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlcy5pbmNsdWRlcyhjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9Qb3B1cE1hbmFnZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGFibGUgLCB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dElucHV0VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0ZXh0SW5wdXRgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgdHlwZSwgZGlzYWJsZWQsIG5hbWUsIG1vZCwgaW5wdXRWYWx1ZSwgYXV0b2NvbXBsZXRlfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT17YXV0b2NvbXBsZXRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UZXh0SW5wdXRWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBhdXRvY29tcGxldGU6ICdvbidcbn07XG5cblRleHRJbnB1dFZpZXcucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMubmFtZSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBUZXh0SW5wdXQgPSB2YWxpZGF0YWJsZSh3aXRoVG9vbHRpcChUZXh0SW5wdXRWaWV3KSk7XG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XHJcbmltcG9ydCBEaWFsb2dzIGZyb20gJy4vRGlhbG9ncyc7XHJcbmltcG9ydCBGb3JtcyBmcm9tICcuL0Zvcm1zJztcclxuaW1wb3J0IFRvb2x0aXBzIGZyb20gJy4vVG9vbHRpcHMnO1xyXG5cclxuXHJcbmNvbnN0IG5hdkRlZiA9IFtcclxuICAgIHtpZDogJ21vbicsIGxhYmVsOiAnTW9uaXRvcmluZycsIHVybDogJy8jbW9uJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJNb25pdG9yaW5nXCIgLz59LFxyXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBFbGVtZW50cycsIHVybDogJy8jZm9ybScsIGNvbXBvbmVudDogPEZvcm1zIC8+fSxcclxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXHJcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcclxuICAgICAgICB7aWQ6ICd0b29sdGlwcycsIGxhYmVsOiAnVG9vbHRpcHMnLCB1cmw6ICcvI3dpZGdldHMvdG9vbHRpcHMnLCBjb21wb25lbnQ6IDxUb29sdGlwcyAvPn0sXHJcbiAgICBdfSxcclxuICAgIHtpZDogJ3NwZWljYWwnLCBsYWJlbDogJ1NwZWNpYWwnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnaW5maW5pdGUnLCBsYWJlbDogJ0luZmluaXRlIFNjcm9sbCcsIHVybDogJy8jd2lkZ2V0cy9pbmZpbml0ZVNjcm9sbCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiSW5maW5pdGUgU2Nyb2xsXCIgLz59XHJcbiAgICBdfVxyXG5dO1xyXG5cclxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XHJcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgfVxuXG4gICAgZ2V0TWVtb3J5U3RhdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gd2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQ6IG5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJsZWZ0UGFuZVwiIHNwbGl0dGVyPVwidmVydGljYWxcIiBzaXplPXsyMDB9IG1pblNpemU9ezIwMH0gbWF4U2l6ZT17NTAwfSBzaXplVW5pdD1cInB4XCIgPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcgZGVmPXt0aGlzLnByb3BzLm5hdn0gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJyaWdodFBhbmVcIiBkaXNwbGF5PVwiZmxleFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZSBzcGxpdHRlcj1cImhvcml6b250YWxcIiBzaXplPXs3NX0gbWF4U2l6ZT17ODB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd01lbW9yeVZpZXdlciBqc0hlYXBTaXplTGltaXQ9e3RoaXMuc3RhdGUuanNIZWFwU2l6ZUxpbWl0fSB0b3RhbEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudG90YWxKU0hlYXBTaXplfSB1c2VkSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS51c2VkSlNIZWFwU2l6ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQXBwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJvcmRlckNvbnRhaW5lcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQm9yZGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnXG59O1xuXG5Cb3JkZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJzaXN0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiBrZXlib2FyZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xuICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge3NwbGl0dGVyLCBzaXplLCBzaXplVW5pdCwgbWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHR9ID0gdGhpcy5kb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnbnVsbCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bihlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXG4gICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRYID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WCA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WCksXG4gICAgICAgICAgICAgIHRvcCA9IGNsaWVudFkgPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRZIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRZKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUoZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJyA/IGAgdmVydGljYWxQYW5lYCA6ICcnfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcGxpdHRlclN0eWxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNwbGl0dGVyOiAnbnVsbCcsXG4gICAgc2l6ZTogMjUsXG4gICAgbWluU2l6ZTogMTUsXG4gICAgbWF4U2l6ZTogNTAsXG4gICAgc2l6ZVVuaXQ6ICclJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxufTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyU2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmQ6IHRoaXMucHJvcHMuZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpZCwgbGFiZWwsIHVybCwgY2hpbGRyZW4sIG9uVHJlZU5vZGVDbGljaywgYWN0aXZlSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsID8gdXJsIDogJ2phdmFzY3JpcHQ6dm9pZCgwKSd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb2N1c0NsYXNzOiAnZm9jdXNlZCcsXG4gICAgZXhwYW5kb0V4cGFuZENsYXNzOiAnZXhwYW5kJyxcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xufTtcblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb2N1c0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvY3VzQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZVZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xuICAgIH1cbiAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKTtcblxuICAgICAgICAvLyBpZiBubyBzZWxlY3Rpb24gb3Igbm8gY2hpbGRyZW4sIGZvY3VzIHRhcmdldFxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IHRoaXMucHJvcHMuYWN0aXZlSWQgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0gey4uLmN9IC8+KX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudFBhbmUgZnJvbSAnLi4vQ29udGVudFBhbmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gZGF0YS1hY3RpdmUtaWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjLmNvbXBvbmVudCwge2FjdGl2ZTogYy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRQYW5lPilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZjogW11cbn07XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNvbnRlbnRQYW5lYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuLy8gRGlhbG9nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNZW1vcnlWaWV3ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgd2luZG93TWVtb3J5Vmlld2VyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkphdmFzY3JpcHQgSGVhcCBTaXplIExpbWl0Ojwvc3Bhbj4gPHNwYW4+e2pzSGVhcFNpemVMaW1pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ub3RhbCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt0b3RhbEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VXNlZCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt1c2VkSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQgPSB0aGlzLm9uQnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nID0gdGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2cxOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2tlZChlLCBidXR0b24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGJ1dHRvbi5wcm9wcy5kaWFsb2cpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBjbG9zZURpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBvcGVuRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkU2hvd092ZXJsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVuIHx8IHRoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMSRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMVwiIHRpdGxlPVwiZGlhbG9nMVwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMlwiIHRpdGxlPVwiZGlhbG9nMlwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IHJlcG9zaXRpb25Pbk9wZW49e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgZHJhZ2dhYmxlLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBjbGFzcyBEaWFsb2dWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkaWFsb2dgO1xuICAgICAgICB0aGlzLmhlYWRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xuICAgICAgICB0aGlzLmJvZHlDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJvZHknKTtcbiAgICAgICAgdGhpcy5mb290ZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jb25maXJtJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuLCBjbG9zZSwgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZSxcbiAgICAgICAgICAgIG5leHRDbG9zZSA9IG5leHRQcm9wcy5pc09wZW4gPT09IGZhbHNlICYmIGlzT3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICBvcGVuKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Q2xvc2UpIHtcbiAgICAgICAgICAgIGNsb3NlKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZShlLCB0aGlzKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbEJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25DYW5jZWx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkKGUpO1xuXG4gICAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICAgICAgb25DYW5jZWwoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbmZpcm1CdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ29uZmlybX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgICAgIG9uQ29uZmlybShlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21vZCwgdGl0bGUsIGJvZHksIGNhbmNlbExhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5oZWFkZXJDbGFzc30gPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWR9IHRleHQ9e2NhbmNlbExhYmVsfSBjbGFzc05hbWU9e3RoaXMuY2FuY2VsQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kOiAnJyxcbiAgICB0aXRsZTogJ0RpYWxvZyBUaXRsZScsXG4gICAgYm9keTogJ0FOUjEwMzI4MjkgVGhpcyBpcyBhIHNhbXBsZSBtZXNzYWdlLiBEZGxma3dlcm9pdSBzZGZyIHNkZmplcml1IGRmZXJlcmRmc2YuJyxcbiAgICBoZWxwTGFiZWw6ICdIZWxwJyxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgY2xvc2VCdG5MYWJlbDogJ0Nsb3NlJyxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG9wZW46ICgpID0+IHt9LFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBzdHlsZU9iajoge30sXG59O1xuXG5EaWFsb2dWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBtb2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWxwTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlQnRuTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5jb25zdCBEaWFsb2cgPSBwb3B1cGFibGUoZHJhZ2dhYmxlKERpYWxvZ1ZpZXcsICdoZWFkZXJDbGFzcycpKTtcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2VudGVyUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIGRyYWdnYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2dhYmxlKENvbXBvbmVudCwgY2xhc3NQcm9wZXJ0eSkge1xuICAgIGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuICYmIHJlcG9zaXRpb25Pbk9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtsZWZ0LCB0b3B9ID0gZ2V0Q2VudGVyUG9zaXRpb24od2luZG93LCB0aGlzLmRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50QmVpbmdNb3ZlZCA9IHRoaXMuZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZWN0ID0gQ29tcG9uZW50QmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICAgIHtsYXN0TW91c2VYLCBsYXN0TW91c2VZfSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgICB0b3BUb01vdXNlID0gY2xpZW50WSAtIGxhc3RNb3VzZVksXG4gICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUubGVmdCArIGxlZnRUb01vdXNlKSxcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3Qud2lkdGgsIGxlZnQpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQsIHRvcClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBjbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc1Byb3BlcnR5ICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpc1tjbGFzc1Byb3BlcnR5XSkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IHRydWUsXG4gICAgICAgIHN0eWxlT2JqOiB7fVxuICAgIH0sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpO1xuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc3R5bGVPYmo6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9KTtcblxuICAgIHJldHVybiBEcmFnZ2FibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCBQb3B1cE1hbmFnZXIgZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuXG4vLyBwb3B1cGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwYWJsZShDb21wb25lbnQpIHtcbiAgICBsZXQgekluZGV4ID0gekluZGV4c1tDb21wb25lbnQudHlwZV0gfHwgMDtcblxuICAgIGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlICYmIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmhhbmRsZSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3Qge2lzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gekluZGV4PXt0aGlzLnN0YXRlLnpJbmRleH0gcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX0gLz4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFBvcHVwQ29tcG9uZW50O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9wb3B1cGFibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHREaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBkaXNhYmxlZCA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dEVuYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IGZhbHNlICYmIGRpc2FibGVkID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobmV4dERpc2FibGVkKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQmVlbkJsdXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShuZXh0UHJvcHMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25CbHVyKGUpIHtcbiAgICAgICAgICAgIC8vIHNldCBibHVyIGZsYWdcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRm9jdXMoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGluaXRTdGF0ZSkpO1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVmFsaWQodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZWdFeHAsIHZhbGlkYXRvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIXJlZ0V4cCAmJiAhdmFsaWRhdG9yKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4cCAmJiByZWdFeHAudGVzdCh2YWx1ZSkgfHwgdmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWlyZWQsIG9uVmFsaWRhdGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGlzVmFsdWVFbXB0eSA9IGlzRW1wdHkoaW5wdXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgbm90VmFsaWQgPSAhdGhpcy5pc1ZhbGlkKGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG1vZCA9IChpc1ZhbHVlRW1wdHkgJiYgcmVxdWlyZWQpID8gJ21pc3NpbmcnIDogbm90VmFsaWQgPyAnZXJyb3InIDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZShtb2QpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kLCBtZXNzYWdlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBvblZhbGlkYXRlZCAmJiBvblZhbGlkYXRlZCh7bW9kLCBtZXNzYWdlLCBvazogbW9kID09PSAnJ30sIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL1dpZGdldHMvVG9vbHRpcCc7XHJcbmltcG9ydCB7IFN0YXRlcyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG4vLyB3aXRoVG9vbHRpcFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoVG9vbHRpcChDb21wb25lbnQpIHtcclxuICAgIGNsYXNzIENvbXBvbmVudFdpdGhUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICAgICBnZXQgZm9jdXNlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tTm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub29sdGlwTW91c2VFbnRlciA9IHRoaXMub25Ub29sdGlwTW91c2VFbnRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBPbk1vdXNlTGVhdmUgPSB0aGlzLnRvb2x0aXBPbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoLi4uYXJncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdG9vbHRpcCBjb250YWluZXJcclxuICAgICAgICAgICAgbGV0IHRvb2x0aXBDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ3Rvb2x0aXAnKTtcclxuICAgICAgICAgICAgLy8gaWYgbm90IGV4aXN0LCBjcmVhdGUgb25jZVxyXG4gICAgICAgICAgICBpZiAoIXRvb2x0aXBDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0b29sdGlwJyk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b29sdGlwJztcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0byBjb21wb25lbnQgbG9jYWwgcHJvcFxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSB0b29sdGlwQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBldmVudHNcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCguLi5hcmdzKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VG9vbHRpcFBvcygpIHtcclxuICAgICAgICAgICAgY29uc3Qge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5kb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAge3Rvb2x0aXBQb3NpdGlvbiwgdG9vbHRpcFBvc2l0aW9ucywgd2lkdGg6dG9vbHRpcFdpZHRoLCBoZWlnaHQ6dG9vbHRpcEhlaWdodH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnQgPSAtOTk5OSxcclxuICAgICAgICAgICAgICAgIHRvcCA9IC05OTk5O1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKHRvb2x0aXBQb3NpdGlvbnNbdG9vbHRpcFBvc2l0aW9uXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWZ0ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdiZWZvcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4IC0gdG9vbHRpcFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgLSB0b29sdGlwSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93JzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93LWNlbnRlcmVkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyAoKHdpZHRoIC0gdG9vbHRpcFdpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvdmUtY2VudGVyZWQnOiBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCArICgod2lkdGggLSB0b29sdGlwV2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geSAtIHRvb2x0aXBIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7bGVmdCwgdG9wfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0VG9vbHRpcFBvcygpLFxyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFN0YXRlc1t0aGlzLnByb3BzLnN0YXRlXSxcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Ub29sdGlwTW91c2VFbnRlcixcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMudG9vbHRpcE9uTW91c2VMZWF2ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlYWN0RG9tLnJlbmRlcig8VG9vbHRpcCB7Li4udGhpcy5wcm9wc30gey4uLm5ld1Byb3BzfSB7Li4ucG9zfS8+LCB0aGlzLnRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Ub29sdGlwTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBTaG93aW5nID0gdGhpcy5wcm9wcy50b29sdGlwQ2FuQmVFbnRlcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl90b29sdGlwU2hvd2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3REb20ucmVuZGVyKDxUb29sdGlwIHsuLi50aGlzLnByb3BzfSB0b29sdGlwPVwiXCIgLz4sIHRoaXMudG9vbHRpcENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9vbHRpcFNob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMudG9vbHRpcENhbkJlRW50ZXJlZCA/IDUwMDogMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvb2x0aXBPbk1vdXNlTGVhdmUoZSkge1xyXG4gICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHRvb2x0aXA9XCJcIiAvPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29tcG9uZW50V2l0aFRvb2x0aXAuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczoge1xyXG4gICAgICAgICAgICAnYWZ0ZXInOiAnYWZ0ZXInLFxyXG4gICAgICAgICAgICAnYmVmb3JlJzogJ2JlZm9yZScsXHJcbiAgICAgICAgICAgICdhYm92ZSc6ICdhYm92ZScsXHJcbiAgICAgICAgICAgICdiZWxvdyc6ICdiZWxvdycsXHJcbiAgICAgICAgICAgICdiZWxvdy1jZW50ZXJlZCc6ICdiZWxvdy1jZW50ZXJlZCcsXHJcbiAgICAgICAgICAgICdhYm92ZS1jZW50ZXJlZCc6ICdhYm92ZS1jZW50ZXJlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBDYW5CZUVudGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogJ2FmdGVyJyxcclxuICAgICAgICBzdGF0ZTogJ05PUk1BTCdcclxuICAgIH0sIFRvb2x0aXAuZGVmYXVsdFByb3BzLCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcclxuXHJcbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICB0b29sdGlwUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICB0b29sdGlwQ2FuQmVFbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0sIFRvb2x0aXAucHJvcFR5cGVzKTtcclxuXHJcbiAgICByZXR1cm4gQ29tcG9uZW50V2l0aFRvb2x0aXA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJyRpc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICdjb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xuaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25JdGVtfSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRHJvcGRvd24nO1xuXG5jb25zdCB2YWxpZGF0b3IgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2LmluY2x1ZGVzKCdzJyk7XG59XG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgbmFtZUZpZWxkOiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICAgIG5hbWU6ICduYW1lRmllbGQnLFxuICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHB3ZEZpZWxkOiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxuICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvcixcbiAgICAgICAgbmFtZTogJ3B3ZEZpZWxkJ1xuICAgIH0sXG4gICAgZHJvcGRvd246IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlQ2hlY2tib3g6IHtcbiAgICAgICAgbmFtZTogJ2Rpc2FibGVDaGVja2JveCcsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBoaWRkZW46IHRydWVcbn07XG5cbi8vIEZvcm0gcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duSXRlbSA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDEnLCB2YWx1ZTogJ2kxJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAyJywgdmFsdWU6ICdpMid9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMycsIHZhbHVlOiAnaTMnfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHRvZ2dsZUZpZWxkRGlzYWJsZShuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmdldFN0YXRlKG5hbWUsICdkaXNhYmxlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0QWxsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudHJhbnNmb3JtU3RhdGUoaW5pdFN0YXRlKSwgKCk9PiB7XG4gICAgICAgICAgICB0aGlzLm5hbWVGaWVsZC5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5wd2RGaWVsZC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcblxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09PSAnZGlzYWJsZUNoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdGhpcy5nZXRTdGF0ZSgnZHJvcGRvd24nLCAgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBkaXNhYmxlZCA/ICdkaXNhYmxlZCB0b29sdGlwJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVmFsaWRhdGVkKHttZXNzYWdlLCBtb2QsIG9rfSkge1xuICAgICAgICBjb25zb2xlLmluZm8obWVzc2FnZSwgbW9kLCBvayk7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSB0b29sdGlwIG9yIHNvbWUgbWVzc2FnZSBib3hcbiAgICB9XG5cbiAgICBvbkRyb3Bkb3duQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH0sXG4gICAgICAgIFtpMSwgaTIsIGkzLCBkcm9wZG93blByb3BzXSA9IHRoaXMuZ2V0U3RhdGVzKFsnbmFtZUZpZWxkJywgJ3B3ZEZpZWxkJywgJ2Rpc2FibGVDaGVja2JveCcsICdkcm9wZG93biddKTtcblxuICAgICAgICBpMS5vblZhbGlkYXRlZCA9IHRoaXMub25WYWxpZGF0ZWQuYmluZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJCdXR0b25zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaG93VG9vbHRpcE9uTG9hZD17ZmFsc2V9IG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAnbmFtZUZpZWxkJyl9IHRleHQ9XCJUb2dnbGUgRGlzYWJsZSBOYW1lIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMudG9nZ2xlRmllbGREaXNhYmxlLmJpbmQodGhpcywgJ3B3ZEZpZWxkJyl9IHRleHQ9XCJUb2dnbGUgRGlzYWJsZSBQYXNzd29yZCBGaWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLnJlc2V0QWxsLmJpbmQodGhpcyl9IHRleHQ9XCJSZXNldCBBbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt0cnVlfSB0b29sdGlwVGV4dD1cIkRpc2FibGVkIHRvb2x0aXBcIiB0ZXh0PVwiRGlzYWJsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJWYWxpZGF0aW9uVGV4dEJveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCB7Li4uaTF9IHJlZj17bmFtZSA9PiB0aGlzLm5hbWVGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCB7Li4uaTJ9IHJlZj17bmFtZSA9PiB0aGlzLnB3ZEZpZWxkID0gbmFtZX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IGRpc2FibGVkPXt0cnVlfSB0b29sdGlwVGV4dD17XCJEaXNhYmxlZCB0b29sdGlwXCJ9IGlucHV0VmFsdWU9XCJJIGFtIGRpc2FibGVkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UsIG9uZSBsb3dlcmNhc2UsIGFuZCBvbmUgbnVtYmVyLjwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRHJvcGRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbXM9e3RoaXMuZHJvcGRvd25JdGVtfSBvbkNoYW5nZT17dGhpcy5vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9IHsuLi5kcm9wZG93blByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJDaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkRpc2FibGUgZHJvcCBkb3duXCIgey4uLmkzfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcblxuaW1wb3J0IHsgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZClbMF07XG4gICAgfVxuICAgIGdldCBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbMF0gfHwge307XG4gICAgfVxuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1t0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDFdIHx8IHt9O1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLnNlbGVjdGVkSXRlbS5pZCkgOiAwO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bmA7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygncGxhY2Vob2xkZXInKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHRoaXMuaW5pdEZpbHRlciA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZElkOiAnLTEnLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgY3Vyc29yOiAnLTEnLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHRJbnB1dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAodGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyID0gZSA9PiB0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZShlKSkpO1xuICAgICAgICBjb25zdCB7aXRlbXN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogaXRlbXMubWFwKChpdGVtLCBpKSA9PiBPYmplY3QuYXNzaWduKGl0ZW0sIHtpZDogJ2l0ZW0nICsgaX0pKX0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIF9jbGlja09yRm9jdXNBbnl3aGVyZShlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjbGljayB3YXMgd2l0aGluIHNlbGYsIGlnbm9yZTsgb3RoZXJ3aXNlLCBjbG9zZSBzZWxmXG4gICAgICAgIGlmICghdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dChpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSB0aGlzLmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSArIDFdLmlkO1xuICAgIH1cblxuICAgIHByZXYoaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSAwKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSAtIDFdLmlkO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGxldCBjdXJzb3JJZCA9IHRoaXMuc3RhdGUuY3Vyc29yICE9PSAtMSA/IHRoaXMuc3RhdGUuY3Vyc29yIDogdGhpcy5zdGF0ZS5zZWxlY3RlZElkO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMubmV4dChjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMucHJldihjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oY3Vyc29ySWQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkOiBjdXJzb3JJZCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICF0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA6IC0xLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBpdGVtID8gaXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXIsXG4gICAgICAgICAgICBjdXJzb3I6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHt0YXJnZXQ6IHRoaXMuZG9tTm9kZX0pKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7IGlucHV0VmFsdWUgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoaW5wdXRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGNoYXJzID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyksXG4gICAgICAgICAgICAgICAgcmVnR3JwID0gY2hhcnMubWFwKGMgPT4gYFskeyhjICsgJycpLnRvVXBwZXJDYXNlKCl9JHsoYyArICcnKS50b0xvd2VyQ2FzZSgpfV1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlZ0dycC5qb2luKCcnKSkpLnRlc3QoaXRlbS5sYWJlbClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgY3Vyc29yOiAtMSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7aXRlbXMsIHNlbGVjdGVkSWQsIGN1cnNvcn0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBbaW5wdXRQcm9wc10gPSB0aGlzLmdldFN0YXRlcyhbJ3RleHRJbnB1dCddKSxcbiAgICAgICAgICAgIG5ld0lucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5sYWJlbCA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSByZWY9e3RoaXMucHJvY2Vzc1JlZn0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0gb25LZXlEb3duPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNlbGVjdGVkPXshIXNlbGVjdGVkSXRlbX0gdmFsdWU9e3NlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS52YWx1ZSA6ICcnfSBjbGFzc05hbWU9e3RoaXMucGxhY2Vob2xkZXJDbGFzcyArICcgbm9uZSBjdXJyZW50J30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdJbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3QgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn0gY2xvc2U9e3RoaXMuY2xvc2V9IGl0ZW1zPXtpdGVtc30gc2VsZWN0ZWRJZD17Y3Vyc29yICE9PSAtMSA/IGN1cnNvcjogc2VsZWN0ZWRJZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkxpc3RWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgY2xhc3NOYW1lLCB6SW5kZXgsIHNlbGVjdGVkSWQsIGZpbHRlciwgbm9JdGVtTWVzc2FnZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKSxcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gaXRlbXMuZmlsdGVyKGZpbHRlciksXG4gICAgICAgICAgICBoYXNJdGVtID0gbmV3SXRlbXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIHN0eWxlID0ge3pJbmRleH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAge2hhc0l0ZW0gPyBuZXdJdGVtcy5tYXAoaXRlbSA9PiA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLmxhYmVsfSB2YWx1ZT17aXRlbS52YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkSWQgPT09IGl0ZW0uaWR9IC8+ICkgOiA8RHJvcGRvd25JdGVtPntub0l0ZW1NZXNzYWdlfTwvRHJvcGRvd25JdGVtPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25MaXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgekluZGV4OiAwLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWUsXG4gICAgbm9JdGVtTWVzc2FnZTogJ05vIEl0ZW0gRm91bmQnXG59XG5cbkRyb3Bkb3duTGlzdFZpZXcucHJvcFR5cGVzID0ge1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vSXRlbU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTGlzdCA9IHBvcHVwYWJsZShEcm9wZG93bkxpc3RWaWV3KTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bkl0ZW1gO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUsIHZhbHVlLCBsYWJlbCwgaWQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aWR9IGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkfSBkYXRhLWxhYmVsPXtsYWJlbH0gZGF0YS12YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PntjaGlsZHJlbiB8fCBsYWJlbH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjaGVja2JveGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpc2FibGVkLCBuYW1lLCBjaGVja2VkLCBsYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPntsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaGVja2JveFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsYWJlbDogJydcbn07XG5cbkNoZWNrYm94Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IENoZWNrYm94ID0gd2l0aFRvb2x0aXAoQ2hlY2tib3hWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcblxyXG5jb25zdCBsb25nVG9vbHRpcCA9IGBTbywgeWVzdGVyZGF5LCBiZWluZyBhbm90aGVyIHJhaW55IGRheSBpbiBDaGljYWdvLCBJIGdyYWJiZWQgYSBkaWdpdGFsIHJlbnRhbCBvZiBGcmFua2Vud2VlbmllLlxyXG5BIGZldyB5ZWFycyBhZ28sIG15IHdpZmUgYW5kIEkgc2F3IGl0IHdoZW4gaXQgd2FzIGluIHRoZWF0ZXJzLiBBbmQgd2UgbG92ZWQgaXQuIEJlaW5nIHRoYXQgUm9yeSBsb3ZlcyBkb2dzIChsaWtlLCBvYnNlc3NpdmVseSBzbyksIEkgZmlndXJlZCBzaGXigJlkIGVuam95IGl0IHRvby5cclxuTGl0dGxlIGRpZCBJIGtub3cgd2hhdCBJIHdhcyBpbiBzdG9yZSBmb3LigKYsIFNvLCB5ZXN0ZXJkYXksIGJlaW5nIGFub3RoZXIgcmFpbnkgZGF5IGluIENoaWNhZ28sIEkgZ3JhYmJlZCBhIGRpZ2l0YWwgcmVudGFsIG9mIEZyYW5rZW53ZWVuaWUuXHJcbkEgZmV3IHllYXJzIGFnbywgbXkgd2lmZSBhbmQgSSBzYXcgaXQgd2hlbiBpdCB3YXMgaW4gdGhlYXRlcnMuIEFuZCB3ZSBsb3ZlZCBpdC4gQmVpbmcgdGhhdCBSb3J5IGxvdmVzIGRvZ3MgKGxpa2UsIG9ic2Vzc2l2ZWx5IHNvKSwgSSBmaWd1cmVkIHNoZeKAmWQgZW5qb3kgaXQgdG9vLlxyXG5MaXR0bGUgZGlkIEkga25vdyB3aGF0IEkgd2FzIGluIHN0b3JlIGZvcuKApmA7XHJcbmNvbnN0IHRvb2x0aXAgPSBgVGhpcyBpcyBub3JtYWwgdG9vbHRpcGA7XHJcbmNvbnN0IG9uZUxpbmVXaXRoSW5saW5lTWFya3VwID0gYDxzcGFuIGNsYXNzPVwiY29sb3JmdWxcIj5JIGFtIGNvbG9yZnVsIHRvb2x0aXA8L3NwYW4+YDtcclxuLy8gVG9vbHRpcHMgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwidG9vbHRpcHNcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFmdGVyXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVmb3JlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVmb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFib3ZlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVsb3dcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwUG9zaXRpb249XCJiZWxvd1wiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93LWNlbnRlcmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3ctY2VudGVyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZS1jZW50ZXJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlLWNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgY2FuIGJlIGVudGVycmVkXCIgdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gdG9vbHRpcD17dG9vbHRpcH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBzdGF0ZSBpcyBhbHdheXMgV0FSTklOR1wiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBTdGF0ZT1cIldBUk5JTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSGVscCBUaXBzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlYWxseSBMb25nIHRvb2x0aXBcIiB0b29sdGlwPXtsb25nVG9vbHRpcH0gdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIk9uZS1saW5lciB3aXRoIGlubGluZSBtYXJrdXBcIiB0b29sdGlwPXtvbmVMaW5lV2l0aElubGluZU1hcmt1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBTdGF0ZXMsIHpJbmRleHN9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sVGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0b29sdGlwYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lzT3BlbiwgdG9vbHRpcCwgc3RhdGUsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgbWF4SGVpZ2h0LCBvcGFjaXR5LCB6SW5kZXh9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgc3RhdGUpLFxyXG4gICAgICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBoZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUV2ZW50fSBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3Rvb2x0aXAgPyBzdHlsZSA6IHt9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdG9vbHRpcH19IC8+KVxyXG4gICAgfVxyXG59XHJcblxyXG5Ub29sVGlwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0b29sdGlwOiAnJyxcclxuICAgIGxlZnQ6IC05OTk5OSxcclxuICAgIHRvcDogLTk5OTk5LFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIGhlaWdodDogMTQsXHJcbiAgICBtYXhIZWlnaHQ6IDEwMCxcclxuICAgIHN0YXRlOiAnbm9ybWFsJyxcclxuICAgIHpJbmRleHM6IHpJbmRleHMuVG9vbHRpcFxyXG59O1xyXG5cclxuVG9vbFRpcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvVG9vbHRpcC9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9