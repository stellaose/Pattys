import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import MetaData from '../Components/Layout/MetaData'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import {  
        GoogleSection,
        LoadingSection,
        LoginBody, 
        LoginBox, 
        LoginButton, 
        LoginColumn, 
        LoginContainer, 
        LoginInput,
        LoginInputBody,
        LoginLabel,
        LoginPassword,
        LoginSection,
        PasswordDiv} from '../Stylesheets/Login.styled'
import { LoginAction } from '../Redux/Actions/UserAction';

const Login = () => {
  const { loading, isAuthenticated } = useSelector(state => state.user)
  
  const [show, setShow] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('');
  
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  
  const redirect = searchParams.get('redirect')
  
  const handleShow = () => {
    setShow(!show)
  }
  
  const handleInputLogin = (e) => {
    setLoginEmail(e.target.value)
  }
  
  const handleInputPassword = (e) => {
    setLoginPassword(e.target.value)
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction(loginEmail, loginPassword))
   
  }
  
  useEffect(() => {
    if(isAuthenticated){
      if(redirect){
        navigate(`/${redirect}`);
      } else {
        navigate(-2)
      }
    }
  }, [navigate, isAuthenticated, redirect])
  
  
  return (
    <>
      <MetaData title={'Login || Pattys E-Commerce'}/>
      <LoginBody>
        {loading ? (
          <>
            <LoadingSection>
              <div class="loader"></div>
            </LoadingSection>
          </>
        ) : (
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
                  value={loginEmail}
                  onChange={handleInputLogin}
                  required
                />
                <br/>
                <br/>
                <LoginLabel htmlFor="">Password</LoginLabel>
                <br/>
                <LoginInputBody>
                  <LoginPassword
                     type={ show ? 'text' : 'password'}
                    value={loginPassword}
                    placeholder='Password'
                    onChange={handleInputPassword}
                    required
                  /> <span onClick={handleShow}>
                  {show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
                </LoginInputBody>
               
                <br/>
                              
                <PasswordDiv>
                  <Link to = '/register'>
                      <small>Create Account?</small>
                  </Link>
                                  
                  <Link to = '/forget-password'>
                    <small>Forget Password?</small>
                  </Link>
                </PasswordDiv>
                              
                <LoginSection>
                  <LoginButton type= 'submit' value='Login'/>
                </LoginSection>
                              
              </LoginColumn>
                          
            </LoginBox>
                      
            <img src="/asset/login.jpg" alt="" loading='eager'/>
          </LoginContainer>
        )}
        
      </LoginBody>
      
    </>
  )
}

export default Login