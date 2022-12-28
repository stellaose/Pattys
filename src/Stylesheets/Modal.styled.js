import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    
    @media (max-width:600px){
        left: 0;
    }
`

export const ModalContainer = styled.div`
    padding: 2rem 1rem;
    background-color: #f7f7f2;
    width: 50%;
    justify-content: center;
    opacity: 1;
    border-radius: 10px;
    color: #260c1a;
    
      
        @media (max-width: 600px) {
            width: 80%;
            padding: 1rem 0;
        }
`

export const ModalBody = styled.div`
    text-align: center;
    margin: 0.5rem auto;
    padding: 1rem;
    
      
    h1{
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-transform: capitalize;
        
        
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
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        
        
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
        
    button{
        padding: 0.7rem 3rem;
        font-size: 1.2rem;
        margin: 2rem 0;
        border: none;
        background-color: #c5d86d;
        color: #f7f7f2;
        font-weight: 700;
        cursor: pointer;
        border-radius: 10px;
                
        &:hover{
            background-color: transparent;
            border: 1px solid #c5d86d;
            color: #c5d86d;
        }
                
        @media (max-width:600px){
            font-size: 1.1rem;
        }
                    
        @media(max-width:400px){
            font-size: 1rem;
            margin-left: 0;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
        }
                    
        @media (max-width:300px){
            font-size: 0.9rem;
        }
    }
`