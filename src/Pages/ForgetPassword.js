import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  
        EnterButton,
        EnterSection,
        ForgetBody, 
        ForgetContainer, 
        ForgetImg, 
        ForgetInput,
        InputSection} from '../Stylesheets/Password.styled'
import MetaData from '../Components/Layout/MetaData'
import { forgetPasswordAction } from '../Redux/Actions/UserAction'

const ForgetPassword = () => {
  const dispatch = useDispatch()
  const [inputEmail, setInputEmail] = useState('')
  
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgetPasswordAction(inputEmail))
  }
  return (
    <>
      <MetaData title={'Forget Password || Pattys E-Commerce'}/>
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
              name='email'
              value={inputEmail}
              onChange= {handleInputEmail}
              required
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