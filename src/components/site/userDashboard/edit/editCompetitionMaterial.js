import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login result (REPLACE THIS) ////////////////
	const [result, setState] = useState({
	    
	    poster:{},
	    achievements: [
	      {
	        name: 'first sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },
	      {
	        name: 'second sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },{
	        name: 'third sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },
	    ],

	    publications: [
	      {
	        name: 'first sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },
	      {
	        name: 'second sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },{
	        name: 'third sample',
	        path: 'https://www.w3schools.com/images/w3schools_green.jpg'
	      },
	    ],
	    grants: [
	      {
	        name: 'first sample'	        
	      },
	      {
	        name: 'second sample'
	      }
	    ],

	    video: {
	    }

	});

	///////display forms//////
//poster form
	function displayPosterForm(){
		var section = [];
		if(result.poster[0]==null){
			section.push(
            <div className="form-group">
                <label htmlFor="poster">Poster</label><br />
                <input type="file" onChange={inputChange('poster', 0)} />
            </div>
	        );
		}
		else{
			section.push(
				<div className="form-group">
                	{result.poster[0].name}
                    <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> delete</button>
            	</div>
			)
		}
		return section;
	}
//achievement form
	function displayAchievementForm(){
		var section=[];
		
		section.push(
			
            <div className="form-group">
                <input type="file" onChange={inputChange('achievement')} enable/>
            </div>
		)
		return section;
	}
// publication form max 3
	function displayPublicationForm(){
		var section=[];
		
		if(result.publications.length<3){

			section.push(
				
	            <div className="form-group">
	                <input type="file" onChange={inputChange('publication')}/>
	            </div>
			)
		}
		return section;
	}
//grant form
	function displayGrantForm(){
		var section=[];
		
		if(result.grants.length<3){

			section.push(
				
	            <div className="form-group">
	                <input type="file" onChange={inputChange('grant')}/>
	            </div>
			)
		}
		return section;
	}

//video form max3
	function displayVideoForm(){
		var section = [];
		if(result.video[0]==null){
			section.push(
				<div>
				<div className="form-group">
                    <label htmlFor="videoName">Video Name </label>
                    <input type="text" className="form-control" name="videoName" id="videoName"
                    onChange={inputChange('vidName', 0)} value={result.video.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath">Video URL </label>
                    <input type="text" className="form-control" name="videoPath" id="videoPath"
                    onChange={inputChange('vidPath', 0)} value={result.video.path} />
                </div>
	            </div>
	        );
		}
		else{
			section.push(
				<div className="form-group">
                	{result.video.name}
                    <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> delete</button>
            	</div>
			)
		}
		return section;
	}

	//////action performed//////
	var obj =[];
	const deleteFile = (element,index) => e => {
		if(element=='poster'){
			result.poster[0]=null;
		}
		else if(element=='achievement'){
			let obj = result.achievements;
			obj.splice(index,1);
		}
		else if(element=='publication'){
			let obj = result.publications;
			obj.splice(index,1);
		}
		else if(element=='grant'){
			let obj = result.grants;
			obj.splice(index,1);
		}
		else if(element=='video'){
			result.video[0]=null;
		}

  
	    setState({
	        ...result,
	        
	    });
    	console.log(result);
	}


	const inputChange = (element, index) => e => {
		if(element == 'poster'){
		    result.poster[0]=e.target.files[0];
		}
		else if(element=='achievement'){
		    result.achievements.push(e.target.files[0]);
		}
		else if(element=='publication'){
			result.publications.push(e.target.files[0]);
		}
		else if(element=='grant'){
			result.grants.push(e.target.files[0]);
		}
		else if(element == 'vidName'){
		    result.video.name=e.target.value;
		}
		else if(element == 'vidPath'){
		    result.video.path=e.target.value;
		}

		setState({
	    	...result,
	    })
	   console.log(result);
	};




	const handleForm=(e)=>{
	    e.preventDefault();
	    // perform all neccassary validations
		// video: if name !null, path must !null
		if(result.video.name!=""){
			if(!result.video.path||result.video.path==""){
				alert("Incomplete Form");
			}
		}
		if(result.video.path!=""){
			if(!result.video.name||result.video.name==""){
				alert("Incomplete Form");
			}
		}

	};












	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h1 className="mb-5">Edit Competition Material</h1>

                
                {displayPosterForm()}

                <hr/>

                <h5>Achievements</h5>
                <ul>
                    {result.achievements.map((achievement, index)=>(

                    <li>
                      Name: {achievement.name}
                      <button className="deleteBtn" type="button" onClick={deleteFile('achievement',index)}> delete</button>
                    </li>
                    ))}
                </ul>
            	<div>
	               	{displayAchievementForm()}
               	</div>
		        
               	<hr/>

                <h5>Publications</h5>
                <ul>
                    {result.publications.map((publication, index)=>(

                    <li>
                      Name: {publication.name}
                      <button className="deleteBtn" type="button" onClick={deleteFile('publication',index)}> delete</button>
                    </li>
                    ))}
                </ul>
            	<div>
	               	{displayPublicationForm()}
               	</div>

               	<h5>Grants</h5>
                <ul>
                    {result.grants.map((grant, index)=>(

                    <li>
                      Name: {grant.name}
                      <button className="deleteBtn" type="button" onClick={deleteFile('grant',index)}> delete</button>
                    </li>
                    ))}
                </ul>
            	<div>
	               	{displayGrantForm()}
               	</div>

               	<h5>Video</h5>
               	{displayVideoForm()}

		        
               
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

export default EditAccount;