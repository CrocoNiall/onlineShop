var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name:           String,
  price:          Number,
  description:    String

});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
