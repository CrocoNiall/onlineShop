var mongoose    = require('mongoose');

var Product     = mongoose.model('Product') 
var User        = mongoose.model('User') 

var OrderSchema = new mongoose.Schema({
  price:           String,
  createdAt:       Date,
  address:         { street: String, postcode: String, town: String, country: String },
  products:        [Product.schema],
  User:            { type: mongoose.Schema.ObjectId, ref: 'User'} 
  
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;


