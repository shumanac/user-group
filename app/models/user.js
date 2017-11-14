var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
firstName: String,
lastName: String,
email: String

}, {strict: false});
module.exports = mongoose.model('User', UserSchema);