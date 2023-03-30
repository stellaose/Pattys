import React from 'react'
import MetaData from '../Components/Layout/MetaData'
import CheckoutSteps from '../Components/Molecules/MultiStep'
import { CheckoutBody, CheckoutContainer } from '../Stylesheets/Checkout.styled'

const Payment = () => {
  return (
    <>
      <MetaData title={'Payment || Pattys E-Commerce'}/>
      <CheckoutBody>
        <CheckoutSteps activeStep={2}/>
        <CheckoutContainer>
          Payment
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default Payment