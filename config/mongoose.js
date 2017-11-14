var config = require('./config'),
mongoose = require('mongoose');

module.exports = function () {
var db = mongoose.connect(config.db, { useMongoClient: true });
require('../app/models/user');
require('../app/models/group');
require('../app/models/application');


return db;
};