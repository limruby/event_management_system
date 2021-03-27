import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

 
function SignUp()
{

  const [username, setUsername] =useState("");
  const [age, setAge] =useState("");


  const handleSubmit=(event)=>{
    event.preventDefault();

     const user = {
           username: username,
           age:age
       }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
    .then(res=>console.log(res.data));

  }
  


  return (
        <div className="main-container">
            <div className="form-container">
                    <h3>Test sign up</h3>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="username_id">Username<span>*</span></label>
                    <input className="form-input" type='text'name='username' id="username_id"
                    placeholder='Your name' required="required"
                    data-validation-required-message="Please enter your name."

                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}


                    />

                   <label htmlFor="age_id">Username<span>*</span></label>
                    <input className="form-input" type='number'name='age' id="age_id"
                    placeholder='Your age' required="required"
                    data-validation-required-message="Please enter your age."

                    value={age}
                    onChange={(e)=>setAge(e.target.value)}

                    />

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