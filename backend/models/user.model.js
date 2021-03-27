const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

  password: {
    type: String,
    required: true
  },

  nric_or_passport: {
    type: String,
    required: true
  },

  nric_or_passport_number: {
    type: String,
    required: true
  },

  affiliation: {
    type: String,
    required: true
  },


  address: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true,
  }

}, {
  timestamps: true,
});





const User = mongoose.model('User', userSchema);

module.exports = User;