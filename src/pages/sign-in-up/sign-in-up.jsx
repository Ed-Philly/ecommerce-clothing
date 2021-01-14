import React from 'react';
import './sign-in-up.scss'

//Build compoents 
import SignIn from '../../components/sign-in/sign-in';

const SignInSignUpPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn/>
        </div>
     );
}
 
export default SignInSignUpPage;