import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

 
function SignUp()
{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] =useState("");



    const handleSubmit=(e)=>{
        e.preventDefault();

        const { password, confirmPassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");   //MAKE A DIV SOMEWHERE
        } else {
            // make API call
            const user = {
            email:email,
            password:password,
            username:null,
            nric_or_passport:null,
            nric_or_passport_number:null,
            affiliation:null,
            address:null,
            gender:null

            }
            //PUT IN ${API_URL}
            axios.post('http://localhost:5000/users/add', user)
            .then(res=>console.log(res.data));

            this.props.history.push("/profile/");
        }

    }


    return (
        <div className="main-container">
            <div className="form-container">
                    <h3>Register</h3>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email_id">E-mail <span>*</span></label>
                    <input className="form-input" type='email'name='email' id="email_id"
                    placeholder='E-mail' required="required"
                    data-validation-required-message="Please enter your e-mail."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                    />

                    <label htmlFor="password_id">Password <span>*</span></label>
                    <input className="form-input" type='password'name='password' id="passwordl_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <label htmlFor="confirmPassword_id">Confirm Password <span>*</span></label>
                    <input className="form-input" type='password'name='confirmPassword' id="confirmPassword_id"
                    placeholder='re-enter password' required="required"
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