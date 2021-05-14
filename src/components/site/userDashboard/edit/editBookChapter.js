import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditBookChapter() {

	/////////////////////get login user (REPLACE THIS) ////////////////
	const [result, setState] = useState({
	    introduction : "intro for bookChapter",
	    content: "paragraph for bookChapter",
	    conclusion: "conclusion for bookChapter",
	    references: [
	      "REF sample 1",
	      "REF sample 2"
	    ]
	})

	const inputChange = input => e => {
	    setState({
	    	...result,
	        [input]: e.target.value
	    });
	};

	//display empty Reference field
	function displayReferencesForm(){
	    var section = [];
	    
        section.push(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" name="reference" id="reference"
                    placeholder='reference' required                    
                    onChange={tempInput('reference')} value={tempState.reference}/>
                	<button className="addBtn" type="button" onClick={addReference()}> Add</button>
                </div>

                <hr/>
            </div>
        );
	    

	    return section;

	}


	const [tempState, setTempt] = useState({
		reference:""
	});

	const tempInput = input => e => {
	    setTempt({
	    	...tempState,
	    	reference: e.target.value
	    });
	};

	//////// add reference ////////////
	const addReference = () => e => {
	    result.references.push(tempState.reference);
	    setState({
	        ...result,
	        
	    });
	    console.log(result);
	    //clear tempStateReference
	    setTempt({
	    	...tempState,
	    	reference: ""
	    });

	}


	//////// remove reference ////////////
	const deleteReference = (index) => e => {
	    result.references.splice(index,1);
	    setState({
	        ...result,
	        
	    });
	    console.log(result);
	}

	const handleForm=(e)=>{
	e.preventDefault();
	// perform all neccassary validations
	   if (result.bookChapter ==""){
	        alert("Form not fill");
	    }
	    else{
	    	///////update to db /////////////
	    	console.log(result);
	    }
	}

	/////////////////////////////////////////////////////////////

		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Book Chapter</h1>

	                <div className="form-group">
	                    <label htmlFor="introduction">Introduction</label>
	                    <textarea className="form-control" id="introduction" cols="30" rows="10"
                    	onChange={inputChange('introduction')} value={result.introduction} />
	                </div>

	                <div className="form-group">
	                    <label htmlFor="content">Content </label>
	                    <textarea className="form-control" id="content" cols="30" rows="10"
                    	onChange={inputChange('content')} value={result.content} />
	                </div>
					
					 <div className="form-group">
	                    <label htmlFor="conclusion">Conclusion </label>
	                    <textarea className="form-control" id="conclusion" cols="30" rows="10"
                    	onChange={inputChange('conclusion')} value={result.conclusion} />
	                </div>

                   	<h5>References</h5>
	                <ul>
	                    {result.references.map((reference, index)=>(

	                    <li>
	                      {reference}
	                      <button className="deleteBtn" type="button" onClick={deleteReference('reference',index)}> delete</button>
	                    </li>
	                    ))}
	                </ul>
	                {displayReferencesForm()}

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

export default EditBookChapter;