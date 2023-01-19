import React, {useState} from 'react'
import { TabItem, TabContent } from '../TabItem';
import { BiPurchaseTag } from 'react-icons/bi'
import { MdSpaceDashboard, MdFavoriteBorder } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri'
import { TbJewishStar } from 'react-icons/tb'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Favourite from './Favourite'
import Wishlist from './Wishlist'
import Order from './Order'

import { 
        LandingTab,
        AccountTabItem,
        AccountLink } from '../../../../../Stylesheets/Tabs.styled';


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("dash");
    
    return (
      <>
        <AccountTabItem>
          <AccountLink >
            <TabItem svg={<MdSpaceDashboard/>} title='Dashboard' id="dash" activeTab={activeTab} setActiveTab={setActiveTab}  className = 'accItem'/>
                        
            <TabItem svg={<RiProfileLine/>} title="Profile" id="profile" activeTab={activeTab} setActiveTab={setActiveTab} className = 'accItem'/>
        
            <TabItem svg={<TbJewishStar/>} title="Wishlist" id="wish" activeTab={activeTab} setActiveTab={setActiveTab} className = 'accItem'/>
                        
            <TabItem svg={<MdFavoriteBorder/>} title="Favourite" id="fav" activeTab={activeTab} setActiveTab={setActiveTab} className = 'accItem'/>
                    
            <TabItem svg={<BiPurchaseTag/>} title="Orders" id="ord" activeTab={activeTab} setActiveTab={setActiveTab} className = 'accItem'/>
                        
          </AccountLink>
                    
          <LandingTab>
            <TabContent id="dash" activeTab={activeTab}>
              <Dashboard/>
            </TabContent>
                    
            <TabContent id="profile" activeTab={activeTab}>
              <Profile/>
            </TabContent>
                    
            <TabContent id="wish" activeTab={activeTab}>
              <Wishlist/>
            </TabContent>
                      
            <TabContent id="fav" activeTab={activeTab}>
              <Favourite/>
            </TabContent>
                    
            <TabContent id="ord" activeTab={activeTab}>
              <Order/>
            </TabContent>
          </LandingTab>
        </AccountTabItem>
      </>
    )
}

export default TabComponent