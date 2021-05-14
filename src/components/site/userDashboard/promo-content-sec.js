import React from 'react';


////////////////////////////get logined user promotional content or competition material///////////////////////////////////


  const result = {
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
        name: 'first flyer.jpg'
      },
      {
        name: 'second flyer.jpg'
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

  }

//////////////////////////////////////////////////////////////////////////////////////////////////


const PromoContent = ({user}) =>  {

  return (       
    <div>
      <h2>Videos</h2>
      <ul>
        {result.videos.map((video)=>(

          <li>
            Name: {video.name}<br/> Url: {video.path}
          </li>

          ))}
      </ul>
      <h2>Flyers</h2>
      <ul>
        {result.flyers.map((flyer)=>(

          <li>
            Name: {flyer.name}<br/>
          </li>

          ))}
      </ul>
    </div>
  );
 
}




export default PromoContent;