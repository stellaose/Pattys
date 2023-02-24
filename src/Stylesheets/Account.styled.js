import styled from "styled-components";

export const AccountGrid = styled.div`
 background-color: #f7f7f2;
 padding: 6rem 0 1rem; 
`

export const AccountBody = styled.div`
  background-color: #f7f7f2;
  padding: 1rem 0 1rem 12rem;
  /* max-height: 32.5rem;
  height: 32.5rem; */
  max-height: 34rem;
    height: 34rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  @media (max-width:1000px){
    padding: 1rem 0 1rem 11rem;
  }
  
  @media (max-width: 600px){
    padding: 1rem 0 1rem;
    max-height: 37rem;
    height: 37rem;
  }
`