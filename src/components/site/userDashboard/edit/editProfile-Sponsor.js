import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';


function EditProfile({ data, setData }) {

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
      data.company_name === "" ||
      data.company_pic_name === "" ||
      data.company_contact === null ||
      data.address_1 === "" ||
      data.address_2 === "" ||
      data.postcode === null ||
      data.city === "" ||
      data.state === "" ||
      data.company_website === "" ||
      data.company_logo === "" ||
      data.company_pic_ic === null
    ) {
      alert("Form not fill");
    }
    else {
      ///////update to db /////////////
      var postData = {
        _id: data._id,
        company_name: data.company_name,
        company_pic_name: data.company_pic_name,
        company_pic_ic: data.company_pic_ic,
        company_contact: data.company_contact,
        address_1: data.address_1,
        address_2: data.address_2,
        postcode: data.postcode,
        city: data.city,
        state: data.state,
        company_website: data.company_website,
        company_logo: data.company_logo
      }

      axiosInstance.post("/api/sponsors/update", postData)
        .then(function (response) {
          window.location.href = '/user_dashboard';
        }).catch(function (error) {
          console.log(error);
        })
    }
  }
  const uploadLogoHandler = (element, index) => e => {
    if (element == 'company_logo') {
      let selectedFile = e.target.files;
      let file = null;
      let fileName = "";
      //Check File is not Empty
      if (selectedFile.length > 0) {
        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function (fileLoadedEvent) {
          file = fileLoadedEvent.target.result;
          // Print data in console
          //data.company_logo[0]['name'] = fileName;
          //data.company_logo[0]['source'] = fileReader.result;
          data.company_logo = {
            'name': fileName,
            'source': fileReader.result
          }
          //data.company_logo.push({'name':fileName,'source':fileReader.result})
        };
        // Convert data to base64
        var baseFile = fileReader.readAsDataURL(fileToLoad);
      }
    }
  }


  var obj = [];
  const deleteFile = (element, index) => e => {
    if (element === 'company_logo') {
      let obj = data.company_logo;
      obj.splice(index, 1);
    }

    setData({
      ...data,
    });

  }
  ///////Display company logo//////
  function displayLogo() {
    var section = [];
    if (data.company_logo == null || data.company_logo[0] == null) {
      section.push(
        <div className="form-group">
          <input type="file" onChange={uploadLogoHandler('company_logo', 0)} />
        </div>
      );
    }
    else {

      const imageBuffer = Buffer.from(data.company_logo[0].source.data);

      section.push(
        <div>
          <img src={imageBuffer} alt={data.company_logo[0].name} width="150" height="150" responsive />

          <p>
            {data.company_logo[0].name}
            <button className="deleteBtn " type="button" onClick={deleteFile('company_logo', 0)}><FaTrashAlt /></button>
          </p>

        </div>
      )
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
            <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
            <input type="text" className="form-control" name="company_name" id="company_name"
              placeholder='Company Name' required
              onChange={inputChange('company_name')} value={data.company_name} />
          </div>
          <div className="form-group">
            <label htmlFor="company_pic_name"><span>*</span>Full Name of Person In Charge (PIC)</label>
            <input className="form-control" type='text' name='company_pic_name' id="company_pic_name"
              placeholder='Full Name of PIC' required
              onChange={inputChange('company_pic_name')} value={data.company_pic_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company_pic_ic"><span>*</span>IC of Person In Charge (PIC)</label>
            <input className="form-control" type='text' name='company_pic_ic' id="company_pic_ic"
              placeholder='Full Name of PIC' required pattern="[0-9]{12}"
              onChange={inputChange('company_pic_ic')} value={data.company_pic_ic}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company_contact"><span>*</span>Contact Number</label>
            <input className="form-control" type='text' name='company_contact' id="company_contact"
              placeholder='Contact Number' required
              onChange={inputChange('company_contact')} value={data.company_contact}
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

          <div className="form-group">
            <label htmlFor="company_website"><span>*</span>Company Website</label>
            <input className="form-control" type='text' name='company_website' id="company_website"
              placeholder='URL' required
              onChange={inputChange('company_website')} value={data.company_website}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company_logo"><span>*</span>Company Logo With Transparent Background</label><br />
            {displayLogo()}
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
