import React, { Component } from 'react';

import './sign-in.scss';

//importing our customized form input
import FormInput from '../form-input/form-input';

//customized button component 
import CustomButton from '../custom-buttom/custom-button';



class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: ''});

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }


    render() {
        return(
            <div className='sign-in'>
                <h1>I have already an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required
                        label='Email'
                    />
                    <FormInput 
                        name='password'  
                        type='password' 
                        value={this.state.password}
                        onChange={this.handleChange} 
                        required 
                        label='Password'
                    />
                    
                    <CustomButton type='submit'>Sign In</CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;