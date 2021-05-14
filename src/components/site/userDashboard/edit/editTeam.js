
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditTeam() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [result, setState] = useState({
	members:[
	    { 
	      name: 'John Doe',
	      ic_passport_selection: 'NRIC',
	      ic_passport_number: '123123123123'
	    },
	    { 
	      name: 'Marry Jane',
	      ic_passport_selection: 'NRIC',
	      ic_passport_number: '678678678'
	    }
	],
});

//load result to input field value
function checkExist(element, index){
    var value="";
    if(!result.members[index]){
        value = ' ';
    }
    else{
        if(element=='name'){
           value = result.members[index].name;
        }
        else if(element=='ic_passport_selection'){
            value = result.members[index].ic_passport_selection;
        }
        else if(element=='ic_passport_number'){
            value = result.members[index].ic_passport_number;
        }
    }
    return value;
}


const inputChange = (element, index) => e => {
    if(!result.members[index]){
        //not exist thus add 
        if(element=='name'){
            result.members.push({'name':e.target.value});
            result.members.push({'ic_passport_selection':''});
            result.members.push({'ic_passport_number':''});
        }
        else if(element=='ic_passport_selection'){
            result.members.push({'name':''});
            result.members.push({'ic_passport_selection':e.target.value});
            result.members.push({'ic_passport_number':''});
        }
        else if(element=='ic_passport_number'){
            result.members.push({'name':''});
            result.members.push({'ic_passport_selection':''});
            result.members.push({'ic_passport_number':'e.target.value'});
        }
    }
    else{
        //if exist then update
        if(element=='name'){
            result.members[index].name = e.target.value;
        }
        else if(element=='ic_passport_selection'){
            result.members[index].ic_passport_selection = e.target.value;
        } 
        else if(element=='ic_passport_number'){
            result.members[index].ic_passport_number = e.target.value;
        }
    }
    setState({
        ...result,
        
    });
};

	const handleForm=(e)=>{
		e.preventDefault();
		// perform all neccassary validations
		
	   for(let i=0; i<result.members.length; i++){
	        
	        let obj = result.members[i];
	        if(obj.name ==''&& obj.ic_passport_selection==''&& obj.ic_passport_number==''){
	            //remove empty
	            result.members.splice(i,1);	        
	        }
	    }
	    for(let i=0; i<result.members.length; i++){
	    	let obj = result.members[i];
	        if(obj.name =='' || obj.ic_passport_selection==''||obj.ic_passport_number==''){
	            alert('Incomplete form.')         
	        }
	    }

	    setState({
	        ...result,
	        
	    });
	    ///////replace row in db /////////////
	   	console.log(result);
    }


    function displayForm (){
        var section = [];

        for (var i=0; i<5; i++){
            section.push(
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Team Member {i+1}</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', i)} value={checkExist('name',i)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ic_passport_selection">NRIC / Passport Number</label>
                        <select className="form-control" id="ic_passport_selection" 
                        onChange={inputChange('ic_passport_selection', i)} value={checkExist('ic_passport_selection',i)}>
                            <option value="">Please select</option>
                            <option value="NRIC">NRIC</option>
                            <option value="PASSPORT NUMBER">Passport Number</option>
                        </select>
                        <br/>
                        <input className="form-control" type='text'name='ic_passport_number' id="ic_passport_number"
                        placeholder='NRIC / Passport Number' 
                        onChange={inputChange('ic_passport_number', i)} value={checkExist('ic_passport_number',i)} />
                    </div>
                </div>
            );
        }

        return section;

    }

/////////////////////////////////////////////////////////////

	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h5>Team Members</h5>

               	{displayForm()}
                 
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