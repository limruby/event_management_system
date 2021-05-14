
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get result from database (REPLACE THIS) //////////////////////

const [result, setState] = useState({
    
    videos: [
      {
        name: 'first video',
        path: 'video url1'
      },
      {
        name: 'second video',
        path: 'video url2'
      },{
        name: 'third video',
        path: 'video url3'
      },
    ],
    flyers: [
      {
        name: 'first flyer.jpg',
        path: 'file'
      },
      {
        name: 'second flyer.jpg',
        path: 'file'
      }       
      // {
      //   "_id" : <ObjectId>,
      //   "length" : <num>,
      //   "chunkSize" : <num>,
      //   "uploadDate" : <timestamp>,
      //   "md5" : <hash>,
      //   "filename" : <string>,
      //   "contentType" : <string>,
      //   "aliases" : <string array>,
      //   "metadata" : <any>,
      // }
     
    ]

});

//load result to input field value
function checkExist(element, index){
    var value="";
    if(!result.videos[index]){
        value = ' ';
    }
    else{
        if(element=='name'){
           value = result.videos[index].name;
        }
        else if(element=='path'){
            value = result.videos[index].path;
        }
    }
    return value;
}

//onChange for videos
const inputChange = (element, index) => e => {
    if(!result.videos[index]){
        //not exist thus add 
        if(element=='name'){
            result.videos.push({'name':e.target.value});
            result.videos.push({'path':''});
        }
        else if(element=='path'){
            result.videos.push({'name':''});
            result.videos.push({'path':e.target.value});
        }
    }
    else{
        //if exist then update
        if(element=='name'){
            result.videos[index].name = e.target.value;
        }
        else if(element=='path'){
            result.videos[index].path = e.target.value;
        }
    }
    setState({
        ...result,
        
    });
};


//display empty flyer field
function displayFlyers (){
    var section = [];

    for (var i=result.flyers.length+1; i<=5; i++){
        section.push(
            <div>
                <h5>Flyer {i}</h5>

                <div className="form-group">
                    <input type="file" className="form-control" name="flyerPath" id="flyerPath"/>
                </div>

                <hr/>
            </div>
        );
    }

    return section;

}

//////// remove flyer ////////////
const deleteFile = (index) => e => {
    result.flyers.splice(index,1);
    setState({
        ...result,
        
    });
    console.log(result);
///////// call delete api then refresh /////////

}

const handleForm=(e)=>{
e.preventDefault();
// perform all neccassary validations
// video: if name !null, path must !null
    for(let i=0; i<result.videos.length; i++){
        
        let obj = result.videos[i];
        if(obj.name ==''&& obj.path==''){
            //remove 
            result.videos.splice(i,1);
            
        }
        if(obj.name =='' || obj.path==''){
            alert('Incomplete pair.')         
        }
    }

    setState({
        ...result,
        
    });
/////////////get file data/////////

///////update to db /////////////
    console.log(result);
    
}


/////////////////////////////////////////////////////////////

	return(
		<>  
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h1 className="mb-5">Edit Promotional Content</h1>

                <h5>Video 1</h5>

                <div className="form-group">
                    <label htmlFor="videoName1">Video Name </label>
                    <input type="text" className="form-control" name="videoName1" id="videoName1"
                    onChange={inputChange('name', 0)} value={checkExist('name',0)} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath0">Video URL </label>
                    <input type="text" className="form-control" name="videoPath0" id="videoPath0"
                    onChange={inputChange('path', 0)} value={checkExist('path',0)} />
                </div>

                <hr/>

                <h5>Video 2</h5>

                <div className="form-group">
                    <label htmlFor="videoName1">Video Name </label>
                    <input type="text" className="form-control" name="videoName1" id="videoName1"
                    onChange={inputChange('name', 1)} value={checkExist('name',1)} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath1">Video URL </label>
                    <input type="text" className="form-control" name="videoPath1" id="videoPath1"
                    onChange={inputChange('path', 1)} value={checkExist('path',1)} />
                </div>


                <hr/>

                <h5>Video 3</h5>

                <div className="form-group">
                    <label htmlFor="videoName2">Video Name </label>
                    <input type="text" className="form-control" name="videoName2" id="videoName2"
                    onChange={inputChange('name', 2)} value={checkExist('name',2)} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath2">Video URL </label>
                    <input type="text" className="form-control" name="videoPath2" id="videoPath2"
                    onChange={inputChange('path', 2)} value={checkExist('path',2)} />
                </div>

                <hr/>

                <h5>Video 4</h5>

                <div className="form-group">
                    <label htmlFor="videoName3">Video Name </label>
                    <input type="text" className="form-control" name="videoName3" id="videoName3"
                    onChange={inputChange('name', 3)} value={checkExist('name',3)} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath3">Video URL </label>
                    <input type="text" className="form-control" name="videoPath3" id="videoPath3"
                    onChange={inputChange('path', 3)} value={checkExist('path',3)} />
                </div>

                <hr/>

                <h5>Video 5</h5>

                <div className="form-group">
                    <label htmlFor="videoName4">Video Name </label>
                    <input type="text" className="form-control" name="videoName4" id="videoName4"
                    onChange={inputChange('name', 4)} value={checkExist('name',4)} />
                </div>

                <div className="form-group">
                    <label htmlFor="videoPath4">Video URL </label>
                    <input type="text" className="form-control" name="videoPath4" id="videoPath4"
                    onChange={inputChange('path', 4)} value={checkExist('path',4)} />
                </div>

                <hr/>

                <h5>Flyers</h5>
                <ul>
                    {result.flyers.map((flyer, index)=>(

                    <li>
                      Name: {flyer.name}<br/> Url: {flyer.path}
                      <button className="deleteBtn" type="button" onClick={deleteFile(index)}> delete</button>
                    </li>


                    ))}
                </ul>


                {displayFlyers()}



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