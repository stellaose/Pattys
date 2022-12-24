import styled from "styled-components";

export const LandingTabBody = styled.div`
    display: block;
    width: 90%;
    margin: 2rem  auto;
    padding: 2rem 1rem;
    
    @media (max-width:600px){
        width: 90%;
        padding: 2rem 0;
    }
    
    @media (max-width:400px){
        width: 94%;
    }
    
    h2{
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 700;
        
        @media (max-width:1000px){
            font-size: 1.5rem;
        }
        
        @media (max-width:600px){
            font-size: 1.4rem;
            margin-top: 1rem;
        }
        
        @media (max-width:400px){
            font-size: 1.3rem;
        }
    }
`

export const LandingTabContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width:700px){
        display: block;
    }
`

export const LandingTabItem = styled.div`
    
`

export const TabLink = styled.div`
    display: flex;
    margin: 1rem 0 2rem;
        
        @media (max-width:700px){
            margin-top: 1rem;
            /* overflow-x: auto; */
        }
        
        @media (max-width:600px){
            display: grid;
            grid-template-columns: 7rem 7rem 7rem 7rem;
            overflow-x: auto;
            white-space: nowrap;

            &::-webkit-scrollbar {
                display: none;
            }
        }
        
        @media (max-width:400px){
            grid-template-columns: 6.5rem 6.5rem 6.5rem 6.5rem;
            
        }
        
        @media (max-width:300px){
            grid-template-columns: 6rem 6rem 6rem 6rem;
            
        }
`
