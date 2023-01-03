import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component'
import { ButtonSection, LeftImg, LoadingSection,
         OtherSection,
         PriceSection,
         ProductLeftScreen,
         ProductRightScreen,
         ProductScreenBody, 
         ProductScreenContent,
         ReviewSection,
         ShareSection} from '../Stylesheets/Product.styled';
import { 
        FacebookShareButton, 
        TwitterShareButton,
        WhatsappShareButton } from 'react-share';
import {   
        BsFacebook,
        BsTwitter,
        BsWhatsapp } from 'react-icons/bs'

const ProductScreen = () => {
    const dispatch = useDispatch()
    const  { id } = useParams()
    const { loading, error, product} = useSelector(state =>  state.productDetail)
    console.log('this is product', product._id)
    
    const shareUrl = `https://pattys.vercel.app/${product?._id}`
    
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
                                        
                                        <p>{product?.ratings < 1 ? 'no rating' : product?.ratings}</p>
                                        <p>
                                            {product?.numOfReviews === 0 ? ' no' : product?.numOfReviews} {
                                                product?.numOfReviews > 1 ? 'reviews' : 'review'
                                            }
                                        </p>  
                                        
                                        <p style={{fontWeight: 600}}>
                                            Status: {''}<span className={product?.stock < 1 ? 'red' : 'green'}>
                                                {product?.stock < 1 ? 'Out of Stock' : <span>{product?.stock} In Stock </span> }
                                            </span>
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
                                      
                                    </OtherSection>
                                    
                                    <ShareSection>
                                        <h3>Share</h3>
                                        <WhatsappShareButton
                                            url={shareUrl}
                                            title={`Checkout ${product?.name}. It is very affordable!`}
                                            quote={`Checkout ${product?.name}. It is very affordable!`}
                                            hashtag='#Pattys'
                                        >
                                            <BsWhatsapp color='#02df36'/>
                                        </WhatsappShareButton>
                                        <FacebookShareButton
                                            url={shareUrl}
                                            title={`Checkout ${product?.name}. It is very affordable!`}
                                            quote={`Checkout ${product?.name}. It is very affordable!`}
                                            hashtag='#Pattys'
                                        >
                                            <BsFacebook color='#1e4595'/>
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url={shareUrl}
                                            title={`Checkout ${product?.name}. It is very affordable!`}
                                            quote={`Checkout ${product?.name}. It is very affordable!`}
                                            hashtag='#Pattys'
                                        >
                                            <BsTwitter color='#1d9bf0'/>
                                        </TwitterShareButton>
                                    </ShareSection>
                                    
                                    <ButtonSection>
                                        <button>Add to Cart</button>
                                    </ButtonSection>
                                    
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