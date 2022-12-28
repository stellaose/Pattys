import React from 'react';
import { Link } from 'react-router-dom';
import {  
        LoginBody, 
        LoginBox, 
        LoginButton, 
        LoginColumn, 
        LoginContainer, 
        LoginInput,
        LoginLabel,
        LoginSection,
        NameLabel,
        NameInput,
        NameSection,
        PasswordDiv} from '../Stylesheets/Register.styled'


const Register = () => {
    return (
        <>
            <LoginBody>
                <LoginContainer>
                    <img src="/asset/register.jpg" alt="" loading='eager'/>
                    <LoginBox>
                        <h1>Pattys</h1>
                        
                        <LoginColumn>
                            <NameSection>
                                <div>
                                    <NameLabel htmlFor="">FirstName</NameLabel>
                                    <br/>
                                    <NameInput type='text'/>
                                </div>
                                <div>
                                    <NameLabel htmlFor="">LastName</NameLabel>
                                    <br/>
                                    <NameInput type='text'/>
                                </div>
                            </NameSection>
                            <br/>
                            <LoginLabel htmlFor="">Email</LoginLabel>
                            <br/>
                            <LoginInput type='email'/>
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
                    

                </LoginContainer>
            </LoginBody>
        </>
    )
}

export default Register