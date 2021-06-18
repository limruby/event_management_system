const Competitor = require('../models/competitor');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const create = (req, res, next)=>{
  const account_id = req.body.account_id;
  const category = req.body.category;
  const name = req.body.name;
  const affiliation = req.body.affiliation;
  const nric_passport_selection = req.body.nric_passport_selection;
  const nric_passport_no = req.body.nric_passport_no;
  const phone_no = req.body.phone_no;
  const gender = req.body.gender;
  const address = req.body.address;


    const newCompetitor = new Competitor({
      account_id, 
      category,
      name,
      affiliation,
      nric_passport_selection,
      nric_passport_no,
      address,
      gender,
      phone_no
    });

    newCompetitor.save()
      .then(() => res.json(newCompetitor))
      .catch(err => res.status(400).json('Error: ' + err));
};


const read = (req, res, next)=>{
  var account_id = JSON.parse(req.query.account_id);
    Competitor.findOne({account_id: ObjectId(account_id)}, (err, competitors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!competitors) {
            return res
                .status(404)
                .json({ success: false, error: req.query.account_id })
        }
        return res.status(200).json({ success: true, data: competitors })
    }).catch(err => console.log(err))
 };

const update = (req, res, next)=>{


  var updateCompetitor = {};
  if(req.body.name){
    updateCompetitor['name'] = req.body.name;
  }
  if(req.body.phone_no){
    updateCompetitor['phone_no'] = req.body.phone_no;
  }
 
  if(req.body.affiliation){
    updateCompetitor['affiliation'] = req.body.affiliation;
  }
 
  if(req.body.nric_passport_selection){
    updateCompetitor['nric_passport_selection'] = req.body.nric_passport_selection;
  }
 
  if(req.body.nric_passport_no){
    updateCompetitor['nric_passport_no'] = req.body.nric_passport_no;
  }
 
  if(req.body.gender){
    updateCompetitor['gender'] = req.body.gender;
  }
 
  if(req.body.address){
    updateCompetitor['address'] = req.body.address;
  }

  if(req.body.members){
    updateCompetitor['members'] = req.body.members;
  }
  if(req.body.poster){
    updateCompetitor['poster'] = req.body.poster;
  }

  if(req.body.achievements){
    updateCompetitor['achievements'] = req.body.achievements;
  } 
  if(req.body.publications){
    updateCompetitor['publications'] = req.body.publications
  }  
  if(req.body.grants){
    updateCompetitor['grants'] = req.body.grants;
  }
  if(req.body.video){
    updateCompetitor['video'] = req.body.video;
  }
  if(req.body.abstract){
    updateCompetitor['abstract'] = req.body.abstract;
  }
  if(req.body.bookChapter){
    updateCompetitor['bookChapter'] = req.body.bookChapter;
  }
  if(req.body.bill_verify){
    updateCompetitor['bill_verify'] = req.body.bill_verify;
  }


    Competitor.findByIdAndUpdate(req.body._id, updateCompetitor, (err, competitors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err, data:req.body })
        }
        if(competitors){
        return res.status(200).json({ success: true, data: req.body })
      }
    }).catch(err => console.log(err))
 };

const readAll = (req, res, next)=>{ 
    Competitor.find({}, (err, competitors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!competitors) {
            return res
                .status(404)
                .json({ success: false, error: req.query.account_id })
        }
        return res.status(200).json({ success: true, data: competitors })
    }).catch(err => console.log(err))
 };

 const pay = (req, res, next) => {
  // extract POST data from billplz
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  var res_string = url.split('?');
  var queryString=res_string[1];
  const params = qs.parse(queryString)
 //  console.log(params)
 
// do a validation
const billplzId = "billplzid" + params['billplz[id]'];
  const billplzPaidAt = "billplzpaid_at" + params['billplz[paid_at]'];
  const billplzPaid = "billplzpaid" + params['billplz[paid]'];
  const combineString = billplzId +  "|" + billplzPaidAt +  "|" + billplzPaid;
  var hash = CryptoJS.HmacSHA256(combineString, "S-B3mEu_juz3G2q2IlEfYmmw").toString();
 //  console.log(billplzPaid)
 //  console.log(params['billplz[paid]'])
 //  console.log(params['billplz[x_signature]'] == hash)
 //  console.log(params['billplz[x_signature]'])
 //  console.log(hash);
//isPaid?
if(params['billplz[paid]'] === "true" && params['billplz[x_signature]'] === hash){
 localStorage.setItem('bill_id',params['billplz[id]'])
 localStorage.setItem('bill_paid_at',params['billplz[paid_at]'])
 localStorage.setItem('bill_status', params['billplz[paid]'])
 res.redirect('http://localhost:3000/payment_success');
}
else{
 res.redirect('http://localhost:3000/payment_fail')
}
}

module.exports = {create, read, update, readAll}