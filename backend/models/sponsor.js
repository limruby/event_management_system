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

const videoSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  }

})

const sponsorSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  category: {
    type: String,
    required: true
  }, 
  company_name: {
    type: String,
    required: true
  }, 
  company_address: {
    type: String,
    required: true
  }, 
  company_pic_name: {
    type: String,
    required: true
  }, 
  company_contact: {
    type: String,
    required: true
  }, 
  company_website: {
    type: String,
    required: true
  }, 

  poster:{
    type: Buffer,
    default: null
  },
  video:[subSchema],

}, {
  timestamps: true,
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;