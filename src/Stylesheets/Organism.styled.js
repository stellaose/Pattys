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
    
    @media (max-width:600px){
        display: block;
    }
`

export const CollectionsOne = styled.div`
    width: 60%;
    background-color: white;
    margin-right: 2rem;
    display: grid;
    padding: 2rem 1rem;
    grid-template-columns: 55% 42%;
    
    @media (max-width:600px){
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
            border: none;
            background-color: #260c1a;
            padding: 0.5rem 1.5rem;
            color: #f7f7f2;
            font-size: 1.1rem;
            font-weight: 700;
            margin-top: 8rem;
            cursor: pointer;
            
            @media (max-width:600px){
                margin-top: 2rem;
                
            }
        }
    }
    
    img{
        width: 90%;
        margin-top: 2rem;
    }
`

export const CollectionsTwo = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 2rem 1rem;
    
    
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

