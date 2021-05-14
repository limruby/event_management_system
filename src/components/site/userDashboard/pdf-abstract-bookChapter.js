import React from 'react';
// import PdfDownloader from './../../PdfDownloader';
// import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "./../../../assets/vfs_fonts_times";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 


const resultAbstract = {
    title : "Title of the Project",
    author: "John Doe",
    affiliation: "affiliation",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut augue ligula. Sed et scelerisque diam. Aenean rutrum et turpis in eleifend. Sed faucibus iaculis tellus id fermentum. Mauris nec scelerisque dolor. Praesent velit purus, tristique non lorem eu, ullamcorper porta nunc. Nunc id risus et nisi interdum varius nec in magna. Curabitur eu vestibulum sapien. Mauris quis vehicula dolor, eget mollis eros. Phasellus non odio in neque tincidunt venenatis. Duis faucibus egestas augue, interdum interdum diam semper at. Sed in felis ligula. In tincidunt ligula ut justo malesuada pellentesque. Nam ornare neque sed nibh posuere, in tempor tortor tristique. Cras vitae diam a odio congue tincidunt.",
    keywords:[
      "#one",
      "#twoPointO"
    ]
}
const resultBookChapter = {
    introduction : "intro for bookChapter",
    content: "paragraph for bookChapter",
    conclusion: "conclusion for bookChapter",
    references: [
      "REF sample 1",
      "REF sample 2"
    ]
}

function appendKeywords(){
  var string ='';

  resultAbstract.keywords.map(function(word){
      string += word+' ' ;
   });


  return {text:string, style:'italic'}

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
    { text: resultAbstract.title, style: ['header',  'bold'] },
    ' ',
    { text: resultAbstract.author, style:'header'},
    ' ',
    { text: resultAbstract.affiliation, style: 'header2' },
    ' ',
    ' ',
    { text: 'Abstract', style:['header',  'bold']},
    ' ',
    resultAbstract.abstract,
    {text: 'Key words:', style:['bold', 'italic']},
    appendKeywords(),
    
    ' ',
    ' ',
    {text: 'Introduction', style:'bold'},
    resultBookChapter.introduction,
    ' ',
    ' ',
    {text: 'Content', style:'bold'},
    resultBookChapter.content,
    ' ',
    ' ',
    {text: 'Conclusion', style:'bold'},
    resultBookChapter.conclusion,
    ' ',
    ' ',
    {text: 'References', style:'bold',pageBreak: 'before'},
    resultAbstract.keywords.map(function(ref){
        return {text:ref}
     }),

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



const Content = () =>  {

  return (       
    <div>
            
        <button onClick={generatePDF} type="primary">Download PDF</button> 

    </div>
  );
 
}




export default Content;