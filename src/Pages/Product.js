import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component'
import Loader from 'react-loaders';
import {   
    Img,
        Item,
        Map, 
        Name, 
        ProductContent, 
        ProductsBody, 
        ProductsContainer, 
        ReviewStar} from '../Stylesheets/Product.styled';

const Product = () => {
    const dispatch = useDispatch();
    const { loading, error, products, productCount } = useSelector(state => state.products)
    
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    
    const ratingChanged = () => {
        
    }
    
    return (
        <>
            <ProductsBody>
                {loading ? (
                    <Loader type='line-scale'/>
                    ) : (
                    <ProductsContainer>
                        <ProductContent>
                            {
                                products && products?.map((product) => {
                                    return (
                                        <Map key={product?._id}>
                                            <Link to= {`/shop/${product?._id}`}>
                                                <Img src = {product?.images[0]?.url} alt=""/>
                                            </Link>
                                            
                                            <Name>
                                                <Item>
                                                    
                                                    <Link to= {`/shop/${product?._id}`}>
                                                        <h3>{product?.name}</h3>
                                                        
                                                    
                                                    </Link>
                                                    <ReviewStar>
                                                        <p>&#8358;{product?.price}</p> 
                                                        <p >
                                                        <ReactStars 
                                                        edit={false}
                                                       value={product?.ratings}
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={window.innerWidth < 600 ? 15 : 20}
                                                        color="#260c1a"
                                                        activeColor="#f05d23"
                                                        /> 
                                                        </p>
                                                        
                                                        
                                                    </ReviewStar>
                                                    <small>({product?.numOfReviews === 0 ? ' no' : product?.numOfReviews} {
                                                        product?.numOfReviews > 1 ? 'reviews' : 'review'
                                                    })</small> 
                                                </Item>
                                                
                                            </Name>
                                            
                                            
                                        </Map>
                                    )
                                })
                            }
                            
                            {error && 'An error occured. Please try again'}
                        </ProductContent>
                        
                    </ProductsContainer>
                )}
                
               
            </ProductsBody>
        </>
    )
}

export default Product