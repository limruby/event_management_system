const Evaluation = require('../models/evaluation');
require('dotenv').config();

const create = (req, res, next)=>{

  const judge_id = req.body.judge_id;
  const judge_name = req.body.judge_name;
  const competitor_id = req.body.competitor_id;
  const competitor_name = req.body.competitor_name;
  const competitor_acc_id = req.body.competitor_acc_id;

  const newEvaluation = new Evaluation({
    judge_id,
    judge_name,
    competitor_id,
    competitor_name,
    competitor_acc_id
  });

  newEvaluation.save()
  .then(() => res.json(newEvaluation))
  .catch(err => res.status(404).json('Error here:' + err));
};


const read = (req, res, next)=>{
  var judge_id = req.query.judge_id;
  Evaluation.find({judge_id: judge_id}, (err, evaluation) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!evaluation) {
      return res
      .status(404)
      .json({ success: false, error: req.query.judge_id })
    }
    return res.status(200).json({ success: true, data: evaluation })
  }).catch(err => console.log(err))
};



const readAll = (req, res, next)=>{ 
  Evaluation.find({}, (err, evaluation) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!evaluation) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: evaluation})
  }).catch(err => console.log(err))
};

const update = (req, res, next)=>{

  var updateEvaluation = {};
  if(req.body.judge_id){
    updateEvaluation['judge_id'] = req.body.judge_id;
  }
  if(req.body.judge_name){
    updateEvaluation['judge_name'] = req.body.judge_name;
  }
  if(req.body.competitor_id){
    updateEvaluation['competitor_id'] = req.body.competitor_id;
  }
  if(req.body.competitor_name){
    updateEvaluation['competitor_name'] = req.body.competitor_name;
  }
  if(req.body.competitor_acc_id){
    updateEvaluation['competitor_acc_id'] = req.body.competitor_acc_id;
  }

  Evaluation.findByIdAndUpdate(req.body._id, updateEvaluation, (err, evaluation) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(evaluation){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};

const deletePair = (req, res, next) => {
    var _id = req.query._id;
  
    Evaluation.findByIdAndDelete(_id, function (err) {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
      else {
        return res.status(200).json({ success: true })
      }
    });
  }
  
module.exports = {create, read, readAll, update, deletePair}

