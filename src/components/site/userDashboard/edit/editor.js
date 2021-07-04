import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'


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

        if(this.props.bookChapter_data==null||this.props.bookChapter_data[0]===undefined||this.props.bookChapter_data[0]['content']==null){
            initialData="";
        }else{
            initialData = this.props.bookChapter_data[0]['content'];
        }

        const submit=(e)=>{
            e.preventDefault();

            var postData = {
                _id : this.props.id
                ,
                bookChapter : this.props.bookChapter_data
            }
            if(postData.bookChapter==null){                
                if(postData.bookChapter[0]===undefined){
                   if(postData.bookChapter[0]['content']===null){
                        postData.bookChapter.push({'content':data})
                   }
                }
            }
            else{
                postData.bookChapter[0]['content'] = data;
            }       
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
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();

                        var postData = {
                            _id : this.props.id,
                            bookChapter : this.props.bookChapter_data
                        }

                        if(postData.bookChapter==null){                
                            if(postData.bookChapter[0]===undefined){
                               if(postData.bookChapter[0]['content']===null){
                                    postData.bookChapter.push({'content':data})
                               }
                            }
                        }
                        else{
                            postData.bookChapter[0]['content'] = data;
                        } 
                   
                } }
                    
            />
            <div className="content-box">
                <span>Click "Set" to save the content</span>
                <button className="btn btn-primary" onClick={submit}>Set</button>
                </div>
            </div>
            );
        }
    }

export default EditorSec;