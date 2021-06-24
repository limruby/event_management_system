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

        const handleForm = (e) => {
            e.preventDefault();
            // perform all neccassary validations
            if (
                values.name == "" ||
                values.affiliation == "" ||
                values.ic_passport_selection == "" ||
                values.ic_passport_number == null ||
                values.phone_no == null ||
                values.gender == "" ||
                values.address_1 == "" ||
                values.address_2 == "" ||
                values.postcode == null ||
                values.city == "" ||
                values.state == ""
            ) {
                alert("Form not fill");
            }
            else {
                if(values.ic_passport_selection === "NRIC"){
                   var nric = values.ic_passport_number / 100000000000
                   if(nric < 1){
                       alert("Please insert correct IC number")
                   }
                }
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
                        <input className="form-control" type='text' name='affiliation' id="affiliation"
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
                        <br />
                        <input
                            className="form-control"
                            type='text'
                            name='ic_passport_number'
                            id="ic_passport_number"
                            placeholder='NRIC (Without dash) / Passport Number '
                            required
                            pattern="[0-9]{12}"
                            onChange={
                                inputChange('ic_passport_number')}
                            value={values.ic_passport_number} />
                            
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_no"><span>*</span>Phone Number</label>
                        <input className="form-control" type='text' name='phone_no' id="phone_no"
                            placeholder='Phone Number (Without dash)' required pattern="[0-9]{10,11}"
                            onChange={inputChange('phone_no')} value={values.phone_no}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address_1"><span>*</span>Address Line 1</label>
                        <input className="form-control" type="text" id="address"
                            onChange={inputChange('address_1')} value={values.address_1} placeholder="address line 1" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address_2"><span>*</span>Address Line 2</label>
                        <input className="form-control" type="text" id="address_2"
                            onChange={inputChange('address_2')} value={values.address_2} placeholder="address line 2" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postcode"><span>*</span>Postcode</label>
                        <input className="form-control" type="text" id="postcode" pattern="[0-9]{5}"
                            onChange={inputChange('postcode')} value={values.postcode} placeholder="postcode" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city"><span>*</span>City</label>
                        <input className="form-control" type="text" id="city"
                            onChange={inputChange('city')} value={values.city} placeholder="city" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state"><span>*</span>State</label>
                        <select className="form-control" id="state" required
                            onChange={inputChange('state')} value={values.state} >
                            <option value="">Please select</option>
                            <option value="Johor">Johor</option>
                            <option value="Kedah">Kedah</option>
                            <option value="Kelantan">Kelantan</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Labuan">Labuan</option>
                            <option value="Melaka">Melaka</option>
                            <option value="Negeri Sembilan">Negeri Sembilan</option>
                            <option value="Pahang">Pahang</option>
                            <option value="Penang">Penang</option>
                            <option value="Perak">Perak</option>
                            <option value="Perlis">Perlis</option>
                            <option value="Putrajaya">Putrajaya</option>
                            <option value="Sabah">Sabah</option>
                            <option value="Sarawak">Sarawak</option>
                            <option value="Selangor">Selangor</option>
                            <option value="Terengganu">Terengganu</option>
                        </select>
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
