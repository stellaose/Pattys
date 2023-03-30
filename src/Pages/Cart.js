import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoClose } from 'react-icons/io5'

import { TbShoppingCartOff } from 'react-icons/tb'
import CartCard from '../Components/Organisms/CartCard'
import { 
          CardDown, 
          CardTop, 
          CartBody, 
          CountSection,
          DownCard,
          LeftThree,
          ProceedBtn,
          LeftTwo,
          TopCard,
          EmptyCart,
          CartContainer} from '../Stylesheets/Cart.styled'
import { addToCartAction, removeFromCartAction } from '../Redux/Actions/CartActions';
import MetaData from '../Components/Layout/MetaData';

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  
  const navigate = useNavigate()
  
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1
    if(stock <= quantity ){
      return
    }
    dispatch(addToCartAction(id, newQty))
  }
  
  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if(1 >= quantity){
      return
    }
    dispatch(addToCartAction(id, newQty))
  }
  
  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id))
  } 
   
  const handleCheckout = () => {
    navigate('/login?redirect=checkout/shipping')
    window.scroll(0, 0)
  }  
  return (
    <>
      <MetaData title={'My Cart || Pattys E-commerce'}/>
      <CartContainer>
        <CartBody>
          {cartItems.length === 0 ? (
            <>
              <EmptyCart>
                <TbShoppingCartOff/>
                <p>No product in your cart</p>
              </EmptyCart>
            </>
          ) : (
            <>
              {
                cartItems && cartItems.map((product) => (
                  <>
                    
                    <CardTop key={product.product}>
                      <p onClick={() => removeFromCart(product.product)}><IoClose /></p>
                      <TopCard>
                        <CartCard item={product}/>
                      
                        <LeftTwo>
                          <CountSection>
                            <button className="button">
                              <AiOutlineMinus  onClick={() => decreaseQuantity(product.product, product.quantity)}/>
                            </button>
                            <input readOnly type="number" value={product.quantity} />
                            <button >
                              <AiOutlinePlus onClick={() => increaseQuantity(
                                product.product,
                                product.quantity,
                                product.stock
                              )} />
                            </button>
                          </CountSection>
                        </LeftTwo>
                        
                        <LeftThree>
                          <h3>&#8358;{product.price * product.quantity}</h3>
                        </LeftThree>
                      </TopCard>
                      
                    </CardTop>
                    
                  
                  </>
                
                  
                ))
              }
              
              <CardDown>
                <DownCard>
                  <h2>Total</h2>
                  <h2>&#8358;{cartItems.reduce((acc, product) => acc + product.quantity * product.price, 0)}</h2>
                </DownCard>
                      
                <ProceedBtn>
                  <button onClick={handleCheckout}>Proceed to Checkout</button>
                </ProceedBtn>
              </CardDown>
              
            </>
          )}
          
          
        </CartBody>
      </CartContainer>
     
    </>
  )
}

export default Cart