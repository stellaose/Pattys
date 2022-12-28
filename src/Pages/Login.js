import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import {  
    GoogleSection,
        LoginBody, 
        LoginBox, 
        LoginButton, 
        LoginColumn, 
        LoginContainer, 
        LoginInput,
        LoginLabel,
        LoginSection,
        PasswordDiv} from '../Stylesheets/Login.styled'

const Login = () => {
    return (
        <>
            <LoginBody>
                <LoginContainer>
                    <LoginBox>
                        <h1>Welcome Back!</h1>
                        
                        <LoginColumn>
                            <GoogleSection>
                                <button><FcGoogle/> <span> Login with Google</span></button>
                            </GoogleSection>
                            
                            <LoginLabel htmlFor="">Email</LoginLabel>
                            <br/>
                            <LoginInput type='text'/>
                            <br/>
                            <br/>
                            <LoginLabel htmlFor="">Password</LoginLabel>
                            <br/>
                            <LoginInput type='password'/>
                            <br/>
                            
                            <PasswordDiv>
                                <Link to = '/register'>
                                    <small>Create Account?</small>
                                </Link>
                                
                                <Link to = '/forget-password'>
                                    <small>Forget Password</small>
                                </Link>
                            </PasswordDiv>
                            
                            <LoginSection>
                                <LoginButton type= 'submit' value='Login'/>
                            </LoginSection>
                            
                        </LoginColumn>
                        
                    </LoginBox>
                    
                    <img src="/asset/login.jpg" alt="" loading='eager'/>
                </LoginContainer>
            </LoginBody>
        </>
    )
}

export default Login