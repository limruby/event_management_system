import jwt_decode from 'jwt-decode';
import axiosInstance from './axiosConfig.js';

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

export const isAdmin = () => {

    if (localStorage.getItem('role')) {
        let role = localStorage.getItem('role');

        if(role === "Admin"){
            return true;            
        }
        else{
            return false;
        }

       
    } else {
        
        return false;
    }
}