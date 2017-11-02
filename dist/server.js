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
        ws.send(message);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDAwMTJkNmM0ZGUxYjkyNzk2MzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9yb3V0ZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJldHRlci1zdGF0aWMyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci90ZW1wbGF0ZXMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL1Blck1lc3NhZ2VEZWZsYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvQnVmZmVyVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL1dlYlNvY2tldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWx0cm9uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9SZWNlaXZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MvbGliL0Vycm9yQ29kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9TZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3luYy1saW1pdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvRXZlbnRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dzL2xpYi9WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93cy9saWIvV2ViU29ja2V0U2VydmVyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYXBwIiwid3NzIiwiU2VydmVyIiwicG9ydCIsInVzZSIsImN0eCIsIm5leHQiLCJyb3V0ZXMiLCJhbGxvd2VkTWV0aG9kcyIsImxpc3RlbiIsIm9uIiwiY29ubmVjdGlvbiIsIndzIiwiaW5jb21pbmciLCJtZXNzYWdlIiwibG9nIiwic2VuZCIsInJvdXRlciIsImdldCIsInN0YXJ0VGltZSIsImhydGltZSIsInRpdGxlIiwiYm9keSIsInBhZ2UiLCJoZWFkZXJfdHBsIiwiYm9keV90cGwiLCJmb290ZXJfdHBsIiwiY2hhcnNldCIsImNzc0hyZWYiLCJOU19QRVJfU0VDIiwiZGlmZiIsImJ1ZmZlciIsInJlcXVpcmUiLCJCdWZmZXIiLCJjb3B5UHJvcHMiLCJzcmMiLCJkc3QiLCJrZXkiLCJmcm9tIiwiYWxsb2MiLCJhbGxvY1Vuc2FmZSIsImFsbG9jVW5zYWZlU2xvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTYWZlQnVmZmVyIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImxlbmd0aCIsIlR5cGVFcnJvciIsInNpemUiLCJmaWxsIiwiZW5jb2RpbmciLCJidWYiLCJ1bmRlZmluZWQiLCJTbG93QnVmZmVyIiwic2FmZUJ1ZmZlciIsInpsaWIiLCJMaW1pdGVyIiwiYnVmZmVyVXRpbCIsIlRSQUlMRVIiLCJFTVBUWV9CTE9DSyIsInpsaWJMaW1pdGVyIiwiUGVyTWVzc2FnZURlZmxhdGUiLCJvcHRpb25zIiwiaXNTZXJ2ZXIiLCJtYXhQYXlsb2FkIiwiX21heFBheWxvYWQiLCJfb3B0aW9ucyIsIl90aHJlc2hvbGQiLCJ0aHJlc2hvbGQiLCJfaXNTZXJ2ZXIiLCJfZGVmbGF0ZSIsIl9pbmZsYXRlIiwicGFyYW1zIiwiY29uY3VycmVuY3kiLCJjb25jdXJyZW5jeUxpbWl0Iiwic2VydmVyTm9Db250ZXh0VGFrZW92ZXIiLCJzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciIsImNsaWVudE5vQ29udGV4dFRha2VvdmVyIiwiY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIiLCJzZXJ2ZXJNYXhXaW5kb3dCaXRzIiwic2VydmVyX21heF93aW5kb3dfYml0cyIsImNsaWVudE1heFdpbmRvd0JpdHMiLCJjbGllbnRfbWF4X3dpbmRvd19iaXRzIiwicGFyYW1zTGlzdCIsIm5vcm1hbGl6ZVBhcmFtcyIsImFjY2VwdEFzU2VydmVyIiwiYWNjZXB0QXNDbGllbnQiLCJ3cml0ZUluUHJvZ3Jlc3MiLCJwZW5kaW5nQ2xvc2UiLCJjbG9zZSIsImFjY2VwdGVkIiwicmVzdWx0Iiwic29tZSIsIkVycm9yIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJaX01JTl9XSU5ET1dCSVRTIiwiWl9NQVhfV0lORE9XQklUUyIsImRhdGEiLCJmaW4iLCJjYWxsYmFjayIsInB1c2giLCJkb25lIiwiX2RlY29tcHJlc3MiLCJlcnIiLCJfY29tcHJlc3MiLCJlbmRwb2ludCIsIndpbmRvd0JpdHMiLCJaX0RFRkFVTFRfV0lORE9XQklUUyIsImNyZWF0ZUluZmxhdGVSYXciLCJ0b3RhbExlbmd0aCIsImJ1ZmZlcnMiLCJvbkRhdGEiLCJjbG9zZUNvZGUiLCJyZXNldCIsIm9uRXJyb3IiLCJjbGVhbnVwIiwicmVtb3ZlTGlzdGVuZXIiLCJ3cml0ZSIsImZsdXNoIiwiY29uY2F0IiwibmV4dFRpY2siLCJjcmVhdGVEZWZsYXRlUmF3IiwibWVtTGV2ZWwiLCJsZXZlbCIsIlpfU1lOQ19GTFVTSCIsInNsaWNlIiwibGlzdCIsInRhcmdldCIsIm9mZnNldCIsImkiLCJjb3B5IiwiYXNzaWduIiwiQnVmZmVyVXRpbCIsImUiLCJtYXNrIiwic291cmNlIiwib3V0cHV0IiwidW5tYXNrIiwiQklOQVJZX1RZUEVTIiwiR1VJRCIsIkVNUFRZX0JVRkZFUiIsIk5PT1AiLCJFdmVudEVtaXR0ZXIiLCJjcnlwdG8iLCJVbHRyb24iLCJodHRwcyIsImh0dHAiLCJ1cmwiLCJFdmVudFRhcmdldCIsIkV4dGVuc2lvbnMiLCJjb25zdGFudHMiLCJSZWNlaXZlciIsIlNlbmRlciIsInByb3RvY29sVmVyc2lvbnMiLCJjbG9zZVRpbWVvdXQiLCJXZWJTb2NrZXQiLCJhZGRyZXNzIiwicHJvdG9jb2xzIiwiQXJyYXkiLCJpc0FycmF5IiwicmVhZHlTdGF0ZSIsIkNPTk5FQ1RJTkciLCJieXRlc1JlY2VpdmVkIiwiZXh0ZW5zaW9ucyIsInByb3RvY29sIiwiX2JpbmFyeVR5cGUiLCJfZmluYWxpemUiLCJmaW5hbGl6ZSIsImJpbmQiLCJfZmluYWxpemVDYWxsZWQiLCJfY2xvc2VNZXNzYWdlIiwiX2Nsb3NlVGltZXIiLCJfY2xvc2VDb2RlIiwiX3JlY2VpdmVyIiwiX3NlbmRlciIsIl9zb2NrZXQiLCJfdWx0cm9uIiwiaW5pdEFzU2VydmVyQ2xpZW50IiwiY2FsbCIsImluaXRBc0NsaWVudCIsInNvY2tldCIsImhlYWQiLCJzZXRUaW1lb3V0Iiwic2V0Tm9EZWxheSIsImJpbmFyeVR5cGUiLCJ1bnNoaWZ0IiwiYWRkIiwib25tZXNzYWdlIiwiZW1pdCIsIm9ucGluZyIsInBvbmciLCJvbnBvbmciLCJvbmNsb3NlIiwiY29kZSIsInJlYXNvbiIsIm9uZXJyb3IiLCJlcnJvciIsIk9QRU4iLCJDTE9TSU5HIiwiY2xlYXJUaW1lb3V0IiwiZGVzdHJveSIsImVuZCIsImVtaXRDbG9zZSIsIkNMT1NFRCIsImV4dGVuc2lvbk5hbWUiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJwYXVzZSIsInJlc3VtZSIsIl9yZXEiLCJhYm9ydGVkIiwiYWJvcnQiLCJmYWlsU2lsZW50bHkiLCJ0b1N0cmluZyIsInBpbmciLCJjYiIsIm9wdHMiLCJiaW5hcnkiLCJjb21wcmVzcyIsImFtb3VudCIsImJ1ZmZlclNpemUiLCJfYnVmZmVyZWRCeXRlcyIsInR5cGUiLCJpbmRleE9mIiwibWV0aG9kIiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJsaXN0ZW5lcnMiLCJfbGlzdGVuZXIiLCJzZXQiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG9jb2xWZXJzaW9uIiwic2V0U29ja2V0Iiwiam9pbiIsInBlck1lc3NhZ2VEZWZsYXRlIiwiaGFuZHNoYWtlVGltZW91dCIsImxvY2FsQWRkcmVzcyIsImhlYWRlcnMiLCJmYW1pbHkiLCJvcmlnaW4iLCJhZ2VudCIsImhvc3QiLCJjaGVja1NlcnZlcklkZW50aXR5IiwicmVqZWN0VW5hdXRob3JpemVkIiwicGFzc3BocmFzZSIsImNpcGhlcnMiLCJjZXJ0IiwicGZ4IiwiY2EiLCJzZXJ2ZXJVcmwiLCJwYXJzZSIsImlzVW5peFNvY2tldCIsInBhdGgiLCJpc1NlY3VyZSIsInJhbmRvbUJ5dGVzIiwiaHR0cE9iaiIsImV4dGVuc2lvbnNPZmZlciIsIm9mZmVyIiwicmVxdWVzdE9wdGlvbnMiLCJob3N0bmFtZSIsImZvcm1hdCIsIk9yaWdpbiIsIkhvc3QiLCJhdXRoIiwicGFydHMiLCJzcGxpdCIsInNvY2tldFBhdGgiLCJjaGFyQXQiLCJBZ2VudCIsInJlcyIsInN0YXR1c0NvZGUiLCJkaWdlc3QiLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwic2VydmVyUHJvdCIsInByb3RMaXN0IiwicHJvdEVycm9yIiwic2VydmVyRXh0ZW5zaW9ucyIsImFjY2VwdCIsImhhcyIsImhhc093blByb3BlcnR5IiwiaWQiLCJlZSIsImV2ZW50IiwiZm4iLCJjb250ZXh0IiwiX191bHRyb24iLCJvbmNlIiwicmVtb3ZlIiwiYXJncyIsImFyZ3VtZW50cyIsImV2ZW50TmFtZXMiLCJfZXZlbnRzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaiIsInYiLCJ0b2tlbiIsInNoaWZ0IiwidHJpbSIsInBhcnNlZFBhcmFtcyIsInBhcmFtIiwiayIsInAiLCJpc1ZhbGlkVVRGOCIsIkVycm9yQ29kZXMiLCJHRVRfSU5GTyIsIkdFVF9QQVlMT0FEX0xFTkdUSF8xNiIsIkdFVF9QQVlMT0FEX0xFTkdUSF82NCIsIkdFVF9NQVNLIiwiR0VUX0RBVEEiLCJJTkZMQVRJTkciLCJfZXh0ZW5zaW9ucyIsIl9idWZmZXJzIiwiX2NvbXByZXNzZWQiLCJfcGF5bG9hZExlbmd0aCIsIl9mcmFnbWVudGVkIiwiX21hc2tlZCIsIl9maW4iLCJfbWFzayIsIl9vcGNvZGUiLCJfdG90YWxQYXlsb2FkTGVuZ3RoIiwiX21lc3NhZ2VMZW5ndGgiLCJfZnJhZ21lbnRzIiwiX2NsZWFudXBDYWxsYmFjayIsIl9oYWRFcnJvciIsIl9kZWFkIiwiX2xvb3AiLCJfc3RhdGUiLCJieXRlcyIsImwiLCJuIiwic3RhcnRMb29wIiwiZ2V0SW5mbyIsImdldFBheWxvYWRMZW5ndGgxNiIsImdldFBheWxvYWRMZW5ndGg2NCIsImdldE1hc2siLCJnZXREYXRhIiwiaGFzQnVmZmVyZWRCeXRlcyIsInJlYWRCdWZmZXIiLCJjb21wcmVzc2VkIiwiaGF2ZUxlbmd0aCIsInJlYWRVSW50MTZCRSIsIm51bSIsInJlYWRVSW50MzJCRSIsIk1hdGgiLCJwb3ciLCJtYXhQYXlsb2FkRXhjZWVkZWQiLCJjb250cm9sTWVzc2FnZSIsImRlY29tcHJlc3MiLCJwdXNoRnJhZ21lbnQiLCJkYXRhTWVzc2FnZSIsIm1lc3NhZ2VMZW5ndGgiLCJmcmFnbWVudHMiLCJ0b0J1ZmZlciIsInRvQXJyYXlCdWZmZXIiLCJpc1ZhbGlkRXJyb3JDb2RlIiwiZnVsbExlbmd0aCIsImZyYWdtZW50IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJfZmlyc3RGcmFnbWVudCIsIl9kZWZsYXRpbmciLCJfcXVldWUiLCJ3cml0ZVVJbnQxNkJFIiwiZW5xdWV1ZSIsImRvQ2xvc2UiLCJzZW5kRnJhbWUiLCJmcmFtZSIsInJzdjEiLCJvcGNvZGUiLCJyZWFkT25seSIsImlzQnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJ2aWV3VG9CdWZmZXIiLCJkb1BpbmciLCJkb1BvbmciLCJkaXNwYXRjaCIsImRlcXVldWUiLCJhcHBseSIsIm1lcmdlIiwicGF5bG9hZExlbmd0aCIsIndyaXRlVUludDMyQkUiLCJ2aWV3IiwiUXVldWUiLCJJbmZpbml0eSIsInBlbmRpbmciLCJqb2JzIiwiY2JzIiwiX2RvbmUiLCJhcnJheUFkZE1ldGhvZHMiLCJtZXRob2RSZXN1bHQiLCJfcnVuIiwiam9iIiwicG9wIiwib25Eb25lIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJDbG9zZUV2ZW50Iiwid2FzQ2xlYW4iLCJPcGVuRXZlbnQiLCJvbk1lc3NhZ2UiLCJvbkNsb3NlIiwib25PcGVuIiwiVmFsaWRhdGlvbiIsIldlYlNvY2tldFNlcnZlciIsImhhbmRsZVByb3RvY29scyIsImNsaWVudFRyYWNraW5nIiwidmVyaWZ5Q2xpZW50Iiwibm9TZXJ2ZXIiLCJiYWNrbG9nIiwic2VydmVyIiwiX3NlcnZlciIsImNyZWF0ZVNlcnZlciIsInJlcSIsIlNUQVRVU19DT0RFUyIsIndyaXRlSGVhZCIsImFsbG93SGFsZk9wZW4iLCJoYW5kbGVVcGdyYWRlIiwiY2xpZW50IiwiY2xpZW50cyIsIlNldCIsInRlcm1pbmF0ZSIsInBhdGhuYW1lIiwic29ja2V0RXJyb3IiLCJ2ZXJzaW9uIiwidXBncmFkZSIsInRvTG93ZXJDYXNlIiwic2hvdWxkSGFuZGxlIiwiYWJvcnRDb25uZWN0aW9uIiwic2VjdXJlIiwiYXV0aG9yaXplZCIsImVuY3J5cHRlZCIsInZlcmlmaWVkIiwiY29tcGxldGVVcGdyYWRlIiwicmVhZGFibGUiLCJ3cml0YWJsZSIsImFjY2VwdEV4dGVuc2lvbnMiLCJwcm9wcyIsInJlZHVjZSIsIm9iaiIsImRlbGV0ZSIsInBtZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBRkFBLFFBQVFDLElBQVIsQ0FBYSxNQUFiLEVBQXFCQyxRQUFRQyxHQUFSLENBQVlDLFFBQWpDOztBQUtBO0FBQ0EsSUFBTUMsTUFBTSxtQkFBWjtBQUNBLElBQU1DLE1BQU0sSUFBSSxhQUFVQyxNQUFkLENBQXFCLEVBQUVDLE1BQU0sSUFBUixFQUFyQixDQUFaOztBQUVBO0FBQ0FILElBQUlJLEdBQUosQ0FBUSwwQkFBUixFQUNLQSxHQURMLENBQ1MsZ0JBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDNUIsUUFBSVQsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLEtBQTdCLEVBQW9DO0FBQ2hDTSxZQUFJUCxHQUFKLEdBQVVELFFBQVFDLEdBQVIsQ0FBWUMsUUFBdEI7QUFDSDtBQUNELFVB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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwMDEyZDZjNGRlMWI5Mjc5NjM3IiwiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCByb290IGZyb20gJy4vcm91dGVzL3Jvb3QnXG5jb25zb2xlLmluZm8oJ0VudjonLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnd3MnO1xuXG5cbi8vIGNyZWF0ZSBrb2Egc2VydmVyXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7IFxuY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldC5TZXJ2ZXIoeyBwb3J0OiA4MDgxIH0pO1xuXG4vLyB1c2UgbG9nZ2VyLCByb3V0ZXNcbmFwcC51c2UobG9nZ2VyKCkpXG4gICAgLnVzZShhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldicpIHtcbiAgICAgICAgICAgIGN0eC5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgfSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcblxuLy8gVE9ETzogY29tYmluZSB3cyB3aXRoIEtvYSBmb3IgYmV0dGVyIGFuZCBlYXN5IGRldlxud3NzLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gY29ubmVjdGlvbih3cykge1xuICAgICAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBpbmNvbWluZyhtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgICAgd3Muc2VuZChtZXNzYWdlKTtcbiAgICAgIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2FcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLWxvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgc2VydmUgZnJvbSAna29hLWJldHRlci1zdGF0aWMyJztcbmltcG9ydCBwYWdlIGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZXMnO1xuXG4vLyBjcmVhdGUgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4vLyBzdGF0aWMgYXNzZXRzXG5yb3V0ZXIuZ2V0KCcvKicsIHNlcnZlKCcuJykpO1xuXG4vLyByb290XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5zdGFydFRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgIGN0eC50aXRsZSA9IGBFYDtcbiAgICBjdHguYm9keSA9IHBhZ2UoY3R4KTtcbn0pO1xuXG4vLyB0ZXN0IHBhdGhcbnJvdXRlci5nZXQoJy90ZXN0JywgYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xuICAgIGN0eC5ib2R5ID0gJ2dldCAvdGVzdDInO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1iZXR0ZXItc3RhdGljMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1iZXR0ZXItc3RhdGljMlwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlZmF1bHQgcGFnZSB0ZW1wYWxhdGVcbmNvbnN0IHBhZ2UgPSAoY3R4KSA9PiBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAke2hlYWRlcl90cGwoY3R4KX1cbiAgICAke2JvZHlfdHBsKGN0eCl9XG4gICAgJHtmb290ZXJfdHBsKGN0eCl9XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2luZGV4LmpzXCI+PC9zY3JpcHQ+XG48L2h0bWw+YDtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcblxuLy8gYm9keSB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGJvZHlfdHBsID0gKHtib2R5PWA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PmB9PXt9KSA9PiB7XG4gICAgcmV0dXJuIGA8Ym9keT4ke2JvZHl9PC9ib2R5PmA7XG59XG5cbi8vIGhlYWRlciB0ZW1wbGF0ZVxuZXhwb3J0IGNvbnN0IGhlYWRlcl90cGwgPSAoe3RpdGxlPVwic2VydmVyVGVtcGxhdGVcIiwgY2hhcnNldD1cIlVURi04XCIsIGNzc0hyZWY9XCJwdWJsaWMvY3NzL3N0eWxlLmNzc1wifT17fSkgPT4gYDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCIke2NoYXJzZXR9XCIvPlxuICAgIDx0aXRsZT4ke3RpdGxlfTwvdGl0bGU+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0hyZWZ9XCIgLz5cbjwvaGVhZD5gO1xuXG4vLyBmb290ZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBmb290ZXJfdHBsID0gKHtzdGFydFRpbWV9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgTlNfUEVSX1NFQyA9IDFlOTtcbiAgICBjb25zdCBkaWZmID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnRUaW1lKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5QYWdlIGdlbmVyYXRlIHRpbWU6ICR7ZGlmZlswXSAqIE5TX1BFUl9TRUMgKyBkaWZmWzFdfSBuYW5vc2Vjb25kczwvc21hbGw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKVxudmFyIEJ1ZmZlciA9IGJ1ZmZlci5CdWZmZXJcblxuLy8gYWx0ZXJuYXRpdmUgdG8gdXNpbmcgT2JqZWN0LmtleXMgZm9yIG9sZCBicm93c2Vyc1xuZnVuY3Rpb24gY29weVByb3BzIChzcmMsIGRzdCkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgZHN0W2tleV0gPSBzcmNba2V5XVxuICB9XG59XG5pZiAoQnVmZmVyLmZyb20gJiYgQnVmZmVyLmFsbG9jICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG59IGVsc2Uge1xuICAvLyBDb3B5IHByb3BlcnRpZXMgZnJvbSByZXF1aXJlKCdidWZmZXInKVxuICBjb3B5UHJvcHMoYnVmZmVyLCBleHBvcnRzKVxuICBleHBvcnRzLkJ1ZmZlciA9IFNhZmVCdWZmZXJcbn1cblxuZnVuY3Rpb24gU2FmZUJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhZmVCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpO1xuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbmNvbnN0IExpbWl0ZXIgPSByZXF1aXJlKCdhc3luYy1saW1pdGVyJyk7XG5cbmNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuL0J1ZmZlclV0aWwnKTtcblxuY29uc3QgQnVmZmVyID0gc2FmZUJ1ZmZlci5CdWZmZXI7XG5cbmNvbnN0IFRSQUlMRVIgPSBCdWZmZXIuZnJvbShbMHgwMCwgMHgwMCwgMHhmZiwgMHhmZl0pO1xuY29uc3QgRU1QVFlfQkxPQ0sgPSBCdWZmZXIuZnJvbShbMHgwMF0pO1xuXG4vLyBXZSBsaW1pdCB6bGliIGNvbmN1cnJlbmN5LCB3aGljaCBwcmV2ZW50cyBzZXZlcmUgbWVtb3J5IGZyYWdtZW50YXRpb25cbi8vIGFzIGRvY3VtZW50ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy84ODcxI2lzc3VlY29tbWVudC0yNTA5MTU5MTNcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9pc3N1ZXMvMTIwMlxuLy9cbi8vIEludGVudGlvbmFsbHkgZ2xvYmFsOyBpdCdzIHRoZSBnbG9iYWwgdGhyZWFkIHBvb2wgdGhhdCdzXG4vLyBhbiBpc3N1ZS5cbmxldCB6bGliTGltaXRlcjtcblxuLyoqXG4gKiBQZXItbWVzc2FnZSBEZWZsYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBQZXJNZXNzYWdlRGVmbGF0ZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zLCBpc1NlcnZlciwgbWF4UGF5bG9hZCkge1xuICAgIHRoaXMuX21heFBheWxvYWQgPSBtYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl90aHJlc2hvbGQgPSB0aGlzLl9vcHRpb25zLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMuX29wdGlvbnMudGhyZXNob2xkXG4gICAgICA6IDEwMjQ7XG4gICAgdGhpcy5faXNTZXJ2ZXIgPSAhIWlzU2VydmVyO1xuICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuICAgIHRoaXMuX2luZmxhdGUgPSBudWxsO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBudWxsO1xuXG4gICAgaWYgKCF6bGliTGltaXRlcikge1xuICAgICAgY29uc3QgY29uY3VycmVuY3kgPSB0aGlzLl9vcHRpb25zLmNvbmN1cnJlbmN5TGltaXQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdFxuICAgICAgICA6IDEwO1xuICAgICAgemxpYkxpbWl0ZXIgPSBuZXcgTGltaXRlcih7IGNvbmN1cnJlbmN5IH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZXh0ZW5zaW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuICdwZXJtZXNzYWdlLWRlZmxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBleHRlbnNpb24gcGFyYW1ldGVycyBvZmZlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBvZmZlciAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgcGFyYW1zLnNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMpIHtcbiAgICAgIHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5zZXJ2ZXJNYXhXaW5kb3dCaXRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzKSB7XG4gICAgICBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyA9IHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PSBudWxsKSB7XG4gICAgICBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0ZW5zaW9uIG9mZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNMaXN0IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHVibGljXG4gICAqL1xuICBhY2NlcHQgKHBhcmFtc0xpc3QpIHtcbiAgICBwYXJhbXNMaXN0ID0gdGhpcy5ub3JtYWxpemVQYXJhbXMocGFyYW1zTGlzdCk7XG5cbiAgICB2YXIgcGFyYW1zO1xuICAgIGlmICh0aGlzLl9pc1NlcnZlcikge1xuICAgICAgcGFyYW1zID0gdGhpcy5hY2NlcHRBc1NlcnZlcihwYXJhbXNMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gdGhpcy5hY2NlcHRBc0NsaWVudChwYXJhbXNMaXN0KTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIGFsbCByZXNvdXJjZXMgdXNlZCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjbGVhbnVwICgpIHtcbiAgICBpZiAodGhpcy5faW5mbGF0ZSkge1xuICAgICAgaWYgKHRoaXMuX2luZmxhdGUud3JpdGVJblByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUucGVuZGluZ0Nsb3NlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZsYXRlKSB7XG4gICAgICBpZiAodGhpcy5fZGVmbGF0ZS53cml0ZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5wZW5kaW5nQ2xvc2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0IGV4dGVuc2lvbiBvZmZlciBmcm9tIGNsaWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zTGlzdCBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFjY2VwdGVkIGNvbmZpZ3VyYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjY2VwdEFzU2VydmVyIChwYXJhbXNMaXN0KSB7XG4gICAgY29uc3QgYWNjZXB0ZWQgPSB7fTtcbiAgICBjb25zdCByZXN1bHQgPSBwYXJhbXNMaXN0LnNvbWUoKHBhcmFtcykgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAodGhpcy5fb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3ZlciA9PT0gZmFsc2UgJiZcbiAgICAgICAgICBwYXJhbXMuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIpIHx8XG4gICAgICAgICh0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMgPT09IGZhbHNlICYmXG4gICAgICAgICAgcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMpIHx8XG4gICAgICAgICh0eXBlb2YgdGhpcy5fb3B0aW9ucy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgIHR5cGVvZiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMgPiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cykgfHxcbiAgICAgICAgKHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgIXBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyIHx8XG4gICAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlclxuICAgICAgKSB7XG4gICAgICAgIGFjY2VwdGVkLnNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3ZlciB8fFxuICAgICAgICAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3ZlciAhPT0gZmFsc2UgJiZcbiAgICAgICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIpXG4gICAgICApIHtcbiAgICAgICAgYWNjZXB0ZWQuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFjY2VwdGVkLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWNjZXB0ZWQuc2VydmVyX21heF93aW5kb3dfYml0cyA9IHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFjY2VwdGVkLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgIT09IGZhbHNlICYmXG4gICAgICAgIHR5cGVvZiBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyA9PT0gJ251bWJlcidcbiAgICAgICkge1xuICAgICAgICBhY2NlcHRlZC5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgRXJyb3IoXCJEb2Vzbid0IHN1cHBvcnQgdGhlIG9mZmVyZWQgY29uZmlndXJhdGlvblwiKTtcblxuICAgIHJldHVybiBhY2NlcHRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0ZW5zaW9uIHJlc3BvbnNlIGZyb20gc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNMaXN0IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNDbGllbnQgKHBhcmFtc0xpc3QpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBwYXJhbXNMaXN0WzBdO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE5vQ29udGV4dFRha2VvdmVyID09PSBmYWxzZSAmJlxuICAgICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIFwiY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcIicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzICE9IG51bGwpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSBmYWxzZSAmJlxuICAgICAgICBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0c1xuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgXCJjbGllbnRfbWF4X3dpbmRvd19iaXRzXCInKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgKCFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyB8fFxuICAgICAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID4gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgXCJjbGllbnRfbWF4X3dpbmRvd19iaXRzXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBleHRlbnNpb25zIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc0xpc3QgRXh0ZW5zaW9uIHBhcmFtZXRlcnNcbiAgICogQHJldHVybiB7QXJyYXl9IE5vcm1hbGl6ZWQgZXh0ZW5zaW9ucyBwYXJhbWV0ZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBub3JtYWxpemVQYXJhbXMgKHBhcmFtc0xpc3QpIHtcbiAgICByZXR1cm4gcGFyYW1zTGlzdC5tYXAoKHBhcmFtcykgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBleHRlbnNpb24gcGFyYW1ldGVycyBmb3IgJHtrZXl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAnc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXInOlxuICAgICAgICAgIGNhc2UgJ2NsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyJzpcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgZXh0ZW5zaW9uIHBhcmFtZXRlciB2YWx1ZSBmb3IgJHtrZXl9ICgke3ZhbHVlfSlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3NlcnZlcl9tYXhfd2luZG93X2JpdHMnOlxuICAgICAgICAgIGNhc2UgJ2NsaWVudF9tYXhfd2luZG93X2JpdHMnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzTmFOKHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIHZhbHVlIDwgemxpYi5aX01JTl9XSU5ET1dCSVRTIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUgPiB6bGliLlpfTUFYX1dJTkRPV0JJVFNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGV4dGVuc2lvbiBwYXJhbWV0ZXIgdmFsdWUgZm9yICR7a2V5fSAoJHt2YWx1ZX0pYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTZXJ2ZXIgJiYgdmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4dGVuc2lvbiBwYXJhbWV0ZXIgdmFsdWUgZm9yICR7a2V5fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBkZWZpbmVkIGV4dGVuc2lvbiBwYXJhbWV0ZXIgKCR7a2V5fSlgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZCBieSBhc3luYy1saW1pdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZGVjb21wcmVzcyAoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLnB1c2goKGRvbmUpID0+IHtcbiAgICAgIHRoaXMuX2RlY29tcHJlc3MoZGF0YSwgZmluLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wcmVzcyBkYXRhLiBDb25jdXJyZW5jeSBsaW1pdGVkIGJ5IGFzeW5jLWxpbWl0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29tcHJlc3MgKGRhdGEsIGZpbiwgY2FsbGJhY2spIHtcbiAgICB6bGliTGltaXRlci5wdXNoKChkb25lKSA9PiB7XG4gICAgICB0aGlzLl9jb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGVjb21wcmVzcyAoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnY2xpZW50JyA6ICdzZXJ2ZXInO1xuXG4gICAgaWYgKCF0aGlzLl9pbmZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPSB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgPyB6bGliLlpfREVGQVVMVF9XSU5ET1dCSVRTXG4gICAgICAgIDogdGhpcy5wYXJhbXNba2V5XTtcblxuICAgICAgdGhpcy5faW5mbGF0ZSA9IHpsaWIuY3JlYXRlSW5mbGF0ZVJhdyh7IHdpbmRvd0JpdHMgfSk7XG4gICAgfVxuICAgIHRoaXMuX2luZmxhdGUud3JpdGVJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuICAgIHZhciBlcnI7XG5cbiAgICBjb25zdCBvbkRhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgdG90YWxMZW5ndGggKz0gZGF0YS5sZW5ndGg7XG4gICAgICBpZiAodGhpcy5fbWF4UGF5bG9hZCA8IDEgfHwgdG90YWxMZW5ndGggPD0gdGhpcy5fbWF4UGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ21heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnKTtcbiAgICAgIGVyci5jbG9zZUNvZGUgPSAxMDA5O1xuICAgICAgdGhpcy5faW5mbGF0ZS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faW5mbGF0ZSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9pbmZsYXRlLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgdGhpcy5faW5mbGF0ZS5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uRGF0YSk7XG4gICAgICB0aGlzLl9pbmZsYXRlLndyaXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkgfHxcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5wZW5kaW5nQ2xvc2VcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9pbmZsYXRlLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuX2luZmxhdGUgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9pbmZsYXRlLm9uKCdlcnJvcicsIG9uRXJyb3IpLm9uKCdkYXRhJywgb25EYXRhKTtcbiAgICB0aGlzLl9pbmZsYXRlLndyaXRlKGRhdGEpO1xuICAgIGlmIChmaW4pIHRoaXMuX2luZmxhdGUud3JpdGUoVFJBSUxFUik7XG5cbiAgICB0aGlzLl9pbmZsYXRlLmZsdXNoKCgpID0+IHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGlmIChlcnIpIGNhbGxiYWNrKGVycik7XG4gICAgICBlbHNlIGNhbGxiYWNrKG51bGwsIGJ1ZmZlclV0aWwuY29uY2F0KGJ1ZmZlcnMsIHRvdGFsTGVuZ3RoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHJlc3MgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgRGF0YSB0byBjb21wcmVzc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbXByZXNzIChkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBudWxsLCBFTVBUWV9CTE9DSyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdzZXJ2ZXInIDogJ2NsaWVudCc7XG5cbiAgICBpZiAoIXRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9IHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgOiB0aGlzLnBhcmFtc1trZXldO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlID0gemxpYi5jcmVhdGVEZWZsYXRlUmF3KHtcbiAgICAgICAgbWVtTGV2ZWw6IHRoaXMuX29wdGlvbnMubWVtTGV2ZWwsXG4gICAgICAgIGxldmVsOiB0aGlzLl9vcHRpb25zLmxldmVsLFxuICAgICAgICBmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG4gICAgICAgIHdpbmRvd0JpdHNcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9kZWZsYXRlLndyaXRlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICAgIGNvbnN0IGJ1ZmZlcnMgPSBbXTtcblxuICAgIGNvbnN0IG9uRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICB0b3RhbExlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25FcnJvciA9IChlcnIpID0+IHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2RlZmxhdGUpIHJldHVybjtcblxuICAgICAgdGhpcy5fZGVmbGF0ZS5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgIHRoaXMuX2RlZmxhdGUucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBvbkRhdGEpO1xuICAgICAgdGhpcy5fZGVmbGF0ZS53cml0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoZmluICYmIHRoaXMucGFyYW1zW2Ake2VuZHBvaW50fV9ub19jb250ZXh0X3Rha2VvdmVyYF0pIHx8XG4gICAgICAgIHRoaXMuX2RlZmxhdGUucGVuZGluZ0Nsb3NlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fZGVmbGF0ZS5vbignZXJyb3InLCBvbkVycm9yKS5vbignZGF0YScsIG9uRGF0YSk7XG4gICAgdGhpcy5fZGVmbGF0ZS53cml0ZShkYXRhKTtcbiAgICB0aGlzLl9kZWZsYXRlLmZsdXNoKHpsaWIuWl9TWU5DX0ZMVVNILCAoKSA9PiB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICB2YXIgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KGJ1ZmZlcnMsIHRvdGFsTGVuZ3RoKTtcbiAgICAgIGlmIChmaW4pIGRhdGEgPSBkYXRhLnNsaWNlKDAsIGRhdGEubGVuZ3RoIC0gNCk7XG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlck1lc3NhZ2VEZWZsYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9QZXJNZXNzYWdlRGVmbGF0ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNyeXB0b1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIHdzOiBhIG5vZGUuanMgd2Vic29ja2V0IGNsaWVudFxuICogQ29weXJpZ2h0KGMpIDIwMTEgRWluYXIgT3R0byBTdGFuZ3ZpayA8ZWluYXJvc0BnbWFpbC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhZmVCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpO1xuXG5jb25zdCBCdWZmZXIgPSBzYWZlQnVmZmVyLkJ1ZmZlcjtcblxuLyoqXG4gKiBNZXJnZXMgYW4gYXJyYXkgb2YgYnVmZmVycyBpbnRvIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcltdfSBsaXN0IFRoZSBhcnJheSBvZiBidWZmZXJzIHRvIGNvbmNhdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoIFRoZSB0b3RhbCBsZW5ndGggb2YgYnVmZmVycyBpbiB0aGUgbGlzdFxuICogQHJldHVybiB7QnVmZmVyfSBUaGUgcmVzdWx0aW5nIGJ1ZmZlclxuICogQHB1YmxpY1xuICovXG5jb25zdCBjb25jYXQgPSAobGlzdCwgdG90YWxMZW5ndGgpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKHRvdGFsTGVuZ3RoKTtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnVmID0gbGlzdFtpXTtcbiAgICBidWYuY29weSh0YXJnZXQsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudHJ5IHtcbiAgY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJ2J1ZmZlcnV0aWwnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oeyBjb25jYXQgfSwgYnVmZmVyVXRpbC5CdWZmZXJVdGlsIHx8IGJ1ZmZlclV0aWwpO1xufSBjYXRjaCAoZSkgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAvKipcbiAgICogTWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gb3V0cHV0IFRoZSBidWZmZXIgd2hlcmUgdG8gc3RvcmUgdGhlIHJlc3VsdFxuICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gbWFzay5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29uc3QgbWFzayA9IChzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpID0+IHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBvdXRwdXRbb2Zmc2V0ICsgaV0gPSBzb3VyY2VbaV0gXiBtYXNrW2kgJiAzXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVubWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAgICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNvbnN0IHVubWFzayA9IChidWZmZXIsIG1hc2spID0+IHtcbiAgICAvLyBSZXF1aXJlZCB1bnRpbCBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzkwMDYgaXMgcmVzb2x2ZWQuXG4gICAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZmZXJbaV0gXj0gbWFza1tpICYgM107XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0geyBjb25jYXQsIG1hc2ssIHVubWFzayB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9CdWZmZXJVdGlsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzYWZlQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKTtcblxuY29uc3QgQnVmZmVyID0gc2FmZUJ1ZmZlci5CdWZmZXI7XG5cbmV4cG9ydHMuQklOQVJZX1RZUEVTID0gWydub2RlYnVmZmVyJywgJ2FycmF5YnVmZmVyJywgJ2ZyYWdtZW50cyddO1xuZXhwb3J0cy5HVUlEID0gJzI1OEVBRkE1LUU5MTQtNDdEQS05NUNBLUM1QUIwREM4NUIxMSc7XG5leHBvcnRzLkVNUFRZX0JVRkZFUiA9IEJ1ZmZlci5hbGxvYygwKTtcbmV4cG9ydHMuTk9PUCA9ICgpID0+IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9Db25zdGFudHMuanMiLCIvKiFcbiAqIHdzOiBhIG5vZGUuanMgd2Vic29ja2V0IGNsaWVudFxuICogQ29weXJpZ2h0KGMpIDIwMTEgRWluYXIgT3R0byBTdGFuZ3ZpayA8ZWluYXJvc0BnbWFpbC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5jb25zdCBVbHRyb24gPSByZXF1aXJlKCd1bHRyb24nKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL1Blck1lc3NhZ2VEZWZsYXRlJyk7XG5jb25zdCBFdmVudFRhcmdldCA9IHJlcXVpcmUoJy4vRXZlbnRUYXJnZXQnKTtcbmNvbnN0IEV4dGVuc2lvbnMgPSByZXF1aXJlKCcuL0V4dGVuc2lvbnMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XG5jb25zdCBSZWNlaXZlciA9IHJlcXVpcmUoJy4vUmVjZWl2ZXInKTtcbmNvbnN0IFNlbmRlciA9IHJlcXVpcmUoJy4vU2VuZGVyJyk7XG5cbmNvbnN0IHByb3RvY29sVmVyc2lvbnMgPSBbOCwgMTNdO1xuY29uc3QgY2xvc2VUaW1lb3V0ID0gMzAgKiAxMDAwOyAvLyBBbGxvdyAzMCBzZWNvbmRzIHRvIHRlcm1pbmF0ZSB0aGUgY29ubmVjdGlvbiBjbGVhbmx5LlxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgV2ViU29ja2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgV2ViU29ja2V0YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0XG4gICAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXSl9IHByb3RvY29scyBUaGUgc3VicHJvdG9jb2xzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbm5lY3Rpb24gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoIXByb3RvY29scykge1xuICAgICAgcHJvdG9jb2xzID0gW107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG9jb2xzID09PSAnc3RyaW5nJykge1xuICAgICAgcHJvdG9jb2xzID0gW3Byb3RvY29sc107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShwcm90b2NvbHMpKSB7XG4gICAgICBvcHRpb25zID0gcHJvdG9jb2xzO1xuICAgICAgcHJvdG9jb2xzID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNPTk5FQ1RJTkc7XG4gICAgdGhpcy5ieXRlc1JlY2VpdmVkID0gMDtcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSB7fTtcbiAgICB0aGlzLnByb3RvY29sID0gJyc7XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gY29uc3RhbnRzLkJJTkFSWV9UWVBFU1swXTtcbiAgICB0aGlzLl9maW5hbGl6ZSA9IHRoaXMuZmluYWxpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9maW5hbGl6ZUNhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlTWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5fY2xvc2VUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fY2xvc2VDb2RlID0gbnVsbDtcbiAgICB0aGlzLl9yZWNlaXZlciA9IG51bGw7XG4gICAgdGhpcy5fc2VuZGVyID0gbnVsbDtcbiAgICB0aGlzLl9zb2NrZXQgPSBudWxsO1xuICAgIHRoaXMuX3VsdHJvbiA9IG51bGw7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhZGRyZXNzKSkge1xuICAgICAgaW5pdEFzU2VydmVyQ2xpZW50LmNhbGwodGhpcywgYWRkcmVzc1swXSwgYWRkcmVzc1sxXSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRBc0NsaWVudC5jYWxsKHRoaXMsIGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IENPTk5FQ1RJTkcgKCkgeyByZXR1cm4gV2ViU29ja2V0LkNPTk5FQ1RJTkc7IH1cbiAgZ2V0IENMT1NJTkcgKCkgeyByZXR1cm4gV2ViU29ja2V0LkNMT1NJTkc7IH1cbiAgZ2V0IENMT1NFRCAoKSB7IHJldHVybiBXZWJTb2NrZXQuQ0xPU0VEOyB9XG4gIGdldCBPUEVOICgpIHsgcmV0dXJuIFdlYlNvY2tldC5PUEVOOyB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgYnVmZmVyZWRBbW91bnQgKCkge1xuICAgIHZhciBhbW91bnQgPSAwO1xuXG4gICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgYW1vdW50ID0gdGhpcy5fc29ja2V0LmJ1ZmZlclNpemUgKyB0aGlzLl9zZW5kZXIuX2J1ZmZlcmVkQnl0ZXM7XG4gICAgfVxuICAgIHJldHVybiBhbW91bnQ7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBkZXZpYXRlcyBmcm9tIHRoZSBXSEFUV0cgaW50ZXJmYWNlIHNpbmNlIHdzIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgcmVxdWlyZWRcbiAgICogZGVmYXVsdCBcImJsb2JcIiB0eXBlIChpbnN0ZWFkIHdlIGRlZmluZSBhIGN1c3RvbSBcIm5vZGVidWZmZXJcIiB0eXBlKS5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBiaW5hcnlUeXBlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluYXJ5VHlwZTtcbiAgfVxuXG4gIHNldCBiaW5hcnlUeXBlICh0eXBlKSB7XG4gICAgaWYgKGNvbnN0YW50cy5CSU5BUllfVFlQRVMuaW5kZXhPZih0eXBlKSA8IDApIHJldHVybjtcblxuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSB0eXBlO1xuXG4gICAgLy9cbiAgICAvLyBBbGxvdyB0byBjaGFuZ2UgYGJpbmFyeVR5cGVgIG9uIHRoZSBmbHkuXG4gICAgLy9cbiAgICBpZiAodGhpcy5fcmVjZWl2ZXIpIHRoaXMuX3JlY2VpdmVyLl9iaW5hcnlUeXBlID0gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgdGhlIHNvY2tldCBhbmQgdGhlIGludGVybmFsIHJlc291cmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtuZXQuU29ja2V0fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U29ja2V0IChzb2NrZXQsIGhlYWQpIHtcbiAgICBzb2NrZXQuc2V0VGltZW91dCgwKTtcbiAgICBzb2NrZXQuc2V0Tm9EZWxheSgpO1xuXG4gICAgdGhpcy5fcmVjZWl2ZXIgPSBuZXcgUmVjZWl2ZXIodGhpcy5leHRlbnNpb25zLCB0aGlzLl9tYXhQYXlsb2FkLCB0aGlzLmJpbmFyeVR5cGUpO1xuICAgIHRoaXMuX3NlbmRlciA9IG5ldyBTZW5kZXIoc29ja2V0LCB0aGlzLmV4dGVuc2lvbnMpO1xuICAgIHRoaXMuX3VsdHJvbiA9IG5ldyBVbHRyb24oc29ja2V0KTtcbiAgICB0aGlzLl9zb2NrZXQgPSBzb2NrZXQ7XG5cbiAgICAvLyBzb2NrZXQgY2xlYW51cCBoYW5kbGVyc1xuICAgIHRoaXMuX3VsdHJvbi5vbignY2xvc2UnLCB0aGlzLl9maW5hbGl6ZSk7XG4gICAgdGhpcy5fdWx0cm9uLm9uKCdlcnJvcicsIHRoaXMuX2ZpbmFsaXplKTtcbiAgICB0aGlzLl91bHRyb24ub24oJ2VuZCcsIHRoaXMuX2ZpbmFsaXplKTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBoZWFkIGlzIGFkZGVkIHRvIHRoZSByZWNlaXZlclxuICAgIGlmIChoZWFkLmxlbmd0aCA+IDApIHNvY2tldC51bnNoaWZ0KGhlYWQpO1xuXG4gICAgLy8gc3Vic2VxdWVudCBwYWNrZXRzIGFyZSBwdXNoZWQgdG8gdGhlIHJlY2VpdmVyXG4gICAgdGhpcy5fdWx0cm9uLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuYnl0ZXNSZWNlaXZlZCArPSBkYXRhLmxlbmd0aDtcbiAgICAgIHRoaXMuX3JlY2VpdmVyLmFkZChkYXRhKTtcbiAgICB9KTtcblxuICAgIC8vIHJlY2VpdmVyIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVjZWl2ZXIub25tZXNzYWdlID0gKGRhdGEpID0+IHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEpO1xuICAgIHRoaXMuX3JlY2VpdmVyLm9ucGluZyA9IChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnBvbmcoZGF0YSwgIXRoaXMuX2lzU2VydmVyLCB0cnVlKTtcbiAgICAgIHRoaXMuZW1pdCgncGluZycsIGRhdGEpO1xuICAgIH07XG4gICAgdGhpcy5fcmVjZWl2ZXIub25wb25nID0gKGRhdGEpID0+IHRoaXMuZW1pdCgncG9uZycsIGRhdGEpO1xuICAgIHRoaXMuX3JlY2VpdmVyLm9uY2xvc2UgPSAoY29kZSwgcmVhc29uKSA9PiB7XG4gICAgICB0aGlzLl9jbG9zZU1lc3NhZ2UgPSByZWFzb247XG4gICAgICB0aGlzLl9jbG9zZUNvZGUgPSBjb2RlO1xuICAgICAgdGhpcy5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgIH07XG4gICAgdGhpcy5fcmVjZWl2ZXIub25lcnJvciA9IChlcnJvciwgY29kZSkgPT4ge1xuICAgICAgLy8gY2xvc2UgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgcmVjZWl2ZXIgcmVwb3J0cyBhIEh5QmkgZXJyb3IgY29kZVxuICAgICAgdGhpcy5jbG9zZShjb2RlLCAnJyk7XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH07XG5cbiAgICAvLyBzZW5kZXIgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9zZW5kZXIub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgxMDAyLCAnJyk7XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuT1BFTjtcbiAgICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiB1cCBhbmQgcmVsZWFzZSBpbnRlcm5hbCByZXNvdXJjZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58RXJyb3IpfSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYW4gZXJyb3Igb2NjdXJyZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmFsaXplIChlcnJvcikge1xuICAgIGlmICh0aGlzLl9maW5hbGl6ZUNhbGxlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5fZmluYWxpemVDYWxsZWQgPSB0cnVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Nsb3NlVGltZXIpO1xuICAgIHRoaXMuX2Nsb3NlVGltZXIgPSBudWxsO1xuXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkIGFibm9ybWFsbHkgKHdpdGggYW4gZXJyb3IpLCBvciBpZiB0aGUgY2xvc2VcbiAgICAvLyBjb250cm9sIGZyYW1lIHdhcyBtYWxmb3JtZWQgb3Igbm90IHJlY2VpdmVkIHRoZW4gdGhlIGNsb3NlIGNvZGUgbXVzdCBiZVxuICAgIC8vIDEwMDYuXG4gICAgLy9cbiAgICBpZiAoZXJyb3IpIHRoaXMuX2Nsb3NlQ29kZSA9IDEwMDY7XG5cbiAgICBpZiAodGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl91bHRyb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5fc29ja2V0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIG9uZXJyb3IgKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWVycm9yKSB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICBlbHNlIHRoaXMuX3NvY2tldC5kZXN0cm95KCk7XG5cbiAgICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG4gICAgICB0aGlzLl91bHRyb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZW5kZXIpIHtcbiAgICAgIHRoaXMuX3NlbmRlciA9IHRoaXMuX3NlbmRlci5vbmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuX3JlY2VpdmVyLmNsZWFudXAoKCkgPT4gdGhpcy5lbWl0Q2xvc2UoKSk7XG4gICAgICB0aGlzLl9yZWNlaXZlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdENsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdGhlIGBjbG9zZWAgZXZlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlbWl0Q2xvc2UgKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIHRoaXMuX2Nsb3NlQ29kZSB8fCAxMDA2LCB0aGlzLl9jbG9zZU1lc3NhZ2UgfHwgJycpO1xuXG4gICAgaWYgKHRoaXMuZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgdGhpcy5leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLmNsZWFudXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLmV4dGVuc2lvbnMgPSBudWxsO1xuXG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLm9uKCdlcnJvcicsIGNvbnN0YW50cy5OT09QKTsgLy8gQ2F0Y2ggYWxsIGVycm9ycyBhZnRlciB0aGlzLlxuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBzb2NrZXQgc3RyZWFtLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwYXVzZSAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHRocm93IG5ldyBFcnJvcignbm90IG9wZW5lZCcpO1xuXG4gICAgdGhpcy5fc29ja2V0LnBhdXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzb2NrZXQgc3RyZWFtXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlc3VtZSAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHRocm93IG5ldyBFcnJvcignbm90IG9wZW5lZCcpO1xuXG4gICAgdGhpcy5fc29ja2V0LnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgY2xvc2luZyBoYW5kc2hha2UuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmdcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgQSBzdHJpbmcgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZ1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZSAoY29kZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHJldHVybjtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ09OTkVDVElORykge1xuICAgICAgaWYgKHRoaXMuX3JlcSAmJiAhdGhpcy5fcmVxLmFib3J0ZWQpIHtcbiAgICAgICAgdGhpcy5fcmVxLmFib3J0KCk7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ2Nsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQnKSk7XG4gICAgICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NJTkcpIHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZUNvZGUgJiYgdGhpcy5fc29ja2V0KSB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5fc2VuZGVyLmNsb3NlKGNvZGUsIGRhdGEsICF0aGlzLl9pc1NlcnZlciwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG5cbiAgICAgIGlmICh0aGlzLl9zb2NrZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nsb3NlQ29kZSkgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyBjbGVhbmVkIHVwIGV2ZW4gd2hlbiB0aGUgY2xvc2luZ1xuICAgICAgICAvLyBoYW5kc2hha2UgZmFpbHMuXG4gICAgICAgIC8vXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jbG9zZVRpbWVyKTtcbiAgICAgICAgdGhpcy5fY2xvc2VUaW1lciA9IHNldFRpbWVvdXQodGhpcy5fZmluYWxpemUsIGNsb3NlVGltZW91dCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHBpbmcgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZhaWxTaWxlbnRseSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gdGhyb3cgaWYgYHJlYWR5U3RhdGVgIGlzbid0IGBPUEVOYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwaW5nIChkYXRhLCBtYXNrLCBmYWlsU2lsZW50bHkpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgaWYgKGZhaWxTaWxlbnRseSkgcmV0dXJuO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgb3BlbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICBpZiAobWFzayA9PT0gdW5kZWZpbmVkKSBtYXNrID0gIXRoaXMuX2lzU2VydmVyO1xuICAgIHRoaXMuX3NlbmRlci5waW5nKGRhdGEgfHwgY29uc3RhbnRzLkVNUFRZX0JVRkZFUiwgbWFzayk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHBvbmcgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZhaWxTaWxlbnRseSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gdGhyb3cgaWYgYHJlYWR5U3RhdGVgIGlzbid0IGBPUEVOYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nIChkYXRhLCBtYXNrLCBmYWlsU2lsZW50bHkpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgaWYgKGZhaWxTaWxlbnRseSkgcmV0dXJuO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgb3BlbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICBpZiAobWFzayA9PT0gdW5kZWZpbmVkKSBtYXNrID0gIXRoaXMuX2lzU2VydmVyO1xuICAgIHRoaXMuX3NlbmRlci5wb25nKGRhdGEgfHwgY29uc3RhbnRzLkVNUFRZX0JVRkZFUiwgbWFzayk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmNvbXByZXNzIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzcyBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmJpbmFyeSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgaXMgYmluYXJ5IG9yIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmZpbiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZnJhZ21lbnQgaXMgdGhlIGxhc3Qgb25lXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5tYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIGRhdGEgaXMgd3JpdHRlbiBvdXRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZCAoZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgaWYgKGNiKSBjYihuZXcgRXJyb3IoJ25vdCBvcGVuZWQnKSk7XG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvcignbm90IG9wZW5lZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBiaW5hcnk6IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyxcbiAgICAgIG1hc2s6ICF0aGlzLl9pc1NlcnZlcixcbiAgICAgIGNvbXByZXNzOiB0cnVlLFxuICAgICAgZmluOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMuZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbmRlci5zZW5kKGRhdGEgfHwgY29uc3RhbnRzLkVNUFRZX0JVRkZFUiwgb3B0cywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNpYmx5IGNsb3NlIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICB0ZXJtaW5hdGUgKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHJldHVybjtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ09OTkVDVElORykge1xuICAgICAgaWYgKHRoaXMuX3JlcSAmJiAhdGhpcy5fcmVxLmFib3J0ZWQpIHtcbiAgICAgICAgdGhpcy5fcmVxLmFib3J0KCk7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ2Nsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQnKSk7XG4gICAgICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgfVxufVxuXG5XZWJTb2NrZXQuQ09OTkVDVElORyA9IDA7XG5XZWJTb2NrZXQuT1BFTiA9IDE7XG5XZWJTb2NrZXQuQ0xPU0lORyA9IDI7XG5XZWJTb2NrZXQuQ0xPU0VEID0gMztcblxuLy9cbi8vIEFkZCB0aGUgYG9ub3BlbmAsIGBvbmVycm9yYCwgYG9uY2xvc2VgLCBhbmQgYG9ubWVzc2FnZWAgYXR0cmlidXRlcy5cbi8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jb21tcy5odG1sI3RoZS13ZWJzb2NrZXQtaW50ZXJmYWNlXG4vL1xuWydvcGVuJywgJ2Vycm9yJywgJ2Nsb3NlJywgJ21lc3NhZ2UnXS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIGBvbiR7bWV0aG9kfWAsIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGxpc3RlbmVyIG9mIHRoZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyhGdW5jdGlvbnx1bmRlZmluZWQpfSBUaGUgZXZlbnQgbGlzdGVuZXIgb3IgYHVuZGVmaW5lZGBcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0ICgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzKG1ldGhvZCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdGVuZXJzW2ldLl9saXN0ZW5lcikgcmV0dXJuIGxpc3RlbmVyc1tpXS5fbGlzdGVuZXI7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzZXQgKGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyhtZXRob2QpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gUmVtb3ZlIG9ubHkgdGhlIGxpc3RlbmVycyBhZGRlZCB2aWEgYGFkZEV2ZW50TGlzdGVuZXJgLlxuICAgICAgICAvL1xuICAgICAgICBpZiAobGlzdGVuZXJzW2ldLl9saXN0ZW5lcikgdGhpcy5yZW1vdmVMaXN0ZW5lcihtZXRob2QsIGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobWV0aG9kLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5XZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyO1xuV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIFdlYlNvY2tldCBzZXJ2ZXIgY2xpZW50LlxuICpcbiAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBUaGUgcmVxdWVzdCBvYmplY3RcbiAqIEBwYXJhbSB7bmV0LlNvY2tldH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICogQHBhcmFtIHtCdWZmZXJ9IGhlYWQgVGhlIGZpcnN0IHBhY2tldCBvZiB0aGUgdXBncmFkZWQgc3RyZWFtXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBXZWJTb2NrZXQgYXR0cmlidXRlc1xuICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucHJvdG9jb2xWZXJzaW9uIFRoZSBXZWJTb2NrZXQgcHJvdG9jb2wgdmVyc2lvblxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuZXh0ZW5zaW9ucyBUaGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5tYXhQYXlsb2FkIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBzaXplXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5wcm90b2NvbCBUaGUgY2hvc2VuIHN1YnByb3RvY29sXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0QXNTZXJ2ZXJDbGllbnQgKHNvY2tldCwgaGVhZCwgb3B0aW9ucykge1xuICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG9wdGlvbnMucHJvdG9jb2xWZXJzaW9uO1xuICB0aGlzLl9tYXhQYXlsb2FkID0gb3B0aW9ucy5tYXhQYXlsb2FkO1xuICB0aGlzLmV4dGVuc2lvbnMgPSBvcHRpb25zLmV4dGVuc2lvbnM7XG4gIHRoaXMucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sO1xuXG4gIHRoaXMuX2lzU2VydmVyID0gdHJ1ZTtcblxuICB0aGlzLnNldFNvY2tldChzb2NrZXQsIGhlYWQpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgYSBXZWJTb2NrZXQgY2xpZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFRoZSBVUkwgdG8gd2hpY2ggdG8gY29ubmVjdFxuICogQHBhcmFtIHtTdHJpbmdbXX0gcHJvdG9jb2xzIFRoZSBsaXN0IG9mIHN1YnByb3RvY29sc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5wcm90b2NvbCBWYWx1ZSBvZiB0aGUgYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2xgIGhlYWRlclxuICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlIEVuYWJsZS9kaXNhYmxlIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuaGFuZHNoYWtlVGltZW91dCBUaW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIGhhbmRzaGFrZSByZXF1ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5sb2NhbEFkZHJlc3MgTG9jYWwgaW50ZXJmYWNlIHRvIGJpbmQgZm9yIG5ldHdvcmsgY29ubmVjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnByb3RvY29sVmVyc2lvbiBWYWx1ZSBvZiB0aGUgYFNlYy1XZWJTb2NrZXQtVmVyc2lvbmAgaGVhZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5oZWFkZXJzIEFuIG9iamVjdCBjb250YWluaW5nIHJlcXVlc3QgaGVhZGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMub3JpZ2luIFZhbHVlIG9mIHRoZSBgT3JpZ2luYCBvciBgU2VjLVdlYlNvY2tldC1PcmlnaW5gIGhlYWRlclxuICogQHBhcmFtIHtodHRwLkFnZW50fSBvcHRpb25zLmFnZW50IFVzZSB0aGUgc3BlY2lmaWVkIEFnZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5ob3N0IFZhbHVlIG9mIHRoZSBgSG9zdGAgaGVhZGVyXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5mYW1pbHkgSVAgYWRkcmVzcyBmYW1pbHkgdG8gdXNlIGR1cmluZyBob3N0bmFtZSBsb29rdXAgKDQgb3IgNikuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmNoZWNrU2VydmVySWRlbnRpdHkgQSBmdW5jdGlvbiB0byB2YWxpZGF0ZSB0aGUgc2VydmVyIGhvc3RuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkIFZlcmlmeSBvciBub3QgdGhlIHNlcnZlciBjZXJ0aWZpY2F0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucGFzc3BocmFzZSBUaGUgcGFzc3BocmFzZSBmb3IgdGhlIHByaXZhdGUga2V5IG9yIHBmeFxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuY2lwaGVycyBUaGUgY2lwaGVycyB0byB1c2Ugb3IgZXhjbHVkZVxuICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdfEJ1ZmZlcnxCdWZmZXJbXSl9IG9wdGlvbnMuY2VydCBUaGUgY2VydGlmaWNhdGUga2V5XG4gKiBAcGFyYW0geyhTdHJpbmd8U3RyaW5nW118QnVmZmVyfEJ1ZmZlcltdKX0gb3B0aW9ucy5rZXkgVGhlIHByaXZhdGUga2V5XG4gKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gb3B0aW9ucy5wZnggVGhlIHByaXZhdGUga2V5LCBjZXJ0aWZpY2F0ZSwgYW5kIENBIGNlcnRzXG4gKiBAcGFyYW0geyhTdHJpbmd8U3RyaW5nW118QnVmZmVyfEJ1ZmZlcltdKX0gb3B0aW9ucy5jYSBUcnVzdGVkIGNlcnRpZmljYXRlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFzQ2xpZW50IChhZGRyZXNzLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHByb3RvY29sVmVyc2lvbjogcHJvdG9jb2xWZXJzaW9uc1sxXSxcbiAgICBwcm90b2NvbDogcHJvdG9jb2xzLmpvaW4oJywnKSxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdHJ1ZSxcbiAgICBoYW5kc2hha2VUaW1lb3V0OiBudWxsLFxuICAgIGxvY2FsQWRkcmVzczogbnVsbCxcbiAgICBoZWFkZXJzOiBudWxsLFxuICAgIGZhbWlseTogbnVsbCxcbiAgICBvcmlnaW46IG51bGwsXG4gICAgYWdlbnQ6IG51bGwsXG4gICAgaG9zdDogbnVsbCxcblxuICAgIC8vXG4gICAgLy8gU1NMIG9wdGlvbnMuXG4gICAgLy9cbiAgICBjaGVja1NlcnZlcklkZW50aXR5OiBudWxsLFxuICAgIHJlamVjdFVuYXV0aG9yaXplZDogbnVsbCxcbiAgICBwYXNzcGhyYXNlOiBudWxsLFxuICAgIGNpcGhlcnM6IG51bGwsXG4gICAgY2VydDogbnVsbCxcbiAgICBrZXk6IG51bGwsXG4gICAgcGZ4OiBudWxsLFxuICAgIGNhOiBudWxsXG4gIH0sIG9wdGlvbnMpO1xuXG4gIGlmIChwcm90b2NvbFZlcnNpb25zLmluZGV4T2Yob3B0aW9ucy5wcm90b2NvbFZlcnNpb24pID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGB1bnN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uOiAke29wdGlvbnMucHJvdG9jb2xWZXJzaW9ufSBgICtcbiAgICAgIGAoc3VwcG9ydGVkIHZlcnNpb25zOiAke3Byb3RvY29sVmVyc2lvbnMuam9pbignLCAnKX0pYFxuICAgICk7XG4gIH1cblxuICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG9wdGlvbnMucHJvdG9jb2xWZXJzaW9uO1xuICB0aGlzLl9pc1NlcnZlciA9IGZhbHNlO1xuICB0aGlzLnVybCA9IGFkZHJlc3M7XG5cbiAgY29uc3Qgc2VydmVyVXJsID0gdXJsLnBhcnNlKGFkZHJlc3MpO1xuICBjb25zdCBpc1VuaXhTb2NrZXQgPSBzZXJ2ZXJVcmwucHJvdG9jb2wgPT09ICd3cyt1bml4Oic7XG5cbiAgaWYgKCFzZXJ2ZXJVcmwuaG9zdCAmJiAoIWlzVW5peFNvY2tldCB8fCAhc2VydmVyVXJsLnBhdGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHVybCcpO1xuICB9XG5cbiAgY29uc3QgaXNTZWN1cmUgPSBzZXJ2ZXJVcmwucHJvdG9jb2wgPT09ICd3c3M6JyB8fCBzZXJ2ZXJVcmwucHJvdG9jb2wgPT09ICdodHRwczonO1xuICBjb25zdCBrZXkgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgY29uc3QgaHR0cE9iaiA9IGlzU2VjdXJlID8gaHR0cHMgOiBodHRwO1xuXG4gIC8vXG4gIC8vIFByZXBhcmUgZXh0ZW5zaW9ucy5cbiAgLy9cbiAgY29uc3QgZXh0ZW5zaW9uc09mZmVyID0ge307XG4gIHZhciBwZXJNZXNzYWdlRGVmbGF0ZTtcblxuICBpZiAob3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgIHBlck1lc3NhZ2VEZWZsYXRlID0gbmV3IFBlck1lc3NhZ2VEZWZsYXRlKFxuICAgICAgb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSAhPT0gdHJ1ZSA/IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgOiB7fSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBleHRlbnNpb25zT2ZmZXJbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0gPSBwZXJNZXNzYWdlRGVmbGF0ZS5vZmZlcigpO1xuICB9XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgcG9ydDogc2VydmVyVXJsLnBvcnQgfHwgKGlzU2VjdXJlID8gNDQzIDogODApLFxuICAgIGhvc3Q6IHNlcnZlclVybC5ob3N0bmFtZSxcbiAgICBwYXRoOiAnLycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6IG9wdGlvbnMucHJvdG9jb2xWZXJzaW9uLFxuICAgICAgJ1NlYy1XZWJTb2NrZXQtS2V5Jzoga2V5LFxuICAgICAgJ0Nvbm5lY3Rpb24nOiAnVXBncmFkZScsXG4gICAgICAnVXBncmFkZSc6ICd3ZWJzb2NrZXQnXG4gICAgfVxuICB9O1xuXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIE9iamVjdC5hc3NpZ24ocmVxdWVzdE9wdGlvbnMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKTtcbiAgaWYgKE9iamVjdC5rZXlzKGV4dGVuc2lvbnNPZmZlcikubGVuZ3RoKSB7XG4gICAgcmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJ10gPSBFeHRlbnNpb25zLmZvcm1hdChleHRlbnNpb25zT2ZmZXIpO1xuICB9XG4gIGlmIChvcHRpb25zLnByb3RvY29sKSB7XG4gICAgcmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1Qcm90b2NvbCddID0gb3B0aW9ucy5wcm90b2NvbDtcbiAgfVxuICBpZiAob3B0aW9ucy5vcmlnaW4pIHtcbiAgICBpZiAob3B0aW9ucy5wcm90b2NvbFZlcnNpb24gPCAxMykge1xuICAgICAgcmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1PcmlnaW4nXSA9IG9wdGlvbnMub3JpZ2luO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLk9yaWdpbiA9IG9wdGlvbnMub3JpZ2luO1xuICAgIH1cbiAgfVxuICBpZiAob3B0aW9ucy5ob3N0KSByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLkhvc3QgPSBvcHRpb25zLmhvc3Q7XG4gIGlmIChzZXJ2ZXJVcmwuYXV0aCkgcmVxdWVzdE9wdGlvbnMuYXV0aCA9IHNlcnZlclVybC5hdXRoO1xuXG4gIGlmIChvcHRpb25zLmxvY2FsQWRkcmVzcykgcmVxdWVzdE9wdGlvbnMubG9jYWxBZGRyZXNzID0gb3B0aW9ucy5sb2NhbEFkZHJlc3M7XG4gIGlmIChvcHRpb25zLmZhbWlseSkgcmVxdWVzdE9wdGlvbnMuZmFtaWx5ID0gb3B0aW9ucy5mYW1pbHk7XG5cbiAgaWYgKGlzVW5peFNvY2tldCkge1xuICAgIGNvbnN0IHBhcnRzID0gc2VydmVyVXJsLnBhdGguc3BsaXQoJzonKTtcblxuICAgIHJlcXVlc3RPcHRpb25zLnNvY2tldFBhdGggPSBwYXJ0c1swXTtcbiAgICByZXF1ZXN0T3B0aW9ucy5wYXRoID0gcGFydHNbMV07XG4gIH0gZWxzZSBpZiAoc2VydmVyVXJsLnBhdGgpIHtcbiAgICAvL1xuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHBhdGggc3RhcnRzIHdpdGggYC9gLlxuICAgIC8vXG4gICAgaWYgKHNlcnZlclVybC5wYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5wYXRoID0gYC8ke3NlcnZlclVybC5wYXRofWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLnBhdGggPSBzZXJ2ZXJVcmwucGF0aDtcbiAgICB9XG4gIH1cblxuICB2YXIgYWdlbnQgPSBvcHRpb25zLmFnZW50O1xuXG4gIC8vXG4gIC8vIEEgY3VzdG9tIGFnZW50IGlzIHJlcXVpcmVkIGZvciB0aGVzZSBvcHRpb25zLlxuICAvL1xuICBpZiAoXG4gICAgb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgIT0gbnVsbCB8fFxuICAgIG9wdGlvbnMuY2hlY2tTZXJ2ZXJJZGVudGl0eSB8fFxuICAgIG9wdGlvbnMucGFzc3BocmFzZSB8fFxuICAgIG9wdGlvbnMuY2lwaGVycyB8fFxuICAgIG9wdGlvbnMuY2VydCB8fFxuICAgIG9wdGlvbnMua2V5IHx8XG4gICAgb3B0aW9ucy5wZnggfHxcbiAgICBvcHRpb25zLmNhXG4gICkge1xuICAgIGlmIChvcHRpb25zLnBhc3NwaHJhc2UpIHJlcXVlc3RPcHRpb25zLnBhc3NwaHJhc2UgPSBvcHRpb25zLnBhc3NwaHJhc2U7XG4gICAgaWYgKG9wdGlvbnMuY2lwaGVycykgcmVxdWVzdE9wdGlvbnMuY2lwaGVycyA9IG9wdGlvbnMuY2lwaGVycztcbiAgICBpZiAob3B0aW9ucy5jZXJ0KSByZXF1ZXN0T3B0aW9ucy5jZXJ0ID0gb3B0aW9ucy5jZXJ0O1xuICAgIGlmIChvcHRpb25zLmtleSkgcmVxdWVzdE9wdGlvbnMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgaWYgKG9wdGlvbnMucGZ4KSByZXF1ZXN0T3B0aW9ucy5wZnggPSBvcHRpb25zLnBmeDtcbiAgICBpZiAob3B0aW9ucy5jYSkgcmVxdWVzdE9wdGlvbnMuY2EgPSBvcHRpb25zLmNhO1xuICAgIGlmIChvcHRpb25zLmNoZWNrU2VydmVySWRlbnRpdHkpIHtcbiAgICAgIHJlcXVlc3RPcHRpb25zLmNoZWNrU2VydmVySWRlbnRpdHkgPSBvcHRpb25zLmNoZWNrU2VydmVySWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCAhPSBudWxsKSB7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgICB9XG5cbiAgICBpZiAoIWFnZW50KSBhZ2VudCA9IG5ldyBodHRwT2JqLkFnZW50KHJlcXVlc3RPcHRpb25zKTtcbiAgfVxuXG4gIGlmIChhZ2VudCkgcmVxdWVzdE9wdGlvbnMuYWdlbnQgPSBhZ2VudDtcblxuICB0aGlzLl9yZXEgPSBodHRwT2JqLmdldChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMuaGFuZHNoYWtlVGltZW91dCkge1xuICAgIHRoaXMuX3JlcS5zZXRUaW1lb3V0KG9wdGlvbnMuaGFuZHNoYWtlVGltZW91dCwgKCkgPT4ge1xuICAgICAgdGhpcy5fcmVxLmFib3J0KCk7XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdvcGVuaW5nIGhhbmRzaGFrZSBoYXMgdGltZWQgb3V0JykpO1xuICAgICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuX3JlcS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICBpZiAodGhpcy5fcmVxLmFib3J0ZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcSA9IG51bGw7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICB0aGlzLmZpbmFsaXplKHRydWUpO1xuICB9KTtcblxuICB0aGlzLl9yZXEub24oJ3Jlc3BvbnNlJywgKHJlcykgPT4ge1xuICAgIGlmICghdGhpcy5lbWl0KCd1bmV4cGVjdGVkLXJlc3BvbnNlJywgdGhpcy5fcmVxLCByZXMpKSB7XG4gICAgICB0aGlzLl9yZXEuYWJvcnQoKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlICgke3Jlcy5zdGF0dXNDb2RlfSlgKSk7XG4gICAgICB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5fcmVxLm9uKCd1cGdyYWRlJywgKHJlcywgc29ja2V0LCBoZWFkKSA9PiB7XG4gICAgdGhpcy5lbWl0KCdoZWFkZXJzJywgcmVzLmhlYWRlcnMsIHJlcyk7XG5cbiAgICAvL1xuICAgIC8vIFRoZSB1c2VyIG1heSBoYXZlIGNsb3NlZCB0aGUgY29ubmVjdGlvbiBmcm9tIGEgbGlzdGVuZXIgb2YgdGhlIGBoZWFkZXJzYFxuICAgIC8vIGV2ZW50LlxuICAgIC8vXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcSA9IG51bGw7XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAudXBkYXRlKGtleSArIGNvbnN0YW50cy5HVUlELCAnYmluYXJ5JylcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgaWYgKHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWFjY2VwdCddICE9PSBkaWdlc3QpIHtcbiAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdpbnZhbGlkIHNlcnZlciBrZXknKSk7XG4gICAgICByZXR1cm4gdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXJQcm90ID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBjb25zdCBwcm90TGlzdCA9IChvcHRpb25zLnByb3RvY29sIHx8ICcnKS5zcGxpdCgvLCAqLyk7XG4gICAgdmFyIHByb3RFcnJvcjtcblxuICAgIGlmICghb3B0aW9ucy5wcm90b2NvbCAmJiBzZXJ2ZXJQcm90KSB7XG4gICAgICBwcm90RXJyb3IgPSAnc2VydmVyIHNlbnQgYSBzdWJwcm90b2NvbCBldmVuIHRob3VnaCBub25lIHJlcXVlc3RlZCc7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnByb3RvY29sICYmICFzZXJ2ZXJQcm90KSB7XG4gICAgICBwcm90RXJyb3IgPSAnc2VydmVyIHNlbnQgbm8gc3VicHJvdG9jb2wgZXZlbiB0aG91Z2ggcmVxdWVzdGVkJztcbiAgICB9IGVsc2UgaWYgKHNlcnZlclByb3QgJiYgcHJvdExpc3QuaW5kZXhPZihzZXJ2ZXJQcm90KSA9PT0gLTEpIHtcbiAgICAgIHByb3RFcnJvciA9ICdzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYW4gaW52YWxpZCBwcm90b2NvbCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3RFcnJvcikge1xuICAgICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IocHJvdEVycm9yKSk7XG4gICAgICByZXR1cm4gdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2VydmVyUHJvdCkgdGhpcy5wcm90b2NvbCA9IHNlcnZlclByb3Q7XG5cbiAgICBjb25zdCBzZXJ2ZXJFeHRlbnNpb25zID0gRXh0ZW5zaW9ucy5wYXJzZShyZXMuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1leHRlbnNpb25zJ10pO1xuXG4gICAgaWYgKHBlck1lc3NhZ2VEZWZsYXRlICYmIHNlcnZlckV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlLmFjY2VwdChzZXJ2ZXJFeHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzb2NrZXQuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdpbnZhbGlkIGV4dGVuc2lvbiBwYXJhbWV0ZXInKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0gPSBwZXJNZXNzYWdlRGVmbGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFNvY2tldChzb2NrZXQsIGhlYWQpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9saWIvV2ViU29ja2V0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQW4gYXV0byBpbmNyZW1lbnRpbmcgaWQgd2hpY2ggd2UgY2FuIHVzZSB0byBjcmVhdGUgXCJ1bmlxdWVcIiBVbHRyb24gaW5zdGFuY2VzXG4gKiBzbyB3ZSBjYW4gdHJhY2sgdGhlIGV2ZW50IGVtaXR0ZXJzIHRoYXQgYXJlIGFkZGVkIHRocm91Z2ggdGhlIFVsdHJvblxuICogaW50ZXJmYWNlLlxuICpcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgaWQgPSAwO1xuXG4vKipcbiAqIFVsdHJvbiBpcyBoaWdoLWludGVsbGlnZW5jZSByb2JvdC4gSXQgZ2F0aGVycyBpbnRlbGxpZ2VuY2Ugc28gaXQgY2FuIHN0YXJ0IGltcHJvdmluZ1xuICogdXBvbiBoaXMgcnVkaW1lbnRhcnkgZGVzaWduLiBJdCB3aWxsIGxlYXJuIGZyb20geW91ciBFdmVudEVtaXR0aW5nIHBhdHRlcm5zXG4gKiBhbmQgZXh0ZXJtaW5hdGUgdGhlbS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlZSBFdmVudEVtaXR0ZXIgaW5zdGFuY2Ugd2UgbmVlZCB0byB3cmFwLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gVWx0cm9uKGVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVbHRyb24pKSByZXR1cm4gbmV3IFVsdHJvbihlZSk7XG5cbiAgdGhpcy5pZCA9IGlkKys7XG4gIHRoaXMuZWUgPSBlZTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBFdmVudExpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdG9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1VsdHJvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblVsdHJvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgZm4uX191bHRyb24gPSB0aGlzLmlkO1xuICB0aGlzLmVlLm9uKGV2ZW50LCBmbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBBZGQgYW4gRXZlbnRMaXN0ZW5lciB0aGF0J3Mgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1VsdHJvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblVsdHJvbi5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIGZuLl9fdWx0cm9uID0gdGhpcy5pZDtcbiAgdGhpcy5lZS5vbmNlKGV2ZW50LCBmbiwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIHdlIGFzc2lnbmVkIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHJldHVybnMge1VsdHJvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblVsdHJvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50c1xuICAgICwgZWUgPSB0aGlzLmVlXG4gICAgLCBldmVudDtcblxuICAvL1xuICAvLyBXaGVuIG5vIGV2ZW50IG5hbWVzIGFyZSBwcm92aWRlZCB3ZSBhc3N1bWUgdGhhdCB3ZSBuZWVkIHRvIGNsZWFyIGFsbCB0aGVcbiAgLy8gZXZlbnRzIHRoYXQgd2VyZSBhc3NpZ25lZCB0aHJvdWdoIHVzLlxuICAvL1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgYXJncyA9IGFyZ3NbMF0uc3BsaXQoL1ssIF0rLyk7XG4gIH0gZWxzZSBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgaWYgKGVlLmV2ZW50TmFtZXMpIHtcbiAgICAgIGFyZ3MgPSBlZS5ldmVudE5hbWVzKCk7XG4gICAgfSBlbHNlIGlmIChlZS5fZXZlbnRzKSB7XG4gICAgICBhcmdzID0gW107XG5cbiAgICAgIGZvciAoZXZlbnQgaW4gZWUuX2V2ZW50cykge1xuICAgICAgICBpZiAoaGFzLmNhbGwoZWUuX2V2ZW50cywgZXZlbnQpKSBhcmdzLnB1c2goZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICBhcmdzID0gYXJncy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlZS5fZXZlbnRzKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IGVlLmxpc3RlbmVycyhhcmdzW2ldKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGlzdGVuZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBldmVudCA9IGxpc3RlbmVyc1tqXTtcblxuICAgICAgLy9cbiAgICAgIC8vIE9uY2UgbGlzdGVuZXJzIGhhdmUgYSBgbGlzdGVuZXJgIHByb3BlcnR5IHRoYXQgc3RvcmVzIHRoZSByZWFsIGxpc3RlbmVyXG4gICAgICAvLyBpbiB0aGUgRXZlbnRFbWl0dGVyIHRoYXQgc2hpcHMgd2l0aCBOb2RlLmpzLlxuICAgICAgLy9cbiAgICAgIGlmIChldmVudC5saXN0ZW5lcikge1xuICAgICAgICBpZiAoZXZlbnQubGlzdGVuZXIuX191bHRyb24gIT09IHRoaXMuaWQpIGNvbnRpbnVlO1xuICAgICAgICBkZWxldGUgZXZlbnQubGlzdGVuZXIuX191bHRyb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuX191bHRyb24gIT09IHRoaXMuaWQpIGNvbnRpbnVlO1xuICAgICAgICBkZWxldGUgZXZlbnQuX191bHRyb247XG4gICAgICB9XG5cbiAgICAgIGVlLnJlbW92ZUxpc3RlbmVyKGFyZ3NbaV0sIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSB0aGUgVWx0cm9uIGluc3RhbmNlLCByZW1vdmUgYWxsIGxpc3RlbmVycyBhbmQgcmVsZWFzZSBhbGwgcmVmZXJlbmNlcy5cbiAqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblVsdHJvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIGlmICghdGhpcy5lZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHRoaXMucmVtb3ZlKCk7XG4gIHRoaXMuZWUgPSBudWxsO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbm1vZHVsZS5leHBvcnRzID0gVWx0cm9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VsdHJvbi9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUGFyc2UgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgZmllbGQgdmFsdWUgb2YgdGhlIGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcGFyc2VkIG9iamVjdFxuICogQHB1YmxpY1xuICovXG5jb25zdCBwYXJzZSA9ICh2YWx1ZSkgPT4ge1xuICB2YWx1ZSA9IHZhbHVlIHx8ICcnO1xuXG4gIGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblxuICB2YWx1ZS5zcGxpdCgnLCcpLmZvckVhY2goKHYpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB2LnNwbGl0KCc7Jyk7XG4gICAgY29uc3QgdG9rZW4gPSBwYXJhbXMuc2hpZnQoKS50cmltKCk7XG4gICAgY29uc3QgcGFyYW1zTGlzdCA9IGV4dGVuc2lvbnNbdG9rZW5dID0gZXh0ZW5zaW9uc1t0b2tlbl0gfHwgW107XG4gICAgY29uc3QgcGFyc2VkUGFyYW1zID0ge307XG5cbiAgICBwYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcGFyYW0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgICBjb25zdCBrZXkgPSBwYXJ0c1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcnRzWzFdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1bnF1b3RlIHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKHBhcnNlZFBhcmFtc1trZXldID0gcGFyc2VkUGFyYW1zW2tleV0gfHwgW10pLnB1c2godmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcGFyYW1zTGlzdC5wdXNoKHBhcnNlZFBhcmFtcyk7XG4gIH0pO1xuXG4gIHJldHVybiBleHRlbnNpb25zO1xufTtcblxuLyoqXG4gKiBTZXJpYWxpemUgYSBwYXJzZWQgYFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9uc2AgaGVhZGVyIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgb2JqZWN0IHRvIGZvcm1hdFxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHZhbHVlXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IGZvcm1hdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLm1hcCgodG9rZW4pID0+IHtcbiAgICB2YXIgcGFyYW1zTGlzdCA9IHZhbHVlW3Rva2VuXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGFyYW1zTGlzdCkpIHBhcmFtc0xpc3QgPSBbcGFyYW1zTGlzdF07XG4gICAgcmV0dXJuIHBhcmFtc0xpc3QubWFwKChwYXJhbXMpID0+IHtcbiAgICAgIHJldHVybiBbdG9rZW5dLmNvbmNhdChPYmplY3Qua2V5cyhwYXJhbXMpLm1hcCgoaykgPT4ge1xuICAgICAgICB2YXIgcCA9IHBhcmFtc1trXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHApKSBwID0gW3BdO1xuICAgICAgICByZXR1cm4gcC5tYXAoKHYpID0+IHYgPT09IHRydWUgPyBrIDogYCR7a309JHt2fWApLmpvaW4oJzsgJyk7XG4gICAgICB9KSkuam9pbignOyAnKTtcbiAgICB9KS5qb2luKCcsICcpO1xuICB9KS5qb2luKCcsICcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGZvcm1hdCwgcGFyc2UgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9saWIvRXh0ZW5zaW9ucy5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FmZUJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9QZXJNZXNzYWdlRGVmbGF0ZScpO1xuY29uc3QgaXNWYWxpZFVURjggPSByZXF1aXJlKCcuL1ZhbGlkYXRpb24nKTtcbmNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuL0J1ZmZlclV0aWwnKTtcbmNvbnN0IEVycm9yQ29kZXMgPSByZXF1aXJlKCcuL0Vycm9yQ29kZXMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XG5cbmNvbnN0IEJ1ZmZlciA9IHNhZmVCdWZmZXIuQnVmZmVyO1xuXG5jb25zdCBHRVRfSU5GTyA9IDA7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfMTYgPSAxO1xuY29uc3QgR0VUX1BBWUxPQURfTEVOR1RIXzY0ID0gMjtcbmNvbnN0IEdFVF9NQVNLID0gMztcbmNvbnN0IEdFVF9EQVRBID0gNDtcbmNvbnN0IElORkxBVElORyA9IDU7XG5cbi8qKlxuICogSHlCaSBSZWNlaXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuY2xhc3MgUmVjZWl2ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlY2VpdmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9ucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXhQYXlsb2FkIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBsZW5ndGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJpbmFyeVR5cGUgVGhlIHR5cGUgZm9yIGJpbmFyeSBkYXRhXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZXh0ZW5zaW9ucywgbWF4UGF5bG9hZCwgYmluYXJ5VHlwZSkge1xuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBiaW5hcnlUeXBlIHx8IGNvbnN0YW50cy5CSU5BUllfVFlQRVNbMF07XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMgfHwge307XG4gICAgdGhpcy5fbWF4UGF5bG9hZCA9IG1heFBheWxvYWQgfCAwO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fYnVmZmVycyA9IFtdO1xuXG4gICAgdGhpcy5fY29tcHJlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZyYWdtZW50ZWQgPSAwO1xuICAgIHRoaXMuX21hc2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2ZpbiA9IGZhbHNlO1xuICAgIHRoaXMuX21hc2sgPSBudWxsO1xuICAgIHRoaXMuX29wY29kZSA9IDA7XG5cbiAgICB0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggPSAwO1xuICAgIHRoaXMuX21lc3NhZ2VMZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZyYWdtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5fY2xlYW51cENhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLl9oYWRFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuX2RlYWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG5cbiAgICB0aGlzLm9ubWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5vbmNsb3NlID0gbnVsbDtcbiAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgIHRoaXMub25waW5nID0gbnVsbDtcbiAgICB0aGlzLm9ucG9uZyA9IG51bGw7XG5cbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN1bWVzIGJ5dGVzIGZyb20gdGhlIGF2YWlsYWJsZSBidWZmZXJlZCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYnl0ZXMgVGhlIG51bWJlciBvZiBieXRlcyB0byBjb25zdW1lXG4gICAqIEByZXR1cm4ge0J1ZmZlcn0gQ29uc3VtZWQgYnl0ZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlYWRCdWZmZXIgKGJ5dGVzKSB7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIGRzdDtcbiAgICB2YXIgbDtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gYnl0ZXM7XG5cbiAgICBpZiAoYnl0ZXMgPT09IHRoaXMuX2J1ZmZlcnNbMF0ubGVuZ3RoKSByZXR1cm4gdGhpcy5fYnVmZmVycy5zaGlmdCgpO1xuXG4gICAgaWYgKGJ5dGVzIDwgdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHtcbiAgICAgIGRzdCA9IHRoaXMuX2J1ZmZlcnNbMF0uc2xpY2UoMCwgYnl0ZXMpO1xuICAgICAgdGhpcy5fYnVmZmVyc1swXSA9IHRoaXMuX2J1ZmZlcnNbMF0uc2xpY2UoYnl0ZXMpO1xuICAgICAgcmV0dXJuIGRzdDtcbiAgICB9XG5cbiAgICBkc3QgPSBCdWZmZXIuYWxsb2NVbnNhZmUoYnl0ZXMpO1xuXG4gICAgd2hpbGUgKGJ5dGVzID4gMCkge1xuICAgICAgbCA9IHRoaXMuX2J1ZmZlcnNbMF0ubGVuZ3RoO1xuXG4gICAgICBpZiAoYnl0ZXMgPj0gbCkge1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdLmNvcHkoZHN0LCBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gbDtcbiAgICAgICAgdGhpcy5fYnVmZmVycy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYnVmZmVyc1swXS5jb3B5KGRzdCwgb2Zmc2V0LCAwLCBieXRlcyk7XG4gICAgICAgIHRoaXMuX2J1ZmZlcnNbMF0gPSB0aGlzLl9idWZmZXJzWzBdLnNsaWNlKGJ5dGVzKTtcbiAgICAgIH1cblxuICAgICAgYnl0ZXMgLT0gbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgbnVtYmVyIG9mIGJ1ZmZlcmVkIGJ5dGVzIGlzIGJpZ2dlciBvciBlcXVhbCB0aGFuIGBuYCBhbmRcbiAgICogY2FsbHMgYGNsZWFudXBgIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIG51bWJlciBvZiBieXRlcyB0byBjaGVjayBhZ2FpbnN0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgYnVmZmVyZWRCeXRlcyA+PSBuYCwgZWxzZSBgZmFsc2VgXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYXNCdWZmZXJlZEJ5dGVzIChuKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPj0gbikgcmV0dXJuIHRydWU7XG5cbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2RlYWQpIHRoaXMuY2xlYW51cCh0aGlzLl9jbGVhbnVwQ2FsbGJhY2spO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoZSBwYXJzZXIuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZCAoZGF0YSkge1xuICAgIGlmICh0aGlzLl9kZWFkKSByZXR1cm47XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMuX2J1ZmZlcnMucHVzaChkYXRhKTtcbiAgICB0aGlzLnN0YXJ0TG9vcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgcGFyc2luZyBsb29wLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhcnRMb29wICgpIHtcbiAgICB0aGlzLl9sb29wID0gdHJ1ZTtcblxuICAgIHdoaWxlICh0aGlzLl9sb29wKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuX3N0YXRlKSB7XG4gICAgICAgIGNhc2UgR0VUX0lORk86XG4gICAgICAgICAgdGhpcy5nZXRJbmZvKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzE2OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDE2KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzY0OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX01BU0s6XG4gICAgICAgICAgdGhpcy5nZXRNYXNrKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX0RBVEE6XG4gICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIGBJTkZMQVRJTkdgXG4gICAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgZmlyc3QgdHdvIGJ5dGVzIG9mIGEgZnJhbWUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbmZvICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzQnVmZmVyZWRCeXRlcygyKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgYnVmID0gdGhpcy5yZWFkQnVmZmVyKDIpO1xuXG4gICAgaWYgKChidWZbMF0gJiAweDMwKSAhPT0gMHgwMCkge1xuICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ1JTVjIgYW5kIFJTVjMgbXVzdCBiZSBjbGVhcicpLCAxMDAyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wcmVzc2VkID0gKGJ1ZlswXSAmIDB4NDApID09PSAweDQwO1xuXG4gICAgaWYgKGNvbXByZXNzZWQgJiYgIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdSU1YxIG11c3QgYmUgY2xlYXInKSwgMTAwMik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZmluID0gKGJ1ZlswXSAmIDB4ODApID09PSAweDgwO1xuICAgIHRoaXMuX29wY29kZSA9IGJ1ZlswXSAmIDB4MGY7XG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IGJ1ZlsxXSAmIDB4N2Y7XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDAwKSB7XG4gICAgICBpZiAoY29tcHJlc3NlZCkge1xuICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignUlNWMSBtdXN0IGJlIGNsZWFyJyksIDEwMDIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcihgaW52YWxpZCBvcGNvZGU6ICR7dGhpcy5fb3Bjb2RlfWApLCAxMDAyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb3Bjb2RlID0gdGhpcy5fZnJhZ21lbnRlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwMSB8fCB0aGlzLl9vcGNvZGUgPT09IDB4MDIpIHtcbiAgICAgIGlmICh0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKGBpbnZhbGlkIG9wY29kZTogJHt0aGlzLl9vcGNvZGV9YCksIDEwMDIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvbXByZXNzZWQgPSBjb21wcmVzc2VkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3Bjb2RlID4gMHgwNyAmJiB0aGlzLl9vcGNvZGUgPCAweDBiKSB7XG4gICAgICBpZiAoIXRoaXMuX2Zpbikge1xuICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcignRklOIG11c3QgYmUgc2V0JyksIDEwMDIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdSU1YxIG11c3QgYmUgY2xlYXInKSwgMTAwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPiAweDdkKSB7XG4gICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdpbnZhbGlkIHBheWxvYWQgbGVuZ3RoJyksIDEwMDIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKGBpbnZhbGlkIG9wY29kZTogJHt0aGlzLl9vcGNvZGV9YCksIDEwMDIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZmluICYmICF0aGlzLl9mcmFnbWVudGVkKSB0aGlzLl9mcmFnbWVudGVkID0gdGhpcy5fb3Bjb2RlO1xuXG4gICAgdGhpcy5fbWFza2VkID0gKGJ1ZlsxXSAmIDB4ODApID09PSAweDgwO1xuXG4gICAgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNikgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfMTY7XG4gICAgZWxzZSBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMTI3KSB0aGlzLl9zdGF0ZSA9IEdFVF9QQVlMT0FEX0xFTkdUSF82NDtcbiAgICBlbHNlIHRoaXMuaGF2ZUxlbmd0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrMTYpLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDE2ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzQnVmZmVyZWRCeXRlcygyKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IHRoaXMucmVhZEJ1ZmZlcigyKS5yZWFkVUludDE2QkUoMCwgdHJ1ZSk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBleHRlbmRlZCBwYXlsb2FkIGxlbmd0aCAoNys2NCkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQYXlsb2FkTGVuZ3RoNjQgKCkge1xuICAgIGlmICghdGhpcy5oYXNCdWZmZXJlZEJ5dGVzKDgpKSByZXR1cm47XG5cbiAgICBjb25zdCBidWYgPSB0aGlzLnJlYWRCdWZmZXIoOCk7XG4gICAgY29uc3QgbnVtID0gYnVmLnJlYWRVSW50MzJCRSgwLCB0cnVlKTtcblxuICAgIC8vXG4gICAgLy8gVGhlIG1heGltdW0gc2FmZSBpbnRlZ2VyIGluIEphdmFTY3JpcHQgaXMgMl41MyAtIDEuIEFuIGVycm9yIGlzIHJldHVybmVkXG4gICAgLy8gaWYgcGF5bG9hZCBsZW5ndGggaXMgZ3JlYXRlciB0aGFuIHRoaXMgbnVtYmVyLlxuICAgIC8vXG4gICAgaWYgKG51bSA+IE1hdGgucG93KDIsIDUzIC0gMzIpIC0gMSkge1xuICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ21heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnKSwgMTAwOSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IChudW0gKiBNYXRoLnBvdygyLCAzMikpICsgYnVmLnJlYWRVSW50MzJCRSg0LCB0cnVlKTtcbiAgICB0aGlzLmhhdmVMZW5ndGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXlsb2FkIGxlbmd0aCBoYXMgYmVlbiByZWFkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGF2ZUxlbmd0aCAoKSB7XG4gICAgaWYgKHRoaXMuX29wY29kZSA8IDB4MDggJiYgdGhpcy5tYXhQYXlsb2FkRXhjZWVkZWQodGhpcy5fcGF5bG9hZExlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFza2VkKSB0aGlzLl9zdGF0ZSA9IEdFVF9NQVNLO1xuICAgIGVsc2UgdGhpcy5fc3RhdGUgPSBHRVRfREFUQTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBtYXNrIGJ5dGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWFzayAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc0J1ZmZlcmVkQnl0ZXMoNCkpIHJldHVybjtcblxuICAgIHRoaXMuX21hc2sgPSB0aGlzLnJlYWRCdWZmZXIoNCk7XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfREFUQTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBkYXRhIGJ5dGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGF0YSAoKSB7XG4gICAgdmFyIGRhdGEgPSBjb25zdGFudHMuRU1QVFlfQlVGRkVSO1xuXG4gICAgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGgpIHtcbiAgICAgIGlmICghdGhpcy5oYXNCdWZmZXJlZEJ5dGVzKHRoaXMuX3BheWxvYWRMZW5ndGgpKSByZXR1cm47XG5cbiAgICAgIGRhdGEgPSB0aGlzLnJlYWRCdWZmZXIodGhpcy5fcGF5bG9hZExlbmd0aCk7XG4gICAgICBpZiAodGhpcy5fbWFza2VkKSBidWZmZXJVdGlsLnVubWFzayhkYXRhLCB0aGlzLl9tYXNrKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID4gMHgwNykge1xuICAgICAgdGhpcy5jb250cm9sTWVzc2FnZShkYXRhKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbXByZXNzZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gSU5GTEFUSU5HO1xuICAgICAgdGhpcy5kZWNvbXByZXNzKGRhdGEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wdXNoRnJhZ21lbnQoZGF0YSkpIHtcbiAgICAgIHRoaXMuZGF0YU1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzc2VzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVjb21wcmVzcyAoZGF0YSkge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTtcblxuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmRlY29tcHJlc3MoZGF0YSwgdGhpcy5fZmluLCAoZXJyLCBidWYpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5lcnJvcihlcnIsIGVyci5jbG9zZUNvZGUgPT09IDEwMDkgPyAxMDA5IDogMTAwNyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHVzaEZyYWdtZW50KGJ1ZikpIHRoaXMuZGF0YU1lc3NhZ2UoKTtcbiAgICAgIHRoaXMuc3RhcnRMb29wKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRhdGFNZXNzYWdlICgpIHtcbiAgICBpZiAodGhpcy5fZmluKSB7XG4gICAgICBjb25zdCBtZXNzYWdlTGVuZ3RoID0gdGhpcy5fbWVzc2FnZUxlbmd0aDtcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMuX2ZyYWdtZW50cztcblxuICAgICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuX21lc3NhZ2VMZW5ndGggPSAwO1xuICAgICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcblxuICAgICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMikge1xuICAgICAgICB2YXIgZGF0YTtcblxuICAgICAgICBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ25vZGVidWZmZXInKSB7XG4gICAgICAgICAgZGF0YSA9IHRvQnVmZmVyKGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgIGRhdGEgPSB0b0FycmF5QnVmZmVyKHRvQnVmZmVyKGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBmcmFnbWVudHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ubWVzc2FnZShkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRvQnVmZmVyKGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkVVRGOChidWYpKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ2ludmFsaWQgdXRmOCBzZXF1ZW5jZScpLCAxMDA3KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ubWVzc2FnZShidWYudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY29udHJvbCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBEYXRhIHRvIGhhbmRsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29udHJvbE1lc3NhZ2UgKGRhdGEpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4KSB7XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5vbmNsb3NlKDEwMDAsICcnKTtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsZWFudXAodGhpcy5fY2xlYW51cENhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ2ludmFsaWQgcGF5bG9hZCBsZW5ndGgnKSwgMTAwMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2RlID0gZGF0YS5yZWFkVUludDE2QkUoMCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKCFFcnJvckNvZGVzLmlzVmFsaWRFcnJvckNvZGUoY29kZSkpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKG5ldyBFcnJvcihgaW52YWxpZCBzdGF0dXMgY29kZTogJHtjb2RlfWApLCAxMDAyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidWYgPSBkYXRhLnNsaWNlKDIpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZFVURjgoYnVmKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdpbnZhbGlkIHV0Zjggc2VxdWVuY2UnKSwgMTAwNyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbmNsb3NlKGNvZGUsIGJ1Zi50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsZWFudXAodGhpcy5fY2xlYW51cENhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDkpIHRoaXMub25waW5nKGRhdGEpO1xuICAgIGVsc2UgdGhpcy5vbnBvbmcoZGF0YSk7XG5cbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3JcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgQ2xvc2UgY29kZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZXJyb3IgKGVyciwgY29kZSkge1xuICAgIHRoaXMub25lcnJvcihlcnIsIGNvZGUpO1xuICAgIHRoaXMuX2hhZEVycm9yID0gdHJ1ZTtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhbnVwKHRoaXMuX2NsZWFudXBDYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHBheWxvYWQgc2l6ZSwgZGlzY29ubmVjdHMgc29ja2V0IHdoZW4gaXQgZXhjZWVkcyBgbWF4UGF5bG9hZGAuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggUGF5bG9hZCBsZW5ndGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1heFBheWxvYWRFeGNlZWRlZCAobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCB8fCB0aGlzLl9tYXhQYXlsb2FkIDwgMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgZnVsbExlbmd0aCA9IHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCArIGxlbmd0aDtcblxuICAgIGlmIChmdWxsTGVuZ3RoIDw9IHRoaXMuX21heFBheWxvYWQpIHtcbiAgICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IGZ1bGxMZW5ndGg7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcihuZXcgRXJyb3IoJ21heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnKSwgMTAwOSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGZyYWdtZW50IGluIHRoZSBmcmFnbWVudHMgYXJyYXkgYWZ0ZXIgY2hlY2tpbmcgdGhhdCB0aGUgc3VtIG9mXG4gICAqIGZyYWdtZW50IGxlbmd0aHMgZG9lcyBub3QgZXhjZWVkIGBtYXhQYXlsb2FkYC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGZyYWdtZW50IFRoZSBmcmFnbWVudCB0byBhZGRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGBtYXhQYXlsb2FkYCBpcyBub3QgZXhjZWVkZWQsIGVsc2UgYGZhbHNlYFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVzaEZyYWdtZW50IChmcmFnbWVudCkge1xuICAgIGlmIChmcmFnbWVudC5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgdG90YWxMZW5ndGggPSB0aGlzLl9tZXNzYWdlTGVuZ3RoICsgZnJhZ21lbnQubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuX21heFBheWxvYWQgPCAxIHx8IHRvdGFsTGVuZ3RoIDw9IHRoaXMuX21heFBheWxvYWQpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VMZW5ndGggPSB0b3RhbExlbmd0aDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGZyYWdtZW50KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdtYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyksIDEwMDkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyByZXNvdXJjZXMgdXNlZCBieSB0aGUgcmVjZWl2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsZWFudXAgKGNiKSB7XG4gICAgdGhpcy5fZGVhZCA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuX2hhZEVycm9yICYmICh0aGlzLl9sb29wIHx8IHRoaXMuX3N0YXRlID09PSBJTkZMQVRJTkcpKSB7XG4gICAgICB0aGlzLl9jbGVhbnVwQ2FsbGJhY2sgPSBjYjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IG51bGw7XG4gICAgICB0aGlzLl9mcmFnbWVudHMgPSBudWxsO1xuICAgICAgdGhpcy5fYnVmZmVycyA9IG51bGw7XG4gICAgICB0aGlzLl9tYXNrID0gbnVsbDtcblxuICAgICAgdGhpcy5fY2xlYW51cENhbGxiYWNrID0gbnVsbDtcbiAgICAgIHRoaXMub25tZXNzYWdlID0gbnVsbDtcbiAgICAgIHRoaXMub25jbG9zZSA9IG51bGw7XG4gICAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5vbnBpbmcgPSBudWxsO1xuICAgICAgdGhpcy5vbnBvbmcgPSBudWxsO1xuXG4gICAgICBpZiAoY2IpIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjZWl2ZXI7XG5cbi8qKlxuICogTWFrZXMgYSBidWZmZXIgZnJvbSBhIGxpc3Qgb2YgZnJhZ21lbnRzLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyW119IGZyYWdtZW50cyBUaGUgbGlzdCBvZiBmcmFnbWVudHMgY29tcG9zaW5nIHRoZSBtZXNzYWdlXG4gKiBAcGFyYW0ge051bWJlcn0gbWVzc2FnZUxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlXG4gKiBAcmV0dXJuIHtCdWZmZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0b0J1ZmZlciAoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKSB7XG4gIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAxKSByZXR1cm4gZnJhZ21lbnRzWzBdO1xuICBpZiAoZnJhZ21lbnRzLmxlbmd0aCA+IDEpIHJldHVybiBidWZmZXJVdGlsLmNvbmNhdChmcmFnbWVudHMsIG1lc3NhZ2VMZW5ndGgpO1xuICByZXR1cm4gY29uc3RhbnRzLkVNUFRZX0JVRkZFUjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGJ1ZmZlciB0byBhbiBgQXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBUaGUgYnVmZmVyIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBDb252ZXJ0ZWQgYnVmZmVyXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIgKGJ1Zikge1xuICBpZiAoYnVmLmJ5dGVPZmZzZXQgPT09IDAgJiYgYnVmLmJ5dGVMZW5ndGggPT09IGJ1Zi5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBidWYuYnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9SZWNlaXZlci5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzVmFsaWRFcnJvckNvZGU6IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgcmV0dXJuIChjb2RlID49IDEwMDAgJiYgY29kZSA8PSAxMDEzICYmIGNvZGUgIT09IDEwMDQgJiYgY29kZSAhPT0gMTAwNSAmJiBjb2RlICE9PSAxMDA2KSB8fFxuICAgICAgKGNvZGUgPj0gMzAwMCAmJiBjb2RlIDw9IDQ5OTkpO1xuICB9LFxuICAxMDAwOiAnbm9ybWFsJyxcbiAgMTAwMTogJ2dvaW5nIGF3YXknLFxuICAxMDAyOiAncHJvdG9jb2wgZXJyb3InLFxuICAxMDAzOiAndW5zdXBwb3J0ZWQgZGF0YScsXG4gIDEwMDQ6ICdyZXNlcnZlZCcsXG4gIDEwMDU6ICdyZXNlcnZlZCBmb3IgZXh0ZW5zaW9ucycsXG4gIDEwMDY6ICdyZXNlcnZlZCBmb3IgZXh0ZW5zaW9ucycsXG4gIDEwMDc6ICdpbmNvbnNpc3RlbnQgb3IgaW52YWxpZCBkYXRhJyxcbiAgMTAwODogJ3BvbGljeSB2aW9sYXRpb24nLFxuICAxMDA5OiAnbWVzc2FnZSB0b28gYmlnJyxcbiAgMTAxMDogJ2V4dGVuc2lvbiBoYW5kc2hha2UgbWlzc2luZycsXG4gIDEwMTE6ICdhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiBwcmV2ZW50ZWQgdGhlIHJlcXVlc3QgZnJvbSBiZWluZyBmdWxmaWxsZWQnLFxuICAxMDEyOiAnc2VydmljZSByZXN0YXJ0JyxcbiAgMTAxMzogJ3RyeSBhZ2FpbiBsYXRlcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL0Vycm9yQ29kZXMuanMiLCIvKiFcbiAqIHdzOiBhIG5vZGUuanMgd2Vic29ja2V0IGNsaWVudFxuICogQ29weXJpZ2h0KGMpIDIwMTEgRWluYXIgT3R0byBTdGFuZ3ZpayA8ZWluYXJvc0BnbWFpbC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhZmVCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpO1xuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9QZXJNZXNzYWdlRGVmbGF0ZScpO1xuY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4vQnVmZmVyVXRpbCcpO1xuY29uc3QgRXJyb3JDb2RlcyA9IHJlcXVpcmUoJy4vRXJyb3JDb2RlcycpO1xuXG5jb25zdCBCdWZmZXIgPSBzYWZlQnVmZmVyLkJ1ZmZlcjtcblxuLyoqXG4gKiBIeUJpIFNlbmRlciBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuY2xhc3MgU2VuZGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBTZW5kZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7bmV0LlNvY2tldH0gc29ja2V0IFRoZSBjb25uZWN0aW9uIHNvY2tldFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9ucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoc29ja2V0LCBleHRlbnNpb25zKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMgfHwge307XG4gICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuXG4gICAgdGhpcy5fZmlyc3RGcmFnbWVudCA9IHRydWU7XG4gICAgdGhpcy5fY29tcHJlc3MgPSBmYWxzZTtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPSAwO1xuICAgIHRoaXMuX2RlZmxhdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG5cbiAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcyBhIHBpZWNlIG9mIGRhdGEgYWNjb3JkaW5nIHRvIHRoZSBIeUJpIFdlYlNvY2tldCBwcm90b2NvbC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZnJhbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnJlYWRPbmx5IFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmUgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZSBGSU4gYml0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5tYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucnN2MSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZSBSU1YxIGJpdFxuICAgKiBAcmV0dXJuIHtCdWZmZXJbXX0gVGhlIGZyYW1lZCBkYXRhIGFzIGEgbGlzdCBvZiBgQnVmZmVyYCBpbnN0YW5jZXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc3RhdGljIGZyYW1lIChkYXRhLCBvcHRpb25zKSB7XG4gICAgY29uc3QgbWVyZ2UgPSBkYXRhLmxlbmd0aCA8IDEwMjQgfHwgKG9wdGlvbnMubWFzayAmJiBvcHRpb25zLnJlYWRPbmx5KTtcbiAgICB2YXIgb2Zmc2V0ID0gb3B0aW9ucy5tYXNrID8gNiA6IDI7XG4gICAgdmFyIHBheWxvYWRMZW5ndGggPSBkYXRhLmxlbmd0aDtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA+PSA2NTUzNikge1xuICAgICAgb2Zmc2V0ICs9IDg7XG4gICAgICBwYXlsb2FkTGVuZ3RoID0gMTI3O1xuICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPiAxMjUpIHtcbiAgICAgIG9mZnNldCArPSAyO1xuICAgICAgcGF5bG9hZExlbmd0aCA9IDEyNjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUobWVyZ2UgPyBkYXRhLmxlbmd0aCArIG9mZnNldCA6IG9mZnNldCk7XG5cbiAgICB0YXJnZXRbMF0gPSBvcHRpb25zLmZpbiA/IG9wdGlvbnMub3Bjb2RlIHwgMHg4MCA6IG9wdGlvbnMub3Bjb2RlO1xuICAgIGlmIChvcHRpb25zLnJzdjEpIHRhcmdldFswXSB8PSAweDQwO1xuXG4gICAgaWYgKHBheWxvYWRMZW5ndGggPT09IDEyNikge1xuICAgICAgdGFyZ2V0LndyaXRlVUludDE2QkUoZGF0YS5sZW5ndGgsIDIsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI3KSB7XG4gICAgICB0YXJnZXQud3JpdGVVSW50MzJCRSgwLCAyLCB0cnVlKTtcbiAgICAgIHRhcmdldC53cml0ZVVJbnQzMkJFKGRhdGEubGVuZ3RoLCA2LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMubWFzaykge1xuICAgICAgdGFyZ2V0WzFdID0gcGF5bG9hZExlbmd0aDtcbiAgICAgIGlmIChtZXJnZSkge1xuICAgICAgICBkYXRhLmNvcHkodGFyZ2V0LCBvZmZzZXQpO1xuICAgICAgICByZXR1cm4gW3RhcmdldF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXNrID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDQpO1xuXG4gICAgdGFyZ2V0WzFdID0gcGF5bG9hZExlbmd0aCB8IDB4ODA7XG4gICAgdGFyZ2V0W29mZnNldCAtIDRdID0gbWFza1swXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gM10gPSBtYXNrWzFdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAyXSA9IG1hc2tbMl07XG4gICAgdGFyZ2V0W29mZnNldCAtIDFdID0gbWFza1szXTtcblxuICAgIGlmIChtZXJnZSkge1xuICAgICAgYnVmZmVyVXRpbC5tYXNrKGRhdGEsIG1hc2ssIHRhcmdldCwgb2Zmc2V0LCBkYXRhLmxlbmd0aCk7XG4gICAgICByZXR1cm4gW3RhcmdldF07XG4gICAgfVxuXG4gICAgYnVmZmVyVXRpbC5tYXNrKGRhdGEsIG1hc2ssIGRhdGEsIDAsIGRhdGEubGVuZ3RoKTtcbiAgICByZXR1cm4gW3RhcmdldCwgZGF0YV07XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjbG9zZSBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyhOdW1iZXJ8dW5kZWZpbmVkKX0gY29kZSBUaGUgc3RhdHVzIGNvZGUgY29tcG9uZW50IG9mIHRoZSBib2R5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIFRoZSBtZXNzYWdlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgdGhlIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xvc2UgKGNvZGUsIGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKGNvZGUgIT09IHVuZGVmaW5lZCAmJiAodHlwZW9mIGNvZGUgIT09ICdudW1iZXInIHx8ICFFcnJvckNvZGVzLmlzVmFsaWRFcnJvckNvZGUoY29kZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBlcnJvciBjb2RlIG51bWJlcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgyICsgKGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IDApKTtcblxuICAgIGJ1Zi53cml0ZVVJbnQxNkJFKGNvZGUgfHwgMTAwMCwgMCwgdHJ1ZSk7XG4gICAgaWYgKGJ1Zi5sZW5ndGggPiAyKSBidWYud3JpdGUoZGF0YSwgMik7XG5cbiAgICBpZiAodGhpcy5fZGVmbGF0aW5nKSB7XG4gICAgICB0aGlzLmVucXVldWUoW3RoaXMuZG9DbG9zZSwgYnVmLCBtYXNrLCBjYl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoYnVmLCBtYXNrLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcyBhbmQgc2VuZHMgYSBjbG9zZSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRvQ2xvc2UgKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIHtcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIHJzdjE6IGZhbHNlLFxuICAgICAgb3Bjb2RlOiAweDA4LFxuICAgICAgbWFzayxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZVxuICAgIH0pLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwaW5nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcGluZyAoZGF0YSwgbWFzaykge1xuICAgIHZhciByZWFkT25seSA9IHRydWU7XG5cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gdmlld1RvQnVmZmVyKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWZsYXRpbmcpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kb1BpbmcsIGRhdGEsIG1hc2ssIHJlYWRPbmx5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9QaW5nKGRhdGEsIG1hc2ssIHJlYWRPbmx5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGFuZCBzZW5kcyBhIHBpbmcgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlYWRPbmx5IFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmUgbW9kaWZpZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRvUGluZyAoZGF0YSwgbWFzaywgcmVhZE9ubHkpIHtcbiAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwge1xuICAgICAgZmluOiB0cnVlLFxuICAgICAgcnN2MTogZmFsc2UsXG4gICAgICBvcGNvZGU6IDB4MDksXG4gICAgICBtYXNrLFxuICAgICAgcmVhZE9ubHlcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwb25nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcG9uZyAoZGF0YSwgbWFzaykge1xuICAgIHZhciByZWFkT25seSA9IHRydWU7XG5cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gdmlld1RvQnVmZmVyKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWZsYXRpbmcpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kb1BvbmcsIGRhdGEsIG1hc2ssIHJlYWRPbmx5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9Qb25nKGRhdGEsIG1hc2ssIHJlYWRPbmx5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGFuZCBzZW5kcyBhIHBvbmcgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXNrIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlYWRPbmx5IFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmUgbW9kaWZpZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRvUG9uZyAoZGF0YSwgbWFzaywgcmVhZE9ubHkpIHtcbiAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwge1xuICAgICAgZmluOiB0cnVlLFxuICAgICAgcnN2MTogZmFsc2UsXG4gICAgICBvcGNvZGU6IDB4MGEsXG4gICAgICBtYXNrLFxuICAgICAgcmVhZE9ubHlcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBkYXRhIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5jb21wcmVzcyBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3MgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5iaW5hcnkgU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGlzIGJpbmFyeSBvciB0ZXh0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5maW4gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZSBsYXN0IG9uZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMubWFzayBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZCAoZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICB2YXIgb3Bjb2RlID0gb3B0aW9ucy5iaW5hcnkgPyAyIDogMTtcbiAgICB2YXIgcnN2MSA9IG9wdGlvbnMuY29tcHJlc3M7XG4gICAgdmFyIHJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSB2aWV3VG9CdWZmZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgaWYgKHRoaXMuX2ZpcnN0RnJhZ21lbnQpIHtcbiAgICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgIGlmIChyc3YxICYmIHBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgIHJzdjEgPSBkYXRhLmxlbmd0aCA+PSBwZXJNZXNzYWdlRGVmbGF0ZS5fdGhyZXNob2xkO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcHJlc3MgPSByc3YxO1xuICAgIH0gZWxzZSB7XG4gICAgICByc3YxID0gZmFsc2U7XG4gICAgICBvcGNvZGUgPSAwO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZpbikgdGhpcy5fZmlyc3RGcmFnbWVudCA9IHRydWU7XG5cbiAgICBpZiAocGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIGZpbjogb3B0aW9ucy5maW4sXG4gICAgICAgIHJzdjEsXG4gICAgICAgIG9wY29kZSxcbiAgICAgICAgbWFzazogb3B0aW9ucy5tYXNrLFxuICAgICAgICByZWFkT25seVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX2RlZmxhdGluZykge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZGlzcGF0Y2gsIGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwge1xuICAgICAgICBmaW46IG9wdGlvbnMuZmluLFxuICAgICAgICByc3YxOiBmYWxzZSxcbiAgICAgICAgb3Bjb2RlLFxuICAgICAgICBtYXNrOiBvcHRpb25zLm1hc2ssXG4gICAgICAgIHJlYWRPbmx5XG4gICAgICB9KSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgZGF0YSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29tcHJlc3MgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzIGBkYXRhYFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5vcGNvZGUgVGhlIG9wY29kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMucmVhZE9ubHkgU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZSBtb2RpZmllZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlIEZJTiBiaXRcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm1hc2sgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5yc3YxIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlIFJTVjEgYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkaXNwYXRjaCAoZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgdGhpcy5fZGVmbGF0aW5nID0gdHJ1ZTtcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5jb21wcmVzcyhkYXRhLCBvcHRpb25zLmZpbiwgKGVyciwgYnVmKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChjYikgY2IoZXJyKTtcbiAgICAgICAgZWxzZSB0aGlzLm9uZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgICAgdGhpcy5fZGVmbGF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBxdWV1ZWQgc2VuZCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVxdWV1ZSAoKSB7XG4gICAgd2hpbGUgKCF0aGlzLl9kZWZsYXRpbmcgJiYgdGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xuXG4gICAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IHBhcmFtc1sxXS5sZW5ndGg7XG4gICAgICBwYXJhbXNbMF0uYXBwbHkodGhpcywgcGFyYW1zLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5xdWV1ZXMgYSBzZW5kIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIFNlbmQgb3BlcmF0aW9uIHBhcmFtZXRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlbnF1ZXVlIChwYXJhbXMpIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IHBhcmFtc1sxXS5sZW5ndGg7XG4gICAgdGhpcy5fcXVldWUucHVzaChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyW119IGxpc3QgVGhlIGZyYW1lIHRvIHNlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbmRGcmFtZSAobGlzdCwgY2IpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdKTtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzFdLCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdLCBjYik7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VuZGVyO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGBBcnJheUJ1ZmZlcmAgdmlldyBpbnRvIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7KERhdGFWaWV3fFR5cGVkQXJyYXkpfSB2aWV3IFRoZSB2aWV3IHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gQ29udmVydGVkIHZpZXdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHZpZXdUb0J1ZmZlciAodmlldykge1xuICBjb25zdCBidWYgPSBCdWZmZXIuZnJvbSh2aWV3LmJ1ZmZlcik7XG5cbiAgaWYgKHZpZXcuYnl0ZUxlbmd0aCAhPT0gdmlldy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBidWYuc2xpY2Uodmlldy5ieXRlT2Zmc2V0LCB2aWV3LmJ5dGVPZmZzZXQgKyB2aWV3LmJ5dGVMZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93cy9saWIvU2VuZGVyLmpzIiwiLyohXG4gKiB3czogYSBub2RlLmpzIHdlYnNvY2tldCBjbGllbnRcbiAqIENvcHlyaWdodChjKSAyMDExIEVpbmFyIE90dG8gU3Rhbmd2aWsgPGVpbmFyb3NAZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCcuL2xpYi9XZWJTb2NrZXQnKTtcblxuV2ViU29ja2V0LlNlcnZlciA9IHJlcXVpcmUoJy4vbGliL1dlYlNvY2tldFNlcnZlcicpO1xuV2ViU29ja2V0LlJlY2VpdmVyID0gcmVxdWlyZSgnLi9saWIvUmVjZWl2ZXInKTtcbldlYlNvY2tldC5TZW5kZXIgPSByZXF1aXJlKCcuL2xpYi9TZW5kZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBzXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJ1ZmZlclwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiemxpYlwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFF1ZXVlKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFF1ZXVlKSkge1xuICAgIHJldHVybiBuZXcgUXVldWUob3B0aW9ucyk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5jb25jdXJyZW5jeSA9IG9wdGlvbnMuY29uY3VycmVuY3kgfHwgSW5maW5pdHk7XG4gIHRoaXMucGVuZGluZyA9IDA7XG4gIHRoaXMuam9icyA9IFtdO1xuICB0aGlzLmNicyA9IFtdO1xuICB0aGlzLl9kb25lID0gZG9uZS5iaW5kKHRoaXMpO1xufVxuXG52YXIgYXJyYXlBZGRNZXRob2RzID0gW1xuICAncHVzaCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZSdcbl07XG5cbmFycmF5QWRkTWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICBRdWV1ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtZXRob2RSZXN1bHQgPSBBcnJheS5wcm90b3R5cGVbbWV0aG9kXS5hcHBseSh0aGlzLmpvYnMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5fcnVuKCk7XG4gICAgcmV0dXJuIG1ldGhvZFJlc3VsdDtcbiAgfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUXVldWUucHJvdG90eXBlLCAnbGVuZ3RoJywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmcgKyB0aGlzLmpvYnMubGVuZ3RoO1xuICB9XG59KTtcblxuUXVldWUucHJvdG90eXBlLl9ydW4gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMucGVuZGluZyA9PT0gdGhpcy5jb25jdXJyZW5jeSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGhpcy5qb2JzLmxlbmd0aCkge1xuICAgIHZhciBqb2IgPSB0aGlzLmpvYnMuc2hpZnQoKTtcbiAgICB0aGlzLnBlbmRpbmcrKztcbiAgICBqb2IodGhpcy5fZG9uZSk7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cblxuICBpZiAodGhpcy5wZW5kaW5nID09PSAwKSB7XG4gICAgd2hpbGUgKHRoaXMuY2JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFyIGNiID0gdGhpcy5jYnMucG9wKCk7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGNiKTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXVlLnByb3RvdHlwZS5vbkRvbmUgPSBmdW5jdGlvbihjYikge1xuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5jYnMucHVzaChjYik7XG4gICAgdGhpcy5fcnVuKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRvbmUoKSB7XG4gIHRoaXMucGVuZGluZy0tO1xuICB0aGlzLl9ydW4oKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hc3luYy1saW1pdGVyL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYEV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgQSByZWZlcmVuY2UgdG8gdGhlIHRhcmdldCB0byB3aGljaCB0aGUgZXZlbnQgd2FzIGRpc3BhdGNoZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yICh0eXBlLCB0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTWVzc2FnZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBNZXNzYWdlRXZlbnRgLlxuICAgKlxuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyfEFycmF5QnVmZmVyfEJ1ZmZlcltdKX0gZGF0YSBUaGUgcmVjZWl2ZWQgZGF0YVxuICAgKiBAcGFyYW0ge1dlYlNvY2tldH0gdGFyZ2V0IEEgcmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgdG8gd2hpY2ggdGhlIGV2ZW50IHdhcyBkaXNwYXRjaGVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdGFyZ2V0KSB7XG4gICAgc3VwZXIoJ21lc3NhZ2UnLCB0YXJnZXQpO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGNsb3NlIGV2ZW50LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDbG9zZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBDbG9zZUV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIHN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGJlaW5nIGNsb3NlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uIEEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmdcbiAgICogQHBhcmFtIHtXZWJTb2NrZXR9IHRhcmdldCBBIHJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHRvIHdoaWNoIHRoZSBldmVudCB3YXMgZGlzcGF0Y2hlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKGNvZGUsIHJlYXNvbiwgdGFyZ2V0KSB7XG4gICAgc3VwZXIoJ2Nsb3NlJywgdGFyZ2V0KTtcblxuICAgIHRoaXMud2FzQ2xlYW4gPSBjb2RlID09PSB1bmRlZmluZWQgfHwgY29kZSA9PT0gMTAwMCB8fCAoY29kZSA+PSAzMDAwICYmIGNvZGUgPD0gNDk5OSk7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBvcGVuIGV2ZW50LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBPcGVuRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE9wZW5FdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7V2ViU29ja2V0fSB0YXJnZXQgQSByZWZlcmVuY2UgdG8gdGhlIHRhcmdldCB0byB3aGljaCB0aGUgZXZlbnQgd2FzIGRpc3BhdGNoZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQpIHtcbiAgICBzdXBlcignb3BlbicsIHRhcmdldCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGVtdWxhdGluZyB0aGUgYEV2ZW50VGFyZ2V0YCBpbnRlcmZhY2UuIEl0J3Mgbm90XG4gKiBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtaXhpblxuICovXG5jb25zdCBFdmVudFRhcmdldCA9IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBhZGRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lciAobWV0aG9kLCBsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZSAoZGF0YSkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBuZXcgTWVzc2FnZUV2ZW50KGRhdGEsIHRoaXMpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsb3NlIChjb2RlLCBtZXNzYWdlKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIG5ldyBDbG9zZUV2ZW50KGNvZGUsIG1lc3NhZ2UsIHRoaXMpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yIChldmVudCkge1xuICAgICAgZXZlbnQudHlwZSA9ICdlcnJvcic7XG4gICAgICBldmVudC50YXJnZXQgPSB0aGlzO1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25PcGVuICgpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgbmV3IE9wZW5FdmVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICBvbk1lc3NhZ2UuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICB0aGlzLm9uKG1ldGhvZCwgb25NZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2Nsb3NlJykge1xuICAgICAgb25DbG9zZS5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgIHRoaXMub24obWV0aG9kLCBvbkNsb3NlKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2Vycm9yJykge1xuICAgICAgb25FcnJvci5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgIHRoaXMub24obWV0aG9kLCBvbkVycm9yKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ29wZW4nKSB7XG4gICAgICBvbk9wZW4uX2xpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICB0aGlzLm9uKG1ldGhvZCwgb25PcGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbihtZXRob2QsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV2ZW50IHR5cGUgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciAobWV0aG9kLCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzKG1ldGhvZCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdGVuZXJzW2ldLl9saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihtZXRob2QsIGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50VGFyZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9FdmVudFRhcmdldC5qcyIsIi8qIVxuICogd3M6IGEgbm9kZS5qcyB3ZWJzb2NrZXQgY2xpZW50XG4gKiBDb3B5cmlnaHQoYykgMjAxMSBFaW5hciBPdHRvIFN0YW5ndmlrIDxlaW5hcm9zQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudHJ5IHtcbiAgY29uc3QgaXNWYWxpZFVURjggPSByZXF1aXJlKCd1dGYtOC12YWxpZGF0ZScpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGlzVmFsaWRVVEY4ID09PSAnb2JqZWN0J1xuICAgID8gaXNWYWxpZFVURjguVmFsaWRhdGlvbi5pc1ZhbGlkVVRGOCAvLyB1dGYtOC12YWxpZGF0ZUA8My4wLjBcbiAgICA6IGlzVmFsaWRVVEY4O1xufSBjYXRjaCAoZSkgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICBtb2R1bGUuZXhwb3J0cyA9ICgpID0+IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd3MvbGliL1ZhbGlkYXRpb24uanMiLCIvKiFcbiAqIHdzOiBhIG5vZGUuanMgd2Vic29ja2V0IGNsaWVudFxuICogQ29weXJpZ2h0KGMpIDIwMTEgRWluYXIgT3R0byBTdGFuZ3ZpayA8ZWluYXJvc0BnbWFpbC5jb20+XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhZmVCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmNvbnN0IFVsdHJvbiA9IHJlcXVpcmUoJ3VsdHJvbicpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vUGVyTWVzc2FnZURlZmxhdGUnKTtcbmNvbnN0IEV4dGVuc2lvbnMgPSByZXF1aXJlKCcuL0V4dGVuc2lvbnMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XG5jb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCcuL1dlYlNvY2tldCcpO1xuXG5jb25zdCBCdWZmZXIgPSBzYWZlQnVmZmVyLkJ1ZmZlcjtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBXZWJTb2NrZXQgc2VydmVyLlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgYFdlYlNvY2tldFNlcnZlcmAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5ob3N0IFRoZSBob3N0bmFtZSB3aGVyZSB0byBiaW5kIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucG9ydCBUaGUgcG9ydCB3aGVyZSB0byBiaW5kIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtodHRwLlNlcnZlcn0gb3B0aW9ucy5zZXJ2ZXIgQSBwcmUtY3JlYXRlZCBIVFRQL1Mgc2VydmVyIHRvIHVzZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLnZlcmlmeUNsaWVudCBBbiBob29rIHRvIHJlamVjdCBjb25uZWN0aW9uc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmhhbmRsZVByb3RvY29scyBBbiBob29rIHRvIGhhbmRsZSBwcm90b2NvbHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucGF0aCBBY2NlcHQgb25seSBjb25uZWN0aW9ucyBtYXRjaGluZyB0aGlzIHBhdGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLm5vU2VydmVyIEVuYWJsZSBubyBzZXJ2ZXIgbW9kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuY2xpZW50VHJhY2tpbmcgU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHRyYWNrIGNsaWVudHNcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlIEVuYWJsZS9kaXNhYmxlIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5tYXhQYXlsb2FkIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBzaXplXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgbGlzdGVuZXIgZm9yIHRoZSBgbGlzdGVuaW5nYCBldmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1heFBheWxvYWQ6IDEwMCAqIDEwMjQgKiAxMDI0LFxuICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IGZhbHNlLFxuICAgICAgaGFuZGxlUHJvdG9jb2xzOiBudWxsLFxuICAgICAgY2xpZW50VHJhY2tpbmc6IHRydWUsXG4gICAgICB2ZXJpZnlDbGllbnQ6IG51bGwsXG4gICAgICBub1NlcnZlcjogZmFsc2UsXG4gICAgICBiYWNrbG9nOiBudWxsLCAvLyB1c2UgZGVmYXVsdCAoNTExIGFzIGltcGxlbWVudGVkIGluIG5ldC5qcylcbiAgICAgIHNlcnZlcjogbnVsbCxcbiAgICAgIGhvc3Q6IG51bGwsXG4gICAgICBwYXRoOiBudWxsLFxuICAgICAgcG9ydDogbnVsbFxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMucG9ydCA9PSBudWxsICYmICFvcHRpb25zLnNlcnZlciAmJiAhb3B0aW9ucy5ub1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWlzc2luZyBvciBpbnZhbGlkIG9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wb3J0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gaHR0cC5TVEFUVVNfQ09ERVNbNDI2XTtcblxuICAgICAgICByZXMud3JpdGVIZWFkKDQyNiwge1xuICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5lbmQoYm9keSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NlcnZlci5hbGxvd0hhbGZPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXJ2ZXIubGlzdGVuKG9wdGlvbnMucG9ydCwgb3B0aW9ucy5ob3N0LCBvcHRpb25zLmJhY2tsb2csIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc2VydmVyKSB7XG4gICAgICB0aGlzLl9zZXJ2ZXIgPSBvcHRpb25zLnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2VydmVyKSB7XG4gICAgICB0aGlzLl91bHRyb24gPSBuZXcgVWx0cm9uKHRoaXMuX3NlcnZlcik7XG4gICAgICB0aGlzLl91bHRyb24ub24oJ2xpc3RlbmluZycsICgpID0+IHRoaXMuZW1pdCgnbGlzdGVuaW5nJykpO1xuICAgICAgdGhpcy5fdWx0cm9uLm9uKCdlcnJvcicsIChlcnIpID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpKTtcbiAgICAgIHRoaXMuX3VsdHJvbi5vbigndXBncmFkZScsIChyZXEsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZ3JhZGUocmVxLCBzb2NrZXQsIGhlYWQsIChjbGllbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3Rpb24nLCBjbGllbnQsIHJlcSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY2xpZW50VHJhY2tpbmcpIHRoaXMuY2xpZW50cyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlIChjYikge1xuICAgIC8vXG4gICAgLy8gVGVybWluYXRlIGFsbCBhc3NvY2lhdGVkIGNsaWVudHMuXG4gICAgLy9cbiAgICBpZiAodGhpcy5jbGllbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNsaWVudCBvZiB0aGlzLmNsaWVudHMpIGNsaWVudC50ZXJtaW5hdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXIgPSB0aGlzLl9zZXJ2ZXI7XG5cbiAgICBpZiAoc2VydmVyKSB7XG4gICAgICB0aGlzLl91bHRyb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5fdWx0cm9uID0gdGhpcy5fc2VydmVyID0gbnVsbDtcblxuICAgICAgLy9cbiAgICAgIC8vIENsb3NlIHRoZSBodHRwIHNlcnZlciBpZiBpdCB3YXMgaW50ZXJuYWxseSBjcmVhdGVkLlxuICAgICAgLy9cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9ydCAhPSBudWxsKSByZXR1cm4gc2VydmVyLmNsb3NlKGNiKTtcbiAgICB9XG5cbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VlIGlmIGEgZ2l2ZW4gcmVxdWVzdCBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGlzIHNlcnZlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFJlcXVlc3Qgb2JqZWN0IHRvIGluc3BlY3RcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSByZXF1ZXN0IGlzIHZhbGlkLCBlbHNlIGBmYWxzZWBcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2hvdWxkSGFuZGxlIChyZXEpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnBhdGggJiYgdXJsLnBhcnNlKHJlcS51cmwpLnBhdGhuYW1lICE9PSB0aGlzLm9wdGlvbnMucGF0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIEhUVFAgVXBncmFkZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7bmV0LlNvY2tldH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaGFuZGxlVXBncmFkZSAocmVxLCBzb2NrZXQsIGhlYWQsIGNiKSB7XG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIHNvY2tldEVycm9yKTtcblxuICAgIGNvbnN0IHZlcnNpb24gPSArcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtdmVyc2lvbiddO1xuXG4gICAgaWYgKFxuICAgICAgcmVxLm1ldGhvZCAhPT0gJ0dFVCcgfHwgcmVxLmhlYWRlcnMudXBncmFkZS50b0xvd2VyQ2FzZSgpICE9PSAnd2Vic29ja2V0JyB8fFxuICAgICAgIXJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWtleSddIHx8ICh2ZXJzaW9uICE9PSA4ICYmIHZlcnNpb24gIT09IDEzKSB8fFxuICAgICAgIXRoaXMuc2hvdWxkSGFuZGxlKHJlcSlcbiAgICApIHtcbiAgICAgIHJldHVybiBhYm9ydENvbm5lY3Rpb24oc29ja2V0LCA0MDApO1xuICAgIH1cblxuICAgIHZhciBwcm90b2NvbCA9IChyZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddIHx8ICcnKS5zcGxpdCgvLCAqLyk7XG5cbiAgICAvL1xuICAgIC8vIE9wdGlvbmFsbHkgY2FsbCBleHRlcm5hbCBwcm90b2NvbCBzZWxlY3Rpb24gaGFuZGxlci5cbiAgICAvL1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzKSB7XG4gICAgICBwcm90b2NvbCA9IHRoaXMub3B0aW9ucy5oYW5kbGVQcm90b2NvbHMocHJvdG9jb2wsIHJlcSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IGZhbHNlKSByZXR1cm4gYWJvcnRDb25uZWN0aW9uKHNvY2tldCwgNDAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdG9jb2wgPSBwcm90b2NvbFswXTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIE9wdGlvbmFsbHkgY2FsbCBleHRlcm5hbCBjbGllbnQgdmVyaWZpY2F0aW9uIGhhbmRsZXIuXG4gICAgLy9cbiAgICBpZiAodGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudCkge1xuICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgb3JpZ2luOiByZXEuaGVhZGVyc1tgJHt2ZXJzaW9uID09PSA4ID8gJ3NlYy13ZWJzb2NrZXQtb3JpZ2luJyA6ICdvcmlnaW4nfWBdLFxuICAgICAgICBzZWN1cmU6ICEhKHJlcS5jb25uZWN0aW9uLmF1dGhvcml6ZWQgfHwgcmVxLmNvbm5lY3Rpb24uZW5jcnlwdGVkKSxcbiAgICAgICAgcmVxXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudChpbmZvLCAodmVyaWZpZWQsIGNvZGUsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoIXZlcmlmaWVkKSByZXR1cm4gYWJvcnRDb25uZWN0aW9uKHNvY2tldCwgY29kZSB8fCA0MDEsIG1lc3NhZ2UpO1xuXG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVVwZ3JhZGUocHJvdG9jb2wsIHZlcnNpb24sIHJlcSwgc29ja2V0LCBoZWFkLCBjYik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KGluZm8pKSB7XG4gICAgICAgIHJldHVybiBhYm9ydENvbm5lY3Rpb24oc29ja2V0LCA0MDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcGxldGVVcGdyYWRlKHByb3RvY29sLCB2ZXJzaW9uLCByZXEsIHNvY2tldCwgaGVhZCwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGUgdGhlIGNvbm5lY3Rpb24gdG8gV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2wgVGhlIGNob3NlbiBzdWJwcm90b2NvbFxuICAgKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiBUaGUgV2ViU29ja2V0IHByb3RvY29sIHZlcnNpb25cbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge25ldC5Tb2NrZXR9IHNvY2tldCBUaGUgbmV0d29yayBzb2NrZXQgYmV0d2VlbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGhlYWQgVGhlIGZpcnN0IHBhY2tldCBvZiB0aGUgdXBncmFkZWQgc3RyZWFtXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wbGV0ZVVwZ3JhZGUgKHByb3RvY29sLCB2ZXJzaW9uLCByZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICAvL1xuICAgIC8vIERlc3Ryb3kgdGhlIHNvY2tldCBpZiB0aGUgY2xpZW50IGhhcyBhbHJlYWR5IHNlbnQgYSBGSU4gcGFja2V0LlxuICAgIC8vXG4gICAgaWYgKCFzb2NrZXQucmVhZGFibGUgfHwgIXNvY2tldC53cml0YWJsZSkgcmV0dXJuIHNvY2tldC5kZXN0cm95KCk7XG5cbiAgICBjb25zdCBrZXkgPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAudXBkYXRlKHJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWtleSddICsgY29uc3RhbnRzLkdVSUQsICdiaW5hcnknKVxuICAgICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gW1xuICAgICAgJ0hUVFAvMS4xIDEwMSBTd2l0Y2hpbmcgUHJvdG9jb2xzJyxcbiAgICAgICdVcGdyYWRlOiB3ZWJzb2NrZXQnLFxuICAgICAgJ0Nvbm5lY3Rpb246IFVwZ3JhZGUnLFxuICAgICAgYFNlYy1XZWJTb2NrZXQtQWNjZXB0OiAke2tleX1gXG4gICAgXTtcblxuICAgIGlmIChwcm90b2NvbCkgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LVByb3RvY29sOiAke3Byb3RvY29sfWApO1xuXG4gICAgY29uc3Qgb2ZmZXIgPSBFeHRlbnNpb25zLnBhcnNlKHJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnMnXSk7XG4gICAgdmFyIGV4dGVuc2lvbnM7XG5cbiAgICB0cnkge1xuICAgICAgZXh0ZW5zaW9ucyA9IGFjY2VwdEV4dGVuc2lvbnModGhpcy5vcHRpb25zLCBvZmZlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gYWJvcnRDb25uZWN0aW9uKHNvY2tldCwgNDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGV4dGVuc2lvbnMpO1xuXG4gICAgaWYgKHByb3BzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc2VydmVyRXh0ZW5zaW9ucyA9IHByb3BzLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSBbZXh0ZW5zaW9uc1trZXldLnBhcmFtc107XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGhlYWRlcnMucHVzaChgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zOiAke0V4dGVuc2lvbnMuZm9ybWF0KHNlcnZlckV4dGVuc2lvbnMpfWApO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gQWxsb3cgZXh0ZXJuYWwgbW9kaWZpY2F0aW9uL2luc3BlY3Rpb24gb2YgaGFuZHNoYWtlIGhlYWRlcnMuXG4gICAgLy9cbiAgICB0aGlzLmVtaXQoJ2hlYWRlcnMnLCBoZWFkZXJzLCByZXEpO1xuXG4gICAgc29ja2V0LndyaXRlKGhlYWRlcnMuY29uY2F0KCcnLCAnJykuam9pbignXFxyXFxuJykpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFdlYlNvY2tldChbc29ja2V0LCBoZWFkXSwgbnVsbCwge1xuICAgICAgbWF4UGF5bG9hZDogdGhpcy5vcHRpb25zLm1heFBheWxvYWQsXG4gICAgICBwcm90b2NvbFZlcnNpb246IHZlcnNpb24sXG4gICAgICBleHRlbnNpb25zLFxuICAgICAgcHJvdG9jb2xcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNsaWVudHMpIHtcbiAgICAgIHRoaXMuY2xpZW50cy5hZGQoY2xpZW50KTtcbiAgICAgIGNsaWVudC5vbignY2xvc2UnLCAoKSA9PiB0aGlzLmNsaWVudHMuZGVsZXRlKGNsaWVudCkpO1xuICAgIH1cblxuICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBzb2NrZXRFcnJvcik7XG4gICAgY2IoY2xpZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFNlcnZlcjtcblxuLyoqXG4gKiBIYW5kbGUgcHJlbWF0dXJlIHNvY2tldCBlcnJvcnMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc29ja2V0RXJyb3IgKCkge1xuICB0aGlzLmRlc3Ryb3koKTtcbn1cblxuLyoqXG4gKiBBY2NlcHQgV2ViU29ja2V0IGV4dGVuc2lvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIGBXZWJTb2NrZXRTZXJ2ZXJgIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9mZmVyIFRoZSBwYXJzZWQgdmFsdWUgb2YgdGhlIGBzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnNgIGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBleHRlbnNpb25zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhY2NlcHRFeHRlbnNpb25zIChvcHRpb25zLCBvZmZlcikge1xuICBjb25zdCBwbWQgPSBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlO1xuICBjb25zdCBleHRlbnNpb25zID0ge307XG5cbiAgaWYgKHBtZCAmJiBvZmZlcltQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gbmV3IFBlck1lc3NhZ2VEZWZsYXRlKFxuICAgICAgcG1kICE9PSB0cnVlID8gcG1kIDoge30sXG4gICAgICB0cnVlLFxuICAgICAgb3B0aW9ucy5tYXhQYXlsb2FkXG4gICAgKTtcblxuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmFjY2VwdChvZmZlcltQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSk7XG4gICAgZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9IHBlck1lc3NhZ2VEZWZsYXRlO1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuc2lvbnM7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIGNvbm5lY3Rpb24gd2hlbiBwcmVjb25kaXRpb25zIGFyZSBub3QgZnVsZmlsbGVkLlxuICpcbiAqIEBwYXJhbSB7bmV0LlNvY2tldH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWVzc2FnZV0gVGhlIEhUVFAgcmVzcG9uc2UgYm9keVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRDb25uZWN0aW9uIChzb2NrZXQsIGNvZGUsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvY2tldC53cml0YWJsZSkge1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IGh0dHAuU1RBVFVTX0NPREVTW2NvZGVdO1xuICAgIHNvY2tldC53cml0ZShcbiAgICAgIGBIVFRQLzEuMSAke2NvZGV9ICR7aHR0cC5TVEFUVVNfQ09ERVNbY29kZV19XFxyXFxuYCArXG4gICAgICAnQ29ubmVjdGlvbjogY2xvc2VcXHJcXG4nICtcbiAgICAgICdDb250ZW50LXR5cGU6IHRleHQvaHRtbFxcclxcbicgK1xuICAgICAgYENvbnRlbnQtTGVuZ3RoOiAke0J1ZmZlci5ieXRlTGVuZ3RoKG1lc3NhZ2UpfVxcclxcbmAgK1xuICAgICAgJ1xcclxcbicgK1xuICAgICAgbWVzc2FnZVxuICAgICk7XG4gIH1cblxuICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0RXJyb3IpO1xuICBzb2NrZXQuZGVzdHJveSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dzL2xpYi9XZWJTb2NrZXRTZXJ2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9