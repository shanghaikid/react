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

var _draggable = __webpack_require__(32);

var _draggable2 = _interopRequireDefault(_draggable);

var _popupable = __webpack_require__(33);

var _popupable2 = _interopRequireDefault(_popupable);

var _PopupManager = __webpack_require__(16);

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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(8);

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
/* 14 */
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
/* 15 */
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

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _Dialogs = __webpack_require__(30);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Forms = __webpack_require__(39);

var _Forms2 = _interopRequireDefault(_Forms);

var _Tooltips = __webpack_require__(42);

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

var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(9);
var warning = __webpack_require__(13);
var assign = __webpack_require__(20);

var ReactPropTypesSecret = __webpack_require__(10);
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
  var invariant = __webpack_require__(9);
  var warning = __webpack_require__(13);
  var ReactPropTypesSecret = __webpack_require__(10);
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



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(9);
var ReactPropTypesSecret = __webpack_require__(10);

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

var _Splitter = __webpack_require__(14);

var _Splitter2 = _interopRequireDefault(_Splitter);

var _TreeView = __webpack_require__(26);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _Switch = __webpack_require__(27);

var _Switch2 = _interopRequireDefault(_Switch);

var _BaseComponent2 = __webpack_require__(1);

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

var _Splitter = __webpack_require__(14);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Dialog = __webpack_require__(31);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(37);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _DialogsAction = __webpack_require__(38);

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

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _Helper = __webpack_require__(5);

var _Button = __webpack_require__(6);

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constants = __webpack_require__(15);

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

var _propTypes = __webpack_require__(2);

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

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

var _Tooltip = __webpack_require__(36);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                this.state = {
                    showTooltip: true
                };
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
                var tooltipContainer = document.body.querySelector('div.tooltip');
                // if not exist, create once
                if (!tooltipContainer) {
                    tooltipContainer = document.createElement('div');
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
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                var _get5;

                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                }

                _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidUpdate', this) && (_get5 = _get(ComponentWithTooltip.prototype.__proto__ || Object.getPrototypeOf(ComponentWithTooltip.prototype), 'componentDidUpdate', this)).call.apply(_get5, [this].concat(args));

                var tooltip = this.props.tooltip;


                _reactDom2.default.render(React.createElement(_Tooltip2.default, { tooltip: tooltip }), this.tooltipContainer);
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(e) {
                console.log(e);
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave(e) {
                console.log(e);
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(Component, _extends({ showTooltip: this.state.showTooltip
                }, this.props, {
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

    ComponentWithTooltip.defaultProps = Object.assign({}, _Tooltip2.default.defaultProps, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({}, _Tooltip2.default.propTypes);

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

var _BaseComponent2 = __webpack_require__(1);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

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
                tooltipPositions = _props.tooltipPositions,
                tooltipPosition = _props.tooltipPosition,
                cls = this.className + ' ' + tooltipPositions[tooltipPosition];


            return _react2.default.createElement(
                'div',
                { className: cls },
                tooltip
            );
        }
    }]);

    return ToolTip;
}(_BaseComponent3.default);

exports.default = ToolTip;


ToolTip.defaultProps = {
    opacity: .5,
    tooltipPositions: {
        after: 'after',
        before: 'before',
        above: 'above',
        below: 'below',
        'below-centered': 'below-centered',
        'above-centered': 'above-centered'
    },
    tooltip: '',
    tooltipPosition: '',
    tooltipState: 'NORMAL'
};

ToolTip.propTypes = {
    opacity: _propTypes2.default.number,
    isOpen: _propTypes2.default.bool,
    tooltip: _propTypes2.default.string,
    tooltipPosition: _propTypes2.default.string,
    tooltipPositions: _propTypes2.default.object,
    tooltipState: _propTypes2.default.string
};

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

var _Constants = __webpack_require__(15);

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
/* 38 */
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
/* 39 */
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

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(11);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Checkbox = __webpack_require__(40);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _Dropdown = __webpack_require__(41);

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
/* 41 */
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

var _TextInput = __webpack_require__(11);

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
/* 42 */
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

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = __webpack_require__(11);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var longTooltip = 'So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.\nA few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she\u2019d enjoy it too.\nLittle did I know what I was in store for\u2026';

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
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: after', tooltipPosition: 'after' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: before', tooltipPosition: 'before' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: above', tooltipPosition: 'above' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: below', tooltipPosition: 'below' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: below-centered', tooltipPosition: 'below-centered' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip position: above-centered', tooltipPosition: 'above-centered' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip can be enterred' }),
                _react2.default.createElement(_Button2.default, { text: 'Tooltip state is always WARNING', tooltipState: 'WARNING' }),
                _react2.default.createElement(_Button2.default, { text: 'Help Tips' }),
                _react2.default.createElement(_Button2.default, { text: 'Really Long tooltip', tooltip: longTooltip }),
                _react2.default.createElement(_Button2.default, { text: 'One-liner with inline markup', tooltip: oneLineWithInlineMarkup })
            );
        }
    }]);

    return Tooltips;
}(_BaseComponent3.default);

exports.default = Tooltips;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzMyZjg0YjU1YjA5N2MwZjZmMTgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNVSS9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NwbGl0dGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci9Qb3B1cE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQm9yZGVyQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvUGFuZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3dpdGNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudFBhbmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvV2luZG93TWVtb3J5Vmlld2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0RpYWxvZ3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dpZGdldHMvRGlhbG9nL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvZHJhZ2dhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvdmFsaWRhdGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbHBlci93aXRoVG9vbHRpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sdGlwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRGlhbG9ncy9EaWFsb2dzQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvRm9ybXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vRHJvcGRvd24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvVG9vbHRpcHMvaW5kZXguanN4Il0sIm5hbWVzIjpbInByb3RvdHlwZSIsImhhbmRsZUV2ZW50IiwibWFwIiwiY2xpY2siLCJjaGFuZ2UiLCJtb3VzZW92ZXIiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlb3V0IiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsImZvY3VzIiwiYmx1ciIsImtleWRvd24iLCJjYXBpdGFsaXplIiwidHlwZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlIiwibWV0aG9kIiwicHJvcHMiLCJyZWdpc3RyeSIsIkJhc2VDb21wb25lbnQiLCJuYW1lIiwiYXJncyIsImJpbmQiLCJwcm9jZXNzUmVmIiwibGliQ2xhc3NQcmVmaXgiLCJiYXNlQ2xhc3NOYW1lIiwiaW5pdCIsInJlZ2lzdGVyIiwicG9zdFJlZ2lzdGVyIiwiY29tcG9uZW50IiwiZG9tTm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudElkIiwidG9Mb3dlckNhc2UiLCJ0cmFuc2Zvcm1TdGF0ZSIsInN0YXRlIiwia2V5IiwiZGVsbWl0ZXIiLCJyZXN1bHQiLCJmb3VuZCIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInNwbGljZSIsIm5hbWVzIiwic29tZSIsImkiLCJzdGF0ZU9iaiIsImNvbXBhcmVPYmoiLCJjbHMiLCJjbGFzc05hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJTeW1ib2wiLCJmb3IiLCJpc1ZhbGlkRWxlbWVudCIsIm9iamVjdCIsIiQkdHlwZW9mIiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiaXNPYmoiLCJjbG9uZSIsImdldENlbnRlclBvc2l0aW9uIiwiZ2V0Q2xzTmFtZSIsImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJ0b1N0cmluZyIsImNhbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZU9iamVjdCIsIl9mIiwicm9vdCIsImVudHJpZXMiLCJ2YWx1ZSIsInZhbHVlSXNPYmoiLCJyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwiZmlsdGVyIiwicyIsImpvaW4iLCJ0cmltIiwidGVzdCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZHJhZ2dhYmxlIiwicG9wdXBhYmxlIiwiUG9wdXBNYW5hZ2VyIiwidmFsaWRhdGFibGUiLCJ3aXRoVG9vbHRpcCIsIkJ1dHRvblZpZXciLCJvbkNsaWNrZWQiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIkJ1dHRvbiIsIkhlYWRlciIsImRlZmF1bHRUeXBlcyIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJ2YWxpZGF0ZUZvcm1hdCIsImZvcm1hdCIsInVuZGVmaW5lZCIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJmIiwiZXJyb3IiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiVGV4dElucHV0VmlldyIsInBsYWNlaG9sZGVyIiwibW9kIiwiaW5wdXRWYWx1ZSIsImF1dG9jb21wbGV0ZSIsImlucHV0Iiwib25DaGFuZ2UiLCJUZXh0SW5wdXQiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsIngiLCJpbmRleE9mIiwiX2xlbjIiLCJfa2V5MiIsIlNwbGl0dGVyIiwiY2hpbGRyZW4iLCJpc1ZlcnRpY2FsIiwiekluZGV4cyIsIkRpYWxvZyIsIk92ZXJsYXkiLCJEcm9wZG93biIsInR5cGVzIiwiZXZlbnRUeXBlIiwic3RhY2siLCJldmVudEhhbmRsZXIiLCJhZGQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJzYXZlZENvbXBvbmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXMiLCJpbmNsdWRlcyIsImNvZGUiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZSIsImhhbmRsZSIsImlzT3BlbiIsImlzUG9wdXAiLCJuYXZEZWYiLCJpZCIsImxhYmVsIiwidXJsIiwiZXhwYW5kIiwicGFnZXNEZWYiLCJyZXMiLCJuYXYiLCJuIiwiZm9yRWFjaCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJrZXlzIiwiZXZlcnkiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsIlByb3BUeXBlcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsImVyciIsInRhcmdldCIsInNvdXJjZSIsInRvIiwic3ltYm9scyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzaGltIiwiZ2V0U2hpbSIsIkFwcCIsImFjdGl2ZUlkIiwianNIZWFwU2l6ZUxpbWl0IiwidG90YWxKU0hlYXBTaXplIiwidXNlZEpTSGVhcFNpemUiLCJoYXNoIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJnZXRNZW1vcnlTdGF0Iiwic2V0U3RhdGUiLCJwZXJmb3JtYW5jZSIsIm1lbW9yeSIsIm9uVHJlZU5vZGVDbGljayIsInBhZ2VzIiwiQm9yZGVyQ29udGFpbmVyIiwicGVyc2lzdCIsIlBhbmUiLCJtb3VzZW1vdmVIYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZXVwSGFuZGxlciIsIm9uTW91c2VVcCIsInNwbGl0dGVyIiwic2l6ZSIsInNpemVVbml0IiwibWF4U2l6ZSIsIm1pblNpemUiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJvbk1vdXNlRG93biIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlyZWN0aW9uIiwiZGlzcGxheSIsInNwbGl0dGVyU2l6ZSIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInNwbGl0dGVyU3R5bGUiLCJ6SW5kZXgiLCJyaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwicGFuZSIsIlRyZWVOb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwibm9kZU5hbWUiLCJmb2N1c0NsYXNzIiwiZXhwYW5kb0NsYXNzIiwiZXhwYW5kb0V4cGFuZENsYXNzIiwiZm9jdXNJZCIsIlRyZWVWaWV3IiwidHJlZU5vZGUiLCJkZWYiLCJTd2l0Y2giLCJjbG9uZUVsZW1lbnQiLCJhY3RpdmUiLCJDb250ZW50UGFuZSIsIldpbmRvd01lbW9yeVZpZXdlciIsIkRpYWxvZ3MiLCJvbkJ1dHRvbkNsaWNrZWQiLCJjbG9zZURpYWxvZyIsIm9wZW5EaWFsb2ciLCJkaWFsb2cxIiwiZGlhbG9nMiIsImJ1dHRvbiIsImRpYWxvZyIsImRpYWxvZzEkaXNPcGVuIiwiZGlhbG9nMiRpc09wZW4iLCJEaWFsb2dWaWV3IiwiaGVhZGVyQ2xhc3MiLCJnZXRMaWJQcmVmaXhlZENsYXNzIiwiY2xvc2VCdG5DbGFzcyIsImJvZHlDbGFzcyIsImZvb3RlckNsYXNzIiwiY2FuY2VsQnRuQ2xhc3MiLCJjb25maXJtQnRuQ2xhc3MiLCJvbkNhbmNlbEJ0bkNsaWNrZWQiLCJvbkNvbmZpcm1CdG5DbGlja2VkIiwib25DbG9zZUJ0bkNsaWNrZWQiLCJuZXh0UHJvcHMiLCJvcGVuIiwicmVwb3NpdGlvbk9uT3BlbiIsIm5leHRPcGVuIiwibmV4dENsb3NlIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJib2R5IiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbG9zZUJ0bkxhYmVsIiwiaGVscExhYmVsIiwic3R5bGVPYmoiLCJDb21wb25lbnQiLCJjbGFzc1Byb3BlcnR5IiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwibW91c2Vkb3duSGFuZGxlciIsInJlcG9zaXRpb24iLCJyZWN0IiwiQ29tcG9uZW50QmVpbmdNb3ZlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwibGVmdFRvTW91c2UiLCJ0b3BUb01vdXNlIiwibWF4IiwibWluIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwb3NpdGlvbiIsIlBvcHVwQ29tcG9uZW50IiwiaW5pdFN0YXRlIiwiVmFsaWRhdGFibGVDb21wb25lbnQiLCJvbkJsdXIiLCJvbkZvY3VzIiwiX2hhc0JlZW5CbHVycmVkIiwibWVzc2FnZURlZiIsIm5leHREaXNhYmxlZCIsIm5leHRFbmFibGVkIiwidmFsdWVDaGFuZ2VkIiwidCIsInJlZ0V4cCIsInZhbGlkYXRvciIsInJlcXVpcmVkIiwib25WYWxpZGF0ZWQiLCJpc1ZhbHVlRW1wdHkiLCJub3RWYWxpZCIsImlzVmFsaWQiLCJnZXRNZXNzYWdlIiwib2siLCJuZXdQcm9wcyIsInRvb2x0aXAiLCJpbnZhbGlkTWVzc2FnZSIsIm1pc3NpbmciLCJtaXNzaW5nTWVzc2FnZSIsImltY29tcGxldGUiLCJwcm9tcHRNZXNzYWdlIiwiQ29tcG9uZW50V2l0aFRvb2x0aXAiLCJzaG93VG9vbHRpcCIsInRvb2x0aXBDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYmluZEV2ZW50cyIsInJlbW92ZUNoaWxkIiwibG9nIiwiYWN0aXZlRWxlbWVudCIsIlRvb2xUaXAiLCJ0b29sdGlwUG9zaXRpb25zIiwidG9vbHRpcFBvc2l0aW9uIiwib3BhY2l0eSIsImFmdGVyIiwiYmVmb3JlIiwiYWJvdmUiLCJiZWxvdyIsInRvb2x0aXBTdGF0ZSIsImJhY2tncm91bmRDb2xvciIsInRvZ2dsZURpYWxvZ09wZW4iLCJkaWFsb2dOYW1lIiwib3BlblN0YXRlIiwiaGFzU3RhdGVTZXQiLCJvcGVuU3RhdGVOYW1lIiwidiIsIm5hbWVGaWVsZCIsInB3ZEZpZWxkIiwiZHJvcGRvd24iLCJkaXNhYmxlQ2hlY2tib3giLCJjaGVja2VkIiwiaGlkZGVuIiwiRm9ybXMiLCJkcm9wZG93bkl0ZW0iLCJnZXRTdGF0ZSIsInJlc2V0IiwiaW5mbyIsImdldFN0YXRlcyIsImkxIiwiaTIiLCJpMyIsImRyb3Bkb3duUHJvcHMiLCJ0b2dnbGVGaWVsZERpc2FibGUiLCJyZXNldEFsbCIsIm9uRHJvcGRvd25DaGFuZ2UiLCJDaGVja2JveFZpZXciLCJDaGVja2JveCIsInBsYWNlaG9sZGVyQ2xhc3MiLCJvbklucHV0Q2hhbmdlIiwiaW5pdEZpbHRlciIsInNlbGVjdGVkSWQiLCJpdGVtcyIsImN1cnNvciIsInRleHRJbnB1dCIsIl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIiLCJfY2xpY2tPckZvY3VzQW55d2hlcmUiLCJpdGVtIiwiZmlyc3QiLCJpbmRleE9mSXRlbSIsImZpbmRJbmRleCIsImxhc3QiLCJjdXJzb3JJZCIsInByZXYiLCJnZXRJdGVtIiwiZGF0YXNldCIsInNlbGVjdGVkIiwiZ2V0RmlsdGVyIiwiY2hhcnMiLCJyZWdHcnAiLCJzZWxlY3RlZEl0ZW0iLCJpbnB1dFByb3BzIiwibmV3SW5wdXRQcm9wcyIsIkRyb3Bkb3duTGlzdFZpZXciLCJub0l0ZW1NZXNzYWdlIiwibmV3SXRlbXMiLCJoYXNJdGVtIiwiRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JdGVtIiwibG9uZ1Rvb2x0aXAiLCJvbmVMaW5lV2l0aElubGluZU1hcmt1cCIsIlRvb2x0aXBzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSxpQkFBVUEsU0FBVixDQUFvQkMsV0FBcEIsR0FBbUMsWUFBWTtBQUMzQztBQUNBLFFBQUlDLE1BQU07QUFDTkMsZUFBTyxTQUREO0FBRU5DLGdCQUFRLFVBRkY7QUFHTkMsbUJBQVcsYUFITDtBQUlOQyxvQkFBWSxjQUpOO0FBS05DLG9CQUFZLGNBTE47QUFNTkMsa0JBQVUsWUFOSjtBQU9OQyxtQkFBVyxhQVBMO0FBUU5DLGlCQUFTLFdBUkg7QUFTTkMsbUJBQVcsYUFUTDtBQVVOQyxlQUFPLFNBVkQ7QUFXTkMsY0FBTSxRQVhBO0FB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LE1BQUssOEJBQWIsRUFBNEMsU0FBU0MsdUJBQXJEO0FBWEosYUFESjtBQWVIOzs7Ozs7a0JBMUJnQkMsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzJmODRiNTViMDk3YzBmNmYxOCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzT2JqLCBlfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIGFsbCBjb21wb25lbnRzIHNoYXJlIG9uZSBldmVudCBoYW5kbGVyXG5Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhbGwga25vd24gUmVhY3QuQ29tcG9uZW50IGV2ZW50c1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAgIGNsaWNrOiAnb25DbGljaycsXG4gICAgICAgIGNoYW5nZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgbW91c2VvdmVyOiAnb25Nb3VzZU92ZXInLFxuICAgICAgICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gICAgICAgIG1vdXNlb3V0OiAnb25Nb3VzZU91dCcsXG4gICAgICAgIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgICAgICAgbW91c2V1cDogJ29uTW91c2VVcCcsXG4gICAgICAgIG1vdXNlbW92ZTogJ29uTW91c2VNb3ZlJyxcbiAgICAgICAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgICAgICAgYmx1cjogJ29uQmx1cicsXG4gICAgICAgIGtleWRvd246ICdvbktleURvd24nXG4gICAgfTtcblxuICAgIC8vIGZhbGxiYWNrIGhlbHBlclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vIG9uZSBoYW5kbGVFdmVudCB0byBydWxlIHRoZW0gYWxsXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1hcFtlLnR5cGVdIHx8IGNhcGl0YWxpemUoZS50eXBlKTtcbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCBpbiB0aGlzKSB0aGlzW21ldGhvZF0oZSwgdGhpcyk7XG4gICAgfTtcbn0oKSk7XG5cbi8vIHVzZSBmb3IgY29tcG9uZW50SWRcbmxldCByZWdpc3RyeSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIHNhdmUgbWVtb3J5XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JlZiA9IHRoaXMucHJvY2Vzc1JlZi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpYkNsYXNzUHJlZml4ID0gJ2UnO1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMucG9zdFJlZ2lzdGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7fVxuICAgIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHt9XG4gICAgLy8gY29tcG9uZW50RGlkVXBkYXRlKCkge31cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG4gICAgLy8gZm9yY2VVcGRhdGUoKSB7fVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7dGhpcy5iYXNlQ2xhc3NOYW1lfSR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnfWA7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1JlZihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSB3ZSBoYXZlIHJlZ2lzdGVyXG4gICAgICAgIHJlZ2lzdHJ5W25hbWVdID0gcmVnaXN0cnlbbmFtZV0gfHwgMDtcbiAgICAgICAgLy8gYWRkIG9uZVxuICAgICAgICByZWdpc3RyeVtuYW1lXSA9IHJlZ2lzdHJ5W25hbWVdICsgMTtcbiAgICAgICAgLy8gYXNzaWduIG5hbWVcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpICsgcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoLi4uYXJncykge1xuICAgICAgICBpZiAoaXNPYmooYXJnc1swXSkpIHtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGFyZ3NbMF0sICckJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zZXRTdGF0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgc3RhdGUgYnkgbmFtZVxuICAgIC8vIGlmIGtleSBpcyBwcm92aWRlZCwgcmV0dXJuIHNwZWNpZmllZCB2YWx1ZVxuICAgIC8vIGlmIGtleSBpcyBpZ25vcmVkLCByZXR1cm4gd2hvbGUgc3RhdGUgb2JqZWN0XG4gICAgZ2V0U3RhdGUobmFtZSwga2V5LCBkZWxtaXRlciA9ICckJykge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW25hbWUgKyBkZWxtaXRlciArIGtleV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0ge30sXG4gICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX0ke2RlbG1pdGVyfWApKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleS5zcGxpdChgJHtkZWxtaXRlcn1gKS5zcGxpY2UoLTEpXSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQgPyByZXN1bHQgOiB0aGlzLnN0YXRlW25hbWVdO1xuICAgIH1cblxuICAgIC8vIGdldCBtdWxpdHBsZSBjaGlsZHJlbiBzdGF0ZVxuICAgIGdldFN0YXRlcyhuYW1lcyA9IFtdLCBkZWxtaXRlcj0gJyQnKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgbmFtZXMuc29tZSgobmFtZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfSR7ZGVsbWl0ZXJ9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV1ba2V5LnNwbGl0KGAke2RlbG1pdGVyfWApLnNwbGljZSgtMSldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtU3RhdGUoc3RhdGVPYmosIGNvbXBhcmVPYmopIHtcbiAgICAgICAgcmV0dXJuIGUoc3RhdGVPYmosICckJywgY29tcGFyZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TGliUHJlZml4ZWRDbGFzcyhjbHMpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGliQ2xhc3NQcmVmaXh9LSR7Y2xzfWA7XG4gICAgfVxuXG4gICAgLy8gc3R1YnNcbiAgICBpbml0KCkge31cbiAgICBwb3N0UmVnaXN0ZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMTUuNi4wQHByb3AtdHlwZXMvaW5kZXguanMiLCIvLyBpc09iajogY2hlY2sgaWYgdGhlIGdpdmVuIG9iaiBpcyBhbiBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBpc09iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5cbi8vIGNsb25lOiBzaW1wbGUgY2xvbmUgdGhlIGdpdmVuIG9iamVjdFxuLy8gbm90IHN1cHBvcnQgZnVuY3Rpb24gYW5kIGNpcmN1bGFyIHJlZmVyZW5jZVxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vLyBmbGF0dGVuIHN0YXRlIG9iamVjdFxuLy8gZ3JpZDp7bGF5b3V0OnttZW51OntleHBhbmQ6dHJ1ZX19fX0gPT4gZ3JpZC1sYXlvdXQtbWVudS1leHBhbmQ6dHJ1ZVxuZXhwb3J0IGZ1bmN0aW9uIGUoc3RhdGVPYmplY3QsIGRlbG1pdGVyID0gJyQnLCBjb21wYXJlT2JqID0gbnVsbCkge1xuICAgIGZ1bmN0aW9uIF9mKHN0YXRlT2JqZWN0LCByb290LCByZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVPYmplY3QpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVJc09iaiA9IGlzT2JqKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByID0gYCR7cm9vdCA/IHJvb3QgKyBkZWxtaXRlciArIGtleSA6IGtleX1gO1xuICAgICAgICAgICAgICAgIC8vIHIgPSBgJHtyb290fSR7cm9vdCA9PT0gJycgPyBrZXkgOiBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YDtcbiAgICAgICAgICAgIGlmICh2YWx1ZUlzT2JqICYmIGNvbXBhcmVPYmogIT09IG51bGwgJiYgdHlwZW9mIGNvbXBhcmVPYmpbcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3JdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlSXNPYmogPyBfZih2YWx1ZSwgciwgcmVzdWx0KSA6IHJlc3VsdFtyXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIF9mKHN0YXRlT2JqZWN0LCAnJywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBnZXRDZW50ZXJQb3NpdGlvbjogZ2V0IGNoaWxkIHBvc2l0aW9uIHdoZW4gaXQgaXMgYXQgY2VudGVyIG9mIHRoZSBwYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3NpdGlvbih7aW5uZXJXaWR0aCA9IDEwMDAsIGlubmVySGVpZ2h0PTgwMH0sIHt3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gNDAwfSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChpbm5lcldpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgIH1cbn1cblxuLy8gZ2V0Q2xzTmFtZTogY29uY2F0ZSBhcnVtZW50cyB3aXRoIHNwYWNlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xzTmFtZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLmZpbHRlcihzID0+IHMgIT09JycgJiYgdHlwZW9mIHMgIT09ICd1bmRlZmluZWQnKS5qb2luKCcgJyk7XG59XG5cbi8vIGlzRW1wdHk6IGNoZWNrIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlLCB0cmltPXRydWUpIHtcbiAgICByZXR1cm4gKHRyaW0gPyAvXlxccyokLyA6IC9eJC8pLnRlc3QodmFsdWUpOyAvLyBCb29sZWFuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjExLjEwQHByb2Nlc3MvYnJvd3Nlci5qcyIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnO1xuaW1wb3J0IHBvcHVwYWJsZSBmcm9tICcuL3BvcHVwYWJsZSc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB2YWxpZGF0YWJsZSBmcm9tICcuL3ZhbGlkYXRhYmxlJztcbmltcG9ydCB3aXRoVG9vbHRpcCBmcm9tICcuL3dpdGhUb29sdGlwJztcblxuXG5leHBvcnQge2RyYWdnYWJsZSwgcG9wdXBhYmxlLCBQb3B1cE1hbmFnZXIsIHZhbGlkYXRhYmxlLCB3aXRoVG9vbHRpcH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgYnV0dG9uYDtcclxuICAgIH1cclxuXHJcbiAgIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNsaWNrZWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKG9uQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrZWQoZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dGV4dCwgdHlwZSwgdGl0bGUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSB0eXBlPXt0eXBlfSB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9Pnt0ZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJ1dHRvblZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGV4dDogJ0J1dHRvbicsXHJcbiAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRpc2FibGVkOiBmYWxzZVxyXG59O1xyXG5cclxuQnV0dG9uVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DbGlja2VkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uID0gd2l0aFRvb2x0aXAoQnV0dG9uVmlldyk7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgaGVhZGVyYDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxoMSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT57dGhpcy5wcm9wcy50ZXh0fTwvaDE+KTtcbiAgICB9XG59XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJydcbn07XG5cbkhlYWRlci5kZWZhdWx0VHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyL2luZGV4LmpzeCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uMC44LjE2QGZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzLy4wLjguMTZAZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZGF0YWJsZSAsIHdpdGhUb29sdGlwIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCB7IGdldENsc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHRleHRJbnB1dGA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCB0eXBlLCBkaXNhYmxlZCwgbmFtZSwgbW9kLCBpbnB1dFZhbHVlLCBhdXRvY29tcGxldGV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIG1vZClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRleHRJbnB1dFZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGF1dG9jb21wbGV0ZTogJ29uJ1xufTtcblxuVGV4dElucHV0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5uYW1lLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhdXRvY29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IFRleHRJbnB1dCA9IHZhbGlkYXRhYmxlKHdpdGhUb29sdGlwKFRleHRJbnB1dFZpZXcpKTtcbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjAuOC4xNkBmYmpzL2xpYi93YXJuaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBzcGxpdHRlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NsYXNzTmFtZSwgY2hpbGRyZW4sIGlzVmVydGljYWx9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IGdldENsc05hbWUodGhpcy5jbGFzc05hbWUsIGAke2lzVmVydGljYWwgPyBgIHZlcnRpY2FsYCA6ICcgaG9yaXpvbnRhbCd9YCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXR0ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGlzVmVydGljYWw6IHRydWVcbn07XG5cblNwbGl0dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpc1ZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU3BsaXR0ZXIvaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IHpJbmRleHMgPSB7XG4gICAgRGlhbG9nOiAzMDAwLFxuICAgIE92ZXJsYXk6IDIwMDAsXG4gICAgRHJvcGRvd246IDEwMDBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwiY29uc3QgUG9wdXBNYW5hZ2VyID0ge1xuICAgIHR5cGVzOiBbJ0RpYWxvZyddLFxuICAgIGV2ZW50VHlwZTogJ2tleWRvd24nLFxuICAgIHN0YWNrOiBbXSxcbiAgICBldmVudEhhbmRsZXI6IG51bGwsXG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY29tcG9uZW50KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwICYmICF0aGlzLmV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5zdGFjay5maWx0ZXIoc2F2ZWRDb21wb25lbnQgPT4gc2F2ZWRDb21wb25lbnQgIT09IGNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRUeXBlLCB0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50SGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5pbmNsdWRlcyhjb21wb25lbnQpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmRvbU5vZGUgJiYgY29tcG9uZW50LmRvbU5vZGUub2Zmc2V0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGRlY291cGxlXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLmNsb3NlKHt9LCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGUoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBuYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICBpc09wZW4gPSBjb21wb25lbnQucHJvcHMuaXNPcGVuO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXMoY29tcG9uZW50KSAmJiBpc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBhIHBvcHVwIG11c3QgaW1wbGVtZW50IGNsb3NlIGFuZCBvcGVuXG4gICAgaXNQb3B1cChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXMuaW5jbHVkZXMoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvUG9wdXBNYW5hZ2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL0FwcCc7XHJcbmltcG9ydCBEaWFsb2dzIGZyb20gJy4vRGlhbG9ncyc7XHJcbmltcG9ydCBGb3JtcyBmcm9tICcuL0Zvcm1zJztcclxuaW1wb3J0IFRvb2x0aXBzIGZyb20gJy4vVG9vbHRpcHMnO1xyXG5cclxuXHJcbmNvbnN0IG5hdkRlZiA9IFtcclxuICAgIHtpZDogJ21vbicsIGxhYmVsOiAnTW9uaXRvcmluZycsIHVybDogJy8jbW9uJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJNb25pdG9yaW5nXCIgLz59LFxyXG4gICAge2lkOiAnZm9ybScsIGxhYmVsOiAnRm9ybSBFbGVtZW50cycsIHVybDogJy8jZm9ybScsIGNvbXBvbmVudDogPEZvcm1zIC8+fSxcclxuICAgIHtpZDogJ3dpZGdldHMnLCBsYWJlbDogJ1dpZGdldHMnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnZGlhbG9ncycsIGxhYmVsOiAnRGlhbG9ncycsIHVybDogJy8jd2lkZ2V0cy9kaWFsb2dzJywgY29tcG9uZW50OiA8RGlhbG9ncyAvPn0sXHJcbiAgICAgICAge2lkOiAnd2l6YXJkJywgbGFiZWw6ICdXaXphcmQnLCB1cmw6ICcvI3dpZGdldHMvd2l6YXJkJywgY29tcG9uZW50OiA8SGVhZGVyIHRleHQ9XCJXaWFyZFwiIC8+fSxcclxuICAgICAgICB7aWQ6ICd0b29sdGlwcycsIGxhYmVsOiAnVG9vbHRpcHMnLCB1cmw6ICcvI3dpZGdldHMvdG9vbHRpcHMnLCBjb21wb25lbnQ6IDxUb29sdGlwcyAvPn0sXHJcbiAgICBdfSxcclxuICAgIHtpZDogJ3NwZWljYWwnLCBsYWJlbDogJ1NwZWNpYWwnLCBleHBhbmQ6IHRydWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge2lkOiAnaW5maW5pdGUnLCBsYWJlbDogJ0luZmluaXRlIFNjcm9sbCcsIHVybDogJy8jd2lkZ2V0cy9pbmZpbml0ZVNjcm9sbCcsIGNvbXBvbmVudDogPEhlYWRlciB0ZXh0PVwiSW5maW5pdGUgU2Nyb2xsXCIgLz59XHJcbiAgICBdfVxyXG5dO1xyXG5cclxuY29uc3QgcGFnZXNEZWYgPSAobmF2ID0+IHtcclxuICAgIGxldCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG4gPSBuYXZbaV07XHJcbiAgICAgICAgaWYgKG4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmF2LnB1c2gobikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0pKEFycmF5LmZyb20obmF2RGVmKSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBuYW1lPVwiT0tcIiBuYXY9e25hdkRlZn0gcGFnZXM9e3BhZ2VzRGVmfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvLjE1LjYuMEBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9yZGVyQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgUGFuZSBmcm9tICdjb21wb25lbnRzL0xheW91dC9QYW5lJztcbmltcG9ydCBTcGxpdHRlciBmcm9tICdjb21wb25lbnRzL0xheW91dC9TcGxpdHRlcic7XG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvVHJlZVZpZXcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL0xheW91dC9Td2l0Y2gnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBXaW5kb3dNZW1vcnlWaWV3ZXIgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL1dpbmRvd01lbW9yeVZpZXdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJZDogJ21vbicsXG4gICAgICAgICAgICBqc0hlYXBTaXplTGltaXQ6IDAsXG4gICAgICAgICAgICB0b3RhbEpTSGVhcFNpemU6IDAsXG4gICAgICAgICAgICB1c2VkSlNIZWFwU2l6ZTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcvJyksXG4gICAgICAgICAgICBhY3RpdmVJZCA9IGhhc2hbaGFzaC5sZW5ndGggLSAxXS5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0TWVtb3J5U3RhdCgpO1xuICAgIH1cblxuICAgIGdldE1lbW9yeVN0YXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UubWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5tZW1vcnk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqc0hlYXBTaXplTGltaXQsIHRvdGFsSlNIZWFwU2l6ZSwgdXNlZEpTSGVhcFNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UcmVlTm9kZUNsaWNrKG5vZGUsIHN0YXRlKSB7XG4gICAgICAgIGxldCB7ZXhwYW5kfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5jaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUlkOiBub2RlLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwibGVmdFBhbmVcIiBzcGxpdHRlcj1cInZlcnRpY2FsXCIgc2l6ZT17MjAwfSBtaW5TaXplPXsyMDB9IG1heFNpemU9ezUwMH0gc2l6ZVVuaXQ9XCJweFwiID5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3IGRlZj17dGhpcy5wcm9wcy5uYXZ9IGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICAgPFBhbmUgY2xhc3NOYW1lPVwicmlnaHRQYW5lXCIgZGlzcGxheT1cImZsZXhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmUgc3BsaXR0ZXI9XCJob3Jpem9udGFsXCIgc2l6ZT17NzV9IG1heFNpemU9ezgwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGVmPXt0aGlzLnByb3BzLnBhZ2VzfSBhY3RpdmVJZD17dGhpcy5zdGF0ZS5hY3RpdmVJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dNZW1vcnlWaWV3ZXIganNIZWFwU2l6ZUxpbWl0PXt0aGlzLnN0YXRlLmpzSGVhcFNpemVMaW1pdH0gdG90YWxKU0hlYXBTaXplPXt0aGlzLnN0YXRlLnRvdGFsSlNIZWFwU2l6ZX0gdXNlZEpTSGVhcFNpemU9e3RoaXMuc3RhdGUudXNlZEpTSGVhcFNpemV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0FwcC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvcmRlckNvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBib3JkZXJDb250YWluZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjbGFzc05hbWUsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvcmRlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGVyc2lzdDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJ1xufTtcblxuQm9yZGVyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyc2lzdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0JvcmRlckNvbnRhaW5lci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBTcGxpdHRlciBmcm9tICcuLi9TcGxpdHRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzoga2V5Ym9hcmQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBwYW5lYDtcbiAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtzcGxpdHRlciwgc2l6ZSwgc2l6ZVVuaXQsIG1heFNpemUsIG1pblNpemV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0fSA9IHRoaXMuZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ251bGwnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNwbGl0dGVyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0V2lkdGggKiBtYXhTaXplIC8gMTAwKSkgOiBtYXhTaXplO1xuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldFdpZHRoICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gc2l6ZVVuaXQgPT09ICclJyA/IChNYXRoLmZsb29yKG9mZnNldEhlaWdodCAqIG1heFNpemUgLyAxMDApKSA6IG1heFNpemU7XG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogbWluU2l6ZSAvIDEwMCkpIDogbWluU2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9wOiBzaXplVW5pdCA9PT0gJyUnID8gKE1hdGguZmxvb3Iob2Zmc2V0SGVpZ2h0ICogc2l6ZSAvIDEwMCkpIDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93bigpO1xuICAgIH1cblxuICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwKGUpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24oZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLFxuICAgICAgICAgICAgICB7bWF4U2l6ZSwgbWluU2l6ZX0gPSB0aGlzLFxuICAgICAgICAgICAgICBsZWZ0ID0gY2xpZW50WCA+IG1heFNpemUgPyBtYXhTaXplIDogKGNsaWVudFggPCBtaW5TaXplID8gbWluU2l6ZSA6IGNsaWVudFgpLFxuICAgICAgICAgICAgICB0b3AgPSBjbGllbnRZID4gbWF4U2l6ZSA/IG1heFNpemUgOiAoY2xpZW50WSA8IG1pblNpemUgPyBtaW5TaXplIDogY2xpZW50WSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdCwgdG9wfSk7XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIHNwbGl0dGVyLCBkaXJlY3Rpb24sIGRpc3BsYXksIHNwbGl0dGVyU2l6ZX0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgYCR7c3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCcgPyBgIHZlcnRpY2FsUGFuZWAgOiAnJ31gKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXR0ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gc3BsaXR0ZXIgPT09ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgLSBzcGxpdHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubGVmdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3BsaXR0ZXJTdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2V0U3RhdGUudG9wIC0gc3BsaXR0ZXJTaXplLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUudG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocGFuZSkgPT4geyB0aGlzLmRvbU5vZGUgPSBwYW5lOyB9fVxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHtzcGxpdHRlciAhPT0gJ251bGwnID8gPFNwbGl0dGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3BsaXR0ZXJTdHlsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZUV2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzcGxpdHRlcjogJ251bGwnLFxuICAgIHNpemU6IDI1LFxuICAgIG1pblNpemU6IDE1LFxuICAgIG1heFNpemU6IDUwLFxuICAgIHNpemVVbml0OiAnJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHNwbGl0dGVyU2l6ZTogMTBcbn07XG5cblBhbmUucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcGxpdHRlclNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhbmUvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmVlTm9kZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBleHBhbmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kOiB0aGlzLnByb3BzLmV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyAmJiBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLnN0YXRlLmV4cGFuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25UcmVlTm9kZUNsaWNrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRyZWVOb2RlQ2xpY2sodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIGxhYmVsLCB1cmwsIGNoaWxkcmVuLCBvblRyZWVOb2RlQ2xpY2ssIGFjdGl2ZUlkfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBleHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGFjdGl2ZUlkID09PSBpZCAmJiAhY2hpbGRyZW4pID8gdGhpcy5wcm9wcy5mb2N1c0NsYXNzIDogKGV4cGFuZCA/IHRoaXMucHJvcHMuZXhwYW5kb0NsYXNzIDogdGhpcy5wcm9wcy5leHBhbmRvQ2xhc3MpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybCA/IHVybCA6ICdqYXZhc2NyaXB0OnZvaWQoMCknfT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiBleHBhbmQgPyA8dWw+e2NoaWxkcmVuLm1hcChjID0+IDxUcmVlTm9kZSBhY3RpdmVJZD17YWN0aXZlSWR9IG9uVHJlZU5vZGVDbGljaz17b25UcmVlTm9kZUNsaWNrfSB7Li4uY30gLz4pfTwvdWw+OiAnJ31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9jdXNDbGFzczogJ2ZvY3VzZWQnLFxuICAgIGV4cGFuZG9FeHBhbmRDbGFzczogJ2V4cGFuZCcsXG4gICAgZXhwYW5kb0NsYXNzOiAnZm9sZCdcbn07XG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblRyZWVOb2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4cGFuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb2N1c0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZG9DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleHBhbmRvQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gJ3RyZWVWaWV3JztcbiAgICB9XG4gICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSkge1xuICAgICAgICBsZXQge2lkLCBjaGlsZHJlbn0gPSB0cmVlTm9kZSxcbiAgICAgICAgICAgIHtvblRyZWVOb2RlQ2xpY2t9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtleHBhbmR9ID0gc3RhdGU7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgb25UcmVlTm9kZUNsaWNrKHRyZWVOb2RlLCBzdGF0ZSk7XG5cbiAgICAgICAgLy8gaWYgbm8gc2VsZWN0aW9uIG9yIG5vIGNoaWxkcmVuLCBmb2N1cyB0YXJnZXRcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmFjdGl2ZUlkID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUlkOiBpZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDx1bD57dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gPFRyZWVOb2RlIGFjdGl2ZUlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBvblRyZWVOb2RlQ2xpY2s9e3RoaXMub25UcmVlTm9kZUNsaWNrLmJpbmQodGhpcyl9IHsuLi5jfSAvPil9PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5UcmVlVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgb25UcmVlTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RyZWVWaWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IENvbnRlbnRQYW5lIGZyb20gJy4uL0NvbnRlbnRQYW5lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9ICdzd2l0Y2gnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGRhdGEtYWN0aXZlLWlkPXt0aGlzLnByb3BzLmFjdGl2ZUlkfSBjbGFzc05hbWU9e3RoaXMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWYubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudFBhbmUgY2xhc3NOYW1lPXtjLmlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUlkID8gdGhpcy5wcm9wcy5hY3RpdmVJZCA6ICdoaWRkZW4nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoYy5jb21wb25lbnQsIHthY3RpdmU6IGMuaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlSWR9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50UGFuZT4pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWY6IFtdXG59O1xuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGRlZjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGFjdGl2ZUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Td2l0Y2gvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBjb250ZW50UGFuZWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db250ZW50UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xheW91dC9Db250ZW50UGFuZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XG5cbi8vIERpYWxvZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93TWVtb3J5Vmlld2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYHdpbmRvd01lbW9yeVZpZXdlcmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7anNIZWFwU2l6ZUxpbWl0LCB0b3RhbEpTSGVhcFNpemUsIHVzZWRKU0hlYXBTaXplfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5KYXZhc2NyaXB0IEhlYXAgU2l6ZSBMaW1pdDo8L3NwYW4+IDxzcGFuPntqc0hlYXBTaXplTGltaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+VG90YWwgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dG90YWxKU0hlYXBTaXplfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlVzZWQgSmF2YXNjcmlwdCBIZWFwIFNpemU6PC9zcGFuPiA8c3Bhbj57dXNlZEpTSGVhcFNpemV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9XaW5kb3dNZW1vcnlWaWV3ZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zvcm0vQnV0dG9uJztcblxuaW1wb3J0IHsgdG9nZ2xlRGlhbG9nT3BlbiB9IGZyb20gJy4vRGlhbG9nc0FjdGlvbic7XG5cbi8vIERpYWxvZ3MgcGFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGlja2VkID0gdGhpcy5vbkJ1dHRvbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZyA9IHRoaXMuY2xvc2VEaWFsb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nID0gdGhpcy5vcGVuRGlhbG9nLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgZGlhbG9nMToge1xuICAgICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2cyOiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrZWQoZSwgYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihidXR0b24ucHJvcHMuZGlhbG9nKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgY2xvc2VEaWFsb2coZSwgZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodG9nZ2xlRGlhbG9nT3BlbihkaWFsb2cucHJvcHMuY29tcG9uZW50SWQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCB0byBzeW5jIGludGVybmFsIHN0YXRlXG4gICAgb3BlbkRpYWxvZyhlLCBkaWFsb2cpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0b2dnbGVEaWFsb2dPcGVuKGRpYWxvZy5wcm9wcy5jb21wb25lbnRJZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHNob3VsZFNob3dPdmVybGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaWFsb2cxJGlzT3BlbiB8fCB0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVuO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3R5bGU9IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkaWFsb2c9XCJkaWFsb2cxXCIgb25DbGlja2VkPXt0aGlzLm9uQnV0dG9uQ2xpY2tlZH0gdGV4dD1cInRvZ2dsZSBEaWFsb2cxXCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpYWxvZz1cImRpYWxvZzJcIiBvbkNsaWNrZWQ9e3RoaXMub25CdXR0b25DbGlja2VkfSB0ZXh0PVwidG9nZ2xlIERpYWxvZzJcIiAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzEkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzFcIiB0aXRsZT1cImRpYWxvZzFcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSAvPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmRpYWxvZzIkaXNPcGVufSBjb21wb25lbnRJZD1cImRpYWxvZzJcIiB0aXRsZT1cImRpYWxvZzJcIiBvcGVuPXt0aGlzLm9wZW5EaWFsb2d9IGNsb3NlPXt0aGlzLmNsb3NlRGlhbG9nfSByZXBvc2l0aW9uT25PcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvRGlhbG9ncy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9CYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IGRyYWdnYWJsZSwgcG9wdXBhYmxlIH0gZnJvbSAnLi4vLi4vSGVscGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vRm9ybS9CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuLy8gRGlhbG9nXG5leHBvcnQgY2xhc3MgRGlhbG9nVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuICdEaWFsb2cnO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICB0aGlzLmJhc2VDbGFzc05hbWUgPSBgZGlhbG9nYDtcbiAgICAgICAgdGhpcy5oZWFkZXJDbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY2xvc2UnKTtcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1ib2R5Jyk7XG4gICAgICAgIHRoaXMuZm9vdGVyQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1mb290ZXInKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzcyA9IHRoaXMuZ2V0TGliUHJlZml4ZWRDbGFzcygnZGlhbG9nLWJ0bi1jYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3MgPSB0aGlzLmdldExpYlByZWZpeGVkQ2xhc3MoJ2RpYWxvZy1idG4tY29uZmlybScpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQnRuQ2xpY2tlZCA9IHRoaXMub25DYW5jZWxCdG5DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQnRuQ2xpY2tlZCA9IHRoaXMub25Db25maXJtQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2VCdG5DbGlja2VkID0gdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgb3BlbiwgY2xvc2UsIHJlcG9zaXRpb25Pbk9wZW4sIGlzT3Blbn0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0Q2xvc2UgPSBuZXh0UHJvcHMuaXNPcGVuID09PSBmYWxzZSAmJiBpc09wZW4gPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgb3Blbih7fSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dENsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSh7fSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoZSwgdGhpcyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxCdG5DbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlQnRuQ2xpY2tlZChlKTtcblxuICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db25maXJtQnRuQ2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IHtvbkNvbmZpcm19ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgICAgICBvbkNvbmZpcm0oZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHttb2QsIHRpdGxlLCBib2R5LCBjYW5jZWxMYWJlbCwgY29uZmlybUxhYmVsLCBjbG9zZUJ0bkxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xzID0gZ2V0Q2xzTmFtZSh0aGlzLmNsYXNzTmFtZSwgbW9kLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuaGVhZGVyQ2xhc3N9ID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXtjbG9zZUJ0bkxhYmVsfSB0ZXh0PXtjbG9zZUJ0bkxhYmVsfSBvbkNsaWNrZWQ9e3RoaXMub25DbG9zZUJ0bkNsaWNrZWR9IGNsYXNzTmFtZT17dGhpcy5jbG9zZUJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmJvZHlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmZvb3RlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMub25DYW5jZWxCdG5DbGlja2VkfSB0ZXh0PXtjYW5jZWxMYWJlbH0gY2xhc3NOYW1lPXt0aGlzLmNhbmNlbEJ0bkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy5vbkNvbmZpcm1CdG5DbGlja2VkfSB0ZXh0PXtjb25maXJtTGFiZWx9IGNsYXNzTmFtZT17dGhpcy5jb25maXJtQnRuQ2xhc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpYWxvZ1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZDogJycsXG4gICAgdGl0bGU6ICdEaWFsb2cgVGl0bGUnLFxuICAgIGJvZHk6ICdBTlIxMDMyODI5IFRoaXMgaXMgYSBzYW1wbGUgbWVzc2FnZS4gRGRsZmt3ZXJvaXUgc2RmciBzZGZqZXJpdSBkZmVyZXJkZnNmLicsXG4gICAgaGVscExhYmVsOiAnSGVscCcsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGNsb3NlQnRuTGFiZWw6ICdDbG9zZScsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvcGVuOiAoKSA9PiB7fSxcbiAgICBjbG9zZTogKCkgPT4ge30sXG4gICAgc3R5bGVPYmo6IHt9LFxufTtcblxuRGlhbG9nVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgbW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVscExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZUJ0bkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgRGlhbG9nID0gcG9wdXBhYmxlKGRyYWdnYWJsZShEaWFsb2dWaWV3LCAnaGVhZGVyQ2xhc3MnKSk7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy9EaWFsb2cvaW5kZXguanN4IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBkcmFnZ2FibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShDb21wb25lbnQsIGNsYXNzUHJvcGVydHkpIHtcbiAgICBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBpbml0KC4uLnByb3BzKSB7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLnByb3BzKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZXJcbiAgICAgICAgICAgIHRoaXMubW91c2V1cEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd25IYW5kbGVyID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb3NpdGlvbk9uT3BlbiwgaXNPcGVufSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbmV4dE9wZW4gPSBuZXh0UHJvcHMuaXNPcGVuID09PSB0cnVlICYmIGlzT3BlbiA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChuZXh0T3BlbiAmJiByZXBvc2l0aW9uT25PcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCAmJiBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXBvc2l0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9tTm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB7bGVmdCwgdG9wfSA9IGdldENlbnRlclBvc2l0aW9uKHdpbmRvdywgdGhpcy5kb21Ob2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0LCB0b3B9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudEJlaW5nTW92ZWQgPSB0aGlzLmRvbU5vZGUsXG4gICAgICAgICAgICAgICAgcmVjdCA9IENvbXBvbmVudEJlaW5nTW92ZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAge2NsaWVudFgsIGNsaWVudFl9ID0gZSxcbiAgICAgICAgICAgICAgICB7bGFzdE1vdXNlWCwgbGFzdE1vdXNlWX0gPSB0aGlzLFxuICAgICAgICAgICAgICAgIGxlZnRUb01vdXNlID0gY2xpZW50WCAtIGxhc3RNb3VzZVgsXG4gICAgICAgICAgICAgICAgdG9wVG9Nb3VzZSA9IGNsaWVudFkgLSBsYXN0TW91c2VZLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLnN0YXRlLmxlZnQgKyBsZWZ0VG9Nb3VzZSksXG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5tYXgoMCwgdGhpcy5zdGF0ZS50b3AgKyB0b3BUb01vdXNlKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoLCBsZWZ0KSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0LCB0b3ApXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0gY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IGNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NQcm9wZXJ0eSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXNbY2xhc3NQcm9wZXJ0eV0pKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2V1cEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVFdmVudH0gb25Nb3VzZVVwPXt0aGlzLmhhbmRsZUV2ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICByZXBvc2l0aW9uT25PcGVuOiB0cnVlLFxuICAgICAgICBzdHlsZU9iajoge31cbiAgICB9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcblxuICAgIERyYWdnYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVwb3NpdGlvbk9uT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHN0eWxlT2JqOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gRHJhZ2dhYmxlQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL2RyYWdnYWJsZS5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgekluZGV4cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcblxuLy8gcG9wdXBhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cGFibGUoQ29tcG9uZW50KSB7XG4gICAgbGV0IHpJbmRleCA9IHpJbmRleHNbQ29tcG9uZW50LnR5cGVdIHx8IDA7XG5cbiAgICBjbGFzcyBQb3B1cENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGluaXQoLi4ucHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgekluZGV4OiB6SW5kZXgrK1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSAmJiBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5oYW5kbGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0T3BlbiA9IG5leHRQcm9wcy5pc09wZW4gPT09IHRydWUgJiYgaXNPcGVuID09PSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG5leHRPcGVuKSAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleCsrXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHpJbmRleD17dGhpcy5zdGF0ZS56SW5kZXh9IHJlZj17dGhpcy5wcm9jZXNzUmVmLmJpbmQodGhpcyl9IC8+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQb3B1cENvbXBvbmVudDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvcG9wdXBhYmxlLmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgbWVzc2FnZTogJycsXG4gICAgbW9kOiAnJ1xufTtcblxuLy8gdmFsaWRhdGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRhYmxlKENvbXBvbmVudCkge1xuICAgIGNsYXNzIFZhbGlkYXRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgZ2V0IG1lc3NhZ2VEZWYoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLnByb3BzLmludmFsaWRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IHRoaXMucHJvcHMubWlzc2luZ01lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaW1jb21wbGV0ZTogdGhpcy5wcm9wcy5wcm9tcHRNZXNzYWdlLFxuICAgICAgICAgICAgICAgICcnOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdCguLi5wcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuaW5pdCguLi5wcm9wcyk7XG4gICAgICAgICAgICAvLyBoYW5kbGVyXG4gICAgICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgaW5pdFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGxvY2FsIHZhcmlhYmxlIHNob3VsZCBub3QgYmUgdXNlZCBhcyB0cmlnZ2VyIHRhZ1xuICAgICAgICAgICAgdGhpcy5faGFzQmVlbkJsdXJyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldE1lc3NhZ2UobW9kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlRGVmW21vZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGlucHV0VmFsdWV9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBuZXh0RGlzYWJsZWQgPSBuZXh0UHJvcHMuZGlzYWJsZWQgPT09IHRydWUgJiYgZGlzYWJsZWQgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRFbmFibGVkID0gbmV4dFByb3BzLmRpc2FibGVkID09PSBmYWxzZSAmJiBkaXNhYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gaW5wdXRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5leHREaXNhYmxlZCkgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0JlZW5CbHVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUobmV4dFByb3BzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1cihlKSB7XG4gICAgICAgICAgICAvLyBzZXQgYmx1ciBmbGFnXG4gICAgICAgICAgICB0aGlzLl9oYXNCZWVuQmx1cnJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkZvY3VzKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0JlZW5CbHVycmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpc1ZhbGlkKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7cmVnRXhwLCB2YWxpZGF0b3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCFyZWdFeHAgJiYgIXZhbGlkYXRvcikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiByZWdFeHAgJiYgcmVnRXhwLnRlc3QodmFsdWUpIHx8IHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVpcmVkLCBvblZhbGlkYXRlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRW1wdHkgPSBpc0VtcHR5KGlucHV0VmFsdWUpLFxuICAgICAgICAgICAgICAgIG5vdFZhbGlkID0gIXRoaXMuaXNWYWxpZChpbnB1dFZhbHVlKSxcbiAgICAgICAgICAgICAgICBtb2QgPSAoaXNWYWx1ZUVtcHR5ICYmIHJlcXVpcmVkKSA/ICdtaXNzaW5nJyA6IG5vdFZhbGlkID8gJ2Vycm9yJyA6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UobW9kKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZCwgbWVzc2FnZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25WYWxpZGF0ZWQgJiYgb25WYWxpZGF0ZWQoe21vZCwgbWVzc2FnZSwgb2s6IG1vZCA9PT0gJyd9LCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgbW9kOiB0aGlzLnN0YXRlLm1vZCxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICAgICAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50b29sdGlwID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2Nlc3NSZWYuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVmFsaWRhdGFibGVDb21wb25lbnQuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcywge1xuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHByb21wdE1lc3NhZ2U6ICcnLFxuICAgICAgICBpbnZhbGlkTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgbm90IHZhbGlkJyxcbiAgICAgICAgbWlzc2luZ01lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsXG4gICAgfSk7XG5cbiAgICBWYWxpZGF0YWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHt9LCBDb21wb25lbnQucHJvcFR5cGVzLCB7XG4gICAgICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHJvbXB0TWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaW52YWxpZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pc3NpbmdNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICByZWdFeHA6IFByb3BUeXBlcy5yZWdFeHAsXG4gICAgICAgIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uVmFsaWRhdGVkOiBQcm9wVHlwZXMuZnVuY1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFZhbGlkYXRhYmxlQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVscGVyL3ZhbGlkYXRhYmxlLmpzeCIsImltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9XaWRnZXRzL1Rvb2x0aXAnO1xyXG5cclxuXHJcbi8vIHdpdGhUb29sdGlwXHJcbi8vIGN1cnJlbnRseSBJIHVzZWQgY3NzIHBlc2V1ZG8tZWxlbWVudCBhcyB0b29sdGlwXHJcbi8vIGJ1dCBJIGZlZWwgd2UgbWF5IG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cclxuLy8gYmVjYXVzZSBpdCBoYXMgc29tZSBsaW1pdGF0aW9uOlxyXG4vLyBmb3IgZXhhbXBsZSwgcGVzZWR1by1lbGVtZW50IG9ubHkgc3VwcG9ydCBwdXJlIHRleHRcclxuLy8gc28gbm8gSFRNTCBpcyBjYW4gYmUgc2hvd25cclxuLy8gVE9ETzogYmV0dGVyIHNvbHV0aW9uLCBtYXliZSBhbm90aGVyIGhlbHBlciB0byBzdXBwb3J0IEhUTUxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRvb2x0aXAoQ29tcG9uZW50KSB7XHJcbiAgICBjbGFzcyBDb21wb25lbnRXaXRoVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgZ2V0IGZvY3VzZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbU5vZGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0KC4uLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXQoLi4ucHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQgJiYgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoLi4uYXJncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdG9vbHRpcCBjb250YWluZXJcclxuICAgICAgICAgICAgbGV0IHRvb2x0aXBDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50b29sdGlwJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vdCBleGlzdCwgY3JlYXRlIG9uY2VcclxuICAgICAgICAgICAgaWYgKCF0b29sdGlwQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b29sdGlwJztcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0byBjb21wb25lbnQgbG9jYWwgcHJvcFxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSB0b29sdGlwQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBldmVudHNcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCguLi5hcmdzKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnRvb2x0aXBDb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlICYmIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgdG9vbHRpcCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgICAgIFJlYWN0RG9tLnJlbmRlcig8VG9vbHRpcCB0b29sdGlwPXt0b29sdGlwfSAvPiwgdGhpcy50b29sdGlwQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvY2Vzc1JlZn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb21wb25lbnRXaXRoVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBUb29sdGlwLmRlZmF1bHRQcm9wcywgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyk7XHJcblxyXG4gICAgQ29tcG9uZW50V2l0aFRvb2x0aXAucHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7fSwgVG9vbHRpcC5wcm9wVHlwZXMpO1xyXG5cclxuICAgIHJldHVybiBDb21wb25lbnRXaXRoVG9vbHRpcDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWxwZXIvd2l0aFRvb2x0aXAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vQmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sVGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGB0b29sdGlwYDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lzT3BlbiwgdG9vbHRpcCwgdG9vbHRpcFBvc2l0aW9ucywgdG9vbHRpcFBvc2l0aW9ufSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgdG9vbHRpcFBvc2l0aW9uc1t0b29sdGlwUG9zaXRpb25dO1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbHN9Pnt0b29sdGlwfTwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxuVG9vbFRpcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcGFjaXR5OiAuNSxcclxuICAgIHRvb2x0aXBQb3NpdGlvbnM6IHtcclxuICAgICAgICBhZnRlcjogJ2FmdGVyJyxcclxuICAgICAgICBiZWZvcmU6ICdiZWZvcmUnLFxyXG4gICAgICAgIGFib3ZlOiAnYWJvdmUnLFxyXG4gICAgICAgIGJlbG93OiAnYmVsb3cnLFxyXG4gICAgICAgICdiZWxvdy1jZW50ZXJlZCc6ICdiZWxvdy1jZW50ZXJlZCcsXHJcbiAgICAgICAgJ2Fib3ZlLWNlbnRlcmVkJzogJ2Fib3ZlLWNlbnRlcmVkJ1xyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6ICcnLFxyXG4gICAgdG9vbHRpcFBvc2l0aW9uOiAnJyxcclxuICAgIHRvb2x0aXBTdGF0ZTogJ05PUk1BTCdcclxufTtcclxuXHJcblRvb2xUaXAucHJvcFR5cGVzID0ge1xyXG4gICAgb3BhY2l0eTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdG9vbHRpcFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdG9vbHRpcFBvc2l0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHRvb2x0aXBTdGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL1Rvb2x0aXAvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHpJbmRleHMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYG92ZXJsYXlgO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc09wZW59ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNscyA9IHRoaXMuY2xhc3NOYW1lICsgJyAnICsgKCFpc09wZW4gPyAnaGlkZGVuJyA6ICcnKSxcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogekluZGV4cy5PdmVybGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xzfSBzdHlsZT17c3R5bGV9PjwvZGl2PilcbiAgICB9XG59XG5cbk92ZXJsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIG9wYWNpdHk6IC41XG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaWRnZXRzL092ZXJsYXkvaW5kZXguanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURpYWxvZ09wZW4oZGlhbG9nTmFtZSwgb3BlblN0YXRlKSB7XG4gICAgbGV0IGhhc1N0YXRlU2V0ID0gdHlwZW9mIG9wZW5TdGF0ZSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIG9wZW5TdGF0ZU5hbWUgPSAnJGlzT3Blbic7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7W2RpYWxvZ05hbWUgKyBvcGVuU3RhdGVOYW1lXTogaGFzU3RhdGVTZXQgPyBvcGVuU3RhdGUgOiAhc3RhdGVbZGlhbG9nTmFtZSArIG9wZW5TdGF0ZU5hbWVdfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9EaWFsb2dzL0RpYWxvZ3NBY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Gb3JtL0J1dHRvbic7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9DaGVja2JveCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CYXNpY1VJL0hlYWRlcic7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW19IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bic7XG5cbmNvbnN0IHZhbGlkYXRvciA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuaW5jbHVkZXMoJ3MnKTtcbn1cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBuYW1lRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWVGaWVsZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHdkRmllbGQ6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXG4gICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yLFxuICAgICAgICBuYW1lOiAncHdkRmllbGQnXG4gICAgfSxcbiAgICBkcm9wZG93bjoge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVDaGVja2JveDoge1xuICAgICAgICBuYW1lOiAnZGlzYWJsZUNoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9LFxuICAgIGhpZGRlbjogdHJ1ZVxufTtcblxuLy8gRm9ybSBwYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRyYW5zZm9ybVN0YXRlKGluaXRTdGF0ZSk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25JdGVtID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0l0ZW0gMScsIHZhbHVlOiAnaTEnfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdJdGVtIDInLCB2YWx1ZTogJ2kyJ30sXG4gICAgICAgICAgICB7IGxhYmVsOiAnSXRlbSAzJywgdmFsdWU6ICdpMyd9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgdG9nZ2xlRmllbGREaXNhYmxlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuZ2V0U3RhdGUobmFtZSwgJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy50cmFuc2Zvcm1TdGF0ZShpbml0U3RhdGUpLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnB3ZEZpZWxkLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXToge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdkaXNhYmxlQ2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0aGlzLmdldFN0YXRlKCdkcm9wZG93bicsICAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IGRpc2FibGVkID8gJ2Rpc2FibGVkIHRvb2x0aXAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25WYWxpZGF0ZWQoe21lc3NhZ2UsIG1vZCwgb2t9KSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBtb2QsIG9rKTtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHRvb2x0aXAgb3Igc29tZSBtZXNzYWdlIGJveFxuICAgIH1cblxuICAgIG9uRHJvcGRvd25DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgW2kxLCBpMiwgaTMsIGRyb3Bkb3duUHJvcHNdID0gdGhpcy5nZXRTdGF0ZXMoWyduYW1lRmllbGQnLCAncHdkRmllbGQnLCAnZGlzYWJsZUNoZWNrYm94JywgJ2Ryb3Bkb3duJ10pO1xuXG4gICAgICAgIGkxLm9uVmFsaWRhdGVkID0gdGhpcy5vblZhbGlkYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiZm9ybXNcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvbkNoYW5nZT17dGhpcy5oYW5kbGVFdmVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkJ1dHRvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNob3dUb29sdGlwT25Mb2FkPXtmYWxzZX0gb25DbGlja2VkPXt0aGlzLnRvZ2dsZUZpZWxkRGlzYWJsZS5iaW5kKHRoaXMsICduYW1lRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIE5hbWUgRmllbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2tlZD17dGhpcy50b2dnbGVGaWVsZERpc2FibGUuYmluZCh0aGlzLCAncHdkRmllbGQnKX0gdGV4dD1cIlRvZ2dsZSBEaXNhYmxlIFBhc3N3b3JkIEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrZWQ9e3RoaXMucmVzZXRBbGwuYmluZCh0aGlzKX0gdGV4dD1cIlJlc2V0IEFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXBUZXh0PVwiRGlzYWJsZWQgdG9vbHRpcFwiIHRleHQ9XCJEaXNhYmxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIlZhbGlkYXRpb25UZXh0Qm94XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IHsuLi5pMX0gcmVmPXtuYW1lID0+IHRoaXMubmFtZUZpZWxkID0gbmFtZX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48VGV4dElucHV0IHsuLi5pMn0gcmVmPXtuYW1lID0+IHRoaXMucHdkRmllbGQgPSBuYW1lfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxUZXh0SW5wdXQgZGlzYWJsZWQ9e3RydWV9IHRvb2x0aXBUZXh0PXtcIkRpc2FibGVkIHRvb2x0aXBcIn0gaW5wdXRWYWx1ZT1cIkkgYW0gZGlzYWJsZWRcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+WW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGNvbnRhaW4gYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSwgb25lIGxvd2VyY2FzZSwgYW5kIG9uZSBudW1iZXIuPC9zbWFsbD5cblxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9XCJEcm9wZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpdGVtcz17dGhpcy5kcm9wZG93bkl0ZW19IG9uQ2hhbmdlPXt0aGlzLm9uRHJvcGRvd25DaGFuZ2UuYmluZCh0aGlzKX0gey4uLmRyb3Bkb3duUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIkNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRGlzYWJsZSBkcm9wIGRvd25cIiB7Li4uaTN9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Gb3Jtcy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgdmFsaWRhdGFibGUgLCB3aXRoVG9vbHRpcCB9IGZyb20gJy4uLy4uL0hlbHBlcic7XG5pbXBvcnQgeyBnZXRDbHNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hWaWV3IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGNoZWNrYm94YDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIG5hbWUsIGNoZWNrZWQsIGxhYmVsfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHJlZj17aW5wdXQgPT4gdGhpcy5kb21Ob2RlID0gaW5wdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRXZlbnR9XG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUV2ZW50fVxuICAgICAgICAgICAgICAgIC8+e2xhYmVsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNoZWNrYm94Vmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGxhYmVsOiAnJ1xufTtcblxuQ2hlY2tib3hWaWV3LnByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgQ2hlY2tib3ggPSB3aXRoVG9vbHRpcChDaGVja2JveFZpZXcpO1xuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9UZXh0SW5wdXQnO1xuXG5pbXBvcnQgeyBwb3B1cGFibGUgfSBmcm9tICcuLi8uLi9IZWxwZXInO1xuaW1wb3J0IHsgZ2V0Q2xzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZElkKVswXTtcbiAgICB9XG4gICAgZ2V0IGZpcnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtc1swXSB8fCB7fTtcbiAgICB9XG4gICAgZ2V0IGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zW3RoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC0gMV0gfHwge307XG4gICAgfVxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLnN0YXRlLml0ZW1zLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRoaXMuc2VsZWN0ZWRJdGVtLmlkKSA6IDA7XG4gICAgfVxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duYDtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzID0gdGhpcy5nZXRMaWJQcmVmaXhlZENsYXNzKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAvLyBoYW5kbGVyc1xuICAgICAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgdGhpcy5pbml0RmlsdGVyID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJhbnNmb3JtU3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSWQ6ICctMScsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBjdXJzb3I6ICctMScsXG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndGV4dElucHV0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5pbml0RmlsdGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0aGlzLl9jbGlja09yRm9jdXNBbnl3aGVyZUhhbmRsZXIgPSBlID0+IHRoaXMuX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpKSk7XG4gICAgICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IE9iamVjdC5hc3NpZ24oaXRlbSwge2lkOiAnaXRlbScgKyBpfSkpfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgX2NsaWNrT3JGb2N1c0FueXdoZXJlKGUpIHtcbiAgICAgICAgLy8gaWYgdGhlIGNsaWNrIHdhcyB3aXRoaW4gc2VsZiwgaWdub3JlOyBvdGhlcndpc2UsIGNsb3NlIHNlbGZcbiAgICAgICAgaWYgKCF0aGlzLmRvbU5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KGlkID0gLTEpIHtcbiAgICAgICAgaWYgKGlkID09PSAtMSkgcmV0dXJuIHRoaXMuZmlyc3QuaWQ7XG4gICAgICAgIGxldCBpbmRleE9mSXRlbSA9IHRoaXMuc3RhdGUuaXRlbXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXhPZkl0ZW0gPT09IHRoaXMubGVuZ3RoIC0gMSkgcmV0dXJuIHRoaXMuZmlyc3QuaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zW2luZGV4T2ZJdGVtICsgMV0uaWQ7XG4gICAgfVxuXG4gICAgcHJldihpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiB0aGlzLmxhc3QuaWQ7XG4gICAgICAgIGxldCBpbmRleE9mSXRlbSA9IHRoaXMuc3RhdGUuaXRlbXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXhPZkl0ZW0gPT09IDApIHJldHVybiB0aGlzLmxhc3QuaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zW2luZGV4T2ZJdGVtIC0gMV0uaWQ7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZCA9IC0xKSB7XG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgbGV0IGN1cnNvcklkID0gdGhpcy5zdGF0ZS5jdXJzb3IgIT09IC0xID8gdGhpcy5zdGF0ZS5jdXJzb3IgOiB0aGlzLnN0YXRlLnNlbGVjdGVkSWQ7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnNvcjogdGhpcy5uZXh0KGN1cnNvcklkKSxcbiAgICAgICAgICAgICAgICBpc09wZW46IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnNvcjogdGhpcy5wcmV2KGN1cnNvcklkKSxcbiAgICAgICAgICAgICAgICBpc09wZW46IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbShjdXJzb3JJZCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ6IGN1cnNvcklkLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogIXRoaXMuc3RhdGUuaXNPcGVuID8gdGhpcy5zdGF0ZS5zZWxlY3RlZElkIDogLTEsXG4gICAgICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXIsXG4gICAgICAgICAgICAgICAgdGV4dElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IGl0ZW0gPyBpdGVtLmxhYmVsIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuaW5pdEZpbHRlcixcbiAgICAgICAgICAgIGN1cnNvcjogLTFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBpZCwgc2VsZWN0ZWQsIGxhYmVsfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkOiBpZCxcbiAgICAgICAgICAgICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogbGFiZWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwge3RhcmdldDogdGhpcy5kb21Ob2RlfSkpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgICAgICB0ZXh0SW5wdXQ6IHsgaW5wdXRWYWx1ZSB9LFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmdldEZpbHRlcihpbnB1dFZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hhcnMgPSBpbnB1dFZhbHVlLnNwbGl0KCcnKSxcbiAgICAgICAgICAgICAgICByZWdHcnAgPSBjaGFycy5tYXAoYyA9PiBgWyR7KGMgKyAnJykudG9VcHBlckNhc2UoKX0keyhjICsgJycpLnRvTG93ZXJDYXNlKCl9XWApO1xuXG4gICAgICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAocmVnR3JwLmpvaW4oJycpKSkudGVzdChpdGVtLmxhYmVsKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtID8gdGhpcy5zZWxlY3RlZEl0ZW0ubGFiZWwgOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBjdXJzb3I6IC0xLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmluaXRGaWx0ZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHtpdGVtcywgc2VsZWN0ZWRJZCwgY3Vyc29yfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIFtpbnB1dFByb3BzXSA9IHRoaXMuZ2V0U3RhdGVzKFsndGV4dElucHV0J10pLFxuICAgICAgICAgICAgbmV3SW5wdXRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLmxhYmVsIDogcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jbGFzc05hbWV9IHJlZj17dGhpcy5wcm9jZXNzUmVmfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUV2ZW50fSBvbktleURvd249e3RoaXMuaGFuZGxlRXZlbnR9PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gc2VsZWN0ZWQ9eyEhc2VsZWN0ZWRJdGVtfSB2YWx1ZT17c2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLnZhbHVlIDogJyd9IGNsYXNzTmFtZT17dGhpcy5wbGFjZWhvbGRlckNsYXNzICsgJyBub25lIGN1cnJlbnQnfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCB7Li4udGhpcy5wcm9wc30gey4uLm5ld0lucHV0UHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdCBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufSBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyfSBjbG9zZT17dGhpcy5jbG9zZX0gaXRlbXM9e2l0ZW1zfSBzZWxlY3RlZElkPXtjdXJzb3IgIT09IC0xID8gY3Vyc29yOiBzZWxlY3RlZElkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2UgU2VsZWN0Li4uJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTGlzdFZpZXcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiAnRHJvcGRvd24nO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUNsYXNzTmFtZSA9IGBkcm9wZG93bldyYXBwZXJgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2l0ZW1zLCBjbGFzc05hbWUsIHpJbmRleCwgc2VsZWN0ZWRJZCwgZmlsdGVyLCBub0l0ZW1NZXNzYWdlfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjbHMgPSBnZXRDbHNOYW1lKHRoaXMuY2xhc3NOYW1lLCAoIXRoaXMucHJvcHMuaXNPcGVuID8gJ2hpZGRlbicgOiAnJykpLFxuICAgICAgICAgICAgbmV3SXRlbXMgPSBpdGVtcy5maWx0ZXIoZmlsdGVyKSxcbiAgICAgICAgICAgIGhhc0l0ZW0gPSBuZXdJdGVtcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgc3R5bGUgPSB7ekluZGV4fTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICB7aGFzSXRlbSA/IG5ld0l0ZW1zLm1hcChpdGVtID0+IDxEcm9wZG93bkl0ZW0ga2V5PXtpdGVtLmlkfSBpZD17aXRlbS5pZH0gbGFiZWw9e2l0ZW0ubGFiZWx9IHZhbHVlPXtpdGVtLnZhbHVlfSBzZWxlY3RlZD17c2VsZWN0ZWRJZCA9PT0gaXRlbS5pZH0gLz4gKSA6IDxEcm9wZG93bkl0ZW0+e25vSXRlbU1lc3NhZ2V9PC9Ecm9wZG93bkl0ZW0+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ecm9wZG93bkxpc3RWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB6SW5kZXg6IDAsXG4gICAgY2xvc2U6ICgpID0+IHt9LFxuICAgIGZpbHRlcjogKCkgPT4gdHJ1ZSxcbiAgICBub0l0ZW1NZXNzYWdlOiAnTm8gSXRlbSBGb3VuZCdcbn1cblxuRHJvcGRvd25MaXN0Vmlldy5wcm9wVHlwZXMgPSB7XG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbm9JdGVtTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25MaXN0ID0gcG9wdXBhYmxlKERyb3Bkb3duTGlzdFZpZXcpO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2xhc3NOYW1lID0gYGRyb3Bkb3duSXRlbWA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgdmFsdWUsIGxhYmVsLCBpZCwgc2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWlkPXtpZH0gZGF0YS1zZWxlY3RlZD17c2VsZWN0ZWR9IGRhdGEtbGFiZWw9e2xhYmVsfSBkYXRhLXZhbHVlPXt2YWx1ZX0gY2xhc3NOYW1lPXt0aGlzLmNsYXNzTmFtZX0+e2NoaWxkcmVuIHx8IGxhYmVsfTwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHJpbmc6ICdQbGVhc2UgU2VsZWN0Li4uJyxcbiAgICB2YWx1ZTogJycsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlXG59O1xuXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ecm9wZG93bi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0Jhc2ljVUkvSGVhZGVyJztcclxuXHJcbmNvbnN0IGxvbmdUb29sdGlwID0gYFNvLCB5ZXN0ZXJkYXksIGJlaW5nIGFub3RoZXIgcmFpbnkgZGF5IGluIENoaWNhZ28sIEkgZ3JhYmJlZCBhIGRpZ2l0YWwgcmVudGFsIG9mIEZyYW5rZW53ZWVuaWUuXHJcbkEgZmV3IHllYXJzIGFnbywgbXkgd2lmZSBhbmQgSSBzYXcgaXQgd2hlbiBpdCB3YXMgaW4gdGhlYXRlcnMuIEFuZCB3ZSBsb3ZlZCBpdC4gQmVpbmcgdGhhdCBSb3J5IGxvdmVzIGRvZ3MgKGxpa2UsIG9ic2Vzc2l2ZWx5IHNvKSwgSSBmaWd1cmVkIHNoZeKAmWQgZW5qb3kgaXQgdG9vLlxyXG5MaXR0bGUgZGlkIEkga25vdyB3aGF0IEkgd2FzIGluIHN0b3JlIGZvcuKApmA7XHJcblxyXG5jb25zdCBvbmVMaW5lV2l0aElubGluZU1hcmt1cCA9IGA8c3BhbiBjbGFzcz1cImNvbG9yZnVsXCI+SSBhbSBjb2xvcmZ1bCB0b29sdGlwPC9zcGFuPmA7XHJcbi8vIFRvb2x0aXBzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcHMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cInRvb2x0aXBzXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhZnRlclwiIHRvb2x0aXBQb3NpdGlvbj1cImFmdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlZm9yZVwiIHRvb2x0aXBQb3NpdGlvbj1cImJlZm9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBhYm92ZVwiIHRvb2x0aXBQb3NpdGlvbj1cImFib3ZlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlRvb2x0aXAgcG9zaXRpb246IGJlbG93XCIgdG9vbHRpcFBvc2l0aW9uPVwiYmVsb3dcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHBvc2l0aW9uOiBiZWxvdy1jZW50ZXJlZFwiIHRvb2x0aXBQb3NpdGlvbj1cImJlbG93LWNlbnRlcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG9vbHRpcCBwb3NpdGlvbjogYWJvdmUtY2VudGVyZWRcIiB0b29sdGlwUG9zaXRpb249XCJhYm92ZS1jZW50ZXJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIGNhbiBiZSBlbnRlcnJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb29sdGlwIHN0YXRlIGlzIGFsd2F5cyBXQVJOSU5HXCIgdG9vbHRpcFN0YXRlPVwiV0FSTklOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJIZWxwIFRpcHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUmVhbGx5IExvbmcgdG9vbHRpcFwiIHRvb2x0aXA9e2xvbmdUb29sdGlwfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiT25lLWxpbmVyIHdpdGggaW5saW5lIG1hcmt1cFwiIHRvb2x0aXA9e29uZUxpbmVXaXRoSW5saW5lTWFya3VwfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvVG9vbHRpcHMvaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==