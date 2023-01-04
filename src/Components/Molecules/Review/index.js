import React from 'react'
import { 
        FormBody, 
        FormDiv, 
        FormLabel, 
        FormReview, 
        InputBtnDiv, 
        InputButton, 
        TextArea} from '../../../Stylesheets/Tabs.styled'

const ReviewForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  // const handleChange = (e) => {
  //   e.target.value()
  // }
  return (
    <>
      <FormBody>
        <h3>Leave a Review</h3>
        <FormReview onSubmit = {handleSubmit}>
          <FormDiv>
            <FormLabel htmlFor="Comment">
              Comment
            </FormLabel>
            <br/>
            <TextArea
              placeholder="Comment"
              name="Comment"
              required
            />
            
            <InputBtnDiv>
              <InputButton type="submit"   value="Leave Review" />
            </InputBtnDiv>
          </FormDiv>
          
        </FormReview>
      </FormBody>
    </>
  )
}

export default ReviewForm