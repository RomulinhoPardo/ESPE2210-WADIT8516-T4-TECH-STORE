"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var _config = _interopRequireDefault(require("./config"));

_app["default"].listen(_config["default"].PORT, _config["default"].HOST, function () {
  console.log("Server started on port ".concat(_config["default"].PORT));
});