import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../Redux/Actions/ProductAction';
import ReactStars from 'react-rating-stars-component';
import Pagination from 'react-js-pagination';
import {
        CategoryBody,
        FilterContainer, 
        Img,
        Item,
        LoadingSection,
        Map, 
        Name, 
        ProductContent, 
        ProductsListBody, 
        ProductsContainer, 
        RangeBody,
        ReviewStar,
        PaginationBody,
        CategorySelect} from '../Stylesheets/Product.styled';
import Slider from '@mui/material/Slider';
import MetaData from '../Components/Layout/MetaData'

const categories = [
  'Shirts',
  'Shoes',
  'Dresses',
  'Skirts',
  'Trousers',
  'Sneakers',
  'Slides'  
]

const Product = () => {
  const dispatch = useDispatch();
    
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [ratings, setRatings] = useState(0)
  const [price, setPrice] = useState([500, 50000])
  const { loading, error, products, productCount, resultPerPage, filteredProduct } = useSelector(state => state.products)
  
  const { keyword } = useParams();
  const count = filteredProduct
    
  const setCurrentPageNo = (e) => {
    window.scroll(0, 0)
    setCurrentPage(e)
  }
  
  const ratingsHandler = (event, newRatings) => {
    setRatings(newRatings)
  }
  
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }
  
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
    
  useEffect(() => {
    if(error){
      dispatch(clearErrors())
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings))
  }, [dispatch, keyword, currentPage, price, category, ratings, error])
    
  const ratingChanged = () => {
        
  }
  
  return (
    <>
      <ProductsListBody>
        <ProductsContainer>
          <FilterContainer>
            <RangeBody>
              <p>Price</p>
              <Slider
                size= 'small'
                className="slider"
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby='range-slider'
                min={500}
                max={50000}
              />
              
            </RangeBody>
            
            <CategoryBody>
              <p>Category</p>
              
              <CategorySelect>
                <select name="Category" onChange={handleCategory}>
                  <option value="" disabled="disabled" selected="selected">Category</option>
                  {categories.map((category) => (
                    <>
                      <option value={category} key={category}>{category}</option>
                    </>
                    
                  ))}
                </select>
                    
              </CategorySelect>
            </CategoryBody>
            <RangeBody>
              <p>Ratings Above</p>
              <Slider
                size= 'small'
                className="slider"
                value={ratings}
                onChange={ratingsHandler}
                valueLabelDisplay="auto"
                aria-label="Volume"
                min={1}
                max={5}
              />
              
            </RangeBody>  
          </FilterContainer>

          {loading ? (
              <>
                <LoadingSection>
                  <div class="loader"></div>
                </LoadingSection>
              </>
            ) : (
              <>
                <MetaData title={'Product || Pattys E-Commerce'}/>
                <ProductContent>
                  {
                    products && products?.map((product) => {
                      return (
                        <Map key={product?._id}>
                          <Link to= {`/shop-now/shop/${product?._id}`} onClick={() => {window.scroll(0, 0)}}>
                            <Img src = {product?.images[0]?.url} alt=""/>
                          </Link>
                                                  
                          <Name>
                            <Item>
                              <Link to= {`/shop-now/shop/${product?._id}`} onClick={() => {window.scroll(0, 0)}}>
                                <h3>{product?.name.length > 52 ? `${product?.name.substring(0, 50)}...` : product?.name}</h3>
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
                {resultPerPage <= count && (
                  <PaginationBody>
                    <Pagination
                      activePage = {currentPage}
                      itemsCountPerPage = {resultPerPage}
                      totalItemsCount = {productCount}
                      onChange = {setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="First"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </PaginationBody>
                )}
              </>
          )}

        </ProductsContainer>
      </ProductsListBody>
    </>
  )
}

export default Product