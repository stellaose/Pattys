import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MetaData from '../Components/Layout/MetaData'
import CheckoutSteps from '../Components/Molecules/MultiStep'
import { 
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
  
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  
  const savedUser = user?.savedUser
  
  console.log('user', savedUser)
  console.log('shippingInfo', shippingInfo)
  console.log('cartItems', cartItems)
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
                    <h2></h2>
                  </DownCard>
                </CardDown>
              </CartDiv>
            </ConfirmContainer>
          </ConfirmBody>
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default ConfirmOrder