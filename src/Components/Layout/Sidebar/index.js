import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri'
import { TbJewishStar } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { 
          SidebarBody, 
          SideContent } from '../../../Stylesheets/Navbar.styled'

const Sidebar = () => {
  return (
    <>
      <SidebarBody>
        <SideContent>
          <NavLink to = 'profile' exact='true' activeclassName = 'active'>
            <>
            <RiProfileLine/> <span>Profile</span>
            </>
          </NavLink>
          
          <NavLink to = 'edit-profile' exact='true' activeclassName = 'active'>
            <>
              <FaUserEdit/> <span>Edit Profile</span>
            </>
          </NavLink>
          
          <NavLink to = 'wishlist' exact='true' activeclassName = 'active'>
            <>
              <TbJewishStar/> <span>Wishlist</span>
            </>
          </NavLink>
          
          <NavLink to = 'favourite' exact='true' activeclassName = 'active'>
            <>
              <MdFavoriteBorder/> <span>Favourite</span>
            </>
          </NavLink>
          
          <NavLink to = 'order' exact='true' activeclassName = 'active'>
            <>
              <BiPurchaseTag/> <span>Orders</span>
            </>
          </NavLink>
        </SideContent>
      </SidebarBody>
    </>
  )
}

export default Sidebar