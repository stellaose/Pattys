import CartType from "../Types/CartType";

export const cartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case CartType.ADD_TO_CART:
      const item = action.payload
      
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      
      if (isItemExist){
        return{
          ...state,
          cartItems: state.cartItems.map((i) => 
            i.product === isItemExist.product ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
      
    case CartType.REMOVE_FROM_CART: 
      return{
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload)
      }
    case CartType.SAVE_SHIPPING_INFO:
      return{
        ...state,
        shippingInfo: action.payload
      }
    default:
      return state
  }
}