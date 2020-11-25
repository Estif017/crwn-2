import React, { useState } from 'react'
import { auth, SignInWithGoogle } from '../../firebase/firebase-util'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { Buttons, SignInContainer } from './sign-in-style'

const SignIn = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleChange = (e)=>{
        const {value,name}=e.target
        if(name==='email'){
            setEmail(value)
        }else if(name==='password'){
            setPassword(value)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Signin with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                 type="email"
                 name='email'
                 value={email}
                 handleChange={handleChange}
                 label="email"
                 required
                 />
                <FormInput
                 type="password"
                 name='password'
                 value={password}
                 handleChange={handleChange}
                 label="password"
                 required
                 />
                 <Buttons>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton isGoogleSignIn type='button' onClick={SignInWithGoogle}>Sign in with google</CustomButton>
                 </Buttons>
            </form>
        </SignInContainer>
    )
}

export default SignIn
