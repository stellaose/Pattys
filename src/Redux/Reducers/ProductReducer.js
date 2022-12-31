import { ProductType } from '../Types/ProductType'

const initialState = {
    loading: false,
    products: [],
    product: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductType.ALL_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true,
            }
        
        case ProductType.ALL_PRODUCT_SUCCESS:
            return{
                loading: false,
                products: action.payload.findProduct,
                productCount: action.payload.countProduct
                
            }
            
        case ProductType.ALL_PRODUCT_FAILURE:
            return{
                loading: false,
                product: {},
                error: action.payload
            }
        case ProductType.SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true,
            }
            
        case ProductType.SINGLE_PRODUCT_SUCCESS:
            return{
                loading: false,
                product: action.payload.oneProduct,
                    
            }
                
        case ProductType.SINGLE_PRODUCT_FAILURE:
            return{
                loading: false,
                products: {},
                error: action.payload
            }
        case ProductType.CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
           return state
    }
}

export default productReducer