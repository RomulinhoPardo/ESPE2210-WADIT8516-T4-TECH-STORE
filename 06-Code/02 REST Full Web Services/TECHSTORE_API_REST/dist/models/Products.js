"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productsSchema = new _mongoose.Schema({
  name_product: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  total: {
    type: Number,
    required: true,
    "default": true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)("Products", productsSchema);

exports["default"] = _default;