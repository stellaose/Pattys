import styled from "styled-components";

export const ProductsBody = styled.div`
    background-color: #f7f7f2;
    padding: 1rem 0 2rem;
`

export const ProductsContainer = styled.div`
    width: 80%;
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