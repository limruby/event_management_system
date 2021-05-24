import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import axiosInstance from '../../../utils/axiosConfig.js';
import pdfFonts from "./../../../assets/vfs_fonts_times";
import parse from 'html-react-parser';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 

const Content = ({user, account}) =>  {

  function appendTitle(){
    if(user.abstract[0]===undefined){return ''}
    else if(user.abstract[0].title===undefined){return ''}
    else {return { text: user.abstract[0].title, style: ['header',  'bold'] }}
  }
  
  function appendContent(){
    if(user.abstract[0]===undefined){return ''}
    else if(user.abstract[0].content===undefined){return ''}
    else {return user.abstract[0].content}
  }
  

  function appendAuthors(){
    var string =user.name;

    if(user.members[0]!==undefined){   
      user.members.map(function(member){
          string += ', '+ member.name+' ' ;
       });
    }
    return  { text: string, style:'header'}
  }
  
  function appendAffiliations(){
    var string =user.affiliation;

    if(user.members[0]!==undefined){  
      user.members.map(function(member){
          string += ', '+ member.affiliation+' ' ;
       });
    }
    return { text: string, style: 'header2' }
  }

  function appendKeywords(){
    var string ='';

    if(user.abstract[0]===undefined){}
    else if(user.abstract[0]['keywords']===undefined){}
    else{
        user.abstract[0]['keywords'].map(function(word){
          string += word+' ' ;
       });
     }

    return {text:string, style:'italic'}
  }

  function appendIntro(){
    if(user.bookChapter[0]===undefined){
      {return ''}
    }
    else if(user.bookChapter[0].introduction===undefined){
      return ''
    }
    else {return user.bookChapter[0].introduction}
  }
  
  function appendbookChapterContent(){
    if(user.bookChapter[0]===undefined){return ''}
    else if(user.bookChapter[0].content===undefined){return ''}
    else {return parse(user.bookChapter[0].content)}
  }

  function appendConclusion(){
    if(user.bookChapter[0]===undefined){return ''}
    else if(user.bookChapter[0].conclusion===undefined){return ''}
    else {return user.bookChapter[0].conclusion}
  }

  function appendReference(){
    if(user.bookChapter[0]===undefined){return ''}
    else if(user.bookChapter[0].references===undefined){return ''}
    else {
      var string = ''
       
        user.bookChapter[0].references.map(function(ref){
          string += ref+' \n ' ;
       });
     return string
  }

  }


  const generatePDF = () =>{
    pdfMake.fonts = {
      // All 4 components must be defined
      TimesNewRoman: {
          normal: 'Times-Regular.ttf',
          bold: 'Times-Bold.ttf',
          italics: 'Times-Italic.ttf',
          bolditalics: 'Times-BoldItalic.ttf'
      }
    };

    var dd = {
      pageSize: 'A4',
    
    
    pageMargins: [72, 72 ,72, 72],
    
    content: [
      appendTitle(),
      ' ',    
      appendAuthors(),
      ' ',
      appendAffiliations(),
      ' ',
      ' ',
      { text: 'Abstract', style:['header',  'bold']},
      ' ',
      appendContent(),
      {text: 'Key words:', style:['bold', 'italic']},
      appendKeywords(),
      
      ' ',
      ' ',
      {text: 'Introduction', style:'bold'},
      appendIntro(),
      ' ',
      ' ',
      {text: 'Content', style:'bold'},
      appendbookChapterContent(),
      ' ',
      ' ',
      {text: 'Conclusion', style:'bold'},
      appendConclusion(),
      ' ',
      ' ',
      {text: 'References', style:'bold',pageBreak: 'before'},
      appendReference(),
     ],

    defaultStyle: {
      font: 'TimesNewRoman',
      fontSize: 11,
      alignment: 'justify'
    },    
      
    styles: {
    
      header: {
        fontSize: 12,
        alignment: 'center'
      },
      
      header2: {
          fontSize: 12,
          alignment:'justify'
      },
      
      bold:{
          bold: true
      },
      
      italic:{
          italics: true
      }
    
    }

  }

  pdfMake.createPdf(dd).download('sample.pdf');

    }

  return (       
    <div>
          {/* 
        <button className="edit-button" onClick={generatePDF} type="primary">Download PDF</button> */} 

    </div>
  );
 
}

export default Content;