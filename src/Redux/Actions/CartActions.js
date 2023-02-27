import CartType from "../Types/CartType";
import axios from "axios";
import config from "../../config";

export const addToCartAction  = (id, quantity, navigate) => async (dispatch, getState) => {
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
    
    alert('Product added to cart successfully.')
    navigate('/my-account/cart')
  } catch (error) {
    console.log(error)
  }
}