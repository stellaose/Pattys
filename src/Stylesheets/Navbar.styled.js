import styled from 'styled-components'

export const Nav = styled.div` 
    padding: 1.5rem 3rem 1rem;
    position: relative;
    color: #260c1a;
    background-color: #f7f7f2;
    
    @media (max-width: 1000px){
        padding: 1rem 2rem;
    }
    
    @media (max-width: 600px){
        padding: 1rem;
    }
    
    @media (max-width: 400px){
        padding: 1rem 0.5rem;
    }
`

export const NavbarBody = styled.div`
    justify-content: space-between;
    display: flex;
`

export const RightNav = styled.div`
    display: flex;
    flex-direction: row;
    
    a{
        text-decoration: none;
        color: #260c1a;
        
        &::after, &:focus, &:hover{
            color: #c5d86d;
        }
        
        &.active {
            color: #c5d86d;
        }
        
        p{
            svg{
                font-size: 1.8rem;
                margin: 0.5rem 0.7rem 1rem;
                cursor: pointer;
                
                @media (max-width:600px){
                    font-size: 1.5rem;
                    margin: 0.7rem 0.3rem 1rem;
                }
                
                &:hover{
                    color: #c5d86d;
                }
            }
        }
    }
    
    p{
        svg{
            font-size: 1.8rem;
            margin: 0.5rem 0.7rem 1rem;
            cursor: pointer;
            
            @media (max-width:600px){
                font-size: 1.5rem;
                margin: 0.7rem 0.3rem 1rem;
            }
            
            &:hover{
                color: #c5d86d;
            }
        }
    }
    
    
`

export const MidNav = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    
    a{
        text-decoration: none;
        color: #260c1a;
        
        &::after, &:focus, &:hover{
            color: #c5d86d;
        }
        
        &.active {
            color: #c5d86d;
        }

    }
    
    
    h3{
        text-transform: uppercase;
        font-weight: 800;
        margin: 0 1rem;
        cursor: pointer;
        
        &:hover{
            color: #c5d86d;
        }
    }
    
    @media (max-width:800px){
        display: none;
    }
`


export const NavImg = styled.img`
    height: 3rem;
    
    @media (max-width:1000px){
        height: 2.5rem;
    }
    
    @media (max-width:600px){
        height: 2rem;
        margin-top: 0.3rem;
    }
    
    @media (max-width:300px){
        height: 1.7rem;
    }
`

export const NavBarDropNav = styled.div`
    padding: 1px;
    position: relative;
    z-index: 40;
    
        svg{
            font-size: 1.8rem;
            margin: 0.5rem 1rem 1rem 0.5rem;
            
            @media (max-width:600px){
                font-size: 1.5rem;
                margin: 0.7rem 0.5rem 1rem;
            }
            
            &:hover{
                color: #c5d86d;
            }
        }

        a{
            
        }

        img{
            
        }

       div{
            position: absolute;
            align-items: center;
            margin-left: -2.5rem;
            padding: 1rem 1.5rem;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            background-color: white;
            z-index: 99; 
        }
`

export const PageDiv = styled.div`
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 2rem;
    margin-left: 9rem;
    padding: 2rem;
    height: max-content;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    z-index: 99; 
    
    a{
        background-color: transparent;
        
        &::after, &:focus, &:hover{
            color: #c5d86d;
        }
        
        &.active {
            color: #c5d86d;
        }
        p{
            &:hover{
                color: #FBD46D;
            }
        }
    }
`

export const NavBarDropdown = styled.ul`
    display: block;

    &:first-child {
        padding-top: 0.8em;
    }
    li{
        list-style-type: none;
        margin-bottom: 0.8rem;
        font-weight: 500;
        
        a{
            text-decoration: none;
        }
    } 
`

export const EndNav = styled.div`
    display: none;
    
    @media (max-width: 800px){
        display: unset;
        
        svg{
            font-size: 1.8rem;
            margin: 0.5rem 0.5rem 1rem;
            
            @media (max-width:600px){
                font-size: 1.5rem;
                margin: 0.7rem 0.5rem 1rem;
            }
            
            &:hover{
                color: #c5d86d;
            }
        }
    }
`

export const EndNavList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5rem;
    padding: 2rem;
    width: 80vw;
    height: max-content;
    overflow: auto;
    right: 0;
    font-size: 1.2rem;
    font-weight: 700;
    z-index: 50;
    background-color: rgba(247, 247, 242, 0.9);
    
    h3{
        margin: 1rem auto;
        
        &:hover{
            color: #c5d86d;
        }
    }
    
    p{
        margin: 0.5rem auto;
        
        svg{
            font-size: 2rem;
        }
        
        &:hover{
            color: #c5d86d;
        }
    }
`