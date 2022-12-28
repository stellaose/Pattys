import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {  
        LoginBody, 
        LoginBox, 
        LoginColumn, 
        LoginContainer, 
        LoginInput,
        LoginLabel} from '../Stylesheets/Login.styled'

const Register = () => {
    return (
        <>
            <LoginBody>
                <LoginContainer>
                    <img src="/asset/register.jpg" alt="" loading='eager'/>
                    <LoginBox>
                        <h2>PATTYS</h2>
                        <LoginColumn>
                            <p><FcGoogle/> <span> Login with Google</span></p>
                            
                            <LoginLabel htmlFor="">Email</LoginLabel>
                            <br/>
                            <LoginInput/>
                        </LoginColumn>
                        
                    </LoginBox>
                </LoginContainer>
            </LoginBody>
        </>
    )
}

export default Register