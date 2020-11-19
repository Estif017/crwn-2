import React, { useState } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { SignInContainer } from './sign-in-style'

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

    const handleSubmit = (e)=>{
        e.preventDefault()
        setEmail('')
        setPassword('')
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
                 <CustomButton type="submit">Sign in</CustomButton>
            </form>
        </SignInContainer>
    )
}

export default SignIn
