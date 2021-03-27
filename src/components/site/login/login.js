import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

 
function Login()
{


  return (
        <div className="main-container">
            <div className="form-container">
                    <h3>Login</h3>
                <form>

                    <label htmlFor="email_id">E-mail <span>*</span></label>
                    <input className="form-input" type='email'name='email' id="email_id"
                    placeholder='E-mail' required="required"
                    data-validation-required-message="Please enter your e-mail."/>

                    <label htmlFor="password_id">Password <span>*</span></label>
                    <input className="form-input" type='password'name='password' id="passwordl_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."/>

                
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