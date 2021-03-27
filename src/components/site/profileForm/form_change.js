import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CompetitionSection from '../../site/profileForm/competitor_form';
import SponsorshipSection from '../../site/profileForm/sponsor_form';


const SectionChange = ({value}) =>  {

   
    if(value=='Competitor'){
      return ( 
        <CompetitionSection /> 
        );
    }
    else if(value=='Sponsor'){
      return ( 
        <SponsorshipSection /> 
        );
    }
    else{
      return ( 
        <p>Empty div</p>
        );
    }
 


}

export default SectionChange;