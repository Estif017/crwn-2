import React from 'react'
import SignIn from '../../components/sign-In/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import { SignInAndSignUPContainer } from './SignIn-SignUp-style'

const SignInSignUpPage = () => {
    return (
        <SignInAndSignUPContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUPContainer>
    )
}

export default SignInSignUpPage
