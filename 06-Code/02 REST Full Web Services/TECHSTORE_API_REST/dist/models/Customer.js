"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var uniqueValidator = require("mongoose-unique-validator");

var CustomerSchema = new _mongoose.Schema({
  name_client: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  Phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
CustomerSchema.plugin(uniqueValidator);

var _default = (0, _mongoose.model)("Customer", CustomerSchema);

exports["default"] = _default;