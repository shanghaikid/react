"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// default page tempalate
var page = function page(ctx) {
    return "<!doctype html>\n<html lang=\"en\">\n    " + header_tpl(ctx) + "\n    " + body_tpl(ctx) + "\n\n    <script>\n        App.render(\n            document.getElementById('root'),\n            '<h1>hello2</h1>'\n                    );\n    </script>\n\n    " + footer_tpl(ctx) + "\n</html>";
};

exports.default = page;

// body template

var body_tpl = exports.body_tpl = function body_tpl() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$body = _ref.body,
        body = _ref$body === undefined ? "<div class=\"loading\"></div><div id=\"root\"></div>" : _ref$body;

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
        cssHref = _ref2$cssHref === undefined ? "public/css/style.css" : _ref2$cssHref,
        _ref2$scriptSrc = _ref2.scriptSrc,
        scriptSrc = _ref2$scriptSrc === undefined ? "public/index.js" : _ref2$scriptSrc;

    return "<head>\n    <meta charset=\"" + charset + "\"/>\n    <title>" + title + "</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssHref + "\" />\n    <script src=\"" + scriptSrc + "\"></script>\n</head>";
};

// footer template
var footer_tpl = exports.footer_tpl = function footer_tpl(_ref3) {
    var startTime = _ref3.startTime;

    if (typeof startTime === 'undefined') {
        return '';
    }
    var NS_PER_SEC = 1e9;
    var diff = process.hrtime(startTime);

    return "<footer>\n            <small>Page generate time: " + (diff[0] * NS_PER_SEC + diff[1]) + " nanoseconds</small>\n            </footer>";
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOlsicGFnZSIsImN0eCIsImhlYWRlcl90cGwiLCJib2R5X3RwbCIsImZvb3Rlcl90cGwiLCJib2R5IiwidGl0bGUiLCJjaGFyc2V0IiwiY3NzSHJlZiIsInNjcmlwdFNyYyIsInN0YXJ0VGltZSIsIk5TX1BFUl9TRUMiLCJkaWZmIiwicHJvY2VzcyIsImhydGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxHQUFEO0FBQUEseURBRVBDLFdBQVdELEdBQVgsQ0FGTyxjQUdQRSxTQUFTRixHQUFULENBSE8seUtBWVBHLFdBQVdILEdBQVgsQ0FaTztBQUFBLENBQWI7O2tCQWVlRCxJOztBQUVmOztBQUNPLElBQU1HLDhCQUFXLFNBQVhBLFFBQVcsR0FBa0U7QUFBQSxtRkFBUCxFQUFPO0FBQUEseUJBQWhFRSxJQUFnRTtBQUFBLFFBQWhFQSxJQUFnRTs7QUFDdEYsc0JBQWdCQSxJQUFoQjtBQUNILENBRk07O0FBSVA7QUFDTyxJQUFNSCxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsb0ZBQXdHLEVBQXhHO0FBQUEsNEJBQUVJLEtBQUY7QUFBQSxRQUFFQSxLQUFGLCtCQUFRLGdCQUFSO0FBQUEsOEJBQTBCQyxPQUExQjtBQUFBLFFBQTBCQSxPQUExQixpQ0FBa0MsT0FBbEM7QUFBQSw4QkFBMkNDLE9BQTNDO0FBQUEsUUFBMkNBLE9BQTNDLGlDQUFtRCxzQkFBbkQ7QUFBQSxnQ0FBMkVDLFNBQTNFO0FBQUEsUUFBMkVBLFNBQTNFLG1DQUFxRixpQkFBckY7O0FBQUEsNENBQ0xGLE9BREsseUJBRWJELEtBRmEsd0VBR3lCRSxPQUh6QixpQ0FJUEMsU0FKTztBQUFBLENBQW5COztBQU9QO0FBQ08sSUFBTUwsa0NBQWEsU0FBYkEsVUFBYSxRQUFpQjtBQUFBLFFBQWZNLFNBQWUsU0FBZkEsU0FBZTs7QUFDdkMsUUFBSSxPQUFPQSxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLGVBQU8sRUFBUDtBQUNIO0FBQ0QsUUFBTUMsYUFBYSxHQUFuQjtBQUNBLFFBQU1DLE9BQU9DLFFBQVFDLE1BQVIsQ0FBZUosU0FBZixDQUFiOztBQUVBLGtFQUNxQ0UsS0FBSyxDQUFMLElBQVVELFVBQVYsR0FBdUJDLEtBQUssQ0FBTCxDQUQ1RDtBQUdILENBVk0iLCJmaWxlIjoidGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRlZmF1bHQgcGFnZSB0ZW1wYWxhdGVcbmNvbnN0IHBhZ2UgPSAoY3R4KSA9PiBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAke2hlYWRlcl90cGwoY3R4KX1cbiAgICAke2JvZHlfdHBsKGN0eCl9XG5cbiAgICA8c2NyaXB0PlxuICAgICAgICBBcHAucmVuZGVyKFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcbiAgICAgICAgICAgICc8aDE+aGVsbG8yPC9oMT4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICAke2Zvb3Rlcl90cGwoY3R4KX1cbjwvaHRtbD5gO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuXG4vLyBib2R5IHRlbXBsYXRlXG5leHBvcnQgY29uc3QgYm9keV90cGwgPSAoe2JvZHk9YDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+PC9kaXY+PGRpdiBpZD1cInJvb3RcIj48L2Rpdj5gfT17fSkgPT4ge1xuICAgIHJldHVybiBgPGJvZHk+JHtib2R5fTwvYm9keT5gO1xufVxuXG4vLyBoZWFkZXIgdGVtcGxhdGVcbmV4cG9ydCBjb25zdCBoZWFkZXJfdHBsID0gKHt0aXRsZT1cInNlcnZlclRlbXBsYXRlXCIsIGNoYXJzZXQ9XCJVVEYtOFwiLCBjc3NIcmVmPVwicHVibGljL2Nzcy9zdHlsZS5jc3NcIiwgc2NyaXB0U3JjPVwicHVibGljL2luZGV4LmpzXCJ9PXt9KSA9PiBgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIiR7Y2hhcnNldH1cIi8+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzSHJlZn1cIiAvPlxuICAgIDxzY3JpcHQgc3JjPVwiJHtzY3JpcHRTcmN9XCI+PC9zY3JpcHQ+XG48L2hlYWQ+YDtcblxuLy8gZm9vdGVyIHRlbXBsYXRlXG5leHBvcnQgY29uc3QgZm9vdGVyX3RwbCA9ICh7c3RhcnRUaW1lfSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RhcnRUaW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IE5TX1BFUl9TRUMgPSAxZTk7XG4gICAgY29uc3QgZGlmZiA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0VGltZSk7XG5cbiAgICByZXR1cm4gYDxmb290ZXI+XG4gICAgICAgICAgICA8c21hbGw+UGFnZSBnZW5lcmF0ZSB0aW1lOiAke2RpZmZbMF0gKiBOU19QRVJfU0VDICsgZGlmZlsxXX0gbmFub3NlY29uZHM8L3NtYWxsPlxuICAgICAgICAgICAgPC9mb290ZXI+YFxufTtcbiJdfQ==
