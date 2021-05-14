const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
	const authHeader = req.headers.authorization;

	if(authHeader){
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.JSONWTK, (err, user)=>{
			if(err){const jwt = require('jsonwebtoken');

			const authenticate = (req, res, next)=>{
				// const authHeader = req.headers.authorization;
			
				// if(authHeader){
				// 	const token = authHeader.split(' ')[1];
			
				// 	jwt.verify(token, process.env.JSONWTK, (err, user)=>{
				// 		if(err){
				// 			res.json('Authentication Failed!')
				// 		}
			
				// 		req.user = user;
				// 		next();
				// 	})
				// }
				// else{
				// 	res.json('Authentication Failed')
				// }
			
				try{
					const authHeader = req.headers.authorization;
					const token = authHeader.split(' ')[1];
			
					if(!token){
						return res.status(401).json({msg:"No authentication token"});
					}
			
					const verified = jwt.verify(token, process.env.JSONWTK);
			
					if(!verified){
						return res.status(401).json({msg: "Token verification failed"});
					}
					next();
				}catch(err){
					res.status(500).json({error: err.message});
				}
			
			};
			
			module.exports = authenticate;
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