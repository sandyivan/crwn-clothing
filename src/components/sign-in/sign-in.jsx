import React, { Component } from 'react';

import './sign-in.scss';

//importing our customized form input
import FormInput from '../form-input/form-input';

//customized button component 
import CustomButton from '../custom-buttom/custom-button';

//importing our firebase sign in with google pop up
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';



class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value });
       
    
    }


    render() {
        const { email, password} = this.state;
        return(
            <div className='sign-in'>
                <h1 className='title'>I have already an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        onChange={this.handleChange} 
                        required
                        label='Email'
                    />
                    <FormInput 
                        name='password'  
                        type='password' 
                        value={password}
                        onChange={this.handleChange} 
                        required 
                        label='Password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;