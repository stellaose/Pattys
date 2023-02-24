import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f7f7f2;
  padding: 7rem 1rem 1rem;
  
`

export const AboutBody = styled.div`
  width: 70%;
  text-align: center;
  margin: auto;
  color: #260c1a;
  padding: 2rem;
  background-color: #fff;
  
  @media (max-width: 800px){
    width: 80%;
  }
  
  @media (max-width: 600px){
    padding: 2rem 1rem;
  }
  
  @media (max-width: 300px){
    padding: 2rem 0.5rem;
  }
  
  h1{
    font-size: 2rem;
    
    @media (max-width:1200px){
      font-size: 1.9rem;
    }
    
    @media (max-width:1000px){
      font-size: 1.8rem;
    }
    
    @media (max-width:800px){
      font-size: 1.7rem;
    }
    
    @media (max-width:600px){
      font-size: 1.6rem;
    }
    
    @media (max-width:400px){
      font-size: 1.5rem;
    }
    
    @media (max-width:300px){
      font-size: 1.3rem;
    }
  }
  
  p{
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    line-height: 1.5rem;
        
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

export const MissionPage = styled.div`
  margin: 3rem 0 2rem;
  
  p{
    text-align: left;
    line-height: 2rem;
  }
`

export const Img = styled.img`
  margin: 2rem 0;
  width: 80%;
  
  @media (max-width: 600px){
    width: 90%;
  }
`