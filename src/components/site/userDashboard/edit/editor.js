import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import axiosInstance from '../../../../utils/axiosConfig.js';
var data;


const submit=(e)=>{
    e.preventDefault();
    console.log(data)

//     var postData = {

//         bookChapter : {
//             0  : {
//                 'content' : data
//             } 
//         }

//     }
//  console.log(postData);
//     axiosInstance.post("/competitors/update", postData)
//             .then(function(response) {
//               // window.location.href = '/user_dashboard';
//             }).catch(function(error) {
//               console.log(error);
//             })
}

const editorConfiguration = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side'
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
        return (
            <div className="EditorSec">                
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();
                        console.log( { event, editor, data } );
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