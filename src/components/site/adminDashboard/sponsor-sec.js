import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
  
  
  useEffect(() => {
    
    
    axiosInstance.get("/api/sponsors/readAll")
    .then(function(response) {
      setData(response.data.data);
    }).catch(function(error) {
      console.log(error);
    })

  }, []);
  

  const columns = React.useMemo(
    () => [
    {
        Header: 'Profile',
        columns: [
          {
            Header: 'Package',
            accessor: 'category',
          },
          {
            Header: 'Sponsor Amount (RM)',
            accessor: 'amount',
          },
          {
            Header: 'Company',
            accessor: 'company_name',
          },
          {
            Header: 'Company PIC',
            accessor: 'company_pic_name',
          },
          {
            Header: 'Bill Id',
            accessor: 'receipt_no',
          },
          {
            Header: 'Bill Verify',
            accessor: 'bill_verify',
          },

          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_sponsor`}>
              <button className="btn btn-success" >
         Edit
              </button>
              </Link>
            )
          },

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