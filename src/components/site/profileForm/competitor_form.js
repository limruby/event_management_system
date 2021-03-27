import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';

function CompetitionSection()
{

  return (
  	<div>
		<p>This is competitor</p>
		<form>
			<div className="row">
				<label htmlFor="name_id"><span>*</span>Full Name (as per IC / Passport)
				</label>
	            <input className="form-input" type='text'name='text' id="name_id" 
	            placeholder='Full Name (as per IC / Passport)E-mail' required="required"
	            data-validation-required-message="Please enter your name."/>
            </div>
            <div className="row">
	            <label htmlFor="email_id"><span>*</span>E-mail </label>
	            <input className="form-input" type='email'name='email' id="email_id"
	            placeholder='E-mail' required="required"
	            data-validation-required-message="Please enter your e-mail."/>
            </div>
            <div className="row">
	            <label htmlFor="affiliation_id"><span>*</span>Affiliation</label>
	            <input className="form-input" type='text'name='text' id="text"
	            placeholder='Affiliation' required="required"
	            data-validation-required-message="Please enter your affiliation."/>
	        </div>
	        <div className="row">
	            <label htmlFor="ic_passport_selection_id"><span>*</span>NRIC / Passport Number</label>
	            <select className="form-input" id="ic_passport_selection_id" required='required'>
	            	<option value="">Please select</option>
	            	<option value="NRIC">NRIC</option>
	            	<option value="PASSPORT NUMBER">Passport Number</option>
	            </select>
	            <input className="form-input" type='text'name='text' id="text"
	            placeholder='NRIC / Passport Number' required="required"
	            data-validation-required-message="Please enter your NRIC or passport number."/>
        	</div>
        	<div className="row">
	            <label htmlFor="address_id"><span>*</span>Address
				</label>
				<textarea className="form-input" id="address_id" cols="30" rows="10"></textarea>
            </div>
            <div className="row">
				<label htmlFor="gender_id"><span>*</span>Gender</label>
	            <select className="form-input" id="gender_id" required='required'>
	            	<option value="">Please select</option>
	            	<option value="MALE">Male</option>
	            	<option value="FEMALE">Female</option>
	            </select>
            </div>

            <input className="submit-btn" type="submit" value="Next" />

     
        </form>
     </div>

  )
}

export default CompetitionSection;