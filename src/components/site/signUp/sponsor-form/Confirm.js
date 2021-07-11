import React, { Component } from 'react'
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {
    continue = async (e) => {
        e.preventDefault();
        {
            const {
                values: {
                    email,
                    password,
                    company_name,
                    company_pic_name,
                    company_pic_ic,
                    company_contact,
                    address_1,
                    address_2,
                    postcode,
                    city,
                    state,
                    country,
                    company_website,
                    category,
                    amount
                }
            } = this.props;

            var data = {
                role: "Sponsor",
                email: email,
                password: password,
                company_name: company_name,
                company_pic_name: company_pic_name,
                company_pic_ic: company_pic_ic,
                address_1: address_1,
                address_2: address_2,
                postcode: postcode,
                city: city,
                state: state,
                country,
                company_contact: company_contact,
                company_website: company_website,
                category: category,
                amount: amount
            };
            var account_id = "";
            console.log(category)
            if (category === "Gold Package") {
                data["amount"] = 4000.00.toFixed(2);
            }
            else if (category === "Silver Package") {
                data["amount"] = 3000.00.toFixed(2);
            }
            else if (category === "Bronze Package") {
                data["amount"] = 2000.00.toFixed(2);
                console.log(data["amount"])
            }
            axiosInstance.post('/api/accounts/signUp', data)
                .then(res => {


                    if (res.data._id) {
                        this.account_id = res.data._id;
                        data["account_id"] = this.account_id;

                        axiosInstance.post('/api/sponsors/create', data)
                            .then(res => {

                                localStorage.setItem("account_id", JSON.stringify(this.account_id))
                                localStorage.setItem("company_pic_ic", JSON.stringify(res.data.company_pic_ic))


                                this.setState({ display1: 'hide' });
                                this.setState({ display2: 'show' });

                            });
                    }
                    else {
                        alert('Email existed')
                    }

                });
        }

    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    constructor(props) {
        super(props);
        this.state = { display1: 'show', display2: 'hide' };
    }



    makePayment() {
        console.log("PAY!")
        document.getElementById("uitm_payment_form").submit();
    }


    render() {
        const { values, inputChange } = this.props;

        var amount;
        if (values.category === "Gold Package") {
            amount = 4000.00.toFixed(2);
        }
        else if (values.category === "Silver Package") {
            amount = 3000.00.toFixed(2);
        }
        else if (values.category === "Bronze Package") {
            amount = 2000.00.toFixed(2);

        }
        var sha1 = require('sha1');
        var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount+"iiidentex");

        var uitmpay_address =
            values.address_1 + "," +
            values.address_2 + "," +
            values.postcode + "," +
            values.city + "," +
            values.state + "," +
            values.country

        return (
            <section className="section-container" style={{ marginBottom: "5%" }}>
                <div className="form-container" >
                    <h1>Confirmation</h1>
                    <ul className="list-group">
                        <li className="list-group-item"><b>Company Name:</b> {values.company_name}</li>
                        <li className="list-group-item"><b>PIC Name:</b> {values.company_pic_name}</li>
                        <li className="list-group-item"><b>IC:</b> {values.company_pic_ic}</li>
                        <li className="list-group-item"><b>Email:</b> {values.email}</li>
                        <li className="list-group-item"><b>Phone Number:</b> {values.company_contact}</li>
                        <li className="list-group-item"><b>Company Address:</b>
                            {values.address_1}, 
                            {values.address_2},
                            {values.postcode},
                            {values.city},
                            {values.state},
                            {values.country}
                        </li>
                        <li className="list-group-item"><b>Company Website:</b> {values.company_website}</li>
                        <li className="list-group-item"><b>Selected Category:</b> {values.category}</li>
                        <li className="list-group-item"><b>Sponsor Amount:</b> RM {amount}</li>

                    </ul>

                    <br /><br />
                    <form className="list-group" id="uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                        <input type="text" name="userid" value={values.company_pic_name} hidden />
                        <input type="text" name="ord_mercref" value={"iiidentex"} hidden />
                        <input type="text" name="name" value={values.company_pic_name} hidden />
                        <input type="text" name="ic" value={values.company_pic_ic.toString()} hidden />
                        <input type="text" name="email" value={values.email} hidden />
                        <input type="text" name="phone" value={values.company_contact} hidden />
                        <input type="text" name="designation" value={values.company_pic_name} hidden />
                        <input type="text" name="address" value={uitmpay_address} hidden />

                        <input type="text" name="hash_value" value={hash_value} hidden />
                        <input type="number" name="amount" value={amount} hidden />


                    </form>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-danger" onClick={this.back}>Back</button>
                        </div>

                        <div className="col-6">
                            <div className={this.state.display1}>
                                <div className="text-right">
                                    <button className="btn btn-primary" value="Make payment" onClick={this.continue}>Confirm</button>
                                </div>
                            </div>
                            <div className={this.state.display2}>
                                <div className=" text-right">
                                    <button className="btn btn-primary" value="Make payment" onClick={this.makePayment}>Make Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Confirm