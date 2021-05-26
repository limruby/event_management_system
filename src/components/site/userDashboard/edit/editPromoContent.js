import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
 
function EditAccount({data, setData}) {
 
const showUpload=(e)=>{
  e.preventDefault();
    if(data.video.length < 5){
      if (tempData.tempVidName!=="" && tempData.tempVidPath!==""){
        data.video.push({'name':tempData.tempVidName,'source':tempData.tempVidPath})
        setData({
          ...data,
        })
            tempData.tempVidName="";
            tempData.tempVidPath="";
   
            setTemp({
                  ...tempData,
            });
      }  
      else if(tempData.tempVidName!=="" && tempData.tempVidPath===""){
          alert("Incomplete Form");  
      }
      else if(tempData.tempVidName==="" && tempData.tempVidPath!==""){
          alert("Incomplete Form");
      }  
      else if(tempData.tempVidName==="" && tempData.tempVidPath===""){
        alert("Incomplete Form");
    }
      }
       
}
const [tempData, setTemp] = useState({
  tempVidName : "",
  tempVidPath : ""
});
 
console.log(data)
///////display forms//////
//poster form
  function displayPosterForm(){
    var section = [];
    if(data.poster==null||data.poster[0]==null){
      section.push(
            <div className="form-group">                
                <input type="file" onChange={inputChange('poster', 0)} />
            </div>
          );
    }
    else{
   
      section.push(
        <div>          
                   <p>{data.poster[0].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> <FaTrashAlt/></button>
           </p>
                   
              </div>
      )
    }
    return section;
  }
 
//display list of video URLs
  function displayVideoForm(){
    var section = [];

    if(data.video!=null){
        for(var i=0; i<data.video.length; i++){  
            section.push(
              <p>
                          {data.video[i].name}
                          <button className="deleteBtn" type="button" onClick={deleteFile('video',i)}> <FaTrashAlt/></button>
                        </p>

                        
                );
            }       
    }
    if(data.video==null||data.video[0]==null||data.video.length<5){     
            
              section.push(    
                <div>
        <div className="form-group">
                    <label htmlFor="videoName">Video Name </label>
                    <input type="text" className="form-control" name="videoName" id="videoName"
                    onChange={inputChange('vidName', 0)} value={tempData.tempVidName} />
                </div>
 
                <div className="form-group">
                    <label htmlFor="videoPath">Video URL </label>
                    <input type="text" className="form-control" name="videoPath" id="videoPath"
                    onChange={inputChange('vidPath', 0)} value={tempData.tempVidPath} />
                </div>
                <div>
                                        <button onClick={showUpload} className="btn btn-primary">Add</button>
                                </div>
              </div>            
          )         
               
    }
    return section;
  }
 
 
  //////action performed//////
  var obj =[];
  const deleteFile = (element,index) => e => {
    if(element==='poster'){
      let obj = data.poster;
      obj.splice(index,1);
    }
    else if(element==='video'){
      let obj = data.video
      obj.splice(index,1);
    }
      setData({
          ...data,
         
      });
      console.log(data);
  }
 
 
   const inputChange = (element, index) => e => {
    let selectedFile = e.target.files;
    let file = null;
    let fileName = "";
    if(element === 'poster'){
    if (selectedFile.length > 0) {
        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            file = fileLoadedEvent.target.result;
              data.poster.push({'name':fileName,'source':fileReader.result})
              setData({
                ...data
          })
                             
        };
    // Convert data to base64
         var baseFile = fileReader.readAsDataURL(fileToLoad);
    }
  }
   
        if(element === 'vidName'){
                        tempData.tempVidName=e.target.value;
            }
    if(element === 'vidPath'){
        tempData.tempVidPath=e.target.value;
    }
    setTemp({
      ...tempData
    });
    setData({
        ...data,
      })
     console.log(data);
  };
 
 
  const handleForm=(e)=>{
      e.preventDefault();

      var postData = {
          _id : data._id,
          poster : data.poster,
          video : data.video
      }

     axiosInstance.post("/api/sponsors/update", postData)
            .then(function(response) {
               window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
 
  };
 
  return(
    <>
            <form onSubmit={handleForm}>
      <div className="form-container">
                <h1 className="mb-5">Edit Promotional content</h1>
 
                <h5>Poster<i className="caution"> (*Max 1)</i></h5>    
                           
                {displayPosterForm()}
                               
                <hr/>
 
                 <h5>Video<i className="caution"> (*Max 5)</i></h5>
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