import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'
import { 
        BtnInput,
        Button,
        Input,
        ModalOverlay,
        SearchContainer, 
        SearchModalInput} from '../../../Stylesheets/Modal.styled';
 
const SearchModal = (props) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  if(!props.show){
    return null;
  }
  
  
  const searchSubmitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()){
      navigate(`/shop-now/${keyword}`)
      props.onClose()
    } else{
      navigate('/shop-now')
      props.onClose()
    }
  }
  const handleRedirect = () => {
    props.onClose()
  }
    
    return (
      <>
        <ModalOverlay>
          <SearchContainer>
            <Button onClick={handleRedirect}><IoClose/></Button>
              <SearchModalInput>
                
                <br/>
                <form onSubmit={searchSubmitHandler}>
                  <Input 
                    type="text"
                    placeholder='Search a product...'
                    onChange={(e) => setKeyword(e.target.value)}
                  /><BtnInput type='submit' value='Search'/> 
                </form>
                   
                
              </SearchModalInput>
          </SearchContainer>
        </ModalOverlay>
      </>
    )
}

export default SearchModal