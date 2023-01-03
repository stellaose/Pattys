import styled from "styled-components";

export const ProductsBody = styled.div`
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
    
    @media (max-width:1000px){
        grid-template-columns: 50% auto;
    }
    
    @media (max-width:700px){
        grid-template-columns: auto;
    }
`

export const ProductLeftScreen = styled.div`

` 

export const ProductRightScreen = styled.div`

` 

export const LeftImg = styled.img`
    width: 100%;
    border-radius: 10px;
    
    @media (max-width:700px){
        width: 90%;
    }
`

export const ReviewSection = styled.div`
    margin-top: 1rem;
    width: 40%;
    display: flex;
    justify-content: space-around;
    
    @media (max-width:1000px){
        width: unset;
    }
    
    p{
        margin-top: 0.5rem;
        svg{
            margin-top: -1.5rem;
        }
    }
`

export const PriceSection = styled.div`
    margin: 2rem 0;
    
    p{
        font-size: 1.8rem;
        font-weight: 700;
        color: #aeaeac;
    }
`

export const OtherSection = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    p{
        font-weight: 500;
        color: #c5d86d;
    }
`

export const ShareSection = styled.div`
    h3{
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.5rem;
    }
`