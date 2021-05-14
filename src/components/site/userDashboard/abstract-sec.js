import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';



const PromoContent = () =>  {

  const [result, setResult]=useState([]);



  function displayResult(){
    var section = [];
    if(result.keywords){
        section.push(
            <div>
                <ul>
                  {result.keywords.map((keyword)=>(
                    <li>
                     {keyword}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
    return section;
  }


  return (       
    <div>
      <div id="pdfAbstract">
        <p>{result.title}</p>
        <p>{result.author}</p>
        <p>{result.affiliation}</p>
        <p>{result.abstract}</p>

        {displayResult()}
        
      </div>  
      
    </div>
  );
 
}




export default PromoContent;