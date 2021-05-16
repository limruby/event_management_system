import React,  {useState}  from 'react';
import CompetitionSection from '../../site/signUp/competitor-form';
import SponsorshipSection from '../../site/signUp/sponsor-form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './form.css';

const SectionChange = () =>  {

  const [value,setValue]=useState('Select');

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
  }

   
    if(value==='Competitor'){
      return ( 
        <CompetitionSection /> 
        );
    }
    else if(value==='Sponsor'){
      return ( 
        <SponsorshipSection /> 
        );
    }
    else{
      return (
        <div className="signUp-form-container">
          <h3>Select Category</h3>
          <DropdownButton
          alignRight
          title={value}
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
          className="category-dropdown"
          >
            <Dropdown.Item eventKey="Competitor">Competitor</Dropdown.Item>
            <Dropdown.Item eventKey="Sponsor">Sponsor</Dropdown.Item>
          </DropdownButton>
        </div>
        
        );
    }

}

export default SectionChange;
