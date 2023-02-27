import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
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
          TopCard} from '../Stylesheets/Cart.styled'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  
  const [quantity, setQuantity] = useState(1)
  
  const increaseQuantity = () => {
    
    // if(product?.stock <= quantity) return;
    setQuantity(quantity + 1)
  }
  
  const decreaseQuantity = () => {
    // if( 1 <= quantity) return;
    setQuantity(quantity - 1)
  }
  
  console.log(cartItems)
  const product = {
    image: '/asset/shirt1.jpg',
    name: 'Defacto Man Slim Fit Knitted Short - Black',
    quantity: 2,
    price: 1000,
    total: 1000
  }
  return (
    <>
      <CartBody>
        <h1>My Cart</h1>
        
       
        {
          cartItems && cartItems.map((product) => (
            <>
              
              <CardTop>
                <p><AiOutlineClose/></p>
                <TopCard>
                  <CartCard item={product}/>
                
                  <LeftTwo>
                    <CountSection>
                      <button className="button">
                        <AiOutlineMinus  onClick={decreaseQuantity}/>
                      </button>
                      <input readOnly type="number" value={product.quantity} />
                      <button >
                        <AiOutlinePlus onClick={increaseQuantity} />
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
            <h2>&#8358;{product.total}</h2>
          </DownCard>
          
          <Link to='/my-account/checkout'>
            <ProceedBtn>
              <button>Proceed to Checkout</button>
            </ProceedBtn>
          </Link>
          
         
        </CardDown>
        
      </CartBody>
    </>
  )
}

export default Cart