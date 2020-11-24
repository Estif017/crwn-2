import React, { useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase-util'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { SignUpContainer, SignUpForm, SignUpSpan, SignUpTitle } from './SignUp-styles'

const SignUp = () => {
    const [displayName,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert("Password don't match")
            return
        }
        try {
            const {user}= await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            console.error('error occur',error)
        }
    }

    const handleChange = (e)=>{
        const {name,value}=e.target
        if(name==='displayName'){
            setDisplayName(value)
        }
        else if(name==='email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }else if(name==='confirmPassword'){
            setConfirmPassword(value)
        }
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I don't have an account</SignUpTitle>
            <SignUpSpan>Sign up with your email and password</SignUpSpan>
            <SignUpForm onSubmit={handleSubmit}>
                <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={handleChange}
                  label='Display Name'
                  required
                />
                <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  label='Email'
                  required
                />
                <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  label='Password'
                  required
                />
                <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleChange}
                  label='Confirm password'
                  required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </SignUpForm>
        </SignUpContainer>
    )
}

export default SignUp
