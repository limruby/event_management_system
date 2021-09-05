import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function UploadReceipt() {
    localStorage.setItem("activeKeys", "Competitor")
    const [data, setData] = useState({
        receipt: [],
        certificate: []
    });

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'
    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/competitors/read", { params: { account_id: string } })
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
                <div className="form-group" style={{ paddingBottom: "5%" }}>
                    <h1 className="mb-5">Upload Receipt<span>*</span></h1>
                    <input type="file" onChange={uploadReceiptHandler('receipt', 0)} />
                </div>
            );
        }
        else {
            section.push(
                <div className="member-box">
                    <h1 className="mb-5">Receipt</h1>
                    <p>{data.receipt[0].name}</p>
                    <button className="deleteBtn" type="button" onClick={deleteFile('receipt', 0)}> <FaTrashAlt /></button>
                </div>
            )
        }
        return section;
    }
    function displayCertForm() {
        var section = [];
        if (data.certificate == null || data.certificate[0] == null) {
            section.push(
                <div className="form-group" style={{ paddingBottom: "5%" }}>
                    <h1 className="mb-5">Upload Certificate<span>*</span></h1>
                    <input type="file" onChange={uploadCertHandler('certificate', 0)} />
                </div>
            );
        }
        else {
            section.push(
                <div className="member-box">
                    <h1 className="mb-5">Certificate</h1>
                    <p>{data.certificate[0].name}</p>
                    <button className="deleteBtn" type="button" onClick={deleteFile('certificate', 0)}> <FaTrashAlt /></button>
                </div>
            )
        }
        return section;
    }
    //////action performed//////
    var obj = [];
    const deleteFile = (element, index) => e => {
        if((window.confirm('Are you sure you wish to delete this item?'))){
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
            _id: data._id,
            receipt: data.receipt,
            certificate: data.certificate
        }
        axiosInstance.post("/iiidentex_uitm/api/competitors/update", postData)
            .then(function (response) {
                window.location.href = '/iiidentex_uitm/admin_dashboard';
            }).catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    {displayReceiptForm()}
                    {displayCertForm()}
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