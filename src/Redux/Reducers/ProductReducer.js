import { ProductType } from '../Types/ProductType'

const initialState = {
    loading: false,
    products: [],
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
                productCount: action.payload.countProduct,
                resultPerPage: action.payload.resultPerPage,
                filteredProduct: action.payload.filteredProductCount
                
            }
            
        case ProductType.ALL_PRODUCT_FAILURE:
            return{
                loading: false,
                product: {},
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