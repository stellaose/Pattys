import styled from "styled-components";

export const ProfileBody = styled.div`
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

export const ProfileContent = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 8rem;
  
  @media (max-width:1000px){
    grid-template-columns: 45% auto;
    gap: 4rem;
  }
  
  @media (max-width:780px){
    grid-template-columns: auto;
    gap: 2rem;
  }
`

export const Map = styled.div`
  margin-top:2rem;
  text-align: center;
  
  @media (max-width: 780px){
    text-align: unset;
  }
  
`

export const Img = styled.img`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  
  @media (max-width:1000px){
    width: 14rem;
    height: 14rem;
  }
  
  @media (max-width: 600px){
    width: 12rem;
    height: 12rem;
  }
  
  @media (max-width: 400px){
    width: 10rem;
    height: 10rem;
  }
  
  @media (max-width: 300px){
    width: 9rem;
    height: 9rem;
  }
`

export const EditButton = styled.button`
  background-color: #260c1a;
  padding: 0.7rem 3rem;
  border: 1px solid #260c1a;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #f7f7f2;
  font-weight: 600;
  margin: 2rem auto 0;
  cursor: pointer;
  
  &:hover {
    background: none;
    color: #260c1a;
  }
  
  @media (max-width:1000px){
    font-size: 1.05rem;
  }
    
  @media (max-width:600px){
    font-size: 1rem;
    padding: 0.5rem 2.5rem;
  }
    
  @media (max-width:400px){
    font-size: 0.95rem;
    padding: 0.5rem 2rem;
    
  }
    
  @media (max-width:300px){
    font-size: 0.9rem;
  }
`

export const ProfRight = styled.div`
  text-align: left;
  margin-top: 1rem;
`

export const Right = styled.div`
  margin: 1rem 0 2rem;
  
  h4{
    font-size: 1.2rem;
    color: #aeaeac;
    font-weight: 700;
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

export const OrderBtn = styled.button`
  padding: 0.7rem 3rem;
  background-color: #f05d23;
  border: 1px solid #f05d23;
  border-radius: 5px;
  font-size: 1.1rem;
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