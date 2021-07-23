const Cart = require('../models/cart')
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
require('dotenv').config();


const addToCart = (req, res, next)=>{
    const account_id = req.body.account_id
    const medalQuantity = req.body.medalQuantity;
    const bookQuantity = req.body.bookQuantity;
    const total_price = req.body.total_price;
    const email = req.body.email;  
    const name = req.body.name;
    const order_date = req.body.order_date;
    const bill_status = req.body.bill_status;
    
    const newCart = new Cart({
      account_id,
      medalQuantity,
      bookQuantity, 
      total_price,
      email,
      name,
      order_date,
      bill_status
    });
    newCart.save()
    .then(() => res.json(newCart))
    .catch(err => res.status(400).json('Error: ' + err));
}
const updateCart = (req, res, next)=>{
  var updateCart= {};
  if(req.body.bill_status){
    updateCart['bill_status'] = req.body.bill_status;
  }
  if(req.body.bill_id){
    updateCart['bill_id'] = req.body.bill_id;
  }
  Cart.findByIdAndUpdate(req.body._id, updateCart, (err, carts) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(carts){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
}

const cancelCart = (req, res, next)=>{
  var _id = req.query._id;

  Cart.findByIdAndDelete(_id,function (err) {
    if(err)  {
        return res.status(400).json({ success: false, error: err })
      }
    else{
      return res.status(200).json({ success: true })
   }
});
}

const readCart = (req, res, next)=>{ 
  Cart.find({}, (err, cart) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!cart) {
      return res
      .status(404)
      .json({ success: false })
    }
    return res.status(200).json({ success: true, data: cart })
  }).catch(err => console.log(err))
};

const userReadCart = (req, res, next)=>{ 
  var account_id = JSON.parse(req.query.account_id);
  Cart.find({account_id: ObjectId(account_id)}, (err, cart) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!cart) {
      return res
      .status(404)
      .json({ success: false })
    }
    return res.status(200).json({ success: true, data: cart })
  }).catch(err => console.log(err))
};

module.exports = {addToCart, cancelCart, readCart, updateCart, userReadCart}