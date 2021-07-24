import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
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

    //var date = new Date(data.data.createdAt);
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