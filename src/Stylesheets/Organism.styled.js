import styled from "styled-components";

export const CollectionsBody = styled.div`
    display: block;
    width: 90%;
    margin: auto;
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

export const CollectionsContent = styled.div`
    display: flex;
    margin-top: 2rem;
    
    @media (max-width:800px){
        display: block;
    }
`

export const CollectionsOne = styled.div`
    width: 60%;
    background-color: white;
    margin-right: 2rem;
    display: grid;
    padding: 2rem 1rem;
    border-radius: 5px;
    grid-template-columns: 55% 42%;
    
    @media (max-width:800px){
        width: 90%;
        margin: 0 auto 2rem;
        display: flex;
        flex-direction: column;
    }
    
    h2{
        text-transform: capitalize;
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
    
    p{
        color: #aeaeac;
        font-weight: 700;
        margin-top: 1.5rem;
        font-size: 1rem;
        
        @media (max-width:800px){
            font-size: 0.95rem;
        }
            
        @media (max-width: 400px){
            font-size: 0.9rem;
        }
            
        @media (max-width:300px){
            font-size: 0.85rem;
        }
    }
    
    a{
        button{
          border: 1px solid #260c1a;
          background-color: #260c1a;
          padding: 0.5rem 1.5rem;
          color: #f7f7f2;
          font-size: 1.1rem;
          border-radius: 5px;
          font-weight: 700;
          margin-top: 8rem;
          cursor: pointer;
            
          @media (max-width:800px){
            margin-top: 2rem;
                
          }
            
          &:hover{
            background-color: transparent;
            color: #260c1a;
          }
        }
    }
    
    img{
        width: 90%;
        margin-top: 2rem;
        
        @media (max-width:800px){
            margin-top: 0;
        }
    }
`

export const CollectionsTwo = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    
    @media (max-width:800px){
        width: 90%;
        margin: 0 auto;
    }
    
    
    h2{
        text-transform: capitalize;
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
    
    p{
        color: #aeaeac;
        font-weight: 700;
        margin-top: 1.5rem;
        font-size: 1rem;
        
        @media (max-width:800px){
            font-size: 0.95rem;
        }
            
        @media (max-width: 400px){
            font-size: 0.9rem;
        }
            
        @media (max-width:300px){
            font-size: 0.85rem;
        }
    }
    
    img{
        width: 60%;
        margin: 2rem auto 0;
        text-align: center;
    }
`

export const InstagramBody = styled.div`
    display: block;
    width: 90%;
    margin: 0 auto 8rem;
    
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

export const InstagramContent = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    gap: 2rem 0;
    margin: 2rem auto;
    /* padding: 2rem 1rem; */
    
    @media (max-width:1000px){
        grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    @media (max-width:700px){
        padding: 2rem 0;
        grid-template-columns: 50% 50%;
    }
    
    @media (max-width:400px){
        width: 94%;
        display: block;
    }
    
    img{
        width: 100%;
    }
`



