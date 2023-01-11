import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  ImgSection,
  Img,
  Image,
} from "../Stylesheets/Register.styled";

const Register = () => {
  const [avatar, setAvatar] = useState()
  
  const handleInput = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <RegisterBody>
        <RegisterContainer>
          <Image src="/asset/register.jpg" alt="" loading="eager" />
          <RegisterBox>
            <h1>Pattys</h1>

            <RegisterColumn>
              
            <ImgSection>
                <Img src="./asset/profile.jpg" alt="" loading="eager"/>
                <label for="myfile">Select a file:</label>
                <input type="file" id="myfile" name="myfile"/>
              </ImgSection>
              <NameSection>
                <div>
                  <NameLabel htmlFor="">FirstName</NameLabel>
                  <br />
                  <NameInput 
                    type="text" 
                    placeholder="First Name"
                    // value={firstName}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <NameLabel htmlFor="">LastName</NameLabel>
                  <br />
                  <NameInput type="text" />
                </div>
              </NameSection>
              <br />
              <RegisterLabel htmlFor="">Email</RegisterLabel>
              <br />
              <RegisterInput type="email" />
              <br />
              <br />
              <RegisterLabel htmlFor="">Password</RegisterLabel>
              <br />
              <RegisterInput type="password" />
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
