import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${(prop)=> prop.backgroundColor};
  
  & a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  }

  &:hover {
    background-color: ${(prop)=> prop.hoverColor};
    transition: 0.6s;
  }

  `




