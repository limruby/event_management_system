import React from 'react';
import parse from 'html-react-parser';
import './preview-sec.css';

import PdfDownloader from '../../PdfDownloader'; 

const PdfPreview = ({user, account}) =>  {

  function displayTitle(){

    if(user.abstract!==undefined){
    var section = [];
    for (var i=0; i<user.abstract.length; i++){
        section.push(
            <div id="abstract_title">
            <h1>
                <b>{user.abstract[0].title}</b>
            </h1>
            </div>
        );
    }

    return section;
  }
  }
  function displayAuthor(){
    var section = [];
    var string = user.name;
    if(user.members!==undefined){
        user.members.map(function(member){
            string += ', '+ member.name+' ' ;
         });   
    }
    section.push(
        <div id="author">
        <p>
            {string}
        </p>
        </div>
    );
    return section;
}
function displayAffiliation(){
    var section = [];
    var string = user.affiliation;
    if(user.members!==undefined){
        user.members.map(function(member){
            string += ', '+ member.affiliation+' ' ;
         });   
    }
    section.push(
        <div id="aff">
        <p>
            <span>Affiliation</span><br></br>{string}
        </p>
        </div>
    );
    return section;
}

  function displayAbstractContent(){

    if(user.abstract!==undefined){
    var section = [];

    for (var i=0; i<user.abstract.length; i++){
        section.push(
            <div id="body_content">
                <p id="subtitle">Abstract</p><br></br>
            <p> 
                {user.abstract[0].content}
            </p>
            </div>
        );
    }

    return section;
  }
  }
  function displayKeywords(){
    var section = [];
    var string ='';
    if(user.abstract===undefined){}
    else if(user.abstract[0]===undefined){}
    else if(user.abstract[0]['keywords']===undefined){}
    else{
        user.abstract[0]['keywords'].map(function(word){
          string += word+' ' ;
       });
     }
    section.push(
        <div id="keywords">
        <p>
            <strong>Key words:</strong> {string}
        </p>
        </div>
    );
    return section;
}
function displayIntroduction(){
    var section = [];

  if(user.bookChapter!=null){
    for (var i=0; i<user.bookChapter.length; i++){
      section.push(
        <div id="body_content">
          <p>
            <b>Introduction</b><br></br>{user.bookChapter[0].introduction}
          </p>   
          </div>           
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
        <div id="body_content">
      <p>
      <b>Content</b><br></br>{parse(user.bookChapter[0].content)}
      </p>   
      </div>
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
        <div id="body_content">
          <p>
              <b>Conclusion</b><br></br> {user.bookChapter[0].conclusion}
          </p>
          </div>
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
            <div id="body_content">
                <p id="subtitle">References</p><br></br>
                <ul>
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
          <div className="page" id="downloadPdf">
          <div className="preview-section">
              {displayTitle()}
              {displayAuthor()}
              {displayAffiliation()}
              {displayAbstractContent()}
              {displayKeywords()}
              {displayIntroduction()}
              {displayContent()}
              {displayConclusion()}
              {displayReference()}
              </div>
              
          </div>
           <PdfDownloader rootElementId="downloadPdf" downloadFileName="sample"/>
      </div>
  );
 
}

export default PdfPreview;