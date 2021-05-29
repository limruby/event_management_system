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
                                          
                      amount= 390.00.toFixed(2);;
                      
                }
                else if (values.category === "Young Innovator"){
                      amount= 222.00.toFixed(2);;
                }
                else if (values.category === "Junior Innovator"){
                      amount= 231.00.toFixed(2);;
                }

             //    var phone ="123123"






            var hash_value = values.token + values.cmpy_code + values.zone + values.product_ID + amount;  
            var sha1 = require('sha1');
        return (
            <div>
                <h1>Confirmation</h1>

                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.ic_passport_number} />
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.ic_passport_number} />
                    <input type="text" name="name" value={values.name} />
                    <input type="text" name="ic" value={values.ic_passport_number} />
                    <input type="text" name="email" value={values.email} />
                    <input type="text" name="phone" value={values.phone_no} />
                    <input type="text" name="designation" value={values.affiliation} />
                    <input type="text" name="address" value={values.address} />

                    <input type="text" name="hash_value" value={sha1(hash_value)} />
                    <input type="number" name="amount" value={amount} />
                    <input type="submit" name="submit" value="Pay" />
    

                  
                  </form>
                  
 {/*               <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Affiliation: {affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {ic_passport_number}</li>   
                    <li class="list-group-item">Phone Number: {phone_no}</li> 
                    <li class="list-group-item">Address: {address}</li>
                    <li class="list-group-item">Gender: {gender}</li>
                    <li class="list-group-item">Selected Category: {category}</li>
        </ul> */}


                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                      {/*<button className="btn btn-primary" onClick={this.continue}>Confirm</button> */}  
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm