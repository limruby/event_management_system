import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import "../../../assets/css/agency.min.css";
//import NavBar from './../navbar';

import Footer from './../footer';
import axiosInstance from '../../../utils/axiosConfig.js';
 
function Login()
{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const submit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        
        axiosInstance.post('/api/accounts/login', data)
        .then(res=> {

            localStorage.clear();
            if(res.data.auth===true){
                localStorage.setItem('token', res.data.token); 
                localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
              console.log(res.data);  
                
            redirect();
            }
            else{
                alert("Email or password not match.")
            }
        });   
    }

    const redirect=()=>{
        window.location.href = '/user_dashboard';
    }

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
            </div>

        </div> 

    </>
  )
}

export default Login;