import React, { Component } from "react";
import s from "../../login/login.module.scss";
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import global from "../../../utils/common";

class OtpScreen extends Component{
    renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
    }) => (
            <TextField
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={touched && error}
                {...input}
                {...custom}
                className={s.textField}
                type = "number"
            />
        )
    render(){
        const { sendRegisterDataToParent, pristine, reset, submitting,registerFormValues } = this.props
        return (
            <div className={s.loginSection}>
                <h2>Otp</h2>
                <form onSubmit={(e)=>{e.preventDefault(); registerFormValues && sendRegisterDataToParent(registerFormValues.name,registerFormValues.email)}}>
                    <div className={s.textField}>
                        <Field
                            name="name"
                            component={this.renderTextField}
                            label="Your Name"
                            className={s.textField}
                        />
                    </div>
                    <div className={s.textField}>
                        <Field
                            name="email"
                            component={this.renderTextField}
                            label="Your Email"
                            className={s.textField}
                        />
                    </div>
                    <div className={s.submitBtns}>
                        <button type="submit" disabled={pristine || submitting}>
                            Next
                        </button>
                        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'RegisterForm', // a unique identifier for this form
    validate:global.validate
  })(OtpScreen)