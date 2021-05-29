import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import TeamProfiles from './TeamProfiles';
import Confirm from './Confirm';
import Success from './Success';

export class CompetitorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',

        role: 'competitor',
        category:'',

        no_of_team_members:'',

        name:'',
        ic_passport_selection:'',
        ic_passport_number: '',
        affiliation:'',
        address: '',
        gender: '',

        
        phone_no: "123123123",
        cmpy_code : "AA04",
        zone :"02",
        product_ID :"149",
        token :"Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq",









        members:[],

        name_2:'',
        ic_passport_selection_2:'',
        ic_passport_number_2: '',


        name_3:'',
        ic_passport_selection_3:'',
        ic_passport_number_3: '',


        name_4:'',
        ic_passport_selection_4:'',
        ic_passport_number_4: '',


        name_5:'',
        ic_passport_selection_5:'',
        ic_passport_number_5: ''
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
        const { email, password, confirmPassword, role, category,  name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5,  amount, cmpy_code, zone, product_ID, token, phone_no} = this.state;
        const values = { email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5,  amount, cmpy_code, zone, product_ID, token, phone_no};

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


            // case 4:
            //     return (
            //         <TeamProfiles
            //             nextStep={this.nextStep}
            //             prevStep={this.prevStep}
            //             inputChange={this.inputChange}
            //             values={values}
            //         />
            //     );

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

export default CompetitorForm;