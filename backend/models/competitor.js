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

const abstractSchema = new Schema({
  title: {type: String, required: false},
  content: {type: String, required: false},
  keywords:[{type:String, required: false}]
});

const bookChapterSchema = new Schema({
  introduction: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  conclusion: {
    type: String,
    required: false
  },
  references:[{type:String, required: false}]
});


const memberSchema = new Schema({
  name: {
    type: String,
    required: false
  }, 
  affiliation: {
    type: String,
    required: false
  }, 
  email: {
    type: String,
    required: false
  }
})

const competitorSchema = new Schema({
  account_id:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Account'}],
    required: true
  },
  category: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
    required: true
  }, 
  affiliation: {
    type: String,
    required: true
  }, 
  nric_passport_selection: {
    type: String,
    required: true
  }, 
  nric_passport_no: {
    type: String,
    required: true
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
  gender: {
    type: String,
    required: true
  },
  receipt_no:{
    type:String
  },
  amount:{
    type:String,
    required: true
  },
  bill_verify: {
    type:String,
    default: "pending"
  },
  trans_date:{
    type:String
  },
  status:{
    type:String
  },
  receipt:[subSchema],
  poster:[subSchema],
  achievements:[subSchema],
  publications:[subSchema],
  grants:[subSchema],
  
  video:[videoSchema],

  abstract:[abstractSchema],

  bookChapter: [bookChapterSchema],

  members:[memberSchema]



}, {
  timestamps: true,
});






const Competitor = mongoose.model('Competitor', competitorSchema);

module.exports = Competitor;