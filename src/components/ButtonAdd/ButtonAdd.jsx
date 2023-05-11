import { StyledButton } from "./ButtonAdd.style"

export default function ButtonAdd(props) {

  return (
    <StyledButton type="submit" name="add">
      {props.text}
    </StyledButton>
  )

}