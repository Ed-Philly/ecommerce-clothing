import React ,{useState} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './signup.scss'

const SignUp = () =>{
   
    const [userCredentials, setCredentials] = useState({
            displayName:"",
            email:'',
            password:'',
            confirmPassword:'',})

    
    const {displayName,email,password,confirmPassword} = userCredentials

    const handleSubmit = async event=>{
        event.preventDefault();

        if (password !== confirmPassword) {
            setCredentials({
                ...userCredentials,error:{message: "password do not match"}
            })

            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)


            //firebase utils function to add users to database
            await createUserProfileDocument(user,{displayName});

            //if user registration is successfull reset form fields to blank
            setCredentials({
                displayName:"",
            email:'',
            password:'',
            confirmPassword:''

            })
        } catch (error) {
            setCredentials({
                displayName:"",
            email:'',
            password:'',
            confirmPassword:'',
        error:error})
            
        }
    }

    const handleChange = event =>{
        const {name,value} = event.target
        setCredentials({...userCredentials,[name] : value})
    }
   
    return ( 
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label="Display Name"
                        handleChange={handleChange}
                        required
                    />
                     <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label="Email"
                        handleChange={handleChange}
                        required
                    />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label="Password"
                        handleChange={handleChange}
                        required
                    />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label="Confirm Password"
                       handleChange={handleChange}
                        required
                    />
                    {
                        userCredentials.error && <div className="signup-error">{userCredentials.error.message}</div>
                    }
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
    
}
 
export default SignUp;