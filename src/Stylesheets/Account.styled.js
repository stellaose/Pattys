import styled from "styled-components";

export const AccountGrid = styled.div`
  background-color: #f7f7f2;
  padding: 3rem 0 1rem; 
 
  @media (max-width:600px){
    padding: 6rem 0 1rem;
  }
`

export const AccountBody = styled.div`
  background-color: #f7f7f2;
  padding: 1rem 0 1rem 12rem;
  max-height: 35rem;
  height: 35rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  @media (max-width:1000px){
    padding: 1rem 0 1rem 11rem;
  }
  
  @media (max-width: 600px){
    padding: 1rem 0 1rem;
    max-height: 38rem;
    height: 38rem;
  }
`