const Profiles = ({user,role}) =>  {

function display(){
var section =[];
if(user.company_logo){

    for (var i=0; i<user.company_logo.length; i++){
	const imageBuffer = Buffer.from(user.company_logo[0].source.data); 
        section.push(
            <li>
			<img src={imageBuffer} alt={user.company_logo[0].name}/>
           
            </li>
        );
    }
	}else{
	console.log("no data");
	
	}
    return section;

  }
   
  if(role === 'Competitor'){
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
  else if(role === 'Sponsor'){


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
            <p> Person In Charge's Full Name: {user.company_pic_name} </p>
          </li>
          <li>
            <p> Contact Number: {user.company_contact}</p>
          </li>
          <li>
            <p> Company Address: {user.company_address}</p>
          </li>
          <li>
            <p> Company Logo: </p>
              {display()}
          </li>
          <li>
            <p> Company Website URL: <a href={user.company_website}>{user.company_website}</a></p>
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