import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getProductDetails } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component'
import Loader from 'react-loaders';

const ProductScreen = () => {
    const dispatch = useDispatch()
    const  { id } = useParams()
    const { loading, error, product} = useSelector(state =>  state.productDetail)
    console.log(product)
    
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <>
            <div>
                <h1>{product.name}</h1>
            </div>
        </>
    )
}

export default ProductScreen