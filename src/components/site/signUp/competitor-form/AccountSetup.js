import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        function refreshPage() {
            window.location.reload();
        }

        const handleForm = (e) => {
            e.preventDefault();
            // perform all neccassary validations
            if (values.password !== values.confirmPassword) {
                alert("Password don't match");
            }
            else if (values.email == "" || values.password == "" || values.confirmPassword == "") {
                alert("Form not fill");
            }
            else {
                this.continue(e);
            }
        }

        return (
            <section className="section-container">
            <div className="form-container">
                <form onSubmit={handleForm}>
                    <h1 className="mb-5">Account Setup</h1>
                    <div className="form-group">
                        <label htmlFor="email"><span>*</span>Email </label>
                        <input className="form-control" type='email' name='email' id="email"
                            placeholder='E-mail' required
                            onChange={inputChange('email')} value={values.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><span>*</span>Password (min 8 character)</label>
                        <input className="form-control" type='password' name='password' id="password"
                            placeholder='password' required
                            minLength="8"
                            onChange={inputChange('password')} value={values.password} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword"><span>*</span>Confirm Password </label>
                        <input className="form-control" type='password' name='confirmPassword' id="confirmPassword"
                            placeholder='password' required
                            minLength="8"
                            onChange={inputChange('confirmPassword')} value={values.confirmPassword} />

                    </div>

                    <br />

                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-danger" onClick={refreshPage}>Back</button>
                        </div>
                        <div className="col-6 text-right">
                            <input className="btn btn-primary" type="submit" value="Continue" />
                        </div>
                    </div>
                </form>
            </div>
            </section>
        )
    }
}

export default AccountSetup
