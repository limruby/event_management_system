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
      gender
    });

    newCompetitor.save()
      .then(() => res.json('Competitor Created!'))
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

  if(req.body.members){
    updateCompetitor['members'] = req.body.members;
  }
  if(req.body.poster){
    updateCompetitor['poster'] = req.body.poster;
  }

  if(req.body.achievement){
    updateCompetitor['achievement'] = req.body.achievement;
  }
  if(req.body.publication){
    updateCompetitor['publication'] = req.body.publication
  }  
  if(req.body.grant){
    updateCompetitor['grant'] = req.body.grant;
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
   


    Competitor.findByIdAndUpdate(req.body._id, updateCompetitor, (err, competitors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err, data:req.body })
        }
        if(competitors){
        return res.status(200).json({ success: true, data: req.body })
      }
    }).catch(err => console.log(err))
 };







module.exports = {create, read, update}