var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AppSchema = new Schema({
appName: String,
groupName: String,


});

var ApplicationModel = mongoose.model('Application', AppSchema);