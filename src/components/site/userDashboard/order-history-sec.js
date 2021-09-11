import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Order() {

    const [data, setData] = useState([]);
    const account_id = localStorage.getItem('user_id');

    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/cart/userReadCart", { params: { account_id: account_id } })
            .then(function (response) {
                setData(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })

    }, [account_id]);

    function displayName(input) {      
        if(input[0]){ 
            return input[0].name;
        }
        
      }
      function imageBuffer(input) {   
        if(input[0]){ 
            const imageBuffer = Buffer.from(input[0].source.data);     
            return imageBuffer;            
        }  
      }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Order History',
                columns: [
                    {
                        Header: 'Order Time',
                        accessor: 'order_date'
                    },
                    {
                        Header: 'Medal Quantity',
                        accessor: 'medalQuantity',
                    },
                    {
                        Header: 'Bookchapter Quantity',
                        accessor: 'bookQuantity',
                    },
                    {
                        Header: 'Book Quantity',
                        accessor: 'bookOnlyQuantity',
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
                        Header: 'Receipt',
                        accessor: 'receipt',
                        Cell: ({row, value}) => (<a download={displayName(value)} href={imageBuffer(value)} title="Download">Download</a>  )
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