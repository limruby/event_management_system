import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Profiles from './Profiles';
import Confirm from './Confirm';

export class VisitorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        nric_passport_selection: '',
        nric_passport_no: null,
        contact: null,
        address_1: '',
        address_2:'',
        postcode:null,
        city:'',
        state:'',
        country:'',
        role: 'visitor',
        amount: '',

        cmpy_code: "AA04",
        zone: "02",
        product_ID: "149",
        token: "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq",
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
            this.setState({
                [input]: e.target.value
            });
    };

    render() {
        const { step } = this.state;
        const {
            email,
            password,
            confirmPassword,
            name,
            nric_passport_selection,
            nric_passport_no,
            contact,
            address_1,
            address_2,
            postcode,
            city,
            state,
            country,
            role,
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
            name,
            nric_passport_selection,
            nric_passport_no,
            contact,
            address_1,
            address_2,
            postcode,
            city,
            state,
            country,
            role,
            amount,

            cmpy_code,
            zone,
            product_ID,
            token,
        };

        // eslint-disable-next-line default-case
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
                return (
                    <Profiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
        }
    }
}

export default VisitorForm;
