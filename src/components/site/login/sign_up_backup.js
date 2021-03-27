import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

 
function SignUp()
{


  return (
        <div className="main-container">
            <div className="form-container">
                    <h3>Register</h3>
                <form>

                    <label htmlFor="email_id">E-mail <span>*</span></label>
                    <input className="form-input" type='email'name='email' id="email_id"
                    placeholder='E-mail' required="required"
                    data-validation-required-message="Please enter your e-mail."/>

                    <label htmlFor="password_id">Password <span>*</span></label>
                    <input className="form-input" type='password'name='password' id="passwordl_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."/>

                    <label htmlFor="confirmPassword_id">Confirm Password <span>*</span></label>
                    <input className="form-input" type='password'name='confirmPassword' id="confirmPassword_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."/>


                    <input className="submit-btn" type="submit" value="Submit" />

                    <Link to="/login">
                        <p>
                           <a href="">Already registered? Login here.</a>
                        </p>
                    </Link>
                </form>
            </div>
        </div>  

  )
}

export default SignUp;