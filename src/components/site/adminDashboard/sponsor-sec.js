import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
  const [sponsor_id, setId] = useState('');
  
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


  function uitmCheck(id){
    setId(id);
    hash_value = sha1(token + cmpy_code + zone + product_ID + sponsor_id);
    url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + sponsor_id;
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