import React, { Component } from "react";
import OtpScreen from "../common/otpScreen/OtpScreen";
import LoginScreen from "../common/loginScreen/LoginScreen";

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            reqType:"login"
        }
    }

    sendOtpToParent = (otp,type) => {
        const {otpSubmit} = this.props;
        otpSubmit(parseInt(otp),this.state.email,this.state.reqType)
    }

    storeEmail = (email) => {
        this.setState({
            email:email
        })
        const {handleSubmit} = this.props;
        handleSubmit(email)
    }

    render() {
        const {sendOtp} = this.props
        if(sendOtp) 
            return <OtpScreen sendOtpToParent = {this.sendOtpToParent} {...this.props} />
        else
            return(
                 <LoginScreen storeEmail = {this.storeEmail} {...this.props} />
            )
    }
}

export default LoginComponent;
