import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Links() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/iiidentex_uitm/api/formLink/read")
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = React.useMemo(
    () => [
      {
        Header: 'Event Links',
        columns: [
          {
            Header: 'Judge: Evaluation Link',
            accessor: 'evaluation_form',
          },
          {
            Header: 'Live Event: Youtube',
            accessor: 'youtube_form',
          },
          {
            Header: 'Add Links',
            Cell: data => (
              <Link to='/admin_dashboard/insert_evaluation_form_link'>
                <button className="btn btn-success" >
                  Add
                </button></Link>
            )
          },
        ],
      },
    ],
    // []
  )
  return (
    <div className="empty-container">
       <Table columns={columns} data={data} /> 
    </div>
  );

}

export default Links;