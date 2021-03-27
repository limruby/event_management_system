const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
	const authHeader = req.headers.authorization;

	if(authHeader){
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.JSONWTK, (err, user)=>{
			if(err){
				res.json('Authentication Failed!')
			}

			req.user = user;
			next();
		})
	}
	else{
		res.json('Authentication Failed')
	}
};

module.exports = authenticate;