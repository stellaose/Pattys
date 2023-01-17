import { combineReducers } from "redux";
import productDetailsReducer from "./ProductDetailsReducer";
import productReducer from "./ProductReducer";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailsReducer,
    user: userReducer
})

export default rootReducer