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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

var _utils = __webpack_require__(4);

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
        if (method in this.props) this.props[method](e, this);
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

            (_get2 = _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this)).call.apply(_get2, [this].concat(args));
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(4);

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

exports.default = PopupManager;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(28);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Forms = __webpack_require__(35);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Header2.default, { text: 'Monitoring' }) }, { id: 'form', label: 'Form Widgets', url: '/#form', component: _react2.default.createElement(_Forms2.default, null) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'tooltip', label: 'Tooltip', url: '/#widgets/tooltip', component: _react2.default.createElement(_Header2.default, { text: 'Tooltips' }) }, { id: 'bars', label: 'Bars', url: '/#widgets/bars', component: _react2.default.createElement(_Header2.default, { text: 'Bars' }) }, { id: 'alerts', label: 'Alerts', url: '/#widgets/alerts', component: _react2.default.createElement(_Header2.default, { text: 'Alerts' }) }] }];

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

var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(12);
var assign = __webpack_require__(18);

var ReactPropTypesSecret = __webpack_require__(7);
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
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(12);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BorderContainer = __webpack_require__(22);

var _BorderContainer2 = _interopRequireDefault(_BorderContainer);

var _Pane = __webpack_require__(23);

var _Pane2 = _interopRequireDefault(_Pane);

var _Splitter = __webpack_require__(13);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(24);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(25);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _WindowMemoryViewer = __webpack_require__(27);

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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Splitter = __webpack_require__(13);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(4);

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

var _ContentPane = __webpack_require__(26);

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
/* 28 */
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

var _Dialog = __webpack_require__(29);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(33);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(34);

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
/* 29 */
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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(30);

var _Button = __webpack_require__(9);

var _Button2 = _interopRequireDefault(_Button);

var _utils = __webpack_require__(4);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupManager = exports.popupable = exports.draggable = undefined;

var _draggable = __webpack_require__(31);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(32);

var _popupable2 = _interopRequireDefault(_popupable);

var _PopupManager = __webpack_require__(14);

var _PopupManager2 = _interopRequireDefault(_PopupManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.draggable = _draggable2.default;
exports.popupable = _popupable2.default;
exports.PopupManager = _PopupManager2.default;

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(4);

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(8);

var _PopupManager = __webpack_require__(14);

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
                return React.createElement(Component, _extends({}, this.props, { styleObj: styleObj }));
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
/* 34 */
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
/* 35 */
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

var _TextInput = __webpack_require__(36);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(11);

var _Header2 = _interopRequireDefault(_Header);

var _FormsAction = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dialogs page
var Forms = function (_BaseComponent) {
    _inherits(Forms, _BaseComponent);

    function Forms() {
        _classCallCheck(this, Forms);

        return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).apply(this, arguments));
    }

    _createClass(Forms, [{
        key: 'init',
        value: function init() {
            this.state = this.transformState({
                nameField: {
                    disbled: false
                },
                pwdField: {
                    disabled: false
                }
            });
        }
    }, {
        key: 'toggleDisableNameField',
        value: function toggleDisableNameField(e, button) {
            var _this2 = this;

            this.setState((0, _FormsAction.toggleDisable)('nameField'), function () {
                _this2.nameField.domNode.focus();
            });
        }
    }, {
        key: 'toggleDisablePwdField',
        value: function toggleDisablePwdField(e, button) {
            var _this3 = this;

            this.setState((0, _FormsAction.toggleDisable)('pwdField'));
            setTimeout(function () {
                _this3.pwdField.domNode.focus();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var style = {
                width: '100%',
                height: '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: style, className: 'forms' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(_Header2.default, { text: 'Buttons' }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.toggleDisableNameField.bind(this), text: 'Toggle Disable Name Field' }),
                    _react2.default.createElement(_Button2.default, { onClicked: this.toggleDisablePwdField.bind(this), text: 'Toggle Disable Password Field' }),
                    _react2.default.createElement(_Header2.default, { text: 'ValidationTextBox' }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, { ref: function ref(name) {
                                return _this4.nameField = name;
                            }, disabled: this.state.nameFieldDisabled, name: 'name', placeholder: 'Name' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextInput2.default, { ref: function ref(name) {
                                return _this4.pwdField = name;
                            }, disabled: this.state.pwdFieldDisabled, type: 'password', name: 'pwd', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'small',
                        null,
                        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.'
                    )
                )
            );
        }
    }]);

    return Forms;
}(_BaseComponent3.default);

exports.default = Forms;

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_BaseComponent) {
    _inherits(TextInput, _BaseComponent);

    function TextInput() {
        _classCallCheck(this, TextInput);

        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
    }

    _createClass(TextInput, [{
        key: 'init',
        value: function init() {
            this.baseClassName = 'textInput';
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
            var _this2 = this;

            var _props = this.props,
                placeholder = _props.placeholder,
                type = _props.type,
                disabled = _props.disabled,
                name = _props.name;


            return _react2.default.createElement('input', { ref: function ref(input) {
                    return _this2.domNode = input;
                },
                className: this.className,
                placeholder: placeholder,
                disabled: disabled,
                name: name,
                type: type });
        }
    }]);

    return TextInput;
}(_BaseComponent3.default);

exports.default = TextInput;


TextInput.defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false
};

TextInput.propTypes = {
    placeholder: _propTypes2.default.string,
    type: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.name
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleDisable = toggleDisable;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggleDisable(inputName, disabled) {
    var hasStateSet = typeof disabled !== 'undefined',
        disabledState = 'Disabled';

    return function (state, props) {
        return _defineProperty({}, inputName + disabledState, hasStateSet ? disabled : !state[inputName + disabledState]);
    };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBiMDgzNzYxYzU1NzM2OGRjYmIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0Zvcm1zL0Zvcm1zQWN0aW9uLmpzIl0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJjb25zb2xlIiwiaW5mbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInByb3BzIiwicmVnaXN0cnkiLCJCYXNlQ29tcG9uZW50IiwiYXJncyIsImJpbmQiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnRJZCIsInRvTG93ZXJDYXNlIiwic3RhdGVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsIm9iaiIsIk9iamVjdCIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdGVPYmplY3QiLCJfZiIsInJvb3QiLCJyZXN1bHQiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJ2YWx1ZUlzT2JqIiwiciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImZyb20iLCJmaWx0ZXIiLCJzIiwiam9pbiIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsIkJ1dHRvbiIsIm9uQ2xpY2tlZCIsInRleHQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiSGVhZGVyIiwiZGVmYXVsdFR5cGVzIiwid2FybmluZyIsInByaW50V2FybmluZyIsIl9sZW4iLCJfa2V5IiwibWVzc2FnZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiYm9vbCIsIlBvcHVwTWFuYWdlciIsInR5cGVzIiwiZXZlbnRUeXBlIiwic3RhY2siLCJldmVudEhhbmRsZXIiLCJhZGQiLCJjb21wb25lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJzYXZlZENvbXBvbmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXMiLCJpbmNsdWRlcyIsImNvZGUiLCJjbG9zZSIsImhhbmRsZSIsImlzT3BlbiIsImlzUG9wdXAiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwidG8iLCJzeW1ib2xzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInNoaW0iLCJnZXRTaGltIiwiQXBwIiwic3RhdGUiLCJhY3RpdmVJZCIsImpzSGVhcFNpemVMaW1pdCIsInRvdGFsSlNIZWFwU2l6ZSIsInVzZWRKU0hlYXBTaXplIiwiaGFzaCIsIndpbmRvdyIsInNldEludGVydmFsIiwiZ2V0TWVtb3J5U3RhdCIsInNldFN0YXRlIiwicGVyZm9ybWFuY2UiLCJtZW1vcnkiLCJvblRyZWVOb2RlQ2xpY2siLCJwYWdlcyIsIkJvcmRlckNvbnRhaW5lciIsInBlcnNpc3QiLCJQYW5lIiwibW91c2Vtb3ZlSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2V1cEhhbmRsZXIiLCJvbk1vdXNlVXAiLCJzcGxpdHRlciIsInNpemUiLCJzaXplVW5pdCIsIm1heFNpemUiLCJtaW5TaXplIiwiZG9tTm9kZSIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIk1hdGgiLCJmbG9vciIsIm9uTW91c2VEb3duIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsIkNvbnRlbnRQYW5lIiwiV2luZG93TWVtb3J5Vmlld2VyIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsInRyYW5zZm9ybVN0YXRlIiwiZGlhbG9nMSIsImRpYWxvZzIiLCJncmlkIiwiYnV0dG9uIiwiaGlkZGVuIiwibGF5b3V0IiwibWVudSIsImRpYWxvZyIsImRpYWxvZzFJc09wZW4iLCJkaWFsb2cySXNPcGVuIiwiRGlhbG9nVmlldyIsImhlYWRlckNsYXNzIiwiZ2V0TGliUHJlZml4ZWRDbGFzcyIsImNsb3NlQnRuQ2xhc3MiLCJib2R5Q2xhc3MiLCJmb290ZXJDbGFzcyIsImNhbmNlbEJ0bkNsYXNzIiwiY29uZmlybUJ0bkNsYXNzIiwib25DYW5jZWxCdG5DbGlja2VkIiwib25Db25maXJtQnRuQ2xpY2tlZCIsIm9uQ2xvc2VCdG5DbGlja2VkIiwibmV4dFByb3BzIiwib3BlbiIsInJlcG9zaXRpb25Pbk9wZW4iLCJuZXh0T3BlbiIsIm5leHRDbG9zZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwibW9kIiwiYm9keSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xvc2VCdG5MYWJlbCIsImhlbHBMYWJlbCIsInN0eWxlT2JqIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiQ29tcG9uZW50IiwiY2xhc3NQcm9wZXJ0eSIsIkRyYWdnYWJsZUNvbXBvbmVudCIsIm1vdXNlZG93bkhhbmRsZXIiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwicmVwb3NpdGlvbiIsInJlY3QiLCJDb21wb25lbnRCZWluZ01vdmVkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJsZWZ0VG9Nb3VzZSIsInRvcFRvTW91c2UiLCJtYXgiLCJtaW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBvc2l0aW9uIiwicHJvY2Vzc1JlZiIsImFzc2VydCIsIlBvcHVwQ29tcG9uZW50IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwiRm9ybXMiLCJuYW1lRmllbGQiLCJkaXNibGVkIiwicHdkRmllbGQiLCJkaXNhYmxlZCIsInRvZ2dsZURpc2FibGVOYW1lRmllbGQiLCJ0b2dnbGVEaXNhYmxlUHdkRmllbGQiLCJuYW1lRmllbGREaXNhYmxlZCIsInB3ZEZpZWxkRGlzYWJsZWQiLCJUZXh0SW5wdXQiLCJwbGFjZWhvbGRlciIsImlucHV0IiwidG9nZ2xlRGlzYWJsZSIsImlucHV0TmFtZSIsImRpc2FibGVkU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLGlCQUFVQSxTQUFWLENBQW9CQyxXQUFwQixHQUFtQyxZQUFZO0FBQzNDO0FBQ0EsUUFBSUMsTUFBTTtBQUNOQyxl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QUR0QixVQUNzQkEsUUFEdEI7QUFBQSxnQkFDZ0NuYixJQURoQyxVQUNnQ0EsSUFEaEM7OztBQUdMLG1CQUNJLHlDQUFPLEtBQUs7QUFBQSwyQkFBUyxPQUFLdVUsT0FBTCxHQUFlbUgsS0FBeEI7QUFBQSxpQkFBWjtBQUNJLDJCQUFXLEtBQUszYSxTQURwQjtBQUVJLDZCQUFhMGEsV0FGakI7QUFHSSwwQkFBVU4sUUFIZDtBQUlJLHNCQUFNbmIsSUFKVjtBQUtJLHNCQUFNVCxJQUxWLEdBREo7QUFRSDs7Ozs7O2tCQXhCZ0JpYyxTOzs7QUEyQnJCQSxVQUFVM1MsWUFBVixHQUF5QjtBQUNyQjRTLGlCQUFhLEVBRFE7QUFFckJsYyxVQUFNLE1BRmU7QUFHckI0YixjQUFVO0FBSFcsQ0FBekI7O0FBTUFLLFVBQVUxUyxTQUFWLEdBQXNCO0FBQ2xCMlMsaUJBQWEsb0JBQVUxUyxNQURMO0FBRWxCeEosVUFBTSxvQkFBVXdKLE1BRkU7QUFHbEJvUyxjQUFVLG9CQUFVcFIsSUFIRjtBQUlsQi9KLFVBQU0sb0JBQVVBO0FBSkUsQ0FBdEIsQzs7Ozs7Ozs7Ozs7O1FDckNnQjJiLGEsR0FBQUEsYTs7OztBQUFULFNBQVNBLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDVCxRQUFsQyxFQUE0QztBQUMvQyxRQUFJTixjQUFjLE9BQU9NLFFBQVAsS0FBb0IsV0FBdEM7QUFBQSxRQUNJVSxnQkFBZ0IsVUFEcEI7O0FBR0EsV0FBTyxVQUFTaEosS0FBVCxFQUFnQjVTLEtBQWhCLEVBQXVCO0FBQzFCLG1DQUFTMmIsWUFBWUMsYUFBckIsRUFBcUNoQixjQUFjTSxRQUFkLEdBQXlCLENBQUN0SSxNQUFNK0ksWUFBWUMsYUFBbEIsQ0FBL0Q7QUFDSCxLQUZEO0FBR0gsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGIwODM3NjFjNTU3MzY4ZGNiYiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzT2JqLCBlfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIGFsbCBjb21wb25lbnRzIHNoYXJlIG9uZSBldmVudCBoYW5kbGVyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGwga25vd24gUmVhY3QuQ29tcG9uZW50IGV2ZW50c1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXG4gICAgICAgIGNoYW5nZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgbW91c2VvdmVyOiAnb25Nb3VzZU92ZXInLFxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gICAgICAgIG1vdXNlb3V0OiAnb25Nb3VzZU91dCcsXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgICAgICAgbW91c2V1cDogJ29uTW91c2VVcCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgICAgICAgYmx1cjogJ29uQmx1cidcbiAgICB9O1xuXG4gICAgLy8gZmFsbGJhY2sgaGVscGVyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAnb24nICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLy8gb25lIGhhbmRsZUV2ZW50IHRvIHJ1bGUgdGhlbSBhbGxcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbWFwW2UudHlwZV0gfHwgY2FwaXRhbGl6ZShlLnR5cGUpO1xuICAgICAgICBjb25zb2xlLmluZm8obWV0aG9kLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMucHJvcHMpIHRoaXMucHJvcHNbbWV0aG9kXShlLCB0aGlzKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgfTtcbn0oKSk7XG5cbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcbmxldCByZWdpc3RyeSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGliQ2xhc3NQcmVmaXggPSAnZSc7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5wb3N0UmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YDtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBoYXZlIHJlZ2lzdGVyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcbiAgICAgICAgLy8gYWRkIG9uZVxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdICsgMTtcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpICsgcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoLi4uYXJncykge1xuICAgICAgICBzdXBlci5zZXRTdGF0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvLyBpc09iajogY2hlY2sgaWYgdGhlIGdpdmVuIG9iaiBpcyBhbiBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBpc09iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbi8vIGNsb25lOiBzaW1wbGUgY2xvbmUgdGhlIGdpdmVuIG9iamVjdFxuLy8gbm90IHN1cHBvcnQgZnVuY3Rpb24gYW5kIGNpcmN1bGFyIHJlZmVyZW5jZVxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vLyBmbGF0dGVuIHN0YXRlIG9iamVjdFxuLy8gZ3JpZDp7bGF5b3V0OnttZW51OntleHBhbmQ6dHJ1ZX19fX0gPT4gZ3JpZExheW91dE1lbnVFeHBhbmQ6dHJ1ZVxuZXhwb3J0IGZ1bmN0aW9uIGUoc3RhdGVPYmplY3QpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3R9JHtyb290ID09PSAnJyA/IGtleSA6IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX1gO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVJc09iaikge1xuICAgICAgICAgICAgICAgIF9mKHZhbHVlLCByLCByZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbcl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBfZihzdGF0ZU9iamVjdCwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyUG9zaXRpb24oe2lubmVyV2lkdGggPSAxMDAwLCBpbm5lckhlaWdodD04MDB9LCB7d2lkdGggPSA0MDAsIGhlaWdodCA9IDQwMH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICB9XG59XG5cbi8vIGdldENsc05hbWU6IGNvbmNhdGUgYXJ1bWVudHMgd2l0aCBzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5maWx0ZXIocyA9PiBzICE9PScnICYmIHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJykuam9pbignICcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiZXhwb3J0IGNvbnN0IHpJbmRleHMgPSB7XG4gICAgRGlhbG9nOiAzMDAwLFxuICAgIE92ZXJsYXk6IDIwMDAsXG4gICAgRHJvcGRvd246IDEwMDBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcbiAgICB9XG5cbiAgIG9uQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dGV4dCwgdHlwZSwgdGl0bGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSB0aXRsZT17dGl0bGUgfHwgdGV4dH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+e3RleHR9PC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICdCdXR0b24nLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIHRpdGxlOiAnJ1xufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBoZWFkZXJgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9Pnt0aGlzLnByb3BzLnRleHR9PC9oMT4pO1xuICAgIH1cbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJ1xufTtcblxuSGVhZGVyLmRlZmF1bHRUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImNvbnN0IFBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBkZWNvdXBsZVxuICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xuaW1wb3J0IEZvcm1zIGZyb20gJy4vRm9ybXMnO1xuXG5jb25zdCBuYXZEZWYgPSBbXG4gICAge2lkOiAnbW9uJywgbGFiZWw6ICdNb25pdG9yaW5nJywgdXJsOiAnLyNtb24nLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIk1vbml0b3JpbmdcIiAvPn0sXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBXaWRnZXRzJywgdXJsOiAnLyNmb3JtJywgY29tcG9uZW50OiA8Rm9ybXMgLz59LFxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXG4gICAgICAgIHtpZDogJ2RpYWxvZ3MnLCBsYWJlbDogJ0RpYWxvZ3MnLCB1cmw6ICcvI3dpZGdldHMvZGlhbG9ncycsIGNvbXBvbmVudDogPERpYWxvZ3MgLz59LFxuICAgICAgICB7aWQ6ICd3aXphcmQnLCBsYWJlbDogJ1dpemFyZCcsIHVybDogJy8jd2lkZ2V0cy93aXphcmQnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIldpYXJkXCIgLz59LFxuICAgICAgICB7aWQ6ICd0b29sdGlwJywgbGFiZWw6ICdUb29sdGlwJywgdXJsOiAnLyN3aWRnZXRzL3Rvb2x0aXAnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIlRvb2x0aXBzXCIgLz59LFxuICAgICAgICB7aWQ6ICdiYXJzJywgbGFiZWw6ICdCYXJzJywgdXJsOiAnLyN3aWRnZXRzL2JhcnMnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkJhcnNcIiAvPn0sXG4gICAgICAgIHtpZDogJ2FsZXJ0cycsIGxhYmVsOiAnQWxlcnRzJywgdXJsOiAnLyN3aWRnZXRzL2FsZXJ0cycsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiQWxlcnRzXCIgLz59XG4gICAgXX1cbl07XG5cbmNvbnN0IHBhZ2VzRGVmID0gKG5hdiA9PiB7XG4gICAgbGV0IHJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuID0gbmF2W2ldO1xuICAgICAgICBpZiAobi5jaGlsZHJlbikge1xuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnB1c2gobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIG5hbWU9XCJPS1wiIG5hdj17bmF2RGVmfSBwYWdlcz17cGFnZXNEZWZ9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgfVxuXG4gICAgZ2V0TWVtb3J5U3RhdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gd2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRyZWVOb2RlQ2xpY2sobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQ6IG5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJsZWZ0UGFuZVwiIHNwbGl0dGVyPVwidmVydGljYWxcIiBzaXplPXsyMDB9IG1pblNpemU9ezIwMH0gbWF4U2l6ZT17NTAwfSBzaXplVW5pdD1cInB4XCIgPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcgZGVmPXt0aGlzLnByb3BzLm5hdn0gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8UGFuZSBjbGFzc05hbWU9XCJyaWdodFBhbmVcIiBkaXNwbGF5PVwiZmxleFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZSBzcGxpdHRlcj1cImhvcml6b250YWxcIiBzaXplPXs3NX0gbWF4U2l6ZT17ODB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkZWY9e3RoaXMucHJvcHMucGFnZXN9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmRvd01lbW9yeVZpZXdlciBqc0hlYXBTaXplTGltaXQ9e3RoaXMuc3RhdGUuanNIZWFwU2l6ZUxpbWl0fSB0b3RhbEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudG90YWxKU0hlYXBTaXplfSB1c2VkSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS51c2VkSlNIZWFwU2l6ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQXBwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9yZGVyQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGJvcmRlckNvbnRhaW5lcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQm9yZGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnXG59O1xuXG5Cb3JkZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwZXJzaXN0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL1NwbGl0dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiBrZXlib2FyZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHBhbmVgO1xuICAgICAgICB0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge3NwbGl0dGVyLCBzaXplLCBzaXplVW5pdCwgbWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge29mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHR9ID0gdGhpcy5kb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnbnVsbCcpIHJldHVybjtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtaW5TaXplIC8gMTAwKSkgOiBtaW5TaXplO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBzaXplIC8gMTAwKSkgOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bihlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgIHttYXhTaXplLCBtaW5TaXplfSA9IHRoaXMsXG4gICAgICAgICAgICAgIGxlZnQgPSBjbGllbnRYID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WCA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WCksXG4gICAgICAgICAgICAgIHRvcCA9IGNsaWVudFkgPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRZIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRZKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUoZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgc3BsaXR0ZXIsIGRpcmVjdGlvbiwgZGlzcGxheSwgc3BsaXR0ZXJTaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJyA/IGAgdmVydGljYWxQYW5lYCA6ICcnfWApLFxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdHRlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzcGxpdHRlclN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zZXRTdGF0ZS50b3AgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9eyhwYW5lKSA9PiB7IHRoaXMuZG9tTm9kZSA9IHBhbmU7IH19XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAge3NwbGl0dGVyICE9PSAnbnVsbCcgPyA8U3BsaXR0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzcGxpdHRlclN0eWxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNwbGl0dGVyOiAnbnVsbCcsXG4gICAgc2l6ZTogMjUsXG4gICAgbWluU2l6ZTogMTUsXG4gICAgbWF4U2l6ZTogNTAsXG4gICAgc2l6ZVVuaXQ6ICclJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgc3BsaXR0ZXJTaXplOiAxMFxufTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwbGl0dGVyU2l6ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmQ6IHRoaXMucHJvcHMuZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZDogIXRoaXMuc3RhdGUuZXhwYW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpZCwgbGFiZWwsIHVybCwgY2hpbGRyZW4sIG9uVHJlZU5vZGVDbGljaywgYWN0aXZlSWR9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoYWN0aXZlSWQgPT09IGlkICYmICFjaGlsZHJlbikgPyB0aGlzLnByb3BzLmZvY3VzQ2xhc3MgOiAoZXhwYW5kID8gdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MgOiB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsID8gdXJsIDogJ2phdmFzY3JpcHQ6dm9pZCgwKSd9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuICYmIGV4cGFuZCA/IDx1bD57Y2hpbGRyZW4ubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXthY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXtvblRyZWVOb2RlQ2xpY2t9IHsuLi5jfSAvPil9PC91bD46ICcnfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRyZWVOb2RlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb2N1c0NsYXNzOiAnZm9jdXNlZCcsXG4gICAgZXhwYW5kb0V4cGFuZENsYXNzOiAnZXhwYW5kJyxcbiAgICBleHBhbmRvQ2xhc3M6ICdmb2xkJ1xufTtcblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXhwYW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb2N1c0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvY3VzQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZVZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAndHJlZVZpZXcnO1xuICAgIH1cbiAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7aWQsIGNoaWxkcmVufSA9IHRyZWVOb2RlLFxuICAgICAgICAgICAge29uVHJlZU5vZGVDbGlja30gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBvblRyZWVOb2RlQ2xpY2sodHJlZU5vZGUsIHN0YXRlKTtcblxuICAgICAgICAvLyBpZiBubyBzZWxlY3Rpb24gb3Igbm8gY2hpbGRyZW4sIGZvY3VzIHRhcmdldFxuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IHRoaXMucHJvcHMuYWN0aXZlSWQgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHVsPnt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17dGhpcy5vblRyZWVOb2RlQ2xpY2suYmluZCh0aGlzKX0gey4uLmN9IC8+KX08L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudFBhbmUgZnJvbSAnLi4vQ29udGVudFBhbmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3N3aXRjaCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gZGF0YS1hY3RpdmUtaWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZi5tYXAoYyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50UGFuZSBjbGFzc05hbWU9e2MuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWQgPyB0aGlzLnByb3BzLmFjdGl2ZUlkIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2MuY29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRQYW5lPilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZjogW11cbn07XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgZGVmOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWN0aXZlSWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNvbnRlbnRQYW5lYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvbnRlbnRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuLy8gRGlhbG9nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dNZW1vcnlWaWV3ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgd2luZG93TWVtb3J5Vmlld2VyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkphdmFzY3JpcHQgSGVhcCBTaXplIExpbWl0Ojwvc3Bhbj4gPHNwYW4+e2pzSGVhcFNpemVMaW1pdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ub3RhbCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt0b3RhbEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VXNlZCBKYXZhc2NyaXB0IEhlYXAgU2l6ZTo8L3NwYW4+IDxzcGFuPnt1c2VkSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQgPSB0aGlzLm9uQnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nID0gdGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2cxOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgY2xvc2VEaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHNob3VsZFNob3dPdmVybGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaWFsb2cxSXNPcGVuIHx8IHRoaXMuc3RhdGUuZGlhbG9nMklzT3BlbjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMVwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMVwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cyXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cyXCIgLz5cbiAgICAgICAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5kaWFsb2cxSXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzJJc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMlwiIHRpdGxlPVwiZGlhbG9nMlwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IHJlcG9zaXRpb25Pbk9wZW49e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgZHJhZ2dhYmxlLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBjbGFzcyBEaWFsb2dWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkaWFsb2dgO1xuICAgICAgICB0aGlzLmhlYWRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xuICAgICAgICB0aGlzLmJvZHlDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJvZHknKTtcbiAgICAgICAgdGhpcy5mb290ZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jb25maXJtJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UsIHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSh7fSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZChlKTtcblxuICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db25maXJtQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttb2QsIHRpdGxlLCBib2R5LCBjYW5jZWxMYWJlbCwgY29uZmlybUxhYmVsLCBjbG9zZUJ0bkxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9ID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmJvZHlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmZvb3RlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkfSB0ZXh0PXtjb25maXJtTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jb25maXJtQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpYWxvZ1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZDogJycsXG4gICAgdGl0bGU6ICdEaWFsb2cgVGl0bGUnLFxuICAgIGJvZHk6ICdBTlIxMDMyODI5IFRoaXMgaXMgYSBzYW1wbGUgbWVzc2FnZS4gRGRsZmt3ZXJvaXUgc2RmciBzZGZqZXJpdSBkZmVyZXJkZnNmLicsXG4gICAgaGVscExhYmVsOiAnSGVscCcsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvcGVuOiAoKSA9PiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgc3R5bGVPYmo6IHt9LFxufTtcblxuRGlhbG9nVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVscExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZUJ0bkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgRGlhbG9nID0gcG9wdXBhYmxlKGRyYWdnYWJsZShEaWFsb2dWaWV3LCAnaGVhZGVyQ2xhc3MnKSk7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4IiwiaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSc7XG5pbXBvcnQgcG9wdXBhYmxlIGZyb20gJy4vcG9wdXBhYmxlJ1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcidcblxuXG5leHBvcnQge2RyYWdnYWJsZSwgcG9wdXBhYmxlLCBQb3B1cE1hbmFnZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2VudGVyUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIGRyYWdnYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2dhYmxlKENvbXBvbmVudCwgY2xhc3NQcm9wZXJ0eSA9ICctMScpIHtcbiAgICBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KHByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd25IYW5kbGVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzUmVmKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5kb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyByZXBvc2l0aW9uT25PcGVuLCBpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuICYmIHJlcG9zaXRpb25Pbk9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtsZWZ0LCB0b3B9ID0gZ2V0Q2VudGVyUG9zaXRpb24od2luZG93LCB0aGlzLmRvbU5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50QmVpbmdNb3ZlZCA9IHRoaXMuZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZWN0ID0gQ29tcG9uZW50QmVpbmdNb3ZlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICAgIHtsYXN0TW91c2VYLCBsYXN0TW91c2VZfSA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbGVmdFRvTW91c2UgPSBjbGllbnRYIC0gbGFzdE1vdXNlWCxcbiAgICAgICAgICAgICAgICB0b3BUb01vdXNlID0gY2xpZW50WSAtIGxhc3RNb3VzZVksXG4gICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUubGVmdCArIGxlZnRUb01vdXNlKSxcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLnRvcCArIHRvcFRvTW91c2UpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3Qud2lkdGgsIGxlZnQpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQsIHRvcClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBjbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXNbY2xhc3NQcm9wZXJ0eV0pKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiB0cnVlLFxuICAgICAgICBzdHlsZU9iajoge31cbiAgICB9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gRHJhZ2dhYmxlQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcblxuLy8gcG9wdXBhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cGFibGUoQ29tcG9uZW50KSB7XG4gICAgbGV0IHpJbmRleCA9IHpJbmRleHNbQ29tcG9uZW50LnR5cGVdIHx8IDA7XG5cbiAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgQ29tcG9uZW50LnByb3BUeXBlcy5zdHlsZU9iaiAhPT0gJ3VuZGVmaW5lZCcsICdUaGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGFuIHN0eWxlT2JqIGFzIHByb3AnKTtcblxuICAgIGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdChwcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdChwcm9wcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlICYmIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmhhbmRsZSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3Qge2lzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIHpJbmRleDogdGhpcy5zdGF0ZS56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBzdHlsZU9iaj17c3R5bGVPYmp9IC8+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQb3B1cENvbXBvbmVudDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJ0lzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcblxuaW1wb3J0IHsgdG9nZ2xlRGlzYWJsZSB9IGZyb20gJy4vRm9ybXNBY3Rpb24nO1xuXG4vLyBEaWFsb2dzIHBhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1zIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgbmFtZUZpZWxkOiB7XG4gICAgICAgICAgICAgICAgZGlzYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwd2RGaWVsZDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaXNhYmxlTmFtZUZpZWxkKGUsIGJ1dHRvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpc2FibGUoJ25hbWVGaWVsZCcpLCAoKT0+e1xuICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQuZG9tTm9kZS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaXNhYmxlUHdkRmllbGQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlzYWJsZSgncHdkRmllbGQnKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9Pnt0aGlzLnB3ZEZpZWxkLmRvbU5vZGUuZm9jdXMoKX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiQnV0dG9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLnRvZ2dsZURpc2FibGVOYW1lRmllbGQuYmluZCh0aGlzKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVEaXNhYmxlUHdkRmllbGQuYmluZCh0aGlzKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgcmVmPXtuYW1lID0+IHRoaXMubmFtZUZpZWxkID0gbmFtZX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubmFtZUZpZWxkRGlzYWJsZWR9IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IHJlZj17bmFtZSA9PiB0aGlzLnB3ZEZpZWxkID0gbmFtZX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUucHdkRmllbGREaXNhYmxlZH0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInB3ZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+WW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGNvbnRhaW4gYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSwgb25lIGxvd2VyY2FzZSwgYW5kIG9uZSBudW1iZXIuPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRleHRJbnB1dGA7XG4gICAgfVxuXG4gICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcbiAgICAgICAgICAgIG9uQ2xpY2tlZChlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgdHlwZSwgZGlzYWJsZWQsIG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblRleHRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLm5hbWVcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpc2FibGUoaW5wdXROYW1lLCBkaXNhYmxlZCkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBkaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIGRpc2FibGVkU3RhdGUgPSAnRGlzYWJsZWQnO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tpbnB1dE5hbWUgKyBkaXNhYmxlZFN0YXRlXTogaGFzU3RhdGVTZXQgPyBkaXNhYmxlZCA6ICFzdGF0ZVtpbnB1dE5hbWUgKyBkaXNhYmxlZFN0YXRlXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRm9ybXMvRm9ybXNBY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9