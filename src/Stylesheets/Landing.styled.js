import styled from "styled-components"

export const LandingBody = styled.div`
    padding: 1rem;
`

export const HeroLand = styled.div`
    position: relative;
`

export const LeftSide = styled.div`
    width: 20rem;
    display: block;
    float: left;
    margin: 8rem 1rem 1rem 10rem;

    @media (max-width: 1300px){
        width: 18rem;
    }

    @media (max-width: 1080px){
        margin: 6rem 1rem 1rem 4rem;
        width: 15rem;
    }

    @media (max-width: 960px){
        width: 18rem;
    }

    @media (max-width: 860px){
        float: none;
        margin: 2rem auto;
        width: 90%;
        align-items: center;
        text-align: center;
    }

    h1{
        text-transform: uppercase;
        line-height: 3rem;
    }
    
   p{
        color: grey;
        line-height: 1.5rem;
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1rem;

        span{
            color: grey;
            font-weight: 700;
        }
   }
`

export const LeftButton = styled.button`
    margin-top: 1rem;
    padding: 0.8rem 1.1rem;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border: none;
    
`

export const RightSide = styled.div`
    display: flex;
    position: absolute;
    float: right;
    width: 48rem;
    height: 40rem;
    right: 0;
    top: 0;
    margin-right: 3rem;
    z-index: 1;

    @media (max-width: 1300px) {
        height: 38rem; 
        width: 45rem;
    }

    @media (max-width: 1080px){
       height: 34rem;
       width: 38rem;
    }

    @media (max-width: 960px){
       height: 30rem;
       width: 32rem;
       margin-right: 1rem;
    }

    @media (max-width: 860px){
        width: 98%;
        float: none;
        height: 40rem;
        top: 13rem;
    }

        img{
            margin-bottom: 3rem;
            width: 100%;
            height: 35rem;

            @media (max-width: 1300px) {
                height: 33rem; 
            }

            @media (max-width: 1080px){
                height: 30rem;
            }

            @media (max-width: 960px){
                height: 25rem;
            }

            @media (max-width: 860px){
                height: 33rem;
            }
        }

        div{
            position: absolute;
            bottom: 0;
            display: grid;
            grid-template-columns: auto auto auto auto auto auto;
            grid-gap: 1em;

            @media (max-width: 960px){
                display: block;
            }
            
        }

        p{
            color: grey;
            line-height: 1.5rem;
            font-weight: 600;
            font-size: 1rem;
            grid-column-start: 1;
            grid-column-end: 5;

            @media (max-width: 960px){
                font-size: 0.9rem;
                grid-column-end: auto;
            }

                span{
                    color: grey;
                    font-size: larger;
                    font-weight: 700;
                }
        }
        a{
            color: black;
            font-weight: 700;
            text-decoration: none;

            @media (max-width: 960px){
                font-size: 0.9rem;
            }
        }
`