import styled from "styled-components";

export const SideBody = styled.div`
  display: grid;
  grid-template-columns: 75% 30%;
  height: 85vh;
  position: fixed;
  align-items: center;
  width: ${(props) => props.status ? 'unset' : 'fit-content'};
  z-index: 30;  
`

export const SideContent = styled.div`
  display: ${(props) => props.status ? 'none' : 'block'};
  width: 100%;
  height: 100%;
  padding: 2rem 0 0 1.5rem ;
 
  p{
    margin: 1rem 0;
  }
  
  a{
    text-decoration: none;
    
  }
`

export const SideBarToggle = styled.div`
  z-index: 50;
  margin: auto;
  
  svg{ 
    font-size: 2rem;
    color: #c5d86d;
  }
    /* margin-top: -10rem; */
`