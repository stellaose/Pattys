import React, {useState} from 'react'
import { TabItem, TabContent } from '../TabItem';
import BestSeller from './BestSeller'
import Trending from './Trending'
import NewArrivals from './NewArrivals'
import AllProducts from './AllProducts'
import { 
    LandingTab,
        LandingTabItem,
        TabLink } from '../../../../../Stylesheets/Tabs.styled';


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    
    return (
        <>
            <LandingTabItem>
                <TabLink >
                    <TabItem title="Best-Seller" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}  className = 'tabItem'/>
                        
                    <TabItem title="Trending"         id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} className = 'tabItem'/>
        
                    <TabItem title="New Arrivals" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} className = 'tabItem'/>
                        
                    <TabItem title="All Products" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} className = 'tabItem'/>
                        
                </TabLink>
                    
                <LandingTab>
                    <TabContent id="tab1" activeTab={activeTab}>
                        <BestSeller/>
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                        <Trending/>
                    </TabContent>
                    <TabContent id="tab3" activeTab={activeTab}>
                        <NewArrivals/>
                    </TabContent>
                    <TabContent id="tab4" activeTab={activeTab}>
                        <AllProducts/>
                    </TabContent>
                </LandingTab>
            </LandingTabItem>
        </>
    )
}

export default TabComponent