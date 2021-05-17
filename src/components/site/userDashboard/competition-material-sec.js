import React, {useState, useEffect} from 'react';


const CompetitionMaterial = ({user}) =>  {

 
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
               {user.poster[i].name}
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
              {user.achievements[i].name}
            </li>
        );
    }
    return section;

  }
}

function displayPublication(){
  if(user.publications){
    var section = [];

    for (var i=0; i<user.publications.length; i++){
        section.push(
            <li>
               {user.publications[i].name}
            </li>
        );
    }
    return section;

  }
}

function displayGrant(){
  if(user.grants){
    var section = [];

    for (var i=0; i<user.grants.length; i++){
        section.push(
            <li>
               {user.grants[i].name}
            </li>
        );
    }
    return section;

  }
}

function displayVideo(){
  if(user.video){
    var section = [];

    for (var i=0; i<user.video.length; i++){
        section.push(
            <li>
               <a href={user.video[0].source}>{user.video[0].name}</a>
            </li>
        );
    }
    return section;

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


export default CompetitionMaterial;