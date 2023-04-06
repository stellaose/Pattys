import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MetaData from '../Components/Layout/MetaData'
import CheckoutSteps from '../Components/Molecules/MultiStep'
import { 
          CardNumberElement,
          CardCvcElement,
          CardExpiryElement,
          useStripe,
          useElements } from '@stripe/react-stripe-js'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { 
        MdOutlineEvent,
        MdVpnKey } from 'react-icons/md'
import config from '../config'
import { 
        CardEnter, 
        CardEnterBody, 
        CardGridBody, 
        CardInput, 
        CardInputBody, 
        CardLabel, 
        CheckoutBody, 
        CheckoutContainer, 
        PaymentBody, 
        PaymentForm } from '../Stylesheets/Checkout.styled'
import axios from 'axios'

const Payment = () => {
  
  const OrderInfo = JSON.parse(sessionStorage.getItem('OrderInfo'))
  console.log(OrderInfo)
  const payBtn = useRef(null)
  const dispatch = useDispatch()
  const elements = useElements()
  const stripe = useStripe()
  const navigate = useNavigate()
  
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)
  const {user } = useSelector((state) => state.user)
  
  const savedUser = user?.savedUser
  const paymentData = {
    amount: Math.round(OrderInfo.total * 100),
  };
  
  const submitHandler = async (e) => {
    e.preventDefault()
    
    payBtn.current.disabled = true;
    
    try {
      const configure = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      
      const { data } = await axios.post(
        `${config.BASE_URL}/v1/payment/process-payment`,
        paymentData,
        configure
      )
      
      const client_secret = data.client_secret;
      
      if(!stripe || !elements) return;
      
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: savedUser.firstname,
            email: savedUser.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country
            }
          }
        }
      });
      
      if(result.error){
        payBtn.current.disabled = false;
        console.log(result.error.message)
      } else{
        if(result.paymentIntent.status === 'succeeded'){
          alert('Payment Successful')
        } else {
          alert('Something went wrong with processing payment')
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      console.log(error)
    }
  }
  
  return (
    <>
      <MetaData title={'Payment || Pattys E-Commerce'}/>
      <CheckoutBody>
        <CheckoutSteps activeStep={2}/>
        <CheckoutContainer>
          <h1>Payment</h1>
          <PaymentBody>
            <PaymentForm onSubmit={(e) => submitHandler(e)}>
              <h2>Card Information</h2>
              <CardInputBody>
                <CardLabel>Card Number</CardLabel>
                <CardNumberElement className='payment'/>
              </CardInputBody> 
              
              <CardGridBody>
                <CardInputBody>
                  <CardLabel>Expiry Date</CardLabel>
                  <CardExpiryElement className='payment'/>
                </CardInputBody> 
                
                <CardInputBody>
                  <CardLabel>CVC Number</CardLabel>
                  <CardCvcElement className='payment'/>
                </CardInputBody>    
              </CardGridBody>
                       
              <CardEnterBody>
                <CardEnter 
                  type= 'submit' 
                  value= {`Pay - ${OrderInfo && OrderInfo?.total}`}
                  ref= {payBtn}
                />
                </CardEnterBody>
            </PaymentForm>
            <img src="/asset/payment1.jpg" alt=""/>
          </PaymentBody>
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default Payment