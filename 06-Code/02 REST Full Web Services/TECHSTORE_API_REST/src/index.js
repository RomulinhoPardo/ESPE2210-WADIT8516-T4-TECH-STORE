var express = require ('express')
var app= express()

import app from './app';
import './database';
import config from './config';

app.listen(config.PORT, config.HOST, function () {
    console.log(`Server started on port ${config.PORT}`);
  });