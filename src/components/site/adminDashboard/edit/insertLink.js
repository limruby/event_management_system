import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function InsertLink() {
    localStorage.setItem("activeKeys", "Judge")
    const [data, setData] = useState([])
    useEffect(() => {
        axiosInstance.post("/iiidentex_uitm/api/formLink/read")
            .then(function(response) {
              setData(response.data.data)
            }).catch(function(error) {
              console.log(error);
            })
    }, [data])

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
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
            if(data._id !== null || data._id !==undefined){
            axiosInstance.post("/iiidentex_uitm/api/formLink/create", postData)
                .then(function (response) {
                     window.location.href = '/iiidentex_uitm/admin_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
            } else{
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

                    <div className="form-group">
                        <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                        <input className="form-control" type="text" id="address"
                            onChange={inputChange('evaluation_form')} value={data.evaluation_form} placeholder="Insert form link" required
                        />
                    </div>
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