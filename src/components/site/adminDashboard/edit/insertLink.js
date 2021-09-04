import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function InsertLink() {
    localStorage.setItem("activeKeys", "Judge")
    const [data, setData] = useState({
        evaluation_form:''
    })
    const [link, setLink] = useState([])

    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/formLink/read")
            .then(function (response) {
                setLink(response.data.data);               
            }).catch(function (error) {
                console.log(error);
            })
    }, [])

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
    console.log(link)
    //One link only
    function displayLink() {
        var section = []
        if (link.length === 0) {
            section.push(
                <div className="form-group">
                    <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                    <input className="form-control" type="text" id="evaluation_form"
                        onChange={inputChange('evaluation_form')} placeholder="Insert form link" required
                    />
                </div>
            )
        }
        else {
            const formlinks = link.map((link) =>
            <p>{link.evaluation_form}</p>
        );
            section.push(
                <div className="member-box">
                    <p>{formlinks}</p>
                    <button className="deleteBtn" type="button" onClick={() => {window.confirm("Are you sure you want to remove the link?") && removeLink(link[0]._id)}}> <FaTrashAlt /></button>
                </div>
            )
        }

        return section

    }
    function removeLink(_id) {
        axiosInstance.get("/iiidentex_uitm/api/formLink/remove",  { params: { _id: _id } })
        .then(function (response) {
            window.location.reload();
        }).catch(function (error) {
          console.log(error);
        })
      }

    const handleForm = (e) => {
        e.preventDefault();
        // perform all neccassary validations
        if (data.evaluation_form === null) {
            alert("Please insert link!");
        }
        else {
            ///////update to db /////////////           
            var postData = {
                evaluation_form: data.evaluation_form,
            }
            if (data._id !== null || data._id !== undefined) {
                axiosInstance.post("/iiidentex_uitm/api/formLink/create", postData)
                    .then(function (response) {
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }).catch(function (error) {
                        console.log(error);
                    })
            } else {
                axiosInstance.post("/iiidentex_uitm/api/formLink/update", postData)
                    .then(function (response) {
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Insert Link</h1>

                    {/* <div className="form-group">
                        <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                        <input className="form-control" type="text" id="evaluation_form"
                            onChange={inputChange('evaluation_form')} value={displayLink()} placeholder="Insert form link" required
                        />
                        
                    </div> */}
                    {displayLink()}

                    <div className="btn-group">
                        <Link to="/admin_dashboard">
                            <button className="btn btn-danger back-btn">Back</button>
                        </Link>
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default InsertLink;