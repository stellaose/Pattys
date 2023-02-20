import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiProfileLine, RiLockPasswordLine } from 'react-icons/ri'
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
          
          <NavLink to = 'change-password' exact='true' activeclassName = 'active'>
            <>
              <RiLockPasswordLine/> <span>Edit Password</span>
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
          
          <NavLink to = 'cart' exact='true' activeclassName = 'active'>
            <>
              <AiOutlineShoppingCart/> <span>Cart</span>
            </>
          </NavLink>
        </SideContent>
      </SidebarBody>
    </>
  )
}

export default Sidebar