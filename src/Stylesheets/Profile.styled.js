import styled from "styled-components";

export const ProfileBody = styled.div`
  background-color: #f7f7f2;
`

export const ProfileContent = styled.div`
  padding: 1rem 4rem;
  
  h1{
    margin-bottom: 1rem;
  }
`

export const Img = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`

export const FileInput = styled.input`
  &::-webkit-file-upload-button{
    display: none;
  }
  
  &::before{
    content: 'Choose file';
    display: inline-block;
    border: 1px solid #c5d86d;
    background-color: #c5d86d;
    border-radius: 5px;
    color: #fff;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
  }
  
  &:hover::before {
    background-color: transparent;
    color: #c5d86d;
  }
  
  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`

export const LoadingSection = styled.div`
    width: 40vw;
    align-items: center;
    margin: 0 auto;
    height: 28rem;
    
    @media (max-width:600px){
        height: 28rem;
    }
`