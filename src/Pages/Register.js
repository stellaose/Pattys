import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../Components/Layout/MetaData";
import { RegisterAction } from "../Redux/Actions/UserAction";
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import {
          Image,
          NameInput,
          NameSection,
          PasswordDiv,
          RegisterBody,
          RegisterBox,
          RegisterButton,
          RegisterColumn,
          RegisterContainer,
          RegisterInput,
          RegisterInputBody,
          RegisterLabel,
          RegisterPassword,
          RegisterSection } from "../Stylesheets/Register.styled";

const Register = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  
  const [show, setShow] = useState('')
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  
  const {firstname, lastname, email, password} = values;
  
  const handleShow = () => {
    setShow(!show)
  }
  
  const handleFirstNameInput = (e) => {
    setValues({...values, firstname: e.target.value})
  }
  
  const handleLastNameInput = (e) => {
    setValues({...values, lastname: e.target.value})
  }
  
  const handleEmailInput = (e) => {
    setValues({...values, email: e.target.value})
  }
  
  const handlePasswordInput = (e) => {
    setValues({...values, password: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(firstname &&
      lastname &&
      email &&
      password){
        dispatch(RegisterAction(firstname, lastname, email, password, navigate))
        
      }
  }
  return (
    <>
      <MetaData title={'Register || Pattys E-Commerce'}/>
      <RegisterBody>
        <RegisterContainer>
          <Image src="/asset/register.jpg" alt="" loading="eager" />
          <RegisterBox>
            <h1>Pattys</h1>

            <RegisterColumn onSubmit={handleSubmit}>
              
              <NameSection>
                <div>
                  <RegisterLabel htmlFor="">FirstName</RegisterLabel>
                  <br />
                  <NameInput 
                    type="text" 
                    placeholder="FirstName"
                    value={firstname}
                    name='firstname'
                    onChange={handleFirstNameInput}
                    required
                  />
                </div>
                <div>
                  <RegisterLabel htmlFor="">LastName</RegisterLabel>
                  <br />
                  <NameInput 
                    type="text" 
                    placeholder="LastName"
                    name='lastname'
                    value={lastname}
                    onChange={handleLastNameInput}
                    required
                  />
                </div>
              </NameSection>
              <br />
              <RegisterLabel htmlFor="">Email</RegisterLabel>
              <br />
              <RegisterInput 
                type="email"
                placeholder="E-mail Address"
                value={email}
                name='email'
                onChange={handleEmailInput}
                    required
              />
              <br />
              <br />
              <RegisterLabel htmlFor="">Password</RegisterLabel>
              <br />
              <RegisterInputBody>
                  <RegisterPassword
                     type={ show ? 'text' : 'password'}
                    value={password}
                    placeholder='Password'
                    onChange={handlePasswordInput}
                    required
                  /> <span onClick={handleShow}>
                  {show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
                </RegisterInputBody>
              <br />

              <PasswordDiv>
                <small> </small>

                <Link to="/Login">
                  <small>Have an account? Login here</small>
                </Link>
              </PasswordDiv>

              <RegisterSection>
                <RegisterButton type="submit" value="Register" />
              </RegisterSection>
            </RegisterColumn>
          </RegisterBox>
        </RegisterContainer>
      </RegisterBody>
    </>
  );
};

export default Register;
