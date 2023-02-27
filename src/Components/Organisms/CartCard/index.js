import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { 
        CardBody, 
        CardImg, 
        CardMid, 
        LeftOne,
        TopCard} from '../../../Stylesheets/Cart.styled'

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