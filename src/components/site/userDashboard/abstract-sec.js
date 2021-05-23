


const AbstractContent = ({user}) =>  {

  console.log(user);

  function displayTitle(){

    if(user.abstract!==undefined){
    var section = [];

    for (var i=0; i<user.abstract.length; i++){
        section.push(
            <p>
                <b>Title</b>: {user.abstract[0].title}
            </p>
        );
    }

    return section;
  }
  }

  
  function displayContent(){
      var section = [];

    if(user.abstract!=null){
      for (var i=0; i<user.abstract.length; i++){
        section.push(
            <p>
                <b>Content</b>: {user.abstract[0].content}
            </p>
        );
    }
    }
    return section;
    
  }



  function displayKeywords(){
    var section = [];
    if(user.abstract!=null){

    if(user.abstract[0]!=null){
      if(user.abstract[0]['keywords']!=undefined){
        section.push(
            <div>
                <ul> <b>Keywords</b>:
                  {user.abstract[0]['keywords'].map((keyword)=>(
                    <li>
                     {keyword}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
  }
 }
    return section;
  }

  return (       
    <div>
      <div id="pdfAbstract">

        
      </div>  
      
    </div>
  );
 
}




export default AbstractContent;