const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSchema = new Schema({
    name: {
      type: String,
      required: false
    },
    source: {
      type: Buffer,
      required: false
    }
  });

const judgeSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
    required: true
  }, 
  affiliation: {
    type: String,
    required: false
  }, 
  email: {
    type: String,
    required: false
  },
  phone_no:{
    type:String,
    required:true
  },
  address_1: {
    type: String,
    required: true
  }, 
  address_2: {
    type: String,
    required: true
  },
  postcode:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  },
  country:{
    type:String,
    required: true
  },
  poster:[subSchema],
  
  
  

}, {
  timestamps: true,
});

const Judge = mongoose.model('Judge', judgeSchema);

module.exports = Judge;