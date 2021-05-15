import React, {useState, useEffect} from 'react';


const PromoContent = ({user}) =>  {

 
console.log(user);

function displayPoster(){

  // if(user.poster!=undefined){  //after mount
  //     if(user.poster.length){
  //       return (<p>{user.poster[0].name}</p>)
  //     }
  //     else{
  //       return (<p>empty</p>)
  //     }
  // }  

  if(user.poster){
    var section = [];

    for (var i=0; i<user.poster.length; i++){
        section.push(
            <li>
                Name: {user.poster.name}
            </li>
        );
    }
    return section;

  }

}


function displayAchievement(){
  if(user.achievements){
    var section = [];

    for (var i=0; i<user.achievements.length; i++){
        section.push(
            <li>
                Name: {user.achievements.name}
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