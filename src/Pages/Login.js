import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import MetaData from '../Components/Layout/MetaData'
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
  const [loginInfo, setLoginInfo] = useState(
    {
      email:'',
      password: ''
    }
  )
  const dispatch = useDispatch()
  
  const {email, password} = loginInfo
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful')
  }
  return (
    <>
      <MetaData title={'Login || Pattys'}/>
      <LoginBody>
        <LoginContainer>
          <LoginBox>
            <h1>Welcome Back!</h1>
                        
            <LoginColumn onSubmit={handleLogin}>
              <GoogleSection>
                <button><FcGoogle/> <span> Login with Google</span></button>
              </GoogleSection>
                            
              <LoginLabel htmlFor="email">Email</LoginLabel>
              <br/>
              <LoginInput 
                type='email'
                placeholder='E-mail'
                onChange={handleInput}
                required
              />
              <br/>
              <br/>
              <LoginLabel htmlFor="">Password</LoginLabel>
              <br/>
              <LoginInput 
                type='password'
                placeholder='Password'
                onChange={handleInput}
                required
              />
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