const Visitor = require('../models/visitor');
// const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const create = (req, res, next)=>{
  
  const account_id = req.body.account_id;
  const name = req.body.name;
  const nric_passport_selection = req.body.nric_passport_selection;
  const nric_passport_no = req.body.nric_passport_no;
  const contact = req.body.contact;  
  const address_1 = req.body.address_1;  
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const amount = req.body.amount;
  const receipt = req.body.receipt;
  const certificate = req.body.certificate;

    const newVisitor = new Visitor({
    account_id, 
    amount,
    name, 
    nric_passport_selection,  
    nric_passport_no,    
    contact,     
    receipt,
    certificate,
    address_1,
      address_2,
      postcode,
      city,
      state,
      country,
    });

    newVisitor.save()
      .then(() => res.json(newVisitor))
      .catch(err => res.status(400).json('Error: ' + err));
};

const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
  Visitor.findOne({account_id: ObjectId(account_id)}, (err, visitors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!visitors) {
            return res
                .status(404)
                .json({ success: false, error: req.query.account_id })
        }
        return res.status(200).json({ success: true, data: visitors })
    }).catch(err => console.log(err))
 };

const update = (req, res, next)=>{

      var updateVisitor = {};

      if(req.body.name){
        updateVisitor['name'] = req.body.name;
      }
      if(req.body.nric_passport_selection){
        updateVisitor['nric_passport_selection'] = req.body.nric_passport_selection;
      }
      if(req.body.nric_passport_no){
        updateVisitor['nric_passport_no'] = req.body.nric_passport_no;
      }
      if(req.body.contact){
        updateVisitor['contact'] = req.body.contact;
      }
      if(req.body.address_1){
        updateVisitor['address_1'] = req.body.address_1;
      }
    
      if(req.body.address_2){
        updateVisitor['address_2'] = req.body.address_2;
      }
    
      if(req.body.postcode){
        updateVisitor['postcode'] = req.body.postcode;
      }
    
      if(req.body.city){
        updateVisitor['city'] = req.body.city;
      }
      if(req.body.state){
        updateVisitor['state'] = req.body.state;
      }
      if(req.body.country){
        updateVisitor['country'] = req.body.country;
      }
      if(req.body.bill_verify){
        updateVisitor['bill_verify'] = req.body.bill_verify;
      }     
      if(req.body.receipt_no){
        updateVisitor['receipt_no'] = req.body.receipt_no;
      } 
      if(req.body.receipt){
        updateVisitor['receipt'] = req.body.receipt;
      } 
      if(req.body.certificate){
        updateVisitor['certificate'] = req.body.certificate;
      } 
    
        Visitor.findByIdAndUpdate(req.body._id, updateVisitor, (err, visitors) => {
            if (err) {
                return res.status(400).json({ success: false, error: err, data:req.body })
            }
            if(visitors){
            return res.status(200).json({ success: true, data: req.body })
          }
        }).catch(err => console.log(err))
     };

const readAll = (req, res, next)=>{ 
  Visitor.find({}, (err, visitors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!visitors) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: visitors })
  }).catch(err => console.log(err))
};


module.exports = {create, read, update, readAll}