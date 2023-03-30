import styled from "styled-components";

export const CheckoutBody = styled.div`
  background-color: #f7f7f2;
  padding: 6rem 0 4rem;
  color: #260c1a;
  
  
  @media (max-width: 880px){
    padding: 7rem 0 4rem;
  }
`

export const CheckoutContainer = styled.div`
  width: 70%;
  margin: 2rem auto;
  align-items: center;
  
  @media (max-width: 1000px){
    width: 75%;
  }
  
  @media (max-width: 780px){
    width: 85%;
  }
  
  @media (max-width: 600px){
    width: 95%;
    margin: 2rem auto 0;
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

export const FormContent = styled.form`
  display: block;
  margin: 2rem 0;
`

export const DivInput = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 1.5rem ;
  
  @media (max-width: 400px){
    grid-template-columns: auto;
    gap: 2rem;
  }
  
  h4{
    font-size: 1.2rem;
    color: #AEAEAC;
    font-weight: 600;
    margin-bottom: 0.5rem;
    
    @media (max-width: 1000px){
      font-size: 1.15rem;
    }
    
    @media (max-width: 600px){
      font-size: 1.1rem;
    }
    
    @media (max-width: 400px){
      font-size: 1.05rem;
    }
    
    @media (max-width: 300px){
      font-size: 1rem;
    }
  }
`

export const Input = styled.input`
  width: 95%;
  border: none;
  border-bottom: 1px solid #260C1A;
  background-color: transparent;
  padding: 0.5rem 0.1rem;
  font-size: 1rem;
  outline: none;
  font-weight: 500;
  
  &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: none !important;
  }
  
  @media (max-width:400px){
    font-size: 0.9rem;
  }
    
  @media (max-width:300px){
    font-size: 0.8rem;
  }
`

export const Select = styled.select`
  width: 95%;
  border: none;
  border-bottom: 1px solid #260C1A;
  background-color: transparent;
  padding: 0.5rem 0.1rem;
  font-size: 1rem;
  outline: none;
  font-weight: 500;
  
  &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: none !important;
  }
  
  @media (max-width:400px){
    font-size: 0.9rem;
  }
    
  @media (max-width:300px){
    font-size: 0.8rem;
  }
`

export const ButtonDiv = styled.div`
  margin-top: 3rem;
  text-align: center;
`

export const BtnInput = styled.input`
  width: 20%;
  padding: 0.7rem 0;
  background-color: #C5D86D;
  border: 1px solid #C5D86D;
  outline: none;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #f7f7f2;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    border: 1px solid #c5d86d;
    color: #c5d86d;
    background-color: transparent;
  }
    
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
`

export const ConfirmBody = styled.div`
  margin: 3rem 0 2rem;
  
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
    
    span{
      font-weight: 700;
      
    }
  }
`

export const ConfirmContainer = styled.div`
  h2{
    font-size: 1.6rem;
    margin: 2rem 0;
    font-weight: 700;
    text-align: center;
        
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
`

export const CartDiv = styled.div`
  margin: 3rem 0 2rem;
  
  h2{
    font-size: 1.6rem;
    margin: 2rem 0;
    font-weight: 700;
    text-align: center;
        
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
`

export const CartSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #260c1a;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 80% auto;
  gap: 2rem;
  
  @media (max-width: 900px){
    grid-template-columns: auto;
  }
  
  @media (max-width: 600px){
    padding: 2rem 1rem;
  }
  
  @media (max-width: 400px){
    padding: 2rem 0.5rem;
  }
  
  img{
    width: 100%;
    
    @media (max-width: 900px){
      width: 50%;
    }
  }
`

export const CartTag = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  gap: 2rem;
  
  @media (max-width: 900px){
    grid-template-columns: auto;
  }
`

export const LinkTag = styled.div`
  align-items: center;
  margin: auto;
  
  @media (max-width: 900px){
    align-items: unset;
    margin: 0;
  }
  
  a{
    text-decoration: none;
    font-weight: 700;
    color: #260c1a;
    font-size: 1.1rem;
    cursor: pointer;
    
                
    &:hover{
      text-decoration: underline;
      color: #c5d86d;
    }
                
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
`

export const PriceTag = styled.div`
  align-items: center;
  margin: auto;
  
  @media (max-width: 900px){
    align-items: unset;
    margin: -2rem 0 0;
    text-align: right;
  }
`

export const CardDown = styled.div`
  border: 1px solid #260c1a;
  padding: 1rem;
  border-radius: 10px;
  margin: 2rem 0 ;
  
  @media (max-width: 800px){
    padding: 1rem 0.5rem;
  }
`

export const DownCard = styled.div`
  display: flex;
  justify-content: space-between;
  
  h2{
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: capitalize;
        
        
    @media (max-width:1000px){
      font-size: 1.3rem;
    }
        
    @media (max-width:600px){
      font-size: 1.2rem;
    }
        
    @media (max-width:400px){
      font-size: 1.1rem;
    }
  }
`

export const ProceedBtn = styled.div`
  text-align: right;
  
  button{
    background-color: #f05d23;
    padding: 0.7rem 2rem;
    border: 1px solid #f05d23;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #f7f7f2;
    font-weight: 600;
    margin: 0.5rem auto;
    cursor: pointer;
    
    &:hover {
      background: none;
      color: #c5d86d;
    }
    
    @media (max-width:1000px){
      font-size: 1.05rem;
      padding: 0.7rem 1.5rem;
    }
      
    @media (max-width:600px){
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
      
    @media (max-width:400px){
      font-size: 0.95rem;
      padding: 0.5rem 0.7rem;
      
    }
      
    @media (max-width:300px){
      font-size: 0.9rem;
    }
  }
`