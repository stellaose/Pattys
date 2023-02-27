import React from 'react'
import CartCard from '../Components/Organisms/CartCard'
import { CartBody } from '../Stylesheets/Cart.styled'

const Cart = () => {
  return (
    <>
      <CartBody>
        <h1>My Cart</h1>
        <CartCard/>
      </CartBody>
    </>
  )
}

export default Cart