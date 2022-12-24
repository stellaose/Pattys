import React, {useState} from 'react';
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

const BestSeller = () => {
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
                            <Img src={data.img} alt=""/>
                            <Name>
                                <Item>
                                   <h3>{data.name}</h3>
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

export default BestSeller