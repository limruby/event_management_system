import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://vexsdev.fsktm.um.edu.my/' ,
  
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;