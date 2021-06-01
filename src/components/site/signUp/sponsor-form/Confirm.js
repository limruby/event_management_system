import React, { Component } from 'react'
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {
    continue = async (e) => {
        e.preventDefault();
   {/*     const { 
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
       */}                             
       
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;
        const { 
            values: {email, 
                password,
                company_name, 
                company_pic_name, 
                company_pic_ic,
                company_contact, 
                company_address, 
                company_website, 
                category,
                amount
            }
        } = this.props;
        
    var sha1 = require('sha1');
    var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount + ".00");  
    console.log(company_contact)

        return (
            <div>
                <h1>Confirmation</h1>
                <ul className="list-group">
                    <li className="list-group-item">Company Name: {values.company_name}</li>
                    <li className="list-group-item">PIC Name: {values.company_pic_name}</li>
                    <li className="list-group-item">IC: {values.company_pic_ic}</li>
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">Phone Number: {values.company_contact}</li>
                    <li className="list-group-item">Company Address: {values.company_address}</li>
                    <li className="list-group-item">Company Website: {values.company_website}</li>
                    <li className="list-group-item">Selected Category: {values.category}</li>
                    <li className="list-group-item">Sponsor Amount: RM {values.amount}.00</li>

                </ul>

                <br /><br />
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.company_pic_name} hidden/>
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.company_pic_name} hidden/>
                    <input type="text" name="name" value={values.company_pic_name} hidden/>
                    <input type="text" name="ic" value={values.company_pic_ic} hidden/>
                    <input type="text" name="email" value={values.email}  hidden/>
                    <input type="text" name="phone" value={values.company_contact}  hidden/>
                    <input type="text" name="designation" value={values.company_pic_name} hidden/>
                    <input type="text" name="address" value={values.company_address}  hidden/>

                    <input type="text" name="hash_value" value={hash_value} hidden/>
                    <input type="number" name="amount" value={parseFloat(amount).toFixed(2)}  hidden/>
                    
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
