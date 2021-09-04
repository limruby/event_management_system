import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig.js';

function Evaluation_Form() {
  const [data, setData] = useState([]);
  const [assigned, setAssigned] = useState([])
  const [link, setLink] = useState([])
  const account_id = localStorage.getItem('user_id');

  useEffect(() => {
    axiosInstance.get("/iiidentex_uitm/api/judge/read", { params: { account_id: account_id } })
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/iiidentex_uitm/api/evaluation/read", { params: { judge_id: data._id } })
      .then(function (response) {
        setAssigned(response.data.data)
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/iiidentex_uitm/api/formLink/read")
      .then(function (response) {
        setLink(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })

  }, [account_id, data._id])
  function displayLink() {
    var section = []
    if (link.length === 0) {
        section.push(
            <div className="member-box">
               <p>Evaluation Form Coming Soon</p>
            </div>
        )
    }
    else {
        section.push(
            <div className="member-box">
                <a href={link[0].evaluation_form}>Visit Evaluation Form</a>
            </div>
        )
    }

    return section

}
  const columns = React.useMemo(
    () => [
      {
        Header: 'Assigned Competitor',
        columns: [
          {
            Header: 'Competitor Name',
            accessor: 'competitor_name'
          },
          {
            Header: 'Booth',
            accessor: 'competitor_acc_id',
            Cell: ({ row, value }) => (
              <Link className="btn btn-success" to={`/competition_booth/${value}`}>
                Visit
              </Link>
            )
          },
        ],
      },
    ],
    []
  )

  return (
    <div>
      {displayLink()}
      <div>
        <Table columns={columns} data={assigned} />
      </div>
    </div>
  );

}

export default Evaluation_Form;