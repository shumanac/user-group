var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var GroupSchema = new Schema({
groupName: String,
userName: String


}, {strict: false});
module.exports = mongoose.model('Group', GroupSchema);