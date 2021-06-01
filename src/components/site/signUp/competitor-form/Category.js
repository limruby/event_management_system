import React, { Component } from 'react'

export class Profiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };



    render() {
        const { values, inputChange } = this.props;


        const handleForm=(e)=>{
        e.preventDefault();
        var amount="";
        // perform all neccassary validations
            if (values.category === ""){
                alert("Form not fill");
            }
            else{
                this.continue(e);
            }
        }



        return (
            <div>
                <h1 className="mb-5">Select Category</h1>
                
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Category</label>
                    <select className="form-control" id="category" required='required'
                    onChange={inputChange('category')} value={values.category} >
                        <option value="">Please select</option>
                        <option value="Professional Innovator">Professional Innovator</option>
                        <option value="Young Innovator">Young Innovator</option>
                        <option value="Junior Innovator">Junior Innovator</option>
                    </select>
                </div>

               <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={handleForm}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profiles
