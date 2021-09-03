import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Judge() {
  const [data, setData] = useState([]);
  const [link, setLink] = useState([])

  useEffect(() => {

    axiosInstance.get("/iiidentex_uitm/api/judge/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/iiidentex_uitm/api/formLink/read")
      .then(function (response) {
        setLink(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

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
            Header: 'Email',
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
        ],
      },
    ],
    // []
  )

  return (
    <div className="App" id="competitor">
      <button className="btn btn-primary" onClick={() => window.location.href = '/iiidentex_uitm/admin_dashboard/insert_evaluation_form_link'}>Add form link</button>
      <div><a href={link.evaluation_form}> Evaluation Form</a></div>
      <Table columns={columns} data={data} />
    </div>
  );

}

export default Judge;