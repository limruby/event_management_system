import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import "../../../assets/css/agency.min.css";
import axiosInstance from '../../../utils/axiosConfig.js';
 
function Login()
{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [role, setRole] =useState("");
    var user_id =""
    var url="";
    var cmpy_code = "AA04"
    var zone = "02"   
    var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"
    var product_ID = "149"

    var sha1 = require('sha1');
    var hash_value = "";  
    
    
    console.log(hash_value)

    const submit = (e) => {
        e.preventDefault();

        var data = {
            email: email,
            password: password,
            role:role
        }
        
        axiosInstance.post('/api/accounts/login', data)
        .then(res=> {

            
            localStorage.clear();
            if(res.data.auth===true){
                localStorage.setItem('token', res.data.token); 
                localStorage.setItem('user_id', JSON.stringify(res.data.result._id));

            if(res.data.result.role==="Admin"){
                    localStorage.setItem('role', res.data.result.role);  
                    localStorage.setItem('token', res.data.token);                     
                    window.location.href = '/admin_dashboard';
                }
            else if(res.data.result.role==="Competitor"){
                console.log(res.data.result.role)
                var comp_account_id = localStorage.getItem('user_id')
                axiosInstance.get('/api/competitors/read', {params:{account_id:comp_account_id}})
                .then(res=>{
                user_id = res.data.data.nric_passport_no
                url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + user_id
                hash_value = sha1(token + cmpy_code + zone + product_ID + user_id)
                console.log(hash_value)
                document.getElementById("uitm_payment_form").action = url;
                // document.getElementById("uitm_payment_form").submit();
                redirect();
            });
            }
            else if(res.data.result.role === "Sponsor"){
                console.log(res.data.result.role)
                var sponsor_account_id = localStorage.getItem('user_id')
                axiosInstance.get('/api/sponsors/read', {params:{account_id:sponsor_account_id}})
                .then(res=>{
                user_id = res.data.company_pic_ic
                url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + user_id
                redirect();
            });
            }
            }
            else{
                alert("Email or password not match.")
            }
        });   
    }

    const redirect=()=>{
        window.location.href = '/user_dashboard';
    }
    

    
    // makePayment(){
    //     console.log("PAY!")
    //     document.getElementById("uitm_payment_form").submit();
    // }
  return (
    <>

        <div className="login-main-container">
            <div className="login-form-container">
                    <h3>Login</h3>
                <form onSubmit={submit}>

                    <label htmlFor="email_id">E-mail <span>*</span></label>
                    <input className="form-input" type='email'name='email' id="email_id"
                    placeholder='E-mail' required="required"
                    data-validation-required-message="Please enter your e-mail."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password_id">Password <span>*</span></label>
                    <input className="form-input" type='password'name='password' id="passwordl_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>

                    
                    <input className="submit-btn" type="submit" value="Login" />

                    <Link to="/sign_up">
                        <p>
                           <a href="/sign_up">Not register yet? Sign up here.</a>
                        </p>
                    </Link>
                </form>
                <form className="list-group" id="uitm_payment_form" action={url} method="POST">
                <input type="text" name="hash_value" value={hash_value}hidden/>
               </form>
            </div>

        </div> 

    </>
  )
}

export default Login;