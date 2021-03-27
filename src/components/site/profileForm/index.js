import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormChange from '././form_change';



function Profile() {


  const [value,setValue]=useState('Select');

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
  }


  return (
 	<>
    <div className="App container">
      <DropdownButton
      alignRight
      title={value}
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="Competitor">Competitor</Dropdown.Item>
              <Dropdown.Item eventKey="Sponsor">Sponsor</Dropdown.Item>
              <Dropdown.Item eventKey="null">null</Dropdown.Item>
      </DropdownButton>
    </div>
    <div className="form-container">
      <FormChange value={value} />   
    </div>
  </>
  );

}

export default Profile;