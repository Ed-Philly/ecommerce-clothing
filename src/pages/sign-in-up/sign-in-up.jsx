import React from 'react';
import './sign-in-up.scss'

//Build compoents 
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/signup/signup';

const SignInSignUpPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInSignUpPage;