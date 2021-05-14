const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique:true
  },
}, {
  timestamps: true,
});

const Role = mongoose.model('Role', roleSchema);

Role.insertMany([
    { name: 'Competitor'},
    { name: 'Sponsor'},
    { name: 'Visitor'}
],
    { ordered: false}
	

).then(function(){
    console.log("Role data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});


module.exports = Role;


//add route