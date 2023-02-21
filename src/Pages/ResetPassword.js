import React, {useState} from 'react'
import {  
  ChangeInput,
        EnterButton,
        EnterSection,
        ForgetBody, 
        ForgetContainer, 
        ForgetImg, 
        ForgetInput,
        Input,
        Right} from '../Stylesheets/Password.styled'
import MetaData from '../Components/Layout/MetaData'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'


const ResetPassword = () => {
  
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  
  
  const handleShowOld = () => {
    setShowOld(!showOld)
  }
  
  const handleShowNew = () => {
    setShowNew(!showNew)
  }
  
  return (
    <>
      <MetaData title={'Reset Password || Pattys E-Commerce'}/>
      
      <ForgetContainer>
        <ForgetBody>
          <ForgetImg src='/asset/reset.png'/>
          
          <ForgetInput>
            <Right>
              <h4>New Password: </h4>
              
              <ChangeInput>
                <Input
                  type={ showOld ? 'text' : 'password'}
                  placeholder='Enter password'
                  required
                /><span onClick={handleShowOld}>
                  {showOld ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            <Right>
              <h4>New Password: </h4>
              
              <ChangeInput>
                <Input
                  type={ showNew ? 'text' : 'password'}
                  placeholder='Confirm password'
                  required
                /><span onClick={handleShowNew}>
                  {showNew ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            <EnterSection>
              <EnterButton type= 'submit' value='Send Email'/>
            </EnterSection>
          </ForgetInput>
        </ForgetBody>
      </ForgetContainer>
    </>
  )
}

export default ResetPassword