import React, {useState} from 'react'
import { TabItem, TabContent } from '../../TabItem';
import BestSeller from './BestSeller'
import Trending from './Trending'
import NewArrivals from './NewArrivals'
import AllProducts from './AllProducts'
import { 
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
                    
                <div >
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
                </div>
            </LandingTabItem>
        </>
    )
}

export default TabComponent