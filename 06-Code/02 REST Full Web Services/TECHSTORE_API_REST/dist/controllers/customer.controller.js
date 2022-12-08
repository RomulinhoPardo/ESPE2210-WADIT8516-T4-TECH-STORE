"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putCustomer = exports.postcustomer = exports.getOneCustomer = exports.getAllCustomer = exports.deleteOneCustomer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

//POST
var postcustomer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newCustomer, customerSave;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.name_customer, !req.body.email, !req.body.Phone, !req.body.address)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));

          case 2:
            _context.prev = 2;
            newCustomer = new _Customer["default"]({
              name_customer: req.body.name_customer,
              email: req.body.email,
              CI: req.body.Phone,
              address: req.body.address
            });
            _context.next = 6;
            return newCustomer.save();

          case 6:
            customerSave = _context.sent;
            res.json(customerSave);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || "Error for creating and post Customers"
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function postcustomer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET


exports.postcustomer = postcustomer;

var getAllCustomer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var customerGet;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Customer["default"].find();

          case 3:
            customerGet = _context2.sent;
            res.json(customerGet);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message || "Error for get Customers"
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllCustomer(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET ONE


exports.getAllCustomer = getAllCustomer;

var getOneCustomer = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _customer;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Customer["default"].findById(id);

          case 4:
            _customer = _context3.sent;

            if (_customer) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Customer with id ".concat(id, " does not exist")
            }));

          case 7:
            res.json(_customer);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || "Error retrieving customer with id: ".concat(id)
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function getOneCustomer(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //DELETE


exports.getOneCustomer = getOneCustomer;

var deleteOneCustomer = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, customer;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Customer["default"].findByIdAndDelete(id);

          case 3:
            customer = _context4.sent;

            if (client) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              message: "Error, This customer with id: ".concat(id, ", does not exist, cannot be deleted")
            }));

          case 6:
            res.json({
              message: "Customer were deleted successfully"
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteOneCustomer(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //PUT


exports.deleteOneCustomer = deleteOneCustomer;

var putCustomer = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, Customer;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return Client.findByIdAndUpdate(id, {
              $set: {
                name_client: req.body.name_client,
                email: req.body.email,
                Phone: req.body.Phone,
                address: req.body.address
              }
            });

          case 3:
            Customer = _context5.sent;

            if (customer) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(400).send({
              message: "Error, This customer with id: ".concat(id, ", does not exist")
            }));

          case 6:
            res.json({
              message: "Customer was updated successfully"
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function putCustomer(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.putCustomer = putCustomer;