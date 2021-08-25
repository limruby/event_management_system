import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';


function EditProfile({ data, setData }) {
  localStorage.setItem("activeKeys", "Account-Profiles");
  /////////////////////get login user (REPLACE THIS) ////////////////
  const inputChange = input => e => {
    setData({
      ...data,
      [input]: e.target.value
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    // perform all neccassary validations
    if (
      data.name === "" ||
      data.contact === null ||
      data.address_1 === "" ||
      data.address_2 === "" ||
      data.postcode === null ||
      data.city === "" ||
      data.state === "" ||
      data.country === "" ||
      data.nric_passport_selection === "" ||
      data.nric_passport_no === ""
    ) {
      alert("Form not fill");
    }
    else {
      ///////update to db /////////////
      var postData = {
        _id: data._id,
        name: data.name,
        contact: data.contact,
        nric_passport_selection: data.nric_passport_selection,
        nric_passport_no: data.nric_passport_no,
        address_1: data.address_1,
        address_2: data.address_2,
        postcode: data.postcode,
        city: data.city,
        state: data.state       
      }

      axiosInstance.post("/iiidentex_uitm/api/visitors/update", postData)
        .then(function (response) {
          window.location.href = '/iiidentex_uitm/user_dashboard';
        }).catch(function (error) {
          console.log(error);
        })
    }
  }
  function displayInput(){
    var section=[];
    if(data.nric_passport_selection==="NRIC"){
        section.push( <input
                    className="form-control"
                    type='text'
                    name='nric_passport_no'
                    id="nric_passport_no"
                    placeholder='NRIC (Without dash) '
                    required
                    pattern="[0-9]{12}"
                    onChange={
                        inputChange('nric_passport_no')}
                    value={data.nric_passport_no} />)
    }
    else if(data.nric_passport_selection==="PASSPORT NUMBER"){
        section.push( <input
                    className="form-control"
                    type='text'
                    name='nric_passport_no'
                    id="nric_passport_no"
                    placeholder='Passport Number '
                    required
                    onChange={
                        inputChange('nric_passport_no')}
                    value={data.nric_passport_no} />)
    }
    return section;
}
  /////////////////////////////////////////////////////////////
  return (
    <>
      <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
      <div className="edit-form-container" style={{marginTop:"5%", marginBottom:"5%"}}>
          <h1 className="mb-5">Edit Profile Info</h1>
          <div className="form-group">
                        <label htmlFor="name"><span>*</span> Full Name (as per IC) </label>
                        <input type="text" className="form-control" name="name" id="name"
                            placeholder='Full Name (as per IC / Passport)' required
                            onChange={inputChange('name')} value={data.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ic_passport_selection"><span>NRIC/ Passport Selection: </span>{data.nric_passport_selection}</label>
                        <br />
                        {displayInput()}     
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact"><span>*</span>Contact Number</label>
                        <input className="form-control" type='text' name='contact' id="contact"
                            placeholder='Phone Number (Without dash)' required pattern='[0-9]{10,20}'
                            onChange={inputChange('contact')} value={data.contact}
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
            <input className="form-control" type="number" id="postcode"
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
