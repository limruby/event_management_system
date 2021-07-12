import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Account(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
      axiosInstance.get("/iiidentex_uitm/api/accounts/readAdmin")
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })
       
    }, []);
 

const columns = React.useMemo(
    () => [
      {
        Header: 'Account',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Password',
            accessor: 'password',
            Cell: cell => (
              <button className="btn btn-danger" >
                Edit
              </button>
            )
          },
          {
            Header: 'Role',
            accessor: 'role'
          }
        ],
      },

     
    ],
    []
  )

  

  return (
    <div className="App">
     

      <Table columns={columns} data={data} />
    </div>
  );

}

export default Account;