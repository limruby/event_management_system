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
  

  var cmpy_code = "AA04"
  var zone = "02"   
  var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"
  var product_ID = "149"
  var sha1 = require('sha1');
  var hash_value = '';
  var url = '';


  function uitmCheck(input_id){
    var id = input_id.toString()
    hash_value = sha1(token + cmpy_code + zone + product_ID + id);
    document.getElementById('hashValue'+id).value = hash_value;
    url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + id;
    document.getElementById("uitmUpdate"+id).action = url;
    
    submitForm(id);    
  }

   function submitForm(id){
    if(id !==" "){
      document.forms["uitmUpdate"+id].submit();
    }
  }

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
            Header: 'Check Status',
            Cell: data => (     
              <div>
                <form className="list-group" id={`uitmUpdate${data.row.original.company_pic_ic}`} method="POST">
                    <input type="text" name="hash_value" id={`hashValue${data.row.original.company_pic_ic}`} hidden/>
                </form>        
                <button className="btn btn-success" onClick={() =>{uitmCheck(data.row.original.company_pic_ic)}}>
                  Check
                </button>
              </div>

            )
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
          {
            Header: 'Upload Receipt',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original._id}/upload_receipt_sponsor`}>
                <button className="btn btn-success" >
                  Upload
                </button></Link>

            )
          },
          {
            Header: 'Receipt Name',
            accessor: 'receipt[0].name'
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