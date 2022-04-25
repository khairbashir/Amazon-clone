import React from "react";
import './signin.css';
import FormInput from "./form-input.js";
import CustomButton from "./ custom-button.js";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="signin">
                <h3>I already have an account</h3>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type={'email'} name='email' value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput type={'password'} name='password' value={this.state.password}  handleChange={this.handleChange} label="password"/>
                    <div className="buttons">
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton type={'submit'}>Sign With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
