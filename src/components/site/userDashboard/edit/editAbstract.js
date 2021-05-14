import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import axiosInstance from '../../../../utils/axiosConfig.js';

function EditAbstract() {

	/////////////////////get login user (REPLACE THIS) ////////////////
	const [result, setResult]=useState([]);

	useEffect(() => {
	    
		const account_id = localStorage.getItem('user_id');
		
	    // axiosInstance .get("/competitors/read/:"+account_id)
	    //   .then(function(response) {
	    //     setResult(response.data.data);
	    //   }).catch(function(error) {
	    //     console.log(error);
	    //   })


	  }, []);

	const inputChange = input => e => {
	    setResult({
	    	...result,
	        [input]: e.target.value
	    });
	};

	//display Keyword
	function displayKeywords(){
	    var section = [];

	    if(result.keywords){
	        section.push(
	            <div>
	                <ul>
	                    {result.keywords.map((keyword, index)=>(

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

	    if(!result.keywords||result.keywords.length<5){
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
		if(!result.keywords){
			result.keywords=[]}

	    result.keywords.push(tempState.keyword);
	    setResult({
	        ...result,
	        
	    });
	    console.log(result);
	    //clear tempStateKeyword
	    setTempt({
	    	...tempState,
	    	keyword: ""
	    });

	}


	//////// remove keyword ////////////
	const deleteKeyword = (index) => e => {
	    result.keywords.splice(index,1);
	    setResult({
	        ...result,
	        
	    });
	    console.log(result);
	}


	const handleForm=(e)=>{
	e.preventDefault();
	// perform all neccassary validations
	   if (result.abstract ==""){
	        alert("Form not fill");
	    }
	    else{
	    	
	    	axiosInstance.post('/competitors/update', result)
            .then(res=> console.log('Success'));
	    }
	}

	/////////////////////////////////////////////////////////////

		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Abstract</h1>

	                <div className="form-group">
	                    <label htmlFor="name"><span>*</span>Project Title</label>
	                    <input type="text" className="form-control" name="title" id="title"
	                    placeholder='project title' required                    
	                    onChange={inputChange('title')} value={result.title} />
	                </div>

	                <div className="form-group">
	                    <label htmlFor="abstract">Abstract </label>
	                    <textarea className="form-control" id="abstract" cols="30" rows="10"
                    	onChange={inputChange('abstract')} value={result.abstract} />
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