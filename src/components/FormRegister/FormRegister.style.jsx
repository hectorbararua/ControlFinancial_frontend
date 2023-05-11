import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  

  & h1 {
    font-size: 50px;
  }
  & h2 {
    color: #fff;
    margin-bottom: 15px;
    font-size: 40px;
    text-align: center;
    margin-top: -20px;
  }
  & label {
    color: #fff;
  }

  & input {
    margin-top: 5px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: #00b3b3;
    margin-bottom: 10px;
  }

  & .inputSubmit input {
    width: 100%;
  }

  & p {
    margin-top: 10px;
    padding: 0px 25px;
    
  }
  `