import React from 'react'
import {  
        EnterButton,
        EnterSection,
        ForgetBody, 
        ForgetContainer, 
        ForgetImg, 
        ForgetInput,
        InputSection} from '../Stylesheets/Password.styled'

const ForgetPassword = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <ForgetContainer>
        <ForgetBody>
          <ForgetImg src='/asset/forgot.png'/>
          <h1>Forget Password?</h1>
          <p>
            To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.
          </p>
          
          <ForgetInput onSubmit={handleSubmit}>
            <h4>Email:</h4>
            <InputSection
              placeholder='E-mail'
              type='email'
            />
            
            <EnterSection>
              <EnterButton type= 'submit' value='Send Email'/>
            </EnterSection>
          </ForgetInput>
          
          
        </ForgetBody>
      </ForgetContainer>
      
    </>
  )
}

export default ForgetPassword