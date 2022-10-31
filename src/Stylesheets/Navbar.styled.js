import styled from 'styled-components'

export const Nav = styled.div` 
    padding: 2rem 3rem;
    position: relative;
`

export const NavbarBody = styled.div`
    justify-content: space-between;
    display: flex;
    
`

export const RightNav = styled.div`

`

export const RightNavList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding: 1rem 0;
    left: 0;
    min-height: 10rem;
    width: 13rem;
    font-size: 1rem;
    font-weight: 600;
    z-index: 50;
    background-color: rgba(255, 255, 255, 0.8);

    @media (max-height: 600px){
        background: none;
    }
`

export const RightList = styled.div`
    margin-bottom: 0.5rem;
    flex-wrap: nowrap;
`

export const RightList2 = styled.div`
    margin-top: 1rem;
    flex-wrap: nowrap;
`

export const NavImg = styled.img`
    height: 2rem;
`

export const LeftNav = styled.div`
    display: flex;

        a{
           margin-left: 2.5rem;
           color: black;
           text-decoration: none;
        }
`

export const NavBarDropNav = styled.div`
    padding: 1px;
    background: transparent;
    position: relative;
    z-index: 40;

        a{
            text-transform: capitalize;
            overflow: hidden;
            background: transparent;
        }

        img{
            width: 2rem;
            margin-bottom: -0.5rem;
            margin-right: 0.3rem;
        }

       div{
            position: absolute;
            align-items: center;
            text-align: center;
            margin-left: 0rem;
            margin-top: 0.2rem;
            width: 6rem;
            height: 5rem;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 99; 
        }
`

export const NavBarDropdown = styled.ul`
    display: block;
    margin-left: -2.5rem;

     &:first-child {
        padding-top: 0.8em;
    }

        li{
            padding-top: 0.5rem;
            list-style-type: none;
            margin-bottom: 3px;
            font-weight: 600;
        } 
`