const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const register = (req, res, next)=>{
	bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
    if(err){
      res.json({
        error:err
      })
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = hashedPassword;
    const nric_or_passport = req.body.nric_or_passport;
    const nric_or_passport_number = req.body.nric_or_passport_number;
    const affiliation = req.body.affiliation;
    const address = req.body.address;
    const gender = req.body.gender;

    const newUser = new User({
      username, 
      email,
      password,
      nric_or_passport,
      nric_or_passport_number,
      affiliation,
      address,
      gender
    });

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    })
};



//login
const login = (req, res, next )=> {
	const password = req.body.password;

	User.findOne({ email:req.body.email}, function(err, result) {
		if(err) throw err;
		if(result){
		  bcrypt.compare(password, result.password, function(err, isMatch){
		    if(err) throw err;
		    if(isMatch){
		    	const id = result.id;
		        const token = jwt.sign({id}, process.env.JSONWTK, {expiresIn: '6h'})
		       res.json({auth: true, token:token, result:result.username})

		    }
		    else{
		      res.json('Password not match')
		    }
		  })
		}
		else{
		  res.json('User not found.')
		}

	});
}


const isAuth = (req, res, next)=>{
	res.send('yes')
}





//logout

module.exports = {register, login}