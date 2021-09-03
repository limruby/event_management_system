import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function AssignProject() {
    localStorage.setItem("activeKeys", "Judge")
    const [pair, setPair] = useState([])
    const [comp, setComp] = useState([])
    const [judge, setJudge] = useState([])
    const [competitor, setCompetitor] = useState([])

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'

    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/competitors/readAll")
            .then(function (response) {
                setCompetitor(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })
        axiosInstance.get("/iiidentex_uitm/api/judge/read", { params: { account_id: string } })
            .then(function (response) {
                setJudge(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })
        axiosInstance.get("/iiidentex_uitm/api/evaluation/read", { params: { judge_id: judge._id } })
            .then(function (response) {
                setPair(response.data.data)
            }).catch(function (error) {
                console.log(error);
            })
    }, [judge._id, string])

    function deletePair(_id) {
        console.log(pair)
        axiosInstance.get("/iiidentex_uitm/api/evaluation/deletePair",  { params: { _id: _id } })
        .then(function (response) {
        }).catch(function (error) {
          console.log(error);
        })
      }
    const inputChange = input => e => {

        setComp({
            ...comp,
            [input]: e.target.value
        });
    }

    function displayCompetitors() {
        var section = []
        const listCompetitors = competitor.map((competitor) =>
            <option value={competitor._id}>{competitor.name}</option>
        );
        section.push(
            <div className="form-group">
                <label htmlFor="competitor_name"><span>*</span>Competitor Name </label>
                <select className="form-control" id="competitor_name" required
                    onChange={inputChange('competitor_id')} value={competitor._id} >
                    <option value="">Please Select</option>
                    {listCompetitors}
                </select>
            </div>
        )
        return section;
    }
    function displayPair() {
        var section = []
        for (var i = 0; i < pair.length; i++) {
            section.push(
                <div>
                    <li>{pair[i].competitor_name}</li>
                    <button className="deleteBtn" type="button" onClick={() => {window.confirm("Are you sure you want to remove from the list?") && deletePair(pair._id)}}> <FaTrashAlt /></button>
                </div>
            )
        }
        return section;
    }
    const handleForm = (e) => {
        // perform all neccassary validations
        var tempComp;
        for (var j = 0; j < competitor.length; j++) {
            if (competitor[j]._id === comp.competitor_id) {
                tempComp = competitor[j]
            }
        }
        var postData = {
            judge_id: judge._id,
            judge_name: judge.name,
            competitor_id: comp.competitor_id,
            competitor_name: tempComp.name
        }
        axiosInstance.post("/iiidentex_uitm/api/evaluation/create", postData)
            .then(function (response) {
            }).catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className="edit-form-container">
            <form onSubmit={handleForm}>
                <h1>Judge: {judge.title} {judge.name}</h1>
                {displayCompetitors()}
                <div className="row">
                    <div className="col-6">
                        <Link to="/admin_dashboard">
                            <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <input className="btn btn-primary" type="submit" value="Assign" />
                    </div>
                </div>
            </form>
            <table>
                <tr>
                    <th>Competitor Name</th>
                </tr>
                <tr>
                    <td>{displayPair()}</td>
                </tr>
            </table>
        </div>
    )
}
export default AssignProject;