import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';
import { Link } from 'react-router-dom';

function Account() {

  const [data, setData] = useState([]);


  useEffect(() => {


    axiosInstance.get("/iiidentex_uitm/api/accounts/readAll")
    .then(function (response) {
      setData(response.data.data);
    }).catch(function (error) {
      console.log(error);
    })

  }, []);

  function deleteAccount(account_id) {

    axiosInstance.get("/api/accounts/deleteOne",  { params: { account_id: account_id } })
    .then(function (response) {
       window.location.reload();
    }).catch(function (error) {
      console.log(error);
    })
  }

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
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Password',
        accessor: 'password',
        Cell: data => (
          <Link to={`/admin_dashboard/${data.row.original._id}/edit_password`}>
          <button className="btn btn-success" >

          Edit

          </button></Link>
          )
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: data => (
          
          <button className="btn btn-danger" 
            type="button" 
            onClick={() => {window.confirm("Are you sure you want to delete this account?") && deleteAccount(data.row.original._id)}}
          >
          Delete
          </button>
          )
      },

      ],
    },


    ],
    []
    )



 return (
    <div className="App">
      <Link to='/admin_dashboard/create_profile'>
        <button className="btn btn-danger" style={{marginBottom:"2%"}}>

          Create New Account

        </button></Link>
      <Table columns={columns} data={data} />
    </div>
  );

  }

  export default Account;