const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formLinkSchema = new Schema({
  evaluation_form:{
    type: String,
  },
  youtube_form:{
    type: String,
  },
 
}, {
  timestamps: true,
});

const FormLink = mongoose.model('formLink', formLinkSchema);

module.exports = FormLink;