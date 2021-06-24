import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';


function EditProfile() {
    const [data, setData] = useState({
        company_name:'',
        company_pic_name:'',
        company_contact: 123456789,
        category:'',
        amount:'',
        bill_verify:null,
        receipt_no:''

    });
    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"'+ user_id +'"'
    
    useEffect(() => {
        axiosInstance.get("/api/sponsors/read", {params:{account_id:string}})
        .then(function(response) {
            setData(response.data.data);
        }).catch(function(error) {
            console.log(error); })
    }, [string])

const inputChange = input => e => {
        
        setData({
            ...data,
            [input]: e.target.value
        });
        
    };

const handleForm=(e)=>{
    e.preventDefault();
    // perform all neccassary validations
    if (data.company_name === ""||data.company_pic_name ===""||data.company_contact ===""||data.category===""||data.amount===""
        ){
        alert("Form not fill");
}
else{
            ///////update to db /////////////
             var postData = {
                 _id : data._id,
                 company_name : data.company_name,
                 company_pic_name : data.company_pic_name,
                 company_contact : data.company_contact,
                 category: data.category,
                 amount: data.amount,
                 bill_verify: data.bill_verify,
                 receipt_no: data.receipt_no
             }

             axiosInstance.post("/api/sponsors/update", postData)
             .then(function(response) {
                 window.location.href = '/admin_dashboard';
             }).catch(function(error) {
                 console.log(error);
             })
         }
     }

/////////////////////////////////////////////////////////////
return(
        <>
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        <div className="edit-form-container" style={{marginTop:"5%", marginBottom:"5%"}}>
                <h1 className="mb-5">Edit Profile Info</h1>
 
              
                 <div className="form-group">
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
                    onChange={inputChange('company_name')} value={data.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Category</label>
                    <select className="form-control" id="category" required
                    onChange={inputChange('category')} value={data.category} >
                        <option value="">Please select</option>
                        <option value="Gold Package">Gold Package</option>
                        <option value="Silver Package">Silver Package</option>
                        <option value="Bronze Package">Bronze Package</option>
                    </select> 
                </div>
                <div className="form-group">
                    <label htmlFor="amount"><span>*</span>Amount (RM)</label>
                    <input className="form-control" type='text' name='amount' id="amount"
                    placeholder='amount' required
                    onChange={inputChange('amount')} value={data.amount} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_pic_name"><span>*</span>Full Name of Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_name' id="company_pic_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_name')} value={data.company_pic_name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='Number' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="receipt_no"><span>*</span>Receipt No</label>
                    <input type="text" className="form-control" name="receipt_no" id="receipt_no"
                    placeholder='receipt_no'                    
                    onChange={inputChange('receipt_no')} value={data.receipt_no} />
                </div>
                <div className="form-group">
                    <label htmlFor="bill_verify"><span>*</span>Payment Verify</label>
                    <select className="form-control" id="bill_verify" required
                    onChange={inputChange('bill_verify')} value={data.bill_verify} >
                        <option value="">Please select</option>
                        <option value="false">Payment NOT success</option>
                        <option value="true">Payment Verify</option>
                    </select> 
                </div>

 

                <br />
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

export default EditProfile;
