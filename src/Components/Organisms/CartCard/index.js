import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { 
        CardBody, 
        CardDown, 
        CardImg, 
        CardMid, 
        CardTop,
        CountSection,
        DownCard,
        LeftOne,
        LeftThree,
        LeftTwo,
        ProceedBtn,
        TopCard} from '../../../Stylesheets/Cart.styled'

const CartCard = () => {
  
  const [quantity, setQuantity] = useState(1)
  
  const increaseQuantity = () => {
    
    // if(product?.stock <= quantity) return;
    setQuantity(quantity + 1)
  }
  
  const decreaseQuantity = () => {
    // if( 1 <= quantity) return;
    setQuantity(quantity - 1)
  }
  
  return (
    <>
      <CardBody>
        <CardTop>
          <p><AiOutlineClose/></p>
          
          <TopCard>
            <CardImg src="/asset/shirt1.jpg" alt=""/>
            
            <CardMid>
              <LeftOne>
                <h4>Defacto Man Slim Fit Knitted Short - Black</h4>
                
               
              </LeftOne>
            
              <LeftTwo>
                <CountSection>
                  <button className="button">
                    <AiOutlineMinus  onClick={decreaseQuantity}/>
                  </button>
                  <input readOnly type="number" value={quantity} />
                  <button >
                    <AiOutlinePlus onClick={increaseQuantity} />
                  </button>
                </CountSection>
              </LeftTwo>
              
              <LeftThree>
                <h3>&#8358;1000</h3>
                
              </LeftThree>
              
            </CardMid>
          </TopCard>
        </CardTop>
        
        <CardDown>
          <DownCard>
            <h2>Total</h2>
            <h2>&#8358;1000</h2>
          </DownCard>
          
          <ProceedBtn>
            <button>Proceed to Checkout</button>
          </ProceedBtn>
        </CardDown>
      </CardBody>
    </>
  )
}

export default CartCard