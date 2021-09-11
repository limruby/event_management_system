import React, { useEffect,  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function EditPaymentStatus() {
    localStorage.setItem("activeKeys", "Order")
    
    const [data, setData] = useState({
    }); 
    const location = useLocation();
    const thePath = location.pathname;
    const cart_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"'+ cart_id +'"'

    useEffect(() => {
        axiosInstance.get("/iiidentex_uitm/api/cart/readOrder", { params: { _id:string} })
            .then(function (response) {
                setData(response.data.data[0]);
            }).catch(function (error) {
                console.log(error);
            })
    }, [string]);

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
 //////action performed//////
 var obj = [];
 const deleteFile = (element, index) => e => {
     if((window.confirm('Are you sure you wish to delete this item?'))){
     if (element === 'receipt') {
         let obj = data.receipt;
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
     if (selectedFile.length > 0) {
         let fileToLoad = selectedFile[0];
         fileName = fileToLoad.name;
         let fileReader = new FileReader();
         fileReader.onload = function (fileLoadedEvent) {
             file = fileLoadedEvent.target.result;
             data.receipt = {
                 'name': fileName,
                 'source': fileReader.result
             }
         };
         // Convert data to base64
         var baseFile = fileReader.readAsDataURL(fileToLoad);
     }
 }
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
    const handleForm=(e)=>{
        e.preventDefault();  
        var postData = {
            _id : cart_id,
            bill_status: data.bill_status,
            bill_id: data.bill_id,
            receipt: data.receipt
        }
            axiosInstance.post("/iiidentex_uitm/api/cart/updateCart", postData)
            .then(function(response) {
              window.location.href = '/iiidentex_uitm/admin_dashboard';
            }).catch(function(error) {
              console.log(error);
            })           
        }
        
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="edit-form-container">
                <div className="form-group">
                    <label htmlFor="bill_status"><span>*</span>Payment Verify</label>
                    <select className="form-control" id="bill_status" required
                        onChange={inputChange('bill_status')} value={data.bill_status} >         
                        <option value="">Please select</option>
                        <option value="N/A">N/A</option>
                        <option value="Fail">Payment Fail</option>
                        <option value="Pending">Payment Pending</option>
                        <option value="Success">Payment Success</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="bill_id">Bill ID</label>
                    <input className="form-control" type='text' name='bill_id' id="bill_id"
                    placeholder='Bill ID' onChange={inputChange('bill_id')} value={data.bill_id} 
                    />
                </div>
                {displayReceiptForm()}
                <br />
                <div className="btn-group">
                    <Link to="/admin_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update"/>
                </div>
                </div>
        </form>
         </>
        )
}
export default EditPaymentStatus;