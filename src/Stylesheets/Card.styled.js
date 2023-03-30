import styled from "styled-components";

export const LandingAbout = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    width: 85%;
    margin: 2rem  auto 3rem;
    padding: 4rem 1rem 1rem;
    gap: 6rem;
    
    @media (max-width:1200px){
        gap: 4rem;
    }
    
    @media (max-width:1000px){
        gap: 3rem;
    }
    
    @media (max-width:700px){
        grid-template-columns: auto;
        gap: 1rem;
        margin: 2rem auto 3rem;
    }
    
    @media (max-width:600px){
        width: 90%;
        gap: 0;
    }
    
    @media (max-width:400px){
        width: 94%;
        padding: 3rem 0.5rem;
    }
`

export const AboutImg = styled.img`
    width: 100%;
    
    @media (max-width:700px){
        width: 40%;
    }
`

export const AboutDiv = styled.div`
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
    
    p{
        color: #aeaeac;
        font-weight: 600;
        margin-top: 1.5rem;
        font-size: 1.1rem;
        line-height: 2rem;
        
        @media (max-width:800px){
            font-size: 1rem;
        }
            
        @media (max-width:600px){
            font-size: 0.9rem;
            line-height: 1.7rem;
        }
        
        @media (max-width:300px){
            font-size: 0.85rem;
            line-height: 1.3rem;
        }
    }
    
    img{
        width: 30%;
        
        @media (max-width:400px){
            width: 40%;
        }
    }
`