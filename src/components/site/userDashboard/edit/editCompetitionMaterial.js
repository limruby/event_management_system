import React from 'react';


const PromoContent = ({user}) =>  {


function displayPoster(){
  if(user.poster){
    return (<p>{user.poster.name}</p>)
  }  
}

function displayAchievement(){
  if(user.achievement){
    var section = [];

    for (var i=0; i<user.achievement.length; i++){
        section.push(
            <li>
                Name: {user.achievement.name}
            </li>
        );
    }
    return section;

  }
}

function displayPublication(){
  if(user.publication){
    var section = [];

    for (var i=0; i<user.publication.length; i++){
        section.push(
            <li>
                Name: {user.publication.name}
            </li>
        );
    }
    return section;

  }
}

function displayGrant(){
  if(user.grant){
    var section = [];

    for (var i=0; i<user.grant.length; i++){
        section.push(
            <li>
                Name: {user.grant.name}
            </li>
        );
    }
    return section;

  }
}

function displayVideo(){
  if(user.poster){
    return (<a href="{user.video.name}">{user.video.name}</a>)
  }  
}



  return (       
    <div>
    <h5>Poster</h5>
    {displayPoster()}
    <hr/>
    <h5>Achievements</h5>    
    <ul>
      {displayAchievement()}
    </ul>
    <hr/>
    <h5>Publications</h5>    
    <ul>
      {displayPublication()}
    </ul>
    <hr/>
    <h5>Grants</h5>    
    <ul>
      {displayGrant()}
    </ul>
    <hr/>
    <h5>Video</h5>
     {displayVideo()}
    
    </div>
  );
 
}




export default PromoContent;