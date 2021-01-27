import React, {  useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import  './sign-in.scss'

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';


const SignIn =()=> {
    
    const [userCredentials, setCredentials] = useState({email:'', password:''})

    const {email,password} = userCredentials

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email,password);
            setCredentials({ email:"", password:"" })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange =(e)=>{
        const {name,value} = e.target
        setCredentials({...userCredentials, [name]: value })
    }

        return ( 
            
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput label="email"
                        name="email" 
                        type="email" 
                        value={email} 
                        handleChange={handleChange} 
                        required 
                    />
                     <FormInput label="password"
                        name="password" 
                        type="password" 
                        value={password} 
                        handleChange={handleChange} 
                        required 
                    />
                <div className="buttons">
                     <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>
                    
                </form>
            </div>
         );
    
}
 
export default SignIn;