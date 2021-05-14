import React, {useState} from 'react';
import FormChange from './form_change';
import Footer from './../footer';
import NavBar from './../navbar';
import './form.css';

function Profile() {


  return (
    <>
    <NavBar/>
    <div className="signup-main-container">
      <div className="signup-form-container">
      <FormChange value />     
      </div>
      </div>
  
      <Footer/>
  
    </>
  );

}

export default Profile;
