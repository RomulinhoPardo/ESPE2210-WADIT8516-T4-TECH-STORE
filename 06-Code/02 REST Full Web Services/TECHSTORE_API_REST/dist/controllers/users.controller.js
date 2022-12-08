"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putUser = exports.postUsers = exports.getOneUser = exports.getAllUsers = exports.deleteOneUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Users = _interopRequireDefault(require("../models/Users"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

//POST
var postUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name_user, email, password, newUser, userSave, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.name_user, !req.body.email, !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));

          case 2:
            _context.prev = 2;
            _req$body = req.body, name_user = _req$body.name_user, email = _req$body.email, password = _req$body.password;
            newUser = new _Users["default"]({
              name_user: name_user,
              email: email,
              password: password,
              type: req.body.type = 1
            });
            _context.next = 7;
            return newUser.save();

          case 7:
            userSave = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: userSave._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            return _context.abrupt("return", res.status(200).json({
              token: token,
              _id: userSave._id,
              name_user: userSave.name_user,
              email: userSave.email,
              type: userSave.type
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || "Error for creating and post Users"
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function postUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET


exports.postUsers = postUsers;

var getAllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var usersGet;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Users["default"].find();

          case 3:
            usersGet = _context2.sent;
            res.json(usersGet);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message || "Error for get Users"
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET ONE


exports.getAllUsers = getAllUsers;

var getOneUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Users["default"].findOne(id);

          case 4:
            user = _context3.sent;

            if (user) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "User with id ".concat(id, " does not exist")
            }));

          case 7:
            res.json(user);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || "Error retrieving user with id: ".concat(id)
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function getOneUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //DELETE


exports.getOneUser = getOneUser;

var deleteOneUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Users["default"].findByIdAndDelete(id);

          case 3:
            user = _context4.sent;

            if (user) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              message: "Error, This user with id: ".concat(id, ", does not exist, cannot be deleted")
            }));

          case 6:
            res.json({
              message: "User were deleted succesfully"
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteOneUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //PUT


exports.deleteOneUser = deleteOneUser;

var putUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Users["default"].findByIdAndUpdate(id, {
              $set: {
                name_user: req.body.name_user,
                email: req.body.email,
                password: req.body.password,
                type: req.body.type
              }
            });

          case 3:
            user = _context5.sent;

            if (user) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(400).send({
              message: "Error, This user with id: ".concat(id, ", does not exist")
            }));

          case 6:
            res.json({
              message: "User was updated succesfully"
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function putUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.putUser = putUser;