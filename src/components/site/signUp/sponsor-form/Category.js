import React, { Component } from 'react'
import SectionChange from '../form_change';

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
        // perform all neccassary validations
            if (values.category === "" || values.amount===""){
                alert("Form not fill");
            }
            else{
                this.continue(e);
            }
        }


        function amount () {
            var section = [];
            if(values.category === "Bronze Package"){
                section.push(
                <div>
                <input type="range" min={500} max={999} defaultValue={500} className="slider" id="bronze" onChange={inputChange('amount')}/>
                <p>{values.amount}</p>
                </div>
                )}
            else if(values.category === "Silver Package"){
                section.push(
                    <div>
                <input type="range" min={1000} max={2999} defaultValue={1000} className="slider" id="silver" onChange={inputChange('amount')}/>
                <p>{values.amount}</p>
                </div>
                )}
            else if(values.category === "Gold Package"){
                section.push(
                <div>
                <input type="range" min={3000} max={4999} defaultValue={3000} className="slider" id="gold" onChange={inputChange('amount')}/>
                <p>{values.amount}</p>
                </div>
                )}
                return section;
        }


        return (
            <div>
                <h1 className="mb-5">Select Category</h1>
                
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Category</label>
                    <select className="form-control" id="category" required='required'
                    onChange={inputChange('category')} value={values.category} >
                        <option value="">Please select</option>
                        <option value="Gold Package">Gold Package</option>
                        <option value="Silver Package">Silver Package</option>
                        <option value="Bronze Package">Bronze Package</option>
                    </select>

                    <label htmlFor="amount"><span>*</span>Amount</label>
                    
                    {amount()}
                        
                
                   
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
