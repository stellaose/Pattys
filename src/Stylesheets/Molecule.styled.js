import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 96%;
  margin: 0 auto 2rem;
  text-align: center;
  display: grid;
  grid-template-columns: 19.8rem 19.9rem 19.9rem;
  gap: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  @media (max-width:1000px){
    grid-template-columns: 19rem 19rem 19rem;
  }
  
  @media (max-width:600px){
    grid-template-columns: 17rem 17rem 17rem;
    width: 99%;
  }
  
  @media (max-width:400px){
    grid-template-columns: 15rem 15rem 15rem;
  }
  
  @media (max-width:500px){
    grid-template-columns: 13rem 13rem 13rem;
  }
`

export const RangeBody = styled.div`
  text-align: left;
  
  p{
    font-weight: 600;
  }
`


export const CategoryBody = styled.div`
  text-align: left;
  
  p{
    font-weight: 600;
  }
`