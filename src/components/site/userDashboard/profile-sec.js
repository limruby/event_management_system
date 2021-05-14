import React from 'react';


const Profiles = ({user,role}) =>  {

   
  if(role=='Competitor'){
    return ( 
          
      <div>
        <ul>
          <li>
            <p> Name: {user.name} </p>
          </li>
          <li>
            <p> Gender: {user.gender} </p>
          </li>
          <li>
            <p> Affiliation: {user.affiliation}</p>
          </li>
          <li>
            <p> {user.nric_passport_selection}: {user.nric_passport_no}</p>
          </li>
          <li>
            <p> Address: {user.address}</p>
          </li>
        </ul>
      </div>
     );
   }
  else if(role=='Sponsor'){


    return (       
      <div>
        <ul>
          <li>
            <p>Subscribed Sponsorship Package : {user.category}</p>
          </li>
          <li>
            <p> Company Name: {user.company_name} </p>
          </li>
          <li>
            <p> Company PIC Fulle Name: {user.PIC_name} </p>
          </li>
          <li>
            <p> Phone No: {user.phone}</p>
          </li>
          <li>
            <p> Company Address: {user.company_address}</p>
          </li>
          <li>
            <p> Compamy Logo: </p>
              <img src={user.company_logo } alt="" />
          </li>
          <li>
            <p> Company URL: <a href={user.company_website}>{user.company_website}</a></p>
          </li>
        </ul>
      </div>
    );
  }
   else{
    return (
      <div className="empty-container">
          <p>Error display</p>
      </div> 
      
      );
    }
 


}




export default Profiles;