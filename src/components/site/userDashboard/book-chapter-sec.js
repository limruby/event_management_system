import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser';

const Content = ({user}) =>  {

  function displayIntroduction(){
      var section = [];

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Introduction</b>: {user.bookChapter[0].introduction}
            </p>              
        );
    }
    }
    return section;
    
  }
  function displayContent(){
      var section = [];
     

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Content</b>: {parse(user.bookChapter[0].content)}
            </p>
        );
    }
    }
    return section;
    
  }


  function displayConclusion(){
      var section = [];

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Conclusion</b>: {user.bookChapter[0].conclusion}
            </p>
        );
    }
    }
    return section;
    
  }


function displayReference(){
    var section = [];
    if(user.bookChapter!=null){

    if(user.bookChapter[0]!=null){
      if(user.bookChapter[0]['references']!=undefined){
        section.push(
            <div>
                <ul> <b>References</b>:
                  {user.bookChapter[0]['references'].map((reference)=>(
                    <li>
                     {reference}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
  }
 }
    return section;
  }

  return (       
    <div>
      <div>

      </div>  
      
    </div>
  );
 
}


export default Content;