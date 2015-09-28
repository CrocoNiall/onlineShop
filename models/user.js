var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name:           String,
  gender:         String,
  dob:            Date

});

var User = mongoose.model('User', UserSchema);


module.exports = User;