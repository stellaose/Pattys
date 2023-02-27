import React from 'react'
import { 
        CardBody, 
        CardImg, 
        CardMid, 
        LeftOne} from '../../../Stylesheets/Cart.styled'

const CartCard = ({item}) => {
  
  return (
    <>
      <CardBody>
        <CardImg src={item.image}alt=""/>
            
          <CardMid>
            <LeftOne>
              <h4>{item.name}</h4>
              <p>&#8358;{item.price}</p>
               
            </LeftOne>
          </CardMid>
      </CardBody>
    </>
  )
}

export default CartCard