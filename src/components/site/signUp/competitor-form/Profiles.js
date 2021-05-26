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
            if (values.name ==""||values.affiliation==""||values.ic_passport_selection==""||values.ic_passport_number==""||values.phone_no==""
                ||values.address==""||values.gender==""){
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
                <p>For team leader if participate as a team.*</p>
                <div className="form-group">
                    <label htmlFor="name"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name" id="name"
                    placeholder='Full Name (as per IC / Passport)' required                    
                    onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="affiliation"><span>*</span>Affiliation</label>
                    <input className="form-control" type='text'name='affiliation' id="affiliation"
                    placeholder='Affiliation' required
                    onChange={inputChange('affiliation')} value={values.affiliation} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection" required
                    onChange={inputChange('ic_passport_selection')} value={values.ic_passport_selection} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number' id="ic_passport_number"
                    placeholder='NRIC / Passport Number' required
                    onChange={inputChange('ic_passport_number')} value={values.ic_passport_number} />
                </div>
				<div className="form-group">
                    <label htmlFor="phone_no"><span>*</span>Phone Number</label>
                    <input className="form-control" type='text'name='phone_no' id="phone_no"
                    placeholder='Phone Number' required
                    onChange={inputChange('phone_no')} value={values.phone_no} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address"><span>*</span>Address</label>
                    <textarea className="form-control" id="address" cols="30" rows="10"
                    onChange={inputChange('address')} value={values.address} 
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="gender_id"><span>*</span>Gender</label>
                    <select className="form-control" id="gender_id" required
                    onChange={inputChange('gender')} value={values.gender} >
                        <option value="">Please select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
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
