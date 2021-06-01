const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const accountSchema = new Schema({
  role:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  }, 
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

bcrypt.hash('dinowex99admin', 10, function(err, hashedPassword){
    // if(err){
    //   res.json({
    //     error:err
    //   })
    // }

    Account.insertMany([
        { role: 'Admin', email: 'admin@dinowex.com', password:hashedPassword},
    ],
        { ordered: false}
      
    ).then(function(){
        console.log("Account data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });

});


const Account = mongoose.model('Account', accountSchema);

module.exports = Account;