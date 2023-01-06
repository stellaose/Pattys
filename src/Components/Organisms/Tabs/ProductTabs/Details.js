import React from 'react'
import { DescriptionHeight,
        LeftSideImg,
        LineHeight, 
        RightSide} from '../../../../Stylesheets/Product.styled'
import ReviewForm from '../../../Molecules/Review'
import ReactStars from "react-rating-stars-component";


export const Review = ({review}) => {
 const ratingChanged = () => {
  
 }
  return (
    <>
      <div>
        <ReviewForm/>
        {review.length > 0 ? (
          review?.map((item) => {
            return(
              <LineHeight>
                <LeftSideImg>
                  <img src="/asset/profile.jpg" alt="" loading='eager'/>
                </LeftSideImg>
                
                <RightSide>
                <p>
                  <ReactStars
                    edit={false}
                    value={item?.rating}
                    count={5}
                    onChange={ratingChanged}
                    size={window.innerWidth < 600 ? 15 : 20}
                    color="#260c1a"
                    activeColor="#f05d23"
                  />
                </p>
                {/* <br/> */}
                <p style={{fontWeight: 600, marginTop: '0.5rem', color: '#aeaeac'}}>{item?.name}</p>
                <p>{item?.comment}</p>
                </RightSide>
                
              </LineHeight>
            )
          })
       ) : ('No reviews have been added yet')}
      </div>
    </>
  )
}

export const Description = ({description}) => {
  return(
    <div>
      {description && description?.map((item) => {
        return(
          <DescriptionHeight key={item?._id}>
            <h3>{item?.head ? item?.head : null}</h3>
            
            {item?.details && item?.details.map((data) => {
              return(
                <div>
                  <li>{data}</li>
                </div>
              )
            })}
          </DescriptionHeight>
        )
      })}
    </div>
  )
}