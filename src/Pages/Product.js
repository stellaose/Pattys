import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/Actions/ProductAction";
import ReactStars from "react-rating-stars-component";
import Pagination from "react-js-pagination";
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
} from "../Stylesheets/Product.styled";
import Slider from "@mui/material/Slider";

const Product = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1000, 50000]);
  const {
    loading,
    error,
    products,
    productCount,
    resultPerPage,
    filteredProduct,
  } = useSelector((state) => state.products);

  // console.log('Filtered product', filteredProduct)

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price));
  }, [dispatch, keyword, currentPage, price]);

  const ratingChanged = () => {};

  let count = filteredProduct;

  return (
    <>
      <ProductsListBody>
        <ProductsContainer>
          <FilterContainer>
            <RangeBody>
              <p>Price</p>
              <Slider
                sx={{
                  height: 2,
                  margin: "0.5rem",
                  color: "#c5d86d",
                }}
                size="small"
                className="slider"
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={1000}
                max={50000}
              />
            </RangeBody>

            <CategoryBody>
              <p>Category</p>
            </CategoryBody>
            <div>Stella</div>
          </FilterContainer>

          {loading ? (
            <>
              <LoadingSection>
                <div class="loader"></div>
              </LoadingSection>
            </>
          ) : (
            <>
              <ProductContent>
                {products &&
                  products?.map((product) => {
                    return (
                      <Map key={product?._id}>
                        <Link
                          to={`/shop-now/shop/${product?._id}`}
                          onClick={() => {
                            window.scroll(0, 0);
                          }}
                        >
                          <Img src={product?.images[0]?.url} alt="" />
                        </Link>

                        <Name>
                          <Item>
                            <Link
                              to={`/shop-now/shop/${product?._id}`}
                              onClick={() => {
                                window.scroll(0, 0);
                              }}
                            >
                              <h3>
                                {product?.name.length > 52
                                  ? `${product?.name.substring(0, 50)}...`
                                  : product?.name}
                              </h3>
                            </Link>
                            <ReviewStar>
                              <p>&#8358;{product?.price}</p>
                              <p>
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
                            <small>
                              (
                              {product?.numOfReviews === 0
                                ? " no"
                                : product?.numOfReviews}{" "}
                              {product?.numOfReviews > 1 ? "reviews" : "review"}
                              )
                            </small>
                          </Item>
                        </Name>
                      </Map>
                    );
                  })}

                {error && "An error occurred. Please try again"}
              </ProductContent>

              {/* {resultPerPage > count && ( */}
              <PaginationBody>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productCount}
                  onChange={setCurrentPageNo}
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
              {/* )} */}
            </>
          )}
        </ProductsContainer>
      </ProductsListBody>
    </>
  );
};

export default Product;
