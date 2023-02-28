import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { updatePasswordAction } from '../Redux/Actions/UserAction';
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import MetaData from '../Components/Layout/MetaData';
import { 
        ChangeBody,
        ChangeContent, 
        ChangeInput, 
        ChangeRight, 
        Img,
        Input,
        Map, 
        Order, 
        OrderBtn, 
        Right} from '../Stylesheets/Password.styled'

const UpdatePassword = () => {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState('')
  const [showNew, setShowNew] = useState('')
  const [showConfirm, setShowConfirm] = useState('')
  
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const handleShow = () => {
    setShow(!show)
  }
  
  const handleShowNew = () => {
    setShowNew(!showNew)
  }
  
  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm)
  }
  
  const handleOldPassword = (e) => {
    setOldPassword(e.target.value)
  }
  
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value)
  }
  
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(oldPassword && 
      newPassword &&
      confirmPassword){
      dispatch(updatePasswordAction(oldPassword, newPassword, confirmPassword))
    }
    
  }
  return (
    <>
      <MetaData title={'Update Password || Pattys E-commerce'}/>
      <ChangeBody>
        <h1>Update Password</h1>
        <ChangeContent>
          <Map>
            <Img src='/asset/password.jpg' loading='eager'/>
          </Map>
          
          <ChangeRight onSubmit={handleSubmit}>
            <Right>
              <h4>Old Password:</h4>
              <ChangeInput>
                <Input
                  type={ show ? 'text' : 'password'}
                  placeholder='Password'
                  name='oldPassword'
                  value={oldPassword}
                  onChange={handleOldPassword}
                  required
                /> <span onClick={handleShow}>
                  {show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            
            <Right>
              <h4>New Password:</h4>
              <ChangeInput>
                <Input
                   type={ showNew ? 'text' : 'password'}
                  placeholder='Password'
                  name='newPassword'
                  value={newPassword}
                  onChange={handleNewPassword}
                  required                  
                /><span onClick={handleShowNew}>
                  {showNew ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            
            <Right>
              <h4>Confirm Password:</h4>
              <ChangeInput>
                <Input
                   type={ showConfirm ? 'text' : 'password'}
                  placeholder='Password'
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  required                  
                /><span onClick={handleShowConfirm}>
                  {showConfirm ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </span>
              </ChangeInput>
            </Right>
            
            <Order>
              <OrderBtn
                type='submit'
                value="Update Password"
              />
            </Order>
            
           
          </ChangeRight>
        </ChangeContent>
      </ChangeBody>
    </>
  )
}

export default UpdatePassword