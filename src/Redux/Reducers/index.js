import { combineReducers } from "redux";
import productDetailsReducer from "./ProductDetailsReducer";
import productReducer from "./ProductReducer";
import { userReducer, profileReducer } from "./UserReducer";


const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailsReducer,
    profile: profileReducer,
    user: userReducer
})

export default rootReducer