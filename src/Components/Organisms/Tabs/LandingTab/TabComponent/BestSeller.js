/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../../../../config';
import { 
        AiOutlineHeart,
        AiFillHeart } from 'react-icons/ai'
import { 
        Body, 
        Img, 
        Tab, 
        Item,
        LoadingSection, 
        Map, 
        Name,
        MoreSection} from '../../../../../Stylesheets/Tabs.styled'

const BestSeller = () => {
  const [ click, setClick ] = useState(false)
  const [info, setInfo] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
    
  const handleClick = () => {
    setClick(!click)
  }
  
  useEffect (() => {
    (async() => {
      try {
        setLoading(!loading)
        const {data} = await axios.get(`${config.BASE_URL}/v1/product/all-products`)
        setLoading(false)
        setInfo(data?.findProduct)
        
      } catch (error) {
        console.log(error)
        setError(true)
      }
    })()
  }, [])
  
  const data = info.filter( item => {
    return item?.sale === 'bestSeller'
  })
  
  return (
    <>
      <Tab>
        {loading ? (
          <>
            <LoadingSection>
              <p>Loading...</p>
            </LoadingSection>
          </>
        ) : (
          <>
            <Body>
              {data.slice(0, 8).map((item) => (
                <Map key={item?._id}>
                  <Link to = {`/shop-now/shop/${item?._id}`} onClick={() => {window.scroll(0, 0)}}>
                                    
                    <Img src={item?.images[0]?.url} alt=""/>
                  </Link>
                                    
                  <Name>
                    <Item>
                      <Link to = {`/shop-now/shop/${item?._id}`} onClick = {() => {window.scroll(0, 0)}}>
                        <h3>{item?.name}</h3>
                      </Link>
                                          
                      <p>&#8358;{item?.price}</p> 
                    </Item>
                    
                    <p>
                      {click ? <AiOutlineHeart onClick={handleClick}/> : <AiFillHeart onClick={handleClick}/>}
                    </p>
                                        
                  </Name>
                                    
                </Map>
                            
              ))}
            </Body>
          </>
        )}
          
          
          {error && 'Something went wrong. Please try again later'}
        
        <MoreSection>
          <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
            <p>See more...</p>
          </Link>
        </MoreSection>
      </Tab>
    </>
  )
}

export default BestSeller