import styled from "styled-components";

export const CartBody = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
  width:80%;
  
  @media (max-width:1000px){
    width: 85%;
  }
  
  @media (max-width:780px){
    width: 95%;
  }
  
  @media (max-width:600px){
    margin: 2rem auto 0;
    width: 97%;
  }

  h1{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    
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

export const CardBody = styled.div`
  margin: 0.5rem auto;
  display: block;
`

export const CardTop = styled.div`
  border: 1px solid #aeaeac;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  
  @media (max-width: 800px){
    padding: 1rem 0.5rem;
  }
  
  /* @media (max-width:600px){
    border: none;
  } */
  
  p{
    text-align: right;
    margin: -1.5rem -0.5rem 1rem 0;
    
    @media (max-width: 800px){
      text-align: right;
      margin: -1rem 0 0.1rem;
    }
    
    
    
    svg{
      color: #F05D23;
      font-size: 1.2rem;
      margin-top: 1rem;
      cursor: pointer;
      
      @media (max-width: 1000px){
        font-size: 1.1rem;
      }
      
      @media  (max-width: 600px){
        margin: 0.5rem 0;
        font-size: 1rem;
      }
      
      @media (max-width: 400px){
        font-size: 0.9rem;
      }
    }
  }
  
`

export const TopCard = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  gap: 2rem;
  
  @media (max-width: 1000px){
    grid-template-columns: 18% auto;
    gap: 1rem;
  }
  
  @media (max-width: 800px){
    gap: 3rem;
  }
  
  @media (max-width: 600px){
    gap: 1rem;
    grid-template-columns: 30% auto;
  }
`

export const CardImg = styled.img`
  width: 100%;
  
  @media (max-width: 800px){
    margin-top: 1rem;
  }
`

export const CardMid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem;
  padding: 1rem 0;
  
  @media (max-width: 1200px){
    grid-template-columns: auto auto auto;
    gap: 2rem;
  }
  
  @media (max-width: 1000px){
    grid-template-columns: auto auto auto;
    gap: 1rem;
    padding: 0.5rem;
  }
  
  @media (max-width: 800px){
    display: block;
  }
`

export const LeftOne = styled.div`
  h4{
    font-size: 1.2rem;
    font-weight: 600;
            
    @media (max-width:800px){
      font-size: 1.1rem;
    }
            
    @media (max-width: 400px){
      font-size: 1rem;
    }
            
    @media (max-width:300px){
      font-size: 0.95rem;
    }
  }
`

export const LeftTwo = styled.div`

 
`

export const LeftThree = styled.div`
   h3{
    font-size: 1.3rem;
    text-align: center;
            
    @media (max-width:800px){
      font-size: 1.2rem;
      text-align: right;
    }
            
    @media (max-width: 400px){
      font-size: 1.1rem;
    }
            
    @media (max-width:300px){
      font-size: 1rem;
    }
  }
  
 
`

export const CountSection = styled.div`
  
  @media (max-width: 800px){
    margin: 0.5rem 0;
    text-align: right;
  }
  
  button{
    padding: 0.3rem 0.2rem;
    color: #f7f7f2;
    border: 1px solid #260c1a;
    background-color: #260c1a;
    cursor: pointer;
    /* border-radius: 0 5px 5px 0; */
    
    svg{
      font-size: 1rem;
      
      @media (max-width: 600px){
        font-size: 0.8rem;
      }
    }
  }
    
  .button{
    padding: 0.3rem 0.2rem;
    color: #f7f7f2;
    border: 1px solid #260c1a;
    background-color: #260c1a;
    cursor: pointer;
    font-size: 1.1rem;
    /* border-radius: 5px 0 0 5px ; */
        
    svg{
      font-size: 1rem;
      
      @media (max-width: 600px){
        font-size: 0.8rem;
      }
    }
        
    @media (max-width:1000px){
      font-size: 0.95rem;
    }
        
    @media (max-width:600px){
      font-size: 0.9rem;
    }
        
    @media (max-width:400px){
      font-size: 0.85rem;
        
    }
        
    @media (max-width:300px){
      font-size: 0.8rem;
    }
  }
    
  input{
    width: 3rem;
    padding: 0.3rem 0.2rem;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid #260c1a;
    outline: none;
    /* border-radius: 5px; */
    
    @media (max-width:1000px){
      font-size: 0.95rem;
      width: 2.5rem;
    }
        
    @media (max-width:600px){
      font-size: 0.9rem;
      padding: 0.2rem;
      width: 2rem;
    }
        
    @media (max-width:400px){
      font-size: 0.85rem;
        
    }
        
    @media (max-width:300px){
      font-size: 0.8rem;
    }
  }
`

export const CardDown = styled.div`
  border: 1px solid #aeaeac;
  padding: 1rem;
  border-radius: 10px;
  margin: 1.5rem 0 1rem;
  
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
    background-color: #c5d86d;
    padding: 0.7rem 2rem;
    border: 1px solid #c5d86d;
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