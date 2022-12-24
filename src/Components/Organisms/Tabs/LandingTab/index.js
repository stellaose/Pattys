import React from 'react'
import { LandingTabBody } from '../../../../Stylesheets/Tabs.styled'
import TabComponent from './TabComponent'


const LandingTab = () => {
    return (
        <>
            <LandingTabBody>
                <h2>Featured Products</h2>
                <TabComponent/>
                
            </LandingTabBody>
        </>
    )
}

export default LandingTab