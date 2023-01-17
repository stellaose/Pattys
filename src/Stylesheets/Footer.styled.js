import styled from "styled-components";

export const FooterBody = styled.div`
    background-color: #f05d23;
    color: #f7f7f2;
    padding: 3rem 2rem;
    /* margin-top: 2rem; */
    display: block;
    justify-content: center;
    
    @media (max-width:600px){
        padding: 2rem 1.5rem;
    }
    
    @media (max-width:400px){
        padding: 2rem 1rem;
    }
    
    @media (max-width:300px){
        padding: 2rem 0.5rem;
    }
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 1rem 3rem; */
    padding: 2rem;
    border-top: 1px solid #f7f7f2;
    
    @media (max-width:1000px){
        display: grid;
        grid-template-columns: 40vw 40vw;
    }
    
    @media (max-width:800px){
        gap: 2rem;
        grid-template-columns: 35vw 45vw;
    }
    
    @media (max-width:600px){
        display: block;
        padding: 1rem 0 2rem;
    }
`

export const PageLeftDiv = styled.div`
    display: block;
    justify-content: left;
    @media (max-width:600px){
        margin-top: 2rem;
    }
    
    a{
        text-decoration: none;
        color: #f7f7f2;
        
        &::after, &:focus, &:hover{
            text-decoration-line: line-through;
            color: #c5d86d;
        }
        
        &.active {
            color: #c5d86d;
            text-decoration-line: line-through;
        }
        
        p{
            margin-bottom: 1rem;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 500;
            
            &:hover{
                color: #c5d86d;
            }
            
            @media (max-width:800px){
                font-size: 1rem;
            }
            
            @media (max-width: 400px){
                font-size: 0.9rem;
            }
            
            @media (max-width:300px){
                font-size: 0.8rem;
            }
        }

    }
`

export const PageMidDiv = styled.div`
    display: block;
    justify-content: left;
    
    @media (max-width:1000px){
        margin-top: 2rem;
    }
    
    br{
        @media (max-width:1000px){
            display: none;
        }
    }
    

    p{
      margin: 0.5rem 0 1rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
            
      &:hover{
        color: #c5d86d;
      }
            
      @media (max-width:800px){
        font-size: 1rem;
      }
            
      @media (max-width: 400px){
        font-size: 0.9rem;
      }
            
      @media (max-width:300px){
        font-size: 0.8rem;
      }
    }
    
    a{
        text-decoration: none;
        color: #f7f7f2;
        
        &::after, &:focus, &:hover{
            text-decoration-line: line-through;
            color: #c5d86d;
        }
        
        &.active {
            color: #c5d86d;
            text-decoration-line: line-through;
        }
        
        h3{
            font-size: 1.3rem;
            
            @media (max-width:800px){
                font-size: 1.2rem;
            }
            
            @media (max-width: 400px){
                font-size: 1.1rem;
            }
            
            @media (max-width:300px){
                font-size: 1rem;
            }
        }
        
        h3{
            font-size: 1.3rem;
            
            @media (max-width:800px){
                font-size: 1.2rem;
            }
            
            @media (max-width: 400px){
                font-size: 1.1rem;
            }
            
            @media (max-width:300px){
                font-size: 1rem;
            }
        }
        
        p{
            margin-bottom: 1rem;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 500;
            
            &:hover{
                color: #c5d86d;
            }
            
            @media (max-width:800px){
                font-size: 1rem;
            }
            
            @media (max-width: 400px){
                font-size: 0.9rem;
            }
            
            @media (max-width:300px){
                font-size: 0.8rem;
            }
        }

    }
`

export const PageSocialDiv = styled.div`

    @media (max-width:1000px){
        margin-top: 2rem;
    }
   
`

export const Subscribe = styled.div`
    display: block;
        h3{
            font-size: 1.3rem;
            
            @media (max-width:800px){
                font-size: 1.2rem;
            }
            
            @media (max-width: 400px){
                font-size: 1.1rem;
            }
            
            @media (max-width:300px){
                font-size: 1rem;
            }
        }
        
        input[type='text'], input[type='submit']{
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
            font-weight: 600;
            color: #260c1a;
            outline: none;
            border: 1px solid #c5d86d;
            
            
            @media (max-width:800px){
                font-size: 1rem;
            }
            
            @media (max-width: 400px){
                font-size: 0.9rem;
            }
            
            @media (max-width:300px){
                font-size: 0.8rem;
            }
        }
        
    input[type='text']{
      border-radius: 5px 0 0 5px;
    }
    
    input[type='submit']{
      border-radius: 0 5px 5px 0;
      background-color: #c5d86d;
      
    }
`

export const Social = styled.div`
    margin-top: 2rem;
    h3{
        font-size: 1.3rem;
            
        @media (max-width:800px){
            font-size: 1.2rem;
        }
            
        @media (max-width: 400px){
            font-size: 1.1rem;
        }
            
        @media (max-width:300px){
            font-size: 1rem;
        }
    }
    
    div{
        display: flex;
        margin-top: 1rem;
        
        a{
            text-decoration: none;
            color: #f7f7f2;
            margin-right: 2rem;
            font-size: 1.5rem;
            
            &:hover{
                color: #c5d86d;
            }
                
            @media (max-width:1200px){
                margin-right: 1.6rem;
                font-size: 1.4rem;
            }
                
            @media(max-width:1000px){
                margin-right: 1.3rem;
            }
                
            @media(max-width:900px){
                margin-right: 1rem;
                font-size: 1.2rem;
            }
                
            @media(max-width:800px){
                margin-right: 1.5rem;
                font-size: 1.4rem;
            }
        }
    }
`