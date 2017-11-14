var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
firstName: String,
lastName: String,
email: String

});
var UserModel = mongoose.model('User', UserSchema);