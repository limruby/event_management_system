import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000' ,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;