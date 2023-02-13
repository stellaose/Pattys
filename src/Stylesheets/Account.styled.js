import styled from "styled-components";

export const AccountGrid = styled.div`
 background-color: #f7f7f2;
`

export const AccountBody = styled.div`
  background-color: #f7f7f2;
  padding: 1rem 0 1rem 11rem;
  max-height: 32.5rem;
  height: 32.5rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  @media (max-width:1000px){
    padding: 1rem 0 1rem 10rem;
  }
  
  @media (max-width: 600px){
    padding: 1rem 0 1rem 2rem;
  }
  
  @media (max-width: 400px){
    padding: 1rem 0 1rem 1rem;
  }
`