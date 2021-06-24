const Sponsor = require('../models/sponsor');
// const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const create = (req, res, next)=>{
  
  const account_id = req.body.account_id;
  const category = req.body.category;
  const company_name = req.body.company_name;
  const company_pic_name = req.body.company_pic_name;
  const company_pic_ic = req.body.company_pic_ic;
  const company_contact = req.body.company_contact;  
  const company_website = req.body.company_website;
  const company_logo = req.body.company_logo;
  const address_1 = req.body.address_1;  
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;

    const newSponsor = new Sponsor({
    account_id, 
    category,
    company_name, 
    company_pic_name,
    company_pic_ic, 
    company_contact,     
    company_website, 
    company_logo,
    address_1,
      address_2,
      postcode,
      city,
      state,
      country,
    });

    newSponsor.save()
      .then(() => res.json(newSponsor))
      .catch(err => res.status(400).json('Error: ' + err));
};


const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
    Sponsor.findOne({account_id: ObjectId(account_id)}, (err, sponsors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sponsors) {
            return res
                .status(404)
                .json({ success: false, error: req.query.account_id })
        }
        return res.status(200).json({ success: true, data: sponsors })
    }).catch(err => console.log(err))
 };




const update = (req, res, next)=>{

      var updateSponsor = {};

      if(req.body.company_name){
        updateSponsor['company_name'] = req.body.company_name;
      }
      if(req.body.company_pic_name){
        updateSponsor['company_pic_name'] = req.body.company_pic_name;
      }
      if(req.body.company_contact){
        updateSponsor['company_contact'] = req.body.company_contact;
      }
      if(req.body.address_1){
        updateSponsor['address_1'] = req.body.address_1;
      }
    
      if(req.body.address_2){
        updateSponsor['address_2'] = req.body.address_2;
      }
    
      if(req.body.postcode){
        updateSponsor['postcode'] = req.body.postcode;
      }
    
      if(req.body.city){
        updateSponsor['city'] = req.body.city;
      }
      if(req.body.state){
        updateSponsor['state'] = req.body.state;
      }
      if(req.body.country){
        updateSponsor['country'] = req.body.country;
      }
      if(req.body.company_website){
        updateSponsor['company_website'] = req.body.company_website;
      }
      if(req.body.company_logo){
        updateSponsor['company_logo'] = req.body.company_logo;
      }
      if(req.body.poster){
        updateSponsor['poster'] = req.body.poster;
      }
    
      if(req.body.video){
        updateSponsor['video'] = req.body.video;
      }    
      if(req.body.bill_verify){
        updateSponsor['bill_verify'] = req.body.bill_verify;
      }     
      if(req.body.receipt_no){
        updateSponsor['receipt_no'] = req.body.receipt_no;
      } 
    
        Sponsor.findByIdAndUpdate(req.body._id, updateSponsor, (err, sponsors) => {
            if (err) {
                return res.status(400).json({ success: false, error: err, data:req.body })
            }
            if(sponsors){
            return res.status(200).json({ success: true, data: req.body })
          }
        }).catch(err => console.log(err))
     };

const readAll = (req, res, next)=>{ 
  Sponsor.find({}, (err, sponsors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!sponsors) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: sponsors })
  }).catch(err => console.log(err))
};


module.exports = {create, read, update, readAll}