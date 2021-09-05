import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';
import { CSVLink } from 'react-csv';

function Sponsor(){
  const [data, setData]=useState([]);
  const headers = [
    {label:'Company Name', key: 'Company Name'},
    {label:'Company PIC Name', key: 'company_pic_name'},
    {label:'Company PIC IC', key: 'company_pic_ic'},
    {label:'Category', key: 'category'},
    {label:'Company Name', key: 'company_contact'},
    {label:'Company Website', key: 'company_website'},
    {label:'Address_1', key: 'address_1'},
    {label:'Address_2', key: 'address_2'},
    {label:'Postcode', key: 'postcode'},
    {label:'City', key: 'city'},
    {label:'State', key: 'state'},
    {label:'Country', key: 'country'},
    {label:'Payment', key: 'bill_status'},
    {label:'Sponsor Amount', key: 'amount'},
  ]
  const csvReport = {
    filename: 'IIIDentEX_Sponsor_List.csv',
    headers: headers,
    data: data
  }

  useEffect(() => { 
    axiosInstance.get("/iiidentex_uitm/api/sponsors/readAll")
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
    console.log(input_id)
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
      <CSVLink {...csvReport}>
      <button className="btn btn-success" >Export to CSV</button></CSVLink>  
    </div>
  );

    }

    export default Sponsor;