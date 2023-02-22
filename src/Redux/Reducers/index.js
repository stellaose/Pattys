import { combineReducers } from "redux";
import { cartReducer } from "./CartReducers";
import productDetailsReducer from "./ProductDetailsReducer";
import productReducer from "./ProductReducer";
import { userReducer, profileReducer, passwordReducer } from "./UserReducer";


const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailsReducer,
    profile: profileReducer,
    user: userReducer,
    password: passwordReducer,
    cart: cartReducer
})

export default rootReducer