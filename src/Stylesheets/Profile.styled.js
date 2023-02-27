import styled from "styled-components";

export const ProfileBody = styled.div`
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


export const ProfileContent = styled.form`
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
`

export const Img = styled.img`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  
  @media (max-width:1200px){
    width: 15rem;
    height: 15rem;
  }
  
  @media (max-width:1000px){
    width: 14rem;
    height: 14rem;
  }
  
  @media (max-width:800px){
    width: 13rem;
    height: 13rem;
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
  padding: 0.7rem 2.5rem;
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
    padding: 0.7rem 2.2rem;
    
  }
    
  @media (max-width:600px){
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
    
  @media (max-width:400px){
    font-size: 0.95rem;
    padding: 0.5rem 1.8rem;
    
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

export const AvatarInput = styled.input`
  overflow: hidden;

  
  &::-webkit-file-upload-button{
    visibility: hidden;
  }
  
  &::before{
    content: 'Change Picture';
    display: inline-block;
    background-color: #260c1a;
    border: 1px solid #260c1a;
    border-radius: 5px;
    padding: 0.7rem 3rem;
    color: #f7f7f2;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    margin: 2rem auto 0;
    
    
    @media (max-width:1000px){
      font-size: 1.05rem;
    }
    
    @media (max-width: 780px){
      /* margin-left:4rem; */
    }
      
    @media (max-width:600px){
      font-size: 1rem;
      padding: 0.5rem 2.5rem;
    }
      
    @media (max-width:400px){
      font-size: 0.95rem;
      padding: 0.5rem 2rem;
      /* margin-left:3rem; */
      
    }
      
    @media (max-width:300px){
      font-size: 0.9rem;
      /* margin-left: 2rem; */
    }
    
  }
  
  &:hover {
    background: none;
    color: #260c1a;
  }
`

export const Input = styled.input`
  padding: 0.5rem 0;
  width: 80%;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #260c1a;
  background-color: transparent;
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: none !important;
  }
  
  @media (max-width:1000px){
    width: 95%;
    font-size: 0.95rem;
  }
  
  @media (max-width:780px){
    width: 90%;
  }
  
  @media (max-width:600px){
    font-size: 0.9rem;
  }
    
  @media (max-width:400px){
    font-size: 0.85rem;
    width: 85%;
  }
 
  @media (max-width:300px){
    font-size: 0.8rem;
  }
`

export const LoadingSection = styled.div`
  width: 40vw;
  align-items: center;
  margin: 0 auto;
  height: 28rem;
    
  @media (max-width:600px){
    height: 28rem;
  }
`

