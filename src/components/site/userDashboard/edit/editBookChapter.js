import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Editor from './editor';

import axiosInstance from '../../../../utils/axiosConfig.js';

function EditBookChapter({ data, setData }) {
	localStorage.setItem("activeKeys", "Abstract");

	const inputChange = input => e => {

		if(input==='introduction'){
			if(!data.bookChapter[0]){
				data.bookChapter.push({'introduction': e.target.value})			}
				else{
					data.bookChapter[0].introduction = e.target.value;
				}
			}
			if(input==='content'){
				if(!data.bookChapter[0]){
					data.bookChapter.push({'content': e.target.value})			}
					else{
						data.bookChapter[0].content = e.target.value;
					}
				}
				if(input==='conclusion'){
					if(!data.bookChapter[0]){
						data.bookChapter.push({'conclusion': e.target.value})			}
						else{
							data.bookChapter[0].conclusion = e.target.value;
						}
					}
					setData({
						...data,
					});
				};
		//display Reference
		function displayReferences(){
			var section = [];

			if(data.bookChapter!==undefined&&data.bookChapter[0]!==undefined&&data.bookChapter[0]['references']!==undefined){
				section.push(
					<div>
						<ul>
							{data.bookChapter[0]['references'].map((reference, index)=>(
								<li>
									{reference}
									<button className="deleteBtn" type="button" onClick={deleteReference(index)}> <FaTrashAlt/></button>
								</li>
							))}
						</ul>
					</div>
				);
			}

			return section;
		}
	//display empty Reference field
	function displayReferencesForm(){
		var section = [];

		section.push(
			<div>
				<div className="form-group">
					<input type="text" className="form-control" name="reference" id="reference"
					placeholder='reference'                    
					onChange={tempInput('reference')} value={tempState.reference} style={{marginBottom:"2%"}}/>
					<button className="btn btn-primary" type="button" onClick={addReference()}> Add</button>
					<br/>
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
		if (!data.bookChapter[0]) {
			data.abstract.push({ 'references': [] })

		}
		else if (data.bookChapter[0] && !data.bookChapter[0]['references']) {
			data.bookChapter[0]['references'] = [];
		}
		data.bookChapter[0]['references'].push(tempState.reference);
		
		setData({
			...data,

		});		
	    //clear tempStateReference
	    setTempt({
	    	...tempState,
	    	reference: ""
	    });
	}

	//////// remove reference ////////////
	const deleteReference = (index) => e => {

		data.bookChapter[0]['references'].splice(index,1);
		setData({
			...data,

		});
	}

	const handleForm=(e)=>{
		e.preventDefault();
	// perform all neccassary validations
	var postData = {
		_id : data._id,                
		bookChapter : data.bookChapter
	}
	if(data.bookChapter[0]!==undefined){
		if(data.bookChapter[0].content===undefined){
			data.bookChapter[0].content = " ";
		}if(data.bookChapter[0].introduction===undefined){
			data.bookChapter[0].introduction = " ";
		}if(data.bookChapter[0].conclusion===undefined){
			data.bookChapter[0].conclusion = " ";
		}
	}
	

	axiosInstance.post("/api/competitors/update", postData)
	.then(function(response) {
		window.location.href = '/user_dashboard';
	}).catch(function(error) {
		console.log(error);
	})
}


//load data to input field value
function checkExist(element, index){
	var value="";
	if(data.bookChapter===undefined ||data.bookChapter[0]===undefined){
		return ' ';
	}
	if(data.bookChapter[0].introduction && element==="introduction"){
		return data.bookChapter[0].introduction;
	}
	if(data.bookChapter[0].content && element==="content"){
		return data.bookChapter[0].content;
	}    
	if(data.bookChapter[0].conclusion && element==="conclusion"){
		return data.bookChapter[0].conclusion;
	}  
}


	/////////////////////////////////////////////////////////////

	return (
		<>
			<form onSubmit={handleForm}>
				<div className="edit-form-container" style={{ marginTop: "5%", marginBottom:"5%" }}>
					<h1 className="mb-5">Edit Book Chapter</h1>

					<div className="form-group">
						<label htmlFor="introduction">Introduction</label>
						<textarea className="form-control" id="introduction" cols="30" rows="10"
							onChange={inputChange('introduction')} value={checkExist('introduction', 0)} />
					</div>

					<div className="form-group">
						<label htmlFor="content">Content </label>
						<Editor id={data._id} bookChapter_data={data.bookChapter} />
					</div>

					<div className="form-group">
						<label htmlFor="conclusion">Conclusion </label>
						<textarea className="form-control" id="conclusion" cols="30" rows="10"
							onChange={inputChange('conclusion')} value={checkExist('conclusion', 0)} />
					</div>

					<div className="keyword-box">
					<label>References</label>
					{displayReferences()}
					{displayReferencesForm()}
					</div>
					<br />


					<div className="btn-group">
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