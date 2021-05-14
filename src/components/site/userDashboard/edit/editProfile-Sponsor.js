
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
    
      company_name:'UM',
      PIC_name: 'PICUser',
      phone: '011111111111',
      company_address: 'UM, Jln Uni, 560000',
      company_website: 'https://www.youtube.com/',
      company_logo:'https://www.w3schools.com/images/w3schools_green.jpg',   

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
          if (user.company_name ==""||user.PIC_name==""||user.phone==""||user.company_address==""
            ||user.company_website==""|| user.company_logo==""){
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
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
                    onChange={inputChange('company_name')} value={user.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="PIC_name"><span>*</span>Company Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='PIC_name' id="PIC_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('PIC_name')} value={user.PIC_name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone"><span>*</span>Phone Number</label>
                    <input className="form-control" type='text' name='phone' id="phone"
                    placeholder='Phone Number' required
                    onChange={inputChange('phone')} value={user.phone} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={user.company_address} 
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Website</label>
                    <input className="form-control" type='text' name='company_website' id="company_website"
                    placeholder='URL' required
                    onChange={inputChange('company_website')} value={user.company_website} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Logo</label><br />
                    <img src={user.company_logo } alt="" />
                    <input type="file" onChange={inputChange('company_logo')} />
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
