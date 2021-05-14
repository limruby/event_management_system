import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000' ,
  
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;