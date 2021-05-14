import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';


const Content = () =>  {

  const [result, setResult]=useState([]);

   const account_id = localStorage.getItem('user_id');

   


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
      <div>
        <p>{result.inroduction}</p>
        <p>{result.content}</p>
        <p>{result.conclusion}</p>

        {displayResult()}
      </div>  
      
    </div>
  );
 
}




export default Content;