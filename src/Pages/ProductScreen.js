import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, getProductDetails } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component'
import Loader from 'react-loaders';

const ProductScreen = () => {
    const dispatch = useDispatch()
    const [id] = useParams()
    const { loading, error, product} = useSelector(state =>  state.products)
    
    console.log('This is the product', product)
    
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <div></div>
    )
}

export default ProductScreen