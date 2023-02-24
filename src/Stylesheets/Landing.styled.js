import styled from "styled-components"

export const LandingBody = styled.div`
    padding: 7rem 1rem 1rem;
    background-color: #f7f7f2;
    
    @media (max-width:600px){
        padding: 6rem 1rem 1rem;
    }
    
`

export const HeroBody = styled.div`
    width: 96%;
    margin: 1rem auto;
    text-align: center;
    
    @media (max-width:600px){
        width: 100%;
    }
`
export const HeroGrid = styled.div`
    display: grid;
    width: 92%;
    margin: 0 auto;
    grid-template-columns: 20% 20% 20% 20%;
    /* grid-template-columns: auto auto auto auto; */
    gap: 4rem;
    
    @media (max-width:1200px){
        grid-template-columns: 24% 24% 24% 24%;
        gap: 1rem;
        width: 98%;
    }
    
    @media (max-width:900px){
        grid-template-columns: 35% 35%;
        gap: 1rem 6rem;
        justify-content: center;
        width: 96%;
    }
    
    @media (max-width:700px){
        grid-template-columns: 45% 45%;
        width: 100%;
        gap: 1rem;
    }
    
    @media (max-width:500px){
        grid-template-columns: 50% 50%;
        gap: 1rem 0;
    }
    
    @media (max-width:400px){
        grid-template-columns: 100%;
    }
`

export const BottomHero = styled.div` 
    display: block;
    text-align: start;
    
    h3{
        font-size: 1.3rem;
            
        @media (max-width:800px){
            font-size: 1.2rem;
        }
        
        @media (max-width:600px){
            margin-bottom: 0.5rem;
        }
            
        @media (max-width: 400px){
            font-size: 1.1rem;
        }
            
        @media (max-width:300px){
            font-size: 1rem;
        }
    }
    p{
        color: #aeaeac;
        font-weight: 600;
        font-size: 1.1rem;
        margin-top: 0.5rem;
        
        @media (max-width:800px){
            font-size: 1rem;
        }
            
        @media (max-width: 400px){
            font-size: 0.9rem;
        }
            
        @media (max-width:300px){
            font-size: 0.85rem;
        }
    }
`

export const BottomGrid = styled.div` 
    display: grid;
    grid-template-columns: 3% auto;
    gap: 3rem;
    
    
    svg{
        font-size: 1.8rem;
        color: #f05d23;
        text-align: center;
        margin: auto 0.5rem;
        
        @media (max-width:600px){
            font-size: 1.5rem;
        }
        
        @media (max-width:400px){
            font-size: 1.2rem;
        }
    }
    
    @media (max-width:600px){
        grid-template-columns: 5% auto;
        gap: 1rem 3rem;
    }
    
    @media (max-width:400px){
        grid-template-columns: 25% auto;
        gap: 1rem 0;
        width: 80%;
        margin: 0 auto;
    }
`