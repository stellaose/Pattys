import axios from "axios";
import { ProductType } from "../Types/ProductType";
import config from "../../config";

const fetchProductRequest = () => {
    return {
        type: ProductType.ALL_PRODUCT_REQUEST
    }
}

const fetchProductSuccess = (data) => {
    return {
        type: ProductType.ALL_PRODUCT_SUCCESS,
        payload: data
    }
}

const fetchProductFail = (error) => {
    return{
        type: ProductType.ALL_PRODUCT_FAILURE,
        payload: error
    }
}

const oneProductRequest = () => {
    return {
        type: ProductType.SINGLE_PRODUCT_REQUEST
    }
}

const oneProductSuccess = (data) => {
    return {
        type: ProductType.SINGLE_PRODUCT_SUCCESS,
        payload: data
    }
}

const oneProductFail = (error) => {
    return{
        type: ProductType.SINGLE_PRODUCT_FAILURE,
        payload: error
    }
}

const clearError = () => {
    return {
        type: ProductType.CLEAR_ERRORS
    }
}



export const getProduct = (keyword = "", currentPage = 1, price = [500, 50000], category, ratings = 0) => async (dispatch) => {
    try {
        dispatch(fetchProductRequest())
        
        let link = `${config.BASE_URL}/v1/product/all-products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lt]=${price[1]}&ratings[gte]=${ratings}`
        
        if (category){
          link = `${config.BASE_URL}/v1/product/all-products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lt]=${price[1]}&category=${category}&ratings[gte]=${ratings}`
        }
        const { data } = await axios.get(link)
        console.log('response here', data)
        
        dispatch(fetchProductSuccess(data))
        
    } catch (error) {
        console.log(error)
        dispatch(fetchProductFail(error.message))
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(oneProductRequest())
        
        const response = await axios.get(`${config.BASE_URL}/v1/product/one-product/${id}`)
        console.log('data',response.data)
        
        dispatch(oneProductSuccess(response.data))
        
    } catch (error) {
        console.log(error)
        dispatch(oneProductFail(error.message))
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch(clearError())
}