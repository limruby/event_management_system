import React, { useEffect,  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

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

    const handleForm=(e)=>{
        e.preventDefault();  
        var postData = {
            _id : cart_id,
            bill_status: data.bill_status,
            bill_id: data.bill_id
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