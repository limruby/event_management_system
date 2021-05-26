import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
 
function EditAccount({data, setData}) {
 
 
const [tempData, setTemp] = useState({
  tempPoster:[],
  tempVidName : "",
  tempVidPath : ""
});
 
console.log(data)
  //load result to input field value
// function checkExist(element, index){
//     var value="";
//     if(data.videos!=undefined){
//     if(data.videos[index]==null){
//         value = ' ';
//     }
//     else{
//         if(element=='name'){
//            value = data.videos[index].name;
//         }
//         else if(element=='path'){
//             value = data.videos[index].path;
//         }
//     }
//     return value;
//   }
// }
 
 
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
//achievement form max 3
function displayAchievementForm(){
  var section = [];
 
  if(data.achievements!=null){      
    for(var i=0; i<data.achievements.length; i++){  
      section.push(
        <p>
                    FileName: {data.achievements[i].name}
                    <button className="deleteBtn" type="button" onClick={deleteFile('achievement',i)}> <FaTrashAlt/></button>
                  </p>
          );
      }      
  }
  if(data.achievements==null||data.achievements.length<3){
        section.push(    
              <input type="file" onChange={inputChange('achievement')} enable/>              
        )
  }
 
  return section;
}
// publication form max 3
  function displayPublicationForm(){
    var section=[];
   
    if(data.publications!=null){    
      for(var i=0; i<data.publications.length; i++){  
        section.push(
          <p>
                      FileName: {data.publications[i].name}
                      <button className="deleteBtn" type="button" onClick={deleteFile('publication',i)}> <FaTrashAlt/></button>
                    </p>
            );
      }
    }
    if(data.publications==null||data.publications.length<3){
          section.push(    
                <input type="file" onChange={inputChange('publication')} enable/>              
          )
    }
         
    return section;
 
  }
//grant form
  function displayGrantForm(){
    var section=[];
   
    if(data.grants!=null){    
      for(var i=0; i<data.grants.length; i++){  
        section.push(
          <p>
                      FileName: {data.grants[i].name}
                      <button className="deleteBtn" type="button" onClick={deleteFile('grant',i)}> <FaTrashAlt/></button>
                    </p>
            );
      }
    }
    if(data.grants==null||data.grants[0]==null||data.grants.length<3){
          section.push(    
                <input type="file" onChange={inputChange('grant')} enable/>              
          )
    }
    return section;
  }
 
//video form 1 only
  function displayVideoForm(){
    var section = [];
    if(data.video==null || data.video.length===0){
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
              </div>
          );
    }
    else{
      section.push(
        <div className="form-group">
                  <p>{data.video[0].name}
                                  <button className="deleteBtn" type="button" onClick={deleteFile('video',0)}> <FaTrashAlt/></button>
                                  </p>
                   
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
    else if(element==='achievement'){
      let obj = data.achievements;
      obj.splice(index,1);
    }
    else if(element==='publication'){
      let obj = data.publications;
      obj.splice(index,1);
    }
    else if(element==='grant'){
      let obj = data.grants;
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
    if(element === 'poster'||element === 'achievement'||element === 'publication'||element === 'grant'){
    if (selectedFile.length > 0) {
        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            file = fileLoadedEvent.target.result;
 
           if(element === 'poster'){
              data.poster.push({'name':fileName,'source':fileReader.result})
                          setData({
                                ...data
                          })
            }
            else if(element === 'achievement'){
                        data.achievements.push({'name':fileName,'source':fileReader.result});
                                                setData({
                                ...data
                          })
                    }
            else if(element==='publication'){
                      data.publications.push({'name':fileName,'source':fileReader.result});
                                          setData({
                                ...data
                          })
                    }
            else if(element==='grant'){
                      data.grants.push({'name':fileName,'source':fileReader.result});
                                          setData({
                                ...data
                          })
                    }
                   
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
        setData({
        ...data,
      })
     console.log(data);
  };
 
 
  const handleForm=(e)=>{
      e.preventDefault();
      // perform all neccassary validations
    // video: if name !null, path must !null
    if(tempData.tempVidName!==""){
      if(tempData.tempVidPath===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempVidPath!==""){
      if(tempData.tempVidName===""){
        alert("Incomplete Form");
      }
    }
    if (tempData.tempVidName!=="" && tempData.tempVidPath!==""){
      data.video.push({'name':tempData.tempVidName,'source':tempData.tempVidPath})
       
    }
    setData({
        ...data,
      })
 
 
    var postData = {
      _id : data._id,
      poster : data.poster,
      achievements : data.achievements,
      publication : data.publication,
      grants : data.grants,
      video : data.video,
    }
 
     axiosInstance.post("/api/competitors/update", postData)
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
                <h1 className="mb-5">Edit Competition Material</h1>
 
                <h5>Poster<i className="caution"> (*Max 1)</i></h5>    
                           
                {displayPosterForm()}
                               
                <hr/>
 
                <h5>Achievements<i className="caution"> (*Max 3)</i></h5>
               
              <div className="form-group">
                   {displayAchievementForm()}
                 </div>
                       
                 <hr/>
 
                <h5>Publications<i className="caution"> (*Max 3)</i></h5>
               
              <div className="form-group">
                   {displayPublicationForm()}
                 </div>
                     <hr/>          
                 <h5>Grants<i className="caution"> (*Max 3)</i></h5>
               
              <div className="form-group">
                   {displayGrantForm()}
                 </div>
                       <hr/>        
                 <h5>Video<i className="caution"> (*Max 1)</i></h5>
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