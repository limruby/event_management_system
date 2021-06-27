const Receipt = ({user,role}) =>  {

    
    function display(){
    var section =[];
    if(user.receipt){
    
        for (var i=0; i<user.receipt.length; i++){
        const imageBuffer = Buffer.from(user.receipt[0].source.data); 
            section.push(
                <li>
                <img src={imageBuffer} alt={user.receipt[0].name}/>
                <a download={user.receipt[0].name} href={imageBuffer} title="Download">Download</a>
                </li>
            );
        }
        }else{
        console.log("no data");       
        }
        return section; 
      }
        return (
          <div className="empty-container">
              {display()}
              <div className="btn-group">
             
                </div>
          </div> 
          
          );
        }
    
export default Receipt;