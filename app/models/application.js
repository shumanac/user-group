var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AppSchema = new Schema({
appName: String,
groupName: String


}, {strict: false});

module.exports = mongoose.model('Application', AppSchema);