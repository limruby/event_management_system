import React from 'react';


////////////////////////////get logined user promotional content or competition material///////////////////////////////////


  const result = {
    poster:{
      name: "competition.jpg",
      path: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    achievements: [
      {
        name: 'first sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },
      {
        name: 'second sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },{
        name: 'third sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },
    ],

    publications: [
      {
        name: 'first sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },
      {
        name: 'second sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },{
        name: 'third sample',
        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
      },
    ],
    grants: [
        {
          name: 'first sample'          
        },
        {
          name: 'second sample'
        }
      ],
    video: {
      name: "Video Title",
      path: "https://www.w3schools.com/images/w3schools_green.jpg",
    }

  }

//////////////////////////////////////////////////////////////////////////////////////////////////


const PromoContent = ({user}) =>  {

  return (       
    <div>
    <h5>Poster</h5>
    <p>{result.poster.name}</p>

    <h5>Achievements</h5>    
    <ul>
      {result.achievements.map((achievement)=>(

        <li>
          Name: {achievement.name}
        </li>

        ))}
    </ul>

    <h5>Publications</h5>    
    <ul>
      {result.publications.map((publication)=>(

        <li>
          Name: {publication.name}
        </li>

        ))}
    </ul>

    <h5>Grants</h5>    
    <ul>
      {result.grants.map((grant)=>(

        <li>
          Name: {grant.name}
        </li>

        ))}
    </ul>

    <h5>Video</h5>
    <a href="{result.video.name}">{result.video.name}</a>
    
    </div>
  );
 
}




export default PromoContent;