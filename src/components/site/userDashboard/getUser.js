import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';


// const [account, setAccount]=useState([]);
// const account_id = localStorage.getItem('user_id');

//   useEffect(() => {
//     axiosInstance .get("/competitors/read", {params:{account_id:account_id}})
//       .then(function(response) {
//         setUser(response.data.data);
//       }).catch(function(error) {
//         console.log(error);
//       });

//     axiosInstance .get("/accounts/getAccount", {params:{account_id:account_id}})
//       .then(function(response) {
//         setAccount(response.data.data);
//       }).catch(function(error) {
//         console.log(error);
//       })

//   }, []);


export const getUser=()=>{
  const [user, setUser]=useState([]);

  useEffect(() => {
    axiosInstance .get("/competitors/read", {params:{account_id:account_id}})
      .then(function(response) {
        setUser(response.data.data);
      }).catch(function(error) {
        console.log(error);
      });

  }, []);

   return user;
}

