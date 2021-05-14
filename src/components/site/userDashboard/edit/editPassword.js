
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
      newPassword: '',
      confirmPassword:''

});

    const inputChange = input => e => {
        setState({
        	...user,
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
        if (user.password !== user.confirmPassword) {
            alert("Password don't match");  
        }
        else if (user.password=="" || user.confirmPassword==""){
            alert("Form not fill");
        }
        else{
        	///////update to db /////////////
        	console.log(user);
        }
    }

/////////////////////////////////////////////////////////////

	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h1 className="mb-5">Edit Password</h1>
                <span>(Min 8 characters)</span>
	            <div className="form-group">
	                <label htmlFor="password">New Password </label>
	                <input className="form-control" type='password'name='password' id="password"
	                placeholder='password' required
	                minLength="8"
	                onChange={inputChange('newPassword')} value={user.newPassword} />
	            </div>

	            <div className="form-group">
	                <label htmlFor="confirmPassword">Confirm New Password </label>
	                <input className="form-control" type='password'name='confirmPassword' id="confirmPassword"
	                placeholder='password' required
	                minLength="8"
	                onChange={inputChange('confirmPassword')} value={user.confirmPassword} />
	                
	            </div>
	    

                <br />

                <div className="col-4 btn-group">
                    <Link to="/user_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </div>
            </form>
         </>

		)

}

export default EditAccount;