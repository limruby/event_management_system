import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Order(){

  const [data, setData]=useState([]);
  useEffect(() => { 
    axiosInstance.get("/iiidentex_uitm/api/cart/readCart")
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
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Medal Quantity',
            accessor: 'medalQuantity',
          },
          {
            Header: 'Book Quantity',
            accessor: 'bookQuantity',
          },
          {
            Header: 'Total Price',
            accessor: 'total_price',
          },
          {
            Header: 'Payment Status',
            accessor: 'bill_status'
          },
          {
            Header: 'Bill ID',
            accessor: 'bill_id'
          },          
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original._id}/edit_order_status`}>
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

    export default Order;