import styled from "styled-components";

export const EmptyOrder = styled.div`
  align-items: center;
  margin: auto;
  text-align: center;
  margin-top: 3rem;
  
  svg{
    font-size: 2rem;
    
    @media (max-width: 600px){
      font-size: 1.5rem;
    }
  }

  p{
    text-align: center;
  }
`