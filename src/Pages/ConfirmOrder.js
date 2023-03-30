import React from 'react'
import { useSelector } from 'react-redux'
import MetaData from '../Components/Layout/MetaData'
import CheckoutSteps from '../Components/Molecules/MultiStep'
import { 
        CheckoutBody,
        CheckoutContainer } from '../Stylesheets/Checkout.styled'

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)  
  return (
    <>
      <MetaData title={'Confirm Order || Pattys E-Commerce'}/>
      <CheckoutBody>
        <CheckoutSteps activeStep={1}/>
        <CheckoutContainer>
          <h1>Confirm Order</h1>
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default ConfirmOrder