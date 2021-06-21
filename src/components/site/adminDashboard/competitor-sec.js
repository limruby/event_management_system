import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';
import axios from 'axios';

function Competitor() {

  const [data, setData] = useState([]);

  const [competitor_id, setId] = useState('');

  useEffect(() => {


    axiosInstance.get("/api/competitors/readAll")
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
  var hash_value = sha1(token + cmpy_code + zone + product_ID + competitor_id);
  var url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + competitor_id;


  function uitmCheck(id){
    setId(id);
    hash_value = sha1(token + cmpy_code + zone + product_ID + competitor_id);
    url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + competitor_id;
    if(id !== " "){
      document.forms["uitmUpdate"+id].submit();
    }
  }


  const columns = React.useMemo(
    () => [
    {
  
        Header: 'Profile',
        columns: [

          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Name',
            accessor: 'name',
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
                <form className="list-group" id={`uitmUpdate${data.row.original.nric_passport_no}`} action={url} method="POST">
                    <input type="text" name="hash" value={hash_value} hidden/>
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
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_competitor`}>
                <button className="btn btn-success" >
                  Edit
                </button></Link>

            )
          },
        ],
      },


    ],
    // []
  )




    return (
      <div className="App">    
        <Table columns={columns} data={data} />
      </div>
    );

    }

    export default Competitor;