
var express = require('express');
var router = express.Router();

var moongoose = require('mongoose');

var Order = require('../models/order')

// var bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));

// INDEX
router.get('/', function(req, res) {

  Order.find({}, function(err, orders){
    if(err) console.log(err)
    // res.render('index');
    res.json(orders);
  })

});

module.exports = router;