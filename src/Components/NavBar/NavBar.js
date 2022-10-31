import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faXmark, faShoppingBag, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import {
        LeftNav,
        Nav,
        NavbarBody,
        NavBarDropdown,
        NavBarDropNav,
        NavImg,
        RightList,
        RightList2,
        RightNav,
        RightNavList} from '../../Stylesheets/Navbar.styled.js';

const NavBar = () => {
  const [nav, setNav ] = useState(false);
  const [drop, setDrop] = useState(false);

  const location = useLocation();

  const handleDrop = () => {
    setDrop(!drop)
  }
  return (
    <Nav>
        <NavbarBody>
          <RightNav onClick={() => setNav(!nav)}>
          {nav? 
            <FontAwesomeIcon icon={faXmark} size={'xl'} /> : <FontAwesomeIcon icon={faBars} size={'xl'} />
          }
          </RightNav>
          {nav && ( 
              <RightNavList>
                <RightList>
                  Shop Men
                </RightList>

                <RightList>
                  Shop Men
                </RightList>

                <RightList>
                  Shop Men
                </RightList>

                <RightList2>
                  <RightList>
                    Shop Men
                  </RightList>

                  <RightList>
                    Shop Men
                  </RightList>

                  <RightList>
                    Shop Men
                  </RightList>

                  <RightList>
                    Shop Men
                  </RightList>
                </RightList2>
              </RightNavList>
          )}
          
          <Link to = '/'>
            <NavImg src='/asset/pattys-logo.png'/>
          </Link>
          
          <LeftNav>
            <Link to = 'favourite'>
              <FontAwesomeIcon icon={faHeart} size={'xl'} />
            </Link>
            
            <Link to = 'cart'>
               <FontAwesomeIcon icon={faShoppingBag} size={'xl'} />
            </Link>

            <NavBarDropNav onClick={handleDrop}>
            <Link to="#" >
            <FontAwesomeIcon icon={faUser} size={'xl'} /> <FontAwesomeIcon icon={faChevronDown} size={'sm'} />
            </Link>

            {drop && (
                <div>
                    <NavBarDropdown>
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="register" >Register</Link></li>
                    </NavBarDropdown>   
                </div>
            )}
            
        </NavBarDropNav>
           
          </LeftNav>
        </NavbarBody>
    </Nav>
    
  )
}

export default NavBar;