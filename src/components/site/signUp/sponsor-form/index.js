import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import Confirm from './Confirm';
import Success from './Success';

export class SponsorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',
        company_name: '',
        company_pic_name: '',
        company_pic_ic:'',
        company_contact: '',
        company_address: '',
        company_website:'',
        company_logo:'',        
        role: 'sponsor',
        category:'',
        amount:'',

        cmpy_code : "AA04",
        zone :"02",
        product_ID :"149",
        token :"Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq",
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        if(input === "category"){
            this.setState({
                [input]: e.target.value,
                
            });
            this.setState({
                ['amount']: ''
            });
        }
        else {
            this.setState({
                [input]: e.target.value
            });
        }
        
    };

    render() {
        const { step } = this.state;
        const { 
        email,
        password,
        confirmPassword,
        company_name,
        company_pic_name,
        company_pic_ic,
        company_contact,
        company_address,
        company_website,
        company_logo,        
        role,
        category,
        amount,
    
        cmpy_code,
        zone,
        product_ID,
        token,

    } = this.state;
        const values = { 
        email,
        password,
        confirmPassword,
        company_name,
        company_pic_name,
        company_pic_ic,
        company_contact,
        company_address,
        company_website,
        company_logo,        
        role,
        category,
        amount,

        cmpy_code,
        zone,
        product_ID,
        token,
    };

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <Category
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                    )

            case 3:
                return (
                    <Profiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Success />
                );
        }
    }
}

export default SponsorForm;
