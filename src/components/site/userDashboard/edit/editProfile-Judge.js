import React from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditProfile({data, setData}) {
    localStorage.setItem("activeKeys", "Account-Profiles");
const inputChange = input => e => {
    setData({
        ...data,
        [input]: e.target.value
    });
};

const handleForm=(e)=>{
    console.log(data);
    e.preventDefault();
    // perform all neccassary validations
    if (data.name === "" ||
        data.affiliation === "" ||
        data.title === "" ||
        data.email === "" ||
        data.country === "" ||
        data.address_1 === "" ||
        data.address_2 === "" ||
        data.postcode === "" ||
        data.city === "" ||
        data.state === "" ||
        data.phone_no === ""){
        alert("Form not fill");
    }
    else{
            ///////update to db /////////////
            var postData = {
                _id : data._id,
                name : data.name,
                affiliation : data.affiliation,
                title:data.title,
                email:data.email,
                country:data.country,
                address_1: data.address_1,
                address_2: data.address_2,
                postcode: data.postcode,
                city: data.city,
                state: data.state,
                phone_no: data.phone_no
            }

            axiosInstance.post("/api/judge/update", postData)
            .then(function(response) {
                 window.location.href = '/user_dashboard';
            }).catch(function(error) {
                console.log(error);
            })
        }
    }
/////////////////////////////////////////////////////////////
    return(
        <>

        <form onSubmit={handleForm}>
        <div className="edit-form-container" style={{marginTop:"5%", marginBottom:"5%"}}>

                <h1 className="mb-5">Edit Profile Info</h1>
                <div className="form-group">
                        <label htmlFor="title"><span>*</span>Title</label>
                        <select className="form-control" id="title" required
                            onChange={inputChange('title')} value={data.title} >
                            <option value="">Please select</option>
                            <option value="Mr">Mr</option>
                            <option value="Mdm">Mdm</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                            <option value="Assoc Prof">Assoc Prof</option>
                            <option value="Prof">Prof</option>
                            <option value="Datin">Datin</option>
                            <option value="Datuk">Datuk</option>
                        </select>
                    </div>
                <div className="form-group">
                        <label htmlFor="name"><span>*</span>Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                            placeholder='Name' required
                            onChange={inputChange('name')} value={data.name} />
                    </div>
              
                <div className="form-group">
                        <label htmlFor="phone_no"><span>*</span>Contact Number</label>
                        <input type="text" className="form-control" name="phone_no" id="phone_no"
                            placeholder='Contact Number' required
                            onChange={inputChange('phone_no')} value={data.phone_no} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"><span>*</span>Email</label>
                        <input type="text" className="form-control" name="email" id="email"
                            placeholder='Email' required
                            onChange={inputChange('email')} value={data.email} />
                    </div>
                <div className="form-group">
                    <label htmlFor="affiliation"><span>*</span>Affiliation</label>
                    <input className="form-control" type='text'name='affiliation' id="affiliation"
                    placeholder='Affiliation' required
                    onChange={inputChange('affiliation')} value={data.affiliation} 
                    />
                </div>
                
                    <div className="form-group">
                        <label htmlFor="address_1"><span>*</span>Address Line 1</label>
                        <input className="form-control" type="text" id="address"
                            onChange={inputChange('address_1')} value={data.address_1} placeholder="address line 1" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address_2"><span>*</span>Address Line 2</label>
                        <input className="form-control" type="text" id="address_2"
                            onChange={inputChange('address_2')} value={data.address_2} placeholder="address line 2" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postcode"><span>*</span>Postcode</label>
                        <input className="form-control" type="text" id="postcode"
                            onChange={inputChange('postcode')} value={data.postcode} placeholder="postcode" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city"><span>*</span>City</label>
                        <input className="form-control" type="text" id="city"
                            onChange={inputChange('city')} value={data.city} placeholder="city" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state"><span>*</span>State</label>
                        <select className="form-control" id="state" required
                            onChange={inputChange('state')} value={data.state} >
                            <option value="">Please select</option>
                            <option value="Johor">Johor</option>
                            <option value="Kedah">Kedah</option>
                            <option value="Kelantan">Kelantan</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Labuan">Labuan</option>
                            <option value="Melaka">Melaka</option>
                            <option value="Negeri Sembilan">Negeri Sembilan</option>
                            <option value="Pahang">Pahang</option>
                            <option value="Penang">Penang</option>
                            <option value="Perak">Perak</option>
                            <option value="Perlis">Perlis</option>
                            <option value="Putrajaya">Putrajaya</option>
                            <option value="Sabah">Sabah</option>
                            <option value="Sarawak">Sarawak</option>
                            <option value="Selangor">Selangor</option>
                            <option value="Terengganu">Terengganu</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country"><span>*</span>Country</label>
                        <input className="form-control" type="text" id="country"
                            onChange={inputChange('country')} value={data.country} placeholder="country" required
                        />
                    </div>
                    

                <br />

                <div className="btn-group">
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

export default EditProfile;