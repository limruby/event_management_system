import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function CreateAccount() {
    localStorage.setItem("activeKeys", "Account")
    var judgeData = {
        account_id: '',
        title: 'default',
        name: 'default',
        affiliation: 'default',
        phone_no: '0123456789',
        email:'',
        address_1: 'default',
        address_2: 'default',
        postcode: 12345,
        city: 'default',
        state: 'default',
        country: 'Malaysia',
    }

    var compData ={
        account_id:'',
        category:'default',
        name:'default',
        affiliation:'default',
        nric_passport_selection:'NRIC',
        nric_passport_no: 123456789,
        phone_no:'0123456789',
        gender:'male',
        address_1:'default',
        address_2:'default',
        postcode:12345,
        city:'default',
        state:'default',
        country:'default',
    }

    var sponsorData = {
        account_id:'',
        category:'default',
        company_name:'default',
        company_pic_name:'default',
        company_pic_ic: 123456789,
        company_contact:'0123456789',
        company_address:'default',
        company_website:'default',
        address_1:'default',
        address_2:'default',
        postcode:12345,
        city:'default',
        state:'default',
        country:'default',
    }
    var visitorData ={
        account_id:'',
        name:'default',
        nric_passport_selection:'NRIC',
        nric_passport_no: 123456789,
        contact :'0123456789',
        address_1:'default',
        address_2:'default',
        postcode:12345,
        city:'default',
        state:'default',
        country:'default'
    }

    const [data, setData] = useState({
        email:'',
        password:'',
        role:'',
        category:''
    });

    const inputChange = input => e => {

        setData({
            ...data,
            [input]: e.target.value
        });

        if(input === "role"){
            setData({
                ...data,
                 [input]: e.target.value,
                'category' : ""
            });
        }
        if(input === "category"){
            var amount;

        if (e.target.value === "Professional Innovator") {
            amount = 350.00.toFixed(2);
        }
        else if (e.target.value === "Young Innovator") {
            amount = 290.00.toFixed(2);
        }
        else if (e.target.value === "Junior Innovator") {
            amount = 1.00.toFixed(2);
        }
        if (e.target.value === "Gold Package") {
            amount = 4000.00.toFixed(2);
        }
        else if (e.target.value === "Silver Package") {
            amount = 3000.00.toFixed(2);
        }
        else if (e.target.value === "Bronze Package") {
           amount = 2000.00.toFixed(2);
        }
        else if (e.target.value === "Exhibitor") {
            amount = 500.00.toFixed(2);
         }
            setData({
                ...data,
                 [input]: e.target.value,
                'amount' : amount
            });
        }
    };

    function displayCategory(){
        var section = []
        if(data.role === "Competitor"){
        section.push(
            <div className="form-group">
                <label htmlFor="category"><span>*</span>Subcategory </label>
                <select className="form-control" id="category" required
                    onChange={inputChange('category')} value={data.category} >
                        <option value="">Please select</option>
                        <option value="Professional Innovator">Professional Innovator</option>
                        <option value="Junior Innovator">Junior Innovator</option>
                        <option value="Young Innovator">Young Innovator</option>
                    </select> 
                </div>
        )}else if(data.role === "Sponsor"){
            section.push(
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Subcategory </label>
                    <select className="form-control" id="category" required
                        onChange={inputChange('category')} value={data.category} >
                            <option value="">Please select</option>
                            <option value="Gold Package">Gold Package</option>
                            <option value="Silver Package">Silver Package</option>
                            <option value="Bronze Package">Bronze Package</option>
                            <option value="Exhibitor">Exhibitor</option>
                        </select> 
                    </div>
            )
        }
        return section;
    }
    const handleForm=(e)=>{
        e.preventDefault();
        // perform all neccassary validations
        if (data.password === null || data.email === null || data.role === null) {
            alert("Form Incomplete!");  
        }


        else{
            ///////update to db /////////////
            axiosInstance.post("/iiidentex_uitm/api/accounts/signUp", data)
            .then(function(response) {
                if(data.role === "Competitor"){
                    compData["category"] = data.category;
                    compData["account_id"] = response.data._id
                    compData["amount"] = data.amount
                    axiosInstance.post("/iiidentex_uitm/api/competitors/create", compData)
                    .then(function(response){
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }).catch(function(error){
                        console.log(error)
                    })
                }
                else if(data.role === "Sponsor"){
                    sponsorData["category"] = data.category;
                    sponsorData["account_id"] = response.data._id
                    sponsorData["amount"] = data.amount
                    axiosInstance.post("/iiidentex_uitm/api/sponsors/create", sponsorData)
                    .then(function(response){
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }).catch(function(error){
                        console.log(error)
                    })
                }
                else if(data.role === "Visitor"){
                    visitorData["account_id"] = response.data._id
                    visitorData["amount"] = 30
                    axiosInstance.post("/iiidentex_uitm/api/visitors/create", visitorData)
                    .then(function(response){
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }).catch(function(error){
                        console.log(error)
                    })
                }
                else if (data.role === "Judge") {
                    judgeData["account_id"] = response.data._id
                    axiosInstance.post("/iiidentex_uitm/api/judge/create", judgeData)
                        .then(function (response) {
                            window.location.href = '/iiidentex_uitm/admin_dashboard';
                        }).catch(function (error) {
                            console.log(error)
                        })
                }
            }).catch(function(error) {
                console.log(error);
            })
            
        }
    }

/////////////////////////////////////////////////////////////

    return(
               <div className="edit-form-container">
                <form onSubmit={handleForm}>
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="email"><span>*</span>Email </label>
                    <input className="form-control" type='email'name='email' id="email"
                    placeholder='E-mail' required
                    onChange={inputChange('email')} value={data.email} 
                    />
                </div>
              
                <div className="form-group">
                    <label htmlFor="password"><span>*</span>Password (min 8 character)</label>
                    <input className="form-control" type='password'name='password' id="password"
                    placeholder='password' required
                      minLength="8"
                    onChange={inputChange('password')} value={data.password} />
                </div>
                <div className="form-group">
                <label htmlFor="role"><span>*</span>Category </label>
                <select className="form-control" id="role" required
                    onChange={inputChange('role')} value={data.role} >
                        <option value="">Please select</option>
                        <option value="Competitor">Competitor</option>
                        <option value="Sponsor">Sponsor</option>
                        <option value="Visitor">Visitor</option>
                        <option value="Judge">Judge</option>
                    </select> 
                </div>
                {displayCategory()}

        
                <br />

                <div className="row">
                    <div className="col-6">
                        <Link to ="/admin_dashboard">
                        <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                         <input className="btn btn-primary" type="submit" value="Create" />
                    </div>
                </div>
                </form>
            </div>

        )

}

export default CreateAccount;