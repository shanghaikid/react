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
        value: function setState(stateObj, then) {
            var keep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if ((0, _utils.isObj)(stateObj) && keep !== true) {
                stateObj = this.transformState(stateObj, '$', this.state);
            }

            _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this).call(this, stateObj, then);
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

            for (var _key2 in this.state) {
                if (_key2.startsWith('' + name + delmiter)) {
                    result[_key2.split('' + delmiter).splice(-1)] = this.state[_key2];
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
  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(22)();
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

var _draggable = __webpack_require__(33);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(34);

var _popupable2 = _interopRequireDefault(_popupable);

var _PopupManager = __webpack_require__(16);

var _PopupManager2 = _interopRequireDefault(_PopupManager);

var _validatable = __webpack_require__(35);

var _validatable2 = _interopRequireDefault(_validatable);

var _withTooltip = __webpack_require__(36);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _propTypes = __webpack_require__(2);

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
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextInputView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(10);

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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(31);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Forms = __webpack_require__(40);

var _Forms2 = _interopRequireDefault(_Forms);

var _Tooltips = __webpack_require__(43);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

var _Monitoring = __webpack_require__(44);

var _Monitoring2 = _interopRequireDefault(_Monitoring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navDef = [{ id: 'mon', label: 'Monitoring', url: '/#mon', component: _react2.default.createElement(_Monitoring2.default, null) }, { id: 'form', label: 'Form Elements', url: '/#form', component: _react2.default.createElement(_Forms2.default, null) }, { id: 'widgets', label: 'Widgets', expand: true, children: [{ id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: _react2.default.createElement(_Dialogs2.default, null) }, { id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: _react2.default.createElement(_Header2.default, { text: 'Wiard' }) }, { id: 'tooltips', label: 'Tooltips', url: '/#widgets/tooltips', component: _react2.default.createElement(_Tooltips2.default, null) }] }, { id: 'speical', label: 'Special', expand: true, children: [{ id: 'infinite', label: 'Infinite Scroll', url: '/#widgets/infiniteScroll', component: _react2.default.createElement(_Header2.default, { text: 'Infinite Scroll' }) }] }];

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

var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var warning = __webpack_require__(14);
var assign = __webpack_require__(20);

var ReactPropTypesSecret = __webpack_require__(12);
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
  var invariant = __webpack_require__(11);
  var warning = __webpack_require__(14);
  var ReactPropTypesSecret = __webpack_require__(12);
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



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var ReactPropTypesSecret = __webpack_require__(12);

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

var _Splitter = __webpack_require__(15);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(26);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(27);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _WindowMemoryViewer = __webpack_require__(29);

var _WindowMemoryViewer2 = _interopRequireDefault(_WindowMemoryViewer);

var _API = __webpack_require__(30);

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

var _Splitter = __webpack_require__(15);

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

var _ContentPane = __webpack_require__(28);

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

var _Dialog = __webpack_require__(32);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(38);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(39);

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
/* 32 */
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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _Button = __webpack_require__(7);

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
    close: function close() {}
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
/* 33 */
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
/* 34 */
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

var _Constants = __webpack_require__(6);

var _PopupManager = __webpack_require__(16);

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
                var newProps = {
                    styleObj: { zIndex: this.state.zIndex },
                    zIndex: this.state.zIndex
                };
                return React.createElement(Component, _extends({}, this.props, newProps, { ref: this.processRef.bind(this) }));
            }
        }]);

        return PopupComponent;
    }(Component);

    return PopupComponent;
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

exports.default = validatable;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _Constants = __webpack_require__(6);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = withTooltip;

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = __webpack_require__(37);

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

                this.displayValue = window.getComputedStyle(this.domNode, null).getPropertyValue('display');
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                this.wrapNode = ReactDOM.findDOMNode(this);
                // componentDidMount will be call multiple times if using in higher order way
                // so we need to avoid register multiple same dom nodes
                if (!register.has(this.wrapNode)) {
                    this.wrapNode.addEventListener('mouseenter', this);
                    this.wrapNode.addEventListener('mouseleave', this);
                    register.set(this.wrapNode);
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
                var rect = this.wrapNode.getBoundingClientRect(),
                    x = rect.x,
                    y = rect.y,
                    width = rect.width,
                    height = rect.height,
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
                x = x || rect.left + scrollLeft;
                y = y || rect.top + scrollTop;

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
                if (this.wrapNode) {
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
                var style = {
                    display: this.displayValue
                };

                return React.createElement(
                    'div',
                    { style: style },
                    React.createElement(Component, _extends({ ref: this.processRef }, this.props))
                );
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
/* 37 */
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

var _Constants = __webpack_require__(6);

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
/* 38 */
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

var _Constants = __webpack_require__(6);

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
/* 39 */
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
/* 40 */
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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(13);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Checkbox = __webpack_require__(41);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _Dropdown = __webpack_require__(42);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckboxView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

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
/* 42 */
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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent4 = __webpack_require__(1);

var _BaseComponent5 = _interopRequireDefault(_BaseComponent4);

var _TextInput = __webpack_require__(13);

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
/* 43 */
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

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(13);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(9);

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
/* 44 */
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

// Dialogs page
var Monitoring = function (_BaseComponent) {
    _inherits(Monitoring, _BaseComponent);

    function Monitoring() {
        _classCallCheck(this, Monitoring);

        return _possibleConstructorReturn(this, (Monitoring.__proto__ || Object.getPrototypeOf(Monitoring)).apply(this, arguments));
    }

    _createClass(Monitoring, [{
        key: 'init',
        value: function init() {
            var _this2 = this;

            this.state = {
                data: { time: Date.now(), value: 1 }
            };

            if (window.EventSource) {
                var source = new EventSource("//localhost:3000/seed");

                source.addEventListener('message', function (e) {
                    _this2.setState({
                        data: JSON.parse(e.data)
                    }, undefined, true);
                }, false);

                source.addEventListener('open', function (e) {
                    // Connection was opened.
                    console.log('it is opened !');
                }, false);

                source.addEventListener('error', function (e) {
                    _this2.setState({ data: { time: Date.now(), value: 'Something wrong, reconnecting.....' } });
                }, false);
            }
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
                new Date(this.state.data.time).toLocaleString(),
                ' : ',
                this.state.data.value
            );
        }
    }]);

    return Monitoring;
}(_BaseComponent3.default);

exports.default = Monitoring;

/***/ })
/******/ ]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTQ0MDQwYzkzMzA2ZjkwZDQ5ZjQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9BUEkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvVG9vbHRpcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Ryb3Bkb3duL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L01vbml0b3JpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImtleWRvd24iLCJjYXBpdGFsaXplIiwidHlwZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwibWV0aG9kIiwicHJvcHMiLCJyZWdpc3RyeSIsIkJhc2VDb21wb25lbnQiLCJuYW1lIiwiYXJncyIsImJpbmQiLCJwcm9jZXNzUmVmIiwibGliQ2xhc3NQcmVmaXgiLCJiYXNlQ2xhc3NOYW1lIiwiaW5pdCIsInJlZ2lzdGVyIiwicG9zdFJlZ2lzdGVyIiwiY29tcG9uZW50IiwiZG9tTm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudElkIiwidG9Mb3dlckNhc2UiLCJzdGF0ZU9iaiIsInRoZW4iLCJrZWVwIiwidHJhbnNmb3JtU3RhdGUiLCJzdGF0ZSIsImtleSIsImRlbG1pdGVyIiwicmVzdWx0IiwiZm91bmQiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJzcGxpY2UiLCJuYW1lcyIsInNvbWUiLCJpIiwiY29tcGFyZU9iaiIsImNscyIsImNsYXNzTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJpc09iaiIsImNsb25lIiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJnZXRDbHNOYW1lIiwiaXNFbXB0eSIsIm9iaiIsIk9iamVjdCIsInRvU3RyaW5nIiwiY2FsbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXRlT2JqZWN0IiwiX2YiLCJyb290IiwiZW50cmllcyIsInZhbHVlIiwidmFsdWVJc09iaiIsInIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJzIiwiam9pbiIsInRyaW0iLCJ0ZXN0IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJkcmFnZ2FibGUiLCJwb3B1cGFibGUiLCJQb3B1cE1hbmFnZXIiLCJ2YWxpZGF0YWJsZSIsIndpdGhUb29sdGlwIiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsIlRvb2x0aXAiLCJTdGF0ZXMiLCJOT1JNQUwiLCJXQVJOSU5HIiwiRVJST1IiLCJNSVNTSU5HIiwiQnV0dG9uVmlldyIsIm9uQ2xpY2tlZCIsInRleHQiLCJkaXNhYmxlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiQnV0dG9uIiwiSGVhZGVyIiwiZGVmYXVsdFR5cGVzIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJUZXh0SW5wdXRWaWV3IiwicGxhY2Vob2xkZXIiLCJpbnB1dFZhbHVlIiwiYXV0b2NvbXBsZXRlIiwiaW5wdXQiLCJvbkNoYW5nZSIsIlRleHRJbnB1dCIsIndhcm5pbmciLCJwcmludFdhcm5pbmciLCJfbGVuIiwiX2tleSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJ0eXBlcyIsImV2ZW50VHlwZSIsInN0YWNrIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwib2Zmc2V0SGVpZ2h0IiwiY2xvc2UiLCJoYW5kbGUiLCJpc09wZW4iLCJpc1BvcHVwIiwibmF2RGVmIiwiaWQiLCJsYWJlbCIsInVybCIsImV4cGFuZCIsInBhZ2VzRGVmIiwicmVzIiwibmF2IiwibiIsImZvckVhY2giLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJub2RlIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwia2V5cyIsImV2ZXJ5Iiwic3RlcCIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIkRhdGUiLCJQcm9wVHlwZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwidGVzdDMiLCJsZXR0ZXIiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ0byIsInN5bWJvbHMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic2hpbSIsImdldFNoaW0iLCJBcHAiLCJhY3RpdmVJZCIsImpzSGVhcFNpemVMaW1pdCIsInRvdGFsSlNIZWFwU2l6ZSIsInVzZWRKU0hlYXBTaXplIiwiaGFzaCIsIndpbmRvdyIsInNldEludGVydmFsIiwiZ2V0TWVtb3J5U3RhdCIsInNldFN0YXRlIiwiaW5pdFdTIiwiYWRkV1NMaXN0ZW5lciIsIndzU2VuZCIsImxvZyIsImRhdGEiLCJwZXJmb3JtYW5jZSIsIm1lbW9yeSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJvbk1vdXNlRG93biIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlyZWN0aW9uIiwiZGlzcGxheSIsInNwbGl0dGVyU2l6ZSIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInNwbGl0dGVyU3R5bGUiLCJ6SW5kZXgiLCJyaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJjbG9uZUVsZW1lbnQiLCJhY3RpdmUiLCJDb250ZW50UGFuZSIsIldpbmRvd01lbW9yeVZpZXdlciIsIndzQ29ubmVjdGVkIiwiZGF0YUlkIiwicmVxdWVzdHMiLCJNYXAiLCJBUEkiLCJ3cyIsIldlYlNvY2tldCIsIndzTGlzdGVuZXJzIiwid3NPUGVuUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXZlbnQiLCJyZXNvbHZlciIsImdldCIsIl9kaXNwYXRjaCIsImFsbCIsInNlbmQiLCJzZXQiLCJyZW1vdmVXU0xpc3RlbmVyIiwiZGVsZXRlIiwibGlzdGVuZXIiLCJvbkRhdGEiLCJEaWFsb2dzIiwib25CdXR0b25DbGlja2VkIiwiY2xvc2VEaWFsb2ciLCJvcGVuRGlhbG9nIiwiZGlhbG9nMSIsImRpYWxvZzIiLCJidXR0b24iLCJkaWFsb2ciLCJkaWFsb2cxJGlzT3BlbiIsImRpYWxvZzIkaXNPcGVuIiwiRGlhbG9nVmlldyIsImhlYWRlckNsYXNzIiwiZ2V0TGliUHJlZml4ZWRDbGFzcyIsImNsb3NlQnRuQ2xhc3MiLCJib2R5Q2xhc3MiLCJmb290ZXJDbGFzcyIsImNhbmNlbEJ0bkNsYXNzIiwiY29uZmlybUJ0bkNsYXNzIiwib25DYW5jZWxCdG5DbGlja2VkIiwib25Db25maXJtQnRuQ2xpY2tlZCIsIm9uQ2xvc2VCdG5DbGlja2VkIiwibmV4dFByb3BzIiwib3BlbiIsInJlcG9zaXRpb25Pbk9wZW4iLCJuZXh0T3BlbiIsIm5leHRDbG9zZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwibW9kIiwiYm9keSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xvc2VCdG5MYWJlbCIsImhlbHBMYWJlbCIsIkNvbXBvbmVudCIsImNsYXNzUHJvcGVydHkiLCJEcmFnZ2FibGVDb21wb25lbnQiLCJtb3VzZWRvd25IYW5kbGVyIiwicmVwb3NpdGlvbiIsInJlY3QiLCJDb21wb25lbnRCZWluZ01vdmVkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJsZWZ0VG9Nb3VzZSIsInRvcFRvTW91c2UiLCJtYXgiLCJtaW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlT2JqIiwicG9zaXRpb24iLCJQb3B1cENvbXBvbmVudCIsIm5ld1Byb3BzIiwiaW5pdFN0YXRlIiwiVmFsaWRhdGFibGVDb21wb25lbnQiLCJvbkJsdXIiLCJvbkZvY3VzIiwiX2hhc0JlZW5CbHVycmVkIiwibWVzc2FnZURlZiIsIm5leHREaXNhYmxlZCIsIm5leHRFbmFibGVkIiwidmFsdWVDaGFuZ2VkIiwidCIsInJlZ0V4cCIsInZhbGlkYXRvciIsInJlcXVpcmVkIiwib25WYWxpZGF0ZWQiLCJpc1ZhbHVlRW1wdHkiLCJub3RWYWxpZCIsImlzVmFsaWQiLCJnZXRNZXNzYWdlIiwib2siLCJ0b29sdGlwIiwiaW52YWxpZE1lc3NhZ2UiLCJtaXNzaW5nIiwibWlzc2luZ01lc3NhZ2UiLCJpbWNvbXBsZXRlIiwicHJvbXB0TWVzc2FnZSIsInRvb2x0aXBUaW1lb3V0IiwiV2Vha01hcCIsIkNvbXBvbmVudFdpdGhUb29sdGlwIiwib25Ub29sdGlwTW91c2VFbnRlciIsIm9uVG9vbHRpcE1vdXNlTGVhdmUiLCJ0b29sdGlwQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImJpbmRFdmVudHMiLCJkaXNwbGF5VmFsdWUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIndyYXBOb2RlIiwicmVtb3ZlQ2hpbGQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwidG9vbHRpcFBvc2l0aW9uIiwidG9vbHRpcFBvc2l0aW9ucyIsInRvb2x0aXBXaWR0aCIsInRvb2x0aXBIZWlnaHQiLCJwYWRkaW5nIiwicmVuZGVyVG9vbHRpcCIsImNsZWFyVG9vbHRpcCIsIl9vblRvb2x0aXAiLCJ0b29sdGlwQ2FuQmVFbnRlcmVkIiwiX3Rvb2x0aXBTaG93aW5nIiwicG9zIiwiZ2V0VG9vbHRpcFBvcyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIlRvb2xUaXAiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm9wYWNpdHkiLCJkZWZhdWx0U3R5bGUiLCJfX2h0bWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b2dnbGVEaWFsb2dPcGVuIiwiZGlhbG9nTmFtZSIsIm9wZW5TdGF0ZSIsImhhc1N0YXRlU2V0Iiwib3BlblN0YXRlTmFtZSIsInYiLCJuYW1lRmllbGQiLCJwd2RGaWVsZCIsImRyb3Bkb3duIiwiZGlzYWJsZUNoZWNrYm94IiwiY2hlY2tlZCIsImhpZGRlbiIsIkZvcm1zIiwiZHJvcGRvd25JdGVtIiwiZ2V0U3RhdGUiLCJyZXNldCIsImluZm8iLCJnZXRTdGF0ZXMiLCJpMSIsImkyIiwiaTMiLCJkcm9wZG93blByb3BzIiwidG9nZ2xlRmllbGREaXNhYmxlIiwicmVzZXRBbGwiLCJvbkRyb3Bkb3duQ2hhbmdlIiwiQ2hlY2tib3hWaWV3IiwiQ2hlY2tib3giLCJwbGFjZWhvbGRlckNsYXNzIiwib25JbnB1dENoYW5nZSIsImluaXRGaWx0ZXIiLCJzZWxlY3RlZElkIiwiaXRlbXMiLCJjdXJzb3IiLCJ0ZXh0SW5wdXQiLCJfY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyIiwiX2NsaWNrT3JGb2N1c0FueXdoZXJlIiwiaXRlbSIsImZpcnN0IiwiaW5kZXhPZkl0ZW0iLCJmaW5kSW5kZXgiLCJsYXN0IiwiY3Vyc29ySWQiLCJwcmV2IiwiZ2V0SXRlbSIsImRhdGFzZXQiLCJzZWxlY3RlZCIsImdldEZpbHRlciIsImNoYXJzIiwicmVnR3JwIiwic2VsZWN0ZWRJdGVtIiwiaW5wdXRQcm9wcyIsIm5ld0lucHV0UHJvcHMiLCJEcm9wZG93bkxpc3RWaWV3Iiwibm9JdGVtTWVzc2FnZSIsIm5ld0l0ZW1zIiwiaGFzSXRlbSIsIkRyb3Bkb3duTGlzdCIsIkRyb3Bkb3duSXRlbSIsImxvbmdUb29sdGlwIiwib25lTGluZVdpdGhJbmxpbmVNYXJrdXAiLCJUb29sdGlwcyIsIk1vbml0b3JpbmciLCJ0aW1lIiwibm93IiwiRXZlbnRTb3VyY2UiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsaUJBQVVBLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQW1DLFlBQVk7QUFDM0M7QUFDQSxRQUFJQyxNQUFNO0FBQ05DLGVBQU8sU0FERDtBQUVOQyxnQkFBUSxVQUZGO0FBR05DLG1CQUFXLGFBSEw7QUFJTkMsb0JBQVksY0FKTjtBQUtOQyxvQkFBWSxjQUxOO0FBTU5DLGtCQUFVLFlBTko7QUFPTkMsbUJBQVcsYUFQTDtBQVFOQyxpQkFBUyxXQVJIO0FBU05DLG1CQUFXLGFBVEw7QUFVTkMsZUFBTyxTQVZEO0FBV05DLGNBQU0sUUFYQTtBQVlOQyxpQkFBUztBQVpILEtBQVY7O0FBZUE7QUFDQSxhQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixlQUFPLE9BQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsRUFBUCxHQUFzQ0YsS0FBS0csS0FBTCxDQUFXLENBQVgsQ0FBN0M7QUFDSDs7QUFFRDtBQUNBLFdBQU8sU0FBU2xCLFdBQVQsQ0FBcUJt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TXZTLEtBQUtDLEtBQUwsQ0FBVzlELEVBQUVvVyxJQUFiO0FBREkscUJBQWQsRUFFR3pMLFNBRkgsRUFFYyxJQUZkO0FBR0gsaUJBSkQsRUFJRyxLQUpIOztBQU1BZ0ssdUJBQU96SCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxhQUFLO0FBQ25DO0FBQ0FkLDRCQUFRK0osR0FBUixDQUFZLGdCQUFaO0FBQ0QsaUJBSEQsRUFHRyxLQUhIOztBQUtBeEIsdUJBQU96SCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ2xDLDJCQUFLNkksUUFBTCxDQUFjLEVBQUNLLE1BQU0sRUFBQzRQLE1BQU14UyxLQUFLeVMsR0FBTCxFQUFQLEVBQW1CN2hCLE9BQU8sb0NBQTFCLEVBQVAsRUFBZDtBQUNILGlCQUZELEVBRUcsS0FGSDtBQUdIO0FBQ0o7OztpQ0FFUTtBQUNMLGdCQUFNMlQsUUFBTztBQUNUdFQsdUJBQU8sTUFERTtBQUVUQyx3QkFBUTtBQUZDLGFBQWI7O0FBS0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLE9BQU9xVCxLQUFaO0FBQ0ssb0JBQUl2RSxJQUFKLENBQVMsS0FBSy9SLEtBQUwsQ0FBVzJVLElBQVgsQ0FBZ0I0UCxJQUF6QixFQUErQkcsY0FBL0IsRUFETDtBQUFBO0FBQ3lELHFCQUFLMWtCLEtBQUwsQ0FBVzJVLElBQVgsQ0FBZ0JoUztBQUR6RSxhQURKO0FBS0g7Ozs7OztrQkFyQ2dCMmhCLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTQ0MDQwYzkzMzA2ZjkwZDQ5ZjQiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpc09iaiwgZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBhbGwgY29tcG9uZW50cyBzaGFyZSBvbmUgZXZlbnQgaGFuZGxlclxuQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWxsIGtub3duIFJlYWN0LkNvbXBvbmVudCBldmVudHNcbiAgICB2YXIgbWFwID0ge1xuICAgICAgICBjbGljazogJ29uQ2xpY2snLFxuICAgICAgICBjaGFuZ2U6ICdvbkNoYW5nZScsXG4gICAgICAgIG1vdXNlb3ZlcjogJ29uTW91c2VPdmVyJyxcbiAgICAgICAgbW91c2VlbnRlcjogJ29uTW91c2VFbnRlcicsXG4gICAgICAgIG1vdXNlbGVhdmU6ICdvbk1vdXNlTGVhdmUnLFxuICAgICAgICBtb3VzZW91dDogJ29uTW91c2VPdXQnLFxuICAgICAgICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gICAgICAgIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxuICAgICAgICBtb3VzZW1vdmU6ICdvbk1vdXNlTW92ZScsXG4gICAgICAgIGZvY3VzOiAnb25Gb2N1cycsXG4gICAgICAgIGJsdXI6ICdvbkJsdXInLFxuICAgICAgICBrZXlkb3duOiAnb25LZXlEb3duJ1xuICAgIH07XG5cbiAgICAvLyBmYWxsYmFjayBoZWxwZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvLyBvbmUgaGFuZGxlRXZlbnQgdG8gcnVsZSB0aGVtIGFsbFxuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBtYXBbZS50eXBlXSB8fCBjYXBpdGFsaXplKGUudHlwZSk7XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgaW4gdGhpcykgdGhpc1ttZXRob2RdKGUsIHRoaXMpO1xuICAgIH07XG59KCkpO1xuXG4vLyB1c2UgZm9yIGNvbXBvbmVudElkXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSB0byBzYXZlIG1lbW9yeVxuICAgICAgICB0aGlzLmhhbmRsZUV2ZW50ID0gdGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2Nlc3NSZWYgPSB0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saWJDbGFzc1ByZWZpeCA9ICdlJztcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnBvc3RSZWdpc3RlciguLi5hcmdzKTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7fVxuICAgIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG4gICAgLy8gZm9yY2VVcGRhdGUoKSB7fVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7dGhpcy5iYXNlQ2xhc3NOYW1lfSR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnfWA7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1JlZihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBoYXZlIHJlZ2lzdGVyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcbiAgICAgICAgLy8gYWRkIG9uZVxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdICsgMTtcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpICsgcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGVPYmosIHRoZW4sIGtlZXAgPSBmYWxzZSkge1xuICAgICAgICBpZiAoaXNPYmooc3RhdGVPYmopICYmIGtlZXAgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlT2JqID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaiwgJyQnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKHN0YXRlT2JqLCB0aGVuKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgc3RhdGUgYnkgbmFtZVxuICAgIC8vIGlmIGtleSBpcyBwcm92aWRlZCwgcmV0dXJuIHNwZWNpZmllZCB2YWx1ZVxuICAgIC8vIGlmIGtleSBpcyBpZ25vcmVkLCByZXR1cm4gd2hvbGUgc3RhdGUgb2JqZWN0XG4gICAgZ2V0U3RhdGUobmFtZSwga2V5LCBkZWxtaXRlciA9ICckJykge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW25hbWUgKyBkZWxtaXRlciArIGtleV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0ge30sXG4gICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX0ke2RlbG1pdGVyfWApKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleS5zcGxpdChgJHtkZWxtaXRlcn1gKS5zcGxpY2UoLTEpXSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQgPyByZXN1bHQgOiB0aGlzLnN0YXRlW25hbWVdO1xuICAgIH1cblxuICAgIC8vIGdldCBtdWxpdHBsZSBjaGlsZHJlbiBzdGF0ZVxuICAgIGdldFN0YXRlcyhuYW1lcyA9IFtdLCBkZWxtaXRlcj0gJyQnKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgbmFtZXMuc29tZSgobmFtZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV1ba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtU3RhdGUoc3RhdGVPYmosIGNvbXBhcmVPYmopIHtcbiAgICAgICAgcmV0dXJuIGUoc3RhdGVPYmosICckJywgY29tcGFyZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLy8gaXNPYmo6IGNoZWNrIGlmIHRoZSBnaXZlbiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZTogc2ltcGxlIGNsb25lIHRoZSBnaXZlbiBvYmplY3Rcbi8vIG5vdCBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBjaXJjdWxhciByZWZlcmVuY2VcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWQtbGF5b3V0LW1lbnUtZXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0LCBkZWxtaXRlciA9ICckJywgY29tcGFyZU9iaiA9IG51bGwpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG4gICAgICAgICAgICBpZiAodmFsdWVJc09iaiAmJiBjb21wYXJlT2JqICE9PSBudWxsICYmIHR5cGVvZiBjb21wYXJlT2JqW3JdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZUlzT2JqID8gX2YodmFsdWUsIHIsIHJlc3VsdCkgOiByZXN1bHRbcl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBfZihzdGF0ZU9iamVjdCwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyUG9zaXRpb24oe2lubmVyV2lkdGggPSAxMDAwLCBpbm5lckhlaWdodD04MDB9LCB7d2lkdGggPSA0MDAsIGhlaWdodCA9IDQwMH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICB9XG59XG5cbi8vIGdldENsc05hbWU6IGNvbmNhdGUgYXJ1bWVudHMgd2l0aCBzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5maWx0ZXIocyA9PiBzICE9PScnICYmIHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJykuam9pbignICcpO1xufVxuXG4vLyBpc0VtcHR5OiBjaGVjayBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSwgdHJpbT10cnVlKSB7XG4gICAgcmV0dXJuICh0cmltID8gL15cXHMqJC8gOiAvXiQvKS50ZXN0KHZhbHVlKTsgLy8gQm9vbGVhblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJztcbmltcG9ydCBwb3B1cGFibGUgZnJvbSAnLi9wb3B1cGFibGUnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgdmFsaWRhdGFibGUgZnJvbSAnLi92YWxpZGF0YWJsZSc7XG5pbXBvcnQgd2l0aFRvb2x0aXAgZnJvbSAnLi93aXRoVG9vbHRpcCc7XG5cblxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZSwgUG9wdXBNYW5hZ2VyLCB2YWxpZGF0YWJsZSwgd2l0aFRvb2x0aXB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJleHBvcnQgY29uc3QgekluZGV4cyA9IHtcbiAgICBEaWFsb2c6IDMwMDAsXG4gICAgT3ZlcmxheTogMjAwMCxcbiAgICBEcm9wZG93bjogMTAwMCxcbiAgICBUb29sdGlwOiAxMDAwMFxufVxuXG5leHBvcnQgY29uc3QgU3RhdGVzID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgV0FSTklORzrjgIAnd2FybmluZycsXG4gICAgRVJST1I6ICdlcnJvcicsXG4gICAgTUlTU0lORzogJ21pc3NpbmcnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CdXR0b25WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRleHQ6ICdCdXR0b24nLFxyXG4gICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbkJ1dHRvblZpZXcucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHdpdGhUb29sdGlwKEJ1dHRvblZpZXcpO1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGhlYWRlcmA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8aDEgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e3RoaXMucHJvcHMudGV4dH08L2gxPik7XG4gICAgfVxufVxuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICcnXG59O1xuXG5IZWFkZXIuZGVmYXVsdFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGFibGUgLCB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dElucHV0VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0ZXh0SW5wdXRgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgdHlwZSwgZGlzYWJsZWQsIG5hbWUsIHN0YXRlLCBpbnB1dFZhbHVlLCBhdXRvY29tcGxldGV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIHN0YXRlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGF1dG9jb21wbGV0ZTogJ29uJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLm5hbWUsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgVGV4dElucHV0ID0gdmFsaWRhdGFibGUod2l0aFRvb2x0aXAoVGV4dElucHV0VmlldykpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdHRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHNwbGl0dGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgaXNWZXJ0aWNhbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgYCR7aXNWZXJ0aWNhbCA/IGAgdmVydGljYWxgIDogJyBob3Jpem9udGFsJ31gKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc30+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGxpdHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNWZXJ0aWNhbDogdHJ1ZVxufTtcblxuU3BsaXR0ZXIucHJvcFR5cGVzID0ge1xuICAgIGlzVmVydGljYWw6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJjb25zdCBQb3B1cE1hbmFnZXIgPSB7XG4gICAgdHlwZXM6IFsnRGlhbG9nJ10sXG4gICAgZXZlbnRUeXBlOiAna2V5ZG93bicsXG4gICAgc3RhY2s6IFtdLFxuICAgIGV2ZW50SGFuZGxlcjogbnVsbCxcbiAgICBhZGQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IDAgJiYgIXRoaXMuZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudFR5cGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0YWNrLmZpbHRlcihzYXZlZENvbXBvbmVudCA9PiBzYXZlZENvbXBvbmVudCAhPT0gY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudFR5cGUsIHRoaXMpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYXMoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmluY2x1ZGVzKGNvbXBvbmVudCk7XG4gICAgfSxcbiAgICBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZG9tTm9kZSAmJiBjb21wb25lbnQuZG9tTm9kZS5vZmZzZXRIZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gZGVjb3VwbGVcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucHJvcHMuY2xvc2Uoe30sIGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZShjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgIGlzT3BlbiA9IGNvbXBvbmVudC5wcm9wcy5pc09wZW47XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhcyhjb21wb25lbnQpICYmIGlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhcyhjb21wb25lbnQpICYmIGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIGEgcG9wdXAgbXVzdCBpbXBsZW1lbnQgY2xvc2UgYW5kIG9wZW5cbiAgICBpc1BvcHVwKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlcy5pbmNsdWRlcyhjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9Qb3B1cE1hbmFnZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvQXBwJztcclxuaW1wb3J0IERpYWxvZ3MgZnJvbSAnLi9EaWFsb2dzJztcclxuaW1wb3J0IEZvcm1zIGZyb20gJy4vRm9ybXMnO1xyXG5pbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi9Ub29sdGlwcyc7XHJcbmltcG9ydCBNb25pdG9yaW5nIGZyb20gJy4vTW9uaXRvcmluZyc7XHJcblxyXG5cclxuY29uc3QgbmF2RGVmID0gW1xyXG4gICAge2lkOiAnbW9uJywgbGFiZWw6ICdNb25pdG9yaW5nJywgdXJsOiAnLyNtb24nLCBjb21wb25lbnQ6IDxNb25pdG9yaW5nIC8+fSxcclxuICAgIHtpZDogJ2Zvcm0nLCBsYWJlbDogJ0Zvcm0gRWxlbWVudHMnLCB1cmw6ICcvI2Zvcm0nLCBjb21wb25lbnQ6IDxGb3JtcyAvPn0sXHJcbiAgICB7aWQ6ICd3aWRnZXRzJywgbGFiZWw6ICdXaWRnZXRzJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtpZDogJ2RpYWxvZ3MnLCBsYWJlbDogJ0RpYWxvZ3MnLCB1cmw6ICcvI3dpZGdldHMvZGlhbG9ncycsIGNvbXBvbmVudDogPERpYWxvZ3MgLz59LFxyXG4gICAgICAgIHtpZDogJ3dpemFyZCcsIGxhYmVsOiAnV2l6YXJkJywgdXJsOiAnLyN3aWRnZXRzL3dpemFyZCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiV2lhcmRcIiAvPn0sXHJcbiAgICAgICAge2lkOiAndG9vbHRpcHMnLCBsYWJlbDogJ1Rvb2x0aXBzJywgdXJsOiAnLyN3aWRnZXRzL3Rvb2x0aXBzJywgY29tcG9uZW50OiA8VG9vbHRpcHMgLz59LFxyXG4gICAgXX0sXHJcbiAgICB7aWQ6ICdzcGVpY2FsJywgbGFiZWw6ICdTcGVjaWFsJywgZXhwYW5kOiB0cnVlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtpZDogJ2luZmluaXRlJywgbGFiZWw6ICdJbmZpbml0ZSBTY3JvbGwnLCB1cmw6ICcvI3dpZGdldHMvaW5maW5pdGVTY3JvbGwnLCBjb21wb25lbnQ6IDxIZWFkZXIgdGV4dD1cIkluZmluaXRlIFNjcm9sbFwiIC8+fVxyXG4gICAgXX1cclxuXTtcclxuXHJcbmNvbnN0IHBhZ2VzRGVmID0gKG5hdiA9PiB7XHJcbiAgICBsZXQgcmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBuID0gbmF2W2ldO1xyXG4gICAgICAgIGlmIChuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5hdi5wdXNoKG4pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMucHVzaChuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59KShBcnJheS5mcm9tKG5hdkRlZikpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgbmFtZT1cIk9LXCIgbmF2PXtuYXZEZWZ9IHBhZ2VzPXtwYWdlc0RlZn0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5pbXBvcnQgQVBJIGZyb20gJy4vQVBJJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG5cbiAgICAgICAgQVBJLmluaXRXUygpO1xuXG4gICAgICAgIEFQSS5hZGRXU0xpc3RlbmVyKHRoaXMpO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXInKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIyJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIzJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXI0JykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRhdGEoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRNZW1vcnlTdGF0KCkge1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAganNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVHJlZU5vZGVDbGljayhub2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJZDogbm9kZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cImxlZnRQYW5lXCIgc3BsaXR0ZXI9XCJ2ZXJ0aWNhbFwiIHNpemU9ezIwMH0gbWluU2l6ZT17MjAwfSBtYXhTaXplPXs1MDB9IHNpemVVbml0PVwicHhcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmVlVmlldyBkZWY9e3RoaXMucHJvcHMubmF2fSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHNwbGl0dGVyPVwiaG9yaXpvbnRhbFwiIHNpemU9ezc1fSBtYXhTaXplPXs4MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGRlZj17dGhpcy5wcm9wcy5wYWdlc30gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93TWVtb3J5Vmlld2VyIGpzSGVhcFNpemVMaW1pdD17dGhpcy5zdGF0ZS5qc0hlYXBTaXplTGltaXR9IHRvdGFsSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS50b3RhbEpTSGVhcFNpemV9IHVzZWRKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnVzZWRKU0hlYXBTaXplfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPC9Cb3JkZXJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BcHAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JkZXJDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYm9yZGVyQ29udGFpbmVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb3JkZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJydcbn07XG5cbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcnNpc3Q6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8vIFRPRE86IGtleWJvYXJkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgcGFuZWA7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7c3BsaXR0ZXIsIHNpemUsIHNpemVVbml0LCBtYXhTaXplLCBtaW5TaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7b2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodH0gPSB0aGlzLmRvbU5vZGUucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdudWxsJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvcDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VVcChlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAge21heFNpemUsIG1pblNpemV9ID0gdGhpcyxcbiAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFggPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRYIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRYKSxcbiAgICAgICAgICAgICAgdG9wID0gY2xpZW50WSA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFkgPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZShlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBzcGxpdHRlciwgZGlyZWN0aW9uLCBkaXNwbGF5LCBzcGxpdHRlclNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke3NwbGl0dGVyID09PSAndmVydGljYWwnID8gYCB2ZXJ0aWNhbFBhbmVgIDogJyd9YCksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwbGl0dGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IHNwbGl0dGVyID09PSAndmVydGljYWwnO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0IC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmxlZnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnNldFN0YXRlLnRvcCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHBhbmUpID0+IHsgdGhpcy5kb21Ob2RlID0gcGFuZTsgfX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7c3BsaXR0ZXIgIT09ICdudWxsJyA/IDxTcGxpdHRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9IC8+IDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3BsaXR0ZXI6ICdudWxsJyxcbiAgICBzaXplOiAyNSxcbiAgICBtaW5TaXplOiAxNSxcbiAgICBtYXhTaXplOiA1MCxcbiAgICBzaXplVW5pdDogJyUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBzcGxpdHRlclNpemU6IDEwXG59O1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXJTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZDogdGhpcy5wcm9wcy5leHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kOiAhdGhpcy5zdGF0ZS5leHBhbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lkLCBsYWJlbCwgdXJsLCBjaGlsZHJlbiwgb25UcmVlTm9kZUNsaWNrLCBhY3RpdmVJZH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZXhwYW5kID0gdGhpcy5zdGF0ZS5leHBhbmQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhhY3RpdmVJZCA9PT0gaWQgJiYgIWNoaWxkcmVuKSA/IHRoaXMucHJvcHMuZm9jdXNDbGFzcyA6IChleHBhbmQgPyB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyA6IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyB1cmwgOiAnamF2YXNjcmlwdDp2b2lkKDApJ30+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgZXhwYW5kID8gPHVsPntjaGlsZHJlbi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e2FjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e29uVHJlZU5vZGVDbGlja30gey4uLmN9IC8+KX08L3VsPjogJyd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVHJlZU5vZGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGZvY3VzQ2xhc3M6ICdmb2N1c2VkJyxcbiAgICBleHBhbmRvRXhwYW5kQ2xhc3M6ICdleHBhbmQnLFxuICAgIGV4cGFuZG9DbGFzczogJ2ZvbGQnXG59O1xuXG5UcmVlTm9kZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9jdXNDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICd0cmVlVmlldyc7XG4gICAgfVxuICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtpZCwgY2hpbGRyZW59ID0gdHJlZU5vZGUsXG4gICAgICAgICAgICB7b25UcmVlTm9kZUNsaWNrfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpO1xuXG4gICAgICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBvciBubyBjaGlsZHJlbiwgZm9jdXMgdGFyZ2V0XG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJZDogaWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMuZGVmLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVHJlZVZpZXcucHJvcFR5cGVzID0ge1xuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBDb250ZW50UGFuZSBmcm9tICcuLi9Db250ZW50UGFuZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnc3dpdGNoJztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBkYXRhLWFjdGl2ZS1pZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVmLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRQYW5lIGNsYXNzTmFtZT17Yy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZCA/IHRoaXMucHJvcHMuYWN0aXZlSWQgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGMuY29tcG9uZW50LCB7YWN0aXZlOiBjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFBhbmU+KVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmOiBbXVxufTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBkZWY6IFByb3BUeXBlcy5hcnJheSxcbiAgICBhY3RpdmVJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY29udGVudFBhbmVgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ29udGVudFBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd01lbW9yeVZpZXdlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB3aW5kb3dNZW1vcnlWaWV3ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SmF2YXNjcmlwdCBIZWFwIFNpemUgTGltaXQ6PC9zcGFuPiA8c3Bhbj57anNIZWFwU2l6ZUxpbWl0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlRvdGFsIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3RvdGFsSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Vc2VkIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3VzZWRKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsImxldCB3c0Nvbm5lY3RlZCA9IGZhbHNlLFxuICAgIGRhdGFJZCA9IDAsXG4gICAgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IEFQSSA9IHtcbiAgICBpbml0V1MoKSB7XG4gICAgICAgIGlmICghd3NDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgxJyk7XG4gICAgICAgICAgICB0aGlzLndzTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgICAgICB0aGlzLndzT1BlblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RzLmhhcyhkYXRhLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZXIgPSByZXF1ZXN0cy5nZXQoZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaFxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3c1NlbmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZXIgPT4ge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3RoaXMud3NPUGVuUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGRhdGFJZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMud3Muc2VuZChKU09OLnN0cmluZ2lmeSh7aWQsIGRhdGF9KSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMuc2V0KGlkLCByZXNvbHZlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFkZFdTTGlzdGVuZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuc2V0KGNvbXBvbmVudC5pZCwgY29tcG9uZW50KTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlV1NMaXN0ZW5lcihpZCkge1xuICAgICAgICB0aGlzLndzTGlzdGVuZXJzLmRlbGV0ZShpZCk7XG4gICAgfSxcblxuICAgIF9kaXNwYXRjaChldmVudCkge1xuICAgICAgICB0aGlzLndzTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIub25EYXRhICYmIGxpc3RlbmVyLm9uRGF0YShldmVudC5kYXRhLCBldmVudCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQVBJL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcblxuaW1wb3J0IHsgdG9nZ2xlRGlhbG9nT3BlbiB9IGZyb20gJy4vRGlhbG9nc0FjdGlvbic7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgY2xvc2VEaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHNob3VsZFNob3dPdmVybGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaWFsb2cxJGlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVuO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cxXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cxXCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzJcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzJcIiAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gRGlhbG9nXG5leHBvcnQgY2xhc3MgRGlhbG9nVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEaWFsb2cnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZGlhbG9nYDtcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2xvc2UnKTtcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1ib2R5Jyk7XG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZCA9IHRoaXMub25DYW5jZWxCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQnRuQ2xpY2tlZCA9IHRoaXMub25Db25maXJtQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UsIHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSh7fSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZChlKTtcblxuICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db25maXJtQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttb2QsIHRpdGxlLCBib2R5LCBjYW5jZWxMYWJlbCwgY29uZmlybUxhYmVsLCBjbG9zZUJ0bkxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9ID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmJvZHlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmZvb3RlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkfSB0ZXh0PXtjb25maXJtTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jb25maXJtQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpYWxvZ1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZDogJycsXG4gICAgdGl0bGU6ICdEaWFsb2cgVGl0bGUnLFxuICAgIGJvZHk6ICdBTlIxMDMyODI5IFRoaXMgaXMgYSBzYW1wbGUgbWVzc2FnZS4gRGRsZmt3ZXJvaXUgc2RmciBzZGZqZXJpdSBkZmVyZXJkZnNmLicsXG4gICAgaGVscExhYmVsOiAnSGVscCcsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvcGVuOiAoKSA9PiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge31cbn07XG5cbkRpYWxvZ1ZpZXcucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2VCdG5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmNvbnN0IERpYWxvZyA9IHBvcHVwYWJsZShkcmFnZ2FibGUoRGlhbG9nVmlldywgJ2hlYWRlckNsYXNzJykpO1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDZW50ZXJQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnZ2FibGUoQ29tcG9uZW50LCBjbGFzc1Byb3BlcnR5KSB7XG4gICAgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duSGFuZGxlciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7IHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4gJiYgcmVwb3NpdGlvbk9uT3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQge2xlZnQsIHRvcH0gPSBnZXRDZW50ZXJQb3NpdGlvbih3aW5kb3csIHRoaXMuZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnRCZWluZ01vdmVkID0gdGhpcy5kb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlY3QgPSBDb21wb25lbnRCZWluZ01vdmVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgICAge2xhc3RNb3VzZVgsIGxhc3RNb3VzZVl9ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBsZWZ0VG9Nb3VzZSA9IGNsaWVudFggLSBsYXN0TW91c2VYLFxuICAgICAgICAgICAgICAgIHRvcFRvTW91c2UgPSBjbGllbnRZIC0gbGFzdE1vdXNlWSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS5sZWZ0ICsgbGVmdFRvTW91c2UpLFxuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUudG9wICsgdG9wVG9Nb3VzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCwgbGVmdCksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCwgdG9wKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBjbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzUHJvcGVydHkgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzW2NsYXNzUHJvcGVydHldKSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogdHJ1ZSxcbiAgICAgICAgc3R5bGVPYmo6IHt9XG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzdHlsZU9iajogUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIERyYWdnYWJsZUNvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9kcmFnZ2FibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5cbi8vIHBvcHVwYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdXBhYmxlKENvbXBvbmVudCkge1xuICAgIGxldCB6SW5kZXggPSB6SW5kZXhzW0NvbXBvbmVudC50eXBlXSB8fCAwO1xuXG4gICAgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuaGFuZGxlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmogOiB7ekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleH0sXG4gICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gey4uLm5ld1Byb3BzfSByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfSAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUG9wdXBDb21wb25lbnQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFN0YXRlcyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWUgJiYgZGlzYWJsZWQgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRFbmFibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSBmYWxzZSAmJiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5leHREaXNhYmxlZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0JlZW5CbHVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUobmV4dFByb3BzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1cihlKSB7XG4gICAgICAgICAgICAvLyBzZXQgYmx1ciBmbGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkZvY3VzKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpc1ZhbGlkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVnRXhwLCB2YWxpZGF0b3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCFyZWdFeHAgJiYgIXZhbGlkYXRvcikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiByZWdFeHAgJiYgcmVnRXhwLnRlc3QodmFsdWUpIHx8IHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVpcmVkLCBvblZhbGlkYXRlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRW1wdHkgPSBpc0VtcHR5KGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG5vdFZhbGlkID0gIXRoaXMuaXNWYWxpZChpbnB1dFZhbHVlKSxcbiAgICAgICAgICAgICAgICBtb2QgPSAoaXNWYWx1ZUVtcHR5ICYmIHJlcXVpcmVkKSA/IFN0YXRlcy5NSVNTSU5HIDogbm90VmFsaWQgPyBTdGF0ZXMuRVJST1IgOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRNZXNzYWdlKG1vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2QsIG1lc3NhZ2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uVmFsaWRhdGVkICYmIG9uVmFsaWRhdGVkKHttb2QsIG1lc3NhZ2UsIG9rOiBtb2QgPT09ICcnfSwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLm1vZCxcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL1dpZGdldHMvVG9vbHRpcCc7XHJcblxyXG4vLyBzaGFyZWQgdG9vbHRpcCBzdGF0ZVxyXG5sZXQgdG9vbHRpcFRpbWVvdXQgPSBudWxsLFxyXG4gICAgcmVnaXN0ZXIgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLy8gd2l0aFRvb2x0aXBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRvb2x0aXAoQ29tcG9uZW50KSB7XHJcbiAgICBjbGFzcyBDb21wb25lbnRXaXRoVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyID0gdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZSA9IHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0b29sdGlwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcigndG9vbHRpcCcpO1xyXG4gICAgICAgICAgICAvLyBpZiBub3QgZXhpc3QsIGNyZWF0ZSBvbmNlXHJcbiAgICAgICAgICAgIGlmICghdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rvb2x0aXAnKTtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rvb2x0aXAnO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0byBjb21wb25lbnQgbG9jYWwgcHJvcFxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSB0b29sdGlwQ29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21Ob2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXBOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZE1vdW50IHdpbGwgYmUgY2FsbCBtdWx0aXBsZSB0aW1lcyBpZiB1c2luZyBpbiBoaWdoZXIgb3JkZXIgd2F5XHJcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXZvaWQgcmVnaXN0ZXIgbXVsdGlwbGUgc2FtZSBkb20gbm9kZXNcclxuICAgICAgICAgICAgaWYgKCFyZWdpc3Rlci5oYXModGhpcy53cmFwTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JhcE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlci5zZXQodGhpcy53cmFwTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUb29sdGlwUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjdCA9IHRoaXMud3JhcE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSByZWN0LFxyXG4gICAgICAgICAgICAgICAge3Njcm9sbFRvcCwgc2Nyb2xsTGVmdH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB7dG9vbHRpcFBvc2l0aW9uLCB0b29sdGlwUG9zaXRpb25zLCBtaW5XaWR0aDp0b29sdGlwV2lkdGgsIG1pbkhlaWdodDp0b29sdGlwSGVpZ2h0LCBwYWRkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IC05OTk5LFxyXG4gICAgICAgICAgICAgICAgdG9wID0gLTk5OTk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb3JyZWN0IHRoZSBzY3JvbGxpbmcgdmFsdWVcclxuICAgICAgICAgICAgeCA9IHggfHwgcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgeSA9IHkgfHwgcmVjdC50b3AgKyBzY3JvbGxUb3A7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godG9vbHRpcFBvc2l0aW9uc1t0b29sdGlwUG9zaXRpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhZnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlZm9yZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggLSB0b29sdGlwV2lkdGggLSBwYWRkaW5nICogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Fib3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5IC0gdG9vbHRpcEhlaWdodCAtIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93JzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93LWNlbnRlcmVkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyAoKHdpZHRoIC0gdG9vbHRpcFdpZHRoIC0gcGFkZGluZyAqIDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdhYm92ZS1jZW50ZXJlZCc6IFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4ICsgKCh3aWR0aCAtIHRvb2x0aXBXaWR0aCAtIHBhZGRpbmcgKiAyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgLSB0b29sdGlwSGVpZ2h0IC0gcGFkZGluZyAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7bGVmdCwgdG9wfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRvb2x0aXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uVG9vbHRpcE1vdXNlRW50ZXIoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXBDYW5CZUVudGVyZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblRvb2x0aXBNb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSBmYWxzZTtcclxuICAgICAgICAgICB0aGlzLmNsZWFyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUb29sdGlwKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29uVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHRvb2x0aXA9XCJcIiAvPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMudG9vbHRpcENhbkJlRW50ZXJlZCA/IDMwMDogMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b29sdGlwU2hvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0b29sdGlwVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlclRvb2x0aXAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldFRvb2x0aXBQb3MoKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdGhpcy5wcm9wcy50b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5wcm9wcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uVG9vbHRpcE1vdXNlRW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vblRvb2x0aXBNb3VzZUxlYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdQcm9wc30gey4uLnBvc30vPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBTaG93aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdG9vbHRpcFNob3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5kaXNwbGF5VmFsdWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+PENvbXBvbmVudCByZWY9e3RoaXMucHJvY2Vzc1JlZn0gIHsuLi50aGlzLnByb3BzfSAvPjwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29tcG9uZW50V2l0aFRvb2x0aXAuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczoge1xyXG4gICAgICAgICAgICAnYWZ0ZXInOiAnYWZ0ZXInLFxyXG4gICAgICAgICAgICAnYmVmb3JlJzogJ2JlZm9yZScsXHJcbiAgICAgICAgICAgICdhYm92ZSc6ICdhYm92ZScsXHJcbiAgICAgICAgICAgICdiZWxvdyc6ICdiZWxvdycsXHJcbiAgICAgICAgICAgICdiZWxvdy1jZW50ZXJlZCc6ICdiZWxvdy1jZW50ZXJlZCcsXHJcbiAgICAgICAgICAgICdhYm92ZS1jZW50ZXJlZCc6ICdhYm92ZS1jZW50ZXJlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBDYW5CZUVudGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogJ2FmdGVyJyxcclxuICAgICAgICBzdGF0ZTogJ25vcm1hbCdcclxuICAgIH0sIFRvb2x0aXAuZGVmYXVsdFByb3BzLCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcclxuXHJcbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICB0b29sdGlwUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICB0b29sdGlwQ2FuQmVFbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0sIFRvb2x0aXAucHJvcFR5cGVzKTtcclxuXHJcbiAgICByZXR1cm4gQ29tcG9uZW50V2l0aFRvb2x0aXA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xUaXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRvb2x0aXBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNPcGVuLCB0b29sdGlwLCBzdGF0ZSwgbGVmdCwgdG9wLCBtaW5XaWR0aCwgbWF4V2lkdGgsIG1pbkhlaWdodCwgbWF4SGVpZ2h0LCBvcGFjaXR5LCB6SW5kZXgsIHBhZGRpbmd9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgc3RhdGUpLFxyXG4gICAgICAgICAgICBkZWZhdWx0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IG1pbldpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBtYXhXaWR0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlRXZlbnR9IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17dG9vbHRpcCA/IHN0eWxlIDogZGVmYXVsdFN0eWxlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdG9vbHRpcH19IC8+KVxyXG4gICAgfVxyXG59XHJcblxyXG5Ub29sVGlwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0b29sdGlwOiAnJyxcclxuICAgIGxlZnQ6IC05OTk5OSxcclxuICAgIHRvcDogLTk5OTk5LFxyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICAgIG1heFdpZHRoOiAyMDAsXHJcbiAgICBtaW5IZWlnaHQ6IDIwLFxyXG4gICAgbWF4SGVpZ2h0OiAxMDAsXHJcbiAgICBzdGF0ZTogJ05PUk1BTCcsXHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gICAgekluZGV4OiB6SW5kZXhzLlRvb2x0aXBcclxufTtcclxuXHJcblRvb2xUaXAucHJvcFR5cGVzID0ge1xyXG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1Rvb2x0aXAvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYG92ZXJsYXlgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgKCFpc09wZW4gPyAnaGlkZGVuJyA6ICcnKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4cy5PdmVybGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PjwvZGl2PilcbiAgICB9XG59XG5cbk92ZXJsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIG9wYWNpdHk6IC41XG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nTmFtZSwgb3BlblN0YXRlKSB7XG4gICAgbGV0IGhhc1N0YXRlU2V0ID0gdHlwZW9mIG9wZW5TdGF0ZSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIG9wZW5TdGF0ZU5hbWUgPSAnJGlzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9DaGVja2JveCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IHZhbGlkYXRvciA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbn1cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHdkRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXG4gICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICBuYW1lOiAncHdkRmllbGQnXG4gICAgfSxcbiAgICBkcm9wZG93bjoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVDaGVja2JveDoge1xuICAgICAgICBuYW1lOiAnZGlzYWJsZUNoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9LFxuICAgIGhpZGRlbjogdHJ1ZVxufTtcblxuLy8gRm9ybSBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25JdGVtID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMScsIHZhbHVlOiAnaTEnfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDInLCB2YWx1ZTogJ2kyJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAzJywgdmFsdWU6ICdpMyd9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgdG9nZ2xlRmllbGREaXNhYmxlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuZ2V0U3RhdGUobmFtZSwgJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnB3ZEZpZWxkLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXToge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdkaXNhYmxlQ2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0aGlzLmdldFN0YXRlKCdkcm9wZG93bicsICAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IGRpc2FibGVkID8gJ2Rpc2FibGVkIHRvb2x0aXAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMiwgaTMsIGRyb3Bkb3duUHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyduYW1lRmllbGQnLCAncHdkRmllbGQnLCAnZGlzYWJsZUNoZWNrYm94JywgJ2Ryb3Bkb3duJ10pO1xuXG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9XCJEaXNhYmxlZCB0b29sdGlwXCIgdGV4dD1cIkRpc2FibGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkxfSByZWY9e25hbWUgPT4gdGhpcy5uYW1lRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkyfSByZWY9e25hbWUgPT4gdGhpcy5wd2RGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcD17XCJEaXNhYmxlZCB0b29sdGlwXCJ9IGlucHV0VmFsdWU9XCJJIGFtIGRpc2FibGVkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UsIG9uZSBsb3dlcmNhc2UsIGFuZCBvbmUgbnVtYmVyLjwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRHJvcGRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbXM9e3RoaXMuZHJvcGRvd25JdGVtfSBvbkNoYW5nZT17dGhpcy5vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9IHsuLi5kcm9wZG93blByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJDaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkRpc2FibGUgZHJvcCBkb3duXCIgey4uLmkzfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjaGVja2JveGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpc2FibGVkLCBuYW1lLCBjaGVja2VkLCBsYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPntsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaGVja2JveFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsYWJlbDogJydcbn07XG5cbkNoZWNrYm94Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IENoZWNrYm94ID0gd2l0aFRvb2x0aXAoQ2hlY2tib3hWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcblxuaW1wb3J0IHsgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZClbMF07XG4gICAgfVxuICAgIGdldCBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbMF0gfHwge307XG4gICAgfVxuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1t0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDFdIHx8IHt9O1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLnNlbGVjdGVkSXRlbS5pZCkgOiAwO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bmA7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygncGxhY2Vob2xkZXInKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHRoaXMuaW5pdEZpbHRlciA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZElkOiAnLTEnLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgY3Vyc29yOiAnLTEnLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHRJbnB1dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAodGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyID0gZSA9PiB0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZShlKSkpO1xuICAgICAgICBjb25zdCB7aXRlbXN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogaXRlbXMubWFwKChpdGVtLCBpKSA9PiBPYmplY3QuYXNzaWduKGl0ZW0sIHtpZDogJ2l0ZW0nICsgaX0pKX0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIF9jbGlja09yRm9jdXNBbnl3aGVyZShlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjbGljayB3YXMgd2l0aGluIHNlbGYsIGlnbm9yZTsgb3RoZXJ3aXNlLCBjbG9zZSBzZWxmXG4gICAgICAgIGlmICghdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dChpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSB0aGlzLmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSArIDFdLmlkO1xuICAgIH1cblxuICAgIHByZXYoaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSAwKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSAtIDFdLmlkO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGxldCBjdXJzb3JJZCA9IHRoaXMuc3RhdGUuY3Vyc29yICE9PSAtMSA/IHRoaXMuc3RhdGUuY3Vyc29yIDogdGhpcy5zdGF0ZS5zZWxlY3RlZElkO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMubmV4dChjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMucHJldihjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oY3Vyc29ySWQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkOiBjdXJzb3JJZCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICF0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA6IC0xLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBpdGVtID8gaXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXIsXG4gICAgICAgICAgICBjdXJzb3I6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHt0YXJnZXQ6IHRoaXMuZG9tTm9kZX0pKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7IGlucHV0VmFsdWUgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoaW5wdXRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGNoYXJzID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyksXG4gICAgICAgICAgICAgICAgcmVnR3JwID0gY2hhcnMubWFwKGMgPT4gYFskeyhjICsgJycpLnRvVXBwZXJDYXNlKCl9JHsoYyArICcnKS50b0xvd2VyQ2FzZSgpfV1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlZ0dycC5qb2luKCcnKSkpLnRlc3QoaXRlbS5sYWJlbClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgY3Vyc29yOiAtMSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7aXRlbXMsIHNlbGVjdGVkSWQsIGN1cnNvcn0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBbaW5wdXRQcm9wc10gPSB0aGlzLmdldFN0YXRlcyhbJ3RleHRJbnB1dCddKSxcbiAgICAgICAgICAgIG5ld0lucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5sYWJlbCA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSByZWY9e3RoaXMucHJvY2Vzc1JlZn0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0gb25LZXlEb3duPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNlbGVjdGVkPXshIXNlbGVjdGVkSXRlbX0gdmFsdWU9e3NlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS52YWx1ZSA6ICcnfSBjbGFzc05hbWU9e3RoaXMucGxhY2Vob2xkZXJDbGFzcyArICcgbm9uZSBjdXJyZW50J30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdJbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3QgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn0gY2xvc2U9e3RoaXMuY2xvc2V9IGl0ZW1zPXtpdGVtc30gc2VsZWN0ZWRJZD17Y3Vyc29yICE9PSAtMSA/IGN1cnNvcjogc2VsZWN0ZWRJZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkxpc3RWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgY2xhc3NOYW1lLCB6SW5kZXgsIHNlbGVjdGVkSWQsIGZpbHRlciwgbm9JdGVtTWVzc2FnZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKSxcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gaXRlbXMuZmlsdGVyKGZpbHRlciksXG4gICAgICAgICAgICBoYXNJdGVtID0gbmV3SXRlbXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIHN0eWxlID0ge3pJbmRleH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAge2hhc0l0ZW0gPyBuZXdJdGVtcy5tYXAoaXRlbSA9PiA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLmxhYmVsfSB2YWx1ZT17aXRlbS52YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkSWQgPT09IGl0ZW0uaWR9IC8+ICkgOiA8RHJvcGRvd25JdGVtPntub0l0ZW1NZXNzYWdlfTwvRHJvcGRvd25JdGVtPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25MaXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgekluZGV4OiAwLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWUsXG4gICAgbm9JdGVtTWVzc2FnZTogJ05vIEl0ZW0gRm91bmQnXG59XG5cbkRyb3Bkb3duTGlzdFZpZXcucHJvcFR5cGVzID0ge1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vSXRlbU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTGlzdCA9IHBvcHVwYWJsZShEcm9wZG93bkxpc3RWaWV3KTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bkl0ZW1gO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUsIHZhbHVlLCBsYWJlbCwgaWQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aWR9IGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkfSBkYXRhLWxhYmVsPXtsYWJlbH0gZGF0YS12YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PntjaGlsZHJlbiB8fCBsYWJlbH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcblxyXG5jb25zdCBsb25nVG9vbHRpcCA9IGBTbywgeWVzdGVyZGF5LCBiZWluZyBhbm90aGVyIHJhaW55IGRheSBpbiBDaGljYWdvLCBJIGdyYWJiZWQgYSBkaWdpdGFsIHJlbnRhbCBvZiBGcmFua2Vud2VlbmllLlxyXG5BIGZldyB5ZWFycyBhZ28sIG15IHdpZmUgYW5kIEkgc2F3IGl0IHdoZW4gaXQgd2FzIGluIHRoZWF0ZXJzLiBBbmQgd2UgbG92ZWQgaXQuIEJlaW5nIHRoYXQgUm9yeSBsb3ZlcyBkb2dzIChsaWtlLCBvYnNlc3NpdmVseSBzbyksIEkgZmlndXJlZCBzaGXigJlkIGVuam95IGl0IHRvby5cclxuTGl0dGxlIGRpZCBJIGtub3cgd2hhdCBJIHdhcyBpbiBzdG9yZSBmb3LigKYsIFNvLCB5ZXN0ZXJkYXksIGJlaW5nIGFub3RoZXIgcmFpbnkgZGF5IGluIENoaWNhZ28sIEkgZ3JhYmJlZCBhIGRpZ2l0YWwgcmVudGFsIG9mIEZyYW5rZW53ZWVuaWUuXHJcbkEgZmV3IHllYXJzIGFnbywgbXkgd2lmZSBhbmQgSSBzYXcgaXQgd2hlbiBpdCB3YXMgaW4gdGhlYXRlcnMuIEFuZCB3ZSBsb3ZlZCBpdC4gQmVpbmcgdGhhdCBSb3J5IGxvdmVzIGRvZ3MgKGxpa2UsIG9ic2Vzc2l2ZWx5IHNvKSwgSSBmaWd1cmVkIHNoZeKAmWQgZW5qb3kgaXQgdG9vLlxyXG5MaXR0bGUgZGlkIEkga25vdyB3aGF0IEkgd2FzIGluIHN0b3JlIGZvcuKApmA7XHJcbmNvbnN0IHRvb2x0aXAgPSBgVGhpcyBpcyBub3JtYWwgdG9vbHRpcGA7XHJcbmNvbnN0IG9uZUxpbmVXaXRoSW5saW5lTWFya3VwID0gYDxzcGFuIGNsYXNzPVwiY29sb3JmdWxcIj5JIGFtIGNvbG9yZnVsIHRvb2x0aXA8L3NwYW4+YDtcclxuLy8gVG9vbHRpcHMgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwidG9vbHRpcHNcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFmdGVyXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVmb3JlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVmb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFib3ZlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVsb3dcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwUG9zaXRpb249XCJiZWxvd1wiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93LWNlbnRlcmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3ctY2VudGVyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZS1jZW50ZXJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlLWNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgY2FuIGJlIGVudGVycmVkXCIgdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gdG9vbHRpcD17dG9vbHRpcH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBzdGF0ZSBpcyBhbHdheXMgV0FSTklOR1wiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBTdGF0ZT1cIldBUk5JTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSGVscCBUaXBzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlYWxseSBMb25nIHRvb2x0aXBcIiB0b29sdGlwPXtsb25nVG9vbHRpcH0gdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIk9uZS1saW5lciB3aXRoIGlubGluZSBtYXJrdXBcIiB0b29sdGlwPXtvbmVMaW5lV2l0aElubGluZU1hcmt1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XHJcblxyXG4vLyBEaWFsb2dzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uaXRvcmluZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB7dGltZTogRGF0ZS5ub3coKSwgdmFsdWU6IDF9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5FdmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiLy9sb2NhbGhvc3Q6MzAwMC9zZWVkXCIpO1xyXG5cclxuICAgICAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgfSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCBlID0+IHtcclxuICAgICAgICAgICAgICAvLyBDb25uZWN0aW9uIHdhcyBvcGVuZWQuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0IGlzIG9wZW5lZCAhJyk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YToge3RpbWU6IERhdGUubm93KCksIHZhbHVlOiAnU29tZXRoaW5nIHdyb25nLCByZWNvbm5lY3RpbmcuLi4uLid9fSk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRoaXMuc3RhdGUuZGF0YS50aW1lKS50b0xvY2FsZVN0cmluZygpfSA6IHt0aGlzLnN0YXRlLmRhdGEudmFsdWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Nb25pdG9yaW5nL2luZGV4LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjUzNzI1YWE5Y2MxYzJkNGZhNGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9Qb3B1cE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FQSS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci93aXRoVG9vbHRpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sdGlwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvVG9vbHRpcHMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9uaXRvcmluZy9pbmRleC5qc3giXSwibmFtZXMiOlsicHJvdG90eXBlIiwiaGFuZGxlRXZlbnQiLCJtYXAiLCJjbGljayIsImNoYW5nZSIsIm1vdXNlb3ZlciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2VvdXQiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2Vtb3ZlIiwiZm9jdXMiLCJibHVyIiwia2V5ZG93biIsImNhcGl0YWxpemUiLCJ0eXBlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJtZXRob2QiLCJwcm9wcyIsInJlZ2lzdHJ5IiwiQmFzZUNvbXBvbmVudCIsIm5hbWUiLCJhcmdzIiwiYmluZCIsInByb2Nlc3NSZWYiLCJsaWJDbGFzc1ByZWZpeCIsImJhc2VDbGFzc05hbWUiLCJpbml0IiwicmVnaXN0ZXIiLCJwb3N0UmVnaXN0ZXIiLCJjb21wb25lbnQiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50SWQiLCJ0b0xvd2VyQ2FzZSIsInRyYW5zZm9ybVN0YXRlIiwic3RhdGUiLCJrZXkiLCJkZWxtaXRlciIsInJlc3VsdCIsImZvdW5kIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic3BsaWNlIiwibmFtZXMiLCJzb21lIiwiaSIsInN0YXRlT2JqIiwiY29tcGFyZU9iaiIsImNscyIsImNsYXNzTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJpc09iaiIsImNsb25lIiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJnZXRDbHNOYW1lIiwiaXNFbXB0eSIsIm9iaiIsIk9iamVjdCIsInRvU3RyaW5nIiwiY2FsbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXRlT2JqZWN0IiwiX2YiLCJyb290IiwiZW50cmllcyIsInZhbHVlIiwidmFsdWVJc09iaiIsInIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJzIiwiam9pbiIsInRyaW0iLCJ0ZXN0IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJkcmFnZ2FibGUiLCJwb3B1cGFibGUiLCJQb3B1cE1hbmFnZXIiLCJ2YWxpZGF0YWJsZSIsIndpdGhUb29sdGlwIiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsIlRvb2x0aXAiLCJTdGF0ZXMiLCJOT1JNQUwiLCJXQVJOSU5HIiwiRVJST1IiLCJNSVNTSU5HIiwiQnV0dG9uVmlldyIsIm9uQ2xpY2tlZCIsInRleHQiLCJkaXNhYmxlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiQnV0dG9uIiwiSGVhZGVyIiwiZGVmYXVsdFR5cGVzIiwibWFrZUVtcHR5RnVuY3Rpb24iLCJhcmciLCJlbXB0eUZ1bmN0aW9uIiwidGhhdFJldHVybnMiLCJ0aGF0UmV0dXJuc0ZhbHNlIiwidGhhdFJldHVybnNUcnVlIiwidGhhdFJldHVybnNOdWxsIiwidGhhdFJldHVybnNUaGlzIiwidGhhdFJldHVybnNBcmd1bWVudCIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwidW5kZWZpbmVkIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiYSIsImIiLCJjIiwiZCIsImYiLCJlcnJvciIsImFyZ0luZGV4IiwicmVwbGFjZSIsImZyYW1lc1RvUG9wIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJUZXh0SW5wdXRWaWV3IiwicGxhY2Vob2xkZXIiLCJpbnB1dFZhbHVlIiwiYXV0b2NvbXBsZXRlIiwiaW5wdXQiLCJvbkNoYW5nZSIsIlRleHRJbnB1dCIsIndhcm5pbmciLCJwcmludFdhcm5pbmciLCJfbGVuIiwiX2tleSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwieCIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiU3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlzVmVydGljYWwiLCJ0eXBlcyIsImV2ZW50VHlwZSIsInN0YWNrIiwiZXZlbnRIYW5kbGVyIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2F2ZWRDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzIiwiaW5jbHVkZXMiLCJjb2RlIiwib2Zmc2V0SGVpZ2h0IiwiY2xvc2UiLCJoYW5kbGUiLCJpc09wZW4iLCJpc1BvcHVwIiwibmF2RGVmIiwiaWQiLCJsYWJlbCIsInVybCIsImV4cGFuZCIsInBhZ2VzRGVmIiwicmVzIiwibmF2IiwibiIsImZvckVhY2giLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJub2RlIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwia2V5cyIsImV2ZXJ5Iiwic3RlcCIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIkRhdGUiLCJQcm9wVHlwZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwidGVzdDMiLCJsZXR0ZXIiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ0byIsInN5bWJvbHMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic2hpbSIsImdldFNoaW0iLCJBcHAiLCJhY3RpdmVJZCIsImpzSGVhcFNpemVMaW1pdCIsInRvdGFsSlNIZWFwU2l6ZSIsInVzZWRKU0hlYXBTaXplIiwiaGFzaCIsIndpbmRvdyIsInNldEludGVydmFsIiwiZ2V0TWVtb3J5U3RhdCIsInNldFN0YXRlIiwiaW5pdFdTIiwiYWRkV1NMaXN0ZW5lciIsIndzU2VuZCIsInRoZW4iLCJsb2ciLCJkYXRhIiwicGVyZm9ybWFuY2UiLCJtZW1vcnkiLCJvblRyZWVOb2RlQ2xpY2siLCJwYWdlcyIsIkJvcmRlckNvbnRhaW5lciIsInBlcnNpc3QiLCJQYW5lIiwibW91c2Vtb3ZlSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2V1cEhhbmRsZXIiLCJvbk1vdXNlVXAiLCJzcGxpdHRlciIsInNpemUiLCJzaXplVW5pdCIsIm1heFNpemUiLCJtaW5TaXplIiwicGFyZW50RWxlbWVudCIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIiwib25Nb3VzZURvd24iLCJjbGllbnRYIiwiY2xpZW50WSIsImRpcmVjdGlvbiIsImRpc3BsYXkiLCJzcGxpdHRlclNpemUiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJzcGxpdHRlclN0eWxlIiwiekluZGV4IiwicmlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhbmUiLCJUcmVlTm9kZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5vZGVOYW1lIiwiZm9jdXNDbGFzcyIsImV4cGFuZG9DbGFzcyIsImV4cGFuZG9FeHBhbmRDbGFzcyIsImZvY3VzSWQiLCJUcmVlVmlldyIsInRyZWVOb2RlIiwiZGVmIiwiU3dpdGNoIiwiY2xvbmVFbGVtZW50IiwiYWN0aXZlIiwiQ29udGVudFBhbmUiLCJXaW5kb3dNZW1vcnlWaWV3ZXIiLCJ3c0Nvbm5lY3RlZCIsImRhdGFJZCIsInJlcXVlc3RzIiwiTWFwIiwiQVBJIiwid3MiLCJXZWJTb2NrZXQiLCJ3c0xpc3RlbmVycyIsIndzT1BlblByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicmVzb2x2ZXIiLCJnZXQiLCJfZGlzcGF0Y2giLCJhbGwiLCJzZW5kIiwic2V0IiwicmVtb3ZlV1NMaXN0ZW5lciIsImRlbGV0ZSIsImxpc3RlbmVyIiwib25EYXRhIiwiRGlhbG9ncyIsIm9uQnV0dG9uQ2xpY2tlZCIsImNsb3NlRGlhbG9nIiwib3BlbkRpYWxvZyIsImRpYWxvZzEiLCJkaWFsb2cyIiwiYnV0dG9uIiwiZGlhbG9nIiwiZGlhbG9nMSRpc09wZW4iLCJkaWFsb2cyJGlzT3BlbiIsIkRpYWxvZ1ZpZXciLCJoZWFkZXJDbGFzcyIsImdldExpYlByZWZpeGVkQ2xhc3MiLCJjbG9zZUJ0bkNsYXNzIiwiYm9keUNsYXNzIiwiZm9vdGVyQ2xhc3MiLCJjYW5jZWxCdG5DbGFzcyIsImNvbmZpcm1CdG5DbGFzcyIsIm9uQ2FuY2VsQnRuQ2xpY2tlZCIsIm9uQ29uZmlybUJ0bkNsaWNrZWQiLCJvbkNsb3NlQnRuQ2xpY2tlZCIsIm5leHRQcm9wcyIsIm9wZW4iLCJyZXBvc2l0aW9uT25PcGVuIiwibmV4dE9wZW4iLCJuZXh0Q2xvc2UiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsIm1vZCIsImJvZHkiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsImNsb3NlQnRuTGFiZWwiLCJoZWxwTGFiZWwiLCJDb21wb25lbnQiLCJjbGFzc1Byb3BlcnR5IiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwibW91c2Vkb3duSGFuZGxlciIsInJlcG9zaXRpb24iLCJyZWN0IiwiQ29tcG9uZW50QmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwibGVmdFRvTW91c2UiLCJ0b3BUb01vdXNlIiwibWF4IiwibWluIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZU9iaiIsInBvc2l0aW9uIiwiUG9wdXBDb21wb25lbnQiLCJuZXdQcm9wcyIsImluaXRTdGF0ZSIsIlZhbGlkYXRhYmxlQ29tcG9uZW50Iiwib25CbHVyIiwib25Gb2N1cyIsIl9oYXNCZWVuQmx1cnJlZCIsIm1lc3NhZ2VEZWYiLCJuZXh0RGlzYWJsZWQiLCJuZXh0RW5hYmxlZCIsInZhbHVlQ2hhbmdlZCIsInQiLCJyZWdFeHAiLCJ2YWxpZGF0b3IiLCJyZXF1aXJlZCIsIm9uVmFsaWRhdGVkIiwiaXNWYWx1ZUVtcHR5Iiwibm90VmFsaWQiLCJpc1ZhbGlkIiwiZ2V0TWVzc2FnZSIsIm9rIiwidG9vbHRpcCIsImludmFsaWRNZXNzYWdlIiwibWlzc2luZyIsIm1pc3NpbmdNZXNzYWdlIiwiaW1jb21wbGV0ZSIsInByb21wdE1lc3NhZ2UiLCJ0b29sdGlwVGltZW91dCIsIldlYWtNYXAiLCJDb21wb25lbnRXaXRoVG9vbHRpcCIsIm9uVG9vbHRpcE1vdXNlRW50ZXIiLCJvblRvb2x0aXBNb3VzZUxlYXZlIiwidG9vbHRpcENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJiaW5kRXZlbnRzIiwiZGlzcGxheVZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ3cmFwTm9kZSIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvb2x0aXBQb3NpdGlvbiIsInRvb2x0aXBQb3NpdGlvbnMiLCJ0b29sdGlwV2lkdGgiLCJ0b29sdGlwSGVpZ2h0IiwicGFkZGluZyIsInJlbmRlclRvb2x0aXAiLCJjbGVhclRvb2x0aXAiLCJfb25Ub29sdGlwIiwidG9vbHRpcENhbkJlRW50ZXJlZCIsIl90b29sdGlwU2hvd2luZyIsInBvcyIsImdldFRvb2x0aXBQb3MiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJUb29sVGlwIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvcGFjaXR5IiwiZGVmYXVsdFN0eWxlIiwiX19odG1sIiwiYmFja2dyb3VuZENvbG9yIiwidG9nZ2xlRGlhbG9nT3BlbiIsImRpYWxvZ05hbWUiLCJvcGVuU3RhdGUiLCJoYXNTdGF0ZVNldCIsIm9wZW5TdGF0ZU5hbWUiLCJ2IiwibmFtZUZpZWxkIiwicHdkRmllbGQiLCJkcm9wZG93biIsImRpc2FibGVDaGVja2JveCIsImNoZWNrZWQiLCJoaWRkZW4iLCJGb3JtcyIsImRyb3Bkb3duSXRlbSIsImdldFN0YXRlIiwicmVzZXQiLCJpbmZvIiwiZ2V0U3RhdGVzIiwiaTEiLCJpMiIsImkzIiwiZHJvcGRvd25Qcm9wcyIsInRvZ2dsZUZpZWxkRGlzYWJsZSIsInJlc2V0QWxsIiwib25Ecm9wZG93bkNoYW5nZSIsIkNoZWNrYm94VmlldyIsIkNoZWNrYm94IiwicGxhY2Vob2xkZXJDbGFzcyIsIm9uSW5wdXRDaGFuZ2UiLCJpbml0RmlsdGVyIiwic2VsZWN0ZWRJZCIsIml0ZW1zIiwiY3Vyc29yIiwidGV4dElucHV0IiwiX2NsaWNrT3JGb2N1c0FueXdoZXJlSGFuZGxlciIsIl9jbGlja09yRm9jdXNBbnl3aGVyZSIsIml0ZW0iLCJmaXJzdCIsImluZGV4T2ZJdGVtIiwiZmluZEluZGV4IiwibGFzdCIsImN1cnNvcklkIiwicHJldiIsImdldEl0ZW0iLCJkYXRhc2V0Iiwic2VsZWN0ZWQiLCJnZXRGaWx0ZXIiLCJjaGFycyIsInJlZ0dycCIsInNlbGVjdGVkSXRlbSIsImlucHV0UHJvcHMiLCJuZXdJbnB1dFByb3BzIiwiRHJvcGRvd25MaXN0VmlldyIsIm5vSXRlbU1lc3NhZ2UiLCJuZXdJdGVtcyIsImhhc0l0ZW0iLCJEcm9wZG93bkxpc3QiLCJEcm9wZG93bkl0ZW0iLCJsb25nVG9vbHRpcCIsIm9uZUxpbmVXaXRoSW5saW5lTWFya3VwIiwiVG9vbHRpcHMiLCJNb25pdG9yaW5nIiwiRXZlbnRTb3VyY2UiLCJ0aW1lIiwibm93IiwicmVhZHlTdGF0ZSIsIkNMT1NFRCIsInRvTG9jYWxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSxpQkFBVUEsU0FBVixDQUFvQkMsV0FBcEIsR0FBbUMsWUFBWTtBQUMzQztBQUNBLFFBQUlDLE1BQU07QUFDTkMsZUFBTyxTQUREO0FBRU5DLGdCQUFRLFVBRkY7QUFHTkMsbUJBQVcsYUFITDtBQUlOQyxvQkFBWSxjQUpOO0FBS05DLG9CQUFZLGNBTE47QUFNTkMsa0JBQVUsWUFOSjtBQU9OQyxtQkFBVyxhQVBMO0FBUU5DLGlCQUFTLFdBUkg7QUFTTkMsbUJBQVcsYUFUTDtBQVVOQyxlQUFPLFNBVkQ7QUFXTkMsY0FBTSxRQVhBO0FBWU5DLGlCQUFTO0FBWkgsS0FBVjs7QUFlQTtBQUNBLGFBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLGVBQU8sT0FBT0EsS0FBS0MsTUFBTCxDQUFZ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NlUsSUFBWCxHQUFrQkEsSUFBbEI7QUFDSCxhQUpELEVBSUcsS0FKSDs7QUFNQTFCLG1CQUFPekgsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBU2hOLENBQVQsRUFBWTtBQUMxQztBQUNBa00sd0JBQVFnSyxHQUFSLENBQVksY0FBWjtBQUNELGFBSEQsRUFHRyxLQUhIOztBQUtBekIsbUJBQU96SCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTaE4sQ0FBVCxFQUFZO0FBQ3pDLG9CQUFJQSxFQUFFa21CLFVBQUYsSUFBZ0JILFlBQVlJLE1BQWhDLEVBQXdDO0FBQ3BDO0FBQ0g7QUFDSixhQUpELEVBSUcsS0FKSDtBQUtIOzs7aUNBRVE7QUFDTCxnQkFBTXJPLFFBQU87QUFDVHZULHVCQUFPLE1BREU7QUFFVEMsd0JBQVE7QUFGQyxhQUFiOztBQUtBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxPQUFPc1QsS0FBWjtBQUNLLG9CQUFJeEUsSUFBSixDQUFTLEtBQUtoUyxLQUFMLENBQVc2VSxJQUFYLENBQWdCNlAsSUFBekIsRUFBK0JJLGNBQS9CLEVBREw7QUFBQTtBQUN5RCxxQkFBSzlrQixLQUFMLENBQVc2VSxJQUFYLENBQWdCalM7QUFEekUsYUFESjtBQUtIOzs7Ozs7a0JBbkNnQjRoQixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI1MzcyNWFhOWNjMWMyZDRmYTRmIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNPYmosIGV9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gYWxsIGNvbXBvbmVudHMgc2hhcmUgb25lIGV2ZW50IGhhbmRsZXJcbkNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFsbCBrbm93biBSZWFjdC5Db21wb25lbnQgZXZlbnRzXG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgICAgICAgY2hhbmdlOiAnb25DaGFuZ2UnLFxuICAgICAgICBtb3VzZW92ZXI6ICdvbk1vdXNlT3ZlcicsXG4gICAgICAgIG1vdXNlZW50ZXI6ICdvbk1vdXNlRW50ZXInLFxuICAgICAgICBtb3VzZWxlYXZlOiAnb25Nb3VzZUxlYXZlJyxcbiAgICAgICAgbW91c2VvdXQ6ICdvbk1vdXNlT3V0JyxcbiAgICAgICAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICAgICAgICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgICAgICAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICAgICAgICBmb2N1czogJ29uRm9jdXMnLFxuICAgICAgICBibHVyOiAnb25CbHVyJyxcbiAgICAgICAga2V5ZG93bjogJ29uS2V5RG93bidcbiAgICB9O1xuXG4gICAgLy8gZmFsbGJhY2sgaGVscGVyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAnb24nICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLy8gb25lIGhhbmRsZUV2ZW50IHRvIHJ1bGUgdGhlbSBhbGxcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbWFwW2UudHlwZV0gfHwgY2FwaXRhbGl6ZShlLnR5cGUpO1xuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHNbbWV0aG9kXShlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kIGluIHRoaXMpIHRoaXNbbWV0aG9kXShlLCB0aGlzKTtcbiAgICB9O1xufSgpKTtcblxuLy8gdXNlIGZvciBjb21wb25lbnRJZFxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgdG8gc2F2ZSBtZW1vcnlcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzUmVmID0gdGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGliQ2xhc3NQcmVmaXggPSAnZSc7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5wb3N0UmVnaXN0ZXIoLi4uYXJncyk7XG5cbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge31cbiAgICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7fVxuICAgIC8vIGZvcmNlVXBkYXRlKCkge31cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke3RoaXMuYmFzZUNsYXNzTmFtZX0ke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gYCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnJ31gO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZWYoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAvLyBlbnN1cmUgd2UgaGF2ZSByZWdpc3RlclxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdIHx8IDA7XG4gICAgICAgIC8vIGFkZCBvbmVcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSArIDE7XG4gICAgICAgIC8vIGFzc2lnbiBuYW1lXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSArIHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIHNldFN0YXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGlzT2JqKGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBhcmdzWzBdID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShhcmdzWzBdLCAnJCcsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc2V0U3RhdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXRlIGJ5IG5hbWVcbiAgICAvLyBpZiBrZXkgaXMgcHJvdmlkZWQsIHJldHVybiBzcGVjaWZpZWQgdmFsdWVcbiAgICAvLyBpZiBrZXkgaXMgaWdub3JlZCwgcmV0dXJuIHdob2xlIHN0YXRlIG9iamVjdFxuICAgIGdldFN0YXRlKG5hbWUsIGtleSwgZGVsbWl0ZXIgPSAnJCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtuYW1lICsgZGVsbWl0ZXIgKyBrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9LFxuICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kID8gcmVzdWx0IDogdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBnZXQgbXVsaXRwbGUgY2hpbGRyZW4gc3RhdGVcbiAgICBnZXRTdGF0ZXMobmFtZXMgPSBbXSwgZGVsbWl0ZXI9ICckJykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnNvbWUoKG5hbWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX0ke2RlbG1pdGVyfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtpXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldW2tleS5zcGxpdChgJHtkZWxtaXRlcn1gKS5zcGxpY2UoLTEpXSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVN0YXRlKHN0YXRlT2JqLCBjb21wYXJlT2JqKSB7XG4gICAgICAgIHJldHVybiBlKHN0YXRlT2JqLCAnJCcsIGNvbXBhcmVPYmopO1xuICAgIH1cblxuICAgIGdldExpYlByZWZpeGVkQ2xhc3MoY2xzKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmxpYkNsYXNzUHJlZml4fS0ke2Nsc31gO1xuICAgIH1cblxuICAgIC8vIHN0dWJzXG4gICAgaW5pdCgpIHt9XG4gICAgcG9zdFJlZ2lzdGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2luZGV4LmpzIiwiLy8gaXNPYmo6IGNoZWNrIGlmIHRoZSBnaXZlbiBvYmogaXMgYW4gT2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuXG4vLyBjbG9uZTogc2ltcGxlIGNsb25lIHRoZSBnaXZlbiBvYmplY3Rcbi8vIG5vdCBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBjaXJjdWxhciByZWZlcmVuY2VcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuLy8gZmxhdHRlbiBzdGF0ZSBvYmplY3Rcbi8vIGdyaWQ6e2xheW91dDp7bWVudTp7ZXhwYW5kOnRydWV9fX19ID0+IGdyaWQtbGF5b3V0LW1lbnUtZXhwYW5kOnRydWVcbmV4cG9ydCBmdW5jdGlvbiBlKHN0YXRlT2JqZWN0LCBkZWxtaXRlciA9ICckJywgY29tcGFyZU9iaiA9IG51bGwpIHtcbiAgICBmdW5jdGlvbiBfZihzdGF0ZU9iamVjdCwgcm9vdCwgcmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlT2JqZWN0KSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlSXNPYmogPSBpc09iaih2YWx1ZSksXG4gICAgICAgICAgICAgICAgciA9IGAke3Jvb3QgPyByb290ICsgZGVsbWl0ZXIgKyBrZXkgOiBrZXl9YDtcbiAgICAgICAgICAgICAgICAvLyByID0gYCR7cm9vdH0ke3Jvb3QgPT09ICcnID8ga2V5IDoga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpfWA7XG4gICAgICAgICAgICBpZiAodmFsdWVJc09iaiAmJiBjb21wYXJlT2JqICE9PSBudWxsICYmIHR5cGVvZiBjb21wYXJlT2JqW3JdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZUlzT2JqID8gX2YodmFsdWUsIHIsIHJlc3VsdCkgOiByZXN1bHRbcl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBfZihzdGF0ZU9iamVjdCwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZ2V0Q2VudGVyUG9zaXRpb246IGdldCBjaGlsZCBwb3NpdGlvbiB3aGVuIGl0IGlzIGF0IGNlbnRlciBvZiB0aGUgcGFyZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyUG9zaXRpb24oe2lubmVyV2lkdGggPSAxMDAwLCBpbm5lckhlaWdodD04MDB9LCB7d2lkdGggPSA0MDAsIGhlaWdodCA9IDQwMH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICB9XG59XG5cbi8vIGdldENsc05hbWU6IGNvbmNhdGUgYXJ1bWVudHMgd2l0aCBzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsc05hbWUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5maWx0ZXIocyA9PiBzICE9PScnICYmIHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJykuam9pbignICcpO1xufVxuXG4vLyBpc0VtcHR5OiBjaGVjayBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSwgdHJpbT10cnVlKSB7XG4gICAgcmV0dXJuICh0cmltID8gL15cXHMqJC8gOiAvXiQvKS50ZXN0KHZhbHVlKTsgLy8gQm9vbGVhblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJztcbmltcG9ydCBwb3B1cGFibGUgZnJvbSAnLi9wb3B1cGFibGUnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgdmFsaWRhdGFibGUgZnJvbSAnLi92YWxpZGF0YWJsZSc7XG5pbXBvcnQgd2l0aFRvb2x0aXAgZnJvbSAnLi93aXRoVG9vbHRpcCc7XG5cblxuZXhwb3J0IHtkcmFnZ2FibGUsIHBvcHVwYWJsZSwgUG9wdXBNYW5hZ2VyLCB2YWxpZGF0YWJsZSwgd2l0aFRvb2x0aXB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJleHBvcnQgY29uc3QgekluZGV4cyA9IHtcbiAgICBEaWFsb2c6IDMwMDAsXG4gICAgT3ZlcmxheTogMjAwMCxcbiAgICBEcm9wZG93bjogMTAwMCxcbiAgICBUb29sdGlwOiAxMDAwMFxufVxuXG5leHBvcnQgY29uc3QgU3RhdGVzID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgV0FSTklORzrjgIAnd2FybmluZycsXG4gICAgRVJST1I6ICdlcnJvcicsXG4gICAgTUlTU0lORzogJ21pc3NpbmcnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCB7b25DbGlja2VkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgb25DbGlja2VkKGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3RleHQsIHR5cGUsIHRpdGxlLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gdHlwZT17dHlwZX0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT57dGV4dH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5CdXR0b25WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRleHQ6ICdCdXR0b24nLFxyXG4gICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbkJ1dHRvblZpZXcucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHdpdGhUb29sdGlwKEJ1dHRvblZpZXcpO1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9CdXR0b24vaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGhlYWRlcmA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8aDEgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e3RoaXMucHJvcHMudGV4dH08L2gxPik7XG4gICAgfVxufVxuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICcnXG59O1xuXG5IZWFkZXIuZGVmYXVsdFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2ludmFyaWFudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4xNS42LjBAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGFibGUgLCB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgVGV4dElucHV0VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0ZXh0SW5wdXRgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgdHlwZSwgZGlzYWJsZWQsIG5hbWUsIHN0YXRlLCBpbnB1dFZhbHVlLCBhdXRvY29tcGxldGV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIHN0YXRlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGF1dG9jb21wbGV0ZTogJ29uJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLm5hbWUsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgVGV4dElucHV0ID0gdmFsaWRhdGFibGUod2l0aFRvb2x0aXAoVGV4dElucHV0VmlldykpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImNvbnN0IFBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kb21Ob2RlICYmIGNvbXBvbmVudC5kb21Ob2RlLm9mZnNldEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBkZWNvdXBsZVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5jbG9zZSh7fSwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgaXNPcGVuID0gY29tcG9uZW50LnByb3BzLmlzT3BlbjtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gYSBwb3B1cCBtdXN0IGltcGxlbWVudCBjbG9zZSBhbmQgb3BlblxuICAgIGlzUG9wdXAoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVzLmluY2x1ZGVzKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cE1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9BcHAnO1xyXG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSAnLi9Gb3Jtcyc7XHJcbmltcG9ydCBUb29sdGlwcyBmcm9tICcuL1Rvb2x0aXBzJztcclxuaW1wb3J0IE1vbml0b3JpbmcgZnJvbSAnLi9Nb25pdG9yaW5nJztcclxuXHJcblxyXG5jb25zdCBuYXZEZWYgPSBbXHJcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPE1vbml0b3JpbmcgLz59LFxyXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBFbGVtZW50cycsIHVybDogJy8jZm9ybScsIGNvbXBvbmVudDogPEZvcm1zIC8+fSxcclxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXHJcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcclxuICAgICAgICB7aWQ6ICd0b29sdGlwcycsIGxhYmVsOiAnVG9vbHRpcHMnLCB1cmw6ICcvI3dpZGdldHMvdG9vbHRpcHMnLCBjb21wb25lbnQ6IDxUb29sdGlwcyAvPn0sXHJcbiAgICBdfSxcclxuICAgIHtpZDogJ3NwZWljYWwnLCBsYWJlbDogJ1NwZWNpYWwnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnaW5maW5pdGUnLCBsYWJlbDogJ0luZmluaXRlIFNjcm9sbCcsIHVybDogJy8jd2lkZ2V0cy9pbmZpbml0ZVNjcm9sbCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiSW5maW5pdGUgU2Nyb2xsXCIgLz59XHJcbiAgICBdfVxyXG5dO1xyXG5cclxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XHJcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5pbXBvcnQgQVBJIGZyb20gJy4vQVBJJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUlkOiAnbW9uJyxcbiAgICAgICAgICAgIGpzSGVhcFNpemVMaW1pdDogMCxcbiAgICAgICAgICAgIHRvdGFsSlNIZWFwU2l6ZTogMCxcbiAgICAgICAgICAgIHVzZWRKU0hlYXBTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gaGFzaFtoYXNoLmxlbmd0aCAtIDFdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRNZW1vcnlTdGF0KCk7XG5cbiAgICAgICAgQVBJLmluaXRXUygpO1xuXG4gICAgICAgIEFQSS5hZGRXU0xpc3RlbmVyKHRoaXMpO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXInKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIyJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXIzJykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBBUEkud3NTZW5kKCdoZWxsbyBzZXJ2ZXI0JykudGhlbihkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRhdGEoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRNZW1vcnlTdGF0KCkge1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm1lbW9yeSkge1xuICAgICAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAganNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVHJlZU5vZGVDbGljayhub2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2V4cGFuZH0gPSBzdGF0ZTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJZDogbm9kZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cImxlZnRQYW5lXCIgc3BsaXR0ZXI9XCJ2ZXJ0aWNhbFwiIHNpemU9ezIwMH0gbWluU2l6ZT17MjAwfSBtYXhTaXplPXs1MDB9IHNpemVVbml0PVwicHhcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmVlVmlldyBkZWY9e3RoaXMucHJvcHMubmF2fSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgIDxQYW5lIGNsYXNzTmFtZT1cInJpZ2h0UGFuZVwiIGRpc3BsYXk9XCJmbGV4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHNwbGl0dGVyPVwiaG9yaXpvbnRhbFwiIHNpemU9ezc1fSBtYXhTaXplPXs4MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGRlZj17dGhpcy5wcm9wcy5wYWdlc30gYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZG93TWVtb3J5Vmlld2VyIGpzSGVhcFNpemVMaW1pdD17dGhpcy5zdGF0ZS5qc0hlYXBTaXplTGltaXR9IHRvdGFsSlNIZWFwU2l6ZT17dGhpcy5zdGF0ZS50b3RhbEpTSGVhcFNpemV9IHVzZWRKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnVzZWRKU0hlYXBTaXplfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgPC9Cb3JkZXJDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BcHAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JkZXJDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYm9yZGVyQ29udGFpbmVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2xhc3NOYW1lLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb3JkZXJDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJydcbn07XG5cbkJvcmRlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBlcnNpc3Q6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Cb3JkZXJDb250YWluZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSAnLi4vU3BsaXR0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8vIFRPRE86IGtleWJvYXJkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgcGFuZWA7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZXVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7c3BsaXR0ZXIsIHNpemUsIHNpemVVbml0LCBtYXhTaXplLCBtaW5TaXplfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7b2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodH0gPSB0aGlzLmRvbU5vZGUucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdudWxsJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWF4U2l6ZSAvIDEwMCkpIDogbWF4U2l6ZTtcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRXaWR0aCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IHNpemVVbml0ID09PSAnJScgPyAoTWF0aC5mbG9vcihvZmZzZXRIZWlnaHQgKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1pblNpemUgLyAxMDApKSA6IG1pblNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvcDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIHNpemUgLyAxMDApKSA6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VVcChlKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAge21heFNpemUsIG1pblNpemV9ID0gdGhpcyxcbiAgICAgICAgICAgICAgbGVmdCA9IGNsaWVudFggPiBtYXhTaXplID8gbWF4U2l6ZSA6IChjbGllbnRYIDwgbWluU2l6ZSA/IG1pblNpemUgOiBjbGllbnRYKSxcbiAgICAgICAgICAgICAgdG9wID0gY2xpZW50WSA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFkgPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnQsIHRvcH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZShlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBzcGxpdHRlciwgZGlyZWN0aW9uLCBkaXNwbGF5LCBzcGxpdHRlclNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke3NwbGl0dGVyID09PSAndmVydGljYWwnID8gYCB2ZXJ0aWNhbFBhbmVgIDogJyd9YCksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwbGl0dGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA9IHNwbGl0dGVyID09PSAndmVydGljYWwnO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0IC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmxlZnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNwbGl0dGVyU3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnNldFN0YXRlLnRvcCAtIHNwbGl0dGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHBhbmUpID0+IHsgdGhpcy5kb21Ob2RlID0gcGFuZTsgfX1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7c3BsaXR0ZXIgIT09ICdudWxsJyA/IDxTcGxpdHRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0dGVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVFdmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9IC8+IDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3BsaXR0ZXI6ICdudWxsJyxcbiAgICBzaXplOiAyNSxcbiAgICBtaW5TaXplOiAxNSxcbiAgICBtYXhTaXplOiA1MCxcbiAgICBzaXplVW5pdDogJyUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBzcGxpdHRlclNpemU6IDEwXG59O1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3BsaXR0ZXJTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9QYW5lL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZDogdGhpcy5wcm9wcy5leHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgZS50YXJnZXQubm9kZU5hbWUgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kOiAhdGhpcy5zdGF0ZS5leHBhbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVHJlZU5vZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lkLCBsYWJlbCwgdXJsLCBjaGlsZHJlbiwgb25UcmVlTm9kZUNsaWNrLCBhY3RpdmVJZH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZXhwYW5kID0gdGhpcy5zdGF0ZS5leHBhbmQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhhY3RpdmVJZCA9PT0gaWQgJiYgIWNoaWxkcmVuKSA/IHRoaXMucHJvcHMuZm9jdXNDbGFzcyA6IChleHBhbmQgPyB0aGlzLnByb3BzLmV4cGFuZG9DbGFzcyA6IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmwgPyB1cmwgOiAnamF2YXNjcmlwdDp2b2lkKDApJ30+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgZXhwYW5kID8gPHVsPntjaGlsZHJlbi5tYXAoYyA9PiA8VHJlZU5vZGUgYWN0aXZlSWQ9e2FjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e29uVHJlZU5vZGVDbGlja30gey4uLmN9IC8+KX08L3VsPjogJyd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVHJlZU5vZGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGZvY3VzQ2xhc3M6ICdmb2N1c2VkJyxcbiAgICBleHBhbmRvRXhwYW5kQ2xhc3M6ICdleHBhbmQnLFxuICAgIGV4cGFuZG9DbGFzczogJ2ZvbGQnXG59O1xuXG5UcmVlTm9kZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHBhbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9jdXNDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhwYW5kb0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICd0cmVlVmlldyc7XG4gICAgfVxuICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHtpZCwgY2hpbGRyZW59ID0gdHJlZU5vZGUsXG4gICAgICAgICAgICB7b25UcmVlTm9kZUNsaWNrfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIG9uVHJlZU5vZGVDbGljayh0cmVlTm9kZSwgc3RhdGUpO1xuXG4gICAgICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBvciBubyBjaGlsZHJlbiwgZm9jdXMgdGFyZ2V0XG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJZDogaWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMuZGVmLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gb25UcmVlTm9kZUNsaWNrPXt0aGlzLm9uVHJlZU5vZGVDbGljay5iaW5kKHRoaXMpfSB7Li4uY30gLz4pfTwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVHJlZVZpZXcucHJvcFR5cGVzID0ge1xuICAgIG9uVHJlZU5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBDb250ZW50UGFuZSBmcm9tICcuLi9Db250ZW50UGFuZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnc3dpdGNoJztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBkYXRhLWFjdGl2ZS1pZD17dGhpcy5wcm9wcy5hY3RpdmVJZH0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVmLm1hcChjID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRQYW5lIGNsYXNzTmFtZT17Yy5pZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVJZCA/IHRoaXMucHJvcHMuYWN0aXZlSWQgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGMuY29tcG9uZW50LCB7YWN0aXZlOiBjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFBhbmU+KVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmOiBbXVxufTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBkZWY6IFByb3BUeXBlcy5hcnJheSxcbiAgICBhY3RpdmVJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY29udGVudFBhbmVgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ29udGVudFBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd01lbW9yeVZpZXdlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB3aW5kb3dNZW1vcnlWaWV3ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2pzSGVhcFNpemVMaW1pdCwgdG90YWxKU0hlYXBTaXplLCB1c2VkSlNIZWFwU2l6ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SmF2YXNjcmlwdCBIZWFwIFNpemUgTGltaXQ6PC9zcGFuPiA8c3Bhbj57anNIZWFwU2l6ZUxpbWl0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlRvdGFsIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3RvdGFsSlNIZWFwU2l6ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Vc2VkIEphdmFzY3JpcHQgSGVhcCBTaXplOjwvc3Bhbj4gPHNwYW4+e3VzZWRKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsImxldCB3c0Nvbm5lY3RlZCA9IGZhbHNlLFxuICAgIGRhdGFJZCA9IDAsXG4gICAgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IEFQSSA9IHtcbiAgICBpbml0V1MoKSB7XG4gICAgICAgIGlmICghd3NDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgxJyk7XG4gICAgICAgICAgICB0aGlzLndzTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgICAgICB0aGlzLndzT1BlblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RzLmhhcyhkYXRhLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZXIgPSByZXF1ZXN0cy5nZXQoZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaFxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3c1NlbmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZXIgPT4ge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3RoaXMud3NPUGVuUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGRhdGFJZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMud3Muc2VuZChKU09OLnN0cmluZ2lmeSh7aWQsIGRhdGF9KSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMuc2V0KGlkLCByZXNvbHZlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFkZFdTTGlzdGVuZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuc2V0KGNvbXBvbmVudC5pZCwgY29tcG9uZW50KTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlV1NMaXN0ZW5lcihpZCkge1xuICAgICAgICB0aGlzLndzTGlzdGVuZXJzLmRlbGV0ZShpZCk7XG4gICAgfSxcblxuICAgIF9kaXNwYXRjaChldmVudCkge1xuICAgICAgICB0aGlzLndzTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIub25EYXRhICYmIGxpc3RlbmVyLm9uRGF0YShldmVudC5kYXRhLCBldmVudCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvQVBJL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcblxuaW1wb3J0IHsgdG9nZ2xlRGlhbG9nT3BlbiB9IGZyb20gJy4vRGlhbG9nc0FjdGlvbic7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgY2xvc2VEaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHNob3VsZFNob3dPdmVybGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaWFsb2cxJGlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVuO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cxXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cxXCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzJcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzJcIiAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gRGlhbG9nXG5leHBvcnQgY2xhc3MgRGlhbG9nVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEaWFsb2cnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZGlhbG9nYDtcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2xvc2UnKTtcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1ib2R5Jyk7XG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZCA9IHRoaXMub25DYW5jZWxCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQnRuQ2xpY2tlZCA9IHRoaXMub25Db25maXJtQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UsIHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSh7fSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZChlKTtcblxuICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db25maXJtQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttb2QsIHRpdGxlLCBib2R5LCBjYW5jZWxMYWJlbCwgY29uZmlybUxhYmVsLCBjbG9zZUJ0bkxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9ID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmJvZHlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmZvb3RlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkfSB0ZXh0PXtjb25maXJtTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jb25maXJtQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpYWxvZ1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZDogJycsXG4gICAgdGl0bGU6ICdEaWFsb2cgVGl0bGUnLFxuICAgIGJvZHk6ICdBTlIxMDMyODI5IFRoaXMgaXMgYSBzYW1wbGUgbWVzc2FnZS4gRGRsZmt3ZXJvaXUgc2RmciBzZGZqZXJpdSBkZmVyZXJkZnNmLicsXG4gICAgaGVscExhYmVsOiAnSGVscCcsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvcGVuOiAoKSA9PiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge31cbn07XG5cbkRpYWxvZ1ZpZXcucHJvcFR5cGVzID0ge1xuICAgIG1vZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBib2R5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhlbHBMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2VCdG5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmNvbnN0IERpYWxvZyA9IHBvcHVwYWJsZShkcmFnZ2FibGUoRGlhbG9nVmlldywgJ2hlYWRlckNsYXNzJykpO1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRDZW50ZXJQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnZ2FibGUoQ29tcG9uZW50LCBjbGFzc1Byb3BlcnR5KSB7XG4gICAgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vtb3ZlSGFuZGxlciA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duSGFuZGxlciA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7IHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHRPcGVuID0gbmV4dFByb3BzLmlzT3BlbiA9PT0gdHJ1ZSAmJiBpc09wZW4gPT09IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobmV4dE9wZW4gJiYgcmVwb3NpdGlvbk9uT3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbU5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQge2xlZnQsIHRvcH0gPSBnZXRDZW50ZXJQb3NpdGlvbih3aW5kb3csIHRoaXMuZG9tTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnRCZWluZ01vdmVkID0gdGhpcy5kb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlY3QgPSBDb21wb25lbnRCZWluZ01vdmVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHtjbGllbnRYLCBjbGllbnRZfSA9IGUsXG4gICAgICAgICAgICAgICAge2xhc3RNb3VzZVgsIGxhc3RNb3VzZVl9ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBsZWZ0VG9Nb3VzZSA9IGNsaWVudFggLSBsYXN0TW91c2VYLFxuICAgICAgICAgICAgICAgIHRvcFRvTW91c2UgPSBjbGllbnRZIC0gbGFzdE1vdXNlWSxcbiAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS5sZWZ0ICsgbGVmdFRvTW91c2UpLFxuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KDAsIHRoaXMuc3RhdGUudG9wICsgdG9wVG9Nb3VzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCwgbGVmdCksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCwgdG9wKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IGNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBjbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzUHJvcGVydHkgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzW2NsYXNzUHJvcGVydHldKSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VVcD17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogdHJ1ZSxcbiAgICAgICAgc3R5bGVPYmo6IHt9XG4gICAgfSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XG5cbiAgICBEcmFnZ2FibGVDb21wb25lbnQucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlcG9zaXRpb25Pbk9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzdHlsZU9iajogUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIERyYWdnYWJsZUNvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci9kcmFnZ2FibGUuanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuaW1wb3J0IFBvcHVwTWFuYWdlciBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5cbi8vIHBvcHVwYWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdXBhYmxlKENvbXBvbmVudCkge1xuICAgIGxldCB6SW5kZXggPSB6SW5kZXhzW0NvbXBvbmVudC50eXBlXSB8fCAwO1xuXG4gICAgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4KytcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUgJiYgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuaGFuZGxlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbikgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmogOiB7ekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleH0sXG4gICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnN0YXRlLnpJbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gey4uLm5ld1Byb3BzfSByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfSAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUG9wdXBDb21wb25lbnQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFN0YXRlcyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtb2Q6ICcnXG59O1xuXG4vLyB2YWxpZGF0YWJsZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGFibGUoQ29tcG9uZW50KSB7XG4gICAgY2xhc3MgVmFsaWRhdGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBnZXQgbWVzc2FnZURlZigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogdGhpcy5wcm9wcy5taXNzaW5nTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpbWNvbXBsZXRlOiB0aGlzLnByb3BzLnByb21wdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgJyc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBpbml0U3RhdGUpO1xuICAgICAgICAgICAgLy8gbG9jYWwgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRyaWdnZXIgdGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TWVzc2FnZShtb2QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VEZWZbbW9kXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWUgJiYgZGlzYWJsZWQgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRFbmFibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSBmYWxzZSAmJiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5leHREaXNhYmxlZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0JlZW5CbHVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUobmV4dFByb3BzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1cihlKSB7XG4gICAgICAgICAgICAvLyBzZXQgYmx1ciBmbGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkZvY3VzKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpc1ZhbGlkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVnRXhwLCB2YWxpZGF0b3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCFyZWdFeHAgJiYgIXZhbGlkYXRvcikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiByZWdFeHAgJiYgcmVnRXhwLnRlc3QodmFsdWUpIHx8IHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVpcmVkLCBvblZhbGlkYXRlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRW1wdHkgPSBpc0VtcHR5KGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG5vdFZhbGlkID0gIXRoaXMuaXNWYWxpZChpbnB1dFZhbHVlKSxcbiAgICAgICAgICAgICAgICBtb2QgPSAoaXNWYWx1ZUVtcHR5ICYmIHJlcXVpcmVkKSA/IFN0YXRlcy5NSVNTSU5HIDogbm90VmFsaWQgPyBTdGF0ZXMuRVJST1IgOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRNZXNzYWdlKG1vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2QsIG1lc3NhZ2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uVmFsaWRhdGVkICYmIG9uVmFsaWRhdGVkKHttb2QsIG1lc3NhZ2UsIG9rOiBtb2QgPT09ICcnfSwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLm1vZCxcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRvb2x0aXAgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogJycsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyBub3QgdmFsaWQnLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICB9KTtcblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LnByb3BUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlZ0V4cDogUHJvcFR5cGVzLnJlZ0V4cCxcbiAgICAgICAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25WYWxpZGF0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmFsaWRhdGFibGVDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL1dpZGdldHMvVG9vbHRpcCc7XHJcblxyXG4vLyBzaGFyZWQgdG9vbHRpcCBzdGF0ZVxyXG5sZXQgdG9vbHRpcFRpbWVvdXQgPSBudWxsLFxyXG4gICAgcmVnaXN0ZXIgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuLy8gd2l0aFRvb2x0aXBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRvb2x0aXAoQ29tcG9uZW50KSB7XHJcbiAgICBjbGFzcyBDb21wb25lbnRXaXRoVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyID0gdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZSA9IHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0b29sdGlwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcigndG9vbHRpcCcpO1xyXG4gICAgICAgICAgICAvLyBpZiBub3QgZXhpc3QsIGNyZWF0ZSBvbmNlXHJcbiAgICAgICAgICAgIGlmICghdG9vbHRpcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rvb2x0aXAnKTtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rvb2x0aXAnO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0byBjb21wb25lbnQgbG9jYWwgcHJvcFxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSB0b29sdGlwQ29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb21Ob2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXBOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZE1vdW50IHdpbGwgYmUgY2FsbCBtdWx0aXBsZSB0aW1lcyBpZiB1c2luZyBpbiBoaWdoZXIgb3JkZXIgd2F5XHJcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXZvaWQgcmVnaXN0ZXIgbXVsdGlwbGUgc2FtZSBkb20gbm9kZXNcclxuICAgICAgICAgICAgaWYgKCFyZWdpc3Rlci5oYXModGhpcy53cmFwTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JhcE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlci5zZXQodGhpcy53cmFwTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQgJiYgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUb29sdGlwUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy53cmFwTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgIHtzY3JvbGxUb3AsIHNjcm9sbExlZnR9ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAge3Rvb2x0aXBQb3NpdGlvbiwgdG9vbHRpcFBvc2l0aW9ucywgbWluV2lkdGg6dG9vbHRpcFdpZHRoLCBtaW5IZWlnaHQ6dG9vbHRpcEhlaWdodCwgcGFkZGluZ30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlZnQgPSAtOTk5OSxcclxuICAgICAgICAgICAgICAgIHRvcCA9IC05OTk5O1xyXG5cclxuICAgICAgICAgICAgLy8gY29ycmVjdCB0aGUgc2Nyb2xsaW5nIHZhbHVlXHJcbiAgICAgICAgICAgIHggPSB4ICsgc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgeSA9IHkgKyBzY3JvbGxUb3A7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godG9vbHRpcFBvc2l0aW9uc1t0b29sdGlwUG9zaXRpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhZnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlZm9yZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggLSB0b29sdGlwV2lkdGggLSBwYWRkaW5nICogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Fib3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5IC0gdG9vbHRpcEhlaWdodCAtIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93JzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93LWNlbnRlcmVkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyAoKHdpZHRoIC0gdG9vbHRpcFdpZHRoIC0gcGFkZGluZyAqIDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdhYm92ZS1jZW50ZXJlZCc6IFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4ICsgKCh3aWR0aCAtIHRvb2x0aXBXaWR0aCAtIHBhZGRpbmcgKiAyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgLSB0b29sdGlwSGVpZ2h0IC0gcGFkZGluZyAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge2xlZnQsIHRvcH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbk1vdXNlRW50ZXIoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRvb2x0aXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUb29sdGlwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblRvb2x0aXBNb3VzZUVudGVyKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5fb25Ub29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwQ2FuQmVFbnRlcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Ub29sdGlwTW91c2VMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgdGhpcy5fb25Ub29sdGlwID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5jbGVhclRvb2x0aXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVG9vbHRpcCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vblRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3REb20ucmVuZGVyKDxUb29sdGlwIHsuLi50aGlzLnByb3BzfSB0b29sdGlwPVwiXCIgLz4sIHRoaXMudG9vbHRpcENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnByb3BzLnRvb2x0aXBDYW5CZUVudGVyZWQgPyAzMDA6IDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9vbHRpcFNob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCkge1xyXG4gICAgICAgICAgICBpZiAodG9vbHRpcFRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG9vbHRpcFRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJUb29sdGlwKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy53cmFwTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRUb29sdGlwUG9zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRoaXMucHJvcHMudG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMucHJvcHMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vblRvb2x0aXBNb3VzZUVudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Ub29sdGlwTW91c2VMZWF2ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgUmVhY3REb20ucmVuZGVyKDxUb29sdGlwIHsuLi50aGlzLnByb3BzfSB7Li4ubmV3UHJvcHN9IHsuLi5wb3N9Lz4sIHRoaXMudG9vbHRpcENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b29sdGlwU2hvd2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBTaG93aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvb2x0aXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuZGlzcGxheVZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9PjxDb21wb25lbnQgcmVmPXt0aGlzLnByb2Nlc3NSZWZ9ICB7Li4udGhpcy5wcm9wc30gLz48L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENvbXBvbmVudFdpdGhUb29sdGlwLmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbnM6IHtcclxuICAgICAgICAgICAgJ2FmdGVyJzogJ2FmdGVyJyxcclxuICAgICAgICAgICAgJ2JlZm9yZSc6ICdiZWZvcmUnLFxyXG4gICAgICAgICAgICAnYWJvdmUnOiAnYWJvdmUnLFxyXG4gICAgICAgICAgICAnYmVsb3cnOiAnYmVsb3cnLFxyXG4gICAgICAgICAgICAnYmVsb3ctY2VudGVyZWQnOiAnYmVsb3ctY2VudGVyZWQnLFxyXG4gICAgICAgICAgICAnYWJvdmUtY2VudGVyZWQnOiAnYWJvdmUtY2VudGVyZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwQ2FuQmVFbnRlcmVkOiBmYWxzZSxcclxuICAgICAgICB0b29sdGlwUG9zaXRpb246ICdhZnRlcicsXHJcbiAgICAgICAgc3RhdGU6ICdub3JtYWwnXHJcbiAgICB9LCBUb29sdGlwLmRlZmF1bHRQcm9wcywgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XHJcblxyXG4gICAgQ29tcG9uZW50V2l0aFRvb2x0aXAucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgdG9vbHRpcENhbkJlRW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9LCBUb29sdGlwLnByb3BUeXBlcyk7XHJcblxyXG4gICAgcmV0dXJuIENvbXBvbmVudFdpdGhUb29sdGlwO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci93aXRoVG9vbHRpcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sVGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0b29sdGlwYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lzT3BlbiwgdG9vbHRpcCwgc3RhdGUsIGxlZnQsIHRvcCwgbWluV2lkdGgsIG1heFdpZHRoLCBtaW5IZWlnaHQsIG1heEhlaWdodCwgb3BhY2l0eSwgekluZGV4LCBwYWRkaW5nfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIHN0YXRlKSxcclxuICAgICAgICAgICAgZGVmYXVsdFN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0eWxlLCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBtaW5XaWR0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogbWF4V2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyArICdweCcsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUV2ZW50fSBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3Rvb2x0aXAgPyBzdHlsZSA6IGRlZmF1bHRTdHlsZX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRvb2x0aXB9fSAvPilcclxuICAgIH1cclxufVxyXG5cclxuVG9vbFRpcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdG9vbHRpcDogJycsXHJcbiAgICBsZWZ0OiAtOTk5OTksXHJcbiAgICB0b3A6IC05OTk5OSxcclxuICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgbWluSGVpZ2h0OiAyMCxcclxuICAgIG1heEhlaWdodDogMTAwLFxyXG4gICAgc3RhdGU6ICdOT1JNQUwnLFxyXG4gICAgcGFkZGluZzogNSxcclxuICAgIHpJbmRleDogekluZGV4cy5Ub29sdGlwXHJcbn07XHJcblxyXG5Ub29sVGlwLnByb3BUeXBlcyA9IHtcclxuICAgIG9wYWNpdHk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBwYWRkaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sdGlwL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBvdmVybGF5YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSB0aGlzLmNsYXNzTmFtZSArICcgJyArICghaXNPcGVuID8gJ2hpZGRlbicgOiAnJyksXG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleHMuT3ZlcmxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT48L2Rpdj4pXG4gICAgfVxufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcGFjaXR5OiAuNVxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZ05hbWUsIG9wZW5TdGF0ZSkge1xuICAgIGxldCBoYXNTdGF0ZVNldCA9IHR5cGVvZiBvcGVuU3RhdGUgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICBvcGVuU3RhdGVOYW1lID0gJyRpc09wZW4nO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1tkaWFsb2dOYW1lICsgb3BlblN0YXRlTmFtZV06IGhhc1N0YXRlU2V0ID8gb3BlblN0YXRlIDogIXN0YXRlW2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXX07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICdjb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xuaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25JdGVtfSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRHJvcGRvd24nO1xuXG5jb25zdCB2YWxpZGF0b3IgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2LmluY2x1ZGVzKCdzJyk7XG59XG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgbmFtZUZpZWxkOiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXG4gICAgICAgIG5hbWU6ICduYW1lRmllbGQnLFxuICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHB3ZEZpZWxkOiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLFxuICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvcixcbiAgICAgICAgbmFtZTogJ3B3ZEZpZWxkJ1xuICAgIH0sXG4gICAgZHJvcGRvd246IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlQ2hlY2tib3g6IHtcbiAgICAgICAgbmFtZTogJ2Rpc2FibGVDaGVja2JveCcsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBoaWRkZW46IHRydWVcbn07XG5cbi8vIEZvcm0gcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duSXRlbSA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDEnLCB2YWx1ZTogJ2kxJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAyJywgdmFsdWU6ICdpMid9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMycsIHZhbHVlOiAnaTMnfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHRvZ2dsZUZpZWxkRGlzYWJsZShuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLmdldFN0YXRlKG5hbWUsICdkaXNhYmxlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0QWxsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudHJhbnNmb3JtU3RhdGUoaW5pdFN0YXRlKSwgKCk9PiB7XG4gICAgICAgICAgICB0aGlzLm5hbWVGaWVsZC5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5wd2RGaWVsZC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcblxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09PSAnZGlzYWJsZUNoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdGhpcy5nZXRTdGF0ZSgnZHJvcGRvd24nLCAgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBkaXNhYmxlZCA/ICdkaXNhYmxlZCB0b29sdGlwJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVmFsaWRhdGVkKHttZXNzYWdlLCBtb2QsIG9rfSkge1xuICAgICAgICBjb25zb2xlLmluZm8obWVzc2FnZSwgbW9kLCBvayk7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSB0b29sdGlwIG9yIHNvbWUgbWVzc2FnZSBib3hcbiAgICB9XG5cbiAgICBvbkRyb3Bkb3duQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH0sXG4gICAgICAgIFtpMSwgaTIsIGkzLCBkcm9wZG93blByb3BzXSA9IHRoaXMuZ2V0U3RhdGVzKFsnbmFtZUZpZWxkJywgJ3B3ZEZpZWxkJywgJ2Rpc2FibGVDaGVja2JveCcsICdkcm9wZG93biddKTtcblxuICAgICAgICBpMS5vblZhbGlkYXRlZCA9IHRoaXMub25WYWxpZGF0ZWQuYmluZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cImZvcm1zXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJCdXR0b25zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaG93VG9vbHRpcE9uTG9hZD17ZmFsc2V9IG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAnbmFtZUZpZWxkJyl9IHRleHQ9XCJUb2dnbGUgRGlzYWJsZSBOYW1lIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMudG9nZ2xlRmllbGREaXNhYmxlLmJpbmQodGhpcywgJ3B3ZEZpZWxkJyl9IHRleHQ9XCJUb2dnbGUgRGlzYWJsZSBQYXNzd29yZCBGaWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLnJlc2V0QWxsLmJpbmQodGhpcyl9IHRleHQ9XCJSZXNldCBBbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt0cnVlfSB0b29sdGlwPVwiRGlzYWJsZWQgdG9vbHRpcFwiIHRleHQ9XCJEaXNhYmxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIlZhbGlkYXRpb25UZXh0Qm94XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IHsuLi5pMX0gcmVmPXtuYW1lID0+IHRoaXMubmFtZUZpZWxkID0gbmFtZX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IHsuLi5pMn0gcmVmPXtuYW1lID0+IHRoaXMucHdkRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9e1wiRGlzYWJsZWQgdG9vbHRpcFwifSBpbnB1dFZhbHVlPVwiSSBhbSBkaXNhYmxlZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Zb3VyIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlLCBvbmUgbG93ZXJjYXNlLCBhbmQgb25lIG51bWJlci48L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkRyb3Bkb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGl0ZW1zPXt0aGlzLmRyb3Bkb3duSXRlbX0gb25DaGFuZ2U9e3RoaXMub25Ecm9wZG93bkNoYW5nZS5iaW5kKHRoaXMpfSB7Li4uZHJvcGRvd25Qcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiQ2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJEaXNhYmxlIGRyb3AgZG93blwiIHsuLi5pM30gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgY2hlY2tib3hgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgbmFtZSwgY2hlY2tlZCwgbGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgcmVmPXtpbnB1dCA9PiB0aGlzLmRvbU5vZGUgPSBpbnB1dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz57bGFiZWx9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2hlY2tib3hWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgbGFiZWw6ICcnXG59O1xuXG5DaGVja2JveFZpZXcucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBDaGVja2JveCA9IHdpdGhUb29sdGlwKENoZWNrYm94Vmlldyk7XG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uL1RleHRJbnB1dCc7XG5cbmltcG9ydCB7IHBvcHVwYWJsZSB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkSWQpWzBdO1xuICAgIH1cbiAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zWzBdIHx8IHt9O1xuICAgIH1cbiAgICBnZXQgbGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLSAxXSB8fCB7fTtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc3RhdGUuaXRlbXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0uaWQpIDogMDtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25gO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICB0aGlzLmluaXRGaWx0ZXIgPSAoKSA9PiB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJZDogJy0xJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGN1cnNvcjogJy0xJyxcbiAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZXh0SW5wdXQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRoaXMuX2NsaWNrT3JGb2N1c0FueXdoZXJlSGFuZGxlciA9IGUgPT4gdGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmUoZSkpKTtcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gT2JqZWN0LmFzc2lnbihpdGVtLCB7aWQ6ICdpdGVtJyArIGl9KSl9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBfY2xpY2tPckZvY3VzQW55d2hlcmUoZSkge1xuICAgICAgICAvLyBpZiB0aGUgY2xpY2sgd2FzIHdpdGhpbiBzZWxmLCBpZ25vcmU7IG90aGVyd2lzZSwgY2xvc2Ugc2VsZlxuICAgICAgICBpZiAoIXRoaXMuZG9tTm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHQoaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gdGhpcy5maXJzdC5pZDtcbiAgICAgICAgbGV0IGluZGV4T2ZJdGVtID0gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleE9mSXRlbSA9PT0gdGhpcy5sZW5ndGggLSAxKSByZXR1cm4gdGhpcy5maXJzdC5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbaW5kZXhPZkl0ZW0gKyAxXS5pZDtcbiAgICB9XG5cbiAgICBwcmV2KGlkID0gLTEpIHtcbiAgICAgICAgaWYgKGlkID09PSAtMSkgcmV0dXJuIHRoaXMubGFzdC5pZDtcbiAgICAgICAgbGV0IGluZGV4T2ZJdGVtID0gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleE9mSXRlbSA9PT0gMCkgcmV0dXJuIHRoaXMubGFzdC5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbaW5kZXhPZkl0ZW0gLSAxXS5pZDtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkID0gLTEpIHtcbiAgICAgICAgaWYgKGlkID09PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICBsZXQgY3Vyc29ySWQgPSB0aGlzLnN0YXRlLmN1cnNvciAhPT0gLTEgPyB0aGlzLnN0YXRlLmN1cnNvciA6IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZDtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLm5leHQoY3Vyc29ySWQpLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLnByZXYoY3Vyc29ySWQpLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGN1cnNvcklkKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogY3Vyc29ySWQsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAhdGhpcy5zdGF0ZS5pc09wZW4gPyB0aGlzLnN0YXRlLnNlbGVjdGVkSWQgOiAtMSxcbiAgICAgICAgICAgICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlcixcbiAgICAgICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogaXRlbSA/IGl0ZW0ubGFiZWwgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyLFxuICAgICAgICAgICAgY3Vyc29yOiAtMVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IGlkLCBzZWxlY3RlZCwgbGFiZWx9ID0gZS50YXJnZXQuZGF0YXNldDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ6IGlkLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBsYWJlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7dGFyZ2V0OiB0aGlzLmRvbU5vZGV9KSk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRJbnB1dDogeyBpbnB1dFZhbHVlIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuZ2V0RmlsdGVyKGlucHV0VmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCBjaGFycyA9IGlucHV0VmFsdWUuc3BsaXQoJycpLFxuICAgICAgICAgICAgICAgIHJlZ0dycCA9IGNoYXJzLm1hcChjID0+IGBbJHsoYyArICcnKS50b1VwcGVyQ2FzZSgpfSR7KGMgKyAnJykudG9Mb3dlckNhc2UoKX1dYCk7XG5cbiAgICAgICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChyZWdHcnAuam9pbignJykpKS50ZXN0KGl0ZW0ubGFiZWwpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLnNlbGVjdGVkSXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnNvcjogLTEsXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAge2l0ZW1zLCBzZWxlY3RlZElkLCBjdXJzb3J9ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgW2lucHV0UHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyd0ZXh0SW5wdXQnXSksXG4gICAgICAgICAgICBuZXdJbnB1dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywge1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEl0ZW0ubGFiZWwgOiBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0gcmVmPXt0aGlzLnByb2Nlc3NSZWZ9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9IG9uS2V5RG93bj17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBzZWxlY3RlZD17ISFzZWxlY3RlZEl0ZW19IHZhbHVlPXtzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEl0ZW0udmFsdWUgOiAnJ30gY2xhc3NOYW1lPXt0aGlzLnBsYWNlaG9sZGVyQ2xhc3MgKyAnIG5vbmUgY3VycmVudCd9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IHsuLi50aGlzLnByb3BzfSB7Li4ubmV3SW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0IGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9IGNsb3NlPXt0aGlzLmNsb3NlfSBpdGVtcz17aXRlbXN9IHNlbGVjdGVkSWQ9e2N1cnNvciAhPT0gLTEgPyBjdXJzb3I6IHNlbGVjdGVkSWR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBTZWxlY3QuLi4nLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25MaXN0VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEcm9wZG93bic7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duV3JhcHBlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXRlbXMsIGNsYXNzTmFtZSwgekluZGV4LCBzZWxlY3RlZElkLCBmaWx0ZXIsIG5vSXRlbU1lc3NhZ2V9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSksXG4gICAgICAgICAgICBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcihmaWx0ZXIpLFxuICAgICAgICAgICAgaGFzSXRlbSA9IG5ld0l0ZW1zLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBzdHlsZSA9IHt6SW5kZXh9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIHtoYXNJdGVtID8gbmV3SXRlbXMubWFwKGl0ZW0gPT4gPERyb3Bkb3duSXRlbSBrZXk9e2l0ZW0uaWR9IGlkPXtpdGVtLmlkfSBsYWJlbD17aXRlbS5sYWJlbH0gdmFsdWU9e2l0ZW0udmFsdWV9IHNlbGVjdGVkPXtzZWxlY3RlZElkID09PSBpdGVtLmlkfSAvPiApIDogPERyb3Bkb3duSXRlbT57bm9JdGVtTWVzc2FnZX08L0Ryb3Bkb3duSXRlbT59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duTGlzdFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHpJbmRleDogMCxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgZmlsdGVyOiAoKSA9PiB0cnVlLFxuICAgIG5vSXRlbU1lc3NhZ2U6ICdObyBJdGVtIEZvdW5kJ1xufVxuXG5Ecm9wZG93bkxpc3RWaWV3LnByb3BUeXBlcyA9IHtcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBub0l0ZW1NZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bkxpc3QgPSBwb3B1cGFibGUoRHJvcGRvd25MaXN0Vmlldyk7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25JdGVtYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgY2xhc3NOYW1lLCB2YWx1ZSwgbGFiZWwsIGlkLCBzZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtaWQ9e2lkfSBkYXRhLXNlbGVjdGVkPXtzZWxlY3RlZH0gZGF0YS1sYWJlbD17bGFiZWx9IGRhdGEtdmFsdWU9e3ZhbHVlfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT57Y2hpbGRyZW4gfHwgbGFiZWx9PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ecm9wZG93bkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIHN0cmluZzogJ1BsZWFzZSBTZWxlY3QuLi4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBzZWxlY3RlZDogZmFsc2Vcbn07XG5cbkRyb3Bkb3duSXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Ryb3Bkb3duL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xyXG5cclxuY29uc3QgbG9uZ1Rvb2x0aXAgPSBgU28sIHllc3RlcmRheSwgYmVpbmcgYW5vdGhlciByYWlueSBkYXkgaW4gQ2hpY2FnbywgSSBncmFiYmVkIGEgZGlnaXRhbCByZW50YWwgb2YgRnJhbmtlbndlZW5pZS5cclxuQSBmZXcgeWVhcnMgYWdvLCBteSB3aWZlIGFuZCBJIHNhdyBpdCB3aGVuIGl0IHdhcyBpbiB0aGVhdGVycy4gQW5kIHdlIGxvdmVkIGl0LiBCZWluZyB0aGF0IFJvcnkgbG92ZXMgZG9ncyAobGlrZSwgb2JzZXNzaXZlbHkgc28pLCBJIGZpZ3VyZWQgc2hl4oCZZCBlbmpveSBpdCB0b28uXHJcbkxpdHRsZSBkaWQgSSBrbm93IHdoYXQgSSB3YXMgaW4gc3RvcmUgZm9y4oCmLCBTbywgeWVzdGVyZGF5LCBiZWluZyBhbm90aGVyIHJhaW55IGRheSBpbiBDaGljYWdvLCBJIGdyYWJiZWQgYSBkaWdpdGFsIHJlbnRhbCBvZiBGcmFua2Vud2VlbmllLlxyXG5BIGZldyB5ZWFycyBhZ28sIG15IHdpZmUgYW5kIEkgc2F3IGl0IHdoZW4gaXQgd2FzIGluIHRoZWF0ZXJzLiBBbmQgd2UgbG92ZWQgaXQuIEJlaW5nIHRoYXQgUm9yeSBsb3ZlcyBkb2dzIChsaWtlLCBvYnNlc3NpdmVseSBzbyksIEkgZmlndXJlZCBzaGXigJlkIGVuam95IGl0IHRvby5cclxuTGl0dGxlIGRpZCBJIGtub3cgd2hhdCBJIHdhcyBpbiBzdG9yZSBmb3LigKZgO1xyXG5jb25zdCB0b29sdGlwID0gYFRoaXMgaXMgbm9ybWFsIHRvb2x0aXBgO1xyXG5jb25zdCBvbmVMaW5lV2l0aElubGluZU1hcmt1cCA9IGA8c3BhbiBjbGFzcz1cImNvbG9yZnVsXCI+SSBhbSBjb2xvcmZ1bCB0b29sdGlwPC9zcGFuPmA7XHJcbi8vIFRvb2x0aXBzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcHMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cInRvb2x0aXBzXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhZnRlclwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFmdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlZm9yZVwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImJlZm9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZVwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93XCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3dcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBiZWxvdy1jZW50ZXJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImJlbG93LWNlbnRlcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYWJvdmUtY2VudGVyZWRcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwUG9zaXRpb249XCJhYm92ZS1jZW50ZXJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIGNhbiBiZSBlbnRlcnJlZFwiIHRvb2x0aXBDYW5CZUVudGVyZWQ9e3RydWV9IHRvb2x0aXA9e3Rvb2x0aXB9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgc3RhdGUgaXMgYWx3YXlzIFdBUk5JTkdcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwU3RhdGU9XCJXQVJOSU5HXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkhlbHAgVGlwc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJSZWFsbHkgTG9uZyB0b29sdGlwXCIgdG9vbHRpcD17bG9uZ1Rvb2x0aXB9IHRvb2x0aXBDYW5CZUVudGVyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJPbmUtbGluZXIgd2l0aCBpbmxpbmUgbWFya3VwXCIgdG9vbHRpcD17b25lTGluZVdpdGhJbmxpbmVNYXJrdXB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Ub29sdGlwcy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xyXG5cclxuLy8gRGlhbG9ncyBwYWdlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbml0b3JpbmcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcIi8vbG9jYWxob3N0OjMwMDAvc2VlZFwiKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB7dGltZTogRGF0ZS5ub3coKSwgdmFsdWU6IDF9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIC8vIENvbm5lY3Rpb24gd2FzIG9wZW5lZC5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdpdCBpcyBvcGVuZWQnKVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5yZWFkeVN0YXRlID09IEV2ZW50U291cmNlLkNMT1NFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29ubmVjdGlvbiB3YXMgY2xvc2VkLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzdHlsZT0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aGlzLnN0YXRlLmRhdGEudGltZSkudG9Mb2NhbGVTdHJpbmcoKX0gOiB7dGhpcy5zdGF0ZS5kYXRhLnZhbHVlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvTW9uaXRvcmluZy9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 99aa768873d205062045b5b25195a3b54796482d
