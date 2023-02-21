/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillFacebook,
         AiFillTwitterCircle,
         AiFillLinkedin,
         AiOutlineInstagram} from 'react-icons/ai'
import { 
        CiSearch,
        CiHeart,
        CiShoppingCart, 
        CiUser } from 'react-icons/ci';
import { 
        GrMenu,
        GrClose } from 'react-icons/gr'
import { 
        HiOutlineLogin,
        HiOutlineLogout } from 'react-icons/hi'
import { MdAppRegistration } from 'react-icons/md'
import {
        EndNav,
        EndNavList,
        MidNav,
        Nav,
        NavbarBody,
        NavBarDropDiv,
        NavBarDropdown,
        NavBarDropNav,
        NavImg,
        RightNav } from '../../../Stylesheets/Navbar.styled.js';
import SearchModal from '../../Molecules/Modal/SearchModal.js';
import { logoutAction } from '../../../Redux/Actions/UserAction.js';

const NavBar = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [nav, setNav ] = useState(false);
  const [drop, setDrop] = useState(false);
  const [show, setShow] = useState(false);
  
  const { isAuthenticated, user } = useSelector(state => state.user)
  
  const savedUser = user?.savedUser
  
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutAction(navigate))
  }

  const handleDrop = () => {
    setDrop(!drop)
  }
    
  const closeDrop = () => {
    setDrop(false)
  }
    
  const closeNav = () => {
    setNav(false)
  }
    
  const location = useLocation()
    
  return (
    <>
      <Nav>
        <NavbarBody>
          <Link to = '/'>
            <NavImg src='/asset/logo.png'/>
          </Link>
                  
          <MidNav>
            <NavLink to = 'shop-now' exact='true' activeclassName = 'active'>
              <h3>
                Shop
              </h3>
            </NavLink>
                      
            <NavLink to = 'about-us' exact='true' activeclassName = 'active'>
              <h3>About us</h3>
            </NavLink>
                      
            <NavLink to ='contact-us' exact='true' activeclassName = 'active'>
              <h3>
                Contact Us
              </h3>
            </NavLink>
                      
          </MidNav>
                  
          <RightNav>
            <p onClick={() => setShow(true)}>
              <CiSearch/>
            </p>
                      
            <NavLink to = 'my-account/favourite' exact='true' activeclassName= 'active'>
              <p>
                <CiHeart/>
              </p>
                          
            </NavLink>
                      
            <NavLink to = 'my-account/cart' exact='true' activeclassName= 'active'>
              <p>
                <CiShoppingCart/>
              </p>
                          
            </NavLink>
              
            <NavBarDropNav onClick={handleDrop}>
              <Link to = '#' >
              {isAuthenticated ? (
                <>
                  <p>
                    {savedUser?.avatar && savedUser.avatar.map((item) => (
                      <img src={item?.url} key={item?.url} alt=""/>
                    ))} {' '}<span >{savedUser?.firstname}</span>
                  </p>
                </>
              ) : (<p><CiUser/></p>)}
              </Link>
               
              {
                isAuthenticated ? (<>
                  {drop && (
                    <NavBarDropDiv>
                      <NavBarDropdown>
                        <li >
                          <NavLink to="/my-account/profile" exact='true' activeclassName= 'active' onClick={closeDrop} style={{fontWeight: 700, color: '#c5d86d'}}>
                            {savedUser?.avatar ? (savedUser.avatar.map((item) => (
                              <img src={item?.url} key={item?.url} alt=""/>
                            ))) : (
                              <>
                                <img src="/asset/avatar.png" alt=""/>
                              </>
                            ) } {' '}
                            {savedUser?.firstname} {' '} {savedUser?.lastname}
                          </NavLink>
                        </li>
                        <hr/>
                        <br/>
                        <li>
                          <NavLink to="my-account/my-order" exact='true' activeclassName= 'active' onClick={closeDrop}>
                            My Orders
                          </NavLink>
                        </li>
                        
                        <hr/>
                        <br/>
                        <span onClick={handleLogout}><HiOutlineLogout/> Logout</span>
                        
                      </NavBarDropdown>
                    </NavBarDropDiv>
                  )}
                </>) : (
                  <>
                    {drop && (
                      <NavBarDropDiv>
                        <NavBarDropdown>
                          {
                            location.pathname === "/login" ? (
                              <li>
                                <NavLink to="/register">
                                  <MdAppRegistration/> Register
                                </NavLink>
                              </li>
                                                
                            ) : location.pathname === '/register' ? (
                              <li>
                                <Link to="/login">
                                <HiOutlineLogin/> Login
                                </Link>
                              </li>
                                                
                            ) : (
                              <>
                                <li>
                                  <NavLink to="login" exact='true' activeclassName= 'active' onClick={closeDrop}>
                                    <HiOutlineLogin/> Login
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="register" exact='true' activeclassName= 'active' onClick={closeDrop}>
                                    <MdAppRegistration /> Register
                                  </NavLink>
                                </li>
                              </>
                            )
                          }
                                            
                        </NavBarDropdown>   
                      </NavBarDropDiv>
                    )}
                  </>
                  
                )
              }               
              
            </NavBarDropNav>
                  
            <EndNav onClick={() => setNav(!nav)}>
              {nav? 
                <GrClose /> : <GrMenu />
              }
            </EndNav>
          {nav && ( 
            <EndNavList>
              <NavLink to = 'shop-now' exact='true' activeclassName = 'active' onClick={closeNav}>
                <h3>
                  Shop
                </h3>
              </NavLink>
                          
              <NavLink to = 'about-us' exact='true' activeclassName = 'active' onClick={closeNav}>
                <p>About us</p>
              </NavLink>
              
              <NavLink to ='contact-us' exact='true' activeclassName = 'active' onClick={closeNav}>
                <h3>
                  Contact Us
                </h3>
              </NavLink>
              
              <a href = 'https://www.instagram.com/stellaose/' target='_blank' rel='noreferrer' onClick={closeNav}>
                <p>
                  <AiFillFacebook/>
                </p>
              </a>
                          
              <a href = 'https://twitter.com/stellaose_' target='_blank' rel='noreferrer' onClick={closeNav}>
                <p>
                  <AiFillTwitterCircle/>
                </p>
              </a>
                          
              <a href = 'https://www.linkedin.com/in/stella-oseyomon-8a2836103' target='_blank' rel='noreferrer' onClick={closeNav}>
                <p>
                  <AiFillLinkedin/>
                </p>
              </a>
                          
              <a href = 'https://web.facebook.com/stella.oseyomon' target='_blank' rel='noreferrer' onClick={closeNav}>
                <p>
                  <AiOutlineInstagram/>
                </p>
              </a>
                              
            </EndNavList>
          )}
        </RightNav>
                  
        </NavbarBody>
      </Nav>
      
      <SearchModal onClose={() => setShow(false)} show={show}/>
    </>
    
        
  )
}

export default NavBar;