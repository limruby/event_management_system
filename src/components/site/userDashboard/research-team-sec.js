import React from 'react';
import PdfDownloader from './../../PdfDownloader';

const result = {
    members:[
        { 
          name: 'John Doe',
          affiliation: 'competitor',
          email: 'asd@gmail.com'
        },
        { 
          name: 'Mary Jane',
          affiliation: 'competitor',
          email: 'ert@gmail.com'
        }
    ]
}


// pdf output based on div id=pdf...


const Content = () =>  {

  return (       
    <div>
        <ul>
          {result.members.map((member)=>(

            <li>
             Name: {member.name}  <br/>
             Affiliation: {member.affiliation} <br/>
             Email: {member.email} <br/><br/>
            </li>
            
            ))}
        </ul>
      </div>  
  );
 
}




export default Content;