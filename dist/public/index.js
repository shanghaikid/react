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
                var _wrapNode$getBounding = this.wrapNode.getBoundingClientRect(),
                    x = _wrapNode$getBounding.x,
                    y = _wrapNode$getBounding.y,
                    width = _wrapNode$getBounding.width,
                    height = _wrapNode$getBounding.height,
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

            var source = new EventSource("//localhost:3000/seed");
            this.state = {
                data: { time: Date.now(), value: 1 }
            };
            source.addEventListener('message', function (e) {
                var data = JSON.parse(e.data);

                _this2.state.data = data;
            }, false);

            source.addEventListener('open', function (e) {
                // Connection was opened.
                console.log('it is opened');
            }, false);

            source.addEventListener('error', function (e) {
                if (e.readyState == EventSource.CLOSED) {
                    // Connection was closed.
                }
            }, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDY3YjUzMTMyNDIzOTg3M2I5ZDkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9TcGxpdHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9UcmVlVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnRQYW5lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9BUEkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3BvcHVwYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvVG9vbHRpcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9PdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvRGlhbG9nc0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0Zvcm1zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Ryb3Bkb3duL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L01vbml0b3JpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImtleWRvd24iLCJjYXBpdGFsaXplIiwidHlwZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwibWV0aG9kIiwicHJvcHMiLCJyZWdpc3RyeSIsIkJhc2VDb21wb25lbnQiLCJuYW1lIiwiYXJncyIsImJpbmQiLCJwcm9jZXNzUmVmIiwibGliQ2xhc3NQcmVmaXgiLCJiYXNlQ2xhc3NOYW1lIiwiaW5pdCIsInJlZ2lzdGVyIiwicG9zdFJlZ2lzdGVyIiwiY29tcG9uZW50IiwiZG9tTm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudElkIiwidG9Mb3dlckNhc2UiLCJ0cmFuc2Zvcm1TdGF0ZSIsInN0YXRlIiwia2V5IiwiZGVsbWl0ZXIiLCJyZXN1bHQiLCJmb3VuZCIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInNwbGljZSIsIm5hbWVzIiwic29tZSIsImkiLCJzdGF0ZU9iaiIsImNvbXBhcmVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJ0b1N0cmluZyIsImNhbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZU9iamVjdCIsIl9mIiwicm9vdCIsImVudHJpZXMiLCJ2YWx1ZSIsInZhbHVlSXNPYmoiLCJyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwicyIsImpvaW4iLCJ0cmltIiwidGVzdCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiUG9wdXBNYW5hZ2VyIiwidmFsaWRhdGFibGUiLCJ3aXRoVG9vbHRpcCIsInpJbmRleHMiLCJEaWFsb2ciLCJPdmVybGF5IiwiRHJvcGRvd24iLCJUb29sdGlwIiwiU3RhdGVzIiwiTk9STUFMIiwiV0FSTklORyIsIkVSUk9SIiwiTUlTU0lORyIsIkJ1dHRvblZpZXciLCJvbkNsaWNrZWQiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIkJ1dHRvbiIsIkhlYWRlciIsImRlZmF1bHRUeXBlcyIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiVGV4dElucHV0VmlldyIsInBsYWNlaG9sZGVyIiwiaW5wdXRWYWx1ZSIsImF1dG9jb21wbGV0ZSIsImlucHV0Iiwib25DaGFuZ2UiLCJUZXh0SW5wdXQiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwidHlwZXMiLCJldmVudFR5cGUiLCJzdGFjayIsImV2ZW50SGFuZGxlciIsImFkZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInNhdmVkQ29tcG9uZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhcyIsImluY2x1ZGVzIiwiY29kZSIsIm9mZnNldEhlaWdodCIsImNsb3NlIiwiaGFuZGxlIiwiaXNPcGVuIiwiaXNQb3B1cCIsIm5hdkRlZiIsImlkIiwibGFiZWwiLCJ1cmwiLCJleHBhbmQiLCJwYWdlc0RlZiIsInJlcyIsIm5hdiIsIm4iLCJmb3JFYWNoIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3NpZ24iLCJjaGVja1Byb3BUeXBlcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwibnVtYmVyIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsImxvY2F0aW9uIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsImhhc093blByb3BlcnR5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImtleXMiLCJldmVyeSIsInN0ZXAiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiUHJvcFR5cGVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsInRlc3QzIiwibGV0dGVyIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwidG8iLCJzeW1ib2xzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInNoaW0iLCJnZXRTaGltIiwiQXBwIiwiYWN0aXZlSWQiLCJqc0hlYXBTaXplTGltaXQiLCJ0b3RhbEpTSGVhcFNpemUiLCJ1c2VkSlNIZWFwU2l6ZSIsImhhc2giLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImdldE1lbW9yeVN0YXQiLCJzZXRTdGF0ZSIsImluaXRXUyIsImFkZFdTTGlzdGVuZXIiLCJ3c1NlbmQiLCJ0aGVuIiwibG9nIiwiZGF0YSIsInBlcmZvcm1hbmNlIiwibWVtb3J5Iiwib25UcmVlTm9kZUNsaWNrIiwicGFnZXMiLCJCb3JkZXJDb250YWluZXIiLCJwZXJzaXN0IiwiUGFuZSIsIm1vdXNlbW92ZUhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNldXBIYW5kbGVyIiwib25Nb3VzZVVwIiwic3BsaXR0ZXIiLCJzaXplIiwic2l6ZVVuaXQiLCJtYXhTaXplIiwibWluU2l6ZSIsInBhcmVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsIm9uTW91c2VEb3duIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXJlY3Rpb24iLCJkaXNwbGF5Iiwic3BsaXR0ZXJTaXplIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwic3BsaXR0ZXJTdHlsZSIsInpJbmRleCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYW5lIiwiVHJlZU5vZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJub2RlTmFtZSIsImZvY3VzQ2xhc3MiLCJleHBhbmRvQ2xhc3MiLCJleHBhbmRvRXhwYW5kQ2xhc3MiLCJmb2N1c0lkIiwiVHJlZVZpZXciLCJ0cmVlTm9kZSIsImRlZiIsIlN3aXRjaCIsImNsb25lRWxlbWVudCIsImFjdGl2ZSIsIkNvbnRlbnRQYW5lIiwiV2luZG93TWVtb3J5Vmlld2VyIiwid3NDb25uZWN0ZWQiLCJkYXRhSWQiLCJyZXF1ZXN0cyIsIk1hcCIsIkFQSSIsIndzIiwiV2ViU29ja2V0Iiwid3NMaXN0ZW5lcnMiLCJ3c09QZW5Qcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJldmVudCIsInJlc29sdmVyIiwiZ2V0IiwiX2Rpc3BhdGNoIiwiYWxsIiwic2VuZCIsInNldCIsInJlbW92ZVdTTGlzdGVuZXIiLCJkZWxldGUiLCJsaXN0ZW5lciIsIm9uRGF0YSIsIkRpYWxvZ3MiLCJvbkJ1dHRvbkNsaWNrZWQiLCJjbG9zZURpYWxvZyIsIm9wZW5EaWFsb2ciLCJkaWFsb2cxIiwiZGlhbG9nMiIsImJ1dHRvbiIsImRpYWxvZyIsImRpYWxvZzEkaXNPcGVuIiwiZGlhbG9nMiRpc09wZW4iLCJEaWFsb2dWaWV3IiwiaGVhZGVyQ2xhc3MiLCJnZXRMaWJQcmVmaXhlZENsYXNzIiwiY2xvc2VCdG5DbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2FuY2VsQnRuQ2xhc3MiLCJjb25maXJtQnRuQ2xhc3MiLCJvbkNhbmNlbEJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJuZXh0UHJvcHMiLCJvcGVuIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJtb2QiLCJib2R5IiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbG9zZUJ0bkxhYmVsIiwiaGVscExhYmVsIiwiQ29tcG9uZW50IiwiY2xhc3NQcm9wZXJ0eSIsIkRyYWdnYWJsZUNvbXBvbmVudCIsIm1vdXNlZG93bkhhbmRsZXIiLCJyZXBvc2l0aW9uIiwicmVjdCIsIkNvbXBvbmVudEJlaW5nTW92ZWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0TW91c2VYIiwibGFzdE1vdXNlWSIsImxlZnRUb01vdXNlIiwidG9wVG9Nb3VzZSIsIm1heCIsIm1pbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGVPYmoiLCJwb3NpdGlvbiIsIlBvcHVwQ29tcG9uZW50IiwibmV3UHJvcHMiLCJpbml0U3RhdGUiLCJWYWxpZGF0YWJsZUNvbXBvbmVudCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfaGFzQmVlbkJsdXJyZWQiLCJtZXNzYWdlRGVmIiwibmV4dERpc2FibGVkIiwibmV4dEVuYWJsZWQiLCJ2YWx1ZUNoYW5nZWQiLCJ0IiwicmVnRXhwIiwidmFsaWRhdG9yIiwicmVxdWlyZWQiLCJvblZhbGlkYXRlZCIsImlzVmFsdWVFbXB0eSIsIm5vdFZhbGlkIiwiaXNWYWxpZCIsImdldE1lc3NhZ2UiLCJvayIsInRvb2x0aXAiLCJpbnZhbGlkTWVzc2FnZSIsIm1pc3NpbmciLCJtaXNzaW5nTWVzc2FnZSIsImltY29tcGxldGUiLCJwcm9tcHRNZXNzYWdlIiwidG9vbHRpcFRpbWVvdXQiLCJXZWFrTWFwIiwiQ29tcG9uZW50V2l0aFRvb2x0aXAiLCJvblRvb2x0aXBNb3VzZUVudGVyIiwib25Ub29sdGlwTW91c2VMZWF2ZSIsInRvb2x0aXBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYmluZEV2ZW50cyIsImRpc3BsYXlWYWx1ZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwid3JhcE5vZGUiLCJyZW1vdmVDaGlsZCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ0b29sdGlwUG9zaXRpb24iLCJ0b29sdGlwUG9zaXRpb25zIiwidG9vbHRpcFdpZHRoIiwidG9vbHRpcEhlaWdodCIsInBhZGRpbmciLCJyZW5kZXJUb29sdGlwIiwiY2xlYXJUb29sdGlwIiwiX29uVG9vbHRpcCIsInRvb2x0aXBDYW5CZUVudGVyZWQiLCJfdG9vbHRpcFNob3dpbmciLCJwb3MiLCJnZXRUb29sdGlwUG9zIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiVG9vbFRpcCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwib3BhY2l0eSIsImRlZmF1bHRTdHlsZSIsIl9faHRtbCIsImJhY2tncm91bmRDb2xvciIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwidiIsIm5hbWVGaWVsZCIsInB3ZEZpZWxkIiwiZHJvcGRvd24iLCJkaXNhYmxlQ2hlY2tib3giLCJjaGVja2VkIiwiaGlkZGVuIiwiRm9ybXMiLCJkcm9wZG93bkl0ZW0iLCJnZXRTdGF0ZSIsInJlc2V0IiwiaW5mbyIsImdldFN0YXRlcyIsImkxIiwiaTIiLCJpMyIsImRyb3Bkb3duUHJvcHMiLCJ0b2dnbGVGaWVsZERpc2FibGUiLCJyZXNldEFsbCIsIm9uRHJvcGRvd25DaGFuZ2UiLCJDaGVja2JveFZpZXciLCJDaGVja2JveCIsInBsYWNlaG9sZGVyQ2xhc3MiLCJvbklucHV0Q2hhbmdlIiwiaW5pdEZpbHRlciIsInNlbGVjdGVkSWQiLCJpdGVtcyIsImN1cnNvciIsInRleHRJbnB1dCIsIl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIiLCJfY2xpY2tPckZvY3VzQW55d2hlcmUiLCJpdGVtIiwiZmlyc3QiLCJpbmRleE9mSXRlbSIsImZpbmRJbmRleCIsImxhc3QiLCJjdXJzb3JJZCIsInByZXYiLCJnZXRJdGVtIiwiZGF0YXNldCIsInNlbGVjdGVkIiwiZ2V0RmlsdGVyIiwiY2hhcnMiLCJyZWdHcnAiLCJzZWxlY3RlZEl0ZW0iLCJpbnB1dFByb3BzIiwibmV3SW5wdXRQcm9wcyIsIkRyb3Bkb3duTGlzdFZpZXciLCJub0l0ZW1NZXNzYWdlIiwibmV3SXRlbXMiLCJoYXNJdGVtIiwiRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JdGVtIiwibG9uZ1Rvb2x0aXAiLCJvbmVMaW5lV2l0aElubGluZU1hcmt1cCIsIlRvb2x0aXBzIiwiTW9uaXRvcmluZyIsIkV2ZW50U291cmNlIiwidGltZSIsIm5vdyIsInJlYWR5U3RhdGUiLCJDTE9TRUQiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsaUJBQVVBLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQW1DLFlBQVk7QUFDM0M7QUFDQSxRQUFJQyxNQUFNO0FBQ05DLGVBQU8sU0FERDtBQUVOQyxnQkFBUSxVQUZGO0FBR05DLG1CQUFXLGFBSEw7QUFJTkMsb0JBQVksY0FKTjtBQUtOQyxvQkFBWSxjQUxOO0FBTU5DLGtCQUFVLFlBTko7QUFPTkMsbUJBQVcsYUFQTDtBQVFOQyxpQkFBUyxXQVJIO0FBU05DLG1CQUFXLGFBVEw7QUFVTkMsZUFBTyxTQVZEO0FBV05DLGNBQU0sUUFYQTtBQVlOQyxpQkFBUztBQVpILEtBQVY7O0FBZUE7QUFDQSxhQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixlQUFPLE9BQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsRUFBUCxHQUFzQ0YsS0FBS0csS0FBTCxDQUFXLENBQVgsQ0FBN0M7QUFDSDs7QUFFRDtBQUNBLFdBQU8sU0FB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LFVBQVNoTixDQUFULEVBQVk7QUFDMUM7QUFDQWtNLHdCQUFRZ0ssR0FBUixDQUFZLGNBQVo7QUFDRCxhQUhELEVBR0csS0FISDs7QUFLQXpCLG1CQUFPekgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU2hOLENBQVQsRUFBWTtBQUN6QyxvQkFBSUEsRUFBRWttQixVQUFGLElBQWdCSCxZQUFZSSxNQUFoQyxFQUF3QztBQUNwQztBQUNIO0FBQ0osYUFKRCxFQUlHLEtBSkg7QUFLSDs7O2lDQUVRO0FBQ0wsZ0JBQU1yTyxRQUFPO0FBQ1R2VCx1QkFBTyxNQURFO0FBRVRDLHdCQUFRO0FBRkMsYUFBYjs7QUFLQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssT0FBT3NULEtBQVo7QUFDSyxvQkFBSXhFLElBQUosQ0FBUyxLQUFLaFMsS0FBTCxDQUFXNlUsSUFBWCxDQUFnQjZQLElBQXpCLEVBQStCSSxjQUEvQixFQURMO0FBQUE7QUFDeUQscUJBQUs5a0IsS0FBTCxDQUFXNlUsSUFBWCxDQUFnQmpTO0FBRHpFLGFBREo7QUFLSDs7Ozs7O2tCQW5DZ0I0aEIsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNjdiNTMxMzI0MjM5ODczYjlkOSIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzT2JqLCBlfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIGFsbCBjb21wb25lbnRzIHNoYXJlIG9uZSBldmVudCBoYW5kbGVyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGwga25vd24gUmVhY3QuQ29tcG9uZW50IGV2ZW50c1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXG4gICAgICAgIGNoYW5nZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgbW91c2VvdmVyOiAnb25Nb3VzZU92ZXInLFxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gICAgICAgIG1vdXNlb3V0OiAnb25Nb3VzZU91dCcsXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgICAgICAgbW91c2V1cDogJ29uTW91c2VVcCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgICAgICAgYmx1cjogJ29uQmx1cicsXG4gICAgICAgIGtleWRvd246ICdvbktleURvd24nXG4gICAgfTtcblxuICAgIC8vIGZhbGxiYWNrIGhlbHBlclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vIG9uZSBoYW5kbGVFdmVudCB0byBydWxlIHRoZW0gYWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgfTtcbn0oKSk7XG5cbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcbmxldCByZWdpc3RyeSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlZiA9IHRoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpYkNsYXNzUHJlZml4ID0gJ2UnO1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucG9zdFJlZ2lzdGVyKC4uLmFyZ3MpO1xuXG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge31cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHt9XG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge31cbiAgICAvLyBmb3JjZVVwZGF0ZSgpIHt9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHt0aGlzLmJhc2VDbGFzc05hbWV9JHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJyd9YDtcbiAgICB9XG5cbiAgICBwcm9jZXNzUmVmKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgLy8gZW5zdXJlIHdlIGhhdmUgcmVnaXN0ZXJcbiAgICAgICAgcmVnaXN0cnlbbmFtZV0gPSByZWdpc3RyeVtuYW1lXSB8fCAwO1xuICAgICAgICAvLyBhZGQgb25lXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gKyAxO1xuICAgICAgICAvLyBhc3NpZ24gbmFtZVxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyByZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmIChpc09iaihhcmdzWzBdKSkge1xuICAgICAgICAgICAgYXJnc1swXSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoYXJnc1swXSwgJyQnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNldFN0YXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSBieSBuYW1lXG4gICAgLy8gaWYga2V5IGlzIHByb3ZpZGVkLCByZXR1cm4gc3BlY2lmaWVkIHZhbHVlXG4gICAgLy8gaWYga2V5IGlzIGlnbm9yZWQsIHJldHVybiB3aG9sZSBzdGF0ZSBvYmplY3RcbiAgICBnZXRTdGF0ZShuYW1lLCBrZXksIGRlbG1pdGVyID0gJyQnKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbbmFtZSArIGRlbG1pdGVyICsga2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fSxcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZCA/IHJlc3VsdCA6IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gZ2V0IG11bGl0cGxlIGNoaWxkcmVuIHN0YXRlXG4gICAgZ2V0U3RhdGVzKG5hbWVzID0gW10sIGRlbG1pdGVyPSAnJCcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBuYW1lcy5zb21lKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9JHtkZWxtaXRlcn1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtrZXkuc3BsaXQoYCR7ZGVsbWl0ZXJ9YCkuc3BsaWNlKC0xKV0gPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1TdGF0ZShzdGF0ZU9iaiwgY29tcGFyZU9iaikge1xuICAgICAgICByZXR1cm4gZShzdGF0ZU9iaiwgJyQnLCBjb21wYXJlT2JqKTtcbiAgICB9XG5cbiAgICBnZXRMaWJQcmVmaXhlZENsYXNzKGNscykge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5saWJDbGFzc1ByZWZpeH0tJHtjbHN9YDtcbiAgICB9XG5cbiAgICAvLyBzdHVic1xuICAgIGluaXQoKSB7fVxuICAgIHBvc3RSZWdpc3RlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIvLyBpc09iajogY2hlY2sgaWYgdGhlIGdpdmVuIG9iaiBpcyBhbiBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBpc09iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbi8vIGNsb25lOiBzaW1wbGUgY2xvbmUgdGhlIGdpdmVuIG9iamVjdFxuLy8gbm90IHN1cHBvcnQgZnVuY3Rpb24gYW5kIGNpcmN1bGFyIHJlZmVyZW5jZVxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vLyBmbGF0dGVuIHN0YXRlIG9iamVjdFxuLy8gZ3JpZDp7bGF5b3V0OnttZW51OntleHBhbmQ6dHJ1ZX19fX0gPT4gZ3JpZC1sYXlvdXQtbWVudS1leHBhbmQ6dHJ1ZVxuZXhwb3J0IGZ1bmN0aW9uIGUoc3RhdGVPYmplY3QsIGRlbG1pdGVyID0gJyQnLCBjb21wYXJlT2JqID0gbnVsbCkge1xuICAgIGZ1bmN0aW9uIF9mKHN0YXRlT2JqZWN0LCByb290LCByZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVJc09iaiA9IGlzT2JqKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByID0gYCR7cm9vdCA/IHJvb3QgKyBkZWxtaXRlciArIGtleSA6IGtleX1gO1xuICAgICAgICAgICAgICAgIC8vIHIgPSBgJHtyb290fSR7cm9vdCA9PT0gJycgPyBrZXkgOiBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YDtcbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqICYmIGNvbXBhcmVPYmogIT09IG51bGwgJiYgdHlwZW9mIGNvbXBhcmVPYmpbcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3JdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlSXNPYmogPyBfZih2YWx1ZSwgciwgcmVzdWx0KSA6IHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cbi8vIGlzRW1wdHk6IGNoZWNrIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlLCB0cmltPXRydWUpIHtcbiAgICByZXR1cm4gKHRyaW0gPyAvXlxccyokLyA6IC9eJC8pLnRlc3QodmFsdWUpOyAvLyBCb29sZWFuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xuaW1wb3J0IHBvcHVwYWJsZSBmcm9tICcuL3BvcHVwYWJsZSc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB2YWxpZGF0YWJsZSBmcm9tICcuL3ZhbGlkYXRhYmxlJztcbmltcG9ydCB3aXRoVG9vbHRpcCBmcm9tICcuL3dpdGhUb29sdGlwJztcblxuXG5leHBvcnQge2RyYWdnYWJsZSwgcG9wdXBhYmxlLCBQb3B1cE1hbmFnZXIsIHZhbGlkYXRhYmxlLCB3aXRoVG9vbHRpcH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCB6SW5kZXhzID0ge1xuICAgIERpYWxvZzogMzAwMCxcbiAgICBPdmVybGF5OiAyMDAwLFxuICAgIERyb3Bkb3duOiAxMDAwLFxuICAgIFRvb2x0aXA6IDEwMDAwXG59XG5cbmV4cG9ydCBjb25zdCBTdGF0ZXMgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBXQVJOSU5HOuOAgCd3YXJuaW5nJyxcbiAgICBFUlJPUjogJ2Vycm9yJyxcbiAgICBNSVNTSU5HOiAnbWlzc2luZydcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBidXR0b25gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNsaWNrZWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKG9uQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrZWQoZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dGV4dCwgdHlwZSwgdGl0bGUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSB0eXBlPXt0eXBlfSB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9Pnt0ZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJ1dHRvblZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGV4dDogJ0J1dHRvbicsXHJcbiAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRpc2FibGVkOiBmYWxzZVxyXG59O1xyXG5cclxuQnV0dG9uVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DbGlja2VkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uID0gd2l0aFRvb2x0aXAoQnV0dG9uVmlldyk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgaGVhZGVyYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxoMSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT57dGhpcy5wcm9wcy50ZXh0fTwvaDE+KTtcbiAgICB9XG59XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJydcbn07XG5cbkhlYWRlci5kZWZhdWx0VHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRleHRJbnB1dGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCB0eXBlLCBkaXNhYmxlZCwgbmFtZSwgc3RhdGUsIGlucHV0VmFsdWUsIGF1dG9jb21wbGV0ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgc3RhdGUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dCA9PiB0aGlzLmRvbU5vZGUgPSBpbnB1dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9e2F1dG9jb21wbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGV4dElucHV0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgYXV0b2NvbXBsZXRlOiAnb24nXG59O1xuXG5UZXh0SW5wdXRWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMubmFtZSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBUZXh0SW5wdXQgPSB2YWxpZGF0YWJsZSh3aXRoVG9vbHRpcChUZXh0SW5wdXRWaWV3KSk7XG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQvaW5kZXguanN4IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgc3BsaXR0ZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCBpc1ZlcnRpY2FsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBgJHtpc1ZlcnRpY2FsID8gYCB2ZXJ0aWNhbGAgOiAnIGhvcml6b250YWwnfWApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiB0cnVlXG59O1xuXG5TcGxpdHRlci5wcm9wVHlwZXMgPSB7XG4gICAgaXNWZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsImNvbnN0IFBvcHVwTWFuYWdlciA9IHtcbiAgICB0eXBlczogWydEaWFsb2cnXSxcbiAgICBldmVudFR5cGU6ICdrZXlkb3duJyxcbiAgICBzdGFjazogW10sXG4gICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMCAmJiAhdGhpcy5ldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZShjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMuc3RhY2suZmlsdGVyKHNhdmVkQ29tcG9uZW50ID0+IHNhdmVkQ29tcG9uZW50ICE9PSBjb21wb25lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50VHlwZSwgdGhpcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suaW5jbHVkZXMoY29tcG9uZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5kb21Ob2RlICYmIGNvbXBvbmVudC5kb21Ob2RlLm9mZnNldEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBkZWNvdXBsZVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wcy5jbG9zZSh7fSwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgaXNPcGVuID0gY29tcG9uZW50LnByb3BzLmlzT3BlbjtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzKGNvbXBvbmVudCkgJiYgaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gYSBwb3B1cCBtdXN0IGltcGxlbWVudCBjbG9zZSBhbmQgb3BlblxuICAgIGlzUG9wdXAoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVzLmluY2x1ZGVzKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cE1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL1BvcHVwTWFuYWdlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9BcHAnO1xyXG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL0RpYWxvZ3MnO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSAnLi9Gb3Jtcyc7XHJcbmltcG9ydCBUb29sdGlwcyBmcm9tICcuL1Rvb2x0aXBzJztcclxuaW1wb3J0IE1vbml0b3JpbmcgZnJvbSAnLi9Nb25pdG9yaW5nJztcclxuXHJcblxyXG5jb25zdCBuYXZEZWYgPSBbXHJcbiAgICB7aWQ6ICdtb24nLCBsYWJlbDogJ01vbml0b3JpbmcnLCB1cmw6ICcvI21vbicsIGNvbXBvbmVudDogPE1vbml0b3JpbmcgLz59LFxyXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBFbGVtZW50cycsIHVybDogJy8jZm9ybScsIGNvbXBvbmVudDogPEZvcm1zIC8+fSxcclxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXHJcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcclxuICAgICAgICB7aWQ6ICd0b29sdGlwcycsIGxhYmVsOiAnVG9vbHRpcHMnLCB1cmw6ICcvI3dpZGdldHMvdG9vbHRpcHMnLCBjb21wb25lbnQ6IDxUb29sdGlwcyAvPn0sXHJcbiAgICBdfSxcclxuICAgIHtpZDogJ3NwZWljYWwnLCBsYWJlbDogJ1NwZWNpYWwnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnaW5maW5pdGUnLCBsYWJlbDogJ0luZmluaXRlIFNjcm9sbCcsIHVybDogJy8jd2lkZ2V0cy9pbmZpbml0ZVNjcm9sbCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiSW5maW5pdGUgU2Nyb2xsXCIgLz59XHJcbiAgICBdfVxyXG5dO1xyXG5cclxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XHJcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3JkZXJDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyJztcbmltcG9ydCBQYW5lIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1BhbmUnO1xuaW1wb3J0IFNwbGl0dGVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyJztcbmltcG9ydCBUcmVlVmlldyBmcm9tICdjb21wb25lbnRzL0xheW91dC9UcmVlVmlldyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L1N3aXRjaCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFdpbmRvd01lbW9yeVZpZXdlciBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyJztcbmltcG9ydCBBUEkgZnJvbSAnLi9BUEknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSWQ6ICdtb24nLFxuICAgICAgICAgICAganNIZWFwU2l6ZUxpbWl0OiAwLFxuICAgICAgICAgICAgdG90YWxKU0hlYXBTaXplOiAwLFxuICAgICAgICAgICAgdXNlZEpTSGVhcFNpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnLycpLFxuICAgICAgICAgICAgYWN0aXZlSWQgPSBoYXNoW2hhc2gubGVuZ3RoIC0gMV0ucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE1lbW9yeVN0YXQoKTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldE1lbW9yeVN0YXQoKTtcblxuICAgICAgICBBUEkuaW5pdFdTKCk7XG5cbiAgICAgICAgQVBJLmFkZFdTTGlzdGVuZXIodGhpcyk7XG4gICAgICAgIEFQSS53c1NlbmQoJ2hlbGxvIHNlcnZlcicpLnRoZW4oZCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFQSS53c1NlbmQoJ2hlbGxvIHNlcnZlcjInKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFQSS53c1NlbmQoJ2hlbGxvIHNlcnZlcjMnKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFQSS53c1NlbmQoJ2hlbGxvIHNlcnZlcjQnKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cblxuICAgIGdldE1lbW9yeVN0YXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UcmVlTm9kZUNsaWNrKG5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5jaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUlkOiBub2RlLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwibGVmdFBhbmVcIiBzcGxpdHRlcj1cInZlcnRpY2FsXCIgc2l6ZT17MjAwfSBtaW5TaXplPXsyMDB9IG1heFNpemU9ezUwMH0gc2l6ZVVuaXQ9XCJweFwiID5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRlZj17dGhpcy5wcm9wcy5uYXZ9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwicmlnaHRQYW5lXCIgZGlzcGxheT1cImZsZXhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgc3BsaXR0ZXI9XCJob3Jpem9udGFsXCIgc2l6ZT17NzV9IG1heFNpemU9ezgwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGVmPXt0aGlzLnByb3BzLnBhZ2VzfSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dNZW1vcnlWaWV3ZXIganNIZWFwU2l6ZUxpbWl0PXt0aGlzLnN0YXRlLmpzSGVhcFNpemVMaW1pdH0gdG90YWxKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnRvdGFsSlNIZWFwU2l6ZX0gdXNlZEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudXNlZEpTSGVhcFNpemV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBib3JkZXJDb250YWluZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGVyc2lzdDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQm9yZGVyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyc2lzdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBTcGxpdHRlciBmcm9tICcuLi9TcGxpdHRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzoga2V5Ym9hcmQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBwYW5lYDtcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtzcGxpdHRlciwgc2l6ZSwgc2l6ZVVuaXQsIG1heFNpemUsIG1pblNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ251bGwnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICB7bWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLFxuICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50WCA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFggPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFgpLFxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIHNwbGl0dGVyLCBkaXJlY3Rpb24sIGRpc3BsYXksIHNwbGl0dGVyU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgYCR7c3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcgPyBgIHZlcnRpY2FsUGFuZWAgOiAnJ31gKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXR0ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubGVmdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2V0U3RhdGUudG9wIC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocGFuZSkgPT4geyB0aGlzLmRvbU5vZGUgPSBwYW5lOyB9fVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHtzcGxpdHRlciAhPT0gJ251bGwnID8gPFNwbGl0dGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3BsaXR0ZXJTdHlsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzcGxpdHRlcjogJ251bGwnLFxuICAgIHNpemU6IDI1LFxuICAgIG1pblNpemU6IDE1LFxuICAgIG1heFNpemU6IDUwLFxuICAgIHNpemVVbml0OiAnJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHNwbGl0dGVyU2l6ZTogMTBcbn07XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmVlTm9kZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kOiB0aGlzLnByb3BzLmV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyAmJiBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLnN0YXRlLmV4cGFuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIGxhYmVsLCB1cmwsIGNoaWxkcmVuLCBvblRyZWVOb2RlQ2xpY2ssIGFjdGl2ZUlkfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBleHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGFjdGl2ZUlkID09PSBpZCAmJiAhY2hpbGRyZW4pID8gdGhpcy5wcm9wcy5mb2N1c0NsYXNzIDogKGV4cGFuZCA/IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzIDogdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybCA/IHVybCA6ICdqYXZhc2NyaXB0OnZvaWQoMCknfT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiBleHBhbmQgPyA8dWw+e2NoaWxkcmVuLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17YWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17b25UcmVlTm9kZUNsaWNrfSB7Li4uY30gLz4pfTwvdWw+OiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9jdXNDbGFzczogJ2ZvY3VzZWQnLFxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXG4gICAgZXhwYW5kb0NsYXNzOiAnZm9sZCdcbn07XG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3RyZWVWaWV3JztcbiAgICB9XG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2lkLCBjaGlsZHJlbn0gPSB0cmVlTm9kZSxcbiAgICAgICAgICAgIHtvblRyZWVOb2RlQ2xpY2t9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSk7XG5cbiAgICAgICAgLy8gaWYgbm8gc2VsZWN0aW9uIG9yIG5vIGNoaWxkcmVuLCBmb2N1cyB0YXJnZXRcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmFjdGl2ZUlkID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUlkOiBpZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDx1bD57dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9IHsuLi5jfSAvPil9PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5UcmVlVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IENvbnRlbnRQYW5lIGZyb20gJy4uL0NvbnRlbnRQYW5lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdzd2l0Y2gnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGRhdGEtYWN0aXZlLWlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudFBhbmUgY2xhc3NOYW1lPXtjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkID8gdGhpcy5wcm9wcy5hY3RpdmVJZCA6ICdoaWRkZW4nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoYy5jb21wb25lbnQsIHthY3RpdmU6IGMuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWR9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50UGFuZT4pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWY6IFtdXG59O1xuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGRlZjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGFjdGl2ZUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjb250ZW50UGFuZWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db250ZW50UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbi8vIERpYWxvZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93TWVtb3J5Vmlld2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHdpbmRvd01lbW9yeVZpZXdlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5KYXZhc2NyaXB0IEhlYXAgU2l6ZSBMaW1pdDo8L3NwYW4+IDxzcGFuPntqc0hlYXBTaXplTGltaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VG90YWwgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dG90YWxKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlVzZWQgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dXNlZEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9XaW5kb3dNZW1vcnlWaWV3ZXIvaW5kZXguanN4IiwibGV0IHdzQ29ubmVjdGVkID0gZmFsc2UsXG4gICAgZGF0YUlkID0gMCxcbiAgICByZXF1ZXN0cyA9IG5ldyBNYXAoKTtcblxuY29uc3QgQVBJID0ge1xuICAgIGluaXRXUygpIHtcbiAgICAgICAgaWYgKCF3c0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjgwODEnKTtcbiAgICAgICAgICAgIHRoaXMud3NMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgICAgIHRoaXMud3NPUGVuUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgbWVzc2FnZXNcbiAgICAgICAgICAgIHRoaXMud3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdHMuaGFzKGRhdGEuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNvbHZlciA9IHJlcXVlc3RzLmdldChkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2goZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3NDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdzU2VuZChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlciA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbdGhpcy53c09QZW5Qcm9taXNlXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZGF0YUlkKys7XG4gICAgICAgICAgICAgICAgdGhpcy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtpZCwgZGF0YX0pKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0cy5zZXQoaWQsIHJlc29sdmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYWRkV1NMaXN0ZW5lcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy53c0xpc3RlbmVycy5zZXQoY29tcG9uZW50LmlkLCBjb21wb25lbnQpO1xuICAgIH0sXG5cbiAgICByZW1vdmVXU0xpc3RlbmVyKGlkKSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuZGVsZXRlKGlkKTtcbiAgICB9LFxuXG4gICAgX2Rpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMud3NMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lci5vbkRhdGEgJiYgbGlzdGVuZXIub25EYXRhKGV2ZW50LmRhdGEsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9BUEkvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL0RpYWxvZyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICdjb21wb25lbnRzL1dpZGdldHMvT3ZlcmxheSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2dnbGVEaWFsb2dPcGVuIH0gZnJvbSAnLi9EaWFsb2dzQWN0aW9uJztcblxuLy8gRGlhbG9ncyBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQgPSB0aGlzLm9uQnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlRGlhbG9nID0gdGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2cgPSB0aGlzLm9wZW5EaWFsb2cuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy50cmFuc2Zvcm1TdGF0ZSh7XG4gICAgICAgICAgICBkaWFsb2cxOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpYWxvZzI6IHtcbiAgICAgICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2tlZChlLCBidXR0b24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGJ1dHRvbi5wcm9wcy5kaWFsb2cpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBjbG9zZURpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIHRvIHN5bmMgaW50ZXJuYWwgc3RhdGVcbiAgICBvcGVuRGlhbG9nKGUsIGRpYWxvZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nLnByb3BzLmNvbXBvbmVudElkLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkU2hvd092ZXJsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVuIHx8IHRoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZT0ge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzFcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzFcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlhbG9nPVwiZGlhbG9nMlwiIG9uQ2xpY2tlZD17dGhpcy5vbkJ1dHRvbkNsaWNrZWR9IHRleHQ9XCJ0b2dnbGUgRGlhbG9nMlwiIC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMSRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMVwiIHRpdGxlPVwiZGlhbG9nMVwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IC8+XG4gICAgICAgICAgICAgICAgPERpYWxvZyBpc09wZW49e3RoaXMuc3RhdGUuZGlhbG9nMiRpc09wZW59IGNvbXBvbmVudElkPVwiZGlhbG9nMlwiIHRpdGxlPVwiZGlhbG9nMlwiIG9wZW49e3RoaXMub3BlbkRpYWxvZ30gY2xvc2U9e3RoaXMuY2xvc2VEaWFsb2d9IHJlcG9zaXRpb25Pbk9wZW49e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgZHJhZ2dhYmxlLCBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyBEaWFsb2dcbmV4cG9ydCBjbGFzcyBEaWFsb2dWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0RpYWxvZyc7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkaWFsb2dgO1xuICAgICAgICB0aGlzLmhlYWRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jbG9zZScpO1xuICAgICAgICB0aGlzLmJvZHlDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJvZHknKTtcbiAgICAgICAgdGhpcy5mb290ZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdkaWFsb2ctYnRuLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jb25maXJtJyk7XG4gICAgICAgIC8vIGhhbmRsZXJzXG4gICAgICAgIHRoaXMub25DYW5jZWxCdG5DbGlja2VkID0gdGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkID0gdGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbG9zZUJ0bkNsaWNrZWQgPSB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBvcGVuLCBjbG9zZSwgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZSxcbiAgICAgICAgICAgIG5leHRDbG9zZSA9IG5leHRQcm9wcy5pc09wZW4gPT09IGZhbHNlICYmIGlzT3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dE9wZW4pICB7XG4gICAgICAgICAgICBvcGVuKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Q2xvc2UpIHtcbiAgICAgICAgICAgIGNsb3NlKHt9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZShlLCB0aGlzKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbEJ0bkNsaWNrZWQoZSkge1xuICAgICAgICBjb25zdCB7b25DYW5jZWx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkKGUpO1xuXG4gICAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICAgICAgb25DYW5jZWwoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbmZpcm1CdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ29uZmlybX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgICAgIG9uQ29uZmlybShlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21vZCwgdGl0bGUsIGJvZHksIGNhbmNlbExhYmVsLCBjb25maXJtTGFiZWwsIGNsb3NlQnRuTGFiZWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCBtb2QsICghdGhpcy5wcm9wcy5pc09wZW4gPyAnaGlkZGVuJyA6ICcnKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5oZWFkZXJDbGFzc30gPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9e2Nsb3NlQnRuTGFiZWx9IHRleHQ9e2Nsb3NlQnRuTGFiZWx9IG9uQ2xpY2tlZD17dGhpcy5vbkNsb3NlQnRuQ2xpY2tlZH0gY2xhc3NOYW1lPXt0aGlzLmNsb3NlQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuYm9keUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuZm9vdGVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNhbmNlbEJ0bkNsaWNrZWR9IHRleHQ9e2NhbmNlbExhYmVsfSBjbGFzc05hbWU9e3RoaXMuY2FuY2VsQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGlja2VkPXt0aGlzLm9uQ29uZmlybUJ0bkNsaWNrZWR9IHRleHQ9e2NvbmZpcm1MYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNvbmZpcm1CdG5DbGFzc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlhbG9nVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kOiAnJyxcbiAgICB0aXRsZTogJ0RpYWxvZyBUaXRsZScsXG4gICAgYm9keTogJ0FOUjEwMzI4MjkgVGhpcyBpcyBhIHNhbXBsZSBtZXNzYWdlLiBEZGxma3dlcm9pdSBzZGZyIHNkZmplcml1IGRmZXJlcmRmc2YuJyxcbiAgICBoZWxwTGFiZWw6ICdIZWxwJyxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgY2xvc2VCdG5MYWJlbDogJ0Nsb3NlJyxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG9wZW46ICgpID0+IHt9LFxuICAgIGNsb3NlOiAoKSA9PiB7fVxufTtcblxuRGlhbG9nVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVscExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZUJ0bkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgRGlhbG9nID0gcG9wdXBhYmxlKGRyYWdnYWJsZShEaWFsb2dWaWV3LCAnaGVhZGVyQ2xhc3MnKSk7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBkcmFnZ2FibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShDb21wb25lbnQsIGNsYXNzUHJvcGVydHkpIHtcbiAgICBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd25IYW5kbGVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbiAmJiByZXBvc2l0aW9uT25PcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXBvc2l0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9tTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB7bGVmdCwgdG9wfSA9IGdldENlbnRlclBvc2l0aW9uKHdpbmRvdywgdGhpcy5kb21Ob2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudEJlaW5nTW92ZWQgPSB0aGlzLmRvbU5vZGUsXG4gICAgICAgICAgICAgICAgcmVjdCA9IENvbXBvbmVudEJlaW5nTW92ZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAgICB7bGFzdE1vdXNlWCwgbGFzdE1vdXNlWX0gPSB0aGlzLFxuICAgICAgICAgICAgICAgIGxlZnRUb01vdXNlID0gY2xpZW50WCAtIGxhc3RNb3VzZVgsXG4gICAgICAgICAgICAgICAgdG9wVG9Nb3VzZSA9IGNsaWVudFkgLSBsYXN0TW91c2VZLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLmxlZnQgKyBsZWZ0VG9Nb3VzZSksXG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS50b3AgKyB0b3BUb01vdXNlKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoLCBsZWZ0KSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0LCB0b3ApXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NQcm9wZXJ0eSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXNbY2xhc3NQcm9wZXJ0eV0pKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiB0cnVlLFxuICAgICAgICBzdHlsZU9iajoge31cbiAgICB9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gRHJhZ2dhYmxlQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcblxuLy8gcG9wdXBhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cGFibGUoQ29tcG9uZW50KSB7XG4gICAgbGV0IHpJbmRleCA9IHpJbmRleHNbQ29tcG9uZW50LnR5cGVdIHx8IDA7XG5cbiAgICBjbGFzcyBQb3B1cENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSAmJiBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5oYW5kbGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iaiA6IHt6SW5kZXg6IHRoaXMuc3RhdGUuekluZGV4fSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMuc3RhdGUuekluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB7Li4ubmV3UHJvcHN9IHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9IC8+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQb3B1cENvbXBvbmVudDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU3RhdGVzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIG1lc3NhZ2U6ICcnLFxuICAgIG1vZDogJydcbn07XG5cbi8vIHZhbGlkYXRhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0YWJsZShDb21wb25lbnQpIHtcbiAgICBjbGFzcyBWYWxpZGF0YWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGdldCBtZXNzYWdlRGVmKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdGhpcy5wcm9wcy5pbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiB0aGlzLnByb3BzLm1pc3NpbmdNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGltY29tcGxldGU6IHRoaXMucHJvcHMucHJvbXB0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICAnJzogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gaGFuZGxlclxuICAgICAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIGluaXRTdGF0ZSk7XG4gICAgICAgICAgICAvLyBsb2NhbCB2YXJpYWJsZSBzaG91bGQgbm90IGJlIHVzZWQgYXMgdHJpZ2dlciB0YWdcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRNZXNzYWdlKG1vZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZURlZlttb2RdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBjb25zdCB7IGRpc2FibGVkLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG5leHREaXNhYmxlZCA9IG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBkaXNhYmxlZCA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dEVuYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IGZhbHNlICYmIGRpc2FibGVkID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobmV4dERpc2FibGVkKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzQmVlbkJsdXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShuZXh0UHJvcHMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25CbHVyKGUpIHtcbiAgICAgICAgICAgIC8vIHNldCBibHVyIGZsYWdcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRm9jdXMoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGluaXRTdGF0ZSkpO1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVmFsaWQodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHtyZWdFeHAsIHZhbGlkYXRvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIXJlZ0V4cCAmJiAhdmFsaWRhdG9yKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4cCAmJiByZWdFeHAudGVzdCh2YWx1ZSkgfHwgdmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWlyZWQsIG9uVmFsaWRhdGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGlzVmFsdWVFbXB0eSA9IGlzRW1wdHkoaW5wdXRWYWx1ZSksXG4gICAgICAgICAgICAgICAgbm90VmFsaWQgPSAhdGhpcy5pc1ZhbGlkKGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG1vZCA9IChpc1ZhbHVlRW1wdHkgJiYgcmVxdWlyZWQpID8gU3RhdGVzLk1JU1NJTkcgOiBub3RWYWxpZCA/IFN0YXRlcy5FUlJPUiA6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UobW9kKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZCwgbWVzc2FnZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25WYWxpZGF0ZWQgJiYgb25WYWxpZGF0ZWQoe21vZCwgbWVzc2FnZSwgb2s6IG1vZCA9PT0gJyd9LCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUubW9kLFxuICAgICAgICAgICAgICAgIG1vZDogdGhpcy5zdGF0ZS5tb2QsXG4gICAgICAgICAgICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5tZXNzYWdlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb2QgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMudG9vbHRpcCA9IHRoaXMuc3RhdGUubWVzc2FnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICg8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBwcm9tcHRNZXNzYWdlOiAnJyxcbiAgICAgICAgaW52YWxpZE1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIG5vdCB2YWxpZCcsXG4gICAgICAgIG1pc3NpbmdNZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuICAgIH0pO1xuXG4gICAgVmFsaWRhdGFibGVDb21wb25lbnQucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7fSwgQ29tcG9uZW50LnByb3BUeXBlcywge1xuICAgICAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHByb21wdE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGludmFsaWRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBtaXNzaW5nTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcmVnRXhwOiBQcm9wVHlwZXMucmVnRXhwLFxuICAgICAgICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvblZhbGlkYXRlZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9KTtcblxuICAgIHJldHVybiBWYWxpZGF0YWJsZUNvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlbHBlci92YWxpZGF0YWJsZS5qc3giLCJpbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vV2lkZ2V0cy9Ub29sdGlwJztcclxuXHJcbi8vIHNoYXJlZCB0b29sdGlwIHN0YXRlXHJcbmxldCB0b29sdGlwVGltZW91dCA9IG51bGwsXHJcbiAgICByZWdpc3RlciA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4vLyB3aXRoVG9vbHRpcFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoVG9vbHRpcChDb21wb25lbnQpIHtcclxuICAgIGNsYXNzIENvbXBvbmVudFdpdGhUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLm9uVG9vbHRpcE1vdXNlRW50ZXIgPSB0aGlzLm9uVG9vbHRpcE1vdXNlRW50ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvb2x0aXBNb3VzZUxlYXZlID0gdGhpcy5vblRvb2x0aXBNb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50ICYmIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRvb2x0aXAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGxldCB0b29sdGlwQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCd0b29sdGlwJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vdCBleGlzdCwgY3JlYXRlIG9uY2VcclxuICAgICAgICAgICAgaWYgKCF0b29sdGlwQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG9vbHRpcCcpO1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5jbGFzc05hbWUgPSAndG9vbHRpcCc7XHJcbiBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbHRpcENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYXNzaWduIGl0IHRvIGNvbXBvbmVudCBsb2NhbCBwcm9wXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lciA9IHRvb2x0aXBDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbU5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50RGlkTW91bnQgd2lsbCBiZSBjYWxsIG11bHRpcGxlIHRpbWVzIGlmIHVzaW5nIGluIGhpZ2hlciBvcmRlciB3YXlcclxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBhdm9pZCByZWdpc3RlciBtdWx0aXBsZSBzYW1lIGRvbSBub2Rlc1xyXG4gICAgICAgICAgICBpZiAoIXJlZ2lzdGVyLmhhcyh0aGlzLndyYXBOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwTm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyLnNldCh0aGlzLndyYXBOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCguLi5hcmdzKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUxpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRvb2x0aXBQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSB0aGlzLndyYXBOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAge3Njcm9sbFRvcCwgc2Nyb2xsTGVmdH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB7dG9vbHRpcFBvc2l0aW9uLCB0b29sdGlwUG9zaXRpb25zLCBtaW5XaWR0aDp0b29sdGlwV2lkdGgsIG1pbkhlaWdodDp0b29sdGlwSGVpZ2h0LCBwYWRkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IC05OTk5LFxyXG4gICAgICAgICAgICAgICAgdG9wID0gLTk5OTk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb3JyZWN0IHRoZSBzY3JvbGxpbmcgdmFsdWVcclxuICAgICAgICAgICAgeCA9IHggKyBzY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICB5ID0geSArIHNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCh0b29sdGlwUG9zaXRpb25zW3Rvb2x0aXBQb3NpdGlvbl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCArIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlJzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCAtIHRvb2x0aXBXaWR0aCAtIHBhZGRpbmcgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgLSB0b29sdGlwSGVpZ2h0IC0gcGFkZGluZyAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVsb3cnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVsb3ctY2VudGVyZWQnOiBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0geCArICgod2lkdGggLSB0b29sdGlwV2lkdGggLSBwYWRkaW5nICogMikgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Fib3ZlLWNlbnRlcmVkJzogXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHggKyAoKHdpZHRoIC0gdG9vbHRpcFdpZHRoIC0gcGFkZGluZyAqIDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0geSAtIHRvb2x0aXBIZWlnaHQgLSBwYWRkaW5nICogMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7bGVmdCwgdG9wfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRvb2x0aXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uVG9vbHRpcE1vdXNlRW50ZXIoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXBDYW5CZUVudGVyZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblRvb2x0aXBNb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICB0aGlzLl9vblRvb2x0aXAgPSBmYWxzZTtcclxuICAgICAgICAgICB0aGlzLmNsZWFyVG9vbHRpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUb29sdGlwKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29uVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHRvb2x0aXA9XCJcIiAvPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMucHJvcHMudG9vbHRpcENhbkJlRW50ZXJlZCA/IDMwMDogMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b29sdGlwU2hvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0b29sdGlwVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlclRvb2x0aXAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldFRvb2x0aXBQb3MoKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdGhpcy5wcm9wcy50b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGhpcy5wcm9wcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uVG9vbHRpcE1vdXNlRW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vblRvb2x0aXBNb3VzZUxlYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBSZWFjdERvbS5yZW5kZXIoPFRvb2x0aXAgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdQcm9wc30gey4uLnBvc30vPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBTaG93aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdG9vbHRpcFNob3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5kaXNwbGF5VmFsdWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+PENvbXBvbmVudCByZWY9e3RoaXMucHJvY2Vzc1JlZn0gIHsuLi50aGlzLnByb3BzfSAvPjwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29tcG9uZW50V2l0aFRvb2x0aXAuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczoge1xyXG4gICAgICAgICAgICAnYWZ0ZXInOiAnYWZ0ZXInLFxyXG4gICAgICAgICAgICAnYmVmb3JlJzogJ2JlZm9yZScsXHJcbiAgICAgICAgICAgICdhYm92ZSc6ICdhYm92ZScsXHJcbiAgICAgICAgICAgICdiZWxvdyc6ICdiZWxvdycsXHJcbiAgICAgICAgICAgICdiZWxvdy1jZW50ZXJlZCc6ICdiZWxvdy1jZW50ZXJlZCcsXHJcbiAgICAgICAgICAgICdhYm92ZS1jZW50ZXJlZCc6ICdhYm92ZS1jZW50ZXJlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBDYW5CZUVudGVyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogJ2FmdGVyJyxcclxuICAgICAgICBzdGF0ZTogJ25vcm1hbCdcclxuICAgIH0sIFRvb2x0aXAuZGVmYXVsdFByb3BzLCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcclxuXHJcbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICB0b29sdGlwUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICB0b29sdGlwQ2FuQmVFbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0sIFRvb2x0aXAucHJvcFR5cGVzKTtcclxuXHJcbiAgICByZXR1cm4gQ29tcG9uZW50V2l0aFRvb2x0aXA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3dpdGhUb29sdGlwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB6SW5kZXhzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xUaXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRvb2x0aXBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNPcGVuLCB0b29sdGlwLCBzdGF0ZSwgbGVmdCwgdG9wLCBtaW5XaWR0aCwgbWF4V2lkdGgsIG1pbkhlaWdodCwgbWF4SGVpZ2h0LCBvcGFjaXR5LCB6SW5kZXgsIHBhZGRpbmd9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgc3RhdGUpLFxyXG4gICAgICAgICAgICBkZWZhdWx0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IG1pbldpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBtYXhXaWR0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlRXZlbnR9IG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZUV2ZW50fSBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlRXZlbnR9IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17dG9vbHRpcCA/IHN0eWxlIDogZGVmYXVsdFN0eWxlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdG9vbHRpcH19IC8+KVxyXG4gICAgfVxyXG59XHJcblxyXG5Ub29sVGlwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0b29sdGlwOiAnJyxcclxuICAgIGxlZnQ6IC05OTk5OSxcclxuICAgIHRvcDogLTk5OTk5LFxyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICAgIG1heFdpZHRoOiAyMDAsXHJcbiAgICBtaW5IZWlnaHQ6IDIwLFxyXG4gICAgbWF4SGVpZ2h0OiAxMDAsXHJcbiAgICBzdGF0ZTogJ05PUk1BTCcsXHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gICAgekluZGV4OiB6SW5kZXhzLlRvb2x0aXBcclxufTtcclxuXHJcblRvb2xUaXAucHJvcFR5cGVzID0ge1xyXG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1Rvb2x0aXAvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYG92ZXJsYXlgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgKCFpc09wZW4gPyAnaGlkZGVuJyA6ICcnKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4cy5PdmVybGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PjwvZGl2PilcbiAgICB9XG59XG5cbk92ZXJsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIG9wYWNpdHk6IC41XG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nTmFtZSwgb3BlblN0YXRlKSB7XG4gICAgbGV0IGhhc1N0YXRlU2V0ID0gdHlwZW9mIG9wZW5TdGF0ZSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIG9wZW5TdGF0ZU5hbWUgPSAnJGlzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9DaGVja2JveCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IHZhbGlkYXRvciA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbn1cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHdkRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXG4gICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICBuYW1lOiAncHdkRmllbGQnXG4gICAgfSxcbiAgICBkcm9wZG93bjoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVDaGVja2JveDoge1xuICAgICAgICBuYW1lOiAnZGlzYWJsZUNoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9LFxuICAgIGhpZGRlbjogdHJ1ZVxufTtcblxuLy8gRm9ybSBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25JdGVtID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMScsIHZhbHVlOiAnaTEnfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDInLCB2YWx1ZTogJ2kyJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAzJywgdmFsdWU6ICdpMyd9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgdG9nZ2xlRmllbGREaXNhYmxlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuZ2V0U3RhdGUobmFtZSwgJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnB3ZEZpZWxkLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXToge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdkaXNhYmxlQ2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0aGlzLmdldFN0YXRlKCdkcm9wZG93bicsICAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IGRpc2FibGVkID8gJ2Rpc2FibGVkIHRvb2x0aXAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMiwgaTMsIGRyb3Bkb3duUHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyduYW1lRmllbGQnLCAncHdkRmllbGQnLCAnZGlzYWJsZUNoZWNrYm94JywgJ2Ryb3Bkb3duJ10pO1xuXG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXA9XCJEaXNhYmxlZCB0b29sdGlwXCIgdGV4dD1cIkRpc2FibGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiVmFsaWRhdGlvblRleHRCb3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkxfSByZWY9e25hbWUgPT4gdGhpcy5uYW1lRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgey4uLmkyfSByZWY9e25hbWUgPT4gdGhpcy5wd2RGaWVsZCA9IG5hbWV9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PFRleHRJbnB1dCBkaXNhYmxlZD17dHJ1ZX0gdG9vbHRpcD17XCJEaXNhYmxlZCB0b29sdGlwXCJ9IGlucHV0VmFsdWU9XCJJIGFtIGRpc2FibGVkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UsIG9uZSBsb3dlcmNhc2UsIGFuZCBvbmUgbnVtYmVyLjwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRHJvcGRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXRlbXM9e3RoaXMuZHJvcGRvd25JdGVtfSBvbkNoYW5nZT17dGhpcy5vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9IHsuLi5kcm9wZG93blByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJDaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkRpc2FibGUgZHJvcCBkb3duXCIgey4uLmkzfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRhYmxlICwgd2l0aFRvb2x0aXAgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94VmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjaGVja2JveGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpc2FibGVkLCBuYW1lLCBjaGVja2VkLCBsYWJlbH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9e2lucHV0ID0+IHRoaXMuZG9tTm9kZSA9IGlucHV0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAvPntsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DaGVja2JveFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsYWJlbDogJydcbn07XG5cbkNoZWNrYm94Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IENoZWNrYm94ID0gd2l0aFRvb2x0aXAoQ2hlY2tib3hWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcblxuaW1wb3J0IHsgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZClbMF07XG4gICAgfVxuICAgIGdldCBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXNbMF0gfHwge307XG4gICAgfVxuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1t0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAtIDFdIHx8IHt9O1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5zdGF0ZS5pdGVtcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLnNlbGVjdGVkSXRlbS5pZCkgOiAwO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIGNsYXNzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bmA7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygncGxhY2Vob2xkZXInKTtcbiAgICAgICAgLy8gaGFuZGxlcnNcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHRoaXMuaW5pdEZpbHRlciA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZElkOiAnLTEnLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgY3Vyc29yOiAnLTEnLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RleHRJbnB1dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAodGhpcy5fY2xpY2tPckZvY3VzQW55d2hlcmVIYW5kbGVyID0gZSA9PiB0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZShlKSkpO1xuICAgICAgICBjb25zdCB7aXRlbXN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogaXRlbXMubWFwKChpdGVtLCBpKSA9PiBPYmplY3QuYXNzaWduKGl0ZW0sIHtpZDogJ2l0ZW0nICsgaX0pKX0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIF9jbGlja09yRm9jdXNBbnl3aGVyZShlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjbGljayB3YXMgd2l0aGluIHNlbGYsIGlnbm9yZTsgb3RoZXJ3aXNlLCBjbG9zZSBzZWxmXG4gICAgICAgIGlmICghdGhpcy5kb21Ob2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dChpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSB0aGlzLmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmZpcnN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSArIDFdLmlkO1xuICAgIH1cblxuICAgIHByZXYoaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4T2ZJdGVtID09PSAwKSByZXR1cm4gdGhpcy5sYXN0LmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1tpbmRleE9mSXRlbSAtIDFdLmlkO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQgPSAtMSkge1xuICAgICAgICBpZiAoaWQgPT09IC0xKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGxldCBjdXJzb3JJZCA9IHRoaXMuc3RhdGUuY3Vyc29yICE9PSAtMSA/IHRoaXMuc3RhdGUuY3Vyc29yIDogdGhpcy5zdGF0ZS5zZWxlY3RlZElkO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMubmV4dChjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMucHJldihjdXJzb3JJZCksXG4gICAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oY3Vyc29ySWQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkOiBjdXJzb3JJZCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICF0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA6IC0xLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyLFxuICAgICAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBpdGVtID8gaXRlbS5sYWJlbCA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXIsXG4gICAgICAgICAgICBjdXJzb3I6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgaWQsIHNlbGVjdGVkLCBsYWJlbH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHt0YXJnZXQ6IHRoaXMuZG9tTm9kZX0pKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgdGV4dElucHV0OiB7IGlucHV0VmFsdWUgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5nZXRGaWx0ZXIoaW5wdXRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGNoYXJzID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyksXG4gICAgICAgICAgICAgICAgcmVnR3JwID0gY2hhcnMubWFwKGMgPT4gYFskeyhjICsgJycpLnRvVXBwZXJDYXNlKCl9JHsoYyArICcnKS50b0xvd2VyQ2FzZSgpfV1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHJlZ0dycC5qb2luKCcnKSkpLnRlc3QoaXRlbS5sYWJlbClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgY3Vyc29yOiAtMSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB7aXRlbXMsIHNlbGVjdGVkSWQsIGN1cnNvcn0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBbaW5wdXRQcm9wc10gPSB0aGlzLmdldFN0YXRlcyhbJ3RleHRJbnB1dCddKSxcbiAgICAgICAgICAgIG5ld0lucHV0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5sYWJlbCA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfSByZWY9e3RoaXMucHJvY2Vzc1JlZn0gb25DbGljaz17dGhpcy5oYW5kbGVFdmVudH0gb25LZXlEb3duPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNlbGVjdGVkPXshIXNlbGVjdGVkSXRlbX0gdmFsdWU9e3NlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS52YWx1ZSA6ICcnfSBjbGFzc05hbWU9e3RoaXMucGxhY2Vob2xkZXJDbGFzcyArICcgbm9uZSBjdXJyZW50J30+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgey4uLnRoaXMucHJvcHN9IHsuLi5uZXdJbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3QgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn0gY2xvc2U9e3RoaXMuY2xvc2V9IGl0ZW1zPXtpdGVtc30gc2VsZWN0ZWRJZD17Y3Vyc29yICE9PSAtMSA/IGN1cnNvcjogc2VsZWN0ZWRJZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkxpc3RWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ0Ryb3Bkb3duJztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZHJvcGRvd25XcmFwcGVyYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgY2xhc3NOYW1lLCB6SW5kZXgsIHNlbGVjdGVkSWQsIGZpbHRlciwgbm9JdGVtTWVzc2FnZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgKCF0aGlzLnByb3BzLmlzT3BlbiA/ICdoaWRkZW4nIDogJycpKSxcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gaXRlbXMuZmlsdGVyKGZpbHRlciksXG4gICAgICAgICAgICBoYXNJdGVtID0gbmV3SXRlbXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIHN0eWxlID0ge3pJbmRleH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAge2hhc0l0ZW0gPyBuZXdJdGVtcy5tYXAoaXRlbSA9PiA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5pZH0gaWQ9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLmxhYmVsfSB2YWx1ZT17aXRlbS52YWx1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkSWQgPT09IGl0ZW0uaWR9IC8+ICkgOiA8RHJvcGRvd25JdGVtPntub0l0ZW1NZXNzYWdlfTwvRHJvcGRvd25JdGVtPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25MaXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgekluZGV4OiAwLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWUsXG4gICAgbm9JdGVtTWVzc2FnZTogJ05vIEl0ZW0gRm91bmQnXG59XG5cbkRyb3Bkb3duTGlzdFZpZXcucHJvcFR5cGVzID0ge1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vSXRlbU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duTGlzdCA9IHBvcHVwYWJsZShEcm9wZG93bkxpc3RWaWV3KTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bkl0ZW1gO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUsIHZhbHVlLCBsYWJlbCwgaWQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17aWR9IGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkfSBkYXRhLWxhYmVsPXtsYWJlbH0gZGF0YS12YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PntjaGlsZHJlbiB8fCBsYWJlbH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RyaW5nOiAnUGxlYXNlIFNlbGVjdC4uLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm0vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcblxyXG5jb25zdCBsb25nVG9vbHRpcCA9IGBTbywgeWVzdGVyZGF5LCBiZWluZyBhbm90aGVyIHJhaW55IGRheSBpbiBDaGljYWdvLCBJIGdyYWJiZWQgYSBkaWdpdGFsIHJlbnRhbCBvZiBGcmFua2Vud2VlbmllLlxyXG5BIGZldyB5ZWFycyBhZ28sIG15IHdpZmUgYW5kIEkgc2F3IGl0IHdoZW4gaXQgd2FzIGluIHRoZWF0ZXJzLiBBbmQgd2UgbG92ZWQgaXQuIEJlaW5nIHRoYXQgUm9yeSBsb3ZlcyBkb2dzIChsaWtlLCBvYnNlc3NpdmVseSBzbyksIEkgZmlndXJlZCBzaGXigJlkIGVuam95IGl0IHRvby5cclxuTGl0dGxlIGRpZCBJIGtub3cgd2hhdCBJIHdhcyBpbiBzdG9yZSBmb3LigKYsIFNvLCB5ZXN0ZXJkYXksIGJlaW5nIGFub3RoZXIgcmFpbnkgZGF5IGluIENoaWNhZ28sIEkgZ3JhYmJlZCBhIGRpZ2l0YWwgcmVudGFsIG9mIEZyYW5rZW53ZWVuaWUuXHJcbkEgZmV3IHllYXJzIGFnbywgbXkgd2lmZSBhbmQgSSBzYXcgaXQgd2hlbiBpdCB3YXMgaW4gdGhlYXRlcnMuIEFuZCB3ZSBsb3ZlZCBpdC4gQmVpbmcgdGhhdCBSb3J5IGxvdmVzIGRvZ3MgKGxpa2UsIG9ic2Vzc2l2ZWx5IHNvKSwgSSBmaWd1cmVkIHNoZeKAmWQgZW5qb3kgaXQgdG9vLlxyXG5MaXR0bGUgZGlkIEkga25vdyB3aGF0IEkgd2FzIGluIHN0b3JlIGZvcuKApmA7XHJcbmNvbnN0IHRvb2x0aXAgPSBgVGhpcyBpcyBub3JtYWwgdG9vbHRpcGA7XHJcbmNvbnN0IG9uZUxpbmVXaXRoSW5saW5lTWFya3VwID0gYDxzcGFuIGNsYXNzPVwiY29sb3JmdWxcIj5JIGFtIGNvbG9yZnVsIHRvb2x0aXA8L3NwYW4+YDtcclxuLy8gVG9vbHRpcHMgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwidG9vbHRpcHNcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFmdGVyXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWZ0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVmb3JlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVmb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGFib3ZlXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYmVsb3dcIiB0b29sdGlwPXt0b29sdGlwfSB0b29sdGlwUG9zaXRpb249XCJiZWxvd1wiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93LWNlbnRlcmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3ctY2VudGVyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZS1jZW50ZXJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlLWNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgY2FuIGJlIGVudGVycmVkXCIgdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gdG9vbHRpcD17dG9vbHRpcH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBzdGF0ZSBpcyBhbHdheXMgV0FSTklOR1wiIHRvb2x0aXA9e3Rvb2x0aXB9IHRvb2x0aXBTdGF0ZT1cIldBUk5JTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSGVscCBUaXBzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlYWxseSBMb25nIHRvb2x0aXBcIiB0b29sdGlwPXtsb25nVG9vbHRpcH0gdG9vbHRpcENhbkJlRW50ZXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIk9uZS1saW5lciB3aXRoIGlubGluZSBtYXJrdXBcIiB0b29sdGlwPXtvbmVMaW5lV2l0aElubGluZU1hcmt1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1Rvb2x0aXBzL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XHJcblxyXG4vLyBEaWFsb2dzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uaXRvcmluZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgc291cmNlID0gbmV3IEV2ZW50U291cmNlKFwiLy9sb2NhbGhvc3Q6MzAwMC9zZWVkXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHt0aW1lOiBEYXRlLm5vdygpLCB2YWx1ZTogMX1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gZGF0YTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgLy8gQ29ubmVjdGlvbiB3YXMgb3BlbmVkLlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2l0IGlzIG9wZW5lZCcpXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnJlYWR5U3RhdGUgPT0gRXZlbnRTb3VyY2UuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb25uZWN0aW9uIHdhcyBjbG9zZWQuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRoaXMuc3RhdGUuZGF0YS50aW1lKS50b0xvY2FsZVN0cmluZygpfSA6IHt0aGlzLnN0YXRlLmRhdGEudmFsdWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Nb25pdG9yaW5nL2luZGV4LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=