import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

  & div {
    padding: 15px 10px;
    display: flex;
    gap: 200px;
  }

  & .value {
    padding-top: 50px;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  & .icon {
    font-size: 25px;
  }
`












/* div.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
}

div.card div {
  padding: 15px 10px;
  display: flex;
  gap: 200px;
}

p.value {
  padding-top: 50px;
  font-size: 30px;
  font-weight: bold;
}

p.icon {
  font-size: 20px;
  font-weight: 700;
} */
