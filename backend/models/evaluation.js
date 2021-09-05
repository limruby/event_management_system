const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
  judge_id:{
    type: String,
    required: true,
  },
  judge_name:{
    type: String,
    required: true,
  },
  competitor_id:{
    type: String,
    required: true,
  },
  competitor_acc_id:{
    type: String,
    required: true,
  },
  competitor_name:{
    type: String,
    required: true,
  },
  
}, {
  timestamps: true,
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

module.exports = Evaluation;