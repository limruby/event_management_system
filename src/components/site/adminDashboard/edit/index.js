import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../../assets/css/agency.min.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfile_C from './editCompetitor.js';
import EditProfile_S from './editSponsor.js';
import CreateProfile from './createAccount.js';


function FormNavigator() {

// Fetch user ID from URL
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);


	if(lastPath === 'edit_account'){
		return( 
		    <section className="section-container">
				<EditAccount />
				</section>

		)
	}
	else if(lastPath === 'edit_password'){
		return( 

			<section className="section-container">
				<EditPassword/>
			</section>

		)
	}
	else if (lastPath === 'edit_profile_sponsor'){
		return( 
		<div className="form-main-container">
			<EditProfile_S/>
		</div>
		)
	}
	else if (lastPath === 'edit_profile_competitor'){
		return( 
		<div className="form-main-container">
			<EditProfile_C/>
		</div>
		)			
	}
	else if (lastPath === 'create_profile'){		
		return( 

			<section className="section-container">
				<CreateProfile/>
			</section>

		)			
	}
	else{
		return(
		<></>
		)
	}
}
export default FormNavigator;