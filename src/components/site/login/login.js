import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
import axiosInstance from '../../../utils/axiosConfig.js';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [address, setAddress] = useState("");

    //Competitor
    const [compData, setCompData] = useState({
        nric_passport_no: "",
        name: "",
        phone_no: "",
        affiliation: "",
        amount: ""
    })
    //Sponsor
    const [sponsorData, setSponsorData] = useState({
        company_pic_ic: "",
        company_pic_name: "",
        email: "",
        company_contact: "",
        amount: ""
    })
    //Competitor
    const [visitorData, setVisitorData] = useState({
        nric_passport_no: "",
        name: "",
        contact: "",
        amount: ""
    })

    function display() {
        var user_id = compData.nric_passport_no
        var sponsor_id = sponsorData.company_pic_ic
        var visitor_id = visitorData.nric_passport_no
        var section = []
        var cmpy_code = "AA04"
        var zone = "02"
        var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"
        var product_ID = "149"

        var sha1 = require('sha1');
        var hash_value = sha1(token + cmpy_code + zone + product_ID + compData.amount + "iiidentex");
        var sponsor_hash_value = sha1(token + cmpy_code + zone + product_ID + sponsorData.amount + "iiidentex");
        var visitor_hash_value = sha1(token + cmpy_code + zone + product_ID + visitorData.amount + "iiidentex");
        if (role === "Competitor") {
            section.push(
                <form className="list-group" id="comp_uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={compData.nric_passport_no} hidden />
                    <input type="text" name="ord_mercref" value={"iiidentex"} hidden />
                    <input type="text" name="name" value={compData.name} hidden />
                    <input type="text" name="ic" value={compData.nric_passport_no} hidden />
                    <input type="text" name="email" value={email} hidden />
                    <input type="text" name="phone" value={compData.phone_no} hidden />
                    <input type="text" name="designation" value={compData.affiliation} hidden />
                    <input type="text" name="address" value={address} hidden />

                    <input type="text" name="hash_value" value={hash_value} hidden />
                    <input type="number" name="amount" value={compData.amount} hidden />
                </form>
            )
        }
        else if (role === "Sponsor") {
            section.push(
                <form className="list-group" id="sponsor_uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={sponsorData.company_pic_name} hidden />
                    <input type="text" name="ord_mercref" value={"iiidentex"} hidden />
                    <input type="text" name="name" value={sponsorData.company_pic_name} hidden />
                    <input type="text" name="ic" value={sponsorData.company_pic_ic.toString()} hidden />
                    <input type="text" name="email" value={email} hidden />
                    <input type="text" name="phone" value={sponsorData.company_contact} hidden />
                    <input type="text" name="designation" value={sponsorData.company_pic_name} hidden />
                    <input type="text" name="address" value={address} hidden />

                    <input type="text" name="hash_value" value={sponsor_hash_value} hidden />
                    <input type="number" name="amount" value={sponsorData.amount} hidden />
                </form>
            )
        }
        else if (role === "Visitor") {
            section.push(
                <form className="list-group" id="visitor_uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={visitorData.name} hidden />
                    <input type="text" name="ord_mercref" value={"iiidentex"} hidden />
                    <input type="text" name="name" value={visitorData.name} hidden />
                    <input type="text" name="ic" value={visitorData.nric_passport_no.toString()} hidden />
                    <input type="text" name="email" value={email} hidden />
                    <input type="text" name="phone" value={visitorData.contact} hidden />
                    <input type="text" name="designation" value={visitorData.name} hidden />
                    <input type="text" name="address" value={address} hidden />

                    <input type="text" name="hash_value" value={visitor_hash_value} hidden />
                    <input type="number" name="amount" value={visitorData.amount} hidden />
                </form>
            )
        }
        return section;
    }
    const submit = (e) => {
        e.preventDefault();

        var data = {
            email: email,
            password: password,
            role: role
        }

        axiosInstance.post('/iiidentex_uitm/api/accounts/login', data)
            .then(res => {

                localStorage.clear();
                if (res.data.auth === true) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
                    setRole(res.data.result.role)
                    if (res.data.result.role === "Admin") {
                        localStorage.setItem('email', res.data.result.email);
                        localStorage.setItem('role', res.data.result.role);
                        localStorage.setItem('token', res.data.token);
                        window.location.href = '/iiidentex_uitm/admin_dashboard';
                    }
                    else if (res.data.result.role === "Competitor") {

                        var comp_account_id = localStorage.getItem('user_id')
                        axiosInstance.get('/iiidentex_uitm/api/competitors/read', { params: { account_id: comp_account_id } })
                            .then(res => {
                                var address =
                                    res.data.data.address_1 + "," +
                                    res.data.data.address_2 + "," +
                                    res.data.data.postcode + "," +
                                    res.data.data.city + "," +
                                    res.data.data.state + "," +
                                    res.data.data.country
                                setAddress(address)
                                setCompData(res.data.data)
                                if (res.data.data.bill_verify === "fail") {
                                    document.getElementById("comp_uitm_payment_form").submit()

                                }
                                else if (res.data.data.bill_verify === "pending") {
                                    console.log(res.data.data.bill_verify)
                                    window.location.href = "/iiidentex_uitm/pending"

                                }
                                else if (res.data.data.bill_verify === "success") {
                                    console.log(res.data.data.bill_verify)
                                    redirect()
                                }
                            });
                    }
                    else if (res.data.result.role === "Sponsor") {
                        console.log(res.data.result.role)
                        var sponsor_account_id = localStorage.getItem('user_id')
                        axiosInstance.get('/iiidentex_uitm/api/sponsors/read', { params: { account_id: sponsor_account_id } })
                            .then(res => {
                                var sponsorAddress =
                                    res.data.data.address_1 + "," +
                                    res.data.data.address_2 + "," +
                                    res.data.data.postcode + "," +
                                    res.data.data.city + "," +
                                    res.data.data.state + "," +
                                    res.data.data.country
                                setAddress(sponsorAddress)
                                setSponsorData(res.data.data)
                                if (res.data.data.bill_verify === "fail") {
                                    document.getElementById("sponsor_uitm_payment_form").submit()

                                }
                                else if (res.data.data.bill_verify === "pending") {
                                    console.log(res.data.bill_verify)
                                    window.location.href = "/iiidentex_uitm/pending"

                                }
                                else if (res.data.data.bill_verify === "success") {
                                    console.log(res.data.bill_verify)
                                    redirect()
                                }
                            });
                    }
                    else if (res.data.result.role === "Visitor") {
                        var visitor_account_id = localStorage.getItem('user_id')
                        axiosInstance.get('/iiidentex_uitm/api/visitors/read', { params: { account_id: visitor_account_id } })
                            .then(res => {
                                var visitorAddress =
                                    res.data.data.address_1 + "," +
                                    res.data.data.address_2 + "," +
                                    res.data.data.postcode + "," +
                                    res.data.data.city + "," +
                                    res.data.data.state + "," +
                                    res.data.data.country
                                setAddress(visitorAddress)
                                setVisitorData(res.data.data)
                                if (res.data.data.bill_verify === "fail") {
                                    document.getElementById("visitor_uitm_payment_form").submit()
                                }
                                else if (res.data.data.bill_verify === "pending") {
                                    console.log(res.data.bill_verify)
                                    window.location.href = "/iiidentex_uitm/pending"
                                }
                                else if (res.data.data.bill_verify === "success") {
                                    console.log(res.data.bill_verify)
                                    redirect()
                                }
                            });
                    }
                }
                else {
                    alert("Email or password not match.")
                }
            });
    }

    const redirect = () => {
        window.location.href = '/iiidentex_uitm/user_dashboard';
    }

    return (
        <>
            <section className="section-container">
                    <div className="login-form-container">
                        <h3>Login</h3>
                        <form onSubmit={submit}>

                            <label htmlFor="email_id">E-mail <span>*</span></label>
                            <input className="form-input" type='email' name='email' id="email_id"
                                placeholder='E-mail' required="required"
                                data-validation-required-message="Please enter your e-mail."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="password_id">Password <span>*</span></label>
                            <input className="form-input" type='password' name='password' id="passwordl_id"
                                placeholder='password' required="required"
                                data-validation-required-message="Please enter your password."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />


                            <input className="submit-btn" type="submit" value="Login" />

                            <Link to="/sign_up">
                                <p>
                                    Not register yet? Sign up here.
                                </p>
                            </Link>
                        </form>
                        {display()}
                </div>
            </section>
        </>
    )
}

export default Login;