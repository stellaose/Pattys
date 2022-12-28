/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom'
import useOutsideClick from '../../../hooks/useOutsideClick.js';
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
        // LeftNav,
        EndNav,
        EndNavList,
        MidNav,
        Nav,
        NavbarBody,
        NavBarDropdown,
        NavBarDropNav,
        NavImg,
        PageDiv,
        RightNav } from '../../../Stylesheets/Navbar.styled.js';

const NavBar = () => {
    const [nav, setNav ] = useState(false);
    const [page, setPage] = useState(false)
    const [drop, setDrop] = useState(false);


    const handleDrop = () => {
        setDrop(!drop)
    }
    
    const closeBar = () => {
        setPage(false)
    }
    
    const closeDrop = () => {
        setDrop(false)
    }
    
    const closeNav = () => {
        setNav(false)
    }
    
    const location = useLocation()
    
    const ref = useOutsideClick(closeBar)
    return (
        <Nav>
            <NavbarBody>
                <Link to = '/'>
                    <NavImg src='/asset/logo.png'/>
                </Link>
                
                <MidNav>
                    <NavLink to = 'product' exact='true' activeclassName = 'active'>
                        <h3>
                            Shop
                        </h3>
                    </NavLink>
                    
                    <NavLink to='sales' exact='true' activeclassName = 'active'>
                         <h3>
                            Sales
                        </h3>
                    </NavLink>
                    
                    <h3 onClick={() => setPage(!page)} activeclassName = 'active'>
                        Pages
                    </h3>
                    
                    {page && (
                        <PageDiv ref={ref}>
                            <NavLink to = 'about-us' exact='true' activeclassName = 'active' onClick={closeBar}>
                                <p>About us</p>
                            </NavLink>
                        </PageDiv>
                    )}
                    
                    <NavLink to ='contact-us' exact='true' activeclassName = 'active'>
                        <h3>
                            Contact Us
                        </h3>
                    </NavLink>
                    
                </MidNav>
                
                <RightNav>
                    <p>
                        <CiSearch/>
                    </p>
                    
                    <NavLink to = 'favourite' exact='true' activeclassName= 'active'>
                        <p>
                            <CiHeart/>
                        </p>
                        
                    </NavLink>
                    
                    <NavLink to = 'cart' exact='true' activeclassName= 'active'>
                        <p>
                            <CiShoppingCart/>
                        </p>
                        
                    </NavLink>

                    <NavBarDropNav onClick={handleDrop}>
                        <Link to = '#' >
                            <CiUser/>
                        </Link>
                            

                        {drop && (
                            <div>
                                <NavBarDropdown>
                                {
                                    location.pathname === "/login" ? (
                                        <li>
                                            <Link to="/register">
                                                Register
                                            </Link>
                                        </li>
                                        
                                    ) : location.pathname === '/register' ? (
                                        <li>
                                            <Link to="/login">
                                                Login
                                            </Link>
                                        </li>
                                        
                                    ) : (
                                        <>
                                            <li>
                                                <NavLink to="login" exact='true' activeclassName= 'active' onClick={closeDrop}>
                                                    Login
                                                </NavLink></li>
                                            <li>
                                                <NavLink to="register" exact='true' activeclassName= 'active' onClick={closeDrop}>
                                                    Register
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
                                    
                                </NavBarDropdown>   
                            </div>
                        )}
                        
                    </NavBarDropNav>
                
                    <EndNav onClick={() => setNav(!nav)}>
                    {nav? 
                        <GrClose /> : <GrMenu />
                    }
                    </EndNav>
                    {nav && ( 
                        <EndNavList>
                        <NavLink to = 'product' exact='true' activeclassName = 'active' onClick={closeNav}>
                            <h3>
                                Shop
                            </h3>
                        </NavLink>
                        
                        <NavLink to='sales' exact='true' activeclassName = 'active' onClick={closeNav}>
                            <h3>
                                Sales
                            </h3>
                        </NavLink>
                        {page && (
                            <PageDiv ref={ref}>
                                <NavLink to = 'about-us' exact='true' activeclassName = 'active' onClick={closeBar}>
                                    <p>About us</p>
                                </NavLink>
                            </PageDiv>
                        )}
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
        
    )
}

export default NavBar;