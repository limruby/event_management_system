import jwt_decode from 'jwt-decode';

export const isAuth = () => {

    if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token')
		
		var decoded =  jwt_decode(token);
		//logout of token expired
		if(decoded.exp < Date.now() / 1000){
			localStorage.clear();
			return false;
		}
		else{
			return true;
		}

    } else {
        return false;
    }
}