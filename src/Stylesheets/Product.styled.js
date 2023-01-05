import styled from "styled-components";

export const ProductsListBody = styled.div`
    background-color: #f7f7f2;
    padding: 1rem 0 2rem;
`

export const ProductsContainer = styled.div`
    width: 85%;
    display: block;
    margin: 1rem auto;
    
    
    @media (max-width:1000px){
        width: 85%;
    }
    
    @media (max-width:600px){
        width: 90%;
    }
    
    @media (max-width:300px){
        width: 94%;
    }
`

export const ProductContent = styled.div`
   
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 1rem;
    
    @media (max-width:1200px){
        grid-template-columns: 32% 32% 32%;
    }
    
    @media (max-width:800px){
        grid-template-columns: auto auto;
    }
    
    @media (max-width:500px){
        grid-template-columns: auto;
        align-items: center;
    }
`

export const Map = styled.div`
    border-radius: 10px;
    
    &:hover {
        /* box-shadow: 0 0 5px rgba(15, 15, 15, 0.26); */
        transform: translateY(-0.5rem);
        transition: 1s;
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
    span{
        display: flex;
    }
    
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
    
    small{
        font-size: 0.9rem;
        font-weight: 700;
        color: #c5d86d;
    }
`

export const ReviewStar = styled.div`
    display: flex;
    justify-content: space-between;
    
    p{
        svg{
            font-size: 2rem;
            margin-top: -1.5rem;
        }
    }
`

export const Img = styled.img`
    width: 100%;
    height: 16rem;
    border-radius: 10px;
    
    
    @media (max-width:500px){
        height: fit-content;
        width: 96%;
        text-align: center;
    }
`

export const PaginationBody = styled.div`
  display: flex;
  width: 60%;
  margin: 2rem auto;
  justify-content: center;
  
  @media (max-width:1000px){
    width: 70%;
  }
  
  @media (max-width:600px){
    width: 80%;
  }
  
  
  ul{
    display: flex;
    justify-content: space-between;
    
    li{
      list-style-type: none;
      margin: 0 1rem;
      font-size: 1.2rem;
      font-weight: 600;
      
      a{
        text-decoration: none;
        color: #aeaeac;
      }
      
      @media (max-width:1000px){
        font-size: 1.1rem;
        margin: 0 0.8rem;
        
      }
      
      @media (max-width:600px){
        font-size: 1rem;
        margin: 0 0.5rem;
        
      }
      
      @media (max-width:300px){
        font-size: 0.9rem;
      }
    }
  }
`

export const LoadingSection = styled.div`
    width: 40vw;
    align-items: center;
    margin: 0 auto;
    height: 31rem;
    
    @media (max-width:600px){
        height: 28rem;
    }
`

export const ProductScreenBody = styled.div`
    background-color: #f7f7f2;
    padding: 1rem 0 3rem;
`

export const ProductScreenContent = styled.div`
    width: 90%;
    margin: 0rem auto;
    display: grid;
    grid-template-columns: 35% auto;
    gap: 2rem;
    
    @media (max-width:1100px){
        grid-template-columns: 45% auto;
    }
    
    @media (max-width:900px){
        grid-template-columns: 45% auto;
    }
    
    @media (max-width:700px){
        grid-template-columns: auto;
    }
`

export const ProductLeftScreen = styled.div`
    @media (max-width:700px){
        text-align: center;
    }
` 

export const ProductRightScreen = styled.div`
  
    
    h2{
        font-size: 1.7rem;
        
        @media (max-width:1000px){
            font-size: 1.6rem;
        }
        
        @media (max-width:600px){
            font-size: 1.5rem;
            margin-top: 1rem;
        }
        
        @media (max-width:400px){
            font-size: 1.4rem;
        }
    }
` 

export const LeftImg = styled.img`
    width: 100%;
    border-radius: 10px;
    min-height: 27rem;
    
    
    @media (max-width:1100px){
        min-height: 30rem;
    }
    
    @media (max-width:1000px){
        min-height: 27rem;
    }
    
    @media (max-width:700px){
        width: 80%;
        min-height: unset;
    }
    
    @media (max-width:400px){
        width: 90%;
    }
`

export const ReviewSection = styled.div`
    margin-top: 1.5rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
    
    @media (max-width:1000px){
        width: 90%;
    }
    
    @media (max-width:800px){
        width: unset;
    }
    
    @media (max-width:700px){
        width: 80%;
    }
    
    @media (max-width:500px){
        width: 90%;
    }
    
    @media (max-width:360px){
        display: block;
    }
    
    p{
        margin-top: 0rem;
        svg{
            margin-top: 1rem;
        }
        
        @media (max-width:360px){
            margin: 0.5rem 0;
        }
    }
`

export const PriceSection = styled.div`
    margin: 1.3rem 0;
    
    p{
        font-size: 1.8rem;
        font-weight: 700;
        color: #aeaeac;
        
        @media (max-width:1000px){
            font-size: 1.7rem;
        }
        
        @media (max-width:600px){
            font-size: 1.6rem;
        }
        
        @media (max-width:400px){
            font-size: 1.5rem;
        }
        
        @media (max-width:300px){
            font-size: 1.4rem;
        }
    }
`

export const OtherSection = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    p{
        font-weight: 500;
        color: #c5d86d;
    }
`

export const CountSection = styled.div`
    margin-bottom: 1rem;
    button{
        padding: 0.3rem 0.2rem;
        color: #f7f7f2;
        border: none;
        background-color: #260c1a;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        
        
        svg{
            font-size: 1rem;
        }
    }
    
    .button{
        padding: 0.3rem 0.2rem;
        color: #f7f7f2;
        border: none;
        background-color: #260c1a;
        cursor: pointer;
        border-radius: 5px 0 0 5px ;
        
        
        svg{
            font-size: 1rem;
        }
    }
    
    input{
        width: 3rem;
        padding: 0.2rem;
        font-size: 1rem;
        background-color: transparent;
        border: 1px solid #260c1a;
        outline: none;
        /* border-radius: 5px; */
    }
`
export const ShareSection = styled.div`
    h3{
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.4rem;
        
        @media (max-width:1000px){
          font-size: 1.3rem;
        }
        
        @media (max-width:600px){
          font-size: 1.2rem;
        }
    }
    
    svg{
        font-size: 1.8rem;
        margin: 1rem 2rem 1rem 0;
        
        @media (max-width:1000px){
          font-size: 1.7rem;
          margin: 1rem 1rem 1rem 0;
        }
        
        @media (max-width:600px){
          font-size: 1.6rem;
        }
    }
`

export const ButtonSection = styled.div`
    margin-top: 1rem;
    
    button{
        padding: 0.7rem 2rem;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        background-color: #260c1a;
        color: #f7f7f2;
        font-weight: 700;
        
        &:hover{
            border: 1px solid #260c1a;
            background-color: transparent;
            color: #260c1a;
        }
        
        @media(max-width:600px){
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          
        }
    }
`

export const DescriptionHeight = styled.div`
  margin: 2rem auto;
  
  p{
    font-size: 1.1rem;
    line-height: 1.7rem;
        
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

export const LineHeight = styled.div`
  width: 70%;
  margin: 2rem auto 3rem;
  display: grid;
  grid-template-columns: 20% auto;
  
   @media (max-width:1000px){
      width: 80%;
   }
   
   @media (max-width:600px){
      width: 85%;
   }
   
   @media (max-width:400px){
    width: 95%;
    grid-template-columns: 15% auto;
      
   }
`

export const LeftSideImg = styled.div`
  width: 90%;
  margin: auto 0;
  
  
  img{
    width: 90%;
    border-radius: 50%;
  }
`

export const RightSide = styled.div`
  padding-top: 1rem;
  
  @media (max-width:600px){
    padding-top: 0;
  }
`