"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putProduct = exports.postProducts = exports.getOneProduct = exports.getAllProducts = exports.deleteOneProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Products = _interopRequireDefault(require("../models/Products"));

//POST
var postProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newProduct, productSave;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.name_product, !req.body.description, !req.body.quantity)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));

          case 2:
            _context.prev = 2;
            newProduct = new _Products["default"]({
              name_product: req.body.name_product,
              description: req.body.description,
              quantity: req.body.quantity,
              total: req.body.total = req.body.price * req.body.quantity
            });
            _context.next = 6;
            return newProduct.save();

          case 6:
            productSave = _context.sent;
            res.json(productSave);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || "Error for creating and post Products"
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function postProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET


exports.postProducts = postProducts;

var getAllProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productsGet;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Products["default"].find({}).populate("Producto_ID", {
              _id: 0,
              name_provider: 1,
              city: 1
            });

          case 3:
            productsGet = _context2.sent;
            res.json(productsGet);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message || "Error for get Products"
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET ONE


exports.getAllProducts = getAllProducts;

var getOneProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Products["default"].findById(id);

          case 4:
            product = _context3.sent;

            if (product) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Product with id ".concat(id, " does not exist")
            }));

          case 7:
            res.json(product);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || "Error retrieving product with id: ".concat(id)
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function getOneProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //DELETE


exports.getOneProduct = getOneProduct;

var deleteOneProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Products["default"].findByIdAndDelete(id);

          case 3:
            product = _context4.sent;

            if (product) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              message: "Error, This product with id: ".concat(id, ", does not exist, cannot be deleted")
            }));

          case 6:
            res.json({
              message: "Product were deleted successfully"
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteOneProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //PUT


exports.deleteOneProduct = deleteOneProduct;

var putProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Products["default"].findByIdAndUpdate(id, {
              $set: {
                name_product: req.body.name_product,
                description: req.body.description,
                provider_ID: req.body.provider_ID,
                price: req.body.price,
                quantity: req.body.quantity,
                total: req.body.total = req.body.price * req.body.quantity
              }
            });

          case 3:
            product = _context5.sent;

            if (product) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: "Product with id ".concat(id, " does not exist")
            }));

          case 8:
            return _context5.abrupt("return", res.status(200).json({
              message: "Product were update successfully "
            }));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function putProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.putProduct = putProduct;