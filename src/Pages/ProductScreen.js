import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getProductDetails } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component'
import { LeftImg, LoadingSection,
         OtherSection,
         PriceSection,
         ProductLeftScreen,
         ProductRightScreen,
         ProductScreenBody, 
         ProductScreenContent,
         ReviewSection,
         ShareSection} from '../Stylesheets/Product.styled';
import { FacebookShareButton } from 'react-share';


const ProductScreen = () => {
    const dispatch = useDispatch()
    const  { id } = useParams()
    const { loading, error, product} = useSelector(state =>  state.productDetail)
    console.log('this is product', product)
    
    const ratingChanged = () => {
        
    }
    
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <>
            <ProductScreenBody>
            {loading ? (
                    
                    <>
                        <LoadingSection>
                        <div class="loader"></div>
                        </LoadingSection>
                    </>
                    
                    ) : (
                        <>
                            <ProductScreenContent>
                                <ProductLeftScreen>
                                    {product?.images && 
                                        product?.images.map((item) => {
                                            return(
                                                <LeftImg 
                                                    key={item?.url}
                                                    src={item?.url}
                                                />
                                            )
                                        })}
                                </ProductLeftScreen>
                                <ProductRightScreen>
                                    <h2>{product?.name}</h2>
                                    <ReviewSection>
                                        <p style={{marginTop: '-0.001rem'}}>
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
                                        
                                        <p>{product?.ratings}.0</p>
                                        <p>|</p>
                                        <p>
                                            {product?.numOfReviews === 0 ? ' no' : product?.numOfReviews} {
                                                product?.numOfReviews > 1 ? 'reviews' : 'review'
                                            }
                                        </p>         
                                    </ReviewSection>
                                    
                                    <PriceSection>
                                        <p>&#8358;{product?.price}</p>
                                    </PriceSection>
                                    
                                    
                                    <OtherSection>
                                        {
                                            product?.color &&product?.color.map((data) => {
                                                return (
                                                    <div>
                                                        <p>{data}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <p>{product?.color[0]}</p>
                                        <p>, {product?.color[1]}</p>
                                        <p>, {product?.color[2]}</p> */}
                                        
                                    </OtherSection>
{/*                                     
                                    <ShareSection>
                                        <h3>Share</h3>
                                        <FacebookShareButton
                                            url={`https://pattys.vercel.app/shop/${id}`}
                                        />
                                    </ShareSection> */}
                                    
                                </ProductRightScreen>
                                
                            </ProductScreenContent>
                            
                            
                        </>
                    )}
            </ProductScreenBody>
            
            {error && 'An error occurred. Please try again'}
        </>
    )
}

export default ProductScreen