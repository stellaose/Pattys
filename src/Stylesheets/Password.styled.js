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
  width: 85%;
  border: none;
  border-bottom: 1px solid #260c1a;
  background-color: transparent;
  
  span{
    cursor: pointer;
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
  
  @media (max-width:1100px){
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

export const ForgetContainer = styled.div`
  background-color: #f7f7f2;
  padding: 2rem 0 4rem;
`

export const ForgetBody = styled.div`
  width: 50%;
  margin: auto;
  color: #260c1a;
  text-align: center;
  padding: 1rem 2rem 2rem;
  background-color: #fff;
  
  @media (max-width: 1000px){
    width: 55%;
  }
  
  @media (max-width: 800px){
    width: 60%;
  }
  
  @media (max-width: 600px){
    padding: 2rem 1rem;
    width: 70%;
  }
  
  @media (max-width: 400px){
    width: 75%;
  }
  
  @media (max-width: 300px){
    padding: 2rem 0.5rem;
    width: 85%;
  }
  
  h1{
    font-size: 2rem;
    text-align: center;
    margin-top: 1.5rem;
    
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
    margin-top: 1rem;
    text-align: left;
    line-height: 2rem;
        
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

export const ForgetImg = styled.img`
  width: 20%;
  
  @media (max-width: 500px){
    width: 25%;
  }
  
  @media (max-width: 300px){
    width: 30%;
  }
`

export const ForgetInput = styled.form`
  margin: 2rem 0;
  text-align: left;
  
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
`

export const InputSection = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid #260c1a;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.8rem 0.5rem;
  margin-bottom: 2rem;
  outline: none;
  background-color: transparent;
    
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

export const EnterSection = styled.div`
  margin: 2rem auto;
  align-items: center;
  text-align: center;
  width: 70%;
`

export const EnterButton = styled.input`
  text-align: center;
  width: 80%;
  padding: 0.7rem 0;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #c5d86d;
  color: #f7f7f2;
  font-weight: 600;
    
  &:hover {
    border: 1px solid #c5d86d;
    color: #c5d86d;
    background-color: transparent;
  }
`
