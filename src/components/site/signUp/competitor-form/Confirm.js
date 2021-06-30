import React, { Component } from 'react';
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();

        const {
            values: {
                email,
                password,
                confirmPassword,
                role,
                category,
                amount,
                name,
                ic_passport_selection,
                ic_passport_number,
                affiliation,
                gender,
                phone_no,
                address_1,
                address_2,
                postcode,
                city,
                state,
                country,
            }
        } = this.props;

        var data = {
            role: "Competitor",
            email: email,
            password: password,
            name: name,
            phone_no: phone_no,
            category: category,
            // amount:amountTemp,
            nric_passport_selection: ic_passport_selection,
            nric_passport_no: ic_passport_number,
            affiliation: affiliation,
            address_1: address_1,
            address_2: address_2,
            postcode: postcode,
            city: city,
            state: state,
            country: country,
            gender: gender
        };

        if (category === "Professional Innovator") {
            data["amount"] = 350.00.toFixed(2);
        }
        else if (category === "Young Innovator") {
            data["amount"] = 290.00.toFixed(2);
        }
        else if (category === "Junior Innovator") {
            data["amount"] = 1.00.toFixed(2);
            console.log(data["amount"])
        }
        // create account
        axiosInstance.post('/api/accounts/signUp', data)
            .then(res => {
                if (res.data._id) {
                    this.account_id = res.data._id;
                    data["account_id"] = this.account_id;
                    axiosInstance.post('/api/competitors/create', data)
                        .then(res => {
                            localStorage.setItem("competitor_ic", JSON.stringify(res.data.nric_passport_no))
                            this.setState({ display1: 'hide' });
                            this.setState({ display2: 'show' });

                        });
                }
                else {
                    alert('Email existed')
                }
            });
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
        if (values.category === "Professional Innovator") {
            amount = 350.00.toFixed(2);
        }
        else if (values.category === "Young Innovator") {
            amount = 290.00.toFixed(2);
        }
        else if (values.category === "Junior Innovator") {
            amount = 1.00.toFixed(2);
        }
        var sha1 = require('sha1');
        var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount);
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
                    <ul class="list-group">
                        <li class="list-group-item"><b>Name:</b> {values.name}</li>
                        <li class="list-group-item"><b>Email:</b> {values.email}</li>
                        <li class="list-group-item"><b>Affiliation:</b> {values.affiliation}</li>
                        <li class="list-group-item"><b>NRIC/Passport Number:</b> {values.ic_passport_number}</li>
                        <li class="list-group-item"><b>Phone Number:</b> {values.phone_no}</li>
                        <li class="list-group-item">
                            <b>Address:</b> 
                            {values.address_1},
                            {values.address_2},
                            {values.postcode},
                            {values.city},
                            {values.state},
                            {values.country}
                        </li>
                        <li class="list-group-item"><b>Gender:</b> {values.gender}</li>
                        <li class="list-group-item"><b>Selected Category:</b> {values.category}</li>
                    </ul>
                    <br /><br />
                    <form className="list-group" id="uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                        <input type="text" name="userid" value={values.ic_passport_number} hidden />
                        {/* <input type="text" name="ord_mercref" value={"iidentex"} hidden /> */}
                        <input type="text" name="name" value={values.name} hidden />
                        <input type="text" name="ic" value={values.ic_passport_number} hidden />
                        <input type="text" name="email" value={values.email} hidden />
                        <input type="text" name="phone" value={values.phone_no} hidden />
                        <input type="text" name="designation" value={values.affiliation} hidden />
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