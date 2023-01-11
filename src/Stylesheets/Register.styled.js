import styled from "styled-components";

export const RegisterBody = styled.div`
  background-color: #f7f7f2;
  padding: 0.5rem 0 4rem;

  @media (max-width: 880px) {
    padding: 2rem 0 4rem;
  }
`;

export const RegisterContainer = styled.div`
  width: 80%;
  margin: 0.5rem auto 4rem;
  display: grid;
  grid-template-columns: 48% 48%;


  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 860px) {
    display: block;
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }

  @media (max-width: 300px) {
    width: 94%;
  }
`

export const Image = styled.img`
  width: 100%;
  min-height: 35rem;
  border-radius: 20px;
  
  @media (max-width:1300px){
    min-height: 40rem;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

export const RegisterBox = styled.div`
  background-color: white;
  padding: 1rem 1rem 1rem;
  border-radius: 20px;
  display: block;

  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
  }

  h1 {
    font-family: "Bungee", cursive;
    color: #260c1a;
    text-align: center;

    @media (max-width: 1000px) {
      font-size: 1.6rem;
    }

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 880px) {
    padding: 2rem 1rem;
  }
`;

export const RegisterColumn = styled.form`
  width: 90%;
  margin: 1rem auto 0; 

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  h3 {
    text-align: center;
    margin: 1rem auto 3rem;
  }
`;

export const ImgSection = styled.div`
  width: 40%;
  margin: 0 auto 1rem;
  
`

export const Img = styled.img`
  width: 90%;
  border-radius: 50%;
`

export const RegisterLabel = styled.label`
  text-align: left;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

export const RegisterInput = styled.input`
  border: none;
  border-bottom: 1px solid #260c1a;
  width: 90%;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  outline: none;

  &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        transition: background-color 5000s;
        -webkit-text-fill-color: none !important;
    }

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

export const PasswordDiv = styled.div`
  margin-top: 1rem;
  width: 95%;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;

    small {
      color: #c5d86d;
      font-weight: 500;

      @media (max-width: 300px) {
        font-size: 0.7rem;
      }
    }
  }
`;

export const NameSection = styled.div`
  display: grid;
  grid-template-columns: 44% 44%;
  gap: 1rem;
`;
export const NameLabel = styled.label`
  text-align: left;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

export const NameInput = styled.input`
  width: 92%;
  border: none;
  border-bottom: 1px solid #260c1a;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: none !important;
  }
`;

export const RegisterSection = styled.div`
  margin: 2rem auto;
  align-items: center;
  text-align: center;
  width: 70%;
`;

export const RegisterButton = styled.input`
  text-align: center;
  width: 80%;
  padding: 0.7rem 0;
  border-radius: 10px;
  font-size: 1rem;
  color: #f7f7f2;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #f05d23;

  &:hover {
    color: #f05d23;
    border: 1px solid #f05d23;
    background-color: transparent;
  }
`;

export const GoogleSection = styled.div`
  display: block;
  margin: 1rem auto;
  text-align: center;
  width: 100%;

  button {
    margin: 1rem 0 2rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #260c1a;
    background: none;
    cursor: pointer;

    svg {
      font-size: 1.8rem;
      margin-bottom: -0.5rem;

      @media (max-width: 600px) {
        font-size: 1.6rem;
      }

      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
    }

    span {
      font-size: 1rem;
      font-weight: 600;

      @media (max-width: 600px) {
        font-size: 0.9rem;
      }

      @media (max-width: 400px) {
        font-size: 0.85rem;
      }
    }
  }
`;
