import ProductType from '../Types/ProductType'

const initialState = {
    loading: false,
    product: {},
}

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default productDetailsReducer