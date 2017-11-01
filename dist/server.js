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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(2);

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = __webpack_require__(3);

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _root = __webpack_require__(4);

var _root2 = _interopRequireDefault(_root);

var _ws = __webpack_require__(22);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('Env:', process.env.NODE_ENV);

// create koa server
var app = new _koa2.default();
var wss = new _ws2.default.Server({ port: 8081 });

// use logger, routes
app.use((0, _koaLogger2.default)()).use(async function (ctx, next) {
    if (process.env.NODE_ENV === 'dev') {
        ctx.env = process.env.NODE_ENV;
    }
    await next();
}).use(_root2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);

// TODO: combine ws with Koa for better and easy dev
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = __webpack_require__(5);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBetterStatic = __webpack_require__(6);

var _koaBetterStatic2 = _interopRequireDefault(_koaBetterStatic);

var _templates = __webpack_require__(7);

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create router
var router = new _koaRouter2.default();
// static assets
router.get('/*', (0, _koaBetterStatic2.default)('.'));

// root
router.get('/', async function (ctx, next) {
    ctx.startTime = process.hrtime();
    ctx.title = 'E';
    ctx.body = (0, _templates2.default)(ctx);
});

// test path
router.get('/test', async function (ctx, next) {
    ctx.body = 'get /test2';
});

exports.default = router;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-better-static2");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// default page tempalate
var page = function page(ctx) {
    return "<!doctype html>\n<html lang=\"en\">\n    " + header_tpl(ctx) + "\n    " + body_tpl(ctx) + "\n    " + footer_tpl(ctx) + "\n    <script src=\"/public/index.js\"></script>\n</html>";
};

exports.default = page;

// body template

var body_tpl = exports.body_tpl = function body_tpl() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$body = _ref.body,
        body = _ref$body === undefined ? "<div id=\"root\"></div>" : _ref$body;

    return "<body>" + body + "</body>";
};

// header template
var header_tpl = exports.header_tpl = function header_tpl() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$title = _ref2.title,
        title = _ref2$title === undefined ? "serverTemplate" : _ref2$title,
        _ref2$charset = _ref2.charset,
        charset = _ref2$charset === undefined ? "UTF-8" : _ref2$charset,
        _ref2$cssHref = _ref2.cssHref,
        cssHref = _ref2$cssHref === undefined ? "public/css/style.css" : _ref2$cssHref;

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <script src=\"/public/js/react.production.min.js\"></script>\n    <script src=\"/public/js/react-dom.production.min.js\"></script>\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n</head>";
};

// footer template
var footer_tpl = exports.footer_tpl = function footer_tpl(_ref3) {
    var startTime = _ref3.startTime;

    if (typeof startTime === 'undefined') {
        return '';
    }
    var NS_PER_SEC = 1e9;
    var diff = process.hrtime(startTime);

    return "\n            <footer>\n                <small>Page generate time: " + (diff[0] * NS_PER_SEC + diff[1]) + " nanoseconds</small>\n            </footer>";
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(24);
var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }
  return Buffer(arg, encodingOrOffset, length);
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf;
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return Buffer(size);
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return buffer.SlowBuffer(size);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var safeBuffer = __webpack_require__(8);
var zlib = __webpack_require__(25);
var Limiter = __webpack_require__(26);

var bufferUtil = __webpack_require__(11);

var Buffer = safeBuffer.Buffer;

var TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
var EMPTY_BLOCK = Buffer.from([0x00]);

// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's
// an issue.
var zlibLimiter = void 0;

/**
 * Per-message Deflate implementation.
 */

var PerMessageDeflate = function () {
  function PerMessageDeflate(options, isServer, maxPayload) {
    _classCallCheck(this, PerMessageDeflate);

    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      var concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
      zlibLimiter = new Limiter({ concurrency: concurrency });
    }
  }

  _createClass(PerMessageDeflate, [{
    key: 'offer',


    /**
     * Create extension parameters offer.
     *
     * @return {Object} Extension parameters
     * @public
     */
    value: function offer() {
      var params = {};

      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }
      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }
      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }
      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }

      return params;
    }

    /**
     * Accept extension offer.
     *
     * @param {Array} paramsList Extension parameters
     * @return {Object} Accepted configuration
     * @public
     */

  }, {
    key: 'accept',
    value: function accept(paramsList) {
      paramsList = this.normalizeParams(paramsList);

      var params;
      if (this._isServer) {
        params = this.acceptAsServer(paramsList);
      } else {
        params = this.acceptAsClient(paramsList);
      }

      this.params = params;
      return params;
    }

    /**
     * Releases all resources used by the extension.
     *
     * @public
     */

  }, {
    key: 'cleanup',
    value: function cleanup() {
      if (this._inflate) {
        if (this._inflate.writeInProgress) {
          this._inflate.pendingClose = true;
        } else {
          this._inflate.close();
          this._inflate = null;
        }
      }
      if (this._deflate) {
        if (this._deflate.writeInProgress) {
          this._deflate.pendingClose = true;
        } else {
          this._deflate.close();
          this._deflate = null;
        }
      }
    }

    /**
     * Accept extension offer from client.
     *
     * @param {Array} paramsList Extension parameters
     * @return {Object} Accepted configuration
     * @private
     */

  }, {
    key: 'acceptAsServer',
    value: function acceptAsServer(paramsList) {
      var _this = this;

      var accepted = {};
      var result = paramsList.some(function (params) {
        if (_this._options.serverNoContextTakeover === false && params.server_no_context_takeover || _this._options.serverMaxWindowBits === false && params.server_max_window_bits || typeof _this._options.serverMaxWindowBits === 'number' && typeof params.server_max_window_bits === 'number' && _this._options.serverMaxWindowBits > params.server_max_window_bits || typeof _this._options.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
          return;
        }

        if (_this._options.serverNoContextTakeover || params.server_no_context_takeover) {
          accepted.server_no_context_takeover = true;
        }
        if (_this._options.clientNoContextTakeover || _this._options.clientNoContextTakeover !== false && params.client_no_context_takeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof _this._options.serverMaxWindowBits === 'number') {
          accepted.server_max_window_bits = _this._options.serverMaxWindowBits;
        } else if (typeof params.server_max_window_bits === 'number') {
          accepted.server_max_window_bits = params.server_max_window_bits;
        }
        if (typeof _this._options.clientMaxWindowBits === 'number') {
          accepted.client_max_window_bits = _this._options.clientMaxWindowBits;
        } else if (_this._options.clientMaxWindowBits !== false && typeof params.client_max_window_bits === 'number') {
          accepted.client_max_window_bits = params.client_max_window_bits;
        }
        return true;
      });

      if (!result) throw new Error("Doesn't support the offered configuration");

      return accepted;
    }

    /**
     * Accept extension response from server.
     *
     * @param {Array} paramsList Extension parameters
     * @return {Object} Accepted configuration
     * @private
     */

  }, {
    key: 'acceptAsClient',
    value: function acceptAsClient(paramsList) {
      var params = paramsList[0];

      if (this._options.clientNoContextTakeover != null) {
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Invalid value for "client_no_context_takeover"');
        }
      }
      if (this._options.clientMaxWindowBits != null) {
        if (this._options.clientMaxWindowBits === false && params.client_max_window_bits) {
          throw new Error('Invalid value for "client_max_window_bits"');
        }
        if (typeof this._options.clientMaxWindowBits === 'number' && (!params.client_max_window_bits || params.client_max_window_bits > this._options.clientMaxWindowBits)) {
          throw new Error('Invalid value for "client_max_window_bits"');
        }
      }

      return params;
    }

    /**
     * Normalize extensions parameters.
     *
     * @param {Array} paramsList Extension parameters
     * @return {Array} Normalized extensions parameters
     * @private
     */

  }, {
    key: 'normalizeParams',
    value: function normalizeParams(paramsList) {
      var _this2 = this;

      return paramsList.map(function (params) {
        Object.keys(params).forEach(function (key) {
          var value = params[key];
          if (value.length > 1) {
            throw new Error('Multiple extension parameters for ' + key);
          }

          value = value[0];

          switch (key) {
            case 'server_no_context_takeover':
            case 'client_no_context_takeover':
              if (value !== true) {
                throw new Error('invalid extension parameter value for ' + key + ' (' + value + ')');
              }
              params[key] = true;
              break;
            case 'server_max_window_bits':
            case 'client_max_window_bits':
              if (typeof value === 'string') {
                value = parseInt(value, 10);
                if (Number.isNaN(value) || value < zlib.Z_MIN_WINDOWBITS || value > zlib.Z_MAX_WINDOWBITS) {
                  throw new Error('invalid extension parameter value for ' + key + ' (' + value + ')');
                }
              }
              if (!_this2._isServer && value === true) {
                throw new Error('Missing extension parameter value for ' + key);
              }
              params[key] = value;
              break;
            default:
              throw new Error('Not defined extension parameter (' + key + ')');
          }
        });
        return params;
      });
    }

    /**
     * Decompress data. Concurrency limited by async-limiter.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */

  }, {
    key: 'decompress',
    value: function decompress(data, fin, callback) {
      var _this3 = this;

      zlibLimiter.push(function (done) {
        _this3._decompress(data, fin, function (err, result) {
          done();
          callback(err, result);
        });
      });
    }

    /**
     * Compress data. Concurrency limited by async-limiter.
     *
     * @param {Buffer} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */

  }, {
    key: 'compress',
    value: function compress(data, fin, callback) {
      var _this4 = this;

      zlibLimiter.push(function (done) {
        _this4._compress(data, fin, function (err, result) {
          done();
          callback(err, result);
        });
      });
    }

    /**
     * Decompress data.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */

  }, {
    key: '_decompress',
    value: function _decompress(data, fin, callback) {
      var _this5 = this;

      var endpoint = this._isServer ? 'client' : 'server';

      if (!this._inflate) {
        var key = endpoint + '_max_window_bits';
        var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];

        this._inflate = zlib.createInflateRaw({ windowBits: windowBits });
      }
      this._inflate.writeInProgress = true;

      var totalLength = 0;
      var buffers = [];
      var err;

      var onData = function onData(data) {
        totalLength += data.length;
        if (_this5._maxPayload < 1 || totalLength <= _this5._maxPayload) {
          return buffers.push(data);
        }

        err = new Error('max payload size exceeded');
        err.closeCode = 1009;
        _this5._inflate.reset();
      };

      var onError = function onError(err) {
        cleanup();
        callback(err);
      };

      var cleanup = function cleanup() {
        if (!_this5._inflate) return;

        _this5._inflate.removeListener('error', onError);
        _this5._inflate.removeListener('data', onData);
        _this5._inflate.writeInProgress = false;

        if (fin && _this5.params[endpoint + '_no_context_takeover'] || _this5._inflate.pendingClose) {
          _this5._inflate.close();
          _this5._inflate = null;
        }
      };

      this._inflate.on('error', onError).on('data', onData);
      this._inflate.write(data);
      if (fin) this._inflate.write(TRAILER);

      this._inflate.flush(function () {
        cleanup();
        if (err) callback(err);else callback(null, bufferUtil.concat(buffers, totalLength));
      });
    }

    /**
     * Compress data.
     *
     * @param {Buffer} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */

  }, {
    key: '_compress',
    value: function _compress(data, fin, callback) {
      var _this6 = this;

      if (!data || data.length === 0) {
        process.nextTick(callback, null, EMPTY_BLOCK);
        return;
      }

      var endpoint = this._isServer ? 'server' : 'client';

      if (!this._deflate) {
        var key = endpoint + '_max_window_bits';
        var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];

        this._deflate = zlib.createDeflateRaw({
          memLevel: this._options.memLevel,
          level: this._options.level,
          flush: zlib.Z_SYNC_FLUSH,
          windowBits: windowBits
        });
      }
      this._deflate.writeInProgress = true;

      var totalLength = 0;
      var buffers = [];

      var onData = function onData(data) {
        totalLength += data.length;
        buffers.push(data);
      };

      var onError = function onError(err) {
        cleanup();
        callback(err);
      };

      var cleanup = function cleanup() {
        if (!_this6._deflate) return;

        _this6._deflate.removeListener('error', onError);
        _this6._deflate.removeListener('data', onData);
        _this6._deflate.writeInProgress = false;

        if (fin && _this6.params[endpoint + '_no_context_takeover'] || _this6._deflate.pendingClose) {
          _this6._deflate.close();
          _this6._deflate = null;
        }
      };

      this._deflate.on('error', onError).on('data', onData);
      this._deflate.write(data);
      this._deflate.flush(zlib.Z_SYNC_FLUSH, function () {
        cleanup();
        var data = bufferUtil.concat(buffers, totalLength);
        if (fin) data = data.slice(0, data.length - 4);
        callback(null, data);
      });
    }
  }], [{
    key: 'extensionName',
    get: function get() {
      return 'permessage-deflate';
    }
  }]);

  return PerMessageDeflate;
}();

module.exports = PerMessageDeflate;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var safeBuffer = __webpack_require__(8);

var Buffer = safeBuffer.Buffer;

/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */
var concat = function concat(list, totalLength) {
  var target = Buffer.allocUnsafe(totalLength);
  var offset = 0;

  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(target, offset);
    offset += buf.length;
  }

  return target;
};

try {
  var bufferUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bufferutil\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  module.exports = Object.assign({ concat: concat }, bufferUtil.BufferUtil || bufferUtil);
} catch (e) /* istanbul ignore next */{
  /**
   * Masks a buffer using the given mask.
   *
   * @param {Buffer} source The buffer to mask
   * @param {Buffer} mask The mask to use
   * @param {Buffer} output The buffer where to store the result
   * @param {Number} offset The offset at which to start writing
   * @param {Number} length The number of bytes to mask.
   * @public
   */
  var mask = function mask(source, _mask, output, offset, length) {
    for (var i = 0; i < length; i++) {
      output[offset + i] = source[i] ^ _mask[i & 3];
    }
  };

  /**
   * Unmasks a buffer using the given mask.
   *
   * @param {Buffer} buffer The buffer to unmask
   * @param {Buffer} mask The mask to use
   * @public
   */
  var unmask = function unmask(buffer, mask) {
    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
    var length = buffer.length;
    for (var i = 0; i < length; i++) {
      buffer[i] ^= mask[i & 3];
    }
  };

  module.exports = { concat: concat, mask: mask, unmask: unmask };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var safeBuffer = __webpack_require__(8);

var Buffer = safeBuffer.Buffer;

exports.BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
exports.GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
exports.EMPTY_BUFFER = Buffer.alloc(0);
exports.NOOP = function () {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(14);
var crypto = __webpack_require__(10);
var Ultron = __webpack_require__(15);
var https = __webpack_require__(23);
var http = __webpack_require__(16);
var url = __webpack_require__(17);

var PerMessageDeflate = __webpack_require__(9);
var EventTarget = __webpack_require__(27);
var Extensions = __webpack_require__(18);
var constants = __webpack_require__(12);
var Receiver = __webpack_require__(19);
var Sender = __webpack_require__(21);

var protocolVersions = [8, 13];
var closeTimeout = 30 * 1000; // Allow 30 seconds to terminate the connection cleanly.

/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */

var WebSocket = function (_EventEmitter) {
  _inherits(WebSocket, _EventEmitter);

  /**
   * Create a new `WebSocket`.
   *
   * @param {String} address The URL to which to connect
   * @param {(String|String[])} protocols The subprotocols
   * @param {Object} options Connection options
   */
  function WebSocket(address, protocols, options) {
    _classCallCheck(this, WebSocket);

    var _this = _possibleConstructorReturn(this, (WebSocket.__proto__ || Object.getPrototypeOf(WebSocket)).call(this));

    if (!protocols) {
      protocols = [];
    } else if (typeof protocols === 'string') {
      protocols = [protocols];
    } else if (!Array.isArray(protocols)) {
      options = protocols;
      protocols = [];
    }

    _this.readyState = WebSocket.CONNECTING;
    _this.bytesReceived = 0;
    _this.extensions = {};
    _this.protocol = '';

    _this._binaryType = constants.BINARY_TYPES[0];
    _this._finalize = _this.finalize.bind(_this);
    _this._finalizeCalled = false;
    _this._closeMessage = null;
    _this._closeTimer = null;
    _this._closeCode = null;
    _this._receiver = null;
    _this._sender = null;
    _this._socket = null;
    _this._ultron = null;

    if (Array.isArray(address)) {
      initAsServerClient.call(_this, address[0], address[1], options);
    } else {
      initAsClient.call(_this, address, protocols, options);
    }
    return _this;
  }

  _createClass(WebSocket, [{
    key: 'setSocket',


    /**
     * Set up the socket and the internal resources.
     *
     * @param {net.Socket} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @private
     */
    value: function setSocket(socket, head) {
      var _this2 = this;

      socket.setTimeout(0);
      socket.setNoDelay();

      this._receiver = new Receiver(this.extensions, this._maxPayload, this.binaryType);
      this._sender = new Sender(socket, this.extensions);
      this._ultron = new Ultron(socket);
      this._socket = socket;

      // socket cleanup handlers
      this._ultron.on('close', this._finalize);
      this._ultron.on('error', this._finalize);
      this._ultron.on('end', this._finalize);

      // ensure that the head is added to the receiver
      if (head.length > 0) socket.unshift(head);

      // subsequent packets are pushed to the receiver
      this._ultron.on('data', function (data) {
        _this2.bytesReceived += data.length;
        _this2._receiver.add(data);
      });

      // receiver event handlers
      this._receiver.onmessage = function (data) {
        return _this2.emit('message', data);
      };
      this._receiver.onping = function (data) {
        _this2.pong(data, !_this2._isServer, true);
        _this2.emit('ping', data);
      };
      this._receiver.onpong = function (data) {
        return _this2.emit('pong', data);
      };
      this._receiver.onclose = function (code, reason) {
        _this2._closeMessage = reason;
        _this2._closeCode = code;
        _this2.close(code, reason);
      };
      this._receiver.onerror = function (error, code) {
        // close the connection when the receiver reports a HyBi error code
        _this2.close(code, '');
        _this2.emit('error', error);
      };

      // sender event handlers
      this._sender.onerror = function (error) {
        _this2.close(1002, '');
        _this2.emit('error', error);
      };

      this.readyState = WebSocket.OPEN;
      this.emit('open');
    }

    /**
     * Clean up and release internal resources.
     *
     * @param {(Boolean|Error)} Indicates whether or not an error occurred
     * @private
     */

  }, {
    key: 'finalize',
    value: function finalize(error) {
      var _this3 = this;

      if (this._finalizeCalled) return;

      this.readyState = WebSocket.CLOSING;
      this._finalizeCalled = true;

      clearTimeout(this._closeTimer);
      this._closeTimer = null;

      //
      // If the connection was closed abnormally (with an error), or if the close
      // control frame was malformed or not received then the close code must be
      // 1006.
      //
      if (error) this._closeCode = 1006;

      if (this._socket) {
        this._ultron.destroy();
        this._socket.on('error', function onerror() {
          this.destroy();
        });

        if (!error) this._socket.end();else this._socket.destroy();

        this._socket = null;
        this._ultron = null;
      }

      if (this._sender) {
        this._sender = this._sender.onerror = null;
      }

      if (this._receiver) {
        this._receiver.cleanup(function () {
          return _this3.emitClose();
        });
        this._receiver = null;
      } else {
        this.emitClose();
      }
    }

    /**
     * Emit the `close` event.
     *
     * @private
     */

  }, {
    key: 'emitClose',
    value: function emitClose() {
      this.readyState = WebSocket.CLOSED;
      this.emit('close', this._closeCode || 1006, this._closeMessage || '');

      if (this.extensions[PerMessageDeflate.extensionName]) {
        this.extensions[PerMessageDeflate.extensionName].cleanup();
      }

      this.extensions = null;

      this.removeAllListeners();
      this.on('error', constants.NOOP); // Catch all errors after this.
    }

    /**
     * Pause the socket stream.
     *
     * @public
     */

  }, {
    key: 'pause',
    value: function pause() {
      if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');

      this._socket.pause();
    }

    /**
     * Resume the socket stream
     *
     * @public
     */

  }, {
    key: 'resume',
    value: function resume() {
      if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');

      this._socket.resume();
    }

    /**
     * Start a closing handshake.
     *
     * @param {Number} code Status code explaining why the connection is closing
     * @param {String} data A string explaining why the connection is closing
     * @public
     */

  }, {
    key: 'close',
    value: function close(code, data) {
      var _this4 = this;

      if (this.readyState === WebSocket.CLOSED) return;
      if (this.readyState === WebSocket.CONNECTING) {
        if (this._req && !this._req.aborted) {
          this._req.abort();
          this.emit('error', new Error('closed before the connection is established'));
          this.finalize(true);
        }
        return;
      }

      if (this.readyState === WebSocket.CLOSING) {
        if (this._closeCode && this._socket) this._socket.end();
        return;
      }

      this.readyState = WebSocket.CLOSING;
      this._sender.close(code, data, !this._isServer, function (err) {
        if (err) _this4.emit('error', err);

        if (_this4._socket) {
          if (_this4._closeCode) _this4._socket.end();
          //
          // Ensure that the connection is cleaned up even when the closing
          // handshake fails.
          //
          clearTimeout(_this4._closeTimer);
          _this4._closeTimer = setTimeout(_this4._finalize, closeTimeout, true);
        }
      });
    }

    /**
     * Send a ping message.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Indicates whether or not to mask `data`
     * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
     * @public
     */

  }, {
    key: 'ping',
    value: function ping(data, mask, failSilently) {
      if (this.readyState !== WebSocket.OPEN) {
        if (failSilently) return;
        throw new Error('not opened');
      }

      if (typeof data === 'number') data = data.toString();
      if (mask === undefined) mask = !this._isServer;
      this._sender.ping(data || constants.EMPTY_BUFFER, mask);
    }

    /**
     * Send a pong message.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Indicates whether or not to mask `data`
     * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
     * @public
     */

  }, {
    key: 'pong',
    value: function pong(data, mask, failSilently) {
      if (this.readyState !== WebSocket.OPEN) {
        if (failSilently) return;
        throw new Error('not opened');
      }

      if (typeof data === 'number') data = data.toString();
      if (mask === undefined) mask = !this._isServer;
      this._sender.pong(data || constants.EMPTY_BUFFER, mask);
    }

    /**
     * Send a data message.
     *
     * @param {*} data The message to send
     * @param {Object} options Options object
     * @param {Boolean} options.compress Specifies whether or not to compress `data`
     * @param {Boolean} options.binary Specifies whether `data` is binary or text
     * @param {Boolean} options.fin Specifies whether the fragment is the last one
     * @param {Boolean} options.mask Specifies whether or not to mask `data`
     * @param {Function} cb Callback which is executed when data is written out
     * @public
     */

  }, {
    key: 'send',
    value: function send(data, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }

      if (this.readyState !== WebSocket.OPEN) {
        if (cb) cb(new Error('not opened'));else throw new Error('not opened');
        return;
      }

      if (typeof data === 'number') data = data.toString();

      var opts = Object.assign({
        binary: typeof data !== 'string',
        mask: !this._isServer,
        compress: true,
        fin: true
      }, options);

      if (!this.extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }

      this._sender.send(data || constants.EMPTY_BUFFER, opts, cb);
    }

    /**
     * Forcibly close the connection.
     *
     * @public
     */

  }, {
    key: 'terminate',
    value: function terminate() {
      if (this.readyState === WebSocket.CLOSED) return;
      if (this.readyState === WebSocket.CONNECTING) {
        if (this._req && !this._req.aborted) {
          this._req.abort();
          this.emit('error', new Error('closed before the connection is established'));
          this.finalize(true);
        }
        return;
      }

      this.finalize(true);
    }
  }, {
    key: 'CONNECTING',
    get: function get() {
      return WebSocket.CONNECTING;
    }
  }, {
    key: 'CLOSING',
    get: function get() {
      return WebSocket.CLOSING;
    }
  }, {
    key: 'CLOSED',
    get: function get() {
      return WebSocket.CLOSED;
    }
  }, {
    key: 'OPEN',
    get: function get() {
      return WebSocket.OPEN;
    }

    /**
     * @type {Number}
     */

  }, {
    key: 'bufferedAmount',
    get: function get() {
      var amount = 0;

      if (this._socket) {
        amount = this._socket.bufferSize + this._sender._bufferedBytes;
      }
      return amount;
    }

    /**
     * This deviates from the WHATWG interface since ws doesn't support the required
     * default "blob" type (instead we define a custom "nodebuffer" type).
     *
     * @type {String}
     */

  }, {
    key: 'binaryType',
    get: function get() {
      return this._binaryType;
    },
    set: function set(type) {
      if (constants.BINARY_TYPES.indexOf(type) < 0) return;

      this._binaryType = type;

      //
      // Allow to change `binaryType` on the fly.
      //
      if (this._receiver) this._receiver._binaryType = type;
    }
  }]);

  return WebSocket;
}(EventEmitter);

WebSocket.CONNECTING = 0;
WebSocket.OPEN = 1;
WebSocket.CLOSING = 2;
WebSocket.CLOSED = 3;

//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
['open', 'error', 'close', 'message'].forEach(function (method) {
  Object.defineProperty(WebSocket.prototype, 'on' + method, {
    /**
     * Return the listener of the event.
     *
     * @return {(Function|undefined)} The event listener or `undefined`
     * @public
     */
    get: function get() {
      var listeners = this.listeners(method);
      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i]._listener) return listeners[i]._listener;
      }
    },

    /**
     * Add a listener for the event.
     *
     * @param {Function} listener The listener to add
     * @public
     */
    set: function set(listener) {
      var listeners = this.listeners(method);
      for (var i = 0; i < listeners.length; i++) {
        //
        // Remove only the listeners added via `addEventListener`.
        //
        if (listeners[i]._listener) this.removeListener(method, listeners[i]);
      }
      this.addEventListener(method, listener);
    }
  });
});

WebSocket.prototype.addEventListener = EventTarget.addEventListener;
WebSocket.prototype.removeEventListener = EventTarget.removeEventListener;

module.exports = WebSocket;

/**
 * Initialize a WebSocket server client.
 *
 * @param {http.IncomingMessage} req The request object
 * @param {net.Socket} socket The network socket between the server and client
 * @param {Buffer} head The first packet of the upgraded stream
 * @param {Object} options WebSocket attributes
 * @param {Number} options.protocolVersion The WebSocket protocol version
 * @param {Object} options.extensions The negotiated extensions
 * @param {Number} options.maxPayload The maximum allowed message size
 * @param {String} options.protocol The chosen subprotocol
 * @private
 */
function initAsServerClient(socket, head, options) {
  this.protocolVersion = options.protocolVersion;
  this._maxPayload = options.maxPayload;
  this.extensions = options.extensions;
  this.protocol = options.protocol;

  this._isServer = true;

  this.setSocket(socket, head);
}

/**
 * Initialize a WebSocket client.
 *
 * @param {String} address The URL to which to connect
 * @param {String[]} protocols The list of subprotocols
 * @param {Object} options Connection options
 * @param {String} options.protocol Value of the `Sec-WebSocket-Protocol` header
 * @param {(Boolean|Object)} options.perMessageDeflate Enable/disable permessage-deflate
 * @param {Number} options.handshakeTimeout Timeout in milliseconds for the handshake request
 * @param {String} options.localAddress Local interface to bind for network connections
 * @param {Number} options.protocolVersion Value of the `Sec-WebSocket-Version` header
 * @param {Object} options.headers An object containing request headers
 * @param {String} options.origin Value of the `Origin` or `Sec-WebSocket-Origin` header
 * @param {http.Agent} options.agent Use the specified Agent
 * @param {String} options.host Value of the `Host` header
 * @param {Number} options.family IP address family to use during hostname lookup (4 or 6).
 * @param {Function} options.checkServerIdentity A function to validate the server hostname
 * @param {Boolean} options.rejectUnauthorized Verify or not the server certificate
 * @param {String} options.passphrase The passphrase for the private key or pfx
 * @param {String} options.ciphers The ciphers to use or exclude
 * @param {(String|String[]|Buffer|Buffer[])} options.cert The certificate key
 * @param {(String|String[]|Buffer|Buffer[])} options.key The private key
 * @param {(String|Buffer)} options.pfx The private key, certificate, and CA certs
 * @param {(String|String[]|Buffer|Buffer[])} options.ca Trusted certificates
 * @private
 */
function initAsClient(address, protocols, options) {
  var _this5 = this;

  options = Object.assign({
    protocolVersion: protocolVersions[1],
    protocol: protocols.join(','),
    perMessageDeflate: true,
    handshakeTimeout: null,
    localAddress: null,
    headers: null,
    family: null,
    origin: null,
    agent: null,
    host: null,

    //
    // SSL options.
    //
    checkServerIdentity: null,
    rejectUnauthorized: null,
    passphrase: null,
    ciphers: null,
    cert: null,
    key: null,
    pfx: null,
    ca: null
  }, options);

  if (protocolVersions.indexOf(options.protocolVersion) === -1) {
    throw new Error('unsupported protocol version: ' + options.protocolVersion + ' ' + ('(supported versions: ' + protocolVersions.join(', ') + ')'));
  }

  this.protocolVersion = options.protocolVersion;
  this._isServer = false;
  this.url = address;

  var serverUrl = url.parse(address);
  var isUnixSocket = serverUrl.protocol === 'ws+unix:';

  if (!serverUrl.host && (!isUnixSocket || !serverUrl.path)) {
    throw new Error('invalid url');
  }

  var isSecure = serverUrl.protocol === 'wss:' || serverUrl.protocol === 'https:';
  var key = crypto.randomBytes(16).toString('base64');
  var httpObj = isSecure ? https : http;

  //
  // Prepare extensions.
  //
  var extensionsOffer = {};
  var perMessageDeflate;

  if (options.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate(options.perMessageDeflate !== true ? options.perMessageDeflate : {}, false);
    extensionsOffer[PerMessageDeflate.extensionName] = perMessageDeflate.offer();
  }

  var requestOptions = {
    port: serverUrl.port || (isSecure ? 443 : 80),
    host: serverUrl.hostname,
    path: '/',
    headers: {
      'Sec-WebSocket-Version': options.protocolVersion,
      'Sec-WebSocket-Key': key,
      'Connection': 'Upgrade',
      'Upgrade': 'websocket'
    }
  };

  if (options.headers) Object.assign(requestOptions.headers, options.headers);
  if (Object.keys(extensionsOffer).length) {
    requestOptions.headers['Sec-WebSocket-Extensions'] = Extensions.format(extensionsOffer);
  }
  if (options.protocol) {
    requestOptions.headers['Sec-WebSocket-Protocol'] = options.protocol;
  }
  if (options.origin) {
    if (options.protocolVersion < 13) {
      requestOptions.headers['Sec-WebSocket-Origin'] = options.origin;
    } else {
      requestOptions.headers.Origin = options.origin;
    }
  }
  if (options.host) requestOptions.headers.Host = options.host;
  if (serverUrl.auth) requestOptions.auth = serverUrl.auth;

  if (options.localAddress) requestOptions.localAddress = options.localAddress;
  if (options.family) requestOptions.family = options.family;

  if (isUnixSocket) {
    var parts = serverUrl.path.split(':');

    requestOptions.socketPath = parts[0];
    requestOptions.path = parts[1];
  } else if (serverUrl.path) {
    //
    // Make sure that path starts with `/`.
    //
    if (serverUrl.path.charAt(0) !== '/') {
      requestOptions.path = '/' + serverUrl.path;
    } else {
      requestOptions.path = serverUrl.path;
    }
  }

  var agent = options.agent;

  //
  // A custom agent is required for these options.
  //
  if (options.rejectUnauthorized != null || options.checkServerIdentity || options.passphrase || options.ciphers || options.cert || options.key || options.pfx || options.ca) {
    if (options.passphrase) requestOptions.passphrase = options.passphrase;
    if (options.ciphers) requestOptions.ciphers = options.ciphers;
    if (options.cert) requestOptions.cert = options.cert;
    if (options.key) requestOptions.key = options.key;
    if (options.pfx) requestOptions.pfx = options.pfx;
    if (options.ca) requestOptions.ca = options.ca;
    if (options.checkServerIdentity) {
      requestOptions.checkServerIdentity = options.checkServerIdentity;
    }
    if (options.rejectUnauthorized != null) {
      requestOptions.rejectUnauthorized = options.rejectUnauthorized;
    }

    if (!agent) agent = new httpObj.Agent(requestOptions);
  }

  if (agent) requestOptions.agent = agent;

  this._req = httpObj.get(requestOptions);

  if (options.handshakeTimeout) {
    this._req.setTimeout(options.handshakeTimeout, function () {
      _this5._req.abort();
      _this5.emit('error', new Error('opening handshake has timed out'));
      _this5.finalize(true);
    });
  }

  this._req.on('error', function (error) {
    if (_this5._req.aborted) return;

    _this5._req = null;
    _this5.emit('error', error);
    _this5.finalize(true);
  });

  this._req.on('response', function (res) {
    if (!_this5.emit('unexpected-response', _this5._req, res)) {
      _this5._req.abort();
      _this5.emit('error', new Error('unexpected server response (' + res.statusCode + ')'));
      _this5.finalize(true);
    }
  });

  this._req.on('upgrade', function (res, socket, head) {
    _this5.emit('headers', res.headers, res);

    //
    // The user may have closed the connection from a listener of the `headers`
    // event.
    //
    if (_this5.readyState !== WebSocket.CONNECTING) return;

    _this5._req = null;

    var digest = crypto.createHash('sha1').update(key + constants.GUID, 'binary').digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      socket.destroy();
      _this5.emit('error', new Error('invalid server key'));
      return _this5.finalize(true);
    }

    var serverProt = res.headers['sec-websocket-protocol'];
    var protList = (options.protocol || '').split(/, */);
    var protError;

    if (!options.protocol && serverProt) {
      protError = 'server sent a subprotocol even though none requested';
    } else if (options.protocol && !serverProt) {
      protError = 'server sent no subprotocol even though requested';
    } else if (serverProt && protList.indexOf(serverProt) === -1) {
      protError = 'server responded with an invalid protocol';
    }

    if (protError) {
      socket.destroy();
      _this5.emit('error', new Error(protError));
      return _this5.finalize(true);
    }

    if (serverProt) _this5.protocol = serverProt;

    var serverExtensions = Extensions.parse(res.headers['sec-websocket-extensions']);

    if (perMessageDeflate && serverExtensions[PerMessageDeflate.extensionName]) {
      try {
        perMessageDeflate.accept(serverExtensions[PerMessageDeflate.extensionName]);
      } catch (err) {
        socket.destroy();
        _this5.emit('error', new Error('invalid extension parameter'));
        return _this5.finalize(true);
      }

      _this5.extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
    }

    _this5.setSocket(socket, head);
  });
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * An auto incrementing id which we can use to create "unique" Ultron instances
 * so we can track the event emitters that are added through the Ultron
 * interface.
 *
 * @type {Number}
 * @private
 */
var id = 0;

/**
 * Ultron is high-intelligence robot. It gathers intelligence so it can start improving
 * upon his rudimentary design. It will learn from your EventEmitting patterns
 * and exterminate them.
 *
 * @constructor
 * @param {EventEmitter} ee EventEmitter instance we need to wrap.
 * @api public
 */
function Ultron(ee) {
  if (!(this instanceof Ultron)) return new Ultron(ee);

  this.id = id++;
  this.ee = ee;
}

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @returns {Ultron}
 * @api public
 */
Ultron.prototype.on = function on(event, fn, context) {
  fn.__ultron = this.id;
  this.ee.on(event, fn, context);

  return this;
};
/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @returns {Ultron}
 * @api public
 */
Ultron.prototype.once = function once(event, fn, context) {
  fn.__ultron = this.id;
  this.ee.once(event, fn, context);

  return this;
};

/**
 * Remove the listeners we assigned for the given event.
 *
 * @returns {Ultron}
 * @api public
 */
Ultron.prototype.remove = function remove() {
  var args = arguments,
      ee = this.ee,
      event;

  //
  // When no event names are provided we assume that we need to clear all the
  // events that were assigned through us.
  //
  if (args.length === 1 && 'string' === typeof args[0]) {
    args = args[0].split(/[, ]+/);
  } else if (!args.length) {
    if (ee.eventNames) {
      args = ee.eventNames();
    } else if (ee._events) {
      args = [];

      for (event in ee._events) {
        if (has.call(ee._events, event)) args.push(event);
      }

      if (Object.getOwnPropertySymbols) {
        args = args.concat(Object.getOwnPropertySymbols(ee._events));
      }
    }
  }

  for (var i = 0; i < args.length; i++) {
    var listeners = ee.listeners(args[i]);

    for (var j = 0; j < listeners.length; j++) {
      event = listeners[j];

      //
      // Once listeners have a `listener` property that stores the real listener
      // in the EventEmitter that ships with Node.js.
      //
      if (event.listener) {
        if (event.listener.__ultron !== this.id) continue;
        delete event.listener.__ultron;
      } else {
        if (event.__ultron !== this.id) continue;
        delete event.__ultron;
      }

      ee.removeListener(args[i], event);
    }
  }

  return this;
};

/**
 * Destroy the Ultron instance, remove all listeners and release all references.
 *
 * @returns {Boolean}
 * @api public
 */
Ultron.prototype.destroy = function destroy() {
  if (!this.ee) return false;

  this.remove();
  this.ee = null;

  return true;
};

//
// Expose the module.
//
module.exports = Ultron;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parse the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} value field value of the header
 * @return {Object} The parsed object
 * @public
 */

var parse = function parse(value) {
  value = value || '';

  var extensions = {};

  value.split(',').forEach(function (v) {
    var params = v.split(';');
    var token = params.shift().trim();
    var paramsList = extensions[token] = extensions[token] || [];
    var parsedParams = {};

    params.forEach(function (param) {
      var parts = param.trim().split('=');
      var key = parts[0];
      var value = parts[1];

      if (value === undefined) {
        value = true;
      } else {
        // unquote value
        if (value[0] === '"') {
          value = value.slice(1);
        }
        if (value[value.length - 1] === '"') {
          value = value.slice(0, value.length - 1);
        }
      }
      (parsedParams[key] = parsedParams[key] || []).push(value);
    });

    paramsList.push(parsedParams);
  });

  return extensions;
};

/**
 * Serialize a parsed `Sec-WebSocket-Extensions` header to a string.
 *
 * @param {Object} value The object to format
 * @return {String} A string representing the given value
 * @public
 */
var format = function format(value) {
  return Object.keys(value).map(function (token) {
    var paramsList = value[token];
    if (!Array.isArray(paramsList)) paramsList = [paramsList];
    return paramsList.map(function (params) {
      return [token].concat(Object.keys(params).map(function (k) {
        var p = params[k];
        if (!Array.isArray(p)) p = [p];
        return p.map(function (v) {
          return v === true ? k : k + '=' + v;
        }).join('; ');
      })).join('; ');
    }).join(', ');
  }).join(', ');
};

module.exports = { format: format, parse: parse };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var safeBuffer = __webpack_require__(8);

var PerMessageDeflate = __webpack_require__(9);
var isValidUTF8 = __webpack_require__(28);
var bufferUtil = __webpack_require__(11);
var ErrorCodes = __webpack_require__(20);
var constants = __webpack_require__(12);

var Buffer = safeBuffer.Buffer;

var GET_INFO = 0;
var GET_PAYLOAD_LENGTH_16 = 1;
var GET_PAYLOAD_LENGTH_64 = 2;
var GET_MASK = 3;
var GET_DATA = 4;
var INFLATING = 5;

/**
 * HyBi Receiver implementation.
 */

var Receiver = function () {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} extensions An object containing the negotiated extensions
   * @param {Number} maxPayload The maximum allowed message length
   * @param {String} binaryType The type for binary data
   */
  function Receiver(extensions, maxPayload, binaryType) {
    _classCallCheck(this, Receiver);

    this._binaryType = binaryType || constants.BINARY_TYPES[0];
    this._extensions = extensions || {};
    this._maxPayload = maxPayload | 0;

    this._bufferedBytes = 0;
    this._buffers = [];

    this._compressed = false;
    this._payloadLength = 0;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._mask = null;
    this._opcode = 0;

    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];

    this._cleanupCallback = null;
    this._hadError = false;
    this._dead = false;
    this._loop = false;

    this.onmessage = null;
    this.onclose = null;
    this.onerror = null;
    this.onping = null;
    this.onpong = null;

    this._state = GET_INFO;
  }

  /**
   * Consumes bytes from the available buffered data.
   *
   * @param {Number} bytes The number of bytes to consume
   * @return {Buffer} Consumed bytes
   * @private
   */


  _createClass(Receiver, [{
    key: 'readBuffer',
    value: function readBuffer(bytes) {
      var offset = 0;
      var dst;
      var l;

      this._bufferedBytes -= bytes;

      if (bytes === this._buffers[0].length) return this._buffers.shift();

      if (bytes < this._buffers[0].length) {
        dst = this._buffers[0].slice(0, bytes);
        this._buffers[0] = this._buffers[0].slice(bytes);
        return dst;
      }

      dst = Buffer.allocUnsafe(bytes);

      while (bytes > 0) {
        l = this._buffers[0].length;

        if (bytes >= l) {
          this._buffers[0].copy(dst, offset);
          offset += l;
          this._buffers.shift();
        } else {
          this._buffers[0].copy(dst, offset, 0, bytes);
          this._buffers[0] = this._buffers[0].slice(bytes);
        }

        bytes -= l;
      }

      return dst;
    }

    /**
     * Checks if the number of buffered bytes is bigger or equal than `n` and
     * calls `cleanup` if necessary.
     *
     * @param {Number} n The number of bytes to check against
     * @return {Boolean} `true` if `bufferedBytes >= n`, else `false`
     * @private
     */

  }, {
    key: 'hasBufferedBytes',
    value: function hasBufferedBytes(n) {
      if (this._bufferedBytes >= n) return true;

      this._loop = false;
      if (this._dead) this.cleanup(this._cleanupCallback);
      return false;
    }

    /**
     * Adds new data to the parser.
     *
     * @public
     */

  }, {
    key: 'add',
    value: function add(data) {
      if (this._dead) return;

      this._bufferedBytes += data.length;
      this._buffers.push(data);
      this.startLoop();
    }

    /**
     * Starts the parsing loop.
     *
     * @private
     */

  }, {
    key: 'startLoop',
    value: function startLoop() {
      this._loop = true;

      while (this._loop) {
        switch (this._state) {
          case GET_INFO:
            this.getInfo();
            break;
          case GET_PAYLOAD_LENGTH_16:
            this.getPayloadLength16();
            break;
          case GET_PAYLOAD_LENGTH_64:
            this.getPayloadLength64();
            break;
          case GET_MASK:
            this.getMask();
            break;
          case GET_DATA:
            this.getData();
            break;
          default:
            // `INFLATING`
            this._loop = false;
        }
      }
    }

    /**
     * Reads the first two bytes of a frame.
     *
     * @private
     */

  }, {
    key: 'getInfo',
    value: function getInfo() {
      if (!this.hasBufferedBytes(2)) return;

      var buf = this.readBuffer(2);

      if ((buf[0] & 0x30) !== 0x00) {
        this.error(new Error('RSV2 and RSV3 must be clear'), 1002);
        return;
      }

      var compressed = (buf[0] & 0x40) === 0x40;

      if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
        this.error(new Error('RSV1 must be clear'), 1002);
        return;
      }

      this._fin = (buf[0] & 0x80) === 0x80;
      this._opcode = buf[0] & 0x0f;
      this._payloadLength = buf[1] & 0x7f;

      if (this._opcode === 0x00) {
        if (compressed) {
          this.error(new Error('RSV1 must be clear'), 1002);
          return;
        }

        if (!this._fragmented) {
          this.error(new Error('invalid opcode: ' + this._opcode), 1002);
          return;
        } else {
          this._opcode = this._fragmented;
        }
      } else if (this._opcode === 0x01 || this._opcode === 0x02) {
        if (this._fragmented) {
          this.error(new Error('invalid opcode: ' + this._opcode), 1002);
          return;
        }

        this._compressed = compressed;
      } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
        if (!this._fin) {
          this.error(new Error('FIN must be set'), 1002);
          return;
        }

        if (compressed) {
          this.error(new Error('RSV1 must be clear'), 1002);
          return;
        }

        if (this._payloadLength > 0x7d) {
          this.error(new Error('invalid payload length'), 1002);
          return;
        }
      } else {
        this.error(new Error('invalid opcode: ' + this._opcode), 1002);
        return;
      }

      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;

      this._masked = (buf[1] & 0x80) === 0x80;

      if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;else this.haveLength();
    }

    /**
     * Gets extended payload length (7+16).
     *
     * @private
     */

  }, {
    key: 'getPayloadLength16',
    value: function getPayloadLength16() {
      if (!this.hasBufferedBytes(2)) return;

      this._payloadLength = this.readBuffer(2).readUInt16BE(0, true);
      this.haveLength();
    }

    /**
     * Gets extended payload length (7+64).
     *
     * @private
     */

  }, {
    key: 'getPayloadLength64',
    value: function getPayloadLength64() {
      if (!this.hasBufferedBytes(8)) return;

      var buf = this.readBuffer(8);
      var num = buf.readUInt32BE(0, true);

      //
      // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
      // if payload length is greater than this number.
      //
      if (num > Math.pow(2, 53 - 32) - 1) {
        this.error(new Error('max payload size exceeded'), 1009);
        return;
      }

      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4, true);
      this.haveLength();
    }

    /**
     * Payload length has been read.
     *
     * @private
     */

  }, {
    key: 'haveLength',
    value: function haveLength() {
      if (this._opcode < 0x08 && this.maxPayloadExceeded(this._payloadLength)) {
        return;
      }

      if (this._masked) this._state = GET_MASK;else this._state = GET_DATA;
    }

    /**
     * Reads mask bytes.
     *
     * @private
     */

  }, {
    key: 'getMask',
    value: function getMask() {
      if (!this.hasBufferedBytes(4)) return;

      this._mask = this.readBuffer(4);
      this._state = GET_DATA;
    }

    /**
     * Reads data bytes.
     *
     * @private
     */

  }, {
    key: 'getData',
    value: function getData() {
      var data = constants.EMPTY_BUFFER;

      if (this._payloadLength) {
        if (!this.hasBufferedBytes(this._payloadLength)) return;

        data = this.readBuffer(this._payloadLength);
        if (this._masked) bufferUtil.unmask(data, this._mask);
      }

      if (this._opcode > 0x07) {
        this.controlMessage(data);
      } else if (this._compressed) {
        this._state = INFLATING;
        this.decompress(data);
      } else if (this.pushFragment(data)) {
        this.dataMessage();
      }
    }

    /**
     * Decompresses data.
     *
     * @param {Buffer} data Compressed data
     * @private
     */

  }, {
    key: 'decompress',
    value: function decompress(data) {
      var _this = this;

      var perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

      perMessageDeflate.decompress(data, this._fin, function (err, buf) {
        if (err) {
          _this.error(err, err.closeCode === 1009 ? 1009 : 1007);
          return;
        }

        if (_this.pushFragment(buf)) _this.dataMessage();
        _this.startLoop();
      });
    }

    /**
     * Handles a data message.
     *
     * @private
     */

  }, {
    key: 'dataMessage',
    value: function dataMessage() {
      if (this._fin) {
        var messageLength = this._messageLength;
        var fragments = this._fragments;

        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];

        if (this._opcode === 2) {
          var data;

          if (this._binaryType === 'nodebuffer') {
            data = toBuffer(fragments, messageLength);
          } else if (this._binaryType === 'arraybuffer') {
            data = toArrayBuffer(toBuffer(fragments, messageLength));
          } else {
            data = fragments;
          }

          this.onmessage(data);
        } else {
          var buf = toBuffer(fragments, messageLength);

          if (!isValidUTF8(buf)) {
            this.error(new Error('invalid utf8 sequence'), 1007);
            return;
          }

          this.onmessage(buf.toString());
        }
      }

      this._state = GET_INFO;
    }

    /**
     * Handles a control message.
     *
     * @param {Buffer} data Data to handle
     * @private
     */

  }, {
    key: 'controlMessage',
    value: function controlMessage(data) {
      if (this._opcode === 0x08) {
        if (data.length === 0) {
          this.onclose(1000, '');
          this._loop = false;
          this.cleanup(this._cleanupCallback);
        } else if (data.length === 1) {
          this.error(new Error('invalid payload length'), 1002);
        } else {
          var code = data.readUInt16BE(0, true);

          if (!ErrorCodes.isValidErrorCode(code)) {
            this.error(new Error('invalid status code: ' + code), 1002);
            return;
          }

          var buf = data.slice(2);

          if (!isValidUTF8(buf)) {
            this.error(new Error('invalid utf8 sequence'), 1007);
            return;
          }

          this.onclose(code, buf.toString());
          this._loop = false;
          this.cleanup(this._cleanupCallback);
        }

        return;
      }

      if (this._opcode === 0x09) this.onping(data);else this.onpong(data);

      this._state = GET_INFO;
    }

    /**
     * Handles an error.
     *
     * @param {Error} err The error
     * @param {Number} code Close code
     * @private
     */

  }, {
    key: 'error',
    value: function error(err, code) {
      this.onerror(err, code);
      this._hadError = true;
      this._loop = false;
      this.cleanup(this._cleanupCallback);
    }

    /**
     * Checks payload size, disconnects socket when it exceeds `maxPayload`.
     *
     * @param {Number} length Payload length
     * @private
     */

  }, {
    key: 'maxPayloadExceeded',
    value: function maxPayloadExceeded(length) {
      if (length === 0 || this._maxPayload < 1) return false;

      var fullLength = this._totalPayloadLength + length;

      if (fullLength <= this._maxPayload) {
        this._totalPayloadLength = fullLength;
        return false;
      }

      this.error(new Error('max payload size exceeded'), 1009);
      return true;
    }

    /**
     * Appends a fragment in the fragments array after checking that the sum of
     * fragment lengths does not exceed `maxPayload`.
     *
     * @param {Buffer} fragment The fragment to add
     * @return {Boolean} `true` if `maxPayload` is not exceeded, else `false`
     * @private
     */

  }, {
    key: 'pushFragment',
    value: function pushFragment(fragment) {
      if (fragment.length === 0) return true;

      var totalLength = this._messageLength + fragment.length;

      if (this._maxPayload < 1 || totalLength <= this._maxPayload) {
        this._messageLength = totalLength;
        this._fragments.push(fragment);
        return true;
      }

      this.error(new Error('max payload size exceeded'), 1009);
      return false;
    }

    /**
     * Releases resources used by the receiver.
     *
     * @param {Function} cb Callback
     * @public
     */

  }, {
    key: 'cleanup',
    value: function cleanup(cb) {
      this._dead = true;

      if (!this._hadError && (this._loop || this._state === INFLATING)) {
        this._cleanupCallback = cb;
      } else {
        this._extensions = null;
        this._fragments = null;
        this._buffers = null;
        this._mask = null;

        this._cleanupCallback = null;
        this.onmessage = null;
        this.onclose = null;
        this.onerror = null;
        this.onping = null;
        this.onpong = null;

        if (cb) cb();
      }
    }
  }]);

  return Receiver;
}();

module.exports = Receiver;

/**
 * Makes a buffer from a list of fragments.
 *
 * @param {Buffer[]} fragments The list of fragments composing the message
 * @param {Number} messageLength The length of the message
 * @return {Buffer}
 * @private
 */
function toBuffer(fragments, messageLength) {
  if (fragments.length === 1) return fragments[0];
  if (fragments.length > 1) return bufferUtil.concat(fragments, messageLength);
  return constants.EMPTY_BUFFER;
}

/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 */
function toArrayBuffer(buf) {
  if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
    return buf.buffer;
  }

  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



module.exports = {
  isValidErrorCode: function isValidErrorCode(code) {
    return code >= 1000 && code <= 1013 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
  },
  1000: 'normal',
  1001: 'going away',
  1002: 'protocol error',
  1003: 'unsupported data',
  1004: 'reserved',
  1005: 'reserved for extensions',
  1006: 'reserved for extensions',
  1007: 'inconsistent or invalid data',
  1008: 'policy violation',
  1009: 'message too big',
  1010: 'extension handshake missing',
  1011: 'an unexpected condition prevented the request from being fulfilled',
  1012: 'service restart',
  1013: 'try again later'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var safeBuffer = __webpack_require__(8);
var crypto = __webpack_require__(10);

var PerMessageDeflate = __webpack_require__(9);
var bufferUtil = __webpack_require__(11);
var ErrorCodes = __webpack_require__(20);

var Buffer = safeBuffer.Buffer;

/**
 * HyBi Sender implementation.
 */

var Sender = function () {
  /**
   * Creates a Sender instance.
   *
   * @param {net.Socket} socket The connection socket
   * @param {Object} extensions An object containing the negotiated extensions
   */
  function Sender(socket, extensions) {
    _classCallCheck(this, Sender);

    this._extensions = extensions || {};
    this._socket = socket;

    this._firstFragment = true;
    this._compress = false;

    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];

    this.onerror = null;
  }

  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {Buffer} data The data to frame
   * @param {Object} options Options object
   * @param {Number} options.opcode The opcode
   * @param {Boolean} options.readOnly Specifies whether `data` can be modified
   * @param {Boolean} options.fin Specifies whether or not to set the FIN bit
   * @param {Boolean} options.mask Specifies whether or not to mask `data`
   * @param {Boolean} options.rsv1 Specifies whether or not to set the RSV1 bit
   * @return {Buffer[]} The framed data as a list of `Buffer` instances
   * @public
   */


  _createClass(Sender, [{
    key: 'close',


    /**
     * Sends a close message to the other peer.
     *
     * @param {(Number|undefined)} code The status code component of the body
     * @param {String} data The message component of the body
     * @param {Boolean} mask Specifies whether or not to mask the message
     * @param {Function} cb Callback
     * @public
     */
    value: function close(code, data, mask, cb) {
      if (code !== undefined && (typeof code !== 'number' || !ErrorCodes.isValidErrorCode(code))) {
        throw new Error('first argument must be a valid error code number');
      }

      var buf = Buffer.allocUnsafe(2 + (data ? Buffer.byteLength(data) : 0));

      buf.writeUInt16BE(code || 1000, 0, true);
      if (buf.length > 2) buf.write(data, 2);

      if (this._deflating) {
        this.enqueue([this.doClose, buf, mask, cb]);
      } else {
        this.doClose(buf, mask, cb);
      }
    }

    /**
     * Frames and sends a close message.
     *
     * @param {Buffer} data The message to send
     * @param {Boolean} mask Specifies whether or not to mask `data`
     * @param {Function} cb Callback
     * @private
     */

  }, {
    key: 'doClose',
    value: function doClose(data, mask, cb) {
      this.sendFrame(Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x08,
        mask: mask,
        readOnly: false
      }), cb);
    }

    /**
     * Sends a ping message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Specifies whether or not to mask `data`
     * @public
     */

  }, {
    key: 'ping',
    value: function ping(data, mask) {
      var readOnly = true;

      if (!Buffer.isBuffer(data)) {
        if (data instanceof ArrayBuffer) {
          data = Buffer.from(data);
        } else if (ArrayBuffer.isView(data)) {
          data = viewToBuffer(data);
        } else {
          data = Buffer.from(data);
          readOnly = false;
        }
      }

      if (this._deflating) {
        this.enqueue([this.doPing, data, mask, readOnly]);
      } else {
        this.doPing(data, mask, readOnly);
      }
    }

    /**
     * Frames and sends a ping message.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Specifies whether or not to mask `data`
     * @param {Boolean} readOnly Specifies whether `data` can be modified
     * @private
     */

  }, {
    key: 'doPing',
    value: function doPing(data, mask, readOnly) {
      this.sendFrame(Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x09,
        mask: mask,
        readOnly: readOnly
      }));
    }

    /**
     * Sends a pong message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Specifies whether or not to mask `data`
     * @public
     */

  }, {
    key: 'pong',
    value: function pong(data, mask) {
      var readOnly = true;

      if (!Buffer.isBuffer(data)) {
        if (data instanceof ArrayBuffer) {
          data = Buffer.from(data);
        } else if (ArrayBuffer.isView(data)) {
          data = viewToBuffer(data);
        } else {
          data = Buffer.from(data);
          readOnly = false;
        }
      }

      if (this._deflating) {
        this.enqueue([this.doPong, data, mask, readOnly]);
      } else {
        this.doPong(data, mask, readOnly);
      }
    }

    /**
     * Frames and sends a pong message.
     *
     * @param {*} data The message to send
     * @param {Boolean} mask Specifies whether or not to mask `data`
     * @param {Boolean} readOnly Specifies whether `data` can be modified
     * @private
     */

  }, {
    key: 'doPong',
    value: function doPong(data, mask, readOnly) {
      this.sendFrame(Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x0a,
        mask: mask,
        readOnly: readOnly
      }));
    }

    /**
     * Sends a data message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Object} options Options object
     * @param {Boolean} options.compress Specifies whether or not to compress `data`
     * @param {Boolean} options.binary Specifies whether `data` is binary or text
     * @param {Boolean} options.fin Specifies whether the fragment is the last one
     * @param {Boolean} options.mask Specifies whether or not to mask `data`
     * @param {Function} cb Callback
     * @public
     */

  }, {
    key: 'send',
    value: function send(data, options, cb) {
      var opcode = options.binary ? 2 : 1;
      var rsv1 = options.compress;
      var readOnly = true;

      if (!Buffer.isBuffer(data)) {
        if (data instanceof ArrayBuffer) {
          data = Buffer.from(data);
        } else if (ArrayBuffer.isView(data)) {
          data = viewToBuffer(data);
        } else {
          data = Buffer.from(data);
          readOnly = false;
        }
      }

      var perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

      if (this._firstFragment) {
        this._firstFragment = false;
        if (rsv1 && perMessageDeflate) {
          rsv1 = data.length >= perMessageDeflate._threshold;
        }
        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }

      if (options.fin) this._firstFragment = true;

      if (perMessageDeflate) {
        var opts = {
          fin: options.fin,
          rsv1: rsv1,
          opcode: opcode,
          mask: options.mask,
          readOnly: readOnly
        };

        if (this._deflating) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      } else {
        this.sendFrame(Sender.frame(data, {
          fin: options.fin,
          rsv1: false,
          opcode: opcode,
          mask: options.mask,
          readOnly: readOnly
        }), cb);
      }
    }

    /**
     * Dispatches a data message.
     *
     * @param {Buffer} data The message to send
     * @param {Boolean} compress Specifies whether or not to compress `data`
     * @param {Object} options Options object
     * @param {Number} options.opcode The opcode
     * @param {Boolean} options.readOnly Specifies whether `data` can be modified
     * @param {Boolean} options.fin Specifies whether or not to set the FIN bit
     * @param {Boolean} options.mask Specifies whether or not to mask `data`
     * @param {Boolean} options.rsv1 Specifies whether or not to set the RSV1 bit
     * @param {Function} cb Callback
     * @private
     */

  }, {
    key: 'dispatch',
    value: function dispatch(data, compress, options, cb) {
      var _this = this;

      if (!compress) {
        this.sendFrame(Sender.frame(data, options), cb);
        return;
      }

      var perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

      this._deflating = true;
      perMessageDeflate.compress(data, options.fin, function (err, buf) {
        if (err) {
          if (cb) cb(err);else _this.onerror(err);
          return;
        }

        options.readOnly = false;
        _this.sendFrame(Sender.frame(buf, options), cb);
        _this._deflating = false;
        _this.dequeue();
      });
    }

    /**
     * Executes queued send operations.
     *
     * @private
     */

  }, {
    key: 'dequeue',
    value: function dequeue() {
      while (!this._deflating && this._queue.length) {
        var params = this._queue.shift();

        this._bufferedBytes -= params[1].length;
        params[0].apply(this, params.slice(1));
      }
    }

    /**
     * Enqueues a send operation.
     *
     * @param {Array} params Send operation parameters.
     * @private
     */

  }, {
    key: 'enqueue',
    value: function enqueue(params) {
      this._bufferedBytes += params[1].length;
      this._queue.push(params);
    }

    /**
     * Sends a frame.
     *
     * @param {Buffer[]} list The frame to send
     * @param {Function} cb Callback
     * @private
     */

  }, {
    key: 'sendFrame',
    value: function sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.write(list[0]);
        this._socket.write(list[1], cb);
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }], [{
    key: 'frame',
    value: function frame(data, options) {
      var merge = data.length < 1024 || options.mask && options.readOnly;
      var offset = options.mask ? 6 : 2;
      var payloadLength = data.length;

      if (data.length >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (data.length > 125) {
        offset += 2;
        payloadLength = 126;
      }

      var target = Buffer.allocUnsafe(merge ? data.length + offset : offset);

      target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
      if (options.rsv1) target[0] |= 0x40;

      if (payloadLength === 126) {
        target.writeUInt16BE(data.length, 2, true);
      } else if (payloadLength === 127) {
        target.writeUInt32BE(0, 2, true);
        target.writeUInt32BE(data.length, 6, true);
      }

      if (!options.mask) {
        target[1] = payloadLength;
        if (merge) {
          data.copy(target, offset);
          return [target];
        }

        return [target, data];
      }

      var mask = crypto.randomBytes(4);

      target[1] = payloadLength | 0x80;
      target[offset - 4] = mask[0];
      target[offset - 3] = mask[1];
      target[offset - 2] = mask[2];
      target[offset - 1] = mask[3];

      if (merge) {
        bufferUtil.mask(data, mask, target, offset, data.length);
        return [target];
      }

      bufferUtil.mask(data, mask, data, 0, data.length);
      return [target, data];
    }
  }]);

  return Sender;
}();

module.exports = Sender;

/**
 * Converts an `ArrayBuffer` view into a buffer.
 *
 * @param {(DataView|TypedArray)} view The view to convert
 * @return {Buffer} Converted view
 * @private
 */
function viewToBuffer(view) {
  var buf = Buffer.from(view.buffer);

  if (view.byteLength !== view.buffer.byteLength) {
    return buf.slice(view.byteOffset, view.byteOffset + view.byteLength);
  }

  return buf;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var WebSocket = __webpack_require__(13);

WebSocket.Server = __webpack_require__(29);
WebSocket.Receiver = __webpack_require__(19);
WebSocket.Sender = __webpack_require__(21);

module.exports = WebSocket;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Queue(options) {
  if (!(this instanceof Queue)) {
    return new Queue(options);
  }

  options = options || {};
  this.concurrency = options.concurrency || Infinity;
  this.pending = 0;
  this.jobs = [];
  this.cbs = [];
  this._done = done.bind(this);
}

var arrayAddMethods = ['push', 'unshift', 'splice'];

arrayAddMethods.forEach(function (method) {
  Queue.prototype[method] = function () {
    var methodResult = Array.prototype[method].apply(this.jobs, arguments);
    this._run();
    return methodResult;
  };
});

Object.defineProperty(Queue.prototype, 'length', {
  get: function get() {
    return this.pending + this.jobs.length;
  }
});

Queue.prototype._run = function () {
  if (this.pending === this.concurrency) {
    return;
  }
  if (this.jobs.length) {
    var job = this.jobs.shift();
    this.pending++;
    job(this._done);
    this._run();
  }

  if (this.pending === 0) {
    while (this.cbs.length !== 0) {
      var cb = this.cbs.pop();
      process.nextTick(cb);
    }
  }
};

Queue.prototype.onDone = function (cb) {
  if (typeof cb === 'function') {
    this.cbs.push(cb);
    this._run();
  }
};

function done() {
  this.pending--;
  this._run();
}

module.exports = Queue;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Class representing an event.
 *
 * @private
 */

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event =
/**
 * Create a new `Event`.
 *
 * @param {String} type The name of the event
 * @param {Object} target A reference to the target to which the event was dispatched
 */
function Event(type, target) {
  _classCallCheck(this, Event);

  this.target = target;
  this.type = type;
};

/**
 * Class representing a message event.
 *
 * @extends Event
 * @private
 */


var MessageEvent = function (_Event) {
  _inherits(MessageEvent, _Event);

  /**
   * Create a new `MessageEvent`.
   *
   * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The received data
   * @param {WebSocket} target A reference to the target to which the event was dispatched
   */
  function MessageEvent(data, target) {
    _classCallCheck(this, MessageEvent);

    var _this = _possibleConstructorReturn(this, (MessageEvent.__proto__ || Object.getPrototypeOf(MessageEvent)).call(this, 'message', target));

    _this.data = data;
    return _this;
  }

  return MessageEvent;
}(Event);

/**
 * Class representing a close event.
 *
 * @extends Event
 * @private
 */


var CloseEvent = function (_Event2) {
  _inherits(CloseEvent, _Event2);

  /**
   * Create a new `CloseEvent`.
   *
   * @param {Number} code The status code explaining why the connection is being closed
   * @param {String} reason A human-readable string explaining why the connection is closing
   * @param {WebSocket} target A reference to the target to which the event was dispatched
   */
  function CloseEvent(code, reason, target) {
    _classCallCheck(this, CloseEvent);

    var _this2 = _possibleConstructorReturn(this, (CloseEvent.__proto__ || Object.getPrototypeOf(CloseEvent)).call(this, 'close', target));

    _this2.wasClean = code === undefined || code === 1000 || code >= 3000 && code <= 4999;
    _this2.reason = reason;
    _this2.code = code;
    return _this2;
  }

  return CloseEvent;
}(Event);

/**
 * Class representing an open event.
 *
 * @extends Event
 * @private
 */


var OpenEvent = function (_Event3) {
  _inherits(OpenEvent, _Event3);

  /**
   * Create a new `OpenEvent`.
   *
   * @param {WebSocket} target A reference to the target to which the event was dispatched
   */
  function OpenEvent(target) {
    _classCallCheck(this, OpenEvent);

    return _possibleConstructorReturn(this, (OpenEvent.__proto__ || Object.getPrototypeOf(OpenEvent)).call(this, 'open', target));
  }

  return OpenEvent;
}(Event);

/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */


var EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} method A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @public
   */
  addEventListener: function addEventListener(method, listener) {
    if (typeof listener !== 'function') return;

    function onMessage(data) {
      listener.call(this, new MessageEvent(data, this));
    }

    function onClose(code, message) {
      listener.call(this, new CloseEvent(code, message, this));
    }

    function onError(event) {
      event.type = 'error';
      event.target = this;
      listener.call(this, event);
    }

    function onOpen() {
      listener.call(this, new OpenEvent(this));
    }

    if (method === 'message') {
      onMessage._listener = listener;
      this.on(method, onMessage);
    } else if (method === 'close') {
      onClose._listener = listener;
      this.on(method, onClose);
    } else if (method === 'error') {
      onError._listener = listener;
      this.on(method, onError);
    } else if (method === 'open') {
      onOpen._listener = listener;
      this.on(method, onOpen);
    } else {
      this.on(method, listener);
    }
  },


  /**
   * Remove an event listener.
   *
   * @param {String} method A string representing the event type to remove
   * @param {Function} listener The listener to remove
   * @public
   */
  removeEventListener: function removeEventListener(method, listener) {
    var listeners = this.listeners(method);

    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener || listeners[i]._listener === listener) {
        this.removeListener(method, listeners[i]);
      }
    }
  }
};

module.exports = EventTarget;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

try {
  var isValidUTF8 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"utf-8-validate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  module.exports = (typeof isValidUTF8 === 'undefined' ? 'undefined' : _typeof(isValidUTF8)) === 'object' ? isValidUTF8.Validation.isValidUTF8 // utf-8-validate@<3.0.0
  : isValidUTF8;
} catch (e) /* istanbul ignore next */{
  module.exports = function () {
    return true;
  };
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var safeBuffer = __webpack_require__(8);
var EventEmitter = __webpack_require__(14);
var crypto = __webpack_require__(10);
var Ultron = __webpack_require__(15);
var http = __webpack_require__(16);
var url = __webpack_require__(17);

var PerMessageDeflate = __webpack_require__(9);
var Extensions = __webpack_require__(18);
var constants = __webpack_require__(12);
var WebSocket = __webpack_require__(13);

var Buffer = safeBuffer.Buffer;

/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */

var WebSocketServer = function (_EventEmitter) {
  _inherits(WebSocketServer, _EventEmitter);

  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {String} options.host The hostname where to bind the server
   * @param {Number} options.port The port where to bind the server
   * @param {http.Server} options.server A pre-created HTTP/S server to use
   * @param {Function} options.verifyClient An hook to reject connections
   * @param {Function} options.handleProtocols An hook to handle protocols
   * @param {String} options.path Accept only connections matching this path
   * @param {Boolean} options.noServer Enable no server mode
   * @param {Boolean} options.clientTracking Specifies whether or not to track clients
   * @param {(Boolean|Object)} options.perMessageDeflate Enable/disable permessage-deflate
   * @param {Number} options.maxPayload The maximum allowed message size
   * @param {Function} callback A listener for the `listening` event
   */
  function WebSocketServer(options, callback) {
    _classCallCheck(this, WebSocketServer);

    var _this = _possibleConstructorReturn(this, (WebSocketServer.__proto__ || Object.getPrototypeOf(WebSocketServer)).call(this));

    options = Object.assign({
      maxPayload: 100 * 1024 * 1024,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null, // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null
    }, options);

    if (options.port == null && !options.server && !options.noServer) {
      throw new TypeError('missing or invalid options');
    }

    if (options.port != null) {
      _this._server = http.createServer(function (req, res) {
        var body = http.STATUS_CODES[426];

        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });
      _this._server.allowHalfOpen = false;
      _this._server.listen(options.port, options.host, options.backlog, callback);
    } else if (options.server) {
      _this._server = options.server;
    }

    if (_this._server) {
      _this._ultron = new Ultron(_this._server);
      _this._ultron.on('listening', function () {
        return _this.emit('listening');
      });
      _this._ultron.on('error', function (err) {
        return _this.emit('error', err);
      });
      _this._ultron.on('upgrade', function (req, socket, head) {
        _this.handleUpgrade(req, socket, head, function (client) {
          _this.emit('connection', client, req);
        });
      });
    }

    if (options.clientTracking) _this.clients = new Set();
    _this.options = options;
    return _this;
  }

  /**
   * Close the server.
   *
   * @param {Function} cb Callback
   * @public
   */


  _createClass(WebSocketServer, [{
    key: 'close',
    value: function close(cb) {
      //
      // Terminate all associated clients.
      //
      if (this.clients) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.clients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var client = _step.value;
            client.terminate();
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

      var server = this._server;

      if (server) {
        this._ultron.destroy();
        this._ultron = this._server = null;

        //
        // Close the http server if it was internally created.
        //
        if (this.options.port != null) return server.close(cb);
      }

      if (cb) cb();
    }

    /**
     * See if a given request should be handled by this server instance.
     *
     * @param {http.IncomingMessage} req Request object to inspect
     * @return {Boolean} `true` if the request is valid, else `false`
     * @public
     */

  }, {
    key: 'shouldHandle',
    value: function shouldHandle(req) {
      if (this.options.path && url.parse(req.url).pathname !== this.options.path) {
        return false;
      }

      return true;
    }

    /**
     * Handle a HTTP Upgrade request.
     *
     * @param {http.IncomingMessage} req The request object
     * @param {net.Socket} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @public
     */

  }, {
    key: 'handleUpgrade',
    value: function handleUpgrade(req, socket, head, cb) {
      var _this2 = this;

      socket.on('error', socketError);

      var version = +req.headers['sec-websocket-version'];

      if (req.method !== 'GET' || req.headers.upgrade.toLowerCase() !== 'websocket' || !req.headers['sec-websocket-key'] || version !== 8 && version !== 13 || !this.shouldHandle(req)) {
        return abortConnection(socket, 400);
      }

      var protocol = (req.headers['sec-websocket-protocol'] || '').split(/, */);

      //
      // Optionally call external protocol selection handler.
      //
      if (this.options.handleProtocols) {
        protocol = this.options.handleProtocols(protocol, req);
        if (protocol === false) return abortConnection(socket, 401);
      } else {
        protocol = protocol[0];
      }

      //
      // Optionally call external client verification handler.
      //
      if (this.options.verifyClient) {
        var info = {
          origin: req.headers['' + (version === 8 ? 'sec-websocket-origin' : 'origin')],
          secure: !!(req.connection.authorized || req.connection.encrypted),
          req: req
        };

        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(info, function (verified, code, message) {
            if (!verified) return abortConnection(socket, code || 401, message);

            _this2.completeUpgrade(protocol, version, req, socket, head, cb);
          });
          return;
        } else if (!this.options.verifyClient(info)) {
          return abortConnection(socket, 401);
        }
      }

      this.completeUpgrade(protocol, version, req, socket, head, cb);
    }

    /**
     * Upgrade the connection to WebSocket.
     *
     * @param {String} protocol The chosen subprotocol
     * @param {Number} version The WebSocket protocol version
     * @param {http.IncomingMessage} req The request object
     * @param {net.Socket} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @private
     */

  }, {
    key: 'completeUpgrade',
    value: function completeUpgrade(protocol, version, req, socket, head, cb) {
      var _this3 = this;

      //
      // Destroy the socket if the client has already sent a FIN packet.
      //
      if (!socket.readable || !socket.writable) return socket.destroy();

      var key = crypto.createHash('sha1').update(req.headers['sec-websocket-key'] + constants.GUID, 'binary').digest('base64');

      var headers = ['HTTP/1.1 101 Switching Protocols', 'Upgrade: websocket', 'Connection: Upgrade', 'Sec-WebSocket-Accept: ' + key];

      if (protocol) headers.push('Sec-WebSocket-Protocol: ' + protocol);

      var offer = Extensions.parse(req.headers['sec-websocket-extensions']);
      var extensions;

      try {
        extensions = acceptExtensions(this.options, offer);
      } catch (err) {
        return abortConnection(socket, 400);
      }

      var props = Object.keys(extensions);

      if (props.length) {
        var serverExtensions = props.reduce(function (obj, key) {
          obj[key] = [extensions[key].params];
          return obj;
        }, {});

        headers.push('Sec-WebSocket-Extensions: ' + Extensions.format(serverExtensions));
      }

      //
      // Allow external modification/inspection of handshake headers.
      //
      this.emit('headers', headers, req);

      socket.write(headers.concat('', '').join('\r\n'));

      var client = new WebSocket([socket, head], null, {
        maxPayload: this.options.maxPayload,
        protocolVersion: version,
        extensions: extensions,
        protocol: protocol
      });

      if (this.clients) {
        this.clients.add(client);
        client.on('close', function () {
          return _this3.clients.delete(client);
        });
      }

      socket.removeListener('error', socketError);
      cb(client);
    }
  }]);

  return WebSocketServer;
}(EventEmitter);

module.exports = WebSocketServer;

/**
 * Handle premature socket errors.
 *
 * @private
 */
function socketError() {
  this.destroy();
}

/**
 * Accept WebSocket extensions.
 *
 * @param {Object} options The `WebSocketServer` configuration options
 * @param {Object} offer The parsed value of the `sec-websocket-extensions` header
 * @return {Object} Accepted extensions
 * @private
 */
function acceptExtensions(options, offer) {
  var pmd = options.perMessageDeflate;
  var extensions = {};

  if (pmd && offer[PerMessageDeflate.extensionName]) {
    var perMessageDeflate = new PerMessageDeflate(pmd !== true ? pmd : {}, true, options.maxPayload);

    perMessageDeflate.accept(offer[PerMessageDeflate.extensionName]);
    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
  }

  return extensions;
}

/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {net.Socket} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @private
 */
function abortConnection(socket, code, message) {
  if (socket.writable) {
    message = message || http.STATUS_CODES[code];
    socket.write('HTTP/1.1 ' + code + ' ' + http.STATUS_CODES[code] + '\r\n' + 'Connection: close\r\n' + 'Content-type: text/html\r\n' + ('Content-Length: ' + Buffer.byteLength(message) + '\r\n') + '\r\n' + message);
  }

  socket.removeListener('error', socketError);
  socket.destroy();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGI2NTE3NTlhZTI1M2I4YzhhMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL1Blck1lc3NhZ2VEZWZsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvQnVmZmVyVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL1dlYlNvY2tldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWx0cm9uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9SZWNlaXZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0Vycm9yQ29kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9TZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luYy1saW1pdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvV2ViU29ja2V0U2VydmVyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYXBwIiwid3NzIiwiU2VydmVyIiwicG9ydCIsInVzZSIsImN0eCIsIm5leHQiLCJyb3V0ZXMiLCJhbGxvd2VkTWV0aG9kcyIsImxpc3RlbiIsIm9uIiwiY29ubmVjdGlvbiIsIndzIiwiaW5jb21pbmciLCJtZXNzYWdlIiwibG9nIiwic2VuZCIsInJvdXRlciIsImdldCIsInN0YXJ0VGltZSIsImhydGltZSIsInRpdGxlIiwiYm9keSIsInBhZ2UiLCJoZWFkZXJfdHBsIiwiYm9keV90cGwiLCJmb290ZXJfdHBsIiwiY2hhcnNldCIsImNzc0hyZWYiLCJOU19QRVJfU0VDIiwiZGlmZiIsImJ1ZmZlciIsInJlcXVpcmUiLCJCdWZmZXIiLCJjb3B5UHJvcHMiLCJzcmMiLCJkc3QiLCJrZXkiLCJmcm9tIiwiYWxsb2MiLCJhbGxvY1Vuc2FmZSIsImFsbG9jVW5zYWZlU2xvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTYWZlQnVmZmVyIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImxlbmd0aCIsIlR5cGVFcnJvciIsInNpemUiLCJmaWxsIiwiZW5jb2RpbmciLCJidWYiLCJ1bmRlZmluZWQiLCJTbG93QnVmZmVyIiwic2FmZUJ1ZmZlciIsInpsaWIiLCJMaW1pdGVyIiwiYnVmZmVyVXRpbCIsIlRSQUlMRVIiLCJFTVBUWV9CTE9DSyIsInpsaWJMaW1pdGVyIiwiUGVyTWVzc2FnZURlZmxhdGUiLCJvcHRpb25zIiwiaXNTZXJ2ZXIiLCJtYXhQYXlsb2FkIiwiX21heFBheWxvYWQiLCJfb3B0aW9ucyIsIl90aHJlc2hvbGQiLCJ0aHJlc2hvbGQiLCJfaXNTZXJ2ZXIiLCJfZGVmbGF0ZSIsIl9pbmZsYXRlIiwicGFyYW1zIiwiY29uY3VycmVuY3kiLCJjb25jdXJyZW5jeUxpbWl0Iiwic2VydmVyTm9Db250ZXh0VGFrZW92ZXIiLCJzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciIsImNsaWVudE5vQ29udGV4dFRha2VvdmVyIiwiY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIiLCJzZXJ2ZXJNYXhXaW5kb3dCaXRzIiwic2VydmVyX21heF93aW5kb3dfYml0cyIsImNsaWVudE1heFdpbmRvd0JpdHMiLCJjbGllbnRfbWF4X3dpbmRvd19iaXRzIiwicGFyYW1zTGlzdCIsIm5vcm1hbGl6ZVBhcmFtcyIsImFjY2VwdEFzU2VydmVyIiwiYWNjZXB0QXNDbGllbnQiLCJ3cml0ZUluUHJvZ3Jlc3MiLCJwZW5kaW5nQ2xvc2UiLCJjbG9zZSIsImFjY2VwdGVkIiwicmVzdWx0Iiwic29tZSIsIkVycm9yIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJaX01JTl9XSU5ET1dCSVRTIiwiWl9NQVhfV0lORE9XQklUUyIsImRhdGEiLCJmaW4iLCJjYWxsYmFjayIsInB1c2giLCJkb25lIiwiX2RlY29tcHJlc3MiLCJlcnIiLCJfY29tcHJlc3MiLCJlbmRwb2ludCIsIndpbmRvd0JpdHMiLCJaX0RFRkFVTFRfV0lORE9XQklUUyIsImNyZWF0ZUluZmxhdGVSYXciLCJ0b3RhbExlbmd0aCIsImJ1ZmZlcnMiLCJvbkRhdGEiLCJjbG9zZUNvZGUiLCJyZXNldCIsIm9uRXJyb3IiLCJjbGVhbnVwIiwicmVtb3ZlTGlzdGVuZXIiLCJ3cml0ZSIsImZsdXNoIiwiY29uY2F0IiwibmV4dFRpY2siLCJjcmVhdGVEZWZsYXRlUmF3IiwibWVtTGV2ZWwiLCJsZXZlbCIsIlpfU1lOQ19GTFVTSCIsInNsaWNlIiwibGlzdCIsInRhcmdldCIsIm9mZnNldCIsImkiLCJjb3B5IiwiYXNzaWduIiwiQnVmZmVyVXRpbCIsImUiLCJtYXNrIiwic291cmNlIiwib3V0cHV0IiwidW5tYXNrIiwiQklOQVJZX1RZUEVTIiwiR1VJRCIsIkVNUFRZX0JVRkZFUiIsIk5PT1AiLCJFdmVudEVtaXR0ZXIiLCJjcnlwdG8iLCJVbHRyb24iLCJodHRwcyIsImh0dHAiLCJ1cmwiLCJFdmVudFRhcmdldCIsIkV4dGVuc2lvbnMiLCJjb25zdGFudHMiLCJSZWNlaXZlciIsIlNlbmRlciIsInByb3RvY29sVmVyc2lvbnMiLCJjbG9zZVRpbWVvdXQiLCJXZWJTb2NrZXQiLCJhZGRyZXNzIiwicHJvdG9jb2xzIiwiQXJyYXkiLCJpc0FycmF5IiwicmVhZHlTdGF0ZSIsIkNPTk5FQ1RJTkciLCJieXRlc1JlY2VpdmVkIiwiZXh0ZW5zaW9ucyIsInByb3RvY29sIiwiX2JpbmFyeVR5cGUiLCJfZmluYWxpemUiLCJmaW5hbGl6ZSIsImJpbmQiLCJfZmluYWxpemVDYWxsZWQiLCJfY2xvc2VNZXNzYWdlIiwiX2Nsb3NlVGltZXIiLCJfY2xvc2VDb2RlIiwiX3JlY2VpdmVyIiwiX3NlbmRlciIsIl9zb2NrZXQiLCJfdWx0cm9uIiwiaW5pdEFzU2VydmVyQ2xpZW50IiwiY2FsbCIsImluaXRBc0NsaWVudCIsInNvY2tldCIsImhlYWQiLCJzZXRUaW1lb3V0Iiwic2V0Tm9EZWxheSIsImJpbmFyeVR5cGUiLCJ1bnNoaWZ0IiwiYWRkIiwib25tZXNzYWdlIiwiZW1pdCIsIm9ucGluZyIsInBvbmciLCJvbnBvbmciLCJvbmNsb3NlIiwiY29kZSIsInJlYXNvbiIsIm9uZXJyb3IiLCJlcnJvciIsIk9QRU4iLCJDTE9TSU5HIiwiY2xlYXJUaW1lb3V0IiwiZGVzdHJveSIsImVuZCIsImVtaXRDbG9zZSIsIkNMT1NFRCIsImV4dGVuc2lvbk5hbWUiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJwYXVzZSIsInJlc3VtZSIsIl9yZXEiLCJhYm9ydGVkIiwiYWJvcnQiLCJmYWlsU2lsZW50bHkiLCJ0b1N0cmluZyIsInBpbmciLCJjYiIsIm9wdHMiLCJiaW5hcnkiLCJjb21wcmVzcyIsImFtb3VudCIsImJ1ZmZlclNpemUiLCJfYnVmZmVyZWRCeXRlcyIsInR5cGUiLCJpbmRleE9mIiwibWV0aG9kIiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJsaXN0ZW5lcnMiLCJfbGlzdGVuZXIiLCJzZXQiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG9jb2xWZXJzaW9uIiwic2V0U29ja2V0Iiwiam9pbiIsInBlck1lc3NhZ2VEZWZsYXRlIiwiaGFuZHNoYWtlVGltZW91dCIsImxvY2FsQWRkcmVzcyIsImhlYWRlcnMiLCJmYW1pbHkiLCJvcmlnaW4iLCJhZ2VudCIsImhvc3QiLCJjaGVja1NlcnZlcklkZW50aXR5IiwicmVqZWN0VW5hdXRob3JpemVkIiwicGFzc3BocmFzZSIsImNpcGhlcnMiLCJjZXJ0IiwicGZ4IiwiY2EiLCJzZXJ2ZXJVcmwiLCJwYXJzZSIsImlzVW5peFNvY2tldCIsInBhdGgiLCJpc1NlY3VyZSIsInJhbmRvbUJ5dGVzIiwiaHR0cE9iaiIsImV4dGVuc2lvbnNPZmZlciIsIm9mZmVyIiwicmVxdWVzdE9wdGlvbnMiLCJob3N0bmFtZSIsImZvcm1hdCIsIk9yaWdpbiIsIkhvc3QiLCJhdXRoIiwicGFydHMiLCJzcGxpdCIsInNvY2tldFBhdGgiLCJjaGFyQXQiLCJBZ2VudCIsInJlcyIsInN0YXR1c0NvZGUiLCJkaWdlc3QiLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwic2VydmVyUHJvdCIsInByb3RMaXN0IiwicHJvdEVycm9yIiwic2VydmVyRXh0ZW5zaW9ucyIsImFjY2VwdCIsImhhcyIsImhhc093blByb3BlcnR5IiwiaWQiLCJlZSIsImV2ZW50IiwiZm4iLCJjb250ZXh0IiwiX191bHRyb24iLCJvbmNlIiwicmVtb3ZlIiwiYXJncyIsImFyZ3VtZW50cyIsImV2ZW50TmFtZXMiLCJfZXZlbnRzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaiIsInYiLCJ0b2tlbiIsInNoaWZ0IiwidHJpbSIsInBhcnNlZFBhcmFtcyIsInBhcmFtIiwiayIsInAiLCJpc1ZhbGlkVVRGOCIsIkVycm9yQ29kZXMiLCJHRVRfSU5GTyIsIkdFVF9QQVlMT0FEX0xFTkdUSF8xNiIsIkdFVF9QQVlMT0FEX0xFTkdUSF82NCIsIkdFVF9NQVNLIiwiR0VUX0RBVEEiLCJJTkZMQVRJTkciLCJfZXh0ZW5zaW9ucyIsIl9idWZmZXJzIiwiX2NvbXByZXNzZWQiLCJfcGF5bG9hZExlbmd0aCIsIl9mcmFnbWVudGVkIiwiX21hc2tlZCIsIl9maW4iLCJfbWFzayIsIl9vcGNvZGUiLCJfdG90YWxQYXlsb2FkTGVuZ3RoIiwiX21lc3NhZ2VMZW5ndGgiLCJfZnJhZ21lbnRzIiwiX2NsZWFudXBDYWxsYmFjayIsIl9oYWRFcnJvciIsIl9kZWFkIiwiX2xvb3AiLCJfc3RhdGUiLCJieXRlcyIsImwiLCJuIiwic3RhcnRMb29wIiwiZ2V0SW5mbyIsImdldFBheWxvYWRMZW5ndGgxNiIsImdldFBheWxvYWRMZW5ndGg2NCIsImdldE1hc2siLCJnZXREYXRhIiwiaGFzQnVmZmVyZWRCeXRlcyIsInJlYWRCdWZmZXIiLCJjb21wcmVzc2VkIiwiaGF2ZUxlbmd0aCIsInJlYWRVSW50MTZCRSIsIm51bSIsInJlYWRVSW50MzJCRSIsIk1hdGgiLCJwb3ciLCJtYXhQYXlsb2FkRXhjZWVkZWQiLCJjb250cm9sTWVzc2FnZSIsImRlY29tcHJlc3MiLCJwdXNoRnJhZ21lbnQiLCJkYXRhTWVzc2FnZSIsIm1lc3NhZ2VMZW5ndGgiLCJmcmFnbWVudHMiLCJ0b0J1ZmZlciIsInRvQXJyYXlCdWZmZXIiLCJpc1ZhbGlkRXJyb3JDb2RlIiwiZnVsbExlbmd0aCIsImZyYWdtZW50IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJfZmlyc3RGcmFnbWVudCIsIl9kZWZsYXRpbmciLCJfcXVldWUiLCJ3cml0ZVVJbnQxNkJFIiwiZW5xdWV1ZSIsImRvQ2xvc2UiLCJzZW5kRnJhbWUiLCJmcmFtZSIsInJzdjEiLCJvcGNvZGUiLCJyZWFkT25seSIsImlzQnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJ2aWV3VG9CdWZmZXIiLCJkb1BpbmciLCJkb1BvbmciLCJkaXNwYXRjaCIsImRlcXVldWUiLCJhcHBseSIsIm1lcmdlIiwicGF5bG9hZExlbmd0aCIsIndyaXRlVUludDMyQkUiLCJ2aWV3IiwiUXVldWUiLCJJbmZpbml0eSIsInBlbmRpbmciLCJqb2JzIiwiY2JzIiwiX2RvbmUiLCJhcnJheUFkZE1ldGhvZHMiLCJtZXRob2RSZXN1bHQiLCJfcnVuIiwiam9iIiwicG9wIiwib25Eb25lIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJDbG9zZUV2ZW50Iiwid2FzQ2xlYW4iLCJPcGVuRXZlbnQiLCJvbk1lc3NhZ2UiLCJvbkNsb3NlIiwib25PcGVuIiwiVmFsaWRhdGlvbiIsIldlYlNvY2tldFNlcnZlciIsImhhbmRsZVByb3RvY29scyIsImNsaWVudFRyYWNraW5nIiwidmVyaWZ5Q2xpZW50Iiwibm9TZXJ2ZXIiLCJiYWNrbG9nIiwic2VydmVyIiwiX3NlcnZlciIsImNyZWF0ZVNlcnZlciIsInJlcSIsIlNUQVRVU19DT0RFUyIsIndyaXRlSGVhZCIsImFsbG93SGFsZk9wZW4iLCJoYW5kbGVVcGdyYWRlIiwiY2xpZW50IiwiY2xpZW50cyIsIlNldCIsInRlcm1pbmF0ZSIsInBhdGhuYW1lIiwic29ja2V0RXJyb3IiLCJ2ZXJzaW9uIiwidXBncmFkZSIsInRvTG93ZXJDYXNlIiwic2hvdWxkSGFuZGxlIiwiYWJvcnRDb25uZWN0aW9uIiwic2VjdXJlIiwiYXV0aG9yaXplZCIsImVuY3J5cHRlZCIsInZlcmlmaWVkIiwiY29tcGxldGVVcGdyYWRlIiwicmVhZGFibGUiLCJ3cml0YWJsZSIsImFjY2VwdEV4dGVuc2lvbnMiLCJwcm9wcyIsInJlZHVjZSIsIm9iaiIsImRlbGV0ZSIsInBtZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBRkFBLFFBQVFDLElBQVIsQ0FBYSxNQUFiLEVBQXFCQyxRQUFRQyxHQUFSLENBQVlDLFFBQWpDOztBQUtBO0FBQ0EsSUFBTUMsTUFBTSxtQkFBWjtBQUNBLElBQU1DLE1BQU0sSUFBSSxhQUFVQyxNQUFkLENBQXFCLEVBQUVDLE1BQU0sSUFBUixFQUFyQixDQUFaOztBQUVBO0FBQ0FILElBQUlJLEdBQUosQ0FBUSwwQkFBUixFQUNLQSxHQURMLENBQ1MsZ0JBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDNUIsUUFBSVQsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLEtBQTdCLEVBQW9DO0FBQ2hDTSxZQUFJUCxHQUFKLEdBQVVELFFBQVFDLEdBQVIsQ0FBWUMsUUFBdEI7QUFDSDtBQUNELFVB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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRiNjUxNzU5YWUyNTNiOGM4YTMxIiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnXG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuXG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgIH0pO1xuXG4gICAgd3Muc2VuZCgnc29tZXRoaW5nJyk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBzZXJ2ZSBmcm9tICdrb2EtYmV0dGVyLXN0YXRpYzInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlcyc7XG5cbi8vIGNyZWF0ZSByb3V0ZXJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbi8vIHN0YXRpYyBhc3NldHNcbnJvdXRlci5nZXQoJy8qJywgc2VydmUoJy4nKSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LnN0YXJ0VGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgY3R4LnRpdGxlID0gYEVgO1xuICAgIGN0eC5ib2R5ID0gcGFnZShjdHgpO1xufSk7XG5cbi8vIHRlc3QgcGF0aFxucm91dGVyLmdldCgnL3Rlc3QnLCBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgY3R4LmJvZHkgPSAnZ2V0IC90ZXN0Mic7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWJldHRlci1zdGF0aWMyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZGVmYXVsdCBwYWdlIHRlbXBhbGF0ZVxuY29uc3QgcGFnZSA9IChjdHgpID0+IGA8IWRvY3R5cGUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICAgICR7aGVhZGVyX3RwbChjdHgpfVxuICAgICR7Ym9keV90cGwoY3R4KX1cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvaW5kZXguanNcIj48L3NjcmlwdD5cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+YH09e30pID0+IHtcbiAgICByZXR1cm4gYDxib2R5PiR7Ym9keX08L2JvZHk+YDtcbn1cblxuLy8gaGVhZGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgaGVhZGVyX3RwbCA9ICh7dGl0bGU9XCJzZXJ2ZXJUZW1wbGF0ZVwiLCBjaGFyc2V0PVwiVVRGLThcIiwgY3NzSHJlZj1cInB1YmxpYy9jc3Mvc3R5bGUuY3NzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHNyYz1cIi9wdWJsaWMvanMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuPC9oZWFkPmA7XG5cbi8vIGZvb3RlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90cGwgPSAoe3N0YXJ0VGltZX0pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBOU19QRVJfU0VDID0gMWU5O1xuICAgIGNvbnN0IGRpZmYgPSBwcm9jZXNzLmhydGltZShzdGFydFRpbWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNtYWxsPlBhZ2UgZ2VuZXJhdGUgdGltZTogJHtkaWZmWzBdICogTlNfUEVSX1NFQyArIGRpZmZbMV19IG5hbm9zZWNvbmRzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZm9vdGVyPmA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBDb3B5IHN0YXRpYyBtZXRob2RzIGZyb20gQnVmZmVyXG5jb3B5UHJvcHMoQnVmZmVyLCBTYWZlQnVmZmVyKVxuXG5TYWZlQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoMClcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihzaXplKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gYnVmZmVyLlNsb3dCdWZmZXIoc2l6ZSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FmZUJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJyk7XG5jb25zdCB6bGliID0gcmVxdWlyZSgnemxpYicpO1xuY29uc3QgTGltaXRlciA9IHJlcXVpcmUoJ2FzeW5jLWxpbWl0ZXInKTtcblxuY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4vQnVmZmVyVXRpbCcpO1xuXG5jb25zdCBCdWZmZXIgPSBzYWZlQnVmZmVyLkJ1ZmZlcjtcblxuY29uc3QgVFJBSUxFUiA9IEJ1ZmZlci5mcm9tKFsweDAwLCAweDAwLCAweGZmLCAweGZmXSk7XG5jb25zdCBFTVBUWV9CTE9DSyA9IEJ1ZmZlci5mcm9tKFsweDAwXSk7XG5cbi8vIFdlIGxpbWl0IHpsaWIgY29uY3VycmVuY3ksIHdoaWNoIHByZXZlbnRzIHNldmVyZSBtZW1vcnkgZnJhZ21lbnRhdGlvblxuLy8gYXMgZG9jdW1lbnRlZCBpbiBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzg4NzEjaXNzdWVjb21tZW50LTI1MDkxNTkxM1xuLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xMjAyXG4vL1xuLy8gSW50ZW50aW9uYWxseSBnbG9iYWw7IGl0J3MgdGhlIGdsb2JhbCB0aHJlYWQgcG9vbCB0aGF0J3Ncbi8vIGFuIGlzc3VlLlxubGV0IHpsaWJMaW1pdGVyO1xuXG4vKipcbiAqIFBlci1tZXNzYWdlIERlZmxhdGUgaW1wbGVtZW50YXRpb24uXG4gKi9cbmNsYXNzIFBlck1lc3NhZ2VEZWZsYXRlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMsIGlzU2VydmVyLCBtYXhQYXlsb2FkKSB7XG4gICAgdGhpcy5fbWF4UGF5bG9hZCA9IG1heFBheWxvYWQgfCAwO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHRoaXMuX29wdGlvbnMudGhyZXNob2xkICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fb3B0aW9ucy50aHJlc2hvbGRcbiAgICAgIDogMTAyNDtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhaXNTZXJ2ZXI7XG4gICAgdGhpcy5fZGVmbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG5cbiAgICB0aGlzLnBhcmFtcyA9IG51bGw7XG5cbiAgICBpZiAoIXpsaWJMaW1pdGVyKSB7XG4gICAgICBjb25zdCBjb25jdXJyZW5jeSA9IHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0XG4gICAgICAgIDogMTA7XG4gICAgICB6bGliTGltaXRlciA9IG5ldyBMaW1pdGVyKHsgY29uY3VycmVuY3kgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBleHRlbnNpb25OYW1lICgpIHtcbiAgICByZXR1cm4gJ3Blcm1lc3NhZ2UtZGVmbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGV4dGVuc2lvbiBwYXJhbWV0ZXJzIG9mZmVyLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIG9mZmVyICgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgcGFyYW1zLmNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09IG51bGwpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRlbnNpb24gb2ZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc0xpc3QgRXh0ZW5zaW9uIHBhcmFtZXRlcnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFjY2VwdCAocGFyYW1zTGlzdCkge1xuICAgIHBhcmFtc0xpc3QgPSB0aGlzLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXNMaXN0KTtcblxuICAgIHZhciBwYXJhbXM7XG4gICAgaWYgKHRoaXMuX2lzU2VydmVyKSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLmFjY2VwdEFzU2VydmVyKHBhcmFtc0xpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLmFjY2VwdEFzQ2xpZW50KHBhcmFtc0xpc3QpO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogUmVsZWFzZXMgYWxsIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBleHRlbnNpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsZWFudXAgKCkge1xuICAgIGlmICh0aGlzLl9pbmZsYXRlKSB7XG4gICAgICBpZiAodGhpcy5faW5mbGF0ZS53cml0ZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5wZW5kaW5nQ2xvc2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGlmICh0aGlzLl9kZWZsYXRlLndyaXRlSW5Qcm9ncmVzcykge1xuICAgICAgICB0aGlzLl9kZWZsYXRlLnBlbmRpbmdDbG9zZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kZWZsYXRlLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0ZW5zaW9uIG9mZmVyIGZyb20gY2xpZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNMaXN0IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNTZXJ2ZXIgKHBhcmFtc0xpc3QpIHtcbiAgICBjb25zdCBhY2NlcHRlZCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhcmFtc0xpc3Quc29tZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyID09PSBmYWxzZSAmJlxuICAgICAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcikgfHxcbiAgICAgICAgKHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cykgfHxcbiAgICAgICAgKHR5cGVvZiB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgdHlwZW9mIHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cyA+IHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzKSB8fFxuICAgICAgICAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAhcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2VydmVyTm9Db250ZXh0VGFrZW92ZXIgfHxcbiAgICAgICAgcGFyYW1zLnNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyXG4gICAgICApIHtcbiAgICAgICAgYWNjZXB0ZWQuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE5vQ29udGV4dFRha2VvdmVyIHx8XG4gICAgICAgICh0aGlzLl9vcHRpb25zLmNsaWVudE5vQ29udGV4dFRha2VvdmVyICE9PSBmYWxzZSAmJlxuICAgICAgICAgIHBhcmFtcy5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlcilcbiAgICAgICkge1xuICAgICAgICBhY2NlcHRlZC5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWNjZXB0ZWQuc2VydmVyX21heF93aW5kb3dfYml0cyA9IHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgICBhY2NlcHRlZC5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzID0gcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHM7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9IHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyAhPT0gZmFsc2UgJiZcbiAgICAgICAgdHlwZW9mIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID09PSAnbnVtYmVyJ1xuICAgICAgKSB7XG4gICAgICAgIGFjY2VwdGVkLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcihcIkRvZXNuJ3Qgc3VwcG9ydCB0aGUgb2ZmZXJlZCBjb25maWd1cmF0aW9uXCIpO1xuXG4gICAgcmV0dXJuIGFjY2VwdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRlbnNpb24gcmVzcG9uc2UgZnJvbSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc0xpc3QgRXh0ZW5zaW9uIHBhcmFtZXRlcnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY2NlcHRBc0NsaWVudCAocGFyYW1zTGlzdCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHBhcmFtc0xpc3RbMF07XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3ZlciAhPSBudWxsKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICAgIHBhcmFtcy5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgXCJjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclwiJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgIT0gbnVsbCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlICYmXG4gICAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBcImNsaWVudF9tYXhfd2luZG93X2JpdHNcIicpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAoIXBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzIHx8XG4gICAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBcImNsaWVudF9tYXhfd2luZG93X2JpdHNcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGV4dGVuc2lvbnMgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zTGlzdCBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gTm9ybWFsaXplZCBleHRlbnNpb25zIHBhcmFtZXRlcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG5vcm1hbGl6ZVBhcmFtcyAocGFyYW1zTGlzdCkge1xuICAgIHJldHVybiBwYXJhbXNMaXN0Lm1hcCgocGFyYW1zKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGV4dGVuc2lvbiBwYXJhbWV0ZXJzIGZvciAke2tleX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWVbMF07XG5cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3Zlcic6XG4gICAgICAgICAgY2FzZSAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInOlxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBleHRlbnNpb24gcGFyYW1ldGVyIHZhbHVlIGZvciAke2tleX0gKCR7dmFsdWV9KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc2VydmVyX21heF93aW5kb3dfYml0cyc6XG4gICAgICAgICAgY2FzZSAnY2xpZW50X21heF93aW5kb3dfYml0cyc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBOdW1iZXIuaXNOYU4odmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUgPCB6bGliLlpfTUlOX1dJTkRPV0JJVFMgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZSA+IHpsaWIuWl9NQVhfV0lORE9XQklUU1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgZXh0ZW5zaW9uIHBhcmFtZXRlciB2YWx1ZSBmb3IgJHtrZXl9ICgke3ZhbHVlfSlgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1NlcnZlciAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXh0ZW5zaW9uIHBhcmFtZXRlciB2YWx1ZSBmb3IgJHtrZXl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGRlZmluZWQgZXh0ZW5zaW9uIHBhcmFtZXRlciAoJHtrZXl9KWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzcyBkYXRhLiBDb25jdXJyZW5jeSBsaW1pdGVkIGJ5IGFzeW5jLWxpbWl0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBkZWNvbXByZXNzIChkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgemxpYkxpbWl0ZXIucHVzaCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fZGVjb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuIENvbmN1cnJlbmN5IGxpbWl0ZWQgYnkgYXN5bmMtbGltaXRlci5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgRGF0YSB0byBjb21wcmVzc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjb21wcmVzcyAoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLnB1c2goKGRvbmUpID0+IHtcbiAgICAgIHRoaXMuX2NvbXByZXNzKGRhdGEsIGZpbiwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kZWNvbXByZXNzIChkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdjbGllbnQnIDogJ3NlcnZlcic7XG5cbiAgICBpZiAoIXRoaXMuX2luZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9IHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgOiB0aGlzLnBhcmFtc1trZXldO1xuXG4gICAgICB0aGlzLl9pbmZsYXRlID0gemxpYi5jcmVhdGVJbmZsYXRlUmF3KHsgd2luZG93Qml0cyB9KTtcbiAgICB9XG4gICAgdGhpcy5faW5mbGF0ZS53cml0ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgICBjb25zdCBidWZmZXJzID0gW107XG4gICAgdmFyIGVycjtcblxuICAgIGNvbnN0IG9uRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICB0b3RhbExlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICAgIGlmICh0aGlzLl9tYXhQYXlsb2FkIDwgMSB8fCB0b3RhbExlbmd0aCA8PSB0aGlzLl9tYXhQYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGVyciA9IG5ldyBFcnJvcignbWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpO1xuICAgICAgZXJyLmNsb3NlQ29kZSA9IDEwMDk7XG4gICAgICB0aGlzLl9pbmZsYXRlLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9pbmZsYXRlKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2luZmxhdGUucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICB0aGlzLl9pbmZsYXRlLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgb25EYXRhKTtcbiAgICAgIHRoaXMuX2luZmxhdGUud3JpdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGZpbiAmJiB0aGlzLnBhcmFtc1tgJHtlbmRwb2ludH1fbm9fY29udGV4dF90YWtlb3ZlcmBdKSB8fFxuICAgICAgICB0aGlzLl9pbmZsYXRlLnBlbmRpbmdDbG9zZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2luZmxhdGUub24oJ2Vycm9yJywgb25FcnJvcikub24oJ2RhdGEnLCBvbkRhdGEpO1xuICAgIHRoaXMuX2luZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgaWYgKGZpbikgdGhpcy5faW5mbGF0ZS53cml0ZShUUkFJTEVSKTtcblxuICAgIHRoaXMuX2luZmxhdGUuZmx1c2goKCkgPT4ge1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgaWYgKGVycikgY2FsbGJhY2soZXJyKTtcbiAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgYnVmZmVyVXRpbC5jb25jYXQoYnVmZmVycywgdG90YWxMZW5ndGgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wcmVzcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBEYXRhIHRvIGNvbXByZXNzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29tcHJlc3MgKGRhdGEsIGZpbiwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG51bGwsIEVNUFRZX0JMT0NLKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuX2lzU2VydmVyID8gJ3NlcnZlcicgOiAnY2xpZW50JztcblxuICAgIGlmICghdGhpcy5fZGVmbGF0ZSkge1xuICAgICAgY29uc3Qga2V5ID0gYCR7ZW5kcG9pbnR9X21heF93aW5kb3dfYml0c2A7XG4gICAgICBjb25zdCB3aW5kb3dCaXRzID0gdHlwZW9mIHRoaXMucGFyYW1zW2tleV0gIT09ICdudW1iZXInXG4gICAgICAgID8gemxpYi5aX0RFRkFVTFRfV0lORE9XQklUU1xuICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUgPSB6bGliLmNyZWF0ZURlZmxhdGVSYXcoe1xuICAgICAgICBtZW1MZXZlbDogdGhpcy5fb3B0aW9ucy5tZW1MZXZlbCxcbiAgICAgICAgbGV2ZWw6IHRoaXMuX29wdGlvbnMubGV2ZWwsXG4gICAgICAgIGZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSCxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2RlZmxhdGUud3JpdGVJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuXG4gICAgY29uc3Qgb25EYXRhID0gKGRhdGEpID0+IHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGRhdGEubGVuZ3RoO1xuICAgICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fZGVmbGF0ZSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgdGhpcy5fZGVmbGF0ZS5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uRGF0YSk7XG4gICAgICB0aGlzLl9kZWZsYXRlLndyaXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkgfHxcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5wZW5kaW5nQ2xvc2VcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9kZWZsYXRlLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9kZWZsYXRlLm9uKCdlcnJvcicsIG9uRXJyb3IpLm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICB0aGlzLl9kZWZsYXRlLndyaXRlKGRhdGEpO1xuICAgIHRoaXMuX2RlZmxhdGUuZmx1c2goemxpYi5aX1NZTkNfRkxVU0gsICgpID0+IHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIHZhciBkYXRhID0gYnVmZmVyVXRpbC5jb25jYXQoYnVmZmVycywgdG90YWxMZW5ndGgpO1xuICAgICAgaWYgKGZpbikgZGF0YSA9IGRhdGEuc2xpY2UoMCwgZGF0YS5sZW5ndGggLSA0KTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyTWVzc2FnZURlZmxhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL1Blck1lc3NhZ2VEZWZsYXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3J5cHRvXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FmZUJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJyk7XG5cbmNvbnN0IEJ1ZmZlciA9IHNhZmVCdWZmZXIuQnVmZmVyO1xuXG4vKipcbiAqIE1lcmdlcyBhbiBhcnJheSBvZiBidWZmZXJzIGludG8gYSBuZXcgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyW119IGxpc3QgVGhlIGFycmF5IG9mIGJ1ZmZlcnMgdG8gY29uY2F0XG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxMZW5ndGggVGhlIHRvdGFsIGxlbmd0aCBvZiBidWZmZXJzIGluIHRoZSBsaXN0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSByZXN1bHRpbmcgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IGNvbmNhdCA9IChsaXN0LCB0b3RhbExlbmd0aCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBidWYgPSBsaXN0W2ldO1xuICAgIGJ1Zi5jb3B5KHRhcmdldCwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYnVmLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG50cnkge1xuICBjb25zdCBidWZmZXJVdGlsID0gcmVxdWlyZSgnYnVmZmVydXRpbCcpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7IGNvbmNhdCB9LCBidWZmZXJVdGlsLkJ1ZmZlclV0aWwgfHwgYnVmZmVyVXRpbCk7XG59IGNhdGNoIChlKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gIC8qKlxuICAgKiBNYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IHNvdXJjZSBUaGUgYnVmZmVyIHRvIG1hc2tcbiAgICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCBhdCB3aGljaCB0byBzdGFydCB3cml0aW5nXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBtYXNrLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdCBtYXNrID0gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG91dHB1dFtvZmZzZXQgKyBpXSA9IHNvdXJjZVtpXSBeIG1hc2tbaSAmIDNdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5tYXNrcyBhIGJ1ZmZlciB1c2luZyB0aGUgZ2l2ZW4gbWFzay5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVubWFza1xuICAgKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29uc3QgdW5tYXNrID0gKGJ1ZmZlciwgbWFzaykgPT4ge1xuICAgIC8vIFJlcXVpcmVkIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvOTAwNiBpcyByZXNvbHZlZC5cbiAgICBjb25zdCBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7IGNvbmNhdCwgbWFzaywgdW5tYXNrIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL0J1ZmZlclV0aWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhZmVCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpO1xuXG5jb25zdCBCdWZmZXIgPSBzYWZlQnVmZmVyLkJ1ZmZlcjtcblxuZXhwb3J0cy5CSU5BUllfVFlQRVMgPSBbJ25vZGVidWZmZXInLCAnYXJyYXlidWZmZXInLCAnZnJhZ21lbnRzJ107XG5leHBvcnRzLkdVSUQgPSAnMjU4RUFGQTUtRTkxNC00N0RBLTk1Q0EtQzVBQjBEQzg1QjExJztcbmV4cG9ydHMuRU1QVFlfQlVGRkVSID0gQnVmZmVyLmFsbG9jKDApO1xuZXhwb3J0cy5OT09QID0gKCkgPT4ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL0NvbnN0YW50cy5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmNvbnN0IFVsdHJvbiA9IHJlcXVpcmUoJ3VsdHJvbicpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vUGVyTWVzc2FnZURlZmxhdGUnKTtcbmNvbnN0IEV2ZW50VGFyZ2V0ID0gcmVxdWlyZSgnLi9FdmVudFRhcmdldCcpO1xuY29uc3QgRXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4vRXh0ZW5zaW9ucycpO1xuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcbmNvbnN0IFJlY2VpdmVyID0gcmVxdWlyZSgnLi9SZWNlaXZlcicpO1xuY29uc3QgU2VuZGVyID0gcmVxdWlyZSgnLi9TZW5kZXInKTtcblxuY29uc3QgcHJvdG9jb2xWZXJzaW9ucyA9IFs4LCAxM107XG5jb25zdCBjbG9zZVRpbWVvdXQgPSAzMCAqIDEwMDA7IC8vIEFsbG93IDMwIHNlY29uZHMgdG8gdGVybWluYXRlIHRoZSBjb25uZWN0aW9uIGNsZWFubHkuXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgV2ViU29ja2V0LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBXZWJTb2NrZXRgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdKX0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29ubmVjdGlvbiBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICghcHJvdG9jb2xzKSB7XG4gICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b2NvbHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcm90b2NvbHMgPSBbcHJvdG9jb2xzXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHByb3RvY29scykpIHtcbiAgICAgIG9wdGlvbnMgPSBwcm90b2NvbHM7XG4gICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ09OTkVDVElORztcbiAgICB0aGlzLmJ5dGVzUmVjZWl2ZWQgPSAwO1xuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IHt9O1xuICAgIHRoaXMucHJvdG9jb2wgPSAnJztcblxuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBjb25zdGFudHMuQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2ZpbmFsaXplID0gdGhpcy5maW5hbGl6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2ZpbmFsaXplQ2FsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2VNZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLl9jbG9zZVRpbWVyID0gbnVsbDtcbiAgICB0aGlzLl9jbG9zZUNvZGUgPSBudWxsO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gbnVsbDtcbiAgICB0aGlzLl9zZW5kZXIgPSBudWxsO1xuICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG4gICAgdGhpcy5fdWx0cm9uID0gbnVsbDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFkZHJlc3MpKSB7XG4gICAgICBpbml0QXNTZXJ2ZXJDbGllbnQuY2FsbCh0aGlzLCBhZGRyZXNzWzBdLCBhZGRyZXNzWzFdLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdEFzQ2xpZW50LmNhbGwodGhpcywgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBnZXQgQ09OTkVDVElORyAoKSB7IHJldHVybiBXZWJTb2NrZXQuQ09OTkVDVElORzsgfVxuICBnZXQgQ0xPU0lORyAoKSB7IHJldHVybiBXZWJTb2NrZXQuQ0xPU0lORzsgfVxuICBnZXQgQ0xPU0VEICgpIHsgcmV0dXJuIFdlYlNvY2tldC5DTE9TRUQ7IH1cbiAgZ2V0IE9QRU4gKCkgeyByZXR1cm4gV2ViU29ja2V0Lk9QRU47IH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBidWZmZXJlZEFtb3VudCAoKSB7XG4gICAgdmFyIGFtb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5fc29ja2V0KSB7XG4gICAgICBhbW91bnQgPSB0aGlzLl9zb2NrZXQuYnVmZmVyU2l6ZSArIHRoaXMuX3NlbmRlci5fYnVmZmVyZWRCeXRlcztcbiAgICB9XG4gICAgcmV0dXJuIGFtb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGRldmlhdGVzIGZyb20gdGhlIFdIQVRXRyBpbnRlcmZhY2Ugc2luY2Ugd3MgZG9lc24ndCBzdXBwb3J0IHRoZSByZXF1aXJlZFxuICAgKiBkZWZhdWx0IFwiYmxvYlwiIHR5cGUgKGluc3RlYWQgd2UgZGVmaW5lIGEgY3VzdG9tIFwibm9kZWJ1ZmZlclwiIHR5cGUpLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IGJpbmFyeVR5cGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9iaW5hcnlUeXBlO1xuICB9XG5cbiAgc2V0IGJpbmFyeVR5cGUgKHR5cGUpIHtcbiAgICBpZiAoY29uc3RhbnRzLkJJTkFSWV9UWVBFUy5pbmRleE9mKHR5cGUpIDwgMCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IHR5cGU7XG5cbiAgICAvL1xuICAgIC8vIEFsbG93IHRvIGNoYW5nZSBgYmluYXJ5VHlwZWAgb24gdGhlIGZseS5cbiAgICAvL1xuICAgIGlmICh0aGlzLl9yZWNlaXZlcikgdGhpcy5fcmVjZWl2ZXIuX2JpbmFyeVR5cGUgPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCB0aGUgc29ja2V0IGFuZCB0aGUgaW50ZXJuYWwgcmVzb3VyY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge25ldC5Tb2NrZXR9IHNvY2tldCBUaGUgbmV0d29yayBzb2NrZXQgYmV0d2VlbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGhlYWQgVGhlIGZpcnN0IHBhY2tldCBvZiB0aGUgdXBncmFkZWQgc3RyZWFtXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRTb2NrZXQgKHNvY2tldCwgaGVhZCkge1xuICAgIHNvY2tldC5zZXRUaW1lb3V0KDApO1xuICAgIHNvY2tldC5zZXROb0RlbGF5KCk7XG5cbiAgICB0aGlzLl9yZWNlaXZlciA9IG5ldyBSZWNlaXZlcih0aGlzLmV4dGVuc2lvbnMsIHRoaXMuX21heFBheWxvYWQsIHRoaXMuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5fc2VuZGVyID0gbmV3IFNlbmRlcihzb2NrZXQsIHRoaXMuZXh0ZW5zaW9ucyk7XG4gICAgdGhpcy5fdWx0cm9uID0gbmV3IFVsdHJvbihzb2NrZXQpO1xuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIC8vIHNvY2tldCBjbGVhbnVwIGhhbmRsZXJzXG4gICAgdGhpcy5fdWx0cm9uLm9uKCdjbG9zZScsIHRoaXMuX2ZpbmFsaXplKTtcbiAgICB0aGlzLl91bHRyb24ub24oJ2Vycm9yJywgdGhpcy5fZmluYWxpemUpO1xuICAgIHRoaXMuX3VsdHJvbi5vbignZW5kJywgdGhpcy5fZmluYWxpemUpO1xuXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGhlYWQgaXMgYWRkZWQgdG8gdGhlIHJlY2VpdmVyXG4gICAgaWYgKGhlYWQubGVuZ3RoID4gMCkgc29ja2V0LnVuc2hpZnQoaGVhZCk7XG5cbiAgICAvLyBzdWJzZXF1ZW50IHBhY2tldHMgYXJlIHB1c2hlZCB0byB0aGUgcmVjZWl2ZXJcbiAgICB0aGlzLl91bHRyb24ub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5ieXRlc1JlY2VpdmVkICs9IGRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5fcmVjZWl2ZXIuYWRkKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVjZWl2ZXIgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWNlaXZlci5vbm1lc3NhZ2UgPSAoZGF0YSkgPT4gdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSk7XG4gICAgdGhpcy5fcmVjZWl2ZXIub25waW5nID0gKGRhdGEpID0+IHtcbiAgICAgIHRoaXMucG9uZyhkYXRhLCAhdGhpcy5faXNTZXJ2ZXIsIHRydWUpO1xuICAgICAgdGhpcy5lbWl0KCdwaW5nJywgZGF0YSk7XG4gICAgfTtcbiAgICB0aGlzLl9yZWNlaXZlci5vbnBvbmcgPSAoZGF0YSkgPT4gdGhpcy5lbWl0KCdwb25nJywgZGF0YSk7XG4gICAgdGhpcy5fcmVjZWl2ZXIub25jbG9zZSA9IChjb2RlLCByZWFzb24pID0+IHtcbiAgICAgIHRoaXMuX2Nsb3NlTWVzc2FnZSA9IHJlYXNvbjtcbiAgICAgIHRoaXMuX2Nsb3NlQ29kZSA9IGNvZGU7XG4gICAgICB0aGlzLmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gICAgfTtcbiAgICB0aGlzLl9yZWNlaXZlci5vbmVycm9yID0gKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAvLyBjbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSByZWNlaXZlciByZXBvcnRzIGEgSHlCaSBlcnJvciBjb2RlXG4gICAgICB0aGlzLmNsb3NlKGNvZGUsICcnKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgfTtcblxuICAgIC8vIHNlbmRlciBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuX3NlbmRlci5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKDEwMDIsICcnKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgfTtcblxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5PUEVOO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFuIHVwIGFuZCByZWxlYXNlIGludGVybmFsIHJlc291cmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxFcnJvcil9IEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBhbiBlcnJvciBvY2N1cnJlZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZmluYWxpemUgKGVycm9yKSB7XG4gICAgaWYgKHRoaXMuX2ZpbmFsaXplQ2FsbGVkKSByZXR1cm47XG5cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICB0aGlzLl9maW5hbGl6ZUNhbGxlZCA9IHRydWU7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fY2xvc2VUaW1lcik7XG4gICAgdGhpcy5fY2xvc2VUaW1lciA9IG51bGw7XG5cbiAgICAvL1xuICAgIC8vIElmIHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWQgYWJub3JtYWxseSAod2l0aCBhbiBlcnJvciksIG9yIGlmIHRoZSBjbG9zZVxuICAgIC8vIGNvbnRyb2wgZnJhbWUgd2FzIG1hbGZvcm1lZCBvciBub3QgcmVjZWl2ZWQgdGhlbiB0aGUgY2xvc2UgY29kZSBtdXN0IGJlXG4gICAgLy8gMTAwNi5cbiAgICAvL1xuICAgIGlmIChlcnJvcikgdGhpcy5fY2xvc2VDb2RlID0gMTAwNjtcblxuICAgIGlmICh0aGlzLl9zb2NrZXQpIHtcbiAgICAgIHRoaXMuX3VsdHJvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9zb2NrZXQub24oJ2Vycm9yJywgZnVuY3Rpb24gb25lcnJvciAoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZXJyb3IpIHRoaXMuX3NvY2tldC5lbmQoKTtcbiAgICAgIGVsc2UgdGhpcy5fc29ja2V0LmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3VsdHJvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NlbmRlcikge1xuICAgICAgdGhpcy5fc2VuZGVyID0gdGhpcy5fc2VuZGVyLm9uZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yZWNlaXZlcikge1xuICAgICAgdGhpcy5fcmVjZWl2ZXIuY2xlYW51cCgoKSA9PiB0aGlzLmVtaXRDbG9zZSgpKTtcbiAgICAgIHRoaXMuX3JlY2VpdmVyID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0Q2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB0aGUgYGNsb3NlYCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGVtaXRDbG9zZSAoKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlIHx8IDEwMDYsIHRoaXMuX2Nsb3NlTWVzc2FnZSB8fCAnJyk7XG5cbiAgICBpZiAodGhpcy5leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICB0aGlzLmV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0uY2xlYW51cCgpO1xuICAgIH1cblxuICAgIHRoaXMuZXh0ZW5zaW9ucyA9IG51bGw7XG5cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHRoaXMub24oJ2Vycm9yJywgY29uc3RhbnRzLk5PT1ApOyAvLyBDYXRjaCBhbGwgZXJyb3JzIGFmdGVyIHRoaXMuXG4gIH1cblxuICAvKipcbiAgICogUGF1c2UgdGhlIHNvY2tldCBzdHJlYW0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBhdXNlICgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikgdGhyb3cgbmV3IEVycm9yKCdub3Qgb3BlbmVkJyk7XG5cbiAgICB0aGlzLl9zb2NrZXQucGF1c2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGhlIHNvY2tldCBzdHJlYW1cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVzdW1lICgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikgdGhyb3cgbmV3IEVycm9yKCdub3Qgb3BlbmVkJyk7XG5cbiAgICB0aGlzLl9zb2NrZXQucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBjbG9zaW5nIGhhbmRzaGFrZS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgU3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZ1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSBBIHN0cmluZyBleHBsYWluaW5nIHdoeSB0aGUgY29ubmVjdGlvbiBpcyBjbG9zaW5nXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlIChjb2RlLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBpZiAodGhpcy5fcmVxICYmICF0aGlzLl9yZXEuYWJvcnRlZCkge1xuICAgICAgICB0aGlzLl9yZXEuYWJvcnQoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignY2xvc2VkIGJlZm9yZSB0aGUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCcpKTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lORykge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlQ29kZSAmJiB0aGlzLl9zb2NrZXQpIHRoaXMuX3NvY2tldC5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICB0aGlzLl9zZW5kZXIuY2xvc2UoY29kZSwgZGF0YSwgIXRoaXMuX2lzU2VydmVyLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcblxuICAgICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgICBpZiAodGhpcy5fY2xvc2VDb2RlKSB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBjb25uZWN0aW9uIGlzIGNsZWFuZWQgdXAgZXZlbiB3aGVuIHRoZSBjbG9zaW5nXG4gICAgICAgIC8vIGhhbmRzaGFrZSBmYWlscy5cbiAgICAgICAgLy9cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Nsb3NlVGltZXIpO1xuICAgICAgICB0aGlzLl9jbG9zZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLl9maW5hbGl6ZSwgY2xvc2VUaW1lb3V0LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcGluZyBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hc2sgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmFpbFNpbGVudGx5IEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byB0aHJvdyBpZiBgcmVhZHlTdGF0ZWAgaXNuJ3QgYE9QRU5gXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcgKGRhdGEsIG1hc2ssIGZhaWxTaWxlbnRseSkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBpZiAoZmFpbFNpbGVudGx5KSByZXR1cm47XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBvcGVuZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBpbmcoZGF0YSB8fCBjb25zdGFudHMuRU1QVFlfQlVGRkVSLCBtYXNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcG9uZyBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hc2sgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmFpbFNpbGVudGx5IEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byB0aHJvdyBpZiBgcmVhZHlTdGF0ZWAgaXNuJ3QgYE9QRU5gXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBvbmcgKGRhdGEsIG1hc2ssIGZhaWxTaWxlbnRseSkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBpZiAoZmFpbFNpbGVudGx5KSByZXR1cm47XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBvcGVuZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBvbmcoZGF0YSB8fCBjb25zdGFudHMuRU1QVFlfQlVGRkVSLCBtYXNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgZGF0YSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuY29tcHJlc3MgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuYmluYXJ5IFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnkgb3IgdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZmluIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmcmFnbWVudCBpcyB0aGUgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gZGF0YSBpcyB3cml0dGVuIG91dFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZW5kIChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBpZiAoY2IpIGNiKG5ldyBFcnJvcignbm90IG9wZW5lZCcpKTtcbiAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdub3Qgb3BlbmVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGJpbmFyeTogdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnLFxuICAgICAgbWFzazogIXRoaXMuX2lzU2VydmVyLFxuICAgICAgY29tcHJlc3M6IHRydWUsXG4gICAgICBmaW46IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fc2VuZGVyLnNlbmQoZGF0YSB8fCBjb25zdGFudHMuRU1QVFlfQlVGRkVSLCBvcHRzLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2libHkgY2xvc2UgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHRlcm1pbmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBpZiAodGhpcy5fcmVxICYmICF0aGlzLl9yZXEuYWJvcnRlZCkge1xuICAgICAgICB0aGlzLl9yZXEuYWJvcnQoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignY2xvc2VkIGJlZm9yZSB0aGUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCcpKTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpbmFsaXplKHRydWUpO1xuICB9XG59XG5cbldlYlNvY2tldC5DT05ORUNUSU5HID0gMDtcbldlYlNvY2tldC5PUEVOID0gMTtcbldlYlNvY2tldC5DTE9TSU5HID0gMjtcbldlYlNvY2tldC5DTE9TRUQgPSAzO1xuXG4vL1xuLy8gQWRkIHRoZSBgb25vcGVuYCwgYG9uZXJyb3JgLCBgb25jbG9zZWAsIGFuZCBgb25tZXNzYWdlYCBhdHRyaWJ1dGVzLlxuLy8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2NvbW1zLmh0bWwjdGhlLXdlYnNvY2tldC1pbnRlcmZhY2Vcbi8vXG5bJ29wZW4nLCAnZXJyb3InLCAnY2xvc2UnLCAnbWVzc2FnZSddLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgYG9uJHttZXRob2R9YCwge1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgbGlzdGVuZXIgb2YgdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IFRoZSBldmVudCBsaXN0ZW5lciBvciBgdW5kZWZpbmVkYFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgKCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMobWV0aG9kKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaV0uX2xpc3RlbmVyKSByZXR1cm4gbGlzdGVuZXJzW2ldLl9saXN0ZW5lcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxpc3RlbmVyIGZvciB0aGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gYWRkXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNldCAobGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzKG1ldGhvZCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL1xuICAgICAgICAvLyBSZW1vdmUgb25seSB0aGUgbGlzdGVuZXJzIGFkZGVkIHZpYSBgYWRkRXZlbnRMaXN0ZW5lcmAuXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaV0uX2xpc3RlbmVyKSB0aGlzLnJlbW92ZUxpc3RlbmVyKG1ldGhvZCwgbGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihtZXRob2QsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbldlYlNvY2tldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXI7XG5XZWJTb2NrZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldDtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgV2ViU29ja2V0IHNlcnZlciBjbGllbnQuXG4gKlxuICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICogQHBhcmFtIHtuZXQuU29ja2V0fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFdlYlNvY2tldCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5wcm90b2NvbFZlcnNpb24gVGhlIFdlYlNvY2tldCBwcm90b2NvbCB2ZXJzaW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5leHRlbnNpb25zIFRoZSBuZWdvdGlhdGVkIGV4dGVuc2lvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm1heFBheWxvYWQgVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIHNpemVcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnByb3RvY29sIFRoZSBjaG9zZW4gc3VicHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXRBc1NlcnZlckNsaWVudCAoc29ja2V0LCBoZWFkLCBvcHRpb25zKSB7XG4gIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gb3B0aW9ucy5wcm90b2NvbFZlcnNpb247XG4gIHRoaXMuX21heFBheWxvYWQgPSBvcHRpb25zLm1heFBheWxvYWQ7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IG9wdGlvbnMuZXh0ZW5zaW9ucztcbiAgdGhpcy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2w7XG5cbiAgdGhpcy5faXNTZXJ2ZXIgPSB0cnVlO1xuXG4gIHRoaXMuc2V0U29ja2V0KHNvY2tldCwgaGVhZCk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIFdlYlNvY2tldCBjbGllbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgVGhlIGxpc3Qgb2Ygc3VicHJvdG9jb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnByb3RvY29sIFZhbHVlIG9mIHRoZSBgU2VjLVdlYlNvY2tldC1Qcm90b2NvbGAgaGVhZGVyXG4gKiBAcGFyYW0geyhCb29sZWFufE9iamVjdCl9IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgRW5hYmxlL2Rpc2FibGUgcGVybWVzc2FnZS1kZWZsYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5oYW5kc2hha2VUaW1lb3V0IFRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgaGFuZHNoYWtlIHJlcXVlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmxvY2FsQWRkcmVzcyBMb2NhbCBpbnRlcmZhY2UgdG8gYmluZCBmb3IgbmV0d29yayBjb25uZWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucHJvdG9jb2xWZXJzaW9uIFZhbHVlIG9mIHRoZSBgU2VjLVdlYlNvY2tldC1WZXJzaW9uYCBoZWFkZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmhlYWRlcnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgcmVxdWVzdCBoZWFkZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5vcmlnaW4gVmFsdWUgb2YgdGhlIGBPcmlnaW5gIG9yIGBTZWMtV2ViU29ja2V0LU9yaWdpbmAgaGVhZGVyXG4gKiBAcGFyYW0ge2h0dHAuQWdlbnR9IG9wdGlvbnMuYWdlbnQgVXNlIHRoZSBzcGVjaWZpZWQgQWdlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmhvc3QgVmFsdWUgb2YgdGhlIGBIb3N0YCBoZWFkZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLmZhbWlseSBJUCBhZGRyZXNzIGZhbWlseSB0byB1c2UgZHVyaW5nIGhvc3RuYW1lIGxvb2t1cCAoNCBvciA2KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eSBBIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHRoZSBzZXJ2ZXIgaG9zdG5hbWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgVmVyaWZ5IG9yIG5vdCB0aGUgc2VydmVyIGNlcnRpZmljYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5wYXNzcGhyYXNlIFRoZSBwYXNzcGhyYXNlIGZvciB0aGUgcHJpdmF0ZSBrZXkgb3IgcGZ4XG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5jaXBoZXJzIFRoZSBjaXBoZXJzIHRvIHVzZSBvciBleGNsdWRlXG4gKiBAcGFyYW0geyhTdHJpbmd8U3RyaW5nW118QnVmZmVyfEJ1ZmZlcltdKX0gb3B0aW9ucy5jZXJ0IFRoZSBjZXJ0aWZpY2F0ZSBrZXlcbiAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXXxCdWZmZXJ8QnVmZmVyW10pfSBvcHRpb25zLmtleSBUaGUgcHJpdmF0ZSBrZXlcbiAqIEBwYXJhbSB7KFN0cmluZ3xCdWZmZXIpfSBvcHRpb25zLnBmeCBUaGUgcHJpdmF0ZSBrZXksIGNlcnRpZmljYXRlLCBhbmQgQ0EgY2VydHNcbiAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXXxCdWZmZXJ8QnVmZmVyW10pfSBvcHRpb25zLmNhIFRydXN0ZWQgY2VydGlmaWNhdGVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0QXNDbGllbnQgKGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcHJvdG9jb2xWZXJzaW9uOiBwcm90b2NvbFZlcnNpb25zWzFdLFxuICAgIHByb3RvY29sOiBwcm90b2NvbHMuam9pbignLCcpLFxuICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB0cnVlLFxuICAgIGhhbmRzaGFrZVRpbWVvdXQ6IG51bGwsXG4gICAgbG9jYWxBZGRyZXNzOiBudWxsLFxuICAgIGhlYWRlcnM6IG51bGwsXG4gICAgZmFtaWx5OiBudWxsLFxuICAgIG9yaWdpbjogbnVsbCxcbiAgICBhZ2VudDogbnVsbCxcbiAgICBob3N0OiBudWxsLFxuXG4gICAgLy9cbiAgICAvLyBTU0wgb3B0aW9ucy5cbiAgICAvL1xuICAgIGNoZWNrU2VydmVySWRlbnRpdHk6IG51bGwsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBudWxsLFxuICAgIHBhc3NwaHJhc2U6IG51bGwsXG4gICAgY2lwaGVyczogbnVsbCxcbiAgICBjZXJ0OiBudWxsLFxuICAgIGtleTogbnVsbCxcbiAgICBwZng6IG51bGwsXG4gICAgY2E6IG51bGxcbiAgfSwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb3RvY29sVmVyc2lvbnMuaW5kZXhPZihvcHRpb25zLnByb3RvY29sVmVyc2lvbikgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHVuc3VwcG9ydGVkIHByb3RvY29sIHZlcnNpb246ICR7b3B0aW9ucy5wcm90b2NvbFZlcnNpb259IGAgK1xuICAgICAgYChzdXBwb3J0ZWQgdmVyc2lvbnM6ICR7cHJvdG9jb2xWZXJzaW9ucy5qb2luKCcsICcpfSlgXG4gICAgKTtcbiAgfVxuXG4gIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gb3B0aW9ucy5wcm90b2NvbFZlcnNpb247XG4gIHRoaXMuX2lzU2VydmVyID0gZmFsc2U7XG4gIHRoaXMudXJsID0gYWRkcmVzcztcblxuICBjb25zdCBzZXJ2ZXJVcmwgPSB1cmwucGFyc2UoYWRkcmVzcyk7XG4gIGNvbnN0IGlzVW5peFNvY2tldCA9IHNlcnZlclVybC5wcm90b2NvbCA9PT0gJ3dzK3VuaXg6JztcblxuICBpZiAoIXNlcnZlclVybC5ob3N0ICYmICghaXNVbml4U29ja2V0IHx8ICFzZXJ2ZXJVcmwucGF0aCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdXJsJyk7XG4gIH1cblxuICBjb25zdCBpc1NlY3VyZSA9IHNlcnZlclVybC5wcm90b2NvbCA9PT0gJ3dzczonIHx8IHNlcnZlclVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gIGNvbnN0IGtleSA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICBjb25zdCBodHRwT2JqID0gaXNTZWN1cmUgPyBodHRwcyA6IGh0dHA7XG5cbiAgLy9cbiAgLy8gUHJlcGFyZSBleHRlbnNpb25zLlxuICAvL1xuICBjb25zdCBleHRlbnNpb25zT2ZmZXIgPSB7fTtcbiAgdmFyIHBlck1lc3NhZ2VEZWZsYXRlO1xuXG4gIGlmIChvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgcGVyTWVzc2FnZURlZmxhdGUgPSBuZXcgUGVyTWVzc2FnZURlZmxhdGUoXG4gICAgICBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlICE9PSB0cnVlID8gb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSA6IHt9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGV4dGVuc2lvbnNPZmZlcltQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9IHBlck1lc3NhZ2VEZWZsYXRlLm9mZmVyKCk7XG4gIH1cblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBwb3J0OiBzZXJ2ZXJVcmwucG9ydCB8fCAoaXNTZWN1cmUgPyA0NDMgOiA4MCksXG4gICAgaG9zdDogc2VydmVyVXJsLmhvc3RuYW1lLFxuICAgIHBhdGg6ICcvJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogb3B0aW9ucy5wcm90b2NvbFZlcnNpb24sXG4gICAgICAnU2VjLVdlYlNvY2tldC1LZXknOiBrZXksXG4gICAgICAnQ29ubmVjdGlvbic6ICdVcGdyYWRlJyxcbiAgICAgICdVcGdyYWRlJzogJ3dlYnNvY2tldCdcbiAgICB9XG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuaGVhZGVycykgT2JqZWN0LmFzc2lnbihyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpO1xuICBpZiAoT2JqZWN0LmtleXMoZXh0ZW5zaW9uc09mZmVyKS5sZW5ndGgpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMnXSA9IEV4dGVuc2lvbnMuZm9ybWF0KGV4dGVuc2lvbnNPZmZlcik7XG4gIH1cbiAgaWYgKG9wdGlvbnMucHJvdG9jb2wpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LVByb3RvY29sJ10gPSBvcHRpb25zLnByb3RvY29sO1xuICB9XG4gIGlmIChvcHRpb25zLm9yaWdpbikge1xuICAgIGlmIChvcHRpb25zLnByb3RvY29sVmVyc2lvbiA8IDEzKSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LU9yaWdpbiddID0gb3B0aW9ucy5vcmlnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuT3JpZ2luID0gb3B0aW9ucy5vcmlnaW47XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmhvc3QpIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuSG9zdCA9IG9wdGlvbnMuaG9zdDtcbiAgaWYgKHNlcnZlclVybC5hdXRoKSByZXF1ZXN0T3B0aW9ucy5hdXRoID0gc2VydmVyVXJsLmF1dGg7XG5cbiAgaWYgKG9wdGlvbnMubG9jYWxBZGRyZXNzKSByZXF1ZXN0T3B0aW9ucy5sb2NhbEFkZHJlc3MgPSBvcHRpb25zLmxvY2FsQWRkcmVzcztcbiAgaWYgKG9wdGlvbnMuZmFtaWx5KSByZXF1ZXN0T3B0aW9ucy5mYW1pbHkgPSBvcHRpb25zLmZhbWlseTtcblxuICBpZiAoaXNVbml4U29ja2V0KSB7XG4gICAgY29uc3QgcGFydHMgPSBzZXJ2ZXJVcmwucGF0aC5zcGxpdCgnOicpO1xuXG4gICAgcmVxdWVzdE9wdGlvbnMuc29ja2V0UGF0aCA9IHBhcnRzWzBdO1xuICAgIHJlcXVlc3RPcHRpb25zLnBhdGggPSBwYXJ0c1sxXTtcbiAgfSBlbHNlIGlmIChzZXJ2ZXJVcmwucGF0aCkge1xuICAgIC8vXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgcGF0aCBzdGFydHMgd2l0aCBgL2AuXG4gICAgLy9cbiAgICBpZiAoc2VydmVyVXJsLnBhdGguY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLnBhdGggPSBgLyR7c2VydmVyVXJsLnBhdGh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdE9wdGlvbnMucGF0aCA9IHNlcnZlclVybC5wYXRoO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhZ2VudCA9IG9wdGlvbnMuYWdlbnQ7XG5cbiAgLy9cbiAgLy8gQSBjdXN0b20gYWdlbnQgaXMgcmVxdWlyZWQgZm9yIHRoZXNlIG9wdGlvbnMuXG4gIC8vXG4gIGlmIChcbiAgICBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCAhPSBudWxsIHx8XG4gICAgb3B0aW9ucy5jaGVja1NlcnZlcklkZW50aXR5IHx8XG4gICAgb3B0aW9ucy5wYXNzcGhyYXNlIHx8XG4gICAgb3B0aW9ucy5jaXBoZXJzIHx8XG4gICAgb3B0aW9ucy5jZXJ0IHx8XG4gICAgb3B0aW9ucy5rZXkgfHxcbiAgICBvcHRpb25zLnBmeCB8fFxuICAgIG9wdGlvbnMuY2FcbiAgKSB7XG4gICAgaWYgKG9wdGlvbnMucGFzc3BocmFzZSkgcmVxdWVzdE9wdGlvbnMucGFzc3BocmFzZSA9IG9wdGlvbnMucGFzc3BocmFzZTtcbiAgICBpZiAob3B0aW9ucy5jaXBoZXJzKSByZXF1ZXN0T3B0aW9ucy5jaXBoZXJzID0gb3B0aW9ucy5jaXBoZXJzO1xuICAgIGlmIChvcHRpb25zLmNlcnQpIHJlcXVlc3RPcHRpb25zLmNlcnQgPSBvcHRpb25zLmNlcnQ7XG4gICAgaWYgKG9wdGlvbnMua2V5KSByZXF1ZXN0T3B0aW9ucy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICBpZiAob3B0aW9ucy5wZngpIHJlcXVlc3RPcHRpb25zLnBmeCA9IG9wdGlvbnMucGZ4O1xuICAgIGlmIChvcHRpb25zLmNhKSByZXF1ZXN0T3B0aW9ucy5jYSA9IG9wdGlvbnMuY2E7XG4gICAgaWYgKG9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eSkge1xuICAgICAgcmVxdWVzdE9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eSA9IG9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkICE9IG51bGwpIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkO1xuICAgIH1cblxuICAgIGlmICghYWdlbnQpIGFnZW50ID0gbmV3IGh0dHBPYmouQWdlbnQocmVxdWVzdE9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKGFnZW50KSByZXF1ZXN0T3B0aW9ucy5hZ2VudCA9IGFnZW50O1xuXG4gIHRoaXMuX3JlcSA9IGh0dHBPYmouZ2V0KHJlcXVlc3RPcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5oYW5kc2hha2VUaW1lb3V0KSB7XG4gICAgdGhpcy5fcmVxLnNldFRpbWVvdXQob3B0aW9ucy5oYW5kc2hha2VUaW1lb3V0LCAoKSA9PiB7XG4gICAgICB0aGlzLl9yZXEuYWJvcnQoKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ29wZW5pbmcgaGFuZHNoYWtlIGhhcyB0aW1lZCBvdXQnKSk7XG4gICAgICB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5fcmVxLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgIGlmICh0aGlzLl9yZXEuYWJvcnRlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxID0gbnVsbDtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gIH0pO1xuXG4gIHRoaXMuX3JlcS5vbigncmVzcG9uc2UnLCAocmVzKSA9PiB7XG4gICAgaWYgKCF0aGlzLmVtaXQoJ3VuZXhwZWN0ZWQtcmVzcG9uc2UnLCB0aGlzLl9yZXEsIHJlcykpIHtcbiAgICAgIHRoaXMuX3JlcS5hYm9ydCgpO1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcihgdW5leHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2UgKCR7cmVzLnN0YXR1c0NvZGV9KWApKTtcbiAgICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLl9yZXEub24oJ3VwZ3JhZGUnLCAocmVzLCBzb2NrZXQsIGhlYWQpID0+IHtcbiAgICB0aGlzLmVtaXQoJ2hlYWRlcnMnLCByZXMuaGVhZGVycywgcmVzKTtcblxuICAgIC8vXG4gICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgY2xvc2VkIHRoZSBjb25uZWN0aW9uIGZyb20gYSBsaXN0ZW5lciBvZiB0aGUgYGhlYWRlcnNgXG4gICAgLy8gZXZlbnQuXG4gICAgLy9cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuQ09OTkVDVElORykgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxID0gbnVsbDtcblxuICAgIGNvbnN0IGRpZ2VzdCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgY29uc3RhbnRzLkdVSUQsICdiaW5hcnknKVxuICAgICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgICBpZiAocmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtYWNjZXB0J10gIT09IGRpZ2VzdCkge1xuICAgICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ2ludmFsaWQgc2VydmVyIGtleScpKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlclByb3QgPSByZXMuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddO1xuICAgIGNvbnN0IHByb3RMaXN0ID0gKG9wdGlvbnMucHJvdG9jb2wgfHwgJycpLnNwbGl0KC8sICovKTtcbiAgICB2YXIgcHJvdEVycm9yO1xuXG4gICAgaWYgKCFvcHRpb25zLnByb3RvY29sICYmIHNlcnZlclByb3QpIHtcbiAgICAgIHByb3RFcnJvciA9ICdzZXJ2ZXIgc2VudCBhIHN1YnByb3RvY29sIGV2ZW4gdGhvdWdoIG5vbmUgcmVxdWVzdGVkJztcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJvdG9jb2wgJiYgIXNlcnZlclByb3QpIHtcbiAgICAgIHByb3RFcnJvciA9ICdzZXJ2ZXIgc2VudCBubyBzdWJwcm90b2NvbCBldmVuIHRob3VnaCByZXF1ZXN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc2VydmVyUHJvdCAmJiBwcm90TGlzdC5pbmRleE9mKHNlcnZlclByb3QpID09PSAtMSkge1xuICAgICAgcHJvdEVycm9yID0gJ3NlcnZlciByZXNwb25kZWQgd2l0aCBhbiBpbnZhbGlkIHByb3RvY29sJztcbiAgICB9XG5cbiAgICBpZiAocHJvdEVycm9yKSB7XG4gICAgICBzb2NrZXQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcihwcm90RXJyb3IpKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzZXJ2ZXJQcm90KSB0aGlzLnByb3RvY29sID0gc2VydmVyUHJvdDtcblxuICAgIGNvbnN0IHNlcnZlckV4dGVuc2lvbnMgPSBFeHRlbnNpb25zLnBhcnNlKHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnMnXSk7XG5cbiAgICBpZiAocGVyTWVzc2FnZURlZmxhdGUgJiYgc2VydmVyRXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuYWNjZXB0KHNlcnZlckV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ2ludmFsaWQgZXh0ZW5zaW9uIHBhcmFtZXRlcicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9IHBlck1lc3NhZ2VEZWZsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U29ja2V0KHNvY2tldCwgaGVhZCk7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9XZWJTb2NrZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBbiBhdXRvIGluY3JlbWVudGluZyBpZCB3aGljaCB3ZSBjYW4gdXNlIHRvIGNyZWF0ZSBcInVuaXF1ZVwiIFVsdHJvbiBpbnN0YW5jZXNcbiAqIHNvIHdlIGNhbiB0cmFjayB0aGUgZXZlbnQgZW1pdHRlcnMgdGhhdCBhcmUgYWRkZWQgdGhyb3VnaCB0aGUgVWx0cm9uXG4gKiBpbnRlcmZhY2UuXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBpZCA9IDA7XG5cbi8qKlxuICogVWx0cm9uIGlzIGhpZ2gtaW50ZWxsaWdlbmNlIHJvYm90LiBJdCBnYXRoZXJzIGludGVsbGlnZW5jZSBzbyBpdCBjYW4gc3RhcnQgaW1wcm92aW5nXG4gKiB1cG9uIGhpcyBydWRpbWVudGFyeSBkZXNpZ24uIEl0IHdpbGwgbGVhcm4gZnJvbSB5b3VyIEV2ZW50RW1pdHRpbmcgcGF0dGVybnNcbiAqIGFuZCBleHRlcm1pbmF0ZSB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVlIEV2ZW50RW1pdHRlciBpbnN0YW5jZSB3ZSBuZWVkIHRvIHdyYXAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBVbHRyb24oZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFVsdHJvbikpIHJldHVybiBuZXcgVWx0cm9uKGVlKTtcblxuICB0aGlzLmlkID0gaWQrKztcbiAgdGhpcy5lZSA9IGVlO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbmV3IEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0b259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7VWx0cm9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVWx0cm9uLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICBmbi5fX3VsdHJvbiA9IHRoaXMuaWQ7XG4gIHRoaXMuZWUub24oZXZlbnQsIGZuLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIEFkZCBhbiBFdmVudExpc3RlbmVyIHRoYXQncyBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7VWx0cm9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVWx0cm9uLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgZm4uX191bHRyb24gPSB0aGlzLmlkO1xuICB0aGlzLmVlLm9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgd2UgYXNzaWduZWQgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcmV0dXJucyB7VWx0cm9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVWx0cm9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzXG4gICAgLCBlZSA9IHRoaXMuZWVcbiAgICAsIGV2ZW50O1xuXG4gIC8vXG4gIC8vIFdoZW4gbm8gZXZlbnQgbmFtZXMgYXJlIHByb3ZpZGVkIHdlIGFzc3VtZSB0aGF0IHdlIG5lZWQgdG8gY2xlYXIgYWxsIHRoZVxuICAvLyBldmVudHMgdGhhdCB3ZXJlIGFzc2lnbmVkIHRocm91Z2ggdXMuXG4gIC8vXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICBhcmdzID0gYXJnc1swXS5zcGxpdCgvWywgXSsvKTtcbiAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICBpZiAoZWUuZXZlbnROYW1lcykge1xuICAgICAgYXJncyA9IGVlLmV2ZW50TmFtZXMoKTtcbiAgICB9IGVsc2UgaWYgKGVlLl9ldmVudHMpIHtcbiAgICAgIGFyZ3MgPSBbXTtcblxuICAgICAgZm9yIChldmVudCBpbiBlZS5fZXZlbnRzKSB7XG4gICAgICAgIGlmIChoYXMuY2FsbChlZS5fZXZlbnRzLCBldmVudCkpIGFyZ3MucHVzaChldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGVlLl9ldmVudHMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gZWUubGlzdGVuZXJzKGFyZ3NbaV0pO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaXN0ZW5lcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGV2ZW50ID0gbGlzdGVuZXJzW2pdO1xuXG4gICAgICAvL1xuICAgICAgLy8gT25jZSBsaXN0ZW5lcnMgaGF2ZSBhIGBsaXN0ZW5lcmAgcHJvcGVydHkgdGhhdCBzdG9yZXMgdGhlIHJlYWwgbGlzdGVuZXJcbiAgICAgIC8vIGluIHRoZSBFdmVudEVtaXR0ZXIgdGhhdCBzaGlwcyB3aXRoIE5vZGUuanMuXG4gICAgICAvL1xuICAgICAgaWYgKGV2ZW50Lmxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChldmVudC5saXN0ZW5lci5fX3VsdHJvbiAhPT0gdGhpcy5pZCkgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBldmVudC5saXN0ZW5lci5fX3VsdHJvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5fX3VsdHJvbiAhPT0gdGhpcy5pZCkgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBldmVudC5fX3VsdHJvbjtcbiAgICAgIH1cblxuICAgICAgZWUucmVtb3ZlTGlzdGVuZXIoYXJnc1tpXSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEZXN0cm95IHRoZSBVbHRyb24gaW5zdGFuY2UsIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGFuZCByZWxlYXNlIGFsbCByZWZlcmVuY2VzLlxuICpcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVWx0cm9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgaWYgKCF0aGlzLmVlKSByZXR1cm4gZmFsc2U7XG5cbiAgdGhpcy5yZW1vdmUoKTtcbiAgdGhpcy5lZSA9IG51bGw7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xubW9kdWxlLmV4cG9ydHMgPSBVbHRyb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdWx0cm9uL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJsXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQYXJzZSB0aGUgYFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9uc2AgaGVhZGVyIGludG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwYXJzZWQgb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IHBhcnNlID0gKHZhbHVlKSA9PiB7XG4gIHZhbHVlID0gdmFsdWUgfHwgJyc7XG5cbiAgY29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXG4gIHZhbHVlLnNwbGl0KCcsJykuZm9yRWFjaCgodikgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHYuc3BsaXQoJzsnKTtcbiAgICBjb25zdCB0b2tlbiA9IHBhcmFtcy5zaGlmdCgpLnRyaW0oKTtcbiAgICBjb25zdCBwYXJhbXNMaXN0ID0gZXh0ZW5zaW9uc1t0b2tlbl0gPSBleHRlbnNpb25zW3Rva2VuXSB8fCBbXTtcbiAgICBjb25zdCBwYXJzZWRQYXJhbXMgPSB7fTtcblxuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBwYXJhbS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gcGFydHNbMV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVucXVvdGUgdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAocGFyc2VkUGFyYW1zW2tleV0gPSBwYXJzZWRQYXJhbXNba2V5XSB8fCBbXSkucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBwYXJhbXNMaXN0LnB1c2gocGFyc2VkUGFyYW1zKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGV4dGVuc2lvbnM7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBhIHBhcnNlZCBgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zYCBoZWFkZXIgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBvYmplY3QgdG8gZm9ybWF0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdmFsdWVcbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgZm9ybWF0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKCh0b2tlbikgPT4ge1xuICAgIHZhciBwYXJhbXNMaXN0ID0gdmFsdWVbdG9rZW5dO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJhbXNMaXN0KSkgcGFyYW1zTGlzdCA9IFtwYXJhbXNMaXN0XTtcbiAgICByZXR1cm4gcGFyYW1zTGlzdC5tYXAoKHBhcmFtcykgPT4ge1xuICAgICAgcmV0dXJuIFt0b2tlbl0uY29uY2F0KE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiB7XG4gICAgICAgIHZhciBwID0gcGFyYW1zW2tdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocCkpIHAgPSBbcF07XG4gICAgICAgIHJldHVybiBwLm1hcCgodikgPT4gdiA9PT0gdHJ1ZSA/IGsgOiBgJHtrfT0ke3Z9YCkuam9pbignOyAnKTtcbiAgICAgIH0pKS5qb2luKCc7ICcpO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZm9ybWF0LCBwYXJzZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9FeHRlbnNpb25zLmpzIiwiLyohXG4gKiB3czogYSBub2RlLmpzIHdlYnNvY2tldCBjbGllbnRcbiAqIENvcHlyaWdodChjKSAyMDExIEVpbmFyIE90dG8gU3Rhbmd2aWsgPGVpbmFyb3NAZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzYWZlQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL1Blck1lc3NhZ2VEZWZsYXRlJyk7XG5jb25zdCBpc1ZhbGlkVVRGOCA9IHJlcXVpcmUoJy4vVmFsaWRhdGlvbicpO1xuY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4vQnVmZmVyVXRpbCcpO1xuY29uc3QgRXJyb3JDb2RlcyA9IHJlcXVpcmUoJy4vRXJyb3JDb2RlcycpO1xuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcblxuY29uc3QgQnVmZmVyID0gc2FmZUJ1ZmZlci5CdWZmZXI7XG5cbmNvbnN0IEdFVF9JTkZPID0gMDtcbmNvbnN0IEdFVF9QQVlMT0FEX0xFTkdUSF8xNiA9IDE7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfNjQgPSAyO1xuY29uc3QgR0VUX01BU0sgPSAzO1xuY29uc3QgR0VUX0RBVEEgPSA0O1xuY29uc3QgSU5GTEFUSU5HID0gNTtcblxuLyoqXG4gKiBIeUJpIFJlY2VpdmVyIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVjZWl2ZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZWdvdGlhdGVkIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heFBheWxvYWQgVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmluYXJ5VHlwZSBUaGUgdHlwZSBmb3IgYmluYXJ5IGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yIChleHRlbnNpb25zLCBtYXhQYXlsb2FkLCBiaW5hcnlUeXBlKSB7XG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IGJpbmFyeVR5cGUgfHwgY29uc3RhbnRzLkJJTkFSWV9UWVBFU1swXTtcbiAgICB0aGlzLl9leHRlbnNpb25zID0gZXh0ZW5zaW9ucyB8fCB7fTtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gbWF4UGF5bG9hZCB8IDA7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9idWZmZXJzID0gW107XG5cbiAgICB0aGlzLl9jb21wcmVzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fbWFza2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmluID0gZmFsc2U7XG4gICAgdGhpcy5fbWFzayA9IG51bGw7XG4gICAgdGhpcy5fb3Bjb2RlID0gMDtcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICB0aGlzLl9jbGVhbnVwQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuX2hhZEVycm9yID0gZmFsc2U7XG4gICAgdGhpcy5fZGVhZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcblxuICAgIHRoaXMub25tZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLm9uY2xvc2UgPSBudWxsO1xuICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgdGhpcy5vbnBpbmcgPSBudWxsO1xuICAgIHRoaXMub25wb25nID0gbnVsbDtcblxuICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gIH1cblxuICAvKipcbiAgICogQ29uc3VtZXMgYnl0ZXMgZnJvbSB0aGUgYXZhaWxhYmxlIGJ1ZmZlcmVkIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBieXRlcyBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGNvbnN1bWVcbiAgICogQHJldHVybiB7QnVmZmVyfSBDb25zdW1lZCBieXRlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVhZEJ1ZmZlciAoYnl0ZXMpIHtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB2YXIgZHN0O1xuICAgIHZhciBsO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBieXRlcztcblxuICAgIGlmIChieXRlcyA9PT0gdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHJldHVybiB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XG5cbiAgICBpZiAoYnl0ZXMgPCB0aGlzLl9idWZmZXJzWzBdLmxlbmd0aCkge1xuICAgICAgZHN0ID0gdGhpcy5fYnVmZmVyc1swXS5zbGljZSgwLCBieXRlcyk7XG4gICAgICB0aGlzLl9idWZmZXJzWzBdID0gdGhpcy5fYnVmZmVyc1swXS5zbGljZShieXRlcyk7XG4gICAgICByZXR1cm4gZHN0O1xuICAgIH1cblxuICAgIGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShieXRlcyk7XG5cbiAgICB3aGlsZSAoYnl0ZXMgPiAwKSB7XG4gICAgICBsID0gdGhpcy5fYnVmZmVyc1swXS5sZW5ndGg7XG5cbiAgICAgIGlmIChieXRlcyA+PSBsKSB7XG4gICAgICAgIHRoaXMuX2J1ZmZlcnNbMF0uY29weShkc3QsIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBsO1xuICAgICAgICB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdLmNvcHkoZHN0LCBvZmZzZXQsIDAsIGJ5dGVzKTtcbiAgICAgICAgdGhpcy5fYnVmZmVyc1swXSA9IHRoaXMuX2J1ZmZlcnNbMF0uc2xpY2UoYnl0ZXMpO1xuICAgICAgfVxuXG4gICAgICBieXRlcyAtPSBsO1xuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBudW1iZXIgb2YgYnVmZmVyZWQgYnl0ZXMgaXMgYmlnZ2VyIG9yIGVxdWFsIHRoYW4gYG5gIGFuZFxuICAgKiBjYWxscyBgY2xlYW51cGAgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGNoZWNrIGFnYWluc3RcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGBidWZmZXJlZEJ5dGVzID49IG5gLCBlbHNlIGBmYWxzZWBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhc0J1ZmZlcmVkQnl0ZXMgKG4pIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA+PSBuKSByZXR1cm4gdHJ1ZTtcblxuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fZGVhZCkgdGhpcy5jbGVhbnVwKHRoaXMuX2NsZWFudXBDYWxsYmFjayk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhlIHBhcnNlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkIChkYXRhKSB7XG4gICAgaWYgKHRoaXMuX2RlYWQpIHJldHVybjtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5fYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIHRoaXMuc3RhcnRMb29wKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwYXJzaW5nIGxvb3AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGFydExvb3AgKCkge1xuICAgIHRoaXMuX2xvb3AgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHRoaXMuX2xvb3ApIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgY2FzZSBHRVRfSU5GTzpcbiAgICAgICAgICB0aGlzLmdldEluZm8oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfUEFZTE9BRF9MRU5HVEhfMTY6XG4gICAgICAgICAgdGhpcy5nZXRQYXlsb2FkTGVuZ3RoMTYoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ6XG4gICAgICAgICAgdGhpcy5nZXRQYXlsb2FkTGVuZ3RoNjQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfTUFTSzpcbiAgICAgICAgICB0aGlzLmdldE1hc2soKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfREFUQTpcbiAgICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gYElORkxBVElOR2BcbiAgICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBmaXJzdCB0d28gYnl0ZXMgb2YgYSBmcmFtZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEluZm8gKCkge1xuICAgIGlmICghdGhpcy5oYXNCdWZmZXJlZEJ5dGVzKDIpKSByZXR1cm47XG5cbiAgICBjb25zdCBidWYgPSB0aGlzLnJlYWRCdWZmZXIoMik7XG5cbiAgICBpZiAoKGJ1ZlswXSAmIDB4MzApICE9PSAweDAwKSB7XG4gICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignUlNWMiBhbmQgUlNWMyBtdXN0IGJlIGNsZWFyJyksIDEwMDIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXByZXNzZWQgPSAoYnVmWzBdICYgMHg0MCkgPT09IDB4NDA7XG5cbiAgICBpZiAoY29tcHJlc3NlZCAmJiAhdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ1JTVjEgbXVzdCBiZSBjbGVhcicpLCAxMDAyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9maW4gPSAoYnVmWzBdICYgMHg4MCkgPT09IDB4ODA7XG4gICAgdGhpcy5fb3Bjb2RlID0gYnVmWzBdICYgMHgwZjtcbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gYnVmWzFdICYgMHg3ZjtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDApIHtcbiAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdSU1YxIG11c3QgYmUgY2xlYXInKSwgMTAwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKGBpbnZhbGlkIG9wY29kZTogJHt0aGlzLl9vcGNvZGV9YCksIDEwMDIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vcGNvZGUgPSB0aGlzLl9mcmFnbWVudGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fb3Bjb2RlID09PSAweDAxIHx8IHRoaXMuX29wY29kZSA9PT0gMHgwMikge1xuICAgICAgaWYgKHRoaXMuX2ZyYWdtZW50ZWQpIHtcbiAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoYGludmFsaWQgb3Bjb2RlOiAke3RoaXMuX29wY29kZX1gKSwgMTAwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IGNvbXByZXNzZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPiAweDA3ICYmIHRoaXMuX29wY29kZSA8IDB4MGIpIHtcbiAgICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdGSU4gbXVzdCBiZSBzZXQnKSwgMTAwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ1JTVjEgbXVzdCBiZSBjbGVhcicpLCAxMDAyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCA+IDB4N2QpIHtcbiAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ2ludmFsaWQgcGF5bG9hZCBsZW5ndGgnKSwgMTAwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoYGludmFsaWQgb3Bjb2RlOiAke3RoaXMuX29wY29kZX1gKSwgMTAwMik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9maW4gJiYgIXRoaXMuX2ZyYWdtZW50ZWQpIHRoaXMuX2ZyYWdtZW50ZWQgPSB0aGlzLl9vcGNvZGU7XG5cbiAgICB0aGlzLl9tYXNrZWQgPSAoYnVmWzFdICYgMHg4MCkgPT09IDB4ODA7XG5cbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMTI2KSB0aGlzLl9zdGF0ZSA9IEdFVF9QQVlMT0FEX0xFTkdUSF8xNjtcbiAgICBlbHNlIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoID09PSAxMjcpIHRoaXMuX3N0YXRlID0gR0VUX1BBWUxPQURfTEVOR1RIXzY0O1xuICAgIGVsc2UgdGhpcy5oYXZlTGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBleHRlbmRlZCBwYXlsb2FkIGxlbmd0aCAoNysxNikuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQYXlsb2FkTGVuZ3RoMTYgKCkge1xuICAgIGlmICghdGhpcy5oYXNCdWZmZXJlZEJ5dGVzKDIpKSByZXR1cm47XG5cbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gdGhpcy5yZWFkQnVmZmVyKDIpLnJlYWRVSW50MTZCRSgwLCB0cnVlKTtcbiAgICB0aGlzLmhhdmVMZW5ndGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGV4dGVuZGVkIHBheWxvYWQgbGVuZ3RoICg3KzY0KS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFBheWxvYWRMZW5ndGg2NCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc0J1ZmZlcmVkQnl0ZXMoOCkpIHJldHVybjtcblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMucmVhZEJ1ZmZlcig4KTtcbiAgICBjb25zdCBudW0gPSBidWYucmVhZFVJbnQzMkJFKDAsIHRydWUpO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgbWF4aW11bSBzYWZlIGludGVnZXIgaW4gSmF2YVNjcmlwdCBpcyAyXjUzIC0gMS4gQW4gZXJyb3IgaXMgcmV0dXJuZWRcbiAgICAvLyBpZiBwYXlsb2FkIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gdGhpcyBudW1iZXIuXG4gICAgLy9cbiAgICBpZiAobnVtID4gTWF0aC5wb3coMiwgNTMgLSAzMikgLSAxKSB7XG4gICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignbWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpLCAxMDA5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gKG51bSAqIE1hdGgucG93KDIsIDMyKSkgKyBidWYucmVhZFVJbnQzMkJFKDQsIHRydWUpO1xuICAgIHRoaXMuaGF2ZUxlbmd0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBheWxvYWQgbGVuZ3RoIGhhcyBiZWVuIHJlYWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYXZlTGVuZ3RoICgpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlIDwgMHgwOCAmJiB0aGlzLm1heFBheWxvYWRFeGNlZWRlZCh0aGlzLl9wYXlsb2FkTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tYXNrZWQpIHRoaXMuX3N0YXRlID0gR0VUX01BU0s7XG4gICAgZWxzZSB0aGlzLl9zdGF0ZSA9IEdFVF9EQVRBO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIG1hc2sgYnl0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNYXNrICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzQnVmZmVyZWRCeXRlcyg0KSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fbWFzayA9IHRoaXMucmVhZEJ1ZmZlcig0KTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9EQVRBO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgYnl0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREYXRhICgpIHtcbiAgICB2YXIgZGF0YSA9IGNvbnN0YW50cy5FTVBUWV9CVUZGRVI7XG5cbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0J1ZmZlcmVkQnl0ZXModGhpcy5fcGF5bG9hZExlbmd0aCkpIHJldHVybjtcblxuICAgICAgZGF0YSA9IHRoaXMucmVhZEJ1ZmZlcih0aGlzLl9wYXlsb2FkTGVuZ3RoKTtcbiAgICAgIGlmICh0aGlzLl9tYXNrZWQpIGJ1ZmZlclV0aWwudW5tYXNrKGRhdGEsIHRoaXMuX21hc2spO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPiAweDA3KSB7XG4gICAgICB0aGlzLmNvbnRyb2xNZXNzYWdlKGRhdGEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcHJlc3NlZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBJTkZMQVRJTkc7XG4gICAgICB0aGlzLmRlY29tcHJlc3MoZGF0YSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnB1c2hGcmFnbWVudChkYXRhKSkge1xuICAgICAgdGhpcy5kYXRhTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvbXByZXNzZXMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWNvbXByZXNzIChkYXRhKSB7XG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgcGVyTWVzc2FnZURlZmxhdGUuZGVjb21wcmVzcyhkYXRhLCB0aGlzLl9maW4sIChlcnIsIGJ1ZikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLmVycm9yKGVyciwgZXJyLmNsb3NlQ29kZSA9PT0gMTAwOSA/IDEwMDkgOiAxMDA3KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wdXNoRnJhZ21lbnQoYnVmKSkgdGhpcy5kYXRhTWVzc2FnZSgpO1xuICAgICAgdGhpcy5zdGFydExvb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgZGF0YSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGF0YU1lc3NhZ2UgKCkge1xuICAgIGlmICh0aGlzLl9maW4pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VMZW5ndGggPSB0aGlzLl9tZXNzYWdlTGVuZ3RoO1xuICAgICAgY29uc3QgZnJhZ21lbnRzID0gdGhpcy5fZnJhZ21lbnRzO1xuXG4gICAgICB0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggPSAwO1xuICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgICB0aGlzLl9mcmFnbWVudGVkID0gMDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cyA9IFtdO1xuXG4gICAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAyKSB7XG4gICAgICAgIHZhciBkYXRhO1xuXG4gICAgICAgIGlmICh0aGlzLl9iaW5hcnlUeXBlID09PSAnbm9kZWJ1ZmZlcicpIHtcbiAgICAgICAgICBkYXRhID0gdG9CdWZmZXIoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iaW5hcnlUeXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgZGF0YSA9IHRvQXJyYXlCdWZmZXIodG9CdWZmZXIoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGZyYWdtZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25tZXNzYWdlKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnVmID0gdG9CdWZmZXIoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignaW52YWxpZCB1dGY4IHNlcXVlbmNlJyksIDEwMDcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25tZXNzYWdlKGJ1Zi50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjb250cm9sIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIERhdGEgdG8gaGFuZGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb250cm9sTWVzc2FnZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDgpIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm9uY2xvc2UoMTAwMCwgJycpO1xuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xlYW51cCh0aGlzLl9jbGVhbnVwQ2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignaW52YWxpZCBwYXlsb2FkIGxlbmd0aCcpLCAxMDAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhLnJlYWRVSW50MTZCRSgwLCB0cnVlKTtcblxuICAgICAgICBpZiAoIUVycm9yQ29kZXMuaXNWYWxpZEVycm9yQ29kZShjb2RlKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKGBpbnZhbGlkIHN0YXR1cyBjb2RlOiAke2NvZGV9YCksIDEwMDIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IGRhdGEuc2xpY2UoMik7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkVVRGOChidWYpKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ2ludmFsaWQgdXRmOCBzZXF1ZW5jZScpLCAxMDA3KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uY2xvc2UoY29kZSwgYnVmLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xlYW51cCh0aGlzLl9jbGVhbnVwQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwOSkgdGhpcy5vbnBpbmcoZGF0YSk7XG4gICAgZWxzZSB0aGlzLm9ucG9uZyhkYXRhKTtcblxuICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvclxuICAgKiBAcGFyYW0ge051bWJlcn0gY29kZSBDbG9zZSBjb2RlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlcnJvciAoZXJyLCBjb2RlKSB7XG4gICAgdGhpcy5vbmVycm9yKGVyciwgY29kZSk7XG4gICAgdGhpcy5faGFkRXJyb3IgPSB0cnVlO1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFudXAodGhpcy5fY2xlYW51cENhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgcGF5bG9hZCBzaXplLCBkaXNjb25uZWN0cyBzb2NrZXQgd2hlbiBpdCBleGNlZWRzIGBtYXhQYXlsb2FkYC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBQYXlsb2FkIGxlbmd0aFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbWF4UGF5bG9hZEV4Y2VlZGVkIChsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSAwIHx8IHRoaXMuX21heFBheWxvYWQgPCAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBmdWxsTGVuZ3RoID0gdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoICsgbGVuZ3RoO1xuXG4gICAgaWYgKGZ1bGxMZW5ndGggPD0gdGhpcy5fbWF4UGF5bG9hZCkge1xuICAgICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gZnVsbExlbmd0aDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignbWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpLCAxMDA5KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgZnJhZ21lbnQgaW4gdGhlIGZyYWdtZW50cyBhcnJheSBhZnRlciBjaGVja2luZyB0aGF0IHRoZSBzdW0gb2ZcbiAgICogZnJhZ21lbnQgbGVuZ3RocyBkb2VzIG5vdCBleGNlZWQgYG1heFBheWxvYWRgLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZnJhZ21lbnQgVGhlIGZyYWdtZW50IHRvIGFkZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYG1heFBheWxvYWRgIGlzIG5vdCBleGNlZWRlZCwgZWxzZSBgZmFsc2VgXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdXNoRnJhZ21lbnQgKGZyYWdtZW50KSB7XG4gICAgaWYgKGZyYWdtZW50Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCB0b3RhbExlbmd0aCA9IHRoaXMuX21lc3NhZ2VMZW5ndGggKyBmcmFnbWVudC5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5fbWF4UGF5bG9hZCA8IDEgfHwgdG90YWxMZW5ndGggPD0gdGhpcy5fbWF4UGF5bG9hZCkge1xuICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IHRvdGFsTGVuZ3RoO1xuICAgICAgdGhpcy5fZnJhZ21lbnRzLnB1c2goZnJhZ21lbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ21heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnKSwgMTAwOSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIHJlc291cmNlcyB1c2VkIGJ5IHRoZSByZWNlaXZlci5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xlYW51cCAoY2IpIHtcbiAgICB0aGlzLl9kZWFkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5faGFkRXJyb3IgJiYgKHRoaXMuX2xvb3AgfHwgdGhpcy5fc3RhdGUgPT09IElORkxBVElORykpIHtcbiAgICAgIHRoaXMuX2NsZWFudXBDYWxsYmFjayA9IGNiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leHRlbnNpb25zID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cyA9IG51bGw7XG4gICAgICB0aGlzLl9idWZmZXJzID0gbnVsbDtcbiAgICAgIHRoaXMuX21hc2sgPSBudWxsO1xuXG4gICAgICB0aGlzLl9jbGVhbnVwQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgdGhpcy5vbm1lc3NhZ2UgPSBudWxsO1xuICAgICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcbiAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLm9ucGluZyA9IG51bGw7XG4gICAgICB0aGlzLm9ucG9uZyA9IG51bGw7XG5cbiAgICAgIGlmIChjYikgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWNlaXZlcjtcblxuLyoqXG4gKiBNYWtlcyBhIGJ1ZmZlciBmcm9tIGEgbGlzdCBvZiBmcmFnbWVudHMuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJbXX0gZnJhZ21lbnRzIFRoZSBsaXN0IG9mIGZyYWdtZW50cyBjb21wb3NpbmcgdGhlIG1lc3NhZ2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBtZXNzYWdlTGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIG1lc3NhZ2VcbiAqIEByZXR1cm4ge0J1ZmZlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRvQnVmZmVyIChmcmFnbWVudHMsIG1lc3NhZ2VMZW5ndGgpIHtcbiAgaWYgKGZyYWdtZW50cy5sZW5ndGggPT09IDEpIHJldHVybiBmcmFnbWVudHNbMF07XG4gIGlmIChmcmFnbWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIGJ1ZmZlclV0aWwuY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG4gIHJldHVybiBjb25zdGFudHMuRU1QVFlfQlVGRkVSO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYnVmZmVyIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IFRoZSBidWZmZXIgdG8gY29udmVydFxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IENvbnZlcnRlZCBidWZmZXJcbiAqL1xuZnVuY3Rpb24gdG9BcnJheUJ1ZmZlciAoYnVmKSB7XG4gIGlmIChidWYuYnl0ZU9mZnNldCA9PT0gMCAmJiBidWYuYnl0ZUxlbmd0aCA9PT0gYnVmLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJ1Zi5idWZmZXI7XG4gIH1cblxuICByZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL1JlY2VpdmVyLmpzIiwiLyohXG4gKiB3czogYSBub2RlLmpzIHdlYnNvY2tldCBjbGllbnRcbiAqIENvcHlyaWdodChjKSAyMDExIEVpbmFyIE90dG8gU3Rhbmd2aWsgPGVpbmFyb3NAZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNWYWxpZEVycm9yQ29kZTogZnVuY3Rpb24gKGNvZGUpIHtcbiAgICByZXR1cm4gKGNvZGUgPj0gMTAwMCAmJiBjb2RlIDw9IDEwMTMgJiYgY29kZSAhPT0gMTAwNCAmJiBjb2RlICE9PSAxMDA1ICYmIGNvZGUgIT09IDEwMDYpIHx8XG4gICAgICAoY29kZSA+PSAzMDAwICYmIGNvZGUgPD0gNDk5OSk7XG4gIH0sXG4gIDEwMDA6ICdub3JtYWwnLFxuICAxMDAxOiAnZ29pbmcgYXdheScsXG4gIDEwMDI6ICdwcm90b2NvbCBlcnJvcicsXG4gIDEwMDM6ICd1bnN1cHBvcnRlZCBkYXRhJyxcbiAgMTAwNDogJ3Jlc2VydmVkJyxcbiAgMTAwNTogJ3Jlc2VydmVkIGZvciBleHRlbnNpb25zJyxcbiAgMTAwNjogJ3Jlc2VydmVkIGZvciBleHRlbnNpb25zJyxcbiAgMTAwNzogJ2luY29uc2lzdGVudCBvciBpbnZhbGlkIGRhdGEnLFxuICAxMDA4OiAncG9saWN5IHZpb2xhdGlvbicsXG4gIDEwMDk6ICdtZXNzYWdlIHRvbyBiaWcnLFxuICAxMDEwOiAnZXh0ZW5zaW9uIGhhbmRzaGFrZSBtaXNzaW5nJyxcbiAgMTAxMTogJ2FuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHByZXZlbnRlZCB0aGUgcmVxdWVzdCBmcm9tIGJlaW5nIGZ1bGZpbGxlZCcsXG4gIDEwMTI6ICdzZXJ2aWNlIHJlc3RhcnQnLFxuICAxMDEzOiAndHJ5IGFnYWluIGxhdGVyJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9saWIvRXJyb3JDb2Rlcy5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FmZUJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJyk7XG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL1Blck1lc3NhZ2VEZWZsYXRlJyk7XG5jb25zdCBidWZmZXJVdGlsID0gcmVxdWlyZSgnLi9CdWZmZXJVdGlsJyk7XG5jb25zdCBFcnJvckNvZGVzID0gcmVxdWlyZSgnLi9FcnJvckNvZGVzJyk7XG5cbmNvbnN0IEJ1ZmZlciA9IHNhZmVCdWZmZXIuQnVmZmVyO1xuXG4vKipcbiAqIEh5QmkgU2VuZGVyIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBTZW5kZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFNlbmRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtuZXQuU29ja2V0fSBzb2NrZXQgVGhlIGNvbm5lY3Rpb24gc29ja2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZWdvdGlhdGVkIGV4dGVuc2lvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChzb2NrZXQsIGV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLl9leHRlbnNpb25zID0gZXh0ZW5zaW9ucyB8fCB7fTtcbiAgICB0aGlzLl9zb2NrZXQgPSBzb2NrZXQ7XG5cbiAgICB0aGlzLl9maXJzdEZyYWdtZW50ID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wcmVzcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fZGVmbGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGEgcGllY2Ugb2YgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIEh5QmkgV2ViU29ja2V0IHByb3RvY29sLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgZGF0YSB0byBmcmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5vcGNvZGUgVGhlIG9wY29kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmVhZE9ubHkgU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZSBtb2RpZmllZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlIEZJTiBiaXRcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5yc3YxIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlIFJTVjEgYml0XG4gICAqIEByZXR1cm4ge0J1ZmZlcltdfSBUaGUgZnJhbWVkIGRhdGEgYXMgYSBsaXN0IG9mIGBCdWZmZXJgIGluc3RhbmNlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZnJhbWUgKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBtZXJnZSA9IGRhdGEubGVuZ3RoIDwgMTAyNCB8fCAob3B0aW9ucy5tYXNrICYmIG9wdGlvbnMucmVhZE9ubHkpO1xuICAgIHZhciBvZmZzZXQgPSBvcHRpb25zLm1hc2sgPyA2IDogMjtcbiAgICB2YXIgcGF5bG9hZExlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID49IDY1NTM2KSB7XG4gICAgICBvZmZzZXQgKz0gODtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjc7XG4gICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCA+IDEyNSkge1xuICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICBwYXlsb2FkTGVuZ3RoID0gMTI2O1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShtZXJnZSA/IGRhdGEubGVuZ3RoICsgb2Zmc2V0IDogb2Zmc2V0KTtcblxuICAgIHRhcmdldFswXSA9IG9wdGlvbnMuZmluID8gb3B0aW9ucy5vcGNvZGUgfCAweDgwIDogb3B0aW9ucy5vcGNvZGU7XG4gICAgaWYgKG9wdGlvbnMucnN2MSkgdGFyZ2V0WzBdIHw9IDB4NDA7XG5cbiAgICBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI2KSB7XG4gICAgICB0YXJnZXQud3JpdGVVSW50MTZCRShkYXRhLmxlbmd0aCwgMiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChwYXlsb2FkTGVuZ3RoID09PSAxMjcpIHtcbiAgICAgIHRhcmdldC53cml0ZVVJbnQzMkJFKDAsIDIsIHRydWUpO1xuICAgICAgdGFyZ2V0LndyaXRlVUludDMyQkUoZGF0YS5sZW5ndGgsIDYsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5tYXNrKSB7XG4gICAgICB0YXJnZXRbMV0gPSBwYXlsb2FkTGVuZ3RoO1xuICAgICAgaWYgKG1lcmdlKSB7XG4gICAgICAgIGRhdGEuY29weSh0YXJnZXQsIG9mZnNldCk7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFt0YXJnZXQsIGRhdGFdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hc2sgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoNCk7XG5cbiAgICB0YXJnZXRbMV0gPSBwYXlsb2FkTGVuZ3RoIHwgMHg4MDtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gNF0gPSBtYXNrWzBdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAzXSA9IG1hc2tbMV07XG4gICAgdGFyZ2V0W29mZnNldCAtIDJdID0gbWFza1syXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gMV0gPSBtYXNrWzNdO1xuXG4gICAgaWYgKG1lcmdlKSB7XG4gICAgICBidWZmZXJVdGlsLm1hc2soZGF0YSwgbWFzaywgdGFyZ2V0LCBvZmZzZXQsIGRhdGEubGVuZ3RoKTtcbiAgICAgIHJldHVybiBbdGFyZ2V0XTtcbiAgICB9XG5cbiAgICBidWZmZXJVdGlsLm1hc2soZGF0YSwgbWFzaywgZGF0YSwgMCwgZGF0YS5sZW5ndGgpO1xuICAgIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGNsb3NlIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7KE51bWJlcnx1bmRlZmluZWQpfSBjb2RlIFRoZSBzdGF0dXMgY29kZSBjb21wb25lbnQgb2YgdGhlIGJvZHlcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgVGhlIG1lc3NhZ2UgY29tcG9uZW50IG9mIHRoZSBib2R5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayB0aGUgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZSAoY29kZSwgZGF0YSwgbWFzaywgY2IpIHtcbiAgICBpZiAoY29kZSAhPT0gdW5kZWZpbmVkICYmICh0eXBlb2YgY29kZSAhPT0gJ251bWJlcicgfHwgIUVycm9yQ29kZXMuaXNWYWxpZEVycm9yQ29kZShjb2RlKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIGVycm9yIGNvZGUgbnVtYmVyJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDIgKyAoZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogMCkpO1xuXG4gICAgYnVmLndyaXRlVUludDE2QkUoY29kZSB8fCAxMDAwLCAwLCB0cnVlKTtcbiAgICBpZiAoYnVmLmxlbmd0aCA+IDIpIGJ1Zi53cml0ZShkYXRhLCAyKTtcblxuICAgIGlmICh0aGlzLl9kZWZsYXRpbmcpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kb0Nsb3NlLCBidWYsIG1hc2ssIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9DbG9zZShidWYsIG1hc2ssIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGFuZCBzZW5kcyBhIGNsb3NlIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSAoZGF0YSwgbWFzaywgY2IpIHtcbiAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwge1xuICAgICAgZmluOiB0cnVlLFxuICAgICAgcnN2MTogZmFsc2UsXG4gICAgICBvcGNvZGU6IDB4MDgsXG4gICAgICBtYXNrLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlXG4gICAgfSksIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBpbmcgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwaW5nIChkYXRhLCBtYXNrKSB7XG4gICAgdmFyIHJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSB2aWV3VG9CdWZmZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmxhdGluZykge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRvUGluZywgZGF0YSwgbWFzaywgcmVhZE9ubHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1BpbmcoZGF0YSwgbWFzaywgcmVhZE9ubHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMgYW5kIHNlbmRzIGEgcGluZyBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVhZE9ubHkgU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZSBtb2RpZmllZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZG9QaW5nIChkYXRhLCBtYXNrLCByZWFkT25seSkge1xuICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCB7XG4gICAgICBmaW46IHRydWUsXG4gICAgICByc3YxOiBmYWxzZSxcbiAgICAgIG9wY29kZTogMHgwOSxcbiAgICAgIG1hc2ssXG4gICAgICByZWFkT25seVxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBvbmcgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nIChkYXRhLCBtYXNrKSB7XG4gICAgdmFyIHJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSB2aWV3VG9CdWZmZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmxhdGluZykge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRvUG9uZywgZGF0YSwgbWFzaywgcmVhZE9ubHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1BvbmcoZGF0YSwgbWFzaywgcmVhZE9ubHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMgYW5kIHNlbmRzIGEgcG9uZyBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVhZE9ubHkgU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZSBtb2RpZmllZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZG9Qb25nIChkYXRhLCBtYXNrLCByZWFkT25seSkge1xuICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCB7XG4gICAgICBmaW46IHRydWUsXG4gICAgICByc3YxOiBmYWxzZSxcbiAgICAgIG9wY29kZTogMHgwYSxcbiAgICAgIG1hc2ssXG4gICAgICByZWFkT25seVxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGRhdGEgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmNvbXByZXNzIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzcyBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmJpbmFyeSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgaXMgYmluYXJ5IG9yIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmZpbiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZnJhZ21lbnQgaXMgdGhlIGxhc3Qgb25lXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5tYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBzZW5kIChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIHZhciBvcGNvZGUgPSBvcHRpb25zLmJpbmFyeSA/IDIgOiAxO1xuICAgIHZhciByc3YxID0gb3B0aW9ucy5jb21wcmVzcztcbiAgICB2YXIgcmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IHZpZXdUb0J1ZmZlcihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICBpZiAodGhpcy5fZmlyc3RGcmFnbWVudCkge1xuICAgICAgdGhpcy5fZmlyc3RGcmFnbWVudCA9IGZhbHNlO1xuICAgICAgaWYgKHJzdjEgJiYgcGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgcnN2MSA9IGRhdGEubGVuZ3RoID49IHBlck1lc3NhZ2VEZWZsYXRlLl90aHJlc2hvbGQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb21wcmVzcyA9IHJzdjE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJzdjEgPSBmYWxzZTtcbiAgICAgIG9wY29kZSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZmluKSB0aGlzLl9maXJzdEZyYWdtZW50ID0gdHJ1ZTtcblxuICAgIGlmIChwZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgZmluOiBvcHRpb25zLmZpbixcbiAgICAgICAgcnN2MSxcbiAgICAgICAgb3Bjb2RlLFxuICAgICAgICBtYXNrOiBvcHRpb25zLm1hc2ssXG4gICAgICAgIHJlYWRPbmx5XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5fZGVmbGF0aW5nKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCB7XG4gICAgICAgIGZpbjogb3B0aW9ucy5maW4sXG4gICAgICAgIHJzdjE6IGZhbHNlLFxuICAgICAgICBvcGNvZGUsXG4gICAgICAgIG1hc2s6IG9wdGlvbnMubWFzayxcbiAgICAgICAgcmVhZE9ubHlcbiAgICAgIH0pLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBjb21wcmVzcyBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3MgYGRhdGFgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm9wY29kZSBUaGUgb3Bjb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5yZWFkT25seSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgY2FuIGJlIG1vZGlmaWVkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5maW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGUgRklOIGJpdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMubWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnJzdjEgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGUgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRpc3BhdGNoIChkYXRhLCBjb21wcmVzcywgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICB0aGlzLl9kZWZsYXRpbmcgPSB0cnVlO1xuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmNvbXByZXNzKGRhdGEsIG9wdGlvbnMuZmluLCAoZXJyLCBidWYpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgaWYgKGNiKSBjYihlcnIpO1xuICAgICAgICBlbHNlIHRoaXMub25lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShidWYsIG9wdGlvbnMpLCBjYik7XG4gICAgICB0aGlzLl9kZWZsYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVxdWV1ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHF1ZXVlZCBzZW5kIG9wZXJhdGlvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZXF1ZXVlICgpIHtcbiAgICB3aGlsZSAoIXRoaXMuX2RlZmxhdGluZyAmJiB0aGlzLl9xdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gcGFyYW1zWzFdLmxlbmd0aDtcbiAgICAgIHBhcmFtc1swXS5hcHBseSh0aGlzLCBwYXJhbXMuc2xpY2UoMSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyBhIHNlbmQgb3BlcmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgU2VuZCBvcGVyYXRpb24gcGFyYW1ldGVycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGVucXVldWUgKHBhcmFtcykge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gcGFyYW1zWzFdLmxlbmd0aDtcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJbXX0gbGlzdCBUaGUgZnJhbWUgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2VuZEZyYW1lIChsaXN0LCBjYikge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5fc29ja2V0LndyaXRlKGxpc3RbMF0pO1xuICAgICAgdGhpcy5fc29ja2V0LndyaXRlKGxpc3RbMV0sIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ja2V0LndyaXRlKGxpc3RbMF0sIGNiKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZW5kZXI7XG5cbi8qKlxuICogQ29udmVydHMgYW4gYEFycmF5QnVmZmVyYCB2aWV3IGludG8gYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHsoRGF0YVZpZXd8VHlwZWRBcnJheSl9IHZpZXcgVGhlIHZpZXcgdG8gY29udmVydFxuICogQHJldHVybiB7QnVmZmVyfSBDb252ZXJ0ZWQgdmlld1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdmlld1RvQnVmZmVyICh2aWV3KSB7XG4gIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKHZpZXcuYnVmZmVyKTtcblxuICBpZiAodmlldy5ieXRlTGVuZ3RoICE9PSB2aWV3LmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJ1Zi5zbGljZSh2aWV3LmJ5dGVPZmZzZXQsIHZpZXcuYnl0ZU9mZnNldCArIHZpZXcuYnl0ZUxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gYnVmO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9TZW5kZXIuanMiLCIvKiFcbiAqIHdzOiBhIG5vZGUuanMgd2Vic29ja2V0IGNsaWVudFxuICogQ29weXJpZ2h0KGMpIDIwMTEgRWluYXIgT3R0byBTdGFuZ3ZpayA8ZWluYXJvc0BnbWFpbC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vbGliL1dlYlNvY2tldCcpO1xuXG5XZWJTb2NrZXQuU2VydmVyID0gcmVxdWlyZSgnLi9saWIvV2ViU29ja2V0U2VydmVyJyk7XG5XZWJTb2NrZXQuUmVjZWl2ZXIgPSByZXF1aXJlKCcuL2xpYi9SZWNlaXZlcicpO1xuV2ViU29ja2V0LlNlbmRlciA9IHJlcXVpcmUoJy4vbGliL1NlbmRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cHNcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYnVmZmVyXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpsaWJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6bGliXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUXVldWUob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUXVldWUpKSB7XG4gICAgcmV0dXJuIG5ldyBRdWV1ZShvcHRpb25zKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLmNvbmN1cnJlbmN5ID0gb3B0aW9ucy5jb25jdXJyZW5jeSB8fCBJbmZpbml0eTtcbiAgdGhpcy5wZW5kaW5nID0gMDtcbiAgdGhpcy5qb2JzID0gW107XG4gIHRoaXMuY2JzID0gW107XG4gIHRoaXMuX2RvbmUgPSBkb25lLmJpbmQodGhpcyk7XG59XG5cbnZhciBhcnJheUFkZE1ldGhvZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJ1xuXTtcblxuYXJyYXlBZGRNZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gIFF1ZXVlLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1ldGhvZFJlc3VsdCA9IEFycmF5LnByb3RvdHlwZVttZXRob2RdLmFwcGx5KHRoaXMuam9icywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9ydW4oKTtcbiAgICByZXR1cm4gbWV0aG9kUmVzdWx0O1xuICB9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWV1ZS5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZyArIHRoaXMuam9icy5sZW5ndGg7XG4gIH1cbn0pO1xuXG5RdWV1ZS5wcm90b3R5cGUuX3J1biA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5wZW5kaW5nID09PSB0aGlzLmNvbmN1cnJlbmN5KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0aGlzLmpvYnMubGVuZ3RoKSB7XG4gICAgdmFyIGpvYiA9IHRoaXMuam9icy5zaGlmdCgpO1xuICAgIHRoaXMucGVuZGluZysrO1xuICAgIGpvYih0aGlzLl9kb25lKTtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxuXG4gIGlmICh0aGlzLnBlbmRpbmcgPT09IDApIHtcbiAgICB3aGlsZSAodGhpcy5jYnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgY2IgPSB0aGlzLmNicy5wb3AoKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY2IpO1xuICAgIH1cbiAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLm9uRG9uZSA9IGZ1bmN0aW9uKGNiKSB7XG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmNicy5wdXNoKGNiKTtcbiAgICB0aGlzLl9ydW4oKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZG9uZSgpIHtcbiAgdGhpcy5wZW5kaW5nLS07XG4gIHRoaXMuX3J1bigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FzeW5jLWxpbWl0ZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGFuIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgRXZlbnRgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBBIHJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHRvIHdoaWNoIHRoZSBldmVudCB3YXMgZGlzcGF0Y2hlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKHR5cGUsIHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBtZXNzYWdlIGV2ZW50LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBNZXNzYWdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE1lc3NhZ2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7KFN0cmluZ3xCdWZmZXJ8QXJyYXlCdWZmZXJ8QnVmZmVyW10pfSBkYXRhIFRoZSByZWNlaXZlZCBkYXRhXG4gICAqIEBwYXJhbSB7V2ViU29ja2V0fSB0YXJnZXQgQSByZWZlcmVuY2UgdG8gdGhlIHRhcmdldCB0byB3aGljaCB0aGUgZXZlbnQgd2FzIGRpc3BhdGNoZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChkYXRhLCB0YXJnZXQpIHtcbiAgICBzdXBlcignbWVzc2FnZScsIHRhcmdldCk7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgY2xvc2UgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENsb3NlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYENsb3NlRXZlbnRgLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgc3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgYmVpbmcgY2xvc2VkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb24gQSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZ1xuICAgKiBAcGFyYW0ge1dlYlNvY2tldH0gdGFyZ2V0IEEgcmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgdG8gd2hpY2ggdGhlIGV2ZW50IHdhcyBkaXNwYXRjaGVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29kZSwgcmVhc29uLCB0YXJnZXQpIHtcbiAgICBzdXBlcignY2xvc2UnLCB0YXJnZXQpO1xuXG4gICAgdGhpcy53YXNDbGVhbiA9IGNvZGUgPT09IHVuZGVmaW5lZCB8fCBjb2RlID09PSAxMDAwIHx8IChjb2RlID49IDMwMDAgJiYgY29kZSA8PSA0OTk5KTtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGFuIG9wZW4gZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIE9wZW5FdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgT3BlbkV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtXZWJTb2NrZXR9IHRhcmdldCBBIHJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHRvIHdoaWNoIHRoZSBldmVudCB3YXMgZGlzcGF0Y2hlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKHRhcmdldCkge1xuICAgIHN1cGVyKCdvcGVuJywgdGFyZ2V0KTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZW11bGF0aW5nIHRoZSBgRXZlbnRUYXJnZXRgIGludGVyZmFjZS4gSXQncyBub3RcbiAqIG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1peGluXG4gKi9cbmNvbnN0IEV2ZW50VGFyZ2V0ID0ge1xuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcHVibGljXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyIChtZXRob2QsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgZnVuY3Rpb24gb25NZXNzYWdlIChkYXRhKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIG5ldyBNZXNzYWdlRXZlbnQoZGF0YSwgdGhpcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xvc2UgKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgbmV3IENsb3NlRXZlbnQoY29kZSwgbWVzc2FnZSwgdGhpcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXJyb3IgKGV2ZW50KSB7XG4gICAgICBldmVudC50eXBlID0gJ2Vycm9yJztcbiAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW4gKCkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBuZXcgT3BlbkV2ZW50KHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09PSAnbWVzc2FnZScpIHtcbiAgICAgIG9uTWVzc2FnZS5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgIHRoaXMub24obWV0aG9kLCBvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnY2xvc2UnKSB7XG4gICAgICBvbkNsb3NlLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgICAgdGhpcy5vbihtZXRob2QsIG9uQ2xvc2UpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZXJyb3InKSB7XG4gICAgICBvbkVycm9yLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgICAgdGhpcy5vbihtZXRob2QsIG9uRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnb3BlbicpIHtcbiAgICAgIG9uT3Blbi5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgIHRoaXMub24obWV0aG9kLCBvbk9wZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uKG1ldGhvZCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byByZW1vdmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxuICAgKiBAcHVibGljXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyIChtZXRob2QsIGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMobWV0aG9kKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lciB8fCBsaXN0ZW5lcnNbaV0uX2xpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKG1ldGhvZCwgbGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRUYXJnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL0V2ZW50VGFyZ2V0LmpzIiwiLyohXG4gKiB3czogYSBub2RlLmpzIHdlYnNvY2tldCBjbGllbnRcbiAqIENvcHlyaWdodChjKSAyMDExIEVpbmFyIE90dG8gU3Rhbmd2aWsgPGVpbmFyb3NAZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG50cnkge1xuICBjb25zdCBpc1ZhbGlkVVRGOCA9IHJlcXVpcmUoJ3V0Zi04LXZhbGlkYXRlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgaXNWYWxpZFVURjggPT09ICdvYmplY3QnXG4gICAgPyBpc1ZhbGlkVVRGOC5WYWxpZGF0aW9uLmlzVmFsaWRVVEY4IC8vIHV0Zi04LXZhbGlkYXRlQDwzLjAuMFxuICAgIDogaXNWYWxpZFVURjg7XG59IGNhdGNoIChlKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gIG1vZHVsZS5leHBvcnRzID0gKCkgPT4gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9saWIvVmFsaWRhdGlvbi5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FmZUJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgVWx0cm9uID0gcmVxdWlyZSgndWx0cm9uJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9QZXJNZXNzYWdlRGVmbGF0ZScpO1xuY29uc3QgRXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4vRXh0ZW5zaW9ucycpO1xuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKTtcbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vV2ViU29ja2V0Jyk7XG5cbmNvbnN0IEJ1ZmZlciA9IHNhZmVCdWZmZXIuQnVmZmVyO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldCBzZXJ2ZXIuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIFdlYlNvY2tldFNlcnZlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBgV2ViU29ja2V0U2VydmVyYCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmhvc3QgVGhlIGhvc3RuYW1lIHdoZXJlIHRvIGJpbmQgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5wb3J0IFRoZSBwb3J0IHdoZXJlIHRvIGJpbmQgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge2h0dHAuU2VydmVyfSBvcHRpb25zLnNlcnZlciBBIHByZS1jcmVhdGVkIEhUVFAvUyBzZXJ2ZXIgdG8gdXNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudmVyaWZ5Q2xpZW50IEFuIGhvb2sgdG8gcmVqZWN0IGNvbm5lY3Rpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzIEFuIGhvb2sgdG8gaGFuZGxlIHByb3RvY29sc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5wYXRoIEFjY2VwdCBvbmx5IGNvbm5lY3Rpb25zIG1hdGNoaW5nIHRoaXMgcGF0aFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMubm9TZXJ2ZXIgRW5hYmxlIG5vIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5jbGllbnRUcmFja2luZyBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gdHJhY2sgY2xpZW50c1xuICAgKiBAcGFyYW0geyhCb29sZWFufE9iamVjdCl9IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgRW5hYmxlL2Rpc2FibGUgcGVybWVzc2FnZS1kZWZsYXRlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm1heFBheWxvYWQgVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIHNpemVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQSBsaXN0ZW5lciBmb3IgdGhlIGBsaXN0ZW5pbmdgIGV2ZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBzdXBlcigpO1xuXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgICBwZXJNZXNzYWdlRGVmbGF0ZTogZmFsc2UsXG4gICAgICBoYW5kbGVQcm90b2NvbHM6IG51bGwsXG4gICAgICBjbGllbnRUcmFja2luZzogdHJ1ZSxcbiAgICAgIHZlcmlmeUNsaWVudDogbnVsbCxcbiAgICAgIG5vU2VydmVyOiBmYWxzZSxcbiAgICAgIGJhY2tsb2c6IG51bGwsIC8vIHVzZSBkZWZhdWx0ICg1MTEgYXMgaW1wbGVtZW50ZWQgaW4gbmV0LmpzKVxuICAgICAgc2VydmVyOiBudWxsLFxuICAgICAgaG9zdDogbnVsbCxcbiAgICAgIHBhdGg6IG51bGwsXG4gICAgICBwb3J0OiBudWxsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5wb3J0ID09IG51bGwgJiYgIW9wdGlvbnMuc2VydmVyICYmICFvcHRpb25zLm5vU2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaXNzaW5nIG9yIGludmFsaWQgb3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBvcnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBodHRwLlNUQVRVU19DT0RFU1s0MjZdO1xuXG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDI2LCB7XG4gICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogYm9keS5sZW5ndGgsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmVuZChib2R5KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc2VydmVyLmFsbG93SGFsZk9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlcnZlci5saXN0ZW4ob3B0aW9ucy5wb3J0LCBvcHRpb25zLmhvc3QsIG9wdGlvbnMuYmFja2xvZywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IG9wdGlvbnMuc2VydmVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3VsdHJvbiA9IG5ldyBVbHRyb24odGhpcy5fc2VydmVyKTtcbiAgICAgIHRoaXMuX3VsdHJvbi5vbignbGlzdGVuaW5nJywgKCkgPT4gdGhpcy5lbWl0KCdsaXN0ZW5pbmcnKSk7XG4gICAgICB0aGlzLl91bHRyb24ub24oJ2Vycm9yJywgKGVycikgPT4gdGhpcy5lbWl0KCdlcnJvcicsIGVycikpO1xuICAgICAgdGhpcy5fdWx0cm9uLm9uKCd1cGdyYWRlJywgKHJlcSwgc29ja2V0LCBoZWFkKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgKGNsaWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdGlvbicsIGNsaWVudCwgcmVxKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jbGllbnRUcmFja2luZykgdGhpcy5jbGllbnRzID0gbmV3IFNldCgpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xvc2UgKGNiKSB7XG4gICAgLy9cbiAgICAvLyBUZXJtaW5hdGUgYWxsIGFzc29jaWF0ZWQgY2xpZW50cy5cbiAgICAvL1xuICAgIGlmICh0aGlzLmNsaWVudHMpIHtcbiAgICAgIGZvciAoY29uc3QgY2xpZW50IG9mIHRoaXMuY2xpZW50cykgY2xpZW50LnRlcm1pbmF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuX3NlcnZlcjtcblxuICAgIGlmIChzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3VsdHJvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl91bHRyb24gPSB0aGlzLl9zZXJ2ZXIgPSBudWxsO1xuXG4gICAgICAvL1xuICAgICAgLy8gQ2xvc2UgdGhlIGh0dHAgc2VydmVyIGlmIGl0IHdhcyBpbnRlcm5hbGx5IGNyZWF0ZWQuXG4gICAgICAvL1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3J0ICE9IG51bGwpIHJldHVybiBzZXJ2ZXIuY2xvc2UoY2IpO1xuICAgIH1cblxuICAgIGlmIChjYikgY2IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgaWYgYSBnaXZlbiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgUmVxdWVzdCBvYmplY3QgdG8gaW5zcGVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHJlcXVlc3QgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaG91bGRIYW5kbGUgKHJlcSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGF0aCAmJiB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWUgIT09IHRoaXMub3B0aW9ucy5wYXRoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgSFRUUCBVcGdyYWRlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBUaGUgcmVxdWVzdCBvYmplY3RcbiAgICogQHBhcmFtIHtuZXQuU29ja2V0fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBoYW5kbGVVcGdyYWRlIChyZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0RXJyb3IpO1xuXG4gICAgY29uc3QgdmVyc2lvbiA9ICtyZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC12ZXJzaW9uJ107XG5cbiAgICBpZiAoXG4gICAgICByZXEubWV0aG9kICE9PSAnR0VUJyB8fCByZXEuaGVhZGVycy51cGdyYWRlLnRvTG93ZXJDYXNlKCkgIT09ICd3ZWJzb2NrZXQnIHx8XG4gICAgICAhcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQta2V5J10gfHwgKHZlcnNpb24gIT09IDggJiYgdmVyc2lvbiAhPT0gMTMpIHx8XG4gICAgICAhdGhpcy5zaG91bGRIYW5kbGUocmVxKVxuICAgICkge1xuICAgICAgcmV0dXJuIGFib3J0Q29ubmVjdGlvbihzb2NrZXQsIDQwMCk7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvY29sID0gKHJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LXByb3RvY29sJ10gfHwgJycpLnNwbGl0KC8sICovKTtcblxuICAgIC8vXG4gICAgLy8gT3B0aW9uYWxseSBjYWxsIGV4dGVybmFsIHByb3RvY29sIHNlbGVjdGlvbiBoYW5kbGVyLlxuICAgIC8vXG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVQcm90b2NvbHMpIHtcbiAgICAgIHByb3RvY29sID0gdGhpcy5vcHRpb25zLmhhbmRsZVByb3RvY29scyhwcm90b2NvbCwgcmVxKTtcbiAgICAgIGlmIChwcm90b2NvbCA9PT0gZmFsc2UpIHJldHVybiBhYm9ydENvbm5lY3Rpb24oc29ja2V0LCA0MDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm90b2NvbCA9IHByb3RvY29sWzBdO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gT3B0aW9uYWxseSBjYWxsIGV4dGVybmFsIGNsaWVudCB2ZXJpZmljYXRpb24gaGFuZGxlci5cbiAgICAvL1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBvcmlnaW46IHJlcS5oZWFkZXJzW2Ake3ZlcnNpb24gPT09IDggPyAnc2VjLXdlYnNvY2tldC1vcmlnaW4nIDogJ29yaWdpbid9YF0sXG4gICAgICAgIHNlY3VyZTogISEocmVxLmNvbm5lY3Rpb24uYXV0aG9yaXplZCB8fCByZXEuY29ubmVjdGlvbi5lbmNyeXB0ZWQpLFxuICAgICAgICByZXFcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KGluZm8sICh2ZXJpZmllZCwgY29kZSwgbWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmICghdmVyaWZpZWQpIHJldHVybiBhYm9ydENvbm5lY3Rpb24oc29ja2V0LCBjb2RlIHx8IDQwMSwgbWVzc2FnZSk7XG5cbiAgICAgICAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShwcm90b2NvbCwgdmVyc2lvbiwgcmVxLCBzb2NrZXQsIGhlYWQsIGNiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbykpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0Q29ubmVjdGlvbihzb2NrZXQsIDQwMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wbGV0ZVVwZ3JhZGUocHJvdG9jb2wsIHZlcnNpb24sIHJlcSwgc29ja2V0LCBoZWFkLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZSB0aGUgY29ubmVjdGlvbiB0byBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbCBUaGUgY2hvc2VuIHN1YnByb3RvY29sXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIFRoZSBXZWJTb2NrZXQgcHJvdG9jb2wgdmVyc2lvblxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7bmV0LlNvY2tldH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbXBsZXRlVXBncmFkZSAocHJvdG9jb2wsIHZlcnNpb24sIHJlcSwgc29ja2V0LCBoZWFkLCBjYikge1xuICAgIC8vXG4gICAgLy8gRGVzdHJveSB0aGUgc29ja2V0IGlmIHRoZSBjbGllbnQgaGFzIGFscmVhZHkgc2VudCBhIEZJTiBwYWNrZXQuXG4gICAgLy9cbiAgICBpZiAoIXNvY2tldC5yZWFkYWJsZSB8fCAhc29ja2V0LndyaXRhYmxlKSByZXR1cm4gc29ja2V0LmRlc3Ryb3koKTtcblxuICAgIGNvbnN0IGtleSA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUocmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQta2V5J10gKyBjb25zdGFudHMuR1VJRCwgJ2JpbmFyeScpXG4gICAgICAuZGlnZXN0KCdiYXNlNjQnKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAnSFRUUC8xLjEgMTAxIFN3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgJ1VwZ3JhZGU6IHdlYnNvY2tldCcsXG4gICAgICAnQ29ubmVjdGlvbjogVXBncmFkZScsXG4gICAgICBgU2VjLVdlYlNvY2tldC1BY2NlcHQ6ICR7a2V5fWBcbiAgICBdO1xuXG4gICAgaWYgKHByb3RvY29sKSBoZWFkZXJzLnB1c2goYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2w6ICR7cHJvdG9jb2x9YCk7XG5cbiAgICBjb25zdCBvZmZlciA9IEV4dGVuc2lvbnMucGFyc2UocmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddKTtcbiAgICB2YXIgZXh0ZW5zaW9ucztcblxuICAgIHRyeSB7XG4gICAgICBleHRlbnNpb25zID0gYWNjZXB0RXh0ZW5zaW9ucyh0aGlzLm9wdGlvbnMsIG9mZmVyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBhYm9ydENvbm5lY3Rpb24oc29ja2V0LCA0MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoZXh0ZW5zaW9ucyk7XG5cbiAgICBpZiAocHJvcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzZXJ2ZXJFeHRlbnNpb25zID0gcHJvcHMucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICBvYmpba2V5XSA9IFtleHRlbnNpb25zW2tleV0ucGFyYW1zXTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnM6ICR7RXh0ZW5zaW9ucy5mb3JtYXQoc2VydmVyRXh0ZW5zaW9ucyl9YCk7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBBbGxvdyBleHRlcm5hbCBtb2RpZmljYXRpb24vaW5zcGVjdGlvbiBvZiBoYW5kc2hha2UgaGVhZGVycy5cbiAgICAvL1xuICAgIHRoaXMuZW1pdCgnaGVhZGVycycsIGhlYWRlcnMsIHJlcSk7XG5cbiAgICBzb2NrZXQud3JpdGUoaGVhZGVycy5jb25jYXQoJycsICcnKS5qb2luKCdcXHJcXG4nKSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBuZXcgV2ViU29ja2V0KFtzb2NrZXQsIGhlYWRdLCBudWxsLCB7XG4gICAgICBtYXhQYXlsb2FkOiB0aGlzLm9wdGlvbnMubWF4UGF5bG9hZCxcbiAgICAgIHByb3RvY29sVmVyc2lvbjogdmVyc2lvbixcbiAgICAgIGV4dGVuc2lvbnMsXG4gICAgICBwcm90b2NvbFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgdGhpcy5jbGllbnRzLmFkZChjbGllbnQpO1xuICAgICAgY2xpZW50Lm9uKCdjbG9zZScsICgpID0+IHRoaXMuY2xpZW50cy5kZWxldGUoY2xpZW50KSk7XG4gICAgfVxuXG4gICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIHNvY2tldEVycm9yKTtcbiAgICBjYihjbGllbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0U2VydmVyO1xuXG4vKipcbiAqIEhhbmRsZSBwcmVtYXR1cmUgc29ja2V0IGVycm9ycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRFcnJvciAoKSB7XG4gIHRoaXMuZGVzdHJveSgpO1xufVxuXG4vKipcbiAqIEFjY2VwdCBXZWJTb2NrZXQgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgYFdlYlNvY2tldFNlcnZlcmAgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2ZmZXIgVGhlIHBhcnNlZCB2YWx1ZSBvZiB0aGUgYHNlYy13ZWJzb2NrZXQtZXh0ZW5zaW9uc2AgaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFjY2VwdGVkIGV4dGVuc2lvbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFjY2VwdEV4dGVuc2lvbnMgKG9wdGlvbnMsIG9mZmVyKSB7XG4gIGNvbnN0IHBtZCA9IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGU7XG4gIGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblxuICBpZiAocG1kICYmIG9mZmVyW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSBuZXcgUGVyTWVzc2FnZURlZmxhdGUoXG4gICAgICBwbWQgIT09IHRydWUgPyBwbWQgOiB7fSxcbiAgICAgIHRydWUsXG4gICAgICBvcHRpb25zLm1heFBheWxvYWRcbiAgICApO1xuXG4gICAgcGVyTWVzc2FnZURlZmxhdGUuYWNjZXB0KG9mZmVyW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKTtcbiAgICBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID0gcGVyTWVzc2FnZURlZmxhdGU7XG4gIH1cblxuICByZXR1cm4gZXh0ZW5zaW9ucztcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHByZWNvbmRpdGlvbnMgYXJlIG5vdCBmdWxmaWxsZWQuXG4gKlxuICogQHBhcmFtIHtuZXQuU29ja2V0fSBzb2NrZXQgVGhlIHNvY2tldCBvZiB0aGUgdXBncmFkZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgSFRUUCByZXNwb25zZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtTdHJpbmd9IFttZXNzYWdlXSBUaGUgSFRUUCByZXNwb25zZSBib2R5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhYm9ydENvbm5lY3Rpb24gKHNvY2tldCwgY29kZSwgbWVzc2FnZSkge1xuICBpZiAoc29ja2V0LndyaXRhYmxlKSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgaHR0cC5TVEFUVVNfQ09ERVNbY29kZV07XG4gICAgc29ja2V0LndyaXRlKFxuICAgICAgYEhUVFAvMS4xICR7Y29kZX0gJHtodHRwLlNUQVRVU19DT0RFU1tjb2RlXX1cXHJcXG5gICtcbiAgICAgICdDb25uZWN0aW9uOiBjbG9zZVxcclxcbicgK1xuICAgICAgJ0NvbnRlbnQtdHlwZTogdGV4dC9odG1sXFxyXFxuJyArXG4gICAgICBgQ29udGVudC1MZW5ndGg6ICR7QnVmZmVyLmJ5dGVMZW5ndGgobWVzc2FnZSl9XFxyXFxuYCArXG4gICAgICAnXFxyXFxuJyArXG4gICAgICBtZXNzYWdlXG4gICAgKTtcbiAgfVxuXG4gIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBzb2NrZXRFcnJvcik7XG4gIHNvY2tldC5kZXN0cm95KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL1dlYlNvY2tldFNlcnZlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=