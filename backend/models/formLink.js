const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formLinkSchema = new Schema({
  evaluation_form:{
    type: String,
    required: true,
  },
 
}, {
  timestamps: true,
});

const FormLink = mongoose.model('formLink', formLinkSchema);

module.exports = FormLink;