import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../Components/Layout/MetaData";
import { RegisterAction } from "../Redux/Actions/UserAction";
import {
  RegisterBody,
  RegisterBox,
  RegisterButton,
  RegisterColumn,
  RegisterContainer,
  RegisterInput,
  RegisterLabel,
  RegisterSection,
  NameLabel,
  NameInput,
  NameSection,
  PasswordDiv,
  Image,
} from "../Stylesheets/Register.styled";

const Register = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  
  const {firstname, lastname, email, password} = values;
  
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
        alert('signup successful')
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
                  <NameLabel htmlFor="">FirstName</NameLabel>
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
                  <NameLabel htmlFor="">LastName</NameLabel>
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
              <RegisterInput 
                type="password" 
                name='password'
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
                required
                />
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
