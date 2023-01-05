import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component';
import Pagination from 'react-js-pagination';
import {   
    Img,
        Item,
        LoadingSection,
        Map, 
        Name, 
        ProductContent, 
        ProductsListBody, 
        ProductsContainer, 
        ReviewStar,
        PaginationBody} from '../Stylesheets/Product.styled';

const Product = () => {
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1)
    const { loading, error, products, productCount, resultPerPage } = useSelector(state => state.products)
    
    const { keyword } = useParams()
    
    const setCurrentPageNo = (e) => {
      setCurrentPage(e)
    }
    
    useEffect(() => {
        dispatch(getProduct(keyword))
    }, [dispatch, keyword])
    
    const ratingChanged = () => {
        
    }
    
    return (
      <>
        <ProductsListBody>
          {loading ? (
            <>
              <LoadingSection>
                <div class="loader"></div>
              </LoadingSection>
            </>
          ) : (
              <ProductsContainer>
                  <ProductContent>
                    {
                      products && products?.map((product) => {
                        return (
                          <Map key={product?._id}>
                            <Link to= {`/shop-now/shop/${product?._id}`}>
                              <Img src = {product?.images[0]?.url} alt=""/>
                            </Link>
                                            
                            <Name>
                              <Item>
                                <Link to= {`/shop-now/shop/${product?._id}`}>
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
                            
                    {error && 'An error occurred. Please try again'}
                  </ProductContent>
                  
                  <PaginationBody>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productCount}
                      onChange={setCurrentPageNo}
                      nextPageText='Next'
                      prevPageText='Prev'
                      firstPageText='First'
                      LastPageText='Last'
                      itemClass='page-item'
                      linkClass= 'page-link'
                      activeClass='pageItemActive'
                      activeLinkClass = 'pageLinkActive'
                    />
                  </PaginationBody>
              </ProductsContainer>
          )}
        </ProductsListBody>
      </>
    )
}

export default Product