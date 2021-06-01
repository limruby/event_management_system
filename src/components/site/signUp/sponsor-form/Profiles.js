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
        const { values, inputChange } = this.props


        const handleForm=(e)=>{
        e.preventDefault();
        // perform all neccassary validations
            if (
                values.company_name ==""||
                values.company_pic_name==""||
                values.company_contact==""||
                values.company_address==""||
                values.company_website==""|| 
                values.company_pic_ic ==""||
                values.company_logo){
                alert("Form not fill");
            }
            else{
                this.continue(e);
            }
        }

        return (
            <div>
                <form onSubmit={handleForm}>
                <h1 className="mb-5">Profile Details</h1>
                <div className="form-group">
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
                    onChange={inputChange('company_name')} value={values.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="company_pic_name"><span>*</span>Company Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_name' id="company_pic_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_name')} value={values.company_pic_name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_pic_ic"><span>*</span>Company Person In Charge (PIC) IC Number</label>
                    <input className="form-control" type='text' name='company_pic_ic' id="company_pic_ic"
                    placeholder='IC Number' required
                    onChange={inputChange('company_pic_ic')} value={values.company_pic_ic} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Company contact number' required
                    onChange={inputChange('company_contact')} value={values.company_contact} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={values.company_address} 
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Website</label>
                    <input className="form-control" type='text' name='company_website' id="company_website"
                    placeholder='URL' required
                    onChange={inputChange('company_website')} value={values.company_website} 
                    />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                     <div className="col-6 text-right">
                        <input className="btn btn-primary" type="submit" value="Continue" />
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Profiles
