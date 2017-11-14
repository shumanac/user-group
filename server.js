process.env.NODE_ENV = process.env.NODE_ENV || 'production';


var config = require('./config/config');
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var compression = require('compression');
var bodyParser = require('body-parser');



var app = express();
var db = mongoose();
var config = {port:59175};






app.use(compression());
app.use(bodyParser.json());





app.listen(config.port);

module.exports = app;
console.log('Server running at http://localhost:' + config.port);