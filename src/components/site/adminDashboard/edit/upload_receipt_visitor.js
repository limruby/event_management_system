import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function UploadReceipt() {
    localStorage.setItem("activeKeys", "Visitor")
    const [data, setData] = useState({
        receipt: [],
        certificate: []
    });

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'
    console.log(user_id)
    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/visitors/read", { params: { _id: string } })
            .then(function (response) {
                setData(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })
    }, [string])

    function displayReceiptForm() {
        var section = [];
        if (data.receipt == null || data.receipt[0] == null) {
            section.push(
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Upload Receipt</h1>
                    <div className="form-group">
                        <label htmlFor="receipt"><span>*</span>Upload Receipt</label><br />
                        <input type="file" onChange={uploadReceiptHandler('receipt', 0)} />
                    </div>
                </div>
            );
        }
        else {
            section.push(
                <div>
                    <p>{data.receipt[0].name}
                        <button className="deleteBtn" type="button" onClick={deleteFile('receipt', 0)}> <FaTrashAlt /></button>
                    </p>
                </div>
            )
        }
        return section;
    }
    function displayCertForm() {
        var section = [];
        if (data.certificate == null || data.certificate[0] == null) {
            section.push(
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Upload Certificate</h1>
                    <div className="form-group">
                        <label htmlFor="certificate"><span>*</span>Upload Certificate</label><br />
                        <input type="file" onChange={uploadCertHandler('certificate', 0)} />
                    </div>
                </div>
            );
        }
        else {
            section.push(
                <div>
                    <p>{data.certificate[0].name}
                        <button className="deleteBtn" type="button" onClick={deleteFile('certificate', 0)}> <FaTrashAlt /></button>
                    </p>
                </div>
            )
        }
        return section;
    }
    //////action performed//////
    var obj = [];
    const deleteFile = (element, index) => e => {
        if (element === 'receipt') {
            let obj = data.receipt;
            obj.splice(index, 1);
        }
        else if (element === 'certificate') {
            let obj = data.certificate;
            obj.splice(index, 1);
        }
        setData({
            ...data,

        });
    }
    const uploadReceiptHandler = (element, index) => e => {
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
            };
            // Convert data to base64
            var baseFile = fileReader.readAsDataURL(fileToLoad);
        }
    }
    const uploadCertHandler = (element, index) => e => {
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
                data.certificate = {
                    'name': fileName,
                    'source': fileReader.result
                }
            };
            // Convert data to base64
            var baseFile = fileReader.readAsDataURL(fileToLoad);
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        ///////update to db /////////////   
        var postData = {
            _id: user_id,
            receipt: data.receipt,
            certificate: data.certificate
        }
        axiosInstance.post("/iiidentex_uitm/api/visitors/update", postData)
            .then(function (response) {
                window.location.href = '/iiidentex_uitm/admin_dashboard';
            }).catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <form onSubmit={handleForm}>
                {displayReceiptForm()}
                {displayCertForm()}
                <div className="btn-group">
                    <Link to="/admin_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </form>
        </>
    )
}
export default UploadReceipt;