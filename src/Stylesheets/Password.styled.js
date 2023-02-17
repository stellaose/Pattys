import styled from "styled-components";


export const ChangeBody = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  padding: 1rem 1rem 2rem 0;
  
  @media (max-width:1000px){
    padding: 1rem 2rem 2rem 0;
  }
  
  h1{
    font-size: 2rem;
    text-align: center;
    
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
`

export const ChangeContent = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 8rem;
  
  @media (max-width:1000px){
    grid-template-columns: 45% auto;
    gap: 4rem;
    width: 85%;
  }
  
  @media (max-width:780px){
    grid-template-columns: auto;
    gap: 2rem;
    width: 90%;
  }
`

export const Map = styled.div`
  margin-top:2rem;
  text-align: center;
  
`
export const Img = styled.img`
  width: 16rem;
  border-radius: 5px;
  
  @media (max-width:1200px){
    width: 15rem;
  }
  
  @media (max-width:1000px){
    width: 14rem;
  }
  
  @media (max-width:800px){
    width: 13rem;
  }
  
  @media (max-width: 600px){
    width: 12rem;
  }
  
  @media (max-width: 400px){
    width: 10rem;
  }
  
  @media (max-width: 300px){
    width: 9rem;
  }
`

export const ChangeRight = styled.form`
  text-align: left;
  margin-top: 1rem;
`

export const Right = styled.div`
  margin: 1rem 0 1.3rem;
  
  @media (max-width:1000px){
    margin: 1rem 0;
  }
  
  @media (max-width:800px){
    margin: 1rem 0 0.5rem;
  }
  
  h4{
    font-size: 1.2rem;
    color: #aeaeac;
    font-weight: 600;
    margin-bottom: 0.5rem;
    
    @media (max-width:1000px){
      font-size: 1.15rem;
    }
    
    @media (max-width:600px){
      font-size: 1.1rem;
    }
    
    @media (max-width:400px){
      font-size: 1.05rem;
    }
    
    @media (max-width:300px){
      font-size: 1rem;
    }
  }
  
  p{
    font-size: 1.1rem;
    font-weight: 600;
    
    @media (max-width:1000px){
      font-size: 1.05rem;
    }
    
    @media (max-width:600px){
      font-size: 1rem;
    }
    
    @media (max-width:400px){
      font-size: 0.95rem;
    }
    
    @media (max-width:300px){
      font-size: 0.9rem;
    }
  }
  
  a{
    text-decoration: none;
  }
`

export const ChangeInput = styled.div`
  padding: 0.5rem 0 0.3rem;
  width: 80%;
  border: none;
  border-bottom: 1px solid #260c1a;
  background-color: transparent;
  
  span{
    svg{
      font-size: 1.5rem;
    }
  }

`

export const Input = styled.input`
  outline: none;
  font-size: 1rem;
  border: none;
  width: 90%;
  background-color: transparent;
  font-weight: 500;
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: none !important;
  }
  
  @media (max-width:600px){
      width: 85%;
    }
    
  @media (max-width:400px){
    font-size: 0.85rem;
  }
  
  @media (max-width:330px){
    width: 70%;
  }
 
  @media (max-width:300px){
    font-size: 0.8rem;
  }
`

export const OrderBtn = styled.input`
  padding: 0.7rem 3rem;
  background-color: #f05d23;
  border: 1px solid #f05d23;
  border-radius: 5px;
  font-size: 1.1rem;
  outline: none;
  color: #f7f7f2;
  font-weight: 600;
  margin: 2rem auto 0;
  cursor: pointer;
  
  &:hover {
    background: none;
    color: #f05d23;
  }
  
  @media (max-width:1000px){
    font-size: 1.05rem;
  }
    
  @media (max-width:600px){
    font-size: 1rem;
    padding: 0.5rem 2.5rem;
      
  }
    
  @media (max-width:400px){
    padding: 0.5rem 2rem;
    font-size: 0.95rem;
  }
    
  @media (max-width:300px){
    font-size: 0.9rem;
  }
`