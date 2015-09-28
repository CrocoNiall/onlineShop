var express = require('express')
var app = express()
var path = require('path')
// var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// body parser config
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/onlineShop')

var User = require('./models/user')
var Product = require('./models/product')
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

