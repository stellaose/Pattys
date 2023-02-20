import React from 'react'
import {  ForgetBody, 
          ForgetContainer, 
          ForgetImg } from '../Stylesheets/Password.styled'

const ForgetPassword = () => {
  return (
    <>
      <ForgetContainer>
        <ForgetBody>
          <ForgetImg src='/asset/forget.png'/>
        </ForgetBody>
      </ForgetContainer>
      
    </>
  )
}

export default ForgetPassword