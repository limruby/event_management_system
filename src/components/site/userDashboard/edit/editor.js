import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import axiosInstance from '../../../../utils/axiosConfig.js';


const editorConfiguration = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};


class EditorSec extends Component {
    render() {

        var data;
    	var initialData;
		
		if(this.props.bookChapter_data==null||this.props.bookChapter_data[0]==undefined||this.props.bookChapter_data[0]['content']==null){
				initialData="";
			}else{
				initialData = this.props.bookChapter_data[0]['content'];
			}

        const submit=(e)=>{
            e.preventDefault();
            console.log(data)

            var postData = {
                _id : this.props.id
                ,
                bookChapter : this.props.bookChapter_data
            }
			if(postData.bookChapter==null||postData.bookChapter[0]==undefined||postData.bookChapter[0]['content']==null){
				postData.bookChapter.push({'content':data})
			}else{
				postData.bookChapter[0]['content'] = data;
			}
            

         // console.log(postData);
            // axiosInstance.post("/competitors/update", postData)
            //         .then(function(response) {
            //           // window.location.href = '/user_dashboard';
            //         }).catch(function(error) {
            //           console.log(error);
            //         })
        }

        return (
            <div className="EditorSec">                
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data={initialData}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        data = editor.getData();
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();
						var postData = {
						_id : this.props.id,
						bookChapter : this.props.bookChapter_data
						}
			
					if(postData.bookChapter==null||postData.bookChapter[0]==undefined||postData.bookChapter[0]['content']==null){
						postData.bookChapter.push({'content':data})
					}else{
						postData.bookChapter[0]['content'] = data;
					}
                    //console.log( { event, editor, data } );
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor.getData() );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.',  editor.getData() );
                    // } }
                />
                <p>Click "Set" to save the data</p>
                <button className="btn btn-primary" onClick={submit}>Set</button>

            </div>
        );
    }
}

export default EditorSec;