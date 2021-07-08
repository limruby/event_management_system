import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function UploadReceipt() {
    localStorage.setItem("activeKeys", "Competitor")
    const [data, setData] = useState({
        receipt: []
    });

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'

    const uploadReceiptHandler = (element, index) => e => {
        if (element == 'receipt') {
            let selectedFile = e.target.files;
            let file = null;
            let fileName = "";
            //Check File is not Empty
            if (selectedFile.length > 0) {
                // Select the very first file from list
                let fileToLoad = selectedFile[0];
                fileName = fileToLoad.name;
                // FileReader function for read the file.
                let fileReader = new FileReader();
                // Onload of file read the file content
                fileReader.onload = function (fileLoadedEvent) {
                    file = fileLoadedEvent.target.result;
                    // Print data in console
                    // data.receipt[0]['name'] = fileName;
                    // data.receipt[0]['source'] = fileReader.result;
                    data.receipt = {
                        'name': fileName,
                        'source': fileReader.result
                    }
                    //data.company_logo.push({'name':fileName,'source':fileReader.result})
                };
                // Convert data to base64
                var baseFile = fileReader.readAsDataURL(fileToLoad);
            }
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        // perform all neccassary validations
        if (data.receipt === null) {
            alert("Please upload the receipt!");
        }
        else {
            ///////update to db /////////////           

            var postData = {
                _id: user_id,
                receipt: data.receipt
            }
            axiosInstance.post("/api/competitors/update", postData)
                .then(function (response) {
                    window.location.href = '/admin_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Upload Receipt</h1>

                    <div className="form-group">
                        <label htmlFor="receipt"><span>*</span>Upload Receipt</label><br />
                        <input type="file" onChange={uploadReceiptHandler('receipt', 0)} />
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

export default UploadReceipt;