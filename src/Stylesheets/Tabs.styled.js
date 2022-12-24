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

export const LandingTabItem = styled.div`
    display: block;
`

export const TabLink = styled.div`
    display: flex;
    margin: 1rem 0 2rem;
    float: right;
    right: 0;
        
        @media (max-width:700px){
            margin-top: 1rem;
            /* overflow-x: auto; */
        }
        
        @media (max-width:600px){
            display: grid;
            grid-template-columns: 7rem 7rem 7rem 7rem;
            float: unset;
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

export const LandingTab = styled.div`
` 


export const SellerTab = styled.div`
    padding: 3rem 0;
`

export const ProductTab = styled.div`
    padding: 3rem 0;
`

export const ArrivalTab = styled.div`
    padding: 3rem 0;
`

export const Tab = styled.div`
    padding: 5rem 0 1rem;
    
`

export const Name = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    
    p{
        svg{
            font-size: 1.5rem;
        }
    }
`

export const Item = styled.div`
    width: 80%;
    
    h3{
        font-size: 1.1rem;
        color: #260c1a;
        line-height: 1.5rem;
        
        @media (max-width:1000px){
            font-size: 1.05rem;
        }
        
        @media (max-width:600px){
            font-size: 1rem;
        }
        
        @media (max-width:400px){
            font-size: 0.95rem;
        }
        
        @media (max-width:300px){
            font-size: 0.9rem;
        }
    }
    
    p{
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: #aeaeac;
        font-weight: 600;
        
        @media (max-width:1000px){
            font-size: 1.15rem;
        }
        
        @media (max-width:600px){
            font-size: 1.1rem;
        }
        
        @media (max-width:400px){
            font-size: 1.05rem;
        }
        
        @media (max-width:300px){
            font-size: 1rem;
        }
    }
`

export const Body = styled.div`
    /* padding: 3rem 0; */
    
    display: grid;
    grid-template-columns: 21vw 21vw 21vw 21vw;
    gap: 1rem;
    
    @media (max-width:1200px){
        grid-template-columns: 30vw 30vw 30vw;
    }
    
    @media (max-width:900px){
        grid-template-columns: auto auto;
    }
    
    @media (max-width:500px){
        grid-template-columns: auto;
        align-items: center;
    }
`

export const Map = styled.div`
    border-radius: 5px;
`
export const Img = styled.img`
    width: 100%;
    height: 16rem;
    
    @media (max-width:500px){
        height: fit-content;
        width: 96%;
        text-align: center;
    }
`