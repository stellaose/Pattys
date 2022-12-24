import React from 'react'
import { LandingTabBody, LandingTabContent } from '../../../../Stylesheets/Tabs.styled'
import TabComponent from './TabComponent'


const LandingTab = () => {
    return (
        <>
            <LandingTabBody>
                <LandingTabContent>
                    <h2>Introduce</h2>
                    <TabComponent/>
                </LandingTabContent>
                
            </LandingTabBody>
        </>
    )
}

export default LandingTab