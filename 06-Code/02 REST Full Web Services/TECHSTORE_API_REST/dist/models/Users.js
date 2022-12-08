"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var uniqueValidator = require("mongoose-unique-validator");

var usersSchema = new _mongoose.Schema({
  name_user: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
usersSchema.plugin(uniqueValidator);

var _default = (0, _mongoose.model)("Users", usersSchema);

exports["default"] = _default;