import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MetaData from '../Components/Layout/MetaData'
import CheckoutSteps from '../Components/Molecules/MultiStep'
import { 
  ButtonDiv,
        CardDown,
        CartDiv,
        CartSection,
        CartTag,
        CheckoutBody,
        CheckoutContainer, 
        ConfirmBody,
        ConfirmContainer,
        DownCard,
        LinkTag,
        PriceTag } from '../Stylesheets/Checkout.styled'

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)  
  const { user } = useSelector((state) => state.user)
  
  const navigate = useNavigate()
  
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const savedUser = user?.savedUser
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price, 0
  )
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.01
  const total = subtotal + tax + shippingCharges;
  
  const handleProceed = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      total
    }
    sessionStorage.setItem('OrderInfo', JSON.stringify(data))
    navigate('/checkout/payment')
  }
  return (
    <>
      <MetaData title={'Confirm Order || Pattys E-Commerce'}/>
      <CheckoutBody>
        <CheckoutSteps activeStep={1}/>
        <CheckoutContainer>
          <h1>Confirm Order</h1>
          <ConfirmBody>
            <p>Hey <span>{savedUser?.firstname} {' '}{savedUser?.lastname}</span>,</p>
            <br/>
            <p>Please confirm your order information to continue.</p>
            
            <ConfirmContainer>
              <h2>Shipping Information</h2>
              
              <div>
                <p>Phone: <span>{shippingInfo?.phoneNo}</span></p>
                <p>Email address: <span>{savedUser?.email}</span></p>
                <p>Address: <span>{address}</span></p>
              </div>
              
              <CartDiv>
                <h2>Cart Information</h2>
                {cartItems && cartItems.map((item) => (
                  <>
                    <CartSection key={item?.product}>
                      <CartTag>
                        <img src={item?.image} alt=""/>
                        
                        <LinkTag >
                          <Link to = {`/shop-now/shop/${item?.product}`}>
                            {item?.name}
                          </Link>
                        </LinkTag>
                      </CartTag>
                     
                      <PriceTag >
                        <p>{item?.quantity} x {item?.price} </p>
                        <p> = <span>&#8358;{item?.quantity * item?.price}</span></p>
                      </PriceTag>
                    </CartSection>
                  </>
                ))}
              </CartDiv>
              
              <CartDiv>
                <h2>Order Summary</h2>
                <CardDown>
                  <DownCard>
                    <p>Subtotal:</p>
                    <p>&#8358;{subtotal}</p>
                  </DownCard>
                  
                  <DownCard>
                    <p>Shipping Charges:</p>
                    <p>&#8358;{shippingCharges}</p>
                  </DownCard>
                  
                  <DownCard>
                    <p>VAT:</p>
                    <p>&#8358;{tax}</p>
                  </DownCard>
                  
                  <DownCard>
                    <h2>Total:</h2>
                    <h2>&#8358;{total}</h2>
                  </DownCard>
                </CardDown>
              </CartDiv>
              
              <ButtonDiv>
                <button onClick={handleProceed}>Proceed to Payment</button>
              </ButtonDiv>
            </ConfirmContainer>
          </ConfirmBody>
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default ConfirmOrder