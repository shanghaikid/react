'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _root = require('./routes/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info('Env:', process.env.NODE_ENV);

// create koa server
var app = new _koa2.default();
// use logger, routes
app.use((0, _koaLogger2.default)()).use(_root2.default.routes()).use(_root2.default.allowedMethods()).listen(3000);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYXBwIiwidXNlIiwicm91dGVzIiwiYWxsb3dlZE1ldGhvZHMiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQUEsUUFBUUMsSUFBUixDQUFhLE1BQWIsRUFBcUJDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBakM7O0FBRUE7QUFDQSxJQUFNQyxNQUFNLG1CQUFaO0FBQ0E7QUFDQUEsSUFBSUMsR0FBSixDQUFRLDBCQUFSLEVBQ0tBLEdBREwsQ0FDUyxlQUFLQyxNQUFMLEVBRFQsRUFFS0QsR0FGTCxDQUVTLGVBQUtFLGNBQUwsRUFGVCxFQUdLQyxNQUhMLENBR1ksSUFIWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL3JvdXRlcy9yb290J1xuY29uc29sZS5pbmZvKCdFbnY6JywgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG4vLyBjcmVhdGUga29hIHNlcnZlclxuY29uc3QgYXBwID0gbmV3IEtvYSgpOyBcbi8vIHVzZSBsb2dnZXIsIHJvdXRlc1xuYXBwLnVzZShsb2dnZXIoKSlcbiAgICAudXNlKHJvb3Qucm91dGVzKCkpXG4gICAgLnVzZShyb290LmFsbG93ZWRNZXRob2RzKCkpXG4gICAgLmxpc3RlbigzMDAwKTtcbiJdfQ==
