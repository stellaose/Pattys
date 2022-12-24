import styled from 'styled-components'

export const SlideBody = styled.div`
    display: grid;
    grid-template-columns: auto 40vw;
    gap: 3rem;
    height: 31rem;
    
    @media (max-width:1000px){
        gap: 2rem;
    }
    
    @media (max-width:800px){
        gap: 0;
    }
    
    @media (max-width:670px){
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
`

export const LeftSlide = styled.div`
    padding: 3rem 3rem 2rem;
    text-align: left;
    
    @media (max-width:600px){
        padding: 2rem 1rem;
    }
    
    @media (max-width:400px){
        padding: 2rem 0.5rem;
    }
    
    h3{
        font-size: 1.3rem;
        margin-bottom: 1rem;
            
        @media (max-width:800px){
            font-size: 1.2rem;
        }
        
        @media (max-width:600px){
            margin-bottom: 0.5rem;
        }
            
        @media (max-width: 400px){
            font-size: 1.1rem;
        }
            
        @media (max-width:300px){
            font-size: 1rem;
        }
    }
    
    h1{
        font-size: 3.6rem;
        font-weight: 700;
        
        @media (max-width:1100px){
            font-size: 3.4rem;
        }
        
        @media (max-width:800px){
            font-size: 3rem;
        }
        
        @media (max-width:670px){
            font-size: 2.8rem;
        }
        
        @media (max-width:400px){
            font-size: 2.5rem;
        }
        
        @media (max-width:300px){
            font-size: 2rem;
        }
    }
    
    p{
        color: #aeaeac;
        font-weight: 700;
        margin-top: 1.5rem;
        font-size: 1.1rem;
        
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
    
    a{
        button{
            border: none;
            background-color: #260c1a;
            padding: 1rem 1.5rem;
            color: #f7f7f2;
            font-size: 1.1rem;
            font-weight: 700;
            margin-top: 2rem;
            cursor: pointer;
        }
    }
`

export const RightSlide = styled.div`
    padding-bottom: 2rem;
    
    @media (max-width:1000px){
        padding: 3rem 0 2rem;
    }
    
    @media (max-width:850px){
        padding: 4rem 0 2rem;
    }
    
    @media (max-width:600px){
        padding: 1rem 0 2rem;
    }
`

export const RightImg = styled.img`
    width: 100%;
`