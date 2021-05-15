import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
 
 
function EditProfile({data, setData}) {
 
/////////////////////get login user (REPLACE THIS) ////////////////
const inputChange = input => e => {
    setData({
        ...data,
        [input]: e.target.value
    });
};
 
    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
          if (data.company_name === ""||data.company_pic_name ===""||data.company_contact ===""||data.company_address===""
            ||data.company_website===""|| data.company_logo===""){
            alert("Form not fill");
        }
        else{
             ///////update to db /////////////
             axiosInstance.post("/sponsors/update", data)
             .then(function(response) {
               window.location.href = '/user_dashboard';
             }).catch(function(error) {
               console.log(error);
             })
        }
    }
    const uploadLogoHandler = (element, index) => e => {
	console.log("asd");
        if(element == 'company_logo'){
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
                fileReader.onload = function(fileLoadedEvent) {
                    file = fileLoadedEvent.target.result;
                    // Print data in console
                  //data.company_logo[0]['name'] = fileName;
                  //data.company_logo[0]['source'] = fileReader.result;
				data.company_logo={
				'name':fileName,
				'source':fileReader.result
				}
                  //data.company_logo.push({'name':fileName,'source':fileReader.result})
                };
            // Convert data to base64
                 var baseFile = fileReader.readAsDataURL(fileToLoad);
            }
        }
    }
/////////////////////////////////////////////////////////////
    return(
        <>
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        <div className="form-container">
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
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
                    />
                </div>
 
                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={data.company_address} 
                    ></textarea>
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
                    <input type="file" onChange={uploadLogoHandler('company_logo', 0)} />
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
 
export default EditProfile;
 