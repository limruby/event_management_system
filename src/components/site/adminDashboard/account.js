import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';
import { Link } from 'react-router-dom';

function Account() {

  const [data, setData] = useState([]);


  useEffect(() => {


    axiosInstance.get("/api/accounts/readAll")
    .then(function (response) {
      setData(response.data.data);
    }).catch(function (error) {
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