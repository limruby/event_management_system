
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
    
    name: 'testuser111',
    affiliation:'tester',
    ic_passport_selection:'NRIC',
    ic_passport_number: '1111111111',
    address: 'no 111, jln 111.',
    gender: 'MALE',

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
        if (user.name ==""||user.affiliation==""||user.ic_passport_selection==""||user.ic_passport_number==""
            ||user.address==""||user.gender==""){
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
                <h1 className="mb-5">Edit Profile Info</h1>

                <div className="form-group">
                    <label htmlFor="name"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name" id="name"
                    placeholder='Full Name (as per IC / Passport)' required                    
                    onChange={inputChange('name')} value={user.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="affiliation"><span>*</span>Affiliation</label>
                    <input className="form-control" type='text'name='affiliation' id="affiliation"
                    placeholder='Affiliation' required
                    onChange={inputChange('affiliation')} value={user.affiliation} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection" required
                    onChange={inputChange('ic_passport_selection')} value={user.ic_passport_selection} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number' id="ic_passport_number"
                    placeholder='NRIC / Passport Number' required
                    onChange={inputChange('ic_passport_number')} value={user.ic_passport_number} />
                </div>
                <div className="form-group">
                    <label htmlFor="address"><span>*</span>Address</label>
                    <textarea className="form-control" id="address" cols="30" rows="7"
                    onChange={inputChange('address')} value={user.address} 
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="gender_id"><span>*</span>Gender</label>
                    <select className="form-control" id="gender_id" required
                    onChange={inputChange('gender')} value={user.gender} >
                        <option value="">Please select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
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
