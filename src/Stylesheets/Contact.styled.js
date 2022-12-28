import styled from 'styled-components';

export const ContactBody = styled.div`
    padding: 3rem 0 4rem;
    background-color: #f7f7f2;
    
`

export const ContactForm = styled.div`
    width: 60%;
    margin: 1rem auto;
    
    @media (max-width:1000px){
        width: 70%;
    }
    
    @media (max-width:800px){
        width: 80%;
    }
    
    @media (max-width:600px){
        width: 85%;
    }
    
    @media (max-width:400px){
        width: 90%;
    }
    
    @media (max-width:300px){
        width: 93%;
    }
    
    h2{
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
`

export const SubmitForm = styled.form`
    border: 1px solid #f05d23;
    padding: 4rem 2rem;
    border-radius: 10px;
    
    
    @media (max-width:600px){
        padding: 3rem 1rem;
    }
    
    @media (max-width:400px){
        padding: 3rem 0.5rem;
    }
`
export const FormLabel = styled.label`
    text-align: left;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
    
    @media (max-width:400px){
        font-size: 0.9rem;
    }
    
    @media (max-width:300px){
        font-size: 0.8rem;
    }
`
export const FormInput = styled.input `
    width: 95%;
    margin-bottom: 2rem;
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    border: none;
    border-bottom: 1px solid #260c1a;
    background-color: transparent;
    outline: none;
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        transition: background-color 5000s;
        -webkit-text-fill-color: none !important;
    }
    
    @media (max-width:400px){
        font-size: 0.9rem;
    }
    
    @media (max-width:300px){
        font-size: 0.8rem;
    }
`

export const NameSection = styled.div`
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 1rem;
    
    @media (max-width:600px){
        display: block;
    }
    
`
export const NameLabel = styled.label`
    text-align: left;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
    
    
    @media (max-width:400px){
        font-size: 0.9rem;
    }
    
    @media (max-width:300px){
        font-size: 0.8rem;
    }
`

export const NameInput = styled.input`
    width: 92%;
    border: none;
    border-bottom: 1px solid #260c1a;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.8rem 0.5rem;
    margin-bottom: 2rem;
    outline: none;
    background-color: transparent;
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        transition: background-color 5000s;
        -webkit-text-fill-color: none !important;
    }
    
    @media (max-width:400px){
        font-size: 0.9rem;
    }
    
    @media (max-width:300px){
        font-size: 0.8rem;
    }
`


export const FormTextArea = styled.textarea`
    height: 5rem;
    width: 95%;
    padding: 1rem 0.5rem;
    border: none;
    resize: none;
    outline: none;
    font-size: 1rem;
    border-bottom: 1px solid #260c1a;
    background-color: transparent;
    
`

export const InputButton = styled.input`
    width: 70%;
    padding: 0.7rem 0;
    border-radius: 10px;
    font-size: 1rem;
    color: #f7f7f2;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #c5d86d;
    
    &:hover{
        color: #c5d86d;
        border: 1px solid #c5d86d;
        background-color: transparent;
    }
`

export const InputBtn = styled.div`
    margin: 2rem auto;
    align-items: center;
    text-align: center;
    width: 70%;
`