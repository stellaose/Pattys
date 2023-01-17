/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

const AllProducts = () => {
  const [ click, setClick ] = useState(false)
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
    
  const handleClick = () => {
    setClick(!click)
  }
    
  useEffect(() => {
    
    (async () => {
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
          <Body>
            {info.slice(0, 8).map((datei) => (
              <Map key={datei?._id}>
                <Link to = {`/shop-now/shop/${datei?._id}`} onClick={() => {window.scroll(0, 0)}}>
                  <Img src={datei?.images[0]?.url} alt=""/>
                </Link>
                                      
                <Name>
                  <Item>
                    <Link to = {`/shop-now/shop/${datei?._id}`} onClick={() => {window.scroll(0, 0)}}>
                      <h3>{datei?.name}</h3>
                    </Link>
                                          
                    <p>&#8358;{datei?.price}</p> 
                  </Item>
                        
                  <p>
                    {click ? <AiOutlineHeart onClick={handleClick}/> : <AiFillHeart onClick={handleClick}/>}
                  </p>
                                          
                </Name>
                                      
              </Map>
                              
            ))}
            
            
          
            {error && 'Something went wrong. Please try again later'}
          </Body>
      )}
       
        
        <MoreSection>
          <Link to='/shop-now' onClick={() => {window.scroll(0, 0)}}>
            <p>See more...</p>
          </Link>
        </MoreSection>
      </Tab>
    </>
  )
}

export default AllProducts