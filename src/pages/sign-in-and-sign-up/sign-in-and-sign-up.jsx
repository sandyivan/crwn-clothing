import React from 'react';

//importing a sign in component
import SignIn from '../../components/sign-in/sign-in';

//importing sign up component 
import SignUp from '../../components/sign-up/sign-up';

//importing our styles
import './sign-in-and-sign-up.scss';


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;