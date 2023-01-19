import styled from "styled-components";

export const LandingTabBody = styled.div`
    display: block;
    width: 90%;
    margin: 2rem  auto;
    padding: 2rem 1rem;
    
    @media (max-width:600px){
        width: 90%;
        padding: 2rem 0;
    }
    
    @media (max-width:400px){
        width: 94%;
    }
    
    h2{
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 700;
        
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

export const LandingTabItem = styled.div`
    display: block;
`

export const TabLink = styled.div`
    display: flex;
    margin: 1rem 0 2rem;
    float: right;
    right: 0;
        
        @media (max-width:700px){
            margin-top: 1rem;
            /* overflow-x: auto; */
        }
        
        @media (max-width:600px){
            display: grid;
            grid-template-columns: 7rem 7rem 7rem 7rem;
            float: unset;
            overflow-x: auto;
            white-space: nowrap;

            &::-webkit-scrollbar {
                display: none;
            }
        }
        
        @media (max-width:400px){
            grid-template-columns: 6.5rem 6.5rem 6.5rem 6.5rem;
            
        }
        
        @media (max-width:300px){
            grid-template-columns: 6rem 6rem 6rem 6rem;
            
        }
`

export const LandingTab = styled.div`
` 


export const SellerTab = styled.div`
    padding: 3rem 0;
`

export const ProductTab = styled.div`
    padding: 3rem 0;
`

export const ArrivalTab = styled.div`
    padding: 3rem 0;
`

export const Tab = styled.div`
    padding: 5rem 0 1rem;
    
`

export const MoreSection = styled.div`
  text-align: right;
  
  a{
    text-decoration: none;
    color: #aeaeac;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Name = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;

    p{
        svg{
            font-size: 1.5rem;
            color: #260c1a;
        }
    }
`

export const Item = styled.div`
  width: 80%;
    
  a{
    text-decoration: none;
        
    h3{
      font-size: 1.1rem;
      color: #260c1a;
      line-height: 1.5rem;
      cursor: pointer;
                
      &:hover{
        text-decoration: underline;
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
  }
    
   
    
    p{
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: #aeaeac;
        font-weight: 600;
        
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

export const Body = styled.div`
    /* padding: 3rem 0; */
    
    display: grid;
    grid-template-columns: 21vw 21vw 21vw 21vw;
    gap: 1rem;
    
    @media (max-width:1200px){
        grid-template-columns: 30vw 30vw 30vw;
    }
    
    @media (max-width:900px){
        grid-template-columns: auto auto;
    }
    
    @media (max-width:500px){
        grid-template-columns: auto;
        align-items: center;
    }
`

export const Map = styled.div`
    border-radius: 5px;

    &:hover {
      transform: translateY(-0.5rem);
      transition: 1s;
    }
    
    @media (max-width:500px){
      margin: auto;
      
    }
`
export const Img = styled.img`
    width: 100%;
    height: 16rem;
    border-radius: 10px;
    
    @media (max-width:500px){
        height: fit-content;
        width: 96%;
        margin: auto;
    }
`

export const ProductTabBody = styled.div`
  width: 80%;
  margin: 3rem auto 4rem;
  
  @media (max-width:1000px){
    width: 85%;
  }
  
  @media (max-width:600px){
    width: 90%;
  }
  
  @media (max-width:400px){
    width: 95%;
  }
`

export const ProductTabLink = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

export const TabProduct = styled.div`

`

export const FormBody = styled.div`
  width: 60%;
  margin: 2rem auto;
  border: 1px solid #c5d86d;
  border-radius: 10px;
  
  h3{
    text-align: center;
    margin-top: 2rem;
  }
  
  @media (max-width:1000px){
    width: 70%;
  }
  
  @media (max-width:600px){
    width: 80%;
  }
  
  @media (max-width:400px){
    width: 90%;
  }
`

export const FormReview = styled.div`
  padding: 1rem 2rem;
  
` 

export const FormDiv = styled.div`
  margin: 1rem 0;
  
 
`

export const FormLabel = styled.label`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
`

export const TextArea = styled.textarea`
  height: 5rem;
  width: 95%;
  padding: 1rem 0.5rem;
  border: none;
  resize: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid #260c1a;
  background-color: transparent;
    
  &::-webkit-scrollbar{
    display: none;
  }
`

export const InputButton = styled.input`
    width: 70%;
    padding: 0.7rem 0;
    border-radius: 10px;
    font-size: 1rem;
    color: #f7f7f2;
    font-weight: 600;
    border: 1px solid #c5d86d;
    outline: none;
    cursor: pointer;
    background-color: #c5d86d;
    
    &:hover{
        color: #c5d86d;
        background-color: transparent;
    }
`

export const InputBtnDiv = styled.div`
  margin: 2rem auto;
  align-items: center;
  text-align: center;
  width: 70%;
`

export const LoadingSection = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  height: 10rem;
  
  p{
    color: #f05d23;
    font-weight: 600;
  }
`

export const AccountTabBody = styled.div`
  height: 85vh;
  min-height: 31.25rem;
`

export const AccountTabItem = styled.div`
  display: grid;
  grid-template-columns: 15vw auto;
  gap: 2rem;
  height: 100%;
  
  @media (max-width:1000px){
    grid-template-columns: 20vw auto;
  }
  
  @media (max-width:600px){
    grid-template-columns: 10vw auto;
    gap: 1rem;
  }
  
  @media (max-width:330px){
    grid-template-columns: 12vw auto;
    gap: 0.5rem;
  }
`

export const AccountLink = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1); */
  
`