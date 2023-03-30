import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './Reducers'

const middleware = [thunk];

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems') )
      : [],
      shippingInfo: localStorage.getItem('shoppingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
  }
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store