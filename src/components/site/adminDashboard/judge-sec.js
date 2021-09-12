import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Judge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/iiidentex_uitm/api/judge/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = React.useMemo(
    () => [
      {

        Header: 'Profile',
        columns: [

          {
            Header: 'Judge',
            accessor: 'name',
          },
          {
            Header: 'Contact Email',
            accessor: 'email',
          },
          {
            Header: 'Contact Number',
            accessor: 'phone_no',
          },
          {
            Header: 'Assign',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/assign_project_title`}>
                <button className="btn btn-success" >
                  Assign
                </button></Link>
            )
          },
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_judge`}>
                <button className="btn btn-success" >
                  Edit
                </button></Link>
            )
          },
        ],
      },
    ],
  )

  return (
    <div className="App" id="competitor">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Judge;