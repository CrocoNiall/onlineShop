var express     = require('express');
var router      = express.Router();
var moongoose   = require('mongoose');

var Order       = require('../models/order')


// INDEX
router.get('/', function(req, res) {
  Order.find({}, function(err, orders){
    if(err) console.log(err)
    res.json(orders);
  })
});


// SHOW
router.get('/:id', function(req, res) {
  Order.findOne({_id: req.params.id}, function(err, order){
    if(err) console.log(err)
    res.json(order);
  })
});

// DELETE
router.delete('/:id', function(req, res) {
  Order.remove({_id: req.params.id}, function(err){
    if(err) console.log(err)
    res.json('Deleted');
  })
});

// UPDATE
router.put('/:id', function(req, res) {
  Order.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, order){
    if(err) console.log(err)
    res.json(order);
  })
});

//CREATE
router.post('/', function(req, res){
  var data = req.body;
  var newOrder = new Order({
    createdAt: data.name,
    address: data.price,
    description: data.description
  })

  newOrder.save(function (err, product) {
    if(err) console.log(err);
    console.log('Product has been created!');
    res.json(product);
  });
})


module.exports = router;