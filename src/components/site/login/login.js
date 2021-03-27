import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useLogin } from './auth.queries';
 
function Login()
{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const {mutate: login} = useLogin();

    const submit = (e) => {
        e.preventDefault();
        console.log("submiting")
        login({email, password}, {
            onSuccess: (data) => {
                // success action
                alert('success');
            },
            onError: (e) => {
                // error action
                alert(e); 
            },
        });
    }

  return (
        <div className="main-container">
            <div className="form-container">
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
                           <a href="">Not yet register? Sign up here.</a>
                        </p>
                    </Link>
                </form>
            </div>
        </div>  

  )
}

export default Login;