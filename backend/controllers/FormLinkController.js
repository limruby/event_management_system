const Link = require('../models/formLink');
require('dotenv').config();

const create = (req, res, next)=>{

  const evaluation_form = req.body.evaluation_form;

  const newLink = new Link({
    evaluation_form
  });

  newLink.save()
  .then(() => res.json(newLink))
  .catch(err => res.status(404).json('Error here:' + err));
};


const read = (req, res, next)=>{
  var judge_id = req.query.judge_id;
  Link.find({judge_id: judge_id}, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!link) {
      return res
      .status(404)
      .json({ success: false, error: req.query.judge_id })
    }
    return res.status(200).json({ success: true, data: link })
  }).catch(err => console.log(err))
};



const readAll = (req, res, next)=>{ 
  Link.find({}, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!link) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: link})
  }).catch(err => console.log(err))
};

const update = (req, res, next)=>{

  var updateLink = {};
  if(req.body.evaluation_form){
    updateLink['evaluation_form'] = req.body.evaluation_form;
  }

  Link.findByIdAndUpdate(req.body._id, updateLink, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(link){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};

const remove = (req, res, next) => {
    var _id = req.query._id;
  
    Link.findByIdAndDelete(_id, function (err) {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
      else {
        return res.status(200).json({ success: true })
      }
    });
  }
  
module.exports = {create, read, readAll, update, remove}

