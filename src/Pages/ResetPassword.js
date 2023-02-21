import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
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
import { resetPasswordAction } from '../Redux/Actions/UserAction'


const ResetPassword = () => {
  const dispatch = useDispatch()
  const { token } = useParams()
  
  const navigate = useNavigate()
  
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const handleShowOld = () => {
    setShowOld(!showOld)
  }
  
  const handleShowNew = () => {
    setShowNew(!showNew)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(password && 
      confirmPassword){
        dispatch(resetPasswordAction(password, confirmPassword, token, navigate))
      }
  }
  
  return (
    <>
      <MetaData title={'Reset Password || Pattys E-Commerce'}/>
      
      <ForgetContainer>
        <ForgetBody>
          <ForgetImg src='/asset/reset.png'/>
          
          <ForgetInput onSubmit={handleSubmit}>
            <Right>
              <h4>New Password: </h4>
              
              <ChangeInput>
                <Input
                  type={ showOld ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={password}
                  onChange={handlePassword}
                  required
                /><span onClick={handleShowOld}>
                  {showOld ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            <Right>
              <h4>Confirm Password: </h4>
              
              <ChangeInput>
                <Input
                  type={ showNew ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
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