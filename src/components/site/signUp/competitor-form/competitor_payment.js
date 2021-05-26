import axios from 'axios';
import React, { Component } from 'react';

import axiosInstance from '../../../../utils/axiosConfig.js';
export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();
        const { 
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
                , no_of_team_members,members, phone_no}
        } = this.props;

        var amount="";
        if(category === "Professional Innovator"){
            amount = 390.00;
        }
        else if (category === "Young Innovator"){
            amount = 290.00;
        }
        else if (category === "Junior Innovator"){
            amount = 190.00;
        }
        

        var cmpy_code = "AA04";
        var zone ="02";
        var product_ID ="149";
        var token ="Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq";
        var pusat_kos ="231000";

        var hash_value = token + cmpy_code + zone + product_ID + amount;
        var data = {
            userid:ic_passport_number,
            name: name,
            ic: ic_passport_number,
            email:email,
            phone:phone_no,
            designation: affiliation,
            address:address,
            hash_value: hash_value,
            amount: amount,
            ord_mercref: "001"
        };
        
        var account_id="";

        axios.post(`https://uitmpay.uitm.edu.my/otherservices/products/${cmpy_code}/${zone}/${product_ID}`, data, {headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function(response) {
            this.account_id = response.data._id;
                data["account_id"] = this.account_id;

                axiosInstance.post('/competitors/create', data)
                .then(res=>{
                    console.log(res.data)
                    this.props.nextStep();
                });
            console.log("pay successfully");
                     }).catch(function(error) {
                       console.log(error);
                    })       
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { 
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members}
        } = this.props;


        return (
            <div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Pay</button>
                    </div>
            </div>
        )
    }
}

export default Confirm