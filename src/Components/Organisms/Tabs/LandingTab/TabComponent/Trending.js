import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Data from '../Database';
import { 
        AiOutlineHeart,
        AiFillHeart } from 'react-icons/ai'
import { 
        Body, 
        Img, 
        Tab, 
        Item, 
        Map, 
        Name} from '../../../../../Stylesheets/Tabs.styled'

const Trending = () => {
    const [ click, setClick ] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <Tab>
                <Body>
                    {Data.map((data) => (
                        <Map key={data.id}>
                            <Link to = {`/product/${data.id}`}>
                                
                                <Img src={data.img} alt=""/>
                            </Link>
                                
                            <Name>
                                <Item>
                                    <Link to = {`/product/${data.id}`}>
                                    
                                    <h3>{data.name}</h3>
                                    </Link>
                                    
                                    <p>&#8358;{data.price}</p> 
                                </Item>
                                <p>
                                        {click ? <AiOutlineHeart onClick={handleClick}/> : <AiFillHeart onClick={handleClick}/>}
                                </p>
                                    
                            </Name>
                                
                        </Map>
                        
                    ))}
                </Body>
            </Tab>
        </>
    )
}

export default Trending