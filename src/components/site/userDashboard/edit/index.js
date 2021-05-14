import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import './form.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfile_C from './editProfile-Competitor.js';
import EditProfile_S from './editProfile-Sponsor.js';
import EditResearchTeam from './editResearchTeam.js';
import EditPromoContent from './editPromoContent.js';
import EditCompetitionMaterial from './editCompetitionMaterial.js';
import EditAbstract from './editAbstract.js';
import EditBookChapter from './editBookChapter.js';




function FormNavigator() {


////////////////////get login user role /////////////////////
  const [user, setUser]=useState([]);
  const [account, setAccount]=useState([]);
  const account_id = localStorage.getItem('user_id');

  useEffect(() => {
      axiosInstance .get("/competitors/read", {params:{account_id:account_id}})
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });

      axiosInstance .get("/accounts/read", {params:{account_id:account_id}})
        .then(function(response) {
          setAccount(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

    }, []);


//////////////////////////////////////////////////////////////////////////////////
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1)
	

	if(lastPath =='edit_account'){
		return( 
		    <div className="form-main-container">
				<EditAccount data={account} setData={setAccount}/>
			</div>
		)
	}
	else if(lastPath =='edit_password'){
		return( 
		    <div className="form-main-container">
				<EditPassword/>
			</div>
		)
	}
	else if (account.role=='Sponsor'){
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
						<EditProfile_S/>
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
						<EditPromoContent/>
					</div>
				)
			break;

			default:
				
		}
	}
	else if (account.role=='Competitor'){
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
						<EditProfile_C/>
					</div>
				)
			break;

			case 'edit_researchTeam':
				return( 
				    <div className="form-main-container">
						<EditResearchTeam/>
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
						<EditCompetitionMaterial/>
					</div>
				)
			break;

			case 'edit_abstract':
				return( 
				    <div className="form-main-container">
						<EditAbstract/>
					</div>
				)
			break;

			case 'edit_book_chapter':
				return( 
				    <div className="form-main-container">
						<EditBookChapter/>
					</div>
				)
			break;

			default:
				
		}
	}









}


export default FormNavigator;