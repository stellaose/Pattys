import { combineReducers } from "redux";
import productDetailsReducer from "./ProductDetailsReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailsReducer
})

export default rootReducer