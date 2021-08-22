import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';
import axios from 'axios';

function Visitor() {
  const [data, setData] = useState([]);

  useEffect(() => {

    axiosInstance.get("/iiidentex_uitm/api/visitors/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  var cmpy_code = "AA04"
  var zone = "02"   
  var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"
  var product_ID = "149"
  var sha1 = require('sha1');
  var url="";
  var hash_value="";

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
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Contact Number',
            accessor: 'contact',
          },
          {
            Header: 'Bill ID',
            accessor: 'receipt_no'
          },
          {
            Header: 'Bill Verify',
            accessor: 'bill_verify'
          },
          {
            Header: 'Check Status',
            Cell: data => (     
              <div>
                <form className="list-group" id={`uitmUpdate${data.row.original.nric_passport_no}`} method="POST">
                    <input type="text" name="hash_value" id={`hashValue${data.row.original.nric_passport_no}`} hidden/>
                </form>        
                <button className="btn btn-success" onClick={() =>{uitmCheck(data.row.original.nric_passport_no)}}>
                  Check
                </button>
              </div>

            )
          },
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_visitor`}>
                <button className="btn btn-success" >
                  Edit
                </button></Link>

            )
          },
          {
            Header: 'Upload Receipt & Cert',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original._id}/upload_receipt_visitor`}>
                <button className="btn btn-success" >
                  Upload
                </button></Link>

            )
          },
          {
            Header: 'Receipt Name',
            accessor: 'receipt[0].name'
          },
          {
            Header: 'Cert Name',
            accessor: 'certificate[0].name'
          },
        ],
      },


    ],
    // []
  )




    return (
      <div className="App" id="competitor">    
        <Table columns={columns} data={data} />
      </div>
    );

    }

    export default Visitor;