import styled, { keyframes} from "styled-components";

const shine = keyframes`
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
`
export const DashboardBody = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 2rem 0;
  
  @media (max-width:1000px){
    padding: 1rem 1rem 0 0;
  }
  
`

export const DashboardContent = styled.div`
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  width: 85%;
  margin: 1rem auto;
  padding: 2rem;
  
  @media (max-width:1000px){
    margin: auto;
  }
  
  @media (max-width:600px){
    margin: auto;
    padding: 2rem 1rem;
  }
  
  @media (max-width:430px){
    padding: 2rem 0.5rem;
  }
  
  h1{
    font-weight: 700;
    font-size: 3rem;
    background: linear-gradient(90deg, #260c1a,  #c5d86d, #260c1a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
    background-size: 80%;
    animation: ${shine} 5s linear infinite;
    position: relative;
    
    @media (max-width:1000px){
      font-size:2.5rem;
    }
    
    @media (max-width:800px){
      font-size:2rem;
    }
    
    @media (max-width:600px){
      font-size:1.8rem;
    }
    
    @media (max-width:400px){
      font-size:1.6rem;
    }
    
    @media (max-width:300px){
      font-size:1.3rem;
    }
  }
`