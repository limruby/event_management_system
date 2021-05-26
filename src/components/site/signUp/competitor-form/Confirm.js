import React, { Component } from 'react';

import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { 
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, phone_no, affiliation, address, gender
            , no_of_team_members,members}
        } = this.props;


        return (
            <div>
                <h1>Confirmation</h1>

                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Affiliation: {affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {ic_passport_number}</li>   
					<li class="list-group-item">Phone Number: {phone_no}</li> 
                    <li class="list-group-item">Address: {address}</li>
                    <li class="list-group-item">Gender: {gender}</li>
                    <li class="list-group-item">Selected Category: {category}</li>
                </ul>

              

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm