
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditTeam() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [result, setState] = useState({
	members:[
	    { 
	      name: 'John Doe',
	      affiliation: 'asdasd',
	      email: 'asd@gmail.com'
	    },
	    { 
	      name: 'Marry Jane',
	      affiliation: 'qweqwe',
	      email: 'qwe@gmail.com'
	    }
	],
});


const inputChange = (element, index) => e => {
    if(!result.members[index]){
        //not exist thus add 
        if(element=='name'){
            result.members.push({'name':e.target.value, 'affiliation':'', 'email':''});
        }
        else if(element=='affiliation'){
            result.members.push({'name':'', 'affiliation':e.target.value, 'email':''});
        }
        else if(element=='email'){
            result.members.push({'name':'', 'affiliation':'', 'email':e.target.value});
        }
    }
    else{
        //if exist then update
        if(element=='name'){
            result.members[index].name = e.target.value;
        }
        else if(element=='affiliation'){
            result.members[index].affiliation = e.target.value;
        } 
        else if(element=='email'){
            result.members[index].email = e.target.value;
        }
    }
    setState({
        ...result,
        
    });
};

	const handleForm=(e)=>{
		e.preventDefault();
		// perform all neccassary validations
		
	   for(var i=0; i<result.members.length; i++){
	        
	        let obj = result.members[i];
	        if(obj.name ==''&& obj.affiliation==''&& obj.email==''){
	            //remove empty
	            result.members.splice(i,1);	        
	        }
	    }
	    for(var i=0; i<result.members.length; i++){
	    	let obj = result.members[i];
	        if(obj.name =='' || obj.affiliation==''||obj.email==''){
	            alert('Incomplete form.')         
	        }
	    }

	    setState({
	        ...result,
	        
	    });
	    ///////replace row in db /////////////
	   	console.log(result);
    }


    function displayExistedForm (){
        var section = [];

        for (var i=0; i<result.members.length; i++){
            section.push(
                <div>
                    <div className="form-group">
                        <h5>Team Member {i+1}</h5>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', i)} value={result.members[i].name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="affiliation">Affiliation</label>
                        <input type="text" className="form-control" name="affiliation" id="affiliation"
                        onChange={inputChange('affiliation', i)} value={result.members[i].affiliation} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email"
                        onChange={inputChange('email', i)} value={result.members[i].email} />
                    </div>

                </div>
            );
        }

        return section;

    }

    function displayAddBtn (){
        var section = [];
        var i = result.members.length + tempState.counter;

        if (i<=5){
            section.push(
                <div>
                    <button className="addBtn" type="button" onClick={tempInput()}> Add</button>
                </div>
            );
        i++;
        }

        return section;

    }

    const [tempState, setTempt] = useState({
        counter:0,
        defaultLength: result.members.length
    });

    const tempInput = () => e => {
        var temp = tempState.counter;
        setTempt({
            ...tempState,
            counter: temp+1
        });
    };

    function displayEmptyForm (){
        var section = [];

        if(result.members.length<5){
        for (var i=result.members.length; i<tempState.defaultLength+tempState.counter; i++){
            section.push(
                <div>
                    <div className="form-group">
                        <h5>Team Member {i+1}</h5>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', i)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="affiliation">Affiliation</label>
                        <input type="text" className="form-control" name="affiliation" id="affiliation"
                        onChange={inputChange('affiliation', i)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email"
                        onChange={inputChange('email', i)}  />
                    </div>

                </div>
            );
        }
        }
        return section;
    }

/////////////////////////////////////////////////////////////

	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h5>Team Members</h5>

               	{displayExistedForm()}

                {displayEmptyForm()}
                 
                {displayAddBtn()}

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

export default EditTeam;