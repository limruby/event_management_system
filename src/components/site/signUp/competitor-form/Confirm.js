import React, { Component } from 'react';

import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();
        // const { 
        //     values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
        //         , no_of_team_members,members, phone_no}
        // } = this.props;
        // this.props.nextStep();
        // var amount="";
        // var cmpy_code = "AA04";
        // var zone ="02";
        // var product_ID ="149";
        // var token ="Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq";
        // //var pusat_kos ="231000";

        // var hash_value = token + cmpy_code + zone + product_ID + amount;

        // if(category === "Professional Innovator"){
        //     this.setState = ({
        //         hash_value,
        //         amount: 390,
        //       })
        // }
        // else if (category === "Young Innovator"){
        //     this.setState = ({
        //         hash_value,
        //         amount: 390,
        //       })
        // }
        // else if (category === "Junior Innovator"){
        //     amount = 190.00;
        // }
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        // const { 
        //     values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, phone_no, affiliation, address, gender
        //     , no_of_team_members,members, amount, cmpy_code, zone, product_ID, token}
        // } = this.props;

                var  amount;

                if(values.category === "Professional Innovator"){                     
                      amount= 350.00.toFixed(2);
                }
                else if (values.category === "Young Innovator"){
                      amount= 290.00.toFixed(2);
                }
                else if (values.category === "Junior Innovator"){
                      amount= 190.00.toFixed(2);
                }






            var sha1 = require('sha1');
            var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount);  
            
        return (
            <div>
                <h1>Confirmation</h1>

                
                  
                <ul class="list-group">
                    <li class="list-group-item">Name: {values.name}</li>
                    <li class="list-group-item">Email: {values.email}</li>
                    <li class="list-group-item">Affiliation: {values.affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {values.ic_passport_number}</li>   
                    <li class="list-group-item">Phone Number: {values.phone_no}</li> 
                    <li class="list-group-item">Address: {values.address}</li>
                    <li class="list-group-item">Gender: {values.gender}</li>
                    <li class="list-group-item">Selected Category: {values.category}</li>
                </ul> 

                <br /><br />
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.ic_passport_number} hidden/>
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.ic_passport_number} hidden/>
                    <input type="text" name="name" value={values.name} hidden/>
                    <input type="text" name="ic" value={values.ic_passport_number} hidden/>
                    <input type="text" name="email" value={values.email} hidden />
                    <input type="text" name="phone" value={values.phone_no}  hidden/>
                    <input type="text" name="designation" value={values.affiliation}hidden />
                    <input type="text" name="address" value={values.address}  hidden/>

                    <input type="text" name="hash_value" value={hash_value}hidden/>
                    <input type="number" name="amount" value={amount} hidden />
                <div className="row">    
                    <div className="col-6">
                    <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <input type="submit" className="btn btn-primary"name="submit" value="Make payment" />
                    </div>
                </div>
                  
                  </form>

                
            </div>
        )
    }
}

export default Confirm