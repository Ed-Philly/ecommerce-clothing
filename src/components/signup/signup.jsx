import React ,{Component} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './signup.scss'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:"",
            email:'',
            password:'',
            confirmPassword:''

          }
    }

    handleSubmit = async event=>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state

        if (password !== confirmPassword) {
            this.setState({
                error:{message: "password do not match"}
            })

            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)


            //firebase utils function to add users to database
            await createUserProfileDocument(user,{displayName});

            //if user registration is successfull reset form fields to blank
            this.setState({
                displayName:"",
            email:'',
            password:'',
            confirmPassword:''

            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event =>{
        const {name,value} = event.target
        this.setState({[name] : value})
    }
    render() { 
        const {displayName,password,confirmPassword,email} = this.state;
        return ( 
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label="Display Name"
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label="Confirm Password"
                       handleChange={this.handleChange}
                        required
                    />
                    {
                        this.state.error && <div className="signup-error">{this.state.error.message}</div>
                    }
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignUp;