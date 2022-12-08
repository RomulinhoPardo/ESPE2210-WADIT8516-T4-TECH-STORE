"use strict";

var _dotenv = require("dotenv");

(0, _dotenv.config)();
module.exports = {
  mongodbURI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT,
  SECRET: "Welcome"
};