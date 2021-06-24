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
                values.company_name === "" ||
                values.company_pic_name === "" ||
                values.company_contact === null ||
                values.address_1 === "" ||
                values.address_2 === "" ||
                values.postcode === null ||
                values.city === "" ||
                values.state === "" ||
                values.company_website === "" ||
                values.company_pic_ic === null ||
                values.company_logo) {
                alert("Form not fill");
            }
            else {
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
                        <input className="form-control" type='number' name='company_pic_ic' id="company_pic_ic"
                            placeholder='IC Number' required
                            onChange={inputChange('company_pic_ic')} value={values.company_pic_ic}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                        <input className="form-control" type='number' name='company_contact' id="company_contact"
                            placeholder='Company contact number' required
                            onChange={inputChange('company_contact')} value={values.company_contact}
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
                        <input className="form-control" type="number" id="postcode"
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
