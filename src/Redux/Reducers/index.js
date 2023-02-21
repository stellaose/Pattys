import { combineReducers } from "redux";
import productDetailsReducer from "./ProductDetailsReducer";
import productReducer from "./ProductReducer";
import { userReducer, profileReducer, forgetPasswordReducer } from "./UserReducer";


const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailsReducer,
    profile: profileReducer,
    user: userReducer,
    forgetPassword: forgetPasswordReducer
})

export default rootReducer