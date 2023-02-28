import CartType from "../Types/CartType";
import axios from "axios";
import config from "../../config";

const removeFromCart = (id) => {
  return{
    type: CartType.REMOVE_FROM_CART,
    payload: id
  }
}

const saveShippingInfo = (data) => {
  return{
    type: CartType.SAVE_SHIPPING_INFO,
    payload: data
  }
}

export const addToCartAction  = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${config.BASE_URL}/v1/product/one-product/${id}`)
    console.log(data)
    dispatch({
      type: CartType.ADD_TO_CART,
      payload:{
        product: data.oneProduct._id,
        name: data.oneProduct.name,
        price: data.oneProduct.price,
        image: data.oneProduct.images[0].url,
        stock: data.oneProduct.stock,
        quantity
      }
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
    // alert('Product added to cart successfully.')
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCartAction = (id) => async (dispatch, getState) => {
  try {
    dispatch(removeFromCart(id))
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    console.log(error)
  }
}

export const saveShippingInfoAction = (data) => async(dispatch) => {
  dispatch(saveShippingInfo())
  
  localStorage.setItem('shippingInfo', JSON.stringify(data))
}