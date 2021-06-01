import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
      // axiosInstance.get("/api/accounts/readAll")
      //   .then(function(response) {
      //     setData(response.data.data);
      //   }).catch(function(error) {
      //     console.log(error);
      //   })

        // axiosInstance.get("/api/accounts/readAll")  //filter
        // .then(function(response) {
        //   setData(response.data.data);
        // }).catch(function(error) {
        //   console.log(error);
        // })
    }, []);
 

const columns = React.useMemo(
    () => [
      {
        Header: 'Admin',
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

export default Sponsor;