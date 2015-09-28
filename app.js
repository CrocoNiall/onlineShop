var express = require('express')
var app = express()
var path = require('path')
// var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// body parser config
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/onlineShop')



var Product = require('./models/product')
var User = require('./models/user')
var Order = require('./models/order')


var niall = new User({
  name: 'Niall',
  gender: 'Male'

})

niall.save(function(err) {
  if (err) console.log(err)
    console.log('Niall Saved')
})


var apple = new Product({
  name: 'Granny Apple', 
  price: 1.23,
  description: 'Red apples picked from the far east. 4pk'
})

apple.save(function(err) {
  if (err) console.log(err)
    console.log('Apple Saved')
})


var order1 = new Order({
  createdAt: 04/06/2015,
  address: {street: '47 The Demesne', postcode: 'NE63 9TW', town: 'Ashington', counrty: 'Ashington'},
  User: niall
})

order1.products.push(apple, apple, apple)


order1.save(function(err, order) {
  if (err) console.log(err)
    console.log('Order 1 Saved')

    Order.findOne(order.id).populate('User').exec(function(err, order){
    if (err) console.log(err); 
      console.log(order);
    })
})










