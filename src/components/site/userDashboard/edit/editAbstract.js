import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import axiosInstance from '../../../../utils/axiosConfig.js';

function EditAbstract({data, setData}) {

    console.log(data.abstract)
	const inputChange = input => e => {

		if(input=='title'){
			if(!data.abstract[0]){
				data.abstract.push({'title': e.target.value})			}
			else{
				data.abstract[0].title = e.target.value;
			}
		}
		if(input=='content'){
			if(!data.abstract[0]){
				data.abstract.push({'content': e.target.value})			}
			else{
				data.abstract[0].content = e.target.value;
			}
		}
	    setData({
	    	...data,
	    });
	};

	//display Keyword
	function displayKeywords(){
	    var section = [];

	    if(data.abstract!=undefined&&data.abstract[0]!=undefined&&data.abstract[0]['keywords']!=undefined){
	        section.push(
	            <div>
	                <ul>
	                    {data.abstract[0]['keywords'].map((keyword, index)=>(

	                    <li>
	                      {keyword}
	                      <button className="deleteBtn" type="button" onClick={deleteKeyword(index)}> delete</button>
	                    </li>
	                    ))}
	                </ul>
	            </div>
	        );
	    }

	    return section;
	}
	//display empty Keyword field
	function displayKeywordsForm(){
	    var section = [];

	    if(data.abstract.keywords!==null||data.abstract.keywords.length<5){
	        section.push(
	            <div>
	                <div className="form-group">
	                    <input type="text" className="form-control" name="keyword" id="keyword"
	                    placeholder='keyword'                    
	                    onChange={tempInput('keyword')} value={tempState.keyword}/>
	                	<button className="addBtn" type="button" onClick={addKeyword()}> Add</button>
	                </div>

	                <hr/>
	            </div>
	        );
	    }

	    return section;
	}


	const [tempState, setTempt] = useState({
		keyword:""
	});

	const tempInput = input => e => {
	    setTempt({
	    	...tempState,
	    	keyword: e.target.value
	    });
	};

	//////// add keyword ////////////
	const addKeyword = () => e => {
	
		if(!data.abstract[0]){
			data.abstract.push({'keywords': []})
		}
		else if(data.abstract[0]&&!data.abstract[0]['keywords']){
			data.abstract[0]['keywords']=[];
		}

	    data.abstract[0]['keywords'].push(tempState.keyword);
	    setData({
	        ...data,
	        
	    });
	    console.log(data.abstract);
	    //clear tempStateKeyword
	    setTempt({
	    	...tempState,
	    	keyword: ""
	    });

	}


	//////// remove keyword ////////////
	const deleteKeyword = (index) => e => {
		console.log(index)
		console.log(data.abstract[0]['keywords'][index])

	    data.abstract[0]['keywords'].splice(index,1);

	    console.log(index)
	    setData({
	        ...data,
	        
	    });
	    console.log(data.abstract);
	}


	const handleForm=(e)=>{
		e.preventDefault();
	// perform all neccassary validations
	   
	    	
	    	axiosInstance.post("/competitors/update", data)
            .then(function(response) {
              window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
	    
	}



	/////////////////////////////////////////////////////////////

		
//load data to input field value
function checkExist(element, index){
    var value="";
    if(data.abstract==undefined ||data.abstract[0]==undefined){
        return ' ';
    }
    else if(data.abstract[0].title && element==="title"){
    	return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
    	return data.abstract[0].content;
    }    
   

    console.log(data.abstract)
}



		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Abstract</h1>

	                <div className="form-group">
	                    <label htmlFor="name"><span>*</span>Project Title</label>
	                    <input type="text" className="form-control" name="title" id="title"
	                    placeholder='project title' required                    
	                    onChange={inputChange('title')} value={checkExist('title', 0)} />
	                </div>

	                <div className="form-group">
	                    <label htmlFor="abstract">Abstract </label>
	                    <textarea className="form-control" id="abstract" cols="30" rows="10"
                    	onChange={inputChange('content')} value={checkExist('content', 0)}/>
	                </div>


	                <h5>Keywords</h5>

	                {displayKeywords()}

	                {displayKeywordsForm()}

					 
	                <br />

	               
	                <div className="col-4 btn-group">
	                    <Link to="/user_dashboard">
	                        <button className="btn btn-danger back-btn">Back</button>
	                    </Link>
	                    <input className="btn btn-primary" type="submit" value="Update" />
	                </div>
	            </div>
	            </form>
	         </>

			)

	}

export default EditAbstract;