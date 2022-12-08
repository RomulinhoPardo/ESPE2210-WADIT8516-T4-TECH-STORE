"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _Customer = _interopRequireDefault(require("./routes/Customer.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

//declaration app
var app = (0, _express["default"])(); //settings

app.set("pkg", _package["default"]); //middlewares

app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to my Products API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
});
app.use("/api/products", _products["default"]);
app.use("/api/customer", _Customer["default"]);
app.use("/api/users", _users["default"]);
var _default = app;
exports["default"] = _default;