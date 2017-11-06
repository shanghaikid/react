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
    ERROR: 'error',
    MISSING: 'missing'
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
                state = _props.state,
                inputValue = _props.inputValue,
                autocomplete = _props.autocomplete,
                cls = (0, _utils.getClsName)(this.className, state);


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
    state: _propTypes2.default.string,
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

var _API = __webpack_require__(43);

var _API2 = _interopRequireDefault(_API);

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

            _API2.default.initWS();

            _API2.default.addWSListener(this);
            _API2.default.wsSend('hello server').then(function (d) {
                console.log(d);
            });
            _API2.default.wsSend('hello server2').then(function (d) {
                console.log(d);
            });

            _API2.default.wsSend('hello server3').then(function (d) {
                console.log(d);
            });

            _API2.default.wsSend('hello server4').then(function (d) {
                console.log(d);
            });
        }
    }, {
        key: 'onData',
        value: function onData(data) {
            console.log(data);
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

var _Constants = __webpack_require__(14);

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
                    mod = isValueEmpty && required ? _Constants.States.MISSING : notValid ? _Constants.States.ERROR : '',
                    message = this.getMessage(mod);


                this.setState({ mod: mod, message: message }, function () {
                    onValidated && onValidated({ mod: mod, message: message, ok: mod === '' }, _this2);
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var newProps = {
                    state: this.state.mod,
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

var _Tooltip = __webpack_require__(42);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// shared tooltip state
var tooltipTimeout = null,
    register = new WeakMap();

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
                this.onTooltipMouseLeave = this.onTooltipMouseLeave.bind(this);
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
                this.bindEvents();
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                this.domNode = ReactDOM.findDOMNode(this);
                // componentDidMount will be call multiple times if using in higher order way
                // so we need to avoid register multiple same dom nodes
                if (!register.has(this.domNode)) {
                    this.domNode.addEventListener('mouseenter', this);
                    this.domNode.addEventListener('mouseleave', this);
                    register.set(this.domNode);
                }
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
                document.body.removeListener('mousemove', this);
            }
        }, {
            key: 'getTooltipPos',
            value: function getTooltipPos() {
                var _domNode$getBoundingC = this.domNode.getBoundingClientRect(),
                    x = _domNode$getBoundingC.x,
                    y = _domNode$getBoundingC.y,
                    width = _domNode$getBoundingC.width,
                    height = _domNode$getBoundingC.height,
                    _document$documentEle = document.documentElement,
                    scrollTop = _document$documentEle.scrollTop,
                    scrollLeft = _document$documentEle.scrollLeft,
                    _props = this.props,
                    tooltipPosition = _props.tooltipPosition,
                    tooltipPositions = _props.tooltipPositions,
                    tooltipWidth = _props.minWidth,
                    tooltipHeight = _props.minHeight,
                    padding = _props.padding;

                var left = -9999,
                    top = -9999;

                // correct the scrolling value
                x = x + scrollLeft;
                y = y + scrollTop;

                switch (tooltipPositions[tooltipPosition]) {
                    case 'after':
                        left = x + width;
                        top = y;
                        break;

                    case 'before':
                        left = x - tooltipWidth - padding * 2;
                        top = y;
                        break;

                    case 'above':
                        left = x;
                        top = y - tooltipHeight - padding * 2;
                        break;

                    case 'below':
                        left = x;
                        top = y + height;
                        break;

                    case 'below-centered':
                        left = x + (width - tooltipWidth - padding * 2) / 2;
                        top = y + height;
                        break;

                    case 'above-centered':
                        left = x + (width - tooltipWidth - padding * 2) / 2;
                        top = y - tooltipHeight - padding * 2;
                        break;
                }

                return { left: left, top: top };
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(e) {
                this.clearTimeout();
                this.renderTooltip();
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave(e) {
                this.clearTooltip();
            }
        }, {
            key: 'onTooltipMouseEnter',
            value: function onTooltipMouseEnter(e) {
                this.clearTimeout();
                e.stopPropagation();
                this._onTooltip = this.props.tooltipCanBeEntered;
            }
        }, {
            key: 'onTooltipMouseLeave',
            value: function onTooltipMouseLeave(e) {
                this._onTooltip = false;
                this.clearTooltip();
            }
        }, {
            key: 'clearTooltip',
            value: function clearTooltip() {
                var _this2 = this;

                if (!this._onTooltip) {
                    tooltipTimeout = setTimeout(function () {
                        _reactDom2.default.render(React.createElement(_Tooltip2.default, _extends({}, _this2.props, { tooltip: '' })), _this2.tooltipContainer);
                    }, this.props.tooltipCanBeEntered ? 300 : 1);
                    this._tooltipShowing = false;
                }
            }
        }, {
            key: 'clearTimeout',
            value: function clearTimeout() {
                if (tooltipTimeout) {
                    window.clearTimeout(tooltipTimeout);
                    tooltipTimeout = null;
                }
            }
        }, {
            key: 'renderTooltip',
            value: function renderTooltip() {
                if (this.domNode) {
                    var pos = this.getTooltipPos(),
                        newProps = {
                        tooltip: this.props.tooltip,
                        state: this.props.state,
                        onMouseEnter: this.onTooltipMouseEnter,
                        onMouseLeave: this.onTooltipMouseLeave
                    };

                    _reactDom2.default.render(React.createElement(_Tooltip2.default, _extends({}, this.props, newProps, pos)), this.tooltipContainer);
                    this._tooltipShowing = true;
                }
            }
        }, {
            key: 'render',
            value: function render() {
                if (this._tooltipShowing) {
                    this.renderTooltip();
                }
                return _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'render', this).call(this);
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
        state: 'normal'
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
                        _react2.default.createElement(_TextInput2.default, _extends({}, i2, { ref: function ref(name) {
                                return _this3.pwdField = name;
                            } }))
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, { disabled: true, tooltip: "Disabled tooltip", inputValue: 'I am disabled' })
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
                minWidth = _props.minWidth,
                maxWidth = _props.maxWidth,
                minHeight = _props.minHeight,
                maxHeight = _props.maxHeight,
                opacity = _props.opacity,
                zIndex = _props.zIndex,
                padding = _props.padding,
                cls = (0, _utils.getClsName)(this.className, state),
                defaultStyle = {
                display: 'none'
            },
                style = Object.assign({}, defaultStyle, {
                display: 'block',
                position: 'absolute',
                left: left,
                top: top,
                zIndex: zIndex,
                minWidth: minWidth + 'px',
                maxWidth: maxWidth + 'px',
                padding: padding + 'px',
                minHeight: minHeight + 'px',
                maxHeight: maxHeight + 'px',
                opacity: opacity
            });


            return _react2.default.createElement('div', { onMouseEnter: this.handleEvent, onMouseOver: this.handleEvent, onMouseLeave: this.handleEvent, className: cls, style: tooltip ? style : defaultStyle, dangerouslySetInnerHTML: { __html: tooltip } });
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
    minWidth: 200,
    maxWidth: 200,
    minHeight: 20,
    maxHeight: 100,
    state: 'NORMAL',
    padding: 5,
    zIndex: _Constants.zIndexs.Tooltip
};

ToolTip.propTypes = {
    opacity: _propTypes2.default.number,
    tooltip: _propTypes2.default.string,
    left: _propTypes2.default.number,
    top: _propTypes2.default.number,
    minWidth: _propTypes2.default.number,
    maxWidth: _propTypes2.default.number,
    minHeight: _propTypes2.default.number,
    maxHeight: _propTypes2.default.number,
    padding: _propTypes2.default.number,
    state: _propTypes2.default.string
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var wsConnected = false,
    dataId = 0,
    requests = new Map();

var API = {
    initWS: function initWS() {
        var _this = this;

        if (!wsConnected) {
            this.ws = new WebSocket('ws://localhost:8081');
            this.wsListeners = new Map();

            this.wsOPenPromise = new Promise(function (resolve) {
                _this.ws.addEventListener('open', function () {
                    resolve(true);
                });
            });

            // Listen for messages
            this.ws.addEventListener('message', function (event) {
                var data = JSON.parse(event.data);

                if (requests.has(data.id)) {
                    var resolver = requests.get(data.id);
                    resolver(data);
                }
                // dispatch
                _this._dispatch(data);
            });

            wsConnected = true;
        }
    },
    wsSend: function wsSend(data) {
        var _this2 = this;

        return new Promise(function (resolver) {
            Promise.all([_this2.wsOPenPromise]).then(function () {
                var id = dataId++;
                _this2.ws.send(JSON.stringify({ id: id, data: data }));
                requests.set(id, resolver);
            });
        });
    },
    addWSListener: function addWSListener(component) {
        this.wsListeners.set(component.id, component);
    },
    removeWSListener: function removeWSListener(id) {
        this.wsListeners.delete(id);
    },
    _dispatch: function _dispatch(event) {
        this.wsListeners.forEach(function (listener) {
            return listener.onData && listener.onData(event.data, event);
        });
    }
};

exports.default = API;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWVhYjExNGJkZTc4Y2JkMzZiZjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Ub29sdGlwcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sdGlwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FQSS9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwicHJvdG90eXBlIiwiaGFuZGxlRXZlbnQiLCJtYXAiLCJjbGljayIsImNoYW5nZSIsIm1vdXNlb3ZlciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2VvdXQiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2Vtb3ZlIiwiZm9jdXMiLCJibHVyIiwia2V5ZG93biIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsIm5hbWUiLCJhcmdzIiwiYmluZCIsInByb2Nlc3NSZWYiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnQiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50SWQiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybVN0YXRlIiwic3RhdGUiLCJrZXkiLCJkZWxtaXRlciIsInJlc3VsdCIsImZvdW5kIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic3BsaWNlIiwibmFtZXMiLCJzb21lIiwiaSIsInN0YXRlT2JqIiwiY29tcGFyZU9iaiIsImNscyIsImNsYXNzTmFtZSIsImlzT2JqIiwiY2xvbmUiLCJnZXRDZW50ZXJQb3NpdGlvbiIsImdldENsc05hbWUiLCJpc0VtcHR5Iiwib2JqIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdGVPYmplY3QiLCJfZiIsInJvb3QiLCJlbnRyaWVzIiwidmFsdWUiLCJ2YWx1ZUlzT2JqIiwiciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsIkFycmF5IiwiZnJvbSIsImFyZ3VtZW50cyIsImZpbHRlciIsInMiLCJqb2luIiwidHJpbSIsInRlc3QiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJsZW5ndGgiLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImRyYWdnYWJsZSIsInBvcHVwYWJsZSIsIlBvcHVwTWFuYWdlciIsInZhbGlkYXRhYmxlIiwid2l0aFRvb2x0aXAiLCJtYWtlRW1wdHlGdW5jdGlvbiIsImFyZyIsImVtcHR5RnVuY3Rpb24iLCJ0aGF0UmV0dXJucyIsInRoYXRSZXR1cm5zRmFsc2UiLCJ0aGF0UmV0dXJuc1RydWUiLCJ0aGF0UmV0dXJuc051bGwiLCJ0aGF0UmV0dXJuc1RoaXMiLCJ0aGF0UmV0dXJuc0FyZ3VtZW50IiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJhIiwiYiIsImMiLCJkIiwiZiIsImVycm9yIiwiYXJnSW5kZXgiLCJyZXBsYWNlIiwiZnJhbWVzVG9Qb3AiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsIkJ1dHRvblZpZXciLCJvbkNsaWNrZWQiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIkJ1dHRvbiIsIkhlYWRlciIsImRlZmF1bHRUeXBlcyIsIndhcm5pbmciLCJwcmludFdhcm5pbmciLCJfbGVuIiwiX2tleSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJ6SW5kZXhzIiwiRGlhbG9nIiwiT3ZlcmxheSIsIkRyb3Bkb3duIiwiVG9vbHRpcCIsIlN0YXRlcyIsIk5PUk1BTCIsIldBUk5JTkciLCJFUlJPUiIsIk1JU1NJTkciLCJ0eXBlcyIsImV2ZW50VHlwZSIsInN0YWNrIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwib2Zmc2V0SGVpZ2h0IiwiY2xvc2UiLCJoYW5kbGUiLCJpc09wZW4iLCJpc1BvcHVwIiwiVGV4dElucHV0VmlldyIsInBsYWNlaG9sZGVyIiwiaW5wdXRWYWx1ZSIsImF1dG9jb21wbGV0ZSIsImlucHV0Iiwib25DaGFuZ2UiLCJUZXh0SW5wdXQiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIkFwcCIsImFjdGl2ZUlkIiwianNIZWFwU2l6ZUxpbWl0IiwidG90YWxKU0hlYXBTaXplIiwidXNlZEpTSGVhcFNpemUiLCJoYXNoIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJnZXRNZW1vcnlTdGF0Iiwic2V0U3RhdGUiLCJpbml0V1MiLCJhZGRXU0xpc3RlbmVyIiwid3NTZW5kIiwidGhlbiIsImxvZyIsImRhdGEiLCJwZXJmb3JtYW5jZSIsIm1lbW9yeSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJvbk1vdXNlRG93biIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlyZWN0aW9uIiwiZGlzcGxheSIsInNwbGl0dGVyU2l6ZSIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInNwbGl0dGVyU3R5bGUiLCJ6SW5kZXgiLCJyaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJjbG9uZUVsZW1lbnQiLCJhY3RpdmUiLCJDb250ZW50UGFuZSIsIldpbmRvd01lbW9yeVZpZXdlciIsIkRpYWxvZ3MiLCJvbkJ1dHRvbkNsaWNrZWQiLCJjbG9zZURpYWxvZyIsIm9wZW5EaWFsb2ciLCJkaWFsb2cxIiwiZGlhbG9nMiIsImJ1dHRvbiIsImRpYWxvZyIsImRpYWxvZzEkaXNPcGVuIiwiZGlhbG9nMiRpc09wZW4iLCJEaWFsb2dWaWV3IiwiaGVhZGVyQ2xhc3MiLCJnZXRMaWJQcmVmaXhlZENsYXNzIiwiY2xvc2VCdG5DbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2FuY2VsQnRuQ2xhc3MiLCJjb25maXJtQnRuQ2xhc3MiLCJvbkNhbmNlbEJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJuZXh0UHJvcHMiLCJvcGVuIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJtb2QiLCJib2R5IiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbG9zZUJ0bkxhYmVsIiwiaGVscExhYmVsIiwic3R5bGVPYmoiLCJDb21wb25lbnQiLCJjbGFzc1Byb3BlcnR5IiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwibW91c2Vkb3duSGFuZGxlciIsInJlcG9zaXRpb24iLCJyZWN0IiwiQ29tcG9uZW50QmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwibGVmdFRvTW91c2UiLCJ0b3BUb01vdXNlIiwibWF4IiwibWluIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwb3NpdGlvbiIsIlBvcHVwQ29tcG9uZW50IiwiaW5pdFN0YXRlIiwiVmFsaWRhdGFibGVDb21wb25lbnQiLCJvbkJsdXIiLCJvbkZvY3VzIiwiX2hhc0JlZW5CbHVycmVkIiwibWVzc2FnZURlZiIsIm5leHREaXNhYmxlZCIsIm5leHRFbmFibGVkIiwidmFsdWVDaGFuZ2VkIiwidCIsInJlZ0V4cCIsInZhbGlkYXRvciIsInJlcXVpcmVkIiwib25WYWxpZGF0ZWQiLCJpc1ZhbHVlRW1wdHkiLCJub3RWYWxpZCIsImlzVmFsaWQiLCJnZXRNZXNzYWdlIiwib2siLCJuZXdQcm9wcyIsInRvb2x0aXAiLCJpbnZhbGlkTWVzc2FnZSIsIm1pc3NpbmciLCJtaXNzaW5nTWVzc2FnZSIsImltY29tcGxldGUiLCJwcm9tcHRNZXNzYWdlIiwidG9vbHRpcFRpbWVvdXQiLCJXZWFrTWFwIiwiQ29tcG9uZW50V2l0aFRvb2x0aXAiLCJvblRvb2x0aXBNb3VzZUVudGVyIiwib25Ub29sdGlwTW91c2VMZWF2ZSIsInRvb2x0aXBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYmluZEV2ZW50cyIsInNldCIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvb2x0aXBQb3NpdGlvbiIsInRvb2x0aXBQb3NpdGlvbnMiLCJ0b29sdGlwV2lkdGgiLCJ0b29sdGlwSGVpZ2h0IiwicGFkZGluZyIsInJlbmRlclRvb2x0aXAiLCJjbGVhclRvb2x0aXAiLCJfb25Ub29sdGlwIiwidG9vbHRpcENhbkJlRW50ZXJlZCIsIl90b29sdGlwU2hvd2luZyIsInBvcyIsImdldFRvb2x0aXBQb3MiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwidG9nZ2xlRGlhbG9nT3BlbiIsImRpYWxvZ05hbWUiLCJvcGVuU3RhdGUiLCJoYXNTdGF0ZVNldCIsIm9wZW5TdGF0ZU5hbWUiLCJ2IiwibmFtZUZpZWxkIiwicHdkRmllbGQiLCJkcm9wZG93biIsImRpc2FibGVDaGVja2JveCIsImNoZWNrZWQiLCJoaWRkZW4iLCJGb3JtcyIsImRyb3Bkb3duSXRlbSIsImdldFN0YXRlIiwicmVzZXQiLCJpbmZvIiwiZ2V0U3RhdGVzIiwiaTEiLCJpMiIsImkzIiwiZHJvcGRvd25Qcm9wcyIsInRvZ2dsZUZpZWxkRGlzYWJsZSIsInJlc2V0QWxsIiwib25Ecm9wZG93bkNoYW5nZSIsInBsYWNlaG9sZGVyQ2xhc3MiLCJvbklucHV0Q2hhbmdlIiwiaW5pdEZpbHRlciIsInNlbGVjdGVkSWQiLCJpdGVtcyIsImN1cnNvciIsInRleHRJbnB1dCIsIl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIiLCJfY2xpY2tPckZvY3VzQW55d2hlcmUiLCJpdGVtIiwiZmlyc3QiLCJpbmRleE9mSXRlbSIsImZpbmRJbmRleCIsImxhc3QiLCJjdXJzb3JJZCIsInByZXYiLCJnZXRJdGVtIiwiZGF0YXNldCIsInNlbGVjdGVkIiwiZ2V0RmlsdGVyIiwiY2hhcnMiLCJyZWdHcnAiLCJzZWxlY3RlZEl0ZW0iLCJpbnB1dFByb3BzIiwibmV3SW5wdXRQcm9wcyIsIkRyb3Bkb3duTGlzdFZpZXciLCJub0l0ZW1NZXNzYWdlIiwibmV3SXRlbXMiLCJoYXNJdGVtIiwiRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JdGVtIiwiQ2hlY2tib3hWaWV3IiwiQ2hlY2tib3giLCJsb25nVG9vbHRpcCIsIm9uZUxpbmVXaXRoSW5saW5lTWFya3VwIiwiVG9vbHRpcHMiLCJUb29sVGlwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJkZWZhdWx0U3R5bGUiLCJfX2h0bWwiLCJ3c0Nvbm5lY3RlZCIsImRhdGFJZCIsInJlcXVlc3RzIiwiTWFwIiwiQVBJIiwid3MiLCJXZWJTb2NrZXQiLCJ3c0xpc3RlbmVycyIsIndzT1BlblByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicmVzb2x2ZXIiLCJnZXQiLCJfZGlzcGF0Y2giLCJhbGwiLCJzZW5kIiwicmVtb3ZlV1NMaXN0ZW5lciIsImRlbGV0ZSIsImxpc3RlbmVyIiwib25EYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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RDtBQUNBLHNCQUFLZ1AsU0FBTCxDQUFlaFAsSUFBZjtBQUNILGFBVEQ7O0FBV0FrTywwQkFBYyxJQUFkO0FBQ0g7QUFDSixLQTFCTztBQTRCUnJPLFVBNUJRLGtCQTRCREcsSUE1QkMsRUE0Qks7QUFBQTs7QUFDVCxlQUFPLElBQUkyTyxPQUFKLENBQVksb0JBQVk7QUFDM0JBLG9CQUFRTSxHQUFSLENBQVksQ0FBQyxPQUFLUCxhQUFOLENBQVosRUFBa0M1TyxJQUFsQyxDQUF1QyxZQUFNO0FBQ3pDLG9CQUFJcEksS0FBS3lXLFFBQVQ7QUFDQSx1QkFBS0ksRUFBTCxDQUFRVyxJQUFSLENBQWExaEIsS0FBS0UsU0FBTCxDQUFlLEVBQUNnSyxNQUFELEVBQUtzSSxVQUFMLEVBQWYsQ0FBYjtBQUNBb08seUJBQVN6RixHQUFULENBQWFqUixFQUFiLEVBQWlCb1gsUUFBakI7QUFDSCxhQUpEO0FBS0gsU0FOTSxDQUFQO0FBT0gsS0FwQ087QUFzQ1JsUCxpQkF0Q1EseUJBc0NNcFUsU0F0Q04sRUFzQ2lCO0FBQ3JCLGFBQUtpakIsV0FBTCxDQUFpQjlGLEdBQWpCLENBQXFCbmQsVUFBVWtNLEVBQS9CLEVBQW1DbE0sU0FBbkM7QUFDSCxLQXhDTztBQTBDUjJqQixvQkExQ1EsNEJBMENTelgsRUExQ1QsRUEwQ2E7QUFDakIsYUFBSytXLFdBQUwsQ0FBaUJXLE1BQWpCLENBQXdCMVgsRUFBeEI7QUFDSCxLQTVDTztBQThDUnNYLGFBOUNRLHFCQThDRUgsS0E5Q0YsRUE4Q1M7QUFDYixhQUFLSixXQUFMLENBQWlCdlcsT0FBakIsQ0FBeUI7QUFBQSxtQkFBWW1YLFNBQVNDLE1BQVQsSUFBbUJELFNBQVNDLE1BQVQsQ0FBZ0JULE1BQU03TyxJQUF0QixFQUE0QjZPLEtBQTVCLENBQS9CO0FBQUEsU0FBekI7QUFDSDtBQWhETyxDQUFaOztrQkFtRGVQLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWVhYjExNGJkZTc4Y2JkMzZiZjMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzT2JqLCBlfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIGFsbCBjb21wb25lbnRzIHNoYXJlIG9uZSBldmVudCBoYW5kbGVyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGwga25vd24gUmVhY3QuQ29tcG9uZW50IGV2ZW50c1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXG4gICAgICAgIGNoYW5nZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgbW91c2VvdmVyOiAnb25Nb3VzZU92ZXInLFxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gICAgICAgIG1vdXNlb3V0OiAnb25Nb3VzZU91dCcsXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgICAgICAgbW91c2V1cDogJ29uTW91c2VVcCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgICAgICAgYmx1cjogJ29uQmx1cicsXG4gICAgICAgIGtleWRvd246ICdvbktleURvd24nXG4gICAgfTtcblxuICAgIC8vIGZhbGxiYWNrIGhlbHBlclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vIG9uZSBoYW5kbGVFdmVudCB0byBydWxlIHRoZW0gYWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgfTtcbn0oKSk7XG5cbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcbmxldCByZWdpc3RyeSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlZiA9IHRoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpYkNsYXNzUHJlZml4ID0gJ2UnO1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucG9zdFJlZ2lzdGVyKC4uLmFyZ3MpO1xuXG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9JHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJyd9YDtcbiAgICB9XG5cbiAgICBwcm9jZXNzUmVmKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgLy8gZW5zdXJlIHdlIGhhdmUgcmVnaXN0ZXJcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSB8fCAwO1xuICAgICAgICAvLyBhZGQgb25lXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gKyAxO1xuICAgICAgICAvLyBhc3NpZ24gbmFtZVxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyByZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmIChpc09iaihhcmdzWzBdKSkge1xuICAgICAgICAgICAgYXJnc1swXSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoYXJnc1swXSwgJyQnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSBieSBuYW1lXG4gICAgLy8gaWYga2V5IGlzIHByb3ZpZGVkLCByZXR1cm4gc3BlY2lmaWVkIHZhbHVlXG4gICAgLy8gaWYga2V5IGlzIGlnbm9yZWQsIHJldHVybiB3aG9sZSBzdGF0ZSBvYmplY3RcbiAgICBnZXRTdGF0ZShuYW1lLCBrZXksIGRlbG1pdGVyID0gJyQnKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbbmFtZSArIGRlbG1pdGVyICsga2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZCA/IHJlc3VsdCA6IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gZ2V0IG11bGl0cGxlIGNoaWxkcmVuIHN0YXRlXG4gICAgZ2V0U3RhdGVzKG5hbWVzID0gW10sIGRlbG1pdGVyPSAnJCcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBuYW1lcy5zb21lKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaiwgY29tcGFyZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaiwgJyQnLCBjb21wYXJlT2JqKTtcbiAgICB9XG5cbiAgICBnZXRMaWJQcmVmaXhlZENsYXNzKGNscykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHtjbHN9YDtcbiAgICB9XG5cbiAgICAvLyBzdHVic1xuICAgIGluaXQoKSB7fVxuICAgIHBvc3RSZWdpc3RlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLy8gaXNPYmo6IGNoZWNrIGlmIHRoZSBnaXZlbiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZTogc2ltcGxlIGNsb25lIHRoZSBnaXZlbiBvYmplY3Rcbi8vIG5vdCBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBjaXJjdWxhciByZWZlcmVuY2VcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWQtbGF5b3V0LW1lbnUtZXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0LCBkZWxtaXRlciA9ICckJywgY29tcGFyZU9iaiA9IG51bGwpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG4gICAgICAgICAgICBpZiAodmFsdWVJc09iaiAmJiBjb21wYXJlT2JqICE9PSBudWxsICYmIHR5cGVvZiBjb21wYXJlT2JqW3JdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZUlzT2JqID8gX2YodmFsdWUsIHIsIHJlc3VsdCkgOiByZXN1bHRbcl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBfZihzdGF0ZU9iamVjdCwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyUG9zaXRpb24oe2lubmVyV2lkdGggPSAxMDAwLCBpbm5lckhlaWdodD04MDB9LCB7d2lkdGggPSA0MDAsIGhlaWdodCA9IDQwMH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICB9XG59XG5cbi8vIGdldENsc05hbWU6IGNvbmNhdGUgYXJ1bWVudHMgd2l0aCBzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5maWx0ZXIocyA9PiBzICE9PScnICYmIHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJykuam9pbignICcpO1xufVxuXG4vLyBpc0VtcHR5OiBjaGVjayBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSwgdHJpbT10cnVlKSB7XG4gICAgcmV0dXJuICh0cmltID8gL15cXHMqJC8gOiAvXiQvKS50ZXN0KHZhbHVlKTsgLy8gQm9vbGVhblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJztcbmltcG9ydCBwb3B1cGFibGUgZnJvbSAnLi9wb3B1cGFibGUnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgdmFsaWRhdGFibGUgZnJvbSAnLi92YWxpZGF0YWJsZSc7XG5pbXBvcnQgd2l0aFRvb2x0aXAgZnJvbSAnLi93aXRoVG9vbHRpcCc7XG5cblxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZSwgUG9wdXBNYW5hZ2VyLCB2YWxpZGF0YWJsZSwgd2l0aFRvb2x0aXB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJ1dHRvbmA7XHJcbiAgICB9XHJcblxyXG4gICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CdXR0b25WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRleHQ6ICdCdXR0b24nLFxyXG4gICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbkJ1dHRvblZpZXcucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHdpdGhUb29sdGlwKEJ1dHRvblZpZXcpO1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBoZWFkZXJgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pO1xuICAgIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJ1xufTtcblxuSGVhZGVyLmRlZmF1bHRUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCB6SW5kZXhzID0ge1xuICAgIERpYWxvZzogMzAwMCxcbiAgICBPdmVybGF5OiAyMDAwLFxuICAgIERyb3Bkb3duOiAxMDAwLFxuICAgIFRvb2x0aXA6IDEwMDAwXG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZXMgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBXQVJOSU5HOuOAgCd3YXJuaW5nJyxcbiAgICBFUlJPUjogJ2Vycm9yJyxcbiAgICBNSVNTSU5HOiAnbWlzc2luZydcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiY29uc3QgUG9wdXBNYW5hZ2VyID0ge1xuICAgIHR5cGVzOiBbJ0RpYWxvZyddLFxuICAgIGV2ZW50VHlwZTogJ2tleWRvd24nLFxuICAgIHN0YWNrOiBbXSxcbiAgICBldmVudEhhbmRsZXI6IG51bGwsXG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwICYmICF0aGlzLmV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5zdGFjay5maWx0ZXIoc2F2ZWRDb21wb25lbnQgPT4gc2F2ZWRDb21wb25lbnQgIT09IGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50SGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5pbmNsdWRlcyhjb21wb25lbnQpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmRvbU5vZGUgJiYgY29tcG9uZW50LmRvbU5vZGUub2Zmc2V0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGRlY291cGxlXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dFZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgdGV4dElucHV0YDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIHR5cGUsIGRpc2FibGVkLCBuYW1lLCBzdGF0ZSwgaW5wdXRWYWx1ZSwgYXV0b2NvbXBsZXRlfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBzdGF0ZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGF1dG9jb21wbGV0ZTogJ29uJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLm5hbWUsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgVGV4dElucHV0ID0gdmFsaWRhdGFibGUod2l0aFRvb2x0aXAoVGV4dElucHV0VmlldykpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9BcHAnO1xyXG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSAnLi9Gb3Jtcyc7XHJcbmltcG9ydCBUb29sdGlwcyBmcm9tICcuL1Rvb2x0aXBzJztcclxuXHJcblxyXG5jb25zdCBuYXZEZWYgPSBbXHJcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiTW9uaXRvcmluZ1wiIC8+fSxcclxuICAgIHtpZDogJ2Zvcm0nLCBsYWJlbDogJ0Zvcm0gRWxlbWVudHMnLCB1cmw6ICcvI2Zvcm0nLCBjb21wb25lbnQ6IDxGb3JtcyAvPn0sXHJcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtpZDogJ2RpYWxvZ3MnLCBsYWJlbDogJ0RpYWxvZ3MnLCB1cmw6ICcvI3dpZGdldHMvZGlhbG9ncycsIGNvbXBvbmVudDogPERpYWxvZ3MgLz59LFxyXG4gICAgICAgIHtpZDogJ3dpemFyZCcsIGxhYmVsOiAnV2l6YXJkJywgdXJsOiAnLyN3aWRnZXRzL3dpemFyZCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiV2lhcmRcIiAvPn0sXHJcbiAgICAgICAge2lkOiAndG9vbHRpcHMnLCBsYWJlbDogJ1Rvb2x0aXBzJywgdXJsOiAnLyN3aWRnZXRzL3Rvb2x0aXBzJywgY29tcG9uZW50OiA8VG9vbHRpcHMgLz59LFxyXG4gICAgXX0sXHJcbiAgICB7aWQ6ICdzcGVpY2FsJywgbGFiZWw6ICdTcGVjaWFsJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtpZDogJ2luZmluaXRlJywgbGFiZWw6ICdJbmZpbml0ZSBTY3JvbGwnLCB1cmw6ICcvI3dpZGdldHMvaW5maW5pdGVTY3JvbGwnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkluZmluaXRlIFNjcm9sbFwiIC8+fVxyXG4gICAgXX1cclxuXTtcclxuXHJcbmNvbnN0IHBhZ2VzRGVmID0gKG5hdiA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBuID0gbmF2W2ldO1xyXG4gICAgICAgIGlmIChuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5hdi5wdXNoKG4pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMucHVzaChuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59KShBcnJheS5mcm9tKG5hdkRlZikpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgbmFtZT1cIk9LXCIgbmF2PXtuYXZEZWZ9IHBhZ2VzPXtwYWdlc0RlZn0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5pbXBvcnQgQVBJIGZyb20gJy4vQVBJJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG5cbiAgICAgICAgQVBJLmluaXRXUygpO1xuXG4gICAgICAgIEFQSS5hZGRXU0xpc3RlbmVyKHRoaXMpO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXInKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIyJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIzJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXI0JykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRhdGEoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRNZW1vcnlTdGF0KCkge1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAganNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVHJlZU5vZGVDbGljayhub2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJZDogbm9kZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cImxlZnRQYW5lXCIgc3BsaXR0ZXI9XCJ2ZXJ0aWNhbFwiIHNpemU9ezIwMH0gbWluU2l6ZT17MjAwfSBtYXhTaXplPXs1MDB9IHNpemVVbml0PVwicHhcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmVlVmlldyBkZWY9e3RoaXMucHJvcHMubmF2fSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHNwbGl0dGVyPVwiaG9yaXpvbnRhbFwiIHNpemU9ezc1fSBtYXhTaXplPXs4MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGRlZj17dGhpcy5wcm9wcy5wYWdlc30gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93TWVtb3J5Vmlld2VyIGpzSGVhcFNpemVMaW1pdD17dGhpcy5zdGF0ZS5qc0hlYXBTaXplTGltaXR9IHRvdGFsSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS50b3RhbEpTSGVhcFNpemV9IHVzZWRKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnVzZWRKU0hlYXBTaXplfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPC9Cb3JkZXJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BcHAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JkZXJDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYm9yZGVyQ29udGFpbmVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb3JkZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJydcbn07XG5cbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcnNpc3Q6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8vIFRPRE86IGtleWJvYXJkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgcGFuZWA7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7c3BsaXR0ZXIsIHNpemUsIHNpemVVbml0LCBtYXhTaXplLCBtaW5TaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7b2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodH0gPSB0aGlzLmRvbU5vZGUucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdudWxsJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvcDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VVcChlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAge21heFNpemUsIG1pblNpemV9ID0gdGhpcyxcbiAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFggPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRYIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRYKSxcbiAgICAgICAgICAgICAgdG9wID0gY2xpZW50WSA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFkgPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZShlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBzcGxpdHRlciwgZGlyZWN0aW9uLCBkaXNwbGF5LCBzcGxpdHRlclNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke3NwbGl0dGVyID09PSAndmVydGljYWwnID8gYCB2ZXJ0aWNhbFBhbmVgIDogJyd9YCksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwbGl0dGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IHNwbGl0dGVyID09PSAndmVydGljYWwnO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0IC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmxlZnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnNldFN0YXRlLnRvcCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHBhbmUpID0+IHsgdGhpcy5kb21Ob2RlID0gcGFuZTsgfX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7c3BsaXR0ZXIgIT09ICdudWxsJyA/IDxTcGxpdHRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9IC8+IDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3BsaXR0ZXI6ICdudWxsJyxcbiAgICBzaXplOiAyNSxcbiAgICBtaW5TaXplOiAxNSxcbiAgICBtYXhTaXplOiA1MCxcbiAgICBzaXplVW5pdDogJyUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBzcGxpdHRlclNpemU6IDEwXG59O1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXJTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZDogdGhpcy5wcm9wcy5leHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kOiAhdGhpcy5zdGF0ZS5leHBhbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lkLCBsYWJlbCwgdXJsLCBjaGlsZHJlbiwgb25UcmVlTm9kZUNsaWNrLCBhY3RpdmVJZH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZXhwYW5kID0gdGhpcy5zdGF0ZS5leHBhbmQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhhY3RpdmVJZCA9PT0gaWQgJiYgIWNoaWxkcmVuKSA/IHRoaXMucHJvcHMuZm9jdXNDbGFzcyA6IChleHBhbmQgPyB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyA6IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyB1cmwgOiAnamF2YXNjcmlwdDp2b2lkKDApJ30+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgZXhwYW5kID8gPHVsPntjaGlsZHJlbi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e2FjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e29uVHJlZU5vZGVDbGlja30gey4uLmN9IC8+KX08L3VsPjogJyd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVHJlZU5vZGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGZvY3VzQ2xhc3M6ICdmb2N1c2VkJyxcbiAgICBleHBhbmRvRXhwYW5kQ2xhc3M6ICdleHBhbmQnLFxuICAgIGV4cGFuZG9DbGFzczogJ2ZvbGQnXG59O1xuXG5UcmVlTm9kZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9jdXNDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICd0cmVlVmlldyc7XG4gICAgfVxuICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtpZCwgY2hpbGRyZW59ID0gdHJlZU5vZGUsXG4gICAgICAgICAgICB7b25UcmVlTm9kZUNsaWNrfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpO1xuXG4gICAgICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBvciBubyBjaGlsZHJlbiwgZm9jdXMgdGFyZ2V0XG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJZDogaWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMuZGVmLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVHJlZVZpZXcucHJvcFR5cGVzID0ge1xuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBDb250ZW50UGFuZSBmcm9tICcuLi9Db250ZW50UGFuZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnc3dpdGNoJztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBkYXRhLWFjdGl2ZS1pZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVmLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRQYW5lIGNsYXNzTmFtZT17Yy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZCA/IHRoaXMucHJvcHMuYWN0aXZlSWQgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGMuY29tcG9uZW50LCB7YWN0aXZlOiBjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFBhbmU+KVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmOiBbXVxufTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBkZWY6IFByb3BUeXBlcy5hcnJheSxcbiAgICBhY3RpdmVJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY29udGVudFBhbmVgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ29udGVudFBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd01lbW9yeVZpZXdlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB3aW5kb3dNZW1vcnlWaWV3ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SmF2YXNjcmlwdCBIZWFwIFNpemUgTGltaXQ6PC9zcGFuPiA8c3Bhbj57anNIZWFwU2l6ZUxpbWl0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlRvdGFsIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3RvdGFsSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Vc2VkIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3VzZWRKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvRGlhbG9nJztcbmltcG9ydCBPdmVybGF5IGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvZ2dsZURpYWxvZ09wZW4gfSBmcm9tICcuL0RpYWxvZ3NBY3Rpb24nO1xuXG4vLyBEaWFsb2dzIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ3MgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2tlZCA9IHRoaXMub25CdXR0b25DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2cgPSB0aGlzLmNsb3NlRGlhbG9nLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyA9IHRoaXMub3BlbkRpYWxvZy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKHtcbiAgICAgICAgICAgIGRpYWxvZzE6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlhbG9nMjoge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CdXR0b25DbGlja2VkKGUsIGJ1dHRvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oYnV0dG9uLnByb3BzLmRpYWxvZykpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIGNsb3NlRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCBmYWxzZSkpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgdG8gc3luYyBpbnRlcm5hbCBzdGF0ZVxuICAgIG9wZW5EaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIHRydWUpKTtcbiAgICB9XG5cbiAgICBzaG91bGRTaG93T3ZlcmxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlhbG9nMSRpc09wZW4gfHwgdGhpcy5zdGF0ZS5kaWFsb2cyJGlzT3BlbjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMVwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMVwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cyXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cyXCIgLz5cbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cxJGlzT3Blbn0gY29tcG9uZW50SWQ9XCJkaWFsb2cxXCIgdGl0bGU9XCJkaWFsb2cxXCIgb3Blbj17dGhpcy5vcGVuRGlhbG9nfSBjbG9zZT17dGhpcy5jbG9zZURpYWxvZ30gLz5cbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cyJGlzT3Blbn0gY29tcG9uZW50SWQ9XCJkaWFsb2cyXCIgdGl0bGU9XCJkaWFsb2cyXCIgb3Blbj17dGhpcy5vcGVuRGlhbG9nfSBjbG9zZT17dGhpcy5jbG9zZURpYWxvZ30gcmVwb3NpdGlvbk9uT3Blbj17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBkcmFnZ2FibGUsIHBvcHVwYWJsZSB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL0Zvcm0vQnV0dG9uJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8vIERpYWxvZ1xuZXhwb3J0IGNsYXNzIERpYWxvZ1ZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiAnRGlhbG9nJztcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRpYWxvZ2A7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNsb3NlJyk7XG4gICAgICAgIHRoaXMuYm9keUNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYm9keScpO1xuICAgICAgICB0aGlzLmZvb3RlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2FuY2VsJyk7XG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNvbmZpcm0nKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZCA9IHRoaXMub25DbG9zZUJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBjb25zdCB7IG9wZW4sIGNsb3NlLCByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlLFxuICAgICAgICAgICAgbmV4dENsb3NlID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gZmFsc2UgJiYgaXNPcGVuID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgIG9wZW4oe30sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRDbG9zZSkge1xuICAgICAgICAgICAgY2xvc2Uoe30sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKGUsIHRoaXMpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNhbmNlbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQoZSk7XG5cbiAgICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICBvbkNhbmNlbChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29uZmlybUJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICAgICAgb25Db25maXJtKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bW9kLCB0aXRsZSwgYm9keSwgY2FuY2VsTGFiZWwsIGNvbmZpcm1MYWJlbCwgY2xvc2VCdG5MYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIG1vZCwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmhlYWRlckNsYXNzfSA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT17Y2xvc2VCdG5MYWJlbH0gdGV4dD17Y2xvc2VCdG5MYWJlbH0gb25DbGlja2VkPXt0aGlzLm9uQ2xvc2VCdG5DbGlja2VkfSBjbGFzc05hbWU9e3RoaXMuY2xvc2VCdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5ib2R5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5mb290ZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZH0gdGV4dD17Y2FuY2VsTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jYW5jZWxCdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25Db25maXJtQnRuQ2xpY2tlZH0gdGV4dD17Y29uZmlybUxhYmVsfSBjbGFzc05hbWU9e3RoaXMuY29uZmlybUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EaWFsb2dWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2Q6ICcnLFxuICAgIHRpdGxlOiAnRGlhbG9nIFRpdGxlJyxcbiAgICBib2R5OiAnQU5SMTAzMjgyOSBUaGlzIGlzIGEgc2FtcGxlIG1lc3NhZ2UuIERkbGZrd2Vyb2l1IHNkZnIgc2RmamVyaXUgZGZlcmVyZGZzZi4nLFxuICAgIGhlbHBMYWJlbDogJ0hlbHAnLFxuICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBjbG9zZUJ0bkxhYmVsOiAnQ2xvc2UnLFxuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgb3BlbjogKCkgPT4ge30sXG4gICAgY2xvc2U6ICgpID0+IHt9LFxuICAgIHN0eWxlT2JqOiB7fSxcbn07XG5cbkRpYWxvZ1ZpZXcucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2VCdG5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmNvbnN0IERpYWxvZyA9IHBvcHVwYWJsZShkcmFnZ2FibGUoRGlhbG9nVmlldywgJ2hlYWRlckNsYXNzJykpO1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDZW50ZXJQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnZ2FibGUoQ29tcG9uZW50LCBjbGFzc1Byb3BlcnR5KSB7XG4gICAgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duSGFuZGxlciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7IHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4gJiYgcmVwb3NpdGlvbk9uT3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQge2xlZnQsIHRvcH0gPSBnZXRDZW50ZXJQb3NpdGlvbih3aW5kb3csIHRoaXMuZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnRCZWluZ01vdmVkID0gdGhpcy5kb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlY3QgPSBDb21wb25lbnRCZWluZ01vdmVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgICAge2xhc3RNb3VzZVgsIGxhc3RNb3VzZVl9ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBsZWZ0VG9Nb3VzZSA9IGNsaWVudFggLSBsYXN0TW91c2VYLFxuICAgICAgICAgICAgICAgIHRvcFRvTW91c2UgPSBjbGllbnRZIC0gbGFzdE1vdXNlWSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS5sZWZ0ICsgbGVmdFRvTW91c2UpLFxuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUudG9wICsgdG9wVG9Nb3VzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCwgbGVmdCksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCwgdG9wKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBjbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzUHJvcGVydHkgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzW2NsYXNzUHJvcGVydHldKSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogdHJ1ZSxcbiAgICAgICAgc3R5bGVPYmo6IHt9XG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzdHlsZU9iajogUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIERyYWdnYWJsZUNvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9kcmFnZ2FibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5cbi8vIHBvcHVwYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdXBhYmxlKENvbXBvbmVudCkge1xuICAgIGxldCB6SW5kZXggPSB6SW5kZXhzW0NvbXBvbmVudC50eXBlXSB8fCAwO1xuXG4gICAgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuaGFuZGxlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB6SW5kZXg9e3RoaXMuc3RhdGUuekluZGV4fSByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfSAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUG9wdXBDb21wb25lbnQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFN0YXRlcyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWUgJiYgZGlzYWJsZWQgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRFbmFibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSBmYWxzZSAmJiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5leHREaXNhYmxlZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0JlZW5CbHVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUobmV4dFByb3BzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1cihlKSB7XG4gICAgICAgICAgICAvLyBzZXQgYmx1ciBmbGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkZvY3VzKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpc1ZhbGlkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVnRXhwLCB2YWxpZGF0b3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCFyZWdFeHAgJiYgIXZhbGlkYXRvcikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiByZWdFeHAgJiYgcmVnRXhwLnRlc3QodmFsdWUpIHx8IHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVpcmVkLCBvblZhbGlkYXRlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRW1wdHkgPSBpc0VtcHR5KGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG5vdFZhbGlkID0gIXRoaXMuaXNWYWxpZChpbnB1dFZhbHVlKSxcbiAgICAgICAgICAgICAgICBtb2QgPSAoaXNWYWx1ZUVtcHR5ICYmIHJlcXVpcmVkKSA/IFN0YXRlcy5NSVNTSU5HIDogbm90VmFsaWQgPyBTdGF0ZXMuRVJST1IgOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRNZXNzYWdlKG1vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2QsIG1lc3NhZ2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uVmFsaWRhdGVkICYmIG9uVmFsaWRhdGVkKHttb2QsIG1lc3NhZ2UsIG9rOiBtb2QgPT09ICcnfSwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLm1vZCxcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL1dpZGdldHMvVG9vbHRpcCc7XHJcblxyXG4vLyBzaGFyZWQgdG9vbHRpcCBzdGF0ZVxyXG5sZXQgdG9vbHRpcFRpbWVvdXQgPSBudWxsLFxyXG4gICAgcmVnaXN0ZXIgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLy8gd2l0aFRvb2x0aXBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRvb2x0aXAoQ29tcG9uZW50KSB7XHJcbiAgICBjbGFzcyBDb21wb25lbnRXaXRoVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyID0gdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZSA9IHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0b29sdGlwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcigndG9vbHRpcCcpO1xyXG4gICAgICAgICAgICAvLyBpZiBub3QgZXhpc3QsIGNyZWF0ZSBvbmNlXHJcbiAgICAgICAgICAgIGlmICghdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rvb2x0aXAnKTtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rvb2x0aXAnO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0byBjb21wb25lbnQgbG9jYWwgcHJvcFxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSB0b29sdGlwQ29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBjb21wb25lbnREaWRNb3VudCB3aWxsIGJlIGNhbGwgbXVsdGlwbGUgdGltZXMgaWYgdXNpbmcgaW4gaGlnaGVyIG9yZGVyIHdheVxyXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGF2b2lkIHJlZ2lzdGVyIG11bHRpcGxlIHNhbWUgZG9tIG5vZGVzXHJcbiAgICAgICAgICAgIGlmICghcmVnaXN0ZXIuaGFzKHRoaXMuZG9tTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXIuc2V0KHRoaXMuZG9tTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUb29sdGlwUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5kb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAge3Njcm9sbFRvcCwgc2Nyb2xsTGVmdH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB7dG9vbHRpcFBvc2l0aW9uLCB0b29sdGlwUG9zaXRpb25zLCBtaW5XaWR0aDp0b29sdGlwV2lkdGgsIG1pbkhlaWdodDp0b29sdGlwSGVpZ2h0LCBwYWRkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IC05OTk5LFxyXG4gICAgICAgICAgICAgICAgdG9wID0gLTk5OTk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb3JyZWN0IHRoZSBzY3JvbGxpbmcgdmFsdWVcclxuICAgICAgICAgICAgeCA9IHggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICB5ID0geSArIHNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCh0b29sdGlwUG9zaXRpb25zW3Rvb2x0aXBQb3NpdGlvbl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCArIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCAtIHRvb2x0aXBXaWR0aCAtIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgLSB0b29sdGlwSGVpZ2h0IC0gcGFkZGluZyAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVsb3cnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVsb3ctY2VudGVyZWQnOiBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCArICgod2lkdGggLSB0b29sdGlwV2lkdGggLSBwYWRkaW5nICogMikgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Fib3ZlLWNlbnRlcmVkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyAoKHdpZHRoIC0gdG9vbHRpcFdpZHRoIC0gcGFkZGluZyAqIDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geSAtIHRvb2x0aXBIZWlnaHQgLSBwYWRkaW5nICogMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7bGVmdCwgdG9wfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRvb2x0aXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uVG9vbHRpcE1vdXNlRW50ZXIoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXBDYW5CZUVudGVyZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblRvb2x0aXBNb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSBmYWxzZTtcclxuICAgICAgICAgICB0aGlzLmNsZWFyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUb29sdGlwKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29uVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHRvb2x0aXA9XCJcIiAvPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMudG9vbHRpcENhbkJlRW50ZXJlZCA/IDMwMDogMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b29sdGlwU2hvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0b29sdGlwVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlclRvb2x0aXAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0VG9vbHRpcFBvcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB0aGlzLnByb3BzLnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnByb3BzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Ub29sdGlwTW91c2VFbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uVG9vbHRpcE1vdXNlTGVhdmVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIFJlYWN0RG9tLnJlbmRlcig8VG9vbHRpcCB7Li4udGhpcy5wcm9wc30gey4uLm5ld1Byb3BzfSB7Li4ucG9zfS8+LCB0aGlzLnRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9vbHRpcFNob3dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90b29sdGlwU2hvd2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUb29sdGlwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICB0b29sdGlwUG9zaXRpb25zOiB7XHJcbiAgICAgICAgICAgICdhZnRlcic6ICdhZnRlcicsXHJcbiAgICAgICAgICAgICdiZWZvcmUnOiAnYmVmb3JlJyxcclxuICAgICAgICAgICAgJ2Fib3ZlJzogJ2Fib3ZlJyxcclxuICAgICAgICAgICAgJ2JlbG93JzogJ2JlbG93JyxcclxuICAgICAgICAgICAgJ2JlbG93LWNlbnRlcmVkJzogJ2JlbG93LWNlbnRlcmVkJyxcclxuICAgICAgICAgICAgJ2Fib3ZlLWNlbnRlcmVkJzogJ2Fib3ZlLWNlbnRlcmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcENhbkJlRW50ZXJlZDogZmFsc2UsXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uOiAnYWZ0ZXInLFxyXG4gICAgICAgIHN0YXRlOiAnbm9ybWFsJ1xyXG4gICAgfSwgVG9vbHRpcC5kZWZhdWx0UHJvcHMsIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpO1xyXG5cclxuICAgIENvbXBvbmVudFdpdGhUb29sdGlwLnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB0b29sdGlwUG9zaXRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIHRvb2x0aXBDYW5CZUVudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSwgVG9vbHRpcC5wcm9wVHlwZXMpO1xyXG5cclxuICAgIHJldHVybiBDb21wb25lbnRXaXRoVG9vbHRpcDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYG92ZXJsYXlgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgKCFpc09wZW4gPyAnaGlkZGVuJyA6ICcnKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4cy5PdmVybGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PjwvZGl2PilcbiAgICB9XG59XG5cbk92ZXJsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIG9wYWNpdHk6IC41XG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nTmFtZSwgb3BlblN0YXRlKSB7XG4gICAgbGV0IGhhc1N0YXRlU2V0ID0gdHlwZW9mIG9wZW5TdGF0ZSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIG9wZW5TdGF0ZU5hbWUgPSAnJGlzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9DaGVja2JveCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IHZhbGlkYXRvciA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbn1cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHdkRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXG4gICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICBuYW1lOiAncHdkRmllbGQnXG4gICAgfSxcbiAgICBkcm9wZG93bjoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVDaGVja2JveDoge1xuICAgICAgICBuYW1lOiAnZGlzYWJsZUNoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9LFxuICAgIGhpZGRlbjogdHJ1ZVxufTtcblxuLy8gRm9ybSBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25JdGVtID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMScsIHZhbHVlOiAnaTEnfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDInLCB2YWx1ZTogJ2kyJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAzJywgdmFsdWU6ICdpMyd9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgdG9nZ2xlRmllbGREaXNhYmxlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuZ2V0U3RhdGUobmFtZSwgJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnB3ZEZpZWxkLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXToge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdkaXNhYmxlQ2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0aGlzLmdldFN0YXRlKCdkcm9wZG93bicsICAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IGRpc2FibGVkID8gJ2Rpc2FibGVkIHRvb2x0aXAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMiwgaTMsIGRyb3Bkb3duUHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyduYW1lRmllbGQnLCAncHdkRmllbGQnLCAnZGlzYWJsZUNoZWNrYm94JywgJ2Ryb3Bkb3duJ10pO1xuXG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9XCJEaXNhYmxlZCB0b29sdGlwXCIgdGV4dD1cIkRpc2FibGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkxfSByZWY9e25hbWUgPT4gdGhpcy5uYW1lRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkyfSByZWY9e25hbWUgPT4gdGhpcy5wd2RGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcD17XCJEaXNhYmxlZCB0b29sdGlwXCJ9IGlucHV0VmFsdWU9XCJJIGFtIGRpc2FibGVkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UsIG9uZSBsb3dlcmNhc2UsIGFuZCBvbmUgbnVtYmVyLjwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRHJvcGRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbXM9e3RoaXMuZHJvcGRvd25JdGVtfSBvbkNoYW5nZT17dGhpcy5vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9IHsuLi5kcm9wZG93blByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJDaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkRpc2FibGUgZHJvcCBkb3duXCIgey4uLmkzfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcblxuaW1wb3J0IHsgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZClbMF07XG4gICAgfVxuICAgIGdldCBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbMF0gfHwge307XG4gICAgfVxuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1t0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDFdIHx8IHt9O1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLnNlbGVjdGVkSXRlbS5pZCkgOiAwO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bmA7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygncGxhY2Vob2xkZXInKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHRoaXMuaW5pdEZpbHRlciA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZElkOiAnLTEnLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgY3Vyc29yOiAnLTEnLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHRJbnB1dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAodGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyID0gZSA9PiB0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZShlKSkpO1xuICAgICAgICBjb25zdCB7aXRlbXN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogaXRlbXMubWFwKChpdGVtLCBpKSA9PiBPYmplY3QuYXNzaWduKGl0ZW0sIHtpZDogJ2l0ZW0nICsgaX0pKX0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIF9jbGlja09yRm9jdXNBbnl3aGVyZShlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjbGljayB3YXMgd2l0aGluIHNlbGYsIGlnbm9yZTsgb3RoZXJ3aXNlLCBjbG9zZSBzZWxmXG4gICAgICAgIGlmICghdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dChpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSB0aGlzLmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSArIDFdLmlkO1xuICAgIH1cblxuICAgIHByZXYoaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSAwKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSAtIDFdLmlkO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGxldCBjdXJzb3JJZCA9IHRoaXMuc3RhdGUuY3Vyc29yICE9PSAtMSA/IHRoaXMuc3RhdGUuY3Vyc29yIDogdGhpcy5zdGF0ZS5zZWxlY3RlZElkO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMubmV4dChjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMucHJldihjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oY3Vyc29ySWQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkOiBjdXJzb3JJZCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICF0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA6IC0xLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBpdGVtID8gaXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXIsXG4gICAgICAgICAgICBjdXJzb3I6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHt0YXJnZXQ6IHRoaXMuZG9tTm9kZX0pKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7IGlucHV0VmFsdWUgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoaW5wdXRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGNoYXJzID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyksXG4gICAgICAgICAgICAgICAgcmVnR3JwID0gY2hhcnMubWFwKGMgPT4gYFskeyhjICsgJycpLnRvVXBwZXJDYXNlKCl9JHsoYyArICcnKS50b0xvd2VyQ2FzZSgpfV1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlZ0dycC5qb2luKCcnKSkpLnRlc3QoaXRlbS5sYWJlbClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgY3Vyc29yOiAtMSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7aXRlbXMsIHNlbGVjdGVkSWQsIGN1cnNvcn0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBbaW5wdXRQcm9wc10gPSB0aGlzLmdldFN0YXRlcyhbJ3RleHRJbnB1dCddKSxcbiAgICAgICAgICAgIG5ld0lucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5sYWJlbCA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSByZWY9e3RoaXMucHJvY2Vzc1JlZn0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0gb25LZXlEb3duPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNlbGVjdGVkPXshIXNlbGVjdGVkSXRlbX0gdmFsdWU9e3NlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS52YWx1ZSA6ICcnfSBjbGFzc05hbWU9e3RoaXMucGxhY2Vob2xkZXJDbGFzcyArICcgbm9uZSBjdXJyZW50J30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdJbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3QgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn0gY2xvc2U9e3RoaXMuY2xvc2V9IGl0ZW1zPXtpdGVtc30gc2VsZWN0ZWRJZD17Y3Vyc29yICE9PSAtMSA/IGN1cnNvcjogc2VsZWN0ZWRJZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkxpc3RWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgY2xhc3NOYW1lLCB6SW5kZXgsIHNlbGVjdGVkSWQsIGZpbHRlciwgbm9JdGVtTWVzc2FnZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKSxcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gaXRlbXMuZmlsdGVyKGZpbHRlciksXG4gICAgICAgICAgICBoYXNJdGVtID0gbmV3SXRlbXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIHN0eWxlID0ge3pJbmRleH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAge2hhc0l0ZW0gPyBuZXdJdGVtcy5tYXAoaXRlbSA9PiA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLmxhYmVsfSB2YWx1ZT17aXRlbS52YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkSWQgPT09IGl0ZW0uaWR9IC8+ICkgOiA8RHJvcGRvd25JdGVtPntub0l0ZW1NZXNzYWdlfTwvRHJvcGRvd25JdGVtPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25MaXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgekluZGV4OiAwLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWUsXG4gICAgbm9JdGVtTWVzc2FnZTogJ05vIEl0ZW0gRm91bmQnXG59XG5cbkRyb3Bkb3duTGlzdFZpZXcucHJvcFR5cGVzID0ge1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vSXRlbU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTGlzdCA9IHBvcHVwYWJsZShEcm9wZG93bkxpc3RWaWV3KTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bkl0ZW1gO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUsIHZhbHVlLCBsYWJlbCwgaWQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aWR9IGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkfSBkYXRhLWxhYmVsPXtsYWJlbH0gZGF0YS12YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PntjaGlsZHJlbiB8fCBsYWJlbH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjaGVja2JveGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpc2FibGVkLCBuYW1lLCBjaGVja2VkLCBsYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPntsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaGVja2JveFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsYWJlbDogJydcbn07XG5cbkNoZWNrYm94Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IENoZWNrYm94ID0gd2l0aFRvb2x0aXAoQ2hlY2tib3hWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcblxyXG5jb25zdCBsb25nVG9vbHRpcCA9IGBTbywgeWVzdGVyZGF5LCBiZWluZyBhbm90aGVyIHJhaW55IGRheSBpbiBDaGljYWdvLCBJIGdyYWJiZWQgYSBkaWdpdGFsIHJlbnRhbCBvZiBGcmFua2Vud2VlbmllLlxyXG5BIGZldyB5ZWFycyBhZ28sIG15IHdpZmUgYW5kIEkgc2F3IGl0IHdoZW4gaXQgd2FzIGluIHRoZWF0ZXJzLiBBbmQgd2UgbG92ZWQgaXQuIEJlaW5nIHRoYXQgUm9yeSBsb3ZlcyBkb2dzIChsaWtlLCBvYnNlc3NpdmVseSBzbyksIEkgZmlndXJlZCBzaGXigJlkIGVuam95IGl0IHRvby5cclxuTGl0dGxlIGRpZCBJIGtub3cgd2hhdCBJIHdhcyBpbiBzdG9yZSBmb3LigKYsIFNvLCB5ZXN0ZXJkYXksIGJlaW5nIGFub3RoZXIgcmFpbnkgZGF5IGluIENoaWNhZ28sIEkgZ3JhYmJlZCBhIGRpZ2l0YWwgcmVudGFsIG9mIEZyYW5rZW53ZWVuaWUuXHJcbkEgZmV3IHllYXJzIGFnbywgbXkgd2lmZSBhbmQgSSBzYXcgaXQgd2hlbiBpdCB3YXMgaW4gdGhlYXRlcnMuIEFuZCB3ZSBsb3ZlZCBpdC4gQmVpbmcgdGhhdCBSb3J5IGxvdmVzIGRvZ3MgKGxpa2UsIG9ic2Vzc2l2ZWx5IHNvKSwgSSBmaWd1cmVkIHNoZeKAmWQgZW5qb3kgaXQgdG9vLlxyXG5MaXR0bGUgZGlkIEkga25vdyB3aGF0IEkgd2FzIGluIHN0b3JlIGZvcuKApmA7XHJcbmNvbnN0IHRvb2x0aXAgPSBgVGhpcyBpcyBub3JtYWwgdG9vbHRpcGA7XHJcbmNvbnN0IG9uZUxpbmVXaXRoSW5saW5lTWFya3VwID0gYDxzcGFuIGNsYXNzPVwiY29sb3JmdWxcIj5JIGFtIGNvbG9yZnVsIHRvb2x0aXA8L3NwYW4+YDtcclxuLy8gVG9vbHRpcHMgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwidG9vbHRpcHNcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFmdGVyXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVmb3JlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVmb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFib3ZlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVsb3dcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwUG9zaXRpb249XCJiZWxvd1wiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93LWNlbnRlcmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3ctY2VudGVyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZS1jZW50ZXJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlLWNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgY2FuIGJlIGVudGVycmVkXCIgdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gdG9vbHRpcD17dG9vbHRpcH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBzdGF0ZSBpcyBhbHdheXMgV0FSTklOR1wiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBTdGF0ZT1cIldBUk5JTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSGVscCBUaXBzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlYWxseSBMb25nIHRvb2x0aXBcIiB0b29sdGlwPXtsb25nVG9vbHRpcH0gdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIk9uZS1saW5lciB3aXRoIGlubGluZSBtYXJrdXBcIiB0b29sdGlwPXtvbmVMaW5lV2l0aElubGluZU1hcmt1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xUaXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRvb2x0aXBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNPcGVuLCB0b29sdGlwLCBzdGF0ZSwgbGVmdCwgdG9wLCBtaW5XaWR0aCwgbWF4V2lkdGgsIG1pbkhlaWdodCwgbWF4SGVpZ2h0LCBvcGFjaXR5LCB6SW5kZXgsIHBhZGRpbmd9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgc3RhdGUpLFxyXG4gICAgICAgICAgICBkZWZhdWx0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IG1pbldpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBtYXhXaWR0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlRXZlbnR9IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17dG9vbHRpcCA/IHN0eWxlIDogZGVmYXVsdFN0eWxlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdG9vbHRpcH19IC8+KVxyXG4gICAgfVxyXG59XHJcblxyXG5Ub29sVGlwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0b29sdGlwOiAnJyxcclxuICAgIGxlZnQ6IC05OTk5OSxcclxuICAgIHRvcDogLTk5OTk5LFxyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICAgIG1heFdpZHRoOiAyMDAsXHJcbiAgICBtaW5IZWlnaHQ6IDIwLFxyXG4gICAgbWF4SGVpZ2h0OiAxMDAsXHJcbiAgICBzdGF0ZTogJ05PUk1BTCcsXHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gICAgekluZGV4OiB6SW5kZXhzLlRvb2x0aXBcclxufTtcclxuXHJcblRvb2xUaXAucHJvcFR5cGVzID0ge1xyXG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1Rvb2x0aXAvaW5kZXguanN4IiwibGV0IHdzQ29ubmVjdGVkID0gZmFsc2UsXG4gICAgZGF0YUlkID0gMCxcbiAgICByZXF1ZXN0cyA9IG5ldyBNYXAoKTtcblxuY29uc3QgQVBJID0ge1xuICAgIGluaXRXUygpIHtcbiAgICAgICAgaWYgKCF3c0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjgwODEnKTtcbiAgICAgICAgICAgIHRoaXMud3NMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgICAgIHRoaXMud3NPUGVuUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdHMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlciA9IHJlcXVlc3RzLmdldChkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2goZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3NDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdzU2VuZChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlciA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbdGhpcy53c09QZW5Qcm9taXNlXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZGF0YUlkKys7XG4gICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtpZCwgZGF0YX0pKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cy5zZXQoaWQsIHJlc29sdmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYWRkV1NMaXN0ZW5lcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy53c0xpc3RlbmVycy5zZXQoY29tcG9uZW50LmlkLCBjb21wb25lbnQpO1xuICAgIH0sXG5cbiAgICByZW1vdmVXU0xpc3RlbmVyKGlkKSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuZGVsZXRlKGlkKTtcbiAgICB9LFxuXG4gICAgX2Rpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lci5vbkRhdGEgJiYgbGlzdGVuZXIub25EYXRhKGV2ZW50LmRhdGEsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BUEkvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9