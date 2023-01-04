import React from 'react'
import { Link } from 'react-router-dom'
import { 
        CollectionsBody, 
        CollectionsContent, 
        CollectionsOne,
        CollectionsTwo} from '../../../Stylesheets/Organism.styled'

const Collections = () => {
    return (
        <>
            <CollectionsBody>
                <h2>Collections</h2>
                
                <CollectionsContent>
                     <CollectionsOne>
                        <div>
                            <h2>Adidas Sports Performance Socks Light Nosh 3PP</h2>
                            <p>The adidas logo adds a sporty finishing touch.</p>
                            
                            <Link to = '/shop'>
                                <button>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                        
                        <img src="/asset/Landing/collect.jpg" alt=""/>
                    </CollectionsOne>
                    
                    <CollectionsTwo>
                        <h2>Basic Colour Caps</h2>
                        <p>Unisex dope facecap made from 100 percent cotton material</p>
                        <img src="/asset/Landing/collectTwo.jpg" alt=""/>
                    </CollectionsTwo>
                </CollectionsContent>
               
            </CollectionsBody>
        </>
    )
}

export default Collections