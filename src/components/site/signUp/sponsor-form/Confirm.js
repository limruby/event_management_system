import React, { Component } from 'react'
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {
    continue = async (e) => {
        e.preventDefault();
        const { 
            values: {
                email, 
                password,
                company_name, 
                company_pic_name, 
                company_contact, 
                company_address, 
                company_website, 
                category
                }
        } = this.props;

        var data = {
            role:"Sponsor",
            email: email,
            password: password,
            company_name: company_name,
            company_pic_name: company_pic_name,
            company_address:company_address,
            company_contact: company_contact,
            company_website: company_website,
            category: category
        };
        var account_id="";

        axiosInstance.post('/accounts/signUp', data)
            .then(res=> {
               
                 
            if(res.data._id){
                this.account_id = res.data._id;
                data["account_id"] = this.account_id;

                axiosInstance.post('/sponsors/create', data)
                .then(res=>{
                    console.log(res.data)
                    this.props.nextStep();
                });
             }
             else{
                 alert('Email existed')
             }

        });
                                   
       
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { 
            values: {email, 
                password,
                company_name, 
                company_pic_name, 
                company_contact, 
                company_address, 
                company_website, 
                category}
        } = this.props;


        return (
            <div>
                <h1>Confirmation</h1>
                <ul className="list-group">
                    <li className="list-group-item">Company Name: {company_name}</li>
                    <li className="list-group-item">PIC Name: {company_pic_name}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone Number: {company_contact}</li>
                    <li className="list-group-item">Company Address: {company_address}</li>
                    <li className="list-group-item">Company Website: {company_website}</li>
                    <li className="list-group-item">Selected Category: {category}</li>

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
