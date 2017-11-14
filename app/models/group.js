var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var GroupSchema = new Schema({
groupName: String,
userName: String


});
var GroupModel = mongoose.model('Group', GroupSchema);